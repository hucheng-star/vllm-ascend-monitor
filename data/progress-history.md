# vLLM-Ascend 各模型历史进展

更新时间：2026-10-14T07:51:02.491Z

收录 2026-09-14 以来仍被提到的模型相关 PR 与 Issue，按事件日期由近到远。中文在前，原文在后。

## DeepSeek

### DeepSeek V4

#### 2026-10-14

- [PR #18506](https://github.com/vllm-project/vllm-ascend/pull/18506) 已合并
  - 中文：[性能] [DSA]使用激活交换进行PCP解码O投影
  - 原文：[Performance][DSA] Use activation exchange for PCP decode O projection
  - 说明：Replace O-权重 AllGather with activation exchange for sharded 解码 in DeepSeek V4 and V4.1: token AllGather across PCP ranks, local O projection, then ReduceScatter. Share batch-scoped O projection handling, allocate graph-stable buffer
- [Issue #12589](https://github.com/vllm-project/vllm-ascend/issues/12589) 已关闭
  - 中文：[文档] ：默认块大小= 128会导致128K输入的前缀缓存命中率接近于零，在Ascend NPU上前缀重用率约为50%
  - 原文：[Doc]: Default block-size=128 causes near-zero Prefix Caching hit rate for 128K input with ~50% prefix reuse on Ascend NPU
  - 说明：📚 The doc issue Description When using DeepSeek-V4 (DSV4) with vLLM-Ascend on Ascend NPU, the 前缀缓存 (Automatic 前缀缓存) 特性 fails to hit for 128K-length prompts with ~50% 前缀 repetition. The root cause is traced to t
- [PR #18662](https://github.com/vllm-project/vllm-ascend/pull/18662) 已合并
  - 中文：【文档】: 补充文档 DeepSeek V4 TurboQuant 服务 options
  - 原文：[Doc]: Document DeepSeek V4 TurboQuant serving options
  - 说明：补充文档 --kv-缓存-dtype turboquant 4bit nc in the DeepSeek-V4-Flash deployment guide. Explain its 显存 benefits for ultra-long-context workloads such as AI coding, operator requirements, and independence from 权重 and 索引器 缓存 qu
- [Issue #13794](https://github.com/vllm-project/vllm-ascend/issues/13794) 已关闭
  - 中文：【缺陷】: DeepSeek-V4-Flash-0731多轮对话出现DSML标签泄漏并重复回答
  - 原文：[Bug]:  DeepSeek-V4-Flash-0731多轮对话出现DSML标签泄漏并重复回答
- [PR #18665](https://github.com/vllm-project/vllm-ascend/pull/18665) 草稿
  - 中文：【功能】【DSA】C4 KV 缓存 sharding with DCP for DeepSeek-V4 on A2
  - 原文：[Feature][DSA] Add C4 KV cache sharding with DCP for DeepSeek-V4 on A2
  - 说明：This is the first implementation step of RFC 17485. DeepSeek-V4's DSA KV caches are replicated across TP ranks, which uses extra HBM for long contexts. This PR starts reducing that duplication by sharding the C4/CSA main KV 缓存 across DCP
- [Issue #18664](https://github.com/vllm-project/vllm-ascend/issues/18664) 进行中
  - 中文：【文档】: Questions for `/zh-cn/v0.30.0rc1/user_guide/release_notes.html`
  - 原文：[Doc]: Questions for `/zh-cn/v0.30.0rc1/user_guide/release_notes.html`
  - 说明：📚 The doc issue 1.官方0.30.0rc1文档中写的dsv4.1做了tq4特性优化，实际保持不支持； 2. 0.30.0rc1镜像实际是9.1.0，文档上写的9.2.0，且同配置qwen3.8 27b性能不及0.23.0镜像（官方文档描述有优化）； 3. 0.30.0rc1不支持fuse muls add为true的配置，glm5.3 flash双机混部关闭该选项后性能也不及0.23.0镜像（支持为true）。 Suggest a potential alt
- [PR #18526](https://github.com/vllm-project/vllm-ascend/pull/18526) 已关闭
  - 中文：[v0.30.0] [文档] [功能] ：在P/D分解部署中记录DeepSeek V4 TurboQuant服务选项和启用DeepSeek V4 TurboQuant KV缓存传输
  - 原文：[v0.30.0][Doc][Feature] : Document DeepSeek V4 TurboQuant serving options and Enable DeepSeek V4 TurboQuant KV cache transfer in P/D disaggregated deployments
  - 说明：启用 DeepSeek V4 TurboQuant KV 缓存 transfer in P/D disaggregated deployments using MooncakeHybridConnector. Transfer packed 缓存 pages with their codes, scales, 索引器 data, and 压缩器 states preserved. Validate 缓存 layout compa
- [PR #18525](https://github.com/vllm-project/vllm-ascend/pull/18525) 已关闭
  - 中文：【文档】【功能】补充文档 DeepSeek V4 TurboQuant 服务 options
  - 原文：[Doc][Feature] Document DeepSeek V4 TurboQuant serving options
  - 说明：补充文档 --kv-缓存-dtype turboquant 4bit nc in the DeepSeek-V4-Flash parameter descriptions for single-node and P/ D disaggregated deployments. Explain its 显存 benefits for ultra-long-context workloads such as AI coding, operator requir
- [PR #18661](https://github.com/vllm-project/vllm-ascend/pull/18661) 进行中
  - 中文：【v0.30.0】【文档】【功能】: 补充文档 DeepSeek V4 TurboQuant 服务 options
  - 原文：[v0.30.0][Doc][Feature]: Document DeepSeek V4 TurboQuant serving options
  - 说明：Cherry-pick of PR 补充文档 --kv-缓存-dtype turboquant 4bit nc in the DeepSeek-V4-Flash deployment guide. Explain its 显存 benefits for ultra-long-context workloads such as AI coding, operator requirements, and independence from 权重 an
- [PR #18642](https://github.com/vllm-project/vllm-ascend/pull/18642) 进行中
  - 中文：[v0.30.0] [BugFix] [Model]通过重量加载器(# 16958)应用DeepSeek-V4注意力槽
  - 原文：[v0.30.0][BugFix][Model] Apply DeepSeek-V4 attention sinks through the weight loader (#16958)
  - 说明：Backport of 16958 to the releases/v0.30.0 branch. DeepSeek-V4 注意力 Sink 加载 used direct copy calls, bypassing the parameter's current 权重 loader . During live/layerwise reload, those writes land on meta parameters instead of ent

#### 2026-10-13

- [PR #18604](https://github.com/vllm-project/vllm-ascend/pull/18604) 进行中
  - 中文：[功能] [教育部]为V2 eager添加精确的专家卸载并解码ACL图
  - 原文：[Feature][MoE] Add exact expert offload for V2 eager and decode ACL graphs
  - 说明：DeepSeek V4 routed expert 权重 can exceed single-device 显存. 新增 opt-in exact expert 卸载 for Model Runner V2: keep prepared expert bytes in pinned host 显存 and page router-selected experts into stable per-layer NPU slots. Prefi
- [PR #18418](https://github.com/vllm-project/vllm-ascend/pull/18418) 已合并
  - 中文：【修复】Validate DeepSeek V4 张量并行 limits
  - 原文：[Bugfix] Validate DeepSeek V4 tensor parallel limits
  - 说明：Summary - validate tensor-parallel limits for DeepSeek V4.1, V4 Flash, and V4 Pro models - enforce A2/A3 limits of TP <= 8 for V4.1/Flash and TP <= 16 for V4 Pro - disallow TP 1 on A5 - apply validation to Model Runner V2 and to Model Runne
- [PR #18537](https://github.com/vllm-project/vllm-ascend/pull/18537) 进行中
  - 中文：[Cherry-pick] [releases/v0.30.0] [Performance] [DSA]使用激活交换进行PCP解码O投影（来自# 18506 ）
  - 原文：[Cherry-pick][releases/v0.30.0][Performance][DSA] Use activation exchange for PCP decode O projection (from #18506)
  - 说明：Backport 18506 to releases/v0.30.0 . Use activation AllToAll, resident PCP O-group projection, and ReduceScatter for sharded DSV4/V4.1 解码. No API or 配置 changes. - vLLM main:
- [PR #18494](https://github.com/vllm-project/vllm-ascend/pull/18494) 进行中
  - 中文：【修复】【模型】Resolve DeepSeek V4 缓存 dtype on A5
  - 原文：[BugFix][Model] Resolve DeepSeek V4 cache dtype on A5
  - 说明：【修复】【模型】Resolve DeepSeek V4 缓存 dtype on A5 DeepSeek V4 cannot start on Ascend A5 with a default 配置. 缓存 配置.缓存 dtype defaults to "auto" , which vLLM resolves to the model dtype ( torch.bfloat16 ). The A5 DeepSe

#### 2026-10-12

- [PR #18457](https://github.com/vllm-project/vllm-ascend/pull/18457) 进行中
  - 中文：[BugFix] [Frontend]在流媒体中解析DeepSeek V4文本表单DSML标记
  - 原文：[BugFix][Frontend] Parse DeepSeek V4 text-form DSML markers in streaming
  - 说明：DeepSeek V4 does not always emit its DSML markers as dedicated special tokens. In the deployment behind the linked issue they arrive as ordinary text inside the streamed deltas, which the parser supports; the text form works on its own. It
- [Issue #11974](https://github.com/vllm-project/vllm-ascend/issues/11974) 已关闭
  - 中文：【缺陷】: Deepseek v4 A2/A3 在高并发下，topt劣化，波动大
  - 原文：[Bug]: Deepseek v4 A2/A3 在高并发下，topt劣化，波动大
- [PR #18438](https://github.com/vllm-project/vllm-ascend/pull/18438) 进行中
  - 中文：[v0.27.1rc] [BugFix] [Frontend]解析流媒体中的DeepSeek V4文本形式DSML标记
  - 原文：[v0.27.1rc][BugFix][Frontend] Parse DeepSeek V4 text-form DSML markers in streaming
  - 说明：DeepSeek V4 does not always emit its DSML markers as dedicated special tokens. In the deployment behind the linked issue they arrive as ordinary text inside the streamed deltas, which the parser supports; the text form works on its own. It
- [Issue #18386](https://github.com/vllm-project/vllm-ascend/issues/18386) 进行中
  - 中文：【缺陷】:0.27.1rc1镜像部署DeepSeekv4-0731版本推理服务DSML标签泄露
  - 原文：[Bug]:0.27.1rc1镜像部署DeepSeekv4-0731版本推理服务DSML标签泄露
- [PR #18327](https://github.com/vllm-project/vllm-ascend/pull/18327) 进行中
  - 中文：【修复】【DSA】Resolve A5 DeepSeek-V4 auto KV dtype in 缓存 layers
  - 原文：[BugFix][DSA] Resolve A5 DeepSeek-V4 auto KV dtype in cache layers
  - 说明：On Ascend A5, a default DeepSeek-V4 launch leaves --kv-缓存-dtype at auto . Allocation treats auto as the model dtype ( torch.bfloat16 ). The compressed-缓存 path does not: only an explicit bfloat16 / bf16 request selects the BF16 layout,

#### 2026-10-11

- [Issue #18304](https://github.com/vllm-project/vllm-ascend/issues/18304) 进行中
  - 中文：[Bug] [A3] DeepSeek-V4.1 ：缺少causal_conv1d_update_npu - > CausalConv1dBwd ACL-图形崩溃导致解码EngineCores
  - 原文：[Bug][A3] DeepSeek-V4.1: missing causal_conv1d_update_npu -> CausalConv1dBwd ACL-graph crash kills decode EngineCores
  - 说明：What happened? On Ascend A3, running DeepSeek-V4.1-Flash (w8a8) with DSpark MTP ( num 投机 tokens=5 ) + CUDAGraphMode.FULL 解码 ONLY on a 解码-side DP8×TP2 (EP16) deployment, the 解码 service dies reproducibly. Two consecutive

#### 2026-10-10

- [PR #18184](https://github.com/vllm-project/vllm-ascend/pull/18184) 已合并
  - 中文：【修复】【v0.30.0】Define draft token mapping for full-vocabulary DSpark models
  - 原文：[BugFix][v0.30.0] Define draft token mapping for full-vocabulary DSpark models
  - 说明：Backport of to releases/v0.30.0 . Define draft id to target id = None on the Ascend DeepSeek V4 and DeepSeek V4.1 DSpark model classes. Their draft token IDs already match target token IDs, so they need no remapping. This exposes the attrib
- [PR #18182](https://github.com/vllm-project/vllm-ascend/pull/18182) 已合并
  - 中文：【修复】Define draft token mapping for full-vocabulary DSpark models
  - 原文：[BugFix] Define draft token mapping for full-vocabulary DSpark models
  - 说明：Define draft id to target id = None on the Ascend DeepSeek V4 and DeepSeek V4.1 DSpark model classes. Their draft token IDs already match target token IDs, so they need no remapping. This exposes the attribute read by the DSpark speculator.
- [PR #16958](https://github.com/vllm-project/vllm-ascend/pull/16958) 已合并
  - 中文：【修复】【模型】Apply DeepSeek-V4 注意力 sinks through the 权重 loader
  - 原文：[BugFix][Model] Apply DeepSeek-V4 attention sinks through the weight loader
  - 说明：DeepSeek-V4 注意力 Sink 加载 used direct copy calls, bypassing the parameter's current 权重 loader . During live/layerwise reload, those writes land on meta parameters instead of entering the reload 缓存, leaving the original Sink
- [PR #18211](https://github.com/vllm-project/vllm-ascend/pull/18211) 进行中
  - 中文：【重构】【杂项】移除 duplicate muls_add triton 内核 and harden expert-map json check
  - 原文：[Refactor][Misc] Remove duplicate muls_add triton kernel and harden expert-map json check
  - 说明：- Delete vllm ascend/ops/triton/mul 新增.py, a byte-identical duplicate of muls 新增.py, and point the deepseek v4/deepseek v41 imports at the canonical module to 避免 divergent 拷贝 of the same 内核. - Validate expert map path/expert ma
- [PR #18127](https://github.com/vllm-project/vllm-ascend/pull/18127) 已合并
  - 中文：【Cherry-pick】【v0.30.0】【性能】: 优化 DeepSeek V4 TurboQuant framework path
  - 原文：[Cherry-pick][v0.30.0][Performance]: optimize DeepSeek V4 TurboQuant framework path
  - 说明：共享DSV4变换张量和缓存KV计划，融合缩放校正和缓存打包，并调整DSpark上下文KV旋转和压缩注意力元数据。在保留SFA基线的同时还原历史DSV4 Hadamard序列

#### 2026-10-09

- [PR #18037](https://github.com/vllm-project/vllm-ascend/pull/18037) 已合并
  - 中文：【性能】：优化DeepSeek V4 TurboQuant框架路径
  - 原文：[Performance]: optimize DeepSeek V4 TurboQuant framework path
  - 说明：共享DSV4变换张量和缓存KV计划，融合缩放校正和缓存打包，并调整DSpark上下文KV旋转和压缩注意力元数据。在保留SFA基线的同时还原历史DSV4 Hadamard序列
- [PR #18102](https://github.com/vllm-project/vllm-ascend/pull/18102) 进行中
  - 中文：【性能】对DeepSeek V4路由器使用GateLinear
  - 原文：[Performance] Use GateLinear for DeepSeek V4 routers
  - 说明：将带有预制fp32权重的ReplicatedLinear的DeepSeek V4和V4.1路由器投影切换为带有FP32输出的GateLinear。这使用专用路由器GEMM路径，同时保留FP32路由器日志。此PR是否会引入任何用户面向

#### 2026-10-08

- [PR #15687](https://github.com/vllm-project/vllm-ascend/pull/15687) 已合并
  - 中文：【v0.23.0】【工具解析】【修复】DeepSeek V4 严格 必填 工具调用解析
  - 原文：[v0.23.0][ToolParser][BugFix] Fix DeepSeek V4 strict required tool-call parsing
  - 说明：When 严格 tool calling is 启用, DeepSeek V4 Chat Completions structured 解码 emits the model-native DSML format. However, DeepSeekV4ToolParser inherits supports 必填 and named=True , so the 服务 layer handles tool choice="re
- [PR #17635](https://github.com/vllm-project/vllm-ascend/pull/17635) 已合并
  - 中文：【修复】【模型】恢复 平台默认 索引器 KV dtype for DeepSeek V4
  - 原文：[BugFix][Model] Restore platform-default indexer KV dtype for DeepSeek V4
  - 说明：Restores the default startup of DeepSeek V4 (W4A8/W8A8) on Ascend 910B after 15514. 注意力 配置.索引器 kv dtype now defaults to "auto" , which resolves to bf16, but the Ascend 索引器 缓存 write paths only 支持 int8 (Non-A5) / fp8
- [PR #16671](https://github.com/vllm-project/vllm-ascend/pull/16671) 已合并
  - 中文：【性能】优化 DeepSeek-V4 VL embed_input_ids to 移除 每步 拷贝
  - 原文：[Performance] Optimize DeepSeek-V4 VL embed_input_ids to remove per-step copies
  - 说明：Profiling the DeepSeek-V4-Flash-Vision-Exp deployment ( dsv4-vision-exp ) showed ~4ms of copy operations inside embed input ids on every 调度器 step. <img width="1336" height="752" alt="131a6c9c094b851c239743a38e356ca5" src=" / The cause

#### 2026-10-07

- [PR #17676](https://github.com/vllm-project/vllm-ascend/pull/17676) 已合并
  - 中文：【功能】(turboquant): 支持 DeepSeek V4 TurboQuant INT4 KV 缓存
  - 原文：[Feature](turboquant): Support DeepSeek V4 TurboQuant INT4 KV cache
  - 说明：This PR 15821 adds framework-side TurboQuant INT4 KV-缓存 支持 for DeepSeek V4 on Ascend A2/A3 with the vLLM V2 model runner. The implementation intentionally keeps operator sources outside the vLLM Ascend repository. It lazily invokes

#### 2026-10-06

- [PR #17921](https://github.com/vllm-project/vllm-ascend/pull/17921) 已合并
  - 中文：[BugFix] [Model]在每个PP阶段的第一个C4初始化V4 IndexCache
  - 原文：[BugFix][Model] Initialize V4 IndexCache at the first C4 of each PP stage
  - 说明：Make DeepSeek V4 IndexCache work with PP partitions that 拆分 a reuse group, while keeping the existing reuse schedule when the partition is already aligned. V4 attaches an 索引器 only to C4 layers. The model's frequency/pattern schedule
- [PR #17911](https://github.com/vllm-project/vllm-ascend/pull/17911) 已合并
  - 中文：【修复】【注意力】对齐 DSpark SAS 元数据 with 共享 可见 KV
  - 原文：[BugFix][Attention] Align DSpark SAS metadata with shared visible KV
  - 说明：DeepSeek V4 DSpark can 挂起 in FP8 SparseAttnSharedkv when a draft block crosses a 128-token KV tile boundary. The 共享 元数据 builder used a 127-token left window while execution used 132 with five draft tokens. Causal 元数据 also pl

#### 2026-09-29

- [Issue #17527](https://github.com/vllm-project/vllm-ascend/issues/17527) 已关闭
  - 中文：[Bug] ： MRV1在融合槽映射Triton内核的每次运行时重新编译中冻结所有正在运行的请求约5.5秒（ DSV4上的吞吐量损失高达2.9倍，也在版本/v0.26.0rc上）
  - 原文：[Bug]: MRV1 freezes all running requests for ~5.5 s on each runtime recompile of the fused slot-mapping Triton kernel (up to 2.9x throughput loss on DSV4, also on releases/v0.26.0rc)
- [PR #17711](https://github.com/vllm-project/vllm-ascend/pull/17711) 已合并
  - 中文：【v0.27.1rc】【文档】更新 DSV4 Flash Doc
  - 原文：[v0.27.1rc][Doc] Update DSV4 Flash Doc
  - 说明：<!-- BEFORE SUBMITTING, PLEASE READ -- <!-- - Please clarify what changes you are proposing. The purpose of this section is to outline the changes and how this PR fixes

#### 2026-09-28

- [PR #17648](https://github.com/vllm-project/vllm-ascend/pull/17648) 已合并
  - 中文：【v0.27.1rc】【文档】更新 DSV4 Flash Doc
  - 原文：[v0.27.1rc][Doc] Update DSV4 Flash Doc 
  - 说明：This PR 更新 the DeepSeek-V4-Flash documentation to 新增 支持 for the Ascend 950DT server based on vLLM-Ascend v0.27.1rc. - v
- [PR #17624](https://github.com/vllm-project/vllm-ascend/pull/17624) 进行中
  - 中文：【测试】新增 KV 池化 to DSV4-Flash 夜间 (PD / A5 / A3 / MTP3)
  - 原文：[Test] Add KV pooling to DSV4-Flash nightly (PD / A5 / A3 / MTP3)
  - 说明：Motivation KV 池化 (AscendStoreConnector, both memcache and mooncake backends, with/without use layerwise ) currently has no 夜间 coverage : a 池化 回退 would not be caught until a manual 每周/CI run happens. This PR brings

#### 2026-09-27

- [PR #17581](https://github.com/vllm-project/vllm-ascend/pull/17581) 进行中
  - 中文：【特色】【MRV2】自持细粒度TP交换，容忍急躁步伐
  - 原文：[Feature][MRV2] Self-pad fine-grained TP exchanges to tolerate eager steps
  - 说明：Removes the graph-replay-only restriction from fine-grained o proj / MLP TP by migrating the static-capacity self-padding scheme already used by the DSV4 o proj path ( dsa v1.py: forward o proj ) into the generic fine-grained TP linear ops.

#### 2026-09-24

- [PR #17067](https://github.com/vllm-project/vllm-ascend/pull/17067) 已合并
  - 中文：[性能] [DSV4]重复使用过滤的RoPE查找
  - 原文：[Performance][DSV4] Reuse filtered RoPE lookups
  - 说明：This PR removes redundant DeepSeek V4 RoPE table indexing that remains on current main. - adds an optional layer filter to get cos and sin dsa so draft 注意力 queries only the RoPE 配置 consumed by its layers - resolves draft .swa cach

#### 2026-09-23

- [PR #17354](https://github.com/vllm-project/vllm-ascend/pull/17354) 进行中
  - 中文：【注意】【特性】针对DeepSeek-V4 FP8 KV路径集成MIXED_QUANT_SPARSE_FLASH_MLA运算
  - 原文：[Attention][Feature] Integrate mixed_quant_sparse_flash_mla op for DeepSeek-V4 FP8 KV path
  - 说明：Unify the DSV4 稀疏 注意力 path on the MixedQuantSparseFlashMla operator family from cann ops transformer, replacing the previous in-tree custom operators: - 移除 the in-tree KvCompressEpilog 自定义算子 (csrc/注意力/kv compress epi

#### 2026-09-22

- [PR #17263](https://github.com/vllm-project/vllm-ascend/pull/17263) 进行中
  - 中文：[性能] [DSpark]堆栈DeepSeek V4上下文WKV投影
  - 原文：[Performance][DSpark] Stack DeepSeek V4 context WKV projections
  - 说明：此PR从上游vLLM移植DeepSeek V4 DSpark上下文WKV堆栈优化： -上游PR ： vllm-project/vllm 54674在当前的vLLM Ascend DSpark实施中，每个草案层独立地将其WKV投影应用于

#### 2026-09-16

- [PR #15867](https://github.com/vllm-project/vllm-ascend/pull/15867) 已合并
  - 中文：[BugFix] [DSA]使用A5 BF16 KV散射的平面物理槽
  - 原文：[BugFix][DSA] Use flat physical slots for A5 BF16 KV scatter
  - 说明：【T, 2】A5 DeepSeek-V4 BF16 SparseFlashMla used (block, offset) slots for npu scatter nd 更新 . That layout is harder to capture under ACLGraph than the one-dimensional physical-slot convention already u

#### 2026-09-15

- [PR #16621](https://github.com/vllm-project/vllm-ascend/pull/16621) 进行中
  - 中文：【性能】跳过未使用的DeepSeek V4 MTP隐藏状态缓冲区操作
  - 原文：[Performance] Skip unused DeepSeek V4 MTP hidden-state buffer operations
  - 说明：vLLM Ascend的DeepSeek V4实现已经收集了配置的解码器层的辅助隐藏状态，并通过PPTransportDataType.AUX隐藏状态跨管道并行传输它们。草拟方法，如DSpa

#### 2026-09-14

- [PR #16542](https://github.com/vllm-project/vllm-ascend/pull/16542) 进行中
  - 中文：[性能] [DSA]将build_dspark_swa_indices融合到单个Triton内核中，用于DSv4 DSpark解码
  - 原文：[Performance][DSA] Fuse build_dspark_swa_indices into a single Triton kernel for DSv4 DSpark decode
  - 说明：build dspark swa indices builds the per-token 可见-KV-slot index table for DSv4 DSpark drafting. The eager implementation is a 12-op PyTorch chain (24 内核 launches), launch-bound at 解码 step sizes. This PR replaces it with a single

#### 2026-09-13

- [PR #16021](https://github.com/vllm-project/vllm-ascend/pull/16021) 已合并
  - 中文：[v0.27.1rc] [BugFix]使用Deepseek V4的SP修复DSACP
  - 原文：[v0.27.1rc][BugFix] Fix DSACP with SP for Deepseek V4
  - 说明：Currently DSACP with SP is implemented in a suboptimal way, Leading to regressed 性能 during 预填充. We 支持 further development for deepseek v4 with SP and DSACP. SP chunk is implemented in model, while 注意力 减少 scatter

#### 2026-09-10

- [Issue #16270](https://github.com/vllm-project/vllm-ascend/issues/16270) 进行中
  - 中文：【缺陷】【v0.26.0rc1】DeepSeek-V4 前缀缓存 0% hit rate for prompts shorter than 4096 tokens due to C4 压缩器 state 缓存 block_size=2
  - 原文：[Bug][v0.26.0rc1] DeepSeek-V4 prefix caching 0% hit rate for prompts shorter than 4096 tokens due to C4 compressor state cache block_size=2
- [PR #15549](https://github.com/vllm-project/vllm-ascend/pull/15549) 已合并
  - 中文：[BugFix]修复Deepseek V4 SP的DSACP
  - 原文：[BugFix] Fix DSACP with SP for Deepseek V4
  - 说明：Currently DSACP with SP is implemented in a suboptimal way, Leading to regressed 性能 during 预填充. We 支持 further development for deepseek v4 with SP and DSACP. SP chunk is implemented in model, while 注意力 减少 scatter

#### 2026-09-07

- [PR #15893](https://github.com/vllm-project/vllm-ascend/pull/15893) 进行中
  - 中文：修复/dspark standard 缓存 a3
  - 原文：Fix/dspark standard cache a3
  - 说明：DeepSeek-V4 DSpark could not 初始化 on any device: the 配置 patch routed the draft to DeepSeekV4DSparkMTP , which is A5-only and does not expose get draft KV 缓存 layer names 必填 by AscendDSparkProposer . This PR routes the draf

#### 2026-09-05

- [PR #15289](https://github.com/vllm-project/vllm-ascend/pull/15289) 已合并
  - 中文：【性能】熔断器DSV4多组时隙映射
  - 原文：[Performance] Fuse DSV4 multi-group slot mapping
  - 说明：This PR 合并 repeated DSV4 slot-mapping calculations for multiple 注意力 KV-缓存 groups into one Triton launch. - Build device-side pointer and 元数据 tables for eligible 注意力 groups. - Address each request row inside the 融合

#### 2026-09-04

- [PR #15530](https://github.com/vllm-project/vllm-ascend/pull/15530) 已合并
  - 中文：[v0.26.0rc] [性能] Fuse DSV4多组时隙映射
  - 原文：[v0.26.0rc][Performance] Fuse DSV4 multi-group slot mapping
  - 说明：Backport of 15289 to releases/v0.26.0rc . This change 合并 repeated DSV4 slot-mapping calculations for multiple 注意力 KV-缓存 groups into one Triton launch. - Build device-side pointer and 元数据 tables for eligible 注意力 group
- [PR #15302](https://github.com/vllm-project/vllm-ascend/pull/15302) 已合并
  - 中文：[v0.26.0rc] [性能]与q proj重叠DSA C4/C128压缩机机尾
  - 原文：[v0.26.0rc][Performance] Overlap DSA C4/C128 compressor tail with q proj
  - 说明：This PR overlaps the DeepSeek V4 C4 and C128 压缩器 tails with the Q RMSNorm and partial RoPE tail in the existing DSA multi-stream prolog. The implementation: - reuses the existing DSA auxiliary stream after the Q and SWA-KV branches j
- [PR #15305](https://github.com/vllm-project/vllm-ascend/pull/15305) 已合并
  - 中文：[性能]将DSA C4/C128压缩机机尾与q proj重叠
  - 原文：[Performance] Overlap DSA C4/C128 compressor tail with q proj
  - 说明：This PR overlaps the DeepSeek V4 C4 and C128 注意力-压缩器 tails with the Q RMSNorm and partial RoPE tail in the DSA multi-stream prolog. The implementation: - reuses the existing DSA auxiliary stream after the Q and SWA-KV branches

#### 2026-09-01

- [PR #15452](https://github.com/vllm-project/vllm-ascend/pull/15452) 进行中
  - 中文：[BugFix] [Model]重复使用DeepSeek-V4压缩机尾部工作区
  - 原文：[BugFix][Model] Reuse DeepSeek-V4 compressor tail workspace
  - 说明：DeepSeek-V4 压缩器 partial states are currently represented as token-indexed paged KV 缓存. For a large 预填充 chunk, the 调度器 reserves state pages for the full in-flight chunk across every 压缩器 layer, although only a small

#### 2026-08-17

- [PR #14438](https://github.com/vllm-project/vllm-ascend/pull/14438) 草稿
  - 中文：【Draft】【性能】新增 DSA 压缩器 序列 parallel
  - 原文：[Draft][Performance] Add DSA Compressor sequence parallel
  - 说明：【Draft】【性能】新增 DSA 压缩器 序列 parallel Reduces redundant DSA 压缩器 computation across TP ranks for DeepSeek-V4 DSA-CP 预填充, plus a stack of DSV4 性能 work this line carries (Q-projection 重叠, SWA SP, o-

### DeepSeek V4 Flash

#### 2026-10-14

- [Issue #13794](https://github.com/vllm-project/vllm-ascend/issues/13794) 已关闭
  - 中文：【缺陷】: DeepSeek-V4-Flash-0731多轮对话出现DSML标签泄漏并重复回答
  - 原文：[Bug]:  DeepSeek-V4-Flash-0731多轮对话出现DSML标签泄漏并重复回答
- [PR #18630](https://github.com/vllm-project/vllm-ascend/pull/18630) 进行中
  - 中文：【特点】【WeightTransfer】支持DeepSeek-V4 Flash Vision权重转移
  - 原文：[Feature][WeightTransfer] Support DeepSeek-V4 Flash Vision weight transfer
  - 说明：Adds a DeepSeek-V4-Flash-Vision lane to the one-card NPU IPC 权重-transfer e2e test, and fixes the defects in the --启用-sleep-mode + layerwise 权重-更新 + ACL-graph-replay path that the multimodal model exposes. The vision tower is

#### 2026-10-13

- [PR #18608](https://github.com/vllm-project/vllm-ascend/pull/18608) 进行中
  - 中文：[文档]修复了v0.30.0rc1发行说明中的TurboQuant模型归因
  - 原文：[Doc] Fix TurboQuant model attribution in v0.30.0rc1 release notes
  - 说明：What Corrects the TurboQuant 特性 attribution in the v0.30.0rc1 release notes: 1. TurboQuant is supported on DeepSeek V4 Flash (DSA 稀疏 注意力), not DeepSeek V4.1 ??移除 the TurboQuant references from the DeepSeek V4.1 entries.
- [Issue #13478](https://github.com/vllm-project/vllm-ascend/issues/13478) 已关闭
  - 中文：【缺陷】: Deepseek-V4-Flash-0731-kvpool压测问题，128K上下文压测90K输入1K输出请求卡住
  - 原文：[Bug]: Deepseek-V4-Flash-0731-kvpool压测问题，128K上下文压测90K输入1K输出请求卡住
- [PR #18529](https://github.com/vllm-project/vllm-ascend/pull/18529) 进行中
  - 中文：【文档】【模型】更新 DeepSeek-V4-Flash DSpark PD 配置 for MRV2 and PCP
  - 原文：[Doc][Model] Update DeepSeek-V4-Flash DSpark PD configuration for MRV2 and PCP
  - 说明：更新 the DeepSeek-V4-Flash A3 PD separation DSpark examples in section 5.2 to the final tested MRV2 配置: 1P1D with P = DP4 × TP1 × PCP4 and D = DP16 × TP1 × PCP1, using 16 logical NPU devices per node. - 新增 --pcp-size to the sh
- [Issue #13976](https://github.com/vllm-project/vllm-ascend/issues/13976) 已关闭
  - 中文：【缺陷】: DeepSeek V4 Flash DSpark 推理调用未定义方法 get_draft_attn_causal
  - 原文：[Bug]: DeepSeek V4 Flash DSpark 推理调用未定义方法 get_draft_attn_causal

#### 2026-10-12

- [Issue #18388](https://github.com/vllm-project/vllm-ascend/issues/18388) 进行中
  - 中文：[文档] ： `/zh-cn/latest/tutorials/models/DeepSeek-V4-Flash.html`的反馈
  - 原文：[Doc]: Feedback for `/zh-cn/latest/tutorials/models/DeepSeek-V4-Flash.html`
  - 说明：📚 The doc issue latest文档 单机dspark部署，文档中有一行参数 --注意力 配置.索引器 kv dtype int8 \ 加上之后会报错 <img width="1024" height="83" alt="Image" src=" / Suggest a potential alternative/修复 No response
- [PR #18339](https://github.com/vllm-project/vllm-ascend/pull/18339) 已关闭
  - 中文：【修复】【Worker】Zero static KV buffers after cudagraph capture (re-land with hardened strided zeroing)
  - 原文：[BugFix][Worker] Zero static KV buffers after cudagraph capture (re-land with hardened strided zeroing)
  - 说明：Re-lands 17659, which was auto-reverted by 18307 after breaking the DeepSeek-V4-Flash 夜间 ( Same goal, hardened implementation. Zero every KV-缓存 / recurrent-state tensor in static forward context right after cudagraph capture (v1 NPU
- [PR #18364](https://github.com/vllm-project/vllm-ascend/pull/18364) 进行中
  - 中文：【持续集成】新增 每周用例 DeepSeek-V4-Flash-Memcache-PD-perf
  - 原文：[CI] Add weekly case DeepSeek-V4-Flash-Memcache-PD-perf
  - 说明：新增 每周用例 DeepSeek-V4-Flash-Memcache-PD-perf - vLLM main:

#### 2026-10-11

- [PR #18288](https://github.com/vllm-project/vllm-ascend/pull/18288) 已合并
  - 中文：【Cherry-pick】【releases/v0.30.0】【修复】【持续集成】DeepSeek V4 Flash dataset path (from #18287)
  - 原文：[Cherry-pick][releases/v0.30.0][BugFix][CI] Fix DeepSeek V4 Flash dataset path (from #18287)
  - 说明：Cherry-pick of PR 18287 onto releases/v0.30.0 . Original PR: 18287 Original author: @czydyy --- 修复 the dataset directory typo in the daily and 每周 DeepSeek V4 Flash 性能 case configurations ( DeekSeek → DeepSeek ). This allows th
- [PR #18287](https://github.com/vllm-project/vllm-ascend/pull/18287) 已合并
  - 中文：【修复】【持续集成】DeepSeek V4 Flash dataset path
  - 原文：[BugFix][CI] Fix DeepSeek V4 Flash dataset path
  - 说明：修复 the dataset directory typo in the daily and 每周 DeepSeek V4 Flash 性能 case configurations ( DeekSeek → DeepSeek ). This allows the cases to find the intended input dataset. No. T

#### 2026-10-10

- [Issue #17476](https://github.com/vllm-project/vllm-ascend/issues/17476) 已关闭
  - 中文：【缺陷】: Deepseek V4 Flash 0731 BF16 权重 converted by msmodelslim lose 精度 when `quant_model_description.json` is present
  - 原文：[Bug]: Deepseek V4 Flash 0731 BF16 weights converted by msmodelslim lose accuracy when `quant_model_description.json` is present
- [Issue #18212](https://github.com/vllm-project/vllm-ascend/issues/18212) 进行中
  - 中文：【缺陷】: DeepSeek V4 Flash fails in MRV2 dummy batch with DSpark + DSA CP: aclnnInplacePartialRotaryMul tiling dim0 mismatch
  - 原文：[Bug]: DeepSeek V4 Flash fails in MRV2 dummy batch with DSpark + DSA CP: aclnnInplacePartialRotaryMul tiling dim0 mismatch
- [PR #17362](https://github.com/vllm-project/vllm-ascend/pull/17362) 已合并
  - 中文：[CI]添加案例DeepSeek-V4-Flash-w8a8-bugtest-acc
  - 原文：[CI] Add case DeepSeek-V4-Flash-w8a8-bugtest-acc
  - 说明：添加案例DeepSeek-V4-Flash-w8a8-bugtest-acc - vLLM主要：
- [PR #17599](https://github.com/vllm-project/vllm-ascend/pull/17599) 已合并
  - 中文：[CI]添加每周案例DeepSeek-V4-Flash-w8a8-sleep-wakeup
  - 原文：[CI] Add weekly case DeepSeek-V4-Flash-w8a8-sleep-wakeup
  - 说明：添加每周案例DeepSeek-V4-Flash-w8a8-sleep-wakeup修改aisbench.py - vLLM主要：

#### 2026-10-09

- [PR #16836](https://github.com/vllm-project/vllm-ascend/pull/16836) 已合并
  - 中文：【持续集成】【MRV2】新增 DeepSeek V4 Flash PD 夜间用例
  - 原文：[CI][MRV2] Add DeepSeek V4 Flash PD nightly case
  - 说明：此PR的作用添加了DeepSeek V4 Flash MRV2分解预填充Nightly案例。该分支在vLLM Ascend main 0a52fdd60d1686f34d7c942ff2ec8ae32b746359上干净地重建。之前的冲突历史记录保留在pgzddxx中

#### 2026-10-08

- [PR #17961](https://github.com/vllm-project/vllm-ascend/pull/17961) 已合并
  - 中文：[BugFix] [DSA]修复A5 MXFP8 O-proj TP和MRV2 DSACP服务
  - 原文：[BugFix][DSA] Fix A5 MXFP8 O-proj TP and MRV2 DSACP serving
  - 说明：修复 the complete set of Python failures observed when 服务 DeepSeek-V4-Flash with MRV2 DSACP on P and A5 MXFP8 O-proj TP on D. 1. A5 FP8 O-proj bypasses the OTP collectives. The FP8 branch runs before the OTP branch, although wo a is alr

#### 2026-09-30

- [PR #17796](https://github.com/vllm-project/vllm-ascend/pull/17796) 已合并
  - 中文：【持续集成】【MRV2】新增 DeepSeek V4 Flash single-node 夜间用例
  - 原文：[CI][MRV2] Add DeepSeek V4 Flash single-node nightly case
  - 说明：What this PR does Splits the DeepSeek V4 Flash MRV2 single-node colocated 夜间用例 out of 16836 so the single-node and PD cases can be reviewed and validated independently. Base Built from vLLM Ascend main at 395432829b21352c7cd620e7755

#### 2026-09-29

- [PR #17737](https://github.com/vllm-project/vllm-ascend/pull/17737) 已合并
  - 中文：[CI]修复A5测试用例的DeepSeek-V4-Flash模型路径
  - 原文：[CI] Fix DeepSeek-V4-Flash model path for A5 test cases
  - 说明：更新 the DeepSeek-V4-Flash model path in A5 测试用例 to point to the correct local 缓存 directory No by the running the test
- [PR #17711](https://github.com/vllm-project/vllm-ascend/pull/17711) 已合并
  - 中文：【v0.27.1rc】【文档】更新 DSV4 Flash Doc
  - 原文：[v0.27.1rc][Doc] Update DSV4 Flash Doc
  - 说明：<!-- BEFORE SUBMITTING, PLEASE READ -- <!-- - Please clarify what changes you are proposing. The purpose of this section is to outline the changes and how this PR fixes

#### 2026-09-28

- [PR #17648](https://github.com/vllm-project/vllm-ascend/pull/17648) 已合并
  - 中文：【v0.27.1rc】【文档】更新 DSV4 Flash Doc
  - 原文：[v0.27.1rc][Doc] Update DSV4 Flash Doc 
  - 说明：This PR 更新 the DeepSeek-V4-Flash documentation to 新增 支持 for the Ascend 950DT server based on vLLM-Ascend v0.27.1rc. - v
- [PR #17624](https://github.com/vllm-project/vllm-ascend/pull/17624) 进行中
  - 中文：【测试】新增 KV 池化 to DSV4-Flash 夜间 (PD / A5 / A3 / MTP3)
  - 原文：[Test] Add KV pooling to DSV4-Flash nightly (PD / A5 / A3 / MTP3)
  - 说明：Motivation KV 池化 (AscendStoreConnector, both memcache and mooncake backends, with/without use layerwise ) currently has no 夜间 coverage : a 池化 回退 would not be caught until a manual 每周/CI run happens. This PR brings

#### 2026-09-24

- [Issue #16552](https://github.com/vllm-project/vllm-ascend/issues/16552) 已关闭
  - 中文：【功能】: 大EP启动时长优化
  - 原文：[Feature]: 大EP启动时长优化
  - 说明：PD 分离大 EP 下，DeepSeek V4 Flash / Pro、GLM 等模型，以及 2 机 / 4 机 / 8 机等场景，首次拉起都偏长。一个 Prefill 或 Decode pod 会同时拉多路 vllm serve ，从进程起来到可以服务经常要数分钟。 偏长、也较有优化空间的阶段： - 构图：量化配置扫描、RMSNorm、MTP 再构图 - 权重加载：多卡并行读盘；加载线程不合适时 I/O 会变成墙钟 - 进程拉起：同一 pod 多路重复 import / 初

#### 2026-09-23

- [Issue #17385](https://github.com/vllm-project/vllm-ascend/issues/17385) 进行中
  - 中文：【缺陷】: DeepSeek V4 flash流式输出概率性返回最后一个trunk中的delta为空，与N卡表现不一致
  - 原文：[Bug]: DeepSeek V4 flash流式输出概率性返回最后一个trunk中的delta为空，与N卡表现不一致

#### 2026-09-10

- [Issue #16193](https://github.com/vllm-project/vllm-ascend/issues/16193) 进行中
  - 中文：[Bug]: vllm-ascend 双机启动 DeepSeek-V4-Flash-Vision-Exp 失败： profile_run 阶段 aclnnMoeDistributeDispatchV4 报错 561002 （ expertScales 为空）
  - 原文：[Bug]: vllm-ascend 双机启动 DeepSeek-V4-Flash-Vision-Exp 失败：profile_run 阶段 aclnnMoeDistributeDispatchV4 报错 561002（expertScales 为空）

#### 2026-08-11

- [Issue #13980](https://github.com/vllm-project/vllm-ascend/issues/13980) 进行中
  - 中文：[Bug] ： DeepSeekV4-flash-0731 memcache在特定长度的memcache命中时崩溃
  - 原文：[Bug]: DeepSeekV4-flash-0731 memcache crash on specific-length memcache hit

#### 2026-08-03

- [Issue #13393](https://github.com/vllm-project/vllm-ascend/issues/13393) 进行中
  - 中文：【Bug】：模型使用的模型范围下载的DeepSeek-V4-Flash-DSpark-w4a8-test ， a2系列的 910b3 使用官方的启动脚本报错
  - 原文：[Bug]: 模型使用的model scope下载的DeepSeek-V4-Flash-DSpark-w4a8-test ，a2系列的910b3 使用官方的启动脚本报错

### DeepSeek V4.1

#### 2026-10-13

- [PR #18588](https://github.com/vllm-project/vllm-ascend/pull/18588) 已合并
  - 中文：【文档】【功能】更新 DeepSeek-V4.1-Flash A2 Deployment guide
  - 原文：[Doc][Feature] Update DeepSeek-V4.1-Flash A2 Deployment guide
  - 说明：更新 DeepSeek-V4.1-Flash deployment guide - vLLM main:
- [Issue #18585](https://github.com/vllm-project/vllm-ascend/issues/18585) 进行中
  - 中文：[Doc] ： `/zh-cn/v0.30.0rc1/user_guide/release_notes.html`的反馈
  - 原文：[Doc]: Feedback for `/zh-cn/v0.30.0rc1/user_guide/release_notes.html`
  - 说明：📚 The doc issue <img width="1670" height="801" alt="Image" src=" / The DeepSeek V4.1 adaptation in v0.30.0rc1 does not 支持 turboquant 4bit nc Suggest a potential alternative/修复 No response
- [PR #18530](https://github.com/vllm-project/vllm-ascend/pull/18530) 已合并
  - 中文：【文档】【功能】A2 PD deployment for DeepSeek-V4.1-Flash
  - 原文：[Doc][Feature] Add A2 PD deployment for DeepSeek-V4.1-Flash
  - 说明：This PR adds the A2 1P1D disaggregated deployment guide and the A2 1P1D deployment with Mooncake KV 缓存 Pool guide for the DeepSeek-V4.1-Flash model. Yes, it 更新 the documentation to incl
- [PR #17097](https://github.com/vllm-project/vllm-ascend/pull/17097) 已关闭
  - 中文：【性能】重叠 V4.1 DSA-CP gathers
  - 原文：[Performance] Overlap V4.1 DSA-CP gathers
  - 说明：DeepSeek V4.1 DSA-CP with 序列-parallel MoE previously used an activation all-gather before 注意力, an 注意力-output all-to-all, and an output 减少-scatter. This PR keeps the query input 序列-sharded and asynchronously gathe
- [PR #18516](https://github.com/vllm-project/vllm-ascend/pull/18516) 已关闭
  - 中文：【文档】【功能】A2 PD deployment for DeepSeek-V4.1-Flash
  - 原文：[Doc][Feature] Add A2 PD deployment for DeepSeek-V4.1-Flash
  - 说明：This PR adds the A2 1P1D disaggregated deployment guide and the A2 1P1D deployment with Mooncake KV 缓存 Pool guide for the DeepSeek-V4.1-Flash model. Yes, it 更新 the documentation to incl
- [PR #17840](https://github.com/vllm-project/vllm-ascend/pull/17840) 已关闭
  - 中文：【文档】【功能】A2 PD deployment for DeepSeek-V4.1-Flash.
  - 原文：[Doc][Feature] Add A2 PD deployment for DeepSeek-V4.1-Flash.
  - 说明：新增 A2 deployment for DeepSeek-V4.1-Flash. - vLLM main:
- [Issue #18507](https://github.com/vllm-project/vllm-ascend/issues/18507) 进行中
  - 中文：【文档】: Feedback for `/en/v0.30.0rc1/tutorials/models/DeepSeek-V4.1-Flash.html`
  - 原文：[Doc]: Feedback for `/en/v0.30.0rc1/tutorials/models/DeepSeek-V4.1-Flash.html`
  - 说明：📚 The doc issue DSV4.1的PD分离部署方案缺少A2的部署指导 Suggest a potential alternative/修复 No response
- [PR #18495](https://github.com/vllm-project/vllm-ascend/pull/18495) 进行中
  - 中文：[文档] [模型]更新DeepSeek V4.1部署和Memcache池化指南
  - 原文：[Doc][Model] Update DeepSeek V4.1 deployment and Memcache pooling guide
  - 说明：更新 the DeepSeek-V4.1-Flash tutorial with a complete 1P1D Memcache KV 缓存 Pool deployment example, including MetaService, standalone pool services, 配置 files, and startup order. Explain why the model uses non-layerwise poolin
- [PR #18491](https://github.com/vllm-project/vllm-ascend/pull/18491) 草稿
  - 中文：修复deepseekv4.1的睡眠模式错误
  - 原文：fix sleep mode bug of deepseekv4.1
  - 说明：Adds a DeepSeek-V4.1 lane to the one-card NPU IPC 权重-transfer e2e test, and fixes five defects in the --启用-sleep-mode + layerwise 权重-更新 + ACL-graph-replay path that the new lane exposed. None of the five is V4.1-specific; ea

#### 2026-10-12

- [PR #18282](https://github.com/vllm-project/vllm-ascend/pull/18282) 已合并
  - 中文：[BugFix] [PCP] [0.30.0]支持DeepSeek V4.1的多模式输入
  - 原文：[BugFix][PCP][0.30.0] Support multimodal inputs for DeepSeek V4.1
  - 说明：Backport 18281 to releases/v0.30.0 . 启用 MRV2 PCP multimodal inputs for DeepSeek V4.1. Use the batch's common padded length for embedding all-gather and 减少-scatter when ranks have unequal valid token counts, while reusing 修复-capac
- [PR #18322](https://github.com/vllm-project/vllm-ascend/pull/18322) 已合并
  - 中文：【修复】【模型】Backport SWA bounded replay to vLLM 0.30
  - 原文：[BugFix][Model] Backport SWA bounded replay to vLLM 0.30
  - 说明：Backport the opt-in SWA bounded replay admission protocol to vLLM 0.30.0 so the Ascend DeepSeek V4.1 worker can rebuild its SWA window after a local 前缀-缓存 hit without replacing installed vLLM source files or compiled operators. Adds
- [PR #18430](https://github.com/vllm-project/vllm-ascend/pull/18430) 已合并
  - 中文：[文档]修复了版本v0.30.0上的DeepSeek-V4.1-Flash KV缓存池链接
  - 原文：[Doc] Fix DeepSeek-V4.1-Flash KV Cache Pool links on release v0.30.0
  - 说明：The release branch's DeepSeek-V4.1-Flash guide still points to kv pool.md after the Ascend Store guide was renamed. These three missing-page links abort both English and Chinese Read the Docs builds in 严格 mode. 更新 the three links to
- [PR #18342](https://github.com/vllm-project/vllm-ascend/pull/18342) 已合并
  - 中文：【v0.30.0】【文档】新增 DeepSeek V4.1 Memcache 池化 guide
  - 原文：[v0.30.0][Doc] Add DeepSeek V4.1 Memcache pooling guide
  - 说明：- vLLM main:
- [PR #18381](https://github.com/vllm-project/vllm-ascend/pull/18381) 进行中
  - 中文：[文档] [模型]在DeepSeek-V4.1-Flash指南中将A2 1M上下文标记为未验证
  - 原文：[Doc][Model] Mark A2 1M context as unvalidated in DeepSeek-V4.1-Flash guide
  - 说明：Mark the A2 1M context 配置 as unvalidated, and complete the A2 launch command with the missing --engram-配置 in docs/source/tutorials/models/DeepSeek-V4.1-Flash.md : - Section 5.3 presents --max-model-len 1048576 as a ready-to-r
- [Issue #18378](https://github.com/vllm-project/vllm-ascend/issues/18378) 进行中
  - 中文：【Bug】： DeepSeek-V4.1-Flash PD + thinking-ON ：解码仍在产令牌，但经 Mooncake PD 代理的 SSE 出现稳定 ~ 41s 空档
  - 原文：[Bug]: DeepSeek-V4.1-Flash PD + thinking-ON：Decode 仍在产 token，但经 Mooncake PD 代理的 SSE 出现稳定 ~41s 空档
  - 说明：环境 项 值 --- --- 硬件 2× Atlas 800 A3（1P1D），共 32 die 镜像 quay.io/ascend/vllm-ascend:夜间-main-a3 （vLLM ≈ 0.30.0，2026-10-10 构建） 模型 DeepSeek-V4.1-Flash-w8a8（权重路径作 served model id） 拓扑 预填充: DP4/TP4 @ node0；解码: DP8/TP2 @ node1 KV MooncakeH
- [PR #18281](https://github.com/vllm-project/vllm-ascend/pull/18281) 已合并
  - 中文：【修复】【PCP】支持 multimodal inputs for DeepSeek V4.1
  - 原文：[BugFix][PCP] Support multimodal inputs for DeepSeek V4.1
  - 说明：启用 MRV2 PCP multimodal inputs for DeepSeek V4.1. Use the batch's common padded length for embedding all-gather and 减少-scatter when ranks have unequal valid token counts, while reusing 修复-capacity buffers and returning only local

#### 2026-10-11

- [Issue #18304](https://github.com/vllm-project/vllm-ascend/issues/18304) 进行中
  - 中文：[Bug] [A3] DeepSeek-V4.1 ：缺少causal_conv1d_update_npu - > CausalConv1dBwd ACL-图形崩溃导致解码EngineCores
  - 原文：[Bug][A3] DeepSeek-V4.1: missing causal_conv1d_update_npu -> CausalConv1dBwd ACL-graph crash kills decode EngineCores
  - 说明：What happened? On Ascend A3, running DeepSeek-V4.1-Flash (w8a8) with DSpark MTP ( num 投机 tokens=5 ) + CUDAGraphMode.FULL 解码 ONLY on a 解码-side DP8×TP2 (EP16) deployment, the 解码 service dies reproducibly. Two consecutive
- [PR #18191](https://github.com/vllm-project/vllm-ascend/pull/18191) 已合并
  - 中文：【修复】Mark DeepSeek V4.1 input embeddings dynamic for torch.compile
  - 原文：[BugFix] Mark DeepSeek V4.1 input embeddings dynamic for torch.compile
  - 说明：新增 inputs embeds: 0 to the existing DeepseekV41Model torch.compile dynamic argument mapping. MRV2 can pass precomputed embeddings to the backbone. Their token dimension varies between profiling, 预填充 and 解码. Marking only input ids a
- [PR #17742](https://github.com/vllm-project/vllm-ascend/pull/17742) 已合并
  - 中文：【功能】【模型】支持 DeepSeek V4.1 Endoder SWA bounded replay
  - 原文：[Feature][Model] Support DeepSeek V4.1 Endoder SWA bounded replay
  - 说明：支持 DeepSeek V4.1 SWA bounded replay on Ascend, integrating the upstream replay mechanism from vllm-project/vllm 56227. After a 前缀-缓存 hit, rebuild the sliding-window KV while preserving the 共享 cached KV of other 缓存 groups.

#### 2026-10-10

- [PR #18184](https://github.com/vllm-project/vllm-ascend/pull/18184) 已合并
  - 中文：【修复】【v0.30.0】Define draft token mapping for full-vocabulary DSpark models
  - 原文：[BugFix][v0.30.0] Define draft token mapping for full-vocabulary DSpark models
  - 说明：Backport of to releases/v0.30.0 . Define draft id to target id = None on the Ascend DeepSeek V4 and DeepSeek V4.1 DSpark model classes. Their draft token IDs already match target token IDs, so they need no remapping. This exposes the attrib
- [PR #18182](https://github.com/vllm-project/vllm-ascend/pull/18182) 已合并
  - 中文：【修复】Define draft token mapping for full-vocabulary DSpark models
  - 原文：[BugFix] Define draft token mapping for full-vocabulary DSpark models
  - 说明：Define draft id to target id = None on the Ascend DeepSeek V4 and DeepSeek V4.1 DSpark model classes. Their draft token IDs already match target token IDs, so they need no remapping. This exposes the attribute read by the DSpark speculator.
- [PR #18221](https://github.com/vllm-project/vllm-ascend/pull/18221) 进行中
  - 中文：【功能】【模型】支持 DeepSeek V4.1 SWA bounded replay on the Ascend V1 runner
  - 原文：[Feature][Model] Support DeepSeek V4.1 SWA bounded replay on the Ascend V1 runner
  - 说明：DeepSeek V4.1-Flash runs a 128-token sliding window in every layer. Persisting that window in the 前缀缓存 costs more than the compressed KV it protects, so upstream's SWA bounded replay takes the SWA group out of 前缀缓存 and, on
- [PR #18114](https://github.com/vllm-project/vllm-ascend/pull/18114) 已合并
  - 中文：【功能】【PCP】【v0.30.0】DeepSeek V4.1 PCP 支持
  - 原文：[Feature][PCP][v0.30.0] Add DeepSeek V4.1 PCP support
  - 说明：Backport 17992 to releases/v0.30.0 : - DeepSeek V4.1 MRV2 PCP, O projection 权重 sharding and Q/KV multistream preprocessing. - Engram PCP token 路由 and DP × PCP host table sharing/sharding. - Legacy DSACP padded projection 修复. Does
- [PR #18190](https://github.com/vllm-project/vllm-ascend/pull/18190) 已关闭
  - 中文：【修复】Mark DeepSeek V4.1 input embeddings dynamic for torch.compile
  - 原文：[BugFix] Mark DeepSeek V4.1 input embeddings dynamic for torch.compile
  - 说明：新增 inputs embeds: 0 to the existing DeepseekV41Model torch.compile dynamic argument mapping. MRV2 can pass precomputed embeddings to the backbone. Their token dimension varies between profiling, 预填充 and 解码. Marking only input ids a
- [Issue #18166](https://github.com/vllm-project/vllm-ascend/issues/18166) 进行中
  - 中文：【缺陷】: DeepSeek V4.1 启用 EPLB 配置 report error
  - 原文：[Bug]: DeepSeek V4.1 enable EPLB config report error
- [Issue #18158](https://github.com/vllm-project/vllm-ascend/issues/18158) 进行中
  - 中文：【文档】: Latest vLLM-Ascend Official Guide for DS-V4.1-Flash with Custom Image Causes OOM and Irrecoverable Service Startup Failure on Atlas 900 A2 PoDc (4-Node/32-Card)
  - 原文：[Doc]: Latest vLLM-Ascend Official Guide for DS-V4.1-Flash with Custom Image Causes OOM and Irrecoverable Service Startup Failure on Atlas 900 A2 PoDc (4-Node/32-Card)
  - 说明：📚 The doc issue Environment Item Value --------------- ---------------------------------------------------- Model DeepSeek-V4.1-Flash Framework Custom image (proprietary) with vLLM-Ascend Hardware Atlas 900 A2 PoDc, 4 nodes × 8 cards = 32×
- [PR #17989](https://github.com/vllm-project/vllm-ascend/pull/17989) 已关闭
  - 中文：[功能] [型号]使用共享Engram添加DeepSeek V4.1 MRV2 PCP
  - 原文：[Feat][Model] Add DeepSeek V4.1 MRV2 PCP with shared Engram
  - 说明：新增 DeepSeek V4.1 PCP 支持 on MRV2, following the DSA PCP path in 14037 and the MRV2 integration in 16899. - Separate rank-local queries from global 缓存 更新; gather and 恢复 hidden states before updating replicated KV and compre

#### 2026-10-09

- [PR #18131](https://github.com/vllm-project/vllm-ascend/pull/18131) 进行中
  - 中文：【性能】【模型】移除 TensorMove after DeepSeek V4.1 MXFP8 o_proj
  - 原文：[Performance][Model] Remove TensorMove after DeepSeek V4.1 MXFP8 o_proj
  - 说明：For DeepSeek V4.1 on Ascend A5 with MXFP8 wo b , 新增 an aclnnQuantMatmulV5 binding that accepts a caller-provided output tensor. forward o proj quantizes the activation and writes the GEMM result directly into the graph-stable 注意力 out
- [PR #17992](https://github.com/vllm-project/vllm-ascend/pull/17992) 已合并
  - 中文：【功能】【PCP】DeepSeek V4.1 PCP 支持
  - 原文：[Feature][PCP] Add DeepSeek V4.1 PCP support
  - 说明：基于17927合并后的main。-在Ascend A5上为DeepSeek V4.1添加MRV2 PCP支持，包括PCP O投影权重分片和Q/KV多流预处理。-支持Engram的PCP令牌路由。-保留带衬垫的投影
- [PR #18052](https://github.com/vllm-project/vllm-ascend/pull/18052) 已合并
  - 中文：[BugFix] [Model] [v0.30.0]修复Model Runner v2中的Engram历史记录和查找时间
  - 原文：[BugFix][Model][v0.30.0] Fix Engram history and lookup timing in model runner v2
  - 说明：Backport 17794到release/v0.30.0。修复了模型运行器v2中的DeepSeek V4.1 Engram历史记录和查找时间。推迟回退查找，直到前向上下文可用，保留图形捕获的生产商和重播元数据清理，并预先
- [PR #17794](https://github.com/vllm-project/vllm-ascend/pull/17794) 已合并
  - 中文：[BugFix] [Model]修复Model Runner v2中的Engram历史记录和查找时间
  - 原文：[BugFix][Model] Fix Engram history and lookup timing in model runner v2
  - 说明：修复16899之后MRV2中的DeepSeek V4.1 Engram查找时间。重用main的EngramModelState并将查找延迟到正向上下文，保留图形捕获的生成器和重播元数据清理。TODO （跟进） ：支持MRV2 Engram wit
- [PR #18101](https://github.com/vllm-project/vllm-ascend/pull/18101) 草稿
  - 中文：【Feat】【Engram】新增 AICPU URMA Cube 卸载 with 解码 stream scheduling
  - 原文：[Feat][Engram] Add AICPU URMA Cube offload with decode stream scheduling
  - 说明：Adds the opt-in experimental aicpu urma cube hbm backend for DeepSeek V4.1 Engram host 卸载 on 950DT. AICPU submits URMA reads of 检查点 E4M3 codes into HBM; these codes and HBM E8M0 scales feed the existing MXFP8 Cube WKV projection
- [Issue #18092](https://github.com/vllm-project/vllm-ascend/issues/18092) 进行中
  - 中文：【文档】: DeepSeek-V4.1-Flash，4机A2按照官网配置参数无法拉起1M上下文
  - 原文：[Doc]: DeepSeek-V4.1-Flash，4机A2按照官网配置参数无法拉起1M上下文
  - 说明：📚 文档问题建议潜在的替代方案/解决方案无响应
- [PR #18081](https://github.com/vllm-project/vllm-ascend/pull/18081) 已合并
  - 中文：[性能]为deepseek V4.1启用torch.compile
  - 原文：[Performance] enable torch.compile for the deepseek V4.1
  - 说明：-使用@ support torch compile装饰DeepseekV41Model ，以便vLLM的编译路径捕获V4.1主干。这是vllm ascend中唯一未装饰的DeepSeek型号： deepseek v4/model.py和deepseek v41/dspark.py已经选择加入。
- [Issue #18055](https://github.com/vllm-project/vllm-ascend/issues/18055) 进行中
  - 中文：[Doc]: Feedback for `/zh-cn/latest/tutorials/models/DeepSeek-V4.1-Flash.html`使用改指导 4节点 A2部署 DeepSeek-V4.1-Flash 1M上下文失败 ，提示 OOM
  - 原文：[Doc]: Feedback for `/zh-cn/latest/tutorials/models/DeepSeek-V4.1-Flash.html`使用改指导4节点A2部署DeepSeek-V4.1-Flash 1M上下文失败，提示OOM
  - 说明：📚 The doc issue 4节点A2服务器按照5.3 Multi-Node Colocated Deployment部署失败提示OOM。按照社区的指导部署1M上下文拉起报错提示显存不够。请核实启动命令 Suggest a potential alternative/修复 No response
- [Issue #18041](https://github.com/vllm-project/vllm-ascend/issues/18041) 进行中
  - 中文：[文档] ： `/zh-cn/latest/tutorials/models/DeepSeek-V4.1-Flash.html`的反馈按照当前指导部署后拉起会失败
  - 原文：[Doc]: Feedback for `/zh-cn/latest/tutorials/models/DeepSeek-V4.1-Flash.html`按照当前指导部署后拉起会失败
  - 说明：📚 The doc issue 使用当前链接拉取deepseek-v4.1-flash-a3镜像后在A3上部署1P1D时会启动失败。 通过尝试，需要使用v0.27.1rc1-a3镜像才可以。 Suggest a potential alternative/修复 请确认A3上部署1P1D使用镜像并更新相关文档。

#### 2026-10-08

- [PR #17927](https://github.com/vllm-project/vllm-ascend/pull/17927) 已合并
  - 中文：【功能】【模型】DeepSeek V4.1 支持 and 执行优化 on Ascend A5
  - 原文：[Feature][Model] Add DeepSeek V4.1 support and execution optimizations on Ascend A5
  - 说明：新增 DeepSeek V4.1 支持 on Ascend A5 and integrate 元数据, 索引器, QKV and Engram 优化. This remains a draft pending CI, native-source rebuild verification and broader 运行时 coverage. The original 序列 separates native o

#### 2026-09-30

- [PR #17427](https://github.com/vllm-project/vllm-ascend/pull/17427) 已合并
  - 中文：[Engram] [BugFix]支持带有节点本地头分片和共享内存的多节点DP
  - 原文：[Engram][BugFix] Support multi-node DP with node-local head sharding and shared memory
  - 说明：Engram uses the global DP group and rejects replicas on different nodes, preventing the multi-node DeepSeek V4.1 topology in 17236. Use vLLM's node-local Engram DP (EDP) group and size directly from The verified vLLM pin owns group initiali

#### 2026-09-29

- [PR #17085](https://github.com/vllm-project/vllm-ascend/pull/17085) 已合并
  - 中文：【持续集成】新增 DeepSeek V4.1 Flash 夜间 coverage
  - 原文：[CI] Add DeepSeek V4.1 Flash nightly coverage
  - 说明：This PR adds a two-node A3 DeepSeek V4.1 Flash W8A8 disaggregated-预填充 夜间 配置. It runs GPQA 精度 before the 16k/1k and 128k/1k 前缀-90 性能 cases, including the 128k warmup, and registers the case in the A3 do
- [Issue #17749](https://github.com/vllm-project/vllm-ascend/issues/17749) 进行中
  - 中文：【Release】: Release 清单 for v0.30.0rc1
  - 原文：[Release]: Release checklist for v0.30.0rc1
  - 说明：【x】【x】- DeepSeek V4.1 on Model Runner V2 with TurboQuant 4-bit latent KV 缓存, torch.compile, and startup acceleration: - GLM-5.3 稀疏 SFA C8 packed KV 缓存, GLM MRV2 fixes, and always-on reasoning:
- [PR #16899](https://github.com/vllm-project/vllm-ascend/pull/16899) 已合并
  - 中文：【MRV2】【功能】支持 DeepSeek V4.1 on MRV2
  - 原文：[MRV2][Feature] Support DeepSeek V4.1 on MRV2
  - 说明：This PR integrates the existing Ascend DeepSeek V4.1 execution path with Model Runner V2. It adds the 必填 KV 缓存 allocation and binding, 注意力 元数据, 压缩器 state, Engram input preparati
- [PR #17513](https://github.com/vllm-project/vllm-ascend/pull/17513) 已合并
  - 中文：[BugFix] [Engram]支持BF16检查点，无需隐式量化
  - 原文：[BugFix][Engram] Support BF16 checkpoints without implicit quantization
  - 说明：DeepSeek V4.1 BF16 检查点 are needed for RL rollout inference, but Engram unconditionally opens a QuaRot file and converts BF16 embedding rows to INT8. A non-quantized 检查点 now keeps BF16 table

#### 2026-09-24

- [PR #17496](https://github.com/vllm-project/vllm-ascend/pull/17496) 进行中
  - 中文：【特点】【型号】支持DeepSeek V4.1解码器绑定重放
  - 原文：[Feature][Model] Support DeepSeek V4.1 decoder bounded replay
  - 说明：新增 decoder bounded replay for DeepSeek V4.1 on Ascend MRV2, following vllm-project/vllm 58132. For eligible 预填充 requests, layers after the last KV-source layer process only the final sliding-window tokens. Earlier layers process the fu

#### 2026-09-23

- [PR #17341](https://github.com/vllm-project/vllm-ascend/pull/17341) 进行中
  - 中文：【性能】重叠 DeepSeek V4.1 索引器 preprocessing
  - 原文：[Performance] Overlap DeepSeek V4.1 indexer preprocessing
  - 说明：- 重叠 索引器 query RoPE with 权重 projection on separate NPU streams. - 重叠 索引器 query 量化 with 压缩器 WKV projection. For C2, complete the input FP32 cast before releasing query work to the auxiliary stream. - P

#### 2026-09-18

- [Issue #16886](https://github.com/vllm-project/vllm-ascend/issues/16886) 进行中
  - 中文：【文档】: DeepSeek-V4.1-Flash-W8A8社区提供的A2 4机脚本拉起1M上下文OOM
  - 原文：[Doc]: DeepSeek-V4.1-Flash-W8A8社区提供的A2 4机脚本拉起1M上下文OOM
  - 说明：📚 文档问题当前社区提供的A2 4机脚本 1M上下文在服务拉起过程中显存不足 OOM ，拉起脚本见后文。 后续等待engram offload可在 A2双机/4机 可拉起1M上下文。 脚本：!/usr/bin/env bash set -euo pipefail NODE RANK = 0 NODE0 IP = "< NODE0 IP" LOCAL IP = "< LOCAL IP" NIC NAME = "< NETWORK INTERFACE" MODEL PATH = "

### DeepSeek V4 Pro

#### 2026-10-13

- [Issue #16983](https://github.com/vllm-project/vllm-ascend/issues/16983) 已关闭
  - 中文：[Bug]: llm-ascend集成镜像 quay.io/ascend/vllm-ascend: v0.26.0rc2-a3通过 Atlas800I A3部署 DeepSeek-V4-Pro-0813-w4a8,启动在线服务报错 vllm serve: error: argument --attention-config/-ac: 1 AttentionConfig indexer_kv_dtype验证错误
  - 原文：[Bug]: llm-ascend集成镜像quay.io/ascend/vllm-ascend:v0.26.0rc2-a3通过Atlas800I A3部署DeepSeek-V4-Pro-0813-w4a8,启动在线服务报错vllm serve: error: argument --attention-config/-ac: 1 validation error for AttentionConfig indexer_kv_dtype

#### 2026-09-29

- [PR #17765](https://github.com/vllm-project/vllm-ascend/pull/17765) 进行中
  - 中文：【持续集成】【MRV2】新增 DeepSeek V4 Pro MRV2 夜间用例
  - 原文：[CI][MRV2] Add DeepSeek V4 Pro MRV2 nightly cases
  - 说明：此拉取请求为DeepSeek-V4-Pro引入了一个新的夜间端到端测试配置文件（ DeepSeek-V4-Pro-w4a8-dspark-PD-MRV2.yaml和DeepSeek-V4-Pro-w4a8-1M-PD-MRV2.yaml ） ，使用4节点分解的预填充设置

#### 2026-09-18

- [PR #16912](https://github.com/vllm-project/vllm-ascend/pull/16912) 已合并
  - 中文：【测试】更新 夜间 性能 baselines
  - 原文：[Test]Update nightly performance baselines
  - 说明：更新 the DeepSeek V4 Pro and GLM 5.1 external DP 性能 baselines to match the latest measured results. - vLLM main:
- [PR #16839](https://github.com/vllm-project/vllm-ascend/pull/16839) 进行中
  - 中文：【持续集成】【MRV2】新增 DeepSeek V4 Pro MTP 前缀-缓存 夜间用例
  - 原文：[CI][MRV2] Add DeepSeek V4 Pro MTP prefix-cache nightly case
  - 说明：Summary - 拆分 the DeepSeek V4 Pro MTP 前缀-缓存 P/D MRV2 夜间用例 from 16816 into an independently triggerable PR - reuse the existing Pro w4a8 MTP model entry in model dataset list.json - keep the generate zh docs.py import-path f
- [PR #16838](https://github.com/vllm-project/vllm-ascend/pull/16838) 进行中
  - 中文：【持续集成】【MRV2】新增 DeepSeek V4 Pro DSpark 前缀-缓存 夜间用例
  - 原文：[CI][MRV2] Add DeepSeek V4 Pro DSpark prefix-cache nightly case
  - 说明：Summary - 拆分 the DeepSeek V4 Pro DSpark 前缀-缓存 P/D MRV2 夜间用例 from 16816 into an independently triggerable PR - 新增 the 必填 Pro w4a8 model to model dataset list.json - keep the generate zh docs.py import-path 修复 requir
- [PR #16837](https://github.com/vllm-project/vllm-ascend/pull/16837) 进行中
  - 中文：【持续集成】【MRV2】新增 DeepSeek V4 Pro DSpark 1M 夜间用例
  - 原文：[CI][MRV2] Add DeepSeek V4 Pro DSpark 1M nightly case
  - 说明：摘要-将DeepSeek V4 Pro DSpark 1M P/D MRV2夜间案例从16816拆分为独立触发的PR -将所需的Pro w4a8模型添加到模型数据集list.json -保留CI V所需的生成zh docs.py导入路径修复

#### 2026-07-20

- [Issue #12430](https://github.com/vllm-project/vllm-ascend/issues/12430) 进行中
  - 中文：[Bug] ： DeepSeek-V4-Pro w4a8多节点（ dp4/tp8 ， EP = 32 ） — KV缓存分析期间的MoeDistributeDispatchV2 aicore超时（ 507014 ）
  - 原文：[Bug]:  DeepSeek-V4-Pro w4a8 multi-node (dp4/tp8, EP=32) — MoeDistributeDispatchV2 aicore timeout (507014) during KV-cache profiling

### DeepSeek V3

#### 2026-10-08

- [PR #18025](https://github.com/vllm-project/vllm-ascend/pull/18025) 进行中
  - 中文：【修复】DeepSeek-V3-每周
  - 原文：[Bugfix]fix DeepSeek-V3-weekly
  - 说明：- vLLM main:

### DeepSeek V3.2

#### 2026-10-08

- [PR #17950](https://github.com/vllm-project/vllm-ascend/pull/17950) 已合并
  - 中文：[CI]删除DeepSeek-V3.2夜间和每周用例
  - 原文：[CI] Remove DeepSeek-V3.2 nightly and weekly cases
  - 说明：移除 the DeepSeek-V3.2 夜间/每周 model cases from the scheduled CI inventory: - 夜间: multi-node-deepseek-v3.2-W8A8-EP , multi-node-dpsk3.2-2node , and deepseek-v3-2-w8a8 . - 每周: DeepSeek V3.2T MTP2 PD , DeepSeek V3.2T MTP3 PD

### DeepSeek V3.1

#### 2026-09-30

- [PR #17827](https://github.com/vllm-project/vllm-ascend/pull/17827) 已合并
  - 中文：[CI] [Misc] Sunset DeepSeek-V3.1-BF16多节点测试用例
  - 原文：[CI][Misc] Sunset DeepSeek-V3.1-BF16 multi-node test case
  - 说明：This pull request removes the DeepSeek-V3.1-BF16.yaml 配置 file, sunsetting the DeepSeek-V3.1-BF16 multi-node internal data-parallel (DP) 夜间 end-to-end 测试用例. No. This is a co

### DeepSeek R1

#### 2026-09-21

- [PR #17042](https://github.com/vllm-project/vllm-ascend/pull/17042) 已合并
  - 中文：[CI] [Misc]更新DeepSeek-R1-0528-W8A8 Kimi-K2.6-w4a8-A3.yaml的基线
  - 原文：[CI][Misc] Update baseline for DeepSeek-R1-0528-W8A8  Kimi-K2.6-w4a8-A3.yaml
  - 说明：This PR 更新 the 性能 baseline for the 前缀-缓存-deepseek-r1-0528-w8a8 测试用例 in the 夜间 single-node E2E tests. The baseline value is adjusted from 3.4877 to 3.0293 to reflect the latest 性能 metrics. Does this PR

### DeepSeek OCR

#### 2026-07-14

- [Issue #11991](https://github.com/vllm-project/vllm-ascend/issues/11991) 进行中
  - 中文：【缺陷】: 使用vllm-ascend:v0.22.1rc1镜像运行DeepSeek-OCR-2服务化报错
  - 原文：[Bug]: 使用vllm-ascend:v0.22.1rc1镜像运行DeepSeek-OCR-2服务化报错

## Qwen

### Qwen3.8

#### 2026-10-14

- [Issue #18664](https://github.com/vllm-project/vllm-ascend/issues/18664) 进行中
  - 中文：【文档】: Questions for `/zh-cn/v0.30.0rc1/user_guide/release_notes.html`
  - 原文：[Doc]: Questions for `/zh-cn/v0.30.0rc1/user_guide/release_notes.html`
  - 说明：📚 The doc issue 1.官方0.30.0rc1文档中写的dsv4.1做了tq4特性优化，实际保持不支持； 2. 0.30.0rc1镜像实际是9.1.0，文档上写的9.2.0，且同配置qwen3.8 27b性能不及0.23.0镜像（官方文档描述有优化）； 3. 0.30.0rc1不支持fuse muls add为true的配置，glm5.3 flash双机混部关闭该选项后性能也不及0.23.0镜像（支持为true）。 Suggest a potential alt
- [PR #18621](https://github.com/vllm-project/vllm-ascend/pull/18621) 进行中
  - 中文：[BugFix] [KV Cache]恢复连续混合注意力+曼巴KV缓存布局
  - 原文：[BugFix][KV Cache] Restore contiguous hybrid Attention+Mamba KV cache layout
  - 说明：恢复 the contiguous per-layer K/V allocation for the ordinary 注意力 layers of hybrid 注意力+Mamba models (e.g. Qwen3.5 / Qwen3.8, qwen3 5 GDN) in MRv1, undoing the generic non-contiguous block-major layout introduced by 14340 for
- [Issue #18619](https://github.com/vllm-project/vllm-ascend/issues/18619) 进行中
  - 中文：【Bug】： Atlas A2上的Qwen3.8-27B (qwen3_5 GDN hybrid) - P/D分解+ MTP +前缀缓存间歇性产生乱码输出
  - 原文：[Bug]: Qwen3.8-27B (qwen3_5 GDN hybrid) on Atlas A2 - P/D disaggregation + MTP + prefix caching intermittently produces garbled output

#### 2026-10-13

- [Issue #18615](https://github.com/vllm-project/vllm-ascend/issues/18615) 进行中
  - 中文：【缺陷】: Qwen3.8-37B-w8a8在v0.30.0rc1上性能劣化严重
  - 原文：[Bug]: Qwen3.8-37B-w8a8在v0.30.0rc1上性能劣化严重
- [Issue #18611](https://github.com/vllm-project/vllm-ascend/issues/18611) 进行中
  - 中文：[Bug]: qwen3-8-flash-next （ GDN 混合架构） ~ 1% 请求推理跑飞：推理无限循环打满max_tokens、空回 （ GPU sglang/vllm 均无此问题）
  - 原文：[Bug]: qwen3-8-flash-next（GDN 混合架构）~1% 请求推理跑飞：reasoning 无限循环打满 max_tokens、空回（GPU sglang/vllm 均无此问题）
  - 说明：环境 项 值 --- --- 硬件 Atlas 800I A3（hpu910a3）16 卡 拓扑 TP8 × DP2， --max-num-seqs 8 （每 DP 槽 8 并发） 模型 qwen3-8-flash-next（GDN 混合架构，内部模型） 镜像 qwen3.8-next-a3-openeuler （ 0day 镜像，run a 轮所用——首次发现跑飞的运行环境） vllm 0.26.1.dev18+g3310aa047 vllm-ascend 内部构建（未开
- [PR #16533](https://github.com/vllm-project/vllm-ascend/pull/16533) 已关闭
  - 中文：壮举：支持Mooncake分层KV池上的混合多组模型
  - 原文：feat: support hybrid multi-group models on Mooncake layerwise KV pool
  - 说明：启用 Qwen3.8-style hybrid (GDN + full 注意力) models with the Mooncake backend block-key layerwise KV pool: - make layerwise block key embeds the group id for multi-group layouts (single-group keeps the legacy key format) so per-group

#### 2026-10-12

- [PR #18380](https://github.com/vllm-project/vllm-ascend/pull/18380) 已合并
  - 中文：【文档】【杂项】更新 image version to v0.30.0rc1
  - 原文：[Doc][Misc] Update image version to v0.30.0rc1
  - 说明：This PR 更新 the hardcoded docker image versions in the Qwen3.5/3.6 and Qwen3.8 tutorial documentation to use v0.30.0rc1 instead of template variables or older tags. No, this is a documentat

#### 2026-10-10

- [Issue #18239](https://github.com/vllm-project/vllm-ascend/issues/18239) 进行中
  - 中文：【缺陷】【MRV2】Qwen3.8-27B + MTP on Model Runner V2: GDN 元数据 KeyError 'language_model.model.layers.0.linear_attn' during FULL_DECODE_ONLY capture
  - 原文：[Bug][MRV2] Qwen3.8-27B + MTP on Model Runner V2: GDN metadata KeyError 'language_model.model.layers.0.linear_attn' during FULL_DECODE_ONLY capture
  - 说明：Bug Description 服务 Qwen3.8-27B (architecture Qwen3 5ForConditionalGeneration , hybrid Gated-DeltaNet + full-注意力) on Model Runner V2 with MTP 投机解码 crashes during ACLGraph capture ( FULL 解码 ONLY warmup forward).
- [PR #18159](https://github.com/vllm-project/vllm-ascend/pull/18159) 草稿
  - 中文：【测试】【功能】Qwen3.8-Flash-Next four-layer no-PLE cases
  - 原文：[Test][Feature] Add Qwen3.8-Flash-Next four-layer no-PLE cases
  - 说明：新增 检查点-backed HCCL and same-device NPU IPC 权重-transfer cases for Qwen3.8-Flash-Next using four decoder layers with PLE disabled. Preserve the retained original BF16 values, 512 experts, top-10 路由, GDN, QSA and hyperconnecti

#### 2026-10-09

- [Issue #18046](https://github.com/vllm-project/vllm-ascend/issues/18046) 进行中
  - 中文：[文档] ： `/zh-cn/latest/user_guide/feature_guide/speculative_decoding.html`使用该指导修改 num_speculative_tokens的反馈参数值后推理进程挂死
  - 原文：[Doc]: Feedback for `/zh-cn/latest/user_guide/feature_guide/speculative_decoding.html`使用该指导修改num_speculative_tokens参数值后推理进程挂死
  - 说明：📚 The doc issue 使用该指导部署Qwen3.8-27B-w8a8 + dflash2时，修改"num 投机 tokens"取值为1后出发性能测试vllm ascend挂死。等待一段时间后报错，RuntimeError:...error code is 507034 Suggest a potential alternative/修复 建议充分验证并修复该边界值判断问题。

#### 2026-10-08

- [Issue #18030](https://github.com/vllm-project/vllm-ascend/issues/18030) 进行中
  - 中文：【缺陷】【v0.23.0】: 启用 mooncake 池化 on Qwen3.8-27B 导致 请求积压
  - 原文：[Bug][v0.23.0]: enable mooncake pooling on Qwen3.8-27B caused request backlog
- [PR #18027](https://github.com/vllm-project/vllm-ascend/pull/18027) 进行中
  - 中文：[PERF] [QSA]避免通过do_not_specialize对QSA Triton内核进行每次预填重新编译
  - 原文：[Perf][QSA] Avoid per-prefill recompilation of QSA Triton kernels via do_not_specialize
  - 说明：This PR is based on 17762 ("支持 Qwen3.8 Flash Next on Ascend") and applies an 优化 on top of its qwen4 exp/qsa.py Triton 内核. The QSA 拆分-k and 合并 Triton 内核 declare num rows , num requests and num 缓存 blocks as s

#### 2026-09-20

- [PR #16981](https://github.com/vllm-project/vllm-ascend/pull/16981) 进行中
  - 中文：【功能】【模型】Qwen3.8 Flash Next 支持
  - 原文：[Feature][Model] Add Qwen3.8 Flash Next support
  - 说明：Summary This ports the Qwen3.8 Flash Next 支持 originally developed in 15162 onto the current main APIs, while reusing the upstream Qwen4Exp model implementation instead of copying upstream model code into the plugin. The change adds: -

#### 2026-09-17

- [PR #16782](https://github.com/vllm-project/vllm-ascend/pull/16782) 已合并
  - 中文：【Doc】【Misc】添加Qwen3.8-2.4T-A95B的预期输出和服务验证
  - 原文：[Doc][Misc] Add expected output and service verification for Qwen3.8-2.4T-A95B
  - 说明：修复 errors in the Qwen series documentation. No. Read the new doc - vLLM main:

#### 2026-09-15

- [PR #16588](https://github.com/vllm-project/vllm-ascend/pull/16588) 已合并
  - 中文：[Doc] [BugFix]修复Atlas 300I duo和Atlas 800的Qwen3.6和Qwen3.8模型路径不正确的问题
  - 原文：[Doc][BugFix] Fix incorrect Qwen3.6 and Qwen3.8 model paths for Atlas 300I DUO and Atlas 800
  - 说明：This PR corrects the model paths for Qwen3.6-27B-w8a8 and Qwen3.8-27B-w8a8 in the documentation: - For Qwen3.5-27B-Qwen3.6-27B.md , it fixes the model path under the Atlas 800 A3/A2 section to use Eco-Tech/Qwen3.6-27B-w8a8 instead of the -3

#### 2026-09-10

- [PR #16246](https://github.com/vllm-project/vllm-ascend/pull/16246) 进行中
  - 中文：[性能] [GDN]跨kv缓存组共享组不变元数据
  - 原文：[Performance][GDN] Share group-invariant metadata across kv-cache groups
  - 说明：背景混合模型，如Qwen3.8/Qwen4-Exp （例如Qwen3.8-27B ）以3: 1交织GDN （线性注意）层和全注意层。混合KV缓存管理器将kv缓存组大小与最少层类型对齐，

### Qwen3.5

#### 2026-10-14

- [PR #18151](https://github.com/vllm-project/vllm-ascend/pull/18151) 已关闭
  - 中文：[Doc] [BugFix] [Model]将Qwen3.5代理脚本与连接器协议匹配
  - 原文：[Doc][BugFix][Model] Match Qwen3.5 proxy scripts to connector protocols
  - 说明：The Qwen3.5 PD guide has its proxy commands swapped relative to the configured connectors: Deployment tab Configured connector 必填 proxy --- --- --- A3 MooncakeLayerwiseConnector load balance proxy layerwise server example.py 950DT Moo
- [PR #18621](https://github.com/vllm-project/vllm-ascend/pull/18621) 进行中
  - 中文：[BugFix] [KV Cache]恢复连续混合注意力+曼巴KV缓存布局
  - 原文：[BugFix][KV Cache] Restore contiguous hybrid Attention+Mamba KV cache layout
  - 说明：恢复 the contiguous per-layer K/V allocation for the ordinary 注意力 layers of hybrid 注意力+Mamba models (e.g. Qwen3.5 / Qwen3.8, qwen3 5 GDN) in MRv1, undoing the generic non-contiguous block-major layout introduced by 14340 for
- [Issue #18619](https://github.com/vllm-project/vllm-ascend/issues/18619) 进行中
  - 中文：【Bug】： Atlas A2上的Qwen3.8-27B (qwen3_5 GDN hybrid) - P/D分解+ MTP +前缀缓存间歇性产生乱码输出
  - 原文：[Bug]: Qwen3.8-27B (qwen3_5 GDN hybrid) on Atlas A2 - P/D disaggregation + MTP + prefix caching intermittently produces garbled output

#### 2026-10-13

- [PR #18443](https://github.com/vllm-project/vllm-ascend/pull/18443) 已合并
  - 中文：【性能】【模型】卸载 Qwen3.5-VL image preprocessing to NPU
  - 原文：[Performance][Model] Offload Qwen3.5-VL image preprocessing to NPU
  - 说明：Qwen3.5-VL image preprocessing (resize, patchify, rescale+normalize) runs on the front-end CPU and saturates the API-server process under multimodal load, slowing down the engine loop. 新增 Ascend subclasses of Qwen3.5-VL (dense and MoE) tha
- [PR #18326](https://github.com/vllm-project/vllm-ascend/pull/18326) 已关闭
  - 中文：[功能] [xlite]在xlite后端支持Qwen3.5 （混合MHA + GDN、DENSE和MoE ）型号
  - 原文：[Feature][xlite] Support Qwen3.5 (hybrid MHA+GDN, dense & MoE) models in the xlite backend
  - 说明：This PR enables the xlite backend to 支持 the Qwen3.5 hybrid architecture ( Qwen3 5ForCausalLM and Qwen3 5ForConditionalGeneration ), which alternates full-注意力 (MHA) layers with Gated DeltaNet (GDN) linear-注意力 layers. Previou
- [PR #16996](https://github.com/vllm-project/vllm-ascend/pull/16996) 已合并
  - 中文：【性能】【模型】卸载 Qwen3.5-VL image preprocessing to NPU
  - 原文：[Performance][Model] Offload Qwen3.5-VL image preprocessing to NPU
  - 说明：Qwen3.5-VL image preprocessing (resize, patchify, rescale+normalize) runs on the front-end CPU and saturates the API-server process under multimodal load, slowing down the engine loop. 新增 Ascend subclasses of Qwen3.5-VL (dense and MoE) tha
- [PR #18570](https://github.com/vllm-project/vllm-ascend/pull/18570) 已合并
  - 中文：【v0.30.0】【文档】【杂项】补充文档 Qwen3.5 batch invariance 支持 (#18449)
  - 原文：[v0.30.0][Doc][Misc] Document Qwen3.5 batch invariance support (#18449)
  - 说明：Backport of 18449 to the eleases/v0.30.0 branch. 新增 Qwen/Qwen3.5-35B-A3B to the tested models for batch invariance and clarify that its 支持 is limited to Atlas A2 and A3 Products. No. This
- [Issue #18587](https://github.com/vllm-project/vllm-ascend/issues/18587) 进行中
  - 中文：[Bug] ：使用MooncakeLayerwiseConnector的Qwen3.5-122B PD分解在启动时失败— “Tensor start addr与2M不一致”
  - 原文：[Bug]:  Qwen3.5-122B PD disaggregation with MooncakeLayerwiseConnector fails at startup — "Tensor start addr is not align with 2M"
- [PR #18400](https://github.com/vllm-project/vllm-ascend/pull/18400) 已合并
  - 中文：[Cherry-pick] [v0.30.0] [BugFix] [310P]修复了310P (# 18390)上的Qwen3.5-w8a8性能问题
  - 原文：[Cherry-pick][v0.30.0][BugFix][310P] fix Qwen3.5-w8a8 performance issue on the 310P  (#18390)
  - 说明：On Ascend 310P MRV2, 17278 恢复 Qwen3.5-2B MTP 解码 性能 by skipping empty updatable-graph handshakes and avoiding redundant D2H syncs on the FULL ACLGraph path. Later 17461 remapped MTP verify 注意力 state from SpecDecoding
- [PR #18390](https://github.com/vllm-project/vllm-ascend/pull/18390) 已合并
  - 中文：【修复】【310P】Qwen3.5-w8a8 性能 issue on the 310P
  - 原文：[BugFix][310P] fix Qwen3.5-w8a8 performance issue on the 310P
  - 说明：On Ascend 310P MRV2, 17278 恢复 Qwen3.5-2B MTP 解码 性能 by skipping empty updatable-graph handshakes and avoiding redundant D2H syncs on the FULL ACLGraph path. Later 17461 remapped MTP verify 注意力 state from SpecDecoding
- [PR #18449](https://github.com/vllm-project/vllm-ascend/pull/18449) 已合并
  - 中文：【文档】【杂项】补充文档 Qwen3.5 batch invariance 支持
  - 原文：[Doc][Misc] Document Qwen3.5 batch invariance support
  - 说明：新增 Qwen/Qwen3.5-35B-A3B to the tested models for batch invariance and clarify that its 支持 is limited to Atlas A2 and A3 Products. No. This is a documentation-only 更新 with no 运行时 b
- [PR #18522](https://github.com/vllm-project/vllm-ascend/pull/18522) 进行中
  - 中文：[Bugfix] Gate在bfloat16上融合了GDN预填充路径以修复fp16模型（ ColQwen3.5 ）崩溃
  - 原文：[Bugfix] Gate fused GDN prefill paths on bfloat16 to fix fp16 models (ColQwen3.5) crash
  - 说明：This is a recurrence of 14456: the earlier 修复 did not 新增 a dtype gate at the dispatch layer. 修复 Gate both 融合 预填充 dispatches in vllm ascend/ops/gdn.py on query non spec.dtype == torch.bfloat16 , so fp16 models fall back to the Trit

#### 2026-10-12

- [PR #18380](https://github.com/vllm-project/vllm-ascend/pull/18380) 已合并
  - 中文：【文档】【杂项】更新 image version to v0.30.0rc1
  - 原文：[Doc][Misc] Update image version to v0.30.0rc1
  - 说明：This PR 更新 the hardcoded docker image versions in the Qwen3.5/3.6 and Qwen3.8 tutorial documentation to use v0.30.0rc1 instead of template variables or older tags. No, this is a documentat
- [PR #15723](https://github.com/vllm-project/vllm-ascend/pull/15723) 已合并
  - 中文：【持续集成】New 测试用例 新增
  - 原文：[CI] New test cases added
  - 说明：新增测试用例： Qwen3-30B-A3B-W8A8-offload-test-acc.yaml Qwen3.5-397B-no-Memcache-perf.yaml修改了输入吞吐量的验证逻辑。- vLLM主：

#### 2026-10-10

- [Issue #18240](https://github.com/vllm-project/vllm-ascend/issues/18240) 进行中
  - 中文：【缺陷】【'DFlash2DraftModel'】DFlash2 draft rejected in APIServer: "Model architectures are not supported for now" (plugin registration timing?)
  - 原文：[Bug] DFlash2 draft rejected in APIServer: "Model architectures ['DFlash2DraftModel'] are not supported for now" (plugin registration timing?)
  - 说明：Bug Description 服务 Qwen3.8-27B with a DFlash2 draft model (following the official 投机-解码 guide example) fails at startup in the APIServer process: SpeculativeConfig validation rejects the draft architecture DFlash2DraftMo
- [Issue #18239](https://github.com/vllm-project/vllm-ascend/issues/18239) 进行中
  - 中文：【缺陷】【MRV2】Qwen3.8-27B + MTP on Model Runner V2: GDN 元数据 KeyError 'language_model.model.layers.0.linear_attn' during FULL_DECODE_ONLY capture
  - 原文：[Bug][MRV2] Qwen3.8-27B + MTP on Model Runner V2: GDN metadata KeyError 'language_model.model.layers.0.linear_attn' during FULL_DECODE_ONLY capture
  - 说明：Bug Description 服务 Qwen3.8-27B (architecture Qwen3 5ForConditionalGeneration , hybrid Gated-DeltaNet + full-注意力) on Model Runner V2 with MTP 投机解码 crashes during ACLGraph capture ( FULL 解码 ONLY warmup forward).
- [PR #18233](https://github.com/vllm-project/vllm-ascend/pull/18233) 草稿
  - 中文：【文档】更新 Qwen3.5-397B-A17B deployment configurations
  - 原文：[Doc] Update Qwen3.5-397B-A17B deployment configurations
  - 说明：更新 the Qwen3.5-397B-A17B single-node and PD deployment examples to select Model Runner V1 and configure FlashComm and 融合 MC2. 启用 共享-expert data parallelism in the 950DT 预填充 example, explain the settings, and 对齐 the opt

#### 2026-10-09

- [PR #18064](https://github.com/vllm-project/vllm-ascend/pull/18064) 草稿
  - 中文：【性能】内核] 优化基于自适应调度的 Split-QKV RMSNorm MRoPE
  - 原文：[Performance][Kernel] Optimize Split-QKV RMSNorm MRoPE with adaptive dispatch
  - 说明：The Qwen3.5 and Qwen3-VL 注意力 paths use triton 拆分 qkv rmsnorm mrope to 拆分 Q/K/V, normalize and rotate Q/K, and copy V and the optional gate. The existing 内核 processes one token row at a time and constructs full-width RoPE tem

#### 2026-09-29

- [PR #17168](https://github.com/vllm-project/vllm-ascend/pull/17168) 已合并
  - 中文：【持续集成】更新 配置 for 每周 cases
  - 原文：[CI] update configuration for weekly cases
  - 说明：更新 配置 for 每周 cases:Kimi-K2.5-W4A8-128k-1k-TPOT50.yaml Qwen3.5-397B-w4a8 128k-1k-90-50-PD.yaml Qwen3.5-397B-w4a8 3.5k-1.5k-0-50-PD.yaml no run the cases 每周 - vLLM main:
- [PR #17723](https://github.com/vllm-project/vllm-ascend/pull/17723) 进行中
  - 中文：【文档】【功能】WeMM-Embedding tutorial and 300I Duo 支持 matrix entry
  - 原文：[Doc][Feature] Add WeMM-Embedding tutorial and 300I Duo support matrix entry
  - 说明：Adds a tutorial and a 300I Duo 支持-matrix entry for the WeMM-Embedding family (Tencent, 2B / 4B / 9B): a Qwen3.5-backed universal multimodal embedding model for text, images and videos with Matryoshka truncation. The 检查点 is a sto

#### 2026-09-28

- [PR #17602](https://github.com/vllm-project/vllm-ascend/pull/17602) 进行中
  - 中文：【性能】【Triton】优化 gated LayerNorm row tiling and parameter reuse
  - 原文：[Performance][Triton] Optimize gated LayerNorm row tiling and parameter reuse
  - 说明：Gated RMSNorm is used in the GDN output projection of Qwen3.5-27B and Qwen3.5-35B-A3B, both with value-head width 128. vLLM's Qwen3.5 linear-注意力 layers use Qwen GDN, whose output norm sets group size=None and norm before gate=True . T

#### 2026-09-24

- [PR #17486](https://github.com/vllm-project/vllm-ascend/pull/17486) 进行中
  - 中文：[BugFix] [Ops]将fp16模型的npu_chunk_gated_delta_rule周围的q/k/v/beta转换为bf16
  - 原文：[BugFix][Ops] Cast q/k/v/beta to bf16 around npu_chunk_gated_delta_rule for fp16 models
  - 说明：Fixes 16359. torch npu.npu chunk gated delta rule only supports bfloat16 for q/k/v/beta. When a model runs in float16 (e.g. ColQwen3.5), q/k/v arrive as float16 and the call raises a "Tensor params.query not implemented for DT FLOAT16, shou

#### 2026-09-20

- [PR #16998](https://github.com/vllm-project/vllm-ascend/pull/16998) 进行中
  - 中文：【性能】【型号】Fuse matmul + allreduce for Qwen3.5 row-parallel linears on Ascend
  - 原文：[Performance][Model] Fuse matmul+allreduce for Qwen3.5 row-parallel linears on Ascend
  - 说明：Under TP, every row-parallel linear in Qwen3.5 (注意力 o proj , MLP down proj , GDN out proj ) runs a matmul followed by an all-减少: the all-减少 (减少-scatter + all-gather on the ring) makes the activation cross the HCCL link twi

#### 2026-09-18

- [PR #16866](https://github.com/vllm-project/vllm-ascend/pull/16866) 进行中
  - 中文：【性能】【模型】卸载 Qwen3.5-VL image preprocessing to NPU
  - 原文：[Performance][Model] Offload Qwen3.5-VL image preprocessing to NPU
  - 说明：- vLLM main:

#### 2026-09-17

- [PR #16666](https://github.com/vllm-project/vllm-ascend/pull/16666) 已合并
  - 中文：【测试】将Qwen3.5-27B多LoRA MTP E2E替换为Qwen3.5-4B TP2 ACL图
  - 原文：[Test] Replace Qwen3.5-27B multi-LoRA MTP E2E with Qwen3.5-4B TP2 ACL graph
  - 说明：Replace the Qwen3.5-27B four-card multi-LoRA + built-in MTP eager 服务 E2E with an equivalent Qwen3.5-4B two-card ACL graph coverage so PR CI finishes faster while keeping the same 服务 scenario. - Keep named multi-LoRA ( mix-lora-a /

#### 2026-09-15

- [Issue #16586](https://github.com/vllm-project/vllm-ascend/issues/16586) 进行中
  - 中文：【Bug】：用lora加载qwen3.5-27B崩溃
  - 原文：[Bug]: load qwen3.5-27B with lora got crashed

#### 2026-09-11

- [PR #16336](https://github.com/vllm-project/vllm-ascend/pull/16336) 进行中
  - 中文：【算子】【功能】融合 Triton Qwen vision QKV, RoPE, and FIA padding
  - 原文：[Ops][Feature] Fused Triton Qwen vision QKV, RoPE, and FIA padding
  - 说明：This PR fuses QKV layout extraction, Q/K RoPE and head-dimension padding into one Triton producer for the Qwen2.5-VL/Qwen3.5-VL vision-注意力 FIA path. It removes the separate PyTorch preprocessing and padding operations before npu 融合

#### 2026-09-05

- [Issue #15831](https://github.com/vllm-project/vllm-ascend/issues/15831) 进行中
  - 中文：【缺陷】: Qwen 3.5-35B + 图模式 精度 issue on A5
  - 原文：[Bug]: Qwen 3.5-35B + graph mode accuracy issue on A5

#### 2026-09-04

- [Issue #15799](https://github.com/vllm-project/vllm-ascend/issues/15799) 进行中
  - 中文：【Bug】： Qwen3.5-27B多图请求非流模式挂长上下文，流上AICore使用率0%
  - 原文：[Bug]: Qwen3.5-27B multi-image request with long context hangs on non-streaming mode, AICore usage 0% on streaming

#### 2026-08-31

- [Issue #15374](https://github.com/vllm-project/vllm-ascend/issues/15374) 进行中
  - 中文：[Bug]: 310P  Qwen3.5-9B 执行几个推理后就崩溃退出

#### 2026-08-28

- [PR #7742](https://github.com/vllm-project/vllm-ascend/pull/7742) 已关闭
  - 中文：新增 Qwen3.5-27B-w8a8-A3
  - 原文：add Qwen3.5-27B-w8a8-A3
  - 说明：- vLLM version: v0.27.1 - vLLM main:

#### 2026-08-08

- [Issue #13853](https://github.com/vllm-project/vllm-ascend/issues/13853) 进行中
  - 中文：【缺陷】: Qwen3.5进行推理时，如果blocksize设置2048精度会有问题
  - 原文：[Bug]: Qwen3.5进行推理时，如果blocksize设置2048精度会有问题

#### 2026-07-23

- [Issue #12674](https://github.com/vllm-project/vllm-ascend/issues/12674) 进行中
  - 中文：[Bug] qwen3.5-397b (Mamba + MTP)在第一次请求时崩溃： TypeError: dynamic_func ()在mamba_utils后处理triton内核中获得了参数'block_size'的多个值
  - 原文：[Bug] qwen3.5-397b (Mamba+MTP) crashes on first request: TypeError: dynamic_func() got multiple values for argument 'block_size' in mamba_utils postprocess triton kernel
  - 说明：1. 启脚本 服务能正常起, /health 返回 200,权重加载完成,KV 缓存 正常分配。 2. 问题现象 服务起来后, 发第一个请求就崩 ( /health 仍 200,但任意 /v1/chat/completions 请求触发): 完整栈(2026-07-23 fresh pod 复现,首请求即崩): 崩点在 vllm v1/worker/mamba utils.py:732 的 triton 融合 内核 postprocess mamba fu

#### 2026-06-29

- [Issue #11095](https://github.com/vllm-project/vllm-ascend/issues/11095) 进行中
  - 中文：【缺陷】: 使用vllm-ascend docker 无法启动Qwen3.5-27B
  - 原文：[Bug]: 使用vllm-ascend docker 无法启动Qwen3.5-27B

### Qwen3

#### 2026-10-14

- [Issue #18619](https://github.com/vllm-project/vllm-ascend/issues/18619) 进行中
  - 中文：【Bug】： Atlas A2上的Qwen3.8-27B (qwen3_5 GDN hybrid) - P/D分解+ MTP +前缀缓存间歇性产生乱码输出
  - 原文：[Bug]: Qwen3.8-27B (qwen3_5 GDN hybrid) on Atlas A2 - P/D disaggregation + MTP + prefix caching intermittently produces garbled output

#### 2026-10-13

- [PR #18613](https://github.com/vllm-project/vllm-ascend/pull/18613) 进行中
  - 中文：[性能] [MRV2] Optimize_punties_kernel词汇网格以削减标量开销
  - 原文：[Performance][MRV2] Optimize _penalties_kernel vocab grid to cut scalar overhead
  - 说明：apply penalties launches penalties 内核 on a 2-D grid (num tokens, vocab grid size) , where the second axis was sized as: With Qwen3's vocabulary (151936) and BLOCK SIZE = 4096 there are 38 vocab blocks, and 65535 // num tokens = 38 for e

#### 2026-10-12

- [Issue #17075](https://github.com/vllm-project/vllm-ascend/issues/17075) 已关闭
  - 中文：[文档] ： `/en/latest/tutorials/models/Qwen3-30B-A3B.html`的反馈
  - 原文：[Doc]: Feedback for `/en/latest/tutorials/models/Qwen3-30B-A3B.html`
  - 说明：📚 The doc issue Eagle3 Draft Model link is Qwen3-30B-A3B-w8a8-QuaRot-310, not eagle3. Suggest a potential alternative/修复 No response

#### 2026-10-11

- [Issue #18314](https://github.com/vllm-project/vllm-ascend/issues/18314) 进行中
  - 中文：[Misc]: 贡献方向咨询：Ascend 910B3 单机 8 卡上的 Qwen 推理性能优化
  - 说明：Anything you want to discuss about vllm on ascend. 大家好，我们主要使用 Qwen 系列模型，计划围绕 Ascend 910B3（A2）单机 8 卡 开展推理性能分析，希望从一个范围可控、具有通用价值的问题入手，将验证后的优化贡献给 vLLM Ascend。 关注到 18202 的 Model Runner V1 → V2 迁移计划，以及 14198 的 Qwen3-32B 性能回归检查。想先确认社区现有任务与验证缺口，避免重

#### 2026-10-09

- [PR #18133](https://github.com/vllm-project/vllm-ascend/pull/18133) 进行中
  - 中文：【功能】【注意力】FA3 注意力 backend
  - 原文：[Feature][Attention] Add FA3 attention backend
  - 说明：新增 an FA3 inference backend using flash attn with kvcache and device-side GQA tiling. Automatically select it for supported Qwen3 dense/MoE decoder self-注意力 on A2/A3. Use the paged FA3 path for 预填充, 解码, chunked 预填充, prefi

#### 2026-09-29

- [PR #17396](https://github.com/vllm-project/vllm-ascend/pull/17396) 已合并
  - 中文：【测试】合并 测试用例 to 减少 redundancy
  - 原文：[Test] Merge test cases to reduce redundancy
  - 说明：This PR 合并 similar 测试用例 to 减少 test 配置 redundancy for Qwen3‑32B‑W8A8‑QuaRot. Changes in this PR: 1. 切换 model 权重 to Qwen3-32B-W8A8-QuaRot . 2. 移除 redundant test 配置 files: Qwen3 32b w8a8 ml A3.yaml and

#### 2026-09-28

- [PR #17474](https://github.com/vllm-project/vllm-ascend/pull/17474) 已合并
  - 中文：[Doc] [Feature]为Qwen池化模型添加A5指导
  - 原文：[Doc][Feature] Add A5 guidance for Qwen pooling models
  - 说明：This PR adds A5 container and 服务 examples for Qwen3-Embedding, Qwen3-Reranker, Qwen3-VL-Embedding, and Qwen3-VL-Reranker. It also 更新 the A5 supported-model matrix and adds the corresponding Simplified Chinese translations. The ser

#### 2026-09-22

- [PR #17166](https://github.com/vllm-project/vllm-ascend/pull/17166) 进行中
  - 中文：【性能】【模型】卸载 Qwen3 image preprocessing to NPU
  - 原文：[Performance][Model] Offload Qwen3 image preprocessing to NPU
  - 说明：This PR introduces an opt-in, three-stage image preprocessing 卸载 path for Qwen3-VL and Qwen3.5 image requests. It moves 显存-intensive preprocessing from the API server CPU to the Ascend NPU worker to 减少 frontend latency, especia

#### 2026-09-21

- [PR #17131](https://github.com/vllm-project/vllm-ascend/pull/17131) 已合并
  - 中文：[测试] [Qwen3]预热“Qwen3-235B-disagg-pd”基准
  - 原文：[Test][Qwen3] Warm up `Qwen3-235B-disagg-pd` benchmark
  - 说明：This PR swaps the order of the 精度 test and the 性能 test so that the 性能 test can be fully warmed up. No. With 夜间用例.

#### 2026-09-15

- [Issue #14817](https://github.com/vllm-project/vllm-ascend/issues/14817) 已关闭
  - 中文：【缺陷】: 基于Atlas 800T A2+vllm ascend 0.23.0版本参考部署Qwen3-Reranker-0.6B报错
  - 原文：[Bug]: 基于Atlas 800T A2+vllm ascend 0.23.0版本参考部署Qwen3-Reranker-0.6B报错

#### 2026-09-11

- [PR #16335](https://github.com/vllm-project/vllm-ascend/pull/16335) 进行中
  - 中文：【算子】【功能】支持 inline cos/sin calculation for MRoPE in Qwen3 Family
  - 原文：[Ops][Feature] Support inline cos/sin calculation for MRoPE in Qwen3 Family
  - 说明：This PR fuses online MRoPE cos/sin generation into the existing Triton 拆分-QKV, RMSNorm and MRoPE operator for Qwen3-family models. It removes the indexed cos sin 缓存 gather and avoids materializing a per-token cos sin tensor before lau

#### 2026-09-03

- [PR #15406](https://github.com/vllm-project/vllm-ascend/pull/15406) 已合并
  - 中文：【MRv2】【特点】【310P】Qwen3+3.5 310P上MRv2适配前缀缓存
  - 原文：[MRv2][Feature][310P] MRv2 adapting Prefix Cache on the 310P for Qwen3+3.5
  - 说明：前缀缓存 on 310P MRv2 was previously rejected by validate 配置 . The supporting infrastructure is already in main ( 15006: Qwen3-VL/Qwen3.5 MRv2 adaptation, KV block zeroer, Triton-free MRoPE state; 14342: mamba 对齐 CPU fallback p

#### 2026-08-06

- [Issue #13656](https://github.com/vllm-project/vllm-ascend/issues/13656) 进行中
  - 中文：[Bug]: 310p单卡跑qwen3-4b-w8a8，服务报错561000，模型是自己量化的

### Qwen2.5

#### 2026-10-13

- [Issue #18551](https://github.com/vllm-project/vllm-ascend/issues/18551) 进行中
  - 中文：【Bug】：卸加载载Qwen2.5-72B-Instruct-w8a8-vllm-ascend权重 ， TP = 4的 Altas 300i Pro卡 ，模型加载完成又会自动执行/vllm_ascend/_310p/quantization/methods/w8a8_static.py的适用方法，报输入x1格式应为ND ，实际格式为FRACTAL_NZ
  - 原文：[Bug]: offload 加载Qwen2.5-72B-Instruct-w8a8-vllm-ascend权重,TP=4的 Altas 300i Pro卡，模型加载完成又会自动执行/vllm_ascend/_310p/quantization/methods/w8a8_static.py的apply方法，报Input x1 format should be ND, actual format is FRACTAL_NZ

#### 2026-09-11

- [PR #16336](https://github.com/vllm-project/vllm-ascend/pull/16336) 进行中
  - 中文：【算子】【功能】融合 Triton Qwen vision QKV, RoPE, and FIA padding
  - 原文：[Ops][Feature] Fused Triton Qwen vision QKV, RoPE, and FIA padding
  - 说明：This PR fuses QKV layout extraction, Q/K RoPE and head-dimension padding into one Triton producer for the Qwen2.5-VL/Qwen3.5-VL vision-注意力 FIA path. It removes the separate PyTorch preprocessing and padding operations before npu 融合

### Qwen3 MoE

#### 2026-10-12

- [PR #18421](https://github.com/vllm-project/vllm-ascend/pull/18421) 进行中
  - 中文：[Cherry-pick] [releases/v0.30.0] [Doc] [Model]更新Qwen3-30B-A3B教程中的Eagle3草案模型下载链接（来自# 17152 ）
  - 原文：[Cherry-pick][releases/v0.30.0][Doc][Model] Update Eagle3 draft model download link in Qwen3-30B-A3B tutorial (from #17152)
  - 说明：Cherry-pick of PR 17152 onto releases/v0.30.0 . Original PR: 17152 Original author: @liuhanhui --- 更新 the Eagle3 draft model download link in the Qwen3-30B-A3B tutorial to AngelSlim/Qwen3-a3B eagle3 , so users can obtain the correct dra
- [Issue #17075](https://github.com/vllm-project/vllm-ascend/issues/17075) 已关闭
  - 中文：[文档] ： `/en/latest/tutorials/models/Qwen3-30B-A3B.html`的反馈
  - 原文：[Doc]: Feedback for `/en/latest/tutorials/models/Qwen3-30B-A3B.html`
  - 说明：📚 The doc issue Eagle3 Draft Model link is Qwen3-30B-A3B-w8a8-QuaRot-310, not eagle3. Suggest a potential alternative/修复 No response
- [PR #17152](https://github.com/vllm-project/vllm-ascend/pull/17152) 已合并
  - 中文：[文档] [模型]更新Qwen3-30B-A3B教程中的Eagle3模型草案下载链接
  - 原文：[Doc][Model] Update Eagle3 draft model download link in Qwen3-30B-A3B tutorial
  - 说明：更新 the Eagle3 draft model download link in the Qwen3-30B-A3B tutorial to AngelSlim/Qwen3-a3B eagle3 , so users can obtain the correct draft model for 投机解码. Fixes 17075 No. D
- [PR #15723](https://github.com/vllm-project/vllm-ascend/pull/15723) 已合并
  - 中文：【持续集成】New 测试用例 新增
  - 原文：[CI] New test cases added
  - 说明：新增测试用例： Qwen3-30B-A3B-W8A8-offload-test-acc.yaml Qwen3.5-397B-no-Memcache-perf.yaml修改了输入吞吐量的验证逻辑。- vLLM主：

#### 2026-10-09

- [PR #18120](https://github.com/vllm-project/vllm-ascend/pull/18120) 草稿
  - 中文：【修复】【Worker】恢复 contiguous KV 缓存 layouts and 启用 MRV2 tests
  - 原文：[BugFix][Worker] Restore contiguous KV cache layouts and enable MRV2 tests
  - 说明：恢复 contiguous 注意力 and Mamba 缓存 layouts from 18004. 启用 MRV2 for Qwen3-30B-A3B BF16/W8A8 A2 性能 tests. Restores contiguous 缓存 layouts. Pending CI validation. - vLLM m
- [PR #18023](https://github.com/vllm-project/vllm-ascend/pull/18023) 已合并
  - 中文：[测试]将Qwen3-30B-QuaRot-eagle3从eager模式切换到FULL_DECODE_ONLY图模式
  - 原文：[Test] switches the Qwen3-30B-QuaRot-eagle3 from eager mode to FULL_DECODE_ONLY graph mode
  - 说明：此PR更新了Qwen3-30B-QuaRot-eagle3测试用例，以使用仅完全解码图模式而不是eager模式，并保持性能保护。此PR中的更改： -从服务器cmd中删除--enforce-eager以禁用eager执行。-广告
- [PR #18106](https://github.com/vllm-project/vllm-ascend/pull/18106) 草稿
  - 中文：【持续集成】【杂项】启用 MRV2 for Qwen3-30B-A3B A2 性能 tests
  - 原文：[CI][Misc] Enable MRV2 for Qwen3-30B-A3B A2 performance tests
  - 说明：设置VLLM使用V2模型RUNNER = 1进行Qwen3-30B-A3B BF16和W8A8 A2性能测试。编号- vLLM主要：
- [PR #18054](https://github.com/vllm-project/vllm-ascend/pull/18054) 进行中
  - 中文：【持续集成】Clean up Qwen3-235B w8a8 A5 夜间用例 配置
  - 原文：[CI] Clean up Qwen3-235B w8a8 A5 nightly case config
  - 说明：清理测试/e2e/cases/models/configs/Qwen/Qwen3 235b w8a8 A5.yaml ： -将HCCL OP扩展模式移至共享环境锚点。-删除OMP PROC绑定， OMP NUM线程，任务队列启用， VLLM使用V1。-替换--compilation-config

#### 2026-10-08

- [PR #17356](https://github.com/vllm-project/vllm-ascend/pull/17356) 已合并
  - 中文：[CI] [Doc] [Misc]修剪退役的Qwen3-235B夜间案例并刷新保留的
  - 原文：[CI][Doc][Misc] Prune retired Qwen3-235B nightly cases and refresh the kept ones
  - 说明：Qwen3-235B 夜间 coverage has grown to 9 registered cases over 10 配置 files that repeat the same scenarios on different generations of launch flags; a few are no longer registered at all or point at a local absolute model path. This PR

#### 2026-09-27

- [PR #17579](https://github.com/vllm-project/vllm-ascend/pull/17579) 进行中
  - 中文：[性能] [教育部]优化EPLB映射和有效令牌记录
  - 原文：[Performance][MoE] Optimize EPLB mapping and valid-token recording
  - 说明：验证拦截器（ 2026-10-08 ） ：真正的Qwen3-30B-A3B TP2/EP2 eager ALLTOALL录制与教育部提供的目的地计数不匹配。清洁诊断：设备记录标志= True ， 0/96精确检查（每个等级48层）。第一层局部范围

#### 2026-09-21

- [PR #17131](https://github.com/vllm-project/vllm-ascend/pull/17131) 已合并
  - 中文：[测试] [Qwen3]预热“Qwen3-235B-disagg-pd”基准
  - 原文：[Test][Qwen3] Warm up `Qwen3-235B-disagg-pd` benchmark
  - 说明：This PR swaps the order of the 精度 test and the 性能 test so that the 性能 test can be fully warmed up. No. With 夜间用例.

#### 2026-09-10

- [PR #13895](https://github.com/vllm-project/vllm-ascend/pull/13895) 已合并
  - 中文：【测试】新增 Qwen3-30B A2 夜间 性能 cases
  - 原文：[Test] Add Qwen3-30B A2 nightly performance cases
  - 说明：This PR adds two independent A2 four-card 夜间 性能 guards for: - BF16 Qwen/Qwen3-30B-A3B - W8A8 Eco-Tech/Qwen3-30B-A3B-w8a8 Following maintainer feedback that the previous 1570-second PR E2E wa

### Qwen3.6

#### 2026-10-11

- [PR #18274](https://github.com/vllm-project/vllm-ascend/pull/18274) 已合并
  - 中文：【Cherry-pick】【releases/v0.30.0】【持续集成】【测试】更新 Qwen3.6 310P test configurations (from #18273)
  - 原文：[Cherry-pick][releases/v0.30.0][CI][Test] Update Qwen3.6 310P test configurations (from #18273)
  - 说明：Cherry-pick of PR 18273 onto releases/v0.30.0 . Original PR: 18273 Original author: @czydyy --- Backports the Qwen3.6 310P test 配置 changes from 18000 to main. It removes unused sampling parameters from the 27B DUO and 35B MTP cas
- [PR #18273](https://github.com/vllm-project/vllm-ascend/pull/18273) 已合并
  - 中文：【持续集成】【测试】更新 Qwen3.6 310P test configurations
  - 原文：[CI][Test] Update Qwen3.6 310P test configurations
  - 说明：Backports the Qwen3.6 310P test 配置 changes from 18000 to main. It removes unused sampling parameters from the 27B DUO and 35B MTP cases and 更新 the 27B and 35B DUO 性能 baselines. GLM changes from 18000 are excluded. D

#### 2026-10-10

- [Issue #18240](https://github.com/vllm-project/vllm-ascend/issues/18240) 进行中
  - 中文：【缺陷】【'DFlash2DraftModel'】DFlash2 draft rejected in APIServer: "Model architectures are not supported for now" (plugin registration timing?)
  - 原文：[Bug] DFlash2 draft rejected in APIServer: "Model architectures ['DFlash2DraftModel'] are not supported for now" (plugin registration timing?)
  - 说明：Bug Description 服务 Qwen3.8-27B with a DFlash2 draft model (following the official 投机-解码 guide example) fails at startup in the APIServer process: SpeculativeConfig validation rejects the draft architecture DFlash2DraftMo
- [Issue #18239](https://github.com/vllm-project/vllm-ascend/issues/18239) 进行中
  - 中文：【缺陷】【MRV2】Qwen3.8-27B + MTP on Model Runner V2: GDN 元数据 KeyError 'language_model.model.layers.0.linear_attn' during FULL_DECODE_ONLY capture
  - 原文：[Bug][MRV2] Qwen3.8-27B + MTP on Model Runner V2: GDN metadata KeyError 'language_model.model.layers.0.linear_attn' during FULL_DECODE_ONLY capture
  - 说明：Bug Description 服务 Qwen3.8-27B (architecture Qwen3 5ForConditionalGeneration , hybrid Gated-DeltaNet + full-注意力) on Model Runner V2 with MTP 投机解码 crashes during ACLGraph capture ( FULL 解码 ONLY warmup forward).
- [PR #18214](https://github.com/vllm-project/vllm-ascend/pull/18214) 进行中
  - 中文：【文档】【功能】documentation for Qwen3.6-27B-w8a8c8-mxfp8 model
  - 原文：[Doc][Feature] Add documentation for Qwen3.6-27B-w8a8c8-mxfp8 model
  - 说明：This PR adds documentation and deployment instructions for the Qwen3.6-27B-w8a8c8-mxfp8 quantized model on Ascend NPUs (950DT and 950PR Products). It includes hardware requirements, startup commands, and parameter descriptions (such as --kv
- [PR #18175](https://github.com/vllm-project/vllm-ascend/pull/18175) 进行中
  - 中文：【文档】【功能】documentation for Qwen3.6-27B-w8a8c8-mxfp8 and W8A8C8 FAQ
  - 原文：[Doc][Feature] Add documentation for Qwen3.6-27B-w8a8c8-mxfp8 and W8A8C8 FAQ
  - 说明：This PR adds documentation and deployment guidelines for the newly supported Qwen3.6-27B-w8a8c8-mxfp8 quantized model. It includes hardware requirements, a brief description, and a detailed FAQ section explaining how to use the W8A8C8 quant

#### 2026-09-24

- [PR #17451](https://github.com/vllm-project/vllm-ascend/pull/17451) 进行中
  - 中文：【持续集成】【MRV2】Cover hybrid full/SWA DFlash 解码 with Qwen3.6-35B-A3B
  - 原文：[CI][MRV2] Cover hybrid full/SWA DFlash decoding with Qwen3.6-35B-A3B
  - 说明：Root cause: the Qwen3.6 DFlash E2E test needs coverage for a draft model that mixes full 注意力 and sliding-window 注意力 (SWA), to catch regressions in hybrid-window DFlash 投机解码 on the Ascend v2 runner. 修复: 更新 te

#### 2026-09-19

- [Issue #16916](https://github.com/vllm-project/vllm-ascend/issues/16916) 已关闭
  - 中文：[Bug] ：混合GDN模型（ Qwen3.6-35B-A3B ） ：长预填序列化默认max_num_batched_tokens = 2048 （ < 70GB分支） +曼巴对齐模式
  - 原文：[Bug]: Hybrid GDN models (Qwen3.6-35B-A3B): long prefills serialize with default max_num_batched_tokens=2048 (<70GB branch) + mamba align mode
  - 说明：What happened? 服务 a hybrid GDN model ( Qwen3.6-35B-A3B , INT4 W4A16, 40 layers: linear-注意力/GDN + full 注意力) on Atlas 800 A3 with --启用-前缀-缓存 (mamba 缓存 mode resolves to 对齐 ): concurrent long prefills are sch

#### 2026-09-15

- [PR #16588](https://github.com/vllm-project/vllm-ascend/pull/16588) 已合并
  - 中文：[Doc] [BugFix]修复Atlas 300I duo和Atlas 800的Qwen3.6和Qwen3.8模型路径不正确的问题
  - 原文：[Doc][BugFix] Fix incorrect Qwen3.6 and Qwen3.8 model paths for Atlas 300I DUO and Atlas 800
  - 说明：This PR corrects the model paths for Qwen3.6-27B-w8a8 and Qwen3.8-27B-w8a8 in the documentation: - For Qwen3.5-27B-Qwen3.6-27B.md , it fixes the model path under the Atlas 800 A3/A2 section to use Eco-Tech/Qwen3.6-27B-w8a8 instead of the -3

#### 2026-08-13

- [PR #14235](https://github.com/vllm-project/vllm-ascend/pull/14235) 进行中
  - 中文：[BugFix] [Ascend NPU]修复DP级联崩溃并添加DP容错
  - 原文：[BugFix][Ascend NPU] Fix DP cascade crash and add DP fault tolerance
  - 说明：Problem In DP4×TP2+EP8 topology on Ascend 910B2 × 8, running Qwen3.6-35B-A3B-w8a8 with FULL 解码 ONLY aclgraph mode, three 崩溃 types were observed in production on vLLM-Ascend 0.23.0RC1: 崩溃 Type Error Code Root Cause ----------- ----

### Qwen3-VL

#### 2026-10-10

- [Issue #18197](https://github.com/vllm-project/vllm-ascend/issues/18197) 进行中
  - 中文：【缺陷】: Qwen3-VL bbox/grounding coordinates incorrect vs transformers reference (verified via IoU against ground truth)
  - 原文：[Bug]: Qwen3-VL bbox/grounding coordinates incorrect vs transformers reference (verified via IoU against ground truth)
  - 说明：Summary On vLLM-Ascend v0.23.0 (Ascend 910B4), a Qwen3-VL-based model fine-tuned for bounding-box/keypoint grounding produces objectively incorrect bbox coordinates compared to the same 检查点 run through the transformers reference impl

#### 2026-10-09

- [PR #18064](https://github.com/vllm-project/vllm-ascend/pull/18064) 草稿
  - 中文：【性能】内核] 优化基于自适应调度的 Split-QKV RMSNorm MRoPE
  - 原文：[Performance][Kernel] Optimize Split-QKV RMSNorm MRoPE with adaptive dispatch
  - 说明：The Qwen3.5 and Qwen3-VL 注意力 paths use triton 拆分 qkv rmsnorm mrope to 拆分 Q/K/V, normalize and rotate Q/K, and copy V and the optional gate. The existing 内核 processes one token row at a time and constructs full-width RoPE tem

#### 2026-09-28

- [PR #17474](https://github.com/vllm-project/vllm-ascend/pull/17474) 已合并
  - 中文：[Doc] [Feature]为Qwen池化模型添加A5指导
  - 原文：[Doc][Feature] Add A5 guidance for Qwen pooling models
  - 说明：This PR adds A5 container and 服务 examples for Qwen3-Embedding, Qwen3-Reranker, Qwen3-VL-Embedding, and Qwen3-VL-Reranker. It also 更新 the A5 supported-model matrix and adds the corresponding Simplified Chinese translations. The ser

#### 2026-08-19

- [PR #14574](https://github.com/vllm-project/vllm-ascend/pull/14574) 进行中
  - 中文：【特点】为Qwen3-VL VIT添加TP + SP混合序列并行性
  - 原文：[Feature] add TP+SP hybrid sequence parallelism for Qwen3-VL VIT
  - 说明：…coder - 新增 TP+SP hybrid 序列 parallelism for Qwen3-VL VIT encoder - 修复 padding, DP guard, 元数据 mutation, and ReduceScatter interface - use AllGathered full 权重 in SP o proj - 切换 SP o proj to ReplicatedLinear (Path A) Does

#### 2026-07-30

- [Issue #13199](https://github.com/vllm-project/vllm-ascend/issues/13199) 进行中
  - 中文：【Bug】： x86平台 310P 推理Qwen3-VL-8B-Instruct ，报错模块'triton'没有属性'language'
  - 原文：[Bug]: x86平台310P 推理Qwen3-VL-8B-Instruct，报错module 'triton' has no attribute 'language'

## GLM

### GLM-5.2

#### 2026-10-14

- [Issue #16195](https://github.com/vllm-project/vllm-ascend/issues/16195) 已关闭
  - 中文：【缺陷】【v0.26rc1】【GLM5.2】: 回退megamoe后MTP接受步长显著下降
  - 原文：[Bug]: [v0.26rc1][GLM5.2] 回退megamoe后MTP接受步长显著下降
- [PR #18574](https://github.com/vllm-project/vllm-ascend/pull/18574) 已合并
  - 中文：[文档]记录GLM-5.2和GLM-5.3的TurboQuant KV缓存选项
  - 原文：[Doc] Document TurboQuant KV cache options for GLM-5.2 and GLM-5.3
  - 说明：Sync of 18566 (main) to releases/v0.30.0 : documents --kv-缓存-dtype turboquant 4bit nc for GLM-5.2 and GLM-5.3, in the same shape as 18525 for DeepSeek-V4-Flash. Both guides already use --kv-缓存-dtype int8 , so the new bullet sits next

#### 2026-10-13

- [PR #18566](https://github.com/vllm-project/vllm-ascend/pull/18566) 已合并
  - 中文：[文档]记录GLM-5.2和GLM-5.3的TurboQuant KV缓存选项
  - 原文：[Doc] Document TurboQuant KV cache options for GLM-5.2 and GLM-5.3
  - 说明：Documents --kv-缓存-dtype turboquant 4bit nc for GLM-5.2 and GLM-5.3, in the same shape as 18525 for DeepSeek-V4-Flash. Both guides already use --kv-缓存-dtype int8 , so the new bullet sits next to it. Does this PR introduce any user-faci
- [PR #18568](https://github.com/vllm-project/vllm-ascend/pull/18568) 进行中
  - 中文：【测试】【算子】Cover Ascend950 SFA DCP with BF16 KV
  - 原文：[Test][Ops] Cover Ascend950 SFA DCP with BF16 KV
  - 说明：新增 an Ascend950 SFA DCP 回退 for the build 修复 merged in 18258 and include it in the curated A5 PR suite. The test uses one real-权重 GLM-5.2 W4A8 layer, BF16 KV, TP4, and DCP1/DCP4. Short prompts, KV block boundaries and eight dec
- [PR #18556](https://github.com/vllm-project/vllm-ascend/pull/18556) 进行中
  - 中文：[BugFix] [Ops]不要从定量描述中的索引器k_norm.bias创建RMSNorm偏差
  - 原文：[BugFix][Ops] Do not create RMSNorm bias from indexer k_norm.bias in quant description
  - 说明：quant description has norm bias() uses a substring match on quant-description key names, and GLM-5.2's DSA 索引器 carries real 索引器.k norm.bias 权重 that merely contain the "norm.bias" substring. This flipped the model-wide 切换 an
- [PR #18535](https://github.com/vllm-project/vllm-ascend/pull/18535) 进行中
  - 中文：[文档] [杂项]刷新支持矩阵、功能指南和模型权重条目
  - 原文：[Doc][Misc] Refresh support matrix, feature guides and model weight entries
  - 说明：Refresh the Ascend documentation for recently verified capabilities: - 支持 matrix/supported models.md : 更新 the max-model-len of GLM-5.2 from 200k to 1M . - 支持 matrix/supported features.md : 新增 a DSpark row (Experimental, verif
- [PR #15053](https://github.com/vllm-project/vllm-ascend/pull/15053) 已关闭
  - 中文：[BugFix] [DSA-CP]跨查询切片稳定闪电索引器TopK
  - 原文：[BugFix][DSA-CP] Stabilize lightning indexer TopK across query slices
  - 说明：GLM-5.2 DSA-CP shards a chunked-预填充 Query chunk across TP ranks. For a 1024-token chunk with TP=8, each rank evaluates 128 Query tokens against the 共享 Key history. The quantized Lightning 索引器 could return different TopK indices
- [PR #18298](https://github.com/vllm-project/vllm-ascend/pull/18298) 已合并
  - 中文：[Bugfix] [v0.30.0]支持混合C8和BF16层，以便在预充卸载中分层重复使用
  - 原文：[Bugfix][v0.30.0] Support mix C8 && BF16 layers for layerwise reuse in prefill offload
  - 说明：port 18318. The existing 预填充 layerwise reuse layout only supports uniform size for each spec. By enabling 索引器 C8, GLM5.2 might have some 索引器 layers fall back to BF16. This causes the layerwise 合并 to fail. This PR 修复 it by al

#### 2026-10-12

- [PR #18448](https://github.com/vllm-project/vllm-ascend/pull/18448) 草稿
  - 中文：【功能】【KVPP】支持 GLM-5.2 Mooncake layerwise 池化
  - 原文：[Feature][KVPP] Support GLM-5.2 Mooncake layerwise pooling
  - 说明：启用 GLM-5.2 to combine KVPP with AscendStoreConnector Mooncake block-key layerwise 池化, submitted from Eric-dot:layerwise kvpp with the adaptation committed directly to that branch. The implementation baseline is 8c50d945e ; the PR t
- [PR #18318](https://github.com/vllm-project/vllm-ascend/pull/18318) 已合并
  - 中文：[Bugfix]支持混合C8和BF16层，以便在预充卸载中分层重复使用
  - 原文：[Bugfix] Support mix C8 && BF16 layers for layerwise reuse in prefill offload
  - 说明：The existing 预填充 layerwise reuse layout only supports uniform size for each spec. By enabling 索引器 C8, GLM5.2 might have some 索引器 layers fall back to BF16. This causes the layerwise 合并 to fail. This PR 修复 it by allocating the
- [Issue #16683](https://github.com/vllm-project/vllm-ascend/issues/16683) 已关闭
  - 中文：【缺陷】: GLM5.2使用权重w4a8c8 1MB部署，enable_sparse_sfa_c8=true时，D节点崩溃
  - 原文：[Bug]: GLM5.2使用权重w4a8c8 1MB部署，enable_sparse_sfa_c8=true时，D节点崩溃

#### 2026-10-11

- [PR #17685](https://github.com/vllm-project/vllm-ascend/pull/17685) 已合并
  - 中文：【持续集成】新增 unregistered GLM-5.2 A3 static and super 内核 case
  - 原文：[CI] Add unregistered GLM-5.2 A3 static and super kernel case
  - 说明：新增 a standalone optional GLM-5.2 W8A8C8 A3 128K internal-DP 配置 based on 17871. Both deployment commands 启用 启用 npugraph ex , 启用 static 内核 and 启用 super 内核 , with 共享 LOCAL WORLD SIZE=16 for four local DP

#### 2026-10-10

- [PR #18246](https://github.com/vllm-project/vllm-ascend/pull/18246) 进行中
  - 中文：【持续集成】新增 GLM-5.2 and GLM-5.3-Flash 夜间 configurations
  - 原文：[CI] Add GLM-5.2 and GLM-5.3-Flash nightly configurations
  - 说明：添加五个与17516中审查的GLM部署文档一致的夜间配置：模型硬件单节点预填充/解码分解--- --- --- --- GLM-5.2 A5不包括W8A8C8 ，四个节点GLM-5.3-Flash A3 W8A8
- [PR #18192](https://github.com/vllm-project/vllm-ascend/pull/18192) 进行中
  - 中文：[文档] [模型]在GLM教程中将fuse_muls_add移动到ascend_compilation_config
  - 原文：[Doc][Model] Move fuse_muls_add into ascend_compilation_config in GLM tutorials
  - 说明：Fixes 18130. 融合 muls 新增 is a field of AscendCompilationConfig ( vllm ascend/ascend 配置.py:129 ), not of the top-level AscendConfig . The GLM5 / GLM5.2 / GLM5.3 tutorials passed it at the top level of --additional-配置 , so AscendCon
- [PR #18179](https://github.com/vllm-project/vllm-ascend/pull/18179) 进行中
  - 中文：【文档】【修复】empty $2 port parameter in GLM5.2 PD disaggregation startup scripts
  - 原文：[Doc][BugFix] Fix empty $2 port parameter in GLM5.2 PD disaggregation startup scripts
  - 说明：Description In section 5.1.3.1 (4× Atlas 800 A3 PD disaggregation) of docs/source/tutorials/models/GLM5.2.md , the 预填充 node templates reference --port $2 , but the 预填充 nodes are started directly with bash run dp template.sh without

#### 2026-10-09

- [Issue #18099](https://github.com/vllm-project/vllm-ascend/issues/18099) 进行中
  - 中文：[bug] ： [v 0.26] [glm5.2+kvoffload] PD-sep解码等级崩溃： HYBM VA地址重叠
  - 原文：[bug]:[v0.26][glm5.2+kvoffload]PD-sep decode ranks crash: HYBM VA address overlap
- [PR #16372](https://github.com/vllm-project/vllm-ascend/pull/16372) 已关闭
  - 中文：支持 glm5.2 索引器 C4 操作符集成
  - 原文：Supports glm5.2 indexer C4 operator integration
  - 说明：- vLLM main:
- [PR #18067](https://github.com/vllm-project/vllm-ascend/pull/18067) 已合并
  - 中文：[Cherry-pick] [releases/v0.30.0] [feature]调整modelrunnerv1以支持GLM 5.2的索引器mxfp4功能（来自# 18060 ）
  - 原文：[Cherry-pick][releases/v0.30.0][feature]Adapting modelrunnerv1 to support the indexer mxfp4 feature of GLM 5.2 (from #18060)
  - 说明：PR 18060的精选版本/v0.30.0。原始PR ： 18060原始作者： @ pichangping ---先决条件PR是此PR在modelrunnerv1中为GLM 5.2改编了li c4功能。否
- [PR #18060](https://github.com/vllm-project/vllm-ascend/pull/18060) 已合并
  - 中文：【功能】Adapting modelrunnerv1 to 支持 the 索引器 mxfp4 特性 of GLM 5.2
  - 原文：[feature]Adapting modelrunnerv1 to support the indexer mxfp4 feature of GLM 5.2
  - 说明：先决条件PR是此PR在modelrunnerv1中为GLM 5.2调整了li c4功能。no - vLLM main ：
- [PR #17900](https://github.com/vllm-project/vllm-ascend/pull/17900) 已合并
  - 中文：【功能】【KV 卸载】支持 GLM-5.2 V2 稀疏 卸载 with PP and DSpark
  - 原文：[Feature][KV Offload] Support GLM-5.2 V2 sparse offload with PP and DSpark
  - 说明：启用 GLM MLA DSpark with V2 稀疏 KV 卸载 and 分离式预填充, while preserving native MTP and non-卸载 paths. - Keep target KV in the 稀疏 host pool and draft KV resident on 解码; account for both in 缓存 sizing. - Pref

#### 2026-10-08

- [PR #17949](https://github.com/vllm-project/vllm-ascend/pull/17949) 已合并
  - 中文：【功能】the 索引器 mxfp4 特性 to GLM 5.2.
  - 原文：[Feature]Added the indexer mxfp4 feature to GLM 5.2.
  - 说明：The addition of the mxfp4 索引器 enhances GLM 5.2 性能. yes,a 切换 has been 新增 for users to 启用 索引器 C4; you can activate it using --注意力 配置.索引器 kv dtype mxfp4 -
- [Issue #18005](https://github.com/vllm-project/vllm-ascend/issues/18005) 进行中
  - 中文：【缺陷】: glm5.2+kvoffload 非分布式启动在bench中途报错：Expected all tensors to be on the same device, but got x2 is on npu:5
  - 原文：[Bug]: glm5.2+kvoffload 非分布式启动在bench中途报错：Expected all tensors to be on the same device, but got x2 is on npu:5

#### 2026-10-07

- [Issue #15922](https://github.com/vllm-project/vllm-ascend/issues/15922) 已关闭
  - 中文：【缺陷】: GLM5.2 1M长序列挂死
  - 原文：[Bug]: GLM5.2 1M长序列挂死

#### 2026-10-04

- [PR #17871](https://github.com/vllm-project/vllm-ascend/pull/17871) 进行中
  - 中文：【持续集成】【功能】启用 static and super 内核 for GLM 5.2 internal DP 每周
  - 原文：[CI][Feature] Enable static and super kernels for GLM 5.2 internal DP weekly
  - 说明：Enables 启用 npugraph ex , 启用 static 内核 and 启用 super 内核 in the ascend compilation 配置 of both deployment commands of the existing two-node GLM-5.2 W8A8C8 A3 128K internal DP 每周用例, and sets LOCAL WORLD SIZE="16" i

#### 2026-09-29

- [PR #17705](https://github.com/vllm-project/vllm-ascend/pull/17705) 进行中
  - 中文：【特点】【型号】PCP、DCP支持GLM-5.3-Flash KPool分度器
  - 原文：[Feature][Model] Support GLM-5.3-Flash KPool indexer with PCP and DCP
  - 说明：GLM-5.3-Flash用池化KPool索引器替换了GLM-5.2 LightningIndexer缓存布局。已完成的四个令牌池被压缩到BF16缓存中，而因果后缀保留在FP32尾缓存中。原来的提升路径没有

#### 2026-09-24

- [PR #17516](https://github.com/vllm-project/vllm-ascend/pull/17516) 进行中
  - 中文：[文档] [模型]合并GLM-5.2/5 .3指南并同步部署配置
  - 原文：[Doc][Model] Merge GLM-5.2/5.3 guides and sync deployment configurations
  - 说明：The GLM-5.2/GLM-5.3 deployment instructions were 拆分 across older examples and recently 新增 guides. 合并 the guides into GLM5.2.md and retain the hardware-specific A5 single-node, PP2 colocated and PD examples. - 新增 GLM-5.3 A2/A3 vers
- [Issue #17438](https://github.com/vllm-project/vllm-ascend/issues/17438) 进行中
  - 中文：【缺陷】: 23.post1和26.rc1版本GLM5.2-w8a8跑pd分离，d节点开启dcp会出现精度问题
  - 原文：[Bug]: 23.post1和26.rc1版本GLM5.2-w8a8跑pd分离，d节点开启dcp会出现精度问题

#### 2026-09-23

- [Issue #17391](https://github.com/vllm-project/vllm-ascend/issues/17391) 进行中
  - 中文：【缺陷】: GLM-5.2-w4a8c8 、GLM-5.3-w8a8c8premature stop / silent termination before 工具调用 generation in P/D disaggregated deployment
  - 原文：[Bug]:  GLM-5.2-w4a8c8 、GLM-5.3-w8a8c8premature stop / silent termination before tool call generation in P/D disaggregated deployment
- [PR #17344](https://github.com/vllm-project/vllm-ascend/pull/17344) 进行中
  - 中文：【修复】【Parser】Keep model output when a 工具调用 span produces no 工具调用
  - 原文：[BugFix][Parser] Keep model output when a tool-call span produces no tool call
  - 说明：A GLM-5.2 w4a8 agent request can come back as content="" / tool calls=[] while usage still counts every generated token, so the client sees a successful but empty answer and the agent loop stalls. Reproduced on A3 with --工具调用-parser gl

#### 2026-09-18

- [PR #16328](https://github.com/vllm-project/vllm-ascend/pull/16328) 已合并
  - 中文：【性能】【注意力】融合 SFA K-path ops and 启用 PROLOG_V3 融合 解码 for non-PD 服务
  - 原文：[Performance][Attention] Fuse SFA K-path ops and enable PROLOG_V3 fused decode for non-PD serving
  - 说明：GLM5.2 SFA profiling shows several removable ops in the K processing path of every layer. This PR removes them and makes PROLOG V3 the default 融合 preprocessing for quantized SFA layers in every deployment: 1. 每步 int64 slot cast : e

#### 2026-09-17

- [Issue #14656](https://github.com/vllm-project/vllm-ascend/issues/14656) 已关闭
  - 中文：[Bug]: 0.23.0rc1 and 0.23.0 GLM5.2 PD分离场景下存在工具调用返回jsonl格式异常问题

#### 2026-09-16

- [Issue #16654](https://github.com/vllm-project/vllm-ascend/issues/16654) 进行中
  - 中文：【Bug】： GLM-5.2 A3 （ 2 节点 P/D 分离部署） ，长时间 （ 3-8小时 ）运行后 Prefill实例出现 fftsplus aicore error ， EngineCore异常退出
  - 原文：[Bug]: GLM-5.2 A3（2 节点 P/D 分离部署），长时间（3-8小时）运行后Prefill实例出现 fftsplus aicore error ， EngineCore异常退出

#### 2026-09-07

- [PR #14683](https://github.com/vllm-project/vllm-ascend/pull/14683) 已合并
  - 中文：【测试】新增 GLM-5.2 SFA DCP 夜间 guard
  - 原文：[Test] Add GLM-5.2 SFA DCP nightly guard
  - 说明：What this PR does - replaces the DeepSeek-V3.2 SFA+DCP 夜间 配置 with a GLM-5.2 W4A8C8 guard - follows the GLM-5.2 single-node 1M layout: DP1/PP1/TP16/PCP1/DCP16 with block/interleave size 128 - uses the reference 1M SFA setting ( enab

#### 2026-08-31

- [PR #14373](https://github.com/vllm-project/vllm-ascend/pull/14373) 已关闭
  - 中文：[性能] (DCP, GLM5.2) ：使用Ascend C加速SFA稀疏索引重映射
  - 原文：[Performance](DCP, GLM5.2): accelerate SFA sparse-index remap with Ascend C
  - 说明：What changed - 新增 an Ascend C implementation of SFA DCP 稀疏-index remapping and stable compaction; - route the SFA CP backend through the custom operator on NPU while retaining the existing reference behavior; - 融合 owner filtering, ex

### GLM-5

#### 2026-10-14

- [Issue #16195](https://github.com/vllm-project/vllm-ascend/issues/16195) 已关闭
  - 中文：【缺陷】【v0.26rc1】【GLM5.2】: 回退megamoe后MTP接受步长显著下降
  - 原文：[Bug]: [v0.26rc1][GLM5.2] 回退megamoe后MTP接受步长显著下降
- [Issue #18640](https://github.com/vllm-project/vllm-ascend/issues/18640) 进行中
  - 中文：【缺陷】: 0.30.0rc1镜像双机A2部署GLM5.3Flash拉起失败
  - 原文：[Bug]: 0.30.0rc1镜像双机A2部署GLM5.3Flash拉起失败
- [Issue #16484](https://github.com/vllm-project/vllm-ascend/issues/16484) 已关闭
  - 中文：[Bug] [A5] [GLM DSpark]运行时状态更改会破坏编译准确性
  - 原文：[Bug][A5][GLM DSpark] Runtime state changes can break compiled accuracy

#### 2026-10-13

- [Issue #16954](https://github.com/vllm-project/vllm-ascend/issues/16954) 已关闭
  - 中文：【文档】: GLM-5 & GLM-5.1文档latest中A3PD分离配置 --kv-缓存-dtype int8 \ --attention_config.indexer_kv_dtype int8 \ 服务启动失败
  - 原文：[Doc]: GLM-5 & GLM-5.1文档latest中A3PD分离配置    --kv-cache-dtype int8 \     --attention_config.indexer_kv_dtype int8 \ 服务启动失败
  - 说明：【init .py:115】📚 The doc issue 文档地址： 文档中指定vllm-ascend 0.23.0版本 A3PD分离场景下vllm配置中新增参数 --kv-缓存-dtype int8 \ --注意力 配置.索引器 kv dtype int8 \ 带该参数启动服务报错： INFO 09-19 05:32:12 Registered model loader <class 'vllm ascend.model loade
- [Issue #18605](https://github.com/vllm-project/vllm-ascend/issues/18605) 进行中
  - 中文：[错误] ： GLM-5.3-Flash MooncakeConnectorV2 PD在长输入提示下重复推理
  - 原文：[Bug]: GLM-5.3-Flash MooncakeConnectorV2 PD repeats reasoning on a long-input prompt
  - 说明：GLM-5.3-Flash with MooncakeConnectorV2 repeatedly continues reasoning without returning the final answer for a long-input request through the PD route. The identical prompt completes correctly when sent directly to D with both cold and warm
- [Issue #18573](https://github.com/vllm-project/vllm-ascend/issues/18573) 进行中
  - 中文：[Doc]: 0.30.0rc1的GLM-5.3文档配置，实测带memcache的配置可以正常拉起服务，但是curl P节点无响应，请确认配置方案是否准确
  - 说明：📚 The doc issue 0.30.0rc1的文档配置，实测带memcache的配置可以正常拉起服务，但是curl P节点无响应，去掉如下memcache配置后，推理正常 <img width="984" height="475" alt="Image" src=" / 具体配置段落： <img width="1217" height="1138" alt="Image" src=" / Suggest a potential alternative/修复 No r
- [Issue #18560](https://github.com/vllm-project/vllm-ascend/issues/18560) 进行中
  - 中文：【文档】: Feedback for `/zh-cn/v0.30.0rc1/tutorials/models/GLM5.3.html`
  - 原文：[Doc]: Feedback for `/zh-cn/v0.30.0rc1/tutorials/models/GLM5.3.html`
  - 说明：📚 The doc issue 实测融合 muls 新增 参数层级有误 文档未能及时更新；glm5.3 w8a8c8 四机混部使用0.30.0rc1 版本拉取报融合 muls 新增参数不支持，按附件修改vllm服务参数后--additional-配置 "{"ascend compilation 配置": {"融合 muls 新增": true}, "启用 dsa cp": true, "启用 balance scheduli
- [PR #18553](https://github.com/vllm-project/vllm-ascend/pull/18553) 进行中
  - 中文：[文档] [v0.30.0]澄清GLM-5停产并调整GLM-5.1部署示例
  - 原文：[Doc][v0.30.0] Clarify GLM-5 discontinuation and align GLM-5.1 deployment examples
  - 说明：Clarify that GLM-5 is discontinued starting with vLLM Ascend v0.30.0 and make the deployment examples specific to GLM-5.1. The guide currently combines GLM-5 and GLM-5.1, lists GLM-5 权重 and serves requests under the glm-5 alias even in
- [PR #18552](https://github.com/vllm-project/vllm-ascend/pull/18552) 进行中
  - 中文：[文档]澄清GLM-5停产并调整GLM-5.1部署示例
  - 原文：[Doc] Clarify GLM-5 discontinuation and align GLM-5.1 deployment examples
  - 说明：Clarify that GLM-5 is discontinued starting with vLLM Ascend v0.30.0 and make the deployment examples specific to GLM-5.1. The guide currently combines GLM-5 and GLM-5.1, lists GLM-5 权重 and serves requests under the glm-5 alias even in
- [PR #18534](https://github.com/vllm-project/vllm-ascend/pull/18534) 进行中
  - 中文：【特点】【型号】GLM-Next KPool索引器LI C8 ： int8量化池化缓存， dsa_cp兼容
  - 原文：[Feat][Model] GLM-Next KPool indexer LI C8: int8 quantized pooled cache, dsa_cp compatible
  - 说明：GLM-5.3-Flash (glm5 next arch, KDA+SFA hybrid) uses the KPool pooled 索引器 缓存. Today 注意力 配置.索引器 kv dtype is silently ignored for this model family: kpool models are not SFA-稀疏, so 启用 稀疏 li c8 is never derived
- [Issue #18523](https://github.com/vllm-project/vllm-ascend/issues/18523) 进行中
  - 中文：[错误] ： v0.30.0rc1 glm5.3-w8a8c8部署 四机Atlas 800I A2混部远程引擎1不得在外部或混合dp 1b模式下使用--headless
  - 原文：[Bug]: v0.30.0rc1部署glm5.3-w8a8c8 四机Atlas 800I A2混部 Remote engine1 must not use --headless in external or hybrid dp 1b mode
- [Issue #18492](https://github.com/vllm-project/vllm-ascend/issues/18492) 进行中
  - 中文：[Doc]: Feedback for `/zh-cn/v0.30.0rc1/tutorials/models/GLM5.3.html' vllm-ascend v0.30.rc1版本都已经更新到了 ， 5.1.1节中的脚文档里写的还是本在v0.23.0上进行了测试。
  - 原文：[Doc]: Feedback for `/zh-cn/v0.30.0rc1/tutorials/models/GLM5.3.html` vllm-ascend版本都已经更新到v0.30.rc1了，文档里写的还是The scripts in Section 5.1.1 were tested on v0.23.0.
  - 说明：📚 The doc issue 5.1.1 多节点部署¶ 如果您想部署多节点环境，需要按照验证多节点通信环境中的说明验证多节点通信。 The scripts in Section 5.1.1 were tested on v0.23.0. Suggest a potential alternative/修复 No response

#### 2026-10-12

- [Issue #16683](https://github.com/vllm-project/vllm-ascend/issues/16683) 已关闭
  - 中文：【缺陷】: GLM5.2使用权重w4a8c8 1MB部署，enable_sparse_sfa_c8=true时，D节点崩溃
  - 原文：[Bug]: GLM5.2使用权重w4a8c8 1MB部署，enable_sparse_sfa_c8=true时，D节点崩溃
- [Issue #18387](https://github.com/vllm-project/vllm-ascend/issues/18387) 进行中
  - 中文：[Doc]: 使用docs.vllm.ai上 GLM-5.3-Flash (Experimental) 介绍的镜像，启动 glm-5.3-flash-w8a8失败
  - 原文：[Doc]: 使用docs.vllm.ai上 GLM-5.3-Flash (Experimental) 介绍的镜像，启动glm-5.3-flash-w8a8失败
  - 说明：【init .py:44】【init .py:46】📚 The doc issue <img width="1994" height="718" alt="Image" src=" / 实际执行时报错： INFO 10-12 07:03:55 Available plugins for group vllm.platform plugins: INFO 10-12 07:03:55 - ascend - vllm ascend:register INFO 10-12

#### 2026-10-11

- [Issue #18315](https://github.com/vllm-project/vllm-ascend/issues/18315) 进行中
  - 中文：【缺陷】: GLM5.3 w8a8c8 使用v0.27.1RC1 参考社区文档部署报MoeDistributedDispatch算子问题，但是去掉PYTORCH_NPU_ALLOC_CONF、HCCL_OP_EXPANSION_MODE两个环境变量可以拉起
  - 原文：[Bug]: GLM5.3 w8a8c8 使用v0.27.1RC1 参考社区文档部署报MoeDistributedDispatch算子问题，但是去掉PYTORCH_NPU_ALLOC_CONF、HCCL_OP_EXPANSION_MODE两个环境变量可以拉起
- [PR #18278](https://github.com/vllm-project/vllm-ascend/pull/18278) 进行中
  - 中文：[Cherry-pick] [releases/v0.30.0] [CI]删除GLM5和GLM4.7预定案例和YAML文件（来自# 18013 ）
  - 原文：[Cherry-pick][releases/v0.30.0][CI] Remove GLM5 and GLM4.7 scheduled cases and YAML files (from #18013)
  - 说明：Cherry-pick of PR 18013 onto releases/v0.30.0 . Original PR: 18013 Original author: @Wyz-134 --- 移除 the remaining GLM-5 (original version) and GLM-4.7 夜间/每周 cases, their YAML files, and obsolete scheduled-test references, follo

#### 2026-10-10

- [PR #18013](https://github.com/vllm-project/vllm-ascend/pull/18013) 已合并
  - 中文：【持续集成】移除 GLM5 and GLM4.7 scheduled cases and YAML files
  - 原文：[CI] Remove GLM5 and GLM4.7 scheduled cases and YAML files
  - 说明：移除 the remaining GLM-5 (original version) and GLM-4.7 夜间/每周 cases, their YAML files, and obsolete scheduled-test references, following the cleanup scope of 17950. - 移除 glm-4.7-w8a8 from 夜间 and delete tests/e2e/cases/mo
- [PR #18192](https://github.com/vllm-project/vllm-ascend/pull/18192) 进行中
  - 中文：[文档] [模型]在GLM教程中将fuse_muls_add移动到ascend_compilation_config
  - 原文：[Doc][Model] Move fuse_muls_add into ascend_compilation_config in GLM tutorials
  - 说明：Fixes 18130. 融合 muls 新增 is a field of AscendCompilationConfig ( vllm ascend/ascend 配置.py:129 ), not of the top-level AscendConfig . The GLM5 / GLM5.2 / GLM5.3 tutorials passed it at the top level of --additional-配置 , so AscendCon

#### 2026-10-09

- [Issue #18130](https://github.com/vllm-project/vllm-ascend/issues/18130) 进行中
  - 中文：【缺陷】: v27.1rc1部署glm5.3-w8a8c8 四机Atlas 800I A2混部 fuse_muls_add 这个参数报不支持
  - 原文：[Bug]: v27.1rc1部署glm5.3-w8a8c8 四机Atlas 800I A2混部 fuse_muls_add 这个参数报不支持
- [Issue #16072](https://github.com/vllm-project/vllm-ascend/issues/16072) 已关闭
  - 中文：【缺陷】: GLM-5.3-Flash-w8a8长序列（1M）推理启动成功，AIME2026精度测试后台崩溃
  - 原文：[Bug]: GLM-5.3-Flash-w8a8长序列（1M）推理启动成功，AIME2026精度测试后台崩溃
- [Issue #18099](https://github.com/vllm-project/vllm-ascend/issues/18099) 进行中
  - 中文：[bug] ： [v 0.26] [glm5.2+kvoffload] PD-sep解码等级崩溃： HYBM VA地址重叠
  - 原文：[bug]:[v0.26][glm5.2+kvoffload]PD-sep decode ranks crash: HYBM VA address overlap

#### 2026-10-08

- [Issue #18005](https://github.com/vllm-project/vllm-ascend/issues/18005) 进行中
  - 中文：【缺陷】: glm5.2+kvoffload 非分布式启动在bench中途报错：Expected all tensors to be on the same device, but got x2 is on npu:5
  - 原文：[Bug]: glm5.2+kvoffload 非分布式启动在bench中途报错：Expected all tensors to be on the same device, but got x2 is on npu:5

#### 2026-10-07

- [Issue #15922](https://github.com/vllm-project/vllm-ascend/issues/15922) 已关闭
  - 中文：【缺陷】: GLM5.2 1M长序列挂死
  - 原文：[Bug]: GLM5.2 1M长序列挂死
- [Issue #17951](https://github.com/vllm-project/vllm-ascend/issues/17951) 进行中
  - 中文：[文档] ： GLM-5.3-Flash教程第4.1节图像解析为v0.23.0 ，不支持Glm5Next
  - 原文：[Doc]: GLM-5.3-Flash tutorial section 4.1 images resolve to v0.23.0, which has no Glm5Next support
  - 说明：📚 The doc issue Page: GLM-5.3-Flash (Experimental) — 4.1 Docker Image Installation Source file: docs/source/tutorials/models/GLM5.3-Flash.md Affects: both en/latest and zh-cn/latest Section 4.1 currently tells users to pull a vLLM-Ascend v

#### 2026-10-04

- [PR #17664](https://github.com/vllm-project/vllm-ascend/pull/17664) 已合并
  - 中文：[Refactor] [Ops]用fla_npu替换捆绑的KDA运算符
  - 原文：[Refactor][Ops] Replace bundled KDA operators with fla_npu
  - 说明：Directly import chunk kda fwd and recurrent kda from fla npu.ops.ascendc in the 共享 KDA adapters used by Kimi K3 and GLM5Next. Keep the existing normalization, gate/beta handling and V-first 缓存 semantics, adapting the recurrent keywor

#### 2026-09-26

- [Issue #17541](https://github.com/vllm-project/vllm-ascend/issues/17541) 进行中
  - 中文：[Bug][GLM-5.3] A3 P/D：8192 预填充批次导致输出损坏；919K 中间检索在 4096 处仍然错误
  - 原文：[Bug][GLM-5.3] A3 P/D: 8192 prefill batch corrupts output; 919K middle retrieval still wrong at 4096
  - 说明：RCA 更新 (2026-09-26): The 6,816-token corruption is 导致 by an undersized 融合-MoE receiver capacity: we explicitly set mega moe max tokens=8192 where the running build defaults to 65536 . Observed expert routes exceeded 8192 and the

#### 2026-09-25

- [Issue #17532](https://github.com/vllm-project/vllm-ascend/issues/17532) 进行中
  - 中文：【Bug】： # 16925的圆形短路掉落GLM-5-Next KPool尾槽映射超出融合路径（ MTP起草器） ；夜间test_glm5next_tail_slot_mapping_triton失败4/4
  - 原文：[Bug]: #16925's circular short-circuit drops GLM-5-Next KPool tail slot mapping outside the fused path (MTP drafter); nightly test_glm5next_tail_slot_mapping_triton fails 4/4

#### 2026-09-24

- [Issue #17443](https://github.com/vllm-project/vllm-ascend/issues/17443) 进行中
  - 中文：[Bug] ： GLM-5.3-Flash W8A8上的长上下文TTFT退化（ A3 ， P/D分解） ：预填充率崩溃102K→ 205K→ 460K （ 11.8K → 10.0K → 3.4K tok/s ） ，解码TPOT不受影响
  - 原文：[Bug]: Long-context TTFT degradation on GLM-5.3-Flash W8A8 (A3, P/D disaggregated): prefill rate collapses 102K→205K→460K (11.8K → 10.0K → 3.4K tok/s), decode TPOT unaffected
- [Issue #17438](https://github.com/vllm-project/vllm-ascend/issues/17438) 进行中
  - 中文：【缺陷】: 23.post1和26.rc1版本GLM5.2-w8a8跑pd分离，d节点开启dcp会出现精度问题
  - 原文：[Bug]: 23.post1和26.rc1版本GLM5.2-w8a8跑pd分离，d节点开启dcp会出现精度问题

#### 2026-09-23

- [Issue #17391](https://github.com/vllm-project/vllm-ascend/issues/17391) 进行中
  - 中文：【缺陷】: GLM-5.2-w4a8c8 、GLM-5.3-w8a8c8premature stop / silent termination before 工具调用 generation in P/D disaggregated deployment
  - 原文：[Bug]:  GLM-5.2-w4a8c8 、GLM-5.3-w8a8c8premature stop / silent termination before tool call generation in P/D disaggregated deployment
- [Issue #17388](https://github.com/vllm-project/vllm-ascend/issues/17388) 进行中
  - 中文：[Bug]: enable_dsa_cp = true在cudagraph捕获期间在sfa_cp中GLM-5.3-Flash预填充启动失败
  - 原文：[Bug]: enable_dsa_cp=true fails GLM-5.3-Flash prefill startup in sfa_cp during cudagraph capture

#### 2026-09-18

- [Issue #16835](https://github.com/vllm-project/vllm-ascend/issues/16835) 进行中
  - 中文：[Doc]: GLM5.3PD分离参考5.2配置拉起失败
  - 说明：📚 The doc issue 文档中GLM 5.3 PD分离参考5.2，按照5.2配置拉起失败。 使用配置为 w8a8c8 A3 四机： "预填充": {"dp size": 1, "pp size": 2, "tp size": 16, "pp layer partition": "41,37"}, "解码": { "dp size": 16, "tp size": 2} 目前尝试关闭sfa c8,增大HCCLBUFFSIZE 到1024，P节点mtp

#### 2026-09-17

- [PR #16802](https://github.com/vllm-project/vllm-ascend/pull/16802) 进行中
  - 中文：[BugFix] [Model]在GLM-5-next处理器视频分支中绑定merge_size
  - 原文：[BugFix][Model] Bind merge_size in GLM-5-next processor video branch
  - 说明：Glm5NextProcessor. get num multimodal tokens() assigns 合并 size only inside the if image sizes is not None: branch, but the video branch reads the same variable: Any video-only request (i.e. image sizes=None , video sizes set) therefore r
- [Issue #14656](https://github.com/vllm-project/vllm-ascend/issues/14656) 已关闭
  - 中文：[Bug]: 0.23.0rc1 and 0.23.0 GLM5.2 PD分离场景下存在工具调用返回jsonl格式异常问题

#### 2026-09-16

- [Issue #16654](https://github.com/vllm-project/vllm-ascend/issues/16654) 进行中
  - 中文：【Bug】： GLM-5.2 A3 （ 2 节点 P/D 分离部署） ，长时间 （ 3-8小时 ）运行后 Prefill实例出现 fftsplus aicore error ， EngineCore异常退出
  - 原文：[Bug]: GLM-5.2 A3（2 节点 P/D 分离部署），长时间（3-8小时）运行后Prefill实例出现 fftsplus aicore error ， EngineCore异常退出

### GLM-5.1

#### 2026-10-13

- [Issue #16954](https://github.com/vllm-project/vllm-ascend/issues/16954) 已关闭
  - 中文：【文档】: GLM-5 & GLM-5.1文档latest中A3PD分离配置 --kv-缓存-dtype int8 \ --attention_config.indexer_kv_dtype int8 \ 服务启动失败
  - 原文：[Doc]: GLM-5 & GLM-5.1文档latest中A3PD分离配置    --kv-cache-dtype int8 \     --attention_config.indexer_kv_dtype int8 \ 服务启动失败
  - 说明：【init .py:115】📚 The doc issue 文档地址： 文档中指定vllm-ascend 0.23.0版本 A3PD分离场景下vllm配置中新增参数 --kv-缓存-dtype int8 \ --注意力 配置.索引器 kv dtype int8 \ 带该参数启动服务报错： INFO 09-19 05:32:12 Registered model loader <class 'vllm ascend.model loade
- [PR #18553](https://github.com/vllm-project/vllm-ascend/pull/18553) 进行中
  - 中文：[文档] [v0.30.0]澄清GLM-5停产并调整GLM-5.1部署示例
  - 原文：[Doc][v0.30.0] Clarify GLM-5 discontinuation and align GLM-5.1 deployment examples
  - 说明：Clarify that GLM-5 is discontinued starting with vLLM Ascend v0.30.0 and make the deployment examples specific to GLM-5.1. The guide currently combines GLM-5 and GLM-5.1, lists GLM-5 权重 and serves requests under the glm-5 alias even in
- [PR #18552](https://github.com/vllm-project/vllm-ascend/pull/18552) 进行中
  - 中文：[文档]澄清GLM-5停产并调整GLM-5.1部署示例
  - 原文：[Doc] Clarify GLM-5 discontinuation and align GLM-5.1 deployment examples
  - 说明：Clarify that GLM-5 is discontinued starting with vLLM Ascend v0.30.0 and make the deployment examples specific to GLM-5.1. The guide currently combines GLM-5 and GLM-5.1, lists GLM-5 权重 and serves requests under the glm-5 alias even in
- [PR #18496](https://github.com/vllm-project/vllm-ascend/pull/18496) 进行中
  - 中文：【功能】【xlite】支持 GLM-5.1 LI-C8 for the XLite backend
  - 原文：[Feature][xlite] Support GLM-5.1 LI-C8 for the XLite backend
  - 说明：【功能】【xlite】支持 GLM-5.1 LI-C8 Connect the existing XLite LI-C8 implementation to vLLM-Ascend: - Recognize QK INT8 DYNAMIC in 量化 元数据. - Pass per-layer LI-C8 flags to XLite. - Preserve both INT8 索引器 keys and FP16 k

#### 2026-10-12

- [PR #18340](https://github.com/vllm-project/vllm-ascend/pull/18340) 已合并
  - 中文：【持续集成】新增 每周用例 GLM-5.1-w8a8c8-MTP-卸载-test-perf
  - 原文：[CI] Add weekly case GLM-5.1-w8a8c8-MTP-offload-test-perf
  - 说明：新增 每周用例 GLM-5.1-w8a8c8-MTP-卸载-test-perf - vLLM main:

#### 2026-10-09

- [PR #18117](https://github.com/vllm-project/vllm-ascend/pull/18117) 草稿
  - 中文：【文档】【模型】补充文档 GLM-5.1 A5 AlltoAllV and 稀疏 C8 failures
  - 原文：[Doc][Model] Document GLM-5.1 A5 AlltoAllV and sparse C8 failures
  - 说明：【16】【4】补充文档 two independently reproduced GLM-5.1 W4A4C8 failures on Ascend 950PR: the startup AlltoAllV failure reporting rankNumPerBoard is more than , and a first-request 稀疏 C8 注意力 segfault after health checks succeed. Exp
- [PR #18077](https://github.com/vllm-project/vllm-ascend/pull/18077) 进行中
  - 中文：【持续集成】【功能】启用 static and super 内核 for GLM 5.1 PrefillMC2
  - 原文：[CI][Feature] Enable static and super kernels for GLM 5.1 PrefillMC2
  - 说明：启用 启用 npugraph ex , 启用 static 内核 , and 启用 super 内核 under ascend compilation 配置 for the existing GLM-5.1 W8A8 PrefillMC2 夜间用例, following 17871. Set LOCAL WORLD SIZE="16" to match the single-node A3 TP16/DP

#### 2026-10-08

- [PR #17974](https://github.com/vllm-project/vllm-ascend/pull/17974) 进行中
  - 中文：【修复】【持续集成】恢复 稀疏 C8 settings and 更新 GLM-5.1 检查点
  - 原文：[BugFix][CI] Restore sparse C8 settings and update GLM-5.1 checkpoints
  - 说明：15514 migrated disabled 稀疏-缓存 options to explicit int8 arguments, unintentionally enabling 缓存 量化 in several GLM cases. 恢复 the previous settings in 14 case files and two GLM-5.2 deployment examples: 移除 the dtype

#### 2026-09-30

- [PR #17836](https://github.com/vllm-project/vllm-ascend/pull/17836) 草稿
  - 中文：【持续集成】【PCP】迁移 GLM MRV2 nightlies from DSA-CP to PCP
  - 原文：[CI][PCP] Migrate GLM MRV2 nightlies from DSA-CP to PCP
  - 说明：- 迁移 five GLM MRV2 夜间 configurations from DSA-CP to PCP while preserving their device counts. - 对齐 the GLM-5.1 PD 预填充 topology and KV transfer 元数据 with the new TP size. - Keep the GLM-5.2 DCP topology and raise its HCC

#### 2026-09-18

- [PR #16912](https://github.com/vllm-project/vllm-ascend/pull/16912) 已合并
  - 中文：【测试】更新 夜间 性能 baselines
  - 原文：[Test]Update nightly performance baselines
  - 说明：更新 the DeepSeek V4 Pro and GLM 5.1 external DP 性能 baselines to match the latest measured results. - vLLM main:

#### 2026-09-15

- [PR #16615](https://github.com/vllm-project/vllm-ascend/pull/16615) 已合并
  - 中文：[测试] [CI]禁用GLM-5.1 A2双节点测试的flashcomm1
  - 原文：[Test][CI] Disable flashcomm1 for GLM-5.1 A2 dual-node test
  - 说明：Removes VLLM ASCEND 启用 FLASHCOMM1: 1 from the GLM-5.1 W8A8 A2 dual-node 夜间 test 配置. This 配置 is not suitable for this 测试用例 and can cause the test to fail. No.

### GLM-4.7

#### 2026-10-11

- [PR #18278](https://github.com/vllm-project/vllm-ascend/pull/18278) 进行中
  - 中文：[Cherry-pick] [releases/v0.30.0] [CI]删除GLM5和GLM4.7预定案例和YAML文件（来自# 18013 ）
  - 原文：[Cherry-pick][releases/v0.30.0][CI] Remove GLM5 and GLM4.7 scheduled cases and YAML files (from #18013)
  - 说明：Cherry-pick of PR 18013 onto releases/v0.30.0 . Original PR: 18013 Original author: @Wyz-134 --- 移除 the remaining GLM-5 (original version) and GLM-4.7 夜间/每周 cases, their YAML files, and obsolete scheduled-test references, follo

#### 2026-10-10

- [PR #18013](https://github.com/vllm-project/vllm-ascend/pull/18013) 已合并
  - 中文：【持续集成】移除 GLM5 and GLM4.7 scheduled cases and YAML files
  - 原文：[CI] Remove GLM5 and GLM4.7 scheduled cases and YAML files
  - 说明：移除 the remaining GLM-5 (original version) and GLM-4.7 夜间/每周 cases, their YAML files, and obsolete scheduled-test references, following the cleanup scope of 17950. - 移除 glm-4.7-w8a8 from 夜间 and delete tests/e2e/cases/mo

### GLM-4

#### 2026-10-04

- [Issue #17874](https://github.com/vllm-project/vllm-ascend/issues/17874) 进行中
  - 中文：[错误] ： GLM-4.6V视觉编码器在910C上没有有效的TP并行度—并发图像请求通过编码器串行化
  - 原文：[Bug]: GLM-4.6V vision encoder has no effective TP parallelism on 910C — concurrent image requests serialize through the encoder

## Kimi

### Kimi K3

#### 2026-10-14

- [Issue #14567](https://github.com/vllm-project/vllm-ascend/issues/14567) 已关闭
  - 中文：【缺陷】: enable_flashcomm1=true causes DP padding that routes padding token 0 to rank0, leading to TTFT 性能 回退 on Ascend 910A3 for Kimi-K3
  - 原文：[Bug]: enable_flashcomm1=true causes DP padding that routes padding token 0 to rank0, leading to TTFT performance regression on Ascend 910A3 for Kimi-K3
- [PR #18672](https://github.com/vllm-project/vllm-ascend/pull/18672) 进行中
  - 中文：【修复】【KDA】Match fallback compiled launches to Triton signatures
  - 原文：[BugFix][KDA] Match fallback compiled launches to Triton signatures
  - 说明：Kimi K3 预填充 can fail in StridedKDAFallbackPlan. copy with: The fallback prepares batch memcpy 内核 with BLOCK SIZE=8192 , then invokes the retained CompiledKernel with only its three pointer arguments. Triton 3.6 retains the BLOCK SIZ
- [PR #18668](https://github.com/vllm-project/vllm-ascend/pull/18668) 进行中
  - 中文：【文档】【模型】迁移 Kimi-K3 guide to latest
  - 原文：[Doc][Model] Migrate Kimi-K3 guide to latest
  - 说明：迁移 the Kimi-K3 guide and its 支持 matrix entries from MaybeChz:docs/kimi-k3-v0.27.1 (f916e3f7a) to main . Change the version reference to latest , mark both Kimi-K3 支持 matrix entries as supported, and 移除 experimental labels
- [PR #18261](https://github.com/vllm-project/vllm-ascend/pull/18261) 已合并
  - 中文：[Cherry-pick] [releases/v0.30.0] [Feature] [Model]支持Kimi K3及其MTP草案模型的EPLB （来自# 17835 ）
  - 原文：[Cherry-pick][releases/v0.30.0][Feature][Model] Support EPLB for Kimi K3 and its MTP draft model (from #17835)
  - 说明：Backports 17835 from main to releases/v0.30.0 . This brings EPLB 支持 for Kimi K3 and its MoE MTP draft model to the v0.30.0 release branch, including PP-local MoE bookkeeping, redundant expert initialization, and physical expert metadat

#### 2026-10-13

- [PR #18606](https://github.com/vllm-project/vllm-ascend/pull/18606) 进行中
  - 中文：[BugFix] [Kimi]使用分组matmul进行急切的MXFP8投影
  - 原文：[BugFix][Kimi] Use grouped matmul for eager MXFP8 projections
  - 说明：Kimi K3 预填充 can stall on three w8a8mxfp8 + ND projections: the 融合 QKV matmul, routed down , and routed up . These paths currently use npu quant matmul , which dispatches to aclnnQuantMatmulV5 - QuantBatchMatmulV3 Tiling for this form
- [PR #18595](https://github.com/vllm-project/vllm-ascend/pull/18595) 草稿
  - 中文：[BugFix] [注意]保留已测试的FlashMLA DCP8 PD快照
  - 原文：[BugFix][Attention] Preserve tested FlashMLA DCP8 PD snapshot
  - 说明：This draft preserves the exact code snapshot used by the completed eight-host Kimi-K3 预填充/解码 run. With DCP/缓存 interleave 768, the deployed CANN PROLOG V3 rejected TileSize=768 ; the deployed Ascend Triton direct launcher also rej
- [Issue #18520](https://github.com/vllm-project/vllm-ascend/issues/18520) 进行中
  - 中文：[Bug]: 0.30.0rc1 版本kimi-k3未更新配置，pd分离配置缺失
- [PR #18469](https://github.com/vllm-project/vllm-ascend/pull/18469) 进行中
  - 中文：修复填充M块容量超过256时A3 GMM SiTU回退的问题
  - 原文：Fix A3 GMM SiTU fallback when padded M-block capacity exceeds 256
  - 说明：Follow-up to 16655. The 融合 A3 GMM SiTU operator rejects requests when its padded M-block upper bound exceeds 256, which 导致 a 128K Kimi K3 预填充 request to fail in production. Mirror the native capacity bound in the Python fusion se

#### 2026-10-12

- [PR #18463](https://github.com/vllm-project/vllm-ascend/pull/18463) 进行中
  - 中文：【文档】【模型】迁移 Kimi-K3 guide to v0.30.0
  - 原文：[Doc][Model] Migrate Kimi-K3 guide to v0.30.0
  - 说明：迁移 the Kimi-K3 guide and its 支持 matrix entries from MaybeChz:docs/kimi-k3-v0.27.1 (f916e3f7a) to releases/v0.30.0 . Change the version reference to v0.30.0 , mark both Kimi-K3 支持 matrix entries as supported, and 移除 experi
- [PR #18332](https://github.com/vllm-project/vllm-ascend/pull/18332) 进行中
  - 中文：【持续集成】【模型】新增 Kimi K3 MXFP QuaRot A5 夜间 coverage
  - 原文：[CI][Model] Add Kimi K3 MXFP QuaRot A5 nightly coverage
  - 说明：Adds a four-node A5 mixed-deployment 夜间 配置 for Eco-Tech/Kimi-K3-w4a8-mxfp-quarot (8 NPUs per node, TP8/DP4 with expert parallelism across 32 NPUs). Scope is limited to four files: - Kimi K3 A5 model YAML with GPQA thinking a

#### 2026-10-10

- [PR #18142](https://github.com/vllm-project/vllm-ascend/pull/18142) 草稿
  - 中文：【修复】【Kimi】A5 PD 缓存头数与 KDA 内核调用
  - 原文：[BugFix][Kimi] 修复 A5 PD 缓存头数与 KDA 内核调用
  - 说明：修改内容与原因 修复 Kimi K3 在 Ascend A5 PD 分离场景下的两个运行时问题：缓存按查询头数规划导致初始化失败，以及 KDA 预编译内核收到多余 constexpr 参数、导致首次 prefill 报 18 arguments (21 given) 。 此草稿 PR 同时固定 2026 年 10 月 10 日已验证跑通的完整代码快照： deedc2e7bcf95089cf3ed28a580eb9d369262eae 。该提交的代码内容与当前 8 台部署容器逐

#### 2026-10-09

- [PR #17835](https://github.com/vllm-project/vllm-ascend/pull/17835) 已合并
  - 中文：【特点】【型号】支持Kimi K3及其MTP草案型号的EPLB
  - 原文：[Feature][Model] Support EPLB for Kimi K3 and its MTP draft model
  - 说明：Upstream Kimi K3 declares MixtureOfExperts but does not 初始化 the 运行时 元数据 必填 by is mixture of experts() , so EPLB registration skips the model. This PR implements that contract for the Ascend language model and MoE MTP d
- [PR #18042](https://github.com/vllm-project/vllm-ascend/pull/18042) 进行中
  - 中文：【测试】【Kimi】新增 Kimi K3 MRV2 PR and 夜间 coverage
  - 原文：[Test][Kimi] Add Kimi K3 MRV2 PR and nightly coverage
  - 说明：Use the existing Kimi K3 MRV1 coverage as the basis for Model Runner V2. - 新增 Kimi K3 Model Runner V2 functional coverage under the standard tests/e2e/pull request/four card/model runner v2 framework. - Reuse the MRV1 reduced-model fixture

#### 2026-10-04

- [PR #17157](https://github.com/vllm-project/vllm-ascend/pull/17157) 已合并
  - 中文：【功能】【模型】支持 Kimi K3 PP+DSpark+SP on MRV2
  - 原文：[Feature][Model] Support Kimi K3 PP+DSpark+SP on MRV2
  - 说明：支持 Kimi K3 PP + SP + DSpark on Model Runner V2, keeping tensor layout changes in the model and existing PP utilities. - Model-local SP boundaries: gather hidden states, the AttnRes residual bank and auxiliary states before a PP send; s
- [PR #17564](https://github.com/vllm-project/vllm-ascend/pull/17564) 已合并
  - 中文：[功能] [Kimi-K3]用A5 AscendC熔断操作员替换Triton注意残留物
  - 原文：[Feature][Kimi-K3] Replace Triton attention residual with A5 AscendC fused operator
  - 说明：On main, Kimi K3 computes 注意力-residual mixing through the Python Triton apply attn res path, with separate residual additions, RMSNorm, and block-buffer writeback. For A5, this PR replaces that model path with one native AscendC opera
- [PR #17664](https://github.com/vllm-project/vllm-ascend/pull/17664) 已合并
  - 中文：[Refactor] [Ops]用fla_npu替换捆绑的KDA运算符
  - 原文：[Refactor][Ops] Replace bundled KDA operators with fla_npu
  - 说明：Directly import chunk kda fwd and recurrent kda from fla npu.ops.ascendc in the 共享 KDA adapters used by Kimi K3 and GLM5Next. Keep the existing normalization, gate/beta handling and V-first 缓存 semantics, adapting the recurrent keywor
- [PR #17677](https://github.com/vllm-project/vllm-ascend/pull/17677) 已合并
  - 中文：[性能] [运营]直接阅读步进Kimi门控规范输入
  - 原文：[Performance][Ops] Read strided Kimi gated norm inputs directly
  - 说明：【H】【H D】【H D】Kimi K3's mixed BFG projection packs each token as beta + raw gate + output gate . The output gate is a view into that packed row. The previous gated RMSNorm wrapper materialized it with g.contiguous() before launching layer no

#### 2026-09-30

- [PR #17567](https://github.com/vllm-project/vllm-ascend/pull/17567) 已合并
  - 中文：【性能】【型号】A5上融合Kimi K3潜RMSNorm和MXFP8量化
  - 原文：[Performance][Model] Fuse Kimi K3 latent RMSNorm and MXFP8 quantization on A5
  - 说明：Use the existing npu rms norm dynamic mx quant operator for Kimi K3's latent routed-output RMSNorm on A5 when the following up-projection uses W8A8 MXFP8. Pass the operator's (quantized, scale) output directly to the existing prequantized l
- [PR #17270](https://github.com/vllm-project/vllm-ascend/pull/17270) 已合并
  - 中文：[性能] [Kimi-K3]采用MM ReduceScatter的O型投影熔断器
  - 原文：[Performance][Kimi-K3] Fuse O-projection with MM ReduceScatter
  - 说明：Kimi K3 序列-parallel 注意力 computes each TP rank's BF16 O-projection and then separately ReduceScatters the full-token projection result. On eligible A5 pure-预填充 batches, this PR uses torch npu.npu quant mm 减少 scatter to co
- [PR #17587](https://github.com/vllm-project/vllm-ascend/pull/17587) 已合并
  - 中文：[BugFix] [MoE]在A5 MegaMoe中支持SiTU和MRV2
  - 原文：[BugFix][MoE] Support SiTU and MRV2 in A5 MegaMoe
  - 说明：A5 MegaMoe does not forward SiTU parameters and checks the residual width instead of the routed expert width for Kimi K3 latent MoE models. MRV2 also omits the MegaMoe selection fields from its platform context, sending MXFP 权重 to the

#### 2026-09-23

- [PR #17334](https://github.com/vllm-project/vllm-ascend/pull/17334) 进行中
  - 中文：【特色】【教育部】支持KIMI K3 CANN MegaMoE主机
  - 原文：[Feature][MoE] Support Kimi K3 CANN MegaMoE on main
  - 说明：What this PR does 启用 Kimi K3 CANN MegaMoE on current main and allow the existing mega moe max tokens 配置 to be zero. Preserve the original receive-capacity selection: P and PD-mixed nodes use the configured value capped at the

#### 2026-09-19

- [Issue #16914](https://github.com/vllm-project/vllm-ascend/issues/16914) 进行中
  - 中文：[Bug] Kimi K3上的MegaMoe （ A3 ， PD分解的4P4D ）产生乱码输出和矢量核心崩溃（ acl错误507035 ）
  - 原文：[Bug] MegaMoe on Kimi K3 (A3, PD-disaggregated 4P4D) produces garbled output and vector-core crash (acl error 507035)
  - 说明：【缺陷】MegaMoe on Kimi K3 (A3, PD-disaggregated 4P4D) produces garbled output and vector-core 崩溃 (acl error 507035) Summary When enabling MegaMoe ( 启用 融合 mc2: 2 + 启用 预填充 mc2: true ) for Kimi K3 W4A8 on Atlas 800I A3, every

#### 2026-09-17

- [PR #16757](https://github.com/vllm-project/vllm-ascend/pull/16757) 进行中
  - 中文：【v0.27.1rc】【功能】【Kimi K3】Implement two-phase Online Softmax back…
  - 原文：[v0.27.1rc][Feature][Kimi K3] Implement two-phase Online Softmax back…
  - 说明：This pull request implements a two-phase Online Softmax backend for the Kimi K3 注意力 Residual (AttnRes) mechanism. It precomputes effective queries and splits the AttnRes computation into Phase 1 (preparing FP32 Online Softmax statisti

#### 2026-09-08

- [PR #16064](https://github.com/vllm-project/vllm-ascend/pull/16064) 进行中
  - 中文：【v0.26.0rc】【功能】【Kimi K3】Implement two-phase Online Softmax backend for Kimi K3 AttenRes
  - 原文：[v0.26.0rc][Feature][Kimi K3] Implement two-phase Online Softmax backend for Kimi K3 AttenRes
  - 说明：This pull request implements a two-phase Online Softmax backend for the Kimi K3 注意力 Residual (AttnRes) mechanism. It precomputes effective queries and splits the AttnRes computation into Phase 1 (preparing FP32 Online Softmax statisti

#### 2026-08-26

- [PR #14999](https://github.com/vllm-project/vllm-ascend/pull/14999) 进行中
  - 中文：feat: 支持 Kimi-K3 DSpark Block5
  - 原文：feat: support Kimi-K3 DSpark Block5
  - 说明：This PR adds 支持 for the Kimi-K3-DSpark-Block5 draft model. - Read causal 注意力 settings from the 检查点 配置. - Validate that the trained DSpark block size matches num 投机 tokens. - Preserve compatibility with

### Kimi K2

#### 2026-10-08

- [PR #17825](https://github.com/vllm-project/vllm-ascend/pull/17825) 已合并
  - 中文：【修复】【模型】遵循 交错 RoPE in AscendApplyRotaryEmb
  - 原文：[BugFix][Model] Honor interleaved RoPE in AscendApplyRotaryEmb
  - 说明：Kimi K2.5's vision encoder requests ApplyRotaryEmb(is neox style=False, 启用 fp32 compute=True) , but the Ascend implementation used the default half-mode rotary 内核 and 拆分-half coefficient expansion. This pairs the wrong Q/K dimens

#### 2026-10-06

- [PR #17918](https://github.com/vllm-project/vllm-ascend/pull/17918) 进行中
  - 中文：[BugFix] [KV Cache]恢复MLA自动规划和FP8推测输出布局
  - 原文：[BugFix][KV Cache] Restore MLA auto planning and FP8 speculative output layout
  - 说明：修复 the Kimi-K2.6 W4A4C8 + Eagle3 MLA service with its original command unchanged: it does not specify --kv-缓存-dtype , so the configured default is auto ; TP4/DP2/EP, max-model-len 5000 and 显存-utilization 0.96 also stay unchanged. Th

#### 2026-09-30

- [PR #17815](https://github.com/vllm-project/vllm-ascend/pull/17815) 已合并
  - 中文：[性能] [Kimi-K2.5]为16K测试启用预填充并行配置
  - 原文：[Performance][Kimi-K2.5] Enable prefill parallel config for 16K test
  - 说明：启用 the two 预填充-side 运行时 options for the Kimi-K2.5 16K external-DP test 配置: - 启用 flashcomm1: true - 启用 共享专家 dp: true The options are 新增 only to the two prefiller templates in tests/e2e/cases/models/

#### 2026-09-29

- [PR #17168](https://github.com/vllm-project/vllm-ascend/pull/17168) 已合并
  - 中文：【持续集成】更新 配置 for 每周 cases
  - 原文：[CI] update configuration for weekly cases
  - 说明：更新 配置 for 每周 cases:Kimi-K2.5-W4A8-128k-1k-TPOT50.yaml Qwen3.5-397B-w4a8 128k-1k-90-50-PD.yaml Qwen3.5-397B-w4a8 3.5k-1.5k-0-50-PD.yaml no run the cases 每周 - vLLM main:

#### 2026-09-21

- [PR #17042](https://github.com/vllm-project/vllm-ascend/pull/17042) 已合并
  - 中文：[CI] [Misc]更新DeepSeek-R1-0528-W8A8 Kimi-K2.6-w4a8-A3.yaml的基线
  - 原文：[CI][Misc] Update baseline for DeepSeek-R1-0528-W8A8  Kimi-K2.6-w4a8-A3.yaml
  - 说明：This PR 更新 the 性能 baseline for the 前缀-缓存-deepseek-r1-0528-w8a8 测试用例 in the 夜间 single-node E2E tests. The baseline value is adjusted from 3.4877 to 3.0293 to reflect the latest 性能 metrics. Does this PR

## MiniMax

### MiniMax-M2.7

#### 2026-09-29

- [PR #17349](https://github.com/vllm-project/vllm-ascend/pull/17349) 已合并
  - 中文：【测试】【杂项】Move MiniMax-M2.7 夜间用例 to 每周 suite
  - 原文：[Test][Misc] Move MiniMax-M2.7 nightly case to weekly suite
  - 说明：This PR moves the MiniMax-M2.7 E2E 测试用例 from the 夜间 suite to the 每周 suite. - 移除 Minimax m2.7 w8a8 A3 entry from 夜间 配置 and delete its 夜间用例 file - Move the case to tests/e

### MiniMax-M2.5

#### 2026-09-22

- [Issue #17186](https://github.com/vllm-project/vllm-ascend/issues/17186) 进行中
  - 中文：【缺陷】: 使用0.26.0.rc1镜像部署MiniMax-M2.5，流式或非流式调用toolcall时，think尾标签丢失。
  - 原文：[Bug]: 使用0.26.0.rc1镜像部署MiniMax-M2.5，流式或非流式调用toolcall时，think尾标签丢失。

## Gemma

### Gemma4

#### 2026-10-13

- [PR #18565](https://github.com/vllm-project/vllm-ascend/pull/18565) 进行中
  - 中文：[文档] [模型]添加Gemma4量化部署指导
  - 原文：[Doc][Model] Add Gemma4 quantized deployment guidance
  - 说明：- documents the public Gemma4 31B dense and 26B-A4B MoE MXFP4 检查点 - adds TP4DP2 服务 examples for 950PR&950DT Products and documents the 必填 --量化 ascend option - uses ModelScope model IDs directly in the quantized

#### 2026-09-29

- [PR #17740](https://github.com/vllm-project/vllm-ascend/pull/17740) 进行中
  - 中文：【Revert】【功能】【Kernel】Revert " Extend split_qkv_rmsnorm_rope with value normalization for Gemma4" (#15332)
  - 原文：[Revert] Revert "[Feature][Kernel] Extend split_qkv_rmsnorm_rope with value normalization for Gemma4" (#15332)
  - 说明：Revert of PR 15332 (merged onto main ). Original PR: 15332 Original author: @dwoai22 合并 commit: 166dcd38c6a78cb874850e03138462f564b437ea --- Gemma4 runs its pre-注意力 chain (qkv 拆分, per-head q/k RMSNorm, RoPE, and a 权重-less pe

#### 2026-09-28

- [PR #15332](https://github.com/vllm-project/vllm-ascend/pull/15332) 已合并
  - 中文：[功能] [内核]使用Gemma4的值规范化扩展split_qkv_rmsnorm_rope
  - 原文：[Feature][Kernel] Extend split_qkv_rmsnorm_rope with value normalization for Gemma4
  - 说明：Gemma4 runs its pre-注意力 chain (qkv 拆分, per-head q/k RMSNorm, RoPE, and a 权重-less per-head v RMSNorm) as separate ops on Ascend. The existing 融合 拆分 qkv rmsnorm rope 内核 cannot cover it because it 拷贝 V straight out o

#### 2026-09-12

- [PR #16394](https://github.com/vllm-project/vllm-ascend/pull/16394) 进行中
  - 中文：【测试】新增 gemma4 mtp acceptance guard and 特性 docs
  - 原文：[Test] Add gemma4 mtp acceptance guard and feature docs
  - 说明：Summary Follow-up to 13045 (Gemma4 MTP, merged): - E2E acceptance guard ( tests/e2e/pull request/one card/spec 解码/test gemma4 mtp.py ): drafts from the assistant 检查点 (k=3) over fifteen distinct deterministic coding-completion pro

#### 2026-08-20

- [PR #14670](https://github.com/vllm-project/vllm-ascend/pull/14670) 进行中
  - 中文：【修复】【注意力】Keep Gemma4 512-head MTP 解码 in ACL graphs
  - 原文：[BugFix][Attention] Keep Gemma4 512-head MTP decode in ACL graphs
  - 说明：修复 ACL graph capture/replay for Gemma4's 512-dimensional global 注意力 heads with MTP on Ascend 910B. On the tested baseline, FULL 解码 ONLY fails during graph capture with error 561002 in the TND 注意力 path; ATB paged 注意力 c

## Step

### Step3

#### 2026-09-17

- [PR #16305](https://github.com/vllm-project/vllm-ascend/pull/16305) 已合并
  - 中文：[Ops] [Feature]在Ascend上为Step3.5/3 .7的DP = 1支持序列并行MoE
  - 原文：[Ops][Feature] Support sequence-parallel MoE at DP=1 for Step3.5/3.7 on Ascend
  - 说明：This PR enables 序列-parallel (SP) MoE 支持 at DP=1 for Step3.5/3.7 models on Ascend by patching the parallel 配置 and implementing the SP MoE data flow. Upstream use 序列 parallel moe requires dp 1, so SP is silently di

## 其他

### Llama

#### 2026-10-08

- [PR #17802](https://github.com/vllm-project/vllm-ascend/pull/17802) 已合并
  - 中文：[文档] [LoRA]文档服务和运行时LoRA更新
  - 原文：[Doc][LoRA] Document serving and runtime LoRA updates
  - 说明：The existing LoRA page only showed a short Llama-2 launch. This 更新 documents how to serve and call LoRA on vLLM-Ascend: 1. Supported hardware is Atlas 300I Duo, Atlas A2, and Atlas A3. The original MoE 支持 table stays: non-quantized

#### 2026-09-24

- [PR #17439](https://github.com/vllm-project/vllm-ascend/pull/17439) 进行中
  - 中文：[测试]上游测试：使用在线模型调试测试用例test_llama_nemotron_vl.py。
  - 原文：[Test]Upstream test: debug test case test_llama_nemotron_vl.py using the online model.
  - 说明：Upstream test: 调试 测试用例 test llama nemotron vl.py using the online model. NO - vLLM main:

## 平台与通用

### 平台与通用

#### 2026-10-14

- [PR #18633](https://github.com/vllm-project/vllm-ascend/pull/18633) 已合并
  - 中文：[Bugfix] [KVPP] [v0.30.0]在KVPP验证中支持MultiConnector
  - 原文：[Bugfix][KVPP][v0.30.0] Support MultiConnector in KVPP validation
  - 说明：KVPP rejects a top-level MultiConnector even when its children are supported MooncakeConnectorV2 and AscendStoreConnector configurations. Normalize a direct connector into a one-entry list, or read the configured children of a single-level
- [PR #18632](https://github.com/vllm-project/vllm-ascend/pull/18632) 已合并
  - 中文：[Bugfix] [KVPP]在KVPP验证中支持MultiConnector
  - 原文：[Bugfix][KVPP] Support MultiConnector in KVPP validation
  - 说明：KVPP rejects a top-level MultiConnector even when its children are supported MooncakeConnectorV2 and AscendStoreConnector configurations. Normalize a direct connector into a one-entry list, or read the configured children of a single-level
- [Issue #18679](https://github.com/vllm-project/vllm-ascend/issues/18679) 进行中
  - 中文：【缺陷】: ModelSlim MoE 权重-loader wrapper retains discarded layers through reload 元数据
  - 原文：[Bug]: ModelSlim MoE weight-loader wrapper retains discarded layers through reload metadata
- [PR #18674](https://github.com/vllm-project/vllm-ascend/pull/18674) 已合并
  - 中文：【Cherry-pick】【releases/v0.30.0】【修复】【Example】Pass int device_ids in offline_data_parallel.py to 遵循 ASCEND_RT_VISIBLE_DEVICES (from #18643)
  - 原文：[Cherry-pick][releases/v0.30.0][BugFix][Example] Pass int device_ids in offline_data_parallel.py to honor ASCEND_RT_VISIBLE_DEVICES (from #18643)
  - 说明：Cherry-pick of PR 18643 onto releases/v0.30.0 . Original PR: 18643 Original author: @kunpengW-code --- Fixes 18638 vLLM's EngineArgs. resolve device ids() interprets the two entry types differently: - str entries → physical device IDs (the
- [Issue #18677](https://github.com/vllm-project/vllm-ascend/issues/18677) 进行中
  - 中文：【缺陷】: Concurrent chunked 预填充 skips Mamba boundary alignment with kv_both, causing 前缀缓存 misses
  - 原文：[Bug]: Concurrent chunked prefill skips Mamba boundary alignment with kv_both, causing prefix cache misses
- [PR #18628](https://github.com/vllm-project/vllm-ascend/pull/18628) 已合并
  - 中文：[BugFix]在Engram主机注册之前请求大量页面
  - 原文：[BugFix] Request huge pages before Engram host registration
  - 说明：Problem When Engram CPU 卸载 uses a large POSIX 共享-显存 scales mapping, aclrtHostRegisterV2 can fail before a 16-device TP1/DP16/EP service starts: The mapping is about 12.29 GB. The failure reproduced with the default shmem THP po
- [PR #18637](https://github.com/vllm-project/vllm-ascend/pull/18637) 已合并
  - 中文：[BugFix]在Engram主机注册之前请求大量页面(v 0.30)
  - 原文：[BugFix] Request huge pages before Engram host registration (v0.30)
  - 说明：Problem Engram CPU 卸载 can fail while registering a large POSIX 共享-显存 scales mapping: The failure is avoided when the mapping is backed by shmem transparent huge pages. Change Request MADV HUGEPAGE for each SharedUvaBuffer mappi
- [PR #18643](https://github.com/vllm-project/vllm-ascend/pull/18643) 已合并
  - 中文：【修复】【Example】Pass int device_ids in offline_data_parallel.py to 遵循 ASCEND_RT_VISIBLE_DEVICES
  - 原文：[BugFix][Example] Pass int device_ids in offline_data_parallel.py to honor ASCEND_RT_VISIBLE_DEVICES
  - 说明：Fixes 18638 vLLM's EngineArgs. resolve device ids() interprets the two entry types differently: - str entries → physical device IDs (the path intended for CUDA UUID strings; the NPU/base device control id to physical device id() is just int
- [PR #18123](https://github.com/vllm-project/vllm-ascend/pull/18123) 已合并
  - 中文：【修复】【持续集成】cross-runner csrc L1 缓存 transport
  - 原文：[BugFix][CI] Fix cross-runner csrc L1 cache transport
  - 说明：修复 cross-runner L1 snapshot reuse by giving every producer/consumer the same workspace-relative transport path: csrc/build 缓存 . The 缓存 action's storage version includes the literal path input , in addition to the logical key. Previou
- [Issue #18659](https://github.com/vllm-project/vllm-ascend/issues/18659) 进行中
  - 中文：[Bug]间歇性语义折叠输出（混合脚本+ U + FFFD ） ，在Ascend 910C上使用DSpark推测解码
  - 原文：[Bug] Intermittent semantically-collapsed output (mixed scripts + U+FFFD) with DSpark speculative decoding on Ascend 910C
- [Issue #17923](https://github.com/vllm-project/vllm-ascend/issues/17923) 已关闭
  - 中文：[Bug] ： KV池查找服务器线程在任何处理程序异常时静默死亡，无限期挂起调度程序
  - 原文：[Bug]: KV-pool lookup server thread dies silently on any handler exception, hanging the scheduler indefinitely
- [PR #18017](https://github.com/vllm-project/vllm-ascend/pull/18017) 已合并
  - 中文：[BugFix] [KV Pool]防止计划程序挂起查找RPC失败
  - 原文：[BugFix][KV Pool] Prevent scheduler hang on lookup RPC failure
  - 说明：What does this PR do / why do we need it? Fixes 17923 修复 a failure mode in the AscendStore KV-pool lookup RPC path where an exception in LookupKeyServer can terminate the request thread without sending a REP response. The 调度器-side Lo
- [PR #18596](https://github.com/vllm-project/vllm-ascend/pull/18596) 已合并
  - 中文：[性能] [运营]跳过不可见的KPool页面表加载
  - 原文：[Performance][Ops] Skip invisible KPool page-table loads
  - 说明：Main-branch counterpart of 18576, carrying the same two-file minimal change. In the int32 paged-缓存 scoring path, the final tile may contain pools that are within configured capacity but beyond the query's actual 可见 前缀. Key loads
- [PR #18576](https://github.com/vllm-project/vllm-ascend/pull/18576) 已合并
  - 中文：[releases/v0.30.0] [Performance] [Ops]跳过不可见的KPool页面表加载
  - 原文：[releases/v0.30.0][Performance][Ops] Skip invisible KPool page-table loads
  - 说明：In the int32 paged-缓存 scoring path, the final tile may contain pools that are within configured capacity but beyond the query's actual 可见 前缀. Key loads already use the visibility mask, while block-table loads previously used onl
- [Issue #18345](https://github.com/vllm-project/vllm-ascend/issues/18345) 已关闭
  - 中文：【Bug】： A2/A3环境下，使用triton-ascend的extract_slice API进行数据拆分，且起始地址未对齐32字节时，会出现数据获取错误。
  - 原文：[Bug]:  In the A2/A3 environment, when the extract_slice API of triton-ascend is used to split data and the start address is not 32-byte aligned, data obtaining errors occur.
- [PR #18321](https://github.com/vllm-project/vllm-ascend/pull/18321) 已合并
  - 中文：【修复】【v0.30.0】支持 A5 SFA C8 解码 context parallelism
  - 原文：[Bugfix][v0.30.0] Support A5 SFA C8 decode context parallelism
  - 说明：Backport of 18319 to releases/v0.30.0 . A5 SFA C8 解码 context parallelism needs quantized KV block transport and per-shard softmax statistics. The previous capability guard rejects this 配置; the CANN C8 path does not provide th

#### 2026-10-13

- [PR #18548](https://github.com/vllm-project/vllm-ascend/pull/18548) 已合并
  - 中文：[BugFix] [Model] [Cherry-pick] [releases/v0.30.0]补丁MiniMax-M3在vLLM的真实模块上融合了全缩减规范，而不是将其隐藏（来自# 18543 ）
  - 原文：[BugFix][Model][Cherry-pick][releases/v0.30.0] Patch MiniMax-M3 fused all-reduce norm on vLLM's real module instead of shadowing it (from #18543)
  - 说明：Cherry-pick of 18543 to releases/v0.30.0 for the RP3 delivery. Summary On Ascend A3 with the B097 image, MiniMax-M3 + mooncake KV 池化 failed to start with: Root cause and full analysis in 18543: install 融合 allreduce norm fallback() i
- [PR #18543](https://github.com/vllm-project/vllm-ascend/pull/18543) 已合并
  - 中文：[BugFix] [Model]补丁MiniMax-M3在vLLM的真实模块上融合了全缩减范数，而不是遮蔽它
  - 原文：[BugFix][Model] Patch MiniMax-M3 fused all-reduce norm on vLLM's real module instead of shadowing it
  - 说明：Summary On Ascend A3 with the B097 image, MiniMax-M3 + mooncake KV 池化 failed to start with: Root cause: install 融合 allreduce norm fallback() created a fake ModuleType named vllm.model executor.layers.融合 allreduce gemma rms norm a
- [PR #18319](https://github.com/vllm-project/vllm-ascend/pull/18319) 已合并
  - 中文：【修复】支持 A5 SFA C8 解码 context parallelism
  - 原文：[Bugfix] Support A5 SFA C8 decode context parallelism
  - 说明：A5 SFA C8 解码 context parallelism needs quantized KV block transport and per-shard softmax statistics. The previous capability guard rejects this 配置; the CANN C8 path does not provide the LSE statistics needed to 合并 DCP sha
- [PR #18521](https://github.com/vllm-project/vllm-ascend/pull/18521) 已合并
  - 中文：[BugFix] [EPLB]修复无头工人的动态EPLB启动
  - 原文：[BugFix][EPLB] Fix dynamic EPLB startup in headless workers
  - 说明：Headless multi-node workers can fail with AssertionError: daemonic processes are not allowed to have children when dynamic EPLB starts its Manager() . serve.py can import MultiprocExecutor before the EPLB platform patch, retaining the origi
- [PR #18564](https://github.com/vllm-project/vllm-ascend/pull/18564) 已合并
  - 中文：[BugFix] [v0.30.0]修复无头工人的动态EPLB启动
  - 原文：[BugFix][v0.30.0] Fix dynamic EPLB startup in headless workers
  - 说明：Backport of 18521 to releases/v0.30.0 . Headless workers can retain the upstream MultiprocExecutor imported before the dynamic EPLB patch, then fail when EPLB starts its Manager() inside a daemon Worker. 更新 the cached CLI reference from
- [PR #18542](https://github.com/vllm-project/vllm-ascend/pull/18542) 已合并
  - 中文：[BugFix] [310P]修复W8A8SC ND激活和分片状态保存
  - 原文：[BugFix][310P] Fix W8A8SC ND activations and sharded-state save
  - 说明：【B, S, K】- npu matmul compress dequant only accepts 2D activations. Vision towers pass into W8A8SC linear, so flatten before the 内核 and 恢复 the leading dimensions on the output. - examples/save sharded state 310.py built the engine
- [PR #18578](https://github.com/vllm-project/vllm-ascend/pull/18578) 已合并
  - 中文：【修复】【持续集成】更新 image dependencies
  - 原文：[BugFix][CI] Update image dependencies
  - 说明：Release image builds currently use the older CANN base image and skip snapshot dependency installation. This PR 更新 the Dockerfile defaults and workflow arguments to use the following dependency snapshots for v0.30.0rc2: Dependency Vers
- [PR #18487](https://github.com/vllm-project/vllm-ascend/pull/18487) 已合并
  - 中文：[BugFix] [SpecDecode]在v0.30.0上禁用急切草稿的编译
  - 原文：[BugFix][SpecDecode] Disable compilation for eager drafts on v0.30.0
  - 说明：Backport the eager draft compilation 修复 from 18462 to releases/v0.30.0 . MRV2 disables draft graph capture when 投机 配置.enforce eager is true, but the draft still inherits the target's compilation mode. This can trigger npugraph
- [PR #18580](https://github.com/vllm-project/vllm-ascend/pull/18580) 进行中
  - 中文：[功能] [KVTransfer]跨非对称DCP对齐分层GVA布局
  - 原文：[Feature][KVTransfer] Align layerwise GVA layout across asymmetric DCP
  - 说明：What does this PR do / why do we need it? The layerwise KV pool derives the 共享 GVA region size, the per-shard stride and the block/hash granularity from the worker's local 解码 上下文并行 size . In PD disaggregation the producer
- [PR #18563](https://github.com/vllm-project/vllm-ascend/pull/18563) 已合并
  - 中文：[v0.30.0] [DOC]翻译文档文件2026-10-13
  - 原文：[v0.30.0][Doc] Translated Doc files 2026-10-13
  - 说明：Auto-Translation Summary Translated 20 file(s): - <code /home/runner/ work/vllm-ascend/vllm-ascend/docs/source/locale/zh CN/LC MESSAGES/developer guide/Design Documents/non contiguous KV 缓存.po</code - <code /home/runner/ work/vllm-ascend
- [PR #13894](https://github.com/vllm-project/vllm-ascend/pull/13894) 已合并
  - 中文：【特点】【EC连接器】Ascend支持编码器缓存CPU卸载
  - 原文：[Feature][EC Connector] Support encoder cache CPU offloading on Ascend
  - 说明：Depends on vllm-project/vllm 54033. This PR adds Ascend 支持 for the upstream ECCPUConnector , enabling multimodal encoder-缓存 offloading to CPU 共享 显存. Architecture The implementation keeps the common ECCPU design in upstream v
- [Issue #18509](https://github.com/vllm-project/vllm-ascend/issues/18509) 已关闭
  - 中文：[Bug]:  【kv-pool】lookup 只查 dcp0 导致假命中，但是load是查询所有dcp的，导致load失败，大量500（不开启重计算）、或进入失败重计算（特性耦合问题，重计算也可能有精度问题，现网我们是修改重计算不存store防止精度问题）
- [PR #18258](https://github.com/vllm-project/vllm-ascend/pull/18258) 已合并
  - 中文：[BugFix] [Ops]在A5自定义内核版本中包含SparseFlashAttention
  - 原文：[BugFix][Ops] Include SparseFlashAttention in A5 custom kernel builds
  - 说明：新增 稀疏 flash 注意力 to the Ascend950 custom ACLNN operator build list. A5 builds currently omit this operator, so the DCP LSE fixes from 16656 can be present in source while 运行时 still executes the CANN built-in 内核. On the tes
- [Issue #13474](https://github.com/vllm-project/vllm-ascend/issues/13474) 已关闭
  - 中文：[Bug] [P/D] ： AscendStore + MooncakeLayerwise MultiConnector ：选择AscendStore加载时double-write和Prefill IndexError
  - 原文：[Bug][P/D]: AscendStore+MooncakeLayerwise MultiConnector: double-write and Prefill IndexError when AscendStore is selected to load  
- [PR #18547](https://github.com/vllm-project/vllm-ascend/pull/18547) 进行中
  - 中文：[性能] [Communicator]重复复制MLA KV读取与解码前导扇出
  - 原文：[Performance][Communicator] Deduplicate replicated MLA KV reads with decode leader fanout
  - 说明：…r fanout 新增 opt-in leader fanout to MooncakeHybridConnector with 调度器-generated transfer attempts, block remapping, reader pinning, fallback counters, and lock-wait diagnostics. Include retry and lifecycle 回退 tests plus deplo
- [PR #18510](https://github.com/vllm-project/vllm-ascend/pull/18510) 已合并
  - 中文：[Cherry-pick] [releases/v0.30.0] [CI] [Misc]在图模式下夜间运行Qwen3-32B QuaRot Eagle3并更新基线（从# 18320开始）
  - 原文：[Cherry-pick][releases/v0.30.0][CI][Misc] Run Qwen3-32B QuaRot Eagle3 nightly in graph mode and update baseline (from #18320)
  - 说明：Cherry-pick of PR 18320 onto releases/v0.30.0 . Original PR: 18320 Original author: @kk-ss1999 --- 切换 the Qwen3-32B-QuaRot Eagle3 夜间 性能 case to 图模式 and calibrate its output-token 吞吐 baseline from measured Ni
- [PR #16731](https://github.com/vllm-project/vllm-ascend/pull/16731) 已合并
  - 中文：[Refactor] [Ops]用CANN本机运算符替换自定义量化的Lightning Indexer
  - 原文：[Refactor][Ops] Replace custom quantized Lightning Indexer with CANN native operator
  - 说明：Replace the plugin-owned quantized Lightning 索引器 (QLI) with the CANN operator exposed by torch npu.npu quant lightning 索引器 , removing the duplicate 内核 implementation and its build and Torch registration paths. - 切换 the base
- [Issue #17547](https://github.com/vllm-project/vllm-ascend/issues/17547) 已关闭
  - 中文：[Bug] [Kernel] chunk_fwd_o ：分组头GDN （ Hg ！ = H)大包装的代币数量
  - 原文：[Bug][Kernel] chunk_fwd_o: non-finite outputs and fatal AICORE exceptions for grouped-head GDN (Hg != H) at large packed token counts
  - 说明：Summary torch.ops. C ascend.chunk fwd o and the triton fallback vllm ascend/ops/triton/fla/chunk o.py::chunk fwd o both produce incorrect (non-finite) outputs for the Qwen3.5 GDN production shape ( Hg=16, H=48, K=V=128, i.e. Hg != H ) once
- [Issue #18518](https://github.com/vllm-project/vllm-ascend/issues/18518) 进行中
  - 中文：【缺陷】: PCP + MTP 场景下 预填充 节点 IndexCheck 越界崩溃 (num_actual_tokens_pcp_padded > max_num_batched_tokens)
  - 原文：[Bug]: PCP + MTP 场景下 Prefill 节点 IndexCheck 越界崩溃 (num_actual_tokens_pcp_padded > max_num_batched_tokens)
- [Issue #18514](https://github.com/vllm-project/vllm-ascend/issues/18514) 进行中
  - 中文：[错误] ：混合MTP草稿KV缓存组在Ascend上被错误识别
  - 原文：[Bug]: Hybrid MTP draft KV-cache groups are misidentified on Ascend

#### 2026-10-12

- [PR #18397](https://github.com/vllm-project/vllm-ascend/pull/18397) 已合并
  - 中文：[BugFix] [MoE]保留v0.30.0上的MiniMax-M3预量化共享Down输入
  - 原文：[BugFix][MoE] Preserve MiniMax-M3 prequantized shared Down input on v0.30.0
  - 说明：Backport 18396 to releases/v0.30.0 . MiniMax-M3's A5 W8A8-MXFP8 SwiGLU activation may return an already-quantized (tensor, scale) pair. The 共享-expert multistream wrapper currently passes this pair to scheme-owned prepare input for overl
- [PR #18436](https://github.com/vllm-project/vllm-ascend/pull/18436) 已合并
  - 中文：【功能】【v0.30.0】Eplb supports w8a8_mxpf8 on A5 0.30.0
  - 原文：[Feature][v0.30.0] Eplb supports w8a8_mxpf8 on A5 0.30.0
  - 说明：Cherry-pick of PR onto releases/v0.30.0. Original PR: Original author: @Spicy-Stick This PR refactors the W8A8 MXFP8 量化 scheme to process and store MoE 权重 and scales as unified per-expert lists (e.g., w13 权重 list ) instea
- [PR #18458](https://github.com/vllm-project/vllm-ascend/pull/18458) 已合并
  - 中文：[BugFix] [EPLB] Backport NZ Gloo接收暂存到v0.30.0
  - 原文：[BugFix][EPLB] Backport NZ Gloo receive staging to v0.30.0
  - 说明：Backport 18425 to releases/v0.30.0 , including the final src tensor naming change. Ascend950 rejects a direct copy from the Gloo communicator's pinned CPU staging 显存 into a FRACTAL NZ receive buffer. For NZ destinations, first transfer
- [Issue #16460](https://github.com/vllm-project/vllm-ascend/issues/16460) 已关闭
  - 中文：[Bug] ： AscendStore在中止等待远程KV的请求后过滤掉接收完成
  - 原文：[Bug]: AscendStore filters out receive completion after aborting a request waiting for remote KVs
- [PR #16461](https://github.com/vllm-project/vllm-ascend/pull/16461) 已合并
  - 中文：[BugFix] [KVTransfer]保持AscendStore接收注册，直到完成
  - 原文：[BugFix][KVTransfer] Keep AscendStore receive registration until completion
  - 说明：Fixes 16460. When a request is aborted while waiting for an asynchronous AscendStore load, the core 调度器 retains its KV blocks until receive completion. AscendStore currently removes the request from 加载 req ids when it sees finish
- [PR #18429](https://github.com/vllm-project/vllm-ascend/pull/18429) 已合并
  - 中文：[BugFix] [Model] Backport DeepSeek buffer mutation guard已修复release/v0.30.0
  - 原文：[BugFix][Model] Backport DeepSeek buffer mutation guard fix to releases/v0.30.0
  - 说明：Backport 18257 (upstream commit 527a1bb2aa737875018ef3a469eca84bc16d8518) to releases/v0.30.0 . The original two-file patch applies without code changes. Replace dict.更新 in the patched DeepSeek forward with dictionary unpacking, avoidin
- [Issue #18466](https://github.com/vllm-project/vllm-ascend/issues/18466) 进行中
  - 中文：[RFC] ：在vLLM Ascend中调整V2推测解码的原则
  - 原文：[RFC]: Principles for adapting V2 speculative decoding in vLLM Ascend
  - 说明：Motivation. The V2 EAGLE3 adaptation started with vllm-ascend 7885. It aligned the Ascend implementation with vLLM's V2 interfaces and 启用 eager-mode EAGLE3 drafting. Follow-up work addressed multi-step 精度 and graph-mode capture a
- [PR #18393](https://github.com/vllm-project/vllm-ascend/pull/18393) 已合并
  - 中文：[BugFix] [Build]修复v0.30.0上的自定义AICPU聚合
  - 原文：[BugFix][Build] Fix custom AICPU aggregation on v0.30.0
  - 说明：Apply the same one-line AICPU aggregation 修复 as 18391 to releases/v0.30.0 : generate the custom AICPU library and manifest when AICPU CUST OBJ TARGETS is populated, while retaining the legacy 启用 AICPU path. The underlying failure is Ni
- [PR #18415](https://github.com/vllm-project/vllm-ascend/pull/18415) 已合并
  - 中文：[BugFix] [v0.30.0] [EPLB]修复HIXL注册范围和资源清理
  - 原文：[BugFix][v0.30.0][EPLB] Fix HIXL registration ranges and resource cleanup
  - 说明：Cherry-pick of to releases/v0.30.0 . HIXL EPLB currently registers whole allocator snapshot segments. Expandable segments can grow at the same address or release unused physical pages while their registrations remain active. Main-model and
- [PR #18301](https://github.com/vllm-project/vllm-ascend/pull/18301) 已合并
  - 中文：[Cherry-pick] [releases/v0.30.0] [Refactor]删除StoreKVBlock优化和c8_enable_reshape_optim开关
  - 原文：[Cherry-pick][releases/v0.30.0][Refactor] Remove StoreKVBlock optimization and c8_enable_reshape_optim switch
  - 说明：Backport 18128 to releases/v0.30.0 . This removes the unused StoreKVBlock grouped 缓存-write 优化 and the c8 启用 reshape optim 切换 end to end: - 移除 the 配置 切换 and c8 reshape optim 启用 state - use scatter 缓存
- [PR #18217](https://github.com/vllm-project/vllm-ascend/pull/18217) 已合并
  - 中文：[BugFix] [EPLB]修复HIXL注册范围和资源清理
  - 原文：[BugFix][EPLB] Fix HIXL registration ranges and resource cleanup
  - 说明：HIXL EPLB currently registers whole allocator snapshot segments. Expandable segments can grow at the same address or release unused physical pages while their registrations remain active. Main-model and MoE-draft communicators can also regi
- [PR #18134](https://github.com/vllm-project/vllm-ascend/pull/18134) 已合并
  - 中文：[v0.30.0] [BugFix] [Distributed]修复SHM广播缓冲区竞争并添加故障诊断
  - 原文：[v0.30.0][BugFix][Distributed] Fix shm broadcast buffer race and add failure diagnostics
  - 说明：This PR targets releases/v0.30.0 and is based on release commit 6d4339aa17b54b7d615f642e62630b0447760a61 . It contains the two message-queue fixes plus import-check and mypy compatibility fixes, without unrelated main-branch changes. Messag
- [PR #18163](https://github.com/vllm-project/vllm-ascend/pull/18163) 已合并
  - 中文：[BugFix]删除QSFA平铺中的剩余调试日志（ v 0.30 backport ）
  - 原文：[BugFix] Remove leftover debug log in QSFA tiling (v0.30 backport)
  - 说明：Backport of 18110 to the v0.30.0 release line. Removes a leftover 调试 OP LOGE in kv quant 稀疏 flash 注意力 vllm tiling.cpp. - vLLM main:
- [PR #18309](https://github.com/vllm-project/vllm-ascend/pull/18309) 已合并
  - 中文：[BugFix] [Worker]保留P/D解码节点(v0.30.0)上的图形资格
  - 原文：[BugFix][Worker] Preserve graph eligibility on P/D decode nodes (v0.30.0)
  - 说明：Apply the existing prompt-tail batch reclassification to pure P/D 解码 nodes ( kv consumer without kv producer ), independently of whether the recompute 调度器 is 启用. After KV transfer, a newly admitted 解码 request can still be
- [PR #18391](https://github.com/vllm-project/vllm-ascend/pull/18391) 已合并
  - 中文：[BugFix] [Build]聚合已注册的自定义AICPU内核
  - 原文：[BugFix][Build] Aggregate registered custom AICPU kernels
  - 说明：Generate the custom AICPU library and registration manifest whenever AICPU CUST OBJ TARGETS is populated, even if 启用 AICPU was not set. This is a one-line change to the aggregation condition. The failure is recorded in 夜间-A5 run 38
- [PR #18409](https://github.com/vllm-project/vllm-ascend/pull/18409) 已合并
  - 中文：[Cherry-pick] [releases/v0.30.0] [Doc] [Feature]更新细粒度TP指南，以符合当前的支持和部署前提条件
  - 原文：[Cherry-pick][releases/v0.30.0][Doc][Feature] Update the Fine-grained TP guide to align with current support and deployment preconditions
  - 说明：Backports the Fine-grained TP guide refresh from 17968 to releases/v0.30.0 (the release line the guide's behavior description matches): MoE-only scope with 配置-based qualification, the two exchange families, deployment preconditions for
- [PR #18414](https://github.com/vllm-project/vllm-ascend/pull/18414) 已合并
  - 中文：[BugFix] [Doc]删除jemalloc的用法
  - 原文：[BugFix][Doc] Delete the usage of jemalloc
  - 说明：- Fixes 18377 - Delete the usage of jemalloc from the Ascend plugin: - 移除 the LD PRELOAD=libjemalloc.so.2 injection from all Dockerfiles ( Dockerfile , Dockerfile.310p , Dockerfile.310p.openEuler , Dockerfile.a3 , Dockerfile.a3.openEule
- [Issue #18377](https://github.com/vllm-project/vllm-ascend/issues/18377) 已关闭
  - 中文：[Bug] ：预加载jemalloc可能会导致CANN的'libnnopbase.so`中的'OpExecCache:: Run`内调用的函数指针被破坏。
  - 原文：[Bug]: Preloading jemalloc may cause the function pointer called inside `OpExecCache::Run` in CANN's `libnnopbase.so` to be clobbered.
- [PR #18392](https://github.com/vllm-project/vllm-ascend/pull/18392) 已合并
  - 中文：[BugFix] [Doc]删除jemalloc的用法
  - 原文：[BugFix][Doc] Delete the usage of jemalloc
  - 说明：- Fixes 18377 - Delete the usage of jemalloc from the Ascend plugin: - 移除 the LD PRELOAD=libjemalloc.so.2 injection from all Dockerfiles ( Dockerfile , Dockerfile.310p , Dockerfile.310p.openEuler , Dockerfile.a3 , Dockerfile.a3.openEule
- [PR #18398](https://github.com/vllm-project/vllm-ascend/pull/18398) 已合并
  - 中文：[BugFix] [v0.30.0] [PCP]在缓存地址计算之前钳制无效插槽
  - 原文：[BugFix][v0.30.0][PCP] Clamp invalid slots before cache address computation
  - 说明：Backport of 18352 to releases/v0.30.0 . Clean cherry-pick of both commits: vllm ascend/ops/triton/pcp KV 缓存.py and tests/ut/ops/test pcp KV 缓存.py are byte-identical between main and releases/v0.30.0 at the parent commit of the origina

#### 2026-10-11

- [PR #18257](https://github.com/vllm-project/vllm-ascend/pull/18257) 已合并
  - 中文：【修复】【模型】避免 false buffer mutation guard in DeepSeek forward
  - 原文：[BugFix][Model] Avoid false buffer mutation guard in DeepSeek forward
  - 说明：修复 a false positive in vLLM's CUDA/NPU graph buffer-mutation guard when compiling the patched DeepSeek V2 forward. This prevents affected DeepSeek/GLM-family services from failing during the startup profiling pass with 图模式 启用,
- [PR #18270](https://github.com/vllm-project/vllm-ascend/pull/18270) 已合并
  - 中文：【修复】Profile MRV2 with PCP-local token budget
  - 原文：[Bugfix] Profile MRV2 with PCP-local token budget
  - 说明：MRV2 initial profiling bypasses PCP batch partitioning. With EP and 融合 MC2, the global token budget can exceed the 通信 buffer during startup. In profile run, compute ceil(max num tokens / PCP), use this value for the MC2 reserv
- [PR #18307](https://github.com/vllm-project/vllm-ascend/pull/18307) 已合并
  - 中文：【Revert】【修复】【Worker】Revert " Zero static KV buffers after cudagraph capture" (#17659)
  - 原文：[Revert] Revert "[BugFix][Worker] Zero static KV buffers after cudagraph capture" (#17659)
  - 说明：Revert of PR 17659 (merged onto main ). Original PR: 17659 Original author: @Toneymiller 合并 commit: 672a08eadc41407353818652c7985fb761e9aa0a --- Zero every KV-缓存 / recurrent-state tensor in static forward context right after cudagraph
- [PR #18305](https://github.com/vllm-project/vllm-ascend/pull/18305) 已合并
  - 中文：【Revert】【修复】【Worker】Revert " Zero static KV buffers after cudagraph capture (v0.30.0 backport)" (#18263)
  - 原文：[Revert] Revert "[BugFix][Worker] Zero static KV buffers after cudagraph capture (v0.30.0 backport)" (#18263)
  - 说明：Revert of PR 18263 (merged onto releases/v0.30.0 ). Original PR: 18263 Original author: @Toneymiller 合并 commit: 334d4d70505836f1290404a311cfe2c9529ed06d --- Backport of 17659 to releases/v0.30.0. GLM-5.3-Flash (KDA+SFA hybrid, fp8 C8 KV
- [PR #18112](https://github.com/vllm-project/vllm-ascend/pull/18112) 已合并
  - 中文：【功能】【PCP】支持 修复-K 投机 解码 request sharding
  - 原文：[Feature][PCP] Support fixed-K speculative decode request sharding
  - 说明：启用 PCP 解码 request sharding with 修复-K 投机解码. The target uses PCP sharding while the draft continues to run a replicated global batch. - Expose consistent global token extents, request boundaries and hidden states at
- [PR #18283](https://github.com/vllm-project/vllm-ascend/pull/18283) 已合并
  - 中文：【修复】【v0.30.0】Derive GLM-5.3-Flash SMLA plans from actual 稀疏 indices
  - 原文：[BugFix] [v0.30.0] Derive GLM-5.3-Flash SMLA plans from actual sparse indices
  - 说明：Backport of 18241 to releases/v0.30.0 . GLM-5.3-Flash can reuse 稀疏 selections while positions advance. In the A5 target path, this can leave a predicted ori topk length of 2049 for only 2048 valid indices, even when the query shape is u
- [PR #18241](https://github.com/vllm-project/vllm-ascend/pull/18241) 已合并
  - 中文：【修复】Derive GLM-5.3-Flash SMLA plans from actual 稀疏 indices
  - 原文：[BugFix] Derive GLM-5.3-Flash SMLA plans from actual sparse indices
  - 说明：GLM-5.3-Flash can reuse 稀疏 selections while token positions advance. Position-derived lengths can then claim 2049 valid entries for a row that contains only 2048, or truncate a reused pool tail. The SMLA plan can also use the 索引器's
- [PR #17255](https://github.com/vllm-project/vllm-ascend/pull/17255) 已合并
  - 中文：【功能】【MoE】改进 共享专家 multistream 重叠 for quantized paths
  - 原文：[Feature][MoE] Improve shared expert multistream overlap for quantized paths
  - 说明：Follow-up to 15352. Refs 15353. The 共享-expert registered-linear-wrapper path previously submitted all wrapper work only after the routed path had been enqueued. For 运行时-quantized methods this delayed Vector/AIV input preparation, an
- [PR #17817](https://github.com/vllm-project/vllm-ascend/pull/17817) 已合并
  - 中文：【功能】【KVPP】支持 投机解码 via 缓存 capabilities
  - 原文：[Feature][KVPP] Support speculative decoding via cache capabilities
  - 说明：KVPP restricts speculation by method name, although its 缓存 ownership depends on whether the proposer allocates independent draft KV caches. 移除 the KVPP method whitelist and use the existing uses draft KV 缓存() capability for draft
- [PR #18272](https://github.com/vllm-project/vllm-ascend/pull/18272) 已合并
  - 中文：【修复】【模型】Point users at the recipe 修复 when oproj capacity is exceeded
  - 原文：[BugFix][Model] Point users at the recipe fix when oproj capacity is exceeded
  - 说明：Companion to 18126 (against main ), cherry-picked to the releases/v0.30.0 branch where users actually run this code. Improves the ValueError raised in dsa v1.py:: forward o proj when the fine-grained oproj TP static exchange capacity cannot
- [PR #18263](https://github.com/vllm-project/vllm-ascend/pull/18263) 已合并
  - 中文：【修复】【Worker】Zero static KV buffers after cudagraph capture (v0.30.0 backport)
  - 原文：[BugFix][Worker] Zero static KV buffers after cudagraph capture (v0.30.0 backport)
  - 说明：Backport of 17659 to releases/v0.30.0. GLM-5.3-Flash (KDA+SFA hybrid, fp8 C8 KV 缓存) collapses into emitting '!' forever on A5 with FULL 解码 ONLY capture. During capture the dummy forward bypasses the block allocator: SFA writes carry
- [PR #17659](https://github.com/vllm-project/vllm-ascend/pull/17659) 已合并
  - 中文：【修复】【Worker】Zero static KV buffers after cudagraph capture
  - 原文：[BugFix][Worker] Zero static KV buffers after cudagraph capture
  - 说明：Zero every KV-缓存 / recurrent-state tensor in static forward context right after cudagraph capture (v1 NPU model runner). Root cause (pinned down): on GLM-5.3-Flash the KDA (mamba) conv/recurrent state caches share backing storage with th

#### 2026-10-10

- [PR #18195](https://github.com/vllm-project/vllm-ascend/pull/18195) 已合并
  - 中文：【releases/v0.30.0】【注意力】【修复】Handle empty MLA PCP 预填充 ranks
  - 原文：[releases/v0.30.0][Attention][BugFix] Handle empty MLA PCP prefill ranks
  - 说明：Backport 17972 to releases/v0.30.0 . This author-submitted PR replaces the bot-created backport 18189 with the same code patch. PCP can assign zero real 预填充 tokens to a rank while retaining padded KV inputs for collective processing. ML
- [PR #18147](https://github.com/vllm-project/vllm-ascend/pull/18147) 已合并
  - 中文：【功能】【P/D】【v0.30.0】支持 Mooncake V2 KV receive failure handling
  - 原文：[Feature][P/D][v0.30.0] Support Mooncake V2 KV receive failure handling
  - 说明：Backport of 18146 to releases/v0.30.0 (cherry-picked without conflicts). 支持 request-level KV receive failure reporting in MooncakeConnectorV2 through vLLM's KVConnectorTransferResults , including hybrid caches with multiple KV groups.
- [PR #18146](https://github.com/vllm-project/vllm-ascend/pull/18146) 已合并
  - 中文：【功能】【P/D】支持 Mooncake V2 KV receive failure handling
  - 原文：[Feature][P/D] Support Mooncake V2 KV receive failure handling
  - 说明：支持 request-level KV receive failure reporting in MooncakeConnectorV2 through vLLM's KVConnectorTransferResults , including hybrid caches with multiple KV groups. Drain receive completion and failure together, attribute transfer errors
- [PR #18141](https://github.com/vllm-project/vllm-ascend/pull/18141) 已合并
  - 中文：【修复】【P/D】【v0.30.0】Handle hybrid 缓存 views in preempt 卸载
  - 原文：[BugFix][P/D][v0.30.0] Handle hybrid cache views in preempt offload
  - 说明：Backport of 18140 to releases/v0.30.0 (cherry-picked without conflicts). 修复 preempt-卸载 registration for hybrid KV caches: retain the largest same-pointer 注意力 view per logical block (including block-size scaling), deduplicate ide
- [PR #18140](https://github.com/vllm-project/vllm-ascend/pull/18140) 已合并
  - 中文：【修复】【P/D】Handle hybrid 缓存 views in preempt 卸载
  - 原文：[BugFix][P/D] Handle hybrid cache views in preempt offload
  - 说明：修复 preempt-卸载 registration for hybrid KV caches: retain the largest same-pointer 注意力 view per logical block (including block-size scaling), deduplicate identical Mamba views separately from 注意力, and skip empty tensors. Pre
- [Issue #18237](https://github.com/vllm-project/vllm-ascend/issues/18237) 进行中
  - 中文：【缺陷】: Benchmark report classification depends on parent directory names
  - 原文：[Bug]: Benchmark report classification depends on parent directory names
- [PR #18132](https://github.com/vllm-project/vllm-ascend/pull/18132) 已合并
  - 中文：【修复】【注意力】【v0.30.0】Use a 64-token 内核 minimum for M3 FP8 KV
  - 原文：[BugFix][Attention][v0.30.0] Use a 64-token kernel minimum for M3 FP8 KV
  - 说明：Clean backport of 18125 to releases/v0.30.0 , cherry-picked with -x from e112a527e075225b0e8225bd7aa4cfd908bdeecb . The stable patch-id is identical ( 89f9ae25231deee26e176ea575d85a8479d9e201 ); no release-specific code changes were needed.
- [PR #18185](https://github.com/vllm-project/vllm-ascend/pull/18185) 已合并
  - 中文：【注意力】【修复】handle DSpark backends without TurboQuant
  - 原文：[Attention][BugFix] handle DSpark backends without TurboQuant
  - 说明：cherry-pick of PR Treat a missing TurboQuant transform as disabled when storing DSpark context KV. This preserves the ordinary CP 缓存 write path and avoids AttributeError without changing existing TurboQuant behavior. Does this PR introdu
- [PR #18183](https://github.com/vllm-project/vllm-ascend/pull/18183) 已合并
  - 中文：【修复】: handle DSpark backends without TurboQuant
  - 原文：[BugFix]: handle DSpark backends without TurboQuant
  - 说明：Treat a missing TurboQuant transform as disabled when storing DSpark context KV. This preserves the ordinary CP 缓存 write path and avoids AttributeError without changing existing TurboQuant behavior. Does this PR introduce any user-facing
- [PR #18125](https://github.com/vllm-project/vllm-ascend/pull/18125) 已合并
  - 中文：【修复】【注意力】Use a 64-token 内核 minimum for M3 FP8 KV
  - 原文：[BugFix][Attention] Use a 64-token kernel minimum for M3 FP8 KV
  - 说明：MiniMax M3 with FP8 KV on hardware supporting FP8 注意力 retains BF16 KV in its GQA layers. The Ascend dense 注意力 backend currently advertises only a 128-token 内核 block. Upstream heterogeneous-KV alignment therefore expands the
- [Issue #18202](https://github.com/vllm-project/vllm-ascend/issues/18202) 进行中
  - 中文：【RFC】: Deprecate and 移除 model runner v1
  - 原文：[RFC]: Deprecate and remove model runner v1
  - 说明：Motivation. vLLM Model runner v2 has been 启用 by default from vLLM 0.29.0. The V1 code will be 移除 from vLLM in 0.32.0. So we vllm-ascend will do the same thing to keep the project works. Proposed Change. We plan to take 2 steps to
- [PR #17379](https://github.com/vllm-project/vllm-ascend/pull/17379) 已合并
  - 中文：【修复】【Spec Decode】Size DFlash query buffers for ACL graph padding
  - 原文：[BugFix][Spec Decode] Size DFlash query buffers for ACL graph padding
  - 说明：Fixes 18121 修复 a query-buffer capacity issue in DFlash 投机解码 on the vLLM Ascend V1 model runner. AscendDflashProposer allocates its persistent query buffers using max query tokens = max batch size (1 + num 投机 tokens
- [Issue #18178](https://github.com/vllm-project/vllm-ascend/issues/18178) 进行中
  - 中文：【缺陷】EPLB init fails with "HIXL EPLB register 显存 failed with status 103900" when 投机解码 (draft model) + expandable_segments:True on Ascend A3
  - 原文：[Bug] EPLB init fails with "HIXL EPLB register memory failed with status 103900" when speculative decoding (draft model) + expandable_segments:True on Ascend A3
- [PR #18044](https://github.com/vllm-project/vllm-ascend/pull/18044) 已合并
  - 中文：[bugfix]支持MRV2上的编解码器模型状态
  - 原文：[bugfix] support encoder-decoder model state on MRV2
  - 说明：The downstream MRV2 model state initializer overrides the upstream 路由 logic, causing cross-注意力 encoder-decoder models such as Cohere ASR to fall back to the default Ascend model state. 新增 an Ascend encoder-decoder model state th
- [PR #18110](https://github.com/vllm-project/vllm-ascend/pull/18110) 已合并
  - 中文：【修复】移除 leftover 调试 log in QSFA tiling
  - 原文：[BugFix]Remove leftover debug log in QSFA tiling
  - 说明：What this PR does Removes a leftover 调试 log ( OP LOGE("ccccc", ...) ) in the tiling entry of the custom kv quant 稀疏 flash 注意力 vllm operator. It was accidentally committed and prints on every tiling run. - Deleted the 调试 prin
- [PR #17105](https://github.com/vllm-project/vllm-ascend/pull/17105) 已合并
  - 中文：【性能】【量化】MegaMoe下释放死W8A8 fp32 MoE刻度
  - 原文：[Performance][Quantization] Release dead W8A8 fp32 MoE scales under MegaMoe
  - 说明：【性能】【量化】Title: Release dead W8A8 fp32 MoE scales under MegaMoe --- Part 2 of 2 (量化 side). In AscendW8A8DynamicFusedMoEMethod.process 权重 after 加载 , the use cann megamoe branch 切换 consumers over t
- [PR #18086](https://github.com/vllm-project/vllm-ascend/pull/18086) 已合并
  - 中文：【功能】【Worker】Allow probabilistic draft sampling with MRV2 PCP
  - 原文：[Feature][Worker] Allow probabilistic draft sampling with MRV2 PCP
  - 说明：Ascend MRV2 PCP rejects draft sample method="probabilistic" during 配置 validation, preventing it from reaching the existing draft sampling implementation. 移除 the greedy-only check for MTP, Eagle3 and DSpark. 更新 the PCP con

#### 2026-10-09

- [PR #18126](https://github.com/vllm-project/vllm-ascend/pull/18126) 已合并
  - 中文：【修复】【模型】Point users at the recipe 修复 when oproj capacity is exceeded
  - 原文：[BugFix][Model] Point users at the recipe fix when oproj capacity is exceeded
  - 说明：Improves the ValueError raised in dsa v1.py:: forward o proj when the fine-grained oproj TP static exchange capacity cannot cover the local token count. The old message only echoed two numbers: Real user case: DeepSeek-V4-Flash + PD disaggr
- [PR #18079](https://github.com/vllm-project/vllm-ascend/pull/18079) 已合并
  - 中文：【修复】【算子】Make DSA block size a Triton constexpr object
  - 原文：[BugFix][Ops] Make DSA block size a Triton constexpr object
  - 说明：A type annotation is not 可见 inside @triton.jit. Construct tl.constexpr directly so the 内核 can read the block size. BUILD LOCAL 元数据 BLOCK SIZE in vllm ascend/ops/triton/dsa cp.py was declared as a type annotation: Triton does n
- [PR #18080](https://github.com/vllm-project/vllm-ascend/pull/18080) 已合并
  - 中文：【修复】【算子】Make DSA block size a Triton constexpr object
  - 原文：[BugFix][Ops] Make DSA block size a Triton constexpr object
  - 说明：A type annotation is not 可见 inside @triton.jit. Construct tl.constexpr directly so the 内核 can read the block size. BUILD LOCAL 元数据 BLOCK SIZE in vllm ascend/ops/triton/dsa cp.py was declared as a type annotation: Triton does n
- [Issue #18129](https://github.com/vllm-project/vllm-ascend/issues/18129) 进行中
  - 中文：【缺陷】: MRV2 synchronous PP+MTP drops real token for -1 placeholder and crashes 预填充 input 内核
  - 原文：[Bug]: MRV2 synchronous PP+MTP drops real token for -1 placeholder and crashes prefill input kernel
  - 说明：With MRV2, synchronous scheduling crashes for this supported-looking combination: An invalid MTP placeholder token -1 is counted as a real 投机 token when the 调度器 builds cached request data. This makes the 调度器 send zero r
- [PR #18038](https://github.com/vllm-project/vllm-ascend/pull/18038) 已合并
  - 中文：【修复】【Worker】Preserve PIECEWISE dummy query widths with DP and MTP
  - 原文：[BugFix][Worker] Preserve PIECEWISE dummy query widths with DP and MTP
  - 说明：With MRV2, DP and MTP 启用, an idle rank can fail in the draft model with AssertionError: reusing a DP sync taken over a different batch . PIECEWISE pads the dummy model inputs while keeping the request count unchanged. Redistributing pa
- [PR #18108](https://github.com/vllm-project/vllm-ascend/pull/18108) 已合并
  - 中文：【v0.30.0】【修复】【Worker】Preserve PIECEWISE dummy query widths with DP and MTP
  - 原文：[v0.30.0][BugFix][Worker] Preserve PIECEWISE dummy query widths with DP and MTP
  - 说明：Pick-from: With MRV2, DP and MTP 启用, an idle rank can fail in the draft model with AssertionError: reusing a DP sync taken over a different batch . PIECEWISE pads dummy model inputs while keeping the request count unchanged. Redistribu
- [PR #17979](https://github.com/vllm-project/vllm-ascend/pull/17979) 已合并
  - 中文：[bugfix]支持MRV2上的编解码器模型状态
  - 原文：[bugfix] support encoder-decoder model state on MRV2
  - 说明：The downstream MRV2 model state initializer overrides the upstream 路由 logic, causing cross-注意力 encoder-decoder models such as Cohere ASR to fall back to the default Ascend model state. 新增 an Ascend encoder-decoder model state th
- [Issue #16234](https://github.com/vllm-project/vllm-ascend/issues/16234) 已关闭
  - 中文：【缺陷】: 夜间-releases-v0.24.0rc-a3部署MiniMax M3长稳运行崩溃
  - 原文：[Bug]: nightly-releases-v0.24.0rc-a3部署MiniMax M3长稳运行崩溃
- [PR #18049](https://github.com/vllm-project/vllm-ascend/pull/18049) 已合并
  - 中文：【功能】【v0.30.0】启用 SFA-only DSA CP for GLM-5.3 Flash
  - 原文：[Feature][v0.30.0] Enable SFA-only DSA CP for GLM-5.3 Flash
  - 说明：Backport 17987 to releases/v0.30.0 , enabling GLM-5.3 Flash SFA-only DSA CP with local queries and replicated KV/pool/tail caches. KDA retains its existing TP path. The cherry-pick is conflict-free and has the same source tree as the origin
- [PR #17987](https://github.com/vllm-project/vllm-ascend/pull/17987) 已合并
  - 中文：【功能】启用 SFA-only DSA CP for GLM-5.3 Flash
  - 原文：[Feature] Enable SFA-only DSA CP for GLM-5.3 Flash
  - 说明：启用 GLM-5.3 Flash SFA-only DSA CP within the TP group. Shard queries with full 注意力 heads, replicate main KV/pool/tail caches, and use local query 元数据 for TopK and NoPE 注意力. Gather raw K/gates before pool compression to p
- [Issue #18121](https://github.com/vllm-project/vllm-ascend/issues/18121) 进行中
  - 中文：【缺陷】: DFlash/DFlash2 query buffers are too small for ACLGraph padding on V1
  - 原文：[Bug]: DFlash/DFlash2 query buffers are too small for ACLGraph padding on V1
- [PR #18003](https://github.com/vllm-project/vllm-ascend/pull/18003) 已合并
  - 中文：[BugFix] [注意]尊重每层KV缓存数据类型
  - 原文：[BugFix][Attention] Respect per-layer KV cache dtype
  - 说明：With --kv-缓存-dtype fp8 , MiniMax-M3 on Ascend A5 uses the mixed-KV policy introduced in 17389: GQA layers are 新增 to KV 缓存 dtype skip layers and retain BF16 KV, while 稀疏 layers use FP8. Upstream 注意力 resolves the skip-layer
- [PR #18062](https://github.com/vllm-project/vllm-ascend/pull/18062) 已合并
  - 中文：[BugFix] [注意]尊重每层KV缓存数据类型
  - 原文：[BugFix][Attention] Respect per-layer KV cache dtype
  - 说明：With --kv-缓存-dtype fp8 , MiniMax-M3 on Ascend A5 uses the mixed-KV policy introduced in 17389: GQA layers are 新增 to KV 缓存 dtype skip layers and retain BF16 KV, while 稀疏 layers use FP8. Upstream 注意力 resolves the skip-layer
- [PR #18105](https://github.com/vllm-project/vllm-ascend/pull/18105) 已合并
  - 中文：【Cherry-pick】【releases/v0.30.0】【持续集成】Revert the C8 配置 (from #18084)
  - 原文：[Cherry-pick][releases/v0.30.0][CI] Revert the C8 configuration (from #18084)
  - 说明：Cherry-pick of PR 18084 onto releases/v0.30.0 . Original PR: 18084 Original author: @kunpengW-code --- In PR the startup 配置 for C8 was 更新. Some 测试用例 still referenced the old 配置, so revert those 测试用例 cha
- [PR #18096](https://github.com/vllm-project/vllm-ascend/pull/18096) 已合并
  - 中文：【修复】【持续集成】Skip empty A3 and A5 夜间 matrices
  - 原文：[BugFix][CI] Skip empty A3 and A5 nightly matrices
  - 说明：The 夜间 workflows can fail while their selected test jobs succeed. The matrix resolver emits [] when a test 配置 section is absent, and GitHub Actions rejects an empty test 配置 matrix before creating a job. - In A3, guard si
- [PR #18094](https://github.com/vllm-project/vllm-ascend/pull/18094) 已合并
  - 中文：【v0.30.0】【性能】narrow the KV save fence to requests with released blocks
  - 原文：[v0.30.0][Performance]narrow the KV save fence to requests with released blocks
  - 说明：1.基线和结论-基线： AscendStoreConnector中的当前保存围栏。handle preemptions ()为上一个save ()调用KVPoolWorker.wait ，这会阻止计划程序步骤，直到整个上一个保存批次耗尽— i.
- [PR #17555](https://github.com/vllm-project/vllm-ascend/pull/17555) 已合并
  - 中文：[性能]将KV保存围栏缩小到具有释放块的请求
  - 原文：[Performance]narrow the KV save fence to requests with released blocks
  - 说明：1.基线和结论-基线： AscendStoreConnector中的当前保存围栏。handle preemptions ()为上一个save ()调用KVPoolWorker.wait ，这会阻止计划程序步骤，直到整个上一个保存批次耗尽— i.
- [PR #17958](https://github.com/vllm-project/vllm-ascend/pull/17958) 已合并
  - 中文：【功能】【PCP】支持 graph execution for sharded 解码 requests
  - 原文：[Feature][PCP] Support graph execution for sharded decode requests
  - 说明：Second layer of the PCP 解码 request sharding series. Builds on 17456 (already merged); the branch is rebased on top of current main . The 投机-解码 layer will follow as a third PR on top of this one. This layer lifts the graph
- [PR #18100](https://github.com/vllm-project/vllm-ascend/pull/18100) 已合并
  - 中文：【Revert】【修复】【KV 缓存】Revert " 传递 已解析 前缀 保留 配置" (#17480)
  - 原文：[Revert] Revert "[BugFix][KV Cache] Propagate resolved prefix retention config" (#17480)
  - 说明：在版本/v0.30.0上还原17480 （ 6f8c631cc4e3ef2f64853624883baf6fc73db620 ） ，以恢复之前的密集检查点保留行为，并使用Qwen3.5-397B-A17B + MTP缓解首次前缀重用回归。17480使已解析的ret
- [PR #18048](https://github.com/vllm-project/vllm-ascend/pull/18048) 已合并
  - 中文：[v0.30.0] [功能] [Worker]在V1 runner中支持TurboQuant打包的KV缓存
  - 原文：[v0.30.0][Feature][Worker] Support the TurboQuant packed KV cache in the V1 runner
  - 说明：为release/v0.30.0分支添加TurboQuant 4位打包KV缓存的Model Runner V1一半。这是18026的版本/v0.30.0对应版本—相同的更改，精心挑选到发布分支上，因此两者在

#### 2026-10-08

- [PR #17916](https://github.com/vllm-project/vllm-ascend/pull/17916) 已合并
  - 中文：[BugFix] [MoE]解决与MoE配置的通信方式
  - 原文：[BugFix][MoE] Resolve communication methods with MoE config
  - 说明：The MoE 通信 registry is keyed by both 通信 type and the expert shape from FusedMoEConfig. AscendMoERunner registered shape-specific 通信 instances but retrieved FusedMC2 and AlltoAll without the 配置, which loo
- [PR #17994](https://github.com/vllm-project/vllm-ascend/pull/17994) 已合并
  - 中文：[BugFix] [Model]避免在MiniMax-M3 MRV2正向中查找当前配置
  - 原文：[BugFix][Model] Avoid current-config lookup in MiniMax-M3 MRV2 forward
  - 说明：MiniMax-M3 A3 解码 startup can fail at the first FULL graph-capture warmup with MRV2, TP4, DP4 and EAGLE3. AscendMiniMaxM3IndexerImpl.forward() calls is mrv2 idle dp dummy() , which reads get current vllm 配置().use v2 model runner . Th
- [PR #18024](https://github.com/vllm-project/vllm-ascend/pull/18024) 已合并
  - 中文：[BugFix] [Ops]在教育部令牌调度程序中丢弃NEED_EXPERT_SCALE设置
  - 原文：[BugFix][Ops] Drop need_expert_scale setup in MoE token dispatcher
  - 说明：TokenDispatcherWithMC2 previously set need expert scale for both hierarchical 通信 and the A5 共享-expert case. That flag makes MoE dispatch pass expert scales into the MC2 dispatch operator. A5 does not need expert scales here.
- [PR #18020](https://github.com/vllm-project/vllm-ascend/pull/18020) 进行中
  - 中文：[性能] [EPLB]在D2D专家权重更新中删除阻止全流等待
  - 原文：[Performance][EPLB] Remove blocking full-stream wait in D2D expert weight update
  - 说明：When EPLB expert rebalancing actually moves experts, D2DExpertWeightLoader.更新 expert map and 权重() blocks the host on every 权重-更新 step via req.wait() on the batch isend irecv requests. On H
- [PR #17954](https://github.com/vllm-project/vllm-ascend/pull/17954) 已合并
  - 中文：[BugFix] [MRV2]在延迟PP后处理之前还原Mamba块表
  - 原文：[BugFix][MRV2] Restore Mamba block tables before deferred PP postprocessing
  - 说明：恢复 batch-ordered 块表 before deferred Mamba 后处理 on non-last PP stages in Model Runner V2. PPHandler returns sampled outputs from pp size steps ago. Mamba 对齐 后处理 reads request-owned counts through the sa
- [PR #17998](https://github.com/vllm-project/vllm-ascend/pull/17998) 已合并
  - 中文：[重构] [操作]使用vllm后缀重命名KDA门累计自定义操作
  - 原文：[Refactor][Ops] Rename KDA gate cumsum custom op with vllm suffix
  - 说明：The repository's KDA gate-cumsum Ascend C operator shares its unqualified name with the FLA custom operator. Following 17540, 重命名 the complete local chain to kda gate cumsum vllm / KdaGateCumsumVllm to give the vLLM custom operator its o
- [PR #17997](https://github.com/vllm-project/vllm-ascend/pull/17997) 已合并
  - 中文：[BugFix] [Ops]使用vllm特定名称还原自定义GDN FwdH
  - 原文：[BugFix][Ops] Restore custom GDN FwdH with vllm-specific names
  - 说明：The repository's GDN FwdH Ascend C operator shares its unqualified name with the FLA custom operator. Following the naming convention in 17540, 重命名 the complete local chain to chunk gated delta rule fwd h vllm / ChunkGatedDeltaRuleFwdHVl
- [Issue #13924](https://github.com/vllm-project/vllm-ascend/issues/13924) 已关闭
  - 中文：[Bug] ： BF16型号在CANN 9.1下enable_fused_mc2 = 1时崩溃（从# 11701回归）
  - 原文：[Bug]: BF16 model crashes with enable_fused_mc2=1 under CANN 9.1 (regression from #11701)
- [Issue #17582](https://github.com/vllm-project/vllm-ascend/issues/17582) 已关闭
  - 中文：【特色】：支持lmhead TP和Model Runner V2上的推测解码
  - 原文：[Feature]: Support lmhead TP together with speculative decoding on Model Runner V2
  - 说明：Following up on 14668 (lmhead TP on the MRv2 sample path): when 投机解码 is also 启用, the draft LM head still samples per rank without the row alignment the LM-head collectives require, so the combination currently hangs sil
- [PR #17456](https://github.com/vllm-project/vllm-ascend/pull/17456) 已合并
  - 中文：[特色] [PCP]跨PCP等级的碎片解码请求
  - 原文：[Feature][PCP] Shard decode requests across PCP ranks
  - 说明：Distribute 解码 requests across PCP ranks instead of replicating every request when PCP 1 and DCP == 1. - Assign each 解码 request to one PCP rank while preserving 预填充 partitioning. - Reuse KV gathering and hidden-state restoration
- [Issue #17991](https://github.com/vllm-project/vllm-ascend/issues/17991) 进行中
  - 中文：[Bug] ： FA3崩溃，混合预填充和推测解码批次
  - 原文：[Bug]: FA3 crashes with mixed prefill and speculative-decoding batches
- [PR #16887](https://github.com/vllm-project/vllm-ascend/pull/16887) 已合并
  - 中文：[性能] [GDN]跳过未使用的设备元数据副本以进行熔融预填充
  - 原文：[Performance][GDN]Skip unused device metadata copies for fused prefill
  - 说明：This PR avoids constructing and copying unused GDN 预填充 元数据 tensors from host to device. The generic GDN 元数据 builder previously generated six device-side chunk 元数据 tensors for every 预填充 batch. These tensors are require

#### 2026-10-07

- [PR #17578](https://github.com/vllm-project/vllm-ascend/pull/17578) 已合并
  - 中文：[功能] [EPLB]添加HIXL专家权重转移
  - 原文：[Feature][EPLB] Add HIXL expert-weight transfers
  - 说明：Implements the HIXL transport proposed in 17572 for asynchronous Model Runner V2 EPLB on Ascend. - Adds AscendHixlEplbCommunicator using the official CANN HIXL Python binding. It registers expert-权重 显存 once and batches receiver-init
- [PR #17726](https://github.com/vllm-project/vllm-ascend/pull/17726) 已合并
  - 中文：【特点】【注意】支持TurboQuant 4位潜伏KV缓存
  - 原文：[Feature][Attention] Support TurboQuant 4-bit latent KV cache
  - 说明：This PR adds TurboQuant (TQ4), a 4-bit storage format for the MLA latent KV 缓存 used by 稀疏 flash 注意力 (SFA) on Ascend. Users 启用 it with: For kv lora rank=512 and qk rope head dim=64 , each 融合 TQ4 KV slot uses 386 bytes: Th
- [PR #15614](https://github.com/vllm-project/vllm-ascend/pull/15614) 已合并
  - 中文：[功能]支持跨PP阶段的Top-K传输
  - 原文：[Feature] Support Top-K transport across PP stages
  - 说明：This PR adds pipeline-parallel transport 支持 for Top-K indices used by IndexShare and IndexCache models. When a PP stage starts with a layer that reuses Top-K indices, the 必填 indices may have been computed by the preceding PP stag
- [PR #17947](https://github.com/vllm-project/vllm-ascend/pull/17947) 已合并
  - 中文：[BugFix] [PCP]修复SFA O-projection聚集短预填充
  - 原文：[BugFix][PCP] Fix SFA O-projection gathers for short prefills
  - 说明：PCP can 拆分 a short 预填充 into single-token local segments. These segments can have different local 注意力 states across ranks even though the global batch contains 预填充 requests. SFA currently uses the local 注意力 state to de

#### 2026-10-06

- [PR #17919](https://github.com/vllm-project/vllm-ascend/pull/17919) 已合并
  - 中文：[BugFix]修复给定自定义投机模型时的GLM C8
  - 原文：[BugFix] Fix GLM C8 When Given Custom Speculative Model
  - 说明：This PR 更新 启用 fa quant in vllm ascend/量化/utils.py to check if model 配置 is present and if use mla is 启用 before proceeding. It also disables FlashAttention 量化 if 启用 sfa(vllm 配置) is true. Does this
- [PR #17209](https://github.com/vllm-project/vllm-ascend/pull/17209) 已合并
  - 中文：[BugFix] [Ops]将自定义QLI名称与官方Cann绑定分开
  - 原文：[BugFix][Ops] Separate custom QLI names from official CANN bindings
  - 说明：【Metadata】Summary - 重命名 the bundled custom QLI V2 ACLNN symbols and GE operator types to VllmAscendQuantLightningIndexerV2 , separating their ABI from the official CANN QLI pair. - Keep only the CMake mapping needed to associate the rena
- [PR #17922](https://github.com/vllm-project/vllm-ascend/pull/17922) 已合并
  - 中文：[BugFix] [GLM Flash]保留填充C8 KPool混合块对齐
  - 原文：[BugFix][GLM Flash] Preserve packed C8 KPool hybrid block alignment
  - 说明：GLM-5.3-Flash with C8 KV 缓存 can fail during 缓存 grouping with: Ascend's initial hybrid 配置 includes the packed C8 scale bytes and chooses a logical block size of 8704. The later backend ali
- [PR #17698](https://github.com/vllm-project/vllm-ascend/pull/17698) 已合并
  - 中文：[BugFix] [KV Pool] GLM-5.3-Flash分层memcache DRAM/SSD池（重构，取代# 16946 ）
  - 原文：[BugFix][KV Pool] GLM-5.3-Flash layerwise memcache DRAM/SSD pooling (rebased, supersedes #16946)
  - 说明：Rebase status (2026-09-29, 更新): rebased onto latest main ( 6f8c631cc ) as a linear history — 1 特性 commit + 7 small 修复/test-alignment commits, no 合并 commits. The previous revision of this branch was 合并-based, which made the P
- [PR #17913](https://github.com/vllm-project/vllm-ascend/pull/17913) 已合并
  - 中文：[BugFix] [KDA]将constexpr参数传递给编译的启动器
  - 原文：[BugFix][KDA] Pass constexpr args to compiled launcher
  - 说明：KDA state-copy plans prepare and retain a CompiledKernel so steady-state requests can launch it without re-entering Triton JIT specialization. Direct CompiledKernel. getitem calls bypass the JIT argument binder, but the Ascend launcher stub
- [PR #17828](https://github.com/vllm-project/vllm-ascend/pull/17828) 已合并
  - 中文：[BugFix] [GLM]保留第一个打包的因果卷积状态
  - 原文：[BugFix][GLM] Preserve the first packed causal convolution state
  - 说明：修复 the null-缓存 sentinel passed to FLA causal convolution after packing a noncontiguous GLM convolution state. copy conv state maps valid requests to packed rows 0, 1, ... and invalid requests to PAD S

#### 2026-10-05

- [PR #17903](https://github.com/vllm-project/vllm-ascend/pull/17903) 已合并
  - 中文：[Ops] [BugFix]在词汇并行嵌入中避免torch.compile下的ConstraintViolationError
  - 原文：[Ops][BugFix] Avoid ConstraintViolationError under torch.compile in vocab parallel embedding
  - 说明：Fixes a startup failure of fine-grained embedding TP on the MRV2 runner: the very first dynamo trace aborts with torch.fx.experimental.symbolic shapes.ConstraintViolationError and the engine never comes up. Root cause. In AscendVocabParalle
- [PR #17876](https://github.com/vllm-project/vllm-ascend/pull/17876) 已合并
  - 中文：[BugFix] [Parser] GLM-5.3的Backport always-on推理
  - 原文：[BugFix][Parser] Backport always-on reasoning for GLM-5.3
  - 说明：GLM-5.3-Flash always reasons, but clients may still send chat template kwargs={"启用 thinking": false} or {"thinking": false} . In the affected GLM parser, this disables reasoning extraction even though
- [PR #17598](https://github.com/vllm-project/vllm-ascend/pull/17598) 已合并
  - 中文：[特色] [PCP]碎片O在PCP上的投影权重
  - 原文：[Feature][PCP] Shard O projection weights across PCP
  - 说明：- Bypass 预填充-oriented PCP global 元数据 and 缓存 processing for 解码-only DSA batches. Use global slot mappings to 更新 each PCP rank's 解码 KV 缓存, then apply the resident O-projection 权重 shards to the local 注意力 ou

#### 2026-10-04

- [PR #17615](https://github.com/vllm-project/vllm-ascend/pull/17615) 已合并
  - 中文：【特点】【注意事项】统一MLA PROLOG并连接DCP电流KV
  - 原文：[Feature][Attention] Unify MLA prolog and connect DCP current KV
  - 说明：- Unify A3 and A5 MLA 解码 on cann ops transformer.mla prolog , with and without RoPE, and 移除 the superseded AscendC K3 prolog implementation and its obsolete operator tests. This path requires CANN B080 or later. - Connect the prolog
- [PR #17444](https://github.com/vllm-project/vllm-ascend/pull/17444) 已合并
  - 中文：【特点】【KV卸载】增加稀疏KV缓存卸载熔断量化雷电分度器管理运算符
  - 原文：[Feature][KV offload] Add fused quant lightning indexer manage operator for sparse KV cache offloading
  - 说明：PR 16640 introduces two standalone AscendC operators that together cover the operator-level workflow for large-序列 稀疏 KV 缓存 offloading: To further 减少 the HBM footprint of this workflow, we need a quantized (C8) variant of th

#### 2026-10-02

- [PR #17867](https://github.com/vllm-project/vllm-ascend/pull/17867) 已合并
  - 中文：[BugFix] [KV Transfer]规范化MooncakeConnectorV1中的组合注意力缓存
  - 原文：[BugFix][KV Transfer] Normalize combined attention caches in MooncakeConnectorV1
  - 说明：【2, num kernel blocks, block size, num heads, head dim】MooncakeConnectorV1 expects dimension 0 of each normalized 缓存 tensor to index blocks. MRv1 can instead provide one 注意力 tensor shaped , including the block-major, non-contiguou

#### 2026-09-30

- [PR #17580](https://github.com/vllm-project/vllm-ascend/pull/17580) 已合并
  - 中文：【修复】对齐 MLA DCP DSpark draft 元数据
  - 原文：[BugFix] align MLA DCP DSpark draft metadata
  - 说明：修复 元数据 and graph execution issues in Model Runner V2 when combining context parallelism with 投机解码. - Forward draft CPU 序列 lengths and 解码 flags through the existing 元数据 factory, and resolve missing parall
- [PR #17614](https://github.com/vllm-project/vllm-ascend/pull/17614) 已合并
  - 中文：[性能] [KDA]准备Triton预填充状态副本计划
  - 原文：[Performance][KDA] Prepare Triton prefill state-copy plans
  - 说明：Provide a startup-prepared Triton alternative to the Kimi 预填充 state gather/clear/scatter work in 17301 (reference head 5bcbad36fdc30aef539abf0ccc99ef959d913104 ). Chunk KDA math, recurrent 解码 and GLM KDA are unchanged. - Prepare and
- [PR #17260](https://github.com/vllm-project/vllm-ascend/pull/17260) 已合并
  - 中文：【性能】【Mamba】加宽时间后处理状态拷贝
  - 原文：[Performance][Mamba] Widen temporal postprocess state copies
  - 说明：优化 the temporal-state copy in Ascend's postprocess mamba 融合 内核 . The old path 拷贝 temporal state as bytes; large KDA/GDN states require many copy-loop iterations. When both addresses are 8-byte aligned, this PR 拷贝 uint64
- [PR #17381](https://github.com/vllm-project/vllm-ascend/pull/17381) 已合并
  - 中文：[BugFix] [Spec Decode]在构建PP = 1草稿配置时避免CPP验证
  - 原文：[BugFix][Spec Decode] Avoid CPP validation when building PP=1 draft configs
  - 说明：This PR prevents Chunked Pipeline Parallelism (CPP) profiling-chunk 配置 from being applied to 投机 draft models. Draft models used by MTP, EAGLE, DSpark, and the 310P MTP path should not inherit the target model's profiling
- [PR #17632](https://github.com/vllm-project/vllm-ascend/pull/17632) 已合并
  - 中文：[重构] [工人]重复使用上游PCP投机和虚拟批处理
  - 原文：[Refactor][Worker] Reuse upstream PCP speculative and dummy batch handling
  - 说明：The paired vLLM ( ced6857afa0ea7b2e3f0846a62e1394e90f15607 , v0.30.0) now supports 投机 PCP partitioning and stages dummy inputs into persistent PCP buffers. 移除 the compatibility paths introduced for these upstream gaps: - Delete
- [PR #17498](https://github.com/vllm-project/vllm-ascend/pull/17498) 已合并
  - 中文：[BugFix] [Ops]在浮点MoE的AscendUnquantizedFusedMoEMethod中保留tid2eid
  - 原文：[BugFix][Ops] Keep tid2eid in AscendUnquantizedFusedMoEMethod for float MoE
  - 说明：Purpose 修复 17476 On releases/v0.26.0rc , a ModelSlim descriptor marks every 权重 FLOAT . AscendModelSlimConfig.get quant method then skips 量化 and builds AscendUnquantizedFusedMoEMethod without tid2eid . On this branch apply() s

#### 2026-09-29

- [PR #17750](https://github.com/vllm-project/vllm-ascend/pull/17750) 已合并
  - 中文：【修复】【注意力】DSA CP FULL graph replay 元数据
  - 原文：[BugFix][Attention] Fix DSA CP FULL graph replay metadata
  - 说明：Motivation In FULL 解码 ONLY , a dummy one-token capture can have no completed compressed 缓存 group. For C2 (and the zero-缓存 C1 case), flooring max 缓存 seq len by the compression ratio produces a zero descriptor. The 索引器 then t
- [PR #15011](https://github.com/vllm-project/vllm-ascend/pull/15011) 已合并
  - 中文：【特色】【运营】【杂项】支持批量分片采样并移除缩减样本
  - 原文：[Feature][Ops][Misc] Support batch-sharded sampling and remove reduce sample
  - 说明：As mentioned in 15119 and previous release note, this pull request removes the experimental 启用 减少 sample (减少 sampling) 特性 and all its associated code, configurations, Triton 内核, test
- [PR #17353](https://github.com/vllm-project/vllm-ascend/pull/17353) 已合并
  - 中文：[Performance] [Worker]避免融合槽位映射的请求计数专业化
  - 原文：[Performance][Worker] Avoid request-count specialization in fused slot mapping
  - 说明：Both 融合 slot-mapping 内核 currently specialize on NUM REQS to unpack a flattened grid. A new request count therefore creates another Triton compilation variant in 解码 and multi-request 预填充, even when the tile 配置 is u
- [PR #17346](https://github.com/vllm-project/vllm-ascend/pull/17346) 已合并
  - 中文：[性能]避免DSA-CP元数据内核的请求计数专业化
  - 原文：[Performance] Avoid request-count specialization in DSA-CP metadata kernel
  - 说明：The DSA context-parallel 元数据 内核 currently uses the request-count block size as a tl.constexpr, producing a separate compiled 内核 for each request-count tier. This change: - uses a 修复 1024-request tile and scales the launch gr
- [PR #14633](https://github.com/vllm-project/vllm-ascend/pull/14633) 已合并
  - 中文：【重构】【注意】对非量化SFA使用CANN LightningIndexer
  - 原文：[Refactor][Attention] Use CANN LightningIndexer for non-quantized SFA
  - 说明：This PR removes the bundled non-quantized LightningIndexer custom operator and uses the CANN-provided torch npu.npu lightning 索引器 implementation for the non-C8 SFA path. It also: - removes the deleted
- [PR #17480](https://github.com/vllm-project/vllm-ascend/pull/17480) 已合并
  - 中文：【修复】【KV 缓存】传递 已解析 前缀 保留 配置
  - 原文：[BugFix][KV Cache] Propagate resolved prefix retention config
  - 说明：vLLM PR 52216 promoted 前缀缓存 保留 interval from an environment variable to a CacheConfig / KVCacheConfig field, and 55353 then 移除 VLLM 前缀缓存 保留 INTERVAL from vllm.envs as part of the 0.29 deprecation cleanup.

#### 2026-09-28

- [PR #17387](https://github.com/vllm-project/vllm-ascend/pull/17387) 已合并
  - 中文：【性能】【注意】一般化DCP输出包，在A5上组合
  - 原文：[Performance][Attention] Generalize DCP output pack and combine on A5
  - 说明：This PR adds eight-row Triton 内核 for DCP output/LSE pack and combine on Ascend A5. It restores the dispatch range established by earlier A5 operator validation instead of restricting batching to DCP8, H=96/12, D=512 and T≤256. The reus
- [PR #17605](https://github.com/vllm-project/vllm-ascend/pull/17605) 已合并
  - 中文：[Cherry-pick] [releases/v0.27.1rc] [BugFix] [CI]修复Ascend产品名称的PO翻译术语（来自# 17227 ）
  - 原文：[Cherry-pick][releases/v0.27.1rc][BugFix][CI] Fix PO translation terminology for Ascend product names (from #17227)
  - 说明：Cherry-pick 17227 ( 6b7f5df993970e1bb4c5b7423eee7abe763a023a ) to releases/v0.27.1rc . The documentation PO translation workflow now instructs the translator to use “昇腾” for standalone “Ascend”, preserve vLLM Ascend and vllm-ascend , and us
- [PR #17606](https://github.com/vllm-project/vllm-ascend/pull/17606) 已合并
  - 中文：[Cherry-pick] [releases/v0.28.0rc] [BugFix] [CI]修复Ascend产品名称的PO翻译术语（来自# 17227 ）
  - 原文：[Cherry-pick][releases/v0.28.0rc][BugFix][CI] Fix PO translation terminology for Ascend product names (from #17227)
  - 说明：Cherry-pick 17227 ( 6b7f5df993970e1bb4c5b7423eee7abe763a023a ) to releases/v0.28.0rc . The documentation PO translation workflow now instructs the translator to use “昇腾” for standalone “Ascend”, preserve vLLM Ascend and vllm-ascend , and us
- [PR #17607](https://github.com/vllm-project/vllm-ascend/pull/17607) 已合并
  - 中文：[Cherry-pick] [releases/v0.29.0rc] [BugFix] [CI]修复Ascend产品名称的PO翻译术语（来自# 17227 ）
  - 原文：[Cherry-pick][releases/v0.29.0rc][BugFix][CI] Fix PO translation terminology for Ascend product names (from #17227)
  - 说明：Cherry-pick 17227 ( 6b7f5df993970e1bb4c5b7423eee7abe763a023a ) to releases/v0.29.0rc . The documentation PO translation workflow now instructs the translator to use “昇腾” for standalone “Ascend”, preserve vLLM Ascend and vllm-ascend , and us

#### 2026-09-27

- [PR #16848](https://github.com/vllm-project/vllm-ascend/pull/16848) 已合并
  - 中文：[功能] [MRV2]所有配置的默认模型运行器V2
  - 原文：[Feature][MRV2] Default Model Runner V2 for all configurations
  - 说明：This PR makes Model Runner V2 the default on Ascend when VLLM USE V2 MODEL RUNNER is unset. The old architecture, 特性, platform, and Triton whitelist is replaced by a blacklist in vllm ascend/mrv2 utils.py . When the env var is unset, a

#### 2026-09-23

- [PR #17066](https://github.com/vllm-project/vllm-ascend/pull/17066) 已合并
  - 中文：[性能] [MRV1]仅提交脏块表范围
  - 原文：[Performance][MRV1] Commit only dirty block-table ranges
  - 说明：This PR optimizes the legacy Model Runner V1 block-table commit path. It does not modify Model Runner V2. MRv1 currently 拷贝 every active block-table row at its full logical width on each commit. For long-context 解码, the actual chang
- [PR #14883](https://github.com/vllm-project/vllm-ascend/pull/14883) 已合并
  - 中文：[BugFix] [Spec Decode]更正MRV1中被拒绝的令牌seq_lens
  - 原文：[BugFix][Spec Decode] Correct rejected token seq_lens in MRV1
  - 说明：ModelRunner V1 does not subtract rejected target tokens from the device-side seq lens before building the later one-token draft 解码 steps. SFA and DSA consume this tensor as the exact KV 序列 length. Consequently, their later draft A
- [PR #17227](https://github.com/vllm-project/vllm-ascend/pull/17227) 已合并
  - 中文：[BugFix] [CI]修复Ascend产品名称的采购订单翻译术语
  - 原文：[BugFix][CI] Fix PO translation terminology for Ascend product names
  - 说明：This PR fixes incorrect translations produced by the documentation translation workflow ( po translate.py ): 1. "Ascend" → "昇腾" : The standalone NPU brand name "Ascend" was occasionally mistranslated. The prompt now mandates "昇腾" and explic
- [PR #16457](https://github.com/vllm-project/vllm-ascend/pull/16457) 已合并
  - 中文：[BugFix]在310P上以图模式修复lora并打开MRV2 lora
  - 原文：[BugFix] fix lora in graph-mode on 310P and open MRV2 lora
  - 说明：When running model with lora on 310P and using graph-mode, error occurs that a torch operator "torch.repeat interleave" in sgmv need stream synchronize but graph-mode not 支持. This PR will check device type and 图模式 and then use b

#### 2026-09-21

- [PR #16449](https://github.com/vllm-project/vllm-ascend/pull/16449) 已合并
  - 中文：[BugFix] [Hybrid Mamba]恢复PD和kv_both池的混合MTP前缀缓存
  - 原文：[BugFix][Hybrid Mamba] Restore hybrid MTP prefix caching for PD and kv_both pooling
  - 说明：Hybrid FullAttention + Mamba models can lose reusable 前缀-缓存 pages when MTP/EAGLE is on. On a pure PD 预填充 producer, EAGLE drops a verified prompt block and the 调度器 backs off one whole Mamba alignment page; with a 1536-token
- [PR #16885](https://github.com/vllm-project/vllm-ascend/pull/16885) 已合并
  - 中文：【功能】【MRV2】新增Ascend后端超级内核优化支持
  - 原文：[Feature][MRV2] Add Super Kernel optimization support for Ascend backend
  - 说明：Super 内核 支持 has already been introduced in MRV( This PR adds the necessary adaptations for MRV2. yes，the new 配置 of npugraph ex is as follow: vLLM main: - vLLM main:

#### 2026-09-18

- [PR #16908](https://github.com/vllm-project/vllm-ascend/pull/16908) 已合并
  - 中文：还原“[测试] [杂项]更新E2E测试配置，基线”
  - 原文：Revert "[Test][Misc] Update E2E test configurations, baselines"
  - 说明：Reverts vllm-project/vllm-ascend 16852 - vLLM main:
- [PR #16626](https://github.com/vllm-project/vllm-ascend/pull/16626) 已合并
  - 中文：[功能] [MRV2]展开默认MRv2架构白名单并添加dspark
  - 原文：[Feature][MRV2] expand default MRv2 architecture whitelist and add dspark
  - 说明：This PR expands the default Model Runner V2 model and 特性 whitelists so more architectures, plus dspark, default to V2. A request uses Model Runner V2 by default only when all of the following hold: The model architecture is on the defa

#### 2026-09-17

- [PR #16661](https://github.com/vllm-project/vllm-ascend/pull/16661) 已合并
  - 中文：【修复】【Config】Strip upstream-injected GDN/KDA 预填充 backend keys on Ascend
  - 原文：[BugFix][Config] Strip upstream-injected GDN/KDA prefill backend keys on Ascend
  - 说明：Upstream EngineArgs injects --gdn-预填充-backend / --kda-预填充-backend into additional 配置. The generic GDN/KDA layers (qwen gdn linear attn / kimi gdn linear attn) consume these keys on all platforms, but on Ascend only the triton pa
- [PR #16325](https://github.com/vllm-project/vllm-ascend/pull/16325) 已合并
  - 中文：【修复】【注意力】Build SFA 索引器 DCP 元数据 independently
  - 原文：[BugFix][Attention] Build SFA indexer DCP metadata independently
  - 说明：After 15669 separated the SFA 索引器 缓存 and 元数据 builder, replicated DCP can expose an address mismatch: SFA uses a rank-local KV-缓存 layout, while the 索引器 缓存 is replicated across DCP ranks. Building 索引器 元数据 from t
- [PR #16682](https://github.com/vllm-project/vllm-ascend/pull/16682) 已合并
  - 中文：[BugFix] [Multimodal]端口上游mm_encoder_only在虚拟运行中提前退出
  - 原文：[BugFix][Multimodal] Port upstream mm_encoder_only early-exit in dummy runs
  - 说明：With --mm-encoder-only, vLLM keeps LM 权重 on the meta device and only materializes the multimodal encoder. The Ascend model runner still executes the LM forward in its compile-time dummy runs, so an npu:0 activation meets a meta paramet

#### 2026-09-16

- [PR #16139](https://github.com/vllm-project/vllm-ascend/pull/16139) 已合并
  - 中文：【算子】【功能】支持 AddRmsNormBias on Ascend A5
  - 原文：[Ops][Feature] Support AddRmsNormBias on Ascend A5
  - 说明：新增 Ascend 950 (A5) 支持 for the existing AddRmsNormBias operator, with upstream-derived FullLoad and SplitD implementations. Optional beta is 新增 to the FP32 normalized output before the final output cast. Wire the implementation thro
- [PR #16572](https://github.com/vllm-project/vllm-ascend/pull/16572) 已合并
  - 中文：[BugFix] [CI]修复doctest更改检测
  - 原文：[BugFix][CI] Fix doctest change detection
  - 说明：The doctest planner used a two-dot diff between the PR base and head, which could include changes from other PRs and trigger unrelated doctests. This PR: - Uses a three-dot diff and 合并 base so doctests are selected only from the current
- [PR #16582](https://github.com/vllm-project/vllm-ascend/pull/16582) 已合并
  - 中文：[BugFix] [MoE]修复MOE激活选择
  - 原文：[BugFix][MoE] Fix moe activaton selection
  - 说明：修复 moe activation selection. MoECommMethod is a singleton which holds moe 配置, and this moe 配置 always holds the information of the last layer, so if the model has multiple activation methods, the moe activation selection will be wro

#### 2026-09-15

- [PR #16574](https://github.com/vllm-project/vllm-ascend/pull/16574) 已合并
  - 中文：【修复】【测试】MRV2 CPU UT 回退
  - 原文：[BugFix][Test] Fix MRV2 CPU UT regression
  - 说明：This PR fixes three broken MRV2 CPU unit tests: - test 初始化 KV 缓存 installs aclgraph factory and pcp - test prepare inputs common path - test prepare inputs covers draft full dcp pp and rswa The failure was observed in The regressio

#### 2026-09-14

- [PR #16518](https://github.com/vllm-project/vllm-ascend/pull/16518) 已合并
  - 中文：[性能] [注意]在一个合并内核中合并拆分MLA DCP输出
  - 原文：[Performance][Attention] Merge split MLA DCP outputs in one combine kernel
  - 说明：拆分 MLA DCP 注意力 currently combines the history contributions after all-to-all, then combines that result with current-token FIA output. This change defers reduction until both branches are ready and 合并 all contributions in one T
- [PR #15415](https://github.com/vllm-project/vllm-ascend/pull/15415) 已合并
  - 中文：[BugFix] [Offloader]在npu_format_cast后将参数重新绑定到NZ静态缓冲区
  - 原文：[BugFix][Offloader] Re-bind params to NZ static buffers after npu_format_cast
  - 说明：Follow-up bugfix for 11945 ("支持 NZ static buffers for prefetch 卸载"), which had a bug in how the static buffers were cast to NZ format. torch npu.npu format cast returns a new tensor instead of modifying the buffer in place, so the

#### 2026-09-12

- [PR #15890](https://github.com/vllm-project/vllm-ascend/pull/15890) 已合并
  - 中文：[0.27.1rc] [功能] [配置]警告即将到来的DSA CP弃用
  - 原文：[0.27.1rc][Feature][Config] Warn about upcoming DSA CP deprecation
  - 说明：RFC 14002 Warn during 配置 initialization when 启用 dsa cp is 启用 that the 特性 will be deprecated in a future release. Suggest trying 预填充 context parallelism on supported model and deployment configurations. For TP=N
- [PR #13045](https://github.com/vllm-project/vllm-ascend/pull/13045) 已合并
  - 中文：【功能】Gemma MTP 投机解码 支持 on Ascend NPU A5
  - 原文：[Feature]Gemma MTP speculative decoding support on Ascend NPU A5
  - 说明：Concurrency Avg TPOT (ms) Spec. Accept Rate Completion 吞吐 Total Prompt 吞吐 :--- :--- :--- :--- :--- 1 15.0 71.5% 59.46 tok/s 237.85 tok/s 8 30.9 71.6% 236.27 tok/s 945.17 tok/s 16 43.3 71.7% 299.15 tok/s 1196.73 tok/s 32 79.4

#### 2026-09-11

- [PR #15908](https://github.com/vllm-project/vllm-ascend/pull/15908) 已合并
  - 中文：[功能] [MRV1] [MRV2]重构ACL图形重播的主机端参数更新。
  - 原文：[Feature][MRV1][MRV2] Refactor Host-Side Parameter Updates for ACL Graph Replay.
  - 说明：Implements the UpdatableGraph design discussed in Refactors the FIA and 投机解码 to work with the new UpdatableGraph design. Manually validated on A3 with the following scenarios: - FIA: Qwen3-0.6B with MRV1 and MRV2 - MTP: Qwen
- [PR #16301](https://github.com/vllm-project/vllm-ascend/pull/16301) 已合并
  - 中文：[v0.27.1rc] [DOC]翻译文档文件2026-09-11
  - 原文：[v0.27.1rc][Doc] Translated Doc files 2026-09-11
  - 说明：Auto-Translation Summary Translated 92 file(s): - <code /home/runner/ work/vllm-ascend/vllm-ascend/docs/source/locale/zh CN/LC MESSAGES/community/versioning policy.po</code - <code /home/runner/ work/vllm-ascend/vllm-ascend/docs/source/loca
- [PR #16190](https://github.com/vllm-project/vllm-ascend/pull/16190) 已合并
  - 中文：【性能】【LoRA】改进 LoRA 性能 on A2 & A3
  - 原文：[Performance][LoRA] Improve LoRA performance on A2 & A3
  - 说明：Backport of onto releases/v0.27.1rc . Code changes match that PR. This PR optimizes dense LoRA linear execution on Ascend A2 and A3 for single-LoRA-slot 服务: - max loras == 1 - fully sharded loras == false - LoRA rank in {8, 16, 32, 64}

#### 2026-09-10

- [PR #16051](https://github.com/vllm-project/vllm-ascend/pull/16051) 已合并
  - 中文：【重构】【量化】移除 packed_modules_mapping in modelslim quant
  - 原文：[Refactor][Quantization] Remove packed_modules_mapping in modelslim quant
  - 说明：- Part of Purpose 改进 maintainability. The old implementation hardcoded a full packed modules model mapping for 30+ models on the vllm-ascend side, duplicating vLLM upstream model definitions. Every new model 必填 double-sided synci

#### 2026-09-09

- [PR #15884](https://github.com/vllm-project/vllm-ascend/pull/15884) 已合并
  - 中文：【性能】【LoRA】改进 LoRA 性能 on A2 & A3
  - 原文：[Performance][LoRA] Improve LoRA performance on A2 & A3
  - 说明：What this PR does This PR optimizes dense LoRA linear execution on Ascend A2 and A3 for single-LoRA-slot 服务: - max loras == 1 - fully sharded loras == false - LoRA rank in {8, 16, 32, 64} - BF16 权重 and activations for the Triton p

#### 2026-09-08

- [PR #16060](https://github.com/vllm-project/vllm-ascend/pull/16060) 已合并
  - 中文：[BugFix] [Doc]避免RTD构建中的二分模块阴影
  - 原文：[BugFix][Doc] Avoid bisect module shadowing in RTD build
  - 说明：The Chinese Read the Docs build failed in build 34446759 with: tools/rtd build.sh invoked the Chinese documentation generator by file path: That puts the repository's tools/ directory first on sys.path . After enough translation patterns ar
- [PR #15889](https://github.com/vllm-project/vllm-ascend/pull/15889) 已合并
  - 中文：[功能] [配置]警告即将到来的DSA CP弃用
  - 原文：[Feature][Config] Warn about upcoming DSA CP deprecation
  - 说明：RFC 14002 Warn during 配置 initialization when 启用 dsa cp is 启用 that the 特性 will be deprecated in a future release. Suggest trying 预填充 context parallelism on supported model and deployment configurations. For TP=N

#### 2026-09-07

- [PR #15752](https://github.com/vllm-project/vllm-ascend/pull/15752) 已合并
  - 中文：【重构】Auto-启用 LI C8 reshape 优化
  - 原文：[Refactor] Auto-enable LI C8 reshape optimization
  - 说明：- Removes c8 启用 reshape optim from additional 配置 , documentation, model examples, and e2e configurations. - Derives the internal StoreKVBlock enablement once during Ascend 配置 initialization. - Enables it only when the model uses

#### 2026-08-31

- [PR #15262](https://github.com/vllm-project/vllm-ascend/pull/15262) 已合并
  - 中文：【v0.26.0rc】【性能】【注意力】融合 SFA DCP output all-to-all
  - 原文：[v0.26.0rc][Performance][Attention] Fuse SFA DCP output all-to-all
  - 说明：What this PR changes This PR brings the SFA DCP 融合 output post-processing from 14457 to releases/v0.26.0rc : - stride-aware Triton packing for local 注意力 output and FP32 LSE - one HCCL all-to-all for the packed payload - 融合 numer

#### 2026-08-29

- [PR #14457](https://github.com/vllm-project/vllm-ascend/pull/14457) 已合并
  - 中文：【性能】（注意） ： FUSE SFA DCP输出全部
  - 原文：[Performance](attention): fuse SFA DCP output all-to-all
  - 说明：What this PR changes This PR replaces the SFA DCP output post-processing hot path with a custom Ascend operator: - stride-aware Triton pack for the local 注意力 output and LSE - one HCCL all-to-all instead of separate output/LSE collecti

#### 2026-08-21

- [PR #13946](https://github.com/vllm-project/vllm-ascend/pull/13946) 已合并
  - 中文：【重构】移除 FlashComm v1
  - 原文：[Refactor] remove FlashComm v1
  - 说明：The upstream vLLM community has already implemented the SP (序列 Parallel) logic. To keep the code simple and maintainable, the downstream SP 特性 needs to be refactored. Delete flashcom

#### 2026-08-15

- [PR #13158](https://github.com/vllm-project/vllm-ascend/pull/13158) 已合并
  - 中文：[重构]解耦flashcomm和共享专家dp
  - 原文：[Refactor] decouple flashcomm and shared expert dp
  - 说明：This PR decouples 启用 flashcomm1 from 启用 共享专家 dp for MoE 共享-expert execution. Previously, enabling 共享-expert DP implicitly relied on FlashComm-related behavior, so the two features could not be configured and validat

#### 2026-08-12

- [PR #13982](https://github.com/vllm-project/vllm-ascend/pull/13982) 已合并
  - 中文：【MRV2】【功能】SFA C8 supports ModelRunnerV2.
  - 原文：[MRV2][Feature] SFA C8 supports ModelRunnerV2.
  - 说明：此PR增加了对SFA型号A3和A5 C8功能的支持，包括启用稀疏sfa c8和启用稀疏li c8交换机。否- vLLM版本： v0.26.0 - vLLM主：

#### 2026-08-06

- [PR #13684](https://github.com/vllm-project/vllm-ascend/pull/13684) 已合并
  - 中文：[BugFix]修复了在启用DeepSeek Overlay C8和MTP的情况下加载大量权限集时发生的错误。
  - 原文：[BugFix] Fixed an error that occurred when loading heavy permission sets with DeepSeek Overlay C8 and MTP enabled.
  - 说明：Deepseek-MTP模型的加载权重方法无法应用缓存缩放映射器。因此，检查点权重名称（例如， model.layers.61.self attn.fa k.offset ） -在通过将规范层名称重写为model.layers.61后。

#### 2026-07-29

- [PR #12981](https://github.com/vllm-project/vllm-ascend/pull/12981) 已合并
  - 中文：【功能】【MRV2】GQA C8 modelrunnerv2 adaptation
  - 原文：[Feature][MRV2] GQA C8 modelrunnerv2 adaptation
  - 说明：此PR修复了modelrunnerv1和modelrunnerv2中由图模式编译期间属性状态值不一致引起的错误。no - vLLM version: v0.25.1 - vLLM main:
