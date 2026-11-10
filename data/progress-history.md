# vLLM-Ascend 各模型历史进展

更新时间：2026-11-10T23:00:06.450Z

收录 2026-10-12 以来仍被提到的模型相关 PR 与 Issue，按事件日期由近到远。中文在前，原文在后。

## DeepSeek

### DeepSeek V4

#### 2026-11-10

- [PR #18994](https://github.com/vllm-project/vllm-ascend/pull/18994) 已关闭
  - 中文：【持续集成】dsv4 mooncake
  - 原文：[CI] dsv4 mooncake
  - 说明：【】--- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary conditions (e.g. empty input, single/zero element, min/max values, off-by-one, seque
- [Issue #20563](https://github.com/vllm-project/vllm-ascend/issues/20563) 已关闭
  - 中文：【Recipes】overlay 无法更新 DeepSeek-V4-Flash 的 A3 配置（新增-only 与 modes.variants 限制）
  - 原文：[Recipes] overlay 无法更新 DeepSeek-V4-Flash 的 A3 配置（add-only 与 modes.variants 限制）
  - 说明：现象 尝试用 recipes/overlays/deepseek-ai/DeepSeek-V4-Flash.yaml 更新 Ascend 910C（A3）的实测配置（ v0.30.0rc2-a3 ），CI Recipes / Validate 三种写法全部失败： 1. 新增 variant（ ascend w8a8 mtp a3 / ascend w8a8 dspark a3 ）： features.spec 解码 has no mode available fo
- [PR #20336](https://github.com/vllm-project/vllm-ascend/pull/20336) 已关闭
  - 中文：【文档】【功能】DeepSeek-V4 支持 matrix for A2/A3
  - 原文：[Doc][Feature] Add DeepSeek-V4 support matrix for A2/A3
  - 说明：This pull request adds a 支持 matrix for DeepSeek-V4-Pro and DeepSeek-V4-Flash models on A2/A3 products in the documentation, and enables the markdown tables extended extension in mkdocs.yml . Feedback: The newly 新增 tab block in the d
- [PR #21092](https://github.com/vllm-project/vllm-ascend/pull/21092) 已关闭
  - 中文：【性能】【模型】Skip padded DSV4.1 expert routes by default
  - 原文：[Performance][Model] Skip padded DSV4.1 expert routes by default
  - 说明：DSV4.1 pads token rows for graph replay and 序列 parallelism. On the AllGather MoE path, 路由 those rows to local experts adds work to the grouped GEMMs. This change filters padding after the router selects experts. Hash 路由 uses
- [PR #21417](https://github.com/vllm-project/vllm-ascend/pull/21417) 进行中
  - 中文：【性能】【模型】Skip padded DSV4.1 expert routes by default
  - 原文：[Performance][Model] Skip padded DSV4.1 expert routes by default
  - 说明：DeepSeek-V4.1 introduces token padding for graph replay and 序列 parallelism (SP). In the AllGather MoE path, these padded tokens may still be assigned to local experts, resulting in unnecessary computations in the grouped GEMMs. This P
- [Issue #21406](https://github.com/vllm-project/vllm-ascend/issues/21406) 进行中
  - 中文：【缺陷】: DSV4.1 on A2 "Failed to mount segment: INVALID_PARAMS" while 启用 mooncake 池化
  - 原文：[Bug]: DSV4.1 on A2 "Failed to mount segment: INVALID_PARAMS" while enable mooncake pooling
- [PR #16710](https://github.com/vllm-project/vllm-ascend/pull/16710) 已关闭
  - 中文：【持续集成】优化 DeepSeek-V4 DSpark test duration
  - 原文：[CI] Optimize DeepSeek-V4 DSpark test duration
  - 说明：优化 the execution time of the DeepSeek-V4 DSpark 投机解码 PR test. The current estimated execution time of tests/e2e/pull request/four card/spec 解码/test dspark deepseekv4.py is about 1280 seconds. This PR first adds per
- [Issue #21396](https://github.com/vllm-project/vllm-ascend/issues/21396) 进行中
  - 中文：【缺陷】【量化】【A5】W4A8-MXFP4 MoE down_proj scale reshape crashes on odd TP scale-group count
  - 原文：[Bug][Quantization][A5] W4A8-MXFP4 MoE down_proj scale reshape crashes on odd TP scale-group count
  - 说明：AscendW4A8MXFPDynamicFusedMoEMethod.process 权重 after 加载 ( vllm ascend/量化/methods/w4a8/w4a8 mxfp4.py ) reshapes w2 权重 scale 's last dimension into pairs of MX groups: k is intermediate size per partition // group size
- [PR #21384](https://github.com/vllm-project/vllm-ascend/pull/21384) 进行中
  - 中文：【修复】【模型】Reuse upstream DeepSeek V4 image preprocessing
  - 原文：[BugFix][Model] Reuse upstream DeepSeek V4 image preprocessing
  - 说明：The local DeepSeek V4 vision processor still expects four arguments in call hf processor , while current vLLM passes two. With vLLM main 24420b7a , DeepSeek-V4-Flash-Vision-Exp fails during service initialization: The local copy was introdu

#### 2026-11-09

- [PR #21168](https://github.com/vllm-project/vllm-ascend/pull/21168) 已合并
  - 中文：【修复】【DSpark】【EPLB】DeepSeek V4 expert 权重 mapping with redundant experts
  - 原文：[BugFix][DSpark][EPLB] Fix DeepSeek V4 expert weight mapping with redundant experts
  - 说明：DeepSeek V4 DSpark creates MoE layers with the configured redundant experts, but its 检查点 loader builds the expert mapping with num redundant experts=0 . Under MRv2, this can load incorrect logical experts into physical slots and leav
- [Issue #21335](https://github.com/vllm-project/vllm-ascend/issues/21335) 进行中
  - 中文：【文档】: Feedback for `/en/v0.30.0/tutorials/models/DeepSeek-V4-Flash.html`，启动模型报HCCL函数错误：hcclGetRootInfo(&hcclID)，错误代码为19（调用网络API失败）
  - 原文：[Doc]: Feedback for `/en/v0.30.0/tutorials/models/DeepSeek-V4-Flash.html`，启动模型报HCCL函数错误：hcclGetRootInfo(&hcclID)，错误代码为19（调用网络API失败）
  - 说明：【multiproc executor.py:944】【ERROR】📚 The doc issue A2单机用vllm v0.30启动DeepSeek V4 Flash，报HCCL函数错误：hcclGetRootInfo(&hcclID)，错误代码为19（调用网络API失败）下面为错误详情： Worker TP0 EP0 pid=8713) ERROR 11-09 11:23:33 2026-11-09-11:23:31 (PID:8713, Device:0, Ran
- [PR #21333](https://github.com/vllm-project/vllm-ascend/pull/21333) 进行中
  - 中文：【修复】恢复 DSpark 检查点 state for RFork
  - 原文：[BugFix] Restore DSpark checkpoint state for RFork
  - 说明：RFork 拷贝 post-load tensors and does not run the draft model's load 权重 . DeepSeek V4/V4.1 DSpark drafts set has own embed tokens / has own lm head in load 权重 from the 检查点 权重 names, so under RFork these flags kept the

#### 2026-11-07

- [PR #21259](https://github.com/vllm-project/vllm-ascend/pull/21259) 进行中
  - 中文：【性能】【模型】Capture DeepSeek V4 解码 元数据 in full graphs
  - 原文：[Performance][Model] Capture DeepSeek V4 decode metadata in full graphs
  - 说明：Capture DeepSeek V4 target-model SAS/QLI 元数据 producers in FULL 解码 graphs, avoiding repeated host executor construction and CPU scalar preparation. Persistent inputs are refreshed before replay; producer outputs retain stable storag

#### 2026-11-06

- [PR #20420](https://github.com/vllm-project/vllm-ascend/pull/20420) 已合并
  - 中文：【重构】移除 unused tid2eid param after fused_moe refactor.
  - 原文：[Refactor] Remove unused tid2eid param after fused_moe refactor.
  - 说明：【input ids】Background. DeepSeek-V4 hash-routed MoE layers do not run top-k over router logits: the experts for a token come from a 检查点 table, topk ids = tid2eid . When V4 支持 landed ( 9270, 7bce23cc0 ), expert selection still liv
- [Issue #21180](https://github.com/vllm-project/vllm-ascend/issues/21180) 进行中
  - 中文：【缺陷】: DSV4.1-Flash w4a8 预填充 crashes in aclnnIndex (压缩器.wgate) — vector core exception 507035 on 910B
  - 原文：[Bug]: DSV4.1-Flash w4a8 prefill crashes in aclnnIndex (compressor.wgate) — vector core exception 507035 on 910B
- [PR #21177](https://github.com/vllm-project/vllm-ascend/pull/21177) 进行中
  - 中文：【性能】【DSV4.1】Project 序列 shards before all-gather
  - 原文：[Performance][DSV4.1] Project sequence shards before all-gather
  - 说明：With DeepSeek V4.1 序列 parallelism, each TP rank currently gathers the full hidden states before computing replicated 注意力 input projections. This repeats the same projection work across ranks. This PR computes those projections o
- [PR #21142](https://github.com/vllm-project/vllm-ascend/pull/21142) 进行中
  - 中文：【性能】【DSv4】Shard 预填充 索引器 rows across TP ranks
  - 原文：[Performance][DSv4] Shard prefill indexer rows across TP ranks
  - 说明：What On pure-TP deployments every rank runs the C4 lightning 索引器 over all 预填充 rows with identical (replicated) 索引器 projections — the scoring work is duplicated 张量并行 size -fold. This PR gives each rank a contiguous, co

#### 2026-11-05

- [PR #21095](https://github.com/vllm-project/vllm-ascend/pull/21095) 草稿
  - 中文：【性能】遵循 DSV4.1 multistream token threshold
  - 原文：[Performance] Honor DSV4.1 multistream token threshold
  - 说明：This ports the multi-stream token-threshold behavior from vLLM vllm-project/vllm 65832 to the Ascend-native DeepSeek V4.1 注意力 implementation. The Ascend Q/KV preprocessing path only checks multistream dsv4 dsa 重叠 and does not hon
- [PR #21083](https://github.com/vllm-project/vllm-ascend/pull/21083) 进行中
  - 中文：【杂项】Use unified KV 缓存 allocation interface for deepseek v4 and v4.1
  - 原文：[Misc]Use unified kv cache allocation interface for deepseek v4 and v4.1
  - 说明：【】RFC: 21053 --- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary conditions (e.g. empty input, single/zero element, min/max values, off-by
- [Issue #20550](https://github.com/vllm-project/vllm-ascend/issues/20550) 已关闭
  - 中文：【缺陷】: DeepSeek V4.1 Flash produces corrupted output when `--block-size` is omitted
  - 原文：[Bug]: DeepSeek V4.1 Flash produces corrupted output when `--block-size` is omitted
  - 说明：Environment - Hardware: Atlas 800 A2, 8 NPUs per node. - Model: DeepSeek V4.1 Flash, Ascend 量化. - Deployment: 2 预填充 nodes + 2 解码 nodes; each node runs TP4 × DP2 with expert parallelism. DSpark 投机解码 uses 5 d
- [PR #21034](https://github.com/vllm-project/vllm-ascend/pull/21034) 进行中
  - 中文：【持续集成】新增 DeepSeek-v4 测试用例
  - 原文：[CI] Add DeepSeek-v4 test case
  - 说明：【】新增 DeepSeek-v4 测试用例 No by running the 测试用例 --- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary conditions (e.g. empty input,
- [PR #17167](https://github.com/vllm-project/vllm-ascend/pull/17167) 已关闭
  - 中文：【重构】【KV 缓存】Carry DSA block geometry in KVCacheSpec
  - 原文：[Refactor][KV Cache] Carry DSA block geometry in KVCacheSpec
  - 说明：DeepSeek V4 KV caches have three related block sizes: - the manager block size in 调度器-token units; - the logical block size consumed by 内核 and 元数据 builders; - the number of rows physically stored in one 缓存 page. This PR m

#### 2026-11-04

- [PR #20916](https://github.com/vllm-project/vllm-ascend/pull/20916) 进行中
  - 中文：【修复】【DSpark】初始化 num_moe_layers for dynamic EPLB detection
  - 原文：[BugFix][DSpark] Initialize num_moe_layers for dynamic EPLB detection
  - 说明：Fixes DSpark DeepSeek V4 dynamic EPLB startup failure. DSparkDeepseekV4ForCausalLM.set moe parameters() collects the MoE layers into moe layers , but did not populate num moe layers . vLLM identifies MoE models only when num moe layers 0 ;
- [PR #20915](https://github.com/vllm-project/vllm-ascend/pull/20915) 进行中
  - 中文：【修复】【DSpark】初始化 num_moe_layers for dynamic EPLB detection
  - 原文：[BugFix][DSpark] Initialize num_moe_layers for dynamic EPLB detection
  - 说明：Fixes DSpark DeepSeek V4 dynamic EPLB startup failure. DSparkDeepseekV4ForCausalLM.set moe parameters() collects the MoE layers into moe layers , but did not populate num moe layers . vLLM identifies MoE models only when num moe layers 0 ;

#### 2026-11-03

- [PR #20789](https://github.com/vllm-project/vllm-ascend/pull/20789) 进行中
  - 中文：【功能】对齐 adaptive verification interface and 启用 online estimation for dsv4/glm53
  - 原文：[Feature] Align adaptive verification interface and enable online estimation for dsv4/glm53
  - 说明：【】TBD. N/A by ci --- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary conditions (e.g. empty input, single/zero element, min/max values, of
- [PR #20788](https://github.com/vllm-project/vllm-ascend/pull/20788) 草稿
  - 中文：【修复】【KV Transfer】禁用 compression-triggered 预填充 truncation in hybrid connector
  - 原文：[BugFix][KV Transfer] Disable compression-triggered prefill truncation in hybrid connector
  - 说明：MooncakeHybridConnector currently enables prompt truncation whenever the model 配置 has compress ratios . For a DeepSeek V4-family prompt ending in <think , a remote-解码 request consequently drops that marker before the P-side sample.
- [PR #20757](https://github.com/vllm-project/vllm-ascend/pull/20757) 进行中
  - 中文：【测试】新增 KV pool hit watch to PR-level e2e cases
  - 原文：[Test] Add KV pool hit watch to PR-level e2e cases
  - 说明：Upgrade six four-card DSV4/DSV4.1 e2e cases from connector smoke tests to real KV pool hit watching. - 新增 tests/e2e/pull request/kv pool watch.py with a 共享 R1-R5 hit 序列: - R1 cold write - R2/R3 hit - R4 disjoint-prompt isolation
- [PR #19926](https://github.com/vllm-project/vllm-ascend/pull/19926) 已合并
  - 中文：【性能】【DSv4.1】【no piecewise】Trim the last KV-source layer in decoder replay
  - 原文： [Performance][DSv4.1][no piecewise] Trim the last KV-source layer in decoder replay
  - 说明：Follow In decoder replay steps, the last KV-source layer (layer 20 on DSV4.1-Flash) still ran on every row, though for the trimmed rows only its KV (SWA, compressed, index K) is read. Its 索引器 scoring and top-k, wo, 稀疏 MLA, and MoE f
- [PR #20667](https://github.com/vllm-project/vllm-ascend/pull/20667) 已合并
  - 中文：【修复】【Platform】Accept int8/mxfp8 kv-缓存-dtype on the KV_CACHE_DTYPES mirror list
  - 原文：[BugFix][Platform] Accept int8/mxfp8 kv-cache-dtype on the KV_CACHE_DTYPES mirror list
  - 说明：vllm serve ... --kv-缓存-dtype mxfp8 (C8-MXFP KV 缓存, A5 QFA path) 鈥?and --kv-缓存-dtype int8 (DeepSeek V4 MLA) on current vLLM main 鈥?aborted at startup with: Root cause: current vLLM main gates CacheConfig.缓存 dtype on the mutable v
- [PR #20729](https://github.com/vllm-project/vllm-ascend/pull/20729) 进行中
  - 中文：【Draft】修复 the 精度 issue in dsv4.1
  - 原文：[Draft]Fix the accuracy issue in dsv4.1
  - 说明：【】--- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary conditions (e.g. empty input, single/zero element, min/max values, off-by-one, seque
- [PR #20727](https://github.com/vllm-project/vllm-ascend/pull/20727) 进行中
  - 中文：【性能】【DSv4.1】Shard the Engram wkv projection across TP ranks
  - 原文：[Performance][DSv4.1] Shard the Engram wkv projection across TP ranks
  - 说明：Port of upstream vLLM PR vllm-project/vllm 58678 to vLLM Ascend. Without 序列 parallelism, every TP rank holds every token, so the Engram wkv projection (a ReplicatedLinear , (max ngram size - 1) n heads head dim - (hc mult + 1) hidden
- [PR #18642](https://github.com/vllm-project/vllm-ascend/pull/18642) 已合并
  - 中文：[v0.30.0] [BugFix] [Model]通过重量加载器(# 16958)应用DeepSeek-V4注意力槽
  - 原文：[v0.30.0][BugFix][Model] Apply DeepSeek-V4 attention sinks through the weight loader (#16958)
  - 说明：Backport of 16958 to the releases/v0.30.0 branch. DeepSeek-V4 注意力 Sink 加载 used direct copy calls, bypassing the parameter's current 权重 loader . During live/layerwise reload, those writes land on meta parameters instead of ent
- [Issue #20526](https://github.com/vllm-project/vllm-ascend/issues/20526) 已关闭
  - 中文：【缺陷】: Generic MXFP8 loader breaks grouped DeepSeek V4.1 output projection
  - 原文：[Bug]: Generic MXFP8 loader breaks grouped DeepSeek V4.1 output projection
  - 说明：Generic block-FP8 加载 on DeepSeek V4.1 leaves wo a as a 2-D MXFP8 权重 and converts it to NZ despite skip 权重 nz conversion . The output projection calls npu transpose quant batchmatmul with 3-D permutations, causing IndexError: Di

#### 2026-11-02

- [Issue #20610](https://github.com/vllm-project/vllm-ascend/issues/20610) 进行中
  - 中文：【缺陷】: v0.26rc2+mmc部署dsv4-flash-0731性能劣化
  - 原文：[Bug]: v0.26rc2+mmc部署dsv4-flash-0731性能劣化

#### 2026-11-01

- [PR #20538](https://github.com/vllm-project/vllm-ascend/pull/20538) 进行中
  - 中文：【修复】【KVPool】Request lazy store init for 稀疏-索引器 models
  - 原文：[BugFix][KVPool] Request lazy store init for sparse-indexer models
  - 说明：KVPoolWorker requests lazy init from the storage backend only for compressed models (use compress, DSV4 compress ratios) — the deferral introduced for that family in 9771. 稀疏-索引器 models (use 稀疏, e.g. GLM-5.x SFA) route their ind
- [Issue #20537](https://github.com/vllm-project/vllm-ascend/issues/20537) 进行中
  - 中文：【缺陷】【KV 缓存】prefix_cache_retention_interval is silently ignored on Ascend hybrid KV 缓存 paths
  - 原文：[Bug][KV Cache] prefix_cache_retention_interval is silently ignored on Ascend hybrid KV cache paths
  - 说明：Environment - Atlas 800 A3, 8× Ascend910, vllm-ascend:v0.30.0rc2-a3 , vLLM 0.30.0rc2 - DeepSeek-V4.1-Flash-1017-w8a8-mtp, DP4/TP4/EP16, --block-size 32 , --启用-前缀-缓存 Summary 前缀缓存 保留 interval is never consumed on t
- [Issue #20531](https://github.com/vllm-project/vllm-ascend/issues/20531) 已关闭
  - 中文：【文档】【A3】【DSv4】APC with long 前缀: KV 缓存 capacity and prefix_cache_retention_interval need documenting
  - 原文：[Doc][A3][DSv4] APC with long prefix: KV cache capacity and prefix_cache_retention_interval need documenting
  - 说明：Environment - Hardware: Atlas 800 A3 single node, 8× Ascend910 (16 dies), HBM 65536 MB/die - OS / Driver: npu-smi 26.1.1 - Image: vllm-ascend:v0.30.0rc2-a3 , vLLM 0.30.0rc2 - Model: DeepSeek-V4.1-Flash-1017-w8a8-mtp (W8A8 + INT8 Engram + DS

#### 2026-10-31

- [PR #20496](https://github.com/vllm-project/vllm-ascend/pull/20496) 进行中
  - 中文：【修复】【量化】Exclude DSV4 压缩器 state from 前缀缓存
  - 原文：[BugFix][Quantization] Exclude DSV4 compressor state from prefix caching
  - 说明：Fixes 16270 The DeepSeek V4 压缩器 state 缓存 inherited 前缀 cacheable=true . Its very small block size then lowered the global 前缀-缓存 block size, so short prompts could not accumulate enough tokens to register 缓存 entries. T
- [PR #20484](https://github.com/vllm-project/vllm-ascend/pull/20484) 进行中
  - 中文：【性能】减少 PCP 解码 overhead for DSV4 and DSV4.1
  - 原文：[Performance] Reduce PCP decode overhead for DSV4 and DSV4.1
  - 说明：Skip redundant zeroing of fully overwritten DSV4 O-projection inputs and reuse DSV4.1 PCP RoPE lookups per step. Preserve zero padding/empty outputs and separate global KV/local Q buffers. Lowe
- [Issue #20483](https://github.com/vllm-project/vllm-ascend/issues/20483) 进行中
  - 中文：【缺陷】【MRV1】【Async Scheduling】: Empty sampled-token row (all -1 / discarded) parks a request RUNNING forever — counters/placeholders grow unbounded, no rollback (0.30.0rc2, DeepSeek-V4.1, DSpark)
  - 原文：[Bug]: [MRV1][Async Scheduling] Empty sampled-token row (all -1 / discarded) parks a request RUNNING forever — counters/placeholders grow unbounded, no rollback (0.30.0rc2, DeepSeek-V4.1, DSpark)
  - 说明：【缺陷】【MRV1】【Async Scheduling】Empty sampled-token row (all -1 / discarded) parks a request RUNNING forever: num computed tokens & num output placeholders grow unbounded, no rollback — still present in vLLM-Ascend 0.30.0rc2 (DeepSeek-V4.1, D
- [PR #20479](https://github.com/vllm-project/vllm-ascend/pull/20479) 进行中
  - 中文：【重构】【KV 缓存】移除 DSV4 exclusion from hybrid allocation
  - 原文：[Refactor][KV Cache] Remove DSV4 exclusion from hybrid allocation
  - 说明：Refactor DeepSeek-V4 KV 缓存 allocation so the generic hybrid-allocation path no longer needs a DSV4-specific exclusion. - Determine the DSV4 model from hf 配置.model type == "deepseek v4" instead of probing the compress ratios attribute
- [PR #17200](https://github.com/vllm-project/vllm-ascend/pull/17200) 已合并
  - 中文：【修复】DeepSeek-V4 dummy load and ACL graph 权重 更新
  - 原文：[BugFix] Fix DeepSeek-V4 dummy load and ACL graph weight update
  - 说明：Backport two DeepSeek-V4 fixes onto releases/v0.23.0 . Both are already on main ( 16485 , 15666 ) and are still broken on this release branch. 1. --load-format=dummy initializes Hash MoE gate.tid2eid with all zeros. Dummy profile still runs
- [PR #19125](https://github.com/vllm-project/vllm-ascend/pull/19125) 已合并
  - 中文：【修复】【Platform】Keep the DeepSeek V4 block size the 缓存 is built with
  - 原文：[BugFix][Platform] Keep the DeepSeek V4 block size the cache is built with
  - 说明：DeepSeek-V4 on A5 dies at 缓存-spec construction unless --block-size is passed. Reproduced on A5 (ascend950), DeepSeek-V4-Flash, DP8 + EP, no --block-size : Line references in this description are from vLLM v0.31.0 ( db9527a ) , the versio
- [PR #19007](https://github.com/vllm-project/vllm-ascend/pull/19007) 已合并
  - 中文：【性能】【MRV2】Share 每步 PCP 元数据 across KV-缓存 groups
  - 原文：[Performance][MRV2] Share per-step PCP metadata across KV-cache groups
  - 说明：This PR reduces 注意力 元数据 construction overhead for DeepSeek V4 with model runner v2 and PCP, and extends compatible 优化 to DSpark DSA SWA drafting. Previously, 缓存-group builders independently prepared 元数据 even wh

#### 2026-10-30

- [Issue #20106](https://github.com/vllm-project/vllm-ascend/issues/20106) 已关闭
  - 中文：【缺陷】: DeepSeek-V4 VL square dummy image underestimates the profiling workload
  - 原文：[Bug]: DeepSeek-V4 VL square dummy image underestimates the profiling workload
- [PR #20107](https://github.com/vllm-project/vllm-ascend/pull/20107) 已合并
  - 中文：【修复】【Multimodal】Select worst-case DeepSeek-V4 VL dummy images
  - 原文：[BugFix][Multimodal] Select worst-case DeepSeek-V4 VL dummy images
  - 说明：Fixes 20106. Ports vllm-project/vllm 59373 to Ascend's local DeepSeek-V4 VL preprocessing implementation. Although the upstream 修复 is included in vLLM v0.32.0, Ascend registers its own processing classes and needs the corresponding change.
- [Issue #20363](https://github.com/vllm-project/vllm-ascend/issues/20363) 进行中
  - 中文：【DSV4.1-Flash】【A3】解码 worker crashes with GatherV2 SMMU fault + poison marker under dspark with enforce_eager=False / FULL_DECODE_ONLY graphs
  - 原文：[DSV4.1-Flash][A3] Decode worker crashes with GatherV2 SMMU fault + poison marker under dspark with enforce_eager=False / FULL_DECODE_ONLY graphs
  - 说明：Summary On a DeepSeek-V4.1-Flash W8A8 PD-disaggregated deployment (Ascend A3), the 解码-side worker crashed ~2 minutes into a load test at 1 concurrent user (i.e. minimal load), with an aclrtSynchronizeEvent error 507035. plog shows the f
- [PR #19042](https://github.com/vllm-project/vllm-ascend/pull/19042) 已关闭
  - 中文：【重构】【模型】Revert "恢复 平台默认 索引器 KV dtype for DeepSeek V4"
  - 原文：[Refactor][Model] Revert "Restore platform-default indexer KV dtype for DeepSeek V4"
  - 说明：【重构】【模型】Revert "恢复 平台默认 索引器 KV dtype for DeepSeek V4" Reverts 17635 ( b980a2476dfa259f6112b01ded829b7cfb80d409 ). That commit 新增 get 索引器 k dtype to the DeepSeek V4 索引器: it resolves 索引器 kv dtype=
- [PR #20343](https://github.com/vllm-project/vllm-ascend/pull/20343) 进行中
  - 中文：【v0.30.0】【修复】【KV 缓存】遵循 前缀 保留 on DeepSeek-V4/V4.1 hybrid coordinator
  - 原文：[v0.30.0][BugFix][KV Cache] Honor prefix retention on DeepSeek-V4/V4.1 hybrid coordinator
  - 说明：On DeepSeek-V4/V4.1-Flash PD-分离式预填充 nodes (4x910B3, DP4 TP8), the 前缀-缓存 hit rate collapses to single digits at 64 concurrency with 64K contexts, while staying ~90% at 32 concurrency. Root cause: both the HBM hybrid coo

#### 2026-10-29

- [PR #20257](https://github.com/vllm-project/vllm-ascend/pull/20257) 进行中
  - 中文：【测试】Check v0.23 baseline CI without DeepSeek-V4 changes
  - 原文：[Test] Check v0.23 baseline CI without DeepSeek-V4 changes
  - 说明：This empty PR checks whether the following failures from 17200 also occur without its changes: - DeepSeek-V2-Lite graph logprob mismatch - Llama TP2 base-model output mismatch with fully sharded loras=False Please run the same 测试用例 an
- [Issue #20233](https://github.com/vllm-project/vllm-ascend/issues/20233) 进行中
  - 中文：【缺陷】: A5 two-node DeepSeek-V4 dummy startup fails at the first MC2 Dispatch (quant_mode=4, error 507035)
  - 原文：[Bug]: A5 two-node DeepSeek-V4 dummy startup fails at the first MC2 Dispatch (quant_mode=4, error 507035)
- [Issue #20222](https://github.com/vllm-project/vllm-ascend/issues/20222) 进行中
  - 中文：【缺陷】: 950PR 4卡混部 dsv4.1 pcp4ep4，单curl 解码开始和结束存在共2ms tensormove异常开销
  - 原文：[Bug]: 950PR 4卡混部 dsv4.1 pcp4ep4，单curl decode开始和结束存在共2ms tensormove异常开销
- [PR #19901](https://github.com/vllm-project/vllm-ascend/pull/19901) 已关闭
  - 中文：【性能】【DSv4.1】Trim the last KV-source layer in decoder replay
  - 原文：[Perf][DSv4.1] Trim the last KV-source layer in decoder replay
  - 说明：Follow In decoder replay steps, the last KV-source layer (layer 20 on DSV4.1-Flash) still ran on every row, though for the trimmed rows only its KV (SWA, compressed, index K) is read. Its 索引器 scoring and top-k, 稀疏 MLA, wo and MoE fe
- [PR #20193](https://github.com/vllm-project/vllm-ascend/pull/20193) 进行中
  - 中文：【修复】【注意力】Derive max_seqlen_q from device query_start_loc in DSv4.1 元数据 tasks
  - 原文：[BugFix][Attention] Derive max_seqlen_q from device query_start_loc in DSv4.1 metadata tasks
  - 说明：Summary - 修复 NPU 内核 挂起 (\^GclnnSparseFlashMlaMetadata\ / \^GclnnQuantLightningIndexerV2Metadata\) on the DeepSeek-V4.1 注意力 path: the deferred SMLA/QLI 元数据 closures captured the host-side \common.max query len\ at task crea
- [PR #20185](https://github.com/vllm-project/vllm-ascend/pull/20185) 进行中
  - 中文：【修复】Make DeepSeek V4 RoPE meta initialization safe
  - 原文：[BugFix] Make DeepSeek V4 RoPE meta initialization safe
  - 说明：When DeepSeek V4/V4.1 is started with --mm-encoder-only , vLLM constructs the skipped language-model component under a meta-device context. ComplexExpRotaryEmbedding previously created inv freq on the active meta device while explicitly cre
- [PR #14444](https://github.com/vllm-project/vllm-ascend/pull/14444) 已关闭
  - 中文：【文档】【950DT】新增 Ascend 950DT DeepSeek-V4 deployment guides
  - 原文：[Doc][950DT] add Ascend 950DT DeepSeek-V4 deployment guides
  - 说明：Port the DeepSeek-V4 Flash and Pro deployment documentation from releases/v0.23.0 to main while preserving main-specific MkDocs, DSpark, and 配置 更新. - vLLM version: v0.27.1 - vLL

#### 2026-10-28

- [PR #20145](https://github.com/vllm-project/vllm-ascend/pull/20145) 进行中
  - 中文：【功能】opt-in TP sharding for DeepSeek V4 解码 索引器
  - 原文：[Feature] Add opt-in TP sharding for DeepSeek V4 decode indexer
  - 说明：DeepSeek V4's C4 解码 索引器 evaluates replicated query rows across tensor-parallel ranks. This PR adds opt-in request-level sharding to distribute QLI computation across the TP group. The design is inspired by vLLM 58536. The implementa
- [PR #20124](https://github.com/vllm-project/vllm-ascend/pull/20124) 草稿
  - 中文：【性能】【DSV4.1】Use single-token decoder replay for DeepSeek-V4.1 预填充
  - 原文：[Performance][DSV4.1] Use single-token decoder replay for DeepSeek-V4.1 prefill
  - 说明：【vllm-project/vllm 62817】Summary Adapt the 预填充 decoder replay 优化 from to Ascend. Replay only the last token for 预填充 chunks sufficiently far from the prompt end, reducing decoder computation while preserving the replay win
- [PR #20088](https://github.com/vllm-project/vllm-ascend/pull/20088) 草稿
  - 中文：【测试】新增 A5 PR E2E coverage for DeepSeek V4 and V4.1 Flash
  - 原文：[Test] Add A5 PR E2E coverage for DeepSeek V4 and V4.1 Flash
  - 说明：新增 ten PR E2E cases for the complete DeepSeek V4 Flash and V4.1 Flash 检查点 on Ascend A5. Each case uses Model Runner V2 and four NPUs. Keep one short 修复-output 回退 per model; the other cases verify functional behavior with
- [PR #20075](https://github.com/vllm-project/vllm-ascend/pull/20075) 草稿
  - 中文：【功能】【MRV2】Preserve SP token shards across pipeline stages
  - 原文：[Feature][MRV2] Preserve SP token shards across pipeline stages
  - 说明：Preserve 序列-parallel main activations across Model Runner V2 pipeline boundaries for DeepSeek-V4, Kimi-K3 AttnRes, and MiniMax-M3. Each TP rank sends its token shard to the matching rank in the next stage instead of transmitting repli
- [PR #20059](https://github.com/vllm-project/vllm-ascend/pull/20059) 进行中
  - 中文：【修复】Stream long DSML 工具调用 parameter values for DeepSeek V4/V4.1
  - 原文：[BugFix] Stream long DSML tool-call parameter values for DeepSeek V4/V4.1
  - 说明：DeepSeek V4 / V4.1 emit 工具调用 arguments as DSML parameters and configure arg structural chars = {' '} . ParserEngine. compute arg delta() drops every streaming delta that shares no character with that set, and the DSML converter only re

#### 2026-10-26

- [PR #18891](https://github.com/vllm-project/vllm-ascend/pull/18891) 已合并
  - 中文：【修复】【Platform】Declare the KV 缓存 dtypes DeepSeek V4 can store
  - 原文：[BugFix][Platform] Declare the KV cache dtypes DeepSeek V4 can store
  - 说明：A DeepSeek V4 launch on A5 with no --kv-缓存-dtype used to die inside the operator: aclnnMixedQuantSparseFlashMla: Parameter ori kv head dimension ... value 512. It should be 608. A5 picks the KV layout from the literal 缓存 配置.缓存
- [PR #19868](https://github.com/vllm-project/vllm-ascend/pull/19868) 草稿
  - 中文：【功能】【MRV2】Integrate 共享 dynamic PP 预填充 运行时 on Ascend
  - 原文：[Feature][MRV2] Integrate shared dynamic PP prefill runtime on Ascend
  - 说明：Connect the Ascend MRv2 worker and DSV4 model to the 共享 buffered/dynamic PP 运行时 in vllm-project/vllm 63745 . Load adjacent layer replicas, execute the per-batch layer range, preserve its MoE dispatch order, and finish device timing
- [PR #19860](https://github.com/vllm-project/vllm-ascend/pull/19860) 已关闭
  - 中文：【修复】【Platform】Declare the KV 缓存 dtypes DeepSeek V4 can store
  - 原文：[BugFix][Platform] Declare the KV cache dtypes DeepSeek V4 can store
  - 说明：Re-opened from 18891, whose CI kept failing on runner-side infrastructure: a2-1 card (part 5-7) died in six minutes for two runs in a row cloning the csrc/third party/catlass submodule ( Unable to access Could not resolve host ), after an e
- [PR #19850](https://github.com/vllm-project/vllm-ascend/pull/19850) 进行中
  - 中文：【修复】【TurboQuant】禁用 default boundary skips for DeepSeek V4
  - 原文：[BugFix][TurboQuant] Disable default boundary skips for DeepSeek V4
  - 说明：修复 a mismatch between upstream TurboQuant's default boundary-layer policy and the current Ascend DeepSeek V4 缓存 implementation. When using --kv-缓存-dtype turboquant 4bit nc , upstream EngineArgs.create engine 配置() calls TurboQuant
- [PR #19842](https://github.com/vllm-project/vllm-ascend/pull/19842) 草稿
  - 中文：【Feat】【模型】支持 DSv4 block size 16 on A3
  - 原文：[Feat][Model] Support DSv4 block size 16 on A3
  - 说明：启用 DSv4 --block-size 16 on A3 through the complete 配置 and 缓存-layout path. - Preserve an explicit 16 in refresh block size(). Previously, the DSv4 allowlist silently replaced it with 32, so adding the layout alone did not e
- [Issue #17347](https://github.com/vllm-project/vllm-ascend/issues/17347) 已关闭
  - 中文：【功能】: int8 KV 缓存 支持 for GLM-5.3-Flash / DeepSeek-V4-style hybrid models — 解码 path fails at aclnnSparseFlashAttention (EZ1009) while 预填充 path already works
  - 原文：[Feature]: int8 KV cache support for GLM-5.3-Flash / DeepSeek-V4-style hybrid models — decode path fails at aclnnSparseFlashAttention (EZ1009) while prefill path already works
  - 说明：The 特性 we need : end-to-end 支持 for --kv-缓存-dtype int8 on GLM-5.3-Flash ( Glm5NextForConditionalGeneration , w8a8, hybrid architecture: MLA + linear-注意力/Mamba + compressed-索引器 稀疏 注意力 (DSA-style), with an MTP
- [Issue #19810](https://github.com/vllm-project/vllm-ascend/issues/19810) 进行中
  - 中文：【缺陷】: aclnnSparseAttnSharedkvMetadataGetWorkspaceSize takes abnormally long in vLLM-Ascend 0.26
  - 原文：[Bug]: aclnnSparseAttnSharedkvMetadataGetWorkspaceSize takes abnormally long in vLLM-Ascend 0.26

#### 2026-10-25

- [Issue #19722](https://github.com/vllm-project/vllm-ascend/issues/19722) 进行中
  - 中文：【缺陷】: Vector core exception (507035) in grouped_matmul_swiglu_quant_v2 kills all TP8 workers under concurrent long-prompt load (Atlas A3, DeepSeek-V4.1-Flash)
  - 原文：[Bug]: Vector core exception (507035) in grouped_matmul_swiglu_quant_v2 kills all TP8 workers under concurrent long-prompt load (Atlas A3, DeepSeek-V4.1-Flash)
  - 说明：Environment - vllm-ascend : quay.io/ascend/vllm-ascend:deepseek-v4.1-flash-a3 (vLLM 0.27.1+empty) - CANN : 9.1.0 (built-in OPP) - Platform : Atlas 800I A3, 8×910C (16 logical devices), dual TP8 instances - Model : DeepSeek-V4.1-Flash W4A8 (

#### 2026-10-24

- [PR #19710](https://github.com/vllm-project/vllm-ascend/pull/19710) 已关闭
  - 中文：【文档】新增 A5 Docker commands for DeepSeek V4
  - 原文：[Doc] add A5 Docker commands for DeepSeek V4
  - 说明：This is the main -branch counterpart of 19709. The DeepSeek-V4-Pro and DeepSeek-V4-Flash tutorials list 950PR/950DT as supported hardware, but their Docker image installation sections only provide startup commands for the A2 and A3 series.
- [PR #19709](https://github.com/vllm-project/vllm-ascend/pull/19709) 已关闭
  - 中文：【文档】新增 A5 Docker commands for DeepSeek V4
  - 原文：[Doc] add A5 Docker commands for DeepSeek V4
  - 说明：The DeepSeek-V4-Pro and DeepSeek-V4-Flash tutorials list 950PR/950DT as supported hardware, but their Docker image installation sections only provide startup commands for the A2 and A3 series. This PR adds a 950PR&950DT Products tab to both
- [PR #14308](https://github.com/vllm-project/vllm-ascend/pull/14308) 已关闭
  - 中文：【修复】mask premature eos during in_reasoning for DeepSeek-V4
  - 原文：[Bugfix]mask premature eos during in_reasoning for DeepSeek-V4
  - 说明：Fixes 14031 This PR fixes the DeepSeek-V4 premature EOS issue on Ascend NPU during reasoning. When reasoning has started with <think but has not reached </think , EOS token id 1 can be sampled unexpectedly and terminate generation early. Th
- [PR #19676](https://github.com/vllm-project/vllm-ascend/pull/19676) 草稿
  - 中文：【性能】【KVPool】Compact duplicate DSV4 group-0 Memcache transfers
  - 原文：[Perf][KVPool] Compact duplicate DSV4 group-0 Memcache transfers
  - 说明：Non-layerwise Memcache transfers for the validated DeepSeek-V4-Pro group-0 layout serialize the 索引器 data and scale twice: as two separate spans and as one enclosing span at the same address. This adds transfers and packed object bytes t

#### 2026-10-23

- [PR #19675](https://github.com/vllm-project/vllm-ascend/pull/19675) 进行中
  - 中文：【v0.30.0】【修复】【量化】ModelSlim DeepSeek-V4 wo_a grouped MXFP8 layout
  - 原文：[v0.30.0][BugFix][Quantization] Fix ModelSlim DeepSeek-V4 wo_a grouped MXFP8 layout
  - 说明：Backport of 19674 for releases/v0.30.0 . ModelSlim DeepSeek-V4 检查点 can quantize wo a as W8A8 MXFP8 even when the 检查点 is otherwise W4A4. The generic MXFP8 loader leaves its 权重 as a 2D matrix, while 注意力 calls npu tran
- [PR #19673](https://github.com/vllm-project/vllm-ascend/pull/19673) 已关闭
  - 中文：【v0.30.0】【修复】【量化】ModelSlim DeepSeek-V4 wo_a grouped MXFP8 layout
  - 原文：[v0.30.0][BugFix][Quantization] Fix ModelSlim DeepSeek-V4 wo_a grouped MXFP8 layout
  - 说明：Backport of 19672 for releases/v0.30.0 . DeepSeek-V4 ModelSlim 检查点 can quantize wo a as W8A8 MXFP8 even when the 检查点 is otherwise W4A4. The generic MXFP8 loader leaves its 权重 as a 2D matrix, while DSV4 注意力 calls npu
- [PR #19674](https://github.com/vllm-project/vllm-ascend/pull/19674) 进行中
  - 中文：【修复】【量化】ModelSlim DeepSeek-V4 wo_a grouped MXFP8 layout
  - 原文：[BugFix][Quantization] Fix ModelSlim DeepSeek-V4 wo_a grouped MXFP8 layout
  - 说明：ModelSlim DeepSeek-V4 检查点 can quantize wo a as W8A8 MXFP8 even when the 检查点 is otherwise W4A4. The generic MXFP8 loader leaves its 权重 as a 2D matrix, while 注意力 calls npu transpose quant batchmatmul with perm x2=(0,
- [PR #19672](https://github.com/vllm-project/vllm-ascend/pull/19672) 已关闭
  - 中文：【修复】【量化】ModelSlim DeepSeek-V4 wo_a grouped MXFP8 layout
  - 原文：[BugFix][Quantization] Fix ModelSlim DeepSeek-V4 wo_a grouped MXFP8 layout
  - 说明：DeepSeek-V4 ModelSlim 检查点 can quantize wo a as W8A8 MXFP8 even when the 检查点 is otherwise W4A4. The generic MXFP8 loader leaves its 权重 as a 2D matrix, while DSV4 注意力 calls npu transpose quant batchmatmul with perm x2
- [Issue #19658](https://github.com/vllm-project/vllm-ascend/issues/19658) 进行中
  - 中文：[Bug]: 4机A2 PD分离部署的DSV4.1 1017在调用responses接口时出现D节点推理超时挂死问题
- [Issue #19647](https://github.com/vllm-project/vllm-ascend/issues/19647) 进行中
  - 中文：【缺陷】: MRV2 KV initialization fails on single-slot wrapped 缓存 components
  - 原文：[Bug]: MRV2 KV initialization fails on single-slot wrapped cache components
  - 说明：【KV 缓存】【(component a, component b)】DeepseekV41CacheLayer.bind KV 缓存() stores a 缓存 binding in a single-slot outer list: self.KV 缓存 = . When the binding itself is a tuple of Tensor components, the resulting shape is . AscendV2KV
- [PR #16141](https://github.com/vllm-project/vllm-ascend/pull/16141) 已关闭
  - 中文：【WIP】【功能】【Core】迁移 DeepSeekV4 KV 缓存 planning to KVCacheConfigBuilder (vLLM PR #53558)
  - 原文：[WIP][Feature][Core] Migrate DeepSeekV4 KV cache planning to KVCacheConfigBuilder (vLLM PR #53558)
  - 说明：vLLM PR 53558 makes KVCacheConfigBuilder pluggable (platform model default) and moves KV 缓存 planning from KV 缓存 utils.py to vllm.v1.core.KV 缓存 planning . This PR adapts vllm-ascend and retires the DeepSeekV4 monkey-patches in favou
- [PR #19580](https://github.com/vllm-project/vllm-ascend/pull/19580) 进行中
  - 中文：【修复】【MRV2】Unwrap single-slot KV caches before block zeroing
  - 原文：[BugFix][MRV2] Unwrap single-slot KV caches before block zeroing
  - 说明：【(K, scale)】修复 the MRV2 KV block-zeroer startup 回退 exposed by the empty-component guard in 18931. DeepseekV41CacheLayer.bind KV 缓存() stores a single-slot wrapper such as . The zeroer treats the inner tuple as a Tensor and raise

#### 2026-10-22

- [PR #19507](https://github.com/vllm-project/vllm-ascend/pull/19507) 进行中
  - 中文：feat(deepseek-v41): integrate native MXFP8 Engram 卸载 and 重叠
  - 原文：feat(deepseek-v41): integrate native MXFP8 Engram offload and overlap
  - 说明：Port the final behavior of local PR24, PR60 and PR70 onto the current ds41-wheel and upstream Engram architecture. 新增 an opt-in row-sharded ElasticBuffer backend with native E4M3/E8M0 检查点 加载, tensor-scale ABI checks, startup pr
- [PR #19074](https://github.com/vllm-project/vllm-ascend/pull/19074) 已合并
  - 中文：【持续集成】新增 DSV4.1 PCP DSpark 夜间 coverage
  - 原文：[CI] Add DSV4.1 PCP DSpark nightly coverage
  - 说明：新增 a single-node A3-560T 夜间用例 for DeepSeek-V4.1-Flash W8A8 + DSpark + PCP, covering GPQA Diamond 精度. Register the case and 新增 it to the 夜间 documentation. Runner /dev/shm 配置: ascend-gha-runners/docs 298. Does
- [PR #19220](https://github.com/vllm-project/vllm-ascend/pull/19220) 已合并
  - 中文：【功能】DSpark bidirectional SparseFlashMla
  - 原文：[Feature] Add DSpark bidirectional SparseFlashMla
  - 说明：Adds bidirectional SparseFlashMla 注意力 for DSpark 投机解码 on DeepSeek-V4. This is a rebase of 15061 by @wangbj127 (original author — full credit for the design and implementation) onto current main. The original branch was

#### 2026-10-21

- [Issue #19382](https://github.com/vllm-project/vllm-ascend/issues/19382) 进行中
  - 中文：夜间 Daily test failure on 2026-10-21 16:00 - please check
  - 原文：Nightly Daily test failure on 2026-10-21 16:00 - please check
  - 说明：The 夜间 Daily test for vllm-ascend reported failures at 16:00 on 2026-10-21. Failed on: a3-4 card-(part 2-5) Failed 测试用例: - test deepseek v4 w4a8 tp4 basic greedy — psutil.NoSuchProcess: process no longer exists (pid=48828) Failed
- [PR #19190](https://github.com/vllm-project/vllm-ascend/pull/19190) 已合并
  - 中文：【功能】【DSA】Share O-projection buffers across DeepSeek layers
  - 原文：[Feature][DSA] Share O-projection buffers across DeepSeek layers
  - 说明：This PR reduces resident OTP 通信-buffer 显存 for DeepSeek V4 and V4.1 by sharing address-stable O-projection exchange scratch across sequential DSA layers. It reserves the 共享 buffers before KV-缓存 profiling and sizes them
- [PR #19365](https://github.com/vllm-project/vllm-ascend/pull/19365) 草稿
  - 中文：【重构】【MoE】Preserve A3 共享专家 clamp with official DequantSwiGLU
  - 原文：[Refactor][MoE] Preserve A3 shared expert clamp with official DequantSwiGLU
  - 说明：Replace the custom dequant-SwiGLU-quant call for clipped A3 INT8 共享 experts with torch npu.npu dequant swiglu quant , while retaining DeepSeek V4's limit semantics. This is an independent PR based on main 4f3648abd258a5cbdd1a9ae34165a85
- [PR #19355](https://github.com/vllm-project/vllm-ascend/pull/19355) 进行中
  - 中文：【性能】【MRV2】Skip CPU length synchronization for DeepSeek V4
  - 原文：[Performance][MRV2] Skip CPU length synchronization for DeepSeek V4
  - 说明：MRV2 exempts DeepSeek V4.1 from copying rejection-corrected token counts back to the CPU and waiting for that copy on the next step, but V4 takes the synchronous path even though its 注意力 uses device 序列 lengths. This can interrup
- [PR #19305](https://github.com/vllm-project/vllm-ascend/pull/19305) 草稿
  - 中文：【性能】重叠 mHC pre/post with Sinkhorn for the A2 preMix path
  - 原文：[Performance] Overlap mHC pre/post with Sinkhorn for the A2 preMix path
  - 说明：Summary The Atlas A2 (non-arch35) preMix path of npu hc pre v3 is ~1.5x slower than the non-premix path at large token counts. DSV4.1 calls hc pre twice per decoder layer and both calls use the delayed pre mix , so this is on the 预填充 ho

#### 2026-10-20

- [PR #19240](https://github.com/vllm-project/vllm-ascend/pull/19240) 已合并
  - 中文：【修复】Unify DeepSeek V4 张量并行 limits across hardware
  - 原文：[BugFix] Unify DeepSeek V4 tensor parallel limits across hardware
  - 说明：A5 now supports tensor parallelism. 移除 the hardware-specific DeepSeek V4 TP policy introduced in 18418 and use the same model-specific limits on all hardware families: - DeepSeek V4 Flash and V4.1 Flash: TP <= 8. - DeepSeek V4 Pro: TP <
- [PR #19203](https://github.com/vllm-project/vllm-ascend/pull/19203) 已合并
  - 中文：【修复】【v0.30.0】Validate DeepSeek V4 张量并行 limits
  - 原文：[BugFix][v0.30.0] Validate DeepSeek V4 tensor parallel limits
  - 说明：Validate DeepSeek V4 张量并行 limits on releases/v0.30.0 . Adapt 18418 to use the same model-specific limits across all hardware families, including A5 now that it supports tensor parallelism. - DeepSeek V4 Flash and V4.1 Flash: TP <
- [PR #19265](https://github.com/vllm-project/vllm-ascend/pull/19265) 进行中
  - 中文：【Feat】【v0.30.0】新增 DSV4 CWS and MRV2 前缀 检查点
  - 原文：[Feat][v0.30.0] Add DSV4 CWS and MRV2 prefix checkpoints
  - 说明：DeepSeek-V4 预填充 currently reserves 压缩器-state pages for the in-flight chunk across layers, although only a bounded incomplete tail must persist. This ports the 共享 压缩器 workspace (CWS) from 15452 to vLLM 0.30 and adds pre
- [PR #19199](https://github.com/vllm-project/vllm-ascend/pull/19199) 已合并
  - 中文：【修复】【MoE】【v0.30.0】CANN MegaMoE 权重 preparation for DeepSeekV4 W4A8 MXFP
  - 原文：[BugFix][MoE][v0.30.0] Fix CANN MegaMoE weight preparation for DeepSeekV4 W4A8 MXFP
  - 说明：Port 18684 to releases/v0.30.0 . Refs 17452. In releases/v0.30.0 , the DeepSeek W4A8 MXFP process 权重 after 加载() override preserves the EPLB-specific byte normalization but applies the non-MegaMoE transformation for all other cases

#### 2026-10-19

- [PR #18684](https://github.com/vllm-project/vllm-ascend/pull/18684) 已合并
  - 中文：【修复】【MoE】CANN MegaMoE 权重 preparation for DeepSeekV4 W4A8 MXFP
  - 原文：[BugFix][MoE] Fix CANN MegaMoE weight preparation for DeepSeekV4 W4A8 MXFP
  - 说明：Refs 17452 What this PR does / why? When CANN MegaMoE is 启用 for DeepSeek W4A8 MXFP MoE, startup fails because AscendW4A8MXFPDSDynamicFusedMoEMethod overrides the common process 权重 after 加载() implementation. The DeepSeek-speci
- [PR #19188](https://github.com/vllm-project/vllm-ascend/pull/19188) 已关闭
  - 中文：【Feat】【DSA】Share O-projection buffers across DeepSeek layers
  - 原文：[Feat][DSA] Share O-projection buffers across DeepSeek layers
  - 说明：This PR reduces resident OTP 通信-buffer 显存 for DeepSeek V4 and V4.1 by sharing address-stable O-projection exchange scratch across sequential DSA layers. It reserves the 共享 buffers before KV-缓存 profiling and sizes them
- [Issue #10058](https://github.com/vllm-project/vllm-ascend/issues/10058) 已关闭
  - 中文：【缺陷】: 0.20.2rc1 DeepSeek V4 Flash on A2 16xNPU. the serve mtp==3 acceptence is very low.
  - 原文：[Bug]: 0.20.2rc1 DeepSeek V4 Flash on A2 16xNPU. the serve mtp==3 acceptence is very low.
- [Issue #19139](https://github.com/vllm-project/vllm-ascend/issues/19139) 进行中
  - 中文：【文档】对齐 A2/A3 inference guides with vLLM V1 调度器 defaults: 移除 redundant --启用-chunked-预填充 on A2, and recommend ascend-vllm 调度器 for long-run stability on A3
  - 原文：[Docs] Align A2/A3 inference guides with vLLM V1 scheduler defaults: remove redundant --enable-chunked-prefill on A2, and recommend ascend-vllm scheduler for long-run stability on A3
  - 说明：In the official tutorial docs/source/tutorials/models/DeepSeek-V4-Flash.md (branch releases/v0.18.0 ), the A2 (Atlas 800I A2) inference script explicitly passes --启用-chunked-预填充 , while the A3 (Atlas 800 A3) script does not . This i
- [Issue #19137](https://github.com/vllm-project/vllm-ascend/issues/19137) 进行中
  - 中文：分层与稀疏KV缓存卸载可以使用deepseekV4系列的么
  - 说明：📚 The doc issue 分层与稀疏KV缓存卸载可以使用deepseekV4系列的么 Suggest a potential alternative/修复 No response
- [PR #19034](https://github.com/vllm-project/vllm-ascend/pull/19034) 已合并
  - 中文：【修复】【PCP】Size DSV4.1 replay 元数据 for local segments
  - 原文：[BugFix][PCP] Size DSV4.1 replay metadata for local segments
  - 说明：PCP splits a 预填充 request into front/back local segments, so a rank's local batch can contain up to twice max num seqs entries. DSV4.1 Engram gathers replay 元数据 using these local entries but allocates its CPU/GPU replay buffer for o
- [Issue #19116](https://github.com/vllm-project/vllm-ascend/issues/19116) 进行中
  - 中文：【缺陷】: 投机 execution must be 启用 on all DeepSeek-V4-Flash-0731-W8A8 PD nodes. In some scenarios with high concurrency, enabling dspark will significantly increase the TTFT, in some cases even increasing it by several times.
  - 原文：[Bug]: Speculative execution must be enabled on all DeepSeek-V4-Flash-0731-W8A8 PD nodes. In some scenarios with high concurrency, enabling dspark will significantly increase the TTFT, in some cases even increasing it by several times.

#### 2026-10-17

- [PR #18808](https://github.com/vllm-project/vllm-ascend/pull/18808) 已合并
  - 中文：【v0.30.0】【注意力】【功能】Integrate mixed_quant_sparse_flash_mla op for DeepSeek-V4 FP8 KV path
  - 原文：[v0.30.0][Attention][Feature] Integrate mixed_quant_sparse_flash_mla op for DeepSeek-V4 FP8 KV path
  - 说明：Backport Unify the DSV4 稀疏 注意力 path on the MixedQuantSparseFlashMla operator family from cann ops transformer, replacing the previous in-tree custom operators: 移除 the in-tree KvCompressEpilog 自定义算子 (csrc/注意力/kv compr

#### 2026-10-16

- [PR #18967](https://github.com/vllm-project/vllm-ascend/pull/18967) 进行中
  - 中文：【功能】【SpecDecode】启用 ACL-graph capture for the DSpark draft model (opt-in)
  - 原文：[Feature][SpecDecode] Enable ACL-graph capture for the DSpark draft model (opt-in)
  - 说明：The DSpark draft model (DeepSeek V4.x MTP heads) currently runs eager-only : AscendDSparkProposer. init hard-disables 图模式 ( self.use cuda graph = False , "DSpark runs eager only"). On DeepSeek-V4.1-Flash this costs ~20% of end-to-end
- [PR #18959](https://github.com/vllm-project/vllm-ascend/pull/18959) 进行中
  - 中文：【修复】【模型】Declare DSV4 压缩器 state 缓存 blocks in token units
  - 原文：[BugFix][Model] Declare DSV4 compressor state cache blocks in token units
  - 说明：AscendCompressorStateCache.get KV 缓存 spec reported its slot count (2/8 state slots) in the spec's block size field, which every 缓存-manager consumer reads as a token count — one slot holds one compress ratio-token interval. The engine-
- [PR #18884](https://github.com/vllm-project/vllm-ascend/pull/18884) 已合并
  - 中文：【重构】【Patch】移除 obsolete DeepSeek V4 vision converter
  - 原文：[Refactor][Patch] Remove obsolete DeepSeek V4 vision converter
  - 说明：vLLM v0.31 natively routes DeepSeek-V4 vision 检查点 to DeepseekV4ForConditionalGeneration and sets the multimodal 前缀 元数据 必填 by the Ascend path. The Ascend compatibility converter therefore duplicates upstream behavior a

#### 2026-10-15

- [PR #18494](https://github.com/vllm-project/vllm-ascend/pull/18494) 已关闭
  - 中文：[BugFix] [DSA]拒绝A5上DeepSeek V4的不受支持的KV缓存数据类型
  - 原文：[BugFix][DSA] Reject unsupported KV cache dtypes for DeepSeek V4 on A5
  - 说明：【修复】【DSA】Reject unsupported KV 缓存 dtypes for DeepSeek V4 on A5 The A5 DeepSeek V4 稀疏-注意力 path builds a single KV 缓存 implementation, kv compress epilog , whose binding accepts only E5M2/E4M3. Its bf16 counterpart needs s
- [PR #15317](https://github.com/vllm-project/vllm-ascend/pull/15317) 已关闭
  - 中文：【修复】【Frontend】Handle DeepSeek V4 trailing system messages
  - 原文：[BugFix][Frontend] Handle DeepSeek V4 trailing system messages
  - 说明：Backport the DeepSeek V4 trailing-system prompt-rendering 修复 from for the vLLM version currently supported by vLLM-Ascend. For a message 序列 such as system - user - system , the existing renderer leaves the prompt at a bare system-mes
- [PR #16542](https://github.com/vllm-project/vllm-ascend/pull/16542) 已合并
  - 中文：[性能] [DSA]将build_dspark_swa_indices融合到单个Triton内核中，用于DSv4 DSpark解码
  - 原文：[Performance][DSA] Fuse build_dspark_swa_indices into a single Triton kernel for DSv4 DSpark decode
  - 说明：build dspark swa indices builds the per-token 可见-KV-slot index table for DSv4 DSpark drafting. The eager implementation is a 12-op PyTorch chain (24 内核 launches), launch-bound at 解码 step sizes. This PR replaces it with a single
- [PR #17354](https://github.com/vllm-project/vllm-ascend/pull/17354) 已合并
  - 中文：【注意】【特性】针对DeepSeek-V4 FP8 KV路径集成MIXED_QUANT_SPARSE_FLASH_MLA运算
  - 原文：[Attention][Feature] Integrate mixed_quant_sparse_flash_mla op for DeepSeek-V4 FP8 KV path
  - 说明：Unify the DSV4 稀疏 注意力 path on the MixedQuantSparseFlashMla operator family from cann ops transformer, replacing the previous in-tree custom operators: - 移除 the in-tree KvCompressEpilog 自定义算子 (csrc/注意力/kv compress epi
- [PR #18799](https://github.com/vllm-project/vllm-ascend/pull/18799) 进行中
  - 中文：[性能] [DSA]碎片DeepSeek-V4跨TP排名预填索引器行
  - 原文：[Performance][DSA] Shard DeepSeek-V4 prefill indexer rows across TP ranks
  - 说明：The PR code was also tested with VLLM ASCEND DSV4 预填充 索引器 TP SHARD=0 to verify the default path. In this 配置, the new path exits at its first CPU-side 特性 check. Compared with the baseline, the additional 运行时 work

#### 2026-10-14

- [PR #18661](https://github.com/vllm-project/vllm-ascend/pull/18661) 已合并
  - 中文：【v0.30.0】【文档】【功能】: 补充文档 DeepSeek V4 TurboQuant 服务 options
  - 原文：[v0.30.0][Doc][Feature]: Document DeepSeek V4 TurboQuant serving options
  - 说明：Cherry-pick of PR 补充文档 --kv-缓存-dtype turboquant 4bit nc in the DeepSeek-V4-Flash deployment guide. Explain its 显存 benefits for ultra-long-context workloads such as AI coding, operator requirements, and independence from 权重 an
- [PR #18537](https://github.com/vllm-project/vllm-ascend/pull/18537) 已合并
  - 中文：[Cherry-pick] [releases/v0.30.0] [Performance] [DSA]使用激活交换进行PCP解码O投影（来自# 18506 ）
  - 原文：[Cherry-pick][releases/v0.30.0][Performance][DSA] Use activation exchange for PCP decode O projection (from #18506)
  - 说明：Backport 18506 to releases/v0.30.0 . Use activation AllToAll, resident PCP O-group projection, and ReduceScatter for sharded DSV4/V4.1 解码. No API or 配置 changes. - vLLM main:

### DeepSeek V4.1

#### 2026-11-10

- [PR #21483](https://github.com/vllm-project/vllm-ascend/pull/21483) 草稿
  - 中文：【性能】Write DSpark SWA draft indices straight into persistent buffers
  - 原文：[Performance] Write DSpark SWA draft indices straight into persistent buffers
  - 说明：The DeepSeek-V4.1 draft path (DSpark, 投机解码) rebuilds its non-causal SWA 稀疏 indices on every 解码 step . The current implementation does this in two stages: 1. build dspark swa indices() allocates two fresh temporary te
- [PR #21478](https://github.com/vllm-project/vllm-ascend/pull/21478) 进行中
  - 中文：【文档】【v0.32.0rc】启用 SWA bounded replay for A5 V4.1 colocated deployment
  - 原文：[Doc][v0.32.0rc] Enable SWA bounded replay for A5 V4.1 colocated deployment
  - 说明：The 950DT (A5) single-node colocated DeepSeek-V4.1-Flash example omits --swa-bounded-replay . 新增 this option so the documented deployment explicitly enables SWA bounded replay. No. Documentati
- [PR #21477](https://github.com/vllm-project/vllm-ascend/pull/21477) 进行中
  - 中文：【文档】启用 SWA bounded replay for A5 V4.1 colocated deployment
  - 原文：[Doc] Enable SWA bounded replay for A5 V4.1 colocated deployment
  - 说明：The 950DT (A5) single-node colocated DeepSeek-V4.1-Flash example omits --swa-bounded-replay . 新增 this option so the documented deployment explicitly enables SWA bounded replay. No. Documentati
- [PR #21355](https://github.com/vllm-project/vllm-ascend/pull/21355) 已合并
  - 中文：【修复】【v0.32.0rc】Use configured block size for DeepSeek V4.1 SWA 缓存
  - 原文：[BugFix][v0.32.0rc] Use configured block size for DeepSeek V4.1 SWA cache
  - 说明：Cherry-pick of 21243 to the releases/v0.32.0rc branch. AscendDeepseekV41SWACache currently remaps 缓存 配置.block size through DSV4 BLOCK SIZES : The V4.1 SWA 缓存 should use the configured block size directly instead of going through t
- [Issue #21471](https://github.com/vllm-project/vllm-ascend/issues/21471) 进行中
  - 中文：【功能】: After enabling MemCache for DeepSeek V4.1 Flash, 吞吐 is noticeably lower than Mooncake. We suspect this is 导致 by 显存 read/write contention.
  - 原文：[Feature]: After enabling MemCache for DeepSeek V4.1 Flash, throughput is noticeably lower than Mooncake. We suspect this is caused by memory read/write contention.
  - 说明：<img width="1510" height="807" alt="Image" src=" / <img width="1538" height="756" alt="Image" src=" / Our vLLM-Ascend environment is the official release version 0.30.0. The DeepSeek V4.1 Flash model is configured with CPU 卸载. Under id
- [Issue #21463](https://github.com/vllm-project/vllm-ascend/issues/21463) 进行中
  - 中文：【RFC】: Sharing and sharding Engram tables across instances
  - 原文：[RFC]: Sharing and sharding Engram tables across instances
  - 说明：Related vLLM RFC: Motivation DeepSeek V4.1 Engram tables can consume substantial host 显存. Host offloading reduces HBM usage, but independently launched model instances may still load separate 拷贝 of the same immutable tables. This is
- [Issue #21461](https://github.com/vllm-project/vllm-ascend/issues/21461) 进行中
  - 中文：【性能】: DeepSeek V4.1 bounded-replay tail ACL graph validation (PR #19286)
  - 原文：[Performance]: DeepSeek V4.1 bounded-replay tail ACL graph validation (PR #19286)
  - 说明：【功能】【模型】Scope and existing implementation This issue tracks the P-side bounded-replay 预填充-tail graph path and the surrounding Host submission gaps in DeepSeek V4.1. An implementation already exists in 19286: 支持 DeepSeek V4
- [PR #21442](https://github.com/vllm-project/vllm-ascend/pull/21442) 进行中
  - 中文：【性能】【模型】融合 rotated Engram gate on Ascend A3
  - 原文：[Performance][Model] Fuse rotated Engram gate on Ascend A3
  - 说明：Rotated DeepSeek V4.1 检查点 on A3 currently expand Engram RMS normalization, weighted correlation, gate/mask and residual injection into many 内核. This adds an A3-specific Triton 内核 for those operations while retaining the sep
- [PR #21411](https://github.com/vllm-project/vllm-ascend/pull/21411) 进行中
  - 中文：新增 Ascend overlay for deepseek-ai/DeepSeek-V4.1-Flash
  - 原文：Add Ascend overlay for deepseek-ai/DeepSeek-V4.1-Flash
  - 说明：Automated vLLM-Ascend overlay PR. - overlay: recipes/overlays/deepseek-ai/DeepSeek-V4.1-Flash.yaml - model id: deepseek-ai/DeepSeek-V4.1-Flash - tuning data id: 230482 - flow record id: 42 - base recipe (合并 precondition): vllm-project/vl
- [PR #21405](https://github.com/vllm-project/vllm-ascend/pull/21405) 进行中
  - 中文：【修复】【注意力】初始化 A5 SMLA length rows for DeepSeek-V4.1 DSA
  - 原文：[BugFix][Attention] Initialize A5 SMLA length rows for DeepSeek-V4.1 DSA
  - 说明：The deferred A5 SMLA 元数据 task reads a5 smla length rows as its per-token (ori, cmp) length rows. The persistent buffer is allocated with torch.empty and never written, so FULL graph capture baked uninitialized values into the SMLA task
- [Issue #21397](https://github.com/vllm-project/vllm-ascend/issues/21397) 进行中
  - 中文：【缺陷】【量化】【A5】W4A8-MXFP4 MoE SwiGLU quant requires 128-aligned reduction dim; TP=8 structurally violates it for DeepSeek-V4.1-Flash
  - 原文：[Bug][Quantization][A5] W4A8-MXFP4 MoE SwiGLU quant requires 128-aligned reduction dim; TP=8 structurally violates it for DeepSeek-V4.1-Flash
  - 说明：After fixing the two odd-scale-group bugs this sits on top of ( 21395, 21396) plus the existing deepseek v41 quant-配置 recognition and 20398/ 20573, --tensor-parallel-size 8 for this model's native-FP8 检查点 gets all the way through
- [Issue #21390](https://github.com/vllm-project/vllm-ascend/issues/21390) 进行中
  - 中文：【缺陷】: v0.30.0，deepseekv4.1-flash，A3，1P+1D,服务运行一段时间后出现oom
  - 原文：[Bug]: v0.30.0，deepseekv4.1-flash，A3，1P+1D,服务运行一段时间后出现oom

#### 2026-11-09

- [PR #21364](https://github.com/vllm-project/vllm-ascend/pull/21364) 草稿
  - 中文：【修复】启用 layerwise KV save hooks for DeepSeek V4.1
  - 原文：[BugFix] Enable layerwise KV save hooks for DeepSeek V4.1
  - 说明：DeepSeek V4.1 executes 注意力 through its dedicated dsa v41 forward custom operator. This path does not reach the layerwise KV save hook used by the existing DSA/MLA implementations, so a connector can only discover these caches through
- [PR #21241](https://github.com/vllm-project/vllm-ascend/pull/21241) 已合并
  - 中文：【文档】更新 DeepSeek-V4.1-Flash A2 deployment guide to W4A8
  - 原文：[Doc] Update DeepSeek-V4.1-Flash A2 deployment guide to W4A8
  - 说明：更新 the A2 part of the DeepSeek-V4.1-Flash tutorial to the W4A8 检查点 and model runner V2, based on the 配置 validated on two Atlas 800 A2 servers (8 x 64 GB per node). - Rewrite the A2 PD section for the two-node W4A8 layo
- [PR #21242](https://github.com/vllm-project/vllm-ascend/pull/21242) 已合并
  - 中文：【Cherry-pick】【releases/v0.32.0rc】【文档】更新 DeepSeek-V4.1-Flash A2 deployment guide to W4A8 (from #21241)
  - 原文：[Cherry-pick][releases/v0.32.0rc][Doc] Update DeepSeek-V4.1-Flash A2 deployment guide to W4A8 (from #21241)
  - 说明：Cherry-pick of 21241 to the releases/v0.32.0rc branch. 更新 the A2 part of the DeepSeek-V4.1-Flash tutorial from the W8A8 deployment to W4A8 with model runner V2, matching the 配置 that has been validated on two Atlas 800 A2 serv
- [PR #21243](https://github.com/vllm-project/vllm-ascend/pull/21243) 已合并
  - 中文：【修复】Use configured block size for DeepSeek V4.1 SWA 缓存
  - 原文：[BugFix] Use configured block size for DeepSeek V4.1 SWA cache
  - 说明：AscendDeepseekV41SWACache currently remaps 缓存 配置.block size through DSV4 BLOCK SIZES : The V4.1 SWA 缓存 should use the configured block size directly instead of going through the DeepSeek V4 block-size table. This PR removes the ta
- [PR #21211](https://github.com/vllm-project/vllm-ascend/pull/21211) 已合并
  - 中文：【文档】新增 950DT DeepSeek-V4.1-Flash deployment recipes
  - 原文：[Doc] Add 950DT DeepSeek-V4.1-Flash deployment recipes
  - 说明：新增 complete 950DT DeepSeek-V4.1-Flash deployment instructions alongside the existing A2/A3 guide. The examples cover single-node DP8/TP1/EP8 服务, two-node PD, Memcache DRAM 池化, and optional PCP8 预填充 and EP16 解码 layouts. -
- [PR #20801](https://github.com/vllm-project/vllm-ascend/pull/20801) 已合并
  - 中文：【文档】新增 950DT DeepSeek-V4.1-Flash deployment examples for v0.32.0rc
  - 原文：[Doc] Add 950DT DeepSeek-V4.1-Flash deployment examples for v0.32.0rc
  - 说明：新增 DeepSeek-V4.1-Flash deployment instructions for 950DT products alongside the A2/A3 guide, targeting vLLM Ascend v0.32.0rc with vLLM v0.32.0 . Integrate the merged A3 更新 in 20764 while preserving its 服务 commands, 精度 table,

#### 2026-11-08

- [PR #21271](https://github.com/vllm-project/vllm-ascend/pull/21271) 草稿
  - 中文：【性能】【模型】Skip DeepSeek V4.1 short-context 索引器 scoring
  - 原文：[Performance][Model] Skip DeepSeek V4.1 short-context indexer scoring
  - 说明：Port the short-context 索引器 shortcut from vLLM 49486 to DeepSeek V4.1 on Ascend. When the maximum 可见 compressed K length fits within index topk , every valid compressed position must be selected. For index source layers that neither
- [PR #21269](https://github.com/vllm-project/vllm-ascend/pull/21269) 草稿
  - 中文：【性能】【Engram】新增 opt-in sorted Host-UVA lookups
  - 原文：[Performance][Engram] Add opt-in sorted Host-UVA lookups
  - 说明：Ports the sorted host-lookup strategy from vLLM 59327 to the Ascend DeepSeek-V4.1 Engram Host-UVA path. Large Host-UVA lookups can be 启用 to: - select only the hash heads owned by the local TP/EDP shard; - convert global IDs to table-lo

#### 2026-11-07

- [PR #21250](https://github.com/vllm-project/vllm-ascend/pull/21250) 进行中
  - 中文：【修复】【KVOffload】Bound DeepSeek V4.1 replay CPU 缓存 allocations
  - 原文：[BugFix][KVOffload] Bound DeepSeek V4.1 replay CPU cache allocations
  - 说明：DeepSeek V4.1 allocates independent physical 缓存 slots, while upstream native offloading interprets the first KV-缓存 descriptor's size as the reservation for the entire pool. With SWA bounded replay 启用, this can size CPU mirrors fr

#### 2026-11-06

- [PR #21223](https://github.com/vllm-project/vllm-ascend/pull/21223) 进行中
  - 中文：【持续集成】新增 每周 测试用例
  - 原文：[CI] Add Weekly test cases
  - 说明：1、新增 每周 测试用例: A.DeepSeek-V4.1-Flash-W8A8-1M-PD B.MiniMax-M3-w8a8-1M-PD 2、移除 the environment variable ASCEND BUFFER POOL: "4:8". 3、更新 baseline No by running the 测试用例 ---
- [Issue #21208](https://github.com/vllm-project/vllm-ascend/issues/21208) 进行中
  - 中文：【文档】: Feedback for `/zh-cn/latest/tutorials/models/DeepSeek-V4.1-Flash.html`
  - 原文：[Doc]: Feedback for `/zh-cn/latest/tutorials/models/DeepSeek-V4.1-Flash.html`
  - 说明：📚 The doc issue atlas800 A3单机部署deepseek-v4.1-flash-1017，文档里的服务启动命令里有--swa-bounded-replay \这个参数，加上后会报错vllm: error: unrecognized arguments: --swa-bounded-replay，删掉这个参数就可以了。直接看 Suggest a potential alternative/修复 No response
- [PR #21198](https://github.com/vllm-project/vllm-ascend/pull/21198) 草稿
  - 中文：【性能】融合 DeepSeek V4.1 C2 压缩器 KV and gate projections
  - 原文：[Performance] Fuse DeepSeek V4.1 C2 compressor KV and gate projections
  - 说明：【Wkv; Wgate】DeepSeek V4.1 C2 compressors apply two FP32 linear projections ( wkv and wgate ) to the same input. This PR adds an opt-in merged projection to 减少 GEMM launch overhead: - Store in a single FP32 wkv gate parameter. - Load th
- [Issue #21192](https://github.com/vllm-project/vllm-ascend/issues/21192) 进行中
  - 中文：【文档】: Feedback for `/zh-cn/latest/tutorials/models/DeepSeek-V4.1-Flash.html`
  - 原文：[Doc]: Feedback for `/zh-cn/latest/tutorials/models/DeepSeek-V4.1-Flash.html`
  - 说明：📚 The doc issue atlas800 A3单机部署deepseek-v4.1-flash-1017，文档的创建容器的命令里没有加--shm-size=512g \，拉起服务时会报错内存不足溢出，需要加上这个参数才行 Suggest a potential alternative/修复 No response
- [PR #20020](https://github.com/vllm-project/vllm-ascend/pull/20020) 已合并
  - 中文：【功能】【MoE】Adapt DeepSeek V4.1 Flash to CANN MegaMoE
  - 原文：[Feature][MoE] Adapt DeepSeek V4.1 Flash to CANN MegaMoE
  - 说明：Allow DeepSeek V4.1 on A3 to use moe intermediate size=2304 with the existing supported 量化 and hidden-size guards. The exception uses the existing model detector and CANN MEGAMOE hardware capability; other model/hardware rules are
- [PR #21183](https://github.com/vllm-project/vllm-ascend/pull/21183) 进行中
  - 中文：【性能】【模型】融合 DeepSeek V4.1 SWA KV 缓存 preparation
  - 原文：[Performance][Model] Fuse DeepSeek V4.1 SWA KV cache preparation
  - 说明：DeepSeek V4.1 currently prepares SWA KV with three consecutive operators after the WKV projection: RMSNorm, 交错 partial RoPE, and paged-缓存 scatter. This PR replaces that chain with one A2 (910B) Triton 内核 that consumes the ra
- [PR #21172](https://github.com/vllm-project/vllm-ascend/pull/21172) 进行中
  - 中文：【性能】【ACLGraph】Capture 解码 元数据 preparation on an auxiliary ACL Graph stream
  - 原文：[Performance][ACLGraph] Capture decode metadata preparation on an auxiliary ACL Graph stream
  - 说明：On Ascend A2, DeepSeek V4.1-Flash prepares 缓存 slot mappings and 注意力/索引器 元数据 before replaying the 解码 graph. This adds host submissions on every 解码 step and puts 元数据 preparation on the critical path. This PR cap
- [Issue #21159](https://github.com/vllm-project/vllm-ascend/issues/21159) 进行中
  - 中文：【缺陷】: 解码-side recompute + engram `dp_shared_memory=true` causes DP-wide AllGather deadlock in PD-disaggregated deployment (DeepSeek-V4.1-Flash, DP8/TP2/EP16)
  - 原文：[Bug]: Decode-side recompute + engram `dp_shared_memory=true` causes DP-wide AllGather deadlock in PD-disaggregated deployment (DeepSeek-V4.1-Flash, DP8/TP2/EP16)
- [PR #19362](https://github.com/vllm-project/vllm-ascend/pull/19362) 已合并
  - 中文：【性能】【MRV2】Specialize DeepSeek V4.1-Flash PCP 元数据 construction by consumer
  - 原文：[Performance][MRV2] Specialize DeepSeek V4.1-Flash PCP metadata construction by consumer
  - 说明：DeepSeek V4.1 PCP builds 元数据 for multiple 缓存 groups in each build attn 元数据() call. Although query operators consume rank-local 元数据 and 缓存 更新 consume 调度器-global 元数据, the existing builders prepare fields f
- [PR #21131](https://github.com/vllm-project/vllm-ascend/pull/21131) 已关闭
  - 中文：【持续集成】【杂项】Increase DeepSeek V4.1 DSpark PCP timeouts
  - 原文：[CI][Misc] Increase DeepSeek V4.1 DSpark PCP timeouts
  - 说明：【】Set RPC, engine readiness, and model execution timeouts for the DeepSeek-V4.1-Flash-W8A8-DSpark-PCP case. --- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this cha
- [PR #21130](https://github.com/vllm-project/vllm-ascend/pull/21130) 已关闭
  - 中文：【持续集成】【杂项】Increase DeepSeek V4.1 DSpark PCP timeouts
  - 原文：[CI][Misc] Increase DeepSeek V4.1 DSpark PCP timeouts
  - 说明：【】Set RPC, engine readiness, and model execution timeouts for the DeepSeek-V4.1-Flash-W8A8-DSpark-PCP case. --- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this cha
- [PR #21146](https://github.com/vllm-project/vllm-ascend/pull/21146) 进行中
  - 中文：【持续集成】更新 DeepSeek V4.1 Flash A3 PD MRV2 夜间 配置
  - 原文：[CI] Update DeepSeek V4.1 Flash A3 PD MRV2 nightly configuration
  - 说明：更新 the existing DeepSeek-V4.1-Flash A3 PD MRV2 夜间用例 to use Eco-Tech/DeepSeek-V4.1-Flash-1017-w4a8 and the A3 服务 配置 published in 20764: - 预填充: DP4 x PCP4 x TP1, MRV2, SWA bounded replay, MegaMoE, FlashComm dis
- [PR #21089](https://github.com/vllm-project/vllm-ascend/pull/21089) 已合并
  - 中文：【文档】Sync DeepSeek-V4.1-Flash A3 deployment guide to main
  - 原文：[Doc] Sync DeepSeek-V4.1-Flash A3 deployment guide to main
  - 说明：Sync the reviewed DeepSeek-V4.1-Flash tutorial changes from 20764 to main. The A3 examples now use W4A8 and model runner V2, with SWA bounded replay and FlashComm disabled. The PD example uses 预填充 DP4/PCP4/TP1 with MegaMoE and 解码 DP
- [PR #21137](https://github.com/vllm-project/vllm-ascend/pull/21137) 进行中
  - 中文：【功能】Dspark adaptive verification for Deepseek-v4.1
  - 原文：[Feature] add Dspark adaptive verification for Deepseek-v4.1
  - 说明：【】--- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary conditions (e.g. empty input, single/zero element, min/max values, off-by-one, seque
- [PR #21129](https://github.com/vllm-project/vllm-ascend/pull/21129) 草稿
  - 中文：【功能】【模型】【v0.32.0rc】启用 compact SP replay and 修复 compiled replay for DeepSeek V4.1
  - 原文：[Feature][Model][v0.32.0rc] Enable compact SP replay and fix compiled replay for DeepSeek V4.1
  - 说明：SP currently disables DeepSeek V4.1 decoder bounded replay. This change enables the MRV2 path with PCP size 1 by computing an original-to-compact SP plan for each eligible eager 预填充. Each rank selects its locally retained rows before a

#### 2026-11-05

- [PR #21116](https://github.com/vllm-project/vllm-ascend/pull/21116) 草稿
  - 中文：【功能】【KV Pool】a cross-layer 共享 KV strategy under use_layerwise
  - 原文：[Feature][KV Pool] Add a cross-layer shared KV strategy under use_layerwise
  - 说明：DeepSeek V4.1 shares KV sources across consumer layers. This draft schedules Memcache GVA 拷贝 at source/consumer boundaries so earlier computation can 重叠 later transfers, under the existing use layerwise option. 路由 resolves the
- [PR #21088](https://github.com/vllm-project/vllm-ascend/pull/21088) 进行中
  - 中文：【修复】Settle DeepSeek V4.1 KV 缓存 block size
  - 原文：[BugFix] Settle DeepSeek V4.1 KV cache block size
  - 说明：DeepSeek V4.1 uses the same 32/64/128 KV-缓存 block-size table as DeepSeek V4, but refresh block size() only recognizes model type == "deepseek v4" . V4.1 therefore falls through to the generic block-size policy, whose behavior depends on
- [PR #20764](https://github.com/vllm-project/vllm-ascend/pull/20764) 已合并
  - 中文：【文档】更新 DeepSeek-V4.1-Flash W4A8 deployment for v0.32.0
  - 原文：[Doc] Update DeepSeek-V4.1-Flash W4A8 deployment for v0.32.0
  - 说明：更新 the DeepSeek-V4.1-Flash deployment tutorial for vLLM Ascend v0.32.0 with W4A8 and model runner V2 configurations for A3. - Recommend DeepSeek-V4.1-Flash-1017-w4a8, while retaining the W8A8 检查点 and ModelSlim preparation option.
- [PR #19897](https://github.com/vllm-project/vllm-ascend/pull/19897) 已关闭
  - 中文：【性能】【DSA】Use the 融合 C2 ring 元数据 内核 beyond A5
  - 原文：[Performance][DSA] Use the fused C2 ring metadata kernel beyond A5
  - 说明：build c2 ring 元数据 ( vllm ascend/ops/triton/c2 ring 元数据.py ) was introduced by 17927 ("新增 DeepSeek V4.1 支持 and 执行优化 on Ascend A5"), which also gated its call site on uses a5 packed 缓存 . As a result, ever
- [PR #20570](https://github.com/vllm-project/vllm-ascend/pull/20570) 已合并
  - 中文：【修复】【SpecDecode】Allow disabled drafts to inherit EPLB collection phase
  - 原文：[BugFix][SpecDecode] Allow disabled drafts to inherit EPLB collection phase
  - 说明：A target using phase-specific EPLB load collection passes load collection phase to its draft even when the existing model or topology policy disables draft EPLB. Reconstructing VllmConfig then fails with "load collection phase requires --en
- [PR #20394](https://github.com/vllm-project/vllm-ascend/pull/20394) 已合并
  - 中文：【修复】【模型】Preserve target-token scoring rows during DeepSeek-V4.1 replay
  - 原文：[BugFix][Model] Preserve target-token scoring rows during DeepSeek-V4.1 replay
  - 说明：This PR ports the DeepSeek-V4.1 decoder replay correctness 修复 from vllm-project/vllm 62652 to vLLM Ascend. Decoder bounded replay normally trims 预填充 requests to the replay window. Requests that calculate prompt scores must retain every
- [PR #20604](https://github.com/vllm-project/vllm-ascend/pull/20604) 已关闭
  - 中文：【文档】【修复】mixed Chinese/English paragraph in DeepSeek-V4.1-Flash zh-CN tutorial
  - 原文：[Doc][BugFix] Fix mixed Chinese/English paragraph in DeepSeek-V4.1-Flash zh-CN tutorial
  - 说明：This PR fixes a mixed Chinese/English paragraph in the DeepSeek-V4.1-Flash zh-CN tutorial. The English source recently appended a sentence about supporting a two-node hybrid A2 配置 and a four-node 预填充-解码 (PD) disaggregated
- [Issue #20550](https://github.com/vllm-project/vllm-ascend/issues/20550) 已关闭
  - 中文：【缺陷】: DeepSeek V4.1 Flash produces corrupted output when `--block-size` is omitted
  - 原文：[Bug]: DeepSeek V4.1 Flash produces corrupted output when `--block-size` is omitted
  - 说明：Environment - Hardware: Atlas 800 A2, 8 NPUs per node. - Model: DeepSeek V4.1 Flash, Ascend 量化. - Deployment: 2 预填充 nodes + 2 解码 nodes; each node runs TP4 × DP2 with expert parallelism. DSpark 投机解码 uses 5 d
- [PR #20826](https://github.com/vllm-project/vllm-ascend/pull/20826) 已合并
  - 中文：【修复】Keep the DeepSeek V4.1 block size the 缓存 is built with
  - 原文：[BugFix] Keep the DeepSeek V4.1 block size the cache is built with
  - 说明：Keeps the block size that a DeepSeek V4.1 缓存 is built with, instead of letting the upstream backend hook replace it after the model has been constructed. The chain that produced corrupted output when --block-size was omitted: 1. vllm asc
- [PR #21045](https://github.com/vllm-project/vllm-ascend/pull/21045) 进行中
  - 中文：【持续集成】新增 DeepSeek-v4.1 测试用例
  - 原文：[CI] Add DeepSeek-v4.1 test case
  - 说明：【】新增 DeepSeek-v4.1 测试用例 No by running the 测试用例 --- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary conditions (e.g. empty input
- [PR #21032](https://github.com/vllm-project/vllm-ascend/pull/21032) 进行中
  - 中文：【性能】【模型】【v0.32.0rc】融合 新增 + FFN HcPost with adaptive tiles
  - 原文：[Performance][Model][v0.32.0rc] Fuse Add + FFN HcPost with adaptive tiles
  - 说明：On the DeepSeek V4.1 共享-expert path, adding 共享/routed outputs materializes a BF16 intermediate that FFN HcPost immediately consumes. This PR adds a default-off A3 新增 + FFN HcPost path that performs both operations in one Triton lau
- [Issue #21031](https://github.com/vllm-project/vllm-ascend/issues/21031) 进行中
  - 中文：【缺陷】: During long-term stability testing of the DeepSeek-V4.1-Flash model on A5 PR, the QuantSparseLightningIndexer operator reported an error.
  - 原文：[Bug]: During long-term stability testing of the DeepSeek-V4.1-Flash model on A5 PR, the QuantSparseLightningIndexer operator reported an error.
- [PR #21023](https://github.com/vllm-project/vllm-ascend/pull/21023) 进行中
  - 中文：【修复】【SpecDecode】DeepSeek V4.1 DSpark aux capture boundaries
  - 原文：[BugFix][SpecDecode] Fix DeepSeek V4.1 DSpark aux capture boundaries
  - 说明：Fixes 21022. DeepSeek V4.1 检查点 store dspark target layer ids as zero-based 注意力-input boundaries . On MRV2, vLLM's set eagle3 aux hidden state layers() already passes those raw IDs through, but DeepseekV41Model.forward still ap
- [Issue #21022](https://github.com/vllm-project/vllm-ascend/issues/21022) 进行中
  - 中文：【缺陷】: DeepSeek V4.1 DSpark captures auxiliary states one layer early on MRV2
  - 原文：[Bug]: DeepSeek V4.1 DSpark captures auxiliary states one layer early on MRV2
- [PR #17341](https://github.com/vllm-project/vllm-ascend/pull/17341) 已关闭
  - 中文：【性能】重叠 DeepSeek V4.1 索引器 preprocessing
  - 原文：[Performance] Overlap DeepSeek V4.1 indexer preprocessing
  - 说明：- 重叠 索引器 query RoPE with 权重 projection on separate NPU streams. - 重叠 索引器 query 量化 with 压缩器 WKV projection. For C2, complete the input FP32 cast before releasing query work to the auxiliary stream. - P
- [PR #20519](https://github.com/vllm-project/vllm-ascend/pull/20519) 已合并
  - 中文：【功能】Backport DeepInfer MegaMoE V4.1 integration to v0.32.0rc
  - 原文：[Feature] Backport DeepInfer MegaMoE V4.1 integration to v0.32.0rc
  - 说明：新增 opt-in DeepInfer MegaMoE for DeepSeek V4.1 on Ascend 950, using a separately installed prebuilt deepgemm ascend wheel (Python import: deep gemm ). - 融合 routed MXFP4 and 共享 FP8 experts into one dispatch/GEMM/SwiGLU/combine operatio

#### 2026-11-04

- [PR #20518](https://github.com/vllm-project/vllm-ascend/pull/20518) 已合并
  - 中文：【修复】【v0.32.0rc】Preserve async build for V4.1 MLA 元数据
  - 原文：[BugFix][v0.32.0rc] Preserve async build for V4.1 MLA metadata
  - 说明：Correct CannbotDSL 0.8.0 MLA visibility lengths while preserving grouped asynchronous 元数据 construction. The builder produces persistent plans in model first-use order through the existing DeviceMetadataExecutor stream/event lifecycle;
- [PR #20911](https://github.com/vllm-project/vllm-ascend/pull/20911) 草稿
  - 中文：【修复】【模型】Guard invalid DeepSeek V4.1 replay cuts
  - 原文：[BugFix][Model] Guard invalid DeepSeek V4.1 replay cuts
  - 说明：Ports the applicable decoder-replay guards from vllm-project/vllm 64921 to the Ascend-owned DeepSeek V4.1 model implementation. When swa bounded replay is 启用 and kv source layer ids is empty, make decoder replay currently calls max() o
- [Issue #20867](https://github.com/vllm-project/vllm-ascend/issues/20867) 进行中
  - 中文：【缺陷】: enable_dsa_cp:true 特性 deploy DeepSeek-v4.1-flash on A3 falied
  - 原文：[Bug]: enable_dsa_cp:true feature deploy DeepSeek-v4.1-flash on A3 falied

#### 2026-11-03

- [Issue #20823](https://github.com/vllm-project/vllm-ascend/issues/20823) 进行中
  - 中文：【RFC】: 支持 DeepSeek-V4.1 language-model LoRA on Ascend
  - 原文：[RFC]: Support DeepSeek-V4.1 language-model LoRA on Ascend
  - 说明：Motivation. 启用 correct language-model LoRA inference for DeepSeek-V4.1 on Ascend, reusing upstream vLLM's LoRA contracts and the existing Ascend model/注意力 implementation. Upstream vLLM already has DeepSeek-V4.1 language-model adap
- [PR #20800](https://github.com/vllm-project/vllm-ascend/pull/20800) 进行中
  - 中文：【文档】新增 950DT DeepSeek-V4.1-Flash deployment examples
  - 原文：[Doc] Add 950DT DeepSeek-V4.1-Flash deployment examples
  - 说明：补充文档 the 950DT (A5) DeepSeek-V4.1-Flash deployment options for main . - Section 5.1 adds single-node colocated DP8/TP1/EP8 服务 with the original MXFP 检查点. - Section 5.2 documents the two-server DP8/TP1/EP8 launcher, backend c
- [PR #20798](https://github.com/vllm-project/vllm-ascend/pull/20798) 草稿
  - 中文：【功能】【MRV2】启用 DSpark adaptive verification for DeepSeek-V4.1
  - 原文：[Feature][MRV2] Enable DSpark adaptive verification for DeepSeek-V4.1
  - 说明：Adaptive Verification needs the target model's full 解码 graphs to handle batches with different verification lengths per request. The V4.1 元数据 builder currently reports 支持 for uniform batches only. There is also a capture-time
- [PR #17366](https://github.com/vllm-project/vllm-ascend/pull/17366) 已合并
  - 中文：【性能】【RFork】Deduplicate tensor scans and reuse layout digests
  - 原文：[Performance][RFork] Deduplicate tensor scans and reuse layout digests
  - 说明：减少 RFork 加载 overhead and 支持 DeepSeek V4.1 and MTP 加载 with vLLM v0.31.0 , matching .github/vllm-release-tag.commit . The vLLM main footer identifies the separate verified main CI baseline. This PR is specifically targeted
- [PR #20475](https://github.com/vllm-project/vllm-ascend/pull/20475) 已关闭
  - 中文：【修复】【DeepSeek-V4.1】Keep bounded replay state dynamic under torch.compile
  - 原文：[Bugfix][DeepSeek-V4.1] Keep bounded replay state dynamic under torch.compile
  - 说明：When DeepSeek-V4.1 decoder bounded replay runs under torch.compile , the Python branch on AscendDecoderReplayLayers.rows can be evaluated during tracing. The compiled graph may then keep the full-batch path even when replay rows are set for
- [PR #20744](https://github.com/vllm-project/vllm-ascend/pull/20744) 进行中
  - 中文：【性能】【模型】【v0.30.0】融合 DeepSeek V4.1 共享/routed 新增 with FFN HcPost
  - 原文：[Performance][Model][v0.30.0] Fuse DeepSeek V4.1 shared/routed Add with FFN HcPost
  - 说明：On the DeepSeek-V4.1 共享-expert path, 共享/routed output addition writes a BF16 intermediate that FFN HcPost immediately reads. This PR adds an opt-in Triton 内核 that consumes both finalized expert outputs and performs 新增 + HcPost
- [PR #20742](https://github.com/vllm-project/vllm-ascend/pull/20742) 进行中
  - 中文：【算子】【功能】DeepGEMM-Ascend routed FP8 x FP4 MegaMoE backend
  - 原文：[Ops][Feature] Add DeepGEMM-Ascend routed FP8 x FP4 MegaMoE backend
  - 说明：This pull request introduces an experimental DeepGEMM-Ascend routed FP8 x FP4 MegaMoE backend for Ascend950, specifically supporting DeepSeek V4.1. It adds 配置 validation, 权重 preparation, and integration with the 融合 MoE com
- [Issue #20526](https://github.com/vllm-project/vllm-ascend/issues/20526) 已关闭
  - 中文：【缺陷】: Generic MXFP8 loader breaks grouped DeepSeek V4.1 output projection
  - 原文：[Bug]: Generic MXFP8 loader breaks grouped DeepSeek V4.1 output projection
  - 说明：Generic block-FP8 加载 on DeepSeek V4.1 leaves wo a as a 2-D MXFP8 权重 and converts it to NZ despite skip 权重 nz conversion . The output projection calls npu transpose quant batchmatmul with 3-D permutations, causing IndexError: Di

#### 2026-11-02

- [PR #20672](https://github.com/vllm-project/vllm-ascend/pull/20672) 进行中
  - 中文：【性能】优化 DeepSeek V4.1 索引器 权重 projection 重叠
  - 原文：[Performance] Optimize DeepSeek V4.1 indexer weights projection overlap
  - 说明：This PR optimizes DeepSeek V4.1 索引器 权重 projection scheduling by adjusting the synchronization point between the main and auxiliary NPU streams. Previously, the main stream waited for 权重 done immediately after Query RoPE. This
- [PR #20670](https://github.com/vllm-project/vllm-ascend/pull/20670) 草稿
  - 中文：【注意力】启用 opt-in 融合 C2 元数据 preparation for DeepSeek V4.1 on A2
  - 原文：[Attention] Enable opt-in fused C2 metadata preparation for DeepSeek V4.1 on A2
  - 说明：DeepSeek V4.1 has a 融合 Triton 内核 for C2 ring 元数据 preparation, but its dispatch is currently restricted to the A5 packed-缓存 path. A2 uses the eager tensor-operation chain to generate ring controls, completion masks, source pos
- [PR #20264](https://github.com/vllm-project/vllm-ascend/pull/20264) 已关闭
  - 中文：【修复】【模型】恢复 DeepSeek V4.1 decoder replay with torch.compile
  - 原文：[BugFix][Model] Restore DeepSeek V4.1 decoder replay with torch.compile
  - 说明：This PR fixes DeepSeek V4.1 decoder bounded replay being bypassed when model compilation is 启用. With FULL 解码 ONLY , decoder layers 21–39 processed all tokens in a 预填充 chunk instead of the intended final 128 tokens. This prevent
- [PR #20612](https://github.com/vllm-project/vllm-ascend/pull/20612) 进行中
  - 中文：【功能】【Engram】Share A2/A5 host tables across P/D instances via RDMA
  - 原文：[Feature][Engram] Share A2/A5 host tables across P/D instances via RDMA
  - 说明：Independent DeepSeek V4.1 预填充 and 解码 instances otherwise retain separate host Engram tables. This opt-in A2/A5 backend keeps one immutable table in an owner process and fetches selected rows over HIXL. On A5 it uses the UB endpoint
- [PR #20591](https://github.com/vllm-project/vllm-ascend/pull/20591) 已关闭
  - 中文：【文档】修复 mixed Chinese/English paragraph in DeepSeek-V4.1-Flash zh-CN tutorial
  - 原文：[Doc] Fix mixed Chinese/English paragraph in DeepSeek-V4.1-Flash zh-CN tutorial
  - 说明：Fixes 20585 Root Cause The English source of the DeepSeek-V4.1-Flash tutorial ( docs/source/tutorials/models/DeepSeek-V4.1-Flash.md ) recently appended the sentence:/n/n It also supports a two-node hybrid A2 配置 and a four-node Pr
- [Issue #20585](https://github.com/vllm-project/vllm-ascend/issues/20585) 进行中
  - 中文：【文档】: Feedback for `/zh-cn/main/tutorials/models/DeepSeek-V4.1-Flash.html`
  - 原文：[Doc]: Feedback for `/zh-cn/main/tutorials/models/DeepSeek-V4.1-Flash.html`
  - 说明：📚 The doc issue 中英混搭。 'vLLM Ascend 支持在 Atlas 800 A3 和 A2 服务器上进行 W8A8 部署。本指南提供了单节点共置 A3 配置和双节点 A3 预填充-解码（PD）分离配置。 It also supports a two-node hybrid A2 配置 and a four-node 预填充-解码 (PD) disaggregated 配置.'
- [Issue #19630](https://github.com/vllm-project/vllm-ascend/issues/19630) 已关闭
  - 中文：【缺陷】: DeepSeek V4.1 Engram gate hard-fail on non-repeated block32 global_rotation
  - 原文：[Bug]: DeepSeek V4.1 Engram gate hard-fail on non-repeated block32 global_rotation
  - 说明：When launching a DeepSeek V4.1 W8A8 model, startup fails in the Engram rotation loader with: The current implementation only accepts a global rotation matrix that is composed of the same 32x32 block repeated along the diagonal: This means o
- [PR #20573](https://github.com/vllm-project/vllm-ascend/pull/20573) 进行中
  - 中文：【修复】【量化】【A5】Pad odd DS MXFP8 TP scale groups
  - 原文：[BugFix][Quantization][A5] Pad odd DS MXFP8 TP scale groups
  - 说明：Fixes 20398 A DeepSeek V4.1-Flash TP shard can end with an odd number of 32-token scale groups. The 运行时 expects an even-group MXFP8 layout, so the previous reshape failed during process 权重 after 加载 . This PR appends a zero sca
- [PR #19849](https://github.com/vllm-project/vllm-ascend/pull/19849) 已关闭
  - 中文：【修复】支持 block-diagonal Engram rotations for DeepSeek V4.1 Flash W8A8
  - 原文：[Bugfix] Support block-diagonal Engram rotations for DeepSeek V4.1 Flash W8A8
  - 说明：This PR extends DeepSeek V4.1 Engram rotation 加载 to 支持 block-diagonal global rotation matrices whose 32x32 diagonal blocks are not all identical. Previously, the loader only accepted: and raised an error for other layouts: Some W8
- [PR #20428](https://github.com/vllm-project/vllm-ascend/pull/20428) 已合并
  - 中文：【修复】【模型】支持 block-diagonal Engram rotations for DeepSeek V4.1
  - 原文：[BugFix][Model] Support block-diagonal Engram rotations for DeepSeek V4.1
  - 说明：This PR 更新 the DeepSeek V4.1 Engram rotation path to 支持 block-diagonal global rotation matrices whose 32x32 diagonal blocks are not all identical. Previously, load engram rotation block only accepted repeated block32 rotations: So

#### 2026-11-01

- [Issue #16375](https://github.com/vllm-project/vllm-ascend/issues/16375) 已关闭
  - 中文：【RFC】: DeepSeek V4.1 Roadmap
  - 原文：[RFC]: DeepSeek V4.1 Roadmap
  - 说明：Motivation. This RFC tracks DeepSeek V4.1 支持 and 性能 优化 on Ascend. The target branch is main. All items start unchecked: development implementations inform the tasks below, but do not establish community-mainline avai
- [Issue #20547](https://github.com/vllm-project/vllm-ascend/issues/20547) 进行中
  - 中文：【功能】: TurboQuant INT4 KV 缓存 for DeepSeek-V4.1 (C1A/C2A layers)
  - 原文：[Feature]: TurboQuant INT4 KV cache for DeepSeek-V4.1 (C1A/C2A layers)
  - 说明：Ask: make --kv-缓存-dtype turboquant 4bit nc usable on DeepSeek-V4.1 on A2/A3 — or, if V4.1 is intentionally out of scope, get the v0.30.0 release notes/docs corrected so the claim stops sending users down this path. Why now: the shipped r
- [PR #20532](https://github.com/vllm-project/vllm-ascend/pull/20532) 进行中
  - 中文：【注意力】【修复】Preserve uneven SWA 缓存 groups
  - 原文：[Attention][BugFix] Preserve uneven SWA cache groups
  - 说明：group 缓存 specs() transposes the target SWA layers assigned to each DeepSeek V4.1 physical 缓存 slot using zip() . When the columns have different lengths, zip() stops at the shortest column and silently omits the remaining layers. For e

#### 2026-10-31

- [PR #20520](https://github.com/vllm-project/vllm-ascend/pull/20520) 草稿
  - 中文：【功能】Backport dedicated V4.1 DeepInfer MegaMoE module to v0.32.0rc
  - 原文：[Feature] Backport dedicated V4.1 DeepInfer MegaMoE module to v0.32.0rc
  - 说明：新增 opt-in DeepInfer MegaMoE for DeepSeek V4.1 on Ascend 950: routed MXFP4 and 共享 FP8 experts execute in one dispatch/GEMM/SwiGLU/combine launch. A dedicated DeepGemmV41MoE uses the existing FusedMoEFactory extension points and owns loc
- [PR #20508](https://github.com/vllm-project/vllm-ascend/pull/20508) 草稿
  - 中文：【修复】Preserve async build for DeepSeek V4.1 MLA 元数据
  - 原文：[BugFix] Preserve async build for DeepSeek V4.1 MLA metadata
  - 说明：Correct CannbotDSL 0.8.0 MLA visibility lengths while preserving grouped asynchronous 元数据 construction. The builder produces persistent plans in model first-use order through the existing DeviceMetadataExecutor stream/event lifecycle;
- [Issue #20483](https://github.com/vllm-project/vllm-ascend/issues/20483) 进行中
  - 中文：【缺陷】【MRV1】【Async Scheduling】: Empty sampled-token row (all -1 / discarded) parks a request RUNNING forever — counters/placeholders grow unbounded, no rollback (0.30.0rc2, DeepSeek-V4.1, DSpark)
  - 原文：[Bug]: [MRV1][Async Scheduling] Empty sampled-token row (all -1 / discarded) parks a request RUNNING forever — counters/placeholders grow unbounded, no rollback (0.30.0rc2, DeepSeek-V4.1, DSpark)
  - 说明：【缺陷】【MRV1】【Async Scheduling】Empty sampled-token row (all -1 / discarded) parks a request RUNNING forever: num computed tokens & num output placeholders grow unbounded, no rollback — still present in vLLM-Ascend 0.30.0rc2 (DeepSeek-V4.1, D
- [PR #19862](https://github.com/vllm-project/vllm-ascend/pull/19862) 已关闭
  - 中文：【持续集成】Measure main v0.31 PCP startup baseline (empty commit)
  - 原文：[CI] Measure main v0.31 PCP startup baseline (empty commit)
  - 说明：Create a timing baseline for the existing 560T DeepSeek-V4.1-Flash-W8A8-DSpark-PCP 夜间用例, to compare with the vLLM v0.32.0 runs in 19516. This draft contains one signed-off empty commit. Its source tree is identical to upstream main
- [PR #20417](https://github.com/vllm-project/vllm-ascend/pull/20417) 进行中
  - 中文：【功能】【模型】Replace DeepSeek V4.1 压缩器 with AscendC
  - 原文：[Feature][Model] Replace DeepSeek V4.1 compressor with AscendC
  - 说明：Replace the DeepSeek V4.1 C2 压缩器's FP32 projection and Triton 池化 path with the AscendC CompressorV2 operator. The operator combines KV/gate projections, 池化, and FP32 ring-state 更新; the adapter maps compact outputs back
- [PR #20399](https://github.com/vllm-project/vllm-ascend/pull/20399) 进行中
  - 中文：【文档】【A5】DeepSeek-V4.1-Flash: single-node DP8 colocated deployment on Ascend 950DT
  - 原文：[Doc][A5] DeepSeek-V4.1-Flash: single-node DP8 colocated deployment on Ascend 950DT
  - 说明：What this PR adds A single-node, DP8/TP1 colocated recipe for DeepSeek-V4.1-Flash on Atlas 850E (Ascend 950DT ×8, A5) , as a new tab under §5.1, plus two bullets in §11 Limitations. The existing guide documents A3 colocated (DP4/TP4) and mu
- [Issue #20398](https://github.com/vllm-project/vllm-ascend/issues/20398) 进行中
  - 中文：【缺陷】【量化】【A5】TP>1 fails to start for DeepSeek-V4.1-Flash (DS-original W8A8 MXFP8): weight_scale reshape mismatch in w8a8_mxfp8.py
  - 原文：[Bug][Quantization][A5] TP>1 fails to start for DeepSeek-V4.1-Flash (DS-original W8A8 MXFP8): weight_scale reshape mismatch in w8a8_mxfp8.py
  - 说明：On Ascend 950DT (A5), vllm-ascend 0.30.0 cannot start DeepSeek-V4.1-Flash-1017 with tensor parallelism 1. 权重 load fine, but worker post-processing fails while reshaping the block-scale tensor. The same image works with DP=8 / TP=1 . En
- [PR #20395](https://github.com/vllm-project/vllm-ascend/pull/20395) 草稿
  - 中文：【功能】Select a dedicated V4.1 DeepInfer MegaMoE module
  - 原文：[Feature] Select a dedicated V4.1 DeepInfer MegaMoE module
  - 说明：新增 opt-in DeepInfer MegaMoE for DeepSeek V4.1 on Ascend 950: routed MXFP4 and 共享 FP8 experts execute in one dispatch/GEMM/SwiGLU/combine launch. A dedicated DeepGemmV41MoE uses the existing FusedMoEFactory extension points and owns loc

#### 2026-10-30

- [PR #20386](https://github.com/vllm-project/vllm-ascend/pull/20386) 进行中
  - 中文：【性能】【DSpark】Write SWA indices and lengths directly into persistent buffers
  - 原文：[Performance][DSpark] Write SWA indices and lengths directly into persistent buffers
  - 说明：The DeepSeek V4.1 DSpark logical SWA 元数据 path generates indices and lengths in temporary tensors, then 拷贝 the results into persistent buffers used by 注意力 元数据 and ACL Graph replay. This PR optimizes the 元数据 generatio
- [Issue #18166](https://github.com/vllm-project/vllm-ascend/issues/18166) 已关闭
  - 中文：【缺陷】: DeepSeek V4.1 启用 EPLB 配置 report error
  - 原文：[Bug]: DeepSeek V4.1 enable EPLB config report error
- [PR #20240](https://github.com/vllm-project/vllm-ascend/pull/20240) 已合并
  - 中文：【修复】【EPLB】支持 flattened DeepSeek V4.1 text 配置
  - 原文：[BugFix][EPLB] Support flattened DeepSeek V4.1 text config
  - 说明：Applies the same EPLB text-配置 修复 as to main . Fixes 18166. DeepSeek V4.1 with Dynamic EPLB fails during EPLB warmup with: VllmEplbAdaptor currently assumes any model exposing language model has model.配置.text 配置 . vLLM's
- [PR #20338](https://github.com/vllm-project/vllm-ascend/pull/20338) 进行中
  - 中文：【测试】新增 A5 DeepSeek-V4.1 Flash FP8 mixed 夜间
  - 原文：[Test] Add A5 DeepSeek-V4.1 Flash FP8 mixed nightly
  - 说明：Adds an A5 single-node 夜间用例 for DeepSeek-V4.1 Flash FP8 with 预填充 and 解码 sharing eight NPUs (DP8/TP1/EP8). The case uses model runner V2, CCU scheduling, 共享-显存 Engram host 卸载, DSpark-5, FULL 解码 ONLY , SWA bou
- [Issue #20329](https://github.com/vllm-project/vllm-ascend/issues/20329) 进行中
  - 中文：【缺陷】: DeepSeek-V4.1-Flash-1017在A5(950DDT)部署，请求输出长度超出200token就会进程死锁
  - 原文：[Bug]: DeepSeek-V4.1-Flash-1017在A5(950DDT)部署，请求输出长度超出200token就会进程死锁
- [Issue #20300](https://github.com/vllm-project/vllm-ascend/issues/20300) 进行中
  - 中文：【功能】: Relax A5 MegaMoE intermediate-size validation to 支持 DeepSeek V4.1 (4608)
  - 原文：[Feature]: Relax A5 MegaMoE intermediate-size validation to support DeepSeek V4.1 (4608)
  - 说明：Could the A5 MegaMoE intermediate-size validation in is a5 megamoe supported by 配置 be relaxed to match the operator's supported range and alignment, instead of using a small 修复 allowlist? Affected code: vllm ascend/ascend 配置.py ,
- [PR #20292](https://github.com/vllm-project/vllm-ascend/pull/20292) 已合并
  - 中文：【文档】【功能】更新 A2 deployment for DeepSeek-V4.1-Flash
  - 原文：[Doc][Feature] Update A2 deployment for DeepSeek-V4.1-Flash
  - 说明：更新 A2 deployment for DeepSeek-V4.1-Flash - vLLM main:
- [PR #20293](https://github.com/vllm-project/vllm-ascend/pull/20293) 已合并
  - 中文：【文档】【功能】更新 A2 deployment for DeepSeek-V4.1-Flash
  - 原文：[Doc][Feature]Update A2 deployment for DeepSeek-V4.1-Flash
  - 说明：更新 A2 deployment for DeepSeek-V4.1-Flash - vLLM main:
- [PR #20299](https://github.com/vllm-project/vllm-ascend/pull/20299) 草稿
  - 中文：【功能】experimental DeepInfer MegaMoE for V4.1 on Ascend 950
  - 原文：[Feature] Add experimental DeepInfer MegaMoE for V4.1 on Ascend 950
  - 说明：新增 opt-in DeepInfer MegaMoE for DeepSeek V4.1 on Ascend 950: routed MXFP4 and 共享 FP8 experts execute in one dispatch/GEMM/SwiGLU/combine launch. The existing Ascend runner and MXFP4 expert adapter preserve local tokens and global exper

#### 2026-10-29

- [PR #20241](https://github.com/vllm-project/vllm-ascend/pull/20241) 已合并
  - 中文：【杂项】【持续集成】Use lazy safetensors 加载 for DeepSeek V4.1 Flash PCP
  - 原文：[Misc][CI] Use lazy safetensors loading for DeepSeek V4.1 Flash PCP
  - 说明：【】Change the DSpark PCP e2e case safetensors load strategy from prefetch to lazy. --- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary cond
- [PR #20266](https://github.com/vllm-project/vllm-ascend/pull/20266) 进行中
  - 中文：【功能】支持 DeepSeek V4.1 序列-parallel SWA bounded replay
  - 原文：[Feature] Support DeepSeek V4.1 sequence-parallel SWA bounded replay
  - 说明：启用 DeepSeek V4.1 SWA bounded decoder replay with 序列 parallelism on Model Runner V2. This is a follow-up to merged 20210; its PCP/DP changes are already in main. - Gather SP hidden states before selecting retained rows, pad the com
- [PR #20210](https://github.com/vllm-project/vllm-ascend/pull/20210) 已合并
  - 中文：【功能】【PCP】启用 DeepSeek V4.1 SWA bounded replay with DP
  - 原文：[Feature][PCP] Enable DeepSeek V4.1 SWA bounded replay with DP
  - 说明：启用 DeepSeek V4.1 SWA bounded decoder replay with PCP and DP together on Model Runner V2. This follows 19321, which has already merged and currently limits PCP replay to DP=1. Coordinate decoder execution widths across DP replicas while
- [PR #20254](https://github.com/vllm-project/vllm-ascend/pull/20254) 草稿
  - 中文：【性能】reuse capacity-bounded scratch workspaces and constexpr launch shapes
  - 原文：[Performance] reuse capacity-bounded scratch workspaces and constexpr launch shapes
  - 说明：--- This PR removes that host overhead in three stages, all measured on 910B (DeepSeek-V4.1-Flash-W4A8, TP8, DSpark num 投机 tokens=5 , FULL 解码 ONLY ): On Model Runner V2 投机解码, each 解码 step runs rejection samp
- [PR #20252](https://github.com/vllm-project/vllm-ascend/pull/20252) 进行中
  - 中文：【修复】【模型】对齐 MRV2 PIECEWISE Engram and 注意力 execution
  - 原文：[BugFix][Model] Align MRV2 PIECEWISE Engram and attention execution
  - 说明：支持 DeepSeek V4.1 Engram with MRV2 breakable PIECEWISE ACL graphs on vLLM v0.32.0, while preserving Ascend's asynchronous device-元数据 preparation. - EngramModelState stages the current batch's lookback, request boundaries, valid-tok
- [PR #20234](https://github.com/vllm-project/vllm-ascend/pull/20234) 进行中
  - 中文：【修复】【MoE】Share MegaMoE symmetric storage with the DSpark draft
  - 原文：[BugFix][MoE] Share MegaMoE symmetric storage with the DSpark draft
  - 说明：DeepSeek V4.1 with DSpark and CANN MegaMoE can create separate symmetric buffers for the target and draft on the same MC2 group. Their native 通信 contexts interfere, preventing this 配置 from running on Ascend A5. Keep on
- [PR #20225](https://github.com/vllm-project/vllm-ascend/pull/20225) 进行中
  - 中文：【测试】新增 A5 DeepSeek-V4.1 Flash FP8 PD 夜间 coverage
  - 原文：[Test] Add A5 DeepSeek-V4.1 Flash FP8 PD nightly coverage
  - 说明：Adds DeepSeek-V4.1-Flash-FP8-A5-PD to the A5 multi-node 夜间 matrix. It uses one 预填充 node and one 解码 node, with eight NPUs and DP8/TP1/EP8 on each node. The 配置 covers FP8 量化, model runner V2, DSpark with five
- [PR #20203](https://github.com/vllm-project/vllm-ascend/pull/20203) 已合并
  - 中文：【修复】KV 缓存 显存 accounting for Ascend multi-allocation layouts
  - 原文：[Bugfix] Fix KV cache memory accounting for Ascend multi-allocation layouts
  - 说明：This PR fixes a KV 缓存 initialization failure when 服务 DeepSeek V4.1 on Ascend, 导致 by When merged, this patch can be 移除. The newer builder-based KV 缓存 planner in vLLM uses KVCacheConfigBuilder. get pool bytes per block() t
- [PR #20206](https://github.com/vllm-project/vllm-ascend/pull/20206) 草稿
  - 中文：【性能】【v0.30.0】新增 opt-in A3 V2 target 元数据 重叠
  - 原文：[Performance][v0.30.0] Add opt-in A3 V2 target metadata overlap
  - 说明：On A3, the DeepSeek V4.1 Model Runner V2 target still prepares SAS/QLI device 元数据 before model execution. The existing V1 asynchronous executor and V2 A5 packed-缓存 path do not 启用 graph-external producers for this target. This ad
- [Issue #20198](https://github.com/vllm-project/vllm-ascend/issues/20198) 进行中
  - 中文：【RFC】【性能】DeepSeek V4.1: Include the Last KV-source Layer into Decoder Replay
  - 原文：[RFC][Performance] DeepSeek V4.1: Include the Last KV-source Layer into Decoder Replay
  - 说明：Motivation. We propose adapting the last KV-source layer trimming 优化 from upstream vLLM PR 59894 to vllm-ascend, reducing computation during long prefills. Currently, decoder bounded replay in vllm-ascend starts at cut + 1, where
- [Issue #20180](https://github.com/vllm-project/vllm-ascend/issues/20180) 进行中
  - 中文：【缺陷】: DeepSeek V4.1 --mm-encoder-only fails in ComplexExpRotaryEmbedding due to meta/NPU device mismatch
  - 原文：[Bug]: DeepSeek V4.1 --mm-encoder-only fails in ComplexExpRotaryEmbedding due to meta/NPU device mismatch
- [PR #17089](https://github.com/vllm-project/vllm-ascend/pull/17089) 已关闭
  - 中文：【WIP】【功能】【DSV41】【950DT】支持 DeepseekV4.1-Flash on Ascend950DT
  - 原文：[WIP][Feature][DSV41][950DT] Support DeepseekV4.1-Flash on Ascend950DT 
  - 说明：新增 支持 for deepseek-v4.1-flash with 950DT products. Please reference the documentation. CI and e2e passed. - vLLM main:
- [PR #20171](https://github.com/vllm-project/vllm-ascend/pull/20171) 进行中
  - 中文：【功能】【Engram】single-node A5 GVA row sharding
  - 原文：[Feature][Engram] Add single-node A5 GVA row sharding
  - 说明：Adds A5 single-node row-sharded GVA for DeepSeek V4.1 native FP8/E8M0 Engram tables. Each local DP sharing rank owns a balanced contiguous row shard in a node-local MemFabric 共享 pool. A device owner map routes lookups into 修复 HBM sta
- [PR #20159](https://github.com/vllm-project/vllm-ascend/pull/20159) 已关闭
  - 中文：【功能】【Engram】single-node A5 GVA row sharding
  - 原文：[Feature][Engram] Add single-node A5 GVA row sharding
  - 说明：This PR adds the A5 single-node part of the unified Engram GVA ownership work tracked by 19970. It adds a node-local MemFabric 共享 pool for DeepSeek V4.1 native FP8/E8M0 Engram tables: - Every local DP sharing rank owns one contiguous, b
- [PR #19550](https://github.com/vllm-project/vllm-ascend/pull/19550) 已合并
  - 中文：【性能】【DSpark】合并 DeepSeek V4.1 context WKV projections and reuse RoPE lookups
  - 原文：[Performance][DSpark] Merge DeepSeek V4.1 context WKV projections and reuse RoPE lookups
  - 说明：This PR optimizes the DeepSeek V4.1 DSpark context path in two areas: 1. 合并 context WKV projections Replace the per-layer WKV projections with one MergedColumnParallelLinear , then 拆分 the output by draft layer. This combines multiple

#### 2026-10-28

- [Issue #20139](https://github.com/vllm-project/vllm-ascend/issues/20139) 进行中
  - 中文：【缺陷】: DeepSeek-V4.1-Flash A3 PD disaggregation — P-node SparseFlashMla aicore SMMU fault (507015, use-after-free pattern) under sustained load with P-side --swa-bounded-replay
  - 原文：[Bug]: DeepSeek-V4.1-Flash A3 PD disaggregation — P-node SparseFlashMla aicore SMMU fault (507015, use-after-free pattern) under sustained load with P-side --swa-bounded-replay
  - 说明：After ~25 minutes of sustained 96-concurrency 预填充-heavy traffic, one P engine worker crashed with an AI Core exception. Single occurrence so far (not yet reproduced); the same load profile ran ~10 rounds clean on a v0.30.0-release-line
- [PR #20137](https://github.com/vllm-project/vllm-ascend/pull/20137) 进行中
  - 中文：【文档】新增 DeepSeek-V4.1-Flash 950DT deployment and verification to main
  - 原文：[Doc] Add DeepSeek-V4.1-Flash 950DT deployment and verification to main
  - 说明：The main-branch DeepSeek-V4.1-Flash guide does not yet include the 950DT deployment workflows documented on releases/v0.30.0 . Port the merged guidance from 19988 together with the 950DT installation, colocated, PD, and Memcache sections ne
- [PR #19988](https://github.com/vllm-project/vllm-ascend/pull/19988) 已合并
  - 中文：【文档】【v0.30.0】Clarify DeepSeek-V4.1-Flash deployment and verification
  - 原文：[Doc][v0.30.0] Clarify DeepSeek-V4.1-Flash deployment and verification
  - 说明：Make the 950DT products PD and Memcache deployment instructions executable step by step. Show one 共享 DP launcher, explain its flags and seven template arguments, and put each role's launch command beside its template. Define --dp-addres
- [PR #20124](https://github.com/vllm-project/vllm-ascend/pull/20124) 草稿
  - 中文：【性能】【DSV4.1】Use single-token decoder replay for DeepSeek-V4.1 预填充
  - 原文：[Performance][DSV4.1] Use single-token decoder replay for DeepSeek-V4.1 prefill
  - 说明：【vllm-project/vllm 62817】Summary Adapt the 预填充 decoder replay 优化 from to Ascend. Replay only the last token for 预填充 chunks sufficiently far from the prompt end, reducing decoder computation while preserving the replay win
- [PR #20080](https://github.com/vllm-project/vllm-ascend/pull/20080) 进行中
  - 中文：【修复】【DeepSeek V4.1】Respect meta initialization for Ascend Engram storage
  - 原文：[BugFix][DeepSeek V4.1] Respect meta initialization for Ascend Engram storage
  - 说明：This PR ports the meta-initialization 修复 from vllm-project/vllm 63068 to the Ascend DeepSeek V4.1 Engram implementation. During encoder-only initialization, vLLM constructs the unused language model under torch.device("meta") . However, th
- [PR #20065](https://github.com/vllm-project/vllm-ascend/pull/20065) 进行中
  - 中文：【文档】新增 DeepSeek-V4.1-Flash Ascend recipe overlay
  - 原文：[Doc] Add DeepSeek-V4.1-Flash Ascend recipe overlay
  - 说明：新增 recipes/overlays/deepseek-ai/DeepSeek-V4.1-Flash.yaml as the Ascend-owned overlay for the existing DeepSeek-V4.1-Flash model recipe. Carry forward the Ascend 配置 from vllm-project/vllm 62794, frozen at 5535506742d57a82fcaa200d
- [Issue #20061](https://github.com/vllm-project/vllm-ascend/issues/20061) 已关闭
  - 中文：【缺陷】: 0.30.0rc2+hdk26.1.2 Failed to launch DeepSeek v4.1 Flash with PD disaggregation across four A2 nodes, with a “create qp failed” error
  - 原文：[Bug]: 0.30.0rc2+hdk26.1.2 Failed to launch DeepSeek v4.1 Flash with PD disaggregation across four A2 nodes, with a “create qp failed” error
- [PR #20060](https://github.com/vllm-project/vllm-ascend/pull/20060) 草稿
  - 中文：【性能】【DSpark】Skip redundant context projections for long prefills
  - 原文：[Performance][DSpark] Skip redundant context projections for long prefills
  - 说明：Ports the 优化 from vLLM 63710 to the default MRV2 DSpark speculator. For DeepSeek-V4.1 DSpark long prefills, MRV2 selects only the context suffix 必填 by sliding-window 注意力 before hidden-state and context-KV projections.
- [PR #19942](https://github.com/vllm-project/vllm-ascend/pull/19942) 已关闭
  - 中文：【文档】【v0.30.0】Use error logging in DeepSeek-V4.1-Flash MMC examples
  - 原文：[Doc][v0.30.0] Use error logging in DeepSeek-V4.1-Flash MMC examples
  - 说明：The 950DT MetaService and LocalService examples 启用 info logging. Set both to error , consistent with the A3 examples. Only the two MMC log-level values change. Follow-up to 19303. Validation: git diff --check , codespell, typos, and mar

#### 2026-10-27

- [PR #19969](https://github.com/vllm-project/vllm-ascend/pull/19969) 草稿
  - 中文：【性能】【DSA】Shard DeepSeek-V4.1 预填充 索引器 rows across TP…
  - 原文：[Performance][DSA] Shard DeepSeek-V4.1 prefill indexer rows across TP…
  - 说明：【性能】【DSA】Title Shard DeepSeek-V4.1 预填充 索引器 rows across TP ranks Problem. In DeepSeek-V4.1 the 稀疏 索引器 (QLI v3) is the only O(T x context) term in 预填充: the main 注意力 is top-k 稀疏 and the MoE is O(activate
- [Issue #19965](https://github.com/vllm-project/vllm-ascend/issues/19965) 进行中
  - 中文：【文档】: Feedback for `/zh-cn/v0.30.0rc2/tutorials/models/DeepSeek-V4.1-Flash.html`
  - 原文：[Doc]: Feedback for `/zh-cn/v0.30.0rc2/tutorials/models/DeepSeek-V4.1-Flash.html`
  - 说明：📚 The doc issue In Section 3,it states"A2 series: two Atlas 800I A2 servers. Each server has 8 NPUs with 64GB 显存 per NPU and exposes 8 devices to the container." but no Deployment for both 预填充 and 解码 in A2 series from "5 Online
- [PR #19951](https://github.com/vllm-project/vllm-ascend/pull/19951) 进行中
  - 中文：【算子】【性能】Shard DeepSeek-V4.1 Engram WKV projection across TP ranks
  - 原文：[Ops][Performance] Shard DeepSeek-V4.1 Engram WKV projection across TP ranks
  - 说明：DeepSeek-V4.1 Engram uses a replicated WKV projection for looked-up n-gram embeddings. Without 序列 parallelism (SP), every tensor-parallel (TP) rank projects the same token rows with the complete 权重 matrix. This PR adapts vllm-proj
- [Issue #19934](https://github.com/vllm-project/vllm-ascend/issues/19934) 已关闭
  - 中文：【缺陷】: DeepSeek V4.1 aclrtHostRegisterV2 fails with device 内核 OOM at TP1
  - 原文：[Bug]: DeepSeek V4.1 aclrtHostRegisterV2 fails with device kernel OOM at TP1
- [PR #19560](https://github.com/vllm-project/vllm-ascend/pull/19560) 已关闭
  - 中文：【性能】【模型】Reuse filtered RoPE lookups for DeepSeek V4.1 DSpark
  - 原文：[Performance][Model] Reuse filtered RoPE lookups for DeepSeek V4.1 DSpark
  - 说明：Refer to 17067. During context KV initialization, all DSpark layers consume the same context positions. Previously, each layer independently called get cos and sin dsa , causing the same RoPE tables to be indexed repeatedly. This PR: - coll
- [PR #19303](https://github.com/vllm-project/vllm-ascend/pull/19303) 已合并
  - 中文：【文档】【v0.30.0】新增 DeepSeek-V4.1-Flash deployment guide for Ascend 950DT
  - 原文：[Doc][v0.30.0] Add DeepSeek-V4.1-Flash deployment guide for Ascend 950DT
  - 说明：新增 DeepSeek-V4.1-Flash deployment instructions for 950DT products using the original 检查点 and Model Runner V2. Cover single-server DP8 and two-server 1P1D with DP8/TP1/EP8 on both 预填充 and 解码, including Memcache KV 缓存 Pool
- [Issue #19892](https://github.com/vllm-project/vllm-ascend/issues/19892) 进行中
  - 中文：【Question】: DeepSeek-V4.1-Flash PP on 2-node A2 (RoCE) — is DP1/TP8/PP2/EP8 with a cross-node PP boundary planned after #19284?
  - 原文：[Question]: DeepSeek-V4.1-Flash PP on 2-node A2 (RoCE) — is DP1/TP8/PP2/EP8 with a cross-node PP boundary planned after #19284?
  - 说明：Context PR 19284 adds experimental DeepSeek-V4.1-Flash pipeline parallelism on Model Runner V2 with a 24/16 拆分 and incremental source-缓存 transfer (缓存-only mirrors of KV source layer 20 on stage 1, 每步 KV/index-row handoff thro
- [Issue #19881](https://github.com/vllm-project/vllm-ascend/issues/19881) 进行中
  - 中文：【文档】: Feedback for `/zh-cn/latest/tutorials/models/DeepSeek-V4.1-Flash.html`-a3超节点组网下1p1d方案无法拉起
  - 原文：[Doc]: Feedback for `/zh-cn/latest/tutorials/models/DeepSeek-V4.1-Flash.html`-a3超节点组网下1p1d方案无法拉起
  - 说明：【PID: 3093】📚 The doc issue 具体报错为：Failed to install Ascend transport transfer executor base.cpp:221] Failed to 初始化 AdxlEngine, status: 503900, errmsg: 2026-10-19-02:20:41.981.818 通信 Error 初始化 Transport(EI0009): Dev

#### 2026-10-26

- [Issue #19867](https://github.com/vllm-project/vllm-ascend/issues/19867) 进行中
  - 中文：【Release】: Release 清单 for v0.32.0rc1
  - 原文：[Release]: Release checklist for v0.32.0rc1
  - 说明：【x】1. DeepSeek V4.1 Model 支持 and Inference 优化 - DeepSeek V4.1 inference 优化, including torch.compile acceleration and encoder/decoder SWA bounded replay across model runners: vllm-project/vllm-ascend 18081 vllm-pr
- [PR #19859](https://github.com/vllm-project/vllm-ascend/pull/19859) 进行中
  - 中文：【注意力】【功能】YOCO mask/compact 预填充 truncation for DeepSeek-V4.1
  - 原文：[Attention][Feature] YOCO mask/compact prefill truncation for DeepSeek-V4.1
  - 说明：This PR adds YOCO mask/compact 预填充 truncation scaffolding for DeepSeek-V4.1 (配置 + CPU keep-tail 元数据 + CP=1 gather helper + L1 equivalence tests), ported from DeepInfer. Executable mask / compact are rejected until runner + atte

#### 2026-10-25

- [PR #19740](https://github.com/vllm-project/vllm-ascend/pull/19740) 已合并
  - 中文：【文档】【功能】更新 A2 deployment for DeepSeek-V4.1-Flash
  - 原文：[Doc][Feature] Update A2 deployment for DeepSeek-V4.1-Flash
  - 说明：更新 A2 deployment for DeepSeek-V4.1-Flash - vLLM main:
- [PR #19736](https://github.com/vllm-project/vllm-ascend/pull/19736) 已关闭
  - 中文：【文档】【功能】更新 A2 deployment for DeepSeek-V4.1-Flash
  - 原文：[Doc][Feature] Update A2 deployment for DeepSeek-V4.1-Flash
  - 说明：更新 A2 deployment for DeepSeek-V4.1-Flash
- [Issue #19722](https://github.com/vllm-project/vllm-ascend/issues/19722) 进行中
  - 中文：【缺陷】: Vector core exception (507035) in grouped_matmul_swiglu_quant_v2 kills all TP8 workers under concurrent long-prompt load (Atlas A3, DeepSeek-V4.1-Flash)
  - 原文：[Bug]: Vector core exception (507035) in grouped_matmul_swiglu_quant_v2 kills all TP8 workers under concurrent long-prompt load (Atlas A3, DeepSeek-V4.1-Flash)
  - 说明：Environment - vllm-ascend : quay.io/ascend/vllm-ascend:deepseek-v4.1-flash-a3 (vLLM 0.27.1+empty) - CANN : 9.1.0 (built-in OPP) - Platform : Atlas 800I A3, 8×910C (16 logical devices), dual TP8 instances - Model : DeepSeek-V4.1-Flash W4A8 (
- [PR #19586](https://github.com/vllm-project/vllm-ascend/pull/19586) 已合并
  - 中文：【文档】【功能】更新 A2 deployment for DeepSeek-V4.1-Flash
  - 原文：[Doc][Feature] Update A2 deployment for DeepSeek-V4.1-Flash
  - 说明：This PR 更新 the DeepSeek-V4.1-Flash deployment guide for Atlas 800 A2 servers. Specifically, it: - Adjusts the --max-num-batched-tokens parameter from 8192 to 4096 in the 预填充 node scripts. - 更新 the A2 series hardware configurat
- [PR #19616](https://github.com/vllm-project/vllm-ascend/pull/19616) 已合并
  - 中文：【文档】【功能】更新 A2 deployment for DeepSeek-V4.1-Flash
  - 原文：[Doc][Feature] Update A2 deployment for DeepSeek-V4.1-Flash
  - 说明：This PR 更新 the DeepSeek-V4.1-Flash deployment guide for Atlas 800 A2 servers. Specifically, it: - Adjusts the --max-num-batched-tokens parameter from 8192 to 4096 in the 预填充 node scripts. - 更新 the A2 series hardware configurat

#### 2026-10-24

- [Issue #19721](https://github.com/vllm-project/vllm-ascend/issues/19721) 进行中
  - 中文：【缺陷】: Mooncake KV 缓存 Pool fails to 初始化 on A2/910B4: Host 显存 registration errno 12
  - 原文：[Bug]: Mooncake KV Cache Pool fails to initialize on A2/910B4: Host memory registration errno 12
  - 说明：Failure: Mooncake KV 缓存 Pool cannot 初始化 When starting a four-node Ascend 910B4 PD deployment of DeepSeek-V4.1-Flash-1017-w8a8, the model 权重 and Engram CPU 卸载 load successfully, but the Mooncake-backed external KV 缓存 P
- [PR #19679](https://github.com/vllm-project/vllm-ascend/pull/19679) 进行中
  - 中文：【性能】【模型】Reuse replicated 路由 input IDs in DeepSeek V4.1
  - 原文：[Performance][Model] Reuse replicated routing input IDs in DeepSeek V4.1
  - 说明：DeepSeek V4.1's model-level 序列 parallelism shards input IDs even when every TP rank already has the full tensor. MoE 路由 then casts, all-gathers, concatenates and normalizes those IDs again in each layer to 对齐 them with the glo

#### 2026-10-23

- [PR #19649](https://github.com/vllm-project/vllm-ascend/pull/19649) 进行中
  - 中文：【v0.31.0rc】【修复】【MRV2】Unwrap single-slot KV caches before block zeroing
  - 原文：[v0.31.0rc][BugFix][MRV2] Unwrap single-slot KV caches before block zeroing
  - 说明：【(tensor a, tensor b)】DeepSeek-V4.1-compatible 缓存 layers bind component tuples in a single engine slot ( ). MRV2's block-zeroer initialization enumerates the outer slot and calls .numel() on the inner tuple, aborting startup before grap
- [Issue #19624](https://github.com/vllm-project/vllm-ascend/issues/19624) 已关闭
  - 中文：【缺陷】: Deepseek v4.1 Flash curl test respone with wrong text or repetition loop
  - 原文：[Bug]: Deepseek v4.1 Flash curl test respone with wrong text or repetition loop
- [Issue #19547](https://github.com/vllm-project/vllm-ascend/issues/19547) 进行中
  - 中文：【缺陷】: DeepSeek-V4.1-Flash-1017模型基于vllm-ascend: 0.30.0rc2镜像在A2双机上拉起，服频繁崩溃
  - 原文：[Bug]: DeepSeek-V4.1-Flash-1017模型基于vllm-ascend: 0.30.0rc2镜像在A2双机上拉起，服频繁崩溃
- [PR #19321](https://github.com/vllm-project/vllm-ascend/pull/19321) 已合并
  - 中文：【功能】【PCP】支持 DeepSeek V4.1 SWA bounded replay with PCP
  - 原文：[Feature][PCP] Support DeepSeek V4.1 SWA bounded replay with PCP
  - 说明：启用 DeepSeek V4.1 SWA bounded decoder replay with 预填充 Context Parallelism (PCP), including cold 预填充 when 前缀缓存 is disabled. For replay, each PCP rank keeps the suffix tokens that it originally owns. Replay boundaries are

#### 2026-10-22

- [PR #19522](https://github.com/vllm-project/vllm-ascend/pull/19522) 已合并
  - 中文：【v0.31.0rc】【测试】【修复】Stabilize DeepSeek V4.1 MRV2 PCP 夜间 startup
  - 原文：[v0.31.0rc][Test][BugFix] Stabilize DeepSeek V4.1 MRV2 PCP nightly startup
  - 说明：Release counterpart of 19477, targeting releases/v0.31.0rc . The main PR is still open; both branches need this 配置 修复. After the PCP-local profile token-budget 优化 was reverted, the DeepSeek V4.1 Flash MRV2+PCP 夜间
- [PR #19477](https://github.com/vllm-project/vllm-ascend/pull/19477) 已合并
  - 中文：【测试】【修复】Stabilize DeepSeek V4.1 MRV2 PCP 夜间 startup
  - 原文：[Test][BugFix] Stabilize DeepSeek V4.1 MRV2 PCP nightly startup
  - 说明：The DeepSeek-V4.1-Flash-w8a8-PD-MRV2 夜间 can fail during 预填充 startup because the 1M-context KV 缓存 requires about 5.56 GiB per rank while only about 5.07 GiB remains after model profiling. Root cause: 19243 reverted the PCP-local
- [PR #19514](https://github.com/vllm-project/vllm-ascend/pull/19514) 进行中
  - 中文：【修复】【v0.30.0】【EPLB】支持 DeepSeek V4.1 flattened text 配置
  - 原文：[BugFix][v0.30.0][EPLB] Support DeepSeek V4.1 flattened text config
  - 说明：Fixes 18166. DeepSeek V4.1 with Dynamic EPLB fails during EPLB warmup: VllmEplbAdaptor currently assumes that any model exposing language model has a nested model.配置.text 配置 . DeepSeek V4.1 is wrapped as a language model, but vLLM's
- [Issue #19502](https://github.com/vllm-project/vllm-ascend/issues/19502) 进行中
  - 中文：【缺陷】: DeepSeek-V4.1 PD 解码 node: dp16/tp1 + finegrained_tp_config(oproj/mlp) + MultiConnector(PreemptOffloadConnector) + recompute_scheduler produces deterministic garbage output
  - 原文：[Bug]: DeepSeek-V4.1 PD decode node: dp16/tp1 + finegrained_tp_config(oproj/mlp) + MultiConnector(PreemptOffloadConnector) + recompute_scheduler produces deterministic garbage output
- [Issue #19463](https://github.com/vllm-project/vllm-ascend/issues/19463) 进行中
  - 中文：【性能】: DSpark acceptance 51.08% on DeepSeek-V4.1-Flash W8A8 with 1P1D PD disaggregation - baseline measurement and questions on per-position decay
  - 原文：[Performance]: DSpark acceptance 51.08% on DeepSeek-V4.1-Flash W8A8 with 1P1D PD disaggregation - baseline measurement and questions on per-position decay
  - 说明：Misc discussion on 性能 We measured the DSpark 投机-解码 acceptance rate on DeepSeek-V4.1-Flash W8A8 in a 1P1D PD-disaggregated deployment on Ascend NPUs and would like to share the baseline data plus a couple of questions
- [Issue #18701](https://github.com/vllm-project/vllm-ascend/issues/18701) 已关闭
  - 中文：[文档] ：错误的设置： `/en/v0.30.0rc1/tutorials/models/DeepSeek-V4.1-Flash.html`
  - 原文：[Doc]: Wrong Setup: `/en/v0.30.0rc1/tutorials/models/DeepSeek-V4.1-Flash.html`
  - 说明：📚 The doc issue Under multiple declaration of same parameter will trigger: Suggest a potential alternative/修复 I've checked a working version of setup, inner engine id does not present. For example, two working examples I have: or this wor
- [PR #19405](https://github.com/vllm-project/vllm-ascend/pull/19405) 草稿
  - 中文：【性能】Prototype candidate-compacted QLI scoring for DeepSeek V4.1 on A2
  - 原文：[Performance] Prototype candidate-compacted QLI scoring for DeepSeek V4.1 on A2
  - 说明：The A2 DeepSeek V4.1 QLI consumer scores the full paged history before penalizing positions outside the candidate blocks. This draft adds a standalone experiment that physically compacts candidate index K and FP16 scales with Triton, invoke

#### 2026-10-21

- [PR #19242](https://github.com/vllm-project/vllm-ascend/pull/19242) 已合并
  - 中文：【文档】【模型】Sync DeepSeek V4.1 deployment guide from v0.30.0
  - 原文：[Doc][Model] Sync DeepSeek V4.1 deployment guide from v0.30.0
  - 说明：The DeepSeek-V4.1-Flash tutorial on main is missing deployment documentation already merged into releases/v0.30.0. This ports the English tutorial from release commit 0a174d6c3 onto main commit ccaf14ad3 . - 新增 the four-server A2 PD layout

#### 2026-10-20

- [PR #19286](https://github.com/vllm-project/vllm-ascend/pull/19286) 进行中
  - 中文：【功能】【模型】支持 DeepSeek V4.1 decoder replay PIECEWISE ACL graphs
  - 原文：[Feature][Model] Support DeepSeek V4.1 decoder replay PIECEWISE ACL graphs
  - 说明：Adapt the replay graph and PIECEWISE trimming approach from vLLM 59532 to Ascend ACL Graph for DeepSeek V4.1. - Capture independent breakable ACL graphs for the bounded decoder replay layers. - Select the replay graph at the configured trim
- [PR #19284](https://github.com/vllm-project/vllm-ascend/pull/19284) 进行中
  - 中文：【功能】【模型】启用 DeepSeek V4.1 MRV2 PP with arbitrary layer partitions
  - 原文：[Feature][Model] Enable DeepSeek V4.1 MRV2 PP with arbitrary layer partitions
  - 说明：启用 experimental DeepSeek V4.1 pipeline parallelism on Model Runner V2 with arbitrary contiguous, nonempty layer partitions. - Resolve cross-stage dependencies from the existing model topology. Mirror source KV/index-缓存 pages and forw
- [Issue #19258](https://github.com/vllm-project/vllm-ascend/issues/19258) 进行中
  - 中文：【缺陷】: A2 v0.30.0rc2 deepseek v4.1 flash w8a8 mc2 error ret=4 / 561000
  - 原文：[Bug]: A2 v0.30.0rc2 deepseek v4.1 flash w8a8 mc2 error ret=4 / 561000
- [Issue #19253](https://github.com/vllm-project/vllm-ascend/issues/19253) 已关闭
  - 中文：【缺陷】: DeepSeekV4.1 engram 共享-显存 registration fails on MRV2 PCP path for NPU 910B.
  - 原文：[Bug]:  DeepSeekV4.1 engram shared-memory registration fails on MRV2 PCP path for NPU 910B.
- [PR #19235](https://github.com/vllm-project/vllm-ascend/pull/19235) 已合并
  - 中文：【Feat】【模型】Replace DeepSeek V4.1 A5 operator stack with ds41 wheel operators
  - 原文：[Feat][Model] Replace DeepSeek V4.1 A5 operator stack with ds41 wheel operators
  - 说明：Swap the DeepSeek V4.1 A5 operator stack to the ds41 wheel operators (cann ops transformer.ops.ds41 family), matching the dsnext environment: - MQSMLA / QLI / QSLI compute and 元数据 ops route through the packaged 注意力 dispatcher con
- [PR #19236](https://github.com/vllm-project/vllm-ascend/pull/19236) 进行中
  - 中文：【文档】对齐 DeepSeek V4.1 Flash Docker image tags with version macro
  - 原文：[Doc] Align DeepSeek V4.1 Flash Docker image tags with version macro
  - 说明：Replace the model-specific Docker image tags in the DeepSeek-V4.1-Flash tutorial with the 共享 vllm ascend version macro, matching the other model tutorials: - A3: quay.io/ascend/vllm-ascend:{{ vllm ascend version }}-a3 - A2: quay.io/asce

#### 2026-10-19

- [PR #18936](https://github.com/vllm-project/vllm-ascend/pull/18936) 已合并
  - 中文：【功能】【模型】Extend DeepSeek V4.1 decoder bounded replay across model runners
  - 原文：[Feature][Model] Extend DeepSeek V4.1 decoder bounded replay across model runners
  - 说明：- Extend DeepSeek V4.1 decoder bounded replay across Model Runner V1 and V2, including SWA 缓存 and replay-start handling. - Simplify replay compatibility patches and 新增 回退 coverage for 缓存, replay, worker, and multi-card behavi
- [PR #19171](https://github.com/vllm-project/vllm-ascend/pull/19171) 进行中
  - 中文：【性能】优化 padding 性能 in DeepSeek V4.1 DSA
  - 原文：[Performance] Optimize padding performance in DeepSeek V4.1 DSA
  - 说明：This pull request replaced 'new zeros' with 'new empty' followed by an explicit 'zero ' call for padding operations to 改进 性能. Achieved a 性能 improvement of approximately 24.4% (70.04 us/call) in the output projection p
- [PR #18831](https://github.com/vllm-project/vllm-ascend/pull/18831) 已合并
  - 中文：【持续集成】新增 DeepSeek V4.1 Flash MRV2 PCP 夜间 coverage
  - 原文：[CI] Add DeepSeek V4.1 Flash MRV2 PCP nightly coverage
  - 说明：This PR adds a two-node A3 DeepSeek V4.1 Flash W8A8 MRV2 PCP 夜间 配置. It runs GPQA 精度 before the 16k/1k and 128k/1k 前缀-90 性能 cases, including the 128k warmup, and registers the case in the A3 double-node nig
- [PR #19157](https://github.com/vllm-project/vllm-ascend/pull/19157) 草稿
  - 中文：【功能】【模型】支持 DeepSeek V4.1 Flash PP on MRV2
  - 原文：[Feature][Model] Support DeepSeek V4.1 Flash PP on MRV2
  - 说明：启用 DeepSeek V4.1 Flash PP on MRV2: stage-local Engram, mHC/auxiliary-state transport, projected KV-缓存 layouts, and DSpark+PP. Recover raw token IDs through the existing model-state hook for vLLM revisions before vllm-project/vllm 610

#### 2026-10-18

- [PR #19092](https://github.com/vllm-project/vllm-ascend/pull/19092) 已合并
  - 中文：【文档】【模型】更新 DeepSeek V4.1-1017 权重 links for v0.30.0rc2
  - 原文：[Doc][Model] Update DeepSeek V4.1-1017 weight links for v0.30.0rc2
  - 说明：The DeepSeek V4.1 guide still says 支持 requires main and does not list the 1017 检查点. 更新 the v0.30.0rc2 documentation to state that the release supports both DeepSeek-V4.1-Flash and DeepSeek-V4.1-Flash-1017, link the official

#### 2026-10-16

- [Issue #19022](https://github.com/vllm-project/vllm-ascend/issues/19022) 进行中
  - 中文：【缺陷】: DeepSeek-V4.1-Flash 解码 挂起 with MoeDistributeDispatchV2 faults during PD burst admission on A3 (v0.30.0rc2)
  - 原文：[Bug]: DeepSeek-V4.1-Flash decode hang with MoeDistributeDispatchV2 faults during PD burst admission on A3 (v0.30.0rc2)
- [PR #18969](https://github.com/vllm-project/vllm-ascend/pull/18969) 进行中
  - 中文：【修复】【load_balance_proxy】Forward 解码 backend errors to client instead of empty 200, and 新增 ms log timestamps
  - 原文：[BugFix][load_balance_proxy] Forward decode backend errors to client instead of empty 200, and add ms log timestamps
  - 说明：Sync the disaggregated-预填充 load balancer example with the production implementation used for DeepSeek-V4.1 PD-disaggregated deployment. - Prefetch the first chunk from the 解码 backend before the response headers are sent, and inspect
- [PR #18966](https://github.com/vllm-project/vllm-ascend/pull/18966) 进行中
  - 中文：【性能】【模型】Skip MRV1 CPU length correction for DeepSeek V4.1
  - 原文：[Performance][Model] Skip MRV1 CPU length correction for DeepSeek V4.1
  - 说明：MRV1 currently treats every compressed-注意力 model as requiring exact CPU 序列 lengths. With asynchronous 投机解码, DeepSeek V4.1 consequently waits for the previous valid-sampled-token-count copy and corrects the optimi
- [PR #18965](https://github.com/vllm-project/vllm-ascend/pull/18965) 进行中
  - 中文：【v0.30.0】【性能】【模型】Skip MRV1 CPU length correction for DeepSeek V4.1
  - 原文：[v0.30.0][Performance][Model] Skip MRV1 CPU length correction for DeepSeek V4.1
  - 说明：MRV1 currently treats every compressed-注意力 model as requiring exact CPU 序列 lengths. With asynchronous 投机解码, DeepSeek V4.1 consequently waits for the previous valid-sampled-token-count copy and corrects the optimi

#### 2026-10-15

- [PR #17496](https://github.com/vllm-project/vllm-ascend/pull/17496) 已合并
  - 中文：【特点】【型号】支持DeepSeek V4.1解码器绑定重放
  - 原文：[Feature][Model] Support DeepSeek V4.1 decoder bounded replay
  - 说明：新增 decoder bounded replay for DeepSeek V4.1 on Ascend MRV2, following vllm-project/vllm 58132. For eligible 预填充 requests, layers after the last KV-source layer process only the final sliding-window tokens. Earlier layers process the fu
- [PR #18750](https://github.com/vllm-project/vllm-ascend/pull/18750) 已合并
  - 中文：[BugFix] [MRV2]保持重播元数据与完整图形填充对齐
  - 原文：[BugFix][MRV2] Keep replay metadata aligned with FULL graph padding
  - 说明：Motivation 修复 corrupted and repetitive output from DeepSeek V4.1 Flash W8A8 on Ascend A3 when using Model Runner V2 with FULL 解码 ONLY graphs. The issue is 可见 only on the MRv2 FULL graph path. MRv1 and MRv2 eager execution produce

#### 2026-10-14

- [Issue #18746](https://github.com/vllm-project/vllm-ascend/issues/18746) 进行中
  - 中文：[错误] ： DeepSeek V4.1 Flash MRv2完整图形在Ascend A3上产生损坏和重复的输出
  - 原文：[Bug]: DeepSeek V4.1 Flash MRv2 FULL graph produces corrupted and repetitive output on Ascend A3

### DeepSeek V4 Flash

#### 2026-11-10

- [PR #20263](https://github.com/vllm-project/vllm-ascend/pull/20263) 已关闭
  - 中文：【持续集成】新增 DeepSeek-V4-Flash Mooncake 池化 coverage on A3
  - 原文：[CI] Add DeepSeek-V4-Flash Mooncake pooling coverage on A3
  - 说明：【】--- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary conditions (e.g. empty input, single/zero element, min/max values, off-by-one, seque
- [PR #21438](https://github.com/vllm-project/vllm-ascend/pull/21438) 已合并
  - 中文：【文档】【杂项】Rectify A3 DeepSeek V4 Flash model tutorial deployment for main
  - 原文：[Doc][Misc] Rectify A3 DeepSeek V4 Flash model tutorial deployment for main
  - 说明：This PR 更新 the DeepSeek-V4-Flash tutorial deployment configurations for v30. It corrects the parameter from to in the A3 series deployment examples to prevent potential out-of-显存 (OOM) issues during short-序列 deployment. It al
- [PR #21436](https://github.com/vllm-project/vllm-ascend/pull/21436) 已合并
  - 中文：【文档】【杂项】Rectify A3 DeepSeek V4 Flash model tutorial deployment for v32
  - 原文：[Doc][Misc] Rectify A3 DeepSeek V4 Flash model tutorial deployment for v32
  - 说明：This PR 更新 the DeepSeek-V4-Flash tutorial deployment configurations for v30. It corrects the parameter from to in the A3 series deployment examples to prevent potential out-of-显存 (OOM) issues during short-序列 deployment. It al
- [PR #21222](https://github.com/vllm-project/vllm-ascend/pull/21222) 已合并
  - 中文：【文档】【杂项】Rectify A3 DeepSeek V4 Flash model tutorial deployment for v30
  - 原文：[Doc][Misc] Rectify A3 DeepSeek V4 Flash model tutorial deployment for v30
  - 说明：This PR 更新 the DeepSeek-V4-Flash tutorial deployment configurations for v30. It corrects the --max-model-len parameter from 1048576 to 512000 in the A3 series deployment examples to prevent potential out-of-显存 (OOM) issues during s
- [Issue #20563](https://github.com/vllm-project/vllm-ascend/issues/20563) 已关闭
  - 中文：【Recipes】overlay 无法更新 DeepSeek-V4-Flash 的 A3 配置（新增-only 与 modes.variants 限制）
  - 原文：[Recipes] overlay 无法更新 DeepSeek-V4-Flash 的 A3 配置（add-only 与 modes.variants 限制）
  - 说明：现象 尝试用 recipes/overlays/deepseek-ai/DeepSeek-V4-Flash.yaml 更新 Ascend 910C（A3）的实测配置（ v0.30.0rc2-a3 ），CI Recipes / Validate 三种写法全部失败： 1. 新增 variant（ ascend w8a8 mtp a3 / ascend w8a8 dspark a3 ）： features.spec 解码 has no mode available fo
- [PR #18630](https://github.com/vllm-project/vllm-ascend/pull/18630) 已关闭
  - 中文：【特点】【WeightTransfer】支持DeepSeek-V4 Flash Vision权重转移
  - 原文：[Feature][WeightTransfer] Support DeepSeek-V4 Flash Vision weight transfer
  - 说明：Adds a DeepSeek-V4-Flash-Vision lane to the one-card NPU IPC 权重-transfer e2e test, and fixes the defects in the --启用-sleep-mode + layerwise 权重-更新 + ACL-graph-replay path that the multimodal model exposes. The vision tower is
- [PR #19248](https://github.com/vllm-project/vllm-ascend/pull/19248) 已关闭
  - 中文：【修复】【WeightTransfer】DeepSeek-V4 Flash Vision reload across sleep and wake
  - 原文：[BugFix][WeightTransfer] Fix DeepSeek-V4 Flash Vision reload across sleep and wake
  - 说明：Adds a one-card DeepSeek-V4 Flash Vision NPU IPC 权重-transfer lane and fixes the sleep → wake → layerwise reload → graph replay path. This follows 18630 and reuses the already-merged Worker sleep preserve parameter names mechanism from 1

#### 2026-11-09

- [Issue #21335](https://github.com/vllm-project/vllm-ascend/issues/21335) 进行中
  - 中文：【文档】: Feedback for `/en/v0.30.0/tutorials/models/DeepSeek-V4-Flash.html`，启动模型报HCCL函数错误：hcclGetRootInfo(&hcclID)，错误代码为19（调用网络API失败）
  - 原文：[Doc]: Feedback for `/en/v0.30.0/tutorials/models/DeepSeek-V4-Flash.html`，启动模型报HCCL函数错误：hcclGetRootInfo(&hcclID)，错误代码为19（调用网络API失败）
  - 说明：【multiproc executor.py:944】【ERROR】📚 The doc issue A2单机用vllm v0.30启动DeepSeek V4 Flash，报HCCL函数错误：hcclGetRootInfo(&hcclID)，错误代码为19（调用网络API失败）下面为错误详情： Worker TP0 EP0 pid=8713) ERROR 11-09 11:23:33 2026-11-09-11:23:31 (PID:8713, Device:0, Ran

#### 2026-11-06

- [Issue #21182](https://github.com/vllm-project/vllm-ascend/issues/21182) 进行中
  - 中文：【文档】: Feedback for `/en/latest/tutorials/models/DeepSeek-V4-Flash.html`
  - 原文：[Doc]: Feedback for `/en/latest/tutorials/models/DeepSeek-V4-Flash.html`
  - 说明：📚 The doc issue 设备为650E，使用镜像为v0.30.0rc2-a5，使用4卡部署DeepSeek-V4-Flash-0731模型，出现报错导致部署失败，请大佬帮忙看看如何解决； 模型服务启动脚本： export VLLM USE V2 MODEL RUNNER=1 export OMP PROC BIND=false export OMP NUM THREADS=10 export PYTORCH NPU ALLOC CONF=expandable seg
- [Issue #21122](https://github.com/vllm-project/vllm-ascend/issues/21122) 进行中
  - 中文：【缺陷】HCCL Error 19 during DeepSeek-V4-Flash initialization: 修复 by configuring loopback interface inside Docker container / 单机部署 HCCL Error 19 解决方案
  - 原文：[Bug] HCCL Error 19 during DeepSeek-V4-Flash initialization: Fixed by configuring loopback interface inside Docker container / 单机部署 HCCL Error 19 解决方案

#### 2026-11-05

- [PR #20907](https://github.com/vllm-project/vllm-ascend/pull/20907) 已合并
  - 中文：【文档】更新 DeepSeek-V4-Flash A2 DSpark deployment for 256K context
  - 原文：[Doc] Update DeepSeek-V4-Flash A2 DSpark deployment for 256K context
  - 说明：对齐 the DeepSeek-V4-Flash-0731-w8a8 A2 DSpark 2P2D deployment guide with the 配置 that was actually validated on Atlas 800I A2: - The default context is 256K on both roles ( --max-model-len 262144 ) with 预填充 --max-num-batched
- [PR #20901](https://github.com/vllm-project/vllm-ascend/pull/20901) 已合并
  - 中文：【v0.30.0】【文档】更新 DeepSeek-V4-Flash A2 DSpark deployment for 256K context
  - 原文：[v0.30.0][Doc] Update DeepSeek-V4-Flash A2 DSpark deployment for 256K context
  - 说明：对齐 the DeepSeek-V4-Flash-0731-w8a8 A2 DSpark 2P2D deployment guide with the 配置 that was actually validated on Atlas 800I A2: - The default context is 256K on both roles ( --max-model-len 262144 ) with 预填充 --max-num-batched
- [PR #21060](https://github.com/vllm-project/vllm-ascend/pull/21060) 进行中
  - 中文：【文档】【修复】DSpark num_speculative_tokens mismatch between 预填充 and 解码 in DeepSeek-V4-Flash A2 PD tutorials
  - 原文：[Doc][BugFix] Fix DSpark num_speculative_tokens mismatch between Prefill and Decode in DeepSeek-V4-Flash A2 PD tutorials
  - 说明：In the A2 PD deployment examples of the DeepSeek-V4-Flash tutorial, the 预填充 nodes run DSpark with num 投机 tokens: 5 , but the corresponding 解码 scripts still used num 投机 tokens: 1 . The tutorial itself states that fo

#### 2026-11-04

- [Issue #17385](https://github.com/vllm-project/vllm-ascend/issues/17385) 已关闭
  - 中文：【缺陷】: DeepSeek V4 flash流式输出概率性返回最后一个trunk中的delta为空，与N卡表现不一致
  - 原文：[Bug]: DeepSeek V4 flash流式输出概率性返回最后一个trunk中的delta为空，与N卡表现不一致
- [PR #20189](https://github.com/vllm-project/vllm-ascend/pull/20189) 已合并
  - 中文：【测试】【功能】single-node PD disaggregation launcher and DeepSeek-V4-Flash-0731-A5-PD.yaml test 配置
  - 原文：[Test][Feature] Add single-node PD disaggregation launcher and DeepSeek-V4-Flash-0731-A5-PD.yaml  test configuration
  - 说明：This PR introduces a single-node 预填充-解码 (PD) disaggregation launcher ( launch single node pd.py ) for vLLM-Ascend, which orchestrates a 预填充 engine, a 解码 engine, and a load-balance proxy on a single Atlas node. It also adds a
- [Issue #20925](https://github.com/vllm-project/vllm-ascend/issues/20925) 进行中
  - 中文：【缺陷】【KV 缓存】AscendStore write/read 保留 gate asymmetry wastes pool for short prompts
  - 原文：[Bug][KV Cache] AscendStore write/read retention gate asymmetry wastes pool for short prompts
  - 说明：" Environment\n\n- AscendStore external KV pool, DeepSeek-V4-Flash PD-disaggregation\n- --block-size 32 , --启用-前缀-缓存 , --前缀-缓存-保留-interval 4096 (i.e. VLLM 前缀缓存 保留 INTERVAL=4096 )\n\n Summary\n\nThe
- [PR #20588](https://github.com/vllm-project/vllm-ascend/pull/20588) 已合并
  - 中文：【v0.30.0】【文档】【杂项】Normalize A2 shell examples one parameter per line
  - 原文：[v0.30.0][Doc][Misc] Normalize A2 shell examples one parameter per line
  - 说明：Backport of 20587 to releases/v0.30.0 . This PR normalizes the A2 DSpark and KV-池化 shell examples in the DeepSeek-V4-Flash tutorial to 改进 readability and maintainability. Specifically, it: - Splits multi-option vllm serve lines in
- [PR #20587](https://github.com/vllm-project/vllm-ascend/pull/20587) 已合并
  - 中文：【文档】【杂项】Normalize A2 shell examples one parameter per line
  - 原文：[Doc][Misc] Normalize A2 shell examples one parameter per line
  - 说明：Normalize the A2 DSpark and KV-池化 shell examples in the DeepSeek-V4-Flash tutorial: - 拆分 multi-option vllm serve lines into one --key value per line - 拆分 multi-assignment export lines into one export KEY=value per line - 拆分 th

#### 2026-11-03

- [PR #19361](https://github.com/vllm-project/vllm-ascend/pull/19361) 已合并
  - 中文：【功能】【KVCache】支持 PCP for Mooncake layerwise 池化
  - 原文：[Feature][KVCache] Support PCP for Mooncake layerwise pooling
  - 说明：DeepSeek-V4-Flash with Mooncake use layerwise=true and --预填充-context-parallel-size 4 fails during connector initialization because context parallelism is rejected. Give each PCP rank its own block-key PUT/GET sessions. Keys include the

#### 2026-11-02

- [Issue #15527](https://github.com/vllm-project/vllm-ascend/issues/15527) 已关闭
  - 中文：[Bug]: DeepSeekV4-flash-w8a8在双机800I A3使用0.23.0镜像进行PD分离部署，上下文长度设置为非1M（如40960或者128000），部署成功后进行curl请求，代理节点和D节点都报错" D节点的url响应为400 Bad Request",单独curl D节点url是没问题可正常返回结果
- [Issue #15523](https://github.com/vllm-project/vllm-ascend/issues/15523) 已关闭
  - 中文：【缺陷】: DeepSeekV4-flash-0731-w8a8在双机A3使用DeepSeekV4-flash-0731-a3镜像进行PD分离部署后，curl 代理的地址端口，D节点报错AttributeError: 'Request' object has no attribute 'num_in_flight_tokens'
  - 原文：[Bug]: DeepSeekV4-flash-0731-w8a8在双机A3使用DeepSeekV4-flash-0731-a3镜像进行PD分离部署后，curl 代理的地址端口，D节点报错AttributeError: 'Request' object has no attribute 'num_in_flight_tokens'
- [Issue #20610](https://github.com/vllm-project/vllm-ascend/issues/20610) 进行中
  - 中文：【缺陷】: v0.26rc2+mmc部署dsv4-flash-0731性能劣化
  - 原文：[Bug]: v0.26rc2+mmc部署dsv4-flash-0731性能劣化

#### 2026-11-01

- [PR #20562](https://github.com/vllm-project/vllm-ascend/pull/20562) 进行中
  - 中文：【功能】recipes: 更新 DeepSeek-V4-Flash A3 to v0.30.0rc2-a3 measured 配置
  - 原文：[Feature] recipes: update DeepSeek-V4-Flash A3 to v0.30.0rc2-a3 measured config
  - 说明：What this PR does Refresh the DeepSeek-V4-Flash overlay so the Ascend 910C (Atlas 800T A3) single-node entry matches the 配置 measured on vllm-ascend v0.30.0rc2-a3 (vLLM 0.30.0): - variants.ascend w8a8 : DP4+TP4 with expert paralle
- [PR #20554](https://github.com/vllm-project/vllm-ascend/pull/20554) 进行中
  - 中文：【文档】【杂项】补充文档 --前缀-缓存-保留-interval in the DeepSeek-V4 Flash and Pro guides
  - 原文：[Doc][Misc] Document --prefix-cache-retention-interval in the DeepSeek-V4 Flash and Pro guides
  - 说明：Adds a --前缀-缓存-保留-interval entry to the parameter lists of DeepSeek-V4-Flash.md and DeepSeek-V4-Pro.md . No launch command changes. Why it is needed: - 20191 then 移除 the remaining export lines and the parameter entry from
- [Issue #20530](https://github.com/vllm-project/vllm-ascend/issues/20530) 进行中
  - 中文：夜间 Daily test failure on 2026-11-01 08:00 - please check
  - 原文：Nightly Daily test failure on 2026-11-01 08:00 - please check
  - 说明：The 夜间 Daily test for vllm-ascend reported failures at 08:00 on 2026-11-01. Failed on: a3-4 card-(part 2-5), DeepSeek-V4-Flash-W8A8-A3, Qwen3-32B-QuaRot, Kimi-K2.6-w4a8-A3, MiniMax-M3-BF16-A3, glm-5.2-w4a8-dspark Failed 测试用例: - t

#### 2026-10-31

- [PR #20494](https://github.com/vllm-project/vllm-ascend/pull/20494) 草稿
  - 中文：【功能】【MoE】CatCCOS MegaMoE backend for DeepSeek-V4-Flash on Ascend A5
  - 原文：[Feature][MoE] Add CatCCOS MegaMoE backend for DeepSeek-V4-Flash on Ascend A5
  - 说明：Extend the CatCCOS 融合 MoE integration to DeepSeek-V4-Flash's MXFP4 expert 权重 on Ascend A5, preserving the existing v0.23 task as a Draft . This submission records the work and does not assert 合并 readiness. Depends on Both PRs tar
- [PR #20323](https://github.com/vllm-project/vllm-ascend/pull/20323) 已合并
  - 中文：【文档】移除 obsolete MTP deployment examples from DeepSeek-V4-Flash tutorial
  - 原文：[Doc] Remove obsolete MTP deployment examples from DeepSeek-V4-Flash tutorial
  - 说明：移除 the four obsolete A2/A3 MTP deployment tabs from Sections 5.1 and 5.2 of the DeepSeek-V4-Flash tutorial. Keep the existing DSpark examples and 重命名 their tabs to A2 series / A3 series . 移除 stale MTP 权重, image, model-path an

#### 2026-10-30

- [PR #20215](https://github.com/vllm-project/vllm-ascend/pull/20215) 已合并
  - 中文：【持续集成】新增 DeepSeek-V4-Flash Mooncake 池化 coverage on A3
  - 原文：[CI] Add DeepSeek-V4-Flash Mooncake pooling coverage on A3
  - 说明：新增 a single-node Mooncake KV 池化 test for Eco-Tech/DeepSeek-V4-Flash-0731-w8a8 and register it in the A3 每周 suite. No. These changes affect E2E tests and CI infrastructure only. An ear

#### 2026-10-29

- [PR #20267](https://github.com/vllm-project/vllm-ascend/pull/20267) 已合并
  - 中文：【文档】【模型】移除 obsolete DeepSeek-V4-Flash MTP examples (v0.30.0)
  - 原文：[Doc][Model] Remove obsolete DeepSeek-V4-Flash MTP examples (v0.30.0)
  - 说明：The DeepSeek-V4-Flash tutorial on releases/v0.30.0 still presents obsolete MTP deployment examples alongside the DSpark examples. Delete the four obsolete A2/A3 single-node and PD tabs in full, including the guidance inside those tabs. Rena
- [PR #19461](https://github.com/vllm-project/vllm-ascend/pull/19461) 已合并
  - 中文：【release/v0.23.0】【Sampler】【修复】inf in RL sampling by recording stream for q
  - 原文：[release/v0.23.0][Sampler][BugFix] Fix inf in RL sampling by recording stream for q
  - 说明：During RL post-training of DeepSeek v4 Flash, an inconsistency between training and inference was observed due to the NPU 显存 of q being prematurely reused before the asynchronous division operation probs.div (q) completed. This PR resol
- [PR #20191](https://github.com/vllm-project/vllm-ascend/pull/20191) 已合并
  - 中文：【文档】【杂项】Sync DeepSeek-V4 flash and Pro deployment documentation fixes to main
  - 原文：[Doc][Misc] Sync DeepSeek-V4 flash and Pro deployment documentation fixes to main
  - 说明：This PR synchronizes documentation fixes for DeepSeek-V4 deployment to the main branch, matching the changes in 20174. Specifically, it: - Removes hard-coded VLLM 前缀缓存 保留 INTERVAL=4096 environment variable exports from both t
- [PR #20230](https://github.com/vllm-project/vllm-ascend/pull/20230) 已合并
  - 中文：【v0.30.0】【文档】【杂项】移除 obsolete DeepSeek-V4 Flash 保留 guidance
  - 原文：[v0.30.0][Doc][Misc] Remove obsolete DeepSeek-V4 Flash retention guidance
  - 说明：The releases/v0.30.0 DeepSeek-V4 Flash tutorial no longer exports VLLM 前缀缓存 保留 INTERVAL in its A2/A3/A5 scripts, but three descriptions still direct readers to use or consider that environment variable. 移除 the A2 key-para
- [PR #20161](https://github.com/vllm-project/vllm-ascend/pull/20161) 已合并
  - 中文：【文档】【杂项】DeepSeek-V4-Flash: serve the MTP 检查点 for DSpark and 修复 the A2 image block
  - 原文：[Doc][Misc] DeepSeek-V4-Flash: serve the MTP checkpoint for DSpark and fix the A2 image block
  - 说明：Fixes two documentation defects in docs/source/tutorials/models/DeepSeek-V4-Flash.md that make the A2 deployment path unusable when the tutorial is followed literally. 1. The A2 DSpark tab served a 检查点 that is not in the 权重 list
- [PR #20162](https://github.com/vllm-project/vllm-ascend/pull/20162) 已合并
  - 中文：【v0.30.0】【文档】【杂项】DeepSeek-V4-Flash: serve the MTP 检查点 for DSpark and 修复 the A2 image block
  - 原文：[v0.30.0][Doc][Misc] DeepSeek-V4-Flash: serve the MTP checkpoint for DSpark and fix the A2 image block
  - 说明：Fixes two documentation defects in docs/source/tutorials/models/DeepSeek-V4-Flash.md that make the A2 deployment path unusable when the tutorial is followed literally. 1. The A2 DSpark tab served a 检查点 that is not in the 权重 list
- [PR #20174](https://github.com/vllm-project/vllm-ascend/pull/20174) 已合并
  - 中文：【v0.30.0】【文档】【杂项】更新 DeepSeek-V4 Flash and Pro deployment documentation
  - 原文：[v0.30.0][Doc][Misc] Update DeepSeek-V4 Flash and Pro deployment documentation
  - 说明：更新 the DeepSeek-V4 deployment documentation on releases/v0.30.0 : - In the Flash tutorial, 移除 all seven export VLLM 前缀缓存 保留 INTERVAL=4096 lines and the associated parameter explanation in section 5.1. The script remov
- [Issue #15200](https://github.com/vllm-project/vllm-ascend/issues/15200) 已关闭
  - 中文：【缺陷】: 0.23.0 4机A3 3D1D部署DeepSeek-V4-flash，请求参数中携带stop_token_ids导致P实例中断，报错算子为IndexCheck
  - 原文：[Bug]: 0.23.0 4机A3 3D1D部署DeepSeek-V4-flash，请求参数中携带stop_token_ids导致P实例中断，报错算子为IndexCheck

#### 2026-10-28

- [Issue #20142](https://github.com/vllm-project/vllm-ascend/issues/20142) 进行中
  - 中文：【缺陷】: 基于950DT 8卡4+4 1P1D分离部署Deepseek-v4-flash-0731模型，采用vllm-ascend0.30.rc2镜像及社区脚本创建容器及启动服务，输出No available 共享 显存 broadcast block found in 60 seconds多次后报错RuntimeError: The Inner error is reported as above. The process exits for this inner error
  - 原文：[Bug]: 基于950DT 8卡4+4 1P1D分离部署Deepseek-v4-flash-0731模型，采用vllm-ascend0.30.rc2镜像及社区脚本创建容器及启动服务，输出No available shared memory broadcast block found in 60 seconds多次后报错RuntimeError: The Inner error is reported as above. The process exits for this inner error
- [PR #20123](https://github.com/vllm-project/vllm-ascend/pull/20123) 草稿
  - 中文：【功能】【PD】支持 layerwise P/D disaggregation for DeepSeek-V4-Flash
  - 原文：[Feature][PD] Support layerwise P/D disaggregation for DeepSeek-V4-Flash
  - 说明：Adds DeepSeek-V4 (DSV4-Flash) 支持 to MooncakeLayerwiseConnector (layerwise P/D disaggregation), and fixes the issues it exposed. DSV4 doesn't fit the connector's old assumptions. A layer can have up to five KV caches ( .attn compressed
- [Issue #20077](https://github.com/vllm-project/vllm-ascend/issues/20077) 进行中
  - 中文：夜间 Daily test failure on 2026-10-28 12:00 - please check
  - 原文：Nightly Daily test failure on 2026-10-28 12:00 - please check
  - 说明：The 夜间 Daily test for vllm-ascend reported failures at 12:00 on 2026-10-28. Failed on: DeepSeek-V4-Flash-W8A8-A3 Failed 测试用例: - test single node — AssertionError: some aisbench cases failed, info were shown above. Failed run(s):
- [PR #20043](https://github.com/vllm-project/vllm-ascend/pull/20043) 已合并
  - 中文：【文档】【杂项】DeepSeek-V4-Flash A2: drop the inert enable_flashcomm1 and record the measured draft profile
  - 原文：[Doc][Misc] DeepSeek-V4-Flash A2: drop the inert enable_flashcomm1 and record the measured draft profile
  - 说明：This PR corrects two items in the A2 sections only of the DeepSeek-V4-Flash guide — 5.2.5 (A2 DSpark) and 5.2.6 (A2 KV 池化). No A3, 950DT, single-node or other section is touched. 1. 移除 启用 flashcomm1 from the three A2 预填充 co
- [PR #20044](https://github.com/vllm-project/vllm-ascend/pull/20044) 已合并
  - 中文：【文档】【杂项】DeepSeek-V4-Flash A2: drop the inert enable_flashcomm1 and record the measured draft profile
  - 原文：[Doc][Misc] DeepSeek-V4-Flash A2: drop the inert enable_flashcomm1 and record the measured draft profile
  - 说明：This PR corrects two items in the A2 sections only of the DeepSeek-V4-Flash guide — 5.2.5 (A2 DSpark) and 5.2.6 (A2 KV 池化). No A3, 950DT, single-node or other section is touched. 1. 移除 启用 flashcomm1 from the three A2 预填充 co
- [PR #20012](https://github.com/vllm-project/vllm-ascend/pull/20012) 已合并
  - 中文：【文档】【杂项】Sync DeepSeek-V4-Flash deployment guidance to main
  - 原文：[Doc][Misc] Sync DeepSeek-V4-Flash deployment guidance to main
  - 说明：Sync the latest DeepSeek-V4-Flash documentation changes from 19993 (source commit a0e7aab658c3 ) to main . - 移除 the explicit --api-server-count 1 setting from the 950DT DSpark and A3 single-node examples. - Explain --async-scheduling in
- [PR #20024](https://github.com/vllm-project/vllm-ascend/pull/20024) 已关闭
  - 中文：【文档】【杂项】DeepSeek-V4-Flash A2: drop the inert enable_flashcomm1 and record the measured draft profile
  - 原文：[Doc][Misc] DeepSeek-V4-Flash A2: drop the inert enable_flashcomm1 and record the measured draft profile
  - 说明：This PR corrects two items in the A2 sections only of the DeepSeek-V4-Flash guide — 5.2.5 (A2 DSpark) and 5.2.6 (A2 KV 池化). No A3, 950DT, single-node or other section is touched. 1. 移除 启用 flashcomm1 from the three A2 预填充 co
- [PR #20023](https://github.com/vllm-project/vllm-ascend/pull/20023) 已关闭
  - 中文：【文档】【杂项】DeepSeek-V4-Flash A2: drop the inert enable_flashcomm1 and record the measured draft profile
  - 原文：[Doc][Misc] DeepSeek-V4-Flash A2: drop the inert enable_flashcomm1 and record the measured draft profile
  - 说明：This PR corrects two items in the A2 sections only of the DeepSeek-V4-Flash guide — 5.2.5 (A2 DSpark) and 5.2.6 (A2 KV 池化). No A3, 950DT, single-node or other section is touched. 1. 移除 启用 flashcomm1 from the three A2 预填充 co
- [PR #19993](https://github.com/vllm-project/vllm-ascend/pull/19993) 已合并
  - 中文：【文档】【v0.30.0】Clarify DeepSeek-V4-Flash API endpoint
  - 原文：[Doc][v0.30.0] Clarify DeepSeek-V4-Flash API endpoint
  - 说明：Clarify the request endpoint in Section 6 of the DeepSeek-V4-Flash guide on releases/v0.30.0 : use the API server's IP address and port for ordinary deployments, and the proxy's IP address and port for 预填充/解码 (PD) disaggregated depl
- [PR #20016](https://github.com/vllm-project/vllm-ascend/pull/20016) 已关闭
  - 中文：【文档】DeepSeek-V4-Flash A2 DSpark: record the measured draft 4 / 51 解码 profile
  - 原文：[Doc] DeepSeek-V4-Flash A2 DSpark: record the measured draft 4 / 51 decode profile
  - 说明：What 更新 the A2 DSpark section (5.2.5) of the DeepSeek-V4-Flash guide. No other section, role or workload is touched. 解码-4k-stable and 解码-16k now record D draft 4 / --max-num-seqs 51 instead of draft 1 / 128. 新增 a tip explaini
- [PR #20015](https://github.com/vllm-project/vllm-ascend/pull/20015) 已关闭
  - 中文：【文档】DeepSeek-V4-Flash A2 DSpark: record the measured draft 4 / 51 解码 profile
  - 原文：[Doc] DeepSeek-V4-Flash A2 DSpark: record the measured draft 4 / 51 decode profile
  - 说明：What 更新 the A2 DSpark section (5.2.5) of the DeepSeek-V4-Flash guide. No other section, role or workload is touched. 解码-4k-stable and 解码-16k now record D draft 4 / --max-num-seqs 51 instead of draft 1 / 128. 新增 a tip explaini

#### 2026-10-27

- [Issue #19955](https://github.com/vllm-project/vllm-ascend/issues/19955) 进行中
  - 中文：【缺陷】:使用vllm0.27.0rc1在950D上部署DS-v4-flash-0731报签名失败
  - 原文：[Bug]:使用vllm0.27.0rc1在950D上部署DS-v4-flash-0731报签名失败
- [PR #19759](https://github.com/vllm-project/vllm-ascend/pull/19759) 已合并
  - 中文：【文档】【杂项】Organize DeepSeek-V4-Flash PD and KV 池化 deployment guides
  - 原文：[Doc][Misc] Organize DeepSeek-V4-Flash PD and KV pooling deployment guides
  - 说明：Reorganize the DeepSeek-V4-Flash deployment guide into hardware-specific tabs. Group the 950DT, A3, and A2 KV 缓存 Pool examples under Section 5.3, move ultra-long 序列 guidance into the A2 series tab, and preserve existing section anc
- [PR #19879](https://github.com/vllm-project/vllm-ascend/pull/19879) 已合并
  - 中文：【文档】【v0.30.0】Restructure DeepSeek-V4-Flash deployment documentation
  - 原文：[Doc][v0.30.0] Restructure DeepSeek-V4-Flash deployment documentation
  - 说明：Sync the DeepSeek-V4-Flash deployment-guide changes from 19759 (source commit 2738354da ) to releases/v0.30.0 . Only docs/source/tutorials/models/DeepSeek-V4-Flash.md changes. - Organize ordinary PD and KV 缓存 池化 deployment into hard

#### 2026-10-26

- [Issue #19830](https://github.com/vllm-project/vllm-ascend/issues/19830) 进行中
  - 中文：夜间 Daily test failure on 2026-10-26 08:00 - please check
  - 原文：Nightly Daily test failure on 2026-10-26 08:00 - please check
  - 说明：The 夜间 Daily test for vllm-ascend reported failures at 08:00 on 2026-10-26. Failed on: a2-1 card-(part 4-7), DeepSeek-V4-Flash-W8A8-A3 Failed 测试用例: - TestPauseResume::test pause mode keep resumes frozen request — RuntimeError: vl
- [Issue #19829](https://github.com/vllm-project/vllm-ascend/issues/19829) 进行中
  - 中文：夜间 Daily test failure on 2026-10-26 08:00 - please check
  - 原文：Nightly Daily test failure on 2026-10-26 08:00 - please check
  - 说明：The 夜间 Daily test for vllm-ascend reported failures at 08:00 on 2026-10-26. Failed on: a2-1 card-(part 4-7), DeepSeek-V4-Flash-W8A8-A3 Failed 测试用例: - TestPauseResume::test pause mode keep resumes frozen request — RuntimeError: vl
- [PR #19782](https://github.com/vllm-project/vllm-ascend/pull/19782) 进行中
  - 中文：【releases/v0.18.0】【文档】【杂项】Drop redundant --启用-chunked-预填充 from DeepSeek-V4-Flash A2/A3 guides
  - 原文：[releases/v0.18.0][Doc][Misc] Drop redundant --enable-chunked-prefill from DeepSeek-V4-Flash A2/A3 guides
  - 说明：Aligns the A2/A3 inference guides in docs/source/tutorials/models/DeepSeek-V4-Flash.md with the default 调度器 behaviour of vLLM V1: - A2 : removes the redundant --启用-chunked-预填充 from the vllm serve script. Chunked 预填充 is alr
- [Issue #19779](https://github.com/vllm-project/vllm-ascend/issues/19779) 进行中
  - 中文：夜间 Daily test failure on 2026-10-26 08:00 - please check
  - 原文：Nightly Daily test failure on 2026-10-26 08:00 - please check
  - 说明：The 夜间 Daily test for vllm-ascend reported failures at 08:00 on 2026-10-26. Failed on: a2-1 card-(part 4-7), DeepSeek-V4-Flash-W8A8-A3 Failed 测试用例: - TestPauseResume::test pause mode keep resumes frozen request — RuntimeError: vl
- [PR #19772](https://github.com/vllm-project/vllm-ascend/pull/19772) 已合并
  - 中文：【文档】【v0.30.0】移除 DeepSeek V4 Flash Vision documentation
  - 原文：[Doc][v0.30.0] Remove DeepSeek V4 Flash Vision documentation
  - 说明：Apply the DeepSeek-V4-Flash-Vision-Exp documentation removal from 19629 to releases/v0.30.0 , based on b91084581. - Delete the English tutorial and Chinese translation catalog. - 移除 its MkDocs navigation entry and localized navigation t
- [PR #19758](https://github.com/vllm-project/vllm-ascend/pull/19758) 已合并
  - 中文：【文档】【v0.30.0】更新 DeepSeek-V4-Flash 池化 and startup instructions
  - 原文：[Doc][v0.30.0] Update DeepSeek-V4-Flash pooling and startup instructions
  - 说明：The DeepSeek-V4-Flash 池化 examples are 拆分 across separate top-level sections, and the 950DT startup instructions require 解码 to become healthy before 预填充 starts. Group the A3 and 950DT Memcache examples under Section 5.3, iden

#### 2026-10-25

- [PR #19505](https://github.com/vllm-project/vllm-ascend/pull/19505) 已合并
  - 中文：【文档】新增 A2 workload tuning and KV 池化 for DeepSeek-V4-Flash
  - 原文：[Doc] Add A2 workload tuning and KV pooling for DeepSeek-V4-Flash
  - 说明：补充文档 workload-specific A2 deployment settings for DeepSeek-V4-Flash-0731-w8a8 on four Atlas 800I A2 servers (32 NPUs): 预填充 ExternalDP2 × TP1 × PP1 × PCP8 , 解码 DP16 × TP1 , and MooncakeHybridConnector for P-to-D transfer. Each P/
- [PR #19506](https://github.com/vllm-project/vllm-ascend/pull/19506) 已合并
  - 中文：【文档】【v0.30.0】新增 A2 workload tuning and KV 池化 for DeepSeek-V4-Flash
  - 原文：[Doc][v0.30.0] Add A2 workload tuning and KV pooling for DeepSeek-V4-Flash
  - 说明：Backport of 19505 to releases/v0.30.0 , preserving existing branch-specific documentation. 补充文档 workload-specific A2 deployment settings for DeepSeek-V4-Flash-0731-w8a8 on four Atlas 800I A2 servers (32 NPUs): 预填充 ExternalDP2 × TP1
- [PR #19629](https://github.com/vllm-project/vllm-ascend/pull/19629) 已合并
  - 中文：【文档】移除 DeepSeek V4 Flash Vision documentation
  - 原文：[Doc] Remove DeepSeek V4 Flash Vision documentation
  - 说明：移除 the entire DeepSeek-V4-Flash-Vision-Exp documentation from the docs site: - Delete the English model tutorial and its Chinese translation catalog. - 移除 the MkDocs navigation entry and localized navigation titles. - 移除 its mod

#### 2026-10-24

- [PR #18973](https://github.com/vllm-project/vllm-ascend/pull/18973) 已合并
  - 中文：【文档】【v0.30.0】新增 DeepSeek-V4-Flash-0731 deployment instructions for Ascend 950DT
  - 原文：[Doc][v0.30.0] Add DeepSeek-V4-Flash-0731 deployment instructions for Ascend 950DT
  - 说明：新增 DeepSeek-V4-Flash-0731 deployment instructions for Ascend 950DT and A3 on vLLM-Ascend v0.30.0. The existing A2/A3 deployment commands are retained; some A3 examples have Markdown indentation changes. - 新增 the 950DT model entry and the
- [PR #19385](https://github.com/vllm-project/vllm-ascend/pull/19385) 已合并
  - 中文：【文档】【功能】A5 deployment examples for DeepSeek-V4-Flash
  - 原文：[Doc][feature] Add A5 deployment examples for DeepSeek-V4-Flash
  - 说明：This PR ports the DeepSeek-V4-Flash A5/950DT deployment guidance to the upstream main branch. Specifically, it: - Adds the Ascend 950DT Docker image and DSpark deployment example. - Documents same-node 预填充/解码 separation with NPUs 0–

#### 2026-10-23

- [PR #19634](https://github.com/vllm-project/vllm-ascend/pull/19634) 已合并
  - 中文：【文档】【v0.30.0】【杂项】更新 DeepSeek-V4-Flash A3 image to v0.30.0rc2-a3
  - 原文：[Doc][v0.30.0][Misc] Update DeepSeek-V4-Flash A3 image to v0.30.0rc2-a3
  - 说明：更新 the A3 Docker image in the DeepSeek-V4-Flash deployment guide from quay.io/ascend/vllm-ascend:{{ vllm ascend version }}-a3 to quay.io/ascend/vllm-ascend:v0.30.0rc2-a3 . This pins the A3 installation example to the specific release-ca
- [PR #19623](https://github.com/vllm-project/vllm-ascend/pull/19623) 已合并
  - 中文：【文档】新增 A3 PD 池化 deployment for DeepSeek-V4-Flash
  - 原文：[Doc] Add A3 PD pooling deployment for DeepSeek-V4-Flash
  - 说明：新增 an A3 1P1D deployment section with a Memcache KV 缓存 Pool to the DeepSeek-V4-Flash model guide on main. This is the main-branch counterpart of 19615, including the 更新 parameter alignment and removal of the incorrect layerwise-poo
- [PR #19615](https://github.com/vllm-project/vllm-ascend/pull/19615) 已合并
  - 中文：【v0.30.0】【文档】新增 A3 PD 池化 deployment for DeepSeek-V4-Flash
  - 原文：[v0.30.0][Doc] Add A3 PD pooling deployment for DeepSeek-V4-Flash
  - 说明：新增 an A3 1P1D deployment section with a Memcache KV 缓存 Pool to the DeepSeek-V4-Flash model guide on releases/v0.30.0 . All non-池化 parameters follow the existing A3 series with dspark PD example in Section 5.2.1: DP2/TP1/PCP8 Prefil
- [Issue #19605](https://github.com/vllm-project/vllm-ascend/issues/19605) 进行中
  - 中文：【缺陷】【DeepSeekV4-flash-0731】: Mooncake connector E1021 06:26:49.437224 6454 transfer_executor_base.cpp:263] Failed to connect to target: 10.233.1.248:20335, status: 103905, errmsg: E19999: Inner Error!
  - 原文：[Bug]: [DeepSeekV4-flash-0731] Mooncake connector E1021 06:26:49.437224  6454 transfer_executor_base.cpp:263] Failed to connect to target: 10.233.1.248:20335, status: 103905, errmsg: E19999: Inner Error!

#### 2026-10-21

- [PR #19166](https://github.com/vllm-project/vllm-ascend/pull/19166) 已合并
  - 中文：【持续集成】新增 static and adaptive DSpark 投机解码 测试用例 for DeepSeek-V4-Flash on A5
  - 原文：[CI] Add static and adaptive DSpark speculative decoding test cases for DeepSeek-V4-Flash on A5
  - 说明：This PR adds two chat completion 测试用例 for deepseek-ai/DeepSeek-V4-Flash-0731 on Ascend A3, covering DSpark 投机解码 with num 投机 tokens=15 in both static and adaptive verification modes. Does this PR introduce any
- [Issue #19343](https://github.com/vllm-project/vllm-ascend/issues/19343) 进行中
  - 中文：夜间 Daily test failure on 2026-10-21 12:00 - please check
  - 原文：Nightly Daily test failure on 2026-10-21 12:00 - please check
  - 说明：The 夜间 Daily test for vllm-ascend reported failures at 12:00 on 2026-10-21. Failed on: a3-4 card-(part 2-5), DeepSeek-V4-Flash-W8A8-A3 Failed 测试用例: - test deepseek v4 w4a8 tp4 basic greedy — psutil.NoSuchProcess: process no longe
- [PR #19195](https://github.com/vllm-project/vllm-ascend/pull/19195) 已合并
  - 中文：【文档】【v0.30.0】补充文档 D2RH workflow and Atlas 850E deployment
  - 原文：[Doc][v0.30.0] Document D2RH workflow and Atlas 850E deployment
  - 说明：Port the latest documentation from 18135 to releases/v0.30.0. - Describe the D2RH transfer workflow with its diagram. - 新增 inline DeepSeek-V4-Flash P/D launch examples for Atlas 850E with UBoE networking. - Explain host-显存 requirements
- [PR #19328](https://github.com/vllm-project/vllm-ascend/pull/19328) 进行中
  - 中文：【修复】【WeightTransfer】DeepSeek-V4 Flash Vision reload with native 保留
  - 原文：[BugFix][WeightTransfer] Fix DeepSeek-V4 Flash Vision reload with native retention
  - 说明：Fixes the one-card DeepSeek-V4 Flash Vision sleep → wake → NPU IPC reload path using the existing Worker sleep preserve parameter names mechanism. The PR is rebuilt as one commit directly on official main ee68e53457b9af658bb749a6258f9a8b1e2
- [PR #19257](https://github.com/vllm-project/vllm-ascend/pull/19257) 已合并
  - 中文：【文档】Use PCP8 DP2 for A3 DSpark 预填充 with Model Runner V2
  - 原文：[Doc]Use PCP8 DP2 for A3 DSpark prefill with Model Runner V2
  - 说明：Port the final documentation changes from 19201 ( releases/v0.30.0 ) to main . 更新 the A3 DeepSeek-V4-Flash DSpark 预填充 example to PCP8 / DP2 / TP1. Extend the launcher to allocate TP × PCP devices per DP rank, 启用 Model Runner V2
- [PR #19201](https://github.com/vllm-project/vllm-ascend/pull/19201) 已合并
  - 中文：【文档】【v0.30.0】Use PCP8 DP2 for A3 DSpark 预填充 with Model Runner V2
  - 原文：[Doc][v0.30.0] Use PCP8 DP2 for A3 DSpark prefill with Model Runner V2
  - 说明：更新 the DeepSeek-V4-Flash A3 DSpark PD deployment example on releases/v0.30.0 to use 预填充 PCP8 / DP2 / TP1 with Model Runner V2. Set export VLLM USE V2 MODEL RUNNER=1 on both DSpark nodes and 补充文档 that PCP requires V2, while DSA-C

#### 2026-10-19

- [PR #19198](https://github.com/vllm-project/vllm-ascend/pull/19198) 进行中
  - 中文：【功能】【DCP】DeepSeek-V4 Flash DSA 解码-context-parallel 注意力 for 910B2
  - 原文：[Feature][DCP] DeepSeek-V4 Flash DSA decode-context-parallel attention for 910B2
  - 说明：What 解码 Context Parallelism (DCP) 支持 for the DeepSeek-V4 Flash DSA 注意力 stack on Ascend 910B (int8 索引器 / quant-KV path). The C4 and C128 compressed KV caches and the C4 索引器 K 缓存 are sharded along the 序列 dimens
- [Issue #10058](https://github.com/vllm-project/vllm-ascend/issues/10058) 已关闭
  - 中文：【缺陷】: 0.20.2rc1 DeepSeek V4 Flash on A2 16xNPU. the serve mtp==3 acceptence is very low.
  - 原文：[Bug]: 0.20.2rc1 DeepSeek V4 Flash on A2 16xNPU. the serve mtp==3 acceptence is very low.
- [Issue #19116](https://github.com/vllm-project/vllm-ascend/issues/19116) 进行中
  - 中文：【缺陷】: 投机 execution must be 启用 on all DeepSeek-V4-Flash-0731-W8A8 PD nodes. In some scenarios with high concurrency, enabling dspark will significantly increase the TTFT, in some cases even increasing it by several times.
  - 原文：[Bug]: Speculative execution must be enabled on all DeepSeek-V4-Flash-0731-W8A8 PD nodes. In some scenarios with high concurrency, enabling dspark will significantly increase the TTFT, in some cases even increasing it by several times.

#### 2026-10-17

- [Issue #19071](https://github.com/vllm-project/vllm-ascend/issues/19071) 进行中
  - 中文：【缺陷】: DeepSeek-V4-Flash 缓存.view stride error with default KV dtype on Ascend 950
  - 原文：[Bug]: DeepSeek-V4-Flash cache.view stride error with default KV dtype on Ascend 950

#### 2026-10-15

- [PR #18865](https://github.com/vllm-project/vllm-ascend/pull/18865) 进行中
  - 中文：【文档】新增 MemCache deployment guide for DeepSeek-V4-Flash on Ascend 950DT
  - 原文：[Doc] Add MemCache deployment guide for DeepSeek-V4-Flash on Ascend 950DT
  - 说明：What this PR does This PR enhances the DeepSeek-V4-Flash documentation for Ascend 950DT. The main 更新 include: - 新增 the Ascend 950DT container 配置. - 新增 the 预填充/解码 disaggregated deployment example. - 新增 the MemCache
- [Issue #18864](https://github.com/vllm-project/vllm-ascend/issues/18864) 进行中
  - 中文：[Bug]: 0.25.1版本部署DeepSeek-v4-flash-0731 模型，开MTP，有tool标签缺少起始标签的现象，2次，极低概率，同请求无法复现
- [Issue #18795](https://github.com/vllm-project/vllm-ascend/issues/18795) 进行中
  - 中文：[BugFix] [Performance] PR # 17911通过更改草案注意元数据语义，使910B (A2) DeepSeek-V4-Flash-W8A8的DSpark接受率回归34% - > 23%
  - 原文：[BugFix][Performance] PR #17911 regresses DSpark acceptance rate 34% -> 23% on 910B (A2) DeepSeek-V4-Flash-W8A8 by changing draft attention metadata semantics
  - 说明：【修复】【性能】【修复】【注意力】Title: PR 17911 regresses DSpark acceptance rate 34% → 23% on 910B (A2) DeepSeek-V4-Flash-W8A8 by changing draft 注意力 元数据 semantics Summary After PR 17911 (" 对齐 DSpark SAS 元数据 with

### DeepSeek V4 Pro

#### 2026-11-09

- [PR #17765](https://github.com/vllm-project/vllm-ascend/pull/17765) 已关闭
  - 中文：【持续集成】【MRV2】更新 existing DeepSeek V4 Pro PD cases for DSpark
  - 原文：[CI][MRV2] Update existing DeepSeek V4 Pro PD cases for DSpark
  - 说明：更新 the existing DeepSeek-V4-Pro-w4a8-1M-PD.yaml and DeepSeek-V4-Pro-w4a8-前缀-缓存-PD.yaml cases to use the four-node DSpark/MRV2 deployment configurations with Eco-Tech/DeepSeek-V4-Pro-0813-w4a8 . Keep both existing case names, all

#### 2026-11-05

- [PR #21024](https://github.com/vllm-project/vllm-ascend/pull/21024) 已合并
  - 中文：【文档】【杂项】启用 V2 model runner for DeepSeek V4 Pro A3 PD-Colocate deployment
  - 原文：[Doc][Misc] Enable V2 model runner for DeepSeek V4 Pro A3 PD-Colocate deployment
  - 说明：This PR enables the V2 model runner (VLLM USE V2 MODEL RUNNER=1) in both Node0 and Node1 scripts for the DeepSeek-V4-Pro A3 series two-node colocated deployment. This ensures consistency with other deployment configurations in the documenta

#### 2026-11-03

- [PR #20802](https://github.com/vllm-project/vllm-ascend/pull/20802) 进行中
  - 中文：【文档】【修复】conflicting --data-parallel-start-rank in DeepSeek-V4-Pro A2 multi-node tutorial
  - 原文：[Doc][BugFix] Fix conflicting --data-parallel-start-rank in DeepSeek-V4-Pro A2 multi-node tutorial
  - 说明：In the A2-series multi-node deployment of the DeepSeek-V4-Pro tutorial (Section 5.1), the single command block provided for "Node1-Node3" hard-coded --data-parallel-start-rank 1 for all three nodes. With --data-parallel-size 4 and --data-pa

#### 2026-10-28

- [PR #19671](https://github.com/vllm-project/vllm-ascend/pull/19671) 已合并
  - 中文：【文档】【杂项】Deepseek v4 pro doc refinements for main
  - 原文：[Doc][Misc] Deepseek v4 pro doc refinements for main
  - 说明：This PR refines the DeepSeek-V4-Pro deployment tutorial for vLLM-Ascend v0.30.0 to make the startup examples and parameter descriptions more consistent: - Aligns the A3 预填充 startup examples in PD-disaggregated and Memcache 池化 deplo
- [PR #19883](https://github.com/vllm-project/vllm-ascend/pull/19883) 已合并
  - 中文：【文档】【杂项】【v0.30.0】Deepseek v4 pro doc refinements v030
  - 原文：[Doc][Misc][v0.30.0] Deepseek v4 pro doc refinements v030
  - 说明：This PR refines the DeepSeek-V4-Pro deployment tutorial for vLLM-Ascend v0.30.0 to make the startup examples and parameter descriptions more consistent: - Aligns the A3 预填充 startup examples in PD-disaggregated and Memcache 池化 deplo

#### 2026-10-27

- [PR #19809](https://github.com/vllm-project/vllm-ascend/pull/19809) 已合并
  - 中文：【文档】【杂项】Restructure section 5.2 PD separation into tab layout for DeepSeek-V4-Pro
  - 原文：[Doc][Misc] Restructure section 5.2 PD separation into tab layout for DeepSeek-V4-Pro
  - 说明：Restructure Section 5.2 Multi-Node PD Separation Deployment in the DeepSeek-V4-Pro tutorial to match the tab layout used by Section 5.3. 1. Convert the three numbered subsections (5.2.1 A3 / 5.2.2 A2 / 5.2.3 950DT) into tabs in the same ord
- [PR #19808](https://github.com/vllm-project/vllm-ascend/pull/19808) 已合并
  - 中文：【文档】【杂项】【v0.30.0】Restructure section 5.2 PD separation into tab layout for DeepSeek-V4-Pro
  - 原文：[Doc][Misc][v0.30.0] Restructure section 5.2 PD separation into tab layout for DeepSeek-V4-Pro
  - 说明：Restructure Section 5.2 Multi-Node PD Separation Deployment in the DeepSeek-V4-Pro tutorial to match the tab layout used by Section 5.3. 1. Convert the three numbered subsections (5.2.1 A3 / 5.2.2 A2 / 5.2.3 950DT) into tabs in the same ord

#### 2026-10-26

- [PR #19718](https://github.com/vllm-project/vllm-ascend/pull/19718) 已合并
  - 中文：【文档】新增 950DT/A3/A2 KV 缓存 Pool Deployment to DeepSeek-V4-Pro docs
  - 原文：[Doc] Add 950DT/A3/A2 KV Cache Pool Deployment to DeepSeek-V4-Pro docs
  - 说明：新增 KV 缓存 Pool deployment documentation for 950DT / A3 / A2 series to the DeepSeek-V4-Pro tutorial, and 对齐 the doc with the releases/v0.30.0 branch. 1. 新增 a new 5.3 KV 缓存 Pool Deployment section with three tabs: - 950DT products :
- [PR #19717](https://github.com/vllm-project/vllm-ascend/pull/19717) 已合并
  - 中文：【文档】【v0.30.0】新增 950DT Memcache KV 缓存 Pool PD deployment section to DeepSeek-V4-Pro docs
  - 原文：[Doc][v0.30.0] Add 950DT Memcache KV Cache Pool PD deployment section to DeepSeek-V4-Pro docs
  - 说明：【】新增 950DT Memcache KV 缓存 Pool PD deployment section to DeepSeek-V4-Pro docs --- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary condi

#### 2026-10-25

- [PR #19752](https://github.com/vllm-project/vllm-ascend/pull/19752) 已合并
  - 中文：【文档】【v0.30.0】新增 A2 series KV 缓存 Pool deployment to DeepSeek-V4-Pro tutorial
  - 原文：[Doc][v0.30.0] Add A2 series KV Cache Pool deployment to DeepSeek-V4-Pro tutorial
  - 说明：新增 an === "A2 series" tab to section 5.3 of the DeepSeek-V4-Pro tutorial with the A2 池化 deployment verified on an Atlas 800I A2 cluster (4 预填充 + 4 解码 nodes): - retitle section 5.3 to "KV 缓存 Pool Deployment" and state in the
- [PR #19745](https://github.com/vllm-project/vllm-ascend/pull/19745) 已合并
  - 中文：【文档】【v0.30.0】新增 Memcache KV 缓存 Pool deployment to DeepSeek-V4-Pro Tutorial
  - 原文：[Doc][v0.30.0] Add Memcache KV Cache Pool deployment to DeepSeek-V4-Pro Tutorial
  - 说明：This pull request adds a new section (Section 5.3) to the DeepSeek-V4-Pro tutorial documentation. This section provides a comprehensive guide for deploying a multi-node 预填充-解码 (PD) separation setup using the Memcache KV 缓存 Pool o

#### 2026-10-24

- [PR #18913](https://github.com/vllm-project/vllm-ascend/pull/18913) 已合并
  - 中文：【文档】【v0.30.0】新增 Ascend 950DT deployment guides for DeepSeek-V4-Pro
  - 原文：[Doc][v0.30.0] Add Ascend 950DT deployment guides for DeepSeek-V4-Pro
  - 说明：This PR adds Ascend 950DT (A5) deployment documentation for DeepSeek-V4-Pro to docs/source/tutorials/models/DeepSeek-V4-Pro.md . No, this is a documentation-only 更新. --- 清单 Testing -
- [PR #19631](https://github.com/vllm-project/vllm-ascend/pull/19631) 已合并
  - 中文：【文档】【功能】Ascend 950DT deployment guides for DeepSeek-V4-Pro
  - 原文：[Doc][Feature] Add Ascend 950DT deployment guides for DeepSeek-V4-Pro
  - 说明：【】This PR adds Ascend 950DT (A5) deployment documentation for DeepSeek-V4-Pro to docs/source/tutorials/models/DeepSeek-V4-Pro.md . --- 清单 Testing - Boundary / edge-case coverage : I re

#### 2026-10-23

- [PR #19670](https://github.com/vllm-project/vllm-ascend/pull/19670) 进行中
  - 中文：【文档】【v0.30.0】新增 Memcache KV 缓存 Pool deployment to DeepSeek-V4-Pro Tutorial for v0.30.0
  - 原文：[Doc][v0.30.0] Add Memcache KV Cache Pool deployment to DeepSeek-V4-Pro Tutorial for v0.30.0
  - 说明：This pull request adds a new section (Section 5.3) to the DeepSeek-V4-Pro tutorial documentation. This section provides a comprehensive guide for deploying a multi-node 预填充-解码 (PD) separation setup using the Memcache KV 缓存 Pool o
- [PR #19565](https://github.com/vllm-project/vllm-ascend/pull/19565) 已合并
  - 中文：【文档】【杂项】Sync DeepSeek-V4-Pro A2 PD separation with verified DSpark 配置
  - 原文：[Doc][Misc] Sync DeepSeek-V4-Pro A2 PD separation with verified DSpark config
  - 说明：The A2 PD separation example in section 5.2.2 of DeepSeek-V4-Pro.md did not match a verified deployment. It pointed at the preview DeepSeek-V4-Pro-w4a8-mtp 检查点 while the DSpark draft 权重 ship in DeepSeek-V4-Pro-0813-w4a8 , and it
- [PR #19566](https://github.com/vllm-project/vllm-ascend/pull/19566) 已合并
  - 中文：【v0.30.0】【文档】【杂项】Sync DeepSeek-V4-Pro A2 PD separation with verified DSpark 配置
  - 原文：[v0.30.0][Doc][Misc] Sync DeepSeek-V4-Pro A2 PD separation with verified DSpark config
  - 说明：The A2 PD separation example in section 5.2.2 of DeepSeek-V4-Pro.md did not match a verified deployment. It pointed at the preview DeepSeek-V4-Pro-w4a8-mtp 检查点 while the DSpark draft 权重 ship in DeepSeek-V4-Pro-0813-w4a8 , and it

#### 2026-10-22

- [Issue #14545](https://github.com/vllm-project/vllm-ascend/issues/14545) 已关闭
  - 中文：【缺陷】: DeepSeek-V4-Pro在A2服务器PD部署场景预填充实例默认不配blocksize，解码侧配置了blocksize情况下，proxy调用会乱码
  - 原文：[Bug]: DeepSeek-V4-Pro在A2服务器PD部署场景Prefill实例默认不配blocksize，decode侧配置了blocksize情况下，proxy调用会乱码
- [PR #19184](https://github.com/vllm-project/vllm-ascend/pull/19184) 已合并
  - 中文：【文档】【杂项】更新 DeepSeek V4 Pro A3 DSpark PD deployment for MRv2
  - 原文：[Doc][Misc] Update DeepSeek V4 Pro A3 DSpark PD deployment for MRv2
  - 说明：This PR 更新 the DeepSeek-V4-Pro deployment tutorial for the Atlas 800 A3 series with DSpark. Specifically, it: - Removes the legacy "A3 series" deployment section to focus on the recommended DSpark-based deployment. - 更新 the disagg

#### 2026-10-20

- [PR #19186](https://github.com/vllm-project/vllm-ascend/pull/19186) 已合并
  - 中文：【v0.30.0】【文档】【杂项】更新 DeepSeek V4 Pro A3 DSpark PD deployment for MRv2 on v0.30.0
  - 原文：[v0.30.0][Doc][Misc] Update DeepSeek V4 Pro A3 DSpark PD deployment for MRv2 on v0.30.0
  - 说明：This PR 更新 the DeepSeek-V4-Pro tutorial for the vLLM-Ascend v0.30.0 release, focusing on Atlas 800 A3 deployment with DSpark. Specifically, it: - Removes the legacy A3 MTP 配置 from Multi-Node Online Deployment and the MTP var

#### 2026-10-16

- [PR #17768](https://github.com/vllm-project/vllm-ascend/pull/17768) 已关闭
  - 中文：【持续集成】迁移 DeepSeek V4 Pro PD 夜间 to PCP
  - 原文：[CI] Migrate DeepSeek V4 Pro PD nightly to PCP
  - 说明：- 迁移 the DeepSeek V4 Pro W4A8 PD 夜间 prefiller from DSA-CP TP8 to MRV2 TP2 x PCP4. - 对齐 the Mooncake 预填充 topology with TP2 and keep the decoder topology unchanged. - Lower the prefiller GPU 显存 utilization from 0.94 to 0.

### DeepSeek V3.1

#### 2026-11-05

- [PR #21093](https://github.com/vllm-project/vllm-ascend/pull/21093) 已合并
  - 中文：【持续集成】Sunset A5 夜间 测试用例 for deprecated models
  - 原文：[CI] Sunset A5 nightly test cases for deprecated models
  - 说明：Background. A TMG (Test Management Group) model sunset review concluded that Qwen3-235B-A22B and DeepSeek-V3.1 (including the V3.1-Terminus variant) are deprecated and should no longer be exercised in the 夜间 A5 matrix on this release b

#### 2026-10-23

- [PR #19645](https://github.com/vllm-project/vllm-ascend/pull/19645) 已合并
  - 中文：【v0.30.0】【文档】【杂项】移除 obsolete DeepSeek-V3.1 CPP tutorial
  - 原文：[v0.30.0][Doc][Misc] Remove obsolete DeepSeek-V3.1 CPP tutorial
  - 说明：The CPP user guide already covers deployment, tuning, online calibration, and 性能. The separate DeepSeek-V3.1 tutorial duplicates that guidance and uses a model whose vLLM Ascend 支持 ended in v0.30.0. - Delete the redundant tuto
- [PR #19644](https://github.com/vllm-project/vllm-ascend/pull/19644) 已合并
  - 中文：【文档】【杂项】移除 redundant dynamic chunked 流水线并行 tutorial
  - 原文：[Doc][Misc] Remove redundant dynamic chunked pipeline parallel tutorial
  - 说明：The CPP user guide already covers deployment, tuning, online calibration, and 性能. The separate DeepSeek-V3.1 tutorial duplicates that guidance and uses a model whose vLLM Ascend 支持 ended in v0.30.0. - Delete the redundant tuto

### DeepSeek R1

#### 2026-11-04

- [PR #20966](https://github.com/vllm-project/vllm-ascend/pull/20966) 进行中
  - 中文：【功能】【模型】DeepSeek-R1-Distill-Llama-70B model 支持
  - 原文：[Feature][Model] Add DeepSeek-R1-Distill-Llama-70B model support
  - 说明：Adapt the community model DeepSeek-R1-Distill-Llama-70B to Ascend for task 24 from 9079, with a BF16 TP=4/DP=1/PP=1 精度 配置, 支持-matrix entry, deployment tutorial, and real-hardware validation. The model reuses the existi

#### 2026-11-02

- [Issue #1228](https://github.com/vllm-project/vllm-ascend/issues/1228) 已关闭
  - 中文：【缺陷】Quantized model startup is slow
  - 原文：[Bug] Quantized model startup is slow
  - 说明：I was previously running the quantized version of DeepSeek-R1, and found proc.start to be very slow. Applying this change ( significantly 改进 speed. I just tried the non-quantized model, DeepSeek-V2, and it was already fast, so no spee
- [PR #20595](https://github.com/vllm-project/vllm-ascend/pull/20595) 草稿
  - 中文：【修复】【310P】Distill Qwen FP16 注意力 overflow and validate replay
  - 原文：[BugFix][310P] Fix Distill Qwen FP16 attention overflow and validate replay
  - 说明：DeepSeek-R1-Distill-Qwen-1.5B can generate incorrect FP16 answers on 310P even when eager and ACL Graph agree. Independent FP32 profiling found unscaled, unmasked QK scores around 310k, exceeding FP16 range before the usual 注意力 scale.

#### 2026-10-18

- [PR #19110](https://github.com/vllm-project/vllm-ascend/pull/19110) 进行中
  - 中文：【修复】【v0.30.0】MXFP8 MLA 草稿权重的 NZ 转换时机
  - 原文：[BugFix][v0.30.0] 修复 MXFP8 MLA 草稿权重的 NZ 转换时机
  - 说明：将 main 分支 PR 18893（ 96fa3538847804647d5dbbb5487baad65a9d699b ）的 MXFP8 MLA 草稿权重修复回移到 releases/v0.30.0，并按发布分支现有的投影输入宽度门控调整回归测试。 DeepSeek-R1-0528 的 MXFP8 MTP 在关闭 MLAPO 时仍可使用非连续缓存的 PROLOG V3 writer。原 NZ 管理只考虑 MLAPO/FA-quant，导致通用量化后处理提前把融合 Q/KV

### DeepSeek V3.2

#### 2026-11-04

- [PR #19715](https://github.com/vllm-project/vllm-ascend/pull/19715) 已关闭
  - 中文：【测试】【MRV2】新增 DeepSeek V3.2 MRV1/MRV2 parity harness
  - 原文：[Test][MRV2] Add DeepSeek V3.2 MRV1/MRV2 parity harness
  - 说明：Part of 20666. Adds a reproducible 夜间 entry point for comparing DeepSeek V3.2 W8A8 on MRV1 and MRV2 with the official single-node A3 topology (DP2 + TP8 + EP + MTP + FULL 解码 ONLY ). The new harness: - records the model revision, so

#### 2026-11-02

- [PR #20675](https://github.com/vllm-project/vllm-ascend/pull/20675) 进行中
  - 中文：【测试】【MRV2】新增 DeepSeek V3.2 MRV1/MRV2 parity 回退 harness
  - 原文：[Test][MRV2] Add DeepSeek V3.2 MRV1/MRV2 parity regression harness
  - 说明：Part of 20674 and 20673. Adds a resource-heavy, manual 夜间 回退 for DeepSeek V3.2 W8A8 on MRV1 and MRV2. This is a test-only change; no production runner behavior or environment variable is changed, and no v0.30.0-era patch is for
- [Issue #20674](https://github.com/vllm-project/vllm-ascend/issues/20674) 进行中
  - 中文：【测试】【MRV2】DeepSeek V3.2 精度 nondeterminism and batch=4 性能 回退
  - 原文：[Test][MRV2] DeepSeek V3.2 accuracy nondeterminism and batch=4 performance regression
  - 说明：Problem DeepSeek-V3.2-W8A8 still has two independent MRV1/MRV2 acceptance issues on a single exclusive Atlas 800T A3 (16 NPUs): 1. The 严格 logprob gate is not stable for all prompts. With the candidate source mount verified, short-Englis
- [Issue #20673](https://github.com/vllm-project/vllm-ascend/issues/20673) 进行中
  - 中文：【测试】【MRV2】DeepSeek V3.2 精度 and 性能 parity with MRV1
  - 原文：[Test][MRV2] DeepSeek V3.2 accuracy and performance parity with MRV1
  - 说明：背景 需要系统验证 DeepSeek V3.2 在 Model Runner V2（MRV2）上的精度与性能，并以 Model Runner V1（MRV1）为基准，确保重构不引入功能或性能回归。 本 issue 由 @wisdom1710 认领，用于跟踪测试配置、真机数据、回归用例及后续问题修复。 验收范围 1. 可复现配置 - 在 tests/e2e 或 nightly 增加 DeepSeek V3.2 的可复现配置。 - 记录模型 revision、硬件、CANN /
- [Issue #20622](https://github.com/vllm-project/vllm-ascend/issues/20622) 已关闭
  - 中文：【测试】【MRV2】DeepSeek V3.2 精度 nondeterminism and batch=4 性能 回退
  - 原文：[Test][MRV2] DeepSeek V3.2 accuracy nondeterminism and batch=4 performance regression
  - 说明：Problem DeepSeek-V3.2-W8A8 still has two independent MRV1/MRV2 acceptance issues on a single exclusive Atlas 800T A3 (16 NPUs): 1. The 严格 logprob gate is not stable for all prompts. With the candidate source mount verified, short-Englis
- [Issue #20666](https://github.com/vllm-project/vllm-ascend/issues/20666) 已关闭
  - 中文：【测试】【MRV2】DeepSeek V3.2 精度 and 性能 parity with MRV1
  - 原文：[Test][MRV2] DeepSeek V3.2 accuracy and performance parity with MRV1
  - 说明：背景 需要系统验证 DeepSeek V3.2 在 Model Runner V2（MRV2）上的精度与性能，并以 Model Runner V1（MRV1）为基准，确保重构不引入功能或性能回归。 本 issue 由 @wisdom1710 认领，用于跟踪测试配置、真机数据、回归用例及后续问题修复。 验收范围 1. 可复现配置 - 在 tests/e2e 或 nightly 增加 DeepSeek V3.2 的可复现配置。 - 记录模型 revision、硬件、CANN /
- [PR #20630](https://github.com/vllm-project/vllm-ascend/pull/20630) 已关闭
  - 中文：【测试】【MRV2】新增 DeepSeek V3.2 MRV1/MRV2 parity 回退 harness
  - 原文：[Test][MRV2] Add DeepSeek V3.2 MRV1/MRV2 parity regression harness
  - 说明：Part of 20622 and 20666. Adds a resource-heavy, manual 夜间 回退 for DeepSeek V3.2 W8A8 on MRV1 and MRV2. This is a test-only change; no production runner behavior or environment variable is changed, and no v0.30.0-era patch is for
- [Issue #19713](https://github.com/vllm-project/vllm-ascend/issues/19713) 已关闭
  - 中文：【测试】【MRV2】DeepSeek V3.2 精度 and 性能 parity with MRV1
  - 原文：[Test][MRV2] DeepSeek V3.2 accuracy and performance parity with MRV1
  - 说明：背景 需要系统验证 DeepSeek V3.2 在 Model Runner V2（MRV2）上的精度与性能，并以 Model Runner V1（MRV1）为基准，确保重构不引入功能或性能回归。 本 issue 由 @wisdom1710 认领，用于跟踪测试配置、真机数据、回归用例及后续问题修复。 验收范围 1. 可复现配置 - 在 tests/e2e 或 nightly 增加 DeepSeek V3.2 的可复现配置。 - 记录模型 revision、硬件、CANN /

### DeepSeek V3

#### 2026-11-03

- [PR #20775](https://github.com/vllm-project/vllm-ascend/pull/20775) 已合并
  - 中文：【持续集成】Sunset the legacy A5 model 测试用例 in the 夜间 CI
  - 原文：[CI] Sunset the legacy A5 model test cases in the nightly CI
  - 说明：- 移除 the following 夜间 A5 测试用例 yamls: - Qwen3 235b w8a8 A5.yaml - DeepSeek V31 W4A4C8 A5.yaml - DeepSeek V31 Terminus w4a8 w8a8 A5.yaml - 移除 the corresponding entries from 夜间 配置.yaml Does this PR introduce any user

#### 2026-10-27

- [PR #18025](https://github.com/vllm-project/vllm-ascend/pull/18025) 已关闭
  - 中文：【修复】DeepSeek-V3-每周
  - 原文：[Bugfix]fix DeepSeek-V3-weekly
  - 说明：- vLLM main:

### DeepSeek OCR

#### 2026-10-26

- [PR #19818](https://github.com/vllm-project/vllm-ascend/pull/19818) 已合并
  - 中文：【文档】【杂项】Deprecate discontinued models and 更新 支持 matrix
  - 原文：[Doc][Misc] Deprecate discontinued models and update support matrix
  - 说明：This pull request deprecates several discontinued models (including DeepSeek-OCR-2, Hunyuan-A13B-Instruct, InternVL3.5, LLaVA-OneVision-Qwen2-0.5B-OV, Minitron-8B-Base, Mixtral-8x7B-Instruct-v0.1, PaddleOCR-VL, Qwen2.5-Math-RM-72B, Qwen3-AS
- [PR #19784](https://github.com/vllm-project/vllm-ascend/pull/19784) 已合并
  - 中文：【v0.30.0】【文档】【杂项】Deprecate discontinued models and 更新 支持 matrix
  - 原文：[v0.30.0][Doc][Misc] Deprecate discontinued models and update support matrix
  - 说明：This pull request deprecates several discontinued models (including DeepSeek-OCR-2, Hunyuan-A13B-Instruct, InternVL3.5, LLaVA-OneVision-Qwen2-0.5B-OV, Minitron-8B-Base, Mixtral-8x7B-Instruct-v0.1, PaddleOCR-VL, Qwen2.5-Math-RM-72B, Qwen3-AS

## Qwen

### Qwen3.6

#### 2026-11-10

- [Issue #21462](https://github.com/vllm-project/vllm-ascend/issues/21462) 进行中
  - 中文：【缺陷】:Qwen3.6-35B-A3B MoE W8A8（compressed-tensors）在 vllm-ascend v0.30.0rc2 输出乱码，v0.18 正常
  - 原文：[Bug]:Qwen3.6-35B-A3B MoE W8A8（compressed-tensors）在 vllm-ascend v0.30.0rc2 输出乱码，v0.18 正常
- [PR #20253](https://github.com/vllm-project/vllm-ascend/pull/20253) 已关闭
  - 中文：Recon struction
  - 说明：【】qwen3.6-mtp、MiniMax-M3 on A3 --- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary conditions (e.g. empty input, single/zero element, min/
- [Issue #10401](https://github.com/vllm-project/vllm-ascend/issues/10401) 已关闭
  - 中文：【缺陷】: v0.20.2rc1 2*910B3 部署 Qwen3.6-27B 推理速度较慢，不到10 tokens/s
  - 原文：[Bug]: v0.20.2rc1  2*910B3  部署 Qwen3.6-27B 推理速度较慢，不到10 tokens/s

#### 2026-11-09

- [PR #21365](https://github.com/vllm-project/vllm-ascend/pull/21365) 进行中
  - 中文：【测试】【DSpark】Make the 修复 Qwen3.6 logprob comparison opt-in
  - 原文：[Test][DSpark] Make the fixed Qwen3.6 logprob comparison opt-in
  - 说明：The Qwen3.6-27B DSpark graph replay test intermittently fails when comparing ordinary 解码 with 修复 DSpark. In the reported failure, both paths selected the same token, but their logprobs differed by 0.1472 , exceeding the 0.1378 tole

#### 2026-11-05

- [PR #21015](https://github.com/vllm-project/vllm-ascend/pull/21015) 已合并
  - 中文：【修复】【310P】【MRV2】对齐 MTP graph capture with PCP and 避免 unnecessary token transfers
  - 原文：[BugFix][310P][MRV2] Align MTP graph capture with PCP and avoid unnecessary token transfers
  - 说明：After 19801, the 共享 投机-解码 caller passes pcp manager to graph capture. The 310P override did not accept this keyword. Consequently, Qwen3.6-35B-A3B-W8A8 MTP fails during draft-预填充 graph capture even with PCP disabled (

#### 2026-11-04

- [Issue #20827](https://github.com/vllm-project/vllm-ascend/issues/20827) 进行中
  - 中文：【缺陷】Hybrid models: stale block-table rows cause deterministic garbled output for 前缀-缓存-hit requests
  - 原文：[Bug] Hybrid models: stale block-table rows cause deterministic garbled output for prefix-cache-hit requests
  - 说明：Environment - vllm-ascend 0.30.x (also verified present on current main ), vllm 0.30.0, CANN 9.1.0 - Ascend 910B2 ×2 (different physical devices), Qwen3.6-35B-A3B (hybrid: ~30 GDN layers + 注意力), 前缀缓存 启用 - Trigger geomet

#### 2026-11-03

- [PR #20808](https://github.com/vllm-project/vllm-ascend/pull/20808) 进行中
  - 中文：【文档】【Recipe】新增 Ascend overlay for Qwen3.6-35B-A3B
  - 原文：[Doc][Recipe] Add Ascend overlay for Qwen3.6-35B-A3B
  - 说明：This PR adds the Huawei-scoped recipe overlay for Qwen/Qwen3.6-35B-A3B , introducing two Ascend variants: - ascend w8a8 a3 (Ascend 910C): W8A8, TP=2 without 专家并行, BF16, 135168 context, FULL AND PIECEWISE ACLGraph, HCCL BUFFSIZE=1
- [PR #20714](https://github.com/vllm-project/vllm-ascend/pull/20714) 进行中
  - 中文：【文档】更新 Qwen3.5-27B & Qwen3.6-27B documentation
  - 原文：[Doc]Update Qwen3.5-27B & Qwen3.6-27B documentation
  - 说明：【】移除 note regarding 'PD Separation Deployment' and production recommendations. --- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary co

#### 2026-11-02

- [PR #20633](https://github.com/vllm-project/vllm-ascend/pull/20633) 进行中
  - 中文：【持续集成】新增 测试用例 for Qwen3.6-35B-w8a8
  - 原文：[CI] add test cases for Qwen3.6-35B-w8a8
  - 说明：【】新增 测试用例 for Qwen3.6-35B-w8a8 No by running 测试用例 --- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary conditions (e.g. empty
- [PR #20624](https://github.com/vllm-project/vllm-ascend/pull/20624) 进行中
  - 中文：test: 新增 Qwen3.6 MRV1/MRV2 parity e2e coverage
  - 原文：test: add Qwen3.6 MRV1/MRV2 parity e2e coverage
  - 说明：Summary Adds tests/e2e/pull request/one card/model runner v2/test qwen3 6 mrv2.py covering the Qwen3.6 family on Model Runner V2 versus Model Runner V1. Coverage: - batch=1 parity: TP1 and TP2, eager and FULL 解码 ONLY , greedy and random
- [PR #20623](https://github.com/vllm-project/vllm-ascend/pull/20623) 进行中
  - 中文：docs: 补充文档 Qwen3.6 Model Runner V2 支持 and known issues
  - 原文：docs: document Qwen3.6 Model Runner V2 support and known issues
  - 说明：Summary - 35B-A3B tutorial: 新增 Known Issues for Model Runner V2 covering the 预填充 TTFT host overhead ( 20608) and the batch 1 divergence ( 20609); renumber FAQ to 11 and 更新 its in-page reference. - 27B tutorial: 新增 a Model Runner V
- [Issue #20569](https://github.com/vllm-project/vllm-ascend/issues/20569) 已关闭
  - 中文：【缺陷】:在Atlas 650E上，单机两卡使用vllm-ascend0.30.RC2部署Qwen3.6-35B-A3B报错HCCLALLGather
  - 原文：[Bug]:在Atlas 650E上，单机两卡使用vllm-ascend0.30.RC2部署Qwen3.6-35B-A3B报错HCCLALLGather
- [Issue #15536](https://github.com/vllm-project/vllm-ascend/issues/15536) 已关闭
  - 中文：【缺陷】: Qwen3.6-27B在8张300I DUO卡上使用0.23.0RC1-310P镜像进行部署，一直报错Not allow to synchronize captured-stream, stream_id=35.
  - 原文：[Bug]: Qwen3.6-27B在8张300I DUO卡上使用0.23.0RC1-310P镜像进行部署，一直报错Not allow to synchronize captured-stream, stream_id=35.
- [Issue #20609](https://github.com/vllm-project/vllm-ascend/issues/20609) 进行中
  - 中文：【MRV2】Qwen3.6-35B-A3B batched MTP is not batch-invariant: identical prompts in one batch diverge (MRV1 and MRV2)
  - 原文：[MRV2] Qwen3.6-35B-A3B batched MTP is not batch-invariant: identical prompts in one batch diverge (MRV1 and MRV2)
  - 说明：Summary On Atlas 800T A3, Qwen3.6-35B-A3B W8A8 with qwen3 5 mtp and two concurrent prompts is not reproducible within either MRV1 or MRV2. Both runners exceed the 解码 tolerance on the second prompt and both eventually diverge on token id
- [Issue #20608](https://github.com/vllm-project/vllm-ascend/issues/20608) 进行中
  - 中文：【MRV2】Qwen3.6-35B-A3B 预填充 TTFT 回退: host ACLNN workspace/tiling is not reused
  - 原文：[MRV2] Qwen3.6-35B-A3B prefill TTFT regression: host ACLNN workspace/tiling is not reused
  - 说明：Summary On Atlas 800T A3, with Qwen3.6-35B-A3B W8A8, TP=2, MTP=3 and ACL Graph 启用, the MRV2 model runner is 25.4% slower than MRV1 on 预填充 TTFT for batch=4, prompt len=2048, max tokens=1 . The 回退 is reproducible and is not c
- [Issue #20607](https://github.com/vllm-project/vllm-ascend/issues/20607) 进行中
  - 中文：【性能】解码 GDN 注意力 元数据 is rebuilt for every GDN KV-缓存 group (~22% of a host-bound step)
  - 原文：[Performance] Decode GDN attention metadata is rebuilt for every GDN KV-cache group (~22% of a host-bound step)
  - 说明：Context Qwen3.8-27B hybrid model (48 GDN / linear-注意力 layers + 16 full-注意力 layers), TP8 on 910B4, vLLM 0.30.0 + vllm-ascend v0.30.0rc2, MTP spec4 投机解码, FULL 解码 ONLY CUDA graph, max-num-seqs 48 . In this confi

#### 2026-10-30

- [PR #20314](https://github.com/vllm-project/vllm-ascend/pull/20314) 进行中
  - 中文：【文档】【杂项】Revise deployment 配置 details and 精度 evaluation methods
  - 原文：[Doc][Misc] Revise deployment config details and accuracy evaluation methods
  - 说明：This PR revises the deployment 配置 and 精度 evaluation sections of docs/source/tutorials/models/Qwen3.6-35B-A3B.md . Specifically, it: - Removes the redundant system tuning commands (CPU frequency governor, vm.swappiness , ker
- [PR #20280](https://github.com/vllm-project/vllm-ascend/pull/20280) 已关闭
  - 中文：【文档】【杂项】Revise deployment 配置 details and 精度 evaluation methods
  - 原文：[Doc][Misc] Revise deployment config details and accuracy evaluation methods
  - 说明：This PR revises the deployment 配置 and 精度 evaluation sections of docs/source/tutorials/models/Qwen3.6-35B-A3B.md . Specifically, it: - Removes the redundant system tuning commands (CPU frequency governor, vm.swappiness , ker

#### 2026-10-29

- [PR #20170](https://github.com/vllm-project/vllm-ascend/pull/20170) 已合并
  - 中文：【文档】【杂项】Revise 精度 evaluation methods and 配置 details
  - 原文：[Doc][Misc] Revise accuracy evaluation methods and config details
  - 说明：This PR 更新 the documentation for Qwen3.5-27B and Qwen3.6-27B models. Specifically, it: - Refines the instructions for using AISBench for 精度 evaluation by linking to the detailed guide. - Removes the redundant example 精度 eva
- [PR #20175](https://github.com/vllm-project/vllm-ascend/pull/20175) 已合并
  - 中文：【文档】【杂项】Modify model 服务 host and 更新 evaluation instructions
  - 原文：[Doc][Misc] Modify model serving host and update evaluation instructions
  - 说明：This PR 更新 the host IP from 127.0.0.1 to 0.0.0.0 in the model 服务 instructions for Qwen3.5 and Qwen3.6 models, allowing the served models to be accessible externally (e.g., from within a Docker container). It also refactors and sim
- [Issue #20153](https://github.com/vllm-project/vllm-ascend/issues/20153) 进行中
  - 中文：【MRV2】Complete Qwen3.6 adaptation on Model Runner v2 and ensure 精度/性能 parity with MRV1
  - 原文：[MRV2] Complete Qwen3.6 adaptation on Model Runner v2 and ensure accuracy/performance parity with MRV1
  - 说明：Motivation Model Runner v2 is the next-generation worker path in vllm-ascend ( vllm ascend/worker/v2/ ), and the Qwen3.6 family (dense 27B and MoE 35B-A3B) is currently exercised on MRV1 only. Existing reports show the MRV2 path is not read

#### 2026-10-28

- [PR #19834](https://github.com/vllm-project/vllm-ascend/pull/19834) 已关闭
  - 中文：【文档】【杂项】Correct Qwen3.6 model name and 新增 ModelScope link for Qwen3.8
  - 原文：[Doc][Misc] Correct Qwen3.6 model name and add ModelScope link for Qwen3.8
  - 说明：This PR corrects the model name Qwen3.6-27B-w8a8c8-fa-mxfp8 to Qwen3.6-27B-w8a8c8-mxfp8 in the Qwen3.5/3.6 tutorial documentation. Additionally, it adds the missing ModelScope link for Qwen3.8-27B-w8a8c8-mxfp8 in the Qwen3.8 tutorial. I hav
- [PR #20096](https://github.com/vllm-project/vllm-ascend/pull/20096) 进行中
  - 中文：【文档】【杂项】新增 Qwen3.6-35B-A3B Ascend recipe overlay
  - 原文：[Doc][Misc] Add Qwen3.6-35B-A3B Ascend recipe overlay
  - 说明：--- 清单 新增 a Huawei-scoped recipe overlay for Qwen/Qwen3.6-35B-A3B . - 新增 A3 W8A8 and 950DT MXFP8/C8 variants. - Provide hardware-specific presets with Python frontend and MTP. - Use th
- [PR #20046](https://github.com/vllm-project/vllm-ascend/pull/20046) 已合并
  - 中文：【文档】【杂项】更新 Qwen3.6-35B-A3B documentation header
  - 原文：[Doc][Misc] Update Qwen3.6-35B-A3B documentation header
  - 说明：This PR 更新 the section header in the Qwen3.6-35B-A3B model tutorial from "Using lm eval" to "Using Language Model Evaluation Harness" to 改进 clarity and use the full name of the evaluation harness. Does this PR introduce any user-f
- [PR #20052](https://github.com/vllm-project/vllm-ascend/pull/20052) 已合并
  - 中文：【文档】【杂项】更新 Qwen3.6-35B-A3B documentation header
  - 原文：[Doc][Misc] Update Qwen3.6-35B-A3B documentation header
  - 说明：This PR 更新 the section header in the Qwen3.6-35B-A3B model tutorial from "Using lm eval" to "Using Language Model Evaluation Harness" to 改进 clarity and use the full name of the evaluation harness. Does this PR introduce any user-f
- [PR #20050](https://github.com/vllm-project/vllm-ascend/pull/20050) 已合并
  - 中文：【文档】【杂项】Simplify Qwen3.6 vLLM benchmark guidance
  - 原文：[Doc][Misc] Simplify Qwen3.6 vLLM benchmark guidance
  - 说明：- Simplify Section 8.2 of the Qwen3.6-35B-A3B tutorial by replacing the model-specific vllm bench example and parameter notes with a link to the upstream vLLM benchmarking guide. Documentation
- [PR #20053](https://github.com/vllm-project/vllm-ascend/pull/20053) 已合并
  - 中文：【Cherry-pick】【releases/v0.30.0】【文档】【杂项】Simplify Qwen3.6 vLLM benchmark guidance (from #20050)
  - 原文：[Cherry-pick][releases/v0.30.0][Doc][Misc] Simplify Qwen3.6 vLLM benchmark guidance (from #20050)
  - 说明：Cherry-pick of PR 20050 onto releases/v0.30.0 . Original PR: 20050 Original author: @zsponly --- - Simplify Section 8.2 of the Qwen3.6-35B-A3B tutorial by replacing the model-specific vllm bench example and parameter notes with a link to th
- [PR #20018](https://github.com/vllm-project/vllm-ascend/pull/20018) 已合并
  - 中文：【文档】【杂项】移除 Qwen3.8-27B and Qwen3.5-27B-Qwen3.6-27B 性能 evaluation example
  - 原文：[Doc][Misc] Remove Qwen3.8-27B  and Qwen3.5-27B-Qwen3.6-27B performance evaluation example
  - 说明：This PR removes the example 性能 evaluation details for Qwen3.8-27B and Qwen3.5-27B-Qwen3.6-27B under the vLLM Benchmark section, including the parameters table, subcommands explanation, and the example command. Does this PR introduc
- [PR #20014](https://github.com/vllm-project/vllm-ascend/pull/20014) 已合并
  - 中文：【文档】【杂项】Cleanup 性能 evaluation section for Qwen3.8-27B and Qwen3.5-27B-Qwen3.6-27B
  - 原文：[Doc][Misc] Cleanup performance evaluation section for Qwen3.8-27B and Qwen3.5-27B-Qwen3.6-27B
  - 说明：This PR cleans up the 性能 evaluation section for the Qwen3.8-27B and Qwen3.5-27B-Qwen3.6-27B models by removing the specific Qwen3.8-27B and Qwen3.5-27B-Qwen3.6-27B examples and related vLLM benchmark commands. This keeps the docume
- [PR #19960](https://github.com/vllm-project/vllm-ascend/pull/19960) 已合并
  - 中文：【文档】【杂项】Clarify Qwen3.6 deployment verification and benchmarking
  - 原文：[Doc][Misc] Clarify Qwen3.6 deployment verification and benchmarking
  - 说明：- 新增 a /health check and startup guidance after the Qwen3.6 服务 examples. - Correct the vllm bench serve random input length option and explain the benchmark target, workload parameters, and result output. - Simplify the AISBench table
- [PR #19978](https://github.com/vllm-project/vllm-ascend/pull/19978) 已合并
  - 中文：【文档】【杂项】Backport Qwen3.6 deployment verification and benchmarking to v0.30.0
  - 原文：[Doc][Misc] Backport Qwen3.6 deployment verification and benchmarking to v0.30.0
  - 说明：Backport 19960 to releases/v0.30.0 for the Qwen3.6-35B-A3B deployment guide: - 新增 service startup and /health verification guidance. - Correct the benchmark random input length option and explain workload parameters and result output. - Si

#### 2026-10-27

- [PR #19935](https://github.com/vllm-project/vllm-ascend/pull/19935) 已合并
  - 中文：【持续集成】modify model path in Qwen3.6-27B-W8A8-310p-300I-DUO.yaml
  - 原文：[CI] modify model path in Qwen3.6-27B-W8A8-310p-300I-DUO.yaml 
  - 说明：This PR 更新 the 测试用例 name and model identifier in the end-to-end test 配置 for Qwen3.6-27B-W8A8-310P-300I-DUO.yaml to use the correct "310P" variant. No, this is a test 配置
- [PR #19928](https://github.com/vllm-project/vllm-ascend/pull/19928) 已合并
  - 中文：【持续集成】modify model path in Qwen3.6-27B-W8A8-310p-300I-DUO.yaml
  - 原文：[CI] modify model path in Qwen3.6-27B-W8A8-310p-300I-DUO.yaml
  - 说明：This PR 更新 the 测试用例 name and model identifier in the end-to-end test 配置 for Qwen3.6-27B-W8A8-310P-300I-DUO.yaml to use the correct "310P" variant. No, this is a test 配置
- [PR #19977](https://github.com/vllm-project/vllm-ascend/pull/19977) 已关闭
  - 中文：【Cherry-pick】【releases/v0.30.0】【文档】【杂项】Clarify Qwen3.6 deployment verification and benchmarking (from #19960)
  - 原文：[Cherry-pick][releases/v0.30.0][Doc][Misc] Clarify Qwen3.6 deployment verification and benchmarking (from #19960)
  - 说明：Backport of 19960 onto releases/v0.30.0 . The automated /cherry-pick encountered a context conflict in the Qwen3.6 documentation, so this PR applies the same 32 additions and 10 deletions manually. Original PR head: 3e4d314dfa5f67b737797dbb
- [PR #19933](https://github.com/vllm-project/vllm-ascend/pull/19933) 已关闭
  - 中文：【持续集成】modify model path in Qwen3.6-27B-W8A8-310p-300I-DUO.yaml
  - 原文：[CI] modify model path in Qwen3.6-27B-W8A8-310p-300I-DUO.yaml
  - 说明：【】modify model path in Qwen3.6-27B-W8A8-310p-300I-DUO.yaml no run the cases --- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary conditions
- [PR #19816](https://github.com/vllm-project/vllm-ascend/pull/19816) 已合并
  - 中文：【文档】【杂项】Correct Qwen3.6 and Qwen3.8 model names and ModelScope links
  - 原文：[Doc][Misc] Correct Qwen3.6 and Qwen3.8 model names and ModelScope links
  - 说明：This PR corrects the model names for quantized Qwen3.6-27B models by removing the unused -fa suffix and adds the missing ModelScope download link for Qwen3.8-27B-w8a8c8-mxfp8 . No, this is a do
- [PR #19814](https://github.com/vllm-project/vllm-ascend/pull/19814) 已合并
  - 中文：【文档】【杂项】修复 Qwen3.6 and Qwen3.8 model 权重 names and ModelScope links
  - 原文：[Doc][Misc] Fix Qwen3.6 and Qwen3.8 model weight names and ModelScope links
  - 说明：This PR corrects the model 权重 names for Qwen3.6-27B-w8a8c8-mxfp8 (removing the incorrect -fa- suffix) and adds the missing ModelScope download link for Qwen3.8-27B-w8a8c8-mxfp8 in the documentation. Does this PR introduce any user-facin
- [PR #19787](https://github.com/vllm-project/vllm-ascend/pull/19787) 已合并
  - 中文：【文档】新增 Qwen3.6 W4A8 MXFP model link
  - 原文：[Doc] Add Qwen3.6 W4A8 MXFP model link
  - 说明：Fill the empty ModelScope link for Qwen3.6-35B-A3B-w4a8-mxfp in the Qwen3.6 model 权重 table. This follows the Qwen3.6 documentation 更新 in 18248. No. This is a documentation-only link up
- [PR #19827](https://github.com/vllm-project/vllm-ascend/pull/19827) 已合并
  - 中文：【Cherry-pick】【releases/v0.30.0】【文档】新增 Qwen3.6 W4A8 MXFP model link (from #19787)
  - 原文：[Cherry-pick][releases/v0.30.0][Doc] Add Qwen3.6 W4A8 MXFP model link (from #19787)
  - 说明：Cherry-pick of PR 19787 onto releases/v0.30.0 . Original PR: 19787 Original author: @zsponly --- Fill the empty ModelScope link for Qwen3.6-35B-A3B-w4a8-mxfp in the Qwen3.6 model 权重 table. This follows the Qwen3.6 documentation 更新

#### 2026-10-23

- [PR #18248](https://github.com/vllm-project/vllm-ascend/pull/18248) 已合并
  - 中文：【文档】【模型】更新 Qwen3.6-35B-A3B docs for 950DT and A2/A3
  - 原文：[Doc][Model] Update Qwen3.6-35B-A3B docs for 950DT and A2/A3
  - 说明：- 补充文档 Qwen3.6-35B-A3B deployment on 950DT Products with a single-NPU W8A8 MXFP8 example, C8 KV-缓存 option, 950DT image, and model 权重 entries. The W4A8 MXFP4 download link is intentionally left blank until it is available. - Updat
- [PR #19297](https://github.com/vllm-project/vllm-ascend/pull/19297) 已合并
  - 中文：【Cherry-pick】【releases/v0.30.0】【文档】【模型】更新 Qwen3.6-35B-A3B docs for 950DT and A2/A3 (from #18248)
  - 原文：[Cherry-pick][releases/v0.30.0][Doc][Model] Update Qwen3.6-35B-A3B docs for 950DT and A2/A3 (from #18248)
  - 说明：Cherry-pick of PR 18248 onto releases/v0.30.0 . Original PR: 18248 Original author: @zsponly --- 补充文档 Qwen3.6-35B-A3B W8A8 MXFP8 服务 on a single NPU of a 950DT Products node, including the model 权重 entries, startup command, and

#### 2026-10-22

- [PR #18175](https://github.com/vllm-project/vllm-ascend/pull/18175) 已合并
  - 中文：[Doc] [Feature]为Qwen3.6-27B-w8a8c8-mxfp8和W8A8C8常见问题添加文档
  - 原文：[Doc][Feature] Add documentation for Qwen3.6-27B-w8a8c8-mxfp8 and W8A8C8 FAQ
  - 说明：This PR adds documentation and deployment guidelines for the newly supported Qwen3.6-27B-w8a8c8-mxfp8 quantized model. It includes hardware requirements, a brief description, and a detailed FAQ section explaining how to use the W8A8C8 quant
- [PR #18214](https://github.com/vllm-project/vllm-ascend/pull/18214) 已合并
  - 中文：[Doc] [Feature]为Qwen3.6-27B-w8a8c8-mxfp8模型添加文档
  - 原文：[Doc][Feature] Add documentation for Qwen3.6-27B-w8a8c8-mxfp8 model
  - 说明：This PR adds documentation and deployment instructions for the Qwen3.6-27B-w8a8c8-mxfp8 quantized model on Ascend NPUs (950DT and 950PR Products). It includes hardware requirements, startup commands, and parameter descriptions (such as --kv

#### 2026-10-19

- [Issue #13999](https://github.com/vllm-project/vllm-ascend/issues/13999) 已关闭
  - 中文：Qwen3.5-27B/Qwen3.6-27B 部署文档中 FlashComm 配置对 Dense 模型不兼容，建议补充说明
  - 说明：📚 The doc issue 在 Qwen3.5-27B / Qwen3.6-27B 的部署文档中，PD 分离（预填充-解码 Disaggregation）部署示例包含了 VLLM ASCEND 启用 FLASHCOMM1=1 环境变量，并注明该变量“可在 预填充 节点上启用 Allreduce 通信优化，降低长上下文 预填充 的通信开销”。 然而，实际测试发现，对于 Qwen3.5-27B / Qwen3.6-27B 这类 Den

#### 2026-10-17

- [Issue #14152](https://github.com/vllm-project/vllm-ascend/issues/14152) 已关闭
  - 中文：【缺陷】【310P】: Qwen3.6-27B-w8a8 fails with aclnn_parameter_error(EZ1001): bias dtype should be INT32, actual dtype is DT_FLOAT16
  - 原文：[Bug][310P]: Qwen3.6-27B-w8a8 fails with aclnn_parameter_error(EZ1001): bias dtype should be INT32, actual dtype is DT_FLOAT16
  - 说明：Bug Description Eco-Tech/Qwen3.6-27B-w8a8 on Atlas 300I DUO (310P3) fails during model warmup with: Eco-Tech/Qwen3.6-35B-A3B-w8a8 works fine on the same hardware/image with the same --量化 ascend flag. Both models are multimodal (bo

### Qwen3.8

#### 2026-11-10

- [PR #21432](https://github.com/vllm-project/vllm-ascend/pull/21432) 已合并
  - 中文：【文档】对齐 Qwen3.8 950DT PD examples with tested settings
  - 原文：[Doc] Align Qwen3.8 950DT PD examples with tested settings
  - 说明：对齐 the Qwen3.8-Flash-Next 950DT products basic PD limits and 池化 connectors with the supplied tested settings. For basic PD, set both 预填充 and 解码 to --max-model-len 143360 and --max-num-seqs 64 . 更新 the deployment table an
- [PR #21433](https://github.com/vllm-project/vllm-ascend/pull/21433) 已合并
  - 中文：【文档】【releases/v0.32.0rc】对齐 Qwen3.8 950DT PD examples
  - 原文：[Doc][releases/v0.32.0rc] Align Qwen3.8 950DT PD examples
  - 说明：对齐 the Qwen3.8-Flash-Next 950DT products basic PD limits and 池化 connectors with the supplied tested settings. For basic PD, set both 预填充 and 解码 to --max-model-len 143360 and --max-num-seqs 64 . 更新 the deployment table an
- [PR #21444](https://github.com/vllm-project/vllm-ascend/pull/21444) 进行中
  - 中文：perf(dflash2): keep qwen3.8 dflash2 draft tiling and runner lengths on device
  - 说明：Select the optional flash attn npu 3 backend for supported A2/A3 V2 DFlash2 drafts. Keep packed TND queries and rejection-corrected lengths on device, share 调度器 tiling across compatible layers, and refresh stable 元数据 buffers befo
- [PR #21367](https://github.com/vllm-project/vllm-ascend/pull/21367) 已合并
  - 中文：【文档】新增 950DT long-context PD case for Qwen3.8-Flash-Next
  - 原文：[Doc] Add 950DT long-context PD case for Qwen3.8-Flash-Next
  - 说明：新增 a 950DT products long-context PD example after the image-and-text 10K case. Both roles use TP4 × DP1, a maximum model length of 1,010,000 tokens, 16 sequences, 4096 batch tokens, and matching YaRN factor-4 overrides. Retain the supplied
- [PR #21369](https://github.com/vllm-project/vllm-ascend/pull/21369) 已合并
  - 中文：【文档】【releases/v0.32.0rc】新增 Qwen3.8-Flash-Next long-context PD case
  - 原文：[Doc][releases/v0.32.0rc] Add Qwen3.8-Flash-Next long-context PD case
  - 说明：新增 a 950DT products long-context PD example after the image-and-text 10K case. Both roles use TP4 × DP1, a maximum model length of 1,010,000 tokens, 16 sequences, 4096 batch tokens, and matching YaRN factor-4 overrides. Retain the supplied

#### 2026-11-09

- [PR #21347](https://github.com/vllm-project/vllm-ascend/pull/21347) 已合并
  - 中文：【修复】Qwen4Exp MTP position 缓存 for 长上下文
  - 原文：[BugFix] Fix Qwen4Exp MTP position cache for long context
  - 说明：What this PR does Fixes the long-context MTP position-缓存 mismatch for Qwen3.8-Flash-Next while keeping the behavior change scoped to the Qwen4Exp model implementation. When the target model is started with --max-model-len 1010000 and YaR
- [PR #21362](https://github.com/vllm-project/vllm-ascend/pull/21362) 进行中
  - 中文：【修复】Qwen4Exp MTP position 缓存 for 长上下文
  - 原文：[BugFix] Fix Qwen4Exp MTP position cache for long context
  - 说明：What this PR does Fixes the long-context MTP position-缓存 mismatch for Qwen3.8-Flash-Next on the main branch while keeping the behavior change scoped to the Qwen4Exp model implementation. When the target model is started with --max-model-
- [PR #21194](https://github.com/vllm-project/vllm-ascend/pull/21194) 已合并
  - 中文：【性能】【模型】启用 Qwen4Exp device preprocessing and host ViT 元数据
  - 原文：[Performance][Model] Enable Qwen4Exp device preprocessing and host ViT metadata
  - 说明：Qwen4Exp (Qwen3.8-Flash-Next) inherits the upstream multimodal processor and therefore misses the Ascend raw-image preprocessing path already used by Qwen3.5-VL. Register the existing Ascend processor and preprocessing mixin while preservin
- [Issue #21341](https://github.com/vllm-project/vllm-ascend/issues/21341) 进行中
  - 中文：【性能】: Qwen3.8-Flash-Next on 910B4: async scheduling improves 解码 but can worsen short-burst TTFT
  - 原文：[Performance]: Qwen3.8-Flash-Next on 910B4: async scheduling improves decode but can worsen short-burst TTFT
  - 说明：Proposal to 改进 性能 We run Qwen3.8-Flash-Next W8A8 on four Ascend 910B4 NPUs, with TP4, expert parallelism and no 投机解码 . Native async scheduling made 解码 much faster, but TTFT became slower and less consistent
- [PR #21230](https://github.com/vllm-project/vllm-ascend/pull/21230) 已合并
  - 中文：【持续集成】Use W4A8 检查点 for Qwen3.8 Flash-Next A5 夜间
  - 原文：[CI] Use W4A8 checkpoint for Qwen3.8 Flash-Next A5 nightly
  - 说明：Use Eco-Tech/Qwen3.8-Flash-Next-w4a8-mxfp for the Qwen3.8 Flash-Next A5 夜间 on releases/v0.32.0rc , keeping the existing Eco-Tech/ ModelScope namespace. - 更新 the model identifier and matching served model name. - 重命名 only this A5
- [PR #21312](https://github.com/vllm-project/vllm-ascend/pull/21312) 进行中
  - 中文：【修复】【Spec Decode】Size nested MTP draft position 缓存
  - 原文：[BugFix][Spec Decode] Size nested MTP draft position cache
  - 说明：What this PR does Fixes long-context MTP startup/运行时 failures for models whose text 配置 is nested under hf text 配置 (for example Qwen3.8-style configs). The vLLM revision currently pinned by vLLM Ascend tries to size the MT
- [PR #20326](https://github.com/vllm-project/vllm-ascend/pull/20326) 已关闭
  - 中文：【Feat】【模型】新增 Qwen3.8-Next PLE host 卸载
  - 原文：[Feat][Model] Add Qwen3.8-Next PLE host offload
  - 说明：新增 opt-in BF16 PLE/ngram embedding host 卸载 for Qwen3.8-Next (Qwen4Exp) on Ascend, based on current main after 16981. Keep vocabulary shards in CANN-registered host 显存 and gather the selected rows directly on NPU with a masked Trit
- [Issue #21286](https://github.com/vllm-project/vllm-ascend/issues/21286) 进行中
  - 中文：enable_super_kernel + enable_static_kernel crashes at startup with AI Core Error 271 (mxfp8 KV + MTP)
  - 说明：Environment - Hardware: Ascend 950DT (aarch64), 7 NPUs, DP=7 TP=1 - Image: ascend/vllm-ascend:v0.30.0-a5 (CANN 9.2.1, torch npu 2.10.0.post7) - Model: Qwen3.8-27B-w8a8c8-mxfp8, --kv-缓存-dtype mxfp8 - MTP 投机解码: {"method": "
- [PR #20750](https://github.com/vllm-project/vllm-ascend/pull/20750) 已合并
  - 中文：【文档】Expand Qwen3.8-Flash-Next deployment guide for A2, A3 and 950DT products
  - 原文：[Doc] Expand Qwen3.8-Flash-Next deployment guide for A2, A3 and 950DT products
  - 说明：Expand the Qwen3.8-Flash-Next tutorial with Docker, colocated 服务, basic PD, functional verification, evaluation, and tuning guidance for A2 series, A3 series, and 950DT products. Keep hardware tabs in that order, use W4A8/W4A8-MXFP Mod
- [PR #20965](https://github.com/vllm-project/vllm-ascend/pull/20965) 已合并
  - 中文：【文档】【releases/v0.32.0rc】Backport Qwen3.8-Flash-Next deployment guide
  - 原文：[Doc][releases/v0.32.0rc] Backport Qwen3.8-Flash-Next deployment guide
  - 说明：Expand the Qwen3.8-Flash-Next tutorial with Docker, colocated 服务, basic PD, functional verification, evaluation, and tuning guidance for A2 series, A3 series, and 950DT products. Keep hardware tabs in that order, use W4A8/W4A8-MXFP Mod

#### 2026-11-06

- [PR #21193](https://github.com/vllm-project/vllm-ascend/pull/21193) 进行中
  - 中文：【性能】【模型】【v0.32.0rc】启用 Qwen4Exp device preprocessing and host ViT 元数据
  - 原文：[Performance][Model][v0.32.0rc] Enable Qwen4Exp device preprocessing and host ViT metadata
  - 说明：Qwen4Exp (Qwen3.8-Flash-Next) inherits the upstream multimodal processor and therefore misses the Ascend raw-image preprocessing path already used by Qwen3.5-VL. Register the existing Ascend processor and preprocessing mixin while preservin
- [Issue #21189](https://github.com/vllm-project/vllm-ascend/issues/21189) 进行中
  - 中文：【文档】: Feedback for `/en/v0.30.0/tutorials/models/Qwen3.8-27B.html`使用650E设备单卡部署Qwen3.8-27B-w8a8-mxfp8-mtp模型服务，指导中--additional-配置 '{"enable_cpu_binding": true, "enable_flashcomm1": true}'，但是实际拉模型服务 Flash Comm v1 is only supported when tp_size > 1报错
  - 原文：[Doc]: Feedback for `/en/v0.30.0/tutorials/models/Qwen3.8-27B.html`使用650E设备单卡部署Qwen3.8-27B-w8a8-mxfp8-mtp模型服务，指导中--additional-config '{"enable_cpu_binding": true, "enable_flashcomm1": true}'，但是实际拉模型服务 Flash Comm v1 is only supported when tp_size > 1报错
  - 说明：📚 The doc issue 模型服务脚本： !/bin/sh Load model from ModelScope to speed up download export MODEL PATH=/home/beifen/zll/Qwen3.8-27B-w8a8-mxfp8-mtp/ export VLLM USE MODELSCOPE=True export HCCL BUFFSIZE=512 export PYTORCH NPU ALLOC CONF=expandab

#### 2026-11-05

- [Issue #21113](https://github.com/vllm-project/vllm-ascend/issues/21113) 进行中
  - 中文：【缺陷】Default cudagraph_capture_sizes exhausts NPU SQ/CQ streams on dense models (AclmdlRICaptureBegin 207005)
  - 原文：[Bug] Default cudagraph_capture_sizes exhausts NPU SQ/CQ streams on dense models (AclmdlRICaptureBegin 207005)
  - 说明：Environment - vllm-ascend 0.30.0rc2, vLLM 0.30.0, CANN 9.2.0, torch npu 2.10 - Atlas 910B2 64 GiB, Ubuntu 22.04 aarch64 - Model: Qwen3.8-27B-w8a8 (msmodelslim W8A8 DYNAMIC , ~29.6 GB 权重), --max-model-len 8192 Reproduce Expected Capture
- [Issue #21112](https://github.com/vllm-project/vllm-ascend/issues/21112) 进行中
  - 中文：【缺陷】权重-only W8A16 compressed-tensors 检查点 fall through _detect_quant_type and abort with bare NotImplementedError
  - 原文：[Bug] Weight-only W8A16 compressed-tensors checkpoints fall through _detect_quant_type and abort with bare NotImplementedError
  - 说明：Environment - vllm-ascend 0.30.0rc2 ( 8fde6d4e3 ), vLLM 0.30.0, CANN 9.2.0, torch/torch npu 2.10 - Atlas 910B2 64 GiB, Ubuntu 22.04 aarch64 - Model: Qwen3.8-27B-W8A16 — compressed-tensors pack-quantized , GPTQ int8 channel-wise symmetric we
- [PR #20361](https://github.com/vllm-project/vllm-ascend/pull/20361) 已合并
  - 中文：【功能】gdn adaptive verify for dspark
  - 原文：[Feature] add gdn adaptive verify for dspark
  - 说明：启用 DSpark adaptive verification for GDN hybrid models on Ascend. - Register capability hooks for device-side query trimming and variable-length FULL graphs. - Use strided convolution and recurrent 内核 to preserve accepted states and
- [PR #20739](https://github.com/vllm-project/vllm-ascend/pull/20739) 已合并
  - 中文：【测试】新增 GLM-5.2 layerwise PD and Qwen3.8 PP coverage; retire legacy 每周 cases
  - 原文：[Test] Add GLM-5.2 layerwise PD and Qwen3.8 PP coverage; retire legacy weekly cases
  - 说明：更新 每周 coverage with newer models and retire legacy cases. - 新增 a four-node GLM-5.2 W8A8C8 layerwise PD 精度 test on A3, using 预填充 DP2/TP16 and 解码 DP16/TP2 with MTP. - Allow external DP cases to override 路由.proxy sc
- [PR #21069](https://github.com/vllm-project/vllm-ascend/pull/21069) 进行中
  - 中文：【持续集成】Request Qwen3.8 A5 夜间 rerun
  - 原文：[CI] Request Qwen3.8 A5 nightly rerun
  - 说明：Empty PR to request a rerun of the Qwen3.8 A5 性能 case. Source job: Test: Qwen3.8-Flash-Next-w8a8-mxfp8-mtp-A5; perf 16k failed its output-吞吐 gate (131.6586 token/s vs 必填 155.2 token/s). No source files are changed. -
- [PR #21011](https://github.com/vllm-project/vllm-ascend/pull/21011) 进行中
  - 中文：【性能】【Qwen3.8Next】【SP】融合 o_proj MM+ReduceScatter and gdn in_proj AllGather+Matmul for Qwen4Exp
  - 原文：[Performance][Qwen3.8Next][SP] Fuse o_proj MM+ReduceScatter and gdn in_proj AllGather+Matmul for Qwen4Exp
  - 说明：What this PR does On TP8 + flashcomm1 序列 parallel, Qwen4Exp (Qwen3.8-Flash-Next) hybrid linear 注意力 / full 注意力 layers issue a standalone ReduceScatter after every 注意力 output projection and a standalone AllGather befor

#### 2026-11-04

- [PR #20852](https://github.com/vllm-project/vllm-ascend/pull/20852) 草稿
  - 中文：【性能】重叠 Qwen3.8 索引器 prolog with QSA preparation
  - 原文：[Performance] Overlap Qwen3.8 indexer prolog with QSA preparation
  - 说明：Qwen3.8 QSA previously serialized the 索引器 prolog with the main QKV preparation and main KV-缓存 更新, although the two branches consume independent projections and write disjoint caches. This change: - splits the 索引器 into prepare
- [Issue #20843](https://github.com/vllm-project/vllm-ascend/issues/20843) 进行中
  - 中文：【缺陷】AssertionError in sanity_check_mm_encoder_outputs on 300I A2: multimodal embeddings is NoneType
  - 原文：[Bug] AssertionError in sanity_check_mm_encoder_outputs on 300I A2: multimodal embeddings is NoneType
  - 说明：When 服务 a multimodal model (Qwen3.8-27B-w8a8) with vLLM + vllm-ascend, the engine crashes with an AssertionError in sanity check mm encoder outputs while processing a multimodal (image) request. In my case this happened while generatin

#### 2026-11-03

- [PR #20814](https://github.com/vllm-project/vllm-ascend/pull/20814) 草稿
  - 中文：【性能】【模型】新增 opt-in Qwen4Exp HC injection dual stream
  - 原文：[Performance][Model] Add opt-in Qwen4Exp HC injection dual stream
  - 说明：新增 an opt-in Qwen4Exp HyperConnection dual-stream experiment for Qwen3.8 Flash-Next. The merged HC down projection contains independent low-rank gate rows and injection rows. With multistream qwen4 exp hc=true , injection is projected on a
- [PR #20509](https://github.com/vllm-project/vllm-ascend/pull/20509) 已合并
  - 中文：【持续集成】【模型】新增 Qwen3.8 Flash Next 性能 夜间用例 for v0.32.0rc
  - 原文：[CI][Model] Add Qwen3.8 Flash Next performance nightly cases for v0.32.0rc
  - 说明：新增 Qwen3.8 Flash Next 128K/1K and 16K/1K 性能 回退 cases for A3 and A5 to releases/v0.32.0rc through the existing YAML-driven 夜间 runner. Register both model artifacts for preloading and reuse the existing GSM8K performanc
- [PR #20756](https://github.com/vllm-project/vllm-ascend/pull/20756) 进行中
  - 中文：【修复】【模型】支持 dense 序列 parallelism for the Qwen3.5 family (Qwen3.8-27B)
  - 原文：[BugFix][Model] Support dense sequence parallelism for the Qwen3.5 family (Qwen3.8-27B)
  - 说明：Port of 19001 ( releases/v0.30.0 ) to main. Same content. Upstream vLLM gates 序列 parallelism on use 序列 parallel moe , which requires an MoE 检查点 with expert parallelism. As a result, dense Qwen3.5-family 检查点 (Qwen3
- [PR #20741](https://github.com/vllm-project/vllm-ascend/pull/20741) 进行中
  - 中文：【文档】【Qwen3.8】新增 libm.so.6 linker troubleshooting for 950DT
  - 原文：[Doc][Qwen3.8] Add libm.so.6 linker troubleshooting for 950DT
  - 说明：新增 a 5.2 Troubleshooting subsection to the Qwen3.8-27B tutorial covering the /lib64/libm.so.6 linker error reported in 20245. The 950DT Qwen3.8 image ships the math libraries under /usr/lib64/ but the linker defaults to /lib64/ . 补充文档
- [PR #20728](https://github.com/vllm-project/vllm-ascend/pull/20728) 草稿
  - 中文：【测试】Recipe dispatch and preview smoke test (do not 合并)
  - 原文：[Test] Recipe dispatch and preview smoke test (do not merge)
  - 说明：Temporary integration smoke test — do not 合并. This draft adds three lines of 可见 test text to guide sections.ascend in recipes/overlays/Qwen/Qwen3.8-27B.yaml . Two signed-off commits exercise PR creation and synchronization: - Initia

#### 2026-11-01

- [PR #20444](https://github.com/vllm-project/vllm-ascend/pull/20444) 已合并
  - 中文：【releases/v0.32.0rc】【MRV2】【性能】启用 Qwen CPU length 优化 by default (#20327)
  - 原文：[releases/v0.32.0rc][MRV2][Performance] Enable Qwen CPU length optimization by default (#20327)
  - 说明：Backport the same five-file Qwen 特性 delta from 20327 ( ddf8e788caf3a4d719294913cfc3b0842bfe2dc9 ) to releases/v0.32.0rc . Existing differences between the upstream branches are preserved. Based on upstream ccdf1383df3debdd31fff3456b019
- [PR #20327](https://github.com/vllm-project/vllm-ascend/pull/20327) 已合并
  - 中文：【MRV2】【性能】启用 Qwen3.8 Flash Next CPU length 优化 by default
  - 原文：[MRV2][Performance] Enable Qwen3.8 Flash Next CPU length optimization by default
  - 说明：Based on upstream 1deb03579065a0ae6d89cdbe74e073512c9e20fe , with one 特性 commit to preserve the current CI source/workflow snapshot. Audited Qwen3.8 Flash Next Model Runner V2 consumers automatically skip the redundant exact-count D2H
- [PR #20443](https://github.com/vllm-project/vllm-ascend/pull/20443) 已合并
  - 中文：【功能】【模型】【v0.32】启用 Qwen3.8 Flash Next PP and SP
  - 原文：[Feature][Model][v0.32] Enable Qwen3.8 Flash Next PP and SP
  - 说明：Summary Port the Qwen3.8 Flash Next pipeline-parallel (PP) and 序列-parallel (SP/FlashComm1) 支持 from 20311 to the releases/v0.32.0rc release branch. The packed QSA/GDN/PLE KV-缓存 layout remains safe for PP stage-local ownership.
- [PR #20502](https://github.com/vllm-project/vllm-ascend/pull/20502) 已合并
  - 中文：【算子】【修复】启用 A5 MegaMoE for Qwen4Exp with 2560 hidden size and preserve 路由 for unquantized MTP drafts
  - 原文：[Ops][BugFix] Enable A5 MegaMoE for Qwen4Exp with 2560 hidden size and preserve routing for unquantized MTP drafts
  - 说明：Summary Backport the behavior of 20402 onto releases/v0.32.0rc (base ffca1c99b ). - Allow hidden size 2560 for the A5 MegaMoE Qwen3.8 Flash Next 配置. - Keep quantized target MoE layers on MegaMoE. When an unquantized MoE layer is
- [PR #20467](https://github.com/vllm-project/vllm-ascend/pull/20467) 已合并
  - 中文：【性能】【Qwen3.8Next】【注意力】【v0.32.0rc】Dispatch 预填充 between FIA+mask and GBSA at 24K logical KV
  - 原文：[Performance][Qwen3.8Next][Attention] Dispatch prefill between FIA+mask and GBSA at 24K logical KV [v0.32.0rc]
  - 说明：What this PR does This PR ports the Qwen4Exp FIA + selected-token-mask dispatch and the 24K logical-可见-KV dispatch policy from 20304 onto vllm-project/vllm-ascend:releases/v0.32.0rc . The original commit ordering and author attribution
- [PR #20304](https://github.com/vllm-project/vllm-ascend/pull/20304) 已合并
  - 中文：【性能】【Qwen3.8Next】【注意力】Dispatch 预填充 between FIA+mask and GBSA at 24K logical KV
  - 原文：[Performance][Qwen3.8Next][Attention] Dispatch prefill between FIA+mask and GBSA at 24K logical KV
  - 说明：What this PR does This PR targets the current vllm-project/vllm-ascend:main directly and contains exactly two commits: the initial Qwen4Exp FIA + selected-token-mask phase dispatch, followed by the 24K logical-可见-KV dispatch policy. Th

#### 2026-10-31

- [PR #20498](https://github.com/vllm-project/vllm-ascend/pull/20498) 已关闭
  - 中文：【功能】【模型】Use native LightningIndexerV2 for QSA
  - 原文：[Feature][Model] Use native LightningIndexerV2 for QSA
  - 说明：新增 CANN LightningIndexerV2 bindings and integrate the operator into QSA for Qwen3.8-Flash-Next. The previous implementation expands request 元数据 into per-query lengths and page tables before calling LightningIndexer. The new implementa
- [PR #20438](https://github.com/vllm-project/vllm-ascend/pull/20438) 进行中
  - 中文：【文档】For test
  - 原文：[Doc]For test
  - 说明：【x】Corrected minor typographical errors in the Qwen3.8-27B documentation. --- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary conditions (e
- [PR #20261](https://github.com/vllm-project/vllm-ascend/pull/20261) 已合并
  - 中文：【功能】支持 Qwen3.8 QSA 池化 with AscendStore
  - 原文：[Feature] Support Qwen3.8 QSA pooling with AscendStore
  - 说明：启用 AscendStore 池化 for the Qwen3.8 QSA/GDN hybrid 缓存 and coordinate QSA and PLE transfers with their 缓存 state. User-facing behavior 支持 池化 for the Qwen3.8 hybrid 缓存 layout, including bulk Memcache transfer with MTP

#### 2026-10-30

- [PR #20370](https://github.com/vllm-project/vllm-ascend/pull/20370) 进行中
  - 中文：【功能】Qwen3.8-Next PLE host 卸载 and ETP sharding
  - 原文：[Feature] Add Qwen3.8-Next PLE host offload and ETP sharding
  - 说明：新增 opt-in BF16 PLE/ngram embedding host 卸载 for Qwen3.8-Next (Qwen4Exp) on Ascend, plus Engram 张量并行 (ETP) sharding. PLE host 卸载: PLE tables stay in CANN-registered host 显存 (DDR); the NPU gathers selected rows direct
- [PR #20366](https://github.com/vllm-project/vllm-ascend/pull/20366) 进行中
  - 中文：【重构】【模型】Move Qwen4Exp MTP 缓存 annotation to model scope
  - 原文：[Refactor][Model] Move Qwen4Exp MTP cache annotation to model scope
  - 说明：Follow-up to 16981. The MTP KV-缓存 group annotation 新增 for Qwen3.8Next/Qwen4 is model-specific, but its model detection and layer-layout logic currently live in the 共享 patch KV 缓存 utils.py. This PR moves the Qwen4Exp-specific be
- [PR #20365](https://github.com/vllm-project/vllm-ascend/pull/20365) 已关闭
  - 中文：【重构】【模型】Move Qwen4Exp MTP 缓存 annotation to model scope
  - 原文：[Refactor][Model] Move Qwen4Exp MTP cache annotation to model scope
  - 说明：Follow-up to 16981. The MTP KV-缓存 group annotation 新增 for Qwen3.8Next/Qwen4 is model-specific, but its model detection and layer-layout logic currently live in the 共享 patch KV 缓存 utils.py . This PR moves the Qwen4Exp-specific b
- [Issue #20354](https://github.com/vllm-project/vllm-ascend/issues/20354) 进行中
  - 中文：【缺陷】【v0.26】【Qwen3.8 Flash-Next】: AscendStore misreads 768-token request hashes as 8-token hashes
  - 原文：[bug]:[v0.26][Qwen3.8 Flash-Next] AscendStore misreads 768-token request hashes as 8-token hashes
- [Issue #20353](https://github.com/vllm-project/vllm-ascend/issues/20353) 进行中
  - 中文：【缺陷】【v0.26】【Qwen3.8 Flash-Next】: Request-local ring forces external 缓存 hits to zero
  - 原文：[bug]:[v0.26][Qwen3.8 Flash-Next] Request-local ring forces external cache hits to zero
- [Issue #20352](https://github.com/vllm-project/vllm-ascend/issues/20352) 进行中
  - 中文：【缺陷】【v0.26】【Qwen3.8 Flash-Next】: KVPool disables validated GDN regrouping
  - 原文：[bug]:[v0.26][Qwen3.8 Flash-Next] KVPool disables validated GDN regrouping
- [Issue #20342](https://github.com/vllm-project/vllm-ascend/issues/20342) 进行中
  - 中文：【缺陷】【v0.26.0】【qwen3.8-flash-next】: ASCEND_ENABLE_USE_FABRIC_MEM=1 with AscendStoreConnector hangs at graph capture (EI0002 under eager)
  - 原文：[bug]:[v0.26.0][qwen3.8-flash-next] ASCEND_ENABLE_USE_FABRIC_MEM=1 with AscendStoreConnector hangs at graph capture (EI0002 under eager)
- [PR #19056](https://github.com/vllm-project/vllm-ascend/pull/19056) 已关闭
  - 中文：【功能】dense SP 支持 for Qwen3.8
  - 原文：[Feature] add dense SP support for Qwen3.8
  - 说明：新增 a scoped Qwen3.5 decoder layer override with explicit 序列-parallel all-gather and 减少-scatter boundaries. Wire opt-in FlashComm enablement and 新增 unit, collective, engine, graph-mode, MTP, and full-权重 coverage. Does this PR
- [PR #20311](https://github.com/vllm-project/vllm-ascend/pull/20311) 进行中
  - 中文：【功能】【模型】启用 Qwen3.8 Flash Next PP and SP
  - 原文：[Feature][Model] Enable Qwen3.8 Flash Next PP and SP
  - 说明：Summary Adapt the existing Qwen3.8/Qwen4-Exp pipeline-parallel (PP) and 序列-parallel (SP/FlashComm1) work from Lethobenthos20/vllm-ascend 4 onto the current vllm-project/vllm-ascend main , then make the packed QSA/GDN/PLE KV-缓存 layo
- [PR #16981](https://github.com/vllm-project/vllm-ascend/pull/16981) 已合并
  - 中文：【功能】【模型】Qwen3.8 Flash Next 支持
  - 原文：[Feature][Model] Add Qwen3.8 Flash Next support
  - 说明：Summary This ports the Qwen3.8 Flash Next 支持 originally developed in 15162 onto the current main APIs, while reusing the upstream Qwen4Exp model implementation instead of copying upstream model code into the plugin. The change adds: -

#### 2026-10-29

- [PR #20282](https://github.com/vllm-project/vllm-ascend/pull/20282) 进行中
  - 中文：【模型】【重构】对齐 Qwen3.8 MTP quant mapping and QSA RoPE paths
  - 原文：[Model][Refactor] Align Qwen3.8 MTP quant mapping and QSA RoPE paths
  - 说明：This is a follow-up to 16981, based on \ shaopeng-666:feat/qwen38-flash-next-main-v1\ at \ eb43043aa94e20aa74cf9883d3a3554a12b8b350\ . - Move Qwen4Exp MTP quant-description layer-id remapping out of the 共享 ModelSlim 配置 and into the
- [Issue #20245](https://github.com/vllm-project/vllm-ascend/issues/20245) 进行中
  - 中文：【文档】: Feedback for `/en/latest/tutorials/models/Qwen3.8-27B.html`
  - 原文：[Doc]: Feedback for `/en/latest/tutorials/models/Qwen3.8-27B.html`
  - 说明：📚 The doc issue 按照 RuntimeError: Failed to compile /tmp/tmpl0guag6r/npu utils.cpp, error: /usr/bin/ld: cannot find /lib64/libm.so.6: No such file or directory /usr/bin/ld: cannot find /lib64/libmvec.so.1: No such file or directory clang: e
- [Issue #20229](https://github.com/vllm-project/vllm-ascend/issues/20229) 进行中
  - 中文：【缺陷】: Qwen3.8-27B OffloadingConnector fails on non-contiguous KV 缓存
  - 原文：[Bug]: Qwen3.8-27B OffloadingConnector fails on non-contiguous KV cache
- [PR #20201](https://github.com/vllm-project/vllm-ascend/pull/20201) 进行中
  - 中文：【功能】【模型】QSA full-注意力 FIA fallback for Qwen3.8-Flash-Next (issue #20117)
  - 原文：[Feature][Model] Add QSA full-attention FIA fallback for Qwen3.8-Flash-Next (issue #20117)
  - 说明：What does this PR do? Adds a switchable full-注意力 fallback path for the Qwen3.8-Flash-Next QSA 注意力, ported from the vllm-ascend 0.26 patch attached to issue 20117 onto the short-序列 FIA branch ( qsa-shortseq-fia , PR 19444).
- [PR #20168](https://github.com/vllm-project/vllm-ascend/pull/20168) 草稿
  - 中文：【功能】【MRV2】Capture QSA 元数据 and 启用 guarded 解码 submission
  - 原文：[Feature][MRV2] Capture QSA metadata and enable guarded decode submission
  - 说明：减少 CPU submission gaps between Qwen3.8 Flash Next Model Runner V2 解码 iterations. Eligible batches retain the exact corrected-length D2H snapshot on every step, but wait on the device stream instead of blocking the CPU. CPU bookkeepi

#### 2026-10-28

- [Issue #20117](https://github.com/vllm-project/vllm-ascend/issues/20117) 进行中
  - 中文：【文档】: vllm-ascend 0.26版本基于华为提供的patch,支持qwen3.8-flash-next中 qsa回退到全量注意力修改文件目录如下
  - 原文：[Doc]: vllm-ascend 0.26版本基于华为提供的patch,支持qwen3.8-flash-next中 qsa回退到全量attention修改文件目录如下
  - 说明：📚 The doc issue <img width="375" height="156" alt="Image" src=" / Suggest a potential alternative/修复 qsa full toxinhen.zip
- [PR #19834](https://github.com/vllm-project/vllm-ascend/pull/19834) 已关闭
  - 中文：【文档】【杂项】Correct Qwen3.6 model name and 新增 ModelScope link for Qwen3.8
  - 原文：[Doc][Misc] Correct Qwen3.6 model name and add ModelScope link for Qwen3.8
  - 说明：This PR corrects the model name Qwen3.6-27B-w8a8c8-fa-mxfp8 to Qwen3.6-27B-w8a8c8-mxfp8 in the Qwen3.5/3.6 tutorial documentation. Additionally, it adds the missing ModelScope link for Qwen3.8-27B-w8a8c8-mxfp8 in the Qwen3.8 tutorial. I hav
- [PR #19985](https://github.com/vllm-project/vllm-ascend/pull/19985) 已合并
  - 中文：【文档】【模型】更新 Qwen3.8 Flash Next deployment guidance
  - 原文：[Doc][Model] update Qwen3.8 Flash Next deployment guidance
  - 说明：- Clarifies the Qwen3.8-Flash-Next A3 deployment requirements. - Aligns the example context limit with the documented 128K 配置. - Adds capacity and service-readiness checks. - Removes the introductory PD-separation note from this
- [PR #20018](https://github.com/vllm-project/vllm-ascend/pull/20018) 已合并
  - 中文：【文档】【杂项】移除 Qwen3.8-27B and Qwen3.5-27B-Qwen3.6-27B 性能 evaluation example
  - 原文：[Doc][Misc] Remove Qwen3.8-27B  and Qwen3.5-27B-Qwen3.6-27B performance evaluation example
  - 说明：This PR removes the example 性能 evaluation details for Qwen3.8-27B and Qwen3.5-27B-Qwen3.6-27B under the vLLM Benchmark section, including the parameters table, subcommands explanation, and the example command. Does this PR introduc
- [PR #20014](https://github.com/vllm-project/vllm-ascend/pull/20014) 已合并
  - 中文：【文档】【杂项】Cleanup 性能 evaluation section for Qwen3.8-27B and Qwen3.5-27B-Qwen3.6-27B
  - 原文：[Doc][Misc] Cleanup performance evaluation section for Qwen3.8-27B and Qwen3.5-27B-Qwen3.6-27B
  - 说明：This PR cleans up the 性能 evaluation section for the Qwen3.8-27B and Qwen3.5-27B-Qwen3.6-27B models by removing the specific Qwen3.8-27B and Qwen3.5-27B-Qwen3.6-27B examples and related vLLM benchmark commands. This keeps the docume
- [PR #19893](https://github.com/vllm-project/vllm-ascend/pull/19893) 已合并
  - 中文：【文档】【杂项】Clarify cudagraph capture sizes and 更新 Qwen3.8 details
  - 原文：[Doc][Misc] Clarify cudagraph capture sizes and update Qwen3.8 details
  - 说明：This PR 更新 the documentation for Qwen3.5, Qwen3.6, and Qwen3.8 models. Specifically, it: - Clarifies the description of \"cudagraph capture sizes\" to specify that it represents batch size tiers rather than levels of graph modes, and e

#### 2026-10-27

- [PR #19986](https://github.com/vllm-project/vllm-ascend/pull/19986) 已合并
  - 中文：【文档】【模型】更新 Qwen3.8 Flash Next deployment guidance
  - 原文：[Doc][Model] update Qwen3.8 Flash Next deployment guidance
  - 说明：- Clarifies the Qwen3.8-Flash-Next A3 deployment requirements. - Aligns the example context limit with the documented 128K 配置. - Adds capacity and service-readiness checks. - Removes the introductory PD-separation note from this
- [Issue #19995](https://github.com/vllm-project/vllm-ascend/issues/19995) 进行中
  - 中文：【Usage】: 310p双实例运行qwen3.8-27b的问题
  - 原文：[Usage]: 310p双实例运行qwen3.8-27b的问题
- [PR #19924](https://github.com/vllm-project/vllm-ascend/pull/19924) 已合并
  - 中文：【文档】【杂项】Clarify cudagraph_capture_sizes and 更新 Qwen3.8-27B hardware requirements
  - 原文：[Doc][Misc] Clarify cudagraph_capture_sizes and update Qwen3.8-27B hardware requirements
  - 说明：This PR 更新 the documentation for Qwen3.5, Qwen3.6, and Qwen3.8 models to clarify the description of cudagraph capture sizes and correct the hardware requirements for Qwen3.8-27B-w8a8 . Specifically: - Clarifies that cudagraph capture s
- [PR #19908](https://github.com/vllm-project/vllm-ascend/pull/19908) 已合并
  - 中文：【文档】【杂项】Clarify Qwen3.8-2.4T-A95B deployment guide for v0.30.0
  - 原文：[Doc][Misc]Clarify Qwen3.8-2.4T-A95B deployment guide for v0.30.0
  - 说明：Backports the documentation improvements from 19900 to releases/v0.30.0 : - Use TiB consistently for Qwen3.8-2.4T-A95B 权重 sizes. - Explain how to check startup logs during 权重 加载 and graph capture. - Use the configured SERVICE P
- [PR #19900](https://github.com/vllm-project/vllm-ascend/pull/19900) 已合并
  - 中文：【文档】【杂项】Clarify Qwen3.8-2.4T-A95B deployment guide
  - 原文：[Doc][Misc]Clarify Qwen3.8-2.4T-A95B deployment guide
  - 说明：Clarifies the Qwen3.8-2.4T-A95B deployment guide to make its examples easier to follow: - Uses TiB consistently for the model 权重 sizes. - Explains how to check startup logs while 权重 load and graphs are captured. - Uses the configur
- [PR #19853](https://github.com/vllm-project/vllm-ascend/pull/19853) 已合并
  - 中文：【持续集成】【Nightly-A2】Run Qwen3.8-27B-w8a8-A2 夜间用例 on Model Runner V2
  - 原文：[CI][Nightly-A2] Run Qwen3.8-27B-w8a8-A2 nightly case on Model Runner V2
  - 说明：tests/e2e/cases/models/configs/Qwen/Qwen3.8-27B-w8a8-A2.yaml still pins VLLM USE V2 MODEL RUNNER: "0" in its case envs. That pin came in together with 17681, so the only 2-die A2 long-context 夜间用例 (128k input, 90% 前缀缓存 reuse
- [Issue #19956](https://github.com/vllm-project/vllm-ascend/issues/19956) 进行中
  - 中文：【缺陷】:Qwen3.8-27b 启用 mooncake, the MTP sampling rate is 0 if the 前缀 exactly matches the external 前缀缓存.
  - 原文：[Bug]:Qwen3.8-27b  enabled mooncake, the MTP sampling rate is 0 if the prefix exactly matches the external prefix cache.
- [PR #19816](https://github.com/vllm-project/vllm-ascend/pull/19816) 已合并
  - 中文：【文档】【杂项】Correct Qwen3.6 and Qwen3.8 model names and ModelScope links
  - 原文：[Doc][Misc] Correct Qwen3.6 and Qwen3.8 model names and ModelScope links
  - 说明：This PR corrects the model names for quantized Qwen3.6-27B models by removing the unused -fa suffix and adds the missing ModelScope download link for Qwen3.8-27B-w8a8c8-mxfp8 . No, this is a do
- [PR #19814](https://github.com/vllm-project/vllm-ascend/pull/19814) 已合并
  - 中文：【文档】【杂项】修复 Qwen3.6 and Qwen3.8 model 权重 names and ModelScope links
  - 原文：[Doc][Misc] Fix Qwen3.6 and Qwen3.8 model weight names and ModelScope links
  - 说明：This PR corrects the model 权重 names for Qwen3.6-27B-w8a8c8-mxfp8 (removing the incorrect -fa- suffix) and adds the missing ModelScope download link for Qwen3.8-27B-w8a8c8-mxfp8 in the documentation. Does this PR introduce any user-facin

#### 2026-10-26

- [PR #19876](https://github.com/vllm-project/vllm-ascend/pull/19876) 进行中
  - 中文：【功能】【模型】Qwen3.8 Flash Next 支持 without bundled GBSA sources
  - 原文：[Feature][Model] Add Qwen3.8 Flash Next support without bundled GBSA sources
  - 说明：Summary This is an alternative Qwen3.8 Flash Next PR derived from the original shaopeng-666:feat/qwen38-flash-next-main-v1 head ( d5a0cb4a92b7b14d5c407380889994ee8f762604 ). It keeps the existing model adaptation while removing the bundled
- [PR #19820](https://github.com/vllm-project/vllm-ascend/pull/19820) 草稿
  - 中文：【Do Not Merge】Codex/qwen3.8 KV 缓存 v1
  - 原文：[Do Not Merge]Codex/qwen3.8 kv cache v1
  - 说明：【】--- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary conditions (e.g. empty input, single/zero element, min/max values, off-by-one, seque

#### 2026-10-23

- [PR #19655](https://github.com/vllm-project/vllm-ascend/pull/19655) 草稿
  - 中文：【性能】【模型】减少 Qwen4Exp KV 缓存 backing storage
  - 原文：[Perf][Model] Reduce Qwen4Exp KV cache backing storage
  - 说明：【功能】【模型】Upstream / prerequisite PR: ( 新增 Qwen3.8 Flash Next 支持). This PR builds on 16981 at adc05909ea0125d058c2c9eb3131e761929f2551 . Because that prerequisite has not merged, the comparison against main also includes its 60
- [Issue #19650](https://github.com/vllm-project/vllm-ascend/issues/19650) 进行中
  - 中文：【缺陷】: Some requests 挂起 indefinitely after 5+ hours of 200-concurrency 精度 testing with vllm-ascend v0.30.0rc2 and Qwen3.8-27B
  - 原文：[Bug]: Some requests hang indefinitely after 5+ hours of 200-concurrency accuracy testing with vllm-ascend v0.30.0rc2 and Qwen3.8-27B
- [Issue #19611](https://github.com/vllm-project/vllm-ascend/issues/19611) 进行中
  - 中文：[Bug]: 在v0.30.0rc2版本中，910B1上PD分离部署Qwen3.8-27B推理压测过程中D节点挂掉
- [Issue #19608](https://github.com/vllm-project/vllm-ascend/issues/19608) 进行中
  - 中文：【缺陷】: qwen3.8-27B-w8a8 — AICore error (MTE invalid GM access) 崩溃 in GDN spec-解码 path with MTP + FULL_DECODE_ONLY
  - 原文：[Bug]: qwen3.8-27B-w8a8 — AICore error (MTE invalid GM access) crash in GDN spec-decode path with MTP + FULL_DECODE_ONLY
- [PR #14299](https://github.com/vllm-project/vllm-ascend/pull/14299) 已关闭
  - 中文：【文档】【功能】Qwen3.8-27B tutorial
  - 原文：[Doc][Feature] Add Qwen3.8-27B tutorial
  - 说明：This PR adds the tutorial and deployment guide for the Qwen3.8-27B model on Ascend NPU (Atlas 800 A3 and Ascend 950DT series), including single-node deployment, multi-node PD separation deployment, functional verification, 精度 evaluati

#### 2026-10-22

- [PR #19444](https://github.com/vllm-project/vllm-ascend/pull/19444) 进行中
  - 中文：【功能】【模型】short-序列 dense FIA branch for Qwen3.8 QSA 注意力
  - 原文：[Feature][Model] Add short-sequence dense FIA branch for Qwen3.8 QSA attention
  - 说明：Qwen3.8-Flash-Next 的 QSA 注意力 层当前在 Ascend 上固定走 GBSA 稀疏融合算子（Lightning 索引器 选 top-k 压缩块 → npu generic block 稀疏 注意力 ）。当请求的 KV 长度 ≤ 索引器 token 预算（K=2048，微块 r=4）时，top-k 选择覆盖全部压缩块——稀疏注意力退化为全注意力，此时继续走 GBSA 的稀疏元数据开销纯属浪费。 本 PR 为

#### 2026-10-21

- [PR #19367](https://github.com/vllm-project/vllm-ascend/pull/19367) 进行中
  - 中文：【v0.31.0】【算子】【功能】short-序列 dense FIA branch for Qwen3.8 QSA 注意力
  - 原文：[v0.31.0][Ops][Feature] Add short-sequence dense FIA branch for Qwen3.8 QSA attention
  - 说明：Qwen3.8-Flash-Next 的 QSA 层（12/48 层）当前在 Ascend 上固定走 GBSA 稀疏内核：Lightning 索引器 选 top-k 压缩块 → npu generic block 稀疏 注意力 只算选中块。 短序列场景下这套流程是浪费的 ：索引器的 token 预算 K=2048（微块 r=4），当 step 内所有请求的 KV 长度 ≤ 2048 时，top-k 选择会覆盖全部压缩块——稀疏注意力退化为全注意力，
- [PR #18968](https://github.com/vllm-project/vllm-ascend/pull/18968) 已关闭
  - 中文：【功能】【模型】支持 dense 序列 parallelism for the Qwen3.5 family (Qwen3.8-27B)
  - 原文：[Feature][Model] Support dense sequence parallelism for the Qwen3.5 family (Qwen3.8-27B)
  - 说明：Upstream vLLM gates 序列 parallelism on use 序列 parallel moe , which requires an MoE 检查点 with expert parallelism. As a result, dense Qwen3.5-family 检查点 (Qwen3.5-27B / Qwen3.6-27B / Qwen3.8-27B , model type qwen3 5 te
- [Issue #19320](https://github.com/vllm-project/vllm-ascend/issues/19320) 进行中
  - 中文：【缺陷】: 单机Atlas800I A2设备，v0.30.0rc1镜像版本部署Qwen3.8-27B模型报hcclGetRootInfo(&hcclID), error code is 19， ERR02200 DIST call hccl api failed.相同设备、相同脚本，v0.26.0rc2版本不会有该问题
  - 原文：[Bug]:  单机Atlas800I A2设备，v0.30.0rc1镜像版本部署Qwen3.8-27B模型报hcclGetRootInfo(&hcclID), error code is 19， ERR02200 DIST call hccl api failed.相同设备、相同脚本，v0.26.0rc2版本不会有该问题

#### 2026-10-20

- [Issue #19294](https://github.com/vllm-project/vllm-ascend/issues/19294) 进行中
  - 中文：【Usage】: atlas 800T-A2中使用vllm-ascend:v0.23.0部署qwen3.8-27B-A8W8报错
  - 原文：[Usage]: atlas 800T-A2中使用vllm-ascend:v0.23.0部署qwen3.8-27B-A8W8报错
- [Issue #19241](https://github.com/vllm-project/vllm-ascend/issues/19241) 进行中
  - 中文：【缺陷】: Qwen3.8-27B startup fails when VLLM_PREFIX_CACHE_RETENTION_INTERVAL=4096 is not a multiple of the hybrid Mamba 调度器 block size (1536)
  - 原文：[Bug]: Qwen3.8-27B startup fails when VLLM_PREFIX_CACHE_RETENTION_INTERVAL=4096 is not a multiple of the hybrid Mamba scheduler block size (1536)

#### 2026-10-18

- [PR #19001](https://github.com/vllm-project/vllm-ascend/pull/19001) 已合并
  - 中文：【修复】【模型】【releases/v0.30.0】支持 dense 序列 parallelism for the Qwen3.5 family (Qwen3.8-27B)
  - 原文：[BugFix][Model] Support dense sequence parallelism for the Qwen3.5 family (Qwen3.8-27B) [releases/v0.30.0]
  - 说明：Adaptation of the dense-SP 特性 for the v0.30.0 release line (vLLM v0.30.0 pin). Same content as the main-line PR. Upstream vLLM gates 序列 parallelism on use 序列 parallel moe , which requires an MoE 检查点 with expert paral

#### 2026-10-16

- [PR #18983](https://github.com/vllm-project/vllm-ascend/pull/18983) 草稿
  - 中文：【持续集成】【模型】新增 Qwen3.8 Flash Next 性能 夜间用例
  - 原文：[CI][Model] Add Qwen3.8 Flash Next performance nightly cases
  - 说明：合并 order: 合并 20509 into releases/v0.32.0rc first. This main PR is on hold and remains draft; do not 合并 it yet. 新增 Qwen3.8 Flash Next 128K/1K and 16K/1K 性能 回退 cases for A3 and A5 through the existing YAML-driven Ni
- [PR #18921](https://github.com/vllm-project/vllm-ascend/pull/18921) 进行中
  - 中文：【修复】【Qwen3.8】Preserve PLE history and multi-token 解码 state
  - 原文：[BugFix][Qwen3.8] Preserve PLE history and multi-token decode state
  - 说明：1. PLE context can contain placeholder tokens during asynchronous scheduling PLE constructs n-gram embeddings from the current input tokens and their preceding token history. This history must contain the actual tokens consumed by the model

#### 2026-10-15

- [Issue #18828](https://github.com/vllm-project/vllm-ascend/issues/18828) 进行中
  - 中文：【缺陷】: Qwen3.8-27B inference hangs with AI Core error and 507057 on v0.30.0rc2 (TP=4, MTP, FULL_DECODE_ONLY)
  - 原文：[Bug]: Qwen3.8-27B inference hangs with AI Core error and 507057 on v0.30.0rc2 (TP=4, MTP, FULL_DECODE_ONLY)

### Qwen3.5

#### 2026-11-10

- [PR #21445](https://github.com/vllm-project/vllm-ascend/pull/21445) 草稿
  - 中文：【模型】【功能】支持 CLEF decision models on Ascend
  - 原文：[Model][Feature] Support CLEF decision models on Ascend
  - 说明：Adds Ascend 支持 for Cloudflare CLEF and CLEF Flash by reusing the upstream joint-schema implementation and Ascend Qwen3.5 multimodal preprocessing. Draft: confirm the last Flash E2E result and 新增 the release note and any needed documen

#### 2026-11-09

- [PR #19804](https://github.com/vllm-project/vllm-ascend/pull/19804) 已合并
  - 中文：【模型】【功能】支持 D3 decision models on Ascend
  - 原文：[Model][Feature] Support D3 decision models on Ascend
  - 说明：Adds an Ascend adapter and model registration for upstream Decision 3.0 (D3) 检查点. D3 uses a Qwen3.5 multimodal backbone with a separate answer-code readout. The adapter reuses Ascend's Qwen3.5 path and vLLM's 序列-classification
- [Issue #21366](https://github.com/vllm-project/vllm-ascend/issues/21366) 进行中
  - 中文：GDN (Qwen3.5/linear-注意力) 解码 内核 dominate step time at small batch on Ascend 950DT: RecurrentGatedDeltaRule ~180us/layer plus multi-ms stable argsort/cumsum in gdn_attn_builder
  - 原文：GDN (Qwen3.5/linear-attention) decode kernels dominate step time at small batch on Ascend 950DT: RecurrentGatedDeltaRule ~180us/layer plus multi-ms stable argsort/cumsum in gdn_attn_builder
  - 说明：Environment - vLLM-Ascend: v0.30.0-a5 image (CANN 9.2.1, torch npu 2.10.0.post7) - Hardware: Ascend 950DT (8x96GB HBM) - Model: Qwen3.8-27B w8a8c8-mxfp8 (hybrid: 48x GDN/linear-注意力 layers + 16x full 注意力), MTP spec 解码 k=3, DP
- [Issue #19918](https://github.com/vllm-project/vllm-ascend/issues/19918) 已关闭
  - 中文：【缺陷】: ENCODER_ONLY 注意力 layers run causal in 池化 models of hybrid architectures (e.g. Qwen3.5-based)
  - 原文：[Bug]: ENCODER_ONLY attention layers run causal in pooling models of hybrid architectures (e.g. Qwen3.5-based)
- [PR #21194](https://github.com/vllm-project/vllm-ascend/pull/21194) 已合并
  - 中文：【性能】【模型】启用 Qwen4Exp device preprocessing and host ViT 元数据
  - 原文：[Performance][Model] Enable Qwen4Exp device preprocessing and host ViT metadata
  - 说明：Qwen4Exp (Qwen3.8-Flash-Next) inherits the upstream multimodal processor and therefore misses the Ascend raw-image preprocessing path already used by Qwen3.5-VL. Register the existing Ascend processor and preprocessing mixin while preservin

#### 2026-11-08

- [PR #21272](https://github.com/vllm-project/vllm-ascend/pull/21272) 进行中
  - 中文：【功能】融合 序列 collective into dense SP GEMMs for Qwen3.5
  - 原文：[Feature] Fuse sequence collective into dense SP GEMMs for Qwen3.5
  - 说明：Dense 序列 parallelism (FlashComm 切换, Qwen3.5 dense family) now fuses the 序列 all-gather into the column GEMMs ( torch npu.npu all gather base mm ) and the 减少-scatter into the row GEMMs ( torch npu.npu mm 减少 scatter bas

#### 2026-11-06

- [PR #21193](https://github.com/vllm-project/vllm-ascend/pull/21193) 进行中
  - 中文：【性能】【模型】【v0.32.0rc】启用 Qwen4Exp device preprocessing and host ViT 元数据
  - 原文：[Performance][Model][v0.32.0rc] Enable Qwen4Exp device preprocessing and host ViT metadata
  - 说明：Qwen4Exp (Qwen3.8-Flash-Next) inherits the upstream multimodal processor and therefore misses the Ascend raw-image preprocessing path already used by Qwen3.5-VL. Register the existing Ascend processor and preprocessing mixin while preservin

#### 2026-11-05

- [PR #21037](https://github.com/vllm-project/vllm-ascend/pull/21037) 进行中
  - 中文：【性能】Qwen3.5 GDN: 重叠 in_proj_ba with in_proj_qkvz on the aux stream
  - 原文：[Performance]Qwen3.5 GDN: overlap in_proj_ba with in_proj_qkvz on the aux stream
  - 说明：refer to: test results: profiler: limit=0 <img width="843" height="676" alt="image" src=" / <img width="1339" height="857" alt="image" src=" / limit=64 <img width="965" height="777" alt="image"

#### 2026-11-04

- [PR #20979](https://github.com/vllm-project/vllm-ascend/pull/20979) 进行中
  - 中文：【文档】【Recipe】新增 first-party A3 (ascend_910c) validation and W8A8 TP16 variant for Qwen3.5-397B-A17B
  - 原文：[Doc][Recipe] Add first-party A3 (ascend_910c) validation and W8A8 TP16 variant for Qwen3.5-397B-A17B
  - 说明：The initial overlay import for Qwen/Qwen3.5-397B-A17B ( 19381) carries only the two 950DT variants (W8A8 / W4A4-mxfp4) extracted from the vLLM base recipe, with ascend 950dt: verified . No Atlas 800I A3 (ascend 910c) 配置 existed u
- [PR #20934](https://github.com/vllm-project/vllm-ascend/pull/20934) 进行中
  - 中文：【性能】【模型】融合 the dense-SP boundary collectives into their GEMMs (MC2, stacked on dense SP)
  - 原文：[Performance][Model] Fuse the dense-SP boundary collectives into their GEMMs (MC2, stacked on dense SP)
  - 说明：Stacked on 20756 (dense 序列 parallelism for the Qwen3.5 family) — 合并 after it. Only the last commit is unique to this PR. Dense SP replaces each per-layer TP all-减少 with a 减少-scatter + all-gather pair around the layer bounda

#### 2026-11-03

- [PR #20756](https://github.com/vllm-project/vllm-ascend/pull/20756) 进行中
  - 中文：【修复】【模型】支持 dense 序列 parallelism for the Qwen3.5 family (Qwen3.8-27B)
  - 原文：[BugFix][Model] Support dense sequence parallelism for the Qwen3.5 family (Qwen3.8-27B)
  - 说明：Port of 19001 ( releases/v0.30.0 ) to main. Same content. Upstream vLLM gates 序列 parallelism on use 序列 parallel moe , which requires an MoE 检查点 with expert parallelism. As a result, dense Qwen3.5-family 检查点 (Qwen3
- [PR #20714](https://github.com/vllm-project/vllm-ascend/pull/20714) 进行中
  - 中文：【文档】更新 Qwen3.5-27B & Qwen3.6-27B documentation
  - 原文：[Doc]Update Qwen3.5-27B & Qwen3.6-27B documentation
  - 说明：【】移除 note regarding 'PD Separation Deployment' and production recommendations. --- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary co
- [PR #20708](https://github.com/vllm-project/vllm-ascend/pull/20708) 进行中
  - 中文：【文档】【v0.30】移除 jemalloc preloading from Qwen397B PD examples
  - 原文：[Doc][v0.30] Remove jemalloc preloading from Qwen397B PD examples
  - 说明：移除 jemalloc preloading from the Qwen3.5-397B-A17B guide. Replace the four A3/A2 预填充 and 解码 preload commands with unset LD PRELOAD , and explicitly 补充文档 the jemalloc preload restriction before the startup instruction, followi
- [PR #20707](https://github.com/vllm-project/vllm-ascend/pull/20707) 进行中
  - 中文：【文档】【v0.32】移除 jemalloc preloading from Qwen397B PD examples
  - 原文：[Doc][v0.32] Remove jemalloc preloading from Qwen397B PD examples
  - 说明：移除 jemalloc preloading from the Qwen3.5-397B-A17B guide. Replace the four A3/A2 预填充 and 解码 preload commands with unset LD PRELOAD , and explicitly 补充文档 the jemalloc preload restriction before the startup instruction, followi
- [PR #20706](https://github.com/vllm-project/vllm-ascend/pull/20706) 进行中
  - 中文：【文档】【模型】移除 jemalloc preloading from Qwen397B PD examples
  - 原文：[Doc][Model] Remove jemalloc preloading from Qwen397B PD examples
  - 说明：移除 jemalloc preloading from the Qwen3.5-397B-A17B guide. Replace the four A3/A2 预填充 and 解码 preload commands with unset LD PRELOAD , and explicitly 补充文档 the jemalloc preload restriction before the startup instruction, followi

#### 2026-11-02

- [PR #20621](https://github.com/vllm-project/vllm-ascend/pull/20621) 进行中
  - 中文：【功能】【模型】启用 dense 序列 parallelism for all dense decoder families
  - 原文：[Feature][Model] Enable dense sequence parallelism for all dense decoder families
  - 说明：The FlashComm 切换 previously 启用 dense 序列 parallelism only for the Qwen3.5 family, through a model-type whitelist and a per-family decoder-layer patch. This moves the layout to the generic layer primitives every dense family sh
- [PR #20590](https://github.com/vllm-project/vllm-ascend/pull/20590) 进行中
  - 中文：【文档】新增 Ascend 310P overlays for Qwen3.5-2B/4B/9B
  - 原文：[Doc] Add Ascend 310P overlays for Qwen3.5-2B/4B/9B
  - 说明：Summary Additive Huawei-scoped overlays for Qwen3.5 Dense on Ascend 310P (Atlas 300I DUO / 200I Pro), mirroring measured scenarios from vllm-ascend-recipes 131. Depends on taxonomy ids ascend 310p / ascend 310p 2x in vllm-project/recipes 12

#### 2026-11-01

- [Issue #20525](https://github.com/vllm-project/vllm-ascend/issues/20525) 进行中
  - 中文：【RFC】启用 EVS video token pruning for Qwen3.5-VL on Ascend NPU
  - 原文：[RFC] Enable EVS video token pruning for Qwen3.5-VL on Ascend NPU
  - 说明：背景 vLLM 主线已经提供 Efficient Video Sampling（EVS）视频视觉 token 剪枝能力。Qwen3.5-VL 视频输入会产生大量视觉 token，长视频场景下会增加 预填充 计算、首 token 延迟和 KV 缓存 压力。 本 RFC 讨论将 EVS 通过 vllm-ascend 接入 Ascend NPU 的方案、使用接口和验收边界。 关联任务： 10648 关联总任务： 9079 实现 PR： 19698 方案 在 Qwen3

#### 2026-10-31

- [PR #15726](https://github.com/vllm-project/vllm-ascend/pull/15726) 已关闭
  - 中文：【文档】【修复】incorrect w8a8 model 权重 paths for A2/A3 and 300I DUO
  - 原文：[Doc][BugFix] Fix incorrect w8a8 model weight paths for A2/A3 and 300I DUO
  - 说明：In the Qwen3.5/3.6/3.8-27B tutorials, the w8a8 model 权重 paths for the Atlas 800 A3/A2 and Atlas 300I DUO deployment sections were incorrect: the -310p suffix 权重 (which is 300I DUO only) was used on A2/A3, and vice versa. Users on th
- [PR #16866](https://github.com/vllm-project/vllm-ascend/pull/16866) 已关闭
  - 中文：【性能】【模型】卸载 Qwen3.5-VL image preprocessing to NPU
  - 原文：[Performance][Model] Offload Qwen3.5-VL image preprocessing to NPU
  - 说明：- vLLM main:

#### 2026-10-30

- [PR #20283](https://github.com/vllm-project/vllm-ascend/pull/20283) 已合并
  - 中文：【文档】【杂项】更新 Qwen3.5-397B-A17B tutorial with correct model names, docker options, and evaluation details
  - 原文：[Doc][Misc] Update Qwen3.5-397B-A17B tutorial with correct model names, docker options, and evaluation details
  - 说明：This PR 更新 the tutorial documentation for Qwen3.5-397B-A17B to ensure successful deployment and evaluation. Specifically, it: - Renames the quantized model 检查点 to include the -mtp suffix (e.g., Qwen3.5-397B-A17B-w8a8-mtp ). - I
- [PR #20306](https://github.com/vllm-project/vllm-ascend/pull/20306) 已合并
  - 中文：【Cherry-pick】【releases/v0.30.0】【文档】【杂项】更新 Qwen3.5-397B-A17B tutorial with correct model names, docker options, and evaluation details (from #20283)
  - 原文：[Cherry-pick][releases/v0.30.0][Doc][Misc] Update Qwen3.5-397B-A17B tutorial with correct model names, docker options, and evaluation details (from #20283)
  - 说明：Cherry-pick of PR 20283 onto releases/v0.30.0 . Original PR: 20283 Original author: @wyb2939 --- This PR 更新 the tutorial documentation for Qwen3.5-397B-A17B to ensure successful deployment and evaluation. Specifically, it: - Renames th
- [PR #20305](https://github.com/vllm-project/vllm-ascend/pull/20305) 进行中
  - 中文：【v0.18.0】【文档】【杂项】补充文档 Qwen3.5 content-format workaround
  - 原文：[v0.18.0][Doc][Misc] Document Qwen3.5 content-format workaround
  - 说明：补充文档 the vLLM 0.18.0 Qwen3.5 chat-template content-format issue and the --chat-template-content-format openai workaround. The issue is 修复 in vLLM 0.22.0 and later. Fixes 20302 Documentat
- [Issue #20302](https://github.com/vllm-project/vllm-ascend/issues/20302) 进行中
  - 中文：【文档】【v0.18.0】Qwen3.5 chat-template content-format known issue
  - 原文：[Doc][v0.18.0] Qwen3.5 chat-template content-format known issue
  - 说明：vLLM v0.18.0 can auto-detect the Qwen3.5 chat template as string instead of openai . When a multimodal tool response contains an image, this can break multi-turn tool calling and cause the model to repeat the previous 工具调用. Scope 新增 a
- [PR #12295](https://github.com/vllm-project/vllm-ascend/pull/12295) 已关闭
  - 中文：【功能】【LoRA】Qwen3.5 hybrid-dense and 共享-experts MoE LoRA with isolated ACL compile graphs
  - 原文：[Feature][LoRA] Qwen3.5 hybrid-dense and shared-experts MoE LoRA with isolated ACL compile graphs
  - 说明：启用 and stabilize LoRA on the Qwen3.5 family in vllm-ascend across both eager and full-graph modes, and isolate base-model / adapter ACL compile graphs to 避免 replay explosions when the adapter set changes. The PR is three stacked comm

#### 2026-10-29

- [PR #18801](https://github.com/vllm-project/vllm-ascend/pull/18801) 已关闭
  - 中文：[BugFix] [v0.30.0]在MRV1上使用MXFP8混合模型的连续缓存部分
  - 原文：[BugFix][v0.30.0] Use contiguous cache sections for MXFP8 hybrid models on MRV1
  - 说明：Qwen3.5 MXFP8 hybrid PD 服务 exhibited numerical degradation with the existing page-strided layout. Restoring contiguous 缓存 sections recovered normal GPQA 精度, verified on Ascend A5. The exact operation responsible for the origin
- [PR #20170](https://github.com/vllm-project/vllm-ascend/pull/20170) 已合并
  - 中文：【文档】【杂项】Revise 精度 evaluation methods and 配置 details
  - 原文：[Doc][Misc] Revise accuracy evaluation methods and config details
  - 说明：This PR 更新 the documentation for Qwen3.5-27B and Qwen3.6-27B models. Specifically, it: - Refines the instructions for using AISBench for 精度 evaluation by linking to the detailed guide. - Removes the redundant example 精度 eva
- [PR #20175](https://github.com/vllm-project/vllm-ascend/pull/20175) 已合并
  - 中文：【文档】【杂项】Modify model 服务 host and 更新 evaluation instructions
  - 原文：[Doc][Misc] Modify model serving host and update evaluation instructions
  - 说明：This PR 更新 the host IP from 127.0.0.1 to 0.0.0.0 in the model 服务 instructions for Qwen3.5 and Qwen3.6 models, allowing the served models to be accessible externally (e.g., from within a Docker container). It also refactors and sim

#### 2026-10-28

- [PR #20055](https://github.com/vllm-project/vllm-ascend/pull/20055) 已合并
  - 中文：【文档】【杂项】Simplify Qwen3.5-397B-A17B 性能 evaluation
  - 原文：[Doc][Misc] Simplify Qwen3.5-397B-A17B performance evaluation
  - 说明：Simplify Section 8.2 of the Qwen3.5-397B-A17B guide to match the GLM model guides: retain the official vLLM benchmark link and 移除 the duplicated subcommand descriptions and 检查点-specific benchmark command. Section 8.1 continues to
- [PR #20056](https://github.com/vllm-project/vllm-ascend/pull/20056) 已合并
  - 中文：【文档】【v0.30.0】Simplify Qwen3.5-397B-A17B 性能 evaluation
  - 原文：[Doc][v0.30.0] Simplify Qwen3.5-397B-A17B performance evaluation
  - 说明：Apply the same documentation change as 20055 to releases/v0.30.0 . Simplify Section 8.2 of the Qwen3.5-397B-A17B guide to match the GLM model guides: retain the official vLLM benchmark link and 移除 the duplicated subcommand descriptions
- [PR #20018](https://github.com/vllm-project/vllm-ascend/pull/20018) 已合并
  - 中文：【文档】【杂项】移除 Qwen3.8-27B and Qwen3.5-27B-Qwen3.6-27B 性能 evaluation example
  - 原文：[Doc][Misc] Remove Qwen3.8-27B  and Qwen3.5-27B-Qwen3.6-27B performance evaluation example
  - 说明：This PR removes the example 性能 evaluation details for Qwen3.8-27B and Qwen3.5-27B-Qwen3.6-27B under the vLLM Benchmark section, including the parameters table, subcommands explanation, and the example command. Does this PR introduc
- [PR #20014](https://github.com/vllm-project/vllm-ascend/pull/20014) 已合并
  - 中文：【文档】【杂项】Cleanup 性能 evaluation section for Qwen3.8-27B and Qwen3.5-27B-Qwen3.6-27B
  - 原文：[Doc][Misc] Cleanup performance evaluation section for Qwen3.8-27B and Qwen3.5-27B-Qwen3.6-27B
  - 说明：This PR cleans up the 性能 evaluation section for the Qwen3.8-27B and Qwen3.5-27B-Qwen3.6-27B models by removing the specific Qwen3.8-27B and Qwen3.5-27B-Qwen3.6-27B examples and related vLLM benchmark commands. This keeps the docume
- [PR #19920](https://github.com/vllm-project/vllm-ascend/pull/19920) 已合并
  - 中文：【文档】Clarify Qwen3.5 PD service startup steps
  - 原文：[Doc] Clarify Qwen3.5 PD service startup steps
  - 说明：- Correct the A3 single-node context description from 128k to 133k to match the documented --max-model-len 配置. - 新增 explicit bash run p.sh and bash run d.sh commands for the A3 and 950DT 预填充-解码 deployment examples. - 新增
- [PR #19922](https://github.com/vllm-project/vllm-ascend/pull/19922) 已合并
  - 中文：【文档】Clarify Qwen3.5 PD service startup steps for v0.30.0
  - 原文：[Doc] Clarify Qwen3.5 PD service startup steps for v0.30.0
  - 说明：This is the releases/v0.30.0 counterpart of 19920. - Correct the A3 single-node context description from 128k to 133k to match the documented --max-model-len 配置. - 新增 explicit bash run p.sh and bash run d.sh commands for the A3

#### 2026-10-27

- [PR #19925](https://github.com/vllm-project/vllm-ascend/pull/19925) 已合并
  - 中文：【文档】【杂项】修复 Qwen3.5-397B benchmark command
  - 原文：[Doc][Misc]fix Qwen3.5-397B benchmark command
  - 说明：Correct the vLLM benchmark example in Section 8.2 of the Qwen3.5-397B-A17B model guide: - Use the deployed Eco-Tech/Qwen3.5-397B-A17B-w8a8 model instead of the MTP-specific 检查点. - Replace the invalid --random-input argument with the
- [PR #19931](https://github.com/vllm-project/vllm-ascend/pull/19931) 已合并
  - 中文：【文档】【杂项】修复 Qwen3.5-397B benchmark command
  - 原文：[Doc][Misc]fix Qwen3.5-397B benchmark command
  - 说明：Correct the vLLM benchmark example in Section 8.2 of the Qwen3.5-397B-A17B model guide: - Use the deployed Eco-Tech/Qwen3.5-397B-A17B-w8a8 model instead of the MTP-specific 检查点. - Replace the invalid --random-input argument with the
- [Issue #19727](https://github.com/vllm-project/vllm-ascend/issues/19727) 已关闭
  - 中文：【缺陷】: 前缀缓存 + M-RoPE models 崩溃 with balance scheduling — BalanceScheduler/DyntraLB omit uses_mrope in NewRequestData.from_request
  - 原文：[Bug]: Prefix caching + M-RoPE models crash with balance scheduling — BalanceScheduler/DyntraLB omit uses_mrope in NewRequestData.from_request
  - 说明：Summary With --启用-前缀-缓存 and an M-RoPE multimodal model (Qwen3.5 / Qwen3-VL / Qwen2.5-VL), enabling 启用 balance scheduling ( BalanceScheduler ) crashes the engine as soon as a request hits the 前缀缓存 — typically the 2nd
- [PR #19887](https://github.com/vllm-project/vllm-ascend/pull/19887) 进行中
  - 中文：perf(qwen3.5): quantize 注意力 inputs once, before the SP all-gather
  - 原文：perf(qwen3.5): quantize attention inputs once, before the SP all-gather
  - 说明：The GDN in proj projections all consume the same hidden states, so each one ran its own dynamic activation 量化 on identical input. Share one quantized activation across the group via CVLinearWrapper, removing 1-2 redundant quant op

#### 2026-10-26

- [PR #19847](https://github.com/vllm-project/vllm-ascend/pull/19847) 进行中
  - 中文：【feat】qkvz 拆分 to qkv+z, deal transpose before conv1d
  - 原文：[feat]qkvz split to qkv+z, deal transpose before conv1d
  - 说明：Monkey-patch the Qwen3.5 GDN layer to 拆分 in proj qkvz into standalone modules and 更新 the 权重 加载 mapping accordingly, which is fully equivalent to modifying the vLLM source code directly. For the Qwen3.5-35B-A3B model, the out
- [PR #19832](https://github.com/vllm-project/vllm-ascend/pull/19832) 已合并
  - 中文：【v0.30.0】【文档】【杂项】更新 支持 status for GLM-5.1, Qwen3.5/3.6-27B, and Kimi-K2.6 to Supported
  - 原文：[v0.30.0][Doc][Misc] Update support status for GLM-5.1, Qwen3.5/3.6-27B, and Kimi-K2.6 to Supported
  - 说明：This PR 更新 the 支持 status of several models in the 支持 matrix to reflect their current verification status: - 更新 GLM-5.1 , Qwen3.5-27B / Qwen3.6-27B , and Kimi-K2.6 from Experimental (🔵) to Supported (✅). - Reorders the "
- [Issue #18587](https://github.com/vllm-project/vllm-ascend/issues/18587) 已关闭
  - 中文：[Bug] ：使用MooncakeLayerwiseConnector的Qwen3.5-122B PD分解在启动时失败— “Tensor start addr与2M不一致”
  - 原文：[Bug]:  Qwen3.5-122B PD disaggregation with MooncakeLayerwiseConnector fails at startup — "Tensor start addr is not align with 2M"

#### 2026-10-25

- [PR #18233](https://github.com/vllm-project/vllm-ascend/pull/18233) 已合并
  - 中文：【文档】【杂项】Correct and extend Qwen3.5-397B-A17B deployment guide
  - 原文：[Doc][Misc] Correct and extend Qwen3.5-397B-A17B deployment guide
  - 说明：对齐 the model guide with the author's 更新 deployment configurations, and resolve conflicts with the latest target branch's 显存-unit cleanup. - Replace A3 PD with a single-host, 16-NPU W4A8 example: 预填充 uses devices 0–7 with TP8
- [PR #19476](https://github.com/vllm-project/vllm-ascend/pull/19476) 已合并
  - 中文：【文档】【v0.30.0】Backport Qwen3.5-397B-A17B deployment guide
  - 原文：[Doc][v0.30.0] Backport Qwen3.5-397B-A17B deployment guide
  - 说明：Backport the Qwen3.5-397B-A17B documentation 更新 from 18233 to releases/v0.30.0 . 对齐 the model guide with the author's 更新 deployment configurations, and resolve conflicts with the latest target branch's 显存-unit cleanup. - Re

#### 2026-10-24

- [PR #19698](https://github.com/vllm-project/vllm-ascend/pull/19698) 进行中
  - 中文：【算子】【功能】启用 EVS video pruning for Qwen3.5 on Ascend NPU
  - 原文：[Ops][Feature] Enable EVS video pruning for Qwen3.5 on Ascend NPU
  - 说明：Closes 10648 Refs 9079 在 Ascend NPU 上启用 Qwen3.5 的上游 EVS 视频 token 剪枝路径。补齐模型缺失的 video pruning method 初始化，并在启用视频剪枝时替换完整视频 placeholder，避免 EVS 的逐帧 vision wrapper 与外层 wrapper 嵌套。新增针对 placeholder、剪枝分支和初始化结果的单测，以及使用 Qwen3.5-2B 的视频 E2E。 Does this PR

#### 2026-10-23

- [PR #19261](https://github.com/vllm-project/vllm-ascend/pull/19261) 已关闭
  - 中文：【测试】更新 OS 配置 for Qwen3.5-27B-w8a8-A3
  - 原文：[Test]Update OS configuration for Qwen3.5-27B-w8a8-A3
  - 说明：【】--- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary conditions (e.g. empty input, single/zero element, min/max values, off-by-one, seque
- [PR #12603](https://github.com/vllm-project/vllm-ascend/pull/12603) 已关闭
  - 中文：【文档】【功能】Qwen3.5/3.6-27B 支持 documentation for Ascend950DT series
  - 原文：[Doc][Feature] Add Qwen3.5/3.6-27B support documentation for Ascend950DT series
  - 说明：This PR primarily 更新 the deployment guide for Qwen3.5/3.6-27B on the Ascend 950DT. No Documentation-only change, no testing 必填. - vLLM version: v0.24.0 - vLLM main:
- [PR #14652](https://github.com/vllm-project/vllm-ascend/pull/14652) 已关闭
  - 中文：【文档】【功能】Qwen3.5/3.6-27B 支持 documentation for Ascend950DT series
  - 原文：[Doc][Feature] Add Qwen3.5/3.6-27B support documentation for Ascend950DT series
  - 说明：This PR adds documentation and 配置 details for deploying Qwen3.5-27B and Qwen3.6-27B models on the Ascend950DT series (specifically the Qwen3.6-27B-w8a8-mxfp8 quantized version). It includes prerequisites, Docker image setup, sing

#### 2026-10-22

- [PR #19509](https://github.com/vllm-project/vllm-ascend/pull/19509) 已关闭
  - 中文：【文档】【v0.30.0】新增 Qwen397B multimodal input notes to 支持 matrix
  - 原文：[Doc][v0.30.0] Add Qwen397B multimodal input notes to support matrix
  - 说明：Fill the empty Note cells for Qwen3.5-397B-A17B in the 950DT Products and A2/A3 tables with Text, image, video . Both entries are under Multimodal Language Models. The multimodal 950DT tab and hardware cells already use 950DT Products . The
- [PR #19508](https://github.com/vllm-project/vllm-ascend/pull/19508) 已关闭
  - 中文：【文档】【杂项】新增 Qwen397B multimodal input notes to 支持 matrix
  - 原文：[Doc][Misc] Add Qwen397B multimodal input notes to support matrix
  - 说明：Fill the empty Note cells for Qwen3.5-397B-A17B in the 950DT Products and A2/A3 tables with Text, image, video . Both entries are under Multimodal Language Models. The multimodal 950DT tab and hardware cells already use 950DT Products . The
- [PR #19442](https://github.com/vllm-project/vllm-ascend/pull/19442) 进行中
  - 中文：【测试】新增 a Qwen3.5-35B-A3B case to the TP4 batch-invariance e2e
  - 原文：[Test] Add a Qwen3.5-35B-A3B case to the TP4 batch-invariance e2e
  - 说明：The TP4 batch-invariance e2e only covered Qwen/Qwen3-30B-A3B : all full 注意力, MoE 路由 at 128 experts with no 共享专家. Qwen/Qwen3.5-35B-A3B is a hybrid MoE whose 40 layers repeat a 3:1 pattern, so 30 are gated-delta-net linear

#### 2026-10-21

- [PR #19354](https://github.com/vllm-project/vllm-ascend/pull/19354) 进行中
  - 中文：【测试】【功能】Qwen3.5 dense MTP V1/V2 comparison
  - 原文：[Test][Feature] add Qwen3.5 dense MTP V1/V2 comparison
  - 说明：Adds reproducible E2E tooling for Issue 13736 to compare Qwen3.5-27B dense MTP under Model Runner V1 and V2. The scripts cover: - Five prompt categories and greedy/non-greedy sampling. - Per-position acceptance rate and accepted-length hist
- [Issue #19352](https://github.com/vllm-project/vllm-ascend/issues/19352) 进行中
  - 中文：【缺陷】【MRV2】Qwen3.5 MTP full-vocabulary logprobs fail with UB overflow
  - 原文：[Bug][MRV2] Qwen3.5 MTP full-vocabulary logprobs fail with UB overflow
  - 说明：【缺陷】【MRV2】Qwen3.5 MTP full-vocabulary logprobs fail with UB overflow Related task: Environment - vllm-ascend: fbbc04965f459d97fe54684ed0f5cb350b4f9657 - vLLM: c4df37dfcc7f72ca41cd43801a468526ecf99a2b - Model: Qwen3.5-27B BF16 with MTP wei
- [PR #18968](https://github.com/vllm-project/vllm-ascend/pull/18968) 已关闭
  - 中文：【功能】【模型】支持 dense 序列 parallelism for the Qwen3.5 family (Qwen3.8-27B)
  - 原文：[Feature][Model] Support dense sequence parallelism for the Qwen3.5 family (Qwen3.8-27B)
  - 说明：Upstream vLLM gates 序列 parallelism on use 序列 parallel moe , which requires an MoE 检查点 with expert parallelism. As a result, dense Qwen3.5-family 检查点 (Qwen3.5-27B / Qwen3.6-27B / Qwen3.8-27B , model type qwen3 5 te
- [PR #19132](https://github.com/vllm-project/vllm-ascend/pull/19132) 已合并
  - 中文：【测试】【杂项】更新 Qwen3.5-27B-w8a8-A3 baseline
  - 原文：[Test][Misc] Update Qwen3.5-27B-w8a8-A3 baseline
  - 说明：This PR 更新 the 性能 baseline for the Qwen3.5-27B-w8a8 model from 898.7984 to 939.8253 to 对齐 with the latest benchmark results. No. Tested via the E2E 性能 test pipeline. -
- [PR #19136](https://github.com/vllm-project/vllm-ascend/pull/19136) 已合并
  - 中文：【测试】【杂项】更新 Qwen3.5-27B-w8a8-A3 baseline
  - 原文：[Test][Misc] Update Qwen3.5-27B-w8a8-A3 baseline
  - 说明：This PR 更新 the 性能 baseline for the Qwen3.5-27B-w8a8 model 测试用例 from 898.7984 to 939.8253 to reflect the current 性能 of the model. No. Tested with existing e2e test ca
- [PR #19229](https://github.com/vllm-project/vllm-ascend/pull/19229) 已合并
  - 中文：【v0.30.0】【文档】【杂项】新增 Qwen3.5-397B A2 PD deployment guide
  - 原文：[v0.30.0][Doc][Misc]Add Qwen3.5-397B A2 PD deployment guide
  - 说明：- This PR adds the A2 1P1D disaggregated deployment guide for Qwen3.5-397B-A17B-w4a8-mtp model. - Documentation only. It clarifies the A2 PD deployment for Qwen3.5-397B-A17B-w4a8-mtp. - vLLM ma
- [PR #19260](https://github.com/vllm-project/vllm-ascend/pull/19260) 已合并
  - 中文：【文档】【杂项】新增 Qwen3.5-397B A2 PD deployment guide
  - 原文：[Doc][Misc]Add Qwen3.5-397B A2 PD deployment guide
  - 说明：- This PR adds the A2 1P1D disaggregated deployment guide for Qwen3.5-397B-A17B-w4a8-mtp model. - Documentation only. It clarifies the A2 PD deployment for Qwen3.5-397B-A17B-w4a8-mtp. - vLLM ma

#### 2026-10-19

- [Issue #13999](https://github.com/vllm-project/vllm-ascend/issues/13999) 已关闭
  - 中文：Qwen3.5-27B/Qwen3.6-27B 部署文档中 FlashComm 配置对 Dense 模型不兼容，建议补充说明
  - 说明：📚 The doc issue 在 Qwen3.5-27B / Qwen3.6-27B 的部署文档中，PD 分离（预填充-解码 Disaggregation）部署示例包含了 VLLM ASCEND 启用 FLASHCOMM1=1 环境变量，并注明该变量“可在 预填充 节点上启用 Allreduce 通信优化，降低长上下文 预填充 的通信开销”。 然而，实际测试发现，对于 Qwen3.5-27B / Qwen3.6-27B 这类 Den
- [Issue #9443](https://github.com/vllm-project/vllm-ascend/issues/9443) 已关闭
  - 中文：【缺陷】: Qwen3.5-122B-A3B-W8A8 量化 ascend works wrong, Profiling shows that Full 注意力 doesn't have 量化 内核 , so this model can't get the W8A8 性能 benefits
  - 原文：[Bug]: Qwen3.5-122B-A3B-W8A8 quantization ascend works wrong, Profiling shows that Full Attention doesn't  have quantization kernel , so this model can't get the W8A8 performance benefits

#### 2026-10-18

- [PR #19001](https://github.com/vllm-project/vllm-ascend/pull/19001) 已合并
  - 中文：【修复】【模型】【releases/v0.30.0】支持 dense 序列 parallelism for the Qwen3.5 family (Qwen3.8-27B)
  - 原文：[BugFix][Model] Support dense sequence parallelism for the Qwen3.5 family (Qwen3.8-27B) [releases/v0.30.0]
  - 说明：Adaptation of the dense-SP 特性 for the v0.30.0 release line (vLLM v0.30.0 pin). Same content as the main-line PR. Upstream vLLM gates 序列 parallelism on use 序列 parallel moe , which requires an MoE 检查点 with expert paral

#### 2026-10-17

- [Issue #19065](https://github.com/vllm-project/vllm-ascend/issues/19065) 进行中
  - 中文：【缺陷】: Qwen3.5-397B C8 V-scale corruption after partial asynchronous PD imports
  - 原文：[Bug]: Qwen3.5-397B C8 V-scale corruption after partial asynchronous PD imports
  - 说明：Tracking status Track the 397B static V-scale lifecycle problem separately from the 35B K-scale writeback race. 19016 is on hold and should not be merged while this issue is being reviewed. The standalone K-scale 修复 is tracked by 19064; th

#### 2026-10-15

- [PR #18522](https://github.com/vllm-project/vllm-ascend/pull/18522) 已合并
  - 中文：[Bugfix] Gate在bfloat16上融合了GDN预填充路径以修复fp16模型（ ColQwen3.5 ）崩溃
  - 原文：[Bugfix] Gate fused GDN prefill paths on bfloat16 to fix fp16 models (ColQwen3.5) crash
  - 说明：This is a recurrence of 14456: the earlier 修复 did not 新增 a dtype gate at the dispatch layer. 修复 Gate both 融合 预填充 dispatches in vllm ascend/ops/gdn.py on query non spec.dtype == torch.bfloat16 , so fp16 models fall back to the Trit
- [PR #18800](https://github.com/vllm-project/vllm-ascend/pull/18800) 草稿
  - 中文：【算子】【功能】Qwen3.5 解码 权重 Prefetch
  - 原文：[Ops][Feature] Qwen3.5 Decode Weight Prefetch
  - 说明：Adds an experimental, opt-in Qwen3.5-35B-A3B 解码 权重-prefetch path for the supported Ascend A2 BF16 TP=2 topology: - Prefetch the next layer's 注意力 input, the current GDN layer's output projection, or bounded active-expert W2 ran

### Qwen3

#### 2026-11-06

- [PR #21170](https://github.com/vllm-project/vllm-ascend/pull/21170) 进行中
  - 中文：【文档】【杂项】改进 MiniMax, Qwen3 and Step-5 deployment tutorials
  - 原文：[Doc][Misc] Improve MiniMax, Qwen3 and Step-5 deployment tutorials
  - 说明：改进 five model deployment tutorials so users can prepare the environment, select the correct 权重 and service endpoints, and understand verification and evaluation results. - MiniMax-M3.1-Flash: explain Ascend-adapted 权重 sources

#### 2026-11-05

- [PR #20994](https://github.com/vllm-project/vllm-ascend/pull/20994) 进行中
  - 中文：【文档】【Recipe】新增 historical Qwen3-Reranker Ascend deployment
  - 原文：[Doc][Recipe] Add historical Qwen3-Reranker Ascend deployment
  - 说明：新增 a historical Ascend-only recipes/models/Qwen/Qwen3-Reranker-0.6B.yaml , restricted to A3 / ascend 910c , BF16, TP=1 and max-model-len=1024. The official model revision and v0.23.0rc1-a3 image are pinned. Use the existing guide field for

#### 2026-11-03

- [PR #20816](https://github.com/vllm-project/vllm-ascend/pull/20816) 进行中
  - 中文：【文档】【Recipe】新增 Qwen3-Embedding-0.6B Ascend recipe
  - 原文：[Doc][Recipe] Add Qwen3-Embedding-0.6B Ascend recipe
  - 说明：Adds recipes/models/Qwen/Qwen3-Embedding-0.6B.yaml as an Ascend-only recipe for Qwen/Qwen3-Embedding-0.6B under the PR1160 source layout. The corresponding core recipe does not exist in vllm-project/vllm , so this is a whole Ascend-owned re
- [PR #20811](https://github.com/vllm-project/vllm-ascend/pull/20811) 进行中
  - 中文：【功能】Mask EOS sampled inside the think block (Qwen3-class reasoning models)
  - 原文：[Feature] Mask EOS sampled inside the think block (Qwen3-class reasoning models)
  - 说明：Qwen3.8-class models occasionally sample their end-of-turn token inside the think block: the request stops with finish reason=stop , the whole answer is parked in reasoning content , and content is left empty. Agent harnesses (e.g. tau2-ben

#### 2026-11-02

- [PR #20382](https://github.com/vllm-project/vllm-ascend/pull/20382) 已合并
  - 中文：【功能】启用 device-length FlashAttn for GLM DSpark GQA drafts
  - 原文：[Feature] Enable device-length FlashAttn for GLM DSpark GQA drafts
  - 说明：启用 the existing A5 device-length CANN FlashAttn path for GLM targets ( GlmMoeDsaForCausalLM ) with Qwen3DSparkModel GQA drafts. Previously, the DSpark target allowlist only covered MiniMax-M3, and the native CANN 内核 rejected the GLM

#### 2026-10-31

- [PR #20493](https://github.com/vllm-project/vllm-ascend/pull/20493) 草稿
  - 中文：【功能】【MoE】CatCCOS MegaMoE backend for Qwen3 on Ascend A5
  - 原文：[Feature][MoE] Add CatCCOS MegaMoE backend for Qwen3 on Ascend A5
  - 说明：新增 an opt-in CatCCOS 融合 MoE backend for Qwen3-style unquantized 检查点 on Ascend A5, preserving the existing releases/v0.23.0 integration work as a Draft . This PR records the implementation and its validation boundary; it is not b
- [PR #20485](https://github.com/vllm-project/vllm-ascend/pull/20485) 进行中
  - 中文：Qwen3 支持 recoverSSM
  - 原文：Qwen3 support recoverSSM
  - 说明：【】--- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary conditions (e.g. empty input, single/zero element, min/max values, off-by-one, seque

#### 2026-10-30

- [PR #20347](https://github.com/vllm-project/vllm-ascend/pull/20347) 已关闭
  - 中文：【性能】【Worker】Precompute DFlash context KV in the model and reuse staged batch inputs
  - 原文：[Performance][Worker] Precompute DFlash context KV in the model and reuse staged batch inputs
  - 说明：Two pieces of 每步 host work still sit on the 解码 critical path after the 注意力-元数据 and draft-graph changes: 1. DFlashQwen3Model recomputes the context K/V projection every step inside the plugin patch, in Python. 2. Batch i

#### 2026-10-29

- [PR #20250](https://github.com/vllm-project/vllm-ascend/pull/20250) 进行中
  - 中文：【算子】【功能】支持 inline cos/sin calculation for MRoPE in Qwen3 …
  - 原文：[Ops][Feature] Support inline cos/sin calculation for MRoPE in Qwen3 …
  - 说明：…Family 融合 online MRoPE cos/sin generation into the existing Triton 拆分-QKV, RMSNorm and MRoPE operator for Qwen3-family models. This removes the indexed cos sin 缓存 gather and avoids materializing a per-token cos sin tensor before la
- [PR #19537](https://github.com/vllm-project/vllm-ascend/pull/19537) 已合并
  - 中文：【功能】MiniMax-M3 DSpark draft FlashAttn 支持 on A5
  - 原文：[Feature] Add MiniMax-M3 DSpark draft FlashAttn support on A5
  - 说明：Relative to the runnable FIA control, draft FA changes output-token 吞吐 by +13.79% , request 吞吐 by +23.83% , mean TTFT by -17.02% and mean TPOT by -3.36% . Mean ITL changes by -0.70% and P99 ITL by -2.55% . Conservative accur

#### 2026-10-26

- [PR #19836](https://github.com/vllm-project/vllm-ascend/pull/19836) 进行中
  - 中文：【测试】310p 迁移 qwen3 每周 测试用例 to 夜间
  - 原文：[TEST]310p migrate qwen3 weekly test cases to nightly
  - 说明：【】310p 迁移 qwen3 每周 测试用例 to 夜间 no --- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary conditions (e.g. empty input, sin
- [PR #19831](https://github.com/vllm-project/vllm-ascend/pull/19831) 已关闭
  - 中文：【测试】310p 迁移 qwen3 每周 测试用例 to 夜间
  - 原文：[TEST]310p migrate qwen3 weekly test cases to nightly
  - 说明：【】310p 迁移 qwen3 每周 测试用例 to 夜间 no --- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary conditions (e.g. empty input, sin
- [PR #19777](https://github.com/vllm-project/vllm-ascend/pull/19777) 已合并
  - 中文：【测试】310p 迁移 qwen3 每周 测试用例 to 夜间
  - 原文：[TEST]310p migrate qwen3 weekly test cases to nightly
  - 说明：【】310p 迁移 qwen3 每周 测试用例 to 夜间 NO --- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary conditions (e.g. empty input, sin

#### 2026-10-20

- [PR #19228](https://github.com/vllm-project/vllm-ascend/pull/19228) 草稿
  - 中文：【持续集成】Bind Qwen3 A2 性能 tests to dedicated runner
  - 原文：[CI] Bind Qwen3 A2 performance tests to dedicated runner
  - 说明：Route qwen3-30b-a3b-bf16-a2-性能 and qwen3-30b-a3b-w8a8-a2-性能 to linux-aarch64-a2-binding-4 by updating their os fields in .github/workflows/configs/夜间 配置.yaml . Register the same label in .github/actionlint.yaml un

#### 2026-10-15

- [PR #18787](https://github.com/vllm-project/vllm-ascend/pull/18787) 进行中
  - 中文：【功能】【SpecDecode】Domino 投机解码 支持 on Ascend
  - 原文：[Feature][SpecDecode] Add Domino speculative decoding support on Ascend
  - 说明：Adds Domino 投机解码 支持 for Qwen3 on Ascend NPUs, based on Domino: Decoupling Causal Modeling from Autoregressive Drafting in 投机解码. Domino reuses the DFlash parallel draft backbone and applies a lightweight

### Qwen3 MoE

#### 2026-11-05

- [PR #21093](https://github.com/vllm-project/vllm-ascend/pull/21093) 已合并
  - 中文：【持续集成】Sunset A5 夜间 测试用例 for deprecated models
  - 原文：[CI] Sunset A5 nightly test cases for deprecated models
  - 说明：Background. A TMG (Test Management Group) model sunset review concluded that Qwen3-235B-A22B and DeepSeek-V3.1 (including the V3.1-Terminus variant) are deprecated and should no longer be exercised in the 夜间 A5 matrix on this release b

#### 2026-11-04

- [PR #20874](https://github.com/vllm-project/vllm-ascend/pull/20874) 已合并
  - 中文：【文档】【修复】【v0.32.0rc】--served-model-name flag in Qwen3-30B-A3B tutorial
  - 原文：[Doc][BugFix][v0.32.0rc] Fix --served-model-name flag in Qwen3-30B-A3B tutorial
  - 说明：Backport of 20762 to releases/v0.32.0rc . Fixes the vllm serve command in the Qwen3-30B-A3B tutorial. --served model name is not a valid vLLM CLI option and must be --served-model-name . Users copying the current command will hit an unrecog

#### 2026-11-03

- [PR #20775](https://github.com/vllm-project/vllm-ascend/pull/20775) 已合并
  - 中文：【持续集成】Sunset the legacy A5 model 测试用例 in the 夜间 CI
  - 原文：[CI] Sunset the legacy A5 model test cases in the nightly CI
  - 说明：- 移除 the following 夜间 A5 测试用例 yamls: - Qwen3 235b w8a8 A5.yaml - DeepSeek V31 W4A4C8 A5.yaml - DeepSeek V31 Terminus w4a8 w8a8 A5.yaml - 移除 the corresponding entries from 夜间 配置.yaml Does this PR introduce any user
- [PR #20762](https://github.com/vllm-project/vllm-ascend/pull/20762) 已合并
  - 中文：【文档】【修复】--served-model-name flag in Qwen3-30B-A3B tutorial
  - 原文：[Doc][BugFix] Fix --served-model-name flag in Qwen3-30B-A3B tutorial
  - 说明：Fixes the vllm serve command in the Qwen3-30B-A3B tutorial. --served model name is not a valid vLLM CLI option and must be --served-model-name . Users copying the current command will hit an unrecognized-argument error. Repository-wide sear
- [PR #20698](https://github.com/vllm-project/vllm-ascend/pull/20698) 已关闭
  - 中文：【Core】【Kernel】新增 SplitQuant Qwen3 MoE 支持 for v0.11
  - 原文：[Core][Kernel] Add SplitQuant Qwen3 MoE support for v0.11
  - 说明：This PR adds SplitQuant 支持 for the following three Qwen model 检查点 on Ascend NPUs and keeps the integration compatible with the vLLM v0.11.0 API family: Model SplitQuant 检查点 vLLM model architecture --- --- --- Qwen3-14B Q
- [PR #20693](https://github.com/vllm-project/vllm-ascend/pull/20693) 已关闭
  - 中文：【Core】【Kernel】新增 SplitQuant Qwen3 MoE 支持 for v0.11
  - 原文：[Core][Kernel] Add SplitQuant Qwen3 MoE support for v0.11
  - 说明：This PR adds SplitQuant 支持 for Qwen3 MoE models on Ascend NPUs and keeps the integration compatible with the vLLM v0.11.0 API family. The changes include: - Registering the SplitQuant Qwen3 MoE model implementation with vLLM-Ascend. -

#### 2026-10-31

- [PR #16765](https://github.com/vllm-project/vllm-ascend/pull/16765) 已关闭
  - 中文：【性能】【MoE】恢复 native Qwen3-235B 路由 without speculation
  - 原文：[Performance][MoE] Restore native Qwen3-235B routing without speculation
  - 说明：恢复 native BF16 router computation for unquantized Qwen3-235B ordinary inference. The internal MoE router currently requests an FP32 权重 缓存 for every gate; this changes the BF16 路由 used by the earlier external-router path and

#### 2026-10-22

- [Issue #3772](https://github.com/vllm-project/vllm-ascend/issues/3772) 已关闭
  - 中文：【缺陷】: vllm crashes every few hours
  - 原文：[Bug]: vllm crashes every few hours

### Qwen3-VL

#### 2026-11-05

- [Issue #21043](https://github.com/vllm-project/vllm-ascend/issues/21043) 进行中
  - 中文：【文档】: vllm-ascend-pyc
  - 原文：[Doc]: vllm-ascend-pyc
  - 说明：📚 The doc issue root@DG-Ascend-1723563:/home curl -H "Content-Type: application/json" -d '{ "model": "/data/models/Qwen/Qwen3-VL-8B-Instruct", "messages": [ {"role": "system", "content": "You are a helpful assistant."}, {"role": "user", "c

#### 2026-11-03

- [PR #20817](https://github.com/vllm-project/vllm-ascend/pull/20817) 进行中
  - 中文：【文档】【Recipe】新增 Qwen3-VL-Reranker-2B Ascend recipe
  - 原文：[Doc][Recipe] Add Qwen3-VL-Reranker-2B Ascend recipe
  - 说明：Adds recipes/models/Qwen/Qwen3-VL-Reranker-2B.yaml as an Ascend-only recipe for Qwen/Qwen3-VL-Reranker-2B under the PR1160 source layout. The corresponding core recipe does not exist in vllm-project/vllm , so this is a whole Ascend-owned re

#### 2026-10-31

- [PR #20003](https://github.com/vllm-project/vllm-ascend/pull/20003) 已关闭
  - 中文：【修复】【310P】恢复 CPU normalization for legacy Qwen3-VL shards
  - 原文：[BugFix][310P] Restore CPU normalization for legacy Qwen3-VL shards
  - 说明：The legacy Qwen3VL-8B-310p sharded 检查点 fails during model 加载 after the vLLM 0.32 alignment in 19516 because it lacks visual.input norm.权重 and visual.input norm.bias . Both 夜间 精度 and 性能 cases are affected:

#### 2026-10-30

- [PR #20373](https://github.com/vllm-project/vllm-ascend/pull/20373) 进行中
  - 中文：chore: trigger 夜间-A2 精度-group-1 rerun
  - 原文：chore: trigger Nightly-A2 accuracy-group-1 rerun
  - 说明：This is an intentionally empty PR used to rerun the 夜间-A2 精度-group-1 workflow after the previous run failed on the Qwen3-VL-8B-Instruct-W8A8 MMMU 精度 tolerance check. No. No cod

#### 2026-10-28

- [PR #20008](https://github.com/vllm-project/vllm-ascend/pull/20008) 已合并
  - 中文：【修复】Backport nonpersistent image normalization buffers
  - 原文：[BugFix] Backport nonpersistent image normalization buffers
  - 说明：Qwen3-VL legacy pre-sharded 检查点 fail to start on vLLM v0.32.0 with Missing keys ('visual.input norm.权重', 'visual.input norm.bias') : Backport the 运行时 semantics of upstream without copying its full implementation: wrap FusedM

#### 2026-10-26

- [PR #19844](https://github.com/vllm-project/vllm-ascend/pull/19844) 进行中
  - 中文：【文档】【Recipe】新增 Ascend overlay for Qwen3-VL-30B-A3B-Instruct
  - 原文：[Doc][Recipe] Add Ascend overlay for Qwen3-VL-30B-A3B-Instruct
  - 说明：Summary Adds the Ascend overlay for Qwen/Qwen3-VL-30B-A3B-Instruct under the new recipes/overlays layout introduced by vllm-project/vllm-ascend 19381 and the renderer cutover in vllm-project/recipes 1160. - Adds variants.ascend bf16 for one

### Qwen3-Omni

#### 2026-10-29

- [PR #20243](https://github.com/vllm-project/vllm-ascend/pull/20243) 进行中
  - 中文：【修复】【EC Connector】Take memcache EC load shapes from the request
  - 原文：[BugFix][EC Connector] Take memcache EC load shapes from the request
  - 说明：EC producers size each transfer before the item is encoded, and the size depends on the encoder output width, which varies by model and modality. Qwen3-Omni is the motivating case: its visual DeepStack output is 8192 wide ( out hidden size

### Qwen3-Next

#### 2026-10-27

- [PR #19959](https://github.com/vllm-project/vllm-ascend/pull/19959) 进行中
  - 中文：【修复】【Platform】prefix_cache_retention_interval silently ignored on hybrid models
  - 原文：[BugFix][Platform] Fix prefix_cache_retention_interval silently ignored on hybrid models
  - 说明：Fixes 19241 --前缀-缓存-保留-interval is silently ignored when 服务 hybrid models (e.g. Qwen3-Next) on Ascend: invalid values do not raise and the 特性 never takes effect. Root cause: upstream vLLM promoted VLLM 前缀缓存 R

### Qwen2.5

#### 2026-10-25

- [PR #19557](https://github.com/vllm-project/vllm-ascend/pull/19557) 已关闭
  - 中文：【v0.30.0】【文档】【杂项】修复 missing W8A8 cell in supported models 池化 table
  - 原文：[v0.30.0][Doc][Misc] Fix missing W8A8 cell in supported models pooling table
  - 说明：The Qwen2.5-Math-RM-72B row in the 池化 Models → === "A2/A3" tab of docs/source/user guide/支持 matrix/supported models.md has only 5 cells , while the table header defines 6 columns ( Model 支持 Note Supported Hardware W8A8 Doc ).
- [PR #19556](https://github.com/vllm-project/vllm-ascend/pull/19556) 已关闭
  - 中文：【文档】【杂项】修复 missing W8A8 cell in supported models 池化 table
  - 原文：[Doc][Misc] Fix missing W8A8 cell in supported models pooling table
  - 说明：The Qwen2.5-Math-RM-72B row in the 池化 Models → === "A2/A3" tab of docs/source/user guide/支持 matrix/supported models.md has only 5 cells , while the table header defines 6 columns ( Model 支持 Note Supported Hardware W8A8 Doc ).

#### 2026-10-22

- [PR #19531](https://github.com/vllm-project/vllm-ascend/pull/19531) 进行中
  - 中文：【测试】新增 Qwen2.5-1.5B-apeach classification e2e test and tutorial (issue #10680)
  - 原文：[Test] Add Qwen2.5-1.5B-apeach classification e2e test and tutorial (issue #10680)
  - 说明：What does this PR do? Adds a functional e2e classification test for jason9693/Qwen2.5-1.5B-apeach (Korean harmful-content classifier, Qwen2ForSequenceClassification ) plus a user-facing tutorial, per 10680. Acceptance-criteria scoping (expl
- [Issue #19424](https://github.com/vllm-project/vllm-ascend/issues/19424) 进行中
  - 中文：[Doc]: 任务完成，Qwen2.5-Omni-7B模型测试报告如下：
  - 说明：📚 The doc issue <img width="1687" height="900" alt="Image" src=" / Suggest a potential alternative/修复 No response

### Qwen3-ASR

#### 2026-10-19

- [PR #19150](https://github.com/vllm-project/vllm-ascend/pull/19150) 进行中
  - 中文：【功能】Expose EAGLE3 支持 for Qwen3-ASR
  - 原文：[Feature] Expose EAGLE3 support for Qwen3-ASR
  - 说明：The Qwen3-ASR wrapper in the currently verified vLLM ref ( c4df37dfcc7f72ca41cd43801a468526ecf99a2b ) lacks SupportsEagle3 , so capability checks reject an EAGLE3 draft even though the inner Qwen3 decoder implements auxiliary hidden-state c
- [Issue #19149](https://github.com/vllm-project/vllm-ascend/issues/19149) 进行中
  - 中文：【RFC】: 启用 EAGLE3 投机解码 for Qwen3-ASR on Ascend
  - 原文：[RFC]: Enable EAGLE3 speculative decoding for Qwen3-ASR on Ascend
  - 说明：Motivation Upstream vllm-project/vllm 52824 declares SupportsEagle3 on Qwen3ASRForConditionalGeneration . The audio wrapper already contains a Qwen3 language model capable of exposing EAGLE3 auxiliary hidden states, but without this interfa

## GLM

### GLM-5

#### 2026-11-10

- [Issue #21501](https://github.com/vllm-project/vllm-ascend/issues/21501) 进行中
  - 中文：【RFC】: GLM-5.3-Flash target-side architecture for 投机解码 (draft-method-agnostic)
  - 原文：[RFC]: GLM-5.3-Flash target-side architecture for speculative decoding (draft-method-agnostic)
  - 说明：Motivation. GLM-5.3-Flash ( Glm5NextForCausalLM / Glm5NextForConditionalGeneration ; hybrid KDA + 稀疏-MLA + MoE + multi-head latent hyper-connections) currently cannot run 投机解码 on Model Runner V2. Two independent blockers
- [Issue #21486](https://github.com/vllm-project/vllm-ascend/issues/21486) 进行中
  - 中文：【0.32.0RC vLLM-Ascend】【A3】Intermittent, low-probability D-node service 挂起 during GLM-5.3-Flash W8A8 stress testing
  - 原文：[0.32.0RC vLLM-Ascend][A3] Intermittent, low-probability D-node service hang during GLM-5.3-Flash W8A8 stress testing
  - 说明：Description During stress testing of GLM-5.3-Flash W8A8 on A3 with vLLM-Ascend 0.32.0RC, the D node in a 池化 PD-disaggregated service encountered a worker exception after running for approximately 30 hours and 41 minutes. The EngineCore
- [Issue #21485](https://github.com/vllm-project/vllm-ascend/issues/21485) 进行中
  - 中文：【0.32.0RC vLLM-Ascend】【A5】GLM-5.3-Flash 池化 D-node 吞吐 回退 of up to 50% in multi-前缀 scenarios
  - 原文：[0.32.0RC vLLM-Ascend][A5] GLM-5.3-Flash pooling D-node throughput regression of up to 50% in multi-prefix scenarios
  - 说明：Description In vLLM-Ascend 0.32.0RC on A5, the D-node 吞吐 for GLM-5.3-Flash 池化 in multi-前缀 scenarios regresses significantly in certain cases compared with v0.30.0. The observed 吞吐 drop is up to approximately 50%. -
- [PR #21431](https://github.com/vllm-project/vllm-ascend/pull/21431) 已关闭
  - 中文：【功能】【SpecDecode】支持 GLM-5.3-Flash DFlash2 on Ascend
  - 原文：[Feature][SpecDecode] Support GLM-5.3-Flash DFlash2 on Ascend
  - 说明：GLM-5.3-Flash ( Glm5NextForConditionalGeneration ) could not start 投机解码 with a DFlash2 draft. The v2 model runner enables use aux hidden state outputs for method="dflash" and then calls set eagle3 aux hidden state layers , w
- [PR #21439](https://github.com/vllm-project/vllm-ascend/pull/21439) 进行中
  - 中文：【功能】【SpecDecode】支持 GLM-5.3-Flash DFlash2 on Ascend
  - 原文：[Feature][SpecDecode] Support GLM-5.3-Flash DFlash2 on Ascend
  - 说明：GLM-5.3-Flash ( Glm5NextForConditionalGeneration ) could not start 投机解码 with a DFlash2 draft. The v2 model runner enables use aux hidden state outputs for method="dflash" and requires the target to implement the 共享 Eagle
- [PR #21435](https://github.com/vllm-project/vllm-ascend/pull/21435) 进行中
  - 中文：【性能】【模型】Skip unused GLM-5.3-Flash MTP 检查点 shards
  - 原文：[Performance][Model] Skip unused GLM-5.3-Flash MTP checkpoint shards
  - 说明：Glm5NextMTP.load 权重 already ignores the target decoder's tensors as it consumes the 检查点. When the target and drafter share a Safetensors 检查点, the loader still passes all shards to the drafter's tensor iterator. Implement

#### 2026-11-09

- [PR #20873](https://github.com/vllm-project/vllm-ascend/pull/20873) 已合并
  - 中文：【性能】Prepare in-内核 Q/K L2 normalization 支持 for chunk KDA
  - 原文：[Performance] Prepare in-kernel Q/K L2 normalization support for chunk KDA
  - 说明：Prewire in-内核 Q/K L2 normalization 支持 for chunk KDA through the 共享 use qk l2norm in 内核 flag, which defaults to False . GLM explicitly passes use qk l2norm in 内核=False , so current chunk-KDA model callers retain external

#### 2026-11-06

- [Issue #21140](https://github.com/vllm-project/vllm-ascend/issues/21140) 进行中
  - 中文：【缺陷】: 0.30.0部署GLM5.3,前缀缓存命中不了
  - 原文：[Bug]: 0.30.0部署GLM5.3,Prefix Cache命中不了
- [PR #21055](https://github.com/vllm-project/vllm-ascend/pull/21055) 已合并
  - 中文：【修复】【模型】【v0.32.0rc】恢复 GLM5Next device-side normalization
  - 原文：[BugFix][Model][v0.32.0rc] Restore GLM5Next device-side normalization
  - 说明：Apply the GLM5Next input-normalization 修复 to releases/v0.32.0rc . The model inherits supports mm device do normalize=True , so vLLM skips CPU rescaling/normalization and supplies raw pixels. Its Ascend-specific vision tower only cast those
- [PR #21054](https://github.com/vllm-project/vllm-ascend/pull/21054) 已合并
  - 中文：【修复】【模型】恢复 GLM5Next device-side normalization
  - 原文：[BugFix][Model] Restore GLM5Next device-side normalization
  - 说明：GLM5Next inherits supports mm device do normalize=True from its parent. vLLM therefore supplies raw pixels instead of rescaling and normalizing them on the CPU. The Ascend-specific vision tower did not install or call the input normalizer:

#### 2026-11-05

- [Issue #21103](https://github.com/vllm-project/vllm-ascend/issues/21103) 进行中
  - 中文：【缺陷】: vllm-ascend:0.30.0rc2镜像PD分离部署GLM-5.3-Flash-w8a8运行出错：/v1/completions + prompt_logprobs 导致数据错乱与引擎崩溃（OverflowError）
  - 原文：[Bug]: vllm-ascend:0.30.0rc2镜像PD分离部署GLM-5.3-Flash-w8a8运行出错：/v1/completions + prompt_logprobs 导致数据错乱与引擎崩溃（OverflowError）
- [Issue #20860](https://github.com/vllm-project/vllm-ascend/issues/20860) 已关闭
  - 中文：【缺陷】【GLM-5.3-Flash】Native FP8 adaptation: ignored_layers never matches this nested model's real prefixes, silently quantizing layers the 检查点 left unquantized
  - 原文：[Bug][GLM-5.3-Flash] Native FP8 adaptation: ignored_layers never matches this nested model's real prefixes, silently quantizing layers the checkpoint left unquantized
- [Issue #21077](https://github.com/vllm-project/vllm-ascend/issues/21077) 进行中
  - 中文：【缺陷】: GLM-5.3 MTP acceptance rate drops sharply under TP4×PP2
  - 原文：[Bug]: GLM-5.3 MTP acceptance rate drops sharply under TP4×PP2

#### 2026-11-04

- [PR #20872](https://github.com/vllm-project/vllm-ascend/pull/20872) 进行中
  - 中文：【修复】【模型】GLM5Next MTP compressed-tensors 量化 mapping
  - 原文：[BugFix][Model] Fix GLM5Next MTP compressed-tensors quantization mapping
  - 说明：修复 GLM-5.3-Flash MTP startup with mixed-精度 compressed-tensors 检查点, including the AutoRound MXFP4 export. The text-only MTP drafter can inherit the target's 量化 配置 after its layer names have been mapped to

#### 2026-11-03

- [PR #20789](https://github.com/vllm-project/vllm-ascend/pull/20789) 进行中
  - 中文：【功能】对齐 adaptive verification interface and 启用 online estimation for dsv4/glm53
  - 原文：[Feature] Align adaptive verification interface and enable online estimation for dsv4/glm53
  - 说明：【】TBD. N/A by ci --- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary conditions (e.g. empty input, single/zero element, min/max values, of
- [PR #20758](https://github.com/vllm-project/vllm-ascend/pull/20758) 草稿
  - 中文：【修复】【V2】Adapt Ascend 内核 block size handling to vLLM AttentionGroup
  - 原文：[BugFix][V2] Adapt Ascend kernel block size handling to vLLM AttentionGroup
  - 说明：This draft covers the full Ascend V2 内核 block size adaptation on 特性/glm53-内核-block-size relative to baseline b2ceaf726 , across all branch commits. GLM is the inspected validation scenario for the ordinary inference path; the a

#### 2026-11-02

- [Issue #18099](https://github.com/vllm-project/vllm-ascend/issues/18099) 已关闭
  - 中文：[bug] ： [v 0.26] [glm5.2+kvoffload] PD-sep解码等级崩溃： HYBM VA地址重叠
  - 原文：[bug]:[v0.26][glm5.2+kvoffload]PD-sep decode ranks crash: HYBM VA address overlap
- [Issue #18005](https://github.com/vllm-project/vllm-ascend/issues/18005) 已关闭
  - 中文：[Bug]: glm5.2+kvoffload 非分布式启动在bench中途报错 ：预期所有张量都在同一设备上，但get x2在npu: 5上
  - 原文：[Bug]: glm5.2+kvoffload 非分布式启动在bench中途报错：Expected all tensors to be on the same device, but got x2 is on npu:5

#### 2026-11-01

- [Issue #20510](https://github.com/vllm-project/vllm-ascend/issues/20510) 已关闭
  - 中文：【缺陷】: GLM-5.3-Flash MRV2 PCP query/解码 layout mismatches and mixed-batch KV corruption
  - 原文：[Bug]: GLM-5.3-Flash MRV2 PCP query/decode layout mismatches and mixed-batch KV corruption
  - 说明：Description GLM-5.3-Flash MRV2 PCP can fail with mismatched SFA/索引器 query rows or produce incorrect answers when 预填充 and 解码 requests share a batch. Reproduced with W8A8 权重, INT8 KV 缓存, TP1/PCP8/DP1/EP8/DCP1, MTP5 and fou
- [PR #20522](https://github.com/vllm-project/vllm-ascend/pull/20522) 进行中
  - 中文：【测试】移除 GLM vision NZ projection test
  - 原文：[Test] Remove GLM vision NZ projection test
  - 说明：移除 tests/e2e/夜间/single node/ops/singlecard ops/test glm5next vision nz.py , which was introduced in 19564. The singlecard ops suite is intended to validate custom operators implemented in vllm-ascend, such as those under vllm ascen

#### 2026-10-30

- [PR #20384](https://github.com/vllm-project/vllm-ascend/pull/20384) 进行中
  - 中文：【模型】Refactor Qwen4Exp platform model ownership
  - 原文：[Model] Refactor Qwen4Exp platform model ownership
  - 说明：What this PR does Refactors the Ascend Qwen4Exp integration to own platform-specific model components explicitly, following the composition pattern used by glm5next , instead of mutating symbols in upstream vLLM modules at import time. - ow
- [PR #20351](https://github.com/vllm-project/vllm-ascend/pull/20351) 进行中
  - 中文：【修复】【PD】MooncakeHybridConnector KV registration for 稀疏-索引器 hybrid models (GLM-5.3-Flash)
  - 原文：[BugFix][PD] Fix MooncakeHybridConnector KV registration for sparse-indexer hybrid models (GLM-5.3-Flash)
  - 说明：With PD disaggregation ( MooncakeHybridConnector ), GLM-5.3-Flash ( Glm5NextForConditionalGeneration ) produces garbled output on the 解码 node, while the 预填充 and 解码 instances each work correctly when used standalone. Root cause G

#### 2026-10-29

- [Issue #20236](https://github.com/vllm-project/vllm-ascend/issues/20236) 进行中
  - 中文：【缺陷】: 4-node A2 PD + Mooncake KV Pool (GLM-5.3-Flash-w8a8, v0.30.0rc2): both 预填充 engines freeze silently — cross-node ROCE channel create stuck at connecting forever (no timeout/retry), D engines healthy
  - 原文：[Bug]: 4-node A2 PD + Mooncake KV Pool (GLM-5.3-Flash-w8a8, v0.30.0rc2): both Prefill engines freeze silently — cross-node ROCE channel create stuck at connecting forever (no timeout/retry), D engines healthy
- [PR #19076](https://github.com/vllm-project/vllm-ascend/pull/19076) 已合并
  - 中文：【功能】【GLM-5.3-Flash】启用 torch.compile for GLM-5.3-Flash backbone and MTP
  - 原文：[Feature][GLM-5.3-Flash] Enable torch.compile for GLM-5.3-Flash backbone and MTP
  - 说明：启用 torch.compile for the GLM-5.3-Flash text backbone and MTP draft model. - Keep KDA state 更新 and Triton-based normalization behind custom-op boundaries so serialized FX/AOT artifacts remain reusable across processes. - Register KD
- [Issue #20172](https://github.com/vllm-project/vllm-ascend/issues/20172) 进行中
  - 中文：【缺陷】: When GLM-5.3-Flash-w8a8-1013 is adapted to vLLM Ascend 0.30.0rc2 using Mooncake’s kv_connector backend, the inference service crashes in 128K, 256K, and 512K long-text input scenarios.
  - 原文：[Bug]: When GLM-5.3-Flash-w8a8-1013 is adapted to vLLM Ascend 0.30.0rc2 using Mooncake’s kv_connector backend, the inference service crashes in 128K, 256K, and 512K long-text input scenarios.

#### 2026-10-28

- [Issue #20115](https://github.com/vllm-project/vllm-ascend/issues/20115) 进行中
  - 中文：【缺陷】: GLM-5.3-Flash image understanding returns wrong answers on 夜间-main (vLLM 0.32.0) while correct on v0.30.0rc2 / v0.28
  - 原文：[Bug]: GLM-5.3-Flash image understanding returns wrong answers on nightly-main (vLLM 0.32.0) while correct on v0.30.0rc2 / v0.28

#### 2026-10-27

- [Issue #17388](https://github.com/vllm-project/vllm-ascend/issues/17388) 已关闭
  - 中文：[Bug]: enable_dsa_cp = true在cudagraph捕获期间在sfa_cp中GLM-5.3-Flash预填充启动失败
  - 原文：[Bug]: enable_dsa_cp=true fails GLM-5.3-Flash prefill startup in sfa_cp during cudagraph capture
- [PR #18192](https://github.com/vllm-project/vllm-ascend/pull/18192) 已关闭
  - 中文：[文档] [模型]在GLM教程中将fuse_muls_add移动到ascend_compilation_config
  - 原文：[Doc][Model] Move fuse_muls_add into ascend_compilation_config in GLM tutorials
  - 说明：Fixes 18130. 融合 muls 新增 is a field of AscendCompilationConfig ( vllm ascend/ascend 配置.py:129 ), not of the top-level AscendConfig . The GLM5 / GLM5.2 / GLM5.3 tutorials passed it at the top level of --additional-配置 , so AscendCon
- [Issue #19929](https://github.com/vllm-project/vllm-ascend/issues/19929) 进行中
  - 中文：【缺陷】: GLM-5.2 IndexShare reuses incorrect Top-K indices across PP stages with DSA-CP
  - 原文：[Bug]: GLM-5.2 IndexShare reuses incorrect Top-K indices across PP stages with DSA-CP
  - 说明：With GLM-5.2, pipeline parallelism (PP), and DSA-CP 启用, a 共享-索引器 layer can consume another tensor-parallel (TP) rank's Top-K indices when its 索引器-sharing dependency crosses a PP boundary. Expected: Each receiving TP rank re

#### 2026-10-26

- [Issue #19856](https://github.com/vllm-project/vllm-ascend/issues/19856) 进行中
  - 中文：【文档】: Feedback for `/zh-cn/latest/tutorials/models/GLM5.2.html`
  - 原文：[Doc]: Feedback for `/zh-cn/latest/tutorials/models/GLM5.2.html`
  - 说明：📚 The doc issue 5.1.2 多节点部署 章节中 有提到：“在此内部 DP 负载均衡配置中，若在 API 节点显式设置 --data-parallel-start-rank 0，会触发外部或混合 DP 负载均衡模式，远端无 API 引擎会被拒绝，并报错 Remote engine must not use --headless in external or hybrid dp lb mode。请让 API 节点自动推断 rank，使全部 4 个 EngineC
- [Issue #17443](https://github.com/vllm-project/vllm-ascend/issues/17443) 已关闭
  - 中文：[Bug] ： GLM-5.3-Flash W8A8上的长上下文TTFT退化（ A3 ， P/D分解） ：预填充率崩溃102K→ 205K→ 460K （ 11.8K → 10.0K → 3.4K tok/s ） ，解码TPOT不受影响
  - 原文：[Bug]: Long-context TTFT degradation on GLM-5.3-Flash W8A8 (A3, P/D disaggregated): prefill rate collapses 102K→205K→460K (11.8K → 10.0K → 3.4K tok/s), decode TPOT unaffected
- [PR #16881](https://github.com/vllm-project/vllm-ascend/pull/16881) 已关闭
  - 中文：【持续集成】新增 warmup steps for GLM5_1-W8A8-A2-dual-nodes.yaml
  - 原文：[CI] Add warmup steps for GLM5_1-W8A8-A2-dual-nodes.yaml
  - 说明：- vLLM main:

#### 2026-10-23

- [PR #19582](https://github.com/vllm-project/vllm-ascend/pull/19582) 已合并
  - 中文：【v0.30.0】【文档】【杂项】Correct GLM deployment examples and parameter guidance
  - 原文：[v0.30.0][Doc][Misc] Correct GLM deployment examples and parameter guidance
  - 说明：Correct confirmed inconsistencies in the GLM-5/5.1 and GLM-5.3-Flash tutorials: match the query request to its chat response, 对齐 the second 950DT 解码 stage and the summary with the existing 135000-token limit, clarify MTP token budget
- [PR #19581](https://github.com/vllm-project/vllm-ascend/pull/19581) 已合并
  - 中文：【文档】【杂项】Correct GLM deployment examples and parameter guidance
  - 原文：[Doc][Misc] Correct GLM deployment examples and parameter guidance
  - 说明：Correct confirmed inconsistencies in the GLM-5/5.1 and GLM-5.3-Flash tutorials: match the query request to its chat response, 对齐 the second 950DT 解码 stage and the summary with the existing 135000-token limit, clarify MTP token budget
- [PR #19081](https://github.com/vllm-project/vllm-ascend/pull/19081) 已合并
  - 中文：【修复】【持续集成】Run GLM5_1_W4A4_A5 on V2 with intra-RoCE off
  - 原文：[BugFix][CI] Run GLM5_1_W4A4_A5 on V2 with intra-RoCE off
  - 说明：The A5 夜间用例 GLM5 1 W4A4 A5 failed in while running Model Runner V2 with intra-node RoCE 启用. This PR reruns that case on V2 with intra-RoCE turned off. tests/e2e/cases/models/configs/GLM/GLM5 1 W4A4 A5.yaml changes two environme
- [Issue #19553](https://github.com/vllm-project/vllm-ascend/issues/19553) 进行中
  - 中文：【缺陷】: 客户四机A3 PD分离 VLLM0.30.rc2版本部署GLM5.3+memcache压测服务挂掉
  - 原文：[Bug]: 客户四机A3 PD分离 VLLM0.30.rc2版本部署GLM5.3+memcache压测服务挂掉
- [Issue #19298](https://github.com/vllm-project/vllm-ascend/issues/19298) 已关闭
  - 中文：【缺陷】: Deterministic MTE error (errcode 95) at cudagraph capture size 32 with GLM-5.3-Flash on Ascend 950PR
  - 原文：[Bug]:  Deterministic MTE error (errcode 95) at cudagraph capture size 32 with GLM-5.3-Flash on Ascend 950PR

#### 2026-10-22

- [PR #13194](https://github.com/vllm-project/vllm-ascend/pull/13194) 已关闭
  - 中文：【v0.23.0】【文档】【模型】更新 GLM-5 max-num-seqs recommendations
  - 原文：[v0.23.0][Doc][Model] Update GLM-5 max-num-seqs recommendations
  - 说明：This PR 更新 GLM-5 max-num-seqs recommendations. - vLLM version: v0.23.0 - vLLM main:
- [Issue #19451](https://github.com/vllm-project/vllm-ascend/issues/19451) 进行中
  - 中文：【文档】: Feedback for `/zh-cn/latest/tutorials/models/GLM5.3-Flash.html`
  - 原文：[Doc]: Feedback for `/zh-cn/latest/tutorials/models/GLM5.3-Flash.html`
  - 说明：📚 The doc issue docker 镜像启动命令中容器内共享内存挂载点的内存太小，只有1个G ,不满足大模型部署的要求，另外也docker启动命令中也未添加 --privileged=true 开启特权模式 Suggest a potential alternative/fix 建议修改启动脚本，统一检查启动命令，避免重复性操作
- [Issue #16976](https://github.com/vllm-project/vllm-ascend/issues/16976) 已关闭
  - 中文：【缺陷】: GLM-5.3-w8a8c8 with parameter "enable_sparse_sfa_c8: true" which deployed on vllm-ascend:0.26.0rc1 &vllm-ascend:v0.26.0rc2 has garbled text problem
  - 原文：[Bug]: GLM-5.3-w8a8c8 with parameter "enable_sparse_sfa_c8: true" which deployed on vllm-ascend:0.26.0rc1 &vllm-ascend:v0.26.0rc2 has garbled text problem
- [PR #19353](https://github.com/vllm-project/vllm-ascend/pull/19353) 已合并
  - 中文：【修复】【v0.30.0】【GLM5Next】CausalConv1d state underflow for padded 解码 requests
  - 原文：[BugFix][v0.30.0][GLM5Next] Fix CausalConv1d state underflow for padded decode requests
  - 说明：Backport of 18878 to releases/v0.30.0 . Same 修复 as 18878, ported to this branch: a GLM5Next CausalConv1d 解码 graph with padded requests replays more rows than live requests. In the staged (non-contiguous state) path, the gather 内核 w
- [Issue #16878](https://github.com/vllm-project/vllm-ascend/issues/16878) 已关闭
  - 中文：[Bug]: A2双机混部GLM-5.3-Flash-w8a8长上下文场景调用时返回特别慢
- [PR #18878](https://github.com/vllm-project/vllm-ascend/pull/18878) 已合并
  - 中文：【修复】【GLM5Next】CausalConv1d state underflow for padded 解码 requests
  - 原文：[BugFix][GLM5Next] Fix CausalConv1d state underflow for padded decode requests
  - 说明：修复 a GLM5Next CausalConv1d state-buffer underflow when a 解码 graph contains padded requests. For example, five live 解码 requests can replay an eight-row graph. The state gather currently writes -1 for inactive rows and the wrapper pa

#### 2026-10-21

- [Issue #19386](https://github.com/vllm-project/vllm-ascend/issues/19386) 进行中
  - 中文：[Bug]:基于A3单机+vllm 0.30.rc2镜像部署glm5.3-flash模型，在删除mtp参数后进行8并发性能测试，vllm服务崩溃
- [Issue #19349](https://github.com/vllm-project/vllm-ascend/issues/19349) 进行中
  - 中文：【缺陷】: GLM5.3 FLASH 采集profilling时报错
  - 原文：[Bug]: GLM5.3 FLASH 采集profilling时报错
- [PR #19346](https://github.com/vllm-project/vllm-ascend/pull/19346) 进行中
  - 中文：【功能】【MRV2】启用 the four-card GLM-5.3-Flash smoke on Model Runner V2
  - 原文：[Feature][MRV2]Enable the four-card GLM-5.3-Flash smoke on Model Runner V2
  - 说明：tests/e2e/pull request/four card/test glm5 3 flash.py is a TP4 functional smoke for GLM-5.3-Flash. It was skipped because the case pinned Model Runner V1, and V1 is outside the default CI path. This turns that smoke back on and runs it on M
- [Issue #19345](https://github.com/vllm-project/vllm-ascend/issues/19345) 进行中
  - 中文：【缺陷】: glm5.2 四机混部部署，部署空闲2h后首个请求触发 Gloo all_reduce 超时
  - 原文：[Bug]:  glm5.2 四机混部部署，部署空闲2h后首个请求触发 Gloo all_reduce 超时
- [Issue #18605](https://github.com/vllm-project/vllm-ascend/issues/18605) 已关闭
  - 中文：[错误] ： GLM-5.3-Flash MooncakeConnectorV2 PD在长输入提示下重复推理
  - 原文：[Bug]: GLM-5.3-Flash MooncakeConnectorV2 PD repeats reasoning on a long-input prompt
  - 说明：GLM-5.3-Flash with MooncakeConnectorV2 repeatedly continues reasoning without returning the final answer for a long-input request through the PD route. The identical prompt completes correctly when sent directly to D with both cold and warm
- [PR #19267](https://github.com/vllm-project/vllm-ascend/pull/19267) 已合并
  - 中文：【v0.30.0】【文档】【杂项】Sync GLM deployment guides and documentation UI from main
  - 原文：[v0.30.0][Doc][Misc] Sync GLM deployment guides and documentation UI from main
  - 说明：Synchronize the GLM deployment documentation and supporting documentation UI from the main documentation PR 17516 to releases/v0.30.0 . - Copy the 共享 GLM-5.2/GLM-5.3 guide and GLM-5.3-Flash guide in full, including deployment examples,

#### 2026-10-20

- [Issue #19062](https://github.com/vllm-project/vllm-ascend/issues/19062) 已关闭
  - 中文：【文档】【文档】: Feedback for `/en/latest/tutorials/mo : GLM5.3-Flash §5.3 1P1D PD (A2, 4-node) 预填充 launch combo (P1 --headless + --data-parallel-rank) cannot start on the paired vLLM v0.30.0dels/GLM5.3-Flash.html`
  - 原文：[Doc]: Feedback for `/en/latest/tutorials/mo[Doc]: GLM5.3-Flash §5.3 1P1D PD (A2, 4-node) prefill launch combo (P1 --headless + --data-parallel-rank) cannot start on the paired vLLM v0.30.0dels/GLM5.3-Flash.html`
  - 说明：📚 The doc issue 📚 The doc issue The A2 4-node variant of §5.3 "1P1D PD Disaggregated Deployment" in the GLM-5.3-Flash tutorial ( source: docs/source/tutorials/models/GLM5.3-Flash.md , identical on tag v0.30.0rc1 and current main ) documen
- [PR #19219](https://github.com/vllm-project/vllm-ascend/pull/19219) 进行中
  - 中文：V0.30.0 glm5
  - 说明：【】--- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary conditions (e.g. empty input, single/zero element, min/max values, off-by-one, seque

#### 2026-10-19

- [PR #14821](https://github.com/vllm-project/vllm-ascend/pull/14821) 已关闭
  - 中文：【功能】【MRV2】稀疏 mla 卸载 modelrunnerV2
  - 原文：[Feature][MRV2]sparse mla offload modelrunnerV2
  - 说明：This PR migrates layerwise 稀疏 mla 卸载 for GLM5.x to MRV2. We did not change the original logic of it. The changes are mainly 2 folds: 1. 新增 apply layerwise KV 缓存 plan for layerwise reuse. 2. 新增 解码 稀疏 mla 卸载 metadat
- [Issue #18560](https://github.com/vllm-project/vllm-ascend/issues/18560) 已关闭
  - 中文：【文档】: Feedback for `/zh-cn/v0.30.0rc1/tutorials/models/GLM5.3.html`
  - 原文：[Doc]: Feedback for `/zh-cn/v0.30.0rc1/tutorials/models/GLM5.3.html`
  - 说明：📚 The doc issue 实测融合 muls 新增 参数层级有误 文档未能及时更新；glm5.3 w8a8c8 四机混部使用0.30.0rc1 版本拉取报融合 muls 新增参数不支持，按附件修改vllm服务参数后--additional-配置 "{"ascend compilation 配置": {"融合 muls 新增": true}, "启用 dsa cp": true, "启用 balance scheduli
- [Issue #17377](https://github.com/vllm-project/vllm-ascend/issues/17377) 已关闭
  - 中文：【文档】: glm5.2pd分离部署脚本有误（Feedback for `/zh-cn/v0.26.0rc1/tutorials/models/GLM5.2.html`）
  - 原文：[Doc]: glm5.2pd分离部署脚本有误（Feedback for `/zh-cn/v0.26.0rc1/tutorials/models/GLM5.2.html`）
  - 说明：📚 The doc issue 原文中pd分离启动脚本：准备工作完成后，可在每个节点上使用以下命令启动服务器 预填充节点0 bash run dp template.sh 预填充节点1 bash run dp template.sh 有误；脚本中port $2 没有参数传入 Suggest a potential alternative/修复 No response
- [Issue #19162](https://github.com/vllm-project/vllm-ascend/issues/19162) 进行中
  - 中文：[Doc]: glm5.2长上下文高并发报错
  - 说明：📚 The doc issue 就高并发时报错 Suggest a potential alternative/修复 扩容？
- [PR #19126](https://github.com/vllm-project/vllm-ascend/pull/19126) 进行中
  - 中文：【修复】遵循 normalized YaRN 注意力 factor in MLA
  - 原文：[BugFix] Honor normalized YaRN attention factor in MLA
  - 说明：Port the normalized YaRN selection from to the Ascend DeepSeek MLA constructor and its GLM5Next / Kimi K3 counterparts. These constructors still read apply yarn scaling , which may be absent after 配置 normalization. With 注意力
- [Issue #18807](https://github.com/vllm-project/vllm-ascend/issues/18807) 已关闭
  - 中文：【缺陷】: v0.30.0rc2，glm5.3flash，A3，3P+1D,多模态请求导致服务挂死
  - 原文：[Bug]: v0.30.0rc2，glm5.3flash，A3，3P+1D,多模态请求导致服务挂死

#### 2026-10-17

- [PR #19055](https://github.com/vllm-project/vllm-ascend/pull/19055) 已合并
  - 中文：【修复】【持续集成】恢复 GLM5_1_W4A4_A5 to the V1 server 配置
  - 原文：[BugFix][CI] Restore GLM5_1_W4A4_A5 to the V1 server config
  - 说明：17681 moved GLM5 1 W4A4 A5 onto a Model Runner V2 server shape (TP=2, 预填充-context-parallel-size=4, HCCL BUFFSIZE=1024, gpu-显存-utilization=0.90, CLI EPLB). A follow-up only pinned VLLM USE V2 MODEL RUNNER=0. V1 rejects 预填充 contex
- [PR #19072](https://github.com/vllm-project/vllm-ascend/pull/19072) 已关闭
  - 中文：【功能】【GLM-5.3-Flash】启用 torch.compile for GLM-5.3-Flash backbone and MTP
  - 原文：[Feature][GLM-5.3-Flash] Enable torch.compile for GLM-5.3-Flash backbone and MTP
  - 说明：GLM-5 Next (GLM-5.3-Flash) ran its text backbone and MTP draft model in eager 模式 only: neither Glm5NextModel nor Glm5NextMTP carried @支持 torch compile , so enabling compilation in the vLLM 配置 had no effect on them. This PR 启用

#### 2026-10-16

- [PR #18930](https://github.com/vllm-project/vllm-ascend/pull/18930) 已合并
  - 中文：【重构】【Patch】Use upstream GLM-5-Next 配置 支持
  - 原文：[Refactor][Patch] Use upstream GLM-5-Next config support
  - 说明：vLLM v0.31.0 and the verified main pin ( c4df37dfcc7f72ca41cd43801a468526ecf99a2b ) already register glm5 next , glm5 next text , and glm5 next vision , and recognize the GLM-5-Next text model types for MLA. The upstream 配置 classes have
- [Issue #18951](https://github.com/vllm-project/vllm-ascend/issues/18951) 进行中
  - 中文：【缺陷】: GLM-5.3-Flash-w8a8基于vllm-ascend 0.30.0rc2部署（1P1D）128K/2K性能测试正常，256K/2K测试崩溃
  - 原文：[Bug]: GLM-5.3-Flash-w8a8基于vllm-ascend 0.30.0rc2部署（1P1D）128K/2K性能测试正常，256K/2K测试崩溃
- [PR #18938](https://github.com/vllm-project/vllm-ascend/pull/18938) 已关闭
  - 中文：Docs turboquant glm52 glm53 0.30.0
  - 说明：【】--- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary conditions (e.g. empty input, single/zero element, min/max values, off-by-one, seque

#### 2026-10-15

- [Issue #16085](https://github.com/vllm-project/vllm-ascend/issues/16085) 已关闭
  - 中文：【缺陷】: 0.26.0rc1 GLM5.3 dcp=8 and sfa-c8 true 的场景 必定精度异常，出现乱码
  - 原文：[Bug]: 0.26.0rc1 GLM5.3 dcp=8 and sfa-c8 true 的场景 必定精度异常，出现乱码
- [Issue #16654](https://github.com/vllm-project/vllm-ascend/issues/16654) 已关闭
  - 中文：【Bug】： GLM-5.2 A3 （ 2 节点 P/D 分离部署） ，长时间 （ 3-8小时 ）运行后 Prefill实例出现 fftsplus aicore error ， EngineCore异常退出
  - 原文：[Bug]: GLM-5.2 A3（2 节点 P/D 分离部署），长时间（3-8小时）运行后Prefill实例出现 fftsplus aicore error ， EngineCore异常退出
- [Issue #16015](https://github.com/vllm-project/vllm-ascend/issues/16015) 已关闭
  - 中文：【缺陷】: 0.26.0rc1 GLM5.3 w8a8c8 部署pd分离 512K场景 sfac8 && dcp16 开启，长输入请求乱码
  - 原文：[Bug]: 0.26.0rc1 GLM5.3 w8a8c8 部署pd分离 512K场景 sfac8 && dcp16 开启，长输入请求乱码
- [Issue #18859](https://github.com/vllm-project/vllm-ascend/issues/18859) 进行中
  - 中文：【缺陷】: MLAPO hardcodes RMSNorm epsilon=1e-6 instead of honoring model rms_norm_eps (GLM-5.2 W8A8)
  - 原文：[Bug]: MLAPO hardcodes RMSNorm epsilon=1e-6 instead of honoring model rms_norm_eps (GLM-5.2 W8A8)
- [Issue #18804](https://github.com/vllm-project/vllm-ascend/issues/18804) 进行中
  - 中文：[Bug] ： 4节点A2 PD + Mooncake KV Pool （ GLM-5.3-Flash-w8a8 ， v0.30.0rc2 ） ：两个预填充引擎都悬挂在61%的池水位线上— AscendStore batch_put失败为-1 ，而master显示38%可用， NPU任务队列为空
  - 原文：[Bug]: 4-node A2 PD + Mooncake KV Pool (GLM-5.3-Flash-w8a8, v0.30.0rc2): both Prefill engines hang at 61% pool watermark — AscendStore batch_put fails with -1 while master shows 38% free, NPU task queues empty
- [Issue #18782](https://github.com/vllm-project/vllm-ascend/issues/18782) 进行中
  - 中文：[错误] ： 0.30.0rc1/rc2 GLM-5.3-Flash-w8a8部署 四机Atlas 800I A2PD分离远程引擎1不得在外部或混合DP 1b模式下使用--headless
  - 原文：[Bug]: 0.30.0rc1/rc2部署GLM-5.3-Flash-w8a8 四机Atlas 800I A2PD分离Remote engine1 must not use --headless in external or hybrid dp 1b mode
- [Issue #18775](https://github.com/vllm-project/vllm-ascend/issues/18775) 进行中
  - 中文：【缺陷】: v0.30.0rc1部署glm5.3-w8a8c8 四机Atlas 800I A2混部 长序列下开启前缀缓存 测试时vllm服务端显示命中0
  - 原文：[Bug]: v0.30.0rc1部署glm5.3-w8a8c8 四机Atlas 800I A2混部  长序列下开启prefix cache 测试时vllm服务端显示命中0

### GLM-5.1

#### 2026-11-10

- [PR #21376](https://github.com/vllm-project/vllm-ascend/pull/21376) 已合并
  - 中文：【文档】【修复】对齐 GLM-5.1 PD KV topology with PCP16
  - 原文：[Doc][BugFix] Align GLM-5.1 PD KV topology with PCP16
  - 说明：The GLM-5.1 A3 PD 服务 commands and topology use 预填充 PP2/TP1/PCP16, but the four KV 配置 blocks still declare TP16 without PCP. 对齐 all four declarations to TP1/PCP16 while retaining DP1, PP2 and the 41/37 layer partition.
- [PR #21377](https://github.com/vllm-project/vllm-ascend/pull/21377) 已合并
  - 中文：【v0.32.0rc】【文档】【修复】对齐 GLM-5.1 PD KV topology with PCP16
  - 原文：[v0.32.0rc][Doc][BugFix] Align GLM-5.1 PD KV topology with PCP16
  - 说明：The GLM-5.1 A3 PD 服务 commands and topology use 预填充 PP2/TP1/PCP16, but the four KV 配置 blocks still declare TP16 without PCP. 对齐 all four declarations to TP1/PCP16 while retaining DP1, PP2 and the 41/37 layer partition.

#### 2026-11-09

- [PR #21343](https://github.com/vllm-project/vllm-ascend/pull/21343) 已关闭
  - 中文：【测试】Reproduce GLM-5.1 权重 卸载 startup failure
  - 原文：[Test] Reproduce GLM-5.1 weight offload startup failure
  - 说明：Adds a reproduction note to the existing GLM-5.1-w8a8c8-MTP-卸载-test-perf case. The branch starts at 3725f6b36 for a single-case 每周-A3 reproduction of the MRv2 expert 权重 卸载 startup failure. The original job failed during me

#### 2026-11-02

- [PR #18634](https://github.com/vllm-project/vllm-ascend/pull/18634) 已关闭
  - 中文：【测试】新增 MiniMax-M3 支持 to RLHF 权重 transfer tests
  - 原文：[Test] Add MiniMax-M3 support to RLHF weight transfer tests
  - 说明：新增 MiniMax-M3 to the 共享 RLHF 权重-transfer E2E matrix, move IPC coverage to two-card TP2, and replace GLM-5.1 with GLM-5.3-Flash. Each model is selected for unpacked IPC. Qwen3.5 provides representative IPC/HCCL coverage in both pack

#### 2026-10-30

- [Issue #20388](https://github.com/vllm-project/vllm-ascend/issues/20388) 进行中
  - 中文：【性能】: GLM-5.1 A5 TP8 paired V1/V2 服务 differences in both run orders
  - 原文：[Performance]: GLM-5.1 A5 TP8 paired V1/V2 serving differences in both run orders
  - 说明：Proposal to 改进 性能 Investigate the measured V2 服务 differences before claiming runner parity. Compare same-host 修复 token-ID workloads in reversed orders; use the request-phase and iteration-histogram evidence below to ch
- [PR #20387](https://github.com/vllm-project/vllm-ascend/pull/20387) 进行中
  - 中文：【修复】【测试】新增 GLM-5.1 paired runner checks and repair FP8 KV fallback
  - 原文：[BugFix][Test] Add GLM-5.1 paired runner checks and repair FP8 KV fallback
  - 说明：新增 reproducible GLM-5.1 Model Runner V1/V2 comparisons for the full mixed-MXFP4/MXFP8 检查点 on A5 TP8/EP8: identical token-ID inputs, greedy/seeded sampling, 修复-history logprobs, token-ID SSE latency, 修复-group controls, real-gen

#### 2026-10-28

- [PR #20034](https://github.com/vllm-project/vllm-ascend/pull/20034) 草稿
  - 中文：【文档】新增 GLM-5.1 Ascend recipe overlay
  - 原文：[Doc] Add GLM-5.1 Ascend recipe overlay
  - 说明：迁移 the GLM-5.1 Ascend content from vllm-project/vllm 62890 into recipes/overlays/zai-org/GLM-5.1.yaml , following the source ownership established by recipes 1160 and vllm-ascend 19381. This adds an overlay, not another complete model

#### 2026-10-26

- [PR #19832](https://github.com/vllm-project/vllm-ascend/pull/19832) 已合并
  - 中文：【v0.30.0】【文档】【杂项】更新 支持 status for GLM-5.1, Qwen3.5/3.6-27B, and Kimi-K2.6 to Supported
  - 原文：[v0.30.0][Doc][Misc] Update support status for GLM-5.1, Qwen3.5/3.6-27B, and Kimi-K2.6 to Supported
  - 说明：This PR 更新 the 支持 status of several models in the 支持 matrix to reflect their current verification status: - 更新 GLM-5.1 , Qwen3.5-27B / Qwen3.6-27B , and Kimi-K2.6 from Experimental (🔵) to Supported (✅). - Reorders the "
- [PR #19822](https://github.com/vllm-project/vllm-ascend/pull/19822) 进行中
  - 中文：【v0.30.0】【文档】【杂项】Mark GLM-5.1 A2/A3 支持 as supported
  - 原文：[v0.30.0][Doc][Misc] Mark GLM-5.1 A2/A3 support as supported
  - 说明：Mark GLM-5.1 支持 on A2/A3 with a green check in Supported Models and synchronize the Chinese translation entry. The GLM-5.1 A2/A3 status changes from blue to supported. Other 特性 column
- [PR #19821](https://github.com/vllm-project/vllm-ascend/pull/19821) 进行中
  - 中文：【文档】【杂项】Mark GLM-5.1 A2/A3 支持 as supported
  - 原文：[Doc][Misc] Mark GLM-5.1 A2/A3 support as supported
  - 说明：Mark GLM-5.1 支持 on A2/A3 with a green check in Supported Models and synchronize the Chinese translation entry. The GLM-5.1 A2/A3 status changes from blue to supported. Other 特性 column

#### 2026-10-17

- [PR #19067](https://github.com/vllm-project/vllm-ascend/pull/19067) 已合并
  - 中文：【持续集成】恢复 C8 KV 缓存 for GLM5.1 128K 夜间
  - 原文：[CI] Restore C8 KV cache for GLM5.1 128K nightly
  - 说明：The GLM5.1 W8A8C8 A3 128K 夜间 has insufficient device-显存 capacity for the main KV 缓存 when it uses BF16. The approximately 166K/153K-token KV pools on node 0/node 1 cannot keep the intended six long requests per DP engine resident

#### 2026-10-16

- [PR #17836](https://github.com/vllm-project/vllm-ascend/pull/17836) 已关闭
  - 中文：【持续集成】【PCP】迁移 GLM MRV2 nightlies from DSA-CP to PCP
  - 原文：[CI][PCP] Migrate GLM MRV2 nightlies from DSA-CP to PCP
  - 说明：- 迁移 five GLM MRV2 夜间 configurations from DSA-CP to PCP while preserving their device counts. - 对齐 the GLM-5.1 PD 预填充 topology and KV transfer 元数据 with the new TP size. - Keep the GLM-5.2 DCP topology and raise its HCC

### GLM-5.2

#### 2026-11-10

- [PR #16679](https://github.com/vllm-project/vllm-ascend/pull/16679) 已关闭
  - 中文：【持续集成】【nightly】新增 GLM-5.2 DSpark adaptive verification coverage
  - 原文：[CI][nightly] Add GLM-5.2 DSpark adaptive verification coverage
  - 说明：新增 夜间 coverage for GLM-5.2 W4A8 DSpark adaptive verification on Model Runner V2. The existing 夜间用例 covers 修复 verification. This PR adds coverage for the adaptive verification path before removing the corresponding PR CI tes

#### 2026-11-09

- [PR #21174](https://github.com/vllm-project/vllm-ascend/pull/21174) 已合并
  - 中文：【文档】更新 GLM-5.3 to MRV2 and ordinary PD 预填充 PCP
  - 原文：[Doc] Update GLM-5.3 to MRV2 and ordinary PD Prefill PCP
  - 说明：切换 the GLM-5.2/GLM-5.3 guide to MRV2 and 迁移 only ordinary PD 预填充 parallelism following the 夜间 GLM-5.3 A3 PP+PCP recipe. - Keep explicit MRV2 in all 32 服务 scripts and 移除 obsolete 启用 dsa cp guidance. - Ordinary

#### 2026-11-06

- [PR #21175](https://github.com/vllm-project/vllm-ascend/pull/21175) 进行中
  - 中文：【文档】【v0.32.0rc】更新 GLM-5.3 to MRV2 and ordinary PD 预填充 PCP
  - 原文：[Doc][v0.32.0rc] Update GLM-5.3 to MRV2 and ordinary PD Prefill PCP
  - 说明：切换 the GLM-5.2/GLM-5.3 guide to MRV2 and 迁移 only ordinary PD 预填充 parallelism following the 夜间 GLM-5.3 A3 PP+PCP recipe. - Keep explicit MRV2 in all 32 服务 scripts and 移除 obsolete 启用 dsa cp guidance. - Ordinary
- [PR #21127](https://github.com/vllm-project/vllm-ascend/pull/21127) 进行中
  - 中文：【持续集成】【杂项】移除 DSA CP override from GLM-5.2 W8A8 MTP A5 case
  - 原文：[CI][Misc] Remove DSA CP override from GLM-5.2 W8A8 MTP A5 case
  - 说明：This PR removes the explicit "启用 dsa cp":true override from the --additional-配置 arguments for both nodes in the GLM-5.2 W8A8C8 MTP A5 夜间 配置. This follows up on 21035 to clean up the 配置 as requested. Does t

#### 2026-11-05

- [PR #21035](https://github.com/vllm-project/vllm-ascend/pull/21035) 已合并
  - 中文：【持续集成】【Nightly】新增 GLM-5.2 W8A8 MTP 精度 coverage on 16 A5 NPUs
  - 原文：[CI][Nightly] Add GLM-5.2 W8A8 MTP accuracy coverage on 16 A5 NPUs
  - 说明：新增 GLM-5.2 W8A8C8 MXFP8 + MTP 夜间 精度 coverage on A5, following the GSM8K setup in 20769 and adapting it to two nodes with eight NPUs each (TP8 x PP2, 16 NPUs total). - Main model: Eco-Tech/GLM-5.2-W8A8C8-mxfp8 . - Use deepseek mt
- [PR #20769](https://github.com/vllm-project/vllm-ascend/pull/20769) 已合并
  - 中文：【持续集成】【Nightly】新增 GLM-5.2 DSpark GQA five-token coverage on A5
  - 原文：[CI][Nightly] Add GLM-5.2 DSpark GQA five-token coverage on A5
  - 说明：新增 an A5 夜间用例 for GLM-5.2 W4A4C8 with the GQA DSpark draft model, following the combined 精度/acceptance pattern in 20754. Register it on linux-aarch64-a5-8 with TP8, DP1, the V2 model runner, five 投机 tokens, eager dra
- [PR #20739](https://github.com/vllm-project/vllm-ascend/pull/20739) 已合并
  - 中文：【测试】新增 GLM-5.2 layerwise PD and Qwen3.8 PP coverage; retire legacy 每周 cases
  - 原文：[Test] Add GLM-5.2 layerwise PD and Qwen3.8 PP coverage; retire legacy weekly cases
  - 说明：更新 每周 coverage with newer models and retire legacy cases. - 新增 a four-node GLM-5.2 W8A8C8 layerwise PD 精度 test on A3, using 预填充 DP2/TP16 and 解码 DP16/TP2 with MTP. - Allow external DP cases to override 路由.proxy sc
- [PR #21036](https://github.com/vllm-project/vllm-ascend/pull/21036) 进行中
  - 中文：【持续集成】【Nightly】新增 GLM-5.2 W8A8 DSpark GQA 精度 coverage on 16 A5 NPUs
  - 原文：[CI][Nightly] Add GLM-5.2 W8A8 DSpark GQA accuracy coverage on 16 A5 NPUs
  - 说明：新增 GLM-5.2 W8A8C8 MXFP8 + DSpark GQA 夜间 精度 coverage on A5, following the GSM8K setup in 20769 and adapting it to two nodes with eight NPUs each (TP8 x PP2, 16 NPUs total). - Main model: Eco-Tech/GLM-5.2-W8A8C8-mxfp8 . - Use five
- [PR #19843](https://github.com/vllm-project/vllm-ascend/pull/19843) 已关闭
  - 中文：【修复】【Worker】【v0.30.0】Preserve DSA-CP Top-K indices across PP
  - 原文：[BugFix][Worker][v0.30.0] Preserve DSA-CP Top-K indices across PP
  - 说明：修复 GLM-5.2 IndexShare across pipeline stages when DSA-CP is 启用. PP send and receive now call 启用 sp(self.vllm 配置) , so transport uses the worker's actual 序列-parallel 配置. Worker RPC execution runs outside the te

#### 2026-11-04

- [PR #20928](https://github.com/vllm-project/vllm-ascend/pull/20928) 进行中
  - 中文：【持续集成】【Nightly】新增 GLM-5.2 W4A4C8 MRV2 MTP 精度 coverage on A5
  - 原文：[CI][Nightly] Add GLM-5.2 W4A4C8 MRV2 MTP accuracy coverage on A5
  - 说明：新增 glm-5.2-w4a4c8-mtp-a5-v2 to the A5 single-node 夜间 matrix on linux-aarch64-a5-8 . Use the requested ModelScope 检查点 Eco-Tech/GLM-5.2-w4a4c8-mxfp4 and the contributor's 服务 settings: DP1/TP8 with EP, MRV2, asynchronous sche
- [PR #20754](https://github.com/vllm-project/vllm-ascend/pull/20754) 已合并
  - 中文：【持续集成】【nightly】consolidate GLM-5.2 V2 精度 and acceptance checks
  - 原文：[CI][nightly]consolidate GLM-5.2 V2 accuracy and acceptance checks
  - 说明：Consolidate the GLM-5.2 W4A8 MTP and DSpark 夜间 tests around the V2 model runner: - Explicitly set VLLM USE V2 MODEL RUNNER=1 in both V2 configurations. - Run GSM8K 精度 and validate 投机 acceptance rates using counter deltas

#### 2026-11-03

- [PR #20768](https://github.com/vllm-project/vllm-ascend/pull/20768) 已合并
  - 中文：【v0.32.0】【文档】移除 forced eager 模式 from GLM W4A4 single-node example
  - 原文：[v0.32.0][Doc] Remove forced eager mode from GLM W4A4 single-node example
  - 说明：Synchronize the final changes from 20448 and 20449 to releases/v0.32.0rc . 移除 --enforce-eager from the 950DT single-node GLM-5.2/GLM-5.3 W4A4C8 example, allowing the default graph execution path. 移除 the corresponding parameter-descr
- [PR #20717](https://github.com/vllm-project/vllm-ascend/pull/20717) 进行中
  - 中文：【修复】【持续集成】禁用 DCP Q replication for GLM-5.2 SFA 夜间
  - 原文：[BugFix][CI] Disable DCP Q replication for GLM-5.2 SFA nightly
  - 说明：Explicitly set VLLM DCP Q REPLICATE=0 in the A3 GLM-5.2 W4A8C8 SFA DCP 夜间 配置. The main-branch run fails while constructing MTP 注意力 with ValueError: Ascend dcp q replicate only supports dense MLA; SFA is not supported .

#### 2026-11-02

- [Issue #18099](https://github.com/vllm-project/vllm-ascend/issues/18099) 已关闭
  - 中文：[bug] ： [v 0.26] [glm5.2+kvoffload] PD-sep解码等级崩溃： HYBM VA地址重叠
  - 原文：[bug]:[v0.26][glm5.2+kvoffload]PD-sep decode ranks crash: HYBM VA address overlap
- [Issue #18005](https://github.com/vllm-project/vllm-ascend/issues/18005) 已关闭
  - 中文：[Bug]: glm5.2+kvoffload 非分布式启动在bench中途报错 ：预期所有张量都在同一设备上，但get x2在npu: 5上
  - 原文：[Bug]: glm5.2+kvoffload 非分布式启动在bench中途报错：Expected all tensors to be on the same device, but got x2 is on npu:5

#### 2026-10-31

- [PR #17504](https://github.com/vllm-project/vllm-ascend/pull/17504) 已关闭
  - 中文：【文档】Pass positional args to run_dp_template.sh in GLM5.2 PD tutorial
  - 原文：[Doc] Pass positional args to run_dp_template.sh in GLM5.2 PD tutorial
  - 说明：The GLM5.2 PD-disaggregation tutorial started the 预填充 nodes with a bare bash run dp template.sh . The template reads seven positional parameters ( $1 =可见 devices $2 =port $3 =dp size $4 =dp rank $5 =dp address $6 =dp rpc port $7 =t
- [PR #20478](https://github.com/vllm-project/vllm-ascend/pull/20478) 进行中
  - 中文：【功能】稀疏 KV 卸载: 共享 索引器 Only 优化
  - 原文：[Feature] Sparse KV Offload: Shared Indexer Only Optimization
  - 说明：This PR introduces the 卸载 共享 索引器 only 优化 for layered-索引器 models (such as GLM-5.2) in 稀疏 KV offloading. It keeps the KV 缓存 of full (索引器-owner) layers resident in NPU HBM paged caches, while offloading on
- [PR #19094](https://github.com/vllm-project/vllm-ascend/pull/19094) 已合并
  - 中文：【修复】避免 redundant wk_weights_proj in SFA 索引器 top-k selection
  - 原文：[BugFix] Avoid redundant wk_weights_proj in SFA indexer top-k selection
  - 说明：【head dim, n head】In the DSA/SFA 注意力 解码 forward of GLM-5.2, the 索引器 submodule performs top-k block selection. Its preceding projection wk 权重 proj is a 融合 GEMM ( MergedColumnParallelLinear(hidden size, ) ) that produces

#### 2026-10-30

- [PR #17344](https://github.com/vllm-project/vllm-ascend/pull/17344) 已合并
  - 中文：【修复】【量化】Release ModelSlim MoE reload 元数据 references
  - 原文：[BugFix][Quantization] Release ModelSlim MoE reload metadata references
  - 说明：The ModelSlim MoE loader wrapper closes over a bound method, retaining its layer through vLLM reload 元数据. Return a method bound to the owning layer so the existing reload sanitizer can break that reference; preserve the plain-callable

#### 2026-10-29

- [PR #20069](https://github.com/vllm-project/vllm-ascend/pull/20069) 已合并
  - 中文：【文档】【模型】更新 A2 GLM-5.2 deployment parallelism
  - 原文：[Doc][Model] Update A2 GLM-5.2 deployment parallelism
  - 说明：What does this PR do? - 更新 the A2 PD disaggregation 预填充 配置 from PP2/TP16 to PP4/TP8. - Set the A2 预填充 layer partition to 20,20,20,18 and keep 解码 at DP16/TP2. - 更新 the A2 MemCache KV 池化 deployment to PP4/T
- [PR #20071](https://github.com/vllm-project/vllm-ascend/pull/20071) 已合并
  - 中文：【文档】【v0.30.0】【模型】更新 A2 GLM-5.2 deployment parallelism
  - 原文：[Doc][v0.30.0][Model] Update A2 GLM-5.2 deployment parallelism
  - 说明：What does this PR do? - 更新 the A2 PD disaggregation 预填充 配置 from PP2/TP16 to PP4/TP8. - Set the A2 预填充 layer partition to 20,20,20,18 and keep 解码 at DP16/TP2. - 更新 the A2 MemCache KV 池化 deployment to PP4/T

#### 2026-10-28

- [PR #20114](https://github.com/vllm-project/vllm-ascend/pull/20114) 进行中
  - 中文：【功能】【KV 卸载】支持 Mooncake DSA 稀疏 KV 卸载 with RD2H transfer
  - 原文：[Feature][KV Offload] Support Mooncake DSA sparse KV offload with RD2H transfer
  - 说明：Long-context inference can require KV 缓存 capacity beyond available HBM. For DSA models such as GLM5.2, 稀疏 注意力 accesses only the top-k tokens selected by the 索引器. This permits the full Main KV 缓存 to reside in host DRAM, w
- [PR #17705](https://github.com/vllm-project/vllm-ascend/pull/17705) 已关闭
  - 中文：【特点】【型号】PCP、DCP支持GLM-5.3-Flash KPool分度器
  - 原文：[Feature][Model] Support GLM-5.3-Flash KPool indexer with PCP and DCP
  - 说明：GLM-5.3-Flash用池化KPool索引器替换了GLM-5.2 LightningIndexer缓存布局。已完成的四个令牌池被压缩到BF16缓存中，而因果后缀保留在FP32尾缓存中。原来的提升路径没有
- [PR #18179](https://github.com/vllm-project/vllm-ascend/pull/18179) 已关闭
  - 中文：[Doc] [BugFix]修复GLM5.2 PD分解启动脚本中空的$ 2端口参数
  - 原文：[Doc][BugFix] Fix empty $2 port parameter in GLM5.2 PD disaggregation startup scripts
  - 说明：Description In section 5.1.3.1 (4× Atlas 800 A3 PD disaggregation) of docs/source/tutorials/models/GLM5.2.md , the 预填充 node templates reference --port $2 , but the 预填充 nodes are started directly with bash run dp template.sh without
- [PR #20062](https://github.com/vllm-project/vllm-ascend/pull/20062) 进行中
  - 中文：【文档】【修复】Omit --data-parallel-start-rank on the API node
  - 原文：[Doc][BugFix] Omit --data-parallel-start-rank on the API node
  - 说明：This PR removes --data-parallel-start-rank 0 from the API node in the multi-node deployment guides for GLM-5.2 , Kimi-K3 , MiniMax-M3 and MiniMax-M3.1-Flash , and fixes the parameter tables that incorrectly described node 0 as using rank 0
- [PR #19904](https://github.com/vllm-project/vllm-ascend/pull/19904) 已合并
  - 中文：【文档】【杂项】Clarify GLM deployment prerequisites and references
  - 原文：[Doc][Misc] Clarify GLM deployment prerequisites and references
  - 说明：Clarify the remaining issues from a review of the GLM-5.2/5.3 and GLM-5.3-Flash deployment guides. 对齐 A3 device descriptions with the logical devices used by 服务 commands, 补充文档 tokenizer installation and launcher arguments, clari
- [PR #19903](https://github.com/vllm-project/vllm-ascend/pull/19903) 已合并
  - 中文：【v0.30.0】【文档】【杂项】Clarify GLM deployment prerequisites and references
  - 原文：[v0.30.0][Doc][Misc] Clarify GLM deployment prerequisites and references
  - 说明：Clarify the remaining issues from a review of the GLM-5.2/5.3 and GLM-5.3-Flash guides on releases/v0.30.0. 对齐 A3 logical-device descriptions, 补充文档 tokenizer installation and launcher arguments, clarify 序列 limits and Mooncake p
- [PR #19921](https://github.com/vllm-project/vllm-ascend/pull/19921) 已合并
  - 中文：【文档】skill modify
  - 原文：[Doc] skill modify
  - 说明：This PR refines the tutorials and FAQs for GLM-5.2 and GLM-5.3-Flash models. Specifically, it: - Fixes minor punctuation and capitalization (e.g., "vllm" to "vLLM"). - Clarifies server startup instructions and service ordering. - Adds a ref
- [PR #19998](https://github.com/vllm-project/vllm-ascend/pull/19998) 已合并
  - 中文：【文档】skill modify
  - 原文：[Doc] skill modify
  - 说明：This PR refines the tutorials and FAQs for GLM-5.2 and GLM-5.3-Flash models. Specifically, it: - Fixes minor punctuation and capitalization (e.g., "vllm" to "vLLM"). - Clarifies server startup instructions and service ordering. - Adds a ref
- [PR #19983](https://github.com/vllm-project/vllm-ascend/pull/19983) 已关闭
  - 中文：【文档】skill modify
  - 原文：[Doc] skill modify
  - 说明：This PR refines the tutorials and FAQs for GLM-5.2 and GLM-5.3-Flash models. Specifically, it: - Fixes minor punctuation and capitalization (e.g., "vllm" to "vLLM"). - Clarifies server startup instructions and service ordering. - Adds a ref

#### 2026-10-27

- [PR #18192](https://github.com/vllm-project/vllm-ascend/pull/18192) 已关闭
  - 中文：[文档] [模型]在GLM教程中将fuse_muls_add移动到ascend_compilation_config
  - 原文：[Doc][Model] Move fuse_muls_add into ascend_compilation_config in GLM tutorials
  - 说明：Fixes 18130. 融合 muls 新增 is a field of AscendCompilationConfig ( vllm ascend/ascend 配置.py:129 ), not of the top-level AscendConfig . The GLM5 / GLM5.2 / GLM5.3 tutorials passed it at the top level of --additional-配置 , so AscendCon
- [Issue #19929](https://github.com/vllm-project/vllm-ascend/issues/19929) 进行中
  - 中文：【缺陷】: GLM-5.2 IndexShare reuses incorrect Top-K indices across PP stages with DSA-CP
  - 原文：[Bug]: GLM-5.2 IndexShare reuses incorrect Top-K indices across PP stages with DSA-CP
  - 说明：With GLM-5.2, pipeline parallelism (PP), and DSA-CP 启用, a 共享-索引器 layer can consume another tensor-parallel (TP) rank's Top-K indices when its 索引器-sharing dependency crosses a PP boundary. Expected: Each receiving TP rank re

#### 2026-10-26

- [Issue #19856](https://github.com/vllm-project/vllm-ascend/issues/19856) 进行中
  - 中文：【文档】: Feedback for `/zh-cn/latest/tutorials/models/GLM5.2.html`
  - 原文：[Doc]: Feedback for `/zh-cn/latest/tutorials/models/GLM5.2.html`
  - 说明：📚 The doc issue 5.1.2 多节点部署 章节中 有提到：“在此内部 DP 负载均衡配置中，若在 API 节点显式设置 --data-parallel-start-rank 0，会触发外部或混合 DP 负载均衡模式，远端无 API 引擎会被拒绝，并报错 Remote engine must not use --headless in external or hybrid dp lb mode。请让 API 节点自动推断 rank，使全部 4 个 EngineC

#### 2026-10-23

- [Issue #19646](https://github.com/vllm-project/vllm-ascend/issues/19646) 进行中
  - 中文：夜间 Daily test failure on 2026-10-23 16:00 - please check
  - 原文：Nightly Daily test failure on 2026-10-23 16:00 - please check
  - 说明：The 夜间 Daily test for vllm-ascend reported failures at 16:00 on 2026-10-23. Failed on: a3-4 card-(part 1-5), MiniMax-M3-BF16-A3, glm-5.2-w4a8-dspark Failed 测试用例: - test k3 mla pd tp2 — RuntimeError: Timeout: these nodes did not b
- [PR #19546](https://github.com/vllm-project/vllm-ascend/pull/19546) 已合并
  - 中文：【文档】【杂项】启用 共享专家 DP in GLM-5.3 950DT 预填充 examples
  - 原文：[Doc][Misc] Enable shared expert DP in GLM-5.3 950DT Prefill examples
  - 说明：新增 "启用 共享专家 dp": true to the two 950DT ordinary-PD 预填充 scripts in the GLM-5.2/GLM-5.3 deployment guide, matching the supplied GLM-5.3 配置. This is the only 配置 change. Does this PR introduce any user-fa
- [PR #19545](https://github.com/vllm-project/vllm-ascend/pull/19545) 已合并
  - 中文：【v0.30.0】【文档】【杂项】启用 共享专家 DP in GLM-5.3 950DT 预填充 examples
  - 原文：[v0.30.0][Doc][Misc] Enable shared expert DP in GLM-5.3 950DT Prefill examples
  - 说明：新增 "启用 共享专家 dp": true to the two 950DT ordinary-PD 预填充 scripts in the GLM-5.2/GLM-5.3 deployment guide, matching the supplied GLM-5.3 配置. This is the only 配置 change. Does this PR introduce any user-fa

#### 2026-10-22

- [PR #19489](https://github.com/vllm-project/vllm-ascend/pull/19489) 已合并
  - 中文：【文档】【杂项】移除 性能 profiling setup from GLM examples
  - 原文：[Doc][Misc] Remove performance profiling setup from GLM examples
  - 说明：移除 explicit 性能-profiling setup from the GLM-5.2/GLM-5.3 and GLM-5.3-Flash deployment examples: six --profiler-配置 arguments, their PROFILE DIR variables and directory creation, and the related prose. 更新 the corresponding
- [PR #19490](https://github.com/vllm-project/vllm-ascend/pull/19490) 已合并
  - 中文：【v0.30.0】【文档】【杂项】移除 性能 profiling setup from GLM examples
  - 原文：[v0.30.0][Doc][Misc] Remove performance profiling setup from GLM examples
  - 说明：移除 explicit 性能-profiling setup from the GLM-5.2/GLM-5.3 and GLM-5.3-Flash deployment examples: six --profiler-配置 arguments, their PROFILE DIR variables and directory creation, and the related prose. 更新 the corresponding
- [PR #15481](https://github.com/vllm-project/vllm-ascend/pull/15481) 已关闭
  - 中文：【持续集成】Trigger GLM-5.2 夜间 bisect
  - 原文：[CI] Trigger GLM-5.2 nightly bisect
  - 说明：This is an empty draft PR used to trigger the multi-node GLM-5.2 夜间 bisect workflow.\n\nNo code changes. - vLLM main:
- [PR #19332](https://github.com/vllm-project/vllm-ascend/pull/19332) 已合并
  - 中文：【v0.30.0】【文档】【杂项】对齐 GLM 支持 matrix and complete Chinese guides
  - 原文：[v0.30.0][Doc][Misc] Align GLM support matrix and complete Chinese guides
  - 说明：对齐 the GLM entries in the v0.30.0 supported-model matrix with the deployment guides merged in 19267. 新增 the missing GLM-5.2/5.3 rows for 950DT products, mark GLM-5.2 as supported on A2/A3, and 更新 量化 notes, hardware labels
- [PR #17516](https://github.com/vllm-project/vllm-ascend/pull/17516) 已合并
  - 中文：【文档】【模型】对齐 共享 GLM-5.2/5.3 deployment settings and W4A4C8 examples
  - 原文：[Doc][Model] Align shared GLM-5.2/5.3 deployment settings and W4A4C8 examples
  - 说明：合并 GLM-5.2/GLM-5.3 deployment documentation and 对齐 共享 configurations with the maintained release guide. Script source is releases/v0.30.0 at 1bd04a362691d78286399916c03821a201b66a8e , the branch containing the earlier GLM 补充文档

#### 2026-10-21

- [Issue #19345](https://github.com/vllm-project/vllm-ascend/issues/19345) 进行中
  - 中文：【缺陷】: glm5.2 四机混部部署，部署空闲2h后首个请求触发 Gloo all_reduce 超时
  - 原文：[Bug]:  glm5.2 四机混部部署，部署空闲2h后首个请求触发 Gloo all_reduce 超时

#### 2026-10-19

- [Issue #17377](https://github.com/vllm-project/vllm-ascend/issues/17377) 已关闭
  - 中文：【文档】: glm5.2pd分离部署脚本有误（Feedback for `/zh-cn/v0.26.0rc1/tutorials/models/GLM5.2.html`）
  - 原文：[Doc]: glm5.2pd分离部署脚本有误（Feedback for `/zh-cn/v0.26.0rc1/tutorials/models/GLM5.2.html`）
  - 说明：📚 The doc issue 原文中pd分离启动脚本：准备工作完成后，可在每个节点上使用以下命令启动服务器 预填充节点0 bash run dp template.sh 预填充节点1 bash run dp template.sh 有误；脚本中port $2 没有参数传入 Suggest a potential alternative/修复 No response
- [Issue #19162](https://github.com/vllm-project/vllm-ascend/issues/19162) 进行中
  - 中文：[Doc]: glm5.2长上下文高并发报错
  - 说明：📚 The doc issue 就高并发时报错 Suggest a potential alternative/修复 扩容？

#### 2026-10-18

- [PR #19107](https://github.com/vllm-project/vllm-ascend/pull/19107) 进行中
  - 中文：【修复】【算子】遵循 model RMSNorm epsilon in MLAPO
  - 原文：[BugFix][Ops] Honor model RMSNorm epsilon in MLAPO
  - 说明：MLAPO uses a 修复 1e-6 for both Q and KV RMSNorm, even when the model's layers specify a different epsilon. GLM-5.2 检查点 with rms norm eps=1e-5 therefore use a different normalization formula in the 融合 path than in the native pat

#### 2026-10-17

- [Issue #19080](https://github.com/vllm-project/vllm-ascend/issues/19080) 进行中
  - 中文：【缺陷】enable_sparse_li_c8 silently selects zero GLM-5.2 索引器 layers for W8A8_DYNAMIC/W8A8 元数据 in v0.28.0rc
  - 原文：[Bug] enable_sparse_li_c8 silently selects zero GLM-5.2 Indexer layers for W8A8_DYNAMIC/W8A8 metadata in v0.28.0rc
  - 说明：On the releases/v0.28.0rc code at df7d511e9282745ccbef73509495637b01e160b4 , --additional-配置 '{"启用 稀疏 li c8": true}' can leave the global 切换 启用 while zero GLM-5.2 索引器 layers use the LI C8 path. There is no warning t

#### 2026-10-16

- [PR #18937](https://github.com/vllm-project/vllm-ascend/pull/18937) 已合并
  - 中文：【文档】TurboQuant does not 支持 context parallelism
  - 原文：[Doc] TurboQuant does not support context parallelism
  - 说明：Sync of 18935 to releases/v0.30.0 : adds the context-parallelism restriction to the --kv-缓存-dtype turboquant 4bit nc entries for GLM-5.2 and GLM-5.3 - TurboQuant does not 支持 DCP/PCP. The entries landed without it in 18574. Three pla
- [PR #18935](https://github.com/vllm-project/vllm-ascend/pull/18935) 已合并
  - 中文：【文档】TurboQuant does not 支持 context parallelism
  - 原文：[Doc] TurboQuant does not support context parallelism
  - 说明：Adds the context-parallelism restriction to the --kv-缓存-dtype turboquant 4bit nc entries for GLM-5.2 and GLM-5.3: TurboQuant does not 支持 DCP/PCP. The entries landed without it in 18566. Three places, same wording: GLM5.2 section 5.1

#### 2026-10-15

- [Issue #16654](https://github.com/vllm-project/vllm-ascend/issues/16654) 已关闭
  - 中文：【Bug】： GLM-5.2 A3 （ 2 节点 P/D 分离部署） ，长时间 （ 3-8小时 ）运行后 Prefill实例出现 fftsplus aicore error ， EngineCore异常退出
  - 原文：[Bug]: GLM-5.2 A3（2 节点 P/D 分离部署），长时间（3-8小时）运行后Prefill实例出现 fftsplus aicore error ， EngineCore异常退出
- [Issue #18859](https://github.com/vllm-project/vllm-ascend/issues/18859) 进行中
  - 中文：【缺陷】: MLAPO hardcodes RMSNorm epsilon=1e-6 instead of honoring model rms_norm_eps (GLM-5.2 W8A8)
  - 原文：[Bug]: MLAPO hardcodes RMSNorm epsilon=1e-6 instead of honoring model rms_norm_eps (GLM-5.2 W8A8)

### GLM-4

#### 2026-11-09

- [Issue #17874](https://github.com/vllm-project/vllm-ascend/issues/17874) 已关闭
  - 中文：[错误] ： GLM-4.6V视觉编码器在910C上没有有效的TP并行度—并发图像请求通过编码器串行化
  - 原文：[Bug]: GLM-4.6V vision encoder has no effective TP parallelism on 910C — concurrent image requests serialize through the encoder

#### 2026-10-20

- [PR #19269](https://github.com/vllm-project/vllm-ascend/pull/19269) 进行中
  - 中文：【功能】【模型】支持 Glm4MoeLiteForCausalLM on the xlite backend
  - 原文：[Feature][Model] Support Glm4MoeLiteForCausalLM on the xlite backend
  - 说明：This PR registers Glm4MoeLiteForCausalLM (GLM-4.7-Flash) in DeepseekV3XliteModel. supported architectures , so vLLM routes the model to the xlite backend on Ascend NPUs. The change is a single line: GLM-4.7-Flash is an MLA + MoE variant: It
- [PR #19216](https://github.com/vllm-project/vllm-ascend/pull/19216) 已关闭
  - 中文：【文档】【模型】新增 GLM-4.6V deployment tutorial for v0.23.0
  - 原文：[Doc][Model] Add GLM-4.6V deployment tutorial for v0.23.0
  - 说明：为 releases/v0.23.0 添加 GLM-4.6V 在线部署教程 docs/source/tutorials/models/GLM4.6v.md，并加入模型教程索引。参考 Ascend-SACT GLM-4.6V 指导，覆盖权重下载、A3 容器配置、TP8/EP 服务启动、健康检查、文本请求及本地图像请求。 补充共享权重目录挂载，明确物理卡数与 8 个可见 NPU 设备的区别，将参数规范为 --启用-expert-parallel 和 --max-num-
- [PR #19218](https://github.com/vllm-project/vllm-ascend/pull/19218) 进行中
  - 中文：【文档】新增 GLM-4.6V deployment tutorial
  - 原文：[Doc] Add GLM-4.6V deployment tutorial
  - 说明：Adds a GLM-4.6V deployment tutorial for Ascend A3 to main , following the repository's model deployment tutorial template. It covers model 权重, Docker setup, single-node TP8/EP deployment, curl examples for text and image inference, acc

#### 2026-10-16

- [PR #18881](https://github.com/vllm-project/vllm-ascend/pull/18881) 已合并
  - 中文：【修复】【模型】GLM-5.3-Flash: 对齐 video placeholder timestamps with pixel-path frame sampling
  - 原文：[BugFix][Model] GLM-5.3-Flash: align video placeholder timestamps with pixel-path frame sampling
  - 说明：GLM-5.3-Flash inherits GLM-4.6V video placeholder sampling while its pixel processor uses a different policy. A short video can therefore produce three times as many placeholders as encoder embeddings and terminate the engine with Attempted
- [PR #18866](https://github.com/vllm-project/vllm-ascend/pull/18866) 已合并
  - 中文：【修复】【模型】GLM-5.3-Flash: 对齐 video placeholder timestamps with pixel-path frame sampling
  - 原文：[BugFix][Model] GLM-5.3-Flash: align video placeholder timestamps with pixel-path frame sampling
  - 说明：From main branch GLM-5.3-Flash inherits GLM-4.6V video placeholder sampling while its pixel processor uses a different policy. A short video can therefore produce three times as many placeholders as encoder embeddings and terminate the engi

### GLM-4.7

#### 2026-10-30

- [PR #19520](https://github.com/vllm-project/vllm-ascend/pull/19520) 已合并
  - 中文：【功能】【Xlite】支持 GLM-4.7-Flash
  - 原文：[Feature][Xlite] Support GLM-4.7-Flash
  - 说明：新增 Glm4MoeLiteXliteModel to 支持 the Glm4MoeLiteForCausalLM architecture used by GLM-4.7-Flash through the existing DeepSeek MLA Xlite adapter. The adapter validates supported configurations and 必填 注意力/MoE 权重 before ini

## Kimi

### Kimi K3

#### 2026-11-10

- [PR #20778](https://github.com/vllm-project/vllm-ascend/pull/20778) 已关闭
  - 中文：【文档】新增 Kimi-K3.1 A5 PD deployment guide
  - 原文：[Doc] Add Kimi-K3.1 A5 PD deployment guide
  - 说明：新增 docs/source/tutorials/models/Kimi-K3.1.md and its model-tutorial navigation entry. The guide covers eight-node 950DT (A5) PD deployment with separate DP4/TP8 预填充 and 解码 groups, PP1, a 140000-token context limit, DCP8 on 解码,
- [PR #21496](https://github.com/vllm-project/vllm-ascend/pull/21496) 进行中
  - 中文：修复: decouple GDN RecoverSSM from KDA builder to 支持 DSpark on GD…
  - 原文：fix: decouple GDN RecoverSSM from KDA builder to support DSpark on GD…
  - 说明：…N hybrid The GDN RecoverSSM 元数据 builder previously inherited from AscendKDARecoverSSMMetadataBuilder, which routes through KimiK3KDAMetadataBuilder. The KDA builder's spec-解码 batch-splitting assumes MTP-style sequential drafting;
- [PR #20878](https://github.com/vllm-project/vllm-ascend/pull/20878) 已合并
  - 中文：【功能】【模型】Integrate Kimi K3.1 on main
  - 原文：[Feature][Model] Integrate Kimi K3.1 on main
  - 说明：Targeted A3/A5 Triton operator validation is recorded below. Full-model and multi-card behavior remain outside this follow-up's validation. Ports the Kimi K3.1 changes from the v0.30.0 development line to the current main baseline. The chan
- [PR #21422](https://github.com/vllm-project/vllm-ascend/pull/21422) 已合并
  - 中文：【文档】【杂项】Set Kimi-K3 pooled PD templates to 1M context (v0.30.0)
  - 原文：[Doc][Misc] Set Kimi-K3 pooled PD templates to 1M context (v0.30.0)
  - 说明：对齐 Section 5.4 pooled PD 服务 with the 1M 配置 in Section 5.3: set --max-model-len 1048576 in all four 950DT/A3 预填充 and 解码 templates, and 启用 解码 DCP with size 8 on 950DT products and 16 on A3. 更新 the Englis
- [PR #21421](https://github.com/vllm-project/vllm-ascend/pull/21421) 已合并
  - 中文：【文档】【杂项】Set Kimi-K3 pooled PD templates to 1M context
  - 原文：[Doc][Misc] Set Kimi-K3 pooled PD templates to 1M context
  - 说明：对齐 Section 5.4 pooled PD 服务 with the 1M 配置 in Section 5.3: set --max-model-len 1048576 in all four 950DT/A3 预填充 and 解码 templates, and 启用 解码 DCP with size 8 on 950DT products and 16 on A3. 更新 the Englis
- [PR #21447](https://github.com/vllm-project/vllm-ascend/pull/21447) 已合并
  - 中文：【测试】【杂项】更新 test 配置 paths to SIT and configure Kimi-K3 torch extensions directory
  - 原文：[Test][Misc] Update test configuration paths to SIT and configure Kimi-K3 torch extensions directory
  - 说明：This PR 更新 the paths of model test configurations from tests/e2e/cases/models/configs/ to tests/SIT/cases/models/configs/ across documentation, translations, and test scripts. Additionally, it adds the TORCH EXTENSIONS DIR environment
- [PR #21379](https://github.com/vllm-project/vllm-ascend/pull/21379) 已关闭
  - 中文：【测试】Change the torch 缓存 path to 避免 the JIT lock conflict
  - 原文：[Test] Change the torch cache path to avoid the JIT lock conflict
  - 说明：This PR configures the TORCH EXTENSIONS DIR environment variable to use a node- and rank-specific path ( /tmp/kimi k3 torch extensions/node-${NODE INDEX}/dp-${DP RANK} ) for the Kimi-K3 model 配置. This avoids JIT compilation lock
- [Issue #21441](https://github.com/vllm-project/vllm-ascend/issues/21441) 进行中
  - 中文：【杂项】: Track Kimi K3.1 follow-up work after #20878
  - 原文：[Misc]: Track Kimi K3.1 follow-up work after #20878
  - 说明：Context PR 20878 integrates Kimi K3.1 on Ascend. This issue tracks four follow-up items that need focused fixes and validation after the integration. The work can be 拆分 into separate PRs; please link them here as each item progresses. 1.
- [Issue #21424](https://github.com/vllm-project/vllm-ascend/issues/21424) 进行中
  - 中文：【缺陷】: Kimi-K3 with DSpark on Ascend: seeded output changes with concurrency on the same DP rank
  - 原文：[Bug]: Kimi-K3 with DSpark on Ascend: seeded output changes with concurrency on the same DP rank
- [PR #21385](https://github.com/vllm-project/vllm-ascend/pull/21385) 进行中
  - 中文：【测试】新增 Kimi-K3 W4A8 EP256 精度 test on A5 for v0.30.0
  - 原文：[Test] Add Kimi-K3 W4A8 EP256 accuracy test on A5 for v0.30.0
  - 说明：新增 a native YAML-driven 精度 case for Kimi-K3 W4A8 MXFP/QuaRot pruned to 256 routed experts on one A5 node with eight NPUs. - Register Kimi-K3-W4A8-E256-A5-GSM8K-First100 in the A5 夜间 matrix. - Evaluate the first 100 GSM8K questio

#### 2026-11-09

- [PR #21117](https://github.com/vllm-project/vllm-ascend/pull/21117) 已关闭
  - 中文：【测试】新增 native YAML 精度 case for pruned Kimi-K3 on A5
  - 原文：[Test] Add native YAML accuracy case for pruned Kimi-K3 on A5
  - 说明：Superseded by 21284, submitted from Task2 2 tcase main Kimi-K3 Experts256 A5 TCase with current main integrated. Historical discussion and 夜间 records are retained here. 新增 a native YAML-driven 精度 case for Kimi-K3 W4A8 MXFP/QuaRo
- [PR #21284](https://github.com/vllm-project/vllm-ascend/pull/21284) 进行中
  - 中文：【测试】新增 native YAML 精度 case for pruned Kimi-K3 on A5
  - 原文：[Test] Add native YAML accuracy case for pruned Kimi-K3 on A5
  - 说明：新增 a native YAML-driven 精度 case for Kimi-K3 W4A8 MXFP/QuaRot pruned to 256 routed experts on one A5 node with eight NPUs. - Register Kimi-K3-W4A8-E256-A5-GSM8K-First100 in the A5 夜间 matrix. - Evaluate the first 100 GSM8K questio

#### 2026-11-06

- [PR #21197](https://github.com/vllm-project/vllm-ascend/pull/21197) 已合并
  - 中文：【测试】【功能】夜间 test 配置 for Kimi-K3-W4A8-A3-1M-PD model
  - 原文：[Test][Feature] Add nightly test configuration for Kimi-K3-W4A8-A3-1M-PD model
  - 说明：This pull request adds a new end-to-end test 配置 file for the Kimi-K3-W4A8-A3-1M-PD model, setting up an 8-node 分离式预填充 路由 environment. No. This is a test configura

#### 2026-11-05

- [PR #20813](https://github.com/vllm-project/vllm-ascend/pull/20813) 已关闭
  - 中文：【测试】新增 Kimi-K3 EP256 GSM8K 精度 回退 coverage
  - 原文：[Test] Add Kimi-K3 EP256 GSM8K accuracy regression coverage
  - 说明：新增 a reproducible 精度 回退 case for Kimi-K3 W4A8 pruned to 256 routed experts on one A5 node with eight NPUs. Each execution evaluates the original first 500 GSM8K test questions with the recorded four-shot prompt, concurrency 6
- [PR #21051](https://github.com/vllm-project/vllm-ascend/pull/21051) 已关闭
  - 中文：【修复】【模型】Port Kimi K3 MoE and compile fixes to v0.30.0
  - 原文：[BugFix][Model] Port Kimi K3 MoE and compile fixes to v0.30.0
- [Issue #20197](https://github.com/vllm-project/vllm-ascend/issues/20197) 已关闭
  - 中文：【缺陷】: 0.30 kimi-k3 pd分离 解码节点关闭dcp 上下文256k配置，测评128k/1k 并发增大后，TTFT会劣化十几倍。
  - 原文：[Bug]: 0.30 kimi-k3 pd分离 decode节点关闭dcp 上下文256k配置，测评128k/1k 并发增大后，TTFT会劣化十几倍。
- [Issue #19498](https://github.com/vllm-project/vllm-ascend/issues/19498) 已关闭
  - 中文：[Bug]: 0.30.0 Kimi-K3 dspark 投机解码采信率随上下文长度坍塌
- [PR #17039](https://github.com/vllm-project/vllm-ascend/pull/17039) 已关闭
  - 中文：【功能】【MoE】支持 Kimi K3 A5 MegaMoE on v0.27
  - 原文：[Feature][MoE] Support Kimi K3 A5 MegaMoE on v0.27
  - 说明：Port the DSNext A5 MegaMoE backend to the v0.27 MoE 运行时 and 启用 the Kimi K3 routed-expert path for W4A8 MXFP 检查点. - Select A5 MegaMoE from the instantiated routed-expert 量化, activation, group size, EPLB state, and t
- [PR #15944](https://github.com/vllm-project/vllm-ascend/pull/15944) 已关闭
  - 中文：feat(moe): 新增 A5 MegaMoE backend for Kimi K3
  - 原文：feat(moe): add A5 MegaMoE backend for Kimi K3
  - 说明：Route eligible A5 W4A8 MXFP routed experts through a dedicated MegaMoE backend with SiTU parameters, symmetric-buffer reuse, and DP shape coordination. 新增 focused unit coverage and an A5 validation runbook. Does this PR introduce any user-
- [PR #21001](https://github.com/vllm-project/vllm-ascend/pull/21001) 进行中
  - 中文：【测试】【杂项】Use minimum GPQA 精度 for Kimi-K3-MRV2-A3
  - 原文：[Test][Misc] Use minimum GPQA accuracy for Kimi-K3-MRV2-A3
  - 说明：This PR sets baseline: 90 and verify mode: ge for the Kimi-K3-MRV2-A3 GPQA 精度 test, replacing the original baseline: 93 / threshold: 3 range check. It preserves the original 90% lower bound and accepts higher scores without an upper b
- [PR #20988](https://github.com/vllm-project/vllm-ascend/pull/20988) 已合并
  - 中文：【文档】【模型】新增 experimental Kimi K3.1 Pro deployment guide
  - 原文：[Doc][Model] Add experimental Kimi K3.1 Pro deployment guide
  - 说明：新增 an experimental Kimi K3.1 Pro deployment tutorial for Atlas 800I A3 and 950DT Products. - 补充文档 model 权重, container images, basic multi-node PD separation, 1M context, and pooled PD deployment. - Include direct Bash 预填充 star

#### 2026-11-04

- [PR #20887](https://github.com/vllm-project/vllm-ascend/pull/20887) 进行中
  - 中文：【功能】【Kimi】Review: Triton operator 更新
  - 原文：[Feature][Kimi] Review: Triton operator updates
  - 说明：Triton operator 更新 for Kimi K3.1: KDA state-copy compilation and RMSNorm gate execution are reviewed together here, with their local KDA integration and 回退 tests. Local convolution indexing, gate launch ordering, quantized over

#### 2026-11-02

- [Issue #19226](https://github.com/vllm-project/vllm-ascend/issues/19226) 已关闭
  - 中文：【缺陷】【Kimi-K3】解码 nodes 挂起 & die: engines stop stepping, then ERR00100 / rtEventSynchronize task timeout (stream wait timeout 340s)
  - 原文：[Bug][Kimi-K3] Decode nodes hang & die: engines stop stepping, then ERR00100 / rtEventSynchronize task timeout (stream wait timeout 340s)
  - 说明：环境 项 值 --- --- 硬件 Ascend A3，PD 分离：4×预填充(TP16 PP4) + 4×解码(TP16 DCP16 DP4) + 1×conductor 模型 Kimi-K3 w4a8（KDA linear 注意力 + MTP/DSpark 投机， num 投机 tokens=7 ） 镜像 release main 1008 202610161528 修复 缓存 、 ... 202610191442 p
- [PR #19870](https://github.com/vllm-project/vllm-ascend/pull/19870) 已合并
  - 中文：【修复】Preserve K3 token shards after 融合 O-projection
  - 原文：[BugFix] Preserve K3 token shards after fused O-projection
  - 说明：Kimi K3 注意力 residuals apply 序列-parallel ReduceScatter twice when the 融合 O-projection already returns a token shard. Skip the decoder ReduceScatter in that case, retaining it for the unfused path. This also applies without DCP

#### 2026-10-31

- [PR #20418](https://github.com/vllm-project/vllm-ascend/pull/20418) 已合并
  - 中文：【v0.30.0】【文档】Translated Doc files 2026-10-31
  - 原文：[v0.30.0][Doc] Translated Doc files 2026-10-31
  - 说明：Auto-Translation Summary Translated 1 file(s): - <code /home/runner/ work/vllm-ascend/vllm-ascend/docs/source/locale/zh CN/LC MESSAGES/tutorials/models/Kimi-K3.po</code --- Workflow run - vLLM main:
- [PR #20380](https://github.com/vllm-project/vllm-ascend/pull/20380) 已合并
  - 中文：【文档】【杂项】Correct Kimi-K3 mixed and PD deployment 配置 (v0.30.0)
  - 原文：[Doc][Misc] Correct Kimi-K3 mixed and PD deployment configuration (v0.30.0)
  - 说明：Correct the Kimi-K3 deployment examples: - State in Supported Features that Kimi K3 currently supports only Model Runner V2 and requires VLLM USE V2 MODEL RUNNER=1 on every node. - Explicitly 启用 Model Runner V2 with export VLLM USE V2 M
- [PR #20379](https://github.com/vllm-project/vllm-ascend/pull/20379) 已合并
  - 中文：【文档】【杂项】Correct Kimi-K3 mixed and PD deployment 配置
  - 原文：[Doc][Misc] Correct Kimi-K3 mixed and PD deployment configuration
  - 说明：Correct the Kimi-K3 deployment examples: - State in Supported Features that Kimi K3 currently supports only Model Runner V2 and requires VLLM USE V2 MODEL RUNNER=1 on every node. - Explicitly 启用 Model Runner V2 with export VLLM USE V2 M

#### 2026-10-30

- [Issue #20334](https://github.com/vllm-project/vllm-ascend/issues/20334) 进行中
  - 中文：【缺陷】【Kimi-K3】DSpark prepare_dflash_inputs recompiles Triton 内核 on every BLOCK_SIZE bucket change (multi-second host stall)
  - 原文：[Bug][Kimi-K3] DSpark prepare_dflash_inputs recompiles Triton kernel on every BLOCK_SIZE bucket change (multi-second host stall)
  - 说明：环境 项 值 --- --- vllm-ascend main @ 9ccd283 vLLM main（DFlash/DSpark 线） 硬件 单算子复现：Ascend A3 单卡；线上观察：Ascend 950（A5），1P1D 8 机×8 卡（P: TP8×PP4 / D: DP4×TP8 DCP8） 模型 Kimi-K3 w4a8 + DSpark（ num 投机 tokens=3 ） 软件栈 CANN 9.1.0 / triton 3.2.0 / t

#### 2026-10-29

- [PR #20195](https://github.com/vllm-project/vllm-ascend/pull/20195) 已合并
  - 中文：【测试】Port Kimi K3 MRV2 coverage and DeepSeek 每周 scheduling to main
  - 原文：[Test] Port Kimi K3 MRV2 coverage and DeepSeek weekly scheduling to main
  - 说明：Port 19774 from releases/v0.30.0 to main by cherry-picking merged commit c18dc97856708359e3e6546a22a319c5e03c540d with -x -s . The cherry-pick applies without conflicts and preserves source attribution. - 新增 Kimi K3 MRV2 four-card E2E cove

#### 2026-10-28

- [PR #19617](https://github.com/vllm-project/vllm-ascend/pull/19617) 已关闭
  - 中文：perf: reuse prepared convolution indices in Kimi KDA
  - 说明：【:, 0】Kimi K3 currently normalizes convolution 缓存 indices in each KDA layer. For two-dimensional indices, 缓存 indices .contiguous() can repeatedly materialize the same first column across layers sharing 元数据. 启用 use contiguous c
- [PR #20075](https://github.com/vllm-project/vllm-ascend/pull/20075) 草稿
  - 中文：【功能】【MRV2】Preserve SP token shards across pipeline stages
  - 原文：[Feature][MRV2] Preserve SP token shards across pipeline stages
  - 说明：Preserve 序列-parallel main activations across Model Runner V2 pipeline boundaries for DeepSeek-V4, Kimi-K3 AttnRes, and MiniMax-M3. Each TP rank sends its token shard to the matching rank in the next stage instead of transmitting repli
- [PR #20062](https://github.com/vllm-project/vllm-ascend/pull/20062) 进行中
  - 中文：【文档】【修复】Omit --data-parallel-start-rank on the API node
  - 原文：[Doc][BugFix] Omit --data-parallel-start-rank on the API node
  - 说明：This PR removes --data-parallel-start-rank 0 from the API node in the multi-node deployment guides for GLM-5.2 , Kimi-K3 , MiniMax-M3 and MiniMax-M3.1-Flash , and fixes the parameter tables that incorrectly described node 0 as using rank 0

#### 2026-10-27

- [PR #19991](https://github.com/vllm-project/vllm-ascend/pull/19991) 进行中
  - 中文：【文档】【Recipe】对齐 Kimi-K3 Ascend variants for mixed 服务 only
  - 原文：[Doc][Recipe] Align Kimi-K3 Ascend variants for mixed serving only
  - 说明：新增 Kimi-K3 Ascend 950DT (A5) MXFP4 支持 and configure both Ascend variants for ModelScope, with mixed 服务 on Ascend 910C (A3) and 950DT (A5). Dependency: vllm-project/recipes 1225 must land first. It introduces the variant-level hub
- [PR #19774](https://github.com/vllm-project/vllm-ascend/pull/19774) 已合并
  - 中文：【测试】更新 v0.30.0 Kimi K3 MRV2 coverage and DeepSeek 每周 scheduling
  - 原文：[Test] Update v0.30.0 Kimi K3 MRV2 coverage and DeepSeek weekly scheduling
  - 说明：新增 Kimi K3 Model Runner V2 coverage to releases/v0.30.0 , based on 18042 and cherry-picked from 18939, and move the DeepSeek V4 Pro 1M P/D case to 每周 scheduling. - Reuse the Kimi K3 model fixtures and scenario helpers for four-card MRV

#### 2026-10-26

- [Issue #19562](https://github.com/vllm-project/vllm-ascend/issues/19562) 已关闭
  - 中文：【缺陷】: 0.30 kimi-k3 V pool 命中请求在 WAITING_FOR_REMOTE_KVS 状态永久死等（加载从未发生、finished_recving 永不上报）
  - 原文：[Bug]: 0.30 kimi-k3 V pool 命中请求在 WAITING_FOR_REMOTE_KVS 状态永久死等（加载从未发生、finished_recving 永不上报）
- [Issue #19636](https://github.com/vllm-project/vllm-ascend/issues/19636) 已关闭
  - 中文：【缺陷】: 0.3kimi-k3 双图子问题：patch_shm_broadcast enqueue 覆写的 overflow 分支丢失 SpinCondition PUB ping——超大 payload（MM embeddings）任务永不送达，EngineCore↔workers 互等楔死
  - 原文：[Bug]: 0.3kimi-k3 双图子问题：patch_shm_broadcast enqueue 覆写的 overflow 分支丢失 SpinCondition PUB ping——超大 payload（MM embeddings）任务永不送达，EngineCore↔workers 互等楔死
- [Issue #19548](https://github.com/vllm-project/vllm-ascend/issues/19548) 已关闭
  - 中文：【缺陷】: 0.30 kimi-k3 pd分离：TBE 并行编译task_distribute 链路死锁——首个多模态大图请求必现
  - 原文：[Bug]: 0.30 kimi-k3 pd分离：TBE 并行编译task_distribute 链路死锁——首个多模态大图请求必现
- [Issue #19173](https://github.com/vllm-project/vllm-ascend/issues/19173) 已关闭
  - 中文：[Bug]: 0.30版本kimi-k3 PD分离 俩张重复高精度2k*2k图片输入会导致prefill 卡死，请求超时prefill瘫痪。

#### 2026-10-24

- [PR #19703](https://github.com/vllm-project/vllm-ascend/pull/19703) 进行中
  - 中文：【文档】【Recipe】对齐 Kimi-K3 Ascend variants and PD deployment
  - 原文：[Doc][Recipe] Align Kimi-K3 Ascend variants and PD deployment
  - 说明：对齐 Kimi-K3 Ascend 检查点 selection and 支持 A5 预填充/解码 separation alongside the mixed-服务 profiles. - A3 (Ascend 910C) defaults to W4A8 (Ascend), using ModelScope Eco-Tech/Kimi-K3-w4a8 . - A5 (Ascend 950DT) defaults to

#### 2026-10-23

- [Issue #19663](https://github.com/vllm-project/vllm-ascend/issues/19663) 进行中
  - 中文：【Tracking】Kimi-K3 DCP16 解码 优化 and compatibility fixes
  - 原文：[Tracking] Kimi-K3 DCP16 decode optimization and compatibility fixes
  - 说明：While validating Kimi-K3 on Ascend A3 with P/D disaggregation, TP16/DCP16 and DSpark 启用, we put together a 解码 优化 and a few compatibility fixes. The changes are 拆分 across separate PRs, so this issue brings them together
- [Issue #18710](https://github.com/vllm-project/vllm-ascend/issues/18710) 已关闭
  - 中文：[Bug]: 0.30.0rc1 kimi-k3精度异常，回答中英文混杂乱码
- [Issue #18712](https://github.com/vllm-project/vllm-ascend/issues/18712) 已关闭
  - 中文：【Usage】: kimi-k3在哪个版本支持PD分离+pp并行+mrv2
  - 原文：[Usage]:  kimi-k3在哪个版本支持PD分离+pp并行+mrv2
- [Issue #19585](https://github.com/vllm-project/vllm-ascend/issues/19585) 进行中
  - 中文：【缺陷】: 0.30 kimi-k3 vLLM v1 调度器 encoder 缓存 按单 item 托底 + can_allocate 失败分支的 lookahead shift —— 多图大 MM 请求永久空步死锁（0 token 直至超时）
  - 原文：[Bug]: 0.30 kimi-k3 vLLM v1 调度器 encoder cache 按单 item 托底 + can_allocate 失败分支的 lookahead shift —— 多图大 MM 请求永久空步死锁（0 token 直至超时）
- [PR #19540](https://github.com/vllm-project/vllm-ascend/pull/19540) 进行中
  - 中文：【性能】【KDA】【v0.30.0】Skip single-branch output assembly
  - 原文：[Performance][KDA][v0.30.0] Skip single-branch output assembly
  - 说明：Kimi K3 currently clears its caller-owned 注意力 output, 拷贝 a complete single-branch KDA result into it, then runs gated RMSNorm in place. The existing norm already accepts separate input and output tensors, so those two preparation

#### 2026-10-22

- [Issue #19511](https://github.com/vllm-project/vllm-ascend/issues/19511) 进行中
  - 中文：【缺陷】: kimi-k3-w4a8模型基于vllm-ascend: 0.30.0rc2镜像启动报错：RuntimeError: aclnnAttnResFwd or aclnnAttnResFwdGetWorkspaceSize not in libopapi.so, or libopapi.sonot found.
  - 原文：[Bug]: kimi-k3-w4a8模型基于vllm-ascend: 0.30.0rc2镜像启动报错：RuntimeError: aclnnAttnResFwd or aclnnAttnResFwdGetWorkspaceSize not in libopapi.so, or libopapi.sonot found.
- [Issue #19501](https://github.com/vllm-project/vllm-ascend/issues/19501) 进行中
  - 中文：【缺陷】: kimi-k3-w4a8模型部署在vllm-ascend: 0.30.0rc2镜像启动报错：ValueError: There is no module or parameter named 'mm_projector.rot_proj' in AscendKimiK3ForConditionalGeneration.
  - 原文：[Bug]: kimi-k3-w4a8模型部署在vllm-ascend: 0.30.0rc2镜像启动报错：ValueError: There is no module or parameter named 'mm_projector.rot_proj' in AscendKimiK3ForConditionalGeneration.
- [Issue #19486](https://github.com/vllm-project/vllm-ascend/issues/19486) 进行中
  - 中文：【缺陷】: kimi-k3-w4a8模型部署在vllm-ascend:kimi-k3（0.23.0）版本可以完成evalscope性能测试，部署在vllm-ascend:0.26.0rc1版本测试时后台崩溃
  - 原文：[Bug]: kimi-k3-w4a8模型部署在vllm-ascend:kimi-k3（0.23.0）版本可以完成evalscope性能测试，部署在vllm-ascend:0.26.0rc1版本测试时后台崩溃
- [PR #18992](https://github.com/vllm-project/vllm-ascend/pull/18992) 已合并
  - 中文：【文档】【模型】更新 Kimi-K3 basic, 1M and pooled PD deployment
  - 原文：[Doc][Model] Update Kimi-K3 basic, 1M and pooled PD deployment
  - 说明：更新 the Kimi-K3 guide for eight-node PD and pooled deployment on 950DT products and Atlas 800I A3, and separate the basic and 1M-context instructions. - Section 5.2 provides complete basic PD templates with --max-model-len 262144 (256K)
- [PR #19416](https://github.com/vllm-project/vllm-ascend/pull/19416) 已合并
  - 中文：【文档】【模型】Polish Kimi-K3 hardware requirements and guide link (v0.30.0)
  - 原文：[Doc][Model] Polish Kimi-K3 hardware requirements and guide link (v0.30.0)
  - 说明：Address documentation review feedback following merged PR 18993: - 新增 bullets before Mixed deployment and PD deployment in the 权重 table. - Standardize four hardware capacity references from 64G to 64GB . - Replace the old Chinese KV Ca
- [Issue #19453](https://github.com/vllm-project/vllm-ascend/issues/19453) 进行中
  - 中文：【缺陷】: Kimi-K3-w4a8部署在vllm-ascend:0.26.0rc1版本比vllm-ascend:kimi-k3（0.23.0）版本权重占用多12G，导致KV 缓存变少max-model-len变小
  - 原文：[Bug]: Kimi-K3-w4a8部署在vllm-ascend:0.26.0rc1版本比vllm-ascend:kimi-k3（0.23.0）版本权重占用多12G，导致KV Cache变少max-model-len变小
- [PR #18993](https://github.com/vllm-project/vllm-ascend/pull/18993) 已合并
  - 中文：【文档】【模型】更新 Kimi-K3 basic, 1M and pooled PD deployment (v0.30.0)
  - 原文：[Doc][Model] Update Kimi-K3 basic, 1M and pooled PD deployment (v0.30.0)
  - 说明：更新 the Kimi-K3 guide for eight-node PD and pooled deployment on 950DT products and Atlas 800I A3, and separate the basic and 1M-context instructions. - Section 5.2 provides complete basic PD templates with --max-model-len 262144 (256K)

#### 2026-10-21

- [PR #17320](https://github.com/vllm-project/vllm-ascend/pull/17320) 已关闭
  - 中文：【功能】Kimik3 预填充
  - 原文：[Feature] Kimik3 prefill
  - 说明：- vLLM main:

#### 2026-10-20

- [PR #16810](https://github.com/vllm-project/vllm-ascend/pull/16810) 已关闭
  - 中文：【性能】【算子】新增 kda_input_proj for Kimi-K3
  - 原文：[Performance][Ops] Add kda_input_proj for Kimi-K3
  - 说明：- vLLM main:
- [Issue #17195](https://github.com/vllm-project/vllm-ascend/issues/17195) 已关闭
  - 中文：【缺陷】: Encoder lookahead can cause a zero-progress scheduling loop with multimodal K3 DSpark
  - 原文：[Bug]: Encoder lookahead can cause a zero-progress scheduling loop with multimodal K3 DSpark
  - 说明：Summary We observed requests making no further progress during multimodal 预填充 with Kimi K3 and DSpark on vLLM Ascend. 调度器 instrumentation shows a circular dependency between encoder-缓存 reclamation and the shifted encoder schedu

#### 2026-10-19

- [PR #19115](https://github.com/vllm-project/vllm-ascend/pull/19115) 已合并
  - 中文：【v0.30.0】【性能】【SpecDecode】Skip FlashMLA CPU length sync with DCP
  - 原文：[v0.30.0][Performance][SpecDecode] Skip FlashMLA CPU length sync with DCP
  - 说明：With Kimi K3 + DSpark + DCP8, the model runner still 拷贝 rejection-corrected token counts to the CPU and waits for the copy before preparing the next step, even when every target and draft MLA layer selects FlashMLA. The DCP=1 eligibilit
- [Issue #17706](https://github.com/vllm-project/vllm-ascend/issues/17706) 已关闭
  - 中文：【缺陷】: main镜像 kimi-k3 开启dcp、mrv2、gmmsituquant 推理失败。关闭dcp正常推理
  - 原文：[Bug]: main镜像 kimi-k3 开启dcp、mrv2、gmmsituquant 推理失败。关闭dcp正常推理
- [Issue #18520](https://github.com/vllm-project/vllm-ascend/issues/18520) 已关闭
  - 中文：[Bug]: 0.30.0rc1 版本kimi-k3未更新配置，pd分离配置缺失
- [PR #19126](https://github.com/vllm-project/vllm-ascend/pull/19126) 进行中
  - 中文：【修复】遵循 normalized YaRN 注意力 factor in MLA
  - 原文：[BugFix] Honor normalized YaRN attention factor in MLA
  - 说明：Port the normalized YaRN selection from to the Ascend DeepSeek MLA constructor and its GLM5Next / Kimi K3 counterparts. These constructors still read apply yarn scaling , which may be absent after 配置 normalization. With 注意力

#### 2026-10-17

- [PR #19075](https://github.com/vllm-project/vllm-ascend/pull/19075) 已合并
  - 中文：【算子】【修复】Revert constexpr launcher arguments from #17913
  - 原文：[Ops][BugFix] Revert constexpr launcher arguments from #17913
  - 说明：Revert 17913 ( f7cac7a95038d5127c07bc3da9b6fbcd336f7f76 ). That change 新增 TO 缓存 , HAS FLAGS and BLOCK SIZE to direct compiled KDA launches for the Triton launcher signature used at the time. The Triton 运行时 in the current image acc
- [PR #19061](https://github.com/vllm-project/vllm-ascend/pull/19061) 已合并
  - 中文：【修复】【DSpark】Preserve Kimi K3 draft 检查点 LM head
  - 原文：[BugFix][DSpark] Preserve Kimi K3 draft checkpoint LM head
  - 说明：The Kimi K3 MLA DSpark adapter inherits a 权重 mapper that drops lm head entries. When a draft 检查点 supplies its own output head, 加载 therefore loses that head and leaves target-head sharing or QuaRot alignment to supply a repla
- [PR #18903](https://github.com/vllm-project/vllm-ascend/pull/18903) 已关闭
  - 中文：【算子】【功能】支持 forcing BF16 精度 for Ascend MoE router
  - 原文：[Ops][Feature] Support forcing BF16 precision for Ascend MoE router
  - 说明：v0.30.0 counterpart of 19002, rebased onto releases/v0.30.0 commit 169823b8c . Kimi K3 computes its router logits outside the MoE runner: AscendKimiMoE.forward() calls self.gate(hidden states) and passes the logits into self.experts(...) .
- [PR #19002](https://github.com/vllm-project/vllm-ascend/pull/19002) 已关闭
  - 中文：【算子】【功能】Implement KimiK3RouterLinear for Ascend Kimi K3 MoE
  - 原文：[Ops][Feature] Implement KimiK3RouterLinear for Ascend Kimi K3 MoE
  - 说明：Main-branch counterpart of 18903, based on main commit 932818a5b . Only the final Kimi-specific implementation and its tests are ported; none of the release branch's opt-in environment variable or internal Router changes are included. Kimi
- [PR #19066](https://github.com/vllm-project/vllm-ascend/pull/19066) 已合并
  - 中文：【0.30.0】【修复】【DSpark】Preserve Kimi K3 draft 检查点 LM head
  - 原文：[0.30.0][BugFix][DSpark] Preserve Kimi K3 draft checkpoint LM head
  - 说明：Backport of 19061 to releases/v0.30.0 , including its mapper-test CI 修复. The Kimi K3 MLA DSpark adapter inherits a mapper that drops 检查点 lm head 权重. Preserve a draft 检查点's own output head before mapping so target-head sh
- [PR #19057](https://github.com/vllm-project/vllm-ascend/pull/19057) 进行中
  - 中文：【修复】【Kimi K3】恢复 v0.27.1 共享-expert multistream schedule
  - 原文：[BugFix][Kimi K3] Restore v0.27.1 shared-expert multistream schedule
  - 说明：Summary - 恢复 the v0.27.1-style deferred 共享-expert submission order for latent W4A8 序列 parallelism - keep router input token-local while 共享-expert input may already be 序列-parallel gathered - pass the Kimi K3 gate int

#### 2026-10-16

- [PR #19045](https://github.com/vllm-project/vllm-ascend/pull/19045) 草稿
  - 中文：【功能】【Kimi K3】Schedule 共享 experts before routed on v0.30.0
  - 原文：[Feature][Kimi K3] Schedule shared experts before routed on v0.30.0
  - 说明：Summary This is an alternative 更新 to 19023. It is built from that PR's current consolidated B101 head, rebased onto the current releases/v0.30.0 tip ( 716da29099b57d16f4a9b6cce65418192c660cf7 ), and changes Kimi K3 共享-expert multi-s
- [PR #18756](https://github.com/vllm-project/vllm-ascend/pull/18756) 已合并
  - 中文：【修复】【Kimi】Use grouped matmul for eager MXFP8 projections (v0.30 backport)
  - 原文：[BugFix][Kimi] Use grouped matmul for eager MXFP8 projections (v0.30 backport)
  - 说明：Backport of 18606 to releases/v0.30.0 ; the projection selection and 量化 implementation match main. The branch was rebased onto the current release base to 移除 the old CI replay conflicts. Route Kimi K3's 融合 QKV, routed-down
- [PR #19037](https://github.com/vllm-project/vllm-ascend/pull/19037) 进行中
  - 中文：【性能】【SpecDecode】Skip FlashMLA CPU length synchronization with DCP
  - 原文：[Performance][SpecDecode] Skip FlashMLA CPU length synchronization with DCP
  - 说明：避免 投机-解码 CPU length synchronization when the loaded Kimi K3 / DSpark 注意力 backends consume authoritative device lengths, including DCP configurations such as DCP8. 1. For a non-DCP DSpark draft whose MLA implementatio
- [PR #18976](https://github.com/vllm-project/vllm-ascend/pull/18976) 已合并
  - 中文：【v0.30.0】【功能】【MoE】Backport Kimi K3 MegaMoE routed dimensions (#17334)
  - 原文：[v0.30.0][Feature][MoE] Backport Kimi K3 MegaMoE routed dimensions (#17334)
  - 说明：Backport the final changes from 17334 through source head cff56165ea661540142ff93a817a62f6e17c8944 to releases/v0.30.0 . For Kimi K3 / Latent-MoE, validate the effective routed-expert input width ( routed expert hidden size ) rather than th
- [PR #17334](https://github.com/vllm-project/vllm-ascend/pull/17334) 已合并
  - 中文：【修复】【MoE】Check routed-expert dimensions for CANN MegaMoE
  - 原文：[BugFix][MoE] Check routed-expert dimensions for CANN MegaMoE
  - 说明：What this PR does Validate CANN MegaMoE against the routed-expert input width for latent MoE models such as Kimi K3. Tokens are projected before reaching the routed experts, so routed expert hidden size is the relevant operator dimension. M
- [PR #19023](https://github.com/vllm-project/vllm-ascend/pull/19023) 草稿
  - 中文：【功能】【Kimi K3】Consolidate B101 Ascend fixes on v0.30.0
  - 原文：[Feature][Kimi K3] Consolidate B101 Ascend fixes on v0.30.0
  - 说明：Kimi K3 on the B101 v0.30.0 release stack needs its MLA/KDA graph and W4A8 共享-expert fixes in one reviewable branch. This PR ports the container's changes onto the current releases/v0.30.0 branch and resolves the intervening release cha
- [PR #18840](https://github.com/vllm-project/vllm-ascend/pull/18840) 已合并
  - 中文：【修复】【KDA】【v0.30.0】Match fallback compiled launches to Triton signatures
  - 原文：[BugFix][KDA][v0.30.0] Match fallback compiled launches to Triton signatures
  - 说明：Backport of 18672 to releases/v0.30.0 . Kimi K3 预填充 can fail in StridedKDAFallbackPlan. copy with: The fallback prepares batch memcpy 内核 with BLOCK SIZE=8192 , then directly invokes the retained compiled 内核 with only three runti
- [PR #18952](https://github.com/vllm-project/vllm-ascend/pull/18952) 草稿
  - 中文：【性能】【Kimi】Apply BF16 Router option to external gate
  - 原文：[Performance][Kimi] Apply BF16 Router option to external gate
  - 说明：Kimi K3 computes Router logits through an external GateLinear , so the internal-router BF16 option in 18903 does not change Kimi's FP32 Router matmul. Extend that option to Kimi's external gate: use BF16 operands and the loaded BF16 gate we
- [PR #18939](https://github.com/vllm-project/vllm-ascend/pull/18939) 进行中
  - 中文：【测试】【Kimi】Backport MRV2 E2E coverage to v0.30.0
  - 原文：[Test][Kimi] Backport MRV2 E2E coverage to v0.30.0
  - 说明：Backport the Kimi K3 Model Runner V2 coverage from 18042 to releases/v0.30.0 . - 新增 the standard four-card MRV2 functional E2E coverage, reusing the existing Kimi K3 model fixtures and scenario helpers. - Register the four-node internal-DP
- [PR #18672](https://github.com/vllm-project/vllm-ascend/pull/18672) 已合并
  - 中文：[BugFix] [KDA]将回退编译的启动与Triton签名匹配
  - 原文：[BugFix][KDA] Match fallback compiled launches to Triton signatures
  - 说明：Kimi K3 预填充 can fail in StridedKDAFallbackPlan. copy with: The fallback prepares batch memcpy 内核 with BLOCK SIZE=8192 , then directly invokes the retained compiled 内核 with only three 运行时 arguments. Triton 3.6 retains the con

#### 2026-10-15

- [PR #18834](https://github.com/vllm-project/vllm-ascend/pull/18834) 已合并
  - 中文：【文档】【模型】Sync Kimi-K3 guide from official v0.27 branch
  - 原文：[Doc][Model] Sync Kimi-K3 guide from official v0.27 branch
  - 说明：Synchronize docs/source/tutorials/models/Kimi-K3.md on main from the official vllm-project/vllm-ascend:releases/v0.27.1rc guide at 0ce124446a0f59c431da76e31ffcc53489622513 . Source: Bring in the official PD connector 配置 更新,
- [PR #18835](https://github.com/vllm-project/vllm-ascend/pull/18835) 已合并
  - 中文：【文档】【模型】Sync Kimi-K3 guide from official v0.27 branch
  - 原文：[Doc][Model] Sync Kimi-K3 guide from official v0.27 branch
  - 说明：Synchronize docs/source/tutorials/models/Kimi-K3.md on releases/v0.30.0 from the official vllm-project/vllm-ascend:releases/v0.27.1rc guide at 0ce124446a0f59c431da76e31ffcc53489622513 . Source: Bring in the official PD connector configurati
- [PR #18867](https://github.com/vllm-project/vllm-ascend/pull/18867) 进行中
  - 中文：【文档】【模型】修复 Kimi-K3 PD connector TP 配置
  - 原文：[Doc][Model] Fix Kimi-K3 PD connector TP configuration
  - 说明：The Kimi-K3 PD engine templates start the model and DSpark draft with the seventh launcher argument ( $7 ), but advertise a hardcoded TP16 for both sides of MooncakeConnectorV1 . On the documented Atlas 950DT TP8 deployment, the engine topo
- [Issue #16268](https://github.com/vllm-project/vllm-ascend/issues/16268) 已关闭
  - 中文：【缺陷】: 0.26.0rc1 部署kimik3 加入环境变量export ASCEND_LAUNCH_BLOCKING=1，无法拉起服务
  - 原文：[Bug]: 0.26.0rc1 部署kimik3 加入环境变量export ASCEND_LAUNCH_BLOCKING=1，无法拉起服务
- [Issue #16583](https://github.com/vllm-project/vllm-ascend/issues/16583) 已关闭
  - 中文：【Usage】: Kimi-k3 实践部署配置-已验证
  - 原文：[Usage]: Kimi-k3 实践部署配置-已验证
- [Issue #16773](https://github.com/vllm-project/vllm-ascend/issues/16773) 已关闭
  - 中文：【缺陷】: 0.27.0rc1 测试kimi-k3 推理发生segfault
  - 原文：[Bug]: 0.27.0rc1 测试kimi-k3 推理发生segfault
- [PR #18668](https://github.com/vllm-project/vllm-ascend/pull/18668) 已合并
  - 中文：【文档】【模型】迁移 and refine Kimi-K3 guide on main
  - 原文：[Doc][Model] Migrate and refine Kimi-K3 guide on main
  - 说明：迁移 the Kimi-K3 deployment guide and 支持 matrix entries from docs/kimi-k3-v0.27.1 to main . Mark Kimi-K3 as supported and 移除 experimental labels and the experimental-支持 warning. Preserve the existing PD reference-design and
- [PR #18463](https://github.com/vllm-project/vllm-ascend/pull/18463) 已合并
  - 中文：【文档】【模型】迁移 Kimi-K3 guide to v0.30.0
  - 原文：[Doc][Model] Migrate Kimi-K3 guide to v0.30.0
  - 说明：将Kimi-K3部署指南和支持矩阵条目从docs/kimi-k3-v0.27.1迁移到release/v0.30.0。将Kimi-K3标记为支持，并删除实验标签和实验支持警告。保留现有PD引用
- [PR #18818](https://github.com/vllm-project/vllm-ascend/pull/18818) 进行中
  - 中文：【性能】【MoE】Arbitrate 共享 Gate-Up before routed GMM1
  - 原文：[Performance][MoE] Arbitrate shared Gate-Up before routed GMM1
  - 说明：For the mixed-量化 MoE path observed in Kimi K3, 共享-expert Gate-Up and routed-expert GMM1 can run concurrently even though both use Cube/AIC resources. This draft makes the stage boundary explicit without adding a Kimi-specific

### Kimi K2

#### 2026-11-09

- [PR #20649](https://github.com/vllm-project/vllm-ascend/pull/20649) 已合并
  - 中文：【releases/v0.30.0】【文档】【杂项】Backport Kimi-K2.6 deployment and 精度 更新
  - 原文：[releases/v0.30.0][Doc][Misc] Backport Kimi-K2.6 deployment and accuracy updates
  - 说明：Backport 20464 to releases/v0.30.0 (the main PR is currently open). Cherry-picked commits: 6e75827c5 , 13a5d9361 , b7f7e9c1a , and 387f47373 with source references retained. All four documentation commits cherry-picked cleanly; the existing

#### 2026-11-08

- [PR #20795](https://github.com/vllm-project/vllm-ascend/pull/20795) 已关闭
  - 中文：【文档】新增 Kimi-K2.6 Ascend W4A8 deployment recipe
  - 原文：[Docs] Add Kimi-K2.6 Ascend W4A8 deployment recipe
  - 说明：Superseded by 21280, submitted from Task1 1 doc Kimi-K2.6 recipe 更新 with the same recipe contents and current main integrated. 迁移 and 更新 the Kimi-K2.6 Ascend recipe in recipes/overlays/moonshotai/Kimi-K2.6.yaml , following the
- [PR #21280](https://github.com/vllm-project/vllm-ascend/pull/21280) 进行中
  - 中文：【文档】新增 Kimi-K2.6 Ascend W4A8 deployment recipe
  - 原文：[Docs] Add Kimi-K2.6 Ascend W4A8 deployment recipe
  - 说明：Replaces 20795 to use the dedicated Task1 1 doc Kimi-K2.6 recipe 更新 branch. The recipe file is unchanged; the branch includes current main. The predecessor will be closed to 避免 duplicate review. 迁移 and 更新 the Kimi-K2.6 Ascen

#### 2026-11-06

- [Issue #21161](https://github.com/vllm-project/vllm-ascend/issues/21161) 进行中
  - 中文：夜间 Daily test failure on 2026-11-06 12:00 - please check
  - 原文：Nightly Daily test failure on 2026-11-06 12:00 - please check
  - 说明：The 夜间 Daily test for vllm-ascend reported failures at 12:00 on 2026-11-06. Failed on: Kimi-K2.6-w4a8-A3, MiniMax-M3-BF16-A3 Failed 测试用例: - test single node — RuntimeError: Server at 0.0.0.0 exited unexpectedly. Failed run(s): Me

#### 2026-11-03

- [PR #20617](https://github.com/vllm-project/vllm-ascend/pull/20617) 已合并
  - 中文：【修复】【注意力】Identify V2 EAGLE MLA drafts from upstream model tag
  - 原文：[BugFix][Attention] Identify V2 EAGLE MLA drafts from upstream model tag
  - 说明：Ascend MLA identifies drafts from the top-level model 配置.runner type . Upstream V2 EAGLE intentionally retains the target 运行时 配置 and supplies the draft ModelConfig separately, so this test alone misses EAGLE draft layers.

#### 2026-11-02

- [Issue #20154](https://github.com/vllm-project/vllm-ascend/issues/20154) 已关闭
  - 中文：【MRV2】Kimi K2.6 精度 & 性能 comparison between Model Runner v2 and Model Runner v1
  - 原文：[MRV2] Kimi K2.6 accuracy & performance comparison between Model Runner v2 and Model Runner v1
  - 说明：Motivation Model Runner v2 is being rolled out as the next-generation worker path in vllm-ascend. Kimi-K2.6-W4A8 already has MRV2 夜间 coverage in one topology ( Kimi-K2.6-W4A8-MRV2-PCP-DCP , 18267), but there is no systematic same-input
- [PR #20648](https://github.com/vllm-project/vllm-ascend/pull/20648) 已关闭
  - 中文：【releases/v0.23.0】【文档】【杂项】Backport Kimi-K2.6 deployment and 精度 更新
  - 原文：[releases/v0.23.0][Doc][Misc] Backport Kimi-K2.6 deployment and accuracy updates
  - 说明：Backport 20464 to releases/v0.23.0 (the main PR is currently open). Cherry-picked commits: 6e75827c5 , 13a5d9361 , b7f7e9c1a , and 387f47373 with source references retained. The cherry-pick 必填 conflict resolution for the older Sphinx
- [PR #20464](https://github.com/vllm-project/vllm-ascend/pull/20464) 已合并
  - 中文：【文档】【杂项】修复 Kimi-K2.6 deployment instructions and 更新 精度 results
  - 原文：[Doc][Misc] Fix Kimi-K2.6 deployment instructions and update accuracy results
  - 说明：Clarify version requirements, 修复 deployment and benchmark examples, and refresh 精度 results in the Kimi-K2.6 guide. - Use {{ vllm ascend version }} in the introductory validation-version statement, while retaining v0.20.0rc1 as the fi

#### 2026-10-28

- [PR #20119](https://github.com/vllm-project/vllm-ascend/pull/20119) 已合并
  - 中文：【文档】Backport Kimi-K2.6 deployment clarifications to v0.30.0
  - 原文：[Doc] Backport Kimi-K2.6 deployment clarifications to v0.30.0
  - 说明：Backport 20118 to releases/v0.30.0 by cherry-picking commit 1b8212a10 with git cherry-pick -x (no conflicts). Clarify the Kimi-K2.6 deployment guide so that the documented hardware requirements, context length, and multi-node topology are e
- [PR #20118](https://github.com/vllm-project/vllm-ascend/pull/20118) 已合并
  - 中文：【文档】Clarify Kimi-K2.6 deployment requirements
  - 原文：[Doc] Clarify Kimi-K2.6 deployment requirements
  - 说明：Clarify the Kimi-K2.6 deployment guide so that the documented hardware requirements, context length, and multi-node topology are explicit. - 新增 the Atlas 800 A3 (64 GB × 16) node requirement for the Eagle3 and DFlash draft models. - Change
- [PR #19783](https://github.com/vllm-project/vllm-ascend/pull/19783) 已合并
  - 中文：【文档】【杂项】更新 Kimi-K2.6 deployment documentation
  - 原文：[Doc][Misc] Update Kimi-K2.6 deployment documentation
  - 说明：Clarify the Kimi-K2.6 deployment guide. - Keep only A3 and A2 Docker installation tabs; 移除 the 950DT products tab. - Use /data/media for local media access and explain the parameter. Describe scenarios where balance scheduling can incre
- [PR #20057](https://github.com/vllm-project/vllm-ascend/pull/20057) 已合并
  - 中文：【文档】【杂项】Backport Kimi-K2.6 deployment docs to v0.30.0
  - 原文：[Doc][Misc] Backport Kimi-K2.6 deployment docs to v0.30.0
  - 说明：Backport the Kimi-K2.6 deployment guide changes from 19783 to releases/v0.30.0 . - Keep only A3 and A2 Docker installation tabs; 移除 the 950DT products tab. - Use /data/media for local media access and explain the parameter. Describe sce

#### 2026-10-27

- [Issue #19939](https://github.com/vllm-project/vllm-ascend/issues/19939) 进行中
  - 中文：夜间 Daily test failure on 2026-10-27 08:00 - please check
  - 原文：Nightly Daily test failure on 2026-10-27 08:00 - please check
  - 说明：The 夜间 Daily test for vllm-ascend reported failures at 08:00 on 2026-10-27. Failed on: Kimi-K2.6-w4a8-A3, MiniMax-M3-BF16-A3 Failed 测试用例: - test single node — AssertionError: some aisbench cases failed, info were shown above. Fai

#### 2026-10-26

- [PR #19832](https://github.com/vllm-project/vllm-ascend/pull/19832) 已合并
  - 中文：【v0.30.0】【文档】【杂项】更新 支持 status for GLM-5.1, Qwen3.5/3.6-27B, and Kimi-K2.6 to Supported
  - 原文：[v0.30.0][Doc][Misc] Update support status for GLM-5.1, Qwen3.5/3.6-27B, and Kimi-K2.6 to Supported
  - 说明：This PR 更新 the 支持 status of several models in the 支持 matrix to reflect their current verification status: - 更新 GLM-5.1 , Qwen3.5-27B / Qwen3.6-27B , and Kimi-K2.6 from Experimental (🔵) to Supported (✅). - Reorders the "

#### 2026-10-19

- [PR #16170](https://github.com/vllm-project/vllm-ascend/pull/16170) 已合并
  - 中文：【持续集成】【nightly】新增 Kimi-K2.6-w4a8-DFlash-A3 spec 解码 夜间 tests
  - 原文：[CI][nightly] Add Kimi-K2.6-w4a8-DFlash-A3 spec decode nightly tests
  - 说明：新增 a 夜间 test for Kimi-K2.6 acceptance rate per position. No. Nighly test passed. - vLLM main:

#### 2026-10-17

- [PR #18897](https://github.com/vllm-project/vllm-ascend/pull/18897) 已合并
  - 中文：【修复】【v0.30.0】Backport Kimi A5 draft KV 缓存 and FP8 MLA output fixes (#18845)
  - 原文：[BugFix][v0.30.0] Backport Kimi A5 draft KV cache and FP8 MLA output fixes (#18845)
  - 说明：Backport the combined 18845 Kimi-K2.6 A5 fixes to releases/v0.30.0 : preserve the existing wide-Eagle3 startup/stall solution and append all four A5 FP8 MLA output-correction commits from 18914 through 9c1004335 . The writer implementation
- [PR #18845](https://github.com/vllm-project/vllm-ascend/pull/18845) 已合并
  - 中文：【修复】【注意力】Kimi A5 draft KV 缓存 and FP8 MLA output
  - 原文：[BugFix][Attention] Fix Kimi A5 draft KV cache and FP8 MLA output
  - 说明：修复 the Kimi-K2.6 A5 wide-Eagle3 startup/stall issue and include the A5 FP8 MLA output correction from 18914, so the FP8 main model and BF16 draft fixes are available together. The existing wide-draft solution is preserved: concatenating tw

#### 2026-10-15

- [Issue #18833](https://github.com/vllm-project/vllm-ascend/issues/18833) 进行中
  - 中文：夜间 Daily test failure on 2026-10-15 12:00 - please check
  - 原文：Nightly Daily test failure on 2026-10-15 12:00 - please check
  - 说明：The 夜间 Daily test for vllm-ascend reported failures at 12:00 on 2026-10-15. Failed on: a3-2 card-(part 5-5), Kimi-K2.6-w4a8-A3, MiniMax-M3-BF16-A3 Failed 测试用例: - test hccl 权重 transfer transaction — AssertionError: qwen3.5-35b

## MiniMax

### MiniMax-M2.7

#### 2026-10-31

- [PR #20439](https://github.com/vllm-project/vllm-ascend/pull/20439) 已关闭
  - 中文：【测试】移除 orphan MiniMax-M2.7 case 配置
  - 原文：[Test] Remove orphan MiniMax-M2.7 case config
  - 说明：Follows up on 20421. tests/e2e/cases/models/configs/MiniMax/Minimax m2.7 in128k 1k prefix90 tpot50.yaml is an orphan file: - It is not referenced by any workflow 配置 ( 每周 配置.yaml , 夜间 配置.yaml , daily 配置.yaml ). - Its
- [PR #20421](https://github.com/vllm-project/vllm-ascend/pull/20421) 已合并
  - 中文：【测试】Sunset Kimi-2.5, MiniMax-M2.5, and MiniMax-M2.7 测试用例
  - 原文：[Test] Sunset Kimi-2.5, MiniMax-M2.5, and MiniMax-M2.7 test cases
  - 说明：This PR removes the deprecated E2E test 配置 files for Kimi-2.5, MiniMax-M2.5, and MiniMax-M2.7 models to clean up the test suite. No. This is a maintenance PR that removes deprecated

### MiniMax-M2.5

#### 2026-10-31

- [PR #20421](https://github.com/vllm-project/vllm-ascend/pull/20421) 已合并
  - 中文：【测试】Sunset Kimi-2.5, MiniMax-M2.5, and MiniMax-M2.7 测试用例
  - 原文：[Test] Sunset Kimi-2.5, MiniMax-M2.5, and MiniMax-M2.7 test cases
  - 说明：This PR removes the deprecated E2E test 配置 files for Kimi-2.5, MiniMax-M2.5, and MiniMax-M2.7 models to clean up the test suite. No. This is a maintenance PR that removes deprecated

## Gemma

### Gemma4

#### 2026-11-10

- [PR #9222](https://github.com/vllm-project/vllm-ascend/pull/9222) 已关闭
  - 中文：【功能】【注意力】【Kernel】支持 Gemma4 inference on Ascend
  - 原文：[Feature][Attention][Kernel] Support Gemma4 inference on Ascend
  - 说明：【功能】【注意力】【Kernel】支持 Gemma4 large-head and KV-sharing inference on Ascend What This PR Does This PR fixes Gemma4 inference failures on vLLM-Ascend without changing vLLM core. Main changes: - 新增 Ascend 注意力 fallback for

#### 2026-11-06

- [PR #21169](https://github.com/vllm-project/vllm-ascend/pull/21169) 草稿
  - 中文：【注意力】【功能】Gemma4 512-dim 注意力: B1 paged verify, FULL cudagraph and FIA TND
  - 原文：[Attention][Feature] Gemma4 512-dim attention: B1 paged verify,    FULL cudagraph and FIA TND
  - 说明：ops transformer fia tnd hdim512 d3235e3.patch ops-transformer FIA TND + headDim=512 补丁使用说明 （2026-11-06，适用 CANN 9.2.0 / ascend910b） 目标读者：需要在另一套环境里复现「FusedInferAttentionScore（FIA）支持 TND 布局 + head dim=512」的 agent 或工程师。 本文是自包含操作手册：取源码 → 打补丁 → 编

#### 2026-10-28

- [PR #20125](https://github.com/vllm-project/vllm-ascend/pull/20125) 草稿
  - 中文：【注意力】【功能】B1 paged verify for Gemma4 512-dim MTP verify on MRv2 (FIA-v2 BNSD)
  - 原文：[Attention][Feature] B1 paged verify for Gemma4 512-dim MTP verify on MRv2 (FIA-v2 BNSD)
  - 说明：PR 20125 已指向 b2ce main 用于暂时规避MoE 解码算子性能问题 Model Runner V2 has no path for the Gemma4-style head dim=512 MTP verify step: FIA TND rejects head dim=512, and the V2 capture 元数据 is never labeled SpecDecoding , so the PA capture gate do
- [PR #20070](https://github.com/vllm-project/vllm-ascend/pull/20070) 草稿
  - 中文：【注意力】【功能】B1 paged verify for Gemma4 512-dim MTP verify (FIA-v2 BNSD)
  - 原文：[Attention][Feature] B1 paged verify for Gemma4 512-dim MTP verify (FIA-v2 BNSD)
  - 说明：What this does Gemma4 31B W8A8 with MTP k=3 could only run under PIECEWISE on A2/A3: the target's global-注意力 layers use head dim=512, which FIA TND rejects, so the MTP verify step could not be captured in the FULL 解码 graph. This p
- [PR #20013](https://github.com/vllm-project/vllm-ascend/pull/20013) 进行中
  - 中文：feat(注意力): FULL_DECODE_ONLY MTP for Gemma4 head_dim=512 on 0.30…
  - 原文：feat(attention): FULL_DECODE_ONLY MTP for Gemma4 head_dim=512 on 0.30…
  - 说明：….0rc2 Gemma4 31B W8A8 with MTP k=3 could only run under PIECEWISE on the 0.30.0 release line: the target's global-注意力 layers use head dim=512, which FIA TND rejects on A2/A3, so the MTP verify step could not be captured in the FULL d

#### 2026-10-27

- [PR #19886](https://github.com/vllm-project/vllm-ascend/pull/19886) 进行中
  - 中文：【功能】【注意力】Gemma4 MTP k=3 FULL_DECODE_ONLY on v0.30.0 支持 A2
  - 原文：[Feature][Attention] Gemma4 MTP k=3 FULL_DECODE_ONLY on v0.30.0 Support A2
  - 说明：【功能】【注意力】Gemma4 MTP k=3 FULL 解码 ONLY on v0.30.0rc2 支持 A2 概要 - Base： vllm-project/vllm-ascend:releases/v0.30.0rc2 （ 8fde6d4e3，即 tag v0.30.0rc2 ） - Head： swimming2007-doge:mtp-fulldecodeonly-b1-30rc （ 157ffb4cf ） - 单提交，6

#### 2026-10-23

- [PR #19462](https://github.com/vllm-project/vllm-ascend/pull/19462) 已合并
  - 中文：【修复】【Worker】恢复 Gemma 4 KV 缓存 capacity on Model Runner V2
  - 原文：[BugFix][Worker] Restore Gemma 4 KV cache capacity on Model Runner V2
  - 说明：cherry-pick from 19264 (9df8e7fcb0733e52e7a6b4d37aaf95bd00fd8964) Backport the merged Gemma 4 KV 缓存 修复 to releases/v0.30.0 . Related issue: 19259. The private allocation introduced by 14872 reduces the Gemma 4 full/sliding KV budget by
- [PR #17492](https://github.com/vllm-project/vllm-ascend/pull/17492) 已合并
  - 中文：[功能] [规格解码]在Model Runner V2上支持Gemma4 MTP
  - 原文：[Feature][Spec Decode] To support Gemma4 MTP on Model Runner V2
  - 说明：Adds Gemma4 MTP 投机解码 on Model Runner V2 ( VLLM USE V2 MODEL RUNNER=1 ). Previously, init speculator() could route Gemma4 MTP to AscendEagleSpeculator : use eagle() is true for method "mtp" , while the regular MTP branch excl

#### 2026-10-22

- [Issue #19259](https://github.com/vllm-project/vllm-ascend/issues/19259) 已关闭
  - 中文：【缺陷】: Gemma 4 KV 缓存 capacity reduced 6x by private multi-group allocation introduced in #14872
  - 原文：[Bug]: Gemma 4 KV cache capacity reduced 6x by private multi-group allocation introduced in #14872
  - 说明：The 回退 is introduced by 14872, 合并 commit fd815467c221ee600137f6bdd53fe354d5e7c999 , while adapting vLLM's standardized KV layout ( 51718). The relevant upstream anchors are ba07e4a48fc951300d97eb506217dd530583dea3 - e6bfe03ad73a3
- [PR #19264](https://github.com/vllm-project/vllm-ascend/pull/19264) 已合并
  - 中文：【修复】【Worker】恢复 Gemma 4 KV 缓存 capacity on Model Runner V2
  - 原文：[BugFix][Worker] Restore Gemma 4 KV cache capacity on Model Runner V2
  - 说明：Fixes 19259. Related report: 18941. After 14872 ( fd815467c221ee600137f6bdd53fe354d5e7c999 ), ordinary full/sliding 注意力 groups use private per-layer allocations even though upstream vLLM's standardized planner budgets for overlapping

#### 2026-10-20

- [PR #19053](https://github.com/vllm-project/vllm-ascend/pull/19053) 已合并
  - 中文：【测试】新增 A5 夜间 GPQA-D coverage for Gemma 4 MXFP4
  - 原文：[Test] Add A5 nightly GPQA-D coverage for Gemma 4 MXFP4
  - 说明：新增 A5 夜间 GPQA-D 精度 coverage for Gemma 4 MXFP4 models: - 31B: baseline 71.72%, tolerance ±5 percentage points. - 26B-A4B: baseline 70.71%, tolerance ±5 percentage points. No. Tested

#### 2026-10-16

- [PR #18690](https://github.com/vllm-project/vllm-ascend/pull/18690) 已合并
  - 中文：[文档] [模型] [v0.30.0]添加Gemma4量化部署指导
  - 原文：[Doc][Model][v0.30.0] Add Gemma4 quantized deployment guidance
  - 说明：Backports the Gemma4 quantized deployment guidance from 18565 to releases/v0.30.0 . - documents the public Gemma4 31B dense and 26B-A4B MoE MXFP4 检查点 - adds TP4DP2 服务 examples for 950PR&950DT Products with --量化 ascend
- [PR #18985](https://github.com/vllm-project/vllm-ascend/pull/18985) 进行中
  - 中文：【持续集成】新增 Gemma 4 MXFP4 models to A5 download list
  - 原文：[CI] Add Gemma 4 MXFP4 models to A5 download list
  - 说明：新增 the following ModelScope 检查点 to models.a5 in .github/workflows/misc/model dataset list.json so their 权重 can be downloaded for upcoming 夜间 coverage: - Eco-Tech/gemma-4-26B-A4B-it-w4a4-mxfp4 - Eco-Tech/gemma-4-31B-it-w4a

## Step

### Step3

#### 2026-11-10

- [PR #21386](https://github.com/vllm-project/vllm-ascend/pull/21386) 已合并
  - 中文：【修复】对齐 Step3.5 注意力 initialization with vLLM 0.33
  - 原文：[BugFix] Align Step3.5 attention initialization with vLLM 0.33
  - 说明：修复 Step3.5/Step3.7 model initialization after the vLLM 0.33 upgrade. The Ascend decoder patch still passes 移除 arguments such as rope theta to Step3p5Attention , which now takes per-layer rope parameters and use rope . - Reuse upstream

#### 2026-11-05

- [PR #20102](https://github.com/vllm-project/vllm-ascend/pull/20102) 已合并
  - 中文：【持续集成】【nightly】新增 Step-3.7-Flash_w8a8_mxfp8 夜间 tests
  - 原文：[CI][nightly] Add Step-3.7-Flash_w8a8_mxfp8 nightly tests
  - 说明：【x】新增 夜间 tests for the step3.7 model, including 性能 and 精度. No. Nighly and CI test passed. --- 清单 Testing - Meaningful & reliable tests : New tests assert real behav

#### 2026-10-27

- [PR #19296](https://github.com/vllm-project/vllm-ascend/pull/19296) 已合并
  - 中文：【功能】【MRV2】【Spec Decode】支持 MultiModuleMTPSpeculator for Ascend
  - 原文：[Feature][MRV2][Spec Decode] Support MultiModuleMTPSpeculator for Ascend 
  - 说明：新增 MultiModuleMTPSpeculator 支持 in Ascend for multi KV 缓存 groups mtp, such as step3.7 and step5. followed adapted by me No. step3.7 in v1: input len=65536, output len=4096, bs=64: avg I

## 其他

### Llama

#### 2026-11-04

- [PR #20966](https://github.com/vllm-project/vllm-ascend/pull/20966) 进行中
  - 中文：【功能】【模型】DeepSeek-R1-Distill-Llama-70B model 支持
  - 原文：[Feature][Model] Add DeepSeek-R1-Distill-Llama-70B model support
  - 说明：Adapt the community model DeepSeek-R1-Distill-Llama-70B to Ascend for task 24 from 9079, with a BF16 TP=4/DP=1/PP=1 精度 配置, 支持-matrix entry, deployment tutorial, and real-hardware validation. The model reuses the existi

#### 2026-10-28

- [PR #17439](https://github.com/vllm-project/vllm-ascend/pull/17439) 已关闭
  - 中文：[测试]上游测试：使用在线模型调试测试用例test_llama_nemotron_vl.py。
  - 原文：[Test]Upstream test: debug test case test_llama_nemotron_vl.py using the online model.
  - 说明：Upstream test: 调试 测试用例 test llama nemotron vl.py using the online model. NO - vLLM main:

#### 2026-10-24

- [PR #19678](https://github.com/vllm-project/vllm-ascend/pull/19678) 进行中
  - 中文：【测试】新增 IQuest-Coder-V1-40B-Instruct 精度 配置 via hf_overrides
  - 原文：[Test] Add IQuest-Coder-V1-40B-Instruct accuracy config via hf_overrides
  - 说明：Closes 10662. Parent task: 9079. What & Why IQuest-Coder-V1-40B-Instruct is a standard LLaMA backbone behind a custom architecture name ( IQuestCoderForCausalLM , verified against 配置.json + safetensors key layout: 723 keys, all standard

#### 2026-10-22

- [PR #17374](https://github.com/vllm-project/vllm-ascend/pull/17374) 已关闭
  - 中文：【性能】【算子】Use 融合 rotary embedding for Llama 3
  - 原文：[Performance][Ops] Use fused rotary embedding for Llama 3
  - 说明：Llama 3 RoPE currently falls back to native PyTorch operations on Ascend. The OOT registry dispatches by exact class name ( cls. name ), and Llama3RotaryEmbedding is not registered, so the registered RotaryEmbedding 融合 path is never sele

#### 2026-10-19

- [PR #19147](https://github.com/vllm-project/vllm-ascend/pull/19147) 进行中
  - 中文：【修复】multimodal embedding 合并 in Llama 4 and Mistral Large 3 EAGLE drafters
  - 原文：[BugFix] Fix multimodal embedding merge in Llama 4 and Mistral Large 3 EAGLE drafters
  - 说明：Llama 4 and Mistral Large 3 EAGLE drafters in the currently verified vLLM ref ( c4df37dfcc7f72ca41cd43801a468526ecf99a2b ) still alias SupportsMultiModal.embed input ids without inheriting its helper methods. Draft 预填充 can raise Attribu
- [Issue #19146](https://github.com/vllm-project/vllm-ascend/issues/19146) 进行中
  - 中文：【RFC】: Multimodal embedding compatibility for Llama 4 and Mistral Large 3 EAGLE on Ascend
  - 原文：[RFC]: Multimodal embedding compatibility for Llama 4 and Mistral Large 3 EAGLE on Ascend
  - 说明：Motivation Llama 4 and Mistral Large 3 EAGLE drafters can fail during draft 预填充 with AttributeError: ... ' embed text input ids' when paired with a multimodal target. Their embed input ids aliases SupportsMultiModal.embed input ids , wh

### InternVL

#### 2026-10-26

- [PR #19818](https://github.com/vllm-project/vllm-ascend/pull/19818) 已合并
  - 中文：【文档】【杂项】Deprecate discontinued models and 更新 支持 matrix
  - 原文：[Doc][Misc] Deprecate discontinued models and update support matrix
  - 说明：This pull request deprecates several discontinued models (including DeepSeek-OCR-2, Hunyuan-A13B-Instruct, InternVL3.5, LLaVA-OneVision-Qwen2-0.5B-OV, Minitron-8B-Base, Mixtral-8x7B-Instruct-v0.1, PaddleOCR-VL, Qwen2.5-Math-RM-72B, Qwen3-AS
- [PR #19784](https://github.com/vllm-project/vllm-ascend/pull/19784) 已合并
  - 中文：【v0.30.0】【文档】【杂项】Deprecate discontinued models and 更新 支持 matrix
  - 原文：[v0.30.0][Doc][Misc] Deprecate discontinued models and update support matrix
  - 说明：This pull request deprecates several discontinued models (including DeepSeek-OCR-2, Hunyuan-A13B-Instruct, InternVL3.5, LLaVA-OneVision-Qwen2-0.5B-OV, Minitron-8B-Base, Mixtral-8x7B-Instruct-v0.1, PaddleOCR-VL, Qwen2.5-Math-RM-72B, Qwen3-AS

## 平台与通用

### 平台与通用

#### 2026-11-10

- [PR #20656](https://github.com/vllm-project/vllm-ascend/pull/20656) 已合并
  - 中文：【v0.32.0】【文档】【杂项】Prepare v0.32.0rc1 release
  - 原文：[v0.32.0][Doc][Misc] Prepare v0.32.0rc1 release
  - 说明：Prepares the vLLM Ascend v0.32.0rc1 release documentation, aligned with upstream vLLM v0.32.0, and adds the release branch and tag options for the image and wheel workflows. The PR branch is based on the current releases/v0.32.0rc tip. The
- [Issue #18337](https://github.com/vllm-project/vllm-ascend/issues/18337) 已关闭
  - 中文：【New Model】: EmbeddingGemma2 on Atlas 300I Duo (310P) - validated with benchmarks
  - 原文：[New Model]: EmbeddingGemma2 on Atlas 300I Duo (310P) - validated with benchmarks
  - 说明：Proposal 新增 支持 for Google's EmbeddingGemma2 omni-modal embedding model on Atlas 300I Duo (310P3) . EmbeddingGemma2 (740M: 270M text backbone + 170M vision encoder + 300M audio encoder) maps text, image, video and audio into a unified
- [PR #18053](https://github.com/vllm-project/vllm-ascend/pull/18053) 已合并
  - 中文：【功能】【MoE】融合 the 共享专家 into the A5 MegaMoe operator for W4A4 MXFP4 (enable_fused_mc2=3)
  - 原文：[Feature][MoE] Fuse the shared expert into the A5 MegaMoe operator for W4A4 MXFP4 (enable_fused_mc2=3)
  - 说明：What 融合 the 共享专家 into the A5 CANN MegaMoe operator ( 启用 融合 mc2=3 ), extending 17654 with W4A4 MXFP4 支持 and fixing activation-enum handling. Why With 启用 融合 mc2=2 , the 共享专家 runs as a separate GMM1+activ
- [PR #21484](https://github.com/vllm-project/vllm-ascend/pull/21484) 已合并
  - 中文：【releases/v0.32.0rc】【持续集成】Skip CANN 9.2.x custom-op .so validation in A5 wheel build
  - 原文：[releases/v0.32.0rc][CI] Skip CANN 9.2.x custom-op .so validation in A5 wheel build
  - 说明：Upgrade the wheel build base images for 310P / A2 / A3 / A5 from manylinux 9.1.0 to 9.2.1, so release wheels are built against the current CANN toolchain. - 修复 the pip index flag: --extra-index is not a valid pip option, so the PyTorch CPU
- [Issue #21487](https://github.com/vllm-project/vllm-ascend/issues/21487) 进行中
  - 中文：【0.32.0RC vLLM-Ascend】Known 夜间 issue: Qwen2-Audio Conv2D operator unsupported (carried in RC)
  - 原文：[0.32.0RC vLLM-Ascend] Known nightly issue: Qwen2-Audio Conv2D operator unsupported (carried in RC)
  - 说明：Description A known issue affecting Qwen2-Audio only was observed in the vLLM-Ascend 0.32.0RC 夜间 test. This issue is being carried as a known limitation and will not block the 0.32.0RC release. Failed job: Affected model: Qwen2-Audio-7
- [Issue #21474](https://github.com/vllm-project/vllm-ascend/issues/21474) 进行中
  - 中文：【缺陷】【v0.26.0rc】: Layerwise MTP expands MemCache reads beyond the confirmed external 缓存 hit
  - 原文：[Bug]: [v0.26.0rc] Layerwise MTP expands MemCache reads beyond the confirmed external cache hit
- [PR #20938](https://github.com/vllm-project/vllm-ascend/pull/20938) 已合并
  - 中文：【功能】【性能】【xlite】更新 to xlite 注意力 元数据 V2 and 移除 padded tokens/requests from forward
  - 原文：[Feature][Performance][xlite] Update to xlite attention metadata V2 and remove padded tokens/requests from forward
  - 说明：This PR migrates the xlite backend from 注意力 元数据 V1 (the built backend 元数据) to 注意力 元数据 V2, built directly from the runner-retained AscendCommonAttentionMetadata , and removes padded tokens/requests from the xlite f
- [PR #21458](https://github.com/vllm-project/vllm-ascend/pull/21458) 已合并
  - 中文：【v0.32.0rc】【文档】Translated Doc files 2026-11-10
  - 原文：[v0.32.0rc][Doc] Translated Doc files 2026-11-10
  - 说明：Auto-Translation Summary Translated 4 file(s): - <code /home/runner/ work/vllm-ascend/vllm-ascend/docs/source/locale/zh CN/LC MESSAGES/tutorials/models/DeepSeek-V4-Flash.po</code - <code /home/runner/ work/vllm-ascend/vllm-ascend/docs/sourc
- [Issue #20725](https://github.com/vllm-project/vllm-ascend/issues/20725) 已关闭
  - 中文：【缺陷】: BalanceScheduler omits has_sync_kv_loads, deferring synchronous KV loads until after forward
  - 原文：[Bug]: BalanceScheduler omits has_sync_kv_loads, deferring synchronous KV loads until after forward
- [PR #20810](https://github.com/vllm-project/vllm-ascend/pull/20810) 已合并
  - 中文：【修复】恢复 has_sync_kv_loads bookkeeping in the copied schedulers
  - 原文：[BugFix] Restore has_sync_kv_loads bookkeeping in the copied schedulers
  - 说明：Restores the has sync kv loads bookkeeping that upstream vLLM's 调度器.schedule() performs, in the two vLLM-Ascend 拷贝 of that method that had dropped it: - vllm ascend/patch/platform/patch balance schedule.py ( BalanceScheduler ) - v
- [PR #20566](https://github.com/vllm-project/vllm-ascend/pull/20566) 已合并
  - 中文：【功能】启用 FlashComm1 for GLM-5.3-Flash MTP 注意力
  - 原文：[Feature] Enable FlashComm1 for GLM-5.3-Flash MTP attention
  - 说明：修复 GLM-5.3-Flash MTP 注意力 using AllReduce with FlashComm1 启用. Keep all layout transitions in model.py : shard and normalize, AllGather before 注意力, ReduceScatter afterward, then gather hidden/residual outputs for the existin
- [PR #21382](https://github.com/vllm-project/vllm-ascend/pull/21382) 已合并
  - 中文：【重构】移除 obsolete A5 index_fill workaround
  - 原文：[Refactor] Remove obsolete A5 index_fill workaround
  - 说明：移除 the temporary A5 index fill workaround introduced in 16992. The current dependency stack (CANN 9.2.1 and torch-npu 2.10.0.post7) supports native device indices without per-index host scalar extraction or synchronization. - 移除 the
- [PR #21440](https://github.com/vllm-project/vllm-ascend/pull/21440) 已合并
  - 中文：【v0.32.0rc】【文档】Translated Doc files 2026-11-10
  - 原文：[v0.32.0rc][Doc] Translated Doc files 2026-11-10
  - 说明：Auto-Translation Summary Translated 67 file(s): - <code /home/runner/ work/vllm-ascend/vllm-ascend/docs/source/locale/zh CN/LC MESSAGES/developer guide/Design Documents/上下文并行.po</code - <code /home/runner/ work/vllm-ascend/vllm-a
- [PR #21387](https://github.com/vllm-project/vllm-ascend/pull/21387) 已合并
  - 中文：【修复】Preserve mixed-精度 Kimi MLA output gates
  - 原文：[BugFix] Preserve mixed-precision Kimi MLA output gates
  - 说明：修复 a mixed-精度 权重-加载 回退 exposed by the vLLM 0.33 Kimi MLA gate fusion. Upstream AMD Kimi now packs q a proj , kv a proj with mqa and g proj into KimiK3MergedQKVGateLinear . Ascend's ModelSlim mapping still describes
- [Issue #21451](https://github.com/vllm-project/vllm-ascend/issues/21451) 进行中
  - 中文：【RFC】: 新增 AI review mechanism
  - 原文：[RFC]: Add AI review mechanism
- [PR #19000](https://github.com/vllm-project/vllm-ascend/pull/19000) 已合并
  - 中文：【功能】int8 quantized all-减少 for large bf16 TP collectives on Atlas A2
  - 原文：[Feature] Add int8 quantized all-reduce for large bf16 TP collectives on Atlas A2
  - 说明：What does this PR do? Adds an opt-in int8 quantized all-减少 for large bf16 TP collectives on Atlas A2 (910B series, A3-ready), halving the 通信 volume of the bandwidth-bound 预填充 all-reduces (注意力 output projection / MoE
- [Issue #16396](https://github.com/vllm-project/vllm-ascend/issues/16396) 已关闭
  - 中文：【缺陷】: enable_reduce_sample returns incorrect vocabulary IDs for greedy requests in mixed batches
  - 原文：[Bug]: enable_reduce_sample returns incorrect vocabulary IDs for greedy requests in mixed batches
- [PR #21410](https://github.com/vllm-project/vllm-ascend/pull/21410) 已合并
  - 中文：【修复】【测试】D3 CPU reference 加载 without accelerate
  - 原文：[BugFix][Test] Fix D3 CPU reference loading without accelerate
  - 说明：修复 the D3 CPU reference test when ModelScope wraps Transformers model 加载. Normalize the CPU device map at Transformers' validation boundary so the reference model loads without an accelerate dependency. Related to 21407 (D3 test failu
- [PR #21414](https://github.com/vllm-project/vllm-ascend/pull/21414) 进行中
  - 中文：【性能】【PCP】重叠 local Q projection with global 缓存 preparation
  - 原文：[Performance][PCP] Overlap local Q projection with global cache preparation
  - 说明：DSA PCP 预填充 currently runs three things serially per layer: gather/恢复 the hidden states, prepare the replicated caches (global collectives), and only then compute the local Q prolog. The Q prolog only reads local inputs and 权重
- [PR #21413](https://github.com/vllm-project/vllm-ascend/pull/21413) 进行中
  - 中文：【修复】【Kernel】W4A8 combine token accounting
  - 原文：[BugFix][Kernel] Fix W4A8 combine token accounting
  - 说明：CombineV2 in dispatch ffn combine w4 a8 compares maxOutputSize , a logical-token capacity, with preSrcExpertSum , an offset accumulated after doubling W4A8 rows. This can truncate valid expert tokens even when their total fits the configure

#### 2026-11-09

- [Issue #21383](https://github.com/vllm-project/vllm-ascend/issues/21383) 进行中
  - 中文：【缺陷】【310P】: **Title: Clarification on KV 缓存 Transfer Limitation and PD Disaggregation 支持**
  - 原文：[Bug]: **Title: [310P] Clarification on KV Cache Transfer Limitation and PD Disaggregation Support**
- [PR #21380](https://github.com/vllm-project/vllm-ascend/pull/21380) 已合并
  - 中文：【修复】恢复 PCP 预填充 classification only for SFA 注意力
  - 原文：[BugFix] Restore PCP prefill classification only for SFA attention
  - 说明：With PCP8, one remaining prompt token plus five 投机 lookahead positions can produce shards starting beyond the prompt boundary. These shards are locally classified as 解码 although their request is globally prefilling. For SFA att
- [PR #19826](https://github.com/vllm-project/vllm-ascend/pull/19826) 已合并
  - 中文：【功能】遵循 device IDs in KV transfer and native tiering 卸载
  - 原文：[Feature] Honor device IDs in KV transfer and native tiering offload
  - 说明：With --device-ids 1,3 , SFA Remote D2H sender threads could bind to devices 0,1 using local ranks. Capture the worker's selected NPU with torch.npu.current device() and bind the sender thread to that device. In non-replicated native tiering
- [PR #21293](https://github.com/vllm-project/vllm-ascend/pull/21293) 已合并
  - 中文：【修复】【0.32.0rc】【xlite】解码-only token-budget underestimation for 投机解码
  - 原文：[BugFix][0.32.0rc][xlite] Fix decode-only token-budget underestimation for speculative decoding
  - 说明：Cherry-picked from PR 20937. This PR fixes xlite 's underestimation of the tensor pool size in 解码-only mode when 投机解码 is 启用, and reworks the token-budget 配置 to follow the actual forward scheduling constra
- [PR #20937](https://github.com/vllm-project/vllm-ascend/pull/20937) 已合并
  - 中文：【修复】【xlite】解码-only token-budget underestimation for 投机解码
  - 原文：[BugFix][xlite] Fix decode-only token-budget underestimation for speculative decoding
  - 说明：This PR fixes xlite 's underestimation of the tensor pool size in 解码-only mode when 投机解码 is 启用, and reworks the token-budget 配置 to follow the actual forward scheduling constraints. In 解码-only mode, xl
- [PR #20964](https://github.com/vllm-project/vllm-ascend/pull/20964) 已合并
  - 中文：【修复】Size DSA SAS 元数据 buffers for SparseFlashMla
  - 原文：[BugFix] Size DSA SAS metadata buffers for SparseFlashMla
  - 说明：BF16 SparseFlashMla and FP8/TurboQuant MixedQuant 元数据 operators produce 2048 int32 entries. Select the SAS buffer length from the active 元数据 operator so ordinary and 投机 buffers retain all 2048 entries; keep QLI and legacy
- [PR #21114](https://github.com/vllm-project/vllm-ascend/pull/21114) 已合并
  - 中文：【修复】【SpecDecode】Provision target embeddings before DFlash2 PP sharing
  - 原文：[BugFix][SpecDecode] Provision target embeddings before DFlash2 PP sharing
  - 说明：DFlash2 initialization fails on a later pipeline stage when the target input embedding is a PPMissingLayer : upstream embedding sharing runs before Ascend draft post-processing and raises needs the target input embedding, but it is unavaila
- [PR #20109](https://github.com/vllm-project/vllm-ascend/pull/20109) 已合并
  - 中文：【修复】【Sample】Count the selected-token rank at or above its logit
  - 原文：[BugFix][Sample] Count the selected-token rank at or above its logit
  - 说明：Refs vllm-project/vllm 42259. The Ascend rank 内核 counts strictly greater logits ( ), while upstream uses = . This PR aligns that comparison: a unique maximum ranks 1, and both members of a two-way top tie rank 2. Following review, this
- [PR #21317](https://github.com/vllm-project/vllm-ascend/pull/21317) 已合并
  - 中文：【Platform】【文档】新增 sunset deprecation warnings and documentation for dynamic chunk CPP and GQA DCP
  - 原文：[Platform][Doc] Add sunset deprecation warnings and documentation for dynamic chunk CPP and GQA DCP
  - 说明：This PR introduces sunset deprecation warnings and documentation 更新 for two features that are entering the sunset process: 1. Dynamic chunk size Chunked Pipeline Parallelism (CPP) : - Deprecation rationale: Dense models with long seque
- [PR #21306](https://github.com/vllm-project/vllm-ascend/pull/21306) 已合并
  - 中文：【Platform】【文档】新增 sunset deprecation warnings and documentation for dynamic chunk CPP and GQA DCP (v0.32)
  - 原文：[Platform][Doc] Add sunset deprecation warnings and documentation for dynamic chunk CPP and GQA DCP (v0.32)
  - 说明：This PR introduces sunset deprecation warnings and documentation 更新 for two features that are entering the sunset process in v0.32.0: 1. Dynamic chunk size Chunked Pipeline Parallelism (CPP) : - Deprecation rationale: Dense models with
- [PR #18236](https://github.com/vllm-project/vllm-ascend/pull/18236) 已合并
  - 中文：【功能】【性能】: 减少 LMHead padding using synchronized DP token counts
  - 原文：[Feature][perf]: reduce LMHead padding using synchronized DP token counts
  - 说明：减少 unnecessary LMHead padding for the target model and MTP drafter by deriving padding sizes from synchronized DP token buckets instead of always using the configured maximum. Keep real and dummy runs consistent so graph capture and rep
- [PR #20097](https://github.com/vllm-project/vllm-ascend/pull/20097) 已合并
  - 中文：【重构】【Worker】移除 Model Runner V1
  - 原文：[Refactor][Worker] Remove Model Runner V1
  - 说明：Model Runner V1 was isolated into vllm ascend/worker/v1/ and the 共享 code stopped depending on it. This PR removes the runner itself, the 切换 that selected it, and every reference that kept it reachable. - Delete vllm ascend/worker/v1
- [Issue #21064](https://github.com/vllm-project/vllm-ascend/issues/21064) 已关闭
  - 中文：【缺陷】: Boolean env vars COMPILE_CUSTOM_KERNELS / VERBOSE raise unclear ValueError for true/false or empty values
  - 原文：[Bug]: Boolean env vars COMPILE_CUSTOM_KERNELS / VERBOSE raise unclear ValueError for true/false or empty values
- [PR #21067](https://github.com/vllm-project/vllm-ascend/pull/21067) 已合并
  - 中文：【修复】【Build】Parse boolean env vars robustly and report invalid values
  - 原文：[BugFix][Build] Parse boolean env vars robustly and report invalid values
  - 说明：COMPILE CUSTOM 内核 and VERBOSE were parsed with bool(int(os.getenv(...))) , which has three problems: 1. export COMPILE CUSTOM 内核=true raises ValueError: invalid literal for int() with base 10: 'true' — the message never names the
- [PR #20905](https://github.com/vllm-project/vllm-ascend/pull/20905) 已合并
  - 中文：【修复】【Build】Reuse operator 缓存 across source checkouts
  - 原文：[BugFix][Build] Reuse operator cache across source checkouts
  - 说明：Two identical source checkouts should be able to share the persistent build 缓存 when their prepared inputs, compiler commands and toolchain match. Build checkout A, move its entire csrc/build 缓存 to a clean checkout B, and install from
- [PR #19919](https://github.com/vllm-project/vllm-ascend/pull/19919) 已合并
  - 中文：【注意力】【修复】Ensure ENCODER_ONLY layers in 池化 models bypass causal path
  - 原文：[Attention][BugFix] Ensure ENCODER_ONLY layers in pooling models bypass causal path
  - 说明：AscendAttentionBackendImpl.forward chose the bidirectional 池化 path from attn 元数据.causal alone. ENCODER ONLY layers of hybrid models (Gated DeltaNet + full 注意力, e.g. the Qwen3.5-based Decision 3.0 / D3 检查点) reach the
- [PR #20830](https://github.com/vllm-project/vllm-ascend/pull/20830) 已合并
  - 中文：【修复】Fail fast when a declared QuaRot rotation file is missing
  - 原文：[BugFix] Fail fast when a declared QuaRot rotation file is missing
  - 说明：load engram rotation block() serves two purposes at once: it loads the saved QuaRot basis when a 检查点 declares one, and it probes for <model /optional/quarot.safetensors when nothing was declared. Both branches currently end in torch.
- [Issue #21332](https://github.com/vllm-project/vllm-ascend/issues/21332) 进行中
  - 中文：【RFC】: 新增 KV Pool environment validation and 修复-SLO capacity search tools
  - 原文：[RFC]: Add KV Pool environment validation and fixed-SLO capacity search tools
  - 说明：Motivation. KV Pool deployment involves multiple hardware, 运行时, network, storage, and software dependencies. Users often discover environment problems only when the service starts or when KV Pool initialization fails. A standardized pre
- [PR #21326](https://github.com/vllm-project/vllm-ascend/pull/21326) 进行中
  - 中文：【修复】【MoE】Allocate EPLB load counters directly on NPU
  - 原文：[BugFix][MoE] Allocate EPLB load counters directly on NPU
  - 说明：Allocate the EPLB expert-load counter directly on NPU. During encoder-only model initialization, the skipped language model can be constructed under a meta default device. Creating the counter on that default device and then calling .npu()
- [PR #20381](https://github.com/vllm-project/vllm-ascend/pull/20381) 已合并
  - 中文：【算子】【修复】Derive rotary_mode from is_neox_style in AscendMRotaryEmbedding
  - 原文：[Ops][BugFix]Derive rotary_mode from is_neox_style in AscendMRotaryEmbedding
  - 说明：Fixes silently-wrong output for GPT-J style mRoPE models (e.g. GLM-OCR) on Ascend. AscendMRotaryEmbedding.forward oot hardcodes rotary mode="half". npu mrope interprets rotary mode as the Q/K pairing scheme: - "half" → GPT-NeoX chunk-half p

#### 2026-11-06

- [PR #21221](https://github.com/vllm-project/vllm-ascend/pull/21221) 已合并
  - 中文：【releases/v0.32.0rc】【修复】: 更新 FLA NPU wheel download to v26.9.1-release
  - 原文：[releases/v0.32.0rc][BugFix]: Update FLA NPU wheel download to v26.9.1-release
  - 说明：The v26.9.1-beta2 GitHub release no longer publishes the FLA NPU wheels, so jobs downloading them now fail with 'curl: (22) ... 404' and exit before tests start. The wheels were re-uploaded under v26.9.1-release with new file names (26.9.1,
- [PR #18359](https://github.com/vllm-project/vllm-ascend/pull/18359) 已合并
  - 中文：【重构】【KV 缓存】Adapt Ascend KV 缓存 planning to upstream KVCacheConfigBuilder
  - 原文：[Refactor][KV Cache] Adapt Ascend KV cache planning to upstream KVCacheConfigBuilder
  - 说明：Upstream vLLM 53558 introduced a pluggable KVCacheConfigBuilder and moved the KV-缓存 planning helpers into vllm.v1.core.KV 缓存 planning (moved again by 61183). Ascend's KV-缓存 planning was implemented as a module-level monkey patch th
- [PR #21098](https://github.com/vllm-project/vllm-ascend/pull/21098) 已合并
  - 中文：【修复】【v0.32.0rc】Bound SHM notification mailbox growth
  - 原文：[BugFix][v0.32.0rc] Bound SHM notification mailbox growth
  - 说明：Backport 19140 to releases/v0.32.0rc without functional changes. During sustained SHM fast-path reads, SpinCondition.record read() 更新 the busy-loop timestamp but does not service the notification socket. Workers continue sending notifi
- [PR #20248](https://github.com/vllm-project/vllm-ascend/pull/20248) 已合并
  - 中文：【性能】Inherit native MoE 共享专家 addition
  - 原文：[Performance] Inherit native MoE shared expert addition
  - 说明：移除 the Ascend copy of MoERunner.forward so 共享/routed expert outputs use upstream's native tensor addition. The current override duplicates the upstream control flow to replace one tensor-pair addition with torch. foreach 新增 ; setti
- [PR #21123](https://github.com/vllm-project/vllm-ascend/pull/21123) 已合并
  - 中文：【修复】【MRV2】【PCP】Preserve draft request capacity in startup profiling
  - 原文：[BugFix][MRV2][PCP] Preserve draft request capacity in startup profiling
  - 说明：Follow the small profile-control approach of 18311/ 18270 after 19801: compute a PCP profile budget in profile run() , temporarily expose that budget to the upstream profile run() , and 恢复 the original max num tokens in finally . For n
- [PR #20312](https://github.com/vllm-project/vllm-ascend/pull/20312) 已合并
  - 中文：【性能】【MRV2】优化 Ascend grammar bitmask scheduling
  - 原文：[Performance][MRV2] Optimize Ascend grammar bitmask scheduling
  - 说明：B Candidate Duration (s) Output 吞吐 (tok/s) TPOT Mean (ms) E2EL Mean (ms) ---: --- ---: ---: ---: ---: 32 Original 57.55 → 50.96 (-11.46%) 397.40 → 448.80 (+12.94%) 73.47 → 64.19 (-12.63%) 7180.36 → 6358.34 (-11.45%) 64 Original 66.3
- [PR #20645](https://github.com/vllm-project/vllm-ascend/pull/20645) 已合并
  - 中文：【修复】【KVOffload】卸载 only 前缀-cacheable KV 缓存 groups
  - 原文：[BugFix][KVOffload] Offload only prefix-cacheable KV cache groups
  - 说明：AscendOffloadingConnectorWorker.register kv caches() builds CanonicalKVCaches.group data refs by iterating over every entry of KV 缓存 配置.KV 缓存 groups , while the 调度器 only emits GPULoadStoreSpec.group sizes / block indices for
- [PR #21133](https://github.com/vllm-project/vllm-ascend/pull/21133) 已合并
  - 中文：【修复】【模型】A5 BF16 GBSA softmax 精度
  - 原文：[BugFix][Model] Fix A5 BF16 GBSA softmax precision
  - 说明：After 18426, MiniMax-M3 BF16 GBSA requests softmax 精度=0 . The A5 CANN 9.2.1 GBSA 元数据 operator rejects this with softmax 精度 only supports 1 , so BF16 预填充/解码 cannot run through GBSA in that environment. Select BF16
- [PR #21068](https://github.com/vllm-project/vllm-ascend/pull/21068) 已合并
  - 中文：【重构】Separate AscendStore worker modes
  - 原文：[Refactor] Separate AscendStore worker modes
  - 说明：Extract 共享 AscendStore worker setup, 缓存 registration, lookup, and lifecycle handling into BaseKVPoolWorker . Keep blockwise transfer and TP-mismatch operations in KVPoolWorker , and layerwise transfer and DSpark draft-缓存 registrat
- [PR #19871](https://github.com/vllm-project/vllm-ascend/pull/19871) 已合并
  - 中文：【修复】Integrate KDA state-copy with 共享 Triton warmup
  - 原文：[BugFix] Integrate KDA state-copy with shared Triton warmup
  - 说明：Integrate prepared KDA state-copy launchers with the current Ascend Triton JIT warmup framework. Both model runners register 元数据-only compile keys after 缓存 binding, and the worker invokes 共享 内核 warmup before model dummy runs
- [Issue #21171](https://github.com/vllm-project/vllm-ascend/issues/21171) 进行中
  - 中文：【功能】: 支持 池化 Model Full Graph Capture
  - 原文：[Feature]: Support Pooling Model Full Graph Capture
  - 说明：特性 Proposal 启用 full graph (CUDAGraph/TorchGraph) capture for models with 池化 layers on Ascend NPU. Previously, forcing full 图模式 on 池化 models resulted in error 507011 during replay. This PR resolves the underlying is
- [PR #20910](https://github.com/vllm-project/vllm-ascend/pull/20910) 已合并
  - 中文：【修复】Reuse upstream MLA context packing and workspace sizing
  - 原文：[BugFix] Reuse upstream MLA context packing and workspace sizing
  - 说明：MLA chunked 预填充 currently divides workspace equally among requests with cached context. When the per-request share is smaller than one 缓存 block, rounding it down produces a zero-sized chunk. Requiring workspace to scale with max num
- [PR #21048](https://github.com/vllm-project/vllm-ascend/pull/21048) 已合并
  - 中文：【修复】Rebind MiniMax vision aliases to the 16-token mRoPE wrapper
  - 原文：[BugFix] Rebind MiniMax vision aliases to the 16-token mRoPE wrapper
  - 说明：Follow up 20445 on releases/v0.32.0rc. A preloaded Ascend MiniMax-M3 shadow vision module can retain the upstream 32-token vit mrope setup wrapper after worker patch initialization. Rebind both known vision module aliases to the existing As
- [PR #21147](https://github.com/vllm-project/vllm-ascend/pull/21147) 已合并
  - 中文：【Cherry-pick】【releases/v0.32.0rc】【文档】新增 MiniMax-M3.1-Flash MMMU PRO 精度 results (from #21132)
  - 原文：[Cherry-pick][releases/v0.32.0rc][Doc] Add MiniMax-M3.1-Flash MMMU PRO accuracy results (from #21132)
  - 说明：Cherry-pick of PR 21132 onto releases/v0.32.0rc . Original PR: 21132 Original author: @U1stRsouland --- 新增 the supplied MMMU PRO 精度 results to the MiniMax-M3.1-Flash evaluation table so users can reproduce the corresponding evaluatio
- [Issue #21157](https://github.com/vllm-project/vllm-ascend/issues/21157) 进行中
  - 中文：【缺陷】: Native FP8 检查点 silently run as BF16 on A2/A3, which have no FP8 matmul
  - 原文：[Bug]: Native FP8 checkpoints silently run as BF16 on A2/A3, which have no FP8 matmul
  - 说明：Your current environment 🐛 Describe the bug vllm ascend/量化/methods/w8a8/fp8 block.py serves native block-wise FP8 检查点 ( "quant method": "fp8" plus a 权重 block size ). Only Ascend 950 has an FP8 execution path for them,
- [Issue #21156](https://github.com/vllm-project/vllm-ascend/issues/21156) 进行中
  - 中文：夜间 Daily test failure on 2026-11-06 08:00 - please check
  - 原文：Nightly Daily test failure on 2026-11-06 08:00 - please check
  - 说明：The 夜间 Daily test for vllm-ascend reported failures at 08:00 on 2026-11-06. Failed on: a3-2 card-(part 1-5), a2-1 card-(part 6-7), a3-2 card-(part 4-5) Failed 测试用例: - test qwen36 dspark adaptive gdn full to zero graph replay — Fa
- [PR #21125](https://github.com/vllm-project/vllm-ascend/pull/21125) 已合并
  - 中文：【v0.30.0】【文档】Translated Doc files 2026-11-06
  - 原文：[v0.30.0][Doc] Translated Doc files 2026-11-06
  - 说明：Auto-Translation Summary Translated 2 file(s): - <code /home/runner/ work/vllm-ascend/vllm-ascend/docs/source/locale/zh CN/LC MESSAGES/developer guide/evaluation/index.po</code - <code /home/runner/ work/vllm-ascend/vllm-ascend/docs/source/
- [PR #20771](https://github.com/vllm-project/vllm-ascend/pull/20771) 已合并
  - 中文：【Cherry-pick】【releases/v0.32.0rc】【文档】移除 obsolete mooncake LD_LIBRARY_PATH in AscendStore KV 缓存 pool guide (from #20647)
  - 原文：[Cherry-pick][releases/v0.32.0rc][Doc] Remove obsolete mooncake LD_LIBRARY_PATH in AscendStore KV cache pool guide (from #20647)
  - 说明：Cherry-pick of PR 20647 onto releases/v0.32.0rc . Original PR: 20647 Original author: @LeiW777 --- The AscendStore KV 缓存 pool guide asks users to export LD LIBRARY PATH pointing to the mooncake package directory (e.g. /usr/local/Ascend/a
- [PR #20991](https://github.com/vllm-project/vllm-ascend/pull/20991) 已合并
  - 中文：【修复】【AscendStore】Skip empty PP-local 缓存 groups
  - 原文：[BugFix][AscendStore] Skip empty PP-local cache groups
  - 说明：Summary 修复 AscendStore producer writes for pipeline-parallel hybrid-缓存 models when a 缓存 group has no local descriptor on the current PP rank. Problem With PP 启用 together with the AscendStore memcache backend, hybrid-缓存 groups
- [Issue #21134](https://github.com/vllm-project/vllm-ascend/issues/21134) 进行中
  - 中文：【缺陷】: vllm 0.26.0+vllm_ascend 0.19.1rc2.dev 跑 MinerU2.5-Pro-2605-1.2B，结果一直输出不对？
  - 原文：[Bug]: vllm 0.26.0+vllm_ascend 0.19.1rc2.dev 跑 MinerU2.5-Pro-2605-1.2B ，结果一直输出不对？

#### 2026-11-05

- [Issue #21118](https://github.com/vllm-project/vllm-ascend/issues/21118) 进行中
  - 中文：【RFC】: Expand Breakable ACLGraph coverage on Ascend
  - 原文：[RFC]: Expand Breakable ACLGraph coverage on Ascend
  - 说明：Start with the parent RFC's model combinations and check how each 特性 更新 state and passes buffers between segments. Area Coverage and adaptation --- --- MTP and DSpark Exercise graph and eager drafts, multiple draft steps, accepted
- [PR #21059](https://github.com/vllm-project/vllm-ascend/pull/21059) 已合并
  - 中文：【功能】【KV Pool】【v0.32.0rc】支持 GLM RecoverSSM 前缀 reuse with PCP
  - 原文：[Feature][KV Pool][v0.32.0rc] Support GLM RecoverSSM prefix reuse with PCP
  - 说明：Backport 20835 to releases/v0.32.0rc , based on 0bd823c53 . 启用 GLM-5.3-Flash RecoverSSM to reuse aligned 预填充 检查点 through AscendStore and make KDA 池化 follow the model's actual state partitions under PCP. - Export persist
- [PR #21061](https://github.com/vllm-project/vllm-ascend/pull/21061) 已合并
  - 中文：【修复】【v0.32.0】注意力 selection for Minimax-M3 with eagle3 in A3
  - 原文：[BugFix][v0.32.0] Fix attention selection for Minimax-M3 with eagle3 in A3
  - 说明：【】修复 注意力 selection for Minimax-M3 with eagle3 in A3, which shouldn't be fa3. No --- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary
- [PR #21104](https://github.com/vllm-project/vllm-ascend/pull/21104) 已合并
  - 中文：【重构】【Cherry-pick】【releases/v0.32.0rc】【算子】优化 Ascend PLE short conv with SD layout and spec 内核 (from #21058)
  - 原文：[Refactor][Cherry-pick][releases/v0.32.0rc][Ops] Optimize Ascend PLE short conv with SD layout and spec kernel (from #21058)
  - 说明：Cherry-pick of 21058 to releases/v0.32.0rc . Sync the Ascend PLE short-convolution 优化 (SD layout end-to-end + 投机/MTP Triton 内核) to the v0.32.0 release branch. The upstream vLLM repository is not modified; numerical re
- [Issue #21115](https://github.com/vllm-project/vllm-ascend/issues/21115) 进行中
  - 中文：【RFC】: 迁移 compiler fusions to explicit model calls on Ascend
  - 原文：[RFC]: Migrate compiler fusions to explicit model calls on Ascend
  - 说明：Motivation. Ascend uses compiler passes to recognize operator patterns and replace them with 融合 内核. As model-level compilation is 移除, model code must call those 内核 explicitly. Upstream RFC 43224 proposes this migration wit
- [PR #21058](https://github.com/vllm-project/vllm-ascend/pull/21058) 已合并
  - 中文：【算子】【功能】优化 Ascend PLE short conv with SD layout and spec 内核
  - 原文：[Ops][Feature] Optimize Ascend PLE short conv with SD layout and spec kernel
  - 说明：This PR is the follow-up to the Ascend PLE short-convolution work already merged for 预填充 ( 20344), 解码 ( 20643) and block-size tuning ( 20697). Those changes kept the conv-state 缓存 in the backend (DS) layout and still routed specu
- [Issue #21110](https://github.com/vllm-project/vllm-ascend/issues/21110) 进行中
  - 中文：【RFC】: Decouple static 内核 and SuperKernel from model-level compilation
  - 原文：[RFC]: Decouple static kernel and SuperKernel from model-level compilation
  - 说明：Motivation. Ascend currently prepares static 内核 through the model compilation backend. Moving this preparation into graph warmup allows static 内核 and SuperKernel to remain available when model-level compilation is disabled. The to
- [PR #20377](https://github.com/vllm-project/vllm-ascend/pull/20377) 已合并
  - 中文：【算子】【修复】Cast mrope positions to int64 in AscendMRotaryEmbedding
  - 原文：[Ops][BugFix] Cast mrope positions to int64 in AscendMRotaryEmbedding
  - 说明：Fixes a 崩溃 at engine init when a multimodal-RoPE (mRoPE) model runs with 投机解码 (MTP/EAGLE) on Ascend: Root cause: AscendMRotaryEmbedding.forward oot passes positions straight through to torch npu.npu mrope , whose underlyi
- [PR #20726](https://github.com/vllm-project/vllm-ascend/pull/20726) 已合并
  - 中文：【性能】【EPLB】Gather the source-eligibility mask once per forward
  - 原文：[Performance][EPLB] Gather the source-eligibility mask once per forward
  - 说明：AscendEplbLayerState.record load builds the AllGather source mask and gathers it in every MoE layer, but none of its inputs is layer-dependent: num source tokens is read before prepare() , num unpadded tokens and should record tensor are se
- [Issue #21097](https://github.com/vllm-project/vllm-ascend/issues/21097) 进行中
  - 中文：【RFC】: 支持 LeapQuant per-window recurrent-state 量化 for linear 注意力
  - 原文：[RFC]: Support LeapQuant per-window recurrent-state quantization for linear attention
  - 说明：Motivation. vllm-ascend already ships a full GDN / KDA stack ( vllm ascend/ops/gdn.py , ops/triton/fla/ , csrc/注意力/recurrent gated delta rule v310 , plus csrc/moe/chunk gated delta rule fwd h vllm ), and the 支持 matrix lists Qwen3
- [PR #20653](https://github.com/vllm-project/vllm-ascend/pull/20653) 已合并
  - 中文：【修复】【量化】Validate block FP8 shard alignment at 权重 creation
  - 原文：[BugFix][Quantization] Validate block FP8 shard alignment at weight creation
  - 说明：Reject unsupported block-FP8 shard shapes during AscendLinearMethod.create 权重 and AscendFusedMoEMethod.create 权重 , before 加载 权重. A shard that starts inside a 检查点 量化 tile cannot safely be dequantized usin
- [PR #19989](https://github.com/vllm-project/vllm-ascend/pull/19989) 已合并
  - 中文：【重构】【注意力】Move the DSpark draft top-k contract into the SparseFlashMla adapters
  - 原文：[Refactor][Attention] Move the DSpark draft top-k contract into the SparseFlashMla adapters
  - 说明：Removes all 19220 additions from dsa v1.py (functions, fields, buffers, gates, builder branches, forward operator 切换) — the file returns to the pre- 19220 borrow-mode contract, where the draft branch simply passes ori 稀疏 indices and
- [PR #18116](https://github.com/vllm-project/vllm-ascend/pull/18116) 已合并
  - 中文：【功能】【EPLB】支持 w8a8_mxfp8 on main
  - 原文：[Feature][EPLB] Support w8a8_mxfp8 on main
  - 说明：This PR refactors the W8A8 MXFP8 量化 scheme to process and store MoE 权重 and scales as unified per-expert lists (e.g., w13 权重 list ) instead of transposed single tensors. This change ensures compatibility with CANN's tensor
- [PR #21082](https://github.com/vllm-project/vllm-ascend/pull/21082) 已合并
  - 中文：【Cherry-pick】【releases/v0.32.0rc】【文档】新增 MiniMax-M3.1-Flash KV 缓存 pool and 1M-context deployment guides (from #20894)
  - 原文：[Cherry-pick][releases/v0.32.0rc][Doc] Add MiniMax-M3.1-Flash KV cache pool and 1M-context deployment guides (from #20894)
  - 说明：Cherry-pick of PR 20894 onto releases/v0.32.0rc . Original PR: 20894 Original author: @U1stRsouland --- Expand the MiniMax-M3.1-Flash deployment guide with A3 KV 缓存 池化 and a dedicated 1M-token context profile, and correct the existi
- [PR #20704](https://github.com/vllm-project/vllm-ascend/pull/20704) 已合并
  - 中文：【修复】【EPLB】Discard stale expert load on every hardware profile
  - 原文：[Bugfix][EPLB] Discard stale expert load on every hardware profile
  - 说明：refresh model 路由 tables drops the recorded expert load when a committed rearrangement changes the physical-to-logical mapping. The history is keyed by physical slot, so a slot that now holds a different logical expert carries samples f
- [PR #21086](https://github.com/vllm-project/vllm-ascend/pull/21086) 已合并
  - 中文：【Cherry-pick】【releases/v0.30.0】【文档】【杂项】更新 hardware information (from #21079)
  - 原文：[Cherry-pick][releases/v0.30.0][Doc][Misc] update hardware information (from #21079)
  - 说明：Cherry-pick of PR 21079 onto releases/v0.30.0 . Original PR: 21079 Original author: @herizhen --- This PR 更新 the supported hardware information in both the English and Chinese README files to reflect the correct Atlas and Ascend series
- [Issue #21081](https://github.com/vllm-project/vllm-ascend/issues/21081) 进行中
  - 中文：【RFC】: 移除 model-level torch.compile dependency in vLLM Ascend
  - 原文：[RFC]: Remove model-level torch.compile dependency in vLLM Ascend
  - 说明：Motivation. Upstream vLLM is moving away from model-level torch.compile to 减少 startup overhead and make model 优化 easier. RFC 42770 describes how compiler constraints and accumulated abstractions slow model development, while n
- [PR #20861](https://github.com/vllm-project/vllm-ascend/pull/20861) 已合并
  - 中文：【修复】【GLM-5.3-Flash】FP8 adaptation: ignored_layers 前缀 mismatch silently quantizes layers the 检查点 left unquantized
  - 原文：[BugFix][GLM-5.3-Flash] Fix FP8 adaptation: ignored_layers prefix mismatch silently quantizes layers the checkpoint left unquantized
  - 说明：What this fixes Fixes 20860. GLM-5.3-Flash's native FP8 检查点 lists ~1150 layers in 量化 配置.modules to not convert using a flat module-前缀 (e.g. model.layers.3.self attn.索引器.wq b ). vLLM loads this model as a nested
- [PR #14421](https://github.com/vllm-project/vllm-ascend/pull/14421) 已合并
  - 中文：【修复】【KVOffload】对齐 native 缓存 registration with offloading group selection
  - 原文：[BugFix][KVOffload] Align native cache registration with offloading group selection
  - 说明：Use vLLM's get offloading group ids() consistently when registering Ascend native KV offloading caches. Hybrid models can expose KV groups that are not eligible for offloading. Registering every group creates a mismatch with the 调度器's
- [PR #21074](https://github.com/vllm-project/vllm-ascend/pull/21074) 已合并
  - 中文：【Cherry-pick】【releases/v0.30.0】【文档】【杂项】Information supplement for evaluation guides and 新增 release note (from #21004)
  - 原文：[Cherry-pick][releases/v0.30.0][Doc][Misc] Information supplement for evaluation guides and add release note  (from #21004)
  - 说明：Cherry-pick of PR 21004 onto releases/v0.30.0 . Original PR: 21004 Original author: @herizhen --- This PR 更新 the evaluation index page to list and link the available evaluation guides (EvalScope, lm eval, AISBench, and OpenCompass) ins

#### 2026-11-04

- [PR #20935](https://github.com/vllm-project/vllm-ascend/pull/20935) 已合并
  - 中文：【修复】【v0.32.0rc】MiniMax FA3 调度器 API mismatch
  - 原文：[BugFix][v0.32.0rc] Fix MiniMax FA3 scheduler API mismatch
  - 说明：修复 MiniMax FA3 initialization on releases/v0.32.0rc . The existing MiniMax-M3-BF16-A3 夜间 fails while preparing graph-capture 元数据 with TypeError: get 调度器 元数据() got an unexpected keyword argument 'softmax scale' (failed
- [PR #20499](https://github.com/vllm-project/vllm-ascend/pull/20499) 已合并
  - 中文：【功能】【模型】【0.32.0rc】Use native LightningIndexerV2 for QSA
  - 原文：[Feature][Model][0.32.0rc] Use native LightningIndexerV2 for QSA
  - 说明：< html < body </body </html - vLLM主要：
- [PR #20932](https://github.com/vllm-project/vllm-ascend/pull/20932) 已合并
  - 中文：【性能】Vectorize QSA RMSNorm MRoPE 缓存 loads
  - 原文：[Performance] Vectorize QSA RMSNorm MRoPE cache loads
  - 说明：Summary - vectorize the QSA RMSNorm + MRoPE Triton launch with a 2D (token, head) grid - replace scalar, lane-dependent MRoPE 缓存 addressing with contiguous vector loads for the temporal, height, and width 缓存 rows, followed by lane-wis
- [PR #20699](https://github.com/vllm-project/vllm-ascend/pull/20699) 已合并
  - 中文：【v0.32.0】【性能】Vectorize QSA RMSNorm MRoPE 缓存 loads
  - 原文：[v0.32.0][Performance] Vectorize QSA RMSNorm MRoPE cache loads
  - 说明：Summary - vectorize the QSA RMSNorm + MRoPE Triton launch with a 2D (token, head) grid - replace scalar, lane-dependent MRoPE 缓存 addressing with contiguous vector loads for the temporal, height, and width 缓存 rows, followed by lane-wis
- [PR #20942](https://github.com/vllm-project/vllm-ascend/pull/20942) 已合并
  - 中文：【v0.32.0】【注意力】【修复】Match upstream cached Mamba tail guard
  - 原文：[v0.32.0][Attention][BugFix] Match upstream cached Mamba tail guard
  - 说明：On vLLM v0.32.0, Mamba 对齐-mode 前缀 hits can re-register a tail that is already cached at the same token boundary. That marks committed state as newly produced in cached blocks this step , so the next sibling request is deferred and a
- [Issue #20963](https://github.com/vllm-project/vllm-ascend/issues/20963) 进行中
  - 中文：FULL_AND_PIECEWISE 图模式 adds ~5ms host-side dispatch overhead per 预填充 step on A3&A2(vllm-ascend 0.23)
  - 原文：FULL_AND_PIECEWISE graph mode adds ~5ms host-side dispatch overhead per prefill step on A3&A2(vllm-ascend 0.23)
- [Issue #18354](https://github.com/vllm-project/vllm-ascend/issues/18354) 已关闭
  - 中文：【缺陷】: A3上使用vllm_ascend 0.20.2rc1版本部署讯飞客户自研星火模型出现rope算子报错ub overflow
  - 原文：[Bug]: A3上使用vllm_ascend 0.20.2rc1版本部署讯飞客户自研星火模型出现rope算子报错ub overflow
- [Issue #20957](https://github.com/vllm-project/vllm-ascend/issues/20957) 进行中
  - 中文：【RFC】: KV 缓存 Pool E2E Watch — PR Gate + 夜间 Depth
  - 原文：[RFC]: KV Cache Pool E2E Watch — PR Gate + Nightly Depth
  - 说明：TL;DR - 新增 a test-only KV 缓存 Pool E2E watch for vLLM-Ascend. - PR : 12 cases (11 active in the first batch, 1 parked), each ≤15 minutes, parallel jobs. - 夜间 : 13 cases, each ≤1 hour, parallel jobs. - 共享 assertions for startup,
- [PR #20939](https://github.com/vllm-project/vllm-ascend/pull/20939) 已合并
  - 中文：【修复】【持续集成】恢复 full checkout for Gitleaks PR scanning
  - 原文：[BugFix][CI] Restore full checkout for Gitleaks PR scanning
  - 说明：恢复 fetch-depth: 0 for the vllm-ascend checkout in the pre-commit job. The shallow checkout introduced by 20416 omits the base branch ref and history 必填 by the Gitleaks PR scan 启用 in 20487, causing CI to fail before scanning
- [PR #18426](https://github.com/vllm-project/vllm-ascend/pull/18426) 已合并
  - 中文：【重构】【模型】Use CANN GBSA for MiniMax-M3 稀疏 注意力
  - 原文：[Refactor][Model] Use CANN GBSA for MiniMax-M3 sparse attention
  - 说明：1. Function Use CANN GBSA for MiniMax-M3/M3.1 稀疏 注意力, reuse compatible GBSA 元数据 across 稀疏 layers, and 融合 valid-block filtering, valid counts, ascending block-ID ordering and int32 output into 解码 TopK 后处理.
- [PR #20642](https://github.com/vllm-project/vllm-ascend/pull/20642) 已合并
  - 中文：【算子】【功能】Ascend-friendly Triton PLE 解码 short convolution
  - 原文：[Ops][Feature] Add Ascend-friendly Triton PLE decode short convolution
  - 说明：This is a 性能 优化 for Qwen PLE 解码 on Ascend. In one 解码 step, each request contributes one token; a launch handles the full batch of requests. The 内核 applies the dilated depthwise short convolution, SiLU, optiona
- [PR #20643](https://github.com/vllm-project/vllm-ascend/pull/20643) 已合并
  - 中文：【算子】【功能】Ascend-friendly Triton 解码 内核 for Qwen PLE short convolution
  - 原文：[Ops][Feature] Add Ascend-friendly Triton decode kernel for Qwen PLE short convolution
  - 说明：This is a 性能 优化 for Qwen PLE 解码 on Ascend. In one 解码 step, each request contributes one token; a launch handles the full batch of requests. The 内核 applies the dilated depthwise short convolution, SiLU, optiona
- [PR #20908](https://github.com/vllm-project/vllm-ascend/pull/20908) 已合并
  - 中文：【v0.32.0rc】【持续集成】【功能】Cherry-pick image build information publication
  - 原文：[v0.32.0rc][CI][Feature] Cherry-pick image build information publication
  - 说明：Backport the merged build-information publication work to releases/v0.32.0rc so downstream consumers can retrieve published image 元数据 from OBS. Cherry-picked PRs, in 合并 order: - 20701 — Publish image build information for downstream
- [PR #19997](https://github.com/vllm-project/vllm-ascend/pull/19997) 已合并
  - 中文：【功能】启用 FlashMLA for GLM DSpark MLA
  - 原文：[Feature] Enable FlashMLA for GLM DSpark MLA
  - 说明：启用 FlashMLA for GLM DSpark’s MLA draft when the target uses SFA. Use PROLOG V3 for compatible context KV writes and skip device-to-host 序列-length 拷贝 when FlashMLA is selected, while preserving FIA fallback and DCP behavior. Do
- [PR #20777](https://github.com/vllm-project/vllm-ascend/pull/20777) 已合并
  - 中文：【修复】对齐 ACL graph calls without forward context
  - 原文：[BugFix] Align ACL graph calls without forward context
  - 说明：对齐 ACLGraphWrapper with upstream vLLM: when no ForwardContext is available, call the underlying runnable directly before reading the context. This bypasses the internal wrapper's capture/replay while device operations can still participa
- [PR #20791](https://github.com/vllm-project/vllm-ascend/pull/20791) 已合并
  - 中文：【v0.32.0】【持续集成】禁用 static 内核 for GLM-5.3-Flash A3 PD 夜间
  - 原文：[v0.32.0][CI] Disable static kernels for GLM-5.3-Flash A3 PD nightly
  - 说明：Backport 20731 to releases/v0.32.0rc . 移除 启用 static 内核: true from the 解码 template of the GLM-5.3-Flash-W8A8-130k-PD 夜间. Static and super 内核 default to false when this opt-in is omitted. Keep 启用 npugraph ex: tru
- [Issue #20929](https://github.com/vllm-project/vllm-ascend/issues/20929) 进行中
  - 中文：【缺陷】: AscendStoreConnector(memcache) 驱动版本校验应前移到权重加载之前，避免失败发现过晚
  - 原文：[Bug]: AscendStoreConnector(memcache) 驱动版本校验应前移到权重加载之前，避免失败发现过晚
- [PR #20176](https://github.com/vllm-project/vllm-ascend/pull/20176) 已合并
  - 中文：【修复】【KV 缓存】Scale explicit budgets for private multi-group allocations
  - 原文：[BugFix][KV Cache] Scale explicit budgets for private multi-group allocations
  - 说明：Fixes 20165. An explicit KV 缓存 显存 bytes value, including one 恢复 from a startup plan, bypasses the multi-group budget correction used after profiling. For configurations retaining private per-layer storage, the planner can conse
- [PR #20747](https://github.com/vllm-project/vllm-ascend/pull/20747) 已合并
  - 中文：【修复】【持续集成】夜间 profile benchmark argument 解析
  - 原文：[BugFix][CI] Fix nightly profile benchmark argument parsing
  - 说明：修复 a 回退 introduced by 17634. Its new --vllm-ref branch separated --profile-benchmark-names from its PENDING OPTION reset, causing valid commands to fail with requires a value . 恢复 the reset immediately after consuming the benc
- [PR #20724](https://github.com/vllm-project/vllm-ascend/pull/20724) 已合并
  - 中文：【重构】Reuse upstream pool bookkeeping in CaMemAllocator
  - 原文：[Refactor] Reuse upstream pool bookkeeping in CaMemAllocator
  - 说明：Drop the duplicated allocator and pools state and release pools() override now that the pinned vLLM (544f182d9f) provides both on CuMemAllocator . 切换 to upstream's per-tag pool list ( allocator and pools.setdefault(tag, []).append(data)

#### 2026-11-03

- [PR #20735](https://github.com/vllm-project/vllm-ascend/pull/20735) 已合并
  - 中文：【修复】【v0.32.0rc】GLM RecoverSSM 元数据 on PCP producers
  - 原文：[BugFix][v0.32.0rc] Fix GLM RecoverSSM metadata on PCP producers
  - 说明：Backport 20723 to releases/v0.32.0rc : allow TP1/PCP 1 GLM RecoverSSM Mooncake 预填充 producers, preserve the original PCP context, and register each merged step once at the common return path. Refs 15665. Related/overlapping work: 20551.
- [PR #20723](https://github.com/vllm-project/vllm-ascend/pull/20723) 已合并
  - 中文：【修复】GLM RecoverSSM 元数据 on PCP 预填充 producers
  - 原文：[BugFix] Fix GLM RecoverSSM metadata on PCP prefill producers
  - 说明：Allow GLM RecoverSSM on TP=1, PCP 1 Mooncake 预填充 producers. Preserve the original PCP context in KDA 元数据 and register the merged batch with RecoverSSM before returning, so step bookkeeping uses global request 元数据. Refs 15665.
- [PR #20450](https://github.com/vllm-project/vllm-ascend/pull/20450) 已合并
  - 中文：【功能】【v0.32.0rc】启用 GLM-5.3-Flash NoPE MLA Prolog V3
  - 原文：[Feature][v0.32.0rc] Enable GLM-5.3-Flash NoPE MLA Prolog V3
  - 说明：Backport 20332 to releases/v0.32.0rc . Automatically select torch npu.npu mla prolog v3 for eligible GLM-5.3-Flash NoPE layers on A2/A3 with dynamic W8A8 projections and INT8 KV 缓存. Preserve the native BF16 索引器 projection, pass rank-
- [PR #20691](https://github.com/vllm-project/vllm-ascend/pull/20691) 已合并
  - 中文：【功能】【模型】【v0.32.0rc】Backport MiniMax M3.1 Flash DSpark 支持
  - 原文：[Feature][Model][v0.32.0rc] Backport MiniMax M3.1 Flash DSpark support
  - 说明：Backport 20167 to releases/v0.32.0rc from source commit 5eb04668c8290aaec7667fc5b1c5c2640d176d1b , after removing its docs/ Markdown changes. Release base: ec8ab7ac9f26c258bdd4eda0ad041973976057fd . This carries native MiniMax M3.1 Flash DS
- [PR #20783](https://github.com/vllm-project/vllm-ascend/pull/20783) 已合并
  - 中文：【修复】Revert INT8 GLM-5.3-Flash KPool 支持 from main (#20567)
  - 原文：[BugFix] Revert INT8 GLM-5.3-Flash KPool support from main (#20567)
  - 说明：【False/True】Revert 20567 from main . Its new INT8 PoolKeyIndexer operator tests fail in A3 夜间 with the current ops-transformer 9.2.1 dependency: both test int8 operator reads managed pages fail when the operator rejects the INT8 quant
- [PR #20770](https://github.com/vllm-project/vllm-ascend/pull/20770) 已合并
  - 中文：【修复】【v0.32.0rc】rotary mode in the non-Triton RoPE backend
  - 原文：[BugFix][v0.32.0rc] Fix rotary mode in the non-Triton RoPE backend
  - 说明：Backport the RoPE 修复 from 20686 to releases/v0.32.0rc . The non-Triton GPT-J style RoPE path passes rotary mode="交错" to torch npu.npu mrope , which rejects it with: rotary mode only 支持 half or interleave Replace "交错"
- [PR #20686](https://github.com/vllm-project/vllm-ascend/pull/20686) 已合并
  - 中文：【修复】DFlash sampler test 配置 and RoPE fallback mode
  - 原文：[BugFix] Fix DFlash sampler test configuration and RoPE fallback mode
  - 说明：修复 the five failures in test dflash candidate sampler.py reported by this 夜间 run. - Explicitly pass use entropy verify=False in the standalone conditional-distribution test. After 19460, omitting this argument reads global Ascend conf
- [PR #20680](https://github.com/vllm-project/vllm-ascend/pull/20680) 已合并
  - 中文：【算子】【修复】Adjust PLE block size and 更新 Triton PLE tests
  - 原文：[Ops][BugFix] Adjust PLE block size and update Triton PLE tests
  - 说明：Backport the 512-channel PLE 预填充 tile and 夜间 回退 coverage from 20697 to releases/v0.32.0rc . The original 2048-channel tile 导致 the A3 9362 夜间 compile failure (384 KiB UB 必填, 192 KiB available). Use BLOCK C=512
- [PR #20697](https://github.com/vllm-project/vllm-ascend/pull/20697) 已合并
  - 中文：【算子】【修复】Adjust PLE block size and 更新 Triton PLE tests
  - 原文：[Ops][BugFix] Adjust PLE block size and update Triton PLE tests
  - 说明：【slot, channel, window】Supersedes 20679. Set the Qwen4Exp PLE 预填充 Triton channel tile to 512 on every Ascend device , removing the A3-only 128-channel selection. The operator consumes token activations, a convolution-state view, four-t
- [PR #18546](https://github.com/vllm-project/vllm-ascend/pull/18546) 已合并
  - 中文：【重构】【算子】Replace custom MoeGatingTopK with CANN native operator
  - 原文：[Refactor][Ops] Replace custom MoeGatingTopK with CANN native operator
  - 说明：Submit the MoeGatingTopK migration separately from 16731, where it was reverted before the quantized Lightning 索引器 migration merged. - Use torch npu.npu moe gating top k in the base device adaptor, mapping bias opt to bias and retaining
- [PR #20348](https://github.com/vllm-project/vllm-ascend/pull/20348) 已合并
  - 中文：【重构】Separate AscendStore pool 调度器 modes
  - 原文：[Refactor] Separate AscendStore pool scheduler modes
  - 说明：- Extract 共享 AscendStore pool 调度器 request tracking, 元数据, and 缓存 lifecycle into BaseKVPoolScheduler . - Keep block-key and layerwise behavior in KVPoolScheduler and LayerwiseKVPoolScheduler , respectively. - Move in-flight
- [PR #20605](https://github.com/vllm-project/vllm-ascend/pull/20605) 已合并
  - 中文：【修复】【KV Pool】Ack unallocated Mooncake V2 prefills and rebuild truncated hashes
  - 原文：[BugFix][KV Pool] Ack unallocated Mooncake V2 prefills and rebuild truncated hashes
  - 说明：This PR fixes two Mooncake KV Pool bugs. The peer-disconnect commit is cherry-picked from 20163 ( 40193cd5ed9d99948d42bc6dc10b0452c692ab09 , author @yisususu) so both changes are reviewed and merged together. 1. Acknowledge unallocated remo
- [PR #20710](https://github.com/vllm-project/vllm-ascend/pull/20710) 已合并
  - 中文：【Cherry-pick】【releases/v0.32.0rc】【功能】【MRV2】启用 V2 Model Runner for Encoder-Only/Encoder-Hybrid Models (from #19196)
  - 原文：[Cherry-pick][releases/v0.32.0rc][Feature][MRV2] Enable V2 Model Runner for Encoder-Only/Encoder-Hybrid Models (from #19196)
  - 说明：Cherry-pick of PR 19196 onto releases/v0.32.0rc . Original PR: 19196 Original author: @zouzy5137 --- This pull request enables Model Runner V2 (MRv2) by default for 池化 models by removing them from the V2 blacklist, and introduces suppo
- [PR #20694](https://github.com/vllm-project/vllm-ascend/pull/20694) 已合并
  - 中文：【修复】恢复 Ascend FP8 worker dtype when registration leaves raw bytes
  - 原文：[BugFix] Restore Ascend FP8 worker dtype when registration leaves raw bytes
  - 说明：修复 worker startup when vLLM exposes register KV 缓存 dtype but the FP8 mapping still uses the upstream torch.uint8 storage dtype. The existing patch treats API availability as proof that an Ascend handler has registered, leaving Ascend in
- [PR #20446](https://github.com/vllm-project/vllm-ascend/pull/20446) 已合并
  - 中文：【修复】Apply draft post-processing for DFlash2 on Model Runner V2
  - 原文：[BugFix] Apply draft post-processing for DFlash2 on Model Runner V2
  - 说明：With Model Runner V2, DFlash2 draft acceptance can collapse to nearly zero when the target uses QuaRot. AscendDFlashSpeculator.load draft model , also inherited by AscendDFlash2Speculator , returns immediately after upstream 加载 and ski
- [PR #20689](https://github.com/vllm-project/vllm-ascend/pull/20689) 已合并
  - 中文：【修复】【注意力】Defer MXFP8 and INT8 MLA projection NZ conversion
  - 原文：[BugFix][Attention] Defer MXFP8 and INT8 MLA projection NZ conversion
  - 说明：Port 18893's MXFP8 draft PROLOG V3 修复 and 回退 coverage to releases/v0.32.0rc , and extend deferred NZ conversion to W8A8/W8A8 DYNAMIC projections for the Kimi-K2.6 A3 加载 failure after 20552. Keep combined projections in ND unti
- [PR #20732](https://github.com/vllm-project/vllm-ascend/pull/20732) 已合并
  - 中文：【修复】【注意力】DCP Q replication fallback for SFA and LoRA
  - 原文：[BugFix][Attention] Fix DCP Q replication fallback for SFA and LoRA
  - 说明：This PR changes the behavior of use dcp q replicate when SFA (稀疏 Fine-grained 注意力) or LoRA is 启用. Instead of raising a ValueError and crashing, it now logs a warning once and safely disables Q replication by returning False .
- [PR #20433](https://github.com/vllm-project/vllm-ascend/pull/20433) 已合并
  - 中文：【性能】Shard GLM-5.3-Flash KPool 索引器 预填充 query rows across TP ranks
  - 原文：[Performance] Shard GLM-5.3-Flash KPool indexer prefill query rows across TP ranks
  - 说明：【性能】【GLM-5.3-Flash】Ports the 优化 of vLLM 54951 ( Shard long-context 索引器 预填充 rows across TP ) to the vllm-ascend GLM-5.3-Flash KPool 索引器 path. Like the upstream, the sharding engages automatically under the gate below
- [PR #20745](https://github.com/vllm-project/vllm-ascend/pull/20745) 已合并
  - 中文：【v0.30.0】【文档】Translated Doc files 2026-11-03
  - 原文：[v0.30.0][Doc] Translated Doc files 2026-11-03
  - 说明：Auto-Translation Summary Translated 4 file(s): - <code /home/runner/ work/vllm-ascend/vllm-ascend/docs/source/locale/zh CN/LC MESSAGES/getting started/installation/install vllm ascend.inc.po</code - <code /home/runner/ work/vllm-ascend/vllm
- [PR #20407](https://github.com/vllm-project/vllm-ascend/pull/20407) 已合并
  - 中文：【修复】native MLA Q_B packing for padded heads
  - 原文：[BugFix] Fix native MLA Q_B packing for padded heads
  - 说明：Forward-port 20287 from releases/v0.30.0 to main . Native MLA Q B 权重 become a 2-D view of a padded 3-D base when the local head count requires padding. .contiguous() can retain that storage layout, causing incorrect Q NoPE and Q RoPE o

#### 2026-11-02

- [Issue #20692](https://github.com/vllm-project/vllm-ascend/issues/20692) 进行中
  - 中文：【RFC】: Holemiss — Ascend Implementation of Selective KV and Recurrent-State Recovery
  - 原文：[RFC]: Holemiss — Ascend Implementation of Selective KV and Recurrent-State Recovery
  - 说明：Motivation. Companion discussion: vLLM core RFC 65172 — Holemiss: Selective Recovery of Partially Lost LLM 缓存 State. This issue focuses on what vLLM-Ascend would own and implement . The recovery transaction, the minimum 调度器–Worker
- [Issue #20690](https://github.com/vllm-project/vllm-ascend/issues/20690) 进行中
  - 中文：【缺陷】: Padded MTP partial 预填充 uses the 序列-tail token as its fallback
  - 原文：[Bug]: Padded MTP partial prefill uses the sequence-tail token as its fallback
  - 说明：In the V1 padded 投机-解码 path, a discarded partial-预填充 request can still contribute valid rows to the drafter's first pass. Its fallback next token is currently taken from the end of the complete known 序列 ( N - 1 ), r
- [PR #20662](https://github.com/vllm-project/vllm-ascend/pull/20662) 已合并
  - 中文：【v0.32.0】【算子】【修复】QSFA static 内核 tiling access on A2/A3 and A5
  - 原文：[v0.32.0][Ops][BugFix] Fix QSFA static kernel tiling access on A2/A3 and A5
  - 说明：Backport of 20660 to releases/v0.32.0rc . QSFA's arch22 and arch35 dispatch paths directly dereference the 内核 tiling argument as a GM pointer before selecting the optional-RoPE/address-precomputation specialization. With statically comp
- [PR #20660](https://github.com/vllm-project/vllm-ascend/pull/20660) 已合并
  - 中文：【算子】【修复】QSFA static 内核 tiling access on A2/A3 and A5
  - 原文：[Ops][BugFix] Fix QSFA static kernel tiling access on A2/A3 and A5
  - 说明：QSFA's arch22 and arch35 dispatch paths directly dereference the 内核 tiling argument as a GM pointer before selecting the optional-RoPE/address-precomputation specialization. With statically compiled 内核, that argument must be 解码
- [PR #20625](https://github.com/vllm-project/vllm-ascend/pull/20625) 已合并
  - 中文：【功能】【PD】【v0.32.0rc】支持 component-aware Mooncake layerwise 缓存 transfer
  - 原文：[Feature][PD][v0.32.0rc] Support component-aware Mooncake layerwise cache transfer
  - 说明：Backport of 20152 to releases/v0.32.0rc , including all three commits from the main PR. Mooncake layerwise transfer assumes uniform 缓存 groups and packed block layouts, which cannot represent the hybrid 缓存 components used by GLM-5.3-Fl
- [PR #20207](https://github.com/vllm-project/vllm-ascend/pull/20207) 已合并
  - 中文：【修复】Record 前缀缓存 stats in BalanceScheduler
  - 原文：[BugFix] Record prefix cache stats in BalanceScheduler
  - 说明：Fixes 20211 BalanceScheduler forks 调度器.schedule() , but it only records local 前缀-缓存 statistics on the mamba + connector fast path. For full-注意力 models (Qwen3, DeepSeek, GLM, …) the branch never runs, so vllm:前缀缓存
- [PR #20544](https://github.com/vllm-project/vllm-ascend/pull/20544) 已合并
  - 中文：【性能】【KV Pool】Make 调度器 and lease 元数据 scans linear
  - 原文：[Performance][KV Pool] Make scheduler and lease metadata scans linear
  - 说明：AscendStore repeatedly scans Python lists while preparing 调度器 元数据 and layerwise loads. With many active requests or a long 恢复 前缀, this adds quadratic CPU preparation work. - Filter unfinished requests in expected O(U +
- [Issue #20677](https://github.com/vllm-project/vllm-ascend/issues/20677) 进行中
  - 中文：【缺陷】: 混合 GDN（mamba 对齐）+ MTP + async 调度下出现静默输出错误：defer_block_free 调度暂停导致 accepted 状态地址丢失
  - 原文：[Bug]: 混合 GDN（mamba align）+ MTP + async 调度下出现静默输出错误：defer_block_free 调度暂停导致 accepted 状态地址丢失
- [PR #20239](https://github.com/vllm-project/vllm-ascend/pull/20239) 已合并
  - 中文：【性能】【310P】启用 共享-expert multistream 重叠
  - 原文：[Performance][310P] Enable shared-expert multistream overlap
  - 说明：启用 the existing 共享-expert multistream option on Ascend 310P and submit 共享-expert work early enough to 重叠 routed MoE execution. - Keep the registered 310P linear-wrapper MLP path so input scales, offsets, 量化 bias,
- [PR #20442](https://github.com/vllm-project/vllm-ascend/pull/20442) 已合并
  - 中文：【xlite】【修复】static 量化 classification for 共享 layers in DSA 索引器
  - 原文：[xlite][BugFix] Fix static quantization classification for shared layers in DSA indexer
  - 说明：Problem. In DSA (long-序列 / 稀疏 注意力) models, the static-vs-dynamic 量化 check is incomplete: 索引器 权重 padded with dummy placeholders were misjudged as statically quantized. Why the 索引器 needs a mask. DSA mark
- [PR #19196](https://github.com/vllm-project/vllm-ascend/pull/19196) 已合并
  - 中文：【功能】【MRV2】启用 V2 Model Runner for Encoder-Only/Encoder-Hybrid Models
  - 原文：[Feature][MRV2] Enable V2 Model Runner for Encoder-Only/Encoder-Hybrid Models
  - 说明：This pull request enables Model Runner V2 (MRv2) by default for 池化 models by removing them from the V2 blacklist, and introduces 支持 for encoder-only models on 910 Ascend and 310P hardware; hybrid-encoder models (such as ColQwen3.5
- [PR #20027](https://github.com/vllm-project/vllm-ascend/pull/20027) 已合并
  - 中文：【重构】【算子】Isolate V1 Triton operators and flatten V2 paths
  - 原文：[Refactor][Ops] Isolate V1 Triton operators and flatten V2 paths
  - 说明：Separate legacy Model Runner V1 Triton operators so V1 can be retired independently, and use the main Triton package for V2 operators. - Move seven V1-only implementation/helper modules into ops/triton/v1/ , with their documents under v1/do
- [PR #20597](https://github.com/vllm-project/vllm-ascend/pull/20597) 已合并
  - 中文：【注意力】【修复】Use layer name instead of draft model flag in ForwardContext for QSA
  - 原文：[Attention][BugFix] Use layer name instead of draft model flag in ForwardContext for QSA
  - 说明：修复 Qwen4Exp MTP draft QSA projection selection on releases/v0.32.0rc . The PP/SP implementation from 20443 checks ForwardContext.is draft model , but that field is absent. As a result the MTP draft takes the target 融合 norm + MRoPE proje
- [PR #20459](https://github.com/vllm-project/vllm-ascend/pull/20459) 已合并
  - 中文：【重构】【KV Pool】移除 legacy AscendStore layerwise lookup fallback
  - 原文：[Refactor][KV Pool] Remove legacy AscendStore layerwise lookup fallback
  - 说明：Follow up on 20140 by removing the legacy layerwise lookup fallback from AscendStore. Mooncake uses block-key lookup and Memcache uses GVA lookup; the remaining fallback requires a 调度器 batch is exist interface that does not provide a
- [PR #20473](https://github.com/vllm-project/vllm-ascend/pull/20473) 已合并
  - 中文：【Cherry-pick】【releases/v0.32.0rc】【修复】支持 GLM-5.3-Flash PCP with torch.compile (from #20281)
  - 原文：[Cherry-pick][releases/v0.32.0rc][Bugfix] Support GLM-5.3-Flash PCP with torch.compile (from #20281)
  - 说明：Cherry-pick of PR 20281 onto releases/v0.32.0rc . Original PR: 20281 Original author: @bnbryan --- 修复 GLM-5.3-Flash 预填充 failures when combining PCP with torch.compile . 元数据-free profiling skips KDA's PCP gather/恢复 branches. C
- [PR #20586](https://github.com/vllm-project/vllm-ascend/pull/20586) 已合并
  - 中文：【修复】支持 GLM-5.3-Flash PCP with torch.compile
  - 原文：[Bugfix] Support GLM-5.3-Flash PCP with torch.compile
  - 说明：修复 GLM-5.3-Flash 预填充 failures when combining PCP with torch.compile . 元数据-free profiling skips KDA's PCP gather/恢复 branches. Compiled execution then passes rank-local tensors to KDA while the request 元数据 describes global
- [PR #20506](https://github.com/vllm-project/vllm-ascend/pull/20506) 已合并
  - 中文：【修复】【Ascend】Unify MegaMoe 配置 checks across A3 and A5 (v0.32.0rc backport)
  - 原文：[BugFix][Ascend] Unify MegaMoe config checks across A3 and A5 (v0.32.0rc backport)
  - 说明：【修复】【Ascend】【修复】【Ascend】Backport of 20430 to the releases/v0.32.0rc branch. Cherry-picked commits (clean, no conflicts): - 116eda353 Unify MegaMoe 配置 checks across A3 and A5 - cb4bff1af 移除 shadowed HardwareCapability impor
- [PR #20430](https://github.com/vllm-project/vllm-ascend/pull/20430) 已合并
  - 中文：【修复】【Ascend】Unify MegaMoe 配置 checks across A3 and A5
  - 原文：[BugFix][Ascend] Unify MegaMoe config checks across A3 and A5
  - 说明：What this PR does Unify the duplicated MegaMoe 配置 validation paths ( is megamoe supported by 配置 for A3 and is a5 megamoe supported by 配置 for A5) into a single check, in preparation for unifying the A3/A5 operator 支持 scopes.
- [Issue #20641](https://github.com/vllm-project/vllm-ascend/issues/20641) 进行中
  - 中文：【RFC】: 夜间 Test Taint Removal and Unified Scheduling Refactor
  - 原文：[RFC]: Nightly Test Taint Removal and Unified Scheduling Refactor
  - 说明：Motivation. those nodes, so PR CI cannot use the same capacity. This creates several problems: - Low resource utilization : dedicated 夜间 nodes stay idle outside the 夜间 window. - Fragile cleanup : the external 调度器 applies tai
- [PR #19601](https://github.com/vllm-project/vllm-ascend/pull/19601) 已合并
  - 中文：【算子】【修复】Clear peeked request 缓存 when removing request from batch job aware 调度器
  - 原文：[Ops][BugFix] Clear peeked request cache when removing request from batch job aware scheduler
  - 说明：The batch-job-aware waiting queue caches the request returned by peek request() . Removing that request does not invalidate peeked , so a subsequent peek or pop can return a cancelled request. Clear peeked when the cached request is success

#### 2026-11-01

- [Issue #6434](https://github.com/vllm-project/vllm-ascend/issues/6434) 已关闭
  - 中文：【RFC】: MOE fusion operator 优化
  - 原文：[RFC]: MOE fusion operator optimization
  - 说明：Motivation. The MOE module is becoming increasingly stable. The fusion operators related to MOE can greatly 改进 the final 性能. However, some parts of the fusion operators are still incomplete. For example, the BF16 format is not
- [PR #20507](https://github.com/vllm-project/vllm-ascend/pull/20507) 已合并
  - 中文：【功能】【量化】Backport ModelSlim W4A8 dynamic Linear 支持 to v0.32.0rc
  - 原文：[Feature][Quantization] Backport ModelSlim W4A8 dynamic Linear support to v0.32.0rc
  - 说明：Backport the ModelSlim W4A8 dynamic Linear 支持 from 20469 to the releases/v0.32.0rc branch. This enables ModelSlim W4A8 DYNAMIC Linear layers with symmetric per-channel INT4 权重 and dynamic per-token INT8 activations, including pack
- [PR #20548](https://github.com/vllm-project/vllm-ascend/pull/20548) 已合并
  - 中文：【算子】【功能】Ascend inference 支持 for Qwen4Exp PLE INT8 quantized tables
  - 原文：[Ops][Feature] Add Ascend inference support for Qwen4Exp PLE INT8 quantized tables
  - 说明：Backport 20310 to releases/v0.32.0rc for Qwen4Exp PLE n-gram embedding tables exported as INT8 SYM with FP32 scales per 32 values. The change selects the Ascend INT8 PLE embedding method from ModelSlim 量化 markers, loads scale shar
- [PR #20540](https://github.com/vllm-project/vllm-ascend/pull/20540) 已合并
  - 中文：【修复】【v0.32.0rc】SwigluGroupQuant MXFP tail store masks
  - 原文：[BugFix][v0.32.0rc] Fix SwigluGroupQuant MXFP tail store masks
  - 说明：修复 the MXFP output-store tail masks in SwigluGroupQuant. Four consecutive packed stores previously used four independent remaining-column counters, so each store treated the same tail as valid and could overwrite adjacent rows or UB buffer
- [PR #20539](https://github.com/vllm-project/vllm-ascend/pull/20539) 已合并
  - 中文：【修复】SwigluGroupQuant MXFP tail store masks
  - 原文：[BugFix] Fix SwigluGroupQuant MXFP tail store masks
  - 说明：修复 the MXFP output-store tail masks in SwigluGroupQuant. Four consecutive packed stores previously used four independent remaining-column counters, so each store treated the same tail as valid and could overwrite adjacent rows or UB buffer
- [PR #20469](https://github.com/vllm-project/vllm-ascend/pull/20469) 已合并
  - 中文：【功能】【量化】ModelSlim W4A8 dynamic Linear 支持
  - 原文：[Feature][Quantization] Add ModelSlim W4A8 dynamic Linear support
  - 说明：ModelSlim 检查点 can mark ordinary Linear layers as W4A8 DYNAMIC , but the Ascend backend currently registers this INT format only for 融合 MoE. This adds Linear 支持 for symmetric per-channel INT4 权重 and dynamic per-token INT
- [PR #20512](https://github.com/vllm-project/vllm-ascend/pull/20512) 已合并
  - 中文：【修复】GLM-5.3-Flash PCP query, 解码 and packed KV layouts
  - 原文：[BugFix] Fix GLM-5.3-Flash PCP query, decode and packed KV layouts
  - 说明：Keep KPool query/index rows aligned with SFA, reserve both PCP 预填充 chunks in NoPE 元数据, 遵循 KPool's replicated-解码 policy, and 对齐 packed-KV stores with their deduplicated payload. KPool 解码 remains replicated; no new PCP
- [PR #20513](https://github.com/vllm-project/vllm-ascend/pull/20513) 已合并
  - 中文：【修复】【v0.32.0rc】GLM-5.3-Flash PCP query, 解码 and packed KV layouts
  - 原文：[BugFix][v0.32.0rc] Fix GLM-5.3-Flash PCP query, decode and packed KV layouts
  - 说明：Backport 20512 to releases/v0.32.0rc : 对齐 KPool query rows, NoPE 元数据 capacity, replicated 解码 and packed-KV slot mapping. KPool 解码 remains replicated; no new PCP mode or 配置 is introduced. The runner now calls Ascen
- [PR #20503](https://github.com/vllm-project/vllm-ascend/pull/20503) 已合并
  - 中文：【Cherry-pick】【releases/v0.32.0rc】【功能】【GLM-5.3-Flash】启用 static 内核 compilation for GLM-5.3-Flash (from #20209)
  - 原文：[Cherry-pick][releases/v0.32.0rc][Feature][GLM-5.3-Flash] Enable static kernel compilation for GLM-5.3-Flash (from #20209)
  - 说明：Cherry-pick of PR 20209 onto releases/v0.32.0rc . Original PR: 20209 Original author: @bnbryan --- Three fixes that make static 内核 compilation work for GLM-5.3-Flash, all behind 启用 static 内核 : - 解码 shape range. compute decod
- [PR #20209](https://github.com/vllm-project/vllm-ascend/pull/20209) 已合并
  - 中文：【功能】【GLM-5.3-Flash】启用 static 内核 compilation for GLM-5.3-Flash
  - 原文：[Feature][GLM-5.3-Flash] Enable static kernel compilation for GLM-5.3-Flash
  - 说明：Three fixes that make static 内核 compilation work for GLM-5.3-Flash, all behind 启用 static 内核 : - 解码 shape range. compute 解码 cudagraph batch sizes used the raw cudagraph capture sizes , but the V2 uniform-解码 routine ro
- [PR #20516](https://github.com/vllm-project/vllm-ascend/pull/20516) 已合并
  - 中文：【功能】ETP 支持 for Qwen4Exp PLE embedding table sharding
  - 原文：[Feature] Add ETP support for Qwen4Exp PLE embedding table sharding
  - 说明：Backport of 20276 to the v0.32.0rc release lane. 新增 Engram 张量并行 (ETP) 支持 for the Qwen4Exp PLE embedding table, so the table can be sharded across cards and TP can be reduced to fit DP+TP deployment shapes. Key changes - E
- [PR #20276](https://github.com/vllm-project/vllm-ascend/pull/20276) 已合并
  - 中文：【功能】ETP 支持 for Qwen4Exp PLE embedding table sharding
  - 原文：[Feature] Add ETP support for Qwen4Exp PLE embedding table sharding
  - 说明：Upstream PR vllm-project/vllm 54371 introduced an independent ETP (Engram 张量并行) 通信 domain for the Qwen4Exp PLE embedding table, decoupling table sharding from TP size. This allows the PLE table to be sharded across mor
- [PR #20524](https://github.com/vllm-project/vllm-ascend/pull/20524) 已合并
  - 中文：【性能】【0.32.0】优化 KDA RecoverSSM aligned state commit
  - 原文：[Performance][0.32.0] Optimize KDA RecoverSSM aligned state commit
  - 说明：Cherry-pick 20474 onto releases/v0.32.0rc : 优化 GLM KDA RecoverSSM aligned state commit with separate boundary/non-boundary 路由 and A5 grouped-head 支持. Include the 服务-documentation cleanup. Does this PR introduce any user
- [PR #20474](https://github.com/vllm-project/vllm-ascend/pull/20474) 已合并
  - 中文：【性能】优化 KDA RecoverSSM aligned state commit
  - 原文：[Performance] Optimize KDA RecoverSSM aligned state commit
  - 说明：优化 GLM KDA RecoverSSM accepted-state commit by 路由 requests with and without a boundary snapshot through separate paths. Non-crossing requests use larger tiles; A5 grouped-head commit supports both paths. Keep requests outermost w
- [PR #20477](https://github.com/vllm-project/vllm-ascend/pull/20477) 已合并
  - 中文：【修复】【注意力】Backport MLA layerwise KV load waits to v0.32
  - 原文：[BugFix][Attention] Backport MLA layerwise KV load waits to v0.32
  - 说明：Backport 19639 to releases/v0.32.0rc . Short prefills can be classified as 解码 while still 加载 external KV. MLA now consumes the connector's layer load completion on all three preprocessing paths, and ordinary 解码 records the atte
- [PR #20468](https://github.com/vllm-project/vllm-ascend/pull/20468) 已合并
  - 中文：【修复】【模型】Backport MiniMax-M3 prompt reasoning boundary 修复
  - 原文：[BugFix][Model] Backport MiniMax-M3 prompt reasoning boundary fix
  - 说明：Backport vllm-project/vllm 63492 to releases/v0.32.0rc (base: ffca1c99bb28d9c92dd5dcf327f8b242404a5055 ). The vLLM v0.32.0 MiniMax-M3 parser does not contain that 修复. MiniMax-M3.1-Flash prompts contain literal <mm:think </mm:think instruct
- [PR #20445](https://github.com/vllm-project/vllm-ascend/pull/20445) 已合并
  - 中文：【修复】Backport ViT mRoPE 16-token blocks to v0.32.0rc
  - 原文：[BugFix] Backport ViT mRoPE 16-token blocks to v0.32.0rc
  - 说明：Backport 19129 onto releases/v0.32.0rc , starting from ffca1c99bb28d9c92dd5dcf327f8b242404a5055. Reapply commits 9e0488b and 9bfa732 with the release branch's worker import structure and ordering preserved. 修复 the MiniMax-M3 ViT mRoPE UB c
- [PR #20529](https://github.com/vllm-project/vllm-ascend/pull/20529) 进行中
  - 中文：【功能】BF16 PLE host 卸载 with DP 共享 显存 and ETP for Qwen4Exp
  - 原文：[Feature] Add BF16 PLE host offload with DP shared memory and ETP for Qwen4Exp
  - 说明：Backport of 20424 to releases/v0.32.0rc . Keep BF16 PLE/ngram embedding tables in CANN-registered host 显存 and gather selected rows directly on NPU via a masked Triton 内核, avoiding H2D copy and host-side gather. Projections and convo

#### 2026-10-31

- [Issue #20505](https://github.com/vllm-project/vllm-ascend/issues/20505) 进行中
  - 中文：【缺陷】:CPU binding shares one CPU/NUMA/IRQ pool across all internal-DP workers under renumbered device visibility
  - 原文：[Bug]:CPU binding shares one CPU/NUMA/IRQ pool across all internal-DP workers under renumbered device visibility
- [PR #20490](https://github.com/vllm-project/vllm-ascend/pull/20490) 已合并
  - 中文：【修复】【EPLB】【0.32】circular import in spawned workers
  - 原文：[BugFix][EPLB][0.32] Fix circular import in spawned workers
  - 说明：Backport 20455 at 1f99fa6d7 to releases/v0.32.0rc . The release branch contains the same EPLB circular dependency that prevents spawned workers from importing EPLB state. Move 共享 tensor calculations into an EPLB module that imports only
- [PR #20455](https://github.com/vllm-project/vllm-ascend/pull/20455) 已合并
  - 中文：【修复】【EPLB】circular import in spawned workers
  - 原文：[BugFix][EPLB] Fix circular import in spawned workers
  - 说明：修复 the EPLB circular import introduced by 18549 and observed in 20303's spawned HIXL workers. - Move 共享 tensor calculations into distributed/eplb/tensor ops.py , which imports only PyTorch. EPLB state imports the helpers directly; MoE
- [PR #20460](https://github.com/vllm-project/vllm-ascend/pull/20460) 已合并
  - 中文：【v0.30.0】【文档】【杂项】移除 /dev/devmm_svm from the A5 (950DT) container command in the installation guide
  - 原文：[v0.30.0][Doc][Misc] Remove /dev/devmm_svm from the A5 (950DT) container command in the installation guide
  - 说明：/dev/devmm svm is an Atlas A3 device. It does not exist on Ascend 950DT (A5) hosts, and an explicit --device entry for a missing node prevents the container from starting at all: This removes the mount from the Ubuntu and openEuler containe
- [Issue #20486](https://github.com/vllm-project/vllm-ascend/issues/20486) 进行中
  - 中文：【RFC】: Hybrid dense/稀疏 注意力 路由 for GLM-5.3-Flash
  - 原文：[RFC]: Hybrid dense/sparse attention routing for GLM-5.3-Flash
  - 说明：Motivation. GLM-5.3-Flash uses KeyPool-based selection and 稀疏 MLA 注意力. When a query’s complete causal history fits within the selection budget, all valid historical tokens are selected, making 索引器 scoring unnecessary. This opp
- [PR #19639](https://github.com/vllm-project/vllm-ascend/pull/19639) 已合并
  - 中文：【修复】【注意力】Wait for layerwise KV loads on all MLA paths
  - 原文：[BugFix][Attention] Wait for layerwise KV loads on all MLA paths
  - 说明：A short 预填充 can be classified as 解码 while still 加载 external KV. MLA's 预填充-only connector waits left 解码 paths uncovered. A pure-MLA 解码 step can skip load submission entirely and return incorrect output with HTTP 200.
- [Issue #20452](https://github.com/vllm-project/vllm-ascend/issues/20452) 进行中
  - 中文：【缺陷】: Gitleaks secret scan is a no-op in CI.
  - 原文：[Bug]: Gitleaks secret scan is a no-op in CI.
- [PR #20271](https://github.com/vllm-project/vllm-ascend/pull/20271) 已合并
  - 中文：【修复】【Worker】投机 model interface forwarding in ACL graph wrapper
  - 原文：[BugFix][Worker] Fix speculative model interface forwarding in ACL graph wrapper
  - 说明：During the Step-3.7 adaptation, service startup failed when MTP and 投机解码 were 启用. ModelWithContext explicitly forwarded several model methods with narrowed signatures, including compute logits(hidden states) . This reje
- [Issue #20431](https://github.com/vllm-project/vllm-ascend/issues/20431) 进行中
  - 中文：夜间 Daily test failure on 2026-10-31 08:00 - please check
  - 原文：Nightly Daily test failure on 2026-10-31 08:00 - please check
  - 说明：The 夜间 Daily test for vllm-ascend reported failures at 08:00 on 2026-10-31. Failed on: cpu-0 card-(part 1-1), a2-1 card-(part 3-7), a3-4 card-(part 1-5), MiniMax-M3-BF16-A3 Failed 测试用例: - test entry lock timeout bypasses 缓存 —
- [PR #19866](https://github.com/vllm-project/vllm-ascend/pull/19866) 已合并
  - 中文：【修复】request-major sampling masks for 投机解码 on Ascend
  - 原文：[BugFix] Fix request-major sampling masks for speculative decoding on Ascend
  - 说明：修复 Ascend sampling-mask packing for the upstream request-major API. A 投机-解码 request can commit multiple tokens in one round, and each token needs the mask from its corresponding logits row. The previous one-row-per-request i
- [PR #20344](https://github.com/vllm-project/vllm-ascend/pull/20344) 已合并
  - 中文：【性能】优化 Qwen PLE 预填充 with Triton on Ascend
  - 原文：[Performance] Optimize Qwen PLE prefill with Triton on Ascend
  - 说明：优化 Qwen PLE 预填充 on Ascend with a 预填充-only Triton module. The Ascend model binding selects the path once: 预填充 calls ple conv 预填充 ; 解码 and 投机解码 call upstream ple conv . There is no single-request spec
- [PR #18549](https://github.com/vllm-project/vllm-ascend/pull/18549) 已合并
  - 中文：【修复】【MoE】A5 AllGather with MRV2 EPLB
  - 原文：[BugFix][MoE] Fix A5 AllGather with MRV2 EPLB
  - 说明：修复 MRV2 EPLB when A5 selects AllGather. Every rank routes the same gathered rows, so rank-dependent replica selection can execute a route twice or omit it. - Use a rank-independent replica table for AllGather, preserving the existing MC2/A
- [PR #18744](https://github.com/vllm-project/vllm-ascend/pull/18744) 已合并
  - 中文：【重构】【注意力】Unify PCP O-proj 权重 switching
  - 原文：[Refactor][Attention] Unify PCP O-proj weight switching
  - 说明：Unifies MRV2 DSA-PCP and SFA-PCP O-projection execution in a 共享 ParallelOProjection component. It owns 检查点 partitioning, temporary full-权重 views, exchange buffers, collectives and output reductions while retaining native grou
- [PR #20424](https://github.com/vllm-project/vllm-ascend/pull/20424) 进行中
  - 中文：【功能】BF16 PLE host 卸载 for Qwen4Exp on Ascend
  - 原文： [Feature] Add BF16 PLE host offload for Qwen4Exp on Ascend
  - 说明：Keep BF16 PLE/ngram embedding tables in CANN-registered host 显存 and gather selected rows directly on NPU via a masked Triton 内核, avoiding H2D copy and host-side gather. Projections and convolution states remain on the NPU. Key chang
- [PR #20258](https://github.com/vllm-project/vllm-ascend/pull/20258) 已合并
  - 中文：【性能】【Triton】Bound V2 bincount grids and 优化 mask packing
  - 原文：[Performance][Triton] Bound V2 bincount grids and optimize mask packing
  - 说明：Thanks to zihanlin-ai for PR 15270, its implementation and 优化 ideas. We agree with its two-pass approach: scatter prompt-presence flags, retain atomic output counts, then pack flags into the existing bitmap. The original operator
- [PR #20316](https://github.com/vllm-project/vllm-ascend/pull/20316) 已合并
  - 中文：【Cherry-pick】【releases/v0.30.0】【文档】【杂项】Revise deployment 配置 details and 精度 evaluation methods (from #20314)
  - 原文：[Cherry-pick][releases/v0.30.0][Doc][Misc] Revise deployment config details and accuracy evaluation methods (from #20314)
  - 说明：Cherry-pick of PR 20314 onto releases/v0.30.0 . Original PR: 20314 Original author: @stella194ahsf-spec --- This PR revises the deployment 配置 and 精度 evaluation sections of docs/source/tutorials/models/Qwen3.6-35B-A3B.md . S
- [PR #20369](https://github.com/vllm-project/vllm-ascend/pull/20369) 已合并
  - 中文：【功能】启用 前缀缓存 for GLM KDA RecoverSSM
  - 原文：[Feature] Enable prefix caching for GLM KDA RecoverSSM
  - 说明：Allow GLM KDA RecoverSSM to use 前缀缓存 with Mamba 缓存 mode 对齐 . Previously 配置 validation rejected 前缀缓存, and the inherited MRV2 KDA builder 必填 physical state indices that Ascend did not prepare. Prepar
- [PR #20290](https://github.com/vllm-project/vllm-ascend/pull/20290) 已合并
  - 中文：【性能】【模型】融合 MiniMax MXFP8 SwiGLU and 启用 A5 AscendC index score
  - 原文：[Performance][Model] Fuse MiniMax MXFP8 SwiGLU and enable A5 AscendC index score
  - 说明：MiniMax M3 on A5 launches separate clipped SwiGLU and MXFP8 量化 内核. This PR fuses them with npu swiglu mx quant and includes the AscendC index-score 解码 change from 18963 (credit to @xuchi-0808). - 启用 融合 activation f
- [Issue #14413](https://github.com/vllm-project/vllm-ascend/issues/14413) 已关闭
  - 中文：【缺陷】【Upstream】: AttributeError: 'VllmConfig' object has no attribute 'kv_cache_config'. Did you mean: 'cache_config'?
  - 原文：[Bug][Upstream]:  AttributeError: 'VllmConfig' object has no attribute 'kv_cache_config'. Did you mean: 'cache_config'?
- [Issue #10499](https://github.com/vllm-project/vllm-ascend/issues/10499) 已关闭
  - 中文：【缺陷】【Upstream】: AssertionError: reasoning tokens (99) exceeded thinking_token_budget (5)
  - 原文：[Bug][Upstream]: AssertionError: reasoning tokens (99) exceeded thinking_token_budget (5)

#### 2026-10-30

- [PR #20375](https://github.com/vllm-project/vllm-ascend/pull/20375) 已合并
  - 中文：【修复】【Spec Decode】sample_recovered_tokens warmup grid under-covering draft positions
  - 原文：[BugFix][Spec Decode] Fix sample_recovered_tokens warmup grid under-covering draft positions
  - 说明：Fixes a launch-grid 回退 introduced by the Triton JIT warmup migration ( 19976) that crashes PD-disaggregated 投机-解码 workers. The SampleRecoveredTokensKernel warmup wrapper derived the 2-D launch grid's axis 1 from q.shape
- [PR #19880](https://github.com/vllm-project/vllm-ascend/pull/19880) 已合并
  - 中文：【修复】Preserve GLM 共享 slots with layerwise KV transfer
  - 原文：[BugFix] Preserve GLM shared slots with layerwise KV transfer
  - 说明：修复 GLM-5.3-Flash Model Runner V2 initialization with Memcache use layerwise: true . GLM's planner already overlays MLA/KDA and 索引器/tail caches across 调度器 groups, but the generic V2 allocation loop mistakes their zero-stride descr
- [PR #19493](https://github.com/vllm-project/vllm-ascend/pull/19493) 已合并
  - 中文：【重构】移除 legacy DSA-CP implementation
  - 原文：[Refactor] Remove legacy DSA-CP implementation
  - 说明：移除 legacy TP-based DSA-CP code, 配置 and dedicated tests. Preserve PCP/DCP implementations. Merged migrations: - 夜间: 17681. - 每周: 19643. - Documentation: 19491. Yes. Remov
- [Issue #20367](https://github.com/vllm-project/vllm-ascend/issues/20367) 进行中
  - 中文：【缺陷】: PD disaggregation: per-shard pending-reformat stash is overwritten when 注意力 groups become ready in different pull tasks (解码 TP < 预填充 TP), silently corrupting GQA draft KV
  - 原文：[Bug]: PD disaggregation: per-shard pending-reformat stash is overwritten when attention groups become ready in different pull tasks (decode TP < prefill TP), silently corrupting GQA draft KV
- [Issue #19823](https://github.com/vllm-project/vllm-ascend/issues/19823) 已关闭
  - 中文：【缺陷】: finegrained_tp_config mixes two "disabled" conventions (0 = off vs 1 = off); mlp_tensor_parallel_size is checked inconsistently across its own call sites
  - 原文：[Bug]: finegrained_tp_config mixes two "disabled" conventions (0 = off vs 1 = off); mlp_tensor_parallel_size is checked inconsistently across its own call sites
- [PR #20111](https://github.com/vllm-project/vllm-ascend/pull/20111) 已合并
  - 中文：【修复】Unify finegrained TP 禁用 semantics: default 1, 启用 only when size > 1
  - 原文：[BugFix] Unify finegrained TP disable semantics: default 1, enabled only when size > 1
  - 说明：【"finegrained tp config"】Fixes 19823. The four additional 配置 knobs disagreed on what "disabled" means: oproj 张量并行 size used 1 (consistent with vLLM ParallelConfig size semantics), lmhead / embedding used 0 , and mlp mixed bot
- [Issue #20362](https://github.com/vllm-project/vllm-ascend/issues/20362) 进行中
  - 中文：【缺陷】: MRv2 EPLB silently never rearranges when eplb_config.policy is "default"
  - 原文：[Bug]: MRv2 EPLB silently never rearranges when eplb_config.policy is "default"
- [PR #20308](https://github.com/vllm-project/vllm-ascend/pull/20308) 已合并
  - 中文：【性能】【Triton】Reuse MiniMax QK norm 权重 across tokens
  - 原文：[Performance][Triton] Reuse MiniMax QK norm weights across tokens
  - 说明：The 融合 MiniMax-M3 QK norm/RoPE/缓存 内核 prepares normalization 权重 for every token. Bound the logical grid by the device's vector-core count and process tokens cyclically within each program, so four 权重 and their Gemma scale
- [PR #19515](https://github.com/vllm-project/vllm-ascend/pull/19515) 已合并
  - 中文：【性能】优化 EP gather and 减少 operations for uniform SP layout and DP=1
  - 原文：[Performance] Optimize EP gather and reduce operations for uniform SP layout and DP=1
  - 说明：On FlashComm SP-MoE topologies (dp=1, TP8/EP8), every MoE layer calls the vllm::maybe all gather and maybe unpad 自定义算子 3x and vllm::maybe pad and 减少 1x. Profiling (torch profiler, eager 预填充) shows these ops account for ~23% of t
- [PR #19756](https://github.com/vllm-project/vllm-ascend/pull/19756) 已合并
  - 中文：【修复】【Compile】Register fusion patterns per pass manager and match bias-less norm+quant
  - 原文：[BugFix][Compile] Register fusion patterns per pass manager and match bias-less norm+quant
  - 说明：Refs 18205 Refs 17191 Two independent defects made the FX fusion passes ineffective: BasePattern.register() de-duplicated pattern registration across the whole process, so every pass manager except the first one was left with an empty match
- [PR #20116](https://github.com/vllm-project/vllm-ascend/pull/20116) 已合并
  - 中文：【性能】【修复】优化 A5 QSFA and handle trailing invalid 稀疏 indices
  - 原文：[Performance][BugFix] Optimize A5 QSFA and handle trailing invalid sparse indices
  - 说明：This PR optimizes QSFA on Ascend A5 and fixes 稀疏-index boundary handling. 性能 improvements: - Specialize A5 QK dimensions, packed KV strides, and buffer allocation for optional RoPE. - 新增 INT8 paged 稀疏 KV address preprocess
- [PR #19778](https://github.com/vllm-project/vllm-ascend/pull/19778) 已合并
  - 中文：【修复】【性能】MoE MulsAdd fusion matching and preserve intermediate rounding
  - 原文：[BugFix][Perf] Fix MoE MulsAdd fusion matching and preserve intermediate rounding
  - 说明：Extend MulsAdd fusion to cover both operand orders of ordinary addition and single-element torch. foreach 新增 . The existing pattern only matches x scale + y , missing the 共享-first foreach 新增 used by the current Ascend MoE output combi
- [PR #19957](https://github.com/vllm-project/vllm-ascend/pull/19957) 已合并
  - 中文：【算子】【杂项】Refactor patches to separate V1-only patches and flatten V2/共享 patches
  - 原文：[Ops][Misc] Refactor patches to separate V1-only patches and flatten V2/shared patches
  - 说明：This PR refactors the worker patch structure in vllm ascend . It separates Model Runner V1-only (MRv1) patches into a dedicated patch v1 package (e.g., vllm ascend/patch/worker/patch v1/ ) and flattens V2/共享 patches directly into vllm a
- [Issue #20349](https://github.com/vllm-project/vllm-ascend/issues/20349) 进行中
  - 中文：【缺陷】: When deploying MiniMax-M3.1-Flash using the latest official A2 配置 in a two-node co-deployment scenario, the image and video returned when calling the API is incorrect.
  - 原文：[Bug]: When deploying MiniMax-M3.1-Flash using the latest official A2 configuration in a two-node co-deployment scenario, the image and video returned when calling the API is incorrect.
- [Issue #20341](https://github.com/vllm-project/vllm-ascend/issues/20341) 进行中
  - 中文：【缺陷】: DSpark num_speculative_tokens=5 conflicts with TP8 序列-parallel cudagraph shape constraints
  - 原文：[Bug]: DSpark num_speculative_tokens=5 conflicts with TP8 sequence-parallel cudagraph shape constraints
- [Issue #20340](https://github.com/vllm-project/vllm-ascend/issues/20340) 进行中
  - 中文：【缺陷】: DP load balancer initial avalanche selects the first tied DP and skews traffic under mixed-length workloads
  - 原文：[Bug]: DP load balancer initial avalanche selects the first tied DP and skews traffic under mixed-length workloads
- [Issue #20339](https://github.com/vllm-project/vllm-ascend/issues/20339) 进行中
  - 中文：【缺陷】: vLLM-Ascend engine 崩溃 leaves dp-rpc-port 12321 occupied, preventing in-container restart
  - 原文：[Bug]: vLLM-Ascend engine crash leaves dp-rpc-port 12321 occupied, preventing in-container restart
- [PR #19824](https://github.com/vllm-project/vllm-ascend/pull/19824) 已合并
  - 中文：【修复】【PD】支持 single-head NHD GQA caches in MooncakeConnectorV2
  - 原文：[BugFix][PD] Support single-head NHD GQA caches in MooncakeConnectorV2
  - 说明：【tokens, 1, dim】MooncakeConnectorV2 treats the first KV block dimension as the head count, so an NHD GQA 缓存 shaped is interpreted incorrectly even when TP leaves exactly one KV head per rank. Infer the layout from each layer's 缓存 spe
- [PR #16350](https://github.com/vllm-project/vllm-ascend/pull/16350) 已合并
  - 中文：【性能】【DCP】Refresh native 解码 layouts and remap fixes for main
  - 原文：[Performance][DCP] Refresh native decode layouts and remap fixes for main
  - 说明：【T, H, D】【T, H, 1】减少 layout, copy and 缓存-publication overhead around native SFA DCP 解码, continuing 16349 on main. The registered entry remains dcp a2a 融合 . - Output/LSE exchange: pack BF16 partial output and FP32 LSE as raw
- [PR #20321](https://github.com/vllm-project/vllm-ascend/pull/20321) 已合并
  - 中文：【修复】【KVPool】移除 stale Memcache init barrier arguments
  - 原文：[BugFix][KVPool] Remove stale Memcache init barrier arguments
  - 说明：KVPoolWorker. init no longer accepts memcache dp init barrier , but the AscendStore factory still forwards it as a keyword and LayerwiseKVPoolWorker still forwards it positionally. Bulk construction therefore raises an unexpected-keyword Ty

#### 2026-10-29

- [PR #19564](https://github.com/vllm-project/vllm-ascend/pull/19564) 已合并
  - 中文：【修复】Keep GLM KPool ND and scope NZ handling to A5 vision
  - 原文：[BugFix] Keep GLM KPool ND and scope NZ handling to A5 vision
  - 说明：GLM-5.3-Flash fails on Ascend A5 with Model Runner V2 and 权重 nz mode=2 : KPool 权重 extraction (NZ to FP32): Vision projections (batched NZ Linear): Keep KPool's 融合 wk 权重 proj in ND for FP32 extraction and CANN key pool . Appl
- [PR #20272](https://github.com/vllm-project/vllm-ascend/pull/20272) 已合并
  - 中文：【Cherry-pick】【main】【持续集成】【修复】wheel jobs failing on non-root CANN 9.2.1 entrypoint (from #20270)
  - 原文：[Cherry-pick][main][CI][BugFix] Fix wheel jobs failing on non-root CANN 9.2.1 entrypoint (from #20270)
  - 说明：Cherry-pick of PR 20270 onto main . Original PR: 20270 Original author: @zhangxinyuehfad --- Fixes the "Release Code and Wheel" workflow, where all four wheel jobs (a2 / a3 / 310p / a5) fail after a successful image build and wheel build: -
- [PR #19775](https://github.com/vllm-project/vllm-ascend/pull/19775) 已合并
  - 中文：【修复】【算子】初始化 A5 scatter core count before sort decision
  - 原文：[BugFix][Ops] Initialize A5 scatter core count before sort decision
  - 说明：ScatterNdUpdateSk on A5 evaluates SkCeilDiv(indicesAxis , totalCoreNum ) during shape 解析, before GetPlatformInfo() initializes the core count. The local helper has no zero-divisor guard, so nonempty inputs can terminate the process wit
- [Issue #20268](https://github.com/vllm-project/vllm-ascend/issues/20268) 进行中
  - 中文：【缺陷】: topo-affinity CPU binding binds TP workers to remote NUMA nodes and overlapping CPU sets
  - 原文：[Bug]: topo-affinity CPU binding binds TP workers to remote NUMA nodes and overlapping CPU sets
  - 说明：Your current environment Host: Atlas 900 A2 PoD (8x 910B2, 4 NUMA nodes, 2 NPUs per node). Running TP4 with ASCEND RT 可见 DEVICES=0,1,2,3 inside a container whose cpuset is NOT restricted (Cpus allowed list: 0-191). 🐛 Describe the bug
- [PR #20120](https://github.com/vllm-project/vllm-ascend/pull/20120) 已合并
  - 中文：【修复】【MiniMax】遵循 MXFP8 MoE scale policy
  - 原文：[BugFix][MiniMax] Honor MXFP8 MoE scale policy
  - 说明：MiniMax MXFP8 MoE dispatch must use the model's ceil-scale policy. The default 融合 MC2 mode 4 and init-路由 quantizers do not apply that policy on these paths. - Quantize MXFP8 activations explicitly for MC2 and AllGather 路由 when
- [PR #19976](https://github.com/vllm-project/vllm-ascend/pull/19976) 已合并
  - 中文：【重构】【Triton】triton warmup jit
  - 原文：[Refactor][Triton] triton warmup jit
  - 说明：Migrates vllm-ascend's Triton 内核 warmup from five hand-written per-op warmup scripts to upstream vLLM's declarative JIT warmup framework (VllmTritonJitKernel + JitWarmupRegistry), so key-enumeration knowledge lives next to each 内核 a
- [PR #20140](https://github.com/vllm-project/vllm-ascend/pull/20140) 已合并
  - 中文：【重构】拆分 AscendStore layerwise pool worker and 调度器
  - 原文：[Refactor] Split AscendStore layerwise pool worker and scheduler
  - 说明：Follow up on 19885 by moving the remaining layerwise AscendStore worker and 调度器 behavior into LayerwiseKVPoolWorker and LayerwiseKVPoolScheduler . The connector selects these subclasses through explicit factories, while the base class
- [PR #19342](https://github.com/vllm-project/vllm-ascend/pull/19342) 已合并
  - 中文：【性能】【EPLB】Wait for consumed event before HIXL buffer reuse
  - 原文：[Performance][EPLB] Wait for consumed event before HIXL buffer reuse
  - 说明：HIXL READs currently synchronize the entire EPLB stream before reusing the 共享专家 buffer. For subsequent changed layers, the 必填 dependency is the previous foreground consumption of that buffer. Pass the recorded consumption eve
- [PR #20184](https://github.com/vllm-project/vllm-ascend/pull/20184) 已合并
  - 中文：【v0.30.0】【文档】【杂项】修复 GLM deployment command inconsistencies
  - 原文：[v0.30.0][Doc][Misc] Fix GLM deployment command inconsistencies
  - 说明：修复 the confirmed GLM deployment-guide issues from an execution audit: - Use glm consistently in the A2 PD smoke-test instructions. - 启用 EP in the A3 TP16/DP1 example so its requested DSA-CP/FlashComm1 settings satisfy Ascend's 序列
- [PR #19974](https://github.com/vllm-project/vllm-ascend/pull/19974) 已合并
  - 中文：【修复】【PD】Handle TP-replicated Mamba state in Mooncake V2
  - 原文：[BugFix][PD] Handle TP-replicated Mamba state in Mooncake V2
  - 说明：Mooncake V2 currently treats every MambaSpec state as sharded across TP/PCP workers. That is incorrect for a state marked tp replicated=True , such as PLE convolution state: each worker owns the complete state. With unequal TP the sharded p
- [PR #19578](https://github.com/vllm-project/vllm-ascend/pull/19578) 已合并
  - 中文：【修复】支持 PCP/DCP preempt 卸载 with local block spans
  - 原文：[BugFix] Support PCP/DCP preempt offload with local block spans
  - 说明：启用 preempt 卸载 for supported MRV2 PCP/DCP configurations and correctly map tokens to DCP-sharded KV blocks. Existing code rejects both DCP 1 and PCP 1, and uses raw group block sizes for transfer ranges even when DCP increases the t
- [PR #19573](https://github.com/vllm-project/vllm-ascend/pull/19573) 已合并
  - 中文：【修复】Preserve duplicate encoder inputs in recompute scheduling
  - 原文：[BugFix] Preserve duplicate encoder inputs in recompute scheduling
  - 说明：With the main-pinned vLLM API, a multimodal request can terminate RecomputeScheduler.schedule() with ValueError: too many values to unpack (expected 4) . try schedule encoder inputs returns a fifth value, duplicate encoder inputs , while bo
- [Issue #20231](https://github.com/vllm-project/vllm-ascend/issues/20231) 进行中
  - 中文：【RFC】: 支持 xPress Causal Refiner for DFlash on Ascend NPU
  - 原文：[RFC]: Support xPress Causal Refiner for DFlash on Ascend NPU
  - 说明：Motivation. vllm-ascend 已经合入了 DFlash proposer（PR 8118），在 Ascend NPU 上实现了基于块扩散的并行草稿生成，并在 Qwen3-8B + DFlash 的测试中取得了相对于 Eagle3 显著的吞吐提升。然而，DFlash 作为扩散草稿者存在一个结构性的质量瓶颈：扩散过程在每个位置上是条件独立地采样 token，导致生成的草稿块是边缘分布的集合，而非联合分布。目标模型在因果验证时，容易在早期拒绝这种“逐 token
- [Issue #20221](https://github.com/vllm-project/vllm-ascend/issues/20221) 进行中
  - 中文：【缺陷】【Upstream】: assert admission_estimate == allocation_estimate == allocated E assert 3 == 2
  - 原文：[Bug][Upstream]: assert admission_estimate == allocation_estimate == allocated   E       assert 3 == 2
- [Issue #20220](https://github.com/vllm-project/vllm-ascend/issues/20220) 进行中
  - 中文：【缺陷】【Upstream】: AssertionError: assert 'length' == 'stop' E E - stop E + length
  - 原文：[Bug][Upstream]: AssertionError: assert 'length' == 'stop'   E                E             - stop   E             + length
- [Issue #20218](https://github.com/vllm-project/vllm-ascend/issues/20218) 进行中
  - 中文：【缺陷】【Upstream】: assert 0 == 512 E + where 512 = min(512, 2048)
  - 原文：[Bug][Upstream]: assert 0 == 512   E        +  where 512 = min(512, 2048)
- [Issue #20216](https://github.com/vllm-project/vllm-ascend/issues/20216) 进行中
  - 中文：【缺陷】【Upstream】: coordinator = _bind_hisparse_connector(调度器)
  - 原文：[Bug][Upstream]:  coordinator = _bind_hisparse_connector(scheduler)
- [Issue #20214](https://github.com/vllm-project/vllm-ascend/issues/20214) 进行中
  - 中文：【缺陷】【Upstream】【1, 1】【1, 4】: assert ==
  - 原文：[Bug][Upstream]: assert [1, 1] == [1, 4]
- [PR #20178](https://github.com/vllm-project/vllm-ascend/pull/20178) 已合并
  - 中文：【v0.30.0】【文档】Translated Doc files 2026-10-29
  - 原文：[v0.30.0][Doc] Translated Doc files 2026-10-29
  - 说明：Auto-Translation Summary Translated 21 file(s): - <code /home/runner/ work/vllm-ascend/vllm-ascend/docs/source/locale/zh CN/LC MESSAGES/developer guide/Design Documents/model runner v1 eplb.po</code - <code /home/runner/ work/vllm-ascend/vl
- [Issue #20212](https://github.com/vllm-project/vllm-ascend/issues/20212) 进行中
  - 中文：【缺陷】【Upstream】: AssertionError: assert {'passed': 0,...rors': 1, ...} == {'passed': 0,...rors': 0, ...}
  - 原文：[Bug][Upstream]: AssertionError: assert {'passed': 0,...rors': 1, ...} == {'passed': 0,...rors': 0, ...}

#### 2026-10-28

- [Issue #20150](https://github.com/vllm-project/vllm-ascend/issues/20150) 进行中
  - 中文：【缺陷】: Drafter sampling index runs past the forwarded tokens (device IndexCheck aborts the worker)
  - 原文：[Bug]: Drafter sampling index runs past the forwarded tokens (device IndexCheck aborts the worker)
- [PR #20149](https://github.com/vllm-project/vllm-ascend/pull/20149) 进行中
  - 中文：【修复】【SpecDecode】Drop padded query_start_loc entries from drafter sampling indices
  - 原文：[Bugfix][SpecDecode] Drop padded query_start_loc entries from drafter sampling indices
  - 说明：What this PR does The drafter derives the per-request sampling indices from query start loc : query start loc is padded before the drafter runs : pad query start loc for fia() appends one extra entry equal to the padded token count whenever
- [PR #19304](https://github.com/vllm-project/vllm-ascend/pull/19304) 已合并
  - 中文：【功能】启用 融合 RMSNorm+cast capability for Atlas A2
  - 原文：[Feature] Enable fused RMSNorm+cast capability for Atlas A2
  - 说明：Summary 启用 the existing 融合 npu rms norm cast operator on Atlas A2 by exposing HardwareCapability.RMS NORM CAST in the A2 hardware profile. The 内核 already has ascend910b build artifacts ( csrc/moe/rms norm cast ), but the capabili
- [Issue #14274](https://github.com/vllm-project/vllm-ascend/issues/14274) 已关闭
  - 中文：【缺陷】【310P】: KV 缓存 sizing double-counts device-global HBM usage
  - 原文：[Bug]: [310P] KV cache sizing double-counts device-global HBM usage
- [PR #19984](https://github.com/vllm-project/vllm-ascend/pull/19984) 已合并
  - 中文：【修复】【310P】KV 缓存 显存 accounting incorrectly charging ot…
  - 原文：[BugFix][310P] Fix KV cache memory accounting incorrectly charging ot…
  - 说明：…her processes' HBM usage Fixes 14274, 19726. The non-RC branch of NPUWorker310.determine available 显存() mixed device-global 显存 with a per-process profiling delta, so HBM held by other processes and the driver reserve were deducted
- [PR #19472](https://github.com/vllm-project/vllm-ascend/pull/19472) 已合并
  - 中文：【功能】【KV Pool】支持 Mooncake SSD prefetch on exist
  - 原文：[Feature][KV Pool] Support Mooncake SSD prefetch on exist
  - 说明：Adds optional Mooncake SSD-to-DRAM prefetch on exist queries. When 启用 ssd prefetch=true in mooncake.json , batch is exist passes ExistOptions(prefetch to 显存=True) , so Mooncake promotes SSD-only objects into DRAM during the 缓存 pr
- [PR #20082](https://github.com/vllm-project/vllm-ascend/pull/20082) 已合并
  - 中文：【修复】【MRV2】【v0.30.0】避免 Triton unordered lock workspaces in structured output
  - 原文：[BugFix][MRV2][v0.30.0] Avoid Triton unordered lock workspaces in structured output
  - 说明：Fixes 20005. Triton-Ascend lowers discrete masked stores to a read-modify-write 序列 and conservatively allocates an unordered lock workspace. For structured outputs with min tokens 0 , the grammar-bitmask 内核 and the following logit
- [PR #20128](https://github.com/vllm-project/vllm-ascend/pull/20128) 已合并
  - 中文：【功能】【1/N】KDA RecoverSSM Triton operators
  - 原文：[Feature][1/N] Add KDA RecoverSSM Triton operators
  - 说明：新增 the Ascend GLM KDA RecoverSSM Triton operators. Verification records correction/key/gate data; after sampling, commit reconstructs the accepted recurrent state and compacts convolution history. Each KDA page needs one recurrent checkpoi
- [PR #19473](https://github.com/vllm-project/vllm-ascend/pull/19473) 已合并
  - 中文：【功能】【Config】Relax A5 MegaMoe intermediate size check to operator's actual range
  - 原文：[Feature][Config] Relax A5 MegaMoe intermediate size check to operator's actual range
  - 说明：What Replace the hard-coded whitelist check for A5 MegaMoe intermediate hidden ( {1024, 2048, 3072, 4096, 7168} , with 6144 only allowed for MiniMax M3 / Kimi K3) with a range + alignment check matching the actual constraint of the A5 MegaM
- [PR #19905](https://github.com/vllm-project/vllm-ascend/pull/19905) 已合并
  - 中文：【修复】Use source installation doctests for release version 更新
  - 原文：[BugFix] Use source installation doctests for release version updates
  - 说明：Release 配置 更新 in mkdocs.yml currently select pip installation doctests. When the CANN image is available but the vLLM Ascend wheel has not been published yet, these tests still run and fail during installation. Select source
- [PR #19885](https://github.com/vllm-project/vllm-ascend/pull/19885) 已合并
  - 中文：【重构】Extract AscendStore lookup and layerwise modules
  - 原文：[Refactor] Extract AscendStore lookup and layerwise modules
  - 说明：Move AscendStore lookup client/server into lookup key.py . Extract layerwise transfer threads and 缓存 layout into the layerwise package, then move layerwise 元数据 types and helpers there. 更新 production imports, existing test import
- [PR #20084](https://github.com/vllm-project/vllm-ascend/pull/20084) 已合并
  - 中文：【v0.30.0】【文档】【杂项】Reorganize and refine EPLB documentation structure
  - 原文：[v0.30.0][Doc][Misc] Reorganize and refine EPLB documentation structure
  - 说明：This PR reorganizes and refines the Expert Parallelism Load Balancer (EPLB) documentation to 改进 readability and structure. Specifically, it: - Renames the "Overview" section to "特性 Introduction" and integrates the benefits directl
- [Issue #20127](https://github.com/vllm-project/vllm-ascend/issues/20127) 进行中
  - 中文：【缺陷】: 解码 拷贝 the entire KV 缓存 (23.35 GiB) every step when PagedAttention is not 启用
  - 原文：[Bug]: Decode copies the entire KV cache (23.35 GiB) every step when PagedAttention is not enabled
- [Issue #20121](https://github.com/vllm-project/vllm-ascend/issues/20121) 进行中
  - 中文：【缺陷】: Direct curl request to 解码 node hangs the 解码 instance in A3 PD-disaggregated deployment
  - 原文：[Bug]: Direct curl request to Decode node hangs the Decode instance in A3 PD-disaggregated deployment
- [Issue #20099](https://github.com/vllm-project/vllm-ascend/issues/20099) 进行中
  - 中文：【缺陷】【Upstream】: AssertionError assert self.host_manager is not None
  - 原文：[Bug][Upstream]: AssertionError  assert self.host_manager is not None
- [Issue #20098](https://github.com/vllm-project/vllm-ascend/issues/20098) 进行中
  - 中文：【缺陷】【Upstream】: RuntimeError: copy_between_host_and_device_opapi:../torch_npu/csrc/aten/ops/op_api/CopyKernelOpApi.cpp:57 NPU function error: SUSPECT REMOTE ERROR, error code is 507057
  - 原文：[Bug][Upstream]: RuntimeError: copy_between_host_and_device_opapi:../torch_npu/csrc/aten/ops/op_api/CopyKernelOpApi.cpp:57 NPU function error: SUSPECT REMOTE ERROR, error code is 507057
- [PR #19369](https://github.com/vllm-project/vllm-ascend/pull/19369) 已合并
  - 中文：【v0.30.0】【文档】【杂项】对齐 all EPLB documentation with the v0.30 code
  - 原文：[v0.30.0][Doc][Misc] Align all EPLB documentation with the v0.30 code
  - 说明：Companion of 19377 (the main PR). The two PRs are identical except for one row: W4A8 MXFP is 启用 here because v0.30 includes 18444 ( supports eplb = True in w4a8 mxfp4.py ), while main still rejects it. A full pass over every EPLB-relat
- [Issue #20095](https://github.com/vllm-project/vllm-ascend/issues/20095) 进行中
  - 中文：【缺陷】【Upstream】:AssertionError: assert 'queued' == 'completed'
  - 原文：[Bug][Upstream]:AssertionError: assert 'queued' == 'completed'
- [PR #18857](https://github.com/vllm-project/vllm-ascend/pull/18857) 已合并
  - 中文：【修复】【模型】遵循 BF16 KDA recurrent-state 配置 for GLM-5.3-Flash
  - 原文：[BugFix][Model] Honor BF16 KDA recurrent-state configuration for GLM-5.3-Flash
  - 说明：遵循 mamba ssm 缓存 dtype for GLM KDA recurrent state by passing it directly to the upstream MambaStateDtypeCalculator.kda state dtype in both layer allocation and model-level 缓存 sizing. This makes explicit BF16 requests take effect co
- [Issue #20063](https://github.com/vllm-project/vllm-ascend/issues/20063) 进行中
  - 中文：【RFC】: Model Runner V1 特性 Deprecation
  - 原文：[RFC]: Model Runner V1 Feature Deprecation
  - 说明：特性 Behavior on V2 After Model Runner V1 is 移除 --- --- --- --- A1 ngram (CPU version) Falls back to V1; startup error when V2 is forced Sunset A2 medusa / MLP speculator Deleted upstream; error at 配置 validation Sunset A3 suffix

#### 2026-10-27

- [Issue #20001](https://github.com/vllm-project/vllm-ascend/issues/20001) 进行中
  - 中文：【RFC】: Integrate lookahead block hashes for MTP 前缀缓存 and 对齐 hybrid 检查点 boundaries
  - 原文：[RFC]: Integrate lookahead block hashes for MTP prefix caching and align hybrid checkpoint boundaries
  - 说明：Motivation. Upstream vllm-project/vllm 61589 introduces lookahead block hashes for local 前缀缓存 with EAGLE/EAGLE3/MTP. This RFC proposes a minimal Ascend integration focused on 缓存 coordination and Mamba/GDN 检查点 boundaries,
- [PR #19744](https://github.com/vllm-project/vllm-ascend/pull/19744) 已合并
  - 中文：【修复】【KV Transfer】Isolate dense DP replica endpoints
  - 原文：[BugFix][KV Transfer] Isolate dense DP replica endpoints
  - 说明：Dense-model DP engines run independently. vLLM preserves the original 服务 replica in parallel 配置.data parallel index , then resets the compute data parallel rank to zero. The connectors currently use that reset rank to allocate endp
- [Issue #19987](https://github.com/vllm-project/vllm-ascend/issues/19987) 进行中
  - 中文：【RFC】: 支持 GDN RecoverSSM for 投机解码 on Ascend
  - 原文：[RFC]: Support GDN RecoverSSM for Speculative Decoding on Ascend
  - 说明：Motivation. This RFC proposes extending RecoverSSM to Gated DeltaNet (GDN) on Ascend Model Runner V2 (MRV2). During 投机解码, the target model needs to verify multiple draft tokens while maintaining recurrent states. The convent
- [PR #19731](https://github.com/vllm-project/vllm-ascend/pull/19731) 已合并
  - 中文：【修复】Forward uses_mrope to NewRequestData.from_request in BalanceScheduler/DyntraLB
  - 原文：[BugFix] Forward uses_mrope to NewRequestData.from_request in BalanceScheduler/DyntraLB
  - 说明：NewRequestData.from request() strips the payload of multimodal items that are fully covered by a 前缀-缓存 hit. With the upstream default uses mrope=False it drops every payload field, including the keep on cpu image grid thw / video gri
- [PR #18118](https://github.com/vllm-project/vllm-ascend/pull/18118) 已合并
  - 中文：【修复】【KV Pool】Mooncake sleep/wake, PD handshake, and 前缀-缓存 reset
  - 原文：[BugFix][KV Pool] Fix Mooncake sleep/wake, PD handshake, and prefix-cache reset
  - 说明：Port two KV-pool fixes onto current main. patch partial wake up is not included: current EngineCore.wake up already resumes scheduling only after the executor is fully awake. Mooncake sleep/wake and PD handshake - Unregister Mooncake transf
- [Issue #19970](https://github.com/vllm-project/vllm-ascend/issues/19970) 进行中
  - 中文：【RFC】: Unified GVA ownership for Engram 卸载 and row sharding
  - 原文：[RFC]: Unified GVA ownership for Engram offload and row sharding
  - 说明：Motivation. Engram needs both an A3 D-owned full-table backing and A5 row-sharded placement. These are ownership policies for the same global table; implementing them as separate layouts would duplicate 加载, lookup, and lifecycle logic.
- [Issue #19967](https://github.com/vllm-project/vllm-ascend/issues/19967) 进行中
  - 中文：【RFC】: Tree 投机解码 Framework
  - 原文：[RFC]: Tree Speculative Decoding Framework
  - 说明：Motivation. Based on 18797, beyond the overhead inherent to the algorithm itself, the framework-level cost of tree speculation cannot be overlooked. In some cases, the gains from lengthening the 序列 are insufficient to offset the addit
- [Issue #19964](https://github.com/vllm-project/vllm-ascend/issues/19964) 进行中
  - 中文：【功能】: mineru-4模型适配
  - 原文：[Feature]: mineru-4模型适配
  - 说明：请提供mineru-4模型的适配，在相关资料上没有找到该模型的适配资料 Alternatives No response Additional context No response
- [PR #19907](https://github.com/vllm-project/vllm-ascend/pull/19907) 已合并
  - 中文：【v0.30.0】【文档】Translated Doc files 2026-10-27
  - 原文：[v0.30.0][Doc] Translated Doc files 2026-10-27
  - 说明：Auto-Translation Summary Translated 29 file(s): - <code /home/runner/ work/vllm-ascend/vllm-ascend/docs/source/locale/zh CN/LC MESSAGES/getting started/installation.po</code - <code /home/runner/ work/vllm-ascend/vllm-ascend/docs/source/loc
- [Issue #19952](https://github.com/vllm-project/vllm-ascend/issues/19952) 进行中
  - 中文：【缺陷】: 部署alphafold3模型报PTA call acl api failed异常
  - 原文：[Bug]: 部署alphafold3模型报PTA call acl api failed异常
- [PR #18061](https://github.com/vllm-project/vllm-ascend/pull/18061) 已合并
  - 中文：【功能】投机解码 NGram NPU Implementations for MRV2
  - 原文：[Feature] Speculative Decoding NGram NPU Implementations for MRV2
  - 说明：refer to: , 新增 投机解码 NGram NPU Implementations for MRV2 test result : metrics base(mrv1+ngram+async) this pr(mrv2+ngram+async) 改进 :---: :---: :---: :---: TTFT 63.11ms 61.81ms -2.05% TPOT 12.22ms 8.61ms -29.54% this pr s
- [Issue #19948](https://github.com/vllm-project/vllm-ascend/issues/19948) 进行中
  - 中文：【缺陷】: W8A8-MXFP8 + MRv2 EPLB silently corrupts the model after the first rearrangement on A5
  - 原文：[Bug]: W8A8-MXFP8 + MRv2 EPLB silently corrupts the model after the first rearrangement on A5
- [Issue #19947](https://github.com/vllm-project/vllm-ascend/issues/19947) 进行中
  - 中文：【缺陷】: 部署DS+moon cake启动报register_local_memory_failed异常
  - 原文：[Bug]: 部署DS+moon cake启动报register_local_memory_failed异常
- [PR #19620](https://github.com/vllm-project/vllm-ascend/pull/19620) 已合并
  - 中文：【性能】Drop the redundant KDA padding mask in recurrent_kda for GLM5.3flash
  - 原文：[Performance] Drop the redundant KDA padding mask in recurrent_kda for GLM5.3flash
  - 说明：【1, T, H, D】The KDA recurrent step zeroed graph-capacity padding rows with a full masked fill on every layer and every 解码 step. None of the consumers read those rows: - the spec/MTP path 合并 with index copy , which 拷贝 valid toke
- [PR #19912](https://github.com/vllm-project/vllm-ascend/pull/19912) 已合并
  - 中文：【修复】N-gram 投机解码 compatibility with Triton 3.6.0
  - 原文：[Bugfix] Fix N-gram speculative decoding compatibility with Triton 3.6.0
  - 说明：修复 an N-gram 投机解码 failure observed after upgrading to Triton 3.6.0. ngram spec 解码 内核 passes care padding=False to three tl.load calls. The tl.load implementation in the affected environment does not accept this argu
- [PR #19657](https://github.com/vllm-project/vllm-ascend/pull/19657) 已合并
  - 中文：【性能】避免 redundant Engram lookup output initialization
  - 原文：[Performance] Avoid redundant Engram lookup output initialization
  - 说明：Engram preparation zero-initializes a local BF16 result that lookup immediately overwrites. Allocate it with torch.empty instead, removing one redundant full-result initialization per prepared layer. Both native device-table and mapped-host
- [PR #19622](https://github.com/vllm-project/vllm-ascend/pull/19622) 已合并
  - 中文：【修复】Strip stream_options on 解码 path when stream is false
  - 原文：[BugFix] Strip stream_options on decode path when stream is false
  - 说明：修复 19619 In examples/分离式预填充 v1/load balance proxy server example.py , the 预填充-解码 disaggregation proxy forwards requests to two backend roles: - 预填充 via send request to service - build 预填充 request , which forc
- [PR #19800](https://github.com/vllm-project/vllm-ascend/pull/19800) 已合并
  - 中文：【重构】【MRV2】【PCP】【注意力】Decide PCP layout from builder outputs
  - 原文：[Refactor][MRV2][PCP][Attention] Decide PCP layout from builder outputs
  - 说明：注意力 builders and 缓存-write paths currently treat an 启用 PCP 配置 as proof that every step uses a PCP-sharded layout. A replicated draft 解码 can have no PCP context and keep rank-local slots, so that assumption can se
- [PR #17977](https://github.com/vllm-project/vllm-ascend/pull/17977) 已合并
  - 中文：[BugFix] [CI]将平分重建和AOP诊断与夜间对齐
  - 原文：[BugFix][CI] Align bisect rebuilds and AOP diagnostics with nightly
  - 说明：Follow-up to 17902. Besides aligning candidate rebuilds with the 夜间 uv installer, this migrates the remaining AOP/bisect hardening from the test branch so the bisect pipeline matches 夜间 end to end: - Candidate rebuilds now use uv
- [PR #19913](https://github.com/vllm-project/vllm-ascend/pull/19913) 已合并
  - 中文：【修复】N-gram Triton 3.6.0 compatibility on v0.30.0
  - 原文：[Bugfix] Fix N-gram Triton 3.6.0 compatibility on v0.30.0
  - 说明：Apply the N-gram 投机解码 compatibility 修复 from 19912 to releases/v0.30.0 . After upgrading to Triton 3.6.0, the affected environment rejects the care padding=False argument passed to tl.load in ngram spec 解码 内核 , causi

#### 2026-10-26

- [PR #18964](https://github.com/vllm-project/vllm-ascend/pull/18964) 已合并
  - 中文：【重构】【CPP】移除 legacy runner branches
  - 原文：[Refactor][CPP] Remove legacy runner branches
  - 说明：CPP still carried legacy runner-specific 调度器 branches, 配置 checks, documentation, and duplicated 性能 scenarios. The default execution path no longer needs that compatibility surface. This PR: - removes the legacy sch
- [PR #19484](https://github.com/vllm-project/vllm-ascend/pull/19484) 已合并
  - 中文：【修复】【KVPP】Complete Mooncake layerwise load synchronization
  - 原文：[BugFix][KVPP] Complete Mooncake layerwise load synchronization
  - 说明：Complete KVPP + Mooncake block-key layerwise 池化 on current main (rebased onto 3b845c4fe ). Refs 18448 and 18647. Main already has 18647's model-layer prefetch window and compact owner-relative Mooncake indices. Those fixes do not order
- [PR #19754](https://github.com/vllm-project/vllm-ascend/pull/19754) 已合并
  - 中文：【修复】【v0.30.0】【KV Pool】Skip probes for HBM-cached prefixes
  - 原文：[BugFix][v0.30.0][KV Pool] Skip probes for HBM-cached prefixes
  - 说明：main: 19755 Layerwise hit checks probe pooled blocks even when their 前缀 is already resident in local HBM. With Memcache, a readability query can synchronously rewarm SSD data or wait for pending rewarm, delaying EngineCore scheduling de
- [PR #19755](https://github.com/vllm-project/vllm-ascend/pull/19755) 已合并
  - 中文：【修复】【KV Pool】Skip probes for HBM-cached prefixes
  - 原文：[BugFix][KV Pool] Skip probes for HBM-cached prefixes
  - 说明：Layerwise hit checks probe pooled blocks even when their 前缀 is already resident in local HBM. With Memcache, a readability query can synchronously rewarm SSD data or wait for pending rewarm, delaying EngineCore scheduling despite provid
- [PR #19785](https://github.com/vllm-project/vllm-ascend/pull/19785) 已合并
  - 中文：【修复】【KV Pool】Invalidate stale load plans and bound worker transfers
  - 原文：[BugFix][KV Pool] Invalidate stale load plans and bound worker transfers
  - 说明：Main counterpart of 19781. A waiting request can retain an AscendStore LoadSpec from an earlier pool hit after a later lookup returns no hit. An old 12,288-token plan can then be 启用 for a step with only eight allocated blocks, raising
- [PR #19781](https://github.com/vllm-project/vllm-ascend/pull/19781) 已合并
  - 中文：【修复】【v0.30.0】【KV Pool】Invalidate stale load plans and bound worker transfers
  - 原文：[BugFix][v0.30.0][KV Pool] Invalidate stale load plans and bound worker transfers
  - 说明：A waiting request can retain an AscendStore LoadSpec from an earlier pool hit after a later lookup returns no hit. For example, an old plan covering 12,288 tokens can survive a miss and be 启用 after a step admits only 5,376 tokens with
- [PR #19519](https://github.com/vllm-project/vllm-ascend/pull/19519) 已合并
  - 中文：【修复】【Triton】Cast SwiGLU sigmoid input to FP32
  - 原文：[BugFix][Triton] Cast SwiGLU sigmoid input to FP32
  - 说明：Cast the swiglu quant sigmoid input to FP32 to 修复 BF16 compilation failures with Triton Ascend 3.6.0, which rejects BF16 input to tl.sigmoid . Yes. Restores the BF16 path with Triton Ascend 3.
- [PR #19851](https://github.com/vllm-project/vllm-ascend/pull/19851) 进行中
  - 中文：【功能】【KV Transfer】支持 DCP 预填充 with MemFabric direct host KV transfer
  - 原文：[Feature][KV Transfer] Support DCP prefill with MemFabric direct host KV transfer
  - 说明：This PR adds full-TP DCP 预填充 支持 to SfaRemoteD2HConnector using the MemFabric backend and 稀疏 KV offloading on 解码. 预填充 DCP partitions the main KV 缓存 across ranks. This change reconstructs those shards directly in the D
- [PR #19799](https://github.com/vllm-project/vllm-ascend/pull/19799) 已合并
  - 中文：【v0.30.0】【文档】Translated Doc files 2026-10-26
  - 原文：[v0.30.0][Doc] Translated Doc files 2026-10-26
  - 说明：Auto-Translation Summary Translated 26 file(s): - <code /home/runner/ work/vllm-ascend/vllm-ascend/docs/source/locale/zh CN/LC MESSAGES/faqs.po</code - <code /home/runner/ work/vllm-ascend/vllm-ascend/docs/source/locale/zh CN/LC MESSAGES/tu
- [Issue #19845](https://github.com/vllm-project/vllm-ascend/issues/19845) 进行中
  - 中文：【RFC】: Extend adaptive verification 支持 across ascend 注意力 backends
  - 原文：[RFC]: Extend adaptive verification support across ascend attention backends
  - 说明：Motivation. Adaptive verification uses trained confidence heads or online acceptance estimation to adjust how many draft tokens to verify. This RFC extends its 支持 across vLLM Ascend 注意力 backends by updating capability declaration
- [PR #19295](https://github.com/vllm-project/vllm-ascend/pull/19295) 已合并
  - 中文：【重构】【310P】避免 bool-mask IndexPut in GDN 预填充 state init
  - 原文：[Refactor][310P] Avoid bool-mask IndexPut in GDN prefill state init
  - 说明：In the 310P GDN 预填充 path, forward core uses two indexed assignments on the recurrent state for every layer. On Ascend both of them lower to the generic IndexPut implementation, which is pure operator overhead in this layer; the boolean-
- [PR #19317](https://github.com/vllm-project/vllm-ascend/pull/19317) 已合并
  - 中文：【修复】Correct GBSA static 内核 blacklist name
  - 原文：[BugFix] Correct GBSA static kernel blacklist name
  - 说明：Correct the GBSA static-内核 blacklist entry introduced by 18869 from GenericBlockSparseAttn to GenericBlockSparseAttention . npugraph ex matches blacklist entries against JSON filenames by substring, so the old spelling does not exclude
- [Issue #19272](https://github.com/vllm-project/vllm-ascend/issues/19272) 已关闭
  - 中文：【缺陷】: Host 显存 keeps increasing during long-running 解码 with dynamic AICPU task inputs
  - 原文：[Bug]: Host memory keeps increasing during long-running decode with dynamic AICPU task inputs
- [PR #19393](https://github.com/vllm-project/vllm-ascend/pull/19393) 已合并
  - 中文：【算子】【杂项】【重构】Refactor sampling primitives and clean up MRv1 dependencies
  - 原文：[Ops][Misc][Refactor] Refactor sampling primitives and clean up MRv1 dependencies
  - 说明：This PR refactors the 310P sampling primitives by moving them from the MRv1-only vllm ascend. 310p.sample package to the MRv2 worker under vllm ascend. 310p.worker.v2.sample utils . This enables the eventual deletion of the MRv1-only sampli
- [PR #18786](https://github.com/vllm-project/vllm-ascend/pull/18786) 已合并
  - 中文：【性能】Use direct transpose batch matmul for V up projection
  - 原文：[Performance] Use direct transpose batch matmul for V up projection
  - 说明：SFA V up-projection now always uses npu transpose batchmatmul with perm x1=(1, 0, 2) when the 融合 operator is available. The old N L = 65536 branch made an explicit transpose and contiguous copy. CANN 9.2.0-beta.2 accepts the direct call
- [PR #18793](https://github.com/vllm-project/vllm-ascend/pull/18793) 已合并
  - 中文：【功能】【Build】Limit local csrc 缓存 versions per operator
  - 原文：[Feature][Build] Limit local csrc cache versions per operator
  - 说明：Bound local L1 history to two operator text hash directories per SOC/operator by default, retaining all action entries inside each version. - The 保留 count is a script-local BUILD 缓存 MAX OPERATOR VERSIONS=2 beside BUILD 缓存 DIR i
- [Issue #19357](https://github.com/vllm-project/vllm-ascend/issues/19357) 已关闭
  - 中文：【缺陷】: npu_hc_pre_v3 精度 problem.
  - 原文：[Bug]: npu_hc_pre_v3 accuracy problem.
- [PR #19350](https://github.com/vllm-project/vllm-ascend/pull/19350) 已合并
  - 中文：【重构】【MRV2】【PCP】Reuse upstream capture staging and manager helpers
  - 原文：[Refactor][MRV2][PCP] Reuse upstream capture staging and manager helpers
  - 说明：移除 duplicate PCP capture staging and manager helpers in MRV2. Pass pcp manager through the upstream capture interface and reuse upstream global-batch, block-table, and speculator setup. Keep the non-last PP global-batch handling require
- [PR #19334](https://github.com/vllm-project/vllm-ascend/pull/19334) 已合并
  - 中文：【重构】【注意力】Unify PCP/DCP flag and helper naming
  - 原文：[Refactor][Attention] Unify PCP/DCP flag and helper naming
  - 说明：Standardize PCP/DCP 配置 flags as use pcp / use dcp and helper functions as is pcp 启用() / is dcp 启用() . 更新 callers and existing tests, and evaluate DCP enablement from the current 配置 rather than a process-w
- [PR #19086](https://github.com/vllm-project/vllm-ascend/pull/19086) 已合并
  - 中文：【修复】Publish Mooncake engine after initialization and prevent unsafe retries
  - 原文：[BugFix] Publish Mooncake engine after initialization and prevent unsafe retries
  - 说明：GlobalTE.get transfer engine() publishes the native engine before initialization finishes and keeps it published even when initialization fails. Build and 初始化 locally, then publish only after success. Concurrent callers wait for that

#### 2026-10-25

- [Issue #19726](https://github.com/vllm-project/vllm-ascend/issues/19726) 进行中
  - 中文：【缺陷】【310P】: determine_available_memory() charges other processes' 显存 to the current instance, yielding negative available KV 缓存
  - 原文：[Bug]: [310P] determine_available_memory() charges other processes' memory to the current instance, yielding negative  available KV cache

#### 2026-10-24

- [PR #19716](https://github.com/vllm-project/vllm-ascend/pull/19716) 进行中
  - 中文：【性能】重叠 Engram WKV projections with MoE dispatch
  - 原文：[Performance] Overlap Engram WKV projections with MoE dispatch
  - 说明：Engram lookup preparation can 重叠 the model, but WKV still executes on the consumer's critical path after the prepared BF16 rows arrive. This adds an opt-in schedule that submits the unchanged WKV projection on a separate stream after a
- [PR #19635](https://github.com/vllm-project/vllm-ascend/pull/19635) 已合并
  - 中文：【修复】【v0.30.0】【注意力】Wait for layerwise KV loads on all MLA paths
  - 原文：[BugFix][v0.30.0][Attention] Wait for layerwise KV loads on all MLA paths
  - 说明：A short 预填充 can be classified as 解码 while still 加载 external KV. MLA's 预填充-only connector waits left 解码 paths uncovered. A pure-MLA 解码 step can skip load submission entirely and return incorrect output with HTTP 200.
- [PR #19712](https://github.com/vllm-project/vllm-ascend/pull/19712) 进行中
  - 中文：【功能】【BatchInvariant】Reject batch invariance for models without batch-invariant 内核
  - 原文：[Feature][BatchInvariant] Reject batch invariance for models without batch-invariant kernels
  - 说明：Batch invariance is a numerical contract: it only holds when every 内核 in the hot path has a batch-invariant twin. vllm-ascend currently accepts VLLM BATCH INVARIANT=1 for any model, so a model whose 注意力 or expert GEMM path has no
- [Issue #19707](https://github.com/vllm-project/vllm-ascend/issues/19707) 进行中
  - 中文：【缺陷】: Mooncake KV pool SSD 卸载 init fails on A5 RoCE (修复 upstream in Mooncake PR #4756)
  - 原文：[Bug]: Mooncake KV pool SSD offload init fails on A5 RoCE  (fixed upstream in Mooncake PR #4756)
- [PR #19567](https://github.com/vllm-project/vllm-ascend/pull/19567) 已合并
  - 中文：【修复】【KVPool】【v0.30.0】MRV2 resume state and revert save suppression
  - 原文：[BugFix][KVPool][v0.30.0] Fix MRV2 resume state and revert save suppression
  - 说明：from main MRV2 resumes preempted requests through scheduled new reqs with a full 块表. AscendStore rebuilds the tracker but leaves preempted req ids set. The next RUNNING step supplies a block delta and is routed through the preempte
- [PR #19693](https://github.com/vllm-project/vllm-ascend/pull/19693) 已合并
  - 中文：【修复】【KVPool】MRV2 resume state and revert save suppression
  - 原文：[BugFix][KVPool] Fix MRV2 resume state and revert save suppression
  - 说明：Port 19567 to main. MRV2 resumes preempted requests through scheduled new reqs with a full 块表. AscendStore rebuilds the tracker but leaves preempted req ids set. The next RUNNING step supplies a block delta and enters the preempted
- [PR #19699](https://github.com/vllm-project/vllm-ascend/pull/19699) 进行中
  - 中文：【注意力】【功能】迁移 FlashComm1 配置 and 修复 single-token SP 解码
  - 原文：[Attention][Feature] Migrate FlashComm1 config and fix single-token SP decode
  - 说明：Closes 10649 Part of 9079 Summary - Make additional 配置.启用 flashcomm1 authoritative, with VLLM ASCEND 启用 FLASHCOMM1 retained only as a migration fallback. - Log when the explicit 配置 overrides the legacy environment val
- [PR #19681](https://github.com/vllm-project/vllm-ascend/pull/19681) 进行中
  - 中文：【v0.30.0】【修复】【量化】遵循 W4A4 MXFP4 SwiGLU limits with unfused activation
  - 原文：[v0.30.0][BugFix][Quantization] Honor W4A4 MXFP4 SwiGLU limits with unfused activation
  - 说明：Backport of 19680 for releases/v0.30.0 . The W4A4 MXFP4 GMM+SwiGLU+quant 内核 does not accept a clamp limit, but the MoE dispatcher selected it for SiLU even when swiglu limit 0 . This silently skipped the configured clipping. For W4A4 MX
- [PR #19680](https://github.com/vllm-project/vllm-ascend/pull/19680) 进行中
  - 中文：【修复】【量化】遵循 W4A4 MXFP4 SwiGLU limits with unfused activation
  - 原文：[BugFix][Quantization] Honor W4A4 MXFP4 SwiGLU limits with unfused activation
  - 说明：The W4A4 MXFP4 GMM+SwiGLU+quant 内核 does not accept a clamp limit, but the MoE dispatcher selected it for SiLU even when swiglu limit 0 . This silently skipped the configured clipping. For W4A4 MXFP4 with a positive limit, select the exi

#### 2026-10-23

- [PR #19558](https://github.com/vllm-project/vllm-ascend/pull/19558) 已合并
  - 中文：【修复】【MRV2】Share KV 缓存 backing for Step-3.5/3.7
  - 原文：[BugFix][MRV2] Share KV cache backing for Step-3.5/3.7
  - 说明：This PR is a Model Runner V2 follow-up to 18316 . 18316 启用 共享 KV 缓存 backing and matching budget handling for Step-3.5/3.7 on the V1 allocation path. MRV2 still allocated the same 共享 缓存 pool once per descriptor, which coul
- [Issue #19653](https://github.com/vllm-project/vllm-ascend/issues/19653) 进行中
  - 中文：【RFC】: End-to-end unused-draft skipping on Ascend MRV2
  - 原文：[RFC]: End-to-end unused-draft skipping on Ascend MRV2
  - 说明：Motivation. I propose aligning Ascend Model Runner V2 with upstream vLLM 62784, which avoids generating drafts that no subsequent step can consume. The main opportunities are non-final chunked-预填充 steps, requests guaranteed to reach max
- [PR #19628](https://github.com/vllm-project/vllm-ascend/pull/19628) 已合并
  - 中文：【releases/v0.30.0】【文档】【修复】NPU wording, hccn_tool usage and KV 缓存 pool doc details
  - 原文：[releases/v0.30.0][Doc][BugFix] Fix NPU wording, hccn_tool usage and KV cache pool doc details
  - 说明：This PR backports the documentation fixes from 19627 to releases/v0.30.0 : - faqs.md : Replaces "GPU KV 缓存" with "NPU KV 缓存" in preemption FAQ metrics examples. - pd colocated mooncake multi instance.md : Corrects hccn tool -ping usag
- [PR #19496](https://github.com/vllm-project/vllm-ascend/pull/19496) 已合并
  - 中文：【v0.30.0】【文档】Translated Doc files 2026-10-22
  - 原文：[v0.30.0][Doc] Translated Doc files 2026-10-22
  - 说明：Auto-Translation Summary Translated 22 file(s): - <code /home/runner/ work/vllm-ascend/vllm-ascend/docs/source/locale/zh CN/LC MESSAGES/developer guide/Design Documents/分离式预填充.po</code - <code /home/runner/ work/vllm-ascend/v
- [PR #19598](https://github.com/vllm-project/vllm-ascend/pull/19598) 已合并
  - 中文：【修复】【MRV2】Skip non-Tensor KV 缓存 components in block zeroer
  - 原文：[BugFix][MRV2] Skip non-Tensor KV cache components in block zeroer
  - 说明：Skip non-Tensor components before calling numel() in the MRV2 KV block zeroer. This avoids initialization errors for nested tuple/list 缓存 bindings while retaining the empty-Tensor guard from 18931. Does this PR introduce any user-facing
- [PR #18425](https://github.com/vllm-project/vllm-ascend/pull/18425) 已合并
  - 中文：【修复】【EPLB】Stage NZ Gloo receives on device
  - 原文：[BugFix][EPLB] Stage NZ Gloo receives on device
  - 说明：Ascend950 rejects the Gloo communicator's direct copy from pinned CPU staging 显存 into a FRACTAL NZ receive buffer. For NZ destinations, first transfer the data to the NPU, cast the temporary tensor to NZ on the transfer stream, then cop
- [PR #19621](https://github.com/vllm-project/vllm-ascend/pull/19621) 已合并
  - 中文：【v0.30.0】【文档】【杂项】更新 terminology and formatting in documentation-AIDD- #19597
  - 原文：[v0.30.0][Doc][Misc] Update terminology and formatting in documentation-AIDD- #19597
  - 说明：This PR 更新 various documentation files to standardize terminology and 修复 formatting issues: - Replaces "专家并行" with "Expert Parallelism" across multiple files for consistency. - Capitalizes "cann" to "CANN" in faqs.md . - Fi
- [Issue #15451](https://github.com/vllm-project/vllm-ascend/issues/15451) 已关闭
  - 中文：【缺陷】: 路由 replay captures TP-local/padded expert IDs when DP=1
  - 原文：[Bug]: Routing replay captures TP-local/padded expert IDs when DP=1
- [PR #18502](https://github.com/vllm-project/vllm-ascend/pull/18502) 已合并
  - 中文：【修复】【Worker】路由 replay capturing TP-local expert ids when DP=1
  - 原文：[Bugfix][Worker] Fix routing replay capturing TP-local expert ids when DP=1
  - 说明：Fixes 15451. The routed-experts (R3 / 路由 replay) capture patch normalises topk ids for data parallelism, but the strategies that 拆分 the token dimension inside the TP group were never handled for DP == 1 . The patch only reconstructe
- [PR #19614](https://github.com/vllm-project/vllm-ascend/pull/19614) 已合并
  - 中文：【Cherry-pick】【releases/v0.30.0】【文档】【杂项】新增 anchor points for headings in kv_cache_pool_ascend_store (from #19592)
  - 原文：[Cherry-pick][releases/v0.30.0][Doc][Misc] Add anchor points for headings in kv_cache_pool_ascend_store (from #19592)
  - 说明：Cherry-pick of PR 19592 onto releases/v0.30.0 . Original PR: 19592 Original author: @herizhen --- This PR adds explicit anchor points ( {: ... } ) to several headings in KV 缓存 pool ascend store.md and synchronizes these anchors in the Ch
- [Issue #19619](https://github.com/vllm-project/vllm-ascend/issues/19619) 进行中
  - 中文：【缺陷】PD 负载均衡代理在非流式请求携带 stream_options 时报错
  - 原文：[Bug] PD 负载均衡代理在非流式请求携带 stream_options 时报错
- [Issue #19613](https://github.com/vllm-project/vllm-ascend/issues/19613) 进行中
  - 中文：【RFC】: RL Roadmap Q4 2026
  - 原文：[RFC]: RL Roadmap Q4 2026
  - 说明：Problem. Router Replay (R3) is what makes MoE RL correct: the trainer replays the expert selections made during inference so that the gradient does not mix different 路由 decisions for the same tokens. On Ascend the capture path has been
- [PR #19574](https://github.com/vllm-project/vllm-ascend/pull/19574) 已合并
  - 中文：【修复】【EPLB】【v0.30.0】Preserve int32 load statistics in STAIR bins
  - 原文：[BugFix][EPLB][v0.30.0] Preserve int32 load statistics in STAIR bins
  - 说明：Backport of 19572 to releases/v0.30.0 . STAIR's temporal bin reduction implicitly promotes int32 load counters to int64, doubling the statistics payload and introducing substantial AllReduce overhead on Ascend. Preserve the input dtype in s
- [PR #19572](https://github.com/vllm-project/vllm-ascend/pull/19572) 已合并
  - 中文：【修复】【EPLB】Preserve int32 load statistics in STAIR bins
  - 原文：[BugFix][EPLB] Preserve int32 load statistics in STAIR bins
  - 说明：STAIR's temporal bin reduction implicitly promotes int32 load counters to int64. The promoted dtype then propagates to logical-load aggregation and AllReduce, doubling the statistics payload and introducing substantial reduction overhead on
- [PR #19140](https://github.com/vllm-project/vllm-ascend/pull/19140) 已合并
  - 中文：【修复】【v0.30.0】Bound SHM notification mailbox growth
  - 原文：[BugFix][v0.30.0] Bound SHM notification mailbox growth
  - 说明：During sustained SHM fast-path reads, SpinCondition.record read() 更新 the busy-loop timestamp but does not service the notification socket. Workers continue sending notifications, so libzmq's internal activate read commands can accumula
- [PR #19584](https://github.com/vllm-project/vllm-ascend/pull/19584) 已合并
  - 中文：【v0.30.0】【文档】【修复】Correct MiniMax-M3 解码 and evaluation settings
  - 原文：[v0.30.0][Doc][BugFix] Correct MiniMax-M3 Decode and evaluation settings
  - 说明：Correct the MiniMax-M3 deployment and evaluation settings supplied by the deployment owner: - Section 5.3.1: set the A3 ordinary PD 解码 template's HCCL BUFFSIZE to 2048, matching the existing pooled 解码 setting. - Section 8.2: set the
- [PR #19596](https://github.com/vllm-project/vllm-ascend/pull/19596) 进行中
  - 中文：【修复】MegaMoe EP detection for DSpark with PCP
  - 原文：[BugFix] Fix MegaMoe EP detection for DSpark with PCP
  - 说明：When DSpark reconstructs the 投机 draft 配置 with PCP=1, MegaMoe compatibility validation can read the draft topology even though routed experts use the target model's EP group. This can 禁用 MegaMoe and skip creation of the can
- [PR #19331](https://github.com/vllm-project/vllm-ascend/pull/19331) 已合并
  - 中文：【重构】【MRV2】【PCP】Pass PCP context through common 注意力 元数据
  - 原文：[Refactor][MRV2][PCP] Pass PCP context through common attention metadata
  - 说明：Pass pcp context and pcp 缓存 group idx through AscendCommonAttentionMetadata . 更新 注意力 builders to read these fields and 移除 PCP-specific argument forwarding, capability markers, and forwarding-only capture overrides. Does thi
- [PR #19534](https://github.com/vllm-project/vllm-ascend/pull/19534) 已合并
  - 中文：【修复】【KVPool】Skip layerwise save when the 块表 is not authoritative
  - 原文：[BugFix][KVPool] Skip layerwise save when the block table is not authoritative
  - 说明：The layerwise save path builds its block range from absolute block numbers , while the per-group GVA arrays are indexed from the request's own 块表 . The two only agree when that table is the authoritative table of the request, i.e.
- [PR #19533](https://github.com/vllm-project/vllm-ascend/pull/19533) 已合并
  - 中文：【修复】【KVPool】Skip layerwise save when the 块表 is not authoritative
  - 原文：[BugFix][KVPool] Skip layerwise save when the block table is not authoritative
  - 说明：The layerwise save path builds its block range from absolute block numbers , while the per-group GVA arrays are indexed from the request's own 块表 . The two only agree when that table is the authoritative table of the request, i.e.

#### 2026-10-22

- [PR #19457](https://github.com/vllm-project/vllm-ascend/pull/19457) 已合并
  - 中文：【修复】Preserve GLM-Next 共享-pool KV budget
  - 原文：[BugFix] Preserve GLM-Next shared-pool KV budget
  - 说明：GLM-5.3-Flash MRV1 fails the 1M-context KV capacity check after 19079 correctly classifies KPool 注意力 as SFA. This sets use 稀疏=True , bypasses the generic hybrid-backing exemption, and triggers a per-layer discount even though the
- [PR #18717](https://github.com/vllm-project/vllm-ascend/pull/18717) 已合并
  - 中文：【性能】【注意力】启用 CANN FlashAttn for A5 V2 GLM DFlash2 eager drafts
  - 原文：[Performance][Attention] Enable CANN FlashAttn for A5 V2 GLM DFlash2 eager drafts
  - 说明：启用 CANN FlashAttn for GLM-5.3 + DFlash2 on Ascend A5. Use device-side 序列 lengths and reuse 注意力 元数据 across draft layers to 减少 CPU synchronization and preparation overhead. Does this PR introduce any user-facing chang
- [PR #19131](https://github.com/vllm-project/vllm-ascend/pull/19131) 已合并
  - 中文：【重构】Make CaMemAllocator inherit upstream CuMemAllocator
  - 原文：[Refactor] Make CaMemAllocator inherit upstream CuMemAllocator
  - 说明：Refactor CaMemAllocator to inherit upstream vllm.device allocator.cumem.CuMemAllocator and 移除 duplicated bookkeeping. - Reuse upstream init state, python malloc callback , get current usage , etc. - 移除 local find loaded library , Ha
- [PR #19410](https://github.com/vllm-project/vllm-ascend/pull/19410) 已合并
  - 中文：【Cherry-pick】【releases/v0.30.0】【修复】【KV Pool】移除 layerwise RPC result caches and 调度器 hit 缓存 (from #19251)
  - 原文：[Cherry-pick][releases/v0.30.0][BugFix][KV Pool] Remove layerwise RPC result caches and scheduler hit cache (from #19251)
  - 说明：Cherry-pick of PR 19251 onto releases/v0.30.0 . Original PR: 19251 Original author: @zss-hp --- Summary Reverts the two 缓存 优化 introduced by 16947 while keeping its third one (the opt-in deferred last-layer save drain, VLLM ASC
- [PR #19251](https://github.com/vllm-project/vllm-ascend/pull/19251) 已合并
  - 中文：【修复】【KV Pool】移除 layerwise RPC result caches and 调度器 hit 缓存
  - 原文：[BugFix][KV Pool] Remove layerwise RPC result caches and scheduler hit cache
  - 说明：Summary Reverts the two 缓存 优化 introduced by 16947 while keeping its third one (the opt-in deferred last-layer save drain, VLLM ASCEND LW DEFER LAST SAVE ) untouched: 1. Worker 每步 RPC result caches ( step keyinfo 缓存 /
- [PR #19479](https://github.com/vllm-project/vllm-ascend/pull/19479) 已合并
  - 中文：【修复】【KVTransfer】【v0.30.0】Sync physical layer count for layerwise PP 池化
  - 原文：[BugFix][KVTransfer][v0.30.0] Sync physical layer count for layerwise PP pooling
  - 说明：Backport the physical-layer count 修复 for layerwise PP KV 池化 to releases/v0.30.0 . 缓存 registration can expand a worker's physical KV layer count after layerwise key layers is initialized. The multi-group GVA/PP path then keeps a sta
- [PR #19480](https://github.com/vllm-project/vllm-ascend/pull/19480) 已合并
  - 中文：【修复】【KVTransfer】Sync physical layer count for layerwise PP 池化
  - 原文：[BugFix][KVTransfer] Sync physical layer count for layerwise PP pooling
  - 说明：Layerwise GVA 池化 can skip trailing physical KV layers under pipeline parallelism. layerwise key layers is initialized from the logical layer count, but 缓存 registration can subsequently expand num layers . In a multi-group PP configu
- [PR #19364](https://github.com/vllm-project/vllm-ascend/pull/19364) 已合并
  - 中文：【功能】【MRV2】【Spec Decode】支持 draft model
  - 原文：[Feature][MRV2][Spec Decode] Support draft model
  - 说明：支持 draft model spec 解码 in MRV2, followed adapted by me. N/A - vLLM main:
- [PR #19395](https://github.com/vllm-project/vllm-ascend/pull/19395) 已合并
  - 中文：【修复】【EPLB】Warn and ignore unsupported MRv2 EPLB 配置 fields
  - 原文：[BugFix][EPLB] Warn and ignore unsupported MRv2 EPLB configuration fields
  - 说明：Model Runner V2 currently rejects any unsupported additional 配置.eplb 配置 field with an exception. This change makes it warn and filter unsupported top-level EPLB and stair 配置 fields, while preserving supported 配置 value
- [PR #19475](https://github.com/vllm-project/vllm-ascend/pull/19475) 已合并
  - 中文：【Cherry-pick】【releases/v0.30.0】【持续集成】Install triton-ascend from pinned OBS wheel (from #19471)
  - 原文：[Cherry-pick][releases/v0.30.0][CI] Install triton-ascend from pinned OBS wheel (from #19471)
  - 说明：Cherry-pick of PR 19471 onto releases/v0.30.0 . Original PR: 19471 Original author: @zhangxinyuehfad --- Install triton-ascend from the prebuilt OBS wheel instead of the pip index, and move the install into the "Install pinned dependencies"
- [PR #19408](https://github.com/vllm-project/vllm-ascend/pull/19408) 已合并
  - 中文：【性能】【GLM】Reuse convolution output buffers and 移除 redundant KDA clears
  - 原文：[Performance][GLM] Reuse convolution output buffers and remove redundant KDA clears
  - 说明：Reuse a 修复 convolution output buffer across layers in each GLM-5.3 Flash 注意力 group, clearing it once during 元数据 preparation. Preserve zero 解码 padding and 移除 redundant KDA output pre-clears. Does this PR introduce any u
- [PR #19465](https://github.com/vllm-project/vllm-ascend/pull/19465) 已合并
  - 中文：【v0.30.0】【文档】【修复】Scope MiniMax-M3 TOC depth and 启用 SSD LRU eviction
  - 原文：[v0.30.0][Doc][BugFix] Scope MiniMax-M3 TOC depth and enable SSD LRU eviction
  - 说明：恢复 the original site-wide toc depth: 3 : deeper global settings also change unrelated model guides. 新增 a comment beside the setting warning against changing it for one model. A page-scoped hook rebuilds only MiniMax-M3's TOC at depth
- [PR #19456](https://github.com/vllm-project/vllm-ascend/pull/19456) 已合并
  - 中文：【v0.30.0】【持续集成】Bump CANN to 9.2.0_20261022115200
  - 原文：[v0.30.0][CI] Bump CANN to 9.2.0_20261022115200
  - 说明：更新 the CANN version from 9.2.0 20261016144033 to 9.2.0 20261022115200 on the releases/v0.30.0 branch. The change covers all eight root Dockerfiles and the daily image build workflow defaults so manual and scheduled builds remain aligne
- [PR #18931](https://github.com/vllm-project/vllm-ascend/pull/18931) 已合并
  - 中文：【修复】【模型】GLM-5.3-Flash MTP+PP embedding 加载 and empty RoPE zeroing
  - 原文：[BugFix][Model] Fix GLM-5.3-Flash MTP+PP embedding loading and empty RoPE zeroing
  - 说明：修复 two initialization issues when 服务 GLM-5.3-Flash BF16 with MRV2 and MTP+PP: - Load the common 检查点 embedding before filtering MTP-layer 权重. The last PP stage cannot share the target embedding from the first stage, leaving
- [PR #17999](https://github.com/vllm-project/vllm-ascend/pull/17999) 已合并
  - 中文：【重构】【Worker】Drop the dead routed-experts (R3) plumbing after the AuxOutput migration
  - 原文：[Refactor][Worker] Drop the dead routed-experts (R3) plumbing after the AuxOutput migration
  - 说明：vLLM moved routed-experts (R3 / 路由 replay) output to the block-keyed AuxOutput connector ( 45635) and dropped the slot-indexed plumbing ( ModelConfig.启用 return routed experts , RoutedExpertsLists / RoutedExpertsTensors , RoutedExpe
- [PR #19330](https://github.com/vllm-project/vllm-ascend/pull/19330) 已合并
  - 中文：【重构】【Worker】Move the 310P and xlite V1 runners into the V1 zone
  - 原文：[Refactor][Worker] Move the 310P and xlite V1 runners into the V1 zone
  - 说明：Follow-up to 18863, which created the V1 zone vllm ascend/worker/v1/ and moved the V1 model runner core into it. Two runner variants were left outside the zone and still pulled the V1 runner in on every xlite / 310P startup, including proce
- [PR #19054](https://github.com/vllm-project/vllm-ascend/pull/19054) 已合并
  - 中文：【算子】【功能】【MRV2】early 内核 and NZ warmup for Model Runner V2
  - 原文：[Ops][Feature][MRV2] Add early kernel and NZ warmup for Model Runner V2
  - 说明：This PR enables early 内核 warmup and NZ format-cast warmup for Model Runner V2 (MRv2). Specifically: - It integrates start early 内核 warmup , join early 内核 warmup , start nz warm thread , and join nz warm thread into NPUModelRunne
- [PR #19273](https://github.com/vllm-project/vllm-ascend/pull/19273) 已合并
  - 中文：【修复】【KVPool】segmented bulk KV transfers
  - 原文：[BugFix][KVPool] Fix segmented bulk KV transfers
  - 说明：Follow up 19070: prepare value layer intersects a requested token interval with each physical 缓存 segment, but bulk prepare value still scales every segment's length by the fraction of the logical block requested and ignores the token off
- [Issue #19455](https://github.com/vllm-project/vllm-ascend/issues/19455) 进行中
  - 中文：【缺陷】: RFork fallback keeps ~18 GiB per device alive (double model init never reclaimed) and can make the engine unable to start
  - 原文：[Bug]: RFork fallback keeps ~18 GiB per device alive (double model init never reclaimed) and can make the engine unable to start
- [PR #19164](https://github.com/vllm-project/vllm-ascend/pull/19164) 已合并
  - 中文：【修复】【WeightTransfer】basic packed tensor storage and edge cases
  - 原文：[BugFix][WeightTransfer] Fix basic packed tensor storage and edge cases
  - 说明：This PR extracts basic packed-transfer correctness fixes from 18078 and adds validation and failure handling. Only packed tensor.py and its existing unit tests are modified. The changes address storage aliasing, unaligned dtype views, HCCL

#### 2026-10-21

- [Issue #19391](https://github.com/vllm-project/vllm-ascend/issues/19391) 进行中
  - 中文：【缺陷】: Long prompts (≥~4K tokens) are never scheduled with `--max-num-batched-tokens 8192`: `running=0`, `waiting_by_reason=capacity`, zero engine logs, workers idle
  - 原文：[Bug]:  Long prompts (≥~4K tokens) are never scheduled with `--max-num-batched-tokens 8192`: `running=0`, `waiting_by_reason=capacity`, zero engine logs, workers idle
- [PR #19347](https://github.com/vllm-project/vllm-ascend/pull/19347) 已合并
  - 中文：【修复】Preserve full MRV1 PP intermediates with MoE 序列 parallelism
  - 原文：[BugFix] Preserve full MRV1 PP intermediates with MoE sequence parallelism
  - 说明：修复 MRV1 pipeline-parallel buffer sizing and token truncation when global MoE 序列 parallelism is 启用 but PP boundaries carry full token tensors. The actual vLLM 运行时 ( db9527a ) disables DeepseekV2DecoderLayer.use 序列 paral
- [PR #19327](https://github.com/vllm-project/vllm-ascend/pull/19327) 已合并
  - 中文：【v0.30.0】【文档】【修复】MiniMax-M3 DP1 launch and SSD pool sizing
  - 原文：[v0.30.0][Doc][BugFix] Fix MiniMax-M3 DP1 launch and SSD pool sizing
  - 说明：The A3 预填充 examples in Sections 5.3.1 and 5.3.2 default to DP1 but explicitly pass --data-parallel-rank 0 . vLLM interprets any explicitly supplied rank as external DP load balancing, then rejects that mode when DP size is 1. Build a Ba
- [Issue #19380](https://github.com/vllm-project/vllm-ascend/issues/19380) 进行中
  - 中文：【缺陷】: v0.23.0.post1 image ships modelscope>=1.38; VLLM_USE_MODELSCOPE QuickStart fails with "Error retrieving file list: 'Type'"
  - 原文：[Bug]: v0.23.0.post1 image ships modelscope>=1.38; VLLM_USE_MODELSCOPE QuickStart fails with "Error retrieving file list: 'Type'"
- [PR #19165](https://github.com/vllm-project/vllm-ascend/pull/19165) 已合并
  - 中文：【修复】【MRV2】Preserve hybrid dummy query widths with DP and MTP
  - 原文：[BugFix][MRV2] Preserve hybrid dummy query widths with DP and MTP
  - 说明：Extend 18038 to hybrid targets. PIECEWISE dummy padding currently changes their logical query width, so MTP fails when reusing the target's DP synchronization state. Preserve the scheduled dummy queries and pass the padded input extent sepa
- [Issue #19360](https://github.com/vllm-project/vllm-ascend/issues/19360) 进行中
  - 中文：【RFC】: On-demand main-KV 加载 for 长上下文 and high 前缀 hit rate DSA 预填充
  - 原文：[RFC]: On-demand main-KV loading for long context and high prefix hit rate DSA prefill
  - 说明：Motivation. Summary For very long DSA 预填充 requests with a high 前缀-缓存 hit ratio, we propose keeping the full main KV in host 显存 and 加载 only the main-KV rows selected by each layer's query Top-K union. Requests would be sc
- [PR #19079](https://github.com/vllm-project/vllm-ascend/pull/19079) 已合并
  - 中文：【修复】Recognize KPool main 注意力 as SFA
  - 原文：[BugFix] Recognize KPool main attention as SFA
  - 说明：GLM-5.3-Flash with a KPool 索引器 still uses SFA for its main 注意力. Previously 启用 sfa() returned False whenever index kpool was present. On V2, this made 缓存 planning use a 512-byte KV slot even though SFA C8 writes 528 bytes (5
- [PR #19159](https://github.com/vllm-project/vllm-ascend/pull/19159) 已合并
  - 中文：【功能】【MRV2】Default encoder-decoder models to Model Runner V2
  - 原文：[Feature][MRV2] Default encoder-decoder models to Model Runner V2
  - 说明：Unset VLLM USE V2 MODEL RUNNER still selects Model Runner V1 when is encoder decoder is true. Whisper is that blacklist entry. Encoder-decoder model state on MRV2 is already on main ( 17979, 18044), so this PR drops the entry. Explicit 0 or
- [PR #19324](https://github.com/vllm-project/vllm-ascend/pull/19324) 已合并
  - 中文：【算子】【修复】Pin mooncake-transfer-engine-npu to >=0.3.13.post1 for NPU 显存 registration
  - 原文：[Ops][BugFix] Pin mooncake-transfer-engine-npu to >=0.3.13.post1 for NPU memory registration
  - 说明：Pins mooncake-transfer-engine-npu =0.3.13.post1 as an explicit dependency in requirements.txt . The layerwise KV 卸载 特性 ( 18999) introduced NPU device 显存 registration via register 显存(ptr, size, location="npu") in mooncake t
- [Issue #19325](https://github.com/vllm-project/vllm-ascend/issues/19325) 进行中
  - 中文：[Bug]: 开启带堆栈的profiling采集会直接崩溃
- [PR #19167](https://github.com/vllm-project/vllm-ascend/pull/19167) 已合并
  - 中文：【修复】【KV Pool】Log actual Mooncake SSD directories and cover multi-DP startup
  - 原文：[BugFix][KV Pool] Log actual Mooncake SSD directories and cover multi-DP startup
  - 说明：With Mooncake SSD 卸载 启用, each worker passes a rank-specific directory to store.setup() , but the initialization log prints only the configured root. Multiple DP workers therefore appear to use the same directory, obscuring which p
- [Issue #19322](https://github.com/vllm-project/vllm-ascend/issues/19322) 进行中
  - 中文：【缺陷】【Ascend 950DT】: aclnnGroupedMatmulSwigluQuantWeightNZ 配置 not found on Atlas 850E with CANN 9.2.0
  - 原文：[Bug]: [Ascend 950DT] aclnnGroupedMatmulSwigluQuantWeightNZ config not found on Atlas 850E with CANN 9.2.0
- [Issue #19316](https://github.com/vllm-project/vllm-ascend/issues/19316) 进行中
  - 中文：【缺陷】: E1020 10:10:29.336763 7054 transfer_executor_base.cpp:263] Failed to connect to target: 10.233.1.243:20597, status: 103905, errmsg: E19999: Inner Error!
  - 原文：[Bug]: E1020 10:10:29.336763  7054 transfer_executor_base.cpp:263] Failed to connect to target: 10.233.1.243:20597, status: 103905, errmsg: E19999: Inner Error!
- [Issue #19315](https://github.com/vllm-project/vllm-ascend/issues/19315) 进行中
  - 中文：【RFC】: 新增 H-Spec spec 解码
  - 原文：[RFC]: add H-Spec spec decode
  - 说明：Motivation. adds inference 支持 for H-Spec draft model ( Proposed Change. adds inference 支持 for H-Spec draft model ( Feedback Period. No response CC List. No response Any Other Things. No response
- [Issue #19311](https://github.com/vllm-project/vllm-ascend/issues/19311) 进行中
  - 中文：夜间 Daily test failure on 2026-10-21 08:00 - please check
  - 原文：Nightly Daily test failure on 2026-10-21 08:00 - please check
  - 说明：The 夜间 Daily test for vllm-ascend reported failures at 08:00 on 2026-10-21. Failed on: a2-1 card-(part 6-7), a3-4 card-(part 1-5) Failed 测试用例: - TestPhysicalMemory::test staged release each step changes 显存 — requests.exceptio
- [PR #19128](https://github.com/vllm-project/vllm-ascend/pull/19128) 已合并
  - 中文：【v0.30.0】【文档】Translated Doc files 2026-10-19
  - 原文：[v0.30.0][Doc] Translated Doc files 2026-10-19
  - 说明：Auto-Translation Summary Translated 13 file(s): - <code /home/runner/ work/vllm-ascend/vllm-ascend/docs/source/locale/zh CN/LC MESSAGES/developer guide/Design Documents/上下文并行.po</code - <code /home/runner/ work/vllm-ascend/vllm-a
- [PR #18863](https://github.com/vllm-project/vllm-ascend/pull/18863) 已合并
  - 中文：【重构】【Worker】Isolate the V1 model runner core into worker/v1/
  - 原文：[Refactor][Worker] Isolate the V1 model runner core into worker/v1/
  - 说明：It creates the V1 zone vllm ascend/worker/v1/ and moves the V1 core into it, so that the upcoming default flip (and the eventual final removal) operates on a contained, deletable module instead of a half-共享 one. Target architecture (see

#### 2026-10-20

- [PR #18949](https://github.com/vllm-project/vllm-ascend/pull/18949) 已合并
  - 中文：【重构】【模型】Use CANN MsaIndexScore for MiniMax-M3
  - 原文：[Refactor][Model] Use CANN MsaIndexScore for MiniMax-M3
  - 说明：MiniMax-M3 currently builds and ships its own msa index score 内核. This PR 切换 IndexScore to CANN on main . - Call the public cann ops transformer.ops.msa index score Python API directly. CANN owns the ACLNN adapter, operator regist
- [Issue #19293](https://github.com/vllm-project/vllm-ascend/issues/19293) 进行中
  - 中文：【RFC】: Adapt to vLLM HiSparse
  - 原文：[RFC]: Adapt to vLLM HiSparse
  - 说明：Motivation. Based on RFC ( 48203), we have already supported 稀疏 KV 缓存 卸载 for 解码 in PR ( 13026), bringing longer max-model-len 支持 or larger 解码 batch size and 吞吐. We also further optimized its h2d performanc
- [PR #19243](https://github.com/vllm-project/vllm-ascend/pull/19243) 已合并
  - 中文：【修复】Revert PCP-local profile token budget (#18270)
  - 原文：[BugFix] Revert PCP-local profile token budget (#18270)
  - 说明：Revert 18270 (commit 9baf957e8fda95e85be70e101e0beea2c207d712 ). 移除 the PCP-local temporary token budget from MRV2 profile run and 恢复 the previous profile behavior. Only vllm ascend/worker/v2/model runner.py and tests/ut/worker/tes
- [PR #19244](https://github.com/vllm-project/vllm-ascend/pull/19244) 已合并
  - 中文：【修复】【v0.30.0】Revert PCP-local profile token budget (#18311)
  - 原文：[BugFix][v0.30.0] Revert PCP-local profile token budget (#18311)
  - 说明：Revert 18311 (commit 608511d684d03941cb5cecb2b72d5ba56b6a6164 ). 移除 the PCP-local temporary token budget from MRV2 profile run and 恢复 the previous profile behavior. Only vllm ascend/worker/v2/model runner.py and tests/ut/worker/tes
- [PR #19263](https://github.com/vllm-project/vllm-ascend/pull/19263) 已合并
  - 中文：【修复】【注意力】【v0.30.0】Size o_proj static exchange buffers from 解码 capacity
  - 原文：[BugFix][Attention][v0.30.0] Size o_proj static exchange buffers from decode capacity
  - 说明：v0.30.0 counterpart of 19262. forward o proj sizes its static exchange buffers to max(get potential max tokens(), max num batched tokens) . The max was 新增 so 显存 profiling (which uses the full 调度器 budget) can reuse the 解码 bu
- [PR #18742](https://github.com/vllm-project/vllm-ascend/pull/18742) 已合并
  - 中文：【功能】【注意力】Port tested FlashMLA integration onto merged PROLOG main
  - 原文：[Feature][Attention] Port tested FlashMLA integration onto merged PROLOG main
  - 说明：Port external FlashMLA 解码 onto main, using the reviewed v0.30.0 integration from 18758 at d1aa5a515 with the 必填 main request-state and graph-dispatch adaptations. This revision replays the existing 11 PR commits individually onto
- [PR #19262](https://github.com/vllm-project/vllm-ascend/pull/19262) 已合并
  - 中文：【修复】【注意力】Size o_proj static exchange buffers from 解码 capacity
  - 原文：[BugFix][Attention] Size o_proj static exchange buffers from decode capacity
  - 说明：forward o proj sizes its static exchange buffers to max(get potential max tokens(), max num batched tokens) . The max was 新增 so 显存 profiling (which uses the full 调度器 budget) can reuse the 解码 buffers. But it also makes every
- [PR #19246](https://github.com/vllm-project/vllm-ascend/pull/19246) 已合并
  - 中文：【修复】【v0.30.0】【MRV2】Use compiler 配置 for static 内核 initialization
  - 原文：[BugFix][v0.30.0][MRV2] Use compiler config for static kernel initialization
  - 说明：MRV2 profiling can reach static 内核 initialization without an active current-vLLM-配置 context, causing: AssertionError: Current vLLM 配置 is not set. Use self.vllm 配置 , already supplied by compute hash() , instead of get current
- [PR #18916](https://github.com/vllm-project/vllm-ascend/pull/18916) 已合并
  - 中文：【修复】【Core】Validate Score encoder 缓存 embedding counts
  - 原文：[BugFix][Core] Validate Score encoder cache embedding counts
  - 说明：【vllm-project/vllm 57696】Fixes 19172. Adapt ( included in vLLM v0.31.0, to ScoreEncoderCacheManager . The score manager stores embedding counts in CacheEntry.num embeds , but inherits get cached num encoder embeds() from upstream, which rea
- [PR #16930](https://github.com/vllm-project/vllm-ascend/pull/16930) 已合并
  - 中文：【修复】【KV Transfer】Register class-name aliases for KV connectors
  - 原文：[BugFix][KV Transfer] Register class-name aliases for KV connectors
  - 说明：MultiConnector keys per-request transfer stats by class . name ( multi connector.py::get kv connector stats ) and, on the logger side, resolves those keys back through KVConnectorFactory.get connector class by name . The factory registry is
- [PR #19069](https://github.com/vllm-project/vllm-ascend/pull/19069) 已合并
  - 中文：【修复】【KVPool】【v0.30.0】Preserve physical blocks in bulk and layerwise 缓存 transfers
  - 原文：[BugFix][KVPool][v0.30.0] Preserve physical blocks in bulk and layerwise cache transfers
  - 说明：This PR fixes the AscendStore KVPool save/恢复 回退 introduced by 18256. For the affected MLA path, 18256 changed the 缓存 allocation to place NoPE and RoPE payloads together within each physical 内核 block. The existing KVPool
- [PR #19070](https://github.com/vllm-project/vllm-ascend/pull/19070) 已合并
  - 中文：【修复】【KVPool】Preserve physical blocks in bulk and layerwise 缓存 transfers
  - 原文：[BugFix][KVPool] Preserve physical blocks in bulk and layerwise cache transfers
  - 说明：This PR fixes the AscendStore KVPool save/恢复 回退 introduced by 18256. For the affected MLA path, 18256 changed the 缓存 allocation to place NoPE and RoPE payloads together within each physical 内核 block. The existing KVPool
- [PR #19012](https://github.com/vllm-project/vllm-ascend/pull/19012) 已合并
  - 中文：【修复】Bound MLA 预填充 npu_attention_update inputs with 16-way staged merging
  - 原文：[BugFix] Bound MLA prefill npu_attention_update inputs with 16-way staged merging
  - 说明：In vllm ascend/注意力/mla v1.py ( compute 预填充 context ), MLA chunked 预填充 accumulated query 前缀 (output, LSE) pairs alongside all historical chunks into one torch npu.npu 注意力 更新 call. When 预填充 spans 16 or more his
- [PR #19217](https://github.com/vllm-project/vllm-ascend/pull/19217) 已合并
  - 中文：【v0.30.0】【修复】【PP】Skip redundant draft feedback on PD 预填充 nodes
  - 原文：[v0.30.0][BugFix][PP] Skip redundant draft feedback on PD prefill nodes
  - 说明：MRV1 PD 预填充 nodes are excluded from the PP sampled-token IPC patch. Consequently, synchronous PP + 投机解码 still falls through to EngineCore.post step() , whose draft-token RPC can drain in-flight PP batches even though the
- [PR #19245](https://github.com/vllm-project/vllm-ascend/pull/19245) 已合并
  - 中文：【修复】【MRV2】Use compiler 配置 for static 内核 initialization
  - 原文：[BugFix][MRV2] Use compiler config for static kernel initialization
  - 说明：MRV2 profiling can reach static 内核 initialization without an active current-vLLM-配置 context, causing: AssertionError: Current vLLM 配置 is not set. Use self.vllm 配置 , already supplied by compute hash() , instead of get current
- [PR #19151](https://github.com/vllm-project/vllm-ascend/pull/19151) 已合并
  - 中文：【性能】【注意力】Use native GatherPa for strided MLA 缓存 reads (v0.30.0)
  - 原文：[Performance][Attention] Use native GatherPa for strided MLA cache reads (v0.30.0)
  - 说明：Strided MLA history-缓存 reads currently build per-token request/slot indices with repeat interleave , index select , and advanced indexing, then pack and copy the gathered KV. This adds substantial indexing overhead for long cached 前缀
- [PR #19211](https://github.com/vllm-project/vllm-ascend/pull/19211) 已合并
  - 中文：【修复】【0.30.0】【NPU】Defer FLA imports and registration
  - 原文：[BugFix][0.30.0][NPU] Defer FLA imports and registration
  - 说明：From main branch Alternative to 19209 for releases/v0.30.0 . Changes are cherry-picked with -x -s ; the release's existing GLM 配置 import is preserved. Latest test 修复 9c78730dc5fd64d3fea33b999cee0a86d2becc18 is cherry-picked as 439ec4f3
- [PR #19210](https://github.com/vllm-project/vllm-ascend/pull/19210) 已合并
  - 中文：【修复】【NPU】Defer FLA imports and registration until worker initialization
  - 原文：[BugFix][NPU] Defer FLA imports and registration until worker initialization
  - 说明：Alternative to 19206, based on upstream main. Alternative to the unified FLA capability-query patch: defer the four discovery-time FLA imports and their registration to operator/model use. - Import l2norm fwd inside A2/A3 GDN 预填充 and ch
- [PR #19256](https://github.com/vllm-project/vllm-ascend/pull/19256) 进行中
  - 中文：【功能】Route DSpark draft SparseFlashMla through the compiled binding on A3
  - 原文：[Feature] Route DSpark draft SparseFlashMla through the compiled binding on A3
  - 说明：Stacked on 19220 — the first commit belongs to that PR; only the last commit is new here. Once 19220 合并, this PR's diff collapses to the A3 part. Extends the DSpark draft SparseFlashMla path to A3-class hardware. The CANN toolkit namesp
- [Issue #19255](https://github.com/vllm-project/vllm-ascend/issues/19255) 进行中
  - 中文：【缺陷】Mooncake KV lease TTL too short causes -707 LEASE_EXPIRED in PD-disaggregated vLLM-Ascend deployment
  - 原文：[Bug] Mooncake KV lease TTL too short causes -707 LEASE_EXPIRED in PD-disaggregated vLLM-Ascend deployment

#### 2026-10-19

- [Issue #19208](https://github.com/vllm-project/vllm-ascend/issues/19208) 进行中
  - 中文：【缺陷】: PR950PD分离场景下跑测试脚本（测试脚本的输入为26K），D节点启动服务时不设置--no-swa-bounded-replay报错：RuntimeError: synchronize:../torch_npu/csrc/core/npu/NPUEvent.cpp:215 NPU function error: aclrtSynchronizeEvent(event_), error code is 507015
  - 原文：[Bug]: PR950PD分离场景下跑测试脚本（测试脚本的输入为26K），D节点启动服务时不设置--no-swa-bounded-replay报错：RuntimeError: synchronize:../torch_npu/csrc/core/npu/NPUEvent.cpp:215 NPU function error: aclrtSynchronizeEvent(event_), error code is 507015
- [Issue #19207](https://github.com/vllm-project/vllm-ascend/issues/19207) 进行中
  - 中文：【缺陷】:PR950PD分离场景下跑精度测试，P节点报错【ValueError: could not broadcast input array from shape (32,) into shape (16,)】
  - 原文：[Bug]:PR950PD分离场景下跑精度测试，P节点报错【ValueError: could not broadcast input array from shape (32,) into shape (16,)】
- [PR #19138](https://github.com/vllm-project/vllm-ascend/pull/19138) 已合并
  - 中文：【功能】【MRV2】【SpecDecode】支持 block verification in MRV2
  - 原文：[Feature][MRV2][SpecDecode] Support block verification in MRV2
  - 说明：Implement upstream block verification for Ascend Model Runner V2. Previously, use block verification was accepted but ignored. - Reuse upstream cumulative probability-ratio and residual-mass 内核. - 新增 block acceptance and 前缀-scaled
- [PR #19158](https://github.com/vllm-project/vllm-ascend/pull/19158) 已合并
  - 中文：【Cherry-pick】【releases/v0.30.0】【MRV2】【修复】MRV2 310P rejection sampler host buffer shrink(#18995)
  - 原文：[Cherry-pick][releases/v0.30.0][MRV2][BugFix] Fix MRV2 310P rejection sampler host buffer shrink(#18995)
  - 说明：Cherry-pick of PR 18995 onto releases/v0.30.0 Original PR 18995 Original author: @Thiagor2002 - In RejectionSampler310V2 , the temperature path used to assign 每步 CPU tensors to sampled tokens cpu / num cpu , shrinking the preallocated
- [PR #18995](https://github.com/vllm-project/vllm-ascend/pull/18995) 已合并
  - 中文：【功能】【MRV2】【310P】Default Model Runner V2 on Ascend 310P
  - 原文： [Feature][MRV2][310P] Default Model Runner V2 on Ascend 310P
  - 说明：Follow-up to 17681 (default Model Runner V2 + 特性 blacklist). On Ascend 310P, Model Runner V1 is no longer maintained, but 17681 still blacklists 310P via is 310p() , so unset VLLM USE V2 MODEL RUNNER falls back to V1. This PR removes t
- [Issue #18237](https://github.com/vllm-project/vllm-ascend/issues/18237) 已关闭
  - 中文：[Bug] ：基准报告分类取决于父目录名称
  - 原文：[Bug]: Benchmark report classification depends on parent directory names
- [PR #19170](https://github.com/vllm-project/vllm-ascend/pull/19170) 已合并
  - 中文：【重构】【KV Pool】迁移 KVPOOL_RANGE_DEBUG toggle to additional_config
  - 原文：[Refactor][KV Pool] Migrate KVPOOL_RANGE_DEBUG toggle to additional_config
  - 说明：迁移 the per-layer KVPool range-调试 切换 from the VLLM ASCEND KVPOOL RANGE 调试 environment variable to the additional 配置.kv pool range 调试 field, so it flows through the centralized AscendConfig 配置 path, consistent
- [PR #19178](https://github.com/vllm-project/vllm-ascend/pull/19178) 已合并
  - 中文：【修复】【v0.30.0】【Compilation】初始化 static 内核 运行时 before 加载 cached graphs
  - 原文：[BugFix][v0.30.0][Compilation] Initialize static kernel runtime before loading cached graphs
  - 说明：Refs 19176. Release v0.30.0 backport of the same compiler initialization 修复. LOCAL WORLD SIZE inference and the static 内核 blacklist currently run in configure backend() , which cached graph 加载 bypasses. On restart, a missing local
- [Issue #19176](https://github.com/vllm-project/vllm-ascend/issues/19176) 已关闭
  - 中文：【缺陷】: Static 内核 缓存 is not reused after restarting with the same model
  - 原文：[Bug]: Static kernel cache is not reused after restarting with the same model
  - 说明：Environment Ascend A3, TP=16, DP=1, Model Runner V1; GLM W8A8; torch-npu 2.10.0.post4, CANN 9.2.0. 启用 npugraph ex and 启用 static 内核 are 启用. Reproduction 1. Start inference and wait for static 内核 compilation to finish. 2.
- [PR #19177](https://github.com/vllm-project/vllm-ascend/pull/19177) 已合并
  - 中文：【修复】【Compilation】初始化 static 内核 运行时 before 加载 cached graphs
  - 原文：[BugFix][Compilation] Initialize static kernel runtime before loading cached graphs
  - 说明：Fixes 19176. LOCAL WORLD SIZE inference and the static 内核 blacklist currently run in configure backend() , which cached graph 加载 bypasses. On restart, a missing local world size makes torch npu skip static compilation; supplying it
- [PR #18889](https://github.com/vllm-project/vllm-ascend/pull/18889) 已合并
  - 中文：【0.30.0 only】【修复】GLM-5.3-Flash OProj TP with ragged DP 解码 (v0.30.0)
  - 原文：[0.30.0 only][BugFix] Fix GLM-5.3-Flash OProj TP with ragged DP decoding (v0.30.0)
  - 说明：Keep GLM-5.3-Flash OProj TP exchanges consistent when DP ranks have different 解码 batch sizes or become idle. SFA and Flash KDA use a 共享 padded 解码 capacity and persistent all-to-all/减少-scatter operands, clear unused rows on e
- [PR #19169](https://github.com/vllm-project/vllm-ascend/pull/19169) 已合并
  - 中文：【功能】【Xlite】支持 w4a8 量化 for xlite
  - 原文：[Feature][Xlite] Support w4a8 quantization for xlite
  - 说明：This PR makes the vllm-ascend xlite adapter ( StandardXliteModel in vllm ascend/xlite/xlite.py ) correctly load W4A8 per-channel quantized 检查点 produced by msModelSlim, so W4A8 quantized MoE models can run on the xlite 运行时. Two c
- [Issue #19191](https://github.com/vllm-project/vllm-ascend/issues/19191) 进行中
  - 中文：【缺陷】: Mooncake 调度器 sending thread swallows ZMQ bind failure ("Address already in use"), 预填充 instance starts in a broken state
  - 原文：[Bug]: Mooncake scheduler sending thread swallows ZMQ bind failure ("Address already in use"), prefill instance starts in a broken state
- [PR #18933](https://github.com/vllm-project/vllm-ascend/pull/18933) 已合并
  - 中文：【功能】【MRV2】【xlite】XliteModelRunnerV2 for model runner v2 支持 in xlite backend
  - 原文：[Feature][MRV2][xlite] Add XliteModelRunnerV2 for model runner v2 support in xlite backend
  - 说明：This PR adds model runner V2 支持 in the xlite backend. The xlite package need to be bumped to 0.2.0rc3 for the adaptation. Refer to RFC 18202 for the MRV2 transitioning plan. 注意力 types adapted for MRV2 include MHA, GQA, MLA, and D
- [Issue #19143](https://github.com/vllm-project/vllm-ascend/issues/19143) 进行中
  - 中文：【RFC】: 支持 Reflection Beam and DFlash2 on Ascend
  - 原文：[RFC]: Support Reflection Beam and DFlash2 on Ascend
  - 说明：Motivation. vLLM 新增 Reflection Beam in vllm-project/vllm 62074, merged as b0d61e5d26561f865bf89688eb0aea5000133a42 . Beam-1.0 is a 501B-total / 23B-active MoE model with a DFlash2 drafter. This RFC proposes bringing the target model and
- [PR #19018](https://github.com/vllm-project/vllm-ascend/pull/19018) 已合并
  - 中文：【V0.30.0】【文档】【杂项】更新 translation links and format admonitions in documentation
  - 原文：[V0.30.0][Doc][Misc] Update translation links and format admonitions in documentation
  - 说明：This PR 更新 Chinese translation files ( .po ) for various model tutorials to point to the Chinese version of the MindIE Motor documentation. It also standardizes the note and warning admonitions in 投机解码.md to use the !!!
- [PR #18901](https://github.com/vllm-project/vllm-ascend/pull/18901) 已合并
  - 中文：【修复】【KVPool】Copy Mamba state after synchronous KV loads
  - 原文：[BugFix][KVPool] Copy Mamba state after synchronous KV loads
  - 说明：Fixes 18898. With the V2 model runner, Mamba 对齐 state preprocessing can copy a cached source state into the running state before a synchronous KVPool load restores that source. The model then consumes stale recurrent state even though pr
- [PR #18917](https://github.com/vllm-project/vllm-ascend/pull/18917) 已合并
  - 中文：【性能】【GLM】Eliminate copy_conv_state launches for SD states
  - 原文：[Performance][GLM] Eliminate copy_conv_state launches for SD states
  - 说明：Eliminate the two copy conv state launches per GLM short-convolution call on supported SD layouts: gathering state before AscendC and scattering it back afterwards. AscendC can read and 更新 these page- and row-strided states directly whe
- [Issue #19120](https://github.com/vllm-project/vllm-ascend/issues/19120) 进行中
  - 中文：【RFC】: Track vLLM 投机解码 issues and fixes
  - 原文：[RFC]: Track vLLM speculative decoding issues and fixes
  - 说明：Motivation. Track vLLM 投机-解码 issues and fixes, using upstream Issues as the primary tracking entries. Track Ascend workaround PRs (including later adjustments) separately from PRs that 移除 those workarounds. Proposed Chang
- [PR #18838](https://github.com/vllm-project/vllm-ascend/pull/18838) 已合并
  - 中文：【修复】preserve configured parameters across level-2 sleep on Ascend
  - 原文：[bugfix] preserve configured parameters across level-2 sleep on Ascend
  - 说明：The Ascend worker overrides the upstream sleep and wake-up lifecycle but does not preserve parameters configured by sleep preserve parameter names. When level-2 sleep discards the 权重 and the sender only reloads the remaining parameters

#### 2026-10-18

- [Issue #19114](https://github.com/vllm-project/vllm-ascend/issues/19114) 进行中
  - 中文：【RFC】: 对齐 Ascend HiSparse with upstream HMA and 新增 direct packed 稀疏 注意力
  - 原文：[RFC]: Align Ascend HiSparse with upstream HMA and add direct packed sparse attention
  - 说明：Motivation. Motivation. 支持 upstream Hybrid HiSparse on Ascend for 稀疏 MLA/DSA models, including colocated 预填充/解码 and long contexts. Reuse upstream scheduling, Hybrid 显存 Allocator (HMA) allocation, 前缀缓存, and tar
- [Issue #19113](https://github.com/vllm-project/vllm-ascend/issues/19113) 进行中
  - 中文：【RFC】: 对齐 Ascend HiSparse with upstream HMA and 新增 direct packed 稀疏 注意力
  - 原文：[RFC]: Align Ascend HiSparse with upstream HMA and add direct packed sparse attention
  - 说明：Motivation. 支持 upstream Hybrid HiSparse on Ascend for 稀疏 MLA/DSA models, including colocated 预填充/解码 and long contexts. Reuse upstream scheduling, Hybrid 显存 Allocator (HMA) allocation, 前缀缓存, and target/draft co
- [PR #19090](https://github.com/vllm-project/vllm-ascend/pull/19090) 已合并
  - 中文：【修复】【KVPool】【v0.30.0】Isolate Memcache transfer failures
  - 原文：[BugFix][KVPool][v0.30.0] Isolate Memcache transfer failures
  - 说明：From main Memcache returns failed operation statuses, but Python transfer paths can raise on these results and leave layer fences or queue tasks incomplete. Handle returned statuses inside AscendStoreConnector: failed readiness queries beco
- [PR #19101](https://github.com/vllm-project/vllm-ascend/pull/19101) 已合并
  - 中文：【修复】【KVPool】Isolate Memcache transfer failures
  - 原文：[BugFix][KVPool] Isolate Memcache transfer failures
  - 说明：Main-branch counterpart of 19090. Memcache returns failed operation statuses, but Python transfer paths can raise on these results and leave layer fences or queue tasks incomplete. Handle returned statuses inside AscendStoreConnector. Synch
- [PR #19038](https://github.com/vllm-project/vllm-ascend/pull/19038) 已合并
  - 中文：【v0.30.0】【性能】【SpecDecode】Skip audited FlashMLA CPU length synchronization
  - 原文：[v0.30.0][Performance][SpecDecode] Skip audited FlashMLA CPU length synchronization
  - 说明：Follow-up to 18758; that FlashMLA integration is not included in this diff. Keep both Ascend V2 投机-解码 CPU length synchronization 优化 in this existing PR: 1. DSpark draft: skip the blocking D2H length copy only with
- [PR #19059](https://github.com/vllm-project/vllm-ascend/pull/19059) 已合并
  - 中文：【v0.30.0】【持续集成】【修复】GLM-5.3-Flash PD 夜间 hangs and refresh baseline
  - 原文：[v0.30.0][CI][BugFix] Fix GLM-5.3-Flash PD nightly hangs and refresh baseline
  - 说明：Mitigate GLM-5.3-Flash PD 夜间 startup hangs in GLM-5.3-Flash-W8A8-130k-PD.yaml : - Incorporate the workaround from 19049: set TORCH EXTENSIONS DIR=/tmp/torch extensions/glm53 in env common , so both 预填充 and 解码 use pod-local Torc
- [PR #19098](https://github.com/vllm-project/vllm-ascend/pull/19098) 已合并
  - 中文：【修复】【v0.30.0】【EPLB】Fence staging-buffer reuse before HIXL READs
  - 原文：[BugFix][v0.30.0][EPLB] Fence staging-buffer reuse before HIXL READs
  - 说明：Backport the HIXL staging-buffer synchronization and its unit test from f978348e9045fb045a4281d189339ef2ca1f1a45 ( 17681) to releases/v0.30.0 . The release branch at 5ba1e2ad4d1d is missing these hunks. Also carry the matching CPU fallback
- [PR #19084](https://github.com/vllm-project/vllm-ascend/pull/19084) 已合并
  - 中文：【修复】【v0.30.0】Prevent GLM KPool empty-work 显存 corruption on A3
  - 原文：[BugFix][v0.30.0] Prevent GLM KPool empty-work memory corruption on A3
  - 说明：Backport the A3 GLM KPool 修复 from 19073 to releases/v0.30.0, which already contains the CANN pooled-索引器 integration from 18289. On the reproduced A3 stack, CANN PoolKeyIndexer entered an empty-work initialization path that wrote beyond
- [PR #16936](https://github.com/vllm-project/vllm-ascend/pull/16936) 已合并
  - 中文：【修复】Preserve GLM-5.3-Flash MRV2 MTP capture lifecycle
  - 原文：[BugFix] Preserve GLM-5.3-Flash MRV2 MTP capture lifecycle
  - 说明：When index share for mtp iteration is 启用, MTP 运行时 computes top-k in the first draft step and reuses those indices in later steps. The Ascend MRV2 capture override omitted the existing lifecycle hooks and captured 解码 with skip t
- [PR #19073](https://github.com/vllm-project/vllm-ascend/pull/19073) 已合并
  - 中文：【修复】Prevent GLM KPool empty-work 显存 corruption on A3
  - 原文：[BugFix] Prevent GLM KPool empty-work memory corruption on A3
  - 说明：修复 A3 GLM KPool 显存 corruption when DSA-CP leaves a local shard with queries but no completed pooled keys. On the reproduced A3 stack, CANN PoolKeyIndexer entered an empty-work initialization path that wrote beyond its TND output alloca
- [PR #19106](https://github.com/vllm-project/vllm-ascend/pull/19106) 已合并
  - 中文：【修复】【持续集成】Keep the image's daily deps in 夜间 e2e 运行时 installs
  - 原文：[BugFix][CI] Keep the image's daily deps in nightly e2e runtime installs
  - 说明：From main branch This is a temporary solution; a final method will be provided later. requirements-夜间.txt, now used by the 夜间 image layer and the e2e 运行时 install, has no -r requirements.txt: that stopped the daily torch-npu fr
- [PR #19104](https://github.com/vllm-project/vllm-ascend/pull/19104) 已合并
  - 中文：【修复】【持续集成】Keep the image's daily deps in 夜间 e2e 运行时 installs
  - 原文：[BugFix][CI] Keep the image's daily deps in nightly e2e runtime installs
  - 说明：This is a temporary solution; a final method will be provided later. requirements-夜间.txt, now used by the 夜间 image layer and the e2e 运行时 install, has no -r requirements.txt : that stopped the daily torch-npu from being replace
- [PR #19013](https://github.com/vllm-project/vllm-ascend/pull/19013) 已合并
  - 中文：【修复】Bound MLA 预填充 npu_attention_update inputs with 16-way staged merging
  - 原文：[BugFix] Bound MLA prefill npu_attention_update inputs with 16-way staged merging
  - 说明：Backports the bounded 16-way staged torch npu.npu 注意力 更新 合并 修复 in MLA chunked 预填充 from main ( 19012) to releases/v0.30.0 . In vllm ascend/注意力/mla v1.py ( compute 预填充 context ), 预填充 previously accumulated quer
- [PR #19096](https://github.com/vllm-project/vllm-ascend/pull/19096) 进行中
  - 中文：【功能】Window-capped per-group KV pools for hybrid full+sliding 注意力 (NPU 前缀-缓存 capacity)
  - 原文：[Feature] Window-capped per-group KV pools for hybrid full+sliding attention (NPU prefix-cache capacity)
  - 说明：- vLLM main:

#### 2026-10-17

- [PR #18957](https://github.com/vllm-project/vllm-ascend/pull/18957) 已合并
  - 中文：【修复】【v0.30.0】Mooncake V2 调度器 resource cleanup
  - 原文：[BugFix][v0.30.0] Fix Mooncake V2 scheduler resource cleanup
  - 说明：Cherry-pick from 18956. Mooncake Connector V2 retains completed request IDs indefinitely, requeues failed completion notifications without a limit, and does not stop its 调度器 control threads during shutdown. Use pending delayed-free re
- [PR #18956](https://github.com/vllm-project/vllm-ascend/pull/18956) 已合并
  - 中文：【修复】【KV Transfer】Mooncake V2 调度器 resource cleanup
  - 原文：[BugFix][KV Transfer] Fix Mooncake V2 scheduler resource cleanup
  - 说明：Mooncake Connector V2 retains completed request IDs indefinitely, requeues failed completion notifications without a limit, and does not stop its 调度器 control threads during shutdown. Use pending delayed-free requests to report complet
- [PR #19060](https://github.com/vllm-project/vllm-ascend/pull/19060) 已合并
  - 中文：【修复】【KVPool】【v0.30.0】Backport synchronous Mamba state-copy ordering
  - 原文：[BugFix][KVPool][v0.30.0] Backport synchronous Mamba state-copy ordering
  - 说明：Backport 18901 through a400b6564aea2a4d9b2482b08fbf542195ce0206 to releases/v0.30.0 , based on 169823b8cca0eebb4db20811f1582dd28104ecaa . Related issue: 18898. With MRV2 and Mamba 对齐 , preprocessing can copy a cached source state before
- [PR #19017](https://github.com/vllm-project/vllm-ascend/pull/19017) 已合并
  - 中文：【修复】【注意力】【v0.30.0】MXFP8 KV-scale corruption during PD transfers
  - 原文：[BugFix][Attention][v0.30.0] Fix MXFP8 KV-scale corruption during PD transfers
  - 说明：C8 K-scale advanced-index assignment on NPU can materialize a packet-strided 缓存 view and write it back through IndexPutV2 / ViewCopy , overwriting a concurrent KV transfer to an unselected page. Invalid E8M0 scales can then produce NaNs
- [PR #19064](https://github.com/vllm-project/vllm-ascend/pull/19064) 已合并
  - 中文：【修复】【注意力】C8 K-scale corruption during KV transfers
  - 原文：[BugFix][Attention] Fix C8 K-scale corruption during KV transfers
  - 说明：C8 K-scale advanced-index assignment on NPU can materialize a packet-strided 缓存 view and write it back through IndexPutV2 / ViewCopy , overwriting a concurrent KV transfer to an unselected page. Invalid E8M0 scales can then produce NaNs
- [PR #18902](https://github.com/vllm-project/vllm-ascend/pull/18902) 已合并
  - 中文：【修复】【MoE】Revert A3 GMM dequant SiTU quant fusion (#16655)
  - 原文：[BugFix][MoE] Revert A3 GMM dequant SiTU quant fusion (#16655)
  - 说明：Revert 16655 ( 9f0f60de677972fba9de69996b7699c98a521f81 ) because 性能 回退 was reported during validation. 16655 automatically routes eligible A3 W4A8 SiTU inputs through gmm dequant situ quant , with no opt-out 切换. This r
- [PR #18953](https://github.com/vllm-project/vllm-ascend/pull/18953) 已合并
  - 中文：【算子】【杂项】恢复 release 共享 schedule for W4A8 SP
  - 原文：[Ops][Misc] Restore release shared schedule for W4A8 SP
  - 说明：For latent W4A8 共享 experts with 序列-parallel, TP-sharded 共享 权重 and multistream 重叠, 恢复 the release/v0.27.1rc submission order: enqueue routed work first, then submit the complete 共享 forward. Keep the input/rou
- [PR #18954](https://github.com/vllm-project/vllm-ascend/pull/18954) 已合并
  - 中文：【修复】【注意力】【v0.30.0】Backport FIA v2 for DCP MLA 解码 (#18752)
  - 原文：[BugFix][Attention][v0.30.0] Backport FIA v2 for DCP MLA decode (#18752)
  - 说明：Cherry-pick 18752 to releases/v0.30.0 , including its CI fixes: - ca885238c21678980ffcce508b117d217ddefcf8 - d0ec13b85 : 迁移 all eight DCP MLA 解码 eager, capture, graph-更新 and max-workspace calls to FIA v2. - 8991d517baa41e4afeb6
- [PR #18752](https://github.com/vllm-project/vllm-ascend/pull/18752) 已合并
  - 中文：【修复】【注意力】Use FIA v2 for DCP MLA 解码
  - 原文：[BugFix][Attention] Use FIA v2 for DCP MLA decode
  - 说明：DCP MLA 解码 still uses the legacy FIA interface, which dispatches to ACLNN V3 on A2/A3. With component-major paged caches introduced in 18256, this path can materialize large contiguous 缓存 拷贝 before 注意力. Use FIA v2 consisten
- [PR #18975](https://github.com/vllm-project/vllm-ascend/pull/18975) 已合并
  - 中文：【功能】【v0.30.0】【KV Pool】Prefetch layerwise loads on a global layer window
  - 原文：[Feature][v0.30.0][KV Pool] Prefetch layerwise loads on a global layer window
  - 说明：releases/v0.30.0 counterpart of 18647: the same two commits, cherry-picked with -x onto this branch. Layerwise 池化 prefetches a layer's pool load layerwise prefetch layers ( P ) model layers ahead of the layer that consumes it. Its wind
- [PR #18758](https://github.com/vllm-project/vllm-ascend/pull/18758) 已合并
  - 中文：【功能】【Cherry-pick】【v0.30.0】Integrate FlashMLA 解码, DCP and DSpark (#18742)
  - 原文：[Feature][Cherry-pick][v0.30.0] Integrate FlashMLA decode, DCP and DSpark (#18742)
  - 说明：Backport 18742's external FlashMLA integration to releases/v0.30.0 , on top of the merged PROLOG V3 prerequisite ( 18682) and release fixes ( 18842). - Eligible MRv2 MLA 解码 uses flash mla / flash mla 元数据 ; real 预填充 continues th
- [PR #19040](https://github.com/vllm-project/vllm-ascend/pull/19040) 已合并
  - 中文：【修复】【v0.30.0】Preserve layerwise reuse snapshots and fence cross-rank publication
  - 原文：[BugFix][v0.30.0] Preserve layerwise reuse snapshots and fence cross-rank publication
  - 说明：修复 three related correctness issues in the GVA-based layerwise KV 缓存 pool with layer reuse , organized as three signed-off commits: 1. Preserve the preceding request-scoped snapshot identity across 投机 rollback. A rejected draft
- [PR #19039](https://github.com/vllm-project/vllm-ascend/pull/19039) 已合并
  - 中文：【修复】Preserve layerwise reuse snapshots and fence cross-rank publication
  - 原文：[BugFix] Preserve layerwise reuse snapshots and fence cross-rank publication
  - 说明：修复 three related correctness issues in the GVA-based layerwise KV 缓存 pool with layer reuse , organized as three signed-off commits: 1. Preserve the preceding request-scoped snapshot identity across 投机 rollback. A rejected draft
- [PR #18929](https://github.com/vllm-project/vllm-ascend/pull/18929) 已合并
  - 中文：【性能】【模型】【v0.30.0 only】Preserve GLM V1 SP token layout with PP
  - 原文：[Performance][Model][v0.30.0 only] Preserve GLM V1 SP token layout with PP
  - 说明：Release-only follow-up to 18671, extending the FlashComm1 PP 修复 merged in 18870. With V1, DSA-CP and FlashComm1 启用, PP 1 still selects the generic GLM model instead of the existing DSA-CP model. Consequently, consecutive MoE layers ca
- [PR #19043](https://github.com/vllm-project/vllm-ascend/pull/19043) 已合并
  - 中文：【修复】【EPLB】【v0.30.0 only】Use 显存 copy for expert 权重 更新 on Ascend 950
  - 原文：[BugFix][EPLB][v0.30.0 only] Use memory copy for expert weight updates on Ascend 950
  - 说明：Dynamic EPLB can fail when it writes received expert 权重 back into internal-format tensors on Ascend 950. The existing expert tensor.copy (buffer tensor) raises: Use torch npu.copy 显存 (expert tensor, buffer tensor, non blocking=True

#### 2026-10-16

- [PR #18347](https://github.com/vllm-project/vllm-ascend/pull/18347) 已合并
  - 中文：【性能】【Kernel】优化 hc_pre 内核/v0.30.0
  - 原文：[Performance][Kernel] Optimize hc_pre kernels/v0.30.0
  - 说明：Integrate an optimized hc pre operator implementation for evaluation on Ascend A3. The operator source was adapted from the cann-recipes-infer implementation. The changes are limited to the operator implementation and its build integration.
- [PR #17681](https://github.com/vllm-project/vllm-ascend/pull/17681) 已合并
  - 中文：[功能] [MRV2]所有配置的默认模型运行器V2
  - 原文：[Feature][MRV2] Default Model Runner V2 for all configurations
  - 说明：This PR makes Model Runner V2 the default on Ascend when VLLM USE V2 MODEL RUNNER is unset. The old architecture, 特性, platform, and Triton whitelist is replaced by a blacklist in vllm ascend/mrv2 utils.py . When the env var is unset, a
- [PR #18924](https://github.com/vllm-project/vllm-ascend/pull/18924) 已合并
  - 中文：【修复】【v0.30.0】Serialize csrc publication directory creation
  - 原文：[BugFix][v0.30.0] Serialize csrc publication directory creation
  - 说明：Minimal releases/v0.30.0 counterpart of 18923. Move one existing publish dir.mkdir(parents=True, exist ok=True) call under the existing .publish.lock . The first publisher deletes/recreates this 共享 directory while holding the lock; crea
- [PR #18923](https://github.com/vllm-project/vllm-ascend/pull/18923) 已合并
  - 中文：【修复】【Build】Serialize csrc publication directory creation
  - 原文：[BugFix][Build] Serialize csrc publication directory creation
  - 说明：Move the existing publish dir.mkdir(parents=True, exist ok=True) into the existing .publish.lock critical section. The first publisher removes/recreates the 共享 operator output directory under that lock. Another publisher could previousl
- [PR #18870](https://github.com/vllm-project/vllm-ascend/pull/18870) 已合并
  - 中文：【修复】【模型】【v0.30.0 only】恢复 GLM V1 FlashComm1 with PP
  - 原文：[BugFix][Model][v0.30.0 only] Restore GLM V1 FlashComm1 with PP
  - 说明：GLM DSA V1 with PP 1 can report FlashComm1 启用 while decoder SP remains disabled by the upstream PP=1 guard. This minimal 修复 enables SP on eligible GLM MoE/MLA layers, keeps 注意力 projection unreduced for the decoder's 减少-scatt
- [PR #18979](https://github.com/vllm-project/vllm-ascend/pull/18979) 已合并
  - 中文：【修复】Keep MiniMax-M3 稀疏 注意力 outside piecewise graphs
  - 原文：[BugFix] Keep MiniMax-M3 sparse attention outside piecewise graphs
  - 说明：MiniMax-M3 稀疏 注意力 writes the KV 缓存 and reads slot 元数据 from the forward context. Under the default piecewise cudagraph mode those custom ops were compiled into a graph piece, so replay reused the slots and token count captu
- [PR #18445](https://github.com/vllm-project/vllm-ascend/pull/18445) 已合并
  - 中文：【修复】MiniMax-M3 融合 稀疏 注意力 boundary in piecewise graphs
  - 原文：[BugFix] Fix MiniMax-M3 fused sparse attention boundary in piecewise graphs
  - 说明：修复 the MiniMax-M3 融合 稀疏-注意力 boundary under piecewise graph execution by adding vllm::minimax m3 融合 稀疏 forward to compilation 配置.splitting ops . 18235 introduced a 融合 path combining QK normalization, RoPE, main/in
- [PR #18581](https://github.com/vllm-project/vllm-ascend/pull/18581) 已合并
  - 中文：【v0.30.0】【文档】【杂项】更新 MiniMax-M3 deployment and tuning guide
  - 原文：[v0.30.0][Doc][Misc] Update MiniMax-M3 deployment and tuning guide
  - 说明：更新 the MiniMax-M3 v0.30.0 deployment guide with complete named-variable examples, the supplied 1M deployment layouts and consistent 服务 settings. The Introduction identifies the v0.30.0 release, and all A3 product-name references us
- [PR #18293](https://github.com/vllm-project/vllm-ascend/pull/18293) 已合并
  - 中文：【性能】【Kernel】优化 hc_pre 内核/main
  - 原文：[Performance][Kernel] Optimize hc_pre kernels/main
  - 说明：Integrate an optimized hc pre operator implementation for evaluation on Ascend A3. The operator source was adapted from the cann-recipes-infer implementation. The changes are limited to the operator implementation and its build integration.
- [PR #18888](https://github.com/vllm-project/vllm-ascend/pull/18888) 已合并
  - 中文：【v0.30.0】【文档】【杂项】Clarify hardware and redundant expert constraints
  - 原文：[v0.30.0][Doc][Misc] Clarify hardware and redundant expert constraints
  - 说明：Ports the EPLB documentation corrections to releases/v0.30.0 . It clarifies supported hardware and redundant-expert constraints, including A2 requiring num redundant experts to be 0 , corrects the Qwen3 model name, fixes the Markdown diagra
- [PR #18837](https://github.com/vllm-project/vllm-ascend/pull/18837) 已合并
  - 中文：【性能】【KVPool】【v0.30.0】减少 lookup and reachable-mask overhead
  - 原文：[Performance][KVPool][v0.30.0] Reduce lookup and reachable-mask overhead
  - 说明：From main branch Long-input AscendStore lookup and non-layerwise save repeatedly expand local HBM hits, walk excluded chunks, and recompute identical reachability masks. - coordinator.py / pool worker.py : mark complete HBM-前缀 hashes la
- [PR #18647](https://github.com/vllm-project/vllm-ascend/pull/18647) 已合并
  - 中文：【功能】【KV Pool】Prefetch layerwise loads on a global layer window
  - 原文：[Feature][KV Pool] Prefetch layerwise loads on a global layer window
  - 说明：Layerwise 池化 prefetches a layer's pool load layerwise prefetch layers ( P ) model layers ahead of the layer that consumes it. Its window was written for the layout where every rank owns every layer: the cursor that decides which layers
- [PR #18907](https://github.com/vllm-project/vllm-ascend/pull/18907) 已合并
  - 中文：【性能】【KVPool】减少 AscendStore lookup and save overhead
  - 原文：[Performance][KVPool] Reduce AscendStore lookup and save overhead
  - 说明：Main-branch counterpart of 18837. Long-input AscendStore lookup and non-layerwise save repeatedly expand local HBM hits, walk excluded chunks, and recompute identical reachability masks. - Mark complete HBM-前缀 hashes lazily instead of b
- [Issue #19021](https://github.com/vllm-project/vllm-ascend/issues/19021) 进行中
  - 中文：【缺陷】: Mooncake AscendDirectTransport KV transfer fails 100% on PD disaggregated deployment with EI0014 device_ip invalid
  - 原文：[Bug]: Mooncake AscendDirectTransport KV transfer fails 100% on PD disaggregated deployment with EI0014 device_ip invalid
- [PR #18999](https://github.com/vllm-project/vllm-ascend/pull/18999) 已合并
  - 中文：【功能】【KV 卸载】Layerwise KV 卸载 for long-context
  - 原文：[Feature][KV Offload] Layerwise KV offload for long-context
  - 说明：Background. In PD-disaggregated deployments, both 预填充 and 解码 instances are exposed to severe HBM pressure from full-length KV caches: - 预填充 instances must retain the full-length KV in HBM until the transfer to the 解码 side co
- [PR #18905](https://github.com/vllm-project/vllm-ascend/pull/18905) 已合并
  - 中文：【修复】【v0.30.0】Ensure full range load of kv pool when enabling 预填充 layerwise 卸载
  - 原文：[Bugfix][v0.30.0] Ensure full range load of kv pool when enabling prefill layerwise offload
  - 说明：port 18987 . This PR fixes the following 2 bugs when enabling layerwise 预填充 卸载: 1. 16947 introduces a special mechanism for 优化 KV pool: a block's all-rank presence is cached per (group, block hash) with a 30s TTL and a 200k-e
- [PR #18927](https://github.com/vllm-project/vllm-ascend/pull/18927) 已合并
  - 中文：【修复】【MoE】【v0.30.0】Revert A3 GMM dequant SiTU quant fusion (#16655)
  - 原文：[BugFix][MoE] [v0.30.0] Revert A3 GMM dequant SiTU quant fusion (#16655)
  - 说明：Backport the rollback in 18902 to releases/v0.30.0 because 性能 回退 was reported during validation of 16655. This release branch contains the original merged commit 9f0f60de677972fba9de69996b7699c98a521f81 . Eligible A3 W4A8 S
- [PR #18987](https://github.com/vllm-project/vllm-ascend/pull/18987) 已合并
  - 中文：【修复】Ensure full range load of kv pool when enabling 预填充 layerwise 卸载
  - 原文：[Bugfix] Ensure full range load of kv pool when enabling prefill layerwise offload
  - 说明：This PR fixes the following 2 bugs when enabling layerwise 预填充 卸载: 1. 16947 introduces a special mechanism for 优化 KV pool: a block's all-rank presence is cached per (group, block hash) with a 30s TTL and a 200k-entry cap, and
- [PR #18900](https://github.com/vllm-project/vllm-ascend/pull/18900) 已合并
  - 中文：【v0.30.0】【修复】【KV Pool】Clean up noisy layerwise log printing
  - 原文：[v0.30.0][Bugfix][KV Pool] Clean up noisy layerwise log printing
  - 说明：Cherry-pick of 18899 to releases/v0.30.0 . Cleans up misleading/noisy logging in the AscendStore KV Pool layerwise transfer path: - Demote build 共享 / build transfer gva-skip logs from WARNING to 调试 ( kv transfer.py ). Zero GVAs are t
- [PR #18856](https://github.com/vllm-project/vllm-ascend/pull/18856) 已合并
  - 中文：【v0.30.0】【文档】【杂项】补充文档 PCP execution and DCP integration
  - 原文：[v0.30.0][Doc][Misc] Document PCP execution and DCP integration
  - 说明：Backport 18855 to releases/v0.30.0 , building on 18737. The context-parallel design guide documents DCP and DSA-CP but lacks the MRV2 PCP execution flow. Extend the existing page with PCP rank topology, head-tail 预填充 partitioning, decod

#### 2026-10-15

- [PR #18894](https://github.com/vllm-project/vllm-ascend/pull/18894) 已合并
  - 中文：【修复】【MoE】Preserve quantized 共享专家 output gate
  - 原文：[BugFix][MoE] Preserve quantized shared expert output gate
  - 说明：融合 W4A8MXFP and W8A8/W4A8 共享-expert paths returned the Down projection without applying the optional output gate. For models with an expert gate , this omitted sigmoid(expert gate(hidden states)) and changed the model output. Route t
- [PR #18895](https://github.com/vllm-project/vllm-ascend/pull/18895) 已合并
  - 中文：【修复】【MoE】Preserve quantized 共享专家 output gate (v0.30.0)
  - 原文：[BugFix][MoE] Preserve quantized shared expert output gate (v0.30.0)
  - 说明：融合 W4A8MXFP and W8A8/W4A8 共享-expert paths returned the Down projection without applying the optional output gate. For models with an expert gate , this omitted sigmoid(expert gate(hidden states)) and changed the model output. Route t
- [PR #18877](https://github.com/vllm-project/vllm-ascend/pull/18877) 已合并
  - 中文：【修复】【PCP】【v0.30.0】Clear V4.1 query 元数据 on empty ranks
  - 原文：[BugFix][PCP][v0.30.0] Clear V4.1 query metadata on empty ranks
  - 说明：Backport of 18876 to releases/v0.30.0 . - vLLM main:
- [PR #18842](https://github.com/vllm-project/vllm-ascend/pull/18842) 已合并
  - 中文：【修复】【v0.30.0】Backport MLA PROLOG 预填充 and 显存 fixes (#18798)
  - 原文：[BugFix][v0.30.0] Backport MLA PROLOG prefill and memory fixes (#18798)
  - 说明：Backport all four commits from 18798 (source head ac5d971d1c40a14babeb18d015a6001cb2114876 ) to releases/v0.30.0 , which already contains the MLA PROLOG 特性 from 18682. This PR now contains the fixes; the original empty baseline commit
- [PR #18798](https://github.com/vllm-project/vllm-ascend/pull/18798) 已合并
  - 中文：【修复】【注意力】strided MLA 预填充 RoPE padding and KV reads
  - 原文：[BugFix][Attention] Fix strided MLA prefill RoPE padding and KV reads
  - 说明：修复 two strided MLA PROLOG V3 预填充 regressions introduced by 18256 and observed in the Kimi A3 夜间 run: 1. Slice the 预填充 cos/sin tables to the actual 预填充 token count before query RoPE and PROLOG V3. 元数据 can retain graph
- [PR #18890](https://github.com/vllm-project/vllm-ascend/pull/18890) 已合并
  - 中文：【修复】【Build】Rust build entrypoint for vLLM 0.31.0
  - 原文：[BugFix][Build] Fix Rust build entrypoint for vLLM 0.31.0
  - 说明：vLLM v0.31.0 moved the Rust build wrapper from build rust.sh to tools/build rust.sh . All eight root Dockerfiles still invoke the old path, causing image builds to fail with exit code 127. - Invoke bash tools/build rust.sh for A2, A3, A5 an
- [PR #18876](https://github.com/vllm-project/vllm-ascend/pull/18876) 已合并
  - 中文：【修复】【PCP】Clear V4.1 query 元数据 on empty ranks
  - 原文：[BugFix][PCP] Clear V4.1 query metadata on empty ranks
  - 说明：With V4.1 PCP 解码 request sharding, a rank can have no real queries while FULL graph replay still executes captured 注意力 operators. The empty-rank builder bypasses the ordinary builder's 元数据 reset, leaving stale SMLA/QLI tasks
- [PR #18748](https://github.com/vllm-project/vllm-ascend/pull/18748) 已合并
  - 中文：[BugFix] [KV Transfer] [v0.30.0]月饼合并需要全页覆盖
  - 原文：[BugFix][KV Transfer][v0.30.0] Require full page coverage for Mooncake merging
  - 说明：Mooncake can publish different tensor counts for the same layer when its 缓存 views occupy only part of a 共享 physical page. The existing 合并 check accepts the views when the backing storage has enough spare capacity to cover a full-p
- [PR #16730](https://github.com/vllm-project/vllm-ascend/pull/16730) 已合并
  - 中文：【功能】【模型】Use CANN operators for GLM-5.3-Flash pooled indexing
  - 原文：[Feature][Model] Use CANN operators for GLM-5.3-Flash pooled indexing
  - 说明：Connects BF16 GLM-5.3-Flash pooled indexing to CANN KeyPool/PoolKeyIndexer, including DSA-CP. Reuses layer/draft 元数据 and removes redundant SFA input preparation. Depends on 18295. PD/MTP fixes keep per-group 块表 stable across
- [PR #18289](https://github.com/vllm-project/vllm-ascend/pull/18289) 已合并
  - 中文：【功能】【v0.30.0】Backport CANN pooled indexing for GLM-5.3-Flash
  - 原文：[Feature][v0.30.0] Backport CANN pooled indexing for GLM-5.3-Flash
  - 说明：Connects BF16 GLM-5.3-Flash pooled indexing to CANN KeyPool/PoolKeyIndexer, including DSA-CP. Reuses layer/draft 元数据 and removes redundant SFA input preparation. Depends on 18296. PD/MTP fixes keep per-group 块表 stable across
- [PR #18768](https://github.com/vllm-project/vllm-ascend/pull/18768) 已合并
  - 中文：【修复】【注意力】Backport DCP FIA workspace ownership 修复 to v0.30.0
  - 原文：[BugFix][Attention] Backport DCP FIA workspace ownership fix to v0.30.0
  - 说明：修复 FIA workspace ownership during DCP MLA graph capture. Backport of 18767 to releases/v0.30.0 ; review follow-up commit: 2add010e3c48918569c051b40cec16fd7440c6be . AscendMlaDCPImpl. forward 解码 selects the target, draft 解码, or draf
- [PR #18767](https://github.com/vllm-project/vllm-ascend/pull/18767) 已合并
  - 中文：【修复】【注意力】Preserve DCP FIA workspace ownership during draft capture
  - 原文：[BugFix][Attention] Preserve DCP FIA workspace ownership during draft capture
  - 说明：修复 FIA workspace ownership during DCP MLA graph capture. Backport to releases/v0.30.0 : 18768. AscendMlaDCPImpl. forward 解码 selects the target, draft 解码, or draft 预填充 graph registry, but the original implementation always saved
- [PR #18820](https://github.com/vllm-project/vllm-ascend/pull/18820) 已合并
  - 中文：【性能】【MoE】Backport BF16 router GEMM with FP32 accumulation to v0.30.0
  - 原文：[Performance][MoE] Backport BF16 router GEMM with FP32 accumulation to v0.30.0
  - 说明：Backport the complete changes from (commit 15ec560120d93d38f428e97ec9af9221665be743) to releases/v0.30.0. - Let AscendGateLinear 权重 follow the model dtype and use BF16 input/权重 GEMM with FP32 accumulation/output when eligible (no b
- [PR #18747](https://github.com/vllm-project/vllm-ascend/pull/18747) 已合并
  - 中文：[BugFix] [KV Transfer]月饼合并需要全页覆盖
  - 原文：[BugFix][KV Transfer] Require full page coverage for Mooncake merging
  - 说明：Mooncake can publish different tensor counts for the same layer when its 缓存 views occupy only part of a 共享 physical page. The existing 合并 check accepts the views when the backing storage has enough spare capacity to cover a full-p
- [PR #18854](https://github.com/vllm-project/vllm-ascend/pull/18854) 已合并
  - 中文：【修复】【杂项】Make Ascend skills explicit-only and streamline agent guidance
  - 原文：[BugFix][Misc] Make Ascend skills explicit-only and streamline agent guidance
  - 说明：The model-adapter and release-management skills currently allow automatic invocation when a conversation matches their descriptions. Require explicit invocation, and keep always-loaded agent guidance focused on the current task. - 新增 polic
- [PR #18823](https://github.com/vllm-project/vllm-ascend/pull/18823) 已合并
  - 中文：【修复】【KVTransfer】Report Mooncake HMA receive failures by request
  - 原文：[BugFix][KVTransfer] Report Mooncake HMA receive failures by request
  - 说明：Report P2P Mooncake receive failures through KVConnectorTransferResults.failed recving when the logical 缓存 has multiple groups or requires HMA. Flat block IDs do not identify the affected request across independent 缓存 groups; vLLM 0.3
- [Issue #18871](https://github.com/vllm-project/vllm-ascend/issues/18871) 进行中
  - 中文：【缺陷】: a3日构建镜像的cann仍然是9.1.0，memcache1.2.0。需要升级！
  - 原文：[Bug]: a3日构建镜像的cann仍然是9.1.0，memcache1.2.0。需要升级！
- [PR #18813](https://github.com/vllm-project/vllm-ascend/pull/18813) 已合并
  - 中文：【修复】【KVPool】Recover ordinary layerwise pool transfer failures (v0.30.0)
  - 原文：[BugFix][KVPool] Recover ordinary layerwise pool transfer failures (v0.30.0)
  - 说明：Backport of to releases/v0.30.0 . GVA layerwise transfer threads currently raise on nonzero copy/write-completion return codes even when the pool is only an optional 缓存. A transient pool failure can therefore become a fatal worker error.
- [PR #18812](https://github.com/vllm-project/vllm-ascend/pull/18812) 已合并
  - 中文：【修复】【KVPool】Recover ordinary layerwise pool transfer failures
  - 原文：[BugFix][KVPool] Recover ordinary layerwise pool transfer failures
  - 说明：GVA layerwise transfer threads currently raise on nonzero copy/write-completion return codes even when the pool is only an optional 缓存. A transient pool failure can therefore become a fatal worker error. - Make ordinary layerwise pool sa
- [Issue #18073](https://github.com/vllm-project/vllm-ascend/issues/18073) 已关闭
  - 中文：[Bug]: 日构建a3镜像切换commit后，编译安装失败

#### 2026-10-14

- [PR #18723](https://github.com/vllm-project/vllm-ascend/pull/18723) 已合并
  - 中文：[性能] [GDN] [主]减少QKV布局副本以引起FLA关注
  - 原文：[Performance][GDN][Main] Reduce QKV layout copies for FLA attention
  - 说明：减少 unnecessary QKV layout 拷贝 in Gated DeltaNet 注意力: - Use head-first convolution output for 预填充 and reuse contiguous BNSD views on A5. - Process 解码 and 预填充 convolution separately in ordinary mixed batches. - 避免
- [PR #18474](https://github.com/vllm-project/vllm-ascend/pull/18474) 已合并
  - 中文：[性能] [MoE]将共享W8A8 MXFP激活量化与显式路径融合
  - 原文：[Performance][MoE] Fuse shared W8A8 MXFP activation quantization with an explicit path
  - 说明：共享 experts using W8A8 MXFP run SwiGLU and activation MX 量化 as separate 内核. 新增 an explicit SharedExpertMLPPath.W8A8 MXFP LINEAR path that preserves both registered linears and fuses compatible activations with npu swiglu
- [PR #18660](https://github.com/vllm-project/vllm-ascend/pull/18660) 已合并
  - 中文：[v0.30.0] [性能]通过256K令牌启用FUSED MiniMax稀疏准备
  - 原文：[v0.30.0][Performance] Enable fused MiniMax sparse prepare through 256K tokens
  - 说明：From main branch MiniMax-M3's 融合 稀疏-prepare path currently falls back to the separate Q/K normalization, RoPE, and 缓存-insertion chain whenever a batch contains more than 512 tokens. That limit prevents normal 预填充 chunks from u
- [PR #18666](https://github.com/vllm-project/vllm-ascend/pull/18666) 已合并
  - 中文：[性能]通过256K令牌启用FUSED MiniMax稀疏准备
  - 原文：[Performance] Enable fused MiniMax sparse prepare through 256K tokens
  - 说明：Forward-port of 18660 to main . MiniMax-M3's 融合 稀疏-prepare path currently falls back to the separate Q/K normalization, RoPE, and 缓存-insertion chain whenever a batch contains more than 512 tokens. Raise the validated 路由 limit
- [PR #18671](https://github.com/vllm-project/vllm-ascend/pull/18671) 已合并
  - 中文：[仅v0.30.0] [性能] [型号]通过DSA-CP保留GLM V1 SP令牌布局
  - 原文：[v0.30.0 only] [Performance][Model] Preserve GLM V1 SP token layout through DSA-CP
  - 说明：This PR is intended for releases/v0.30.0 only and should not be merged into main . Model Runner V1 (MRV1) is planned for sunset, so this V1-specific 优化 remains scoped to the release branch. GLM with the V1 model runner, 序列-p
- [PR #18669](https://github.com/vllm-project/vllm-ascend/pull/18669) 已合并
  - 中文：[Backport] [v0.30.0] [BugFix]使用PCP修复CPP仿形虚拟预填充路由
  - 原文：[Backport][v0.30.0][BugFix] Fix CPP profiling dummy prefill routing with PCP
  - 说明：Backport of 18622 to releases/v0.30.0 . CPP startup profiling uses a single synthetic request. With PCP 启用, the generic V2 dummy batch can otherwise retain 解码-only 注意力 state and bypass PCP partition batch() , allowing a large
- [Issue #18754](https://github.com/vllm-project/vllm-ascend/issues/18754) 进行中
  - 中文：[Bug] ：在<pad>ACL图模式+异步调度下，采样间歇性地返回损坏的令牌（ `' ，垃圾/重复令牌） — `random_sample ()`在侧流上填充'q`与`wait_stream` -仅同步
  - 原文：[Bug]: Sampling intermittently returns corrupted tokens (`<pad>`, garbage/repeated tokens) under ACL graph mode + async scheduling — `random_sample()` fills `q` on a side stream with `wait_stream`-only sync
  - 说明：With ACL 图模式 (default PIECEWISE) and async scheduling both 启用 (our deployment defaults), temperature 0 sampling intermittently emits corrupted tokens: token id 0 ( <pad ) inserted/replaced, id 4096 ( दा ), runs of repeated token
- [PR #18700](https://github.com/vllm-project/vllm-ascend/pull/18700) 已合并
  - 中文：[BugFix] [Quant]保持ModelSlim打包模块映射私有
  - 原文：[BugFix][Quant] Keep the ModelSlim packed module mapping private
  - 说明：AscendModelSlimConfig. 更新 packed modules mapping() mutates the packed modules mapping it was handed, but that dictionary is the model class's own attribute: vLLM's configure quant 配置() passes model class.packed modules mapping to th
- [PR #18725](https://github.com/vllm-project/vllm-ascend/pull/18725) 已合并
  - 中文：[BugFix] [Compilation] [v0.30.0]为外部DP静态内核推断本地Worker
  - 原文：[BugFix][Compilation][v0.30.0] Infer local workers for external DP static kernels
  - 说明：Backport of 18720 to releases/v0.30.0 . In external DP mode, each independently launched 服务 instance owns one DP replica. With TP1, local world size data parallel size local therefore returns 1 even when eight workers share a physical
- [PR #18296](https://github.com/vllm-project/vllm-ascend/pull/18296) 已合并
  - 中文：[功能] [v0.30.0] Backport Triton KeyPool缓存适配器
  - 原文：[Feature][v0.30.0] Backport Triton KeyPool cache adapters
  - 说明：From main branch Adds three 融合 元数据, 缓存-write and index-packing adapters for CANN KeyPool/PoolKeyIndexer, including DSA-CP 元数据. Keeps dynamic tail row width/stride as unspecialized 运行时 arguments, fixes request/column tile
- [PR #18295](https://github.com/vllm-project/vllm-ascend/pull/18295) 已合并
  - 中文：[功能] [运营]添加Triton缓存适配器，用于罐池化索引
  - 原文：[Feature][Ops] Add Triton cache adapters for CANN pooled indexing
  - 说明：Adds three 融合 Triton adapters for the BF16 GLM-5.3-Flash CANN KeyPool/PoolKeyIndexer integration in 16730. CANN performs 池化 and index selection; these adapters translate vLLM's paged 元数据, persistent caches and SFA index layout
- [PR #18557](https://github.com/vllm-project/vllm-ascend/pull/18557) 已合并
  - 中文：[功能] [MRV2] [msprobe] [v0.30.0]向model runner v2添加直接msprobe转储支持
  - 原文：[Feature][MRV2][msprobe][v0.30.0] Add direct msprobe dump support to model runner v2
  - 说明：Backport the direct msprobe dump 支持 from 16125 to releases/v0.30.0 . The release branch currently initializes no msprobe debugger in the v2 NPU model runner, so setting dump 配置 / dump 配置 path with VLLM USE V2 MODEL RUNNER=1 pro
