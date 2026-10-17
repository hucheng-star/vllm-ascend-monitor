const DOC = "https://docs.vllm.ai/projects/ascend/en/latest/user_guide/feature_guide/";

function feature(id, title, english, principle, file, pattern, diagram) {
  return { id, title, english, principle, doc: DOC + file, pattern, diagram };
}

window.FEATURE_CATALOG = [
  {
    name: "执行",
    items: [
      feature("graph", "图模式", "Graph Mode Guide", "先把算子融合成一张图，再用 ACLGraph 录下来，之后按录好的图重放。", "graph_mode.html", /aclgraph|npugraph|cudagraph|xlitegraph|graph mode|图模式|full_decode_only|piecewise/i, { type: "flow", nodes: [["FX", "算子图"], ["Npugraph_ex", "融合"], ["ACLGraph", "录制"], ["Replay", "重放"]] }),
      feature("fa3", "第三代 Flash Attention", "Flash Attention 3", "Q、K、V 在一个融合核里完成注意力，推理解码和训练侧用同一套计算。", "flash_attention.html", /flash[-_ ]?attention|\bfa3\b|flash_attn/i, { type: "flow", nodes: [["Q K V", "分块读入"], ["FA3", "融合核"], ["O", "输出"]] }),
      feature("batch-invariance", "批不变性", "Batch Invariance", "同一条请求无论单独跑还是跟别的请求拼批，输出都保持一致。", "batch_invariance.html", /batch[-_ ]?invarian/i, { type: "same", left: "Batch 1", right: "Batch N", out: "同一输出" }),
      feature("runtime-guard", "运行时防护", "Runtime Guard", "解码过程中盯住重复、乱码和异常 logits，触发后写出报告，必要时把 KV 拷出来。", "runtime_guard.html", /runtime guard|dump_kv/i, { type: "flow", nodes: [["Decode", "输出信号"], ["检测", "重复 / NaN"], ["报告", "JSON + KV"]] }),
    ],
  },
  {
    name: "调度",
    items: [
      feature("cpu-binding", "CPU 绑核", "CPU Binding", "每个 NPU worker 固定在靠近它的 CPU 和 NUMA 上，减少跨节点访问和线程来回迁移。", "cpu_binding.html", /cpu binding|cpu_bind|绑核|enable_cpu_binding/i, { type: "transfer", from: "NUMA 0 · CPU", via: "绑在一起", to: "NPU 0" }),
      feature("qos", "AI 服务质量", "AI QoS Feature", "算子下发、集合通信和 KV 传输走不同虚拟通道，交换机按优先级先放行重要流量。", "Ai_QoS_introduction_en.html", /ai qos|ai_qos|\bqos\b|virtual lane|ub switch/i, { type: "lanes", lanes: [["AIV", "高"], ["PCIE", "高"], ["SDMA", "低"]], sink: "UB 交换机" }),
      feature("sleep", "休眠模式", "Sleep Mode Guide", "空闲时把权重挪到 CPU，并丢掉 KV；要接着推理时再把权重请回来。", "sleep_mode.html", /sleep mode|sleep_mode|enable_sleep/i, { type: "transfer", from: "NPU 权重", via: "Level 1", to: "CPU · KV 丢弃" }),
      feature("batch-job", "批量任务调度", "Batch-Job-Aware Scheduler", "离线批处理先排长任务，再用短任务填空档，同时提前留出 KV。", "batch_job_aware_scheduler.html", /batch-job-aware|batch job aware/i, { type: "flow", nodes: [["长任务", "先占用"], ["短任务", "填空档"], ["KV", "提前预留"]] }),
      feature("short-first", "短请求优先预填充", "ShortRequestFirst Prefill Scheduling", "预填充时让短 prompt 先跑，避免一条长请求挡住后面一串短请求。", "short_request_first.html", /short[-_ ]?request[-_ ]?first|shortrequestfirst/i, { type: "flow", nodes: [["短请求", "先预填充"], ["长请求", "排在后面"], ["TTFT", "短请求更快"]] }),
      feature("dyntra", "解码侧动态负载均衡", "DyntraLB: Dynamic Intra-Decoder Data-Parallel Load Balancing", "解码侧各 DP 卡互相看负载，忙的卡暂停一些请求，闲的卡不再干等。", "dyntra_lb.html", /dyntra/i, { type: "balance", left: "DP 忙闲不一", right: "按负载准入" }),
    ],
  },
  {
    name: "并行",
    items: [
      feature("cp", "上下文并行", "Context Parallel Guide", "长序列在预填充时按 token 拆到多卡，解码时再把 KV 分片存放。", "context_parallel.html", /context parallel|\bpcp\b|\bdcp\b|dsa[-_ ]?cp|prefill_context_parallel/i, { type: "split", caption: "一条长序列", parts: ["PCP 0", "PCP 1", "PCP 2"] }),
      feature("sp", "序列并行", "Sequence Parallelism", "进 MoE 之前按 token 切开，各卡只算自己的那一段，出来再拼回去。", "sequence_parallelism.html", /sequence parallel|sp moe/i, { type: "split", caption: "同一层的 token", parts: ["TP 0", "TP 1", "TP 2"] }),
      feature("pp", "流水线并行", "Pipeline Parallelism", "模型按层切成几段，上一段算完把激活值交给下一段。", "pipeline_parallel.html", /pipeline parallel|pipeline-parallel|\bpp\d?\b/i, { type: "flow", nodes: [["Stage 0", "前几层"], ["激活", "往下传"], ["Stage 1", "后几层"]] }),
      feature("cpp", "动态切块流水线并行", "Dynamic Chunked Pipeline Parallel", "预填充节点按实测选择切块大小，让流水线各段更齐，缩短长序列的首 token。", "dynamic_chunk_pipeline_parallel.html", /dynamic chunk|chunked pipeline|\bcpp\b/i, { type: "flow", nodes: [["长序列", "P 节点"], ["动态切块", "按实测"], ["流水线", "各段对齐"]] }),
      feature("fine-tp", "细粒度张量并行", "Fine-Grained Tensor Parallelism (Fine-grained TP)", "嵌入、LM head、o_proj 和 MLP 各自用不同的并行宽度，单卡少放一些权重。", "Fine_grained_TP.md".replace(".md", ".html"), /fine[-_ ]?grained|finegrained_tp/i, { type: "split", caption: "同一层里的不同模块", parts: ["Embed", "o_proj", "MLP", "LM head"] }),
      feature("large-ep", "大规模专家并行", "Distributed DP Server With Large-Scale Expert Parallelism", "预填充和解码分成两套机器，专家权重铺在很多 NPU 上，由分布式 DP 服务调度。", "large_scale_ep.html", /large[- ]scale expert|large[- ]scale ep|distributed dp/i, { type: "flow", nodes: [["P 节点", "预填充"], ["DP 服务", "调度"], ["D 节点", "专家并行"]] }),
      feature("eplb", "专家并行负载均衡", "Expert Parallelism Load Balancer (EPLB)", "统计每个专家有多忙，再把专家重新摆到各卡上，避免少数专家把卡打满。", "expert_parallelism_load_balancer.html", /eplb|expert load balanc|专家负载/i, { type: "balance", left: "专家冷热不均", right: "重新放置" }),
      feature("kvpp", "KV 流水线并行", "KVPP (Experimental)", "历史 KV 不再每张卡都存一份，按层拆开存放，同样的显存能装下更长的上下文。", "kvpp.html", /\bkvpp\b|kv pipeline/i, { type: "split", caption: "历史 KV 按层拆开", parts: ["层 0-9", "层 10-19", "层 20-29"] }),
    ],
  },
  {
    name: "缓存",
    items: [
      feature("kv-offload", "KV 缓存卸载到 CPU", "KV Cache CPU Offload Guide", "不活跃的 KV 块先放到 CPU，NPU 再次用到时再异步拉回来，免得整段重算。", "kv_cache_cpu_offload.html", /cpu offload|offloadingconnector|kv cache cpu/i, { type: "tiers", rows: [["HBM", "正在用的 KV"], ["CPU", "不活跃的块"], ["拉回", "命中后异步拷回"]] }),
      feature("kv-pool", "KV 缓存池", "KV Cache Pool (Ascend Store)", "预填充写到外部 KV 存储，别的实例遇到相同前缀就直接读，不用再算一遍。", "kv_cache_pool_ascend_store.html", /ascend store|kv[-_ ]?pool|ascendstore/i, { type: "transfer", from: "Prefill", via: "KV Store", to: "Decode" }),
      feature("layerwise-kv", "逐层与稀疏 KV 卸载", "Layerwise and Sparse KV Cache Offloading Guide", "预填充按层把 KV 卸出去，解码只保留稀疏注意力真正要用的那部分。", "layerwise_and_sparse_kv_cache_offloading.html", /layerwise kv|sparse kv|逐层/i, { type: "flow", nodes: [["Prefill", "逐层卸出"], ["稀疏", "只留有用块"], ["Decode", "接着生成"]] }),
      feature("encoder-cache", "编码器缓存卸载到 CPU", "Encoder Cache CPU Offload", "图像或音频的编码器结果放进 CPU 共享内存，同样的输入下次不再重跑编码器。", "encoder_cache_cpu_offload.html", /encoder cache|eccpu/i, { type: "transfer", from: "Encoder", via: "CPU mmap", to: "再次命中" }),
      feature("preempt-offload", "抢占卸载", "Preempt Offload Guide", "解码请求被抢占前，先把已有 KV 拷到 CPU，恢复时拷回来，而不是退回预填充重算。", "preempt_offload_connector.html", /preempt[-_ ]?offload/i, { type: "transfer", from: "HBM KV", via: "抢占前拷走", to: "CPU · 稍后恢复" }),
      feature("lmcache", "LMCache 昇腾部署", "LMCache-Ascend Deployment Guide", "用 LMCache 在昇腾上保存可复用的 KV，让多轮对话接着用已经算过的前缀。", "lmcache_ascend_deployment.html", /lmcache/i, { type: "tiers", rows: [["请求", "带长前缀"], ["LMCache", "已存的 KV"], ["续写", "跳过重算"]] }),
      feature("ucm", "统一缓存管理", "UCM Store Deployment Guide", "KV 从 HBM 落到本机内存，再落到共享存储，重启或换实例之后前缀还在。", "ucm_deployment.html", /\bucm\b|unified cache manager/i, { type: "tiers", rows: [["HBM", "当前计算"], ["DRAM", "本机热缓存"], ["NFS / 3FS", "持久 KV"]] }),
      feature("mooncake", "Mooncake 逐层适配", "Mooncake Layerwise Adaptation and Optimization Analysis", "预填充每算完一层就把该层 KV 送给解码，计算和传输叠在一起。", "mooncake_layerwise_adaptation_and_optimization.html", /mooncake/i, { type: "flow", nodes: [["P 层 N", "算出 KV"], ["传输", "这一层"], ["D 层 N", "接着生成"]] }),
      feature("mooncake-hybrid", "Mooncake 逐层混合注意力", "Mooncake Layerwise Hybrid Attention", "滑窗 KV、压缩 KV 和 indexer 分成不同的组，逐层传输时按组走。", "mooncake_hybrid_attention.html", /hybrid attention|multi-kv-group|mooncake hybrid/i, { type: "split", caption: "同一层里的多组 KV", parts: ["滑窗", "压缩", "Indexer"] }),
    ],
  },
  {
    name: "加载",
    items: [
      feature("netloader", "网络加载", "Netloader Guide", "已经加载好的 NPU 把权重大块直接传给新实例，新实例不必再从磁盘读。", "netloader.html", /netloader/i, { type: "transfer", from: "已加载的 NPU", via: "HCCL", to: "新实例" }),
      feature("rfork", "种子实例热启动", "RFork Guide", "新实例向规划器要一个结构相同的种子实例，再从种子上把权重拷过来。", "rfork.html", /rfork/i, { type: "flow", nodes: [["新实例", "结构就绪"], ["Planner", "匹配种子"], ["Seed", "拷贝权重"]] }),
      feature("quant", "量化", "Quantization Guide", "权重和激活改成更低精度，单卡放下更大的模型，计算也更轻。", "quantization.html", /quantiz|w8a8|w4a8|modelslim|量化|llm-compressor|\bawq\b|\bgptq\b/i, { type: "flow", nodes: [["FP16", "原始权重"], ["W8A8", "更低精度"], ["NPU", "更省显存"]] }),
      feature("lora", "LoRA 适配器", "LoRA Adapters", "基座权重保持不动，请求到来时只套上一层很小的低秩适配器。", "lora.html", /\blora\b/i, { type: "flow", nodes: [["基座 W", "冻结"], ["A × B", "低秩适配"], ["输出", "按请求切换"]] }),
    ],
  },
  {
    name: "解码",
    items: [
      feature("speculative", "投机解码", "Speculative Decoding Guide", "草稿模型先猜出几个 token，目标模型再逐个验收，对的留下，错的从那里重来。", "speculative_decoding.html", /speculative decod|投机解码|\beagle3?\b|\bmedusa\b|\bngram\b|draft model|dflash|dspark/i, { type: "verify", draft: "草稿", tokens: ["t+1", "t+2", "t+3"], target: "目标模型验收" }),
      feature("mtp", "多 Token 预测", "Multi-Token Prediction", "模型自己的 MTP 层一次提出多个后续 token，再由目标模型校验后一次收下。", "speculative_decoding.html", /\bmtp\b|multi[- ]token prediction/i, { type: "verify", draft: "MTP 层", tokens: ["t+1", "t+2", "t+3"], target: "一次验收" }),
      feature("structured", "结构化输出", "Structured Output Guide", "生成时用 schema 挡住不符合格式的 token，让结果落在 JSON 或其他结构里。", "structured_output.html", /structured output|guided decoding|xgrammar|结构化输出/i, { type: "flow", nodes: [["候选 token", "模型想说的"], ["Schema", "只留合法的"], ["JSON", "结构完整"]] }),
      feature("epd", "分离式编码器", "Disaggregated-encoder", "视觉编码、预填充、解码拆到不同实例上，各自按自己的算力和显存来扩。", "epd_disaggregation.html", /disaggregated[- ]encoder|\bepd\b/i, { type: "flow", nodes: [["Encoder", "视觉"], ["Prefill", "提示词"], ["Decode", "逐 token"]] }),
      feature("rl", "强化学习推演", "vLLM-Ascend for RL", "训练前用 vLLM 生成样本，训练时让出显存，权重更新后再同步回推演引擎。", "rl.html", /rlhf|\bgrpo\b|\bppo\b|rollout engine|强化学习/i, { type: "flow", nodes: [["Rollout", "生成样本"], ["训练", "让出显存"], ["同步", "新权重回来"]] }),
    ],
  },
];
