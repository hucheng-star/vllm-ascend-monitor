function npuRow(labels) {
  return `<div class="npu-row">${labels.map((label, index) => `<div class="npu" style="--i:${index}"><b>${label[0]}</b><small>${label[1]}</small></div>`).join("")}</div>`;
}

function sceneFrame(title, hint, body) {
  return `<div class="scene"><div class="scene-top"><strong>${title}</strong><span>${hint}</span></div>${body}</div>`;
}

const SCENES = {
  tp() {
    const chips = Array.from({ length: 8 }, (_, index) => [`NPU ${index}`, "Q×5 · KV×1"]);
    return sceneFrame(
      "Atlas 800 A2 · TP8",
      "Qwen2.5-14B 的一层，权重沿隐藏维切开",
      `<div class="bar-track" aria-hidden="true"><i class="bar-fill"></i></div>
       <div class="shard-row" aria-hidden="true">${Array.from({ length: 8 }, (_, index) => `<span class="shard" style="--i:${index}">1/8</span>`).join("")}</div>
       ${npuRow(chips)}
       <div class="comm-line"><span class="comm-dot"></span><em>o_proj、down_proj 之后做 HCCL all-reduce</em></div>`
    );
  },
  dp() {
    const chips = ["请求 A", "请求 B", "请求 C", "请求 D"].map((item, index) => [`DP ${index}`, item]);
    return sceneFrame(
      "数据并行",
      "每张卡一份完整副本，请求彼此独立",
      `${npuRow(chips)}<p class="scene-caption">忙的 Decode 卡暂停接收，闲的卡继续出 token。权重不因为 DP 再切一刀。</p>`
    );
  },
  cp() {
    return sceneFrame(
      "单机 · TP=1 · PCP=4",
      "只有这种绑法，PCP0–3 才是 NPU0–3",
      `<ol class="cp-steps">
         <li>
           <b>1. Prefill</b>
           <p>32K 提示按 token 切开。每张 NPU 只算自己的 8K，不是每张都看完整段。</p>
           <div class="token-strip"><span>0–8K</span><span>8K–16K</span><span>16K–24K</span><span>24K–32K</span></div>
           ${npuRow([["NPU 0", "PCP 0"], ["NPU 1", "PCP 1"], ["NPU 2", "PCP 2"], ["NPU 3", "PCP 3"]])}
         </li>
         <li>
           <b>2. KV 留在算过它的卡上</b>
           <p>每张卡只保存自己那 8K 的 K/V。整段 32K 不会在每张卡上各存一份。</p>
           <div class="kv-row"><span>KV 0–8K</span><span>KV 8K–16K</span><span>KV 16K–24K</span><span>KV 24K–32K</span></div>
         </li>
         <li>
           <b>3. Decode</b>
           <p>新 token 仍然只有 1 个。四张卡各自用自己的 KV 片段做注意力，再把部分结果合起来。</p>
           <div class="decode-row"><span class="token ok">新 token</span><span class="flow-arrow"></span><span>四段 KV</span><span class="flow-arrow"></span><span>合成输出</span></div>
         </li>
       </ol>`
    );
  },
  sp() {
    return sceneFrame(
      "序列并行 · SP MoE",
      "注意力要看全序列，专家只算自己的 token",
      `<div class="flow-row">
         <div class="flow-node" style="--i:0"><b>token 分片</b><small>每卡一段</small></div>
         <span class="flow-arrow">all-gather</span>
         <div class="flow-node" style="--i:1"><b>Attention</b><small>TP 头并行</small></div>
         <span class="flow-arrow">reduce-scatter</span>
         <div class="flow-node" style="--i:2"><b>MoE</b><small>不再重复算</small></div>
       </div>
       <p class="scene-caption">FlashComm1 把 o_proj 后面那次 all-reduce 收成按 token 的 reduce-scatter。</p>`
    );
  },
  pp(entry = {}) {
    return sceneFrame(
      entry.sceneTitle || "流水线并行",
      "前半层和后半层在不同的 rank 上",
      `<div class="pp-board">
         <div class="pp-rank"><b>PP rank 0</b><small>一组 NPU</small><em>只放前半层，例如 0–23 层</em></div>
         <span class="pp-arrow">激活</span>
         <div class="pp-rank"><b>PP rank 1</b><small>另一组 NPU</small><em>只放后半层、norm、LM head</em></div>
       </div>
       <p class="scene-caption">两段不会放到同一个 rank 上先后跑完。同一个 rank 里的多张卡是 TP，它们一起算这一段层。</p>`
    );
  },
  ep() {
    const chips = Array.from({ length: 8 }, (_, index) => [`NPU ${index}`, `专家 ${index * 32}–${index * 32 + 31}`]);
    return sceneFrame(
      "专家并行 · EP8",
      "DeepSeek-V3 的 256 个路由专家",
      `${npuRow(chips)}
       <div class="comm-line"><span class="comm-dot"></span><em>Router 选出 Top-K 后，token 用 all-to-all 送到持有专家的卡</em></div>`
    );
  },
  eplb() {
    return sceneFrame(
      "EPLB",
      "热专家换到更空的卡，A2 上不能加冗余专家",
      `<div class="npu-row eplb-row">
         <div class="npu hot"><b>NPU 2</b><small>专家 19 很热</small><i class="expert-chip">E19</i></div>
         <div class="npu"><b>NPU 6</b><small>还有空位</small></div>
       </div>
       <p class="scene-caption">先记负载，再算新的放置，然后逐层搬权重。搬的时候所有请求会短暂停一下。</p>`
    );
  },
  graph() {
    return sceneFrame(
      "图模式",
      "先融合、再录制，之后每步只重放",
      `<div class="flow-row">
         <div class="flow-node" style="--i:0"><b>FX</b><small>算子图</small></div>
         <span class="flow-arrow"></span>
         <div class="flow-node" style="--i:1"><b>Npugraph_ex</b><small>编译期融合</small></div>
         <span class="flow-arrow"></span>
         <div class="flow-node" style="--i:2"><b>ACLGraph</b><small>torch.npu.NPUGraph</small></div>
         <span class="flow-arrow"></span>
         <div class="flow-node replay" style="--i:3"><b>Replay</b><small>不再逐个下发</small></div>
       </div>`
    );
  },
  spec() {
    return sceneFrame(
      "投机解码",
      "草稿一次提出多个 token，目标模型验收",
      `<div class="token-line">
         <span class="token ok">t+1</span>
         <span class="token ok">t+2</span>
         <span class="token bad">t+3</span>
         <span class="token drop">t+4</span>
       </div>
       <p class="scene-caption">对上的留下，第一个对不上的丢掉，后面的草稿也一起作废，从这里重算。</p>`
    );
  },
  flow(entry) {
    const nodes = entry.nodes || ["输入", "特性", "输出"];
    return sceneFrame(
      entry.sceneTitle || "数据怎么走",
      entry.sceneHint || "",
      `<div class="flow-row">${nodes.map((node, index) => `${index ? '<span class="flow-arrow"></span>' : ""}<div class="flow-node" style="--i:${index}"><b>${node[0]}</b><small>${node[1] || ""}</small></div>`).join("")}</div>`
    );
  },
};

window.mountPrincipleScene = function mountPrincipleScene(host, entry) {
  const draw = SCENES[entry.scene] || SCENES.flow;
  host.innerHTML = draw(entry);
};

window.FEATURE_PRINCIPLES = {
  "fine-tp": {
    scene: "tp",
    paragraphs: [
      "标准张量并行把一层的线性权重沿隐藏维切开。vLLM-Ascend 不另写一套切分公式，列并行和行并行沿用 vLLM，集合通信在昇腾上走 HCCL。一台 Atlas 800 A2 有 8 张 NPU 时，--tensor-parallel-size 8 就是每张卡持有 1/8 的矩阵。",
      "列并行切的是输出维，QKV、gate、up 属于这一类，输出本来就是各卡自己的一块，不必马上通信。行并行切的是输入维，o_proj 和 down_proj 属于这一类，各卡先算出部分和，再用 all-reduce 收成完整隐藏向量。",
      "细粒度张量并行是另一条轴。它不改上面的 TP 组，而是在数据并行组上，给 embedding、LM head、o_proj、MLP 各自再设一个切分宽度，专门少放一点权重。官方在 32 张 A2（每张 64 GB）上测 DeepSeek-R1-W8A8，四项一起开，每卡大约少 9.72 GB。o_proj 和 MLP 只能在 PD 分离的 Decode 实例、图模式、tensor_parallel_size 为 1 时打开。",
    ],
    points: [
      "Qwen2.5-14B 的 40 个注意力头、8 个 KV 头、13824 的 intermediate 都能被 8 整除，所以 TP8 时每卡 5 个 Q 头、1 个 KV 头，KV cache 也按头切开，不是每卡一份全量。",
      "头数不能整除 TP 时，vLLM 会把不够分的 KV 头复制到多张卡上，显存不会按理想的 1/8 下降。Qwen2.5-7B 有 28 个头，不能做 TP8。",
      "embedding / LM head 的细粒度切分每次都按固定长度做 all-gather，Prefill 和 Decode 都能走。o_proj / MLP 的通信量跟着本步 token 数变，所以只支持 Decode 形态的图重放。",
    ],
    exampleTitle: "Qwen2.5-14B，BF16，一台 A2 做 TP8，每一层每张卡放多少权重",
    example: [
      ["Q", "5 头 × 128 维，6.25 MiB"],
      ["K / V", "各 1 个 KV 头，各 1.25 MiB"],
      ["o_proj", "6.25 MiB，之后 all-reduce"],
      ["gate / up / down", "各 16.875 MiB，down 之后 all-reduce"],
      ["这一层合计", "65.625 MiB，整层未切分是 525 MiB"],
      ["48 层线性层", "每卡约 3.08 GiB，不含 KV cache"],
      ["词表 152064", "按词表切时每卡约 185.6 MiB"],
    ],
    code: "vllm serve Qwen/Qwen2.5-14B-Instruct \\\n  --tensor-parallel-size 8",
    applies: "标准 TP 的命令不绑死小版本，只要头数能被 TP 整除。细粒度 TP 只给 MoE；o_proj / MLP 只在 PD 分离的 Decode 实例、图模式、tensor_parallel_size 为 1 时打开。9.72 GB 是在 32 张 Atlas A2（每张 64 GB）上测的。",
    notes: [
      { level: "key", text: "**Qwen2.5-7B 有 28 个注意力头，不能做 TP8。** 14B 的 40 个头可以，每卡 5 个 Q 头、1 个 KV 头。" },
    ],
    sources: [
      ["vLLM 并行说明", "https://docs.vllm.ai/en/latest/serving/parallelism_scaling.html"],
      ["Megatron-LM", "https://arxiv.org/abs/1909.08053"],
    ],
  },
  cp: {
    scene: "cp",
    paragraphs: [
      "上下文并行切的是序列，不是隐藏维。**PCP0–3 只有在 TP=1、PP=1、单机并且按顺序绑卡时，才等于 NPU0–3。** PCP 编号是并行组里的 rank。上面这张图就是这种绑法：4 个进程占 4 张 NPU。如果 TP=2 而且 PCP=4，进程数是 8，一个 PCP rank 自己还带两张做 TP 的 NPU，PCP0 就不再是单独一张卡。",
      "Prefill 阶段，一条长提示的 token 分到这些 rank 上，各自算自己那一段，用来缩短首 token。PCP 会增加进程：world size 要乘上 prefill_context_parallel_size。",
      "**Decode 阶段分片存放的是历史 KV，不是把新 token 再切成四段。** 生成时每步通常只有 1 个新 token。DCP 让这段历史的 K/V 沿序列拆开，每张卡只留自己的那一段；注意力要读到其他段，再把部分结果合起来。单独开 DCP 时它复用已有的 TP rank，不再加进程。MLA、SFA 可以让 DCP 等于 PCP，或等于 PCP 乘 TP；GQA 叠在一起时只支持 DCP 等于 PCP。",
    ],
    points: [
      "PCP 目前只在 ModelRunner V2 上，而且不能和 FULL 图一起用。PD 分离时 PCP 只开在 Prefill 侧。",
      "草稿模型在每个 PCP rank 上各放一份，逻辑 PCP 是 1；目标模型才按 PCP 拓扑跑。",
      "DSA-CP 是旧路径，只留在 ModelRunner V1，和 PCP 不能同时开。",
    ],
    support: {
      note: "支持矩阵没有按模型名列出 PCP。官方按注意力后端区分。下表是 A2/A3 上 DCP 能否和 PCP 叠在一起；PCP 本身都要求 ModelRunner V2，并且 **FULL 图不支持**。",
      columns: ["注意力", "PCP", "和 DCP 叠在一起"],
      rows: [
        ["MLA", "可以", "DCP = PCP，或 DCP = PCP × TP"],
        ["GQA", "可以", "只支持 DCP = PCP"],
        ["SFA", "可以", "DCP = PCP，或 DCP = PCP × TP"],
        ["DSA / DSA V4.1", "可以", "不能再同时开 DSA-CP"],
      ],
    },
    exampleTitle: "32K 提示，TP=1，PCP=4，单机",
    example: [
      ["PCP0 / NPU0", "Prefill token 0–8K，KV 也只留这一段"],
      ["PCP1 / NPU1", "8K–16K"],
      ["PCP2 / NPU2", "16K–24K"],
      ["PCP3 / NPU3", "24K–32K"],
      ["Decode 的新 token", "仍是 1 个，四张卡用各自的 KV 片段再合结果"],
    ],
    applies: "这条命令要求 ModelRunner V2，不绑死某一次小版本。DCP 的支持表写的是 A2/A3 和 950PR、950DT。图里的 NPU 对应关系只在 TP=1 时成立。",
    code: "export VLLM_USE_V2_MODEL_RUNNER=1\nvllm serve <model> \\\n  --tensor-parallel-size 1 \\\n  --prefill-context-parallel-size 4 \\\n  --enforce-eager",
    notes: [
      { level: "warn", text: "**v0.23.0 的 release note 写明 PP 和 PCP 不能一起开。** main 上的 RFC 仍把 PCP+PP 放在默认不支持里。", refs: [{ kind: "Issue", n: 12622, url: "https://github.com/vllm-project/vllm-ascend/issues/12622" }] },
      { level: "key", text: "ModelRunner V1 继续拒绝 PCP。PCP 从 V1 拿掉是单独的改动。", refs: [{ kind: "PR", n: 12592, url: "https://github.com/vllm-project/vllm-ascend/pull/12592" }] },
    ],
    sources: [["vLLM Context Parallel", "https://docs.vllm.ai/en/latest/serving/context_parallel_deployment/"]],
  },
  sp: {
    scene: "sp",
    paragraphs: [
      "序列并行切的是 token 维。注意力的 o_proj 以 TP all-reduce 结束，结果会在每张 TP 卡上复制一份。如果这些重复 token 直接送进专家，专家并行就会把同一批 token 算很多遍。",
      "vLLM-Ascend 的 SP MoE 用 FlashComm1 把这条边界改掉：进入注意力前 all-gather 把 token 收齐，注意力仍按 TP 的头来切；出来后 reduce-scatter，每张卡只留下自己的 token，再做 RMSNorm、Router 和 all-to-all。昇腾上 DP 可以是 1，这和上游 vLLM 要求 DP 大于 1 不一样。",
    ],
    points: [
      "要同时满足 tensor_parallel_size > 1、enable_expert_parallel，以及 additional_config.enable_flashcomm1。",
      "支持的设备上还可以打开 fuse_gemm_comms，把无 bias 的行并行矩阵乘和 reduce-scatter 合成一个算子，TP 为 2、4、8 且数据类型是 BF16 或 FP16 时才会融合。",
    ],
    code: "vllm serve <moe-model> \\\n  --tensor-parallel-size 8 \\\n  --enable-expert-parallel \\\n  --additional-config '{\"enable_flashcomm1\": true}'",
    applies: "只适用于 MoE，并且 TP 大于 1。昇腾上 DP 可以是 1。fuse_gemm_comms 还要求 TP 为 2、4 或 8，数据类型是 BF16 或 FP16。",
    notes: [
      { level: "warn", text: "**v0.23.0 的支持矩阵把 Sequence Parallelism 标成不可用**，用过它的部署要改走 FlashComm1。", refs: [{ kind: "PR", n: 12860, url: "https://github.com/vllm-project/vllm-ascend/pull/12860" }] },
    ],
    sources: [],
  },
  pp: {
    scene: "pp",
    paragraphs: [
      "**前半层和后半层不在同一个 rank 上跑。** `--pipeline-parallel-size 2` 把进程分成两组：PP rank 0 只持有前面连续的若干层，PP rank 1 只持有后面的层、final norm 和 LM head。rank 0 算完，把这一步的激活值传给 rank 1。传过去的是激活，不是把后半层的权重也放到 rank 0 上再接着算。",
      "同一个 PP rank 上如果还有多张卡，那是一个 TP 组。它们把这一段层再沿隐藏维切开，跑的是同一段层。不是这一组里一张卡跑前半、另一张跑后半。",
      "两台 8 卡 A2 做成 TP8 × PP2 时：第一台 8 张卡全是 PP rank 0，只放前半层；第二台 8 张卡全是 PP rank 1，只放后半层。单机最小例子是 2 张 NPU、TP=1、PP=2：NPU0 是 rank 0，NPU1 是 rank 1。通信走 HCCL。微批次用来填前一段在等后一段时的空泡。",
    ],
    points: [
      "不是每个模型都实现了 PP。下面的表只收录支持矩阵里写明了 Pipeline Parallel 的模型。",
      "Atlas 300I DUO 的表没有 Pipeline Parallel 这一列，不能当成已经支持。",
    ],
    support: {
      note: "来自 main 的 Supported Models。✅ 支持，🔵 实验，🔴 不再维护，🟡 未验证，❌ 不支持。矩阵里这一列是空的模型没有画进来，包括 A2/A3 上的 DeepSeek V4 和多数 Qwen3。",
      columns: ["机型", "模型", "PP", "模型状态"],
      rows: [
        ["A2/A3", "DeepSeek V3/3.1", "✅", "🔴"],
        ["A2/A3", "DeepSeek V3.2", "✅", "🔴"],
        ["A2/A3", "DeepSeek R1", "✅", "🔴"],
        ["A2/A3", "GLM-5", "✅", "🔴"],
        ["A2/A3", "GLM-5.1", "✅", "🔵"],
        ["A2/A3", "GLM-5.2", "✅", "🔵"],
        ["A2/A3", "GLM-5.3", "✅", "✅"],
        ["A2/A3", "GLM-5.3-Flash", "✅", "✅"],
        ["A2/A3", "MiniMax-M3", "✅", "✅"],
        ["A2/A3", "MiniMax-M2.5/2.7", "🟡", "🔴"],
        ["A2", "Qwen2.5-Math-RM-72B", "🟡", "🔵"],
        ["A2/A3", "DeepSeek-V4-Flash-Vision", "🟡", "🔵"],
        ["A2/A3", "DeepSeek-V4.1-Flash", "❌", "✅"],
        ["950DT", "DeepSeek V4-Flash", "✅", "✅"],
        ["950DT", "DeepSeek V4-Pro", "✅", "✅"],
        ["950DT", "GLM-5.3-Flash", "✅", "🔵"],
        ["950DT", "MiniMax-M3", "✅", "✅"],
        ["950DT", "Step-5-Preview", "✅", "🔵"],
      ],
    },
    exampleTitle: "48 层模型怎么分到两个 rank",
    example: [
      ["PP rank 0", "大约 0–23 层，具体切分还可以再配"],
      ["PP rank 1", "大约 24–47 层，外加 norm 和 LM head"],
      ["两台 8 卡 A2", "第一台整组是 rank 0，第二台整组是 rank 1"],
      ["单机 2 张 NPU", "NPU0 = rank 0，NPU1 = rank 1，此时 TP=1"],
    ],
    applies: "命令本身不绑死小版本，也不要求必须是 8 卡。TP8 × PP2 需要 16 张 NPU，通常是两台 8 卡机器。单机 PP2 最少 2 张 NPU。",
    code: "vllm serve /path/to/model \\\n  --distributed-executor-backend mp \\\n  --tensor-parallel-size 8 \\\n  --pipeline-parallel-size 2",
    notes: [
      { level: "warn", text: "**v0.23.0 的 release note：PP 和 PCP 不能一起开。** 更新的 RFC 仍把这个组合放在默认不支持里。", refs: [{ kind: "Issue", n: 12622, url: "https://github.com/vllm-project/vllm-ascend/issues/12622" }] },
    ],
    sources: [["Supported Models", "https://docs.vllm.ai/projects/ascend/en/latest/user_guide/support_matrix/supported_models.html"]],
  },
  cpp: {
    scene: "pp",
    sceneTitle: "动态切块流水线",
    paragraphs: [
      "动态切块流水线并行仍是按层分段，但 Prefill 侧不会用固定的 chunk。它按实测耗时选择切块大小，让各段更齐，减少长序列在某一段上堵住后面所有请求的时间。",
      "切块变了，段与段之间传递的激活长度也会变。目标是把首 token 时间压下来，而不是改变每一层内部的张量切分。",
    ],
    points: [
      "它解决的是流水线气泡和长 Prefill 的排队。权重仍然按 PP stage 放置，前半层和后半层仍在不同 rank 上。",
      "能开 PP 的模型见流水线并行的支持范围表。v0.23.0 的 release note 里，PP 不能和 PCP 一起开。",
    ],
    nodes: [["长序列", "P 节点"], ["动态切块", "按实测"], ["各段", "对齐后下传"]],
  },
  "large-ep": {
    scene: "ep",
    paragraphs: [
      "数据并行和专家并行切的东西不同。DP 让不同的卡服务不同的请求，每条请求看到的是同一套层；EP 把路由专家拆到不同的卡上，一条请求的 token 要按 Router 的选择送到对应的卡。",
      "大规模专家并行把 Prefill 和 Decode 分成两套机器。Prefill 机器把提示算完，Decode 机器上专家铺开，由分布式 DP 服务决定请求落在哪一组。DeepSeek-V3 公开配置是 256 个路由专家、每 token 选 8 个。EP8 且没有冗余时，每张卡放 32 个专家。",
      "A2 不支持冗余专家。EPLB 里的 num_redundant_experts 在 A2 上必须是 0；文档里非 0 的例子只适用于 A3 或 950 系列。",
    ],
    points: [
      "all-to-all 的量取决于本步有多少 token、每个 token 选几个专家，以及专家是不是刚好在本卡。",
      "共享专家通常各卡都留一份，只有路由专家按 EP 切。",
    ],
    code: "vllm serve <moe-model> \\\n  --data-parallel-size 8 \\\n  --enable-expert-parallel",
    applies: "专家并行只对带路由专家的模型有意义。A2 不能加冗余专家。命令不绑死小版本。",
    support: {
      note: "A2/A3 文本模型里，Expert Parallel 标了 ✅ 的如下。空着的没有列入。",
      columns: ["模型", "EP", "模型状态"],
      rows: [
        ["DeepSeek V4-Flash / V4-Pro", "✅", "🔵"],
        ["DeepSeek V3/3.1、V3.2、R1", "✅", "🔴"],
        ["Qwen3-30B-A3B、Coder-30B-A3B", "✅", "✅ / 🔵"],
        ["Qwen3-235B-A22B", "✅", "🔴"],
        ["GLM-4.x、GLM-5", "✅", "🔴"],
        ["GLM-5.1、GLM-5.2", "✅", "🔵"],
        ["GLM-5.3", "✅", "✅"],
        ["MiniMax-M2.5/2.7", "✅", "🔴"],
      ],
    },
    sources: [],
  },
  eplb: {
    scene: "eplb",
    paragraphs: [
      "专家放置如果一直不变，热门专家会把少数卡打满，别的卡在等。EPLB 记录一段窗口里的专家热度，算出新的放置，再把专家权重要搬过去。搬权重时请求会一起停一下，所以窗口和间隔要按工作负载选，不能每步都搬。",
      "Model Runner V2 走上游 EPLB 控制器，昇腾默认策略是 STAIR，权重搬运优先用 HIXL，没有可用的 HIXL 时退回 Gloo。V2 只做异步搬运。Model Runner V1 仍保留动态、录制、静态三种旧模式，动态模式还要设置 DYNAMIC_EPLB。",
    ],
    points: [
      "A2 上 num_redundant_experts 必须为 0。专家总数加冗余数必须能被 EP 大小整除。",
      "Prefill 输入短于 1024，或者每卡专家太多、每卡 token 太少时，官方不建议开，收益可能盖不住停顿。",
      "收集热度可以只看 Prefill、只看 Decode，或两边都看。V2 的字段是 load_collection_phase，V1 的字段是 eplb_heat_collection_stage，两者不要混用。",
    ],
    code: "export VLLM_USE_V2_MODEL_RUNNER=1\nvllm serve Qwen/Qwen3-30B-A3B \\\n  --enable-expert-parallel \\\n  --enable-eplb \\\n  --eplb-config.num_redundant_experts 0",
    applies: "**A2 上 num_redundant_experts 必须为 0。** 非 0 只适用于支持冗余专家的 A3 或 950。这条示例是 ModelRunner V2，不要和 V1 的 DYNAMIC_EPLB 混用。",
    notes: [
      { level: "warn", text: "950PR 和 950DT 不能把 EPLB 用在 W4A8MXFP4、W4A16MXFP4 上。W8A8 在 A2/A3 的 V1 路径上有验证。" },
    ],
    sources: [],
  },
  dyntra: {
    scene: "dp",
    paragraphs: [
      "Decode 侧的数据并行里，每张卡各自生成自己的请求。请求长短不一样时，有的卡队列很长，有的卡在等。DyntraLB 让这些 DP 卡互相看负载：忙的卡暂停再接收请求，闲的卡不再空转。",
      "这里没有把权重再切一次。每张 DP 卡上的层是完整的；如果同时开了专家并行，切掉的是专家，不是这套负载均衡本身。",
    ],
    points: ["它调的是 Decode 请求的准入，不改 PCP 那种按 token 切序列的方式。"],
    nodes: [["DP 忙", "暂停准入"], ["DP 闲", "继续生成"], ["负载", "卡间互相看"]],
  },
  graph: {
    scene: "graph",
    paragraphs: [
      "图模式把一步 Decode 里反复出现的算子收成一张图。FULL 和 FULL_DECODE_ONLY 会先用 Npugraph_ex 在编译期做融合，再用 ACLGraph，也就是 torch.npu.NPUGraph，把下发过程录下来。下一步形状还对得上时，直接重放，CPU 不必再逐个提交算子。",
      "XliteGraph 是另一条可选路径，只覆盖部分模型。PCP 还不能用 FULL 图，文档给出的可用选择是 eager、PIECEWISE、FULL_AND_PIECEWISE 或 FULL_DECODE_ONLY。投机解码的 FULL 图里，每种 batch 的捕获长度要是 num_speculative_tokens + 1 的整数倍。",
    ],
    points: [
      "图能重放的前提是形状落在捕获过的尺寸里。超出捕获范围的步会回到另一条路径，或者按配置直接报错。",
      "attention_v1 可以在混合的 Prefill/Decode batch 上跑图；MLA、SFA 以及它们的上下文并行版本限制更多，通常要求 batch 更整齐。",
    ],
    code: "vllm serve <model> \\\n  --compilation-config '{\"cudagraph_mode\": \"FULL_DECODE_ONLY\"}'",
    applies: "命令不单独绑定机型。PCP 场景不能用 FULL 图，要用 PIECEWISE、FULL_AND_PIECEWISE 或 FULL_DECODE_ONLY。",
    sources: [],
  },
  speculative: {
    scene: "spec",
    paragraphs: [
      "投机解码用一个便宜的草稿先猜出后面几个 token，再让目标模型一次核对。核对用的是拒绝采样：和目标模型分布一致的前缀留下，第一个被拒绝的位置之后全部丢掉，从那里重新生成。猜得越准，同样一次目标模型前向能收下的 token 越多。",
      "vLLM-Ascend 文档里的草稿方法包括 n-gram、EAGLE、EAGLE-3、MTP、DFlash、DSpark 和独立草稿模型。草稿自己的 tensor parallel 只能是 1，或者和目标模型一样大。EAGLE 要求草稿 TP 为 1。",
    ],
    points: [
      "和 PCP 一起用时，目标模型按 PCP 拓扑跑，草稿在每个 PCP rank 上复制一份，逻辑 PCP 为 1。",
      "DeepSeek 的 MTP 只暴露一层权重。num_speculative_tokens 大于 1，尤其是大于等于 3 时，官方写明精度和性能都没有保证。",
    ],
    code: "--speculative-config '{\"method\": \"eagle3\", \"model\": \"<draft>\", \"num_speculative_tokens\": 3}'",
    applies: "草稿的 tensor parallel 只能是 1，或者和目标模型一样大。EAGLE 要求草稿 TP 为 1。不是每个模型都标了投机解码。",
    support: {
      note: "A2/A3 文本模型里，Speculative Decoding 标了 ✅ 的如下。这一列空着的，例如 Qwen3-Dense、Qwen3-235B、Qwen3-Next，没有列入。",
      columns: ["模型", "投机解码", "模型状态"],
      rows: [
        ["DeepSeek V4-Flash / V4-Pro", "✅", "🔵"],
        ["DeepSeek V3/3.1、V3.2、R1", "✅", "🔴"],
        ["Qwen3-30B-A3B", "✅", "✅"],
        ["Qwen3-Coder-30B-A3B", "✅", "🔵"],
        ["GLM-4.x、GLM-5", "✅", "🔴"],
        ["GLM-5.1、GLM-5.2", "✅", "🔵"],
        ["GLM-5.3", "✅", "✅"],
        ["MiniMax-M2.5/2.7", "✅", "🔴"],
      ],
    },
    notes: [
      { level: "key", text: "**DeepSeek 的 MTP 只公开一层权重。** num_speculative_tokens 大于 1，尤其是大于等于 3 时，官方写明精度和性能都没有保证。" },
    ],
    sources: [],
  },
  mtp: {
    scene: "spec",
    paragraphs: [
      "多 Token 预测不用另一个完整草稿模型。目标模型自己多出来的 MTP 层，一次对后面几个位置给出提议，再由目标模型的主体核对，对的一次收下。",
      "DeepSeek 的 MTP 在权重上只公开了一层。提议长度大于 1 时，官方明确说精度和性能都不可靠，大于等于 3 更明显。FULL 图捕获时，每个 batch 的长度还得是提议长度加 1 的整数倍。",
    ],
    points: ["和上下文并行一起开时，MTP 作为草稿，仍然是每张 PCP 卡上一份、逻辑 PCP 为 1。"],
    code: "--speculative-config '{\"method\": \"mtp\", \"num_speculative_tokens\": 1}'",
    applies: "MTP 取决于模型自己有没有 MTP 层，不是一张通用命令打在所有模型上。建议先用 1 个投机 token。",
    notes: [
      { level: "warn", text: "FULL 图里，每种 batch 的捕获长度要是 **num_speculative_tokens + 1 的整数倍**。" },
    ],
    sources: [],
  },
  kvpp: {
    scene: "flow",
    sceneTitle: "KV 流水线并行",
    sceneHint: "历史 KV 按层拆开，不再每卡一份",
    nodes: [["层 0–n", "卡 0"], ["下一组层", "卡 1"], ["更长上下文", "同样的 HBM"]],
    paragraphs: [
      "普通张量并行已经按注意力头把 KV 切开，但每一层的那部分 KV 仍会留在持有该头的卡上。KVPP 再沿层把历史 KV 拆开，不同的卡保存不同层的历史，同样容量就能放下更长的上下文。",
      "这一项还是实验特性。读某一层的历史时要到持有那一层的卡上取，省下来的是显存，加上去的是跨卡读取。",
    ],
    points: [],
  },
  fa3: {
    scene: "flow",
    sceneTitle: "Flash Attention 3",
    sceneHint: "Q、K、V 留在一个融合核里",
    nodes: [["Q K V", "分块读入"], ["FA3 核", "片上完成注意力"], ["O", "写回"]],
    paragraphs: [
      "标准注意力会把分数矩阵整块写回 HBM。Flash Attention 按块把 Q、K、V 读进片上存储，在核里做完 softmax 和乘 V，只把输出写回去。Flash Attention 3 是这条融合路径在新硬件上的实现，推理 Decode 和训练侧共用同一套计算，避免两边数值对不上。",
    ],
    points: ["它不改变 TP 怎么切头。每张卡仍然只拿自己的那几个头，只是这几个头的注意力不再拆成很多个小算子。"],
  },
  "batch-invariance": {
    scene: "flow",
    sceneTitle: "批不变性",
    sceneHint: "单独一条和拼进大批，结果保持一致",
    nodes: [["Batch 1", "单独跑"], ["Batch N", "和别人拼批"], ["输出", "同一结果"]],
    paragraphs: [
      "归约顺序和除法会让同一条请求在不同 batch 里得到不同的比特。批不变性把这些归约固定下来，使一条请求无论单独执行还是跟别的请求拼在一起，输出都一致。这是对齐和复现时要用的开关，不是用来提高吞吐的切分。",
    ],
    points: [],
  },
  "runtime-guard": {
    scene: "flow",
    sceneTitle: "运行时防护",
    sceneHint: "Decode 时盯住重复和异常 logits",
    nodes: [["Decode", "本步输出"], ["检测", "重复 / NaN"], ["报告", "JSON，必要时拷 KV"]],
    paragraphs: [
      "防护挂在 Decode 循环上。它看重复、乱码和异常 logits，触发后写出报告；需要时把当时的 KV 拷出来，方便事后看是哪一段上下文把生成带偏的。",
    ],
    points: [],
  },
  "cpu-binding": {
    scene: "flow",
    sceneTitle: "CPU 绑核",
    sceneHint: "NPU worker 固定在近处的核上",
    nodes: [["NUMA 0", "CPU"], ["绑在一起", "不再迁移"], ["NPU 0", "worker"]],
    paragraphs: [
      "每张 NPU 的 worker 如果在 CPU 核之间来回迁移，就会多一次跨 NUMA 的内存访问。绑核把这个 worker 固定到离它那张 NPU 更近的核上。开关是 enable_cpu_binding。",
    ],
    points: [],
  },
  qos: {
    scene: "flow",
    sceneTitle: "AI QoS",
    sceneHint: "算子、集合通信、KV 传输走不同虚拟通道",
    nodes: [["AIV", "高优先级"], ["集合通信", "高优先级"], ["KV 传输", "可让路"]],
    paragraphs: [
      "昇腾上算子下发、集合通信和 KV 传输会抢同一条链路。AI QoS 把它们放进不同的虚拟通道，交换机按优先级先放行重要流量，避免 KV 拷贝把本步的集合通信堵住。",
    ],
    points: [],
  },
  sleep: {
    scene: "flow",
    sceneTitle: "休眠",
    sceneHint: "空闲时权重离开 HBM",
    nodes: [["HBM 权重", "正在服务"], ["Level 1", "权重到 CPU"], ["KV", "丢掉"]],
    paragraphs: [
      "实例闲下来以后，休眠把权重从 NPU 内存挪到 CPU，并丢掉 KV。下次要推理时再把权重请回来。Level 1 是文档里的这一档：省的是 HBM，代价是唤醒时要再搬一次权重。",
    ],
    points: ["和 EPLB 的权重搬迁不是一回事。休眠搬的是整模型的空闲副本，EPLB 搬的是单个专家。"],
  },
  "batch-job": {
    scene: "flow",
    sceneTitle: "批量任务调度",
    sceneHint: "长任务占住时间轴，短任务填空档",
    nodes: [["长任务", "先占住"], ["短任务", "填空档"], ["KV", "提前留出"]],
    paragraphs: [
      "离线批处理如果按到达顺序跑，一条长任务会把后面的短任务全部挡住。这个调度器先安排长任务，再用短任务填它的空档，同时提前留出 KV，避免跑到一半才发现缓存不够。",
    ],
    points: [],
  },
  "short-first": {
    scene: "flow",
    sceneTitle: "短请求优先 Prefill",
    sceneHint: "短提示先做完，长提示排在后面",
    nodes: [["短提示", "先 Prefill"], ["长提示", "随后"], ["TTFT", "短请求更快"]],
    paragraphs: [
      "Prefill 一次要看完整段提示。一条很长的提示会占住整步，后面的短请求只能等。短请求优先把短提示先做完，短请求的首 token 不必等那条长提示。",
    ],
    points: [],
  },
  "kv-offload": {
    scene: "flow",
    sceneTitle: "KV 卸到 CPU",
    sceneHint: "不活跃的块离开 HBM，用到再拉回",
    nodes: [["HBM", "正在用的块"], ["CPU", "不活跃的块"], ["拉回", "命中后异步拷"]],
    paragraphs: [
      "Decode 时大部分 KV 块这一步用不到。卸载把不活跃的块放到 CPU，HBM 留给当前块。再次用到时异步拷回来，而不是把整段提示重新 Prefill。连接器是 OffloadingConnector。",
    ],
    points: [],
  },
  "kv-pool": {
    scene: "flow",
    sceneTitle: "KV 缓存池",
    sceneHint: "前缀算过一次，别的实例直接读",
    nodes: [["Prefill", "写入"], ["Ascend Store", "按前缀存放"], ["Decode", "命中则不再算"]],
    paragraphs: [
      "Ascend Store 把 Prefill 产生的 KV 放到实例外面的池子里。另一个实例遇到相同前缀时直接读，不必再算一遍。和 PCP 一起用时，文档只支持 AscendStoreConnector，并且 use_layerwise 要是 false。",
    ],
    points: [],
  },
  "layerwise-kv": {
    scene: "flow",
    sceneTitle: "逐层与稀疏卸载",
    sceneHint: "Prefill 按层送出，Decode 只留有用的块",
    nodes: [["Prefill", "一层一卸"], ["稀疏", "只留会用到的"], ["Decode", "接着生成"]],
    paragraphs: [
      "逐层卸载不等整段 Prefill 结束才传 KV，算完一层就卸一层。稀疏路径再进一步：Decode 不保留所有历史块，只留稀疏注意力真正会访问的那些。",
    ],
    points: [],
  },
  "encoder-cache": {
    scene: "flow",
    sceneTitle: "编码器缓存",
    sceneHint: "视觉或音频的编码结果放进 CPU 共享内存",
    nodes: [["Encoder", "第一次算"], ["CPU mmap", "按输入保存"], ["下次", "直接命中"]],
    paragraphs: [
      "同一张图或同一段音频如果反复进模型，编码器不必每次重跑。结果放在 CPU 共享内存里，下一次按输入命中。这和文本 KV 的前缀缓存是两条缓存。",
    ],
    points: [],
  },
  "preempt-offload": {
    scene: "flow",
    sceneTitle: "抢占卸载",
    sceneHint: "被挤掉之前先把 KV 拷走",
    nodes: [["HBM KV", "正在 Decode"], ["CPU", "抢占前拷走"], ["恢复", "拷回，不重做 Prefill"]],
    paragraphs: [
      "调度器把一条 Decode 请求挤掉时，如果 KV 直接丢弃，恢复就要退回 Prefill 重算。抢占卸载在挤掉之前把 KV 拷到 CPU，恢复时拷回来。",
      "细粒度 TP 的 o_proj / MLP 要求 Decode 实例使用这个连接器，并且和 PD 传输连接器一起放进 MultiConnector。原因是被抢占的请求不能退回 Prefill 节点重算，重算会让 KV 精度对不上。",
    ],
    points: [],
  },
  lmcache: {
    scene: "flow",
    sceneTitle: "LMCache",
    sceneHint: "多轮对话复用已经算过的前缀",
    nodes: [["长前缀", "第一次"], ["LMCache", "存下 KV"], ["续写", "跳过重算"]],
    paragraphs: [
      "LMCache 在昇腾上保存可复用的 KV。多轮对话前面的长前缀如果还在，下一轮从缓存接着写，而不是从第一个 token 重新 Prefill。",
    ],
    points: [],
  },
  ucm: {
    scene: "flow",
    sceneTitle: "统一缓存",
    sceneHint: "HBM、本机内存、共享存储三级",
    nodes: [["HBM", "当前计算"], ["DRAM", "本机热缓存"], ["NFS / 3FS", "换实例还在"]],
    paragraphs: [
      "UCM 把 KV 从 HBM 落到本机内存，再落到共享存储。进程重启或请求换到另一个实例之后，前缀仍然能读到，不必只靠这一张卡上的 HBM。",
    ],
    points: [],
  },
  mooncake: {
    scene: "flow",
    sceneTitle: "Mooncake 逐层",
    sceneHint: "Prefill 算完一层，Decode 就开始收这一层",
    nodes: [["P 层 N", "算出 KV"], ["传输", "只传这一层"], ["D 层 N", "接着用"]],
    paragraphs: [
      "PD 分离如果等 Prefill 把所有层的 KV 都算完再传，Decode 侧会空等。Mooncake 的逐层路径让 Prefill 每算完一层就把该层 KV 送出去，传输和后面几层的计算叠在一起。",
    ],
    points: ["上下文并行的 PD 分离文档把 MooncakeConnector 列为可用的 KV 连接器。"],
  },
  "mooncake-hybrid": {
    scene: "flow",
    sceneTitle: "混合注意力的逐层传输",
    sceneHint: "同一层里的几组 KV 分开走",
    nodes: [["滑窗 KV", "一组"], ["压缩 KV", "一组"], ["Indexer", "一组"]],
    paragraphs: [
      "有些模型在同一层里同时有滑窗 KV、压缩 KV 和 indexer。逐层传输不能把它们揉成一块。Mooncake 的混合注意力路径按组传输，每一组仍跟着自己那一层走。",
    ],
    points: [],
  },
  netloader: {
    scene: "flow",
    sceneTitle: "网络加载",
    sceneHint: "已经在 NPU 上的权重大块直接传给新实例",
    nodes: [["已加载的 NPU", "权重在 HBM"], ["HCCL", "大块传输"], ["新实例", "跳过读盘"]],
    paragraphs: [
      "新实例如果从磁盘把全部权重再读一遍，加载时间会按模型大小线性涨。Netloader 让一台已经加载好的 NPU 把权重大块直接传给新实例。",
    ],
    points: [],
  },
  rfork: {
    scene: "flow",
    sceneTitle: "种子实例",
    sceneHint: "找一个结构相同的实例，再拷权重",
    nodes: [["新实例", "结构就绪"], ["Planner", "匹配种子"], ["Seed", "拷贝权重"]],
    paragraphs: [
      "RFork 不自己决定从哪台机器拷。新实例先把自己的结构交给规划器，规划器找一个结构相同、已经加载好的种子实例，再从种子上把权重拷过来。",
    ],
    points: [],
  },
  quant: {
    scene: "flow",
    sceneTitle: "量化",
    sceneHint: "同样的矩阵，每张卡上的字节数下降",
    nodes: [["BF16 权重", "2 字节"], ["W8A8 / W4A8", "1 字节或更少"], ["NPU", "放下更大的模型"]],
    paragraphs: [
      "量化改的是每个权重和激活的字节数，不改 TP 或 EP 的切分方式。W8A8 把权重量成 8 位、激活也按 8 位算，一张卡就能放下原来放不下的模型。切分之后每卡的字节数大约再按 TP 或 EP 除一次。",
      "EPLB 能不能搬专家，取决于这种量化有没有完整的专家权重布局。官方表里 W8A8 可以，若干 MXFP 组合在 A2 上不可以。",
    ],
    points: ["细粒度 TP 的实测用的是 DeepSeek-R1-W8A8，省下的 9.72 GB 是在已经量化之后再切 DP 轴得到的。"],
  },
  lora: {
    scene: "flow",
    sceneTitle: "LoRA",
    sceneHint: "基座不动，请求只套一层低秩增量",
    nodes: [["基座 W", "各卡按 TP 切开"], ["A × B", "低秩，按请求换"], ["输出", "加在基座上"]],
    paragraphs: [
      "LoRA 不复制整份基座。基座权重仍按原来的 TP 或 EP 放置，请求到来时只把很小的 A、B 矩阵套上去。不同请求可以套不同的适配器，基座那一次大矩阵乘仍然共用。",
    ],
    points: ["ModelRunner V2 的 PCP 文档写明还不支持 LoRA。"],
    support: {
      note: "A2/A3 核心文本表里，LoRA 标 ✅ 的只有 DeepSeek V3.2。MiniMax-M2.5/2.7 标的是 ❌。其余多数是空的，不能当成已支持。",
      columns: ["模型", "LoRA", "模型状态"],
      rows: [
        ["DeepSeek V3.2", "✅", "🔴"],
        ["MiniMax-M2.5/2.7", "❌", "🔴"],
      ],
    },
  },
  structured: {
    scene: "flow",
    sceneTitle: "结构化输出",
    sceneHint: "不合法的 token 在采样前被挡住",
    nodes: [["候选 token", "模型分布"], ["Schema", "只留合法的"], ["JSON", "结构完整"]],
    paragraphs: [
      "结构化输出不改模型权重。采样前用 schema 把不符合文法的 token 遮掉，使生成落在 JSON 或其他结构里。被遮掉的概率要在剩下的 token 上重新归一。",
    ],
    points: [],
  },
  epd: {
    scene: "flow",
    sceneTitle: "分离式编码器",
    sceneHint: "视觉、Prefill、Decode 各占一组机器",
    nodes: [["Encoder", "视觉"], ["Prefill", "提示词"], ["Decode", "逐 token"]],
    paragraphs: [
      "多模态请求里，视觉编码、提示词 Prefill 和逐 token Decode 的算力形状不一样。分离式编码器把它们放到不同实例上，各自按自己的批量来扩，而不是让一张卡同时干这三件事。",
    ],
    points: [],
  },
  rl: {
    scene: "flow",
    sceneTitle: "强化学习推演",
    sceneHint: "生成样本和训练轮流使用显存",
    nodes: [["Rollout", "vLLM 生成"], ["训练", "让出显存"], ["同步", "新权重回来"]],
    paragraphs: [
      "强化学习先要用当前策略生成一批样本。vLLM-Ascend 负责这次推演。训练开始前推演引擎把显存让出来，权重更新后再同步回推演引擎，下一轮样本用的是新权重。",
    ],
    points: ["让出显存和休眠类似，但这里的节奏由训练步决定，不是由请求空闲决定。"],
  },
};
