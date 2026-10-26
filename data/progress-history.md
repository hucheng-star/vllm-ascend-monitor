# vLLM-Ascend 各模型历史进展

更新时间：2026-10-26T23:00:31.072Z

收录 2026-09-27 以来仍被提到的模型相关 PR 与 Issue，按事件日期由近到远。中文在前，原文在后。

## DeepSeek

### DeepSeek V4 Flash

#### 2026-10-26

- [PR #19879](https://github.com/vllm-project/vllm-ascend/pull/19879) 进行中
  - 中文：【文档】【v0.30.0】Restructure DeepSeek-V4-Flash deployment documentation
  - 原文：[Doc][v0.30.0] Restructure DeepSeek-V4-Flash deployment documentation
  - 说明：Sync the DeepSeek-V4-Flash deployment-guide changes from 19759 (source commit 2738354da ) to releases/v0.30.0 . Only docs/source/tutorials/models/DeepSeek-V4-Flash.md changes. - Organize ordinary PD and KV 缓存 池化 deployment into hard
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
- [PR #19759](https://github.com/vllm-project/vllm-ascend/pull/19759) 进行中
  - 中文：【文档】【杂项】Organize DeepSeek-V4-Flash PD and KV 池化 deployment guides
  - 原文：[Doc][Misc] Organize DeepSeek-V4-Flash PD and KV pooling deployment guides
  - 说明：Reorganize the DeepSeek-V4-Flash deployment guide into hardware-specific tabs. Group the 950DT, A3, and A2 KV 缓存 Pool examples under Section 5.3, move ultra-long 序列 guidance into the A2 series tab, and preserve existing section anc
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

#### 2026-10-22

- [PR #19461](https://github.com/vllm-project/vllm-ascend/pull/19461) 进行中
  - 中文：【release/v0.23.0】【Sampler】【修复】inf in RL sampling by recording stream for q
  - 原文：[release/v0.23.0][Sampler][BugFix] Fix inf in RL sampling by recording stream for q
  - 说明：During RL post-training of DeepSeek v4 Flash, an inconsistency between training and inference was observed due to the NPU 显存 of q being prematurely reused before the asynchronous division operation probs.div (q) completed. This PR resol

#### 2026-10-21

- [PR #19361](https://github.com/vllm-project/vllm-ascend/pull/19361) 草稿
  - 中文：【功能】【KVCache】支持 PCP for Mooncake layerwise 池化
  - 原文：[Feature][KVCache] Support PCP for Mooncake layerwise pooling
  - 说明：DeepSeek-V4-Flash with AscendStoreConnector , Mooncake use layerwise=true , and --预填充-context-parallel-size 4 currently fails during connector initialization with unsupported 预填充 上下文并行 size=4 . This change gives each PCP
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
  - 说明：Fixes the one-card DeepSeek-V4 Flash Vision sleep → wake → NPU IPC reload path and adds an end-to-end vision 权重-transfer lane. This follows 18630 and 19248 and uses the existing Worker sleep preserve parameter names mechanism from 18838
- [PR #19257](https://github.com/vllm-project/vllm-ascend/pull/19257) 已合并
  - 中文：【文档】Use PCP8 DP2 for A3 DSpark 预填充 with Model Runner V2
  - 原文：[Doc]Use PCP8 DP2 for A3 DSpark prefill with Model Runner V2
  - 说明：Port the final documentation changes from 19201 ( releases/v0.30.0 ) to main . 更新 the A3 DeepSeek-V4-Flash DSpark 预填充 example to PCP8 / DP2 / TP1. Extend the launcher to allocate TP × PCP devices per DP rank, 启用 Model Runner V2
- [PR #19201](https://github.com/vllm-project/vllm-ascend/pull/19201) 已合并
  - 中文：【文档】【v0.30.0】Use PCP8 DP2 for A3 DSpark 预填充 with Model Runner V2
  - 原文：[Doc][v0.30.0] Use PCP8 DP2 for A3 DSpark prefill with Model Runner V2
  - 说明：更新 the DeepSeek-V4-Flash A3 DSpark PD deployment example on releases/v0.30.0 to use 预填充 PCP8 / DP2 / TP1 with Model Runner V2. Set export VLLM USE V2 MODEL RUNNER=1 on both DSpark nodes and 补充文档 that PCP requires V2, while DSA-C

#### 2026-10-20

- [PR #19248](https://github.com/vllm-project/vllm-ascend/pull/19248) 进行中
  - 中文：【修复】【WeightTransfer】DeepSeek-V4 Flash Vision reload across sleep and wake
  - 原文：[BugFix][WeightTransfer] Fix DeepSeek-V4 Flash Vision reload across sleep and wake
  - 说明：Adds a one-card DeepSeek-V4 Flash Vision NPU IPC 权重-transfer lane and fixes the sleep → wake → layerwise reload → graph replay path. This follows 18630 and reuses the already-merged Worker sleep preserve parameter names mechanism from 1

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
- [PR #18604](https://github.com/vllm-project/vllm-ascend/pull/18604) 进行中
  - 中文：[功能] [教育部]为V2 eager添加精确的专家卸载并解码ACL图
  - 原文：[Feature][MoE] Add exact expert offload for V2 eager and decode ACL graphs
  - 说明：This PR adds exact MoE expert 卸载 to 启用 DeepSeek-V4-Flash-0731 to run on a single Ascend 950PR or 950DT device when its full 权重 exceed NPU 显存 capacity. Prepared target routed-expert 权重 and scales are stored in pinned h
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
  - 中文：[BugFix] [Worker] cudagraph捕获后零静态KV缓冲区（使用硬化步进归零重新着陆）
  - 原文：[BugFix][Worker] Zero static KV buffers after cudagraph capture (re-land with hardened strided zeroing)
  - 说明：Re-lands 17659, which was auto-reverted by 18307 after breaking the DeepSeek-V4-Flash 夜间 ( Same goal, hardened implementation. Zero every KV-缓存 / recurrent-state tensor in static forward context right after cudagraph capture (v1 NPU
- [PR #18364](https://github.com/vllm-project/vllm-ascend/pull/18364) 进行中
  - 中文：【持续集成】新增 每周用例 DeepSeek-V4-Flash-Memcache-PD-perf
  - 原文：[CI] Add weekly case DeepSeek-V4-Flash-Memcache-PD-perf
  - 说明：新增 每周用例 DeepSeek-V4-Flash-Memcache-PD-perf - vLLM main:

#### 2026-10-11

- [PR #18288](https://github.com/vllm-project/vllm-ascend/pull/18288) 已合并
  - 中文：[Cherry-pick] [releases/v0.30.0] [BugFix] [CI]修复DeepSeek V4 Flash数据集路径（来自# 18287 ）
  - 原文：[Cherry-pick][releases/v0.30.0][BugFix][CI] Fix DeepSeek V4 Flash dataset path (from #18287)
  - 说明：Cherry-pick of PR 18287 onto releases/v0.30.0 . Original PR: 18287 Original author: @czydyy --- 修复 the dataset directory typo in the daily and 每周 DeepSeek V4 Flash 性能 case configurations ( DeekSeek → DeepSeek ). This allows th
- [PR #18287](https://github.com/vllm-project/vllm-ascend/pull/18287) 已合并
  - 中文：【修复】【持续集成】DeepSeek V4 Flash dataset path
  - 原文：[BugFix][CI] Fix DeepSeek V4 Flash dataset path
  - 说明：修复 the dataset directory typo in the daily and 每周 DeepSeek V4 Flash 性能 case configurations ( DeekSeek → DeepSeek ). This allows the cases to find the intended input dataset. No. T

#### 2026-10-10

- [Issue #17476](https://github.com/vllm-project/vllm-ascend/issues/17476) 已关闭
  - 中文：[Bug] ：当'quant_model_description.json`存在时，由msmodelslim转换的Deepseek V4 Flash 0731 BF16权重会丢失准确性
  - 原文：[Bug]: Deepseek V4 Flash 0731 BF16 weights converted by msmodelslim lose accuracy when `quant_model_description.json` is present
- [Issue #18212](https://github.com/vllm-project/vllm-ascend/issues/18212) 进行中
  - 中文：[Bug] ： DeepSeek V4 Flash在DSpark + DSA的MRV2虚拟批处理中失败CP ： aclnnInplacePartialRotaryMul平铺dim0不匹配
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

### DeepSeek V4

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
  - 中文：【Feat】【模型】新增 candidate DSv4 block size 16 layouts
  - 原文：[Feat][Model] Add candidate DSv4 block size 16 layouts
  - 说明：新增 candidate block size=16 entries to the standard and A5 DSv4 缓存-layout tables on releases/v0.26.0rc . Currently the tables only contain 32, 64 and 128, so a 配置 lookup for 16 has no matching entry. The new entries extrapolat
- [Issue #17347](https://github.com/vllm-project/vllm-ascend/issues/17347) 已关闭
  - 中文：【功能】: int8 KV 缓存 支持 for GLM-5.3-Flash / DeepSeek-V4-style hybrid models — 解码 path fails at aclnnSparseFlashAttention (EZ1009) while 预填充 path already works
  - 原文：[Feature]: int8 KV cache support for GLM-5.3-Flash / DeepSeek-V4-style hybrid models — decode path fails at aclnnSparseFlashAttention (EZ1009) while prefill path already works
  - 说明：The 特性 we need : end-to-end 支持 for --kv-缓存-dtype int8 on GLM-5.3-Flash ( Glm5NextForConditionalGeneration , w8a8, hybrid architecture: MLA + linear-注意力/Mamba + compressed-索引器 稀疏 注意力 (DSA-style), with an MTP

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
- [PR #19125](https://github.com/vllm-project/vllm-ascend/pull/19125) 进行中
  - 中文：【修复】【Platform】Keep the DeepSeek V4 block size the 缓存 is built with
  - 原文：[BugFix][Platform] Keep the DeepSeek V4 block size the cache is built with
  - 说明：DeepSeek-V4 on A5 dies at 缓存-spec construction unless --block-size is passed. Reproduced on A5 (ascend950), DeepSeek-V4-Flash, DP8 + EP, no --block-size : The page-padding tables are keyed on the physical block size, and only 32/64/128 a
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

- [PR #19042](https://github.com/vllm-project/vllm-ascend/pull/19042) 草稿
  - 中文：【重构】【模型】Revert "恢复 平台默认 索引器 KV dtype for DeepSeek V4"
  - 原文：[Refactor][Model] Revert "Restore platform-default indexer KV dtype for DeepSeek V4"
  - 说明：【重构】【模型】Revert "恢复 平台默认 索引器 KV dtype for DeepSeek V4" Reverts 17635 ( b980a2476dfa259f6112b01ded829b7cfb80d409 ). That commit 新增 get 索引器 k dtype to the DeepSeek V4 索引器: it resolves 索引器 kv dtype=
- [PR #19007](https://github.com/vllm-project/vllm-ascend/pull/19007) 进行中
  - 中文：【性能】【MRV2】Share 每步 PCP 元数据 across KV-缓存 groups
  - 原文：[Performance][MRV2] Share per-step PCP metadata across KV-cache groups
  - 说明：This PR reduces 注意力 元数据 construction overhead for DeepSeek V4 with model runner v2 and PCP, and extends compatible 优化 to DSpark DSA SWA drafting. Previously, 缓存-group builders independently prepared 元数据 even wh
- [PR #18994](https://github.com/vllm-project/vllm-ascend/pull/18994) 进行中
  - 中文：【持续集成】dsv4 mooncake
  - 原文：[CI] dsv4 mooncake
  - 说明：【】--- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary conditions (e.g. empty input, single/zero element, min/max values, off-by-one, seque
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
- [Issue #14678](https://github.com/vllm-project/vllm-ascend/issues/14678) 已关闭
  - 中文：[Bug] [v 0.23] [DeepSeek-V4] # 13518将最小KV缓存增加约1.50 GiB并阻止启动
  - 原文：[Bug][v0.23][DeepSeek-V4] #13518 increases the minimum KV cache by ~1.50 GiB and prevents startup
  - 说明：Summary The async SWA/chunked-local KV lifetime 修复 in 13518 is necessary for correctness, but its admission-sizing change substantially increases the minimum KV 缓存 必填 by a single request. With the DeepSeek-V4-Pro 配置 bel
- [PR #17263](https://github.com/vllm-project/vllm-ascend/pull/17263) 已合并
  - 中文：[性能] [DSpark]堆栈DeepSeek V4上下文WKV投影
  - 原文：[Performance][DSpark] Stack DeepSeek V4 context WKV projections
  - 说明：此PR从上游vLLM移植DeepSeek V4 DSpark上下文WKV堆栈优化： -上游PR ： vllm-project/vllm 54674在当前的vLLM Ascend DSpark实施中，每个草案层独立地将其WKV投影应用于
- [PR #18698](https://github.com/vllm-project/vllm-ascend/pull/18698) 进行中
  - 中文：[BugFix] [Model]从前缀缓存中排除DSV4压缩器状态缓存
  - 原文：[BugFix][Model] Exclude DSV4 compressor state caches from prefix caching
  - 说明：Fixes 16270 On DeepSeek-V4 with --block-size 32 + 前缀缓存, the engine reports block size="2" : the C4/C128 压缩器 state caches returned the plain AscendSlidingWindowMLASpec , inheriting 前缀 cacheable=True . Their tiny block si
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
- [PR #18665](https://github.com/vllm-project/vllm-ascend/pull/18665) 进行中
  - 中文：【功能】【DSA】Shard DeepSeek-V4 C4 and 索引器 caches with DCP on A2
  - 原文：[Feature][DSA] Shard DeepSeek-V4 C4 and Indexer caches with DCP on A2
  - 说明：This implements the initial DCP 支持 described in RFC 17485 for DeepSeek-V4 on Ascend A2. The C4/CSA main KV 缓存 and its 索引器 缓存 are normally replicated across TP ranks. This PR shards both caches across DCP ranks to 减少 the s
- [Issue #18664](https://github.com/vllm-project/vllm-ascend/issues/18664) 进行中
  - 中文：[Doc] ： `/zh-cn/v0.30.0rc1/user_guide/release_notes.html'的问题
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
- [PR #18642](https://github.com/vllm-project/vllm-ascend/pull/18642) 进行中
  - 中文：[v0.30.0] [BugFix] [Model]通过重量加载器(# 16958)应用DeepSeek-V4注意力槽
  - 原文：[v0.30.0][BugFix][Model] Apply DeepSeek-V4 attention sinks through the weight loader (#16958)
  - 说明：Backport of 16958 to the releases/v0.30.0 branch. DeepSeek-V4 注意力 Sink 加载 used direct copy calls, bypassing the parameter's current 权重 loader . During live/layerwise reload, those writes land on meta parameters instead of ent

#### 2026-10-13

- [PR #18418](https://github.com/vllm-project/vllm-ascend/pull/18418) 已合并
  - 中文：【修复】Validate DeepSeek V4 张量并行 limits
  - 原文：[Bugfix] Validate DeepSeek V4 tensor parallel limits
  - 说明：Summary - validate tensor-parallel limits for DeepSeek V4.1, V4 Flash, and V4 Pro models - enforce A2/A3 limits of TP <= 8 for V4.1/Flash and TP <= 16 for V4 Pro - disallow TP 1 on A5 - apply validation to Model Runner V2 and to Model Runne

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
  - 中文：[BugFix] [DSA]解决缓存层中的A5 DeepSeek-V4自动KV数据类型
  - 原文：[BugFix][DSA] Resolve A5 DeepSeek-V4 auto KV dtype in cache layers
  - 说明：On Ascend A5, a default DeepSeek-V4 launch leaves --kv-缓存-dtype at auto . Allocation treats auto as the model dtype ( torch.bfloat16 ). The compressed-缓存 path does not: only an explicit bfloat16 / bf16 request selects the BF16 layout,

#### 2026-10-11

- [Issue #18304](https://github.com/vllm-project/vllm-ascend/issues/18304) 进行中
  - 中文：[Bug] [A3] DeepSeek-V4.1 ：缺少causal_conv1d_update_npu - > CausalConv1dBwd ACL-图形崩溃导致解码EngineCores
  - 原文：[Bug][A3] DeepSeek-V4.1: missing causal_conv1d_update_npu -> CausalConv1dBwd ACL-graph crash kills decode EngineCores
  - 说明：What happened? On Ascend A3, running DeepSeek-V4.1-Flash (w8a8) with DSpark MTP ( num 投机 tokens=5 ) + CUDAGraphMode.FULL 解码 ONLY on a 解码-side DP8×TP2 (EP16) deployment, the 解码 service dies reproducibly. Two consecutive

#### 2026-10-10

- [PR #18184](https://github.com/vllm-project/vllm-ascend/pull/18184) 已合并
  - 中文：[BugFix] [v0.30.0]定义全词汇DSpark模型的草稿令牌映射
  - 原文：[BugFix][v0.30.0] Define draft token mapping for full-vocabulary DSpark models
  - 说明：Backport of to releases/v0.30.0 . Define draft id to target id = None on the Ascend DeepSeek V4 and DeepSeek V4.1 DSpark model classes. Their draft token IDs already match target token IDs, so they need no remapping. This exposes the attrib
- [PR #18182](https://github.com/vllm-project/vllm-ascend/pull/18182) 已合并
  - 中文：[BugFix]为全词汇DSpark模型定义草稿令牌映射
  - 原文：[BugFix] Define draft token mapping for full-vocabulary DSpark models
  - 说明：Define draft id to target id = None on the Ascend DeepSeek V4 and DeepSeek V4.1 DSpark model classes. Their draft token IDs already match target token IDs, so they need no remapping. This exposes the attribute read by the DSpark speculator.
- [PR #16958](https://github.com/vllm-project/vllm-ascend/pull/16958) 已合并
  - 中文：[BugFix] [Model]通过权重加载器应用DeepSeek-V4注意力槽
  - 原文：[BugFix][Model] Apply DeepSeek-V4 attention sinks through the weight loader
  - 说明：DeepSeek-V4 注意力 Sink 加载 used direct copy calls, bypassing the parameter's current 权重 loader . During live/layerwise reload, those writes land on meta parameters instead of entering the reload 缓存, leaving the original Sink
- [PR #18211](https://github.com/vllm-project/vllm-ascend/pull/18211) 进行中
  - 中文：[Refactor] [Misc]移除重复的muls_add triton内核并强化expert-map json check
  - 原文：[Refactor][Misc] Remove duplicate muls_add triton kernel and harden expert-map json check
  - 说明：- Delete vllm ascend/ops/triton/mul 新增.py, a byte-identical duplicate of muls 新增.py, and point the deepseek v4/deepseek v41 imports at the canonical module to 避免 divergent 拷贝 of the same 内核. - Validate expert map path/expert ma
- [PR #18127](https://github.com/vllm-project/vllm-ascend/pull/18127) 已合并
  - 中文：[Cherry-pick] [v0.30.0] [Performance] ：优化DeepSeek V4 TurboQuant框架路径
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
  - 说明：切换 DeepSeek V4 and V4.1 router projections from ReplicatedLinear with precast fp32 权重 to GateLinear with FP32 output. This uses the dedicated router GEMM path while preserving FP32 router logits. 移除 cast operator around router.

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

#### 2026-09-21

- [Issue #17101](https://github.com/vllm-project/vllm-ascend/issues/17101) 进行中
  - 中文：【功能】: 支持 DCP to eliminate duplicated KV 缓存 across TP ranks on DSV4
  - 原文：[Feature]: Support DCP to eliminate duplicated KV cache across TP ranks on DSV4
  - 说明：Motivation When using DeepSeek-V4 with TP, the KV 缓存 is currently replicated across all TP ranks. For example, with TP=8, each TP rank keeps its own copy of the KV 缓存. Since the 注意力 KV states are not naturally partitioned by TP
- [PR #17092](https://github.com/vllm-project/vllm-ascend/pull/17092) 进行中
  - 中文：【修复】【deepseek-v4】: 修复 async scheduling issues affecting training-inference consistency
  - 原文：[BugFix][deepseek-v4]: Fix  async scheduling issues affecting training-inference consistency
  - 说明：Synchronize NPU streams before random sampling. This PR fixes an NPU stream synchronization issue in asynchronous random sampling. random sample generates exponential noise on a dedicated NPU stream and consumes it on the caller's stream. P

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

#### 2026-09-13

- [PR #16021](https://github.com/vllm-project/vllm-ascend/pull/16021) 已合并
  - 中文：[v0.27.1rc] [BugFix]使用Deepseek V4的SP修复DSACP
  - 原文：[v0.27.1rc][BugFix] Fix DSACP with SP for Deepseek V4
  - 说明：Currently DSACP with SP is implemented in a suboptimal way, Leading to regressed 性能 during 预填充. We 支持 further development for deepseek v4 with SP and DSACP. SP chunk is implemented in model, while 注意力 减少 scatter

#### 2026-09-12

- [Issue #16419](https://github.com/vllm-project/vllm-ascend/issues/16419) 进行中
  - 中文：[Bug] [Model] DeepSeek-V4.1-Flash双节点（ 2xA3 ， DP4/TP8/EP32 ）在所有MoE通信路径上失败： MoeDistributeDispatchV2内核故障/HcclAllGather不匹配
  - 原文：[Bug][Model] DeepSeek-V4.1-Flash dual-node (2xA3, DP4/TP8/EP32) fails on all MoE comm paths: MoeDistributeDispatchV2 kernel fault / HcclAllGather mismatch
  - 说明：System Info - Image: quay.io/ascend/vllm-ascend:deepseek-v4.1-flash-a3 (vllm ascend 0.1.dev5097+ge43cf1e9f , includes the V4.1 Flash 支持 merged via 16294 / 16356) - Hardware: 2 脳 Atlas 800 A3 (16 NPUs, one node per 8 NPUs), RoCE cross-n

#### 2026-09-10

- [Issue #16270](https://github.com/vllm-project/vllm-ascend/issues/16270) 进行中
  - 中文：[Bug] [v0.26.0rc1] DeepSeek-V4前缀缓存由于C4压缩器状态缓存block_size = 2 ，提示短于4096令牌的0%命中率
  - 原文：[Bug][v0.26.0rc1] DeepSeek-V4 prefix caching 0% hit rate for prompts shorter than 4096 tokens due to C4 compressor state cache block_size=2
- [PR #15549](https://github.com/vllm-project/vllm-ascend/pull/15549) 已合并
  - 中文：[BugFix]修复Deepseek V4 SP的DSACP
  - 原文：[BugFix] Fix DSACP with SP for Deepseek V4
  - 说明：Currently DSACP with SP is implemented in a suboptimal way, Leading to regressed 性能 during 预填充. We 支持 further development for deepseek v4 with SP and DSACP. SP chunk is implemented in model, while 注意力 减少 scatter

#### 2026-09-09

- [PR #16115](https://github.com/vllm-project/vllm-ascend/pull/16115) 已合并
  - 中文：【修复】【Frontend】对齐 DeepSeek V4 frontend behavior for v0.27
  - 原文：[BugFix][Frontend] Align DeepSeek V4 frontend behavior for v0.27
  - 说明：Backport PR 14632 to releases/v0.27.1rc . This aligns DeepSeek V4 frontend rendering, reasoning effort handling, compatibility behavior, incremental tool argument streaming, and related unit tests. Yes. DeepSeek V4 chat template rendering a

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
- [PR #15818](https://github.com/vllm-project/vllm-ascend/pull/15818) 进行中
  - 中文：【持续集成】【MRV2】新增 DeepSeek V4 MRV2 夜间用例
  - 原文：[CI][MRV2] Add DeepSeek V4 MRV2 nightly cases
  - 说明：新增 five DeepSeek V4 夜间 configurations for Model Runner V2: - Flash single-node - Flash PD-前缀 - Pro DSpark PD-前缀 - Pro DSpark 1M-PD - Pro MTP PD-前缀 The PR also prevents the Chinese Read the Docs build from resolving tools/b

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

#### 2026-08-31

- [PR #15349](https://github.com/vllm-project/vllm-ascend/pull/15349) 已合并
  - 中文：【v0.25.1rc】【修复】【Frontend】Handle DeepSeek V4 trailing system messages
  - 原文：[v0.25.1rc][BugFix][Frontend] Handle DeepSeek V4 trailing system messages
  - 说明：Backport the DeepSeek V4 trailing-system renderer 修复 from 15317 to the v0.25.1rc release branch. When a DeepSeek V4 request ends with a system message, the v0.25 renderer can leave the prompt at an invalid system-message boundary. Generati

#### 2026-08-28

- [Issue #15204](https://github.com/vllm-project/vllm-ascend/issues/15204) 进行中
  - 中文：[RFC] ： DeepSeek-V4压缩器部分状态内存架构
  - 原文：[RFC]: DeepSeek-V4 compressor partial-state memory architecture
  - 说明：Motivation. A DeepSeek-V4-Flash workload was observed to reject long 预填充 chunks before any request could be scheduled. The reproduced environment was: - vLLM-Ascend: 3281a5fc44ec344ba304c9161a3959d8649471f4 - vLLM: d02df748bf9efd99022f1

#### 2026-08-27

- [PR #14952](https://github.com/vllm-project/vllm-ascend/pull/14952) 已合并
  - 中文：【v0.26.0rc】【修复】【Frontend】Select DeepSeek V4 effort mapping by 检查点 配置
  - 原文：[v0.26.0rc][BugFix][Frontend] Select DeepSeek V4 effort mapping by checkpoint config
  - 说明：Fixes 14951. 13993 新增 the post-Preview DeepSeek V4 reasoning-effort mapping to the v0.26 release stack, but applied it to every DeepSeek V4 检查点. The official V4 Preview encoders use different semantics: default/high has no effort

#### 2026-08-24

- [PR #14624](https://github.com/vllm-project/vllm-ascend/pull/14624) 已合并
  - 中文：【v0.26.0rc】【修复】【Frontend】对齐 DeepSeek V4 frontend behavior
  - 原文：[v0.26.0rc][BugFix][Frontend] Align DeepSeek V4 frontend behavior
  - 说明：Ports the remaining DeepSeek V4 frontend fixes from the v0.25 release branch to releases/v0.26.0rc : - 14035: attach tools to an existing system message instead of inserting a second system message; - 14521: stream long schema-typed string

#### 2026-08-17

- [PR #14438](https://github.com/vllm-project/vllm-ascend/pull/14438) 草稿
  - 中文：【Draft】【性能】新增 DSA 压缩器 序列 parallel
  - 原文：[Draft][Performance] Add DSA Compressor sequence parallel
  - 说明：【Draft】【性能】新增 DSA 压缩器 序列 parallel Reduces redundant DSA 压缩器 computation across TP ranks for DeepSeek-V4 DSA-CP 预填充, plus a stack of DSV4 性能 work this line carries (Q-projection 重叠, SWA SP, o-
- [PR #14397](https://github.com/vllm-project/vllm-ascend/pull/14397) 已合并
  - 中文：【修复】【v0.26.0】【模型】传递 DeepSeek V4 routed SwiGLU limit
  - 原文：[BugFix][v0.26.0][Model] Propagate DeepSeek V4 routed SwiGLU limit
  - 说明：Ports 14364 to releases/v0.26.0rc . DeepSeek V4 reads 配置.swiglu limit and already passes it to the 共享专家, but the Ascend model adapter does not pass it to routed experts. 检查点 with swiglu limit=10.0 therefore execute rout
- [PR #14364](https://github.com/vllm-project/vllm-ascend/pull/14364) 已合并
  - 中文：【修复】【v0.25.1】【模型】传递 DeepSeek V4 routed SwiGLU limit
  - 原文：[BugFix][v0.25.1][Model] Propagate DeepSeek V4 routed SwiGLU limit
  - 说明：DeepSeek V4 reads 配置.swiglu limit and already passes it to the 共享专家, but the Ascend model adapter does not pass it to the routed FusedMoE . As a result, 检查点 with swiglu limit=10.0 execute routed experts without the requ

#### 2026-08-14

- [PR #14035](https://github.com/vllm-project/vllm-ascend/pull/14035) 已合并
  - 中文：【v0.25.1rc】【修复】【Frontend】对齐 DeepSeek V4 system tool rendering
  - 原文：[v0.25.1rc][BugFix][Frontend] Align DeepSeek V4 system tool rendering
  - 说明：This is a follow-up to 13519. The v0.25.1 release monkey patch inherited an upstream Python renderer mismatch reported in For DeepSeek V4 requests containing both an existing system message and top-level tools, the Python wrapper always ins

#### 2026-08-13

- [Issue #14208](https://github.com/vllm-project/vllm-ascend/issues/14208) 进行中
  - 中文：【Contribution】【功能】DS / Kimi / GLM / Minimax / Step 支持 LoRA
  - 原文：[Contribution] [Feature] DS / Kimi / GLM / Minimax / Step 支持 LoRA
  - 说明：背景 LoRA（低秩适配）在 vllm-ascend 的 注意力 layer（ vllm ascend/models/layer/注意力/layer.py ）及部分模型（如 deepseek v4.py 、 minimax m3/ ）已有支持，但 DeepSeek（DS）、Kimi、GLM、Minimax、Step 等模型族的 LoRA 推理路径尚未完整覆盖，需要补齐这些模型族的 LoRA 适配。 任务 为 DS / Kimi / GLM / Mini

#### 2026-08-11

- [PR #13993](https://github.com/vllm-project/vllm-ascend/pull/13993) 已合并
  - 中文：【v0.26.0rc】【修复】【Frontend】支持 DeepSeek V4 0731 reasoning effort
  - 原文：[v0.26.0rc][BugFix][Frontend] Support DeepSeek V4 0731 reasoning effort
  - 说明：This ports 13313 to the v0.26 release branch and follows the behavior already merged for v0.25.1 in 13519. The release branch is paired with vLLM v0.26.0 at commit 568afb3a13806beb53bb2e6bd518269357b237c0 , which predates vLLM Ascend also d
- [PR #13519](https://github.com/vllm-project/vllm-ascend/pull/13519) 已合并
  - 中文：【v0.25.1rc】【修复】【Frontend】对齐 DeepSeek V4 reasoning effort with vLLM
  - 原文：[v0.25.1rc][BugFix][Frontend] Align DeepSeek V4 reasoning effort with vLLM
  - 说明：This is a follow-up to 13314 that aligns the v0.25.1 release implementation with the behavior merged in The vLLM v0.25.1 stack predates that 合并, and vLLM Ascend does not include the upstream Rust frontend renderer. This PR 更新 the ex

#### 2026-08-02

- [PR #13314](https://github.com/vllm-project/vllm-ascend/pull/13314) 已合并
  - 中文：【v0.25.1rc】【修复】【Frontend】支持 DeepSeek V4 0731 reasoning effort
  - 原文：[v0.25.1rc][BugFix][Frontend] Support DeepSeek V4 0731 reasoning effort
  - 说明：This is the v0.25.1 release backport of 13313. DeepSeek-V4-Flash-0731 defines three thinking levels with distinct prompt behavior: - low : no reasoning-effort 前缀 - high : the existing Reasoning Effort: Absolute maximum 前缀 - max : th

### DeepSeek V4.1

#### 2026-10-26

- [Issue #19867](https://github.com/vllm-project/vllm-ascend/issues/19867) 进行中
  - 中文：【Release】: Release 清单 for v0.32.0rc1
  - 原文：[Release]: Release checklist for v0.32.0rc1
  - 说明：【x】【x】- DeepSeek V4.1 model 支持 and inference 优化, including Ascend A5 execution improvements and torch.compile acceleration: vllm-project/vllm-ascend 17927 vllm-project/vllm-ascend 18081 - DeepSeek V4.1 encoder and decoder
- [PR #19862](https://github.com/vllm-project/vllm-ascend/pull/19862) 草稿
  - 中文：【持续集成】Measure main v0.31 PCP startup baseline (empty commit)
  - 原文：[CI] Measure main v0.31 PCP startup baseline (empty commit)
  - 说明：Create a timing baseline for the existing 560T DeepSeek-V4.1-Flash-W8A8-DSpark-PCP 夜间用例, to compare with the vLLM v0.32.0 runs in 19516. This draft contains one signed-off empty commit. Its source tree is identical to upstream main
- [PR #19859](https://github.com/vllm-project/vllm-ascend/pull/19859) 进行中
  - 中文：【注意力】【功能】YOCO mask/compact 预填充 truncation for DeepSeek-V4.1
  - 原文：[Attention][Feature] YOCO mask/compact prefill truncation for DeepSeek-V4.1
  - 说明：This PR adds YOCO mask/compact 预填充 truncation for DeepSeek-V4.1. Early layers in DeepSeek-V4.1 Flash are producers (full 预填充), while later layers are consumers that only need a sliding-window view of recent tokens. Running full atte
- [PR #19849](https://github.com/vllm-project/vllm-ascend/pull/19849) 进行中
  - 中文：【feat】dsv41 flash w8a8 支持 block-diagonal Engram rotations
  - 原文：[feat] dsv41 flash w8a8 support block-diagonal Engram rotations
  - 说明：This PR extends DeepSeek V4.1 Engram rotation 加载 to 支持 block-diagonal global rotation matrices whose 32x32 diagonal blocks are not all identical. Previously, the loader only accepted: and raised an error for other layouts: Some W8

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
  - 说明：DeepSeek V4.1's model-level 序列 parallelism shards input IDs even when every TP rank already has the full tensor. Hash 路由 then casts, all-gathers, concatenates and normalizes those IDs again in each MoE layer. Prepare the replicat

#### 2026-10-23

- [PR #19649](https://github.com/vllm-project/vllm-ascend/pull/19649) 进行中
  - 中文：【v0.31.0rc】【修复】【MRV2】Unwrap single-slot KV caches before block zeroing
  - 原文：[v0.31.0rc][BugFix][MRV2] Unwrap single-slot KV caches before block zeroing
  - 说明：【(tensor a, tensor b)】DeepSeek-V4.1-compatible 缓存 layers bind component tuples in a single engine slot ( ). MRV2's block-zeroer initialization enumerates the outer slot and calls .numel() on the inner tuple, aborting startup before grap
- [Issue #19624](https://github.com/vllm-project/vllm-ascend/issues/19624) 已关闭
  - 中文：【缺陷】: Deepseek v4.1 Flash curl test respone with wrong text or repetition loop
  - 原文：[Bug]: Deepseek v4.1 Flash curl test respone with wrong text or repetition loop
- [Issue #19630](https://github.com/vllm-project/vllm-ascend/issues/19630) 进行中
  - 中文：【缺陷】: DeepSeek V4.1 Engram gate hard-fail on non-repeated block32 global_rotation
  - 原文：[Bug]: DeepSeek V4.1 Engram gate hard-fail on non-repeated block32 global_rotation
  - 说明：When launching a DeepSeek V4.1 W8A8 model, startup fails in the Engram rotation loader with: The current implementation only accepts a global rotation matrix that is composed of the same 32x32 block repeated along the diagonal: This means o
- [PR #19560](https://github.com/vllm-project/vllm-ascend/pull/19560) 进行中
  - 中文：【性能】【模型】Reuse filtered RoPE lookups for DeepSeek V4.1 DSpark
  - 原文：[Performance][Model] Reuse filtered RoPE lookups for DeepSeek V4.1 DSpark
  - 说明：Refer to 17067. During context KV initialization, all DSpark layers consume the same context positions. Previously, each layer independently called get cos and sin dsa , causing the same RoPE tables to be indexed repeatedly. This PR: - coll
- [PR #19550](https://github.com/vllm-project/vllm-ascend/pull/19550) 草稿
  - 中文：【性能】【DSpark】Stack DeepSeek V4.1 context WKV projections
  - 原文：[Performance][DSpark] Stack DeepSeek V4.1 context WKV projections
  - 说明：This PR ports the DeepSeek V4.1 DSpark context WKV stacking 优化 from upstream vLLM: - Upstream PR: - Related vLLM Ascend implementation for DeepSeek V4: In the current DeepSeek V4.1 DSpark implementation, every draft layer independ
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

- [PR #19362](https://github.com/vllm-project/vllm-ascend/pull/19362) 进行中
  - 中文：【性能】【MRV2】Specialize DeepSeek V4.1-Flash PCP 元数据 construction by consumer
  - 原文：[Performance][MRV2] Specialize DeepSeek V4.1-Flash PCP metadata construction by consumer
  - 说明：DeepSeek V4.1 PCP builds 元数据 for multiple 缓存 groups in each build attn 元数据() call. Although query operators consume rank-local 元数据 and 缓存 更新 consume 调度器-global 元数据, the existing builders prepare fields f
- [PR #19242](https://github.com/vllm-project/vllm-ascend/pull/19242) 已合并
  - 中文：【文档】【模型】Sync DeepSeek V4.1 deployment guide from v0.30.0
  - 原文：[Doc][Model] Sync DeepSeek V4.1 deployment guide from v0.30.0
  - 说明：The DeepSeek-V4.1-Flash tutorial on main is missing deployment documentation already merged into releases/v0.30.0. This ports the English tutorial from release commit 0a174d6c3 onto main commit ccaf14ad3 . - 新增 the four-server A2 PD layout

#### 2026-10-20

- [PR #19303](https://github.com/vllm-project/vllm-ascend/pull/19303) 进行中
  - 中文：【文档】【v0.30.0】新增 DeepSeek-V4.1-Flash deployment guide for Ascend 950DT
  - 原文：[Doc][v0.30.0] Add DeepSeek-V4.1-Flash deployment guide for Ascend 950DT
  - 说明：新增 DeepSeek-V4.1-Flash deployment instructions for 950DT products using the original 检查点 and Model Runner V2. Cover single-server DP8 and two-server 1P1D with DP8/TP1/EP8 on both 预填充 and 解码, including Memcache KV 缓存 Pool
- [PR #19286](https://github.com/vllm-project/vllm-ascend/pull/19286) 进行中
  - 中文：【功能】【模型】支持 DeepSeek V4.1 decoder replay PIECEWISE ACL graphs
  - 原文：[Feature][Model] Support DeepSeek V4.1 decoder replay PIECEWISE ACL graphs
  - 说明：Adapt the replay graph and PIECEWISE trimming approach from vLLM 59532 to Ascend ACL Graph for DeepSeek V4.1. - Capture independent breakable ACL graphs for the bounded decoder replay layers. - Select the replay graph at the configured trim
- [PR #19284](https://github.com/vllm-project/vllm-ascend/pull/19284) 进行中
  - 中文：【功能】【模型】启用 DeepSeek V4.1 MRV2 PP with arbitrary layer partitions
  - 原文：[Feature][Model] Enable DeepSeek V4.1 MRV2 PP with arbitrary layer partitions
  - 说明：启用 experimental DeepSeek V4.1 pipeline parallelism on Model Runner V2 with arbitrary contiguous, nonempty layer partitions . - 新增 PPDependencyTransport to worker/v2/pp transport.py . The common path owns boundary manifests, typed recei
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
- [PR #18491](https://github.com/vllm-project/vllm-ascend/pull/18491) 进行中
  - 中文：【修复】sleep mode bug of deepseekv4.1
  - 原文：[BugFix] fix sleep mode bug of deepseekv4.1
  - 说明：【修复】sleep mode bug of deepseekv4.1 Adds a DeepSeek-V4.1 lane to the one-card NPU IPC 权重-transfer e2e test, and fixes two defects in the --启用-sleep-mode + layerwise 权重-更新 path that the new lane exposed. Neither is V4

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
  - 中文：[BugFix] [PCP]支持DeepSeek V4.1的多模式输入
  - 原文：[BugFix][PCP] Support multimodal inputs for DeepSeek V4.1
  - 说明：启用 MRV2 PCP multimodal inputs for DeepSeek V4.1. Use the batch's common padded length for embedding all-gather and 减少-scatter when ranks have unequal valid token counts, while reusing 修复-capacity buffers and returning only local

#### 2026-10-11

- [Issue #18304](https://github.com/vllm-project/vllm-ascend/issues/18304) 进行中
  - 中文：[Bug] [A3] DeepSeek-V4.1 ：缺少causal_conv1d_update_npu - > CausalConv1dBwd ACL-图形崩溃导致解码EngineCores
  - 原文：[Bug][A3] DeepSeek-V4.1: missing causal_conv1d_update_npu -> CausalConv1dBwd ACL-graph crash kills decode EngineCores
  - 说明：What happened? On Ascend A3, running DeepSeek-V4.1-Flash (w8a8) with DSpark MTP ( num 投机 tokens=5 ) + CUDAGraphMode.FULL 解码 ONLY on a 解码-side DP8×TP2 (EP16) deployment, the 解码 service dies reproducibly. Two consecutive
- [PR #18191](https://github.com/vllm-project/vllm-ascend/pull/18191) 已合并
  - 中文：[BugFix]为torch.compile标记DeepSeek V4.1输入嵌入动态
  - 原文：[BugFix] Mark DeepSeek V4.1 input embeddings dynamic for torch.compile
  - 说明：新增 inputs embeds: 0 to the existing DeepseekV41Model torch.compile dynamic argument mapping. MRV2 can pass precomputed embeddings to the backbone. Their token dimension varies between profiling, 预填充 and 解码. Marking only input ids a
- [PR #17742](https://github.com/vllm-project/vllm-ascend/pull/17742) 已合并
  - 中文：【特点】【型号】支持DeepSeek V4.1 Endoder SWA有界重放
  - 原文：[Feature][Model] Support DeepSeek V4.1 Endoder SWA bounded replay
  - 说明：支持 DeepSeek V4.1 SWA bounded replay on Ascend, integrating the upstream replay mechanism from vllm-project/vllm 56227. After a 前缀-缓存 hit, rebuild the sliding-window KV while preserving the 共享 cached KV of other 缓存 groups.
- [PR #18290](https://github.com/vllm-project/vllm-ascend/pull/18290) 进行中
  - 中文：【特点】支持MRV1、MRV2上DeepSeek V4.1解码器绑定重放
  - 原文：[Feature] Support DeepSeek V4.1 decoder bounded replay on MRV1 and MRV2
  - 说明：Reworks the DeepSeek V4.1 decoder bounded replay change from 17496 on the current community main baseline. This submission does not include or depend on PR 17742. It adds 支持 for both Model Runner V1 and Model Runner V2, and 更新 the
- [PR #18244](https://github.com/vllm-project/vllm-ascend/pull/18244) 已关闭
  - 中文：【功能】【模型】支持 DeepSeek V4.1 bounded replay on Model Runner V2
  - 原文：[Feature][Model] Support DeepSeek V4.1 bounded replay on Model Runner V2
  - 说明：This PR supersedes 17496 and refreshes DeepSeek V4.1 SWA bounded replay on the current main base. It keeps the MRV1 path and adds Model Runner V2 支持 through the DeepSeek V4.1 EngramModelState , including replay slot padding and replay-

#### 2026-10-10

- [PR #18184](https://github.com/vllm-project/vllm-ascend/pull/18184) 已合并
  - 中文：[BugFix] [v0.30.0]定义全词汇DSpark模型的草稿令牌映射
  - 原文：[BugFix][v0.30.0] Define draft token mapping for full-vocabulary DSpark models
  - 说明：Backport of to releases/v0.30.0 . Define draft id to target id = None on the Ascend DeepSeek V4 and DeepSeek V4.1 DSpark model classes. Their draft token IDs already match target token IDs, so they need no remapping. This exposes the attrib
- [PR #18182](https://github.com/vllm-project/vllm-ascend/pull/18182) 已合并
  - 中文：[BugFix]为全词汇DSpark模型定义草稿令牌映射
  - 原文：[BugFix] Define draft token mapping for full-vocabulary DSpark models
  - 说明：Define draft id to target id = None on the Ascend DeepSeek V4 and DeepSeek V4.1 DSpark model classes. Their draft token IDs already match target token IDs, so they need no remapping. This exposes the attribute read by the DSpark speculator.
- [PR #18221](https://github.com/vllm-project/vllm-ascend/pull/18221) 进行中
  - 中文：【特点】【型号】在Ascend V1 Runner上支持DeepSeek V4.1 SWA绑定重播
  - 原文：[Feature][Model] Support DeepSeek V4.1 SWA bounded replay on the Ascend V1 runner
  - 说明：DeepSeek V4.1-Flash runs a 128-token sliding window in every layer. Persisting that window in the 前缀缓存 costs more than the compressed KV it protects, so upstream's SWA bounded replay takes the SWA group out of 前缀缓存 and, on
- [PR #18114](https://github.com/vllm-project/vllm-ascend/pull/18114) 已合并
  - 中文：【功能】【PCP】【v0.30.0】DeepSeek V4.1 PCP 支持
  - 原文：[Feature][PCP][v0.30.0] Add DeepSeek V4.1 PCP support
  - 说明：Backport 17992 to releases/v0.30.0 : - DeepSeek V4.1 MRV2 PCP, O projection 权重 sharding and Q/KV multistream preprocessing. - Engram PCP token 路由 and DP × PCP host table sharing/sharding. - Legacy DSACP padded projection 修复. Does
- [PR #18190](https://github.com/vllm-project/vllm-ascend/pull/18190) 已关闭
  - 中文：[BugFix]为torch.compile标记DeepSeek V4.1输入嵌入动态
  - 原文：[BugFix] Mark DeepSeek V4.1 input embeddings dynamic for torch.compile
  - 说明：新增 inputs embeds: 0 to the existing DeepseekV41Model torch.compile dynamic argument mapping. MRV2 can pass precomputed embeddings to the backbone. Their token dimension varies between profiling, 预填充 and 解码. Marking only input ids a
- [Issue #18166](https://github.com/vllm-project/vllm-ascend/issues/18166) 进行中
  - 中文：【缺陷】: DeepSeek V4.1 启用 EPLB 配置 report error
  - 原文：[Bug]: DeepSeek V4.1 enable EPLB config report error
- [Issue #18158](https://github.com/vllm-project/vllm-ascend/issues/18158) 进行中
  - 中文：[文档] ：最新的vLLM-Ascend DS-V4.1-Flash官方指南（带自定义映像）导致Atlas 900 A2 PoDc （ 4节点/32卡）上的OOM和不可恢复的服务启动失败
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
  - 中文：[特点] [Engram]通过解码流调度添加AICPU URMA Cube卸载
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
  - 中文：【发布】： v0.30.0rc1发布清单
  - 原文：[Release]: Release checklist for v0.30.0rc1
  - 说明：【x】【x】- DeepSeek V4.1 on Model Runner V2 with TurboQuant 4-bit latent KV 缓存, torch.compile, and startup acceleration: - GLM-5.3 稀疏 SFA C8 packed KV 缓存, GLM MRV2 fixes, and always-on reasoning:
- [PR #16899](https://github.com/vllm-project/vllm-ascend/pull/16899) 已合并
  - 中文：【MRV2】【功能】支持 DeepSeek V4.1 on MRV2
  - 原文：[MRV2][Feature] Support DeepSeek V4.1 on MRV2
  - 说明：This PR integrates the existing Ascend DeepSeek V4.1 execution path with Model Runner V2. It adds the 必填 KV 缓存 allocation and binding, 注意力 元数据, 压缩器 state, Engram input preparati
- [PR #17513](https://github.com/vllm-project/vllm-ascend/pull/17513) 已合并
  - 中文：[BugFix] [Engram]支持BF16检查点，无需隐式量化
  - 原文：[BugFix][Engram] Support BF16 checkpoints without implicit quantization
  - 说明：DeepSeek V4.1 BF16 检查点 are needed for RL rollout inference, but Engram unconditionally opens a QuaRot file and converts BF16 embedding rows to INT8. A non-quantized 检查点 now keeps BF16 tables and uses the original-basis gate w

#### 2026-09-23

- [PR #17366](https://github.com/vllm-project/vllm-ascend/pull/17366) 进行中
  - 中文：【性能】【RFork】Deduplicate tensor scans and reuse layout digests
  - 原文：[Performance][RFork] Deduplicate tensor scans and reuse layout digests
  - 说明：减少 RFork 加载 overhead and 支持 DeepSeek V4.1 and MTP 加载 with vLLM v0.31.0 , matching .github/vllm-release-tag.commit . The vLLM main footer identifies the separate verified main CI baseline. This PR is specifically targeted
- [PR #17341](https://github.com/vllm-project/vllm-ascend/pull/17341) 进行中
  - 中文：【性能】重叠 DeepSeek V4.1 索引器 preprocessing
  - 原文：[Performance] Overlap DeepSeek V4.1 indexer preprocessing
  - 说明：- 重叠 索引器 query RoPE with 权重 projection on separate NPU streams. - 重叠 索引器 query 量化 with 压缩器 WKV projection. For C2, complete the input FP32 cast before releasing query work to the auxiliary stream. - P

#### 2026-09-18

- [Issue #16886](https://github.com/vllm-project/vllm-ascend/issues/16886) 进行中
  - 中文：【文档】: DeepSeek-V4.1-Flash-W8A8社区提供的A2 4机脚本拉起1M上下文OOM
  - 原文：[Doc]: DeepSeek-V4.1-Flash-W8A8社区提供的A2 4机脚本拉起1M上下文OOM
  - 说明：📚 文档问题当前社区提供的A2 4机脚本 1M上下文在服务拉起过程中显存不足 OOM ，拉起脚本见后文。 后续等待engram offload可在 A2双机/4机 可拉起1M上下文。 脚本：!/usr/bin/env bash set -euo pipefail NODE RANK = 0 NODE0 IP = "< NODE0 IP" LOCAL IP = "< LOCAL IP" NIC NAME = "< NETWORK INTERFACE" MODEL PATH = "

#### 2026-09-12

- [Issue #16419](https://github.com/vllm-project/vllm-ascend/issues/16419) 进行中
  - 中文：[Bug] [Model] DeepSeek-V4.1-Flash双节点（ 2xA3 ， DP4/TP8/EP32 ）在所有MoE通信路径上失败： MoeDistributeDispatchV2内核故障/HcclAllGather不匹配
  - 原文：[Bug][Model] DeepSeek-V4.1-Flash dual-node (2xA3, DP4/TP8/EP32) fails on all MoE comm paths: MoeDistributeDispatchV2 kernel fault / HcclAllGather mismatch
  - 说明：System Info - Image: quay.io/ascend/vllm-ascend:deepseek-v4.1-flash-a3 (vllm ascend 0.1.dev5097+ge43cf1e9f , includes the V4.1 Flash 支持 merged via 16294 / 16356) - Hardware: 2 脳 Atlas 800 A3 (16 NPUs, one node per 8 NPUs), RoCE cross-n

#### 2026-09-11

- [Issue #16375](https://github.com/vllm-project/vllm-ascend/issues/16375) 进行中
  - 中文：【RFC】: DeepSeek V4.1 Roadmap
  - 原文：[RFC]: DeepSeek V4.1 Roadmap
  - 说明：Motivation. This RFC tracks DeepSeek V4.1 支持 and 性能 优化 on Ascend. The target branch is main. All items start unchecked: development implementations inform the tasks below, but do not establish community-mainline avai

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

#### 2026-07-14

- [Issue #11991](https://github.com/vllm-project/vllm-ascend/issues/11991) 进行中
  - 中文：【缺陷】: 使用vllm-ascend:v0.22.1rc1镜像运行DeepSeek-OCR-2服务化报错
  - 原文：[Bug]: 使用vllm-ascend:v0.22.1rc1镜像运行DeepSeek-OCR-2服务化报错

### DeepSeek V4 Pro

#### 2026-10-26

- [PR #19809](https://github.com/vllm-project/vllm-ascend/pull/19809) 进行中
  - 中文：【文档】【杂项】Restructure section 5.2 PD separation into tab layout for DeepSeek-V4-Pro
  - 原文：[Doc][Misc] Restructure section 5.2 PD separation into tab layout for DeepSeek-V4-Pro
  - 说明：Restructure Section 5.2 Multi-Node PD Separation Deployment in the DeepSeek-V4-Pro tutorial to match the tab layout used by Section 5.3. 1. Convert the three numbered subsections (5.2.1 A3 / 5.2.2 A2 / 5.2.3 950DT) into tabs in the same ord
- [PR #19808](https://github.com/vllm-project/vllm-ascend/pull/19808) 进行中
  - 中文：【文档】【杂项】【v0.30.0】Restructure section 5.2 PD separation into tab layout for DeepSeek-V4-Pro
  - 原文：[Doc][Misc][v0.30.0] Restructure section 5.2 PD separation into tab layout for DeepSeek-V4-Pro
  - 说明：Restructure Section 5.2 Multi-Node PD Separation Deployment in the DeepSeek-V4-Pro tutorial to match the tab layout used by Section 5.3. 1. Convert the three numbered subsections (5.2.1 A3 / 5.2.2 A2 / 5.2.3 950DT) into tabs in the same ord
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

- [PR #19671](https://github.com/vllm-project/vllm-ascend/pull/19671) 进行中
  - 中文：【文档】新增 Memcache KV 缓存 Pool deployment to DeepSeek-V4-Pro Tutorial
  - 原文：[Doc] Add Memcache KV Cache Pool deployment to DeepSeek-V4-Pro Tutorial
  - 说明：This PR syncs the Memcache KV 缓存 pool deployment section from the v0.30.0 documentation to the main branch. This includes adding detailed instructions for multi-node PD separation deployment with Memcache KV 缓存 Pool, configuring Memca
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

#### 2026-10-13

- [Issue #16983](https://github.com/vllm-project/vllm-ascend/issues/16983) 已关闭
  - 中文：[Bug]: llm-ascend集成镜像 quay.io/ascend/vllm-ascend: v0.26.0rc2-a3通过 Atlas800I A3部署 DeepSeek-V4-Pro-0813-w4a8,启动在线服务报错 vllm serve: error: argument --attention-config/-ac: 1 AttentionConfig indexer_kv_dtype验证错误
  - 原文：[Bug]: llm-ascend集成镜像quay.io/ascend/vllm-ascend:v0.26.0rc2-a3通过Atlas800I A3部署DeepSeek-V4-Pro-0813-w4a8,启动在线服务报错vllm serve: error: argument --attention-config/-ac: 1 validation error for AttentionConfig indexer_kv_dtype

#### 2026-09-29

- [PR #17765](https://github.com/vllm-project/vllm-ascend/pull/17765) 进行中
  - 中文：【持续集成】【MRV2】新增 DeepSeek V4 Pro MRV2 夜间用例
  - 原文：[CI][MRV2] Add DeepSeek V4 Pro MRV2 nightly cases
  - 说明：此拉取请求为DeepSeek-V4-Pro引入了一个新的夜间端到端测试配置文件（ DeepSeek-V4-Pro-w4a8-dspark-PD-MRV2.yaml和DeepSeek-V4-Pro-w4a8-1M-PD-MRV2.yaml ） ，使用4节点分解的预填充设置

#### 2026-09-20

- [PR #17017](https://github.com/vllm-project/vllm-ascend/pull/17017) 进行中
  - 中文：【测试】Revert #16824 to isolate DeepSeek-V4-Pro 夜间 回退
  - 原文：[Test] Revert #16824 to isolate DeepSeek-V4-Pro Nightly regression
  - 说明：Purpose Experimental full revert of 16824 (合并 commit e139b7d573d3769fd1407d5027d7d4831f5469f0) on current upstream main d76a8c62f84c49d40d5cd94ed13f685d3f439d03. This PR is for isolating the DeepSeek-V4-Pro-w4a8-前缀-缓存-PD 夜间 p

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

### DeepSeek V3.2

#### 2026-10-24

- [PR #19715](https://github.com/vllm-project/vllm-ascend/pull/19715) 草稿
  - 中文：【测试】【MRV2】新增 DeepSeek V3.2 MRV1/MRV2 parity harness
  - 原文：[Test][MRV2] Add DeepSeek V3.2 MRV1/MRV2 parity harness
  - 说明：Part of 19713. Adds a reproducible 夜间 entry point for comparing DeepSeek V3.2 W8A8 on MRV1 and MRV2 with the official single-node A3 topology (DP2 + TP8 + EP + MTP + FULL 解码 ONLY ). The new harness: - records the model revision, so
- [Issue #19713](https://github.com/vllm-project/vllm-ascend/issues/19713) 进行中
  - 中文：【测试】【MRV2】DeepSeek V3.2 精度 and 性能 parity with MRV1
  - 原文：[Test][MRV2] DeepSeek V3.2 accuracy and performance parity with MRV1
  - 说明：背景 需要系统验证 DeepSeek V3.2 在 Model Runner V2（MRV2）上的精度与性能，并以 Model Runner V1（MRV1）为基准，确保重构不引入功能或性能回归。 本 issue 由 @wisdom1710 认领，用于跟踪测试配置、真机数据、回归用例及后续问题修复。 验收范围 1. 可复现配置 - 在 tests/e2e 或 nightly 增加 DeepSeek V3.2 的可复现配置。 - 记录模型 revision、硬件、CANN /

#### 2026-10-08

- [PR #17950](https://github.com/vllm-project/vllm-ascend/pull/17950) 已合并
  - 中文：[CI]删除DeepSeek-V3.2夜间和每周用例
  - 原文：[CI] Remove DeepSeek-V3.2 nightly and weekly cases
  - 说明：移除 the DeepSeek-V3.2 夜间/每周 model cases from the scheduled CI inventory: - 夜间: multi-node-deepseek-v3.2-W8A8-EP , multi-node-dpsk3.2-2node , and deepseek-v3-2-w8a8 . - 每周: DeepSeek V3.2T MTP2 PD , DeepSeek V3.2T MTP3 PD

### DeepSeek V3.1

#### 2026-10-23

- [PR #19645](https://github.com/vllm-project/vllm-ascend/pull/19645) 已合并
  - 中文：【v0.30.0】【文档】【杂项】移除 obsolete DeepSeek-V3.1 CPP tutorial
  - 原文：[v0.30.0][Doc][Misc] Remove obsolete DeepSeek-V3.1 CPP tutorial
  - 说明：The CPP user guide already covers deployment, tuning, online calibration, and 性能. The separate DeepSeek-V3.1 tutorial duplicates that guidance and uses a model whose vLLM Ascend 支持 ended in v0.30.0. - Delete the redundant tuto
- [PR #19644](https://github.com/vllm-project/vllm-ascend/pull/19644) 已合并
  - 中文：【文档】【杂项】移除 redundant dynamic chunked 流水线并行 tutorial
  - 原文：[Doc][Misc] Remove redundant dynamic chunked pipeline parallel tutorial
  - 说明：The CPP user guide already covers deployment, tuning, online calibration, and 性能. The separate DeepSeek-V3.1 tutorial duplicates that guidance and uses a model whose vLLM Ascend 支持 ended in v0.30.0. - Delete the redundant tuto

#### 2026-09-30

- [PR #17827](https://github.com/vllm-project/vllm-ascend/pull/17827) 已合并
  - 中文：[CI] [Misc] Sunset DeepSeek-V3.1-BF16多节点测试用例
  - 原文：[CI][Misc] Sunset DeepSeek-V3.1-BF16 multi-node test case
  - 说明：This pull request removes the DeepSeek-V3.1-BF16.yaml 配置 file, sunsetting the DeepSeek-V3.1-BF16 multi-node internal data-parallel (DP) 夜间 end-to-end 测试用例. No. This is a co

### DeepSeek R1

#### 2026-10-18

- [PR #19110](https://github.com/vllm-project/vllm-ascend/pull/19110) 进行中
  - 中文：【修复】【v0.30.0】MXFP8 MLA 草稿权重的 NZ 转换时机
  - 原文：[BugFix][v0.30.0] 修复 MXFP8 MLA 草稿权重的 NZ 转换时机
  - 说明：将 main 分支 PR 18893（ 96fa3538847804647d5dbbb5487baad65a9d699b ）的 MXFP8 MLA 草稿权重修复回移到 releases/v0.30.0，并按发布分支现有的投影输入宽度门控调整回归测试。 DeepSeek-R1-0528 的 MXFP8 MTP 在关闭 MLAPO 时仍可使用非连续缓存的 PROLOG V3 writer。原 NZ 管理只考虑 MLAPO/FA-quant，导致通用量化后处理提前把融合 Q/KV

#### 2026-09-21

- [PR #17042](https://github.com/vllm-project/vllm-ascend/pull/17042) 已合并
  - 中文：[CI] [Misc]更新DeepSeek-R1-0528-W8A8 Kimi-K2.6-w4a8-A3.yaml的基线
  - 原文：[CI][Misc] Update baseline for DeepSeek-R1-0528-W8A8  Kimi-K2.6-w4a8-A3.yaml
  - 说明：This PR 更新 the 性能 baseline for the 前缀-缓存-deepseek-r1-0528-w8a8 测试用例 in the 夜间 single-node E2E tests. The baseline value is adjusted from 3.4877 to 3.0293 to reflect the latest 性能 metrics. Does this PR

### DeepSeek V3

#### 2026-10-08

- [PR #18025](https://github.com/vllm-project/vllm-ascend/pull/18025) 进行中
  - 中文：【修复】DeepSeek-V3-每周
  - 原文：[Bugfix]fix DeepSeek-V3-weekly
  - 说明：- vLLM main:

## Qwen

### Qwen3.8

#### 2026-10-26

- [PR #19876](https://github.com/vllm-project/vllm-ascend/pull/19876) 进行中
  - 中文：【功能】【模型】Qwen3.8 Flash Next 支持 without bundled GBSA sources
  - 原文：[Feature][Model] Add Qwen3.8 Flash Next support without bundled GBSA sources
  - 说明：Summary This is an alternative Qwen3.8 Flash Next PR derived from the original shaopeng-666:feat/qwen38-flash-next-main-v1 head ( d5a0cb4a92b7b14d5c407380889994ee8f762604 ). It keeps the existing model adaptation while removing the bundled
- [PR #19853](https://github.com/vllm-project/vllm-ascend/pull/19853) 进行中
  - 中文：【持续集成】【Nightly-A2】Run Qwen3.8-27B-w8a8-A2 夜间用例 on Model Runner V2
  - 原文：[CI][Nightly-A2] Run Qwen3.8-27B-w8a8-A2 nightly case on Model Runner V2
  - 说明：tests/e2e/cases/models/configs/Qwen/Qwen3.8-27B-w8a8-A2.yaml still pins VLLM USE V2 MODEL RUNNER: "0" in its case envs. That pin came in together with 17681, so the only 2-die A2 long-context 夜间用例 (128k input, 90% 前缀缓存 reuse
- [PR #19834](https://github.com/vllm-project/vllm-ascend/pull/19834) 进行中
  - 中文：【文档】【杂项】Correct Qwen3.6 model name and 新增 ModelScope link for Qwen3.8
  - 原文：[Doc][Misc] Correct Qwen3.6 model name and add ModelScope link for Qwen3.8
  - 说明：This PR corrects the model name Qwen3.6-27B-w8a8c8-fa-mxfp8 to Qwen3.6-27B-w8a8c8-mxfp8 in the Qwen3.5/3.6 tutorial documentation. Additionally, it adds the missing ModelScope link for Qwen3.8-27B-w8a8c8-mxfp8 in the Qwen3.8 tutorial. I hav
- [PR #19820](https://github.com/vllm-project/vllm-ascend/pull/19820) 草稿
  - 中文：【Do Not Merge】Codex/qwen3.8 KV 缓存 v1
  - 原文：[Do Not Merge]Codex/qwen3.8 kv cache v1
  - 说明：【】--- 清单 Testing - Boundary / edge-case coverage : I reviewed whether this change involves boundary conditions (e.g. empty input, single/zero element, min/max values, off-by-one, seque
- [PR #19816](https://github.com/vllm-project/vllm-ascend/pull/19816) 进行中
  - 中文：【文档】【杂项】Correct Qwen3.6 and Qwen3.8 model names and ModelScope links
  - 原文：[Doc][Misc] Correct Qwen3.6 and Qwen3.8 model names and ModelScope links
  - 说明：This PR corrects the model names for quantized Qwen3.6-27B models by removing the unused -fa suffix and adds the missing ModelScope download link for Qwen3.8-27B-w8a8c8-mxfp8 . No, this is a do
- [PR #19814](https://github.com/vllm-project/vllm-ascend/pull/19814) 进行中
  - 中文：【文档】【杂项】修复 Qwen3.6 and Qwen3.8 model 权重 names and ModelScope links
  - 原文：[Doc][Misc] Fix Qwen3.6 and Qwen3.8 model weight names and ModelScope links
  - 说明：This PR corrects the model 权重 names for Qwen3.6-27B-w8a8c8-mxfp8 (removing the incorrect -fa- suffix) and adds the missing ModelScope download link for Qwen3.8-27B-w8a8c8-mxfp8 in the documentation. Does this PR introduce any user-facin

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

#### 2026-10-17

- [PR #19056](https://github.com/vllm-project/vllm-ascend/pull/19056) 进行中
  - 中文：【功能】dense SP 支持 for Qwen3.8
  - 原文：[Feature] add dense SP support for Qwen3.8
  - 说明：新增 a scoped Qwen3.5 decoder layer override with explicit 序列-parallel all-gather and 减少-scatter boundaries. Wire opt-in FlashComm enablement and 新增 unit, collective, engine, graph-mode, MTP, and full-权重 coverage. Does this PR

#### 2026-10-16

- [PR #18983](https://github.com/vllm-project/vllm-ascend/pull/18983) 草稿
  - 中文：【持续集成】【模型】新增 initial Qwen3.8 Flash Next 夜间用例
  - 原文：[CI][Model] Add initial Qwen3.8 Flash Next nightly cases
  - 说明：新增 initial Qwen3.8-Flash-Next single-node 夜间 configurations for A3 W8A8 (TP8) and A5 W8A8/MXFP8 (TP4), register their runner 路由, and 新增 the corresponding model/dataset preload entries. Each case currently runs a non-thinking tex
- [PR #18921](https://github.com/vllm-project/vllm-ascend/pull/18921) 进行中
  - 中文：【修复】【Qwen3.8】Preserve PLE history and multi-token 解码 state
  - 原文：[BugFix][Qwen3.8] Preserve PLE history and multi-token decode state
  - 说明：1. PLE context can contain placeholder tokens during asynchronous scheduling PLE constructs n-gram embeddings from the current input tokens and their preceding token history. This history must contain the actual tokens consumed by the model

#### 2026-10-15

- [Issue #18828](https://github.com/vllm-project/vllm-ascend/issues/18828) 进行中
  - 中文：【缺陷】: Qwen3.8-27B inference hangs with AI Core error and 507057 on v0.30.0rc2 (TP=4, MTP, FULL_DECODE_ONLY)
  - 原文：[Bug]: Qwen3.8-27B inference hangs with AI Core error and 507057 on v0.30.0rc2 (TP=4, MTP, FULL_DECODE_ONLY)

#### 2026-10-14

- [Issue #18664](https://github.com/vllm-project/vllm-ascend/issues/18664) 进行中
  - 中文：[Doc] ： `/zh-cn/v0.30.0rc1/user_guide/release_notes.html'的问题
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
  - 中文：【测试】【功能】新增Qwen3.8-Flash-Next四层无PLE案例
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

#### 2026-09-23

- [PR #16442](https://github.com/vllm-project/vllm-ascend/pull/16442) 已关闭
  - 中文：【持续集成】Recitify Qwen3.8-27B spec 解码 E2E
  - 原文：[CI]Recitify Qwen3.8-27B spec decode E2E
  - 说明：Rectify the E2E tests for Qwen3.8-27B 投机解码 to ensure accurate validation. No. Existing CI tests all pass, including the rectified E2E tests for Qwen3.8-27B 投机解码.

#### 2026-09-22

- [PR #17249](https://github.com/vllm-project/vllm-ascend/pull/17249) 进行中
  - 中文：【Feat】【MRV2】Adapt Qwen3.8 Flash Next to ModelRunnerV2 (graph + MTP + async scheduling)
  - 原文：[Feat][MRV2] Adapt Qwen3.8 Flash Next to ModelRunnerV2 (graph  + MTP + async scheduling)
  - 说明：This PR is based on the latest 16981 head 2e785bba6 (修复(qwen4-exp): stabilize MTP QSA graph replay) for Qwen3.8-Flash-Next. It adapts the qwen4 exp hybrid model to the V2 model runner on Ascend, enabling V2 服务 with FULL aclgraph decod

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
- [PR #16771](https://github.com/vllm-project/vllm-ascend/pull/16771) 已合并
  - 中文：【文档】【杂项】新增 expected output and service verification for Qwen3.8-27B
  - 原文：[Doc][Misc] Add expected output and service verification for Qwen3.8-27B
  - 说明：This PR adds the expected output for the vLLM import verification step and introduces a new \"Service Verification\" section (5.2) for the Qwen3.8-27B model tutorial. This helps users verify that their single-node online deployment is runni

#### 2026-09-15

- [PR #16588](https://github.com/vllm-project/vllm-ascend/pull/16588) 已合并
  - 中文：[Doc] [BugFix]修复Atlas 300I duo和Atlas 800的Qwen3.6和Qwen3.8模型路径不正确的问题
  - 原文：[Doc][BugFix] Fix incorrect Qwen3.6 and Qwen3.8 model paths for Atlas 300I DUO and Atlas 800
  - 说明：This PR corrects the model paths for Qwen3.6-27B-w8a8 and Qwen3.8-27B-w8a8 in the documentation: - For Qwen3.5-27B-Qwen3.6-27B.md , it fixes the model path under the Atlas 800 A3/A2 section to use Eco-Tech/Qwen3.6-27B-w8a8 instead of the -3

#### 2026-09-13

- [PR #15567](https://github.com/vllm-project/vllm-ascend/pull/15567) 已关闭
  - 中文：【持续集成】Recitify Qwen3.8-27B spec 解码 E2E
  - 原文：[CI]Recitify Qwen3.8-27B spec decode E2E
  - 说明：Rectify the E2E tests for Qwen3.8-27B 投机解码 to ensure accurate validation. No. Existing CI tests all pass, including the rectified E2E tests for Qwen3.8-27B 投机解码.

#### 2026-09-10

- [PR #16246](https://github.com/vllm-project/vllm-ascend/pull/16246) 进行中
  - 中文：[性能] [GDN]跨kv缓存组共享组不变元数据
  - 原文：[Performance][GDN] Share group-invariant metadata across kv-cache groups
  - 说明：背景混合模型，如Qwen3.8/Qwen4-Exp （例如Qwen3.8-27B ）以3: 1交织GDN （线性注意）层和全注意层。混合KV缓存管理器将kv缓存组大小与最少层类型对齐，

#### 2026-08-20

- [PR #14491](https://github.com/vllm-project/vllm-ascend/pull/14491) 已合并
  - 中文：【文档】【功能】Atlas 800 A2 deployment guide for Qwen3.8-27B
  - 原文：[Doc][Feature] Add Atlas 800 A2 deployment guide for Qwen3.8-27B
  - 说明：This PR adds deployment documentation and 配置 details for running the Qwen3.8-27B model (both BF16 and quantized versions) on Atlas 800 A2 (64GB × 8) nodes. It includes prerequisites, Docker run commands for the A2 series, and upd

### Qwen3.5

#### 2026-10-26

- [PR #19847](https://github.com/vllm-project/vllm-ascend/pull/19847) 进行中
  - 中文：【feat】qkvz 拆分 to qkv+z, deal transpose before conv1d
  - 原文：[feat]qkvz split to qkv+z, deal transpose before conv1d
  - 说明：Monkey-patch the Qwen3.5 GDN layer to 拆分 in proj qkvz into standalone modules and 更新 the 权重 加载 mapping accordingly, which is fully equivalent to modifying the vLLM source code directly. For the Qwen3.5-35B-A3B model, the out
- [PR #19832](https://github.com/vllm-project/vllm-ascend/pull/19832) 已合并
  - 中文：【v0.30.0】【文档】【杂项】更新 支持 status for GLM-5.1, Qwen3.5/3.6-27B, and Kimi-K2.6 to Supported
  - 原文：[v0.30.0][Doc][Misc] Update support status for GLM-5.1, Qwen3.5/3.6-27B, and Kimi-K2.6 to Supported
  - 说明：This PR 更新 the 支持 status of several models in the 支持 matrix to reflect their current verification status: - 更新 GLM-5.1 , Qwen3.5-27B / Qwen3.6-27B , and Kimi-K2.6 from Experimental (🔵) to Supported (✅). - Reorders the "
- [PR #19804](https://github.com/vllm-project/vllm-ascend/pull/19804) 草稿
  - 中文：【模型】【功能】支持 D3 decision models on Ascend
  - 原文：[Model][Feature] Support D3 decision models on Ascend
  - 说明：Adds an Ascend adapter and model registration for upstream Decision 3.0 (D3) 检查点. D3 uses a Qwen3.5 multimodal backbone with a separate answer-code readout. The adapter reuses Ascend's Qwen3.5 path and vLLM's 序列-classification
- [Issue #18587](https://github.com/vllm-project/vllm-ascend/issues/18587) 已关闭
  - 中文：[Bug] ：使用MooncakeLayerwiseConnector的Qwen3.5-122B PD分解在启动时失败— “Tensor start addr与2M不一致”
  - 原文：[Bug]:  Qwen3.5-122B PD disaggregation with MooncakeLayerwiseConnector fails at startup — "Tensor start addr is not align with 2M"

#### 2026-10-25

- [Issue #19727](https://github.com/vllm-project/vllm-ascend/issues/19727) 进行中
  - 中文：【缺陷】: 前缀缓存 + M-RoPE models 崩溃 with balance scheduling — BalanceScheduler/DyntraLB omit uses_mrope in NewRequestData.from_request
  - 原文：[Bug]: Prefix caching + M-RoPE models crash with balance scheduling — BalanceScheduler/DyntraLB omit uses_mrope in NewRequestData.from_request
  - 说明：Summary With --启用-前缀-缓存 and an M-RoPE multimodal model (Qwen3.5 / Qwen3-VL / Qwen2.5-VL), enabling 启用 balance scheduling ( BalanceScheduler ) crashes the engine as soon as a request hits the 前缀缓存 — typically the 2nd
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
  - 说明：Closes 10648 Part of 9079 Summary - 启用 the upstream EVS video-pruning path for Qwen3.5 on Ascend NPU. - 传递 the pruning method from get video pruning spec() and 启用 multimodal pruning in the NPU model runner. - Move CPU-side EV

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
  - 说明：The TP4 batch-invariance e2e only covered Qwen/Qwen3-30B-A3B , whose layers are all full 注意力. Qwen/Qwen3.5-35B-A3B is a hybrid MoE: its 40 layers repeat a 3:1 pattern, so 30 are gated-delta-net linear-注意力 layers and 10 are full-

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
- [PR #18801](https://github.com/vllm-project/vllm-ascend/pull/18801) 进行中
  - 中文：[BugFix] [v0.30.0]在MRV1上使用MXFP8混合模型的连续缓存部分
  - 原文：[BugFix][v0.30.0] Use contiguous cache sections for MXFP8 hybrid models on MRV1
  - 说明：Qwen3.5 MXFP8 hybrid PD 服务 exhibited numerical degradation with the existing page-strided layout. Restoring contiguous 缓存 sections recovered normal GPQA 精度, verified on Ascend A5. The exact operation responsible for the origin
- [PR #18800](https://github.com/vllm-project/vllm-ascend/pull/18800) 草稿
  - 中文：【算子】【功能】Qwen3.5 解码 权重 Prefetch
  - 原文：[Ops][Feature] Qwen3.5 Decode Weight Prefetch
  - 说明：Adds an experimental, opt-in Qwen3.5-35B-A3B 解码 权重-prefetch path for the supported Ascend A2 BF16 TP=2 topology: - Prefetch the next layer's 注意力 input, the current GDN layer's output projection, or bounded active-expert W2 ran

#### 2026-10-14

- [PR #18697](https://github.com/vllm-project/vllm-ascend/pull/18697) 已合并
  - 中文：[测试] [杂项]更新Qwen3.5-27B-w8a8-A3 e2e测试的基线
  - 原文：[Test][Misc] Update baseline for Qwen3.5-27B-w8a8-A3 e2e test
  - 说明：This PR 更新 the 性能 baseline for the Qwen3.5-27B-w8a8-A3 model in the end-to-end test 配置 from 939.8253 to 898.7984. No. This is a 配置 更新 for test baselines.
- [PR #18695](https://github.com/vllm-project/vllm-ascend/pull/18695) 已合并
  - 中文：【测试】【杂项】更新 Qwen3.5-27B-w8a8-A3 baseline
  - 原文：[Test][Misc] Update Qwen3.5-27B-w8a8-A3 baseline
  - 说明：This PR 更新 the test baseline value for the Qwen3.5-27B-w8a8-A3 model from 939.8253 to 898.7984 in the end-to-end test 配置. No. This is a 配置 更新 for an existing end-
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
- [PR #18400](https://github.com/vllm-project/vllm-ascend/pull/18400) 已合并
  - 中文：[Cherry-pick] [v0.30.0] [BugFix] [310P]修复了310P (# 18390)上的Qwen3.5-w8a8性能问题
  - 原文：[Cherry-pick][v0.30.0][BugFix][310P] fix Qwen3.5-w8a8 performance issue on the 310P  (#18390)
  - 说明：Cherry-pick PR 18390 onto releases/v0.30.0 Original PR 18390 Original author: @Thiagor2002 On Ascend 310P MRV2, 17278 恢复 Qwen3.5-2B MTP 解码 性能 by skipping empty updatable-graph handshakes and avoiding redundant D2H syncs o
- [PR #18390](https://github.com/vllm-project/vllm-ascend/pull/18390) 已合并
  - 中文：【修复】【310P】Qwen3.5-w8a8 性能 issue on the 310P
  - 原文：[BugFix][310P] fix Qwen3.5-w8a8 performance issue on the 310P
  - 说明：On Ascend 310P MRV2, 17278 恢复 Qwen3.5-2B MTP 解码 性能 by skipping empty updatable-graph handshakes and avoiding redundant D2H syncs on the FULL ACLGraph path. Later 17461 remapped MTP verify 注意力 state from SpecDecoding
- [PR #18449](https://github.com/vllm-project/vllm-ascend/pull/18449) 已合并
  - 中文：【文档】【杂项】补充文档 Qwen3.5 batch invariance 支持
  - 原文：[Doc][Misc] Document Qwen3.5 batch invariance support
  - 说明：新增 Qwen/Qwen3.5-35B-A3B to the tested models for batch invariance and clarify that its 支持 is limited to Atlas A2 and A3 Products. No. This is a documentation-only 更新 with no 运行时 b

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
  - 中文：[Bug] DFlash2草稿在APIServer中被拒绝： “目前不支持模型架构['DFlash2DraftModel']” （插件注册时间？ ）
  - 原文：[Bug] DFlash2 draft rejected in APIServer: "Model architectures ['DFlash2DraftModel'] are not supported for now" (plugin registration timing?)
  - 说明：Bug Description 服务 Qwen3.8-27B with a DFlash2 draft model (following the official 投机-解码 guide example) fails at startup in the APIServer process: SpeculativeConfig validation rejects the draft architecture DFlash2DraftMo
- [Issue #18239](https://github.com/vllm-project/vllm-ascend/issues/18239) 进行中
  - 中文：【缺陷】【MRV2】Qwen3.8-27B + MTP on Model Runner V2: GDN 元数据 KeyError 'language_model.model.layers.0.linear_attn' during FULL_DECODE_ONLY capture
  - 原文：[Bug][MRV2] Qwen3.8-27B + MTP on Model Runner V2: GDN metadata KeyError 'language_model.model.layers.0.linear_attn' during FULL_DECODE_ONLY capture
  - 说明：Bug Description 服务 Qwen3.8-27B (architecture Qwen3 5ForConditionalGeneration , hybrid Gated-DeltaNet + full-注意力) on Model Runner V2 with MTP 投机解码 crashes during ACLGraph capture ( FULL 解码 ONLY warmup forward).

#### 2026-10-09

- [PR #18064](https://github.com/vllm-project/vllm-ascend/pull/18064) 进行中
  - 中文：【性能】内核] 优化基于自适应调度的 Split-QKV RMSNorm MRoPE
  - 原文：[Performance][Kernel] Optimize Split-QKV RMSNorm MRoPE with adaptive dispatch
  - 说明：This PR optimizes the 融合 拆分-QKV RMSNorm MRoPE operator used by Qwen3.5 and Qwen3-VL. The operator splits packed QKV, applies per-head RMSNorm and MRoPE to Q/K, and 拷贝 V and an optional gate. Whole-row processing limits parallelism

#### 2026-09-29

- [PR #17168](https://github.com/vllm-project/vllm-ascend/pull/17168) 已合并
  - 中文：【持续集成】更新 配置 for 每周 cases
  - 原文：[CI] update configuration for weekly cases
  - 说明：更新 配置 for 每周 cases:Kimi-K2.5-W4A8-128k-1k-TPOT50.yaml Qwen3.5-397B-w4a8 128k-1k-90-50-PD.yaml Qwen3.5-397B-w4a8 3.5k-1.5k-0-50-PD.yaml no run the cases 每周 - vLLM main:
- [PR #17723](https://github.com/vllm-project/vllm-ascend/pull/17723) 进行中
  - 中文：[Doc] [Feature]添加WeMM-嵌入教程和300I Duo支持矩阵条目
  - 原文：[Doc][Feature] Add WeMM-Embedding tutorial and 300I Duo support matrix entry
  - 说明：Adds a tutorial and a 300I Duo 支持-matrix entry for the WeMM-Embedding family (Tencent, 2B / 4B / 9B): a Qwen3.5-backed universal multimodal embedding model for text, images and videos with Matryoshka truncation. The 检查点 is a sto

#### 2026-09-28

- [PR #17602](https://github.com/vllm-project/vllm-ascend/pull/17602) 进行中
  - 中文：[性能] [Triton]优化门控LayerNorm行平铺和参数重用
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

- [PR #16622](https://github.com/vllm-project/vllm-ascend/pull/16622) 进行中
  - 中文：【文档】修复 inconsistent num_speculative_tokens in Qwen3.5-397B-A17B PD disaggregation tutorial
  - 原文：[Doc] Fix inconsistent num_speculative_tokens in Qwen3.5-397B-A17B PD disaggregation tutorial
  - 说明：Fixes 16160 In section 5.5 (预填充-解码 Disaggregation, Ascend 950DT series) of the Qwen3.5-397B-A17B tutorial, the 预填充 (kv producer) node 配置 used "num 投机 tokens": 1 while the 解码 node used 3 . Per docs/source/user gu
- [Issue #16586](https://github.com/vllm-project/vllm-ascend/issues/16586) 进行中
  - 中文：【Bug】：用lora加载qwen3.5-27B崩溃
  - 原文：[Bug]: load qwen3.5-27B with lora got crashed

#### 2026-09-12

- [PR #16406](https://github.com/vllm-project/vllm-ascend/pull/16406) 进行中
  - 中文：【算子】【杂项】优化 causal conv1d 权重 layout for NPU 加载 in GDN
  - 原文：[Ops][Misc] Optimize causal conv1d weight layout for NPU loading in GDN
  - 说明：【channels, 1, width】This PR removes the repeated Qwen3.5 GDN CausalConv1d 权重 transpose from the forward path. It preserves the logical Parameter/检查点 shape and loader 元数据, then rearranges the underlying storage once after lo

#### 2026-09-11

- [PR #16336](https://github.com/vllm-project/vllm-ascend/pull/16336) 进行中
  - 中文：[Ops] [Feature]融合Triton Qwen VISION QKV、RoPE和FIA填充
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

#### 2026-08-18

- [PR #12426](https://github.com/vllm-project/vllm-ascend/pull/12426) 已合并
  - 中文：【文档】【功能】Qwen3.5/3.6-27B 支持 documentation for Ascend950DT series
  - 原文：[Doc][Feature] Add Qwen3.5/3.6-27B support documentation for Ascend950DT series
  - 说明：This PR primarily 更新 the deployment guide for Qwen3.5/3.6-27B on the Ascend 950DT. No Documentation-only change, no testing 必填. - vLLM version: v0.26.0 - vLLM main:

#### 2026-08-08

- [Issue #13853](https://github.com/vllm-project/vllm-ascend/issues/13853) 进行中
  - 中文：【缺陷】: Qwen3.5进行推理时，如果blocksize设置2048精度会有问题
  - 原文：[Bug]: Qwen3.5进行推理时，如果blocksize设置2048精度会有问题

#### 2026-08-07

- [Issue #13746](https://github.com/vllm-project/vllm-ascend/issues/13746) 进行中
  - 中文：【测试】【DCP】Qwen3.5 DCP 功能测试（解码 context parallelism）
  - 原文：[Test][DCP] Qwen3.5 DCP 功能测试（decode context parallelism）
  - 说明：背景 vllm-ascend 支持 DCP（解码 Context Parallelism），用于长序列 解码 阶段的并行加速（head-sharding 机制，见 platform.py 的 解码 上下文并行 size 约束）。需验证 DCP 在 Qwen3.5 上的功能正确性，确保长序列推理可用。 任务 对 Qwen3.5 进行 DCP 功能测试，验证 解码 上下文并行 在该模型上的功能可用性。 -
- [Issue #13741](https://github.com/vllm-project/vllm-ascend/issues/13741) 进行中
  - 中文：【测试】【MRV2】Qwen3.5-35B-A3B DSpark 精度和性能对比 v2 vs v1
  - 原文：[Test][MRV2] Qwen3.5-35B-A3B DSpark 精度和性能对比 v2 vs v1
  - 说明：背景 vllm-ascend 正在进行 Model Runner V2 (MRV2) 重构。重构后 v2 与 v1 在投机推理（投机解码）路径上存在实现差异（v2 采用 speculator 多重继承 + monkey-patch 架构，v1 为 proposer 路径）。需要系统验证 v2 与 v1 的 精度和性能差异，确保重构不引入功能回归或性能退化。 任务 对 Qwen3.5-35B-A3B + DSpark 组合，在 MRV2 (v2
- [Issue #13740](https://github.com/vllm-project/vllm-ascend/issues/13740) 进行中
  - 中文：【测试】【MRV2】Qwen3.5-35B-A3B Eagle3 精度和性能对比 v2 vs v1
  - 原文：[Test][MRV2] Qwen3.5-35B-A3B Eagle3 精度和性能对比 v2 vs v1
  - 说明：背景 vllm-ascend 正在进行 Model Runner V2 (MRV2) 重构。重构后 v2 与 v1 在投机推理（投机解码）路径上存在实现差异（v2 采用 speculator 多重继承 + monkey-patch 架构，v1 为 proposer 路径）。需要系统验证 v2 与 v1 的 精度和性能差异，确保重构不引入功能回归或性能退化。 任务 对 Qwen3.5-35B-A3B + Eagle3 组合，在 MRV2 (v2
- [Issue #13739](https://github.com/vllm-project/vllm-ascend/issues/13739) 进行中
  - 中文：【测试】【MRV2】Qwen3.5-35B-A3B MTP 精度和性能对比 v2 vs v1
  - 原文：[Test][MRV2] Qwen3.5-35B-A3B MTP 精度和性能对比 v2 vs v1
  - 说明：背景 vllm-ascend 正在进行 Model Runner V2 (MRV2) 重构。重构后 v2 与 v1 在投机推理（投机解码）路径上存在实现差异（v2 采用 speculator 多重继承 + monkey-patch 架构，v1 为 proposer 路径）。需要系统验证 v2 与 v1 的 精度和性能差异，确保重构不引入功能回归或性能退化。 任务 对 Qwen3.5-35B-A3B + MTP 组合，在 MRV2 (v2) 下
- [Issue #13738](https://github.com/vllm-project/vllm-ascend/issues/13738) 进行中
  - 中文：【测试】【MRV2】Qwen3.5-27B dense DSpark 精度和性能对比 v2 vs v1
  - 原文：[Test][MRV2] Qwen3.5-27B dense DSpark 精度和性能对比 v2 vs v1
  - 说明：背景 vllm-ascend 正在进行 Model Runner V2 (MRV2) 重构。重构后 v2 与 v1 在投机推理（投机解码）路径上存在实现差异（v2 采用 speculator 多重继承 + monkey-patch 架构，v1 为 proposer 路径）。需要系统验证 v2 与 v1 的 精度和性能差异，确保重构不引入功能回归或性能退化。 任务 对 Qwen3.5-27B dense + DSpark 组合，在 MRV2 (
- [Issue #13737](https://github.com/vllm-project/vllm-ascend/issues/13737) 进行中
  - 中文：【测试】【MRV2】Qwen3.5-27B dense Eagle3 精度和性能对比 v2 vs v1
  - 原文：[Test][MRV2] Qwen3.5-27B dense Eagle3 精度和性能对比 v2 vs v1
  - 说明：背景 vllm-ascend 正在进行 Model Runner V2 (MRV2) 重构。重构后 v2 与 v1 在投机推理（投机解码）路径上存在实现差异（v2 采用 speculator 多重继承 + monkey-patch 架构，v1 为 proposer 路径）。需要系统验证 v2 与 v1 的 精度和性能差异，确保重构不引入功能回归或性能退化。 任务 对 Qwen3.5-27B dense + Eagle3 组合，在 MRV2 (
- [Issue #13736](https://github.com/vllm-project/vllm-ascend/issues/13736) 进行中
  - 中文：【测试】【MRV2】Qwen3.5-27B dense MTP 精度和性能对比 v2 vs v1
  - 原文：[Test][MRV2] Qwen3.5-27B dense MTP 精度和性能对比 v2 vs v1
  - 说明：背景 vllm-ascend 正在进行 Model Runner V2 (MRV2) 重构。重构后 v2 与 v1 在投机推理（投机解码）路径上存在实现差异（v2 采用 speculator 多重继承 + monkey-patch 架构，v1 为 proposer 路径）。需要系统验证 v2 与 v1 的 精度和性能差异，确保重构不引入功能回归或性能退化。 任务 对 Qwen3.5-27B dense + MTP 组合，在 MRV2 (v2)

#### 2026-07-23

- [Issue #12674](https://github.com/vllm-project/vllm-ascend/issues/12674) 进行中
  - 中文：[Bug] qwen3.5-397b (Mamba + MTP)在第一次请求时崩溃： TypeError: dynamic_func ()在mamba_utils后处理triton内核中获得了参数'block_size'的多个值
  - 原文：[Bug] qwen3.5-397b (Mamba+MTP) crashes on first request: TypeError: dynamic_func() got multiple values for argument 'block_size' in mamba_utils postprocess triton kernel
  - 说明：1. 启脚本 服务能正常起, /health 返回 200,权重加载完成,KV 缓存 正常分配。 2. 问题现象 服务起来后, 发第一个请求就崩 ( /health 仍 200,但任意 /v1/chat/completions 请求触发): 完整栈(2026-07-23 fresh pod 复现,首请求即崩): 崩点在 vllm v1/worker/mamba utils.py:732 的 triton 融合 内核 postprocess mamba fu

#### 2026-07-09

- [PR #11670](https://github.com/vllm-project/vllm-ascend/pull/11670) 进行中
  - 中文：【修复】PD disagg + MTP correctness for Qwen3.5(GDN)
  - 原文：[BugFix] Fix PD disagg + MTP correctness for Qwen3.5(GDN)
  - 说明：refer to: todo - vLLM version: v0.23.0 - vLLM main:

#### 2026-06-29

- [Issue #11095](https://github.com/vllm-project/vllm-ascend/issues/11095) 进行中
  - 中文：【缺陷】: 使用vllm-ascend docker 无法启动Qwen3.5-27B
  - 原文：[Bug]: 使用vllm-ascend docker 无法启动Qwen3.5-27B

### Qwen3-VL

#### 2026-10-26

- [PR #19844](https://github.com/vllm-project/vllm-ascend/pull/19844) 进行中
  - 中文：【文档】新增 Ascend overlay for Qwen3-VL-30B-A3B-Instruct
  - 原文：[Doc] Add Ascend overlay for Qwen3-VL-30B-A3B-Instruct
  - 说明：Summary Adds the Ascend overlay for Qwen/Qwen3-VL-30B-A3B-Instruct under the new recipes/overlays layout introduced by vllm-project/vllm-ascend 19381 and the renderer cutover in vllm-project/recipes 1160. - Adds variants.ascend bf16 for one

#### 2026-10-10

- [Issue #18197](https://github.com/vllm-project/vllm-ascend/issues/18197) 进行中
  - 中文：[错误] ： Qwen3-VL bbox/接地坐标不正确与变压器参考（通过IoU根据接地真实值验证）
  - 原文：[Bug]: Qwen3-VL bbox/grounding coordinates incorrect vs transformers reference (verified via IoU against ground truth)
  - 说明：Summary On vLLM-Ascend v0.23.0 (Ascend 910B4), a Qwen3-VL-based model fine-tuned for bounding-box/keypoint grounding produces objectively incorrect bbox coordinates compared to the same 检查点 run through the transformers reference impl

#### 2026-10-09

- [PR #18064](https://github.com/vllm-project/vllm-ascend/pull/18064) 进行中
  - 中文：【性能】内核] 优化基于自适应调度的 Split-QKV RMSNorm MRoPE
  - 原文：[Performance][Kernel] Optimize Split-QKV RMSNorm MRoPE with adaptive dispatch
  - 说明：This PR optimizes the 融合 拆分-QKV RMSNorm MRoPE operator used by Qwen3.5 and Qwen3-VL. The operator splits packed QKV, applies per-head RMSNorm and MRoPE to Q/K, and 拷贝 V and an optional gate. Whole-row processing limits parallelism

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

#### 2026-07-09

- [Issue #11751](https://github.com/vllm-project/vllm-ascend/issues/11751) 进行中
  - 中文：【众测任务】hjh2-Qwen3-VL-8B-Instruct 部署验证
  - 说明：任务背景 本 Issue 由 vLLM-Ascend 众测任务书自动生成，用于跟踪单个众测任务的执行、交付和问题闭环。 基本信息 - 分类 ：vllm - 任务名称 ：hjh2-Qwen3-VL-8B-Instruct - 任务类别 ：资料验证和部署测试 - 镜像 ：quay.io/ascend/vllm-ascend:v0.18.0 - 权重链接 ： - 配套信息 ：Ascend HDK 25.5.0.B078 - 卡数（Atlas 800I A2） ：1 - 内存 ：1T

### Qwen3

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

#### 2026-10-23

- [PR #19537](https://github.com/vllm-project/vllm-ascend/pull/19537) 进行中
  - 中文：【功能】MiniMax-M3 DSpark draft FlashAttn 支持 on A5
  - 原文：[Feature] Add MiniMax-M3 DSpark draft FlashAttn support on A5
  - 说明：启用 the original six-layer Qwen3DSparkModel DSpark draft for MiniMax-M3 on Ascend A5 / Model Runner V2. - Select CANN FlashAttn only for the dspark head draft, including dense and sliding-window 注意力. 支持 eager execution and ful

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

#### 2026-10-14

- [Issue #18728](https://github.com/vllm-project/vllm-ascend/issues/18728) 进行中
  - 中文：[Doc]: Feedback for `/zh-cn/v0.26.0rc1/tutorials/models/Qwen3-Reranker.html' vllm serve 中的hf_overrides参数需要改成 Qwen3ForSequenceClassification ，需要去掉 VL
  - 原文：[Doc]: Feedback for `/zh-cn/v0.26.0rc1/tutorials/models/Qwen3-Reranker.html`vllm serve 中的hf_overrides参数需要改成Qwen3ForSequenceClassification，需要去掉VL
  - 说明：【"Qwen3VLForSequenceClassification"】📚 The doc issue Qwen3-Reranker的安装指导 !/bin/sh vllm serve Qwen/Qwen3-Reranker-0.6B \ --served-model-name Qwen/Qwen3-Reranker-0.6B \ --runner 池化 \ --hf overrides '{"architectures": ,"classifier from to
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

#### 2026-09-14

- [PR #16501](https://github.com/vllm-project/vllm-ascend/pull/16501) 进行中
  - 中文：【功能】【注意力】FA3 注意力 backend
  - 原文：[Feature][Attention] Add FA3 attention backend
  - 说明：- 新增 an FA3 inference backend using flash attn with kvcache and device-side GQA tiling. - Automatically select it for supported Qwen3 dense/MoE decoder self-注意力 on A2/A3. - Use the paged FA3 path for 预填充, 解码, chunked 预填充,

#### 2026-09-11

- [PR #16335](https://github.com/vllm-project/vllm-ascend/pull/16335) 进行中
  - 中文：[Ops] [Feature]支持Qwen3系列MRoPE的内联COS/SIN计算
  - 原文：[Ops][Feature] Support inline cos/sin calculation for MRoPE in Qwen3 Family
  - 说明：This PR fuses online MRoPE cos/sin generation into the existing Triton 拆分-QKV, RMSNorm and MRoPE operator for Qwen3-family models. It removes the indexed cos sin 缓存 gather and avoids materializing a per-token cos sin tensor before lau

#### 2026-09-03

- [PR #15406](https://github.com/vllm-project/vllm-ascend/pull/15406) 已合并
  - 中文：【MRv2】【特点】【310P】Qwen3+3.5 310P上MRv2适配前缀缓存
  - 原文：[MRv2][Feature][310P] MRv2 adapting Prefix Cache on the 310P for Qwen3+3.5
  - 说明：前缀缓存 on 310P MRv2 was previously rejected by validate 配置 . The supporting infrastructure is already in main ( 15006: Qwen3-VL/Qwen3.5 MRv2 adaptation, KV block zeroer, Triton-free MRoPE state; 14342: mamba 对齐 CPU fallback p

#### 2026-08-24

- [PR #14481](https://github.com/vllm-project/vllm-ascend/pull/14481) 已合并
  - 中文：【文档】【杂项】更新 Ascend environment for Qwen3 and MiniMax-M2/M3
  - 原文：[Doc][Misc] Update Ascend environment for Qwen3 and MiniMax-M2/M3
  - 说明：This PR 更新 and cleans up the recommended Ascend environment variables for Qwen3 and MiniMax-M2/M3 models. - Removes redundant or obsolete environment variables (such as OMP NUM THREADS , TASK QUEUE 启用 , VLLM ASCEND BALANCE SCHEDULI

#### 2026-08-13

- [Issue #14206](https://github.com/vllm-project/vllm-ascend/issues/14206) 进行中
  - 中文：【Contribution】【功能】【MRV2】Qwen3 系列 ModelRunnerV2 精度与性能对比 v1
  - 原文：[Contribution] [Feature][MRV2] Qwen3 系列 ModelRunnerV2 精度与性能对比 v1
  - 说明：背景 Qwen3 系列（含 Qwen3 / Qwen3-MoE / Qwen3-VL 等）是 vllm-ascend 重点支持的模型族。MRV2（ vllm ascend/worker/v2/ ）作为新一代执行路径，在 注意力 元数据、采样、spec 解码（ worker/v2/spec 解码/ ）上均与 MRV1 不同。需要系统性地在 Qwen3 全系列上完成 MRV2 vs MRV1 的精度与性能对比，定位并修复回归。 任务 完成 Q

#### 2026-08-06

- [Issue #13656](https://github.com/vllm-project/vllm-ascend/issues/13656) 进行中
  - 中文：[Bug]: 310p单卡跑qwen3-4b-w8a8，服务报错561000，模型是自己量化的

### Qwen3.6

#### 2026-10-26

- [PR #19834](https://github.com/vllm-project/vllm-ascend/pull/19834) 进行中
  - 中文：【文档】【杂项】Correct Qwen3.6 model name and 新增 ModelScope link for Qwen3.8
  - 原文：[Doc][Misc] Correct Qwen3.6 model name and add ModelScope link for Qwen3.8
  - 说明：This PR corrects the model name Qwen3.6-27B-w8a8c8-fa-mxfp8 to Qwen3.6-27B-w8a8c8-mxfp8 in the Qwen3.5/3.6 tutorial documentation. Additionally, it adds the missing ModelScope link for Qwen3.8-27B-w8a8c8-mxfp8 in the Qwen3.8 tutorial. I hav
- [PR #19827](https://github.com/vllm-project/vllm-ascend/pull/19827) 进行中
  - 中文：【Cherry-pick】【releases/v0.30.0】【文档】新增 Qwen3.6 W4A8 MXFP model link (from #19787)
  - 原文：[Cherry-pick][releases/v0.30.0][Doc] Add Qwen3.6 W4A8 MXFP model link (from #19787)
  - 说明：Cherry-pick of PR 19787 onto releases/v0.30.0 . Original PR: 19787 Original author: @zsponly --- Fill the empty ModelScope link for Qwen3.6-35B-A3B-w4a8-mxfp in the Qwen3.6 model 权重 table. This follows the Qwen3.6 documentation 更新
- [PR #19816](https://github.com/vllm-project/vllm-ascend/pull/19816) 进行中
  - 中文：【文档】【杂项】Correct Qwen3.6 and Qwen3.8 model names and ModelScope links
  - 原文：[Doc][Misc] Correct Qwen3.6 and Qwen3.8 model names and ModelScope links
  - 说明：This PR corrects the model names for quantized Qwen3.6-27B models by removing the unused -fa suffix and adds the missing ModelScope download link for Qwen3.8-27B-w8a8c8-mxfp8 . No, this is a do
- [PR #19814](https://github.com/vllm-project/vllm-ascend/pull/19814) 进行中
  - 中文：【文档】【杂项】修复 Qwen3.6 and Qwen3.8 model 权重 names and ModelScope links
  - 原文：[Doc][Misc] Fix Qwen3.6 and Qwen3.8 model weight names and ModelScope links
  - 说明：This PR corrects the model 权重 names for Qwen3.6-27B-w8a8c8-mxfp8 (removing the incorrect -fa- suffix) and adds the missing ModelScope download link for Qwen3.8-27B-w8a8c8-mxfp8 in the documentation. Does this PR introduce any user-facin
- [PR #19787](https://github.com/vllm-project/vllm-ascend/pull/19787) 进行中
  - 中文：【文档】新增 Qwen3.6 W4A8 MXFP model link
  - 原文：[Doc] Add Qwen3.6 W4A8 MXFP model link
  - 说明：Fill the empty ModelScope link for Qwen3.6-35B-A3B-w4a8-mxfp in the Qwen3.6 model 权重 table. This follows the Qwen3.6 documentation 更新 in 18248. No. This is a documentation-only link up

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

#### 2026-10-11

- [PR #18274](https://github.com/vllm-project/vllm-ascend/pull/18274) 已合并
  - 中文：[Cherry-pick] [releases/v0.30.0] [CI] [Test]更新Qwen3.6 310P测试配置（来自# 18273 ）
  - 原文：[Cherry-pick][releases/v0.30.0][CI][Test] Update Qwen3.6 310P test configurations (from #18273)
  - 说明：Cherry-pick of PR 18273 onto releases/v0.30.0 . Original PR: 18273 Original author: @czydyy --- Backports the Qwen3.6 310P test 配置 changes from 18000 to main. It removes unused sampling parameters from the 27B DUO and 35B MTP cas
- [PR #18273](https://github.com/vllm-project/vllm-ascend/pull/18273) 已合并
  - 中文：【持续集成】【测试】更新 Qwen3.6 310P test configurations
  - 原文：[CI][Test] Update Qwen3.6 310P test configurations
  - 说明：Backports the Qwen3.6 310P test 配置 changes from 18000 to main. It removes unused sampling parameters from the 27B DUO and 35B MTP cases and 更新 the 27B and 35B DUO 性能 baselines. GLM changes from 18000 are excluded. D

#### 2026-10-10

- [Issue #18240](https://github.com/vllm-project/vllm-ascend/issues/18240) 进行中
  - 中文：[Bug] DFlash2草稿在APIServer中被拒绝： “目前不支持模型架构['DFlash2DraftModel']” （插件注册时间？ ）
  - 原文：[Bug] DFlash2 draft rejected in APIServer: "Model architectures ['DFlash2DraftModel'] are not supported for now" (plugin registration timing?)
  - 说明：Bug Description 服务 Qwen3.8-27B with a DFlash2 draft model (following the official 投机-解码 guide example) fails at startup in the APIServer process: SpeculativeConfig validation rejects the draft architecture DFlash2DraftMo
- [Issue #18239](https://github.com/vllm-project/vllm-ascend/issues/18239) 进行中
  - 中文：【缺陷】【MRV2】Qwen3.8-27B + MTP on Model Runner V2: GDN 元数据 KeyError 'language_model.model.layers.0.linear_attn' during FULL_DECODE_ONLY capture
  - 原文：[Bug][MRV2] Qwen3.8-27B + MTP on Model Runner V2: GDN metadata KeyError 'language_model.model.layers.0.linear_attn' during FULL_DECODE_ONLY capture
  - 说明：Bug Description 服务 Qwen3.8-27B (architecture Qwen3 5ForConditionalGeneration , hybrid Gated-DeltaNet + full-注意力) on Model Runner V2 with MTP 投机解码 crashes during ACLGraph capture ( FULL 解码 ONLY warmup forward).

#### 2026-09-24

- [PR #17451](https://github.com/vllm-project/vllm-ascend/pull/17451) 进行中
  - 中文：[CI] [MRV2]使用Qwen3.6-35B-A3B覆盖混合全/SWA DFlash解码
  - 原文：[CI][MRV2] Cover hybrid full/SWA DFlash decoding with Qwen3.6-35B-A3B
  - 说明：Root cause: the Qwen3.6 DFlash E2E test needs coverage for a draft model that mixes full 注意力 and sliding-window 注意力 (SWA), to catch regressions in hybrid-window DFlash 投机解码 on the Ascend v2 runner. 修复: 更新 te

#### 2026-09-23

- [PR #16779](https://github.com/vllm-project/vllm-ascend/pull/16779) 已关闭
  - 中文：【修复】【SpecDecode】mixed Full/SWA DFlash 缓存 corruption on Ascend V2
  - 原文：[Bugfix][SpecDecode] Fix mixed Full/SWA DFlash cache corruption on Ascend V2
  - 说明：Bug description. With DFlash 投机解码 on the Ascend V2 runner, a drafter whose layer types mix full 注意力 and sliding 注意力 (e.g. Qwen3.6-style models) produced garbled output and the draft acceptance length decayed to 1

#### 2026-09-22

- [PR #16986](https://github.com/vllm-project/vllm-ascend/pull/16986) 已合并
  - 中文：【持续集成】Recitify Qwen3.6-27B-DSpark and Qwen3.6-35B-DFlash spec 解码 E2E
  - 原文：[CI]Recitify Qwen3.6-27B-DSpark and Qwen3.6-35B-DFlash spec decode E2E
  - 说明：Rectify the E2E tests for Qwen3.6-27B-DSpark and Qwen3.6-35B-DFlash 投机解码 to ensure accurate validation. No. Existing CI tests all pass, including the rectified E2E tests for Qwe

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

#### 2026-09-09

- [PR #15461](https://github.com/vllm-project/vllm-ascend/pull/15461) 已关闭
  - 中文：【修复】【Speculative Decoding】garbled output in FULL/FULL_DECODE_ONLY modes when MTP num_speculative_tokens=2
  - 原文：[BugFix][Speculative Decoding] Fix garbled output in FULL/FULL_DECODE_ONLY modes when MTP num_speculative_tokens=2
  - 说明：This PR fixes the garbled output and truncation issues that occur when running models (e.g., Qwen3.6 35B) with Multi-Token Prediction (MTP) / 投机解码 启用 and "num 投机 tokens": 2 under CUDAGraph capture modes ( CUDAG

#### 2026-08-13

- [PR #14235](https://github.com/vllm-project/vllm-ascend/pull/14235) 进行中
  - 中文：[BugFix] [Ascend NPU]修复DP级联崩溃并添加DP容错
  - 原文：[BugFix][Ascend NPU] Fix DP cascade crash and add DP fault tolerance
  - 说明：Problem In DP4×TP2+EP8 topology on Ascend 910B2 × 8, running Qwen3.6-35B-A3B-w8a8 with FULL 解码 ONLY aclgraph mode, three 崩溃 types were observed in production on vLLM-Ascend 0.23.0RC1: 崩溃 Type Error Code Root Cause ----------- ----

#### 2026-08-07

- [PR #13795](https://github.com/vllm-project/vllm-ascend/pull/13795) 已合并
  - 中文：【文档】【杂项】修复 Qwen3.6-27B typos and 更新 max-batched-tokens value
  - 原文：[Doc][Misc] Fix Qwen3.6-27B typos and update max-batched-tokens value
  - 说明：This PR fixes a grammatical typo in the Ascend950DT series tab ("your each node" - "each node") and 更新 the --max-num-batched-tokens parameter value from 8192 to 16384 in the Ascend950DT startup command for Qwen3.6-27B to 对齐 with the

#### 2026-08-06

- [PR #13535](https://github.com/vllm-project/vllm-ascend/pull/13535) 已合并
  - 中文：【文档】【功能】Qwen3.6-27B model 支持 of Ascend 950
  - 原文：[Doc][Feature] Add Qwen3.6-27B model support of Ascend 950
  - 说明：This PR adds the supported models matrix for the Ascend 950 Products in the documentation. No Documentation 更新 only, no code changes. - vLLM version: v0.23.0 - vLLM main:

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

#### 2026-10-13

- [Issue #18551](https://github.com/vllm-project/vllm-ascend/issues/18551) 进行中
  - 中文：【Bug】：卸加载载Qwen2.5-72B-Instruct-w8a8-vllm-ascend权重 ， TP = 4的 Altas 300i Pro卡 ，模型加载完成又会自动执行/vllm_ascend/_310p/quantization/methods/w8a8_static.py的适用方法，报输入x1格式应为ND ，实际格式为FRACTAL_NZ
  - 原文：[Bug]: offload 加载Qwen2.5-72B-Instruct-w8a8-vllm-ascend权重,TP=4的 Altas 300i Pro卡，模型加载完成又会自动执行/vllm_ascend/_310p/quantization/methods/w8a8_static.py的apply方法，报Input x1 format should be ND, actual format is FRACTAL_NZ

#### 2026-09-11

- [PR #16336](https://github.com/vllm-project/vllm-ascend/pull/16336) 进行中
  - 中文：[Ops] [Feature]融合Triton Qwen VISION QKV、RoPE和FIA填充
  - 原文：[Ops][Feature] Fused Triton Qwen vision QKV, RoPE, and FIA padding
  - 说明：This PR fuses QKV layout extraction, Q/K RoPE and head-dimension padding into one Triton producer for the Qwen2.5-VL/Qwen3.5-VL vision-注意力 FIA path. It removes the separate PyTorch preprocessing and padding operations before npu 融合

### Qwen3 MoE

#### 2026-10-22

- [Issue #3772](https://github.com/vllm-project/vllm-ascend/issues/3772) 已关闭
  - 中文：【缺陷】: vllm crashes every few hours
  - 原文：[Bug]: vllm crashes every few hours

#### 2026-10-14

- [PR #18706](https://github.com/vllm-project/vllm-ascend/pull/18706) 已合并
  - 中文：[Cherry-pick] [releases/v0.30.0] [Test]禁用Qwen3-30B精度案例的织物内存（来自# 18705 ）
  - 原文：[Cherry-pick][releases/v0.30.0][Test] Disable fabric memory for Qwen3-30B accuracy case (from #18705)
  - 说明：Cherry-pick of 18705 to releases/v0.30.0 . The Qwen3-30B-A3B KV 缓存 Pool 精度 case ( tests/e2e/cases/features/kv pool/test qwen3 30b acc.py ) enables ASCEND 启用 USE FABRIC MEM=1 as part of its Ascend env 配置. This PR sets it to
- [PR #18735](https://github.com/vllm-project/vllm-ascend/pull/18735) 已合并
  - 中文：[测试]禁用Qwen3-30B准确案例的织物内存
  - 原文：[Test] Disable fabric memory for Qwen3-30B accuracy case
  - 说明：The Qwen3-30B-A3B KV 缓存 Pool 精度 case ( tests/e2e/cases/features/kv pool/test qwen3 30b acc.py ) enables ASCEND 启用 USE FABRIC MEM=1 as part of its Ascend env 配置. This PR sets it to 0 , so the case no longer enables Ascend fa
- [PR #18705](https://github.com/vllm-project/vllm-ascend/pull/18705) 已关闭
  - 中文：[测试]禁用Qwen3-30B准确案例的织物内存
  - 原文：[Test] Disable fabric memory for Qwen3-30B accuracy case
  - 说明：The Qwen3-30B-A3B KV 缓存 Pool 精度 case ( tests/e2e/cases/features/kv pool/test qwen3 30b acc.py ) enables ASCEND 启用 USE FABRIC MEM=1 as part of its Ascend env 配置. This PR sets it to 0 , so the case no longer enables Ascend fa
- [PR #18722](https://github.com/vllm-project/vllm-ascend/pull/18722) 已合并
  - 中文：【持续集成】【杂项】更新 Qwen3-30B-A3B-A2 性能 baselines
  - 原文：[CI][Misc] Update Qwen3-30B-A3B-A2 performance baselines
  - 说明：Set the BF16 and W8A8 Qwen3-30B-A3B A2 性能 baselines to 765 token/s on releases/v0.30.0 , retaining the existing 3% tolerance. Release counterpart of 18694, based on releases/v0.30.0 commit 7d7ab85ee . No. Pending CI validation of q
- [PR #18694](https://github.com/vllm-project/vllm-ascend/pull/18694) 已合并
  - 中文：【持续集成】【杂项】Recalibrate Qwen3-30B-A3B-A2 性能 baselines
  - 原文：[CI][Misc] Recalibrate Qwen3-30B-A3B-A2 performance baselines
  - 说明：Prepare five repeated CI runs of qwen3-30b-a3b-bf16-a2-性能 and qwen3-30b-a3b-w8a8-a2-性能 on upstream main ( 68e7c6128 ). After collecting the results, recalibrate each 吞吐 baseline using the mean of five valid runs an

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
  - 中文：[BugFix] [Worker]恢复连续的KV缓存布局并启用MRV2测试
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

#### 2026-10-07

- [PR #17943](https://github.com/vllm-project/vllm-ascend/pull/17943) 草稿
  - 中文：【持续集成】【Diagnostic】Capture Qwen3-30B A2 BF16 and W8A8 NPU profiles
  - 原文：[CI][Diagnostic] Capture Qwen3-30B A2 BF16 and W8A8 NPU profiles
  - 说明：Diagnostic capture for the Qwen3-30B-A3B BF16 and W8A8 A2 吞吐 回退. This branch includes the profiling 支持 from and enables it in the two existing model YAMLs. Keep this diagnostic PR open; do not 合并 these profiling sett

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

#### 2026-07-22

- [PR #12525](https://github.com/vllm-project/vllm-ascend/pull/12525) 进行中
  - 中文：【特点】支持Qwen3 MoE专家修剪
  - 原文：[Feature] Support Qwen3 MoE expert pruning
  - 说明：This PR adds static expert pruning 支持 for Qwen3 MoE models on vLLM-Ascend. Users can provide a per-layer ordered expert list and an expert 清理 ratio through additional 配置 . During model 加载, vLLM-Ascend keeps the top-ranked e

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

### Qwen3-Omni

#### 2026-07-09

- [Issue #11750](https://github.com/vllm-project/vllm-ascend/issues/11750) 进行中
  - 中文：【众测任务】hjh1-Qwen3-Omni-30B-A3B-Thinking 部署验证
  - 说明：任务背景 本 Issue 由 vLLM-Ascend 众测任务书自动生成，用于跟踪单个众测任务的执行、交付和问题闭环。 基本信息 - 分类 ：vllm - 任务名称 ：hjh1-Qwen3-Omni-30B-A3B-Thinking - 任务类别 ：资料验证和部署测试 - 镜像 ：quay.io/ascend/vllm-ascend:v0.18.0 - 权重链接 ： - 配套信息 ：Ascend HDK 25.5.0.B078 - 卡数（Atlas 800I A2） ：2 -

## GLM

### GLM-5.2

#### 2026-10-26

- [Issue #19856](https://github.com/vllm-project/vllm-ascend/issues/19856) 进行中
  - 中文：【文档】: Feedback for `/zh-cn/latest/tutorials/models/GLM5.2.html`
  - 原文：[Doc]: Feedback for `/zh-cn/latest/tutorials/models/GLM5.2.html`
  - 说明：📚 The doc issue 5.1.2 多节点部署 章节中 有提到：“在此内部 DP 负载均衡配置中，若在 API 节点显式设置 --data-parallel-start-rank 0，会触发外部或混合 DP 负载均衡模式，远端无 API 引擎会被拒绝，并报错 Remote engine must not use --headless in external or hybrid dp lb mode。请让 API 节点自动推断 rank，使全部 4 个 EngineC
- [PR #19843](https://github.com/vllm-project/vllm-ascend/pull/19843) 进行中
  - 中文：【修复】【Worker】【v0.30.0】Preserve DSA-CP Top-K indices across PP
  - 原文：[BugFix][Worker][v0.30.0] Preserve DSA-CP Top-K indices across PP
  - 说明：修复 GLM-5.2 IndexShare across pipeline stages when DSA-CP is 启用. PP send and receive now call 启用 sp(self.vllm 配置) , so transport uses the worker's actual 序列-parallel 配置. Worker RPC execution runs outside the te

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
- [PR #19094](https://github.com/vllm-project/vllm-ascend/pull/19094) 进行中
  - 中文：【性能】【注意力】避免 redundant wk_weights_proj in SFA 索引器 top-k selection
  - 原文：[Performance][Attention] Avoid redundant wk_weights_proj in SFA indexer top-k selection
  - 说明：【head dim, n head】In the DSA/SFA 注意力 解码 forward of GLM-5.2, the 索引器 submodule performs top-k block selection. Its preceding projection wk 权重 proj is a 融合 GEMM ( MergedColumnParallelLinear(hidden size, ) ) that produces

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

#### 2026-10-14

- [PR #17344](https://github.com/vllm-project/vllm-ascend/pull/17344) 已关闭
  - 中文：[BugFix] [Parser]当工具调用跨度不产生工具调用时保留模型输出
  - 原文：[BugFix][Parser] Keep model output when a tool-call span produces no tool call
  - 说明：A GLM-5.2 w4a8 agent request can come back as content="" / tool calls=[] while usage still counts every generated token, so the client sees a successful but empty answer and the agent loop stalls. Reproduced on A3 with --工具调用-parser gl
- [Issue #16941](https://github.com/vllm-project/vllm-ascend/issues/16941) 已关闭
  - 中文：【Bug】：【Bug】GLM-5.2 GLM-5.3、 PD分解流返回重复空块，异常STOP_REASON: 154829和膨胀COMPLETION_TOKENS
  - 原文：[Bug]: [Bug] GLM-5.2、GLM-5.3 PD disaggregation streaming returns duplicated empty chunks with abnormal stop_reason: 154829 and inflated completion_tokens
- [Issue #17391](https://github.com/vllm-project/vllm-ascend/issues/17391) 已关闭
  - 中文：【缺陷】: GLM-5.2-w4a8c8 、GLM-5.3-w8a8c8premature stop / silent termination before 工具调用 generation in P/D disaggregated deployment
  - 原文：[Bug]:  GLM-5.2-w4a8c8 、GLM-5.3-w8a8c8premature stop / silent termination before tool call generation in P/D disaggregated deployment
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
  - 中文：[CI]添加未注册的GLM-5.2 A3静态和超级内核案例
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
  - 中文：[Doc] [BugFix]修复GLM5.2 PD分解启动脚本中空的$ 2端口参数
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
  - 中文：[Bug]: glm5.2+kvoffload 非分布式启动在bench中途报错 ：预期所有张量都在同一设备上，但get x2在npu: 5上
  - 原文：[Bug]: glm5.2+kvoffload 非分布式启动在bench中途报错：Expected all tensors to be on the same device, but got x2 is on npu:5

#### 2026-10-07

- [Issue #15922](https://github.com/vllm-project/vllm-ascend/issues/15922) 已关闭
  - 中文：【缺陷】: GLM5.2 1M长序列挂死
  - 原文：[Bug]: GLM5.2 1M长序列挂死

#### 2026-10-04

- [PR #17871](https://github.com/vllm-project/vllm-ascend/pull/17871) 进行中
  - 中文：[CI] [Feature]每周为GLM 5.2内部DP启用静态和超级内核
  - 原文：[CI][Feature] Enable static and super kernels for GLM 5.2 internal DP weekly
  - 说明：Enables 启用 npugraph ex , 启用 static 内核 and 启用 super 内核 in the ascend compilation 配置 of both deployment commands of the existing two-node GLM-5.2 W8A8C8 A3 128K internal DP 每周用例, and sets LOCAL WORLD SIZE="16" i

#### 2026-09-29

- [PR #17705](https://github.com/vllm-project/vllm-ascend/pull/17705) 进行中
  - 中文：【特点】【型号】PCP、DCP支持GLM-5.3-Flash KPool分度器
  - 原文：[Feature][Model] Support GLM-5.3-Flash KPool indexer with PCP and DCP
  - 说明：GLM-5.3-Flash用池化KPool索引器替换了GLM-5.2 LightningIndexer缓存布局。已完成的四个令牌池被压缩到BF16缓存中，而因果后缀保留在FP32尾缓存中。原来的提升路径没有

#### 2026-09-24

- [PR #17504](https://github.com/vllm-project/vllm-ascend/pull/17504) 进行中
  - 中文：【文档】Pass positional args to run_dp_template.sh in GLM5.2 PD tutorial
  - 原文：[Doc] Pass positional args to run_dp_template.sh in GLM5.2 PD tutorial
  - 说明：The GLM5.2 PD-disaggregation tutorial started the 预填充 nodes with a bare bash run dp template.sh . The template reads seven positional parameters ( $1 =可见 devices $2 =port $3 =dp size $4 =dp rank $5 =dp address $6 =dp rpc port $7 =t
- [Issue #17438](https://github.com/vllm-project/vllm-ascend/issues/17438) 进行中
  - 中文：【缺陷】: 23.post1和26.rc1版本GLM5.2-w8a8跑pd分离，d节点开启dcp会出现精度问题
  - 原文：[Bug]: 23.post1和26.rc1版本GLM5.2-w8a8跑pd分离，d节点开启dcp会出现精度问题

#### 2026-09-18

- [PR #16328](https://github.com/vllm-project/vllm-ascend/pull/16328) 已合并
  - 中文：【性能】【注意】融合SFA K-path ops ，为非PD服务启用PROLOG_V3融合解码
  - 原文：[Performance][Attention] Fuse SFA K-path ops and enable PROLOG_V3 fused decode for non-PD serving
  - 说明：GLM5.2 SFA profiling shows several removable ops in the K processing path of every layer. This PR removes them and makes PROLOG V3 the default 融合 preprocessing for quantized SFA layers in every deployment: 1. 每步 int64 slot cast : e

#### 2026-09-17

- [Issue #14656](https://github.com/vllm-project/vllm-ascend/issues/14656) 已关闭
  - 中文：[Bug]: 0.23.0rc1 and 0.23.0 GLM5.2 PD分离场景下存在工具调用返回jsonl格式异常问题

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

#### 2026-08-07

- [Issue #13747](https://github.com/vllm-project/vllm-ascend/issues/13747) 进行中
  - 中文：【测试】【DCP】GLM-5.2 DCP 功能测试（解码 context parallelism）
  - 原文：[Test][DCP] GLM-5.2 DCP 功能测试（decode context parallelism）
  - 说明：背景 vllm-ascend 支持 DCP（解码 Context Parallelism），用于长序列 解码 阶段的并行加速（head-sharding 机制，见 platform.py 的 解码 上下文并行 size 约束）。需验证 DCP 在 GLM-5.2 上的功能正确性，确保长序列推理可用。 任务 对 GLM-5.2 进行 DCP 功能测试，验证 解码 上下文并行 在该模型上的功能可用性。 -

### GLM-5

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
- [PR #19076](https://github.com/vllm-project/vllm-ascend/pull/19076) 进行中
  - 中文：【功能】【GLM-5.3-Flash】启用 torch.compile for GLM-5.3-Flash backbone and MTP
  - 原文：[Feature][GLM-5.3-Flash] Enable torch.compile for GLM-5.3-Flash backbone and MTP
  - 说明：GLM-5 Next (GLM-5.3-Flash) ran its text backbone and MTP draft model in eager 模式 only: neither Glm5NextModel nor Glm5NextMTP carried @支持 torch compile , so enabling compilation in the vLLM 配置 had no effect on them. This PR 启用
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

#### 2026-10-14

- [Issue #16941](https://github.com/vllm-project/vllm-ascend/issues/16941) 已关闭
  - 中文：【Bug】：【Bug】GLM-5.2 GLM-5.3、 PD分解流返回重复空块，异常STOP_REASON: 154829和膨胀COMPLETION_TOKENS
  - 原文：[Bug]: [Bug] GLM-5.2、GLM-5.3 PD disaggregation streaming returns duplicated empty chunks with abnormal stop_reason: 154829 and inflated completion_tokens
- [Issue #17391](https://github.com/vllm-project/vllm-ascend/issues/17391) 已关闭
  - 中文：【缺陷】: GLM-5.2-w4a8c8 、GLM-5.3-w8a8c8premature stop / silent termination before 工具调用 generation in P/D disaggregated deployment
  - 原文：[Bug]:  GLM-5.2-w4a8c8 、GLM-5.3-w8a8c8premature stop / silent termination before tool call generation in P/D disaggregated deployment
- [PR #18552](https://github.com/vllm-project/vllm-ascend/pull/18552) 已合并
  - 中文：[文档]澄清GLM-5停产并调整GLM-5.1部署示例
  - 原文：[Doc] Clarify GLM-5 discontinuation and align GLM-5.1 deployment examples
  - 说明：Clarify that GLM-5 is discontinued starting with vLLM Ascend v0.30.0 and make the deployment examples specific to GLM-5.1. The guide currently combines GLM-5 and GLM-5.1, lists GLM-5 权重 and serves requests under the glm-5 alias even in
- [PR #18553](https://github.com/vllm-project/vllm-ascend/pull/18553) 已合并
  - 中文：[文档] [v0.30.0]澄清GLM-5停产并调整GLM-5.1部署示例
  - 原文：[Doc][v0.30.0] Clarify GLM-5 discontinuation and align GLM-5.1 deployment examples
  - 说明：Clarify that GLM-5 is discontinued starting with vLLM Ascend v0.30.0 and make the deployment examples specific to GLM-5.1. The guide currently combines GLM-5 and GLM-5.1, lists GLM-5 权重 and serves requests under the glm-5 alias even in
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
- [Issue #18573](https://github.com/vllm-project/vllm-ascend/issues/18573) 进行中
  - 中文：[Doc]: 0.30.0rc1的GLM-5.3文档配置，实测带memcache的配置可以正常拉起服务，但是curl P节点无响应，请确认配置方案是否准确
  - 说明：📚 The doc issue 0.30.0rc1的文档配置，实测带memcache的配置可以正常拉起服务，但是curl P节点无响应，去掉如下memcache配置后，推理正常 <img width="984" height="475" alt="Image" src=" / 具体配置段落： <img width="1217" height="1138" alt="Image" src=" / Suggest a potential alternative/修复 No r
- [PR #18534](https://github.com/vllm-project/vllm-ascend/pull/18534) 进行中
  - 中文：【功能】【模型】GLM-Next KPool 索引器 LI C8: int8 quantized pooled 缓存, dsa_cp compatible
  - 原文：[Feature][Model] GLM-Next KPool indexer LI C8: int8 quantized pooled cache, dsa_cp compatible
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
  - 中文：[CI]删除GLM5和GLM4.7预定用例和YAML文件
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
  - 中文：[Bug]: glm5.2+kvoffload 非分布式启动在bench中途报错 ：预期所有张量都在同一设备上，但get x2在npu: 5上
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

- [Issue #17438](https://github.com/vllm-project/vllm-ascend/issues/17438) 进行中
  - 中文：【缺陷】: 23.post1和26.rc1版本GLM5.2-w8a8跑pd分离，d节点开启dcp会出现精度问题
  - 原文：[Bug]: 23.post1和26.rc1版本GLM5.2-w8a8跑pd分离，d节点开启dcp会出现精度问题

#### 2026-09-23

- [Issue #17388](https://github.com/vllm-project/vllm-ascend/issues/17388) 进行中
  - 中文：[Bug]: enable_dsa_cp = true在cudagraph捕获期间在sfa_cp中GLM-5.3-Flash预填充启动失败
  - 原文：[Bug]: enable_dsa_cp=true fails GLM-5.3-Flash prefill startup in sfa_cp during cudagraph capture

#### 2026-09-22

- [PR #16918](https://github.com/vllm-project/vllm-ascend/pull/16918) 已合并
  - 中文：【修复】【SFA】GLM5Next 稀疏 MLA sinks and mask/window parameters
  - 原文：[BugFix][SFA] Fix GLM5Next sparse MLA sinks and mask/window parameters
  - 说明：GLM5Next's NoPE 稀疏 MLA path on Ascend A5 traps inside SparseFlashMla under sustained load with data parallelism and ACL Graph 启用: The trap is probabilistic and only shows up after roughly a thousand requests at concurrency 128, whi
- [Issue #17188](https://github.com/vllm-project/vllm-ascend/issues/17188) 进行中
  - 中文：【缺陷】: GLM-5.3-Flash-w8a8基于0day适配版本PD分离问题
  - 原文：[Bug]: GLM-5.3-Flash-w8a8基于0day适配版本PD分离问题

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

#### 2026-09-09

- [Issue #16178](https://github.com/vllm-project/vllm-ascend/issues/16178) 进行中
  - 中文：【缺陷】: GLM-5.3-Flash-w8a8基于vllm-ascend:glm-5.3-flash镜像，单节点1M长序列启动失败，修改ascend_forward_context.py文件后启动成功
  - 原文：[Bug]: GLM-5.3-Flash-w8a8基于vllm-ascend:glm-5.3-flash镜像，单节点1M长序列启动失败，修改ascend_forward_context.py文件后启动成功

### GLM-5.1

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

#### 2026-10-14

- [PR #18552](https://github.com/vllm-project/vllm-ascend/pull/18552) 已合并
  - 中文：[文档]澄清GLM-5停产并调整GLM-5.1部署示例
  - 原文：[Doc] Clarify GLM-5 discontinuation and align GLM-5.1 deployment examples
  - 说明：Clarify that GLM-5 is discontinued starting with vLLM Ascend v0.30.0 and make the deployment examples specific to GLM-5.1. The guide currently combines GLM-5 and GLM-5.1, lists GLM-5 权重 and serves requests under the glm-5 alias even in
- [PR #18553](https://github.com/vllm-project/vllm-ascend/pull/18553) 已合并
  - 中文：[文档] [v0.30.0]澄清GLM-5停产并调整GLM-5.1部署示例
  - 原文：[Doc][v0.30.0] Clarify GLM-5 discontinuation and align GLM-5.1 deployment examples
  - 说明：Clarify that GLM-5 is discontinued starting with vLLM Ascend v0.30.0 and make the deployment examples specific to GLM-5.1. The guide currently combines GLM-5 and GLM-5.1, lists GLM-5 权重 and serves requests under the glm-5 alias even in

#### 2026-10-13

- [Issue #16954](https://github.com/vllm-project/vllm-ascend/issues/16954) 已关闭
  - 中文：【文档】: GLM-5 & GLM-5.1文档latest中A3PD分离配置 --kv-缓存-dtype int8 \ --attention_config.indexer_kv_dtype int8 \ 服务启动失败
  - 原文：[Doc]: GLM-5 & GLM-5.1文档latest中A3PD分离配置    --kv-cache-dtype int8 \     --attention_config.indexer_kv_dtype int8 \ 服务启动失败
  - 说明：【init .py:115】📚 The doc issue 文档地址： 文档中指定vllm-ascend 0.23.0版本 A3PD分离场景下vllm配置中新增参数 --kv-缓存-dtype int8 \ --注意力 配置.索引器 kv dtype int8 \ 带该参数启动服务报错： INFO 09-19 05:32:12 Registered model loader <class 'vllm ascend.model loade
- [PR #18496](https://github.com/vllm-project/vllm-ascend/pull/18496) 进行中
  - 中文：【特点】[xlite] XLite后端支持GLM-5.1 LI-C8
  - 原文：[Feature][xlite] Support GLM-5.1 LI-C8 for the XLite backend
  - 说明：【功能】【xlite】支持 GLM-5.1 LI-C8 Connect the existing XLite LI-C8 implementation to vLLM-Ascend: - Recognize QK INT8 DYNAMIC in 量化 元数据. - Pass per-layer LI-C8 flags to XLite. - Preserve both INT8 索引器 keys and FP16 k

#### 2026-10-12

- [PR #18340](https://github.com/vllm-project/vllm-ascend/pull/18340) 已合并
  - 中文：【持续集成】新增 每周用例 GLM-5.1-w8a8c8-MTP-卸载-test-perf
  - 原文：[CI] Add weekly case GLM-5.1-w8a8c8-MTP-offload-test-perf
  - 说明：新增 每周用例 GLM-5.1-w8a8c8-MTP-卸载-test-perf - vLLM main:

#### 2026-10-09

- [PR #18117](https://github.com/vllm-project/vllm-ascend/pull/18117) 草稿
  - 中文：[Doc] [Model]文件GLM-5.1 A5 AlltoAllV和稀疏C8故障
  - 原文：[Doc][Model] Document GLM-5.1 A5 AlltoAllV and sparse C8 failures
  - 说明：【16】【4】补充文档 two independently reproduced GLM-5.1 W4A4C8 failures on Ascend 950PR: the startup AlltoAllV failure reporting rankNumPerBoard is more than , and a first-request 稀疏 C8 注意力 segfault after health checks succeed. Exp
- [PR #18077](https://github.com/vllm-project/vllm-ascend/pull/18077) 进行中
  - 中文：[CI] [功能]为GLM 5.1 PrefillMC2启用静态和超级内核
  - 原文：[CI][Feature] Enable static and super kernels for GLM 5.1 PrefillMC2
  - 说明：启用 启用 npugraph ex , 启用 static 内核 , and 启用 super 内核 under ascend compilation 配置 for the existing GLM-5.1 W8A8 PrefillMC2 夜间用例, following 17871. Set LOCAL WORLD SIZE="16" to match the single-node A3 TP16/DP

#### 2026-10-08

- [PR #17978](https://github.com/vllm-project/vllm-ascend/pull/17978) 草稿
  - 中文：【持续集成】Test GLM-5.1 MTP without explicit int8 缓存 flags
  - 原文：[CI] Test GLM-5.1 MTP without explicit int8 cache flags
  - 说明：Use Eco-Tech/GLM-5.1-w8a8c8-MTP in the GLM-5.1 3500-input / 1500-output, concurrency-8 A3 性能 case, and 移除 both --kv-缓存-dtype int8 and --注意力 配置.索引器 kv dtype int8 from both node commands. All remaining case setti
- [PR #17974](https://github.com/vllm-project/vllm-ascend/pull/17974) 进行中
  - 中文：【修复】【持续集成】恢复 稀疏 C8 settings and 更新 GLM-5.1 检查点
  - 原文：[BugFix][CI] Restore sparse C8 settings and update GLM-5.1 checkpoints
  - 说明：15514 migrated disabled 稀疏-缓存 options to explicit int8 arguments, unintentionally enabling 缓存 量化 in several GLM cases. 恢复 the previous settings in 14 case files and two GLM-5.2 deployment examples: 移除 the dtype

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

#### 2026-09-01

- [PR #15489](https://github.com/vllm-project/vllm-ascend/pull/15489) 草稿
  - 中文：【持续集成】Trigger GLM-5.1 夜间 bisect
  - 原文：[CI] Trigger GLM-5.1 nightly bisect
  - 说明：This is an empty draft PR used to trigger the multi-node GLM-5.1 夜间 bisect workflow.\n\nNo code changes. - vLLM main:

### GLM-4.7

#### 2026-10-22

- [PR #19520](https://github.com/vllm-project/vllm-ascend/pull/19520) 进行中
  - 中文：【功能】【Xlite】支持 GLM-4.7-Flash
  - 原文：[Feature][Xlite] Support GLM-4.7-Flash
  - 说明：新增 Glm4MoeLiteXliteModel to 支持 the Glm4MoeLiteForCausalLM architecture used by GLM-4.7-Flash through the existing DeepSeek MLA Xlite adapter. The adapter validates supported configurations and 必填 注意力/MoE 权重 before ini

#### 2026-10-11

- [PR #18278](https://github.com/vllm-project/vllm-ascend/pull/18278) 进行中
  - 中文：[Cherry-pick] [releases/v0.30.0] [CI]删除GLM5和GLM4.7预定案例和YAML文件（来自# 18013 ）
  - 原文：[Cherry-pick][releases/v0.30.0][CI] Remove GLM5 and GLM4.7 scheduled cases and YAML files (from #18013)
  - 说明：Cherry-pick of PR 18013 onto releases/v0.30.0 . Original PR: 18013 Original author: @Wyz-134 --- 移除 the remaining GLM-5 (original version) and GLM-4.7 夜间/每周 cases, their YAML files, and obsolete scheduled-test references, follo

#### 2026-10-10

- [PR #18013](https://github.com/vllm-project/vllm-ascend/pull/18013) 已合并
  - 中文：[CI]删除GLM5和GLM4.7预定用例和YAML文件
  - 原文：[CI] Remove GLM5 and GLM4.7 scheduled cases and YAML files
  - 说明：移除 the remaining GLM-5 (original version) and GLM-4.7 夜间/每周 cases, their YAML files, and obsolete scheduled-test references, following the cleanup scope of 17950. - 移除 glm-4.7-w8a8 from 夜间 and delete tests/e2e/cases/mo

### GLM-4

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

#### 2026-10-04

- [Issue #17874](https://github.com/vllm-project/vllm-ascend/issues/17874) 进行中
  - 中文：[错误] ： GLM-4.6V视觉编码器在910C上没有有效的TP并行度—并发图像请求通过编码器串行化
  - 原文：[Bug]: GLM-4.6V vision encoder has no effective TP parallelism on 910C — concurrent image requests serialize through the encoder

#### 2026-07-20

- [PR #11453](https://github.com/vllm-project/vllm-ascend/pull/11453) 已合并
  - 中文：【重构】【Patch】移除 obsolete parser patches
  - 原文：[Refactor][Patch] Remove obsolete parser patches
  - 说明：vLLM v0.24.0 and the verified main revision no longer need these compatibility patches: - patch glm47 工具调用 parser.py - patch glm 工具调用 streaming.py - patch tool choice none content.py This PR removes the patches, their registration

## Kimi

### Kimi K3

#### 2026-10-26

- [PR #19870](https://github.com/vllm-project/vllm-ascend/pull/19870) 进行中
  - 中文：【修复】Preserve K3 token shards after 融合 O-projection
  - 原文：[BugFix] Preserve K3 token shards after fused O-projection
  - 说明：Kimi K3 注意力 residuals apply 序列-parallel ReduceScatter twice when the 融合 O-projection already returns a token shard. Skip the decoder ReduceScatter in that case, retaining it for the unfused path. This also applies without DCP
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
- [PR #19774](https://github.com/vllm-project/vllm-ascend/pull/19774) 进行中
  - 中文：【测试】更新 v0.30.0 Kimi K3 MRV2 coverage and DeepSeek 每周 scheduling
  - 原文：[Test] Update v0.30.0 Kimi K3 MRV2 coverage and DeepSeek weekly scheduling
  - 说明：新增 Kimi K3 Model Runner V2 coverage to releases/v0.30.0 , based on 18042 and cherry-picked from 18939, and move the DeepSeek V4 Pro 1M P/D case to 每周 scheduling. - Reuse the Kimi K3 model fixtures and scenario helpers for four-card MRV

#### 2026-10-24

- [PR #19703](https://github.com/vllm-project/vllm-ascend/pull/19703) 进行中
  - 中文：【文档】【Recipe】新增 Kimi-K3 Ascend 950DT overlay profile
  - 原文：[Doc][Recipe] Add Kimi-K3 Ascend 950DT overlay profile
  - 说明：新增 an Ascend 950DT (A5) W4A8 profile to the Kimi-K3 recipe overlay. - Extend ascend w4a8 to A5 using Eco-Tech/Kimi-K3-w4a8 and quay.io/ascend/vllm-ascend:kimi-k3-a5 . - 新增 A5 hardware 元数据 and a 32-NPU minimum. The four-node TP+DP lay

#### 2026-10-23

- [Issue #19663](https://github.com/vllm-project/vllm-ascend/issues/19663) 进行中
  - 中文：【Tracking】Kimi-K3 DCP16 解码 优化 and compatibility fixes
  - 原文：[Tracking] Kimi-K3 DCP16 decode optimization and compatibility fixes
  - 说明：While validating Kimi-K3 on Ascend A3 with P/D disaggregation, TP16/DCP16 and DSpark 启用, we put together a 解码 优化 and a few compatibility fixes. The changes are 拆分 across separate PRs, so this issue brings them together
- [PR #19617](https://github.com/vllm-project/vllm-ascend/pull/19617) 进行中
  - 中文：perf: reuse prepared convolution indices in Kimi KDA
  - 说明：【:, 0】Kimi K3 currently normalizes convolution 缓存 indices in each KDA layer. For two-dimensional indices, 缓存 indices .contiguous() can repeatedly materialize the same first column across layers sharing 元数据. 启用 use contiguous c
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
- [Issue #19498](https://github.com/vllm-project/vllm-ascend/issues/19498) 进行中
  - 中文：[Bug]: 0.30.0 Kimi-K3 dspark 投机解码采信率随上下文长度坍塌
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
- [Issue #19226](https://github.com/vllm-project/vllm-ascend/issues/19226) 进行中
  - 中文：【缺陷】【Kimi-K3】解码 nodes 挂起 & die: engines stop stepping, then ERR00100 / rtEventSynchronize task timeout (stream wait timeout 340s)
  - 原文：[Bug][Kimi-K3] Decode nodes hang & die: engines stop stepping, then ERR00100 / rtEventSynchronize task timeout (stream wait timeout 340s)
  - 说明：环境 项 值 --- --- 硬件 Ascend A3，PD 分离：4×预填充(TP16 PP4) + 4×解码(TP16 DCP16 DP4) + 1×conductor 模型 Kimi-K3 w4a8（KDA linear 注意力 + MTP/DSpark 投机， num 投机 tokens=7 ） 镜像 release main 1008 202610161528 修复 缓存 、 ... 202610191442 p
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

#### 2026-10-14

- [Issue #14567](https://github.com/vllm-project/vllm-ascend/issues/14567) 已关闭
  - 中文：[Bug]: enable_flashcomm1 = true导致DP padding将padding token 0路由到rank0 ，导致Kimi-K3的Ascend 910A3上TTFT性能回归
  - 原文：[Bug]: enable_flashcomm1=true causes DP padding that routes padding token 0 to rank0, leading to TTFT performance regression on Ascend 910A3 for Kimi-K3
- [PR #18261](https://github.com/vllm-project/vllm-ascend/pull/18261) 已合并
  - 中文：[Cherry-pick] [releases/v0.30.0] [Feature] [Model]支持Kimi K3及其MTP草案模型的EPLB （来自# 17835 ）
  - 原文：[Cherry-pick][releases/v0.30.0][Feature][Model] Support EPLB for Kimi K3 and its MTP draft model (from #17835)
  - 说明：Backports 17835 from main to releases/v0.30.0 . This brings EPLB 支持 for Kimi K3 and its MoE MTP draft model to the v0.30.0 release branch, including PP-local MoE bookkeeping, redundant expert initialization, and physical expert metadat

#### 2026-10-13

- [PR #18606](https://github.com/vllm-project/vllm-ascend/pull/18606) 进行中
  - 中文：[BugFix] [Kimi]使用分组matmul进行急切的MXFP8投影
  - 原文：[BugFix][Kimi] Use grouped matmul for eager MXFP8 projections
  - 说明：Corresponding releases/v0.30.0 backport: 18756. Route Kimi K3's 融合 QKV, routed-down and routed-up MXFP8 projections through single-group npu grouped matmul during eager execution. The motivating issue is excessive QMM workspace/tiling su
- [PR #18595](https://github.com/vllm-project/vllm-ascend/pull/18595) 草稿
  - 中文：[BugFix] [注意]保留已测试的FlashMLA DCP8 PD快照
  - 原文：[BugFix][Attention] Preserve tested FlashMLA DCP8 PD snapshot
  - 说明：This draft preserves the exact code snapshot used by the completed eight-host Kimi-K3 预填充/解码 run. With DCP/缓存 interleave 768, the deployed CANN PROLOG V3 rejected TileSize=768 ; the deployed Ascend Triton direct launcher also rej
- [PR #18469](https://github.com/vllm-project/vllm-ascend/pull/18469) 进行中
  - 中文：修复填充M块容量超过256时A3 GMM SiTU回退的问题
  - 原文：Fix A3 GMM SiTU fallback when padded M-block capacity exceeds 256
  - 说明：Follow-up to 16655. The 融合 A3 GMM SiTU operator rejects requests when its padded M-block upper bound exceeds 256, which 导致 a 128K Kimi K3 预填充 request to fail in production. Mirror the native capacity bound in the Python fusion se

#### 2026-10-12

- [PR #18332](https://github.com/vllm-project/vllm-ascend/pull/18332) 进行中
  - 中文：【持续集成】【模型】新增 Kimi K3 MXFP QuaRot A5 four-node PD 夜间 coverage
  - 原文：[CI][Model] Add Kimi K3 MXFP QuaRot A5 four-node PD nightly coverage
  - 说明：Adds a four-node A5 2P + 2D 夜间用例 for Eco-Tech/Kimi-K3-w4a8-mxfp-quarot , with 8 NPUs per node. - Nodes 0–1: 预填充; nodes 2–3: 解码. Each side has an independent TP8/DP2/EP16 world, ranks 0–1 and master/RPC endpoint. - Reuses the

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

#### 2026-09-28

- [PR #17566](https://github.com/vllm-project/vllm-ascend/pull/17566) 已关闭
  - 中文：【功能】use fia for kimik3 预填充
  - 原文：[Feature] use fia for kimik3 prefill
  - 说明：- vLLM main:

#### 2026-09-23

- [PR #17394](https://github.com/vllm-project/vllm-ascend/pull/17394) 草稿
  - 中文：【特点】【MOE】主机支持KIMI K3 MegaMoe （ SiTU激活+ EP128 + W4A8比例归一化）
  - 原文：[Feature][Moe] Support Kimi K3 MegaMoe (SiTU activation + EP128 + W4A8 scale normalization) on main
  - 说明：WIP follow-up adaptation of 15872 (Kimi K3 MegaMoe) onto current main (base: 44518f429). Carries the adaptation and fixes we validated while bringing up K3 W4A8 MegaMoe on A3 with CANN 9.2.0: 1. Adaptation of 15872 onto main : - moe utils.p

#### 2026-09-21

- [PR #17090](https://github.com/vllm-project/vllm-ascend/pull/17090) 进行中
  - 中文：【功能】【Kimi K3】启用 MLA Prolog V3 on A3
  - 原文：[Feature][Kimi K3] Enable MLA Prolog V3 on A3
  - 说明：Adds A2/A3 MLA Prolog V3 支持 on main for Kimi K3 A3 解码. The implementation keeps the isolated K3 custom-operator interface already present on main : the mla prolog v3 k3 directory, MlaPrologV3K3 ACLNN/OPP symbols, and torch.ops. C a
- [PR #17048](https://github.com/vllm-project/vllm-ascend/pull/17048) 进行中
  - 中文：【修复】【Kimi K3】启用 accurate CANN MlaPrologV3 inference on Ascend A3
  - 原文：[BugFix][Kimi K3] Enable accurate CANN MlaPrologV3 inference on Ascend A3
  - 说明：启用 CANN MlaPrologV3 for Kimi K3 no-RoPE MLA 解码 on Ascend A3 when 启用 mlapo is 启用. - 支持 BF16 and W8A8 DYNAMIC MLA projections. - Materialize padded Q-up 权重 before NZ conversion to 修复 incorrect query outputs. - Pres

#### 2026-09-19

- [Issue #16914](https://github.com/vllm-project/vllm-ascend/issues/16914) 进行中
  - 中文：[Bug] Kimi K3上的MegaMoe （ A3 ， PD分解的4P4D ）产生乱码输出和矢量核心崩溃（ acl错误507035 ）
  - 原文：[Bug] MegaMoe on Kimi K3 (A3, PD-disaggregated 4P4D) produces garbled output and vector-core crash (acl error 507035)
  - 说明：【缺陷】MegaMoe on Kimi K3 (A3, PD-disaggregated 4P4D) produces garbled output and vector-core 崩溃 (acl error 507035) Summary When enabling MegaMoe ( 启用 融合 mc2: 2 + 启用 预填充 mc2: true ) for Kimi K3 W4A8 on Atlas 800I A3, every

#### 2026-09-17

- [PR #16757](https://github.com/vllm-project/vllm-ascend/pull/16757) 进行中
  - 中文：[v0.27.1rc] [功能] [Kimi K3]实现两阶段在线Softmax back…
  - 原文：[v0.27.1rc][Feature][Kimi K3] Implement two-phase Online Softmax back…
  - 说明：This pull request implements a two-phase Online Softmax backend for the Kimi K3 注意力 Residual (AttnRes) mechanism. It precomputes effective queries and splits the AttnRes computation into Phase 1 (preparing FP32 Online Softmax statisti

#### 2026-09-08

- [PR #16064](https://github.com/vllm-project/vllm-ascend/pull/16064) 进行中
  - 中文：[v0.26.0rc] [功能] [Kimi K3]为Kimi K3 AttenRes实现两阶段在线Softmax后端
  - 原文：[v0.26.0rc][Feature][Kimi K3] Implement two-phase Online Softmax backend for Kimi K3 AttenRes
  - 说明：This pull request implements a two-phase Online Softmax backend for the Kimi K3 注意力 Residual (AttnRes) mechanism. It precomputes effective queries and splits the AttnRes computation into Phase 1 (preparing FP32 Online Softmax statisti

#### 2026-09-05

- [PR #15851](https://github.com/vllm-project/vllm-ascend/pull/15851) 进行中
  - 中文：【功能】【Spec Decode】支持 Kimi K3 GQA DSpark with DCP
  - 原文：[Feature][Spec Decode] Support Kimi K3 GQA DSpark with DCP
  - 说明：启用 a Kimi K3 target with 解码 context parallelism and a replicated GQA DSpark draft on Ascend Model Runner V2. Rebased onto 484cd036c923aba3d51d24e45ee89817a020d9da , paired with verified vLLM c0b6f74bee518aeaf5d72b200a0216e72fbb5e7c

#### 2026-08-26

- [PR #14999](https://github.com/vllm-project/vllm-ascend/pull/14999) 进行中
  - 中文：feat: 支持 Kimi-K3 DSpark Block5
  - 原文：feat: support Kimi-K3 DSpark Block5
  - 说明：This PR adds 支持 for the Kimi-K3-DSpark-Block5 draft model. - Read causal 注意力 settings from the 检查点 配置. - Validate that the trained DSpark block size matches num 投机 tokens. - Preserve compatibility with

#### 2026-08-12

- [PR #13520](https://github.com/vllm-project/vllm-ascend/pull/13520) 已合并
  - 中文：【0.26.0rc】【修复】【模型】对齐 Kimi K3 frontend with upstream
  - 原文：[0.26.0rc][BugFix][Model] Align Kimi K3 frontend with upstream
  - 说明：本 PR 将 releases/v0.26.0rc 中的 Kimi K3 Python frontend 行为对齐到当前上游 vLLM 已合入实现，改动限于 K3 patch、对应单测和 patch 文档： - 回移 streaming 检查从每步扫描完整历史改为只扫描当前 delta 和 marker carry window，避免长上下文下 O(context/step) 开销。 - 回移 name:index 构造 工具调用 ID，改用 vLLM 默认随机 I

#### 2026-08-07

- [Issue #13745](https://github.com/vllm-project/vllm-ascend/issues/13745) 进行中
  - 中文：【测试】【MRV2】Kimi-K3 DSpark 精度和性能对比 v2 vs v1
  - 原文：[Test][MRV2] Kimi-K3 DSpark 精度和性能对比 v2 vs v1
  - 说明：背景 vllm-ascend 正在进行 Model Runner V2 (MRV2) 重构。重构后 v2 与 v1 在投机推理（投机解码）路径上存在实现差异（v2 采用 speculator 多重继承 + monkey-patch 架构，v1 为 proposer 路径）。需要系统验证 v2 与 v1 的 精度和性能差异，确保重构不引入功能回归或性能退化。 任务 对 Kimi-K3 + DSpark 组合，在 MRV2 (v2) 下进行精度和

### Kimi K2

#### 2026-10-26

- [PR #19832](https://github.com/vllm-project/vllm-ascend/pull/19832) 已合并
  - 中文：【v0.30.0】【文档】【杂项】更新 支持 status for GLM-5.1, Qwen3.5/3.6-27B, and Kimi-K2.6 to Supported
  - 原文：[v0.30.0][Doc][Misc] Update support status for GLM-5.1, Qwen3.5/3.6-27B, and Kimi-K2.6 to Supported
  - 说明：This PR 更新 the 支持 status of several models in the 支持 matrix to reflect their current verification status: - 更新 GLM-5.1 , Qwen3.5-27B / Qwen3.6-27B , and Kimi-K2.6 from Experimental (🔵) to Supported (✅). - Reorders the "
- [PR #19783](https://github.com/vllm-project/vllm-ascend/pull/19783) 进行中
  - 中文：【文档】【杂项】更新 Kimi-K2.6 deployment and 支持 documentation
  - 原文：[Doc][Misc] Update Kimi-K2.6 deployment and support documentation
  - 说明：Separate the two existing documentation changes from KDA 优化 PR 19617 so they can be reviewed independently. - docs/source/tutorials/models/Kimi-K2.6.md : 新增 a 950DT products Docker setup example using the v0.23.0-a5 image, includ

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

### MiniMax-M2

#### 2026-08-24

- [PR #14481](https://github.com/vllm-project/vllm-ascend/pull/14481) 已合并
  - 中文：【文档】【杂项】更新 Ascend environment for Qwen3 and MiniMax-M2/M3
  - 原文：[Doc][Misc] Update Ascend environment for Qwen3 and MiniMax-M2/M3
  - 说明：This PR 更新 and cleans up the recommended Ascend environment variables for Qwen3 and MiniMax-M2/M3 models. - Removes redundant or obsolete environment variables (such as OMP NUM THREADS , TASK QUEUE 启用 , VLLM ASCEND BALANCE SCHEDULI

#### 2026-07-20

- [PR #12293](https://github.com/vllm-project/vllm-ascend/pull/12293) 已合并
  - 中文：【Cherry-pick】【releases/v0.24.0rc】【重构】【Patch】Replace MiniMax parser backports (from #11384)
  - 原文：[Cherry-pick][releases/v0.24.0rc][Refactor][Patch] Replace MiniMax parser backports (from #11384)
  - 说明：Cherry-pick of 11384 onto releases/v0.24.0rc . This PR: - removes the stale MiniMax-M2 工具调用 parser and usage-accounting patches - adds patch parser reasoning usage.py as a backport of - preserves completion tokens details.reasoning tok

#### 2026-07-17

- [PR #11384](https://github.com/vllm-project/vllm-ascend/pull/11384) 已合并
  - 中文：【重构】【Patch】Replace MiniMax parser backports
  - 原文：[Refactor][Patch] Replace MiniMax parser backports
  - 说明：Replace stale MiniMax parser backports with the current vLLM parser-engine path for vLLM 0.24. This PR: - deletes patch minimax m2 工具调用 parser.py - deletes patch minimax usage accounting.py - adds patch parser reasoning usage.py as a b

## Gemma

### Gemma4

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

#### 2026-10-14

- [PR #18565](https://github.com/vllm-project/vllm-ascend/pull/18565) 已合并
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

#### 2026-09-21

- [Issue #17041](https://github.com/vllm-project/vllm-ascend/issues/17041) 进行中
  - 中文：【缺陷】: gemma4 系列模型在 910B 上图模式（cudagraph/aclgraph）全部不可用
  - 原文：[Bug]: gemma4 系列模型在 910B 上图模式（cudagraph/aclgraph）全部不可用

#### 2026-09-12

- [PR #16394](https://github.com/vllm-project/vllm-ascend/pull/16394) 进行中
  - 中文：[测试]添加gemma4 mtp验收保护和功能文档
  - 原文：[Test] Add gemma4 mtp acceptance guard and feature docs
  - 说明：Summary Follow-up to 13045 (Gemma4 MTP, merged): - E2E acceptance guard ( tests/e2e/pull request/one card/spec 解码/test gemma4 mtp.py ): drafts from the assistant 检查点 (k=3) over fifteen distinct deterministic coding-completion pro

#### 2026-08-20

- [PR #14670](https://github.com/vllm-project/vllm-ascend/pull/14670) 进行中
  - 中文：[BugFix] [注意]在ACL图形中保留Gemma4 512头MTP解码
  - 原文：[BugFix][Attention] Keep Gemma4 512-head MTP decode in ACL graphs
  - 说明：修复 ACL graph capture/replay for Gemma4's 512-dimensional global 注意力 heads with MTP on Ascend 910B. On the tested baseline, FULL 解码 ONLY fails during graph capture with error 561002 in the TND 注意力 path; ATB paged 注意力 c

## Step

### Step3

#### 2026-10-20

- [PR #19296](https://github.com/vllm-project/vllm-ascend/pull/19296) 进行中
  - 中文：【功能】【MRV2】【Spec Decode】支持 MultiModuleMTPSpeculator for Ascend
  - 原文：[Feature][MRV2][Spec Decode] Support MultiModuleMTPSpeculator for Ascend 
  - 说明：新增 MultiModuleMTPSpeculator 支持 in Ascend for multi KV 缓存 groups mtp, such as step3.7 and step5. followed adapted by me No. step3.7 in v1: input len=65536, output len=4096, bs=64: avg I

#### 2026-09-17

- [PR #16305](https://github.com/vllm-project/vllm-ascend/pull/16305) 已合并
  - 中文：[Ops] [Feature]在Ascend上为Step3.5/3 .7的DP = 1支持序列并行MoE
  - 原文：[Ops][Feature] Support sequence-parallel MoE at DP=1 for Step3.5/3.7 on Ascend
  - 说明：This PR enables 序列-parallel (SP) MoE 支持 at DP=1 for Step3.5/3.7 models on Ascend by patching the parallel 配置 and implementing the SP MoE data flow. Upstream use 序列 parallel moe requires dp 1, so SP is silently di
- [PR #16764](https://github.com/vllm-project/vllm-ascend/pull/16764) 进行中
  - 中文：【文档】【模型】新增 Step3.7 deployment tutorial
  - 原文：[Doc][Model] Add Step3.7 deployment tutorial
  - 说明：新增 Step3.7 deployment tutorial. No, documentation-only 更新. Documentation-only 更新. - vLLM main:

#### 2026-08-13

- [Issue #14205](https://github.com/vllm-project/vllm-ascend/issues/14205) 进行中
  - 中文：【Contribution】【功能】【MRV2】Step3.7 ModelRunnerV2 适配（精度性能与 MRV1 持平）
  - 原文：[Contribution] [Feature][MRV2] Step3.7 ModelRunnerV2 适配（精度性能与 MRV1 持平）
  - 说明：背景 Step3.7（ Step3p7ForConditionalGeneration ）是 Step 系列投机解码模型。Ascend 侧草稿推理逻辑位于 vllm ascend/spec 解码/step3p5.py，并由 vllm ascend/patch/worker/patch step3p5.py 对 vllm-core 打补丁接入。 当前 Step3.7 在 MRV1（Model Runner V1， vllm ascend/worker/model ru

## Bailing

### Bailing

#### 2026-10-14

- [PR #18709](https://github.com/vllm-project/vllm-ascend/pull/18709) 进行中
  - 中文：【功能】【模型】Ling 3.0 (Bailing V3) 支持 on Ascend
  - 原文：[Feature][Model] Add Ling 3.0 (Bailing V3) support on Ascend
  - 说明：新增 Ascend 支持 for Ling 3.0's hybrid MLA/KDA architecture, including MTP and ModelSlim 量化 integration. - Implement the Bailing V3 KDA backend for 预填充, 解码 and 投机 verification, with Ascend-compatible gate handli

## 其他

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

### Llama

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

#### 2026-10-27

- [PR #19878](https://github.com/vllm-project/vllm-ascend/pull/19878) 已合并
  - 中文：【修复】【v0.30.0】【KV Pool】Bound PP/MTP GVA allocations by physical copy extent
  - 原文：[BugFix][v0.30.0][KV Pool] Bound PP/MTP GVA allocations by physical copy extent
  - 说明：Follow-up to 19422 and 19421. Keep the physical KV-layer synchronization and make the GVA object large enough for every physical layer, including MTP at the last PP stage. For a GLM 配置 with 78 target layers, PP partition 42,36 ,
- [PR #19877](https://github.com/vllm-project/vllm-ascend/pull/19877) 已合并
  - 中文：【修复】【KV Pool】Bound PP/MTP GVA allocations by physical copy extent
  - 原文：[BugFix][KV Pool] Bound PP/MTP GVA allocations by physical copy extent
  - 说明：Follow-up to 19422 and 19421. Keep the physical KV-layer synchronization and make the GVA object large enough for every physical layer, including MTP at the last PP stage. For a GLM 配置 with 78 target layers, PP partition 42,36 ,

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
- [Issue #19823](https://github.com/vllm-project/vllm-ascend/issues/19823) 进行中
  - 中文：【缺陷】: finegrained_tp_config mixes two "disabled" conventions (0 = off vs 1 = off); mlp_tensor_parallel_size is checked inconsistently across its own call sites
  - 原文：[Bug]: finegrained_tp_config mixes two "disabled" conventions (0 = off vs 1 = off); mlp_tensor_parallel_size is checked inconsistently across its own call sites
- [PR #19317](https://github.com/vllm-project/vllm-ascend/pull/19317) 已合并
  - 中文：【修复】Correct GBSA static 内核 blacklist name
  - 原文：[BugFix] Correct GBSA static kernel blacklist name
  - 说明：Correct the GBSA static-内核 blacklist entry introduced by 18869 from GenericBlockSparseAttn to GenericBlockSparseAttention . npugraph ex matches blacklist entries against JSON filenames by substring, so the old spelling does not exclude
- [Issue #19810](https://github.com/vllm-project/vllm-ascend/issues/19810) 进行中
  - 中文：【缺陷】: aclnnSparseAttnSharedkvMetadataGetWorkspaceSize takes abnormally long in vLLM-Ascend 0.26
  - 原文：[Bug]: aclnnSparseAttnSharedkvMetadataGetWorkspaceSize takes abnormally long in vLLM-Ascend 0.26
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
- [PR #19695](https://github.com/vllm-project/vllm-ascend/pull/19695) 进行中
  - 中文：【修复】【Engram】对齐 private Host-UVA payloads for correct device reads
  - 原文：[BugFix][Engram] Align private Host-UVA payloads for correct device reads
  - 说明：修复 incorrect device reads from small private Engram HostUvaBuffer allocations observed on A3 with CANN 9.2.0. The current community implementation can publish correct CPU data while the NPU reads different bytes through the returned device
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
- [PR #19460](https://github.com/vllm-project/vllm-ascend/pull/19460) 进行中
  - 中文：【功能】【MRV2】【SpecDecode】entropy verification 支持
  - 原文：[Feature][MRV2][SpecDecode] Add entropy verification support
  - 说明：Port the existing Ascend Entropy Verify 特性 to Model Runner V2. This PR only migrates entropy verification. Ascend Block Verify remains available on Model Runner V1, and the upstream block verification already supported by MRV2 is prese
- [Issue #19455](https://github.com/vllm-project/vllm-ascend/issues/19455) 进行中
  - 中文：【缺陷】: RFork fallback keeps ~18 GiB per device alive (double model init never reclaimed) and can make the engine unable to start
  - 原文：[Bug]: RFork fallback keeps ~18 GiB per device alive (double model init never reclaimed) and can make the engine unable to start

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
- [Issue #18909](https://github.com/vllm-project/vllm-ascend/issues/18909) 进行中
  - 中文：【缺陷】: k3 解码 的maxbatchtokens设置8k，会出现tpot bound
  - 原文：[Bug]: k3 decode 的maxbatchtokens设置8k，会出现tpot  bound
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
- [Issue #18734](https://github.com/vllm-project/vllm-ascend/issues/18734) 进行中
  - 中文：[Bug]: v0.23.0 MTP config override为已经很深的deepseek_mtp配置引发UnboundLocalError
  - 原文：[Bug]: v0.23.0 MTP config override raises UnboundLocalError for an already-deepseek_mtp config
- [PR #18703](https://github.com/vllm-project/vllm-ascend/pull/18703) 已合并
  - 中文：[v0.30.0] [Doc] [Misc]删除华为参考资料并更新文档中的联系方式
  - 原文：[v0.30.0][Doc][Misc] Remove Huawei references and update contact instructions in documentation
  - 说明：This pull request 更新 the documentation and translation files to 移除 specific references to \"Huawei\" (e.g., changing \"Huawei HiDevLab\" to \"HiDevLab\", \"Huawei NPU\" to \"NPU\", \"Huawei OBS\" to \"OBS\"). Additionally, it updat
- [PR #18622](https://github.com/vllm-project/vllm-ascend/pull/18622) 已合并
  - 中文：[Bug Fix]使用PCP修复CPP分析虚拟预填充路由
  - 原文：[BugFix] Fix CPP profiling dummy prefill routing with PCP
  - 说明：CPP startup profiling calls the model runner dummy path with one synthetic request. With PCP 启用, the generic V2 dummy batch is initialized with 解码-only 注意力 state and the PCP dummy fast path bypasses partition batch() . A larg
- [PR #18631](https://github.com/vllm-project/vllm-ascend/pull/18631) 已合并
  - 中文：[BugFix]修复PP MTP令牌验证API兼容性问题
  - 原文：[BugFix] Fix PP MTP token validation API compatibility
  - 说明：The MRV1 pipeline-parallel MTP 调度器 patch still calls StructuredOutputManager.should advance() . That method was 移除 by vllm-project/vllm 48200, which is included in vLLM v0.30.0. With PP and MTP 启用, an ordinary generation req
- [PR #18629](https://github.com/vllm-project/vllm-ascend/pull/18629) 已合并
  - 中文：[BugFix] [v0.30.0]修复PP MTP令牌验证API兼容性问题
  - 原文：[BugFix][v0.30.0] Fix PP MTP token validation API compatibility
  - 说明：The MRV1 pipeline-parallel MTP 调度器 patch still calls StructuredOutputManager.should advance() . That method was 移除 by vllm-project/vllm 48200, which is included in vLLM v0.30.0. With PP and MTP 启用, an ordinary generation req
- [PR #18658](https://github.com/vllm-project/vllm-ascend/pull/18658) 已合并
  - 中文：[BugFix] [SpecDecode] [v0.30.0]恢复独立RNG以进行残留重采样
  - 原文：[BugFix][SpecDecode][v0.30.0] Restore independent RNG for residual resampling
  - 说明：恢复 the resample-only SALT 移除 by 17661. Rejection verification and residual categorical sampling currently use the same seed and position. Conditioning that random value on rejection biases the recovered token distribution. For a o
- [PR #18657](https://github.com/vllm-project/vllm-ascend/pull/18657) 已合并
  - 中文：[BugFix] [SpecDecode]恢复独立RNG以进行残留重采样
  - 原文：[BugFix][SpecDecode] Restore independent RNG for residual resampling
  - 说明：恢复 the resample-only SALT 移除 by 17661. Rejection verification and residual categorical sampling currently use the same seed and position. Conditioning that random value on rejection biases the recovered token distribution. For a o
- [PR #18687](https://github.com/vllm-project/vllm-ascend/pull/18687) 已合并
  - 中文：[Bugfix] [cherrypick] [v0.30.0]在mla_preprocess中将Cube tile遍历顺序与tiling swizzle方向同步
  - 原文：[Bugfix][cherrypick][v0.30.0]Sync Cube tile traversal order with tiling swizzle direction in mla_preprocess
  - 说明：What Cherry-pick of 18646 to releases/v0.30.0 . Why The mla preprocess MM2 matmul (q nope/q rope projection) processes tokens in tiles of 256. When the token count exceeds the tile size (m loop 1), the Cube core selects tile indices accordi

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
  - 中文：[BugFix] [Model]在DeepSeek forward中避免虚假的缓冲区突变防护
  - 原文：[BugFix][Model] Avoid false buffer mutation guard in DeepSeek forward
  - 说明：修复 a false positive in vLLM's CUDA/NPU graph buffer-mutation guard when compiling the patched DeepSeek V2 forward. This prevents affected DeepSeek/GLM-family services from failing during the startup profiling pass with 图模式 启用,
- [PR #18270](https://github.com/vllm-project/vllm-ascend/pull/18270) 已合并
  - 中文：[Bugfix]使用PCP本地令牌预算配置文件MRV2
  - 原文：[Bugfix] Profile MRV2 with PCP-local token budget
  - 说明：MRV2 initial profiling bypasses PCP batch partitioning. With EP and 融合 MC2, the global token budget can exceed the 通信 buffer during startup. In profile run, compute ceil(max num tokens / PCP), use this value for the MC2 reserv
- [PR #18307](https://github.com/vllm-project/vllm-ascend/pull/18307) 已合并
  - 中文：[还原]还原“[BugFix] [Worker] cudagraph捕获后零静态KV缓冲区” (# 17659)
  - 原文：[Revert] Revert "[BugFix][Worker] Zero static KV buffers after cudagraph capture" (#17659)
  - 说明：Revert of PR 17659 (merged onto main ). Original PR: 17659 Original author: @Toneymiller 合并 commit: 672a08eadc41407353818652c7985fb761e9aa0a --- Zero every KV-缓存 / recurrent-state tensor in static forward context right after cudagraph
- [PR #18305](https://github.com/vllm-project/vllm-ascend/pull/18305) 已合并
  - 中文：[还原]还原“[BugFix] [Worker] cudagraph捕获后零静态KV缓冲区(v0.30.0 backport)” (# 18263)
  - 原文：[Revert] Revert "[BugFix][Worker] Zero static KV buffers after cudagraph capture (v0.30.0 backport)" (#18263)
  - 说明：Revert of PR 18263 (merged onto releases/v0.30.0 ). Original PR: 18263 Original author: @Toneymiller 合并 commit: 334d4d70505836f1290404a311cfe2c9529ed06d --- Backport of 17659 to releases/v0.30.0. GLM-5.3-Flash (KDA+SFA hybrid, fp8 C8 KV
- [PR #18112](https://github.com/vllm-project/vllm-ascend/pull/18112) 已合并
  - 中文：【功能】【PCP】支持 修复-K 投机 解码 request sharding
  - 原文：[Feature][PCP] Support fixed-K speculative decode request sharding
  - 说明：启用 PCP 解码 request sharding with 修复-K 投机解码. The target uses PCP sharding while the draft continues to run a replicated global batch. - Expose consistent global token extents, request boundaries and hidden states at
- [PR #18283](https://github.com/vllm-project/vllm-ascend/pull/18283) 已合并
  - 中文：[BugFix] [v0.30.0]从实际稀疏索引中导出GLM-5.3-Flash SMLA计划
  - 原文：[BugFix] [v0.30.0] Derive GLM-5.3-Flash SMLA plans from actual sparse indices
  - 说明：Backport of 18241 to releases/v0.30.0 . GLM-5.3-Flash can reuse 稀疏 selections while positions advance. In the A5 target path, this can leave a predicted ori topk length of 2049 for only 2048 valid indices, even when the query shape is u
- [PR #18241](https://github.com/vllm-project/vllm-ascend/pull/18241) 已合并
  - 中文：[BugFix]从实际稀疏索引中导出GLM-5.3-Flash SMLA计划
  - 原文：[BugFix] Derive GLM-5.3-Flash SMLA plans from actual sparse indices
  - 说明：GLM-5.3-Flash can reuse 稀疏 selections while token positions advance. Position-derived lengths can then claim 2049 valid entries for a row that contains only 2048, or truncate a reused pool tail. The SMLA plan can also use the 索引器's
- [PR #17255](https://github.com/vllm-project/vllm-ascend/pull/17255) 已合并
  - 中文：[Feature] [MoE]改进量化路径的共享专家多流重叠
  - 原文：[Feature][MoE] Improve shared expert multistream overlap for quantized paths
  - 说明：Follow-up to 15352. Refs 15353. The 共享-expert registered-linear-wrapper path previously submitted all wrapper work only after the routed path had been enqueued. For 运行时-quantized methods this delayed Vector/AIV input preparation, an
- [PR #17817](https://github.com/vllm-project/vllm-ascend/pull/17817) 已合并
  - 中文：[功能] [KVPP]通过缓存功能支持投机解码
  - 原文：[Feature][KVPP] Support speculative decoding via cache capabilities
  - 说明：KVPP restricts speculation by method name, although its 缓存 ownership depends on whether the proposer allocates independent draft KV caches. 移除 the KVPP method whitelist and use the existing uses draft KV 缓存() capability for draft
- [PR #18272](https://github.com/vllm-project/vllm-ascend/pull/18272) 已合并
  - 中文：[BugFix] [Model]当超过oproj容量时，将用户指向配方修复
  - 原文：[BugFix][Model] Point users at the recipe fix when oproj capacity is exceeded
  - 说明：Companion to 18126 (against main ), cherry-picked to the releases/v0.30.0 branch where users actually run this code. Improves the ValueError raised in dsa v1.py:: forward o proj when the fine-grained oproj TP static exchange capacity cannot
- [PR #18263](https://github.com/vllm-project/vllm-ascend/pull/18263) 已合并
  - 中文：[BugFix] [Worker] cudagraph捕获后零静态KV缓冲区（ v0.30.0后端口）
  - 原文：[BugFix][Worker] Zero static KV buffers after cudagraph capture (v0.30.0 backport)
  - 说明：Backport of 17659 to releases/v0.30.0. GLM-5.3-Flash (KDA+SFA hybrid, fp8 C8 KV 缓存) collapses into emitting '!' forever on A5 with FULL 解码 ONLY capture. During capture the dummy forward bypasses the block allocator: SFA writes carry
- [PR #17659](https://github.com/vllm-project/vllm-ascend/pull/17659) 已合并
  - 中文：[BugFix] [Worker]捕获cudagraph后零静态KV缓冲区
  - 原文：[BugFix][Worker] Zero static KV buffers after cudagraph capture
  - 说明：Zero every KV-缓存 / recurrent-state tensor in static forward context right after cudagraph capture (v1 NPU model runner). Root cause (pinned down): on GLM-5.3-Flash the KDA (mamba) conv/recurrent state caches share backing storage with th

#### 2026-10-10

- [PR #18195](https://github.com/vllm-project/vllm-ascend/pull/18195) 已合并
  - 中文：[releases/v0.30.0] [Attention] [BugFix]处理空的MLA PCP预充等级
  - 原文：[releases/v0.30.0][Attention][BugFix] Handle empty MLA PCP prefill ranks
  - 说明：Backport 17972 to releases/v0.30.0 . This author-submitted PR replaces the bot-created backport 18189 with the same code patch. PCP can assign zero real 预填充 tokens to a rank while retaining padded KV inputs for collective processing. ML
- [PR #18147](https://github.com/vllm-project/vllm-ascend/pull/18147) 已合并
  - 中文：【特点】[P/D] [v0.30.0]支持Mooncake V2 KV接收失败处理
  - 原文：[Feature][P/D][v0.30.0] Support Mooncake V2 KV receive failure handling
  - 说明：Backport of 18146 to releases/v0.30.0 (cherry-picked without conflicts). 支持 request-level KV receive failure reporting in MooncakeConnectorV2 through vLLM's KVConnectorTransferResults , including hybrid caches with multiple KV groups.
- [PR #18146](https://github.com/vllm-project/vllm-ascend/pull/18146) 已合并
  - 中文：【特点】【P/D】支持Mooncake V2 KV接收失败处理
  - 原文：[Feature][P/D] Support Mooncake V2 KV receive failure handling
  - 说明：支持 request-level KV receive failure reporting in MooncakeConnectorV2 through vLLM's KVConnectorTransferResults , including hybrid caches with multiple KV groups. Drain receive completion and failure together, attribute transfer errors
- [PR #18141](https://github.com/vllm-project/vllm-ascend/pull/18141) 已合并
  - 中文：[BugFix] [P/D] [v0.30.0]在抢占卸载中处理混合缓存视图
  - 原文：[BugFix][P/D][v0.30.0] Handle hybrid cache views in preempt offload
  - 说明：Backport of 18140 to releases/v0.30.0 (cherry-picked without conflicts). 修复 preempt-卸载 registration for hybrid KV caches: retain the largest same-pointer 注意力 view per logical block (including block-size scaling), deduplicate ide
- [PR #18140](https://github.com/vllm-project/vllm-ascend/pull/18140) 已合并
  - 中文：[BugFix] [P/D]在preempt卸载中处理混合缓存视图
  - 原文：[BugFix][P/D] Handle hybrid cache views in preempt offload
  - 说明：修复 preempt-卸载 registration for hybrid KV caches: retain the largest same-pointer 注意力 view per logical block (including block-size scaling), deduplicate identical Mamba views separately from 注意力, and skip empty tensors. Pre
- [PR #18132](https://github.com/vllm-project/vllm-ascend/pull/18132) 已合并
  - 中文：[BugFix] [注意] [v0.30.0]对M3 FP8 KV使用最低64令牌内核
  - 原文：[BugFix][Attention][v0.30.0] Use a 64-token kernel minimum for M3 FP8 KV
  - 说明：Clean backport of 18125 to releases/v0.30.0 , cherry-picked with -x from e112a527e075225b0e8225bd7aa4cfd908bdeecb . The stable patch-id is identical ( 89f9ae25231deee26e176ea575d85a8479d9e201 ); no release-specific code changes were needed.
- [PR #18185](https://github.com/vllm-project/vllm-ascend/pull/18185) 已合并
  - 中文：[注意] [BugFix]在没有TurboQuant的情况下处理DSpark后端
  - 原文：[Attention][BugFix] handle DSpark backends without TurboQuant
  - 说明：cherry-pick of PR Treat a missing TurboQuant transform as disabled when storing DSpark context KV. This preserves the ordinary CP 缓存 write path and avoids AttributeError without changing existing TurboQuant behavior. Does this PR introdu
- [PR #18183](https://github.com/vllm-project/vllm-ascend/pull/18183) 已合并
  - 中文：[BugFix] ：在没有TurboQuant的情况下处理DSpark后端
  - 原文：[BugFix]: handle DSpark backends without TurboQuant
  - 说明：Treat a missing TurboQuant transform as disabled when storing DSpark context KV. This preserves the ordinary CP 缓存 write path and avoids AttributeError without changing existing TurboQuant behavior. Does this PR introduce any user-facing
- [PR #18125](https://github.com/vllm-project/vllm-ascend/pull/18125) 已合并
  - 中文：[BugFix] [注意]对M3 FP8 KV使用最低64令牌内核
  - 原文：[BugFix][Attention] Use a 64-token kernel minimum for M3 FP8 KV
  - 说明：MiniMax M3 with FP8 KV on hardware supporting FP8 注意力 retains BF16 KV in its GQA layers. The Ascend dense 注意力 backend currently advertises only a 128-token 内核 block. Upstream heterogeneous-KV alignment therefore expands the
- [Issue #18202](https://github.com/vllm-project/vllm-ascend/issues/18202) 进行中
  - 中文：[RFC] ：弃用并删除模型运行器v1
  - 原文：[RFC]: Deprecate and remove model runner v1
  - 说明：Motivation. vLLM Model runner v2 has been 启用 by default from vLLM 0.29.0. The V1 code will be 移除 from vLLM in 0.32.0. So we vllm-ascend will do the same thing to keep the project works. Proposed Change. We plan to take 2 steps to
- [PR #17379](https://github.com/vllm-project/vllm-ascend/pull/17379) 已合并
  - 中文：[BugFix] [Spec Decode] ACL图填充的大小DFlash查询缓冲区
  - 原文：[BugFix][Spec Decode] Size DFlash query buffers for ACL graph padding
  - 说明：Fixes 18121 修复 a query-buffer capacity issue in DFlash 投机解码 on the vLLM Ascend V1 model runner. AscendDflashProposer allocates its persistent query buffers using max query tokens = max batch size (1 + num 投机 tokens
- [Issue #18178](https://github.com/vllm-project/vllm-ascend/issues/18178) 进行中
  - 中文：【Bug】EPLB初始化失败， “HIXL EPLB REGISTER MEMORY FAILED with status 103900” when speculative decoding (draft model) + expandable_segments: True on Ascend A3
  - 原文：[Bug] EPLB init fails with "HIXL EPLB register memory failed with status 103900" when speculative decoding (draft model) + expandable_segments:True on Ascend A3
- [PR #18044](https://github.com/vllm-project/vllm-ascend/pull/18044) 已合并
  - 中文：[bugfix]支持MRV2上的编解码器模型状态
  - 原文：[bugfix] support encoder-decoder model state on MRV2
  - 说明：The downstream MRV2 model state initializer overrides the upstream 路由 logic, causing cross-注意力 encoder-decoder models such as Cohere ASR to fall back to the default Ascend model state. 新增 an Ascend encoder-decoder model state th
- [PR #18110](https://github.com/vllm-project/vllm-ascend/pull/18110) 已合并
  - 中文：[BugFix]删除QSFA平铺中的剩余调试日志
  - 原文：[BugFix]Remove leftover debug log in QSFA tiling
  - 说明：What this PR does Removes a leftover 调试 log ( OP LOGE("ccccc", ...) ) in the tiling entry of the custom kv quant 稀疏 flash 注意力 vllm operator. It was accidentally committed and prints on every tiling run. - Deleted the 调试 prin
- [PR #17105](https://github.com/vllm-project/vllm-ascend/pull/17105) 已合并
  - 中文：【性能】【量化】MegaMoe下释放死W8A8 fp32 MoE刻度
  - 原文：[Performance][Quantization] Release dead W8A8 fp32 MoE scales under MegaMoe
  - 说明：【性能】【量化】Title: Release dead W8A8 fp32 MoE scales under MegaMoe --- Part 2 of 2 (量化 side). In AscendW8A8DynamicFusedMoEMethod.process 权重 after 加载 , the use cann megamoe branch 切换 consumers over t
- [PR #18086](https://github.com/vllm-project/vllm-ascend/pull/18086) 已合并
  - 中文：[功能] [工人]允许使用MRV2 PCP进行概率草案采样
  - 原文：[Feature][Worker] Allow probabilistic draft sampling with MRV2 PCP
  - 说明：Ascend MRV2 PCP rejects draft sample method="probabilistic" during 配置 validation, preventing it from reaching the existing draft sampling implementation. 移除 the greedy-only check for MTP, Eagle3 and DSpark. 更新 the PCP con

#### 2026-10-09

- [PR #18126](https://github.com/vllm-project/vllm-ascend/pull/18126) 已合并
  - 中文：[BugFix] [Model]当超过oproj容量时，将用户指向配方修复
  - 原文：[BugFix][Model] Point users at the recipe fix when oproj capacity is exceeded
  - 说明：Improves the ValueError raised in dsa v1.py:: forward o proj when the fine-grained oproj TP static exchange capacity cannot cover the local token count. The old message only echoed two numbers: Real user case: DeepSeek-V4-Flash + PD disaggr
- [PR #18079](https://github.com/vllm-project/vllm-ascend/pull/18079) 已合并
  - 中文：[BugFix] [Ops]将DSA块大小设置为Triton constexpr对象
  - 原文：[BugFix][Ops] Make DSA block size a Triton constexpr object
  - 说明：A type annotation is not 可见 inside @triton.jit. Construct tl.constexpr directly so the 内核 can read the block size. BUILD LOCAL 元数据 BLOCK SIZE in vllm ascend/ops/triton/dsa cp.py was declared as a type annotation: Triton does n
- [PR #18080](https://github.com/vllm-project/vllm-ascend/pull/18080) 已合并
  - 中文：[BugFix] [Ops]将DSA块大小设置为Triton constexpr对象
  - 原文：[BugFix][Ops] Make DSA block size a Triton constexpr object
  - 说明：A type annotation is not 可见 inside @triton.jit. Construct tl.constexpr directly so the 内核 can read the block size. BUILD LOCAL 元数据 BLOCK SIZE in vllm ascend/ops/triton/dsa cp.py was declared as a type annotation: Triton does n
- [Issue #18129](https://github.com/vllm-project/vllm-ascend/issues/18129) 进行中
  - 中文：[错误] ： MRV2同步PP + MTP丢弃-1占位符的真实令牌并崩溃预填充输入内核
  - 原文：[Bug]: MRV2 synchronous PP+MTP drops real token for -1 placeholder and crashes prefill input kernel
  - 说明：With MRV2, synchronous scheduling crashes for this supported-looking combination: An invalid MTP placeholder token -1 is counted as a real 投机 token when the 调度器 builds cached request data. This makes the 调度器 send zero r
- [PR #18038](https://github.com/vllm-project/vllm-ascend/pull/18038) 已合并
  - 中文：[BugFix] [Worker]使用DP和MTP保留分段虚拟查询宽度
  - 原文：[BugFix][Worker] Preserve PIECEWISE dummy query widths with DP and MTP
  - 说明：With MRV2, DP and MTP 启用, an idle rank can fail in the draft model with AssertionError: reusing a DP sync taken over a different batch . PIECEWISE pads the dummy model inputs while keeping the request count unchanged. Redistributing pa
- [PR #18108](https://github.com/vllm-project/vllm-ascend/pull/18108) 已合并
  - 中文：[v0.30.0] [BugFix] [Worker]使用DP和MTP保留分段虚拟查询宽度
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
  - 中文：[错误] ： DFlash/DFlash2查询缓冲区对于V1上的ACLGraph填充太小
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
  - 中文：[Cherry-pick] [releases/v0.30.0] [CI]恢复C8配置（来自# 18084 ）
  - 原文：[Cherry-pick][releases/v0.30.0][CI] Revert the C8 configuration (from #18084)
  - 说明：Cherry-pick of PR 18084 onto releases/v0.30.0 . Original PR: 18084 Original author: @kunpengW-code --- In PR the startup 配置 for C8 was 更新. Some 测试用例 still referenced the old 配置, so revert those 测试用例 cha
- [PR #18096](https://github.com/vllm-project/vllm-ascend/pull/18096) 已合并
  - 中文：[BugFix] [CI]跳过空的A3和A5夜间矩阵
  - 原文：[BugFix][CI] Skip empty A3 and A5 nightly matrices
  - 说明：The 夜间 workflows can fail while their selected test jobs succeed. The matrix resolver emits [] when a test 配置 section is absent, and GitHub Actions rejects an empty test 配置 matrix before creating a job. - In A3, guard si
- [PR #18094](https://github.com/vllm-project/vllm-ascend/pull/18094) 已合并
  - 中文：[v0.30.0] [性能]将KV保存围栏缩小到具有释放块的请求
  - 原文：[v0.30.0][Performance]narrow the KV save fence to requests with released blocks
  - 说明：1.基线和结论-基线： AscendStoreConnector中的当前保存围栏。handle preemptions ()为上一个save ()调用KVPoolWorker.wait ，这会阻止计划程序步骤，直到整个上一个保存批次耗尽— i.
- [PR #17555](https://github.com/vllm-project/vllm-ascend/pull/17555) 已合并
  - 中文：[性能]将KV保存围栏缩小到具有释放块的请求
  - 原文：[Performance]narrow the KV save fence to requests with released blocks
  - 说明：1.基线和结论-基线： AscendStoreConnector中的当前保存围栏。handle preemptions ()为上一个save ()调用KVPoolWorker.wait ，这会阻止计划程序步骤，直到整个上一个保存批次耗尽— i.
- [PR #17958](https://github.com/vllm-project/vllm-ascend/pull/17958) 已合并
  - 中文：[功能] [PCP]支持分片解码请求的图形执行
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
- [PR #17683](https://github.com/vllm-project/vllm-ascend/pull/17683) 已合并
  - 中文：【修复】【MRV2】对齐 hybrid DFlash K/V pages before padding
  - 原文：[BugFix][MRV2] Align hybrid DFlash K/V pages before padding
  - 说明：Full and sliding 注意力 can have different unpadded page sizes even when the 注意力/Mamba pool pads them to the same allocation size. Ascend packs contiguous K/V segments, so this mismatch lets a draft write to one 调度器 block cor
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
- [PR #17380](https://github.com/vllm-project/vllm-ascend/pull/17380) 已合并
  - 中文：【功能】【CPP】支持 async scheduling on Model Runner V2
  - 原文：[Feature][CPP] Support async scheduling on Model Runner V2
  - 说明：This PR adds asynchronous scheduling 支持 for Chunked Pipeline Parallelism (CPP) on Model Runner V2. - Introduces ProfilingChunkAsyncScheduler , preserving CPP chunk scheduling while integrating vLLM async placeholder accounting and the

#### 2026-09-27

- [PR #16848](https://github.com/vllm-project/vllm-ascend/pull/16848) 已合并
  - 中文：[功能] [MRV2]所有配置的默认模型运行器V2
  - 原文：[Feature][MRV2] Default Model Runner V2 for all configurations
  - 说明：This PR makes Model Runner V2 the default on Ascend when VLLM USE V2 MODEL RUNNER is unset. The old architecture, 特性, platform, and Triton whitelist is replaced by a blacklist in vllm ascend/mrv2 utils.py . When the env var is unset, a

#### 2026-09-26

- [PR #17392](https://github.com/vllm-project/vllm-ascend/pull/17392) 已合并
  - 中文：【功能】支持 using 融合 operators to 改进 性能 of layerwise 稀疏 卸载
  - 原文：[Feature]Support using fused operators to improve performance of layerwise sparse offload
  - 说明：Relies on PR 16640 for 内核. This PR introduces 2 new 内核 融合 lightning 索引器 manage and 融合 scatter copy 稀疏 flash 注意力 to accelerate layerwise 稀疏 卸载 in 解码 phase. Compared to the original workflow: Now we

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
- [PR #17181](https://github.com/vllm-project/vllm-ascend/pull/17181) 已合并
  - 中文：[Refactor] [Misc] [xlite]弃用xlite适配器中的重复绳缓存计算，并使用vllm的上游缓存。
  - 原文：[Refactor][Misc][xlite] Deprecate duplicated rope cache computation in the xlite adapter and use the upstream cache from vllm.
  - 说明：This PR 移除 the RoPE cos/sin 缓存 computation in xlite and re-uses the upstream 缓存 calculated by vLLM . This refactor aims to 减少 duplication of code. No, no interface change involved
- [PR #16457](https://github.com/vllm-project/vllm-ascend/pull/16457) 已合并
  - 中文：[BugFix]在310P上以图模式修复lora并打开MRV2 lora
  - 原文：[BugFix] fix lora in graph-mode on 310P and open MRV2 lora
  - 说明：When running model with lora on 310P and using graph-mode, error occurs that a torch operator "torch.repeat interleave" in sgmv need stream synchronize but graph-mode not 支持. This PR will check device type and 图模式 and then use b
- [PR #17248](https://github.com/vllm-project/vllm-ascend/pull/17248) 已合并
  - 中文：【修复】【Engram】Allow same-node external DP launches
  - 原文：[Bugfix][Engram] Allow same-node external DP launches
  - 说明：修复 the external-DP startup 回退 from 17134. With --data-parallel-rank , vLLM sets data parallel size local=1 even when all DP ranks share a node. The Engram check incorrectly rejects TP4/DP4 预填充 and TP2/DP8 解码 deployments. Al

#### 2026-09-22

- [PR #17243](https://github.com/vllm-project/vllm-ascend/pull/17243) 已合并
  - 中文：【修复】【Engram】Guard 配置 patch when upstream Engram is unavailable
  - 原文：[Bugfix][Engram] Guard config patch when upstream Engram is unavailable
  - 说明：修复 the 夜间 startup 回退 introduced by 17134. vLLM builds without vllm.配置.engram fail during platform patch import, including non-Engram models. 恢复 the module availability guard around the Engram patch. Reported failure:
- [PR #17153](https://github.com/vllm-project/vllm-ascend/pull/17153) 已合并
  - 中文：【性能】【DSA】缓存 group-invariant 元数据 in build_req_metadata
  - 原文：[Performance][DSA]Cache group-invariant metadata in build_req_metadata
  - 说明：<!-- BEFORE SUBMITTING, PLEASE READ -- <!-- - Please clarify what changes you are proposing. The purpose of this section is to outline the changes and how this PR fixes the issue. If possible, please consi
- [PR #17134](https://github.com/vllm-project/vllm-ascend/pull/17134) 已合并
  - 中文：【功能】【Engram】Share host head shards across local DP replicas
  - 原文：[Feature][Engram] Share host head shards across local DP replicas
  - 说明：Follow up on 16925 with DP-共享 Engram host storage. Replace CPU owner sorting and variable all-to-all query 路由 with uniform head shards. With sharing 启用, local DP replicas at the same TP position map one physical host shard, qu

#### 2026-09-21

- [PR #16449](https://github.com/vllm-project/vllm-ascend/pull/16449) 已合并
  - 中文：[BugFix] [Hybrid Mamba]恢复PD和kv_both池的混合MTP前缀缓存
  - 原文：[BugFix][Hybrid Mamba] Restore hybrid MTP prefix caching for PD and kv_both pooling
  - 说明：Hybrid FullAttention + Mamba models can lose reusable 前缀-缓存 pages when MTP/EAGLE is on. On a pure PD 预填充 producer, EAGLE drops a verified prompt block and the 调度器 backs off one whole Mamba alignment page; with a 1536-token
- [PR #16885](https://github.com/vllm-project/vllm-ascend/pull/16885) 已合并
  - 中文：【功能】【MRV2】新增Ascend后端超级内核优化支持
  - 原文：[Feature][MRV2] Add Super Kernel optimization support for Ascend backend
  - 说明：Super 内核 支持 has already been introduced in MRV( This PR adds the necessary adaptations for MRV2. yes，the new 配置 of npugraph ex is as follow: vLLM main: - vLLM main:
- [PR #16161](https://github.com/vllm-project/vllm-ascend/pull/16161) 已合并
  - 中文：【修复】【Sampling】Validate stop and allowed token ids
  - 原文：[BugFix][Sampling] Validate stop and allowed token ids
  - 说明：Backport PR 15339 to releases/v0.27.1rc . Validate client-supplied stop token ids and allowed token ids against the model vocabulary before device-side logits indexing, preventing out-of-bounds failures on Ascend. Invalid token ids are reje

#### 2026-09-20

- [PR #16669](https://github.com/vllm-project/vllm-ascend/pull/16669) 已合并
  - 中文：【功能】【xlite】支持 投机解码 methods with a sequential causal chain (MTP, etc.) in xlite backend
  - 原文：[Feature][xlite] Support speculative decoding methods with a sequential causal chain (MTP, etc.) in xlite backend
  - 说明：Enables MTP (and other 投机解码 methods with a sequential causal chain ) on the xlite backend. Previously the xlite docking only handled standard 解码; enabling a 投机 配置 under xlite graph 配置 was rejected at sta

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

- [PR #16539](https://github.com/vllm-project/vllm-ascend/pull/16539) 已合并
  - 中文：【v0.26.0rc】【修复】Validate stop and allowed token ids
  - 原文：[v0.26.0rc][BugFix] Validate stop and allowed token ids
  - 说明：Backport of 15339 (main) and 16161 ( releases/v0.27.1rc ) to releases/v0.26.0rc . Validate client-supplied stop token ids and allowed token ids against the model vocabulary before device-side logits indexing, so an out-of-vocab id can no lo
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

- [PR #16714](https://github.com/vllm-project/vllm-ascend/pull/16714) 已合并
  - 中文：【v0.26.0rc2】【修复】Validate stop and allowed token ids
  - 原文：[v0.26.0rc2][bugfix] Validate stop and allowed token ids
  - 说明：Cherry-pick of 16539 into rfc/0.26.0rc1-bugfix for the v0.26.0rc2 release. Validate client-supplied stop token ids and allowed token ids against the model vocabulary before device-side logits indexing, so an out-of-vocab id can no longer tr
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
- [PR #16109](https://github.com/vllm-project/vllm-ascend/pull/16109) 已合并
  - 中文：【修复】【P/D】D-node first token falling back to eager
  - 原文：[Bugfix][P/D] Fix D-node first token falling back to eager
  - 说明：On a PD-disaggregated 解码 node, the first-token recompute request always falls back to eager execution instead of replaying the full cudagraph, adding ~50ms to TTFT. This PR removes the scheduled running reqs check when deciding whether

#### 2026-09-14

- [PR #15098](https://github.com/vllm-project/vllm-ascend/pull/15098) 已合并
  - 中文：【功能】【MRV2】DSpark confidence-scheduled verification
  - 原文：[Feature][MRV2]DSpark confidence-scheduled verification
  - 说明：This pr followed Adaptively sizes the DSpark draft-verification budget from per-request confidence instead of always verifying every drafted token. Co-authored-by: slippersss, StanislavII N/A p
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

- [PR #15956](https://github.com/vllm-project/vllm-ascend/pull/15956) 已合并
  - 中文：【算子】【功能】支持 Ascend 950 and upgrade batch invariant ops to 2.0.0
  - 原文：[Ops][Feature] Support Ascend 950 and upgrade batch invariant ops to 2.0.0
  - 说明：ref to Upgrade the batch invariance operator run package and PyTorch extension archive to 2.0.0. Map ascend950 variants to the 950 package and 启用 operator installation during both Ubuntu and openEuler A5 image builds. 补充文档 Ascend 95
- [PR #16051](https://github.com/vllm-project/vllm-ascend/pull/16051) 已合并
  - 中文：【重构】【量化】移除 packed_modules_mapping in modelslim quant
  - 原文：[Refactor][Quantization] Remove packed_modules_mapping in modelslim quant
  - 说明：- Part of Purpose 改进 maintainability. The old implementation hardcoded a full packed modules model mapping for 30+ models on the vllm-ascend side, duplicating vLLM upstream model definitions. Every new model 必填 double-sided synci

#### 2026-09-09

- [PR #15884](https://github.com/vllm-project/vllm-ascend/pull/15884) 已合并
  - 中文：【性能】【LoRA】改进 LoRA 性能 on A2 & A3
  - 原文：[Performance][LoRA] Improve LoRA performance on A2 & A3
  - 说明：What this PR does This PR optimizes dense LoRA linear execution on Ascend A2 and A3 for single-LoRA-slot 服务: - max loras == 1 - fully sharded loras == false - LoRA rank in {8, 16, 32, 64} - BF16 权重 and activations for the Triton p
- [PR #15993](https://github.com/vllm-project/vllm-ascend/pull/15993) 已合并
  - 中文：【功能】kv pool and pd disaggregation supoort qos
  - 原文：[Feature]kv pool and pd disaggregation supoort qos
  - 说明：In scenarios with high traffic congestion, in order to 避免 affecting high-priority operations such as operator distribution and aggregate 通信, KV pool needs to 支持 configuring QoS to lower its transfer priority. This PR adds

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

#### 2026-09-04

- [PR #13773](https://github.com/vllm-project/vllm-ascend/pull/13773) 已合并
  - 中文：【重构】【算子】Refactor MoE mlp and 量化 methods
  - 原文：[Refactor][Ops] Refactor MoE mlp and quantization methods
  - 说明：Come from 13318 and 13220 Right now, moe mlp has too many branches about different 量化 method and different activations. In this PR, we 拆分 moe mlp's methods into differnet 量化 method. Does this PR introduce any user-fac
- [PR #15074](https://github.com/vllm-project/vllm-ascend/pull/15074) 已合并
  - 中文：【功能】【MRV1】【v0.26.0】Super 内核 优化 支持 for Ascend backend
  - 原文：[Feature][MRV1][v0.26.0] Add Super Kernel optimization support for Ascend backend
  - 说明：This is a part of 1. Refactor the npugraph ex 配置，modified the default 配置 of the super 内核, new default value of super 内核 is false. 2. 支持 online-infer with super 内核. 3. Super 内核 优化 follows 启用

#### 2026-09-03

- [PR #15469](https://github.com/vllm-project/vllm-ascend/pull/15469) 已合并
  - 中文：【功能】kv pool supports Qos control
  - 原文：[Feature]kv pool supports Qos control
  - 说明：RFC In scenarios with high traffic congestion, in order to 避免 affecting high-priority operations such as operator distribution and aggregate 通信, kv pool needs to 支持 configuring QoS to lower its priority. Does this PR intr

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
- [PR #12440](https://github.com/vllm-project/vllm-ascend/pull/12440) 已合并
  - 中文：【修复】【模型】移除 obsolete Hunyuan tokenizer compatibility patch
  - 原文：[BugFix][Model] Remove obsolete Hunyuan tokenizer compatibility patch
  - 说明：切换 the HunyuanOCR CI source from the stale ModelScope snapshot to vllm-ascend/HunyuanOCR , a mirror pinned to Hugging Face commit 449e7d471a8a1ef5bd5d652e4881183d7252cbc7 . The aligned artifacts expose the named Hunyuan image-token sche

#### 2026-08-11

- [PR #13604](https://github.com/vllm-project/vllm-ascend/pull/13604) 已合并
  - 中文：【修复】【v0.26.0rc】Report GLM reasoning token usage
  - 原文：[BugFix][v0.26.0rc] Report GLM reasoning token usage
  - 说明：This is the v0.26.0rc follow-up to 13079 for 13070. GLM chat templates place the opening <think marker in the prompt. The vLLM v0.26.0 parser engine counts explicit <think ...</think spans correctly, but starts generated-token counting at d

#### 2026-08-09

- [PR #13865](https://github.com/vllm-project/vllm-ascend/pull/13865) 已合并
  - 中文：【v0.23.0】【修复】【Worker】Preserve async accepted-token snapshot
  - 原文：[v0.23.0][BugFix][Worker] Preserve async accepted-token snapshot
  - 说明：Fixes 13863. Release-branch counterpart of 13864. Async scheduling can condense and reuse InputBatch rows before the next model iteration remaps accepted-token counts through prev positions . Because the previous counts are currently stored

#### 2026-08-06

- [PR #13518](https://github.com/vllm-project/vllm-ascend/pull/13518) 已合并
  - 中文：【修复】【v0.23.0】【P/D】Prevent premature SWA KV reuse under async scheduling
  - 原文：[BugFix][v0.23.0][P/D] Prevent premature SWA KV reuse under async scheduling
  - 说明：Fixes 13501. vLLM v0.23 advances request.num computed tokens when a batch is scheduled. Under async scheduling, this optimistic value can include tokens from device steps whose outputs have not been processed yet. SWA and chunked-local prun
- [PR #13684](https://github.com/vllm-project/vllm-ascend/pull/13684) 已合并
  - 中文：[BugFix]修复了在启用DeepSeek Overlay C8和MTP的情况下加载大量权限集时发生的错误。
  - 原文：[BugFix] Fixed an error that occurred when loading heavy permission sets with DeepSeek Overlay C8 and MTP enabled.
  - 说明：Deepseek-MTP模型的加载权重方法无法应用缓存缩放映射器。因此，检查点权重名称（例如， model.layers.61.self attn.fa k.offset ） -在通过将规范层名称重写为model.layers.61后。

#### 2026-08-05

- [PR #13460](https://github.com/vllm-project/vllm-ascend/pull/13460) 已合并
  - 中文：【修复】【releases/v0.25.1rc】fiaV2 contiguous err in GQA
  - 原文：[BugFix][releases/v0.25.1rc] fix fiaV2 contiguous err in GQA
  - 说明：When CANN is 更新 to 9.1.0, the 融合 infer 注意力 operator 新增 a new constraint that key and value should be contiguous when input into this FIAV2 operator. This PR makes the implementation. Does this PR introduce any user-facing c
- [PR #13459](https://github.com/vllm-project/vllm-ascend/pull/13459) 已合并
  - 中文：【修复】【releases/v0.24.0】fiaV2 contiguous err in GQA
  - 原文：[BugFix][releases/v0.24.0] fix fiaV2 contiguous err in GQA
  - 说明：When CANN is 更新 to 9.1.0, the 融合 infer 注意力 operator 新增 a new constraint that key and value should be contiguous when input into this FIAV2 operator. This PR makes the implementation. Does this PR introduce any user-facing c

#### 2026-07-29

- [PR #12981](https://github.com/vllm-project/vllm-ascend/pull/12981) 已合并
  - 中文：【功能】【MRV2】GQA C8 modelrunnerv2 adaptation
  - 原文：[Feature][MRV2] GQA C8 modelrunnerv2 adaptation
  - 说明：此PR修复了modelrunnerv1和modelrunnerv2中由图模式编译期间属性状态值不一致引起的错误。no - vLLM version: v0.25.1 - vLLM main:

#### 2026-07-21

- [PR #12294](https://github.com/vllm-project/vllm-ascend/pull/12294) 已合并
  - 中文：【Cherry-pick】【releases/v0.24.0rc】【重构】【Patch】移除 obsolete parser patches (from #11453)
  - 原文：[Cherry-pick][releases/v0.24.0rc][Refactor][Patch] Remove obsolete parser patches (from #11453)
  - 说明：Cherry-pick of 11453 onto releases/v0.24.0rc . This PR removes these compatibility patches, their registrations, patch documentation, and dedicated unit tests: - patch glm47 工具调用 parser.py - patch glm 工具调用 streaming.py - patch too

#### 2026-07-14

- [PR #11887](https://github.com/vllm-project/vllm-ascend/pull/11887) 已合并
  - 中文：【v0.23.0】【修复】【PD】Carry explicit total KV heads in Mooncake transfer groups
  - 原文：[v0.23.0][BugFix][PD] Carry explicit total KV heads in Mooncake transfer groups
  - 说明：Backport of 11886 to releases/v0.23.0 . num kv heads in a serialized KV 缓存 spec describes the rank-local 缓存 layout. It cannot reliably recover the model-level head count with local heads TP : heads may be replicated when TP exceeds th

#### 2026-07-13

- [PR #11886](https://github.com/vllm-project/vllm-ascend/pull/11886) 已合并
  - 中文：【修复】【PD】Carry explicit total KV heads in Mooncake transfer groups
  - 原文：[BugFix][PD] Carry explicit total KV heads in Mooncake transfer groups
  - 说明：num kv heads in a serialized KV 缓存 spec describes the rank-local 缓存 layout. It cannot reliably recover the model-level head count with local heads TP : heads may be replicated when TP exceeds the global KV-head count, and a speculativ

#### 2026-07-10

- [PR #11635](https://github.com/vllm-project/vllm-ascend/pull/11635) 已合并
  - 中文：【修复】【v0.23.0】Guard mixed structured output backends
  - 原文：[BugFix][v0.23.0] Guard mixed structured output backends
  - 说明：Backport 11589 to releases/v0.23.0 . This keeps the vLLM-Ascend patch behavior aligned with main, with the release-specific wrapper signature 必填 by the vLLM commit pinned by this branch. Matched vLLM: The matched vLLM commit comes fro
- [PR #11589](https://github.com/vllm-project/vllm-ascend/pull/11589) 已合并
  - 中文：【修复】Guard mixed structured output backends
  - 原文：[BugFix] Guard mixed structured output backends
  - 说明：Fixes 11588. This PR adds a vllm-ascend guard for V1 structured outputs when backend=auto resolves different requests to different backends in the same engine lifetime. V1 structured outputs use one engine-level backend manager. In the repo

#### 2026-07-08

- [PR #11505](https://github.com/vllm-project/vllm-ascend/pull/11505) 已合并
  - 中文：【修复】【v0.23.0】避免 partial MiniMax parameter arguments
  - 原文：[BugFix][v0.23.0] Avoid partial MiniMax parameter arguments
  - 说明：Fixes 10758. Backports the MiniMax streaming fixes from 11384 to releases/v0.23.0 . The main-branch 11384 can 移除 the stale local MiniMax parser patch because main has moved to the newer vLLM parser-engine MiniMax path. The releases/v0.2

#### 2026-06-29

- [PR #11051](https://github.com/vllm-project/vllm-ascend/pull/11051) 已合并
  - 中文：【修复】【0.22.1】Scope MiniMax usage accounting patch
  - 原文：[BugFix][0.22.1] Scope MiniMax usage accounting patch
  - 说明：Backport/release PR paired with 11050 for releases/v0.22.1rc . This PR narrows the MiniMax reasoning-token usage-accounting backport so it fixes vllm-project/vllm 37988 without 路由 other models through the MiniMax request path. Changes:
- [PR #11050](https://github.com/vllm-project/vllm-ascend/pull/11050) 已合并
  - 中文：【修复】【Platform】Scope MiniMax usage accounting patch
  - 原文：[BugFix][Platform] Scope MiniMax usage accounting patch
  - 说明：This PR narrows the MiniMax reasoning-token usage-accounting backport so it fixes vllm-project/vllm 37988 without 路由 other models through the MiniMax request path. Changes: - move the chat usage accounting backport into patch minimax u
