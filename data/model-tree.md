# vLLM-Ascend 模型版本树

更新时间：2026-10-25T23:00:06.495Z

版本按日期由近到远排列。同一条说明若点名多个模型，会同时出现在这些模型下。

- 英文原文：https://raw.githubusercontent.com/vllm-project/vllm-ascend/main/docs/source/user_guide/release_notes.md
- 中文文档：https://docs.vllm.ai/projects/ascend/zh-cn/latest/user_guide/release_notes.html 、 https://docs.vllm.ai/projects/ascend/zh-cn/v0.23.0/user_guide/release_notes.html

## DeepSeek

### DeepSeek V4 Flash

#### v0.30.0rc1 · 2026.10.11（中文）

##### 文档

- 新增 DeepSeek V4.1 Flash A3 PD 部署指南，并记录了 DSV4-Flash/Pro 和 GLM-5.2 的 W4A4C8 量化方案。 [#17099](https://github.com/vllm-project/vllm-ascend/issues/17099) [#17226](https://github.com/vllm-project/vllm-ascend/issues/17226)

#### v0.26.0rc1 · 2026.09.03（中文）

这是vLLM Ascend v0.26.0的首个候选版本，与上游vLLM v0.26.0保持一致。此版本为模型受限版本，完全验证的模型包括Kimi K3、GLM‑5.2、DeepSeek V4 Flash 0731和DeepSeek V4 Pro 0813。其他模型的可用性不保证。完整测试报告请参见： v0.26.0rc1测试结论 。请按照 官方文档 开始使用。

##### 亮点

- GLM-5.2 / DeepSeek V4 Flash 0731 / DeepSeek V4 Pro 0813精度和性能 ：解决了GLM-5.2 DSpark接受率回退和DeepSeek V4 Flash-0731 / Pro-0813精度问题（推理努力对齐、路由SwiGLU限制和前端行为），并跨层重用DSV4压缩器元数据以提升性能。 [#12262](https://github.com/vllm-project/vllm-ascend/issues/12262) [#13531](https://github.com/vllm-project/vllm-ascend/issues/13531) [#13993](https://github.com/vllm-project/vllm-ascend/issues/13993) [#14074](https://github.com/vllm-project/vllm-ascend/issues/14074) [#14397](https://github.com/vllm-project/vllm-ascend/issues/14397) [#14624](https://github.com/vllm-project/vllm-ascend/issues/14624) [#14994](https://github.com/vllm-project/vllm-ascend/issues/14994)

##### 已知问题

- 启用池化时，DeepSeek-V4-Flash在128K输入/1K输出工作负载下可能出现性能回退，尤其是单前缀请求场景。 [#15649](https://github.com/vllm-project/vllm-ascend/issues/15649)
- KV池化可能导致某些长上下文工作负载出现轻微单前缀性能回退，包括DeepSeek-V4-Flash 128K-1K和Qwen3-32B A2 PD混合场景。调查仍在进行中。 [#15649](https://github.com/vllm-project/vllm-ascend/issues/15649) [#15295](https://github.com/vllm-project/vllm-ascend/issues/15295) [#12234](https://github.com/vllm-project/vllm-ascend/issues/12234)

#### v0.23.0 · 2026.08.16（中文）

##### 已知问题

- DeepSeek V4 Flash 和 GLM-5.1 SWE 基准测试结果可能因间歇性评估失败而有所差异，包括容器崩溃、超时、依赖下载失败和代理非确定性。 [#14326](https://github.com/vllm-project/vllm-ascend/issues/14326)

#### v0.23.0rc1 · 2026.07.20（中文）

##### 稳定性与错误修复

- 通过保留路由权重精度，修复了DeepSeek V4 Flash W4A8-MXFP4在Ascend 950上的all-gather EP推理问题。 [#11498](https://github.com/vllm-project/vllm-ascend/issues/11498) [#11663](https://github.com/vllm-project/vllm-ascend/issues/11663) [#11718](https://github.com/vllm-project/vllm-ascend/issues/11718)

##### 已知问题

- 在报告的DeepSeek V4 Flash W8A8 MTP P/D分离部署中，第二轮aisbench可能导致来自另一卡的worker进程出现在NPU设备上。 [#12338](https://github.com/vllm-project/vllm-ascend/issues/12338)
- 多级池化仍是实验性功能，仍存在已知问题，包括使用 Layerwise 掩码时 DeepSeek-V4-Flash 启动失败，以及某些 Mooncake SSD 场景下的服务挂起。 [#10964](https://github.com/vllm-project/vllm-ascend/issues/10964)

#### v0.22.1rc1 · 2026.06.30（中文）

##### 已知问题

- 多级池化仍是一个实验性功能，并且仍然存在已知问题，包括 DeepSeek-V4-Flash 使用 Layerwise 掩码时启动失败，以及在某些 Mooncake SSD 场景下服务挂起。 [#10964](https://github.com/vllm-project/vllm-ascend/issues/10964)

### DeepSeek V4 Pro

#### v0.26.0rc1 · 2026.09.03（中文）

这是vLLM Ascend v0.26.0的首个候选版本，与上游vLLM v0.26.0保持一致。此版本为模型受限版本，完全验证的模型包括Kimi K3、GLM‑5.2、DeepSeek V4 Flash 0731和DeepSeek V4 Pro 0813。其他模型的可用性不保证。完整测试报告请参见： v0.26.0rc1测试结论 。请按照 官方文档 开始使用。

##### 亮点

- GLM-5.2 / DeepSeek V4 Flash 0731 / DeepSeek V4 Pro 0813精度和性能 ：解决了GLM-5.2 DSpark接受率回退和DeepSeek V4 Flash-0731 / Pro-0813精度问题（推理努力对齐、路由SwiGLU限制和前端行为），并跨层重用DSV4压缩器元数据以提升性能。 [#12262](https://github.com/vllm-project/vllm-ascend/issues/12262) [#13531](https://github.com/vllm-project/vllm-ascend/issues/13531) [#13993](https://github.com/vllm-project/vllm-ascend/issues/13993) [#14074](https://github.com/vllm-project/vllm-ascend/issues/14074) [#14397](https://github.com/vllm-project/vllm-ascend/issues/14397) [#14624](https://github.com/vllm-project/vllm-ascend/issues/14624) [#14994](https://github.com/vllm-project/vllm-ascend/issues/14994)

#### v0.23.0 · 2026.08.16（中文）

##### 已知问题

- DeepSeek V4 Pro 有一个关于内存使用持续增长的长期稳定性报告。 [#12345](https://github.com/vllm-project/vllm-ascend/issues/12345)

#### v0.23.0rc1 · 2026.07.20（中文）

##### 已知问题

- A3和Ascend 950产品上的DeepSeek V4 Pro在P/D分离和共置部署中均可能显示持续增加的内存使用，最终导致OOM或服务不稳定。 [#12345](https://github.com/vllm-project/vllm-ascend/issues/12345)

### DeepSeek V4.1

#### v0.30.0rc1 · 2026.10.11（中文）

This is vLLM Ascend v0.30.0rc1, a model-focused release built on the v0.29 release line and aligned with upstream vLLM v0.30.0 via the main2main pipeline. This release focuses on four flagship models: DeepSeek V4.1 , GLM-5.3 , GLM-5.3-Flash , and Qwen3.8-27B , and hardens the shared execution stacks they rely on (Model Runner V2, PCP/DCP parallelism, KV Cache Pool, and speculative decoding). Model or hardware combinations outside the scope declared below are not part of the release claims. Please follow the official documentation to get started.

##### 亮点

- DeepSeek V4.1 ：在 Model Runner V2 上新增 DeepSeek V4.1 支持，采用 TurboQuant 4-bit 潜在 KV cache（包括 V1 runner 中的 packed KV cache），启用 torch.compile，并通过原地 rotary embedding、复用过滤后的 RoPE 查找以及移除冗余的 DSV4.1 indexer/SP 拷贝来加速启动；修复了 ModelSlim 量化的 DSV4 权重布局，并为 V4.1 新增 AscendStore 准备，同时使用 DSL 打包了注意力算子（QLI/QSLI/MQSMLA）。 [#17927](https://github.com/vllm-project/vllm-ascend/issues/17927) [#16899](https://github.com/vllm-project/vllm-ascend/issues/16899) [#17726](https://github.com/vllm-project/vllm-ascend/issues/17726) [#17676](https://github.com/vllm-project/vllm-ascend/issues/17676) [#18026](https://github.com/vllm-project/vllm-ascend/issues/18026) [#18081](https://github.com/vllm-project/vllm-ascend/issues/18081) [#16548](https://github.com/vllm-project/vllm-ascend/issues/16548) [#16978](https://github.com/vllm-project/vllm-ascend/issues/16978) [#17067](https://github.com/vllm-project/vllm-ascend/issues/17067) [#17165](https://github.com/vllm-project/vllm-ascend/issues/17165) [#17483](https://github.com/vllm-project/vllm-ascend/issues/17483) [#16973](https://github.com/vllm-project/vllm-ascend/issues/16973)

##### 功能特性

- 在 Model Runner V2 上新增 DeepSeek V4.1 支持。 [#16899](https://github.com/vllm-project/vllm-ascend/issues/16899)
- 新增 DeepSeek V4.1 PCP 支持。 [#17992](https://github.com/vllm-project/vllm-ascend/issues/17992)

##### 性能

- 为 DeepSeek V4.1 启用 torch.compile。 [#18081](https://github.com/vllm-project/vllm-ascend/issues/18081)

##### 文档

- 新增 DeepSeek V4.1 Flash A3 PD 部署指南，并记录了 DSV4-Flash/Pro 和 GLM-5.2 的 W4A4C8 量化方案。 [#17099](https://github.com/vllm-project/vllm-ascend/issues/17099) [#17226](https://github.com/vllm-project/vllm-ascend/issues/17226)

### DeepSeek V4

#### v0.30.0rc1 · 2026.10.11（中文）

##### 亮点

- DeepSeek V4.1 ：在 Model Runner V2 上新增 DeepSeek V4.1 支持，采用 TurboQuant 4-bit 潜在 KV cache（包括 V1 runner 中的 packed KV cache），启用 torch.compile，并通过原地 rotary embedding、复用过滤后的 RoPE 查找以及移除冗余的 DSV4.1 indexer/SP 拷贝来加速启动；修复了 ModelSlim 量化的 DSV4 权重布局，并为 V4.1 新增 AscendStore 准备，同时使用 DSL 打包了注意力算子（QLI/QSLI/MQSMLA）。 [#17927](https://github.com/vllm-project/vllm-ascend/issues/17927) [#16899](https://github.com/vllm-project/vllm-ascend/issues/16899) [#17726](https://github.com/vllm-project/vllm-ascend/issues/17726) [#17676](https://github.com/vllm-project/vllm-ascend/issues/17676) [#18026](https://github.com/vllm-project/vllm-ascend/issues/18026) [#18081](https://github.com/vllm-project/vllm-ascend/issues/18081) [#16548](https://github.com/vllm-project/vllm-ascend/issues/16548) [#16978](https://github.com/vllm-project/vllm-ascend/issues/16978) [#17067](https://github.com/vllm-project/vllm-ascend/issues/17067) [#17165](https://github.com/vllm-project/vllm-ascend/issues/17165) [#17483](https://github.com/vllm-project/vllm-ascend/issues/17483) [#16973](https://github.com/vllm-project/vllm-ascend/issues/16973)

##### 性能

- 优化 DeepSeek-V4 VL embedinputids 以消除每步拷贝。 [#16671](https://github.com/vllm-project/vllm-ascend/issues/16671)
- 通过共享 transform 张量、缓存 KV 计划以及融合 scale 校正与 cache 打包，优化 DeepSeek V4 TurboQuant 框架路径。 [#18037](https://github.com/vllm-project/vllm-ascend/issues/18037)
- 优化 DeepSeek V4 TurboQuant 框架路径。 [#18127](https://github.com/vllm-project/vllm-ascend/issues/18127)

##### 文档

- 新增 DeepSeek V4.1 Flash A3 PD 部署指南，并记录了 DSV4-Flash/Pro 和 GLM-5.2 的 W4A4C8 量化方案。 [#17099](https://github.com/vllm-project/vllm-ascend/issues/17099) [#17226](https://github.com/vllm-project/vllm-ascend/issues/17226)

##### 稳定性与错误修复

- 为 DeepSeek V4 恢复平台默认的 indexer KV dtype，并在每个 PP stage 的首个 C4 处初始化 V4 IndexCache。 [#17635](https://github.com/vllm-project/vllm-ascend/issues/17635) [#17921](https://github.com/vllm-project/vllm-ascend/issues/17921)
- 通过权重加载器应用 DeepSeek-V4 attention sinks。 [#16958](https://github.com/vllm-project/vllm-ascend/issues/16958)

##### 已知问题

- 关于 DSV4.1 + DSA-CP（ [#17729](https://github.com/vllm-project/vllm-ascend/issues/17729) ）和 GLM-5.3 P/D（ [#17541](https://github.com/vllm-project/vllm-ascend/issues/17541) ）尚未解决的精度问题调查，请参阅 issue tracker。

#### v0.26.0rc1 · 2026.09.03（中文）

##### 亮点

- GLM-5.2 / DeepSeek V4 Flash 0731 / DeepSeek V4 Pro 0813精度和性能 ：解决了GLM-5.2 DSpark接受率回退和DeepSeek V4 Flash-0731 / Pro-0813精度问题（推理努力对齐、路由SwiGLU限制和前端行为），并跨层重用DSV4压缩器元数据以提升性能。 [#12262](https://github.com/vllm-project/vllm-ascend/issues/12262) [#13531](https://github.com/vllm-project/vllm-ascend/issues/13531) [#13993](https://github.com/vllm-project/vllm-ascend/issues/13993) [#14074](https://github.com/vllm-project/vllm-ascend/issues/14074) [#14397](https://github.com/vllm-project/vllm-ascend/issues/14397) [#14624](https://github.com/vllm-project/vllm-ascend/issues/14624) [#14994](https://github.com/vllm-project/vllm-ascend/issues/14994)
- DeepSeek V4 DSpark ：重构了DSv4 DSpark投机解码，支持对齐的SP处理和Qwen3 DSpark的QuaRot权重支持。 [#11431](https://github.com/vllm-project/vllm-ascend/issues/11431) [#12662](https://github.com/vllm-project/vllm-ascend/issues/12662)

##### 性能

- 将DeepSeek V4 DSpark主投影分片到TP ranks上，以获得更好的并行性。 [#15144](https://github.com/vllm-project/vllm-ascend/issues/15144)
- 跨层重用DeepSeek V4压缩器元数据，以避免冗余计算。 [#14994](https://github.com/vllm-project/vllm-ascend/issues/14994)

##### 文档

- 更新了DeepSeek-V4、GLM-5.2、Kimi-K2.x和Gemma4模型部署指南。 [#11525](https://github.com/vllm-project/vllm-ascend/issues/11525) [#11534](https://github.com/vllm-project/vllm-ascend/issues/11534) [#11055](https://github.com/vllm-project/vllm-ascend/issues/11055)

##### 稳定性与错误修复

- 修复了DeepSeek V4 MXFP路由精度和W4A16MXFP通信精度问题。 [#11663](https://github.com/vllm-project/vllm-ascend/issues/11663) [#12585](https://github.com/vllm-project/vllm-ascend/issues/12585)
- 根据检查点配置选择DeepSeek V4的effort映射。 [#14952](https://github.com/vllm-project/vllm-ascend/issues/14952)

##### 已知问题

- DeepSeek-V4睡眠模式在启用 sleepmodeextracleanup 时可能无法在唤醒后恢复。睡眠模式主要面向训练场景。 [#15648](https://github.com/vllm-project/vllm-ascend/issues/15648)

#### v0.23.0 · 2026.08.16（中文）

##### 亮点

- Ascend 950与DeepSeek V4 ：在Ascend 950上新增了端到端的DeepSeek V4支持，包括DSA注意力、MTP、分段图执行、分布式推理、稀疏注意力、CPU绑定以及MXFP量化和通信路径。 [#9757](https://github.com/vllm-project/vllm-ascend/issues/9757) [#9935](https://github.com/vllm-project/vllm-ascend/issues/9935) [#10236](https://github.com/vllm-project/vllm-ascend/issues/10236) [#11014](https://github.com/vllm-project/vllm-ascend/issues/11014)

##### 性能

- 为DeepSeek V4 DSA压缩器、索引器选择、CV并行和纯预填充路径添加了多流计算-通信重叠。启用FlashComm1和适用的DSA-CP/重叠配置；优化的子路径将自动选择。 [#9433](https://github.com/vllm-project/vllm-ascend/issues/9433) [#9441](https://github.com/vllm-project/vllm-ascend/issues/9441) [#9450](https://github.com/vllm-project/vllm-ascend/issues/9450) [#9504](https://github.com/vllm-project/vllm-ascend/issues/9504) [#9530](https://github.com/vllm-project/vllm-ascend/issues/9530) [#10518](https://github.com/vllm-project/vllm-ascend/issues/10518)
- 通过IndexCache在解码步骤间重用DeepSeek V4 DSA的 topkindices 。自动应用于符合条件的DSA解码工作负载。 [#9390](https://github.com/vllm-project/vllm-ascend/issues/9390)
- 在启用MTP时提高了DeepSeek V4前缀缓存命中率。vLLM V1中默认启用前缀缓存；除非之前已禁用，否则无需标志。 [#11107](https://github.com/vllm-project/vllm-ascend/issues/11107)

##### 稳定性与错误修复

- 修复了DeepSeek V4 MXFP路由精度、W4A16MXFP通信精度以及eager draft编译配置隔离问题。 [#11663](https://github.com/vllm-project/vllm-ascend/issues/11663) [#11718](https://github.com/vllm-project/vllm-ascend/issues/11718) [#12587](https://github.com/vllm-project/vllm-ascend/issues/12587) † [#12722](https://github.com/vllm-project/vllm-ascend/issues/12722) †

##### 已知问题

- 在高并发场景下，当输入形状变化触发 Triton 内核重新编译时，A2 或 A3 上的 DeepSeek V4 可能出现 1-2 秒的 TPOT 尖峰。 [#14324](https://github.com/vllm-project/vllm-ascend/issues/14324)

#### v0.23.0rc1 · 2026.07.20（中文）

##### 功能特性

- 增加了 DeepSeek V4 MTP 图支持。 [#11062](https://github.com/vllm-project/vllm-ascend/issues/11062)
- 在Ascend 950上增加了对DeepSeek-V4的端到端支持，包括分段图模式、DSA注意力后端、KV缓存管理、分布式推理（含PP修复）和MTP。 [#9757](https://github.com/vllm-project/vllm-ascend/issues/9757) [#9473](https://github.com/vllm-project/vllm-ascend/issues/9473) [#9935](https://github.com/vllm-project/vllm-ascend/issues/9935)
- 增加了DeepSeek-V4压缩器块大小[32,64,128]支持，以提高自动前缀缓存命中率。 [#10354](https://github.com/vllm-project/vllm-ascend/issues/10354)

##### 实验性功能或优化

- 改进了 DeepSeek V4 前缀缓存命中率。 [#11107](https://github.com/vllm-project/vllm-ascend/issues/11107)

##### 稳定性与错误修复

- 修复了DeepSeek-R1-0528 W8A8共享专家无钳位精度路径，同时未回归钳位的DeepSeek V4路径。 [#11775](https://github.com/vllm-project/vllm-ascend/issues/11775)
- 修复了多个DeepSeek V4 PP问题。 [#9473](https://github.com/vllm-project/vllm-ascend/issues/9473)
- 修复了DeepSeek-V4压缩注意力组前缀缓存命中问题。 [#9903](https://github.com/vllm-project/vllm-ascend/issues/9903)
- 修复了DSv4分段图场景。 [#10003](https://github.com/vllm-project/vllm-ascend/issues/10003)
- 修复了前缀缓存中DeepSeek-V4压缩前缀查找的问题。 [#10297](https://github.com/vllm-project/vllm-ascend/issues/10297)
- 将DeepSeek V4缓存钩子移入模型，移除了遗留的补丁环境变量。 [#10327](https://github.com/vllm-project/vllm-ascend/issues/10327) [#10333](https://github.com/vllm-project/vllm-ascend/issues/10333)

##### 亮点

- DeepSeek V4 / 混合 KV 缓存的 Mooncake 连接器 ：Mooncake 连接器现在支持 DeepSeek V4 和混合 KV 缓存分离式预填充场景，具备正确的块步长处理、压缩 KV 传输计算以及混合 Mamba Token 对齐功能。 [#10342](https://github.com/vllm-project/vllm-ascend/issues/10342)
- 面向Ascend 950的DeepSeek-V4 ：在Ascend 950上提供对DeepSeek-V4的完整端到端支持，包括分段图模式、DSA注意力、KV缓存管理和MTP。 [#9757](https://github.com/vllm-project/vllm-ascend/issues/9757) [#9935](https://github.com/vllm-project/vllm-ascend/issues/9935)

##### 性能

- 启用了多流 DSV4 DSA 重叠，并移除了冗余的 DSA v1 代码路径。 [#10518](https://github.com/vllm-project/vllm-ascend/issues/10518)

##### 硬件与算子支持

- 新增对 AscendStore 分组键的 Rehash 支持，以支持 DeepSeek V4 和压缩布局。 [#9789](https://github.com/vllm-project/vllm-ascend/issues/9789)

##### 已知问题

- DeepSeek-V4 KV Pool : When enabling KV Pool for DeepSeek-V4, the --no-disable-hybrid-kv-cache-manager flag must be added, otherwise the service will OOM at startup. Additionally, KV Pool for DSv4 stores all states for all compression ratio families — storing a sequence of 1M tokens takes approximately 300GB, which is the same behavior as upstream vLLM. [#9975](https://github.com/vllm-project/vllm-ascend/issues/9975)

#### v0.22.1rc1 · 2026.06.30（中文）

##### 亮点

- 用于 DeepSeek V4 / 混合 KV Cache 的 Mooncake 连接器 ：Mooncake 连接器现在支持 DeepSeek V4 和混合 KV cache 分离预填充场景，具有正确的块步长处理、压缩 KV 传输计算和混合 Mamba token 对齐。 [#10342](https://github.com/vllm-project/vllm-ascend/issues/10342)

##### 性能

- 启用了多流 DSV4 DSA 重叠，并移除了冗余的 DSA v1 代码路径。 [#10518](https://github.com/vllm-project/vllm-ascend/issues/10518)

#### v0.21.0rc1 · 2026.06.16（中文）

##### 亮点

- Ascend 950 上的 DeepSeek-V4 ：在 Ascend 950 上对 DeepSeek-V4 提供完整的端到端支持，包括分段图模式、DSA 注意力机制、KV 缓存管理和 MTP。 [#9757](https://github.com/vllm-project/vllm-ascend/issues/9757) [#9935](https://github.com/vllm-project/vllm-ascend/issues/9935)

##### 功能特性

- 增加了对 Ascend 950 上 DeepSeek-V4 的端到端支持，包括分段图模式、DSA 注意力后端、KV 缓存管理、分布式推理（含 PP 修复）和 MTP。 [#9757](https://github.com/vllm-project/vllm-ascend/issues/9757) [#9473](https://github.com/vllm-project/vllm-ascend/issues/9473) [#9935](https://github.com/vllm-project/vllm-ascend/issues/9935)
- 新增DeepSeek-V4压缩器块大小[32,64,128]支持，以提升自动前缀缓存命中率。 [#10354](https://github.com/vllm-project/vllm-ascend/issues/10354)

##### 硬件和算子支持

- 新增AscendStore分组键的Rehash功能以支持DeepSeek V4及压缩布局。 [#9789](https://github.com/vllm-project/vllm-ascend/issues/9789)

##### 稳定性与错误修复

- 修复多个DeepSeek V4 PP问题。 [#9473](https://github.com/vllm-project/vllm-ascend/issues/9473)
- 修复了DeepSeek-V4压缩注意力组前缀缓存命中问题。 [#9903](https://github.com/vllm-project/vllm-ascend/issues/9903)
- 修复了DSv4分段图场景。 [#10003](https://github.com/vllm-project/vllm-ascend/issues/10003)
- 修复了DeepSeek-V4在前缀缓存中的压缩前缀查找问题。 [#10297](https://github.com/vllm-project/vllm-ascend/issues/10297)
- 将DeepSeek V4缓存钩子移入模型，移除了旧版补丁环境变量。 [#10327](https://github.com/vllm-project/vllm-ascend/issues/10327) [#10333](https://github.com/vllm-project/vllm-ascend/issues/10333)

##### 已知问题

- DeepSeek-V4 KV池 ：为DeepSeek-V4启用KV池时，必须添加 --no-disable-hybrid-kv-cache-manager 标志，否则服务启动时会因内存不足（OOM）而失败。此外，DSv4的KV池会存储所有压缩比族的所有状态——存储100万个token的序列大约需要300GB，这与上游vLLM的行为一致。 [#9975](https://github.com/vllm-project/vllm-ascend/issues/9975)

#### v0.20.2rc1 · 2026.06.03（中文）

##### 亮点

- DeepSeek V4 支持 ：添加了对 DeepSeek V4 的端到端支持，包括模型架构、DSA 注意力后端、KV 缓存管理、分布式推理、工具调用解析器、MTP 支持、KV Pool 适配以及自定义算子启用。 [#9270](https://github.com/vllm-project/vllm-ascend/issues/9270) [#9385](https://github.com/vllm-project/vllm-ascend/issues/9385) [#9228](https://github.com/vllm-project/vllm-ascend/issues/9228)

##### 功能特性

- 新增DeepSeek V4的KV池适配，并为DeepSeek V4推测解码分离了MTP层KV缓存分片。 [#9385](https://github.com/vllm-project/vllm-ascend/issues/9385) [#9367](https://github.com/vllm-project/vllm-ascend/issues/9367)

##### 硬件与算子支持

- 新增DeepSeek V4新模型路径所需的自定义算子，为Ascend 910B注册了算子，并将DeepSeek V4的 hcpre 路径切换为融合算子。 [#9228](https://github.com/vllm-project/vllm-ascend/issues/9228) [#9339](https://github.com/vllm-project/vllm-ascend/issues/9339) [#9396](https://github.com/vllm-project/vllm-ascend/issues/9396)

##### 性能

- 新增DeepSeek V4 DSA多流重叠优化，涵盖压缩器、索引器选择、CV并行以及纯预填充计算通信重叠路径。 [#9450](https://github.com/vllm-project/vllm-ascend/issues/9450) [#9441](https://github.com/vllm-project/vllm-ascend/issues/9441) [#9433](https://github.com/vllm-project/vllm-ascend/issues/9433) [#9504](https://github.com/vllm-project/vllm-ascend/issues/9504)
- 通过IndexCache在解码步骤间复用DSA topkindices ，减少DeepSeek V4重复索引计算。 [#9390](https://github.com/vllm-project/vllm-ascend/issues/9390)

##### 稳定性与错误修复

- 修复了DeepSeek V4 MTP、串行推理、FlashComm、A2张量输出全规约以及P/D分离式KV缓存的边界情况。 [#9456](https://github.com/vllm-project/vllm-ascend/issues/9456) [#9487](https://github.com/vllm-project/vllm-ascend/issues/9487) [#9488](https://github.com/vllm-project/vllm-ascend/issues/9488) [#9389](https://github.com/vllm-project/vllm-ascend/issues/9389) [#9500](https://github.com/vllm-project/vllm-ascend/issues/9500)
- 修复了DeepSeek V4 hcpre 的行为，并新增了4卡端到端回归测试。 [#9452](https://github.com/vllm-project/vllm-ascend/issues/9452)

##### 已知问题

- DeepSeek V4 的 KV Pool 功能目前面临多个已知问题，影响易用性和性能，包括特殊的启动参数要求、特殊的 key 存储行为等。详情请参阅 issue [#9975](https://github.com/vllm-project/vllm-ascend/issues/9975) 。

### DeepSeek V3.2

#### v0.26.0rc1 · 2026.09.03（中文）

##### 已知问题

- DeepSeek-V3.2-W8A8在A3单节点混合部署中可能出现部分性能回退。 [#15651](https://github.com/vllm-project/vllm-ascend/issues/15651)

#### v0.23.0 · 2026.08.16（中文）

##### 已知问题

- 对于使用稀疏闪存注意力（SFA）的模型（包括 DeepSeek-V3.2、GLM-5.1 和 GLM-5.2）的 P/D 分离部署，必须在预填充节点和解码节点上同时启用 DCP 或同时禁用。不对称的 DCP 配置可能导致精度问题。 [#14322](https://github.com/vllm-project/vllm-ascend/issues/14322) †

#### v0.23.0rc1 · 2026.07.20（中文）

##### 文档

- 为 DeepSeek V3.2 和 GLM5 添加了 DSA-CP 配置文档。 [#9910](https://github.com/vllm-project/vllm-ascend/issues/9910)

#### v0.21.0rc1 · 2026.06.16（中文）

##### 文档

- 新增了 DeepSeek V3.2 和 GLM5 的 DSA-CP 配置文档。 [#9910](https://github.com/vllm-project/vllm-ascend/issues/9910)

#### v0.20.2rc1 · 2026.06.03（中文）

##### 文档

- 新增了DeepSeek V3.2和GLM5的 enabledsacp 附加配置选项文档。 [#9910](https://github.com/vllm-project/vllm-ascend/issues/9910)

#### v0.18.0 · 2026.04.30（中文）

##### 性能

- DeepSeek-V3.2/GLM5性能 : 性能优化，支持W8A8C8量化，并优化KV缓存使用。@yydyzr @ZYang6263 @rjg-lyh @Nagisa125 [#7029](https://github.com/vllm-project/vllm-ascend/issues/7029) [#6610](https://github.com/vllm-project/vllm-ascend/issues/6610)

##### 文档

- 更新了 DeepSeek-V3.2 的文档配置。 [#7970](https://github.com/vllm-project/vllm-ascend/issues/7970)
- 刷新了 Kimi-K2.5、GLM-4.7、DeepSeek-V3.2、MiniMax-M2.5 的部署和模型文档以及 PD 分离指南。 [#7371](https://github.com/vllm-project/vllm-ascend/issues/7371) [#7403](https://github.com/vllm-project/vllm-ascend/issues/7403) [#7292](https://github.com/vllm-project/vllm-ascend/issues/7292) [#7296](https://github.com/vllm-project/vllm-ascend/issues/7296) [#7300](https://github.com/vllm-project/vllm-ascend/issues/7300)

##### 已知问题

- 通过PD架构分别部署GLM5和Deepseek V3.2时，存在概率性输出为空或乱码的问题。 [#8853](https://github.com/vllm-project/vllm-ascend/issues/8853)

#### v0.19.1rc1 · 2026.04.30（中文）

##### 其他

- 修复deepseek v3.2的DSA-CP PD角色门控（ [#8290](https://github.com/vllm-project/vllm-ascend/issues/8290) ）

#### v0.18.0rc1 · 2026.04.01（中文）

##### 文档

- 刷新了Kimi-K2.5、GLM-4.7、DeepSeek-V3.2、MiniMax-M2.5的部署和模型文档，以及PD分离指南。 [#7371](https://github.com/vllm-project/vllm-ascend/issues/7371) [#7403](https://github.com/vllm-project/vllm-ascend/issues/7403) [#7292](https://github.com/vllm-project/vllm-ascend/issues/7292) [#7296](https://github.com/vllm-project/vllm-ascend/issues/7296) [#7300](https://github.com/vllm-project/vllm-ascend/issues/7300)

#### v0.17.0rc1 · 2026.03.15（中文）

##### 功能特性

- DeepSeek-V3.2现已在PD混合场景下支持W8A8C8量化。 [#7029](https://github.com/vllm-project/vllm-ascend/issues/7029)

#### v0.16.0rc1 · 2026.03.09（中文）

##### 已知问题

- 目前，对于 DeepSeek v3.2，PCP 和 DCP 尚不能与 FlashComm1 功能一起使用，可能导致服务错误或其他未知错误。
- 在 DeepSeek V3.2 的 4 节点 A3 PD 分离部署中，在高并发场景（例如 2k/2k token 搭配 512 个并发请求）下进行基准测试时，P 节点可能挂起。

#### v0.15.0rc1 · 2026.02.27（中文）

##### 性能

- DeepSeek V3.2 KVCache 优化 ：优化了 DeepSeek V3.2 的 KV 缓存使用。 [#6610](https://github.com/vllm-project/vllm-ascend/issues/6610)

#### v0.13.0 · 2026.02.06（中文）

##### 亮点

- DeepSeek-R1 & DeepSeek-V3.2 ：[实验性]性能优化和异步调度增强。 [#3631](https://github.com/vllm-project/vllm-ascend/issues/3631) [#3900](https://github.com/vllm-project/vllm-ascend/issues/3900) [#3908](https://github.com/vllm-project/vllm-ascend/issues/3908) [#4191](https://github.com/vllm-project/vllm-ascend/issues/4191) [#4805](https://github.com/vllm-project/vllm-ascend/issues/4805)

##### 性能

- DeepSeek 性能 ：[实验性]通过消除异步调度中的 HD 同步并优化 MTP 的内存使用，提升了 DeepSeek V3.2 的性能。 [#4805](https://github.com/vllm-project/vllm-ascend/issues/4805) [#2713](https://github.com/vllm-project/vllm-ascend/issues/2713)

##### 文档

- 新增了多个模型的教程，包括 DeepSeek-V3.2-Exp、Qwen3-Next 以及各种多模态模型

#### v0.13.0rc1 · 2025.12.27（中文）

##### 亮点

- 提升了 DeepSeek V3.2 的性能，请参考 教程

##### 已知问题

- DeepSeek-V3.2 中 curl 在超短序列上存在精度问题。我们将在下一个版本中修复。 [#5370](https://github.com/vllm-project/vllm-ascend/issues/5370)

#### v0.11.0rc0 · 2025.09.30（中文）

##### 亮点

- 现在支持DeepSeek V3.2。 [#3270](https://github.com/vllm-project/vllm-ascend/issues/3270)

### DeepSeek V3.1

#### v0.26.0rc1 · 2026.09.03（中文）

##### 即将弃用

- DeepSeek-V3、DeepSeek-V3.1和DeepSeek-R1模型支持将在v0.28.0中移除。

##### 已知问题

- DeepSeek-V3.1在PD分离服务和并发度较高的PD混合推理过程中可能挂起或失败。这些场景不在支持的导出模型范围内。 [#14911](https://github.com/vllm-project/vllm-ascend/issues/14911)

#### v0.23.0 · 2026.08.16（中文）

##### 文档

- 更新了 Ascend 950 DeepSeek-V3.1/V3.2 和 GLM-5.2 的部署指南。 [#12937](https://github.com/vllm-project/vllm-ascend/issues/12937) † [#13043](https://github.com/vllm-project/vllm-ascend/issues/13043) †

##### 已知问题

- DeepSeek-V3.1 大规模 EP 部署报告与目标性能存在 3%-5% 的差距。 [#14327](https://github.com/vllm-project/vllm-ascend/issues/14327)
- 在高吞吐部署中，DeepSeek-V3.1 2P1D 吞吐量与 v0.18.0 相比报告存在约 15% 的回退。 [#12349](https://github.com/vllm-project/vllm-ascend/issues/12349)

#### v0.23.0rc1 · 2026.07.20（中文）

##### 已知问题

- DeepSeek-V3.1-Terminus在高吞吐P/D分离部署中，与报告的v0.18.0基线相比，可能显示约15%的输出吞吐回退；该回退在A3四节点2P1D设置和A2大型EP设置中报告。 [#12349](https://github.com/vllm-project/vllm-ascend/issues/12349)

#### v0.19.1rc1 · 2026.04.30（中文）

##### 亮点

- GQA的C8 INT8 KV缓存 ：为GQA注意力模型新增C8（INT8 KV缓存）支持，包括采用PD分离的DeepSeek-V3.1（ [#7474](https://github.com/vllm-project/vllm-ascend/issues/7474) 、 [#7222](https://github.com/vllm-project/vllm-ascend/issues/7222) ）

##### 其他

- DSV3.1服务启动 ：修复DeepSeek-V3.1服务启动失败的问题 ( [#8208](https://github.com/vllm-project/vllm-ascend/issues/8208) )

#### v0.18.0rc1 · 2026.04.01（中文）

##### 亮点

- C8（INT8 KV缓存）现已在GQA注意力模型上得到支持，并在PD分离场景下的DeepSeek-V3.1上同样支持。 [#7474](https://github.com/vllm-project/vllm-ascend/issues/7474) ， [#7222](https://github.com/vllm-project/vllm-ascend/issues/7222)

##### 其他

- 修复了DeepSeek v3.1 C8在全解码和全图模式下叠加MTP时的问题。 [#7571](https://github.com/vllm-project/vllm-ascend/issues/7571)

#### v0.15.0rc1 · 2026.02.27（中文）

##### 其他

- DeepSeekV3.1 精度 ：修复了 DeepSeekV3.1 的精度问题。 [#6805](https://github.com/vllm-project/vllm-ascend/issues/6805)

### DeepSeek V3

#### v0.26.0rc1 · 2026.09.03（中文）

##### 即将弃用

- DeepSeek-V3、DeepSeek-V3.1和DeepSeek-R1模型支持将在v0.28.0中移除。

#### v0.13.0 · 2026.02.06（中文）

##### 亮点

- 纯解码模式 ：在fulldecodeonly模式下增加了对Qwen3-Next和DeepSeekv32的支持，并修复了相关bug。 [#3949](https://github.com/vllm-project/vllm-ascend/issues/3949) [#3986](https://github.com/vllm-project/vllm-ascend/issues/3986) [#3763](https://github.com/vllm-project/vllm-ascend/issues/3763)

#### v0.11.0rc2 · 2025.11.21（中文）

##### 其他

- 修复DeepSeek V3系列模型的allgather操作bug。 [#3711](https://github.com/vllm-project/vllm-ascend/issues/3711)

#### v0.11.0rc1 · 2025.11.10（中文）

##### 核心

- Qwen3和Deepseek V3系列模型的性能得到提升。

#### v0.9.1 · 2025.09.03（中文）

##### 亮点

- DeepSeek V3/R1现已获得高质量和高性能支持。MTP也可与DeepSeek配合使用。请参考 多节点教程 和 大规模专家并行 。

#### v0.9.1rc2 · 2025.08.04（中文）

##### 图模式改进

- 修复 deepseek V3/R1 模型在 torchair 图模式下长序列预测的精度问题 [#1332](https://github.com/vllm-project/vllm-ascend/issues/1332)

#### v0.9.2rc1 · 2025.07.11（中文）

##### 其他

- 修复了 Deepseek V3/R1 模型在使用 torchair 图进行长序列预测时的精度问题。 [#1331](https://github.com/vllm-project/vllm-ascend/issues/1331)
- 新增环境变量 VLLMENABLEFUSEDEXPERTSALLGATHEREP 。它为 Deepseek V3/R1 模型启用了融合的 allgather-experts 内核。默认值为 0 。 [#1335](https://github.com/vllm-project/vllm-ascend/issues/1335)

#### v0.7.3 · 2025.05.08（中文）

##### 亮点

- 将MindIE Turbo集成到vLLM Ascend中，以提升DeepSeek V3/R1、Qwen 2系列的性能。 [#708](https://github.com/vllm-project/vllm-ascend/issues/708)

#### v0.8.5rc1 · 2025.05.06（中文）

##### 亮点

- 提升 Deepseek V3 的 eager 模式和 graph 模式性能，现在可以使用 --additionalconfig={'enablegraphmode': True} 来启用 graph 模式。 [#598](https://github.com/vllm-project/vllm-ascend/issues/598) [#719](https://github.com/vllm-project/vllm-ascend/issues/719)

#### v0.8.4rc2 · 2025.04.29（中文）

##### 亮点

- DeepSeek V3/R1 现已支持 DP、TP 和 MTP。请注意，此功能仍处于实验阶段。如果遇到任何问题，请告知我们。 [#429](https://github.com/vllm-project/vllm-ascend/issues/429) [#585](https://github.com/vllm-project/vllm-ascend/issues/585) [#626](https://github.com/vllm-project/vllm-ascend/issues/626) [#636](https://github.com/vllm-project/vllm-ascend/issues/636) [#671](https://github.com/vllm-project/vllm-ascend/issues/671)

#### v0.7.3rc1 · 2025.03.14（中文）

##### 亮点

- DeepSeek V3/R1 现在运行良好。阅读 官方指南 开始使用！ [#242](https://github.com/vllm-project/vllm-ascend/issues/242)

##### 其他

- 支持DeepSeek V3/R1的MTP（多令牌预测）功能。 [#236](https://github.com/vllm-project/vllm-ascend/issues/236)

### DeepSeek R1

#### v0.26.0rc1 · 2026.09.03（中文）

##### 即将弃用

- DeepSeek-V3、DeepSeek-V3.1和DeepSeek-R1模型支持将在v0.28.0中移除。

#### v0.23.0 · 2026.08.16（中文）

##### 稳定性与错误修复

- 修复了DeepSeek-R1-0528 W8A8共享专家无钳位精度路径以及MiniMax-M2/M2.5的畸形流式工具调用或TP8+EP启动问题。 [#11775](https://github.com/vllm-project/vllm-ascend/issues/11775) [#11505](https://github.com/vllm-project/vllm-ascend/issues/11505)

#### v0.23.0rc1 · 2026.07.20（中文）

##### 稳定性与错误修复

- 修复了DeepSeek-R1-0528 W8A8共享专家无钳位精度路径，同时未回归钳位的DeepSeek V4路径。 [#11775](https://github.com/vllm-project/vllm-ascend/issues/11775)

#### v0.18.0rc1 · 2026.04.01（中文）

##### 已知问题

- 在高并发下运行启用了MTP和KV Pool的DeepSeek-R1 W8A8时，可能会出现 ValueError: Counters can only be incremented by non-negative amounts 错误。 [#7489](https://github.com/vllm-project/vllm-ascend/issues/7489)

#### v0.13.0 · 2026.02.06（中文）

##### 亮点

- DeepSeek-R1 & DeepSeek-V3.2 ：[实验性]性能优化和异步调度增强。 [#3631](https://github.com/vllm-project/vllm-ascend/issues/3631) [#3900](https://github.com/vllm-project/vllm-ascend/issues/3900) [#3908](https://github.com/vllm-project/vllm-ascend/issues/3908) [#4191](https://github.com/vllm-project/vllm-ascend/issues/4191) [#4805](https://github.com/vllm-project/vllm-ascend/issues/4805)

#### v0.8.5rc1 · 2025.05.06（中文）

##### 核心

- 优化 NPU 内存使用，使 DeepSeek R1 W8A8 32k 模型长度正常工作 [#728](https://github.com/vllm-project/vllm-ascend/issues/728)

### DeepSeek OCR2

#### v0.19.1rc1 · 2026.04.30（中文）

##### 文档

- DeepSeekOCR2文档 ( [#8573](https://github.com/vllm-project/vllm-ascend/issues/8573) )

### DeepSeek OCR

#### v0.18.0 · 2026.04.30（中文）

##### 亮点

- DeepseekOCR支持 ：[实验性]添加了对DeepseekOCR模型的支持，并优化了 RelPosAttention 和 CustomQwen2Decoder 。@Wangbei25 [#7737](https://github.com/vllm-project/vllm-ascend/issues/7737)

#### v0.11.0 · 2025.12.16（中文）

##### 亮点

- 现在支持更多新模型，例如 Qwen3-omni、DeepSeek OCR、PaddleOCR、OpenCUA。

#### v0.12.0rc1 · 2025.12.13（中文）

##### 亮点

- 现已支持更多新模型，例如 Qwen3-omni、DeepSeek OCR、PaddleOCR、OpenCUA。

## Qwen

### Qwen3.8

#### v0.30.0rc1 · 2026.10.11（中文）

This is vLLM Ascend v0.30.0rc1, a model-focused release built on the v0.29 release line and aligned with upstream vLLM v0.30.0 via the main2main pipeline. This release focuses on four flagship models: DeepSeek V4.1 , GLM-5.3 , GLM-5.3-Flash , and Qwen3.8-27B , and hardens the shared execution stacks they rely on (Model Runner V2, PCP/DCP parallelism, KV Cache Pool, and speculative decoding). Model or hardware combinations outside the scope declared below are not part of the release claims. Please follow the official documentation to get started.

##### 亮点

- Qwen3.8-27B ：支持混合线性注意力模型中的非连续 KV cache，遵循逐层 KV cache dtype 并保持 KV cache 连续以用于 paged attention，在混合 cache page 重新分配时恢复 C8 V scales，在延迟 PP 后处理前恢复 Mamba block tables，为 GDN prefill 新增 FLA NPU 后端，并修复了 310P 在量化部署下的性能和 kernel 兼容性问题。 [#14340](https://github.com/vllm-project/vllm-ascend/issues/14340) [#17924](https://github.com/vllm-project/vllm-ascend/issues/17924) [#18003](https://github.com/vllm-project/vllm-ascend/issues/18003) [#17956](https://github.com/vllm-project/vllm-ascend/issues/17956) [#17954](https://github.com/vllm-project/vllm-ascend/issues/17954) [#17565](https://github.com/vllm-project/vllm-ascend/issues/17565) [#17534](https://github.com/vllm-project/vllm-ascend/issues/17534) [#16420](https://github.com/vllm-project/vllm-ascend/issues/16420) [#17964](https://github.com/vllm-project/vllm-ascend/issues/17964) [#17278](https://github.com/vllm-project/vllm-ascend/issues/17278)

### Qwen3.6

#### v0.26.0rc1 · 2026.09.03（中文）

##### 已知问题

- Qwen3.6-27B DFlash混合滑动窗口和全注意力模式需要V2模型运行器。 [#15650](https://github.com/vllm-project/vllm-ascend/issues/15650)

#### v0.23.0 · 2026.08.16（中文）

##### 亮点

- 模型与硬件覆盖 ：扩展了对GLM-5.2、GLM-4.7-Flash、Qwen3.5/Qwen3.6、Qwen3-ASR、Qwen3-Omni、百灵MoE、Gemma4、Step3和MiniMax 2.x等模型在A2、A3、Ascend 950和Atlas 300I DUO上的支持与部署指南。GLM-5.2在Atlas 800 A3上支持长达100万token的长序列推理。 [#8657](https://github.com/vllm-project/vllm-ascend/issues/8657) [#9560](https://github.com/vllm-project/vllm-ascend/issues/9560) [#10441](https://github.com/vllm-project/vllm-ascend/issues/10441) [#10697](https://github.com/vllm-project/vllm-ascend/issues/10697) [#11091](https://github.com/vllm-project/vllm-ascend/issues/11091) [#11264](https://github.com/vllm-project/vllm-ascend/issues/11264) [#12115](https://github.com/vllm-project/vllm-ascend/issues/12115)

##### 硬件与算子支持

- 扩展了Atlas 300I DUO对Qwen3.5、Qwen3.6、Qwen3-ASR、Qwen3-VL、量化MoE路径、MTP和图执行的支持。 [#7674](https://github.com/vllm-project/vllm-ascend/issues/7674) [#7725](https://github.com/vllm-project/vllm-ascend/issues/7725) [#10309](https://github.com/vllm-project/vllm-ascend/issues/10309) [#12115](https://github.com/vllm-project/vllm-ascend/issues/12115) [#13262](https://github.com/vllm-project/vllm-ascend/issues/13262) †

##### 稳定性与错误修复

- 修复了Qwen3.5/Qwen3.6投机解码精度、Mamba前缀缓存损坏、块表溢出以及Atlas 300I DUO图失败问题。 [#11337](https://github.com/vllm-project/vllm-ascend/issues/11337) [#11408](https://github.com/vllm-project/vllm-ascend/issues/11408) [#11353](https://github.com/vllm-project/vllm-ascend/issues/11353) [#11659](https://github.com/vllm-project/vllm-ascend/issues/11659) [#11920](https://github.com/vllm-project/vllm-ascend/issues/11920) [#12038](https://github.com/vllm-project/vllm-ascend/issues/12038)

#### v0.23.0rc1 · 2026.07.20（中文）

##### 亮点

- 扩展模型支持 ：在 A2 和 A3 上增加了 GLM-5.2 支持，并为 Qwen3-ASR-1.7B、Qwen3.5 和 Qwen3.6 增加了 Ascend 310P 支持。 [#10441](https://github.com/vllm-project/vllm-ascend/issues/10441) [#11264](https://github.com/vllm-project/vllm-ascend/issues/11264) [#10257](https://github.com/vllm-project/vllm-ascend/issues/10257) [#12115](https://github.com/vllm-project/vllm-ascend/issues/12115)

##### 已知问题

- Qwen3.6-35B-A3B may shut down when MTP/speculative decoding is enabled, with numAcceptedTokens[0]=4 exceeds varlen segment length=3 reported during shape/dtype processing. [#9956](https://github.com/vllm-project/vllm-ascend/issues/9956)

#### v0.21.0rc1 · 2026.06.16（中文）

##### 已知问题

- Qwen3.6-35B-A3B 在启用 MTP/推测解码时可能关闭，在形状/数据类型处理期间报告 numAcceptedTokens[0]=4 exceeds varlen segment length=3 。 [#9956](https://github.com/vllm-project/vllm-ascend/issues/9956)

#### v0.20.2rc1 · 2026.06.03（中文）

##### 已知问题

- Qwen3.6-35B-A3B 在启用 MTP/推测解码时可能关闭，在 shape/dtype 处理期间报告 numAcceptedTokens[0]=4 exceeds varlen segment length=3 。 [#9956](https://github.com/vllm-project/vllm-ascend/issues/9956)

### Qwen3.5

#### v0.30.0rc1 · 2026.10.11（中文）

##### 功能特性

- 在 Qwen3.5 等混合模型中支持非连续 KV cache。 [#14340](https://github.com/vllm-project/vllm-ascend/issues/14340) [#17924](https://github.com/vllm-project/vllm-ascend/issues/17924)

##### 性能

- 修复 Qwen3.5-2B 在 310P 上的性能问题。 [#17278](https://github.com/vllm-project/vllm-ascend/issues/17278)

#### v0.26.0rc1 · 2026.09.03（中文）

##### 硬件与算子支持

- 扩展了Atlas 300I DUO支持：默认禁用npugraphex，新增Qwen3.5-Dense文档，并修复了310P投机解码精度。 [#10874](https://github.com/vllm-project/vllm-ascend/issues/10874) [#12077](https://github.com/vllm-project/vllm-ascend/issues/12077) [#11918](https://github.com/vllm-project/vllm-ascend/issues/11918)

##### 稳定性与错误修复

- 修复了Qwen3.5 PCP + 分块预填充的精度和小块问题。 [#11508](https://github.com/vllm-project/vllm-ascend/issues/11508) [#11807](https://github.com/vllm-project/vllm-ascend/issues/11807)

#### v0.23.0 · 2026.08.16（中文）

##### 亮点

- 模型与硬件覆盖 ：扩展了对GLM-5.2、GLM-4.7-Flash、Qwen3.5/Qwen3.6、Qwen3-ASR、Qwen3-Omni、百灵MoE、Gemma4、Step3和MiniMax 2.x等模型在A2、A3、Ascend 950和Atlas 300I DUO上的支持与部署指南。GLM-5.2在Atlas 800 A3上支持长达100万token的长序列推理。 [#8657](https://github.com/vllm-project/vllm-ascend/issues/8657) [#9560](https://github.com/vllm-project/vllm-ascend/issues/9560) [#10441](https://github.com/vllm-project/vllm-ascend/issues/10441) [#10697](https://github.com/vllm-project/vllm-ascend/issues/10697) [#11091](https://github.com/vllm-project/vllm-ascend/issues/11091) [#11264](https://github.com/vllm-project/vllm-ascend/issues/11264) [#12115](https://github.com/vllm-project/vllm-ascend/issues/12115)

##### 硬件与算子支持

- 扩展了Atlas 300I DUO对Qwen3.5、Qwen3.6、Qwen3-ASR、Qwen3-VL、量化MoE路径、MTP和图执行的支持。 [#7674](https://github.com/vllm-project/vllm-ascend/issues/7674) [#7725](https://github.com/vllm-project/vllm-ascend/issues/7725) [#10309](https://github.com/vllm-project/vllm-ascend/issues/10309) [#12115](https://github.com/vllm-project/vllm-ascend/issues/12115) [#13262](https://github.com/vllm-project/vllm-ascend/issues/13262) †

##### 性能

- 移除了Qwen3-Next和Qwen3.5路径中的预填充主机-设备同步。该优化自动应用于这些模型。 [#7967](https://github.com/vllm-project/vllm-ascend/issues/7967)
- 重用预构建的块主机元数据以减少Qwen3.5和MiniMax-M2.5工作负载的同步开销。自动应用于受影响的模型路径。 [#9310](https://github.com/vllm-project/vllm-ascend/issues/9310)

##### 稳定性与错误修复

- 修复了Qwen3.5/Qwen3.6投机解码精度、Mamba前缀缓存损坏、块表溢出以及Atlas 300I DUO图失败问题。 [#11337](https://github.com/vllm-project/vllm-ascend/issues/11337) [#11408](https://github.com/vllm-project/vllm-ascend/issues/11408) [#11353](https://github.com/vllm-project/vllm-ascend/issues/11353) [#11659](https://github.com/vllm-project/vllm-ascend/issues/11659) [#11920](https://github.com/vllm-project/vllm-ascend/issues/11920) [#12038](https://github.com/vllm-project/vllm-ascend/issues/12038)

##### 已知问题

- 在 Atlas 300I DUO 或 Atlas 200I Pro (310P) 上，Qwen3.5-2B-W8A8 GSM8K 精度与浮点模型相比可能出现超过 1% 的波动。 [#14335](https://github.com/vllm-project/vllm-ascend/issues/14335)

#### v0.23.0rc1 · 2026.07.20（中文）

##### 亮点

- 扩展模型支持 ：在 A2 和 A3 上增加了 GLM-5.2 支持，并为 Qwen3-ASR-1.7B、Qwen3.5 和 Qwen3.6 增加了 Ascend 310P 支持。 [#10441](https://github.com/vllm-project/vllm-ascend/issues/10441) [#11264](https://github.com/vllm-project/vllm-ascend/issues/11264) [#10257](https://github.com/vllm-project/vllm-ascend/issues/10257) [#12115](https://github.com/vllm-project/vllm-ascend/issues/12115)

##### 稳定性与错误修复

- 修复了Qwen3.5在PCP、MTP和DCP图重放中的GDN精度回退，包括混合长度PCP越界崩溃，同时恢复了之前的模型运行器分发行为。 [#11195](https://github.com/vllm-project/vllm-ascend/issues/11195) [#11893](https://github.com/vllm-project/vllm-ascend/issues/11893) [#12027](https://github.com/vllm-project/vllm-ascend/issues/12027) [#12283](https://github.com/vllm-project/vllm-ascend/issues/12283)
- 修复了Qwen3.5在Ascend 310P上使用MTP/EAGLE和全图执行时的推测解码精度、乱码输出和越界失败问题。 [#11337](https://github.com/vllm-project/vllm-ascend/issues/11337) [#11408](https://github.com/vllm-project/vllm-ascend/issues/11408) [#11920](https://github.com/vllm-project/vllm-ascend/issues/11920)
- 修复了使用MTP/EAGLE的Qwen3-Next、Qwen3.5及其他混合Mamba模型的静默前缀缓存输出损坏和块表溢出问题，以及310P上Mamba对齐后处理挂起问题。 [#11353](https://github.com/vllm-project/vllm-ascend/issues/11353) [#11659](https://github.com/vllm-project/vllm-ascend/issues/11659) [#12038](https://github.com/vllm-project/vllm-ascend/issues/12038)
- 修复了310P Qwen3.5 ACLGraph精度。 [#9727](https://github.com/vllm-project/vllm-ascend/issues/9727)
- 修复了Qwen3.5在Ascend 950上 fusedgdngating 不可用的问题。 [#10083](https://github.com/vllm-project/vllm-ascend/issues/10083)

##### 已知问题

- 在Ascend 950上，无MTP的P/D分离部署中的Qwen3.5-397B-W8A8-MXFP8-FULLQUANT可能在正确和错误输出之间交替。 [#12339](https://github.com/vllm-project/vllm-ascend/issues/12339)

##### 性能

- 为 Ascend 分块操作复用了预构建的分块主机元数据，以减少 Qwen3.5 工作负载上的主机-设备同步开销。 [#9310](https://github.com/vllm-project/vllm-ascend/issues/9310)

##### 功能特性

- 增加了Mooncake Connector对QWen3.5的混合PCP/DCP支持。 [#9809](https://github.com/vllm-project/vllm-ascend/issues/9809)
- [310P] 增加了Qwen3.5 MTP和图模式支持。 [#10309](https://github.com/vllm-project/vllm-ascend/issues/10309)

#### v0.22.1rc1 · 2026.06.30（中文）

##### 性能

- 为 Ascend 分块操作重用预构建的块主机元数据，以减少 Qwen3.5 工作负载上的主机-设备同步开销。 [#9310](https://github.com/vllm-project/vllm-ascend/issues/9310)

#### v0.21.0rc1 · 2026.06.16（中文）

##### 功能特性

- 增加了对 QWen3.5 的 Mooncake Connector 混合 PCP/DCP 支持。 [#9809](https://github.com/vllm-project/vllm-ascend/issues/9809)
- [310P] 新增Qwen3.5 MTP与图模式支持。 [#10309](https://github.com/vllm-project/vllm-ascend/issues/10309)

##### 稳定性与错误修复

- 修复310P Qwen3.5 ACLGraph精度。 [#9727](https://github.com/vllm-project/vllm-ascend/issues/9727)
- 修复了Qwen3.5在Ascend 950上 fusedgdngating 不可用的问题。 [#10083](https://github.com/vllm-project/vllm-ascend/issues/10083)

#### v0.20.2rc1 · 2026.06.03（中文）

##### 功能特性

- 新增Qwen3.5稠密模型的LoRA支持。 [#9023](https://github.com/vllm-project/vllm-ascend/issues/9023)

##### 硬件与算子支持

- 通过优化Qwen3.5 Dense ACLGraph的融合算子并简化310P的RMSNormGated路径，改进了310P支持。 [#9104](https://github.com/vllm-project/vllm-ascend/issues/9104) [#9489](https://github.com/vllm-project/vllm-ascend/issues/9489)

#### v0.18.0 · 2026.04.30（中文）

##### 文档

- 更新了 Qwen3.5 用户指南。 [#7934](https://github.com/vllm-project/vllm-ascend/issues/7934)

#### v0.19.1rc1 · 2026.04.30（中文）

##### 功能特性

- Qwen3.5 MoE Flash Comm ：支持Qwen3.5 MoE模型的Flash Comm（ [#7486](https://github.com/vllm-project/vllm-ascend/issues/7486) ）

##### 硬件和算子支持

- Qwen3.5模型适配与主线同步( [#8009](https://github.com/vllm-project/vllm-ascend/issues/8009) )
- 支持Qwen3.5融合MoE中的共享专家路径( [#7674](https://github.com/vllm-project/vllm-ascend/issues/7674) )

##### 性能

- 优化Qwen3Next/Qwen3.5预填充阶段的主机-设备同步问题( [#7967](https://github.com/vllm-project/vllm-ascend/issues/7967) )

##### 文档

- Qwen3.5用户指南更新 ( [#7866](https://github.com/vllm-project/vllm-ascend/issues/7866) )

##### 其他

- Qwen3.5 MoE高并发 ：修复dp>1时高并发下Qwen3.5 MoE FC1错误 ( [#8396](https://github.com/vllm-project/vllm-ascend/issues/8396) )
- Qwen3.5 MoE Flash通信 ：修复A2上Qwen3.5 MoE flash comm v1中mtp层共享专家形状错误 ( [#7683](https://github.com/vllm-project/vllm-ascend/issues/7683) )

#### v0.18.0rc1 · 2026.04.01（中文）

##### 性能

- 通过预构建块元数据，优化了Qwen3.5和Qwen3-Next GDN预填充路径，减少了主机-设备同步开销。 [#7487](https://github.com/vllm-project/vllm-ascend/issues/7487)

#### v0.17.0rc1 · 2026.03.15（中文）

##### 功能特性

- 从此版本开始支持Qwen3.5。

##### 其他

- 修复了由Qwen3.5上错误的KV缓存reshape引起的精度问题。 [#7209](https://github.com/vllm-project/vllm-ascend/issues/7209)
- 通过将torchnpu.npurecurrentgateddeltarule替换为fusedrecurrentgateddeltarule修复了Qwen3.5模型。 [#7109](https://github.com/vllm-project/vllm-ascend/issues/7109)

### Qwen3-Omni

#### v0.23.0 · 2026.08.16（中文）

##### 亮点

- 模型与硬件覆盖 ：扩展了对GLM-5.2、GLM-4.7-Flash、Qwen3.5/Qwen3.6、Qwen3-ASR、Qwen3-Omni、百灵MoE、Gemma4、Step3和MiniMax 2.x等模型在A2、A3、Ascend 950和Atlas 300I DUO上的支持与部署指南。GLM-5.2在Atlas 800 A3上支持长达100万token的长序列推理。 [#8657](https://github.com/vllm-project/vllm-ascend/issues/8657) [#9560](https://github.com/vllm-project/vllm-ascend/issues/9560) [#10441](https://github.com/vllm-project/vllm-ascend/issues/10441) [#10697](https://github.com/vllm-project/vllm-ascend/issues/10697) [#11091](https://github.com/vllm-project/vllm-ascend/issues/11091) [#11264](https://github.com/vllm-project/vllm-ascend/issues/11264) [#12115](https://github.com/vllm-project/vllm-ascend/issues/12115)

##### 稳定性与错误修复

- 修复了Qwen MoE路由溢出和共享专家门控失败、Qwen3-Omni ModelSlim W8A8检查点加载以及Atlas 300I DUO上Qwen3-VL旋转嵌入复制竞争问题。 [#11391](https://github.com/vllm-project/vllm-ascend/issues/11391) [#11730](https://github.com/vllm-project/vllm-ascend/issues/11730) [#12321](https://github.com/vllm-project/vllm-ascend/issues/12321) [#11679](https://github.com/vllm-project/vllm-ascend/issues/11679) [#12132](https://github.com/vllm-project/vllm-ascend/issues/12132)

#### v0.23.0rc1 · 2026.07.20（中文）

##### 稳定性与错误修复

- 修复了由权重名称不匹配和未量化嵌入元数据导致的Qwen3-Omni ModelSlim W8A8检查点加载失败问题。 [#12321](https://github.com/vllm-project/vllm-ascend/issues/12321)

#### v0.18.0 · 2026.04.30（中文）

##### 性能

- Qwen3-Omni性能 : Qwen3-Omni量化适配与优化现已可用。 [#6828](https://github.com/vllm-project/vllm-ascend/issues/6828)

##### 依赖项

- CANN ：升级到8.5.1。 注意： 使用FabricMem模式的AscendStoreConnector、310P设备支持和Qwen3-Omni模型需要将CANN版本升级到9.0.0，如果您需要这些功能，请手动升级。

#### v0.19.1rc1 · 2026.04.30（中文）

##### 文档

- Qwen3-Omni-30B-A3B-Thinking文档 ( [#8628](https://github.com/vllm-project/vllm-ascend/issues/8628) )

#### v0.16.0rc1 · 2026.03.09（中文）

##### 亮点

- Qwen3-Omni量化适配与优化现已可用。 [#6828](https://github.com/vllm-project/vllm-ascend/issues/6828)

#### v0.11.0 · 2025.12.16（中文）

##### 亮点

- 现在支持更多新模型，例如 Qwen3-omni、DeepSeek OCR、PaddleOCR、OpenCUA。

#### v0.12.0rc1 · 2025.12.13（中文）

##### 亮点

- 现已支持更多新模型，例如 Qwen3-omni、DeepSeek OCR、PaddleOCR、OpenCUA。

### Qwen3-ASR

#### v0.23.0 · 2026.08.16（中文）

##### 亮点

- 模型与硬件覆盖 ：扩展了对GLM-5.2、GLM-4.7-Flash、Qwen3.5/Qwen3.6、Qwen3-ASR、Qwen3-Omni、百灵MoE、Gemma4、Step3和MiniMax 2.x等模型在A2、A3、Ascend 950和Atlas 300I DUO上的支持与部署指南。GLM-5.2在Atlas 800 A3上支持长达100万token的长序列推理。 [#8657](https://github.com/vllm-project/vllm-ascend/issues/8657) [#9560](https://github.com/vllm-project/vllm-ascend/issues/9560) [#10441](https://github.com/vllm-project/vllm-ascend/issues/10441) [#10697](https://github.com/vllm-project/vllm-ascend/issues/10697) [#11091](https://github.com/vllm-project/vllm-ascend/issues/11091) [#11264](https://github.com/vllm-project/vllm-ascend/issues/11264) [#12115](https://github.com/vllm-project/vllm-ascend/issues/12115)

##### 硬件与算子支持

- 扩展了Atlas 300I DUO对Qwen3.5、Qwen3.6、Qwen3-ASR、Qwen3-VL、量化MoE路径、MTP和图执行的支持。 [#7674](https://github.com/vllm-project/vllm-ascend/issues/7674) [#7725](https://github.com/vllm-project/vllm-ascend/issues/7725) [#10309](https://github.com/vllm-project/vllm-ascend/issues/10309) [#12115](https://github.com/vllm-project/vllm-ascend/issues/12115) [#13262](https://github.com/vllm-project/vllm-ascend/issues/13262) †

#### v0.23.0rc1 · 2026.07.20（中文）

##### 亮点

- 扩展模型支持 ：在 A2 和 A3 上增加了 GLM-5.2 支持，并为 Qwen3-ASR-1.7B、Qwen3.5 和 Qwen3.6 增加了 Ascend 310P 支持。 [#10441](https://github.com/vllm-project/vllm-ascend/issues/10441) [#11264](https://github.com/vllm-project/vllm-ascend/issues/11264) [#10257](https://github.com/vllm-project/vllm-ascend/issues/10257) [#12115](https://github.com/vllm-project/vllm-ascend/issues/12115)

### Qwen3-VL

#### v0.23.0 · 2026.08.16（中文）

##### 硬件与算子支持

- 扩展了Atlas 300I DUO对Qwen3.5、Qwen3.6、Qwen3-ASR、Qwen3-VL、量化MoE路径、MTP和图执行的支持。 [#7674](https://github.com/vllm-project/vllm-ascend/issues/7674) [#7725](https://github.com/vllm-project/vllm-ascend/issues/7725) [#10309](https://github.com/vllm-project/vllm-ascend/issues/10309) [#12115](https://github.com/vllm-project/vllm-ascend/issues/12115) [#13262](https://github.com/vllm-project/vllm-ascend/issues/13262) †

##### 稳定性与错误修复

- 修复了Qwen MoE路由溢出和共享专家门控失败、Qwen3-Omni ModelSlim W8A8检查点加载以及Atlas 300I DUO上Qwen3-VL旋转嵌入复制竞争问题。 [#11391](https://github.com/vllm-project/vllm-ascend/issues/11391) [#11730](https://github.com/vllm-project/vllm-ascend/issues/11730) [#12321](https://github.com/vllm-project/vllm-ascend/issues/12321) [#11679](https://github.com/vllm-project/vllm-ascend/issues/11679) [#12132](https://github.com/vllm-project/vllm-ascend/issues/12132)

#### v0.23.0rc1 · 2026.07.20（中文）

##### 稳定性与错误修复

- 修复了Qwen3-VL在Ascend 310P上的旋转嵌入复制竞争问题，并恢复了特定设备的VisionTransformer补丁。 [#11679](https://github.com/vllm-project/vllm-ascend/issues/11679) [#12132](https://github.com/vllm-project/vllm-ascend/issues/12132)
- 修复了310P Qwen3-Embedding和Qwen3-VL-Embedding运行失败的问题。 [#9854](https://github.com/vllm-project/vllm-ascend/issues/9854)

#### v0.21.0rc1 · 2026.06.16（中文）

##### 稳定性与错误修复

- 修复了310P上Qwen3-Embedding和Qwen3-VL-Embedding运行失败问题。 [#9854](https://github.com/vllm-project/vllm-ascend/issues/9854)

#### v0.18.0 · 2026.04.30（中文）

##### 性能

- Qwen3-VL性能 : Qwen3-VL通过Flash Comm V1和 qkvrmsnormmrope 支持获得更强的多模态算子能力，并通过aclnn BatchMatMulV2使卷积计算速度提升2.7倍，支持EAGLE推测解码。 [#7893](https://github.com/vllm-project/vllm-ascend/issues/7893) [#7852](https://github.com/vllm-project/vllm-ascend/issues/7852) [#7017](https://github.com/vllm-project/vllm-ascend/issues/7017) [#6327](https://github.com/vllm-project/vllm-ascend/issues/6327)

##### 其他

- 修复了 Qwen3-VL 的权重映射器错误。 [#7868](https://github.com/vllm-project/vllm-ascend/issues/7868)

#### v0.19.1rc1 · 2026.04.30（中文）

##### 功能特性

- Qwen3-VL的Flash Comm V1 ：支持Qwen3-VL多模态模型的Flash Comm V1（ [#7897](https://github.com/vllm-project/vllm-ascend/issues/7897) ）
- 在xlite后端支持Qwen3VLMoeForConditionalGeneration（ [#8046](https://github.com/vllm-project/vllm-ascend/issues/8046) ）
- Qwen3-VL支持 ：支持Qwen3-VL的kvrmsnormmrope( [#7762](https://github.com/vllm-project/vllm-ascend/issues/7762) )

##### 其他

- 修复qwen3-vl的weightsmapper错误 ( [#7869](https://github.com/vllm-project/vllm-ascend/issues/7869) )

#### v0.16.0rc1 · 2026.03.09（中文）

##### 性能

- 更快的卷积计算使Qwen3-VL模型的TTFT提升0.95%，吞吐量提升0.59%。 [#7017](https://github.com/vllm-project/vllm-ascend/issues/7017)

#### v0.15.0rc1 · 2026.02.27（中文）

##### 亮点

- Qwen3-VL-MoE EAGLE 支持 ：为 Qwen3-VL-MoE 模型添加了 EAGLE 推测解码支持。 [#6327](https://github.com/vllm-project/vllm-ascend/issues/6327)

#### v0.14.0rc1 · 2026.01.26（中文）

##### 亮点

- 支持 Qwen3vl 的 Eagle3 推测解码。 [#4848](https://github.com/vllm-project/vllm-ascend/issues/4848)

#### v0.13.0rc2 · 2026.01.24（中文）

##### 其他

- Flashcomm1功能现在可与qwen3-vl配合使用 [#5848](https://github.com/vllm-project/vllm-ascend/issues/5848)

#### v0.11.0 · 2025.12.16（中文）

##### 亮点

- 修复了 qwen3-vl 的精度错误。 [#4811](https://github.com/vllm-project/vllm-ascend/issues/4811)

##### 其他

- 修复了高并发下 qwen3-vl-moe 的错误。 [#4658](https://github.com/vllm-project/vllm-ascend/issues/4658)

#### v0.11.0rc0 · 2025.09.30（中文）

##### 亮点

- 现在支持Qwen3-vl。 [#3103](https://github.com/vllm-project/vllm-ascend/issues/3103)

### Qwen3-Next

#### v0.23.0 · 2026.08.16（中文）

##### 性能

- 移除了Qwen3-Next和Qwen3.5路径中的预填充主机-设备同步。该优化自动应用于这些模型。 [#7967](https://github.com/vllm-project/vllm-ascend/issues/7967)

#### v0.23.0rc1 · 2026.07.20（中文）

##### 稳定性与错误修复

- 修复了使用MTP/EAGLE的Qwen3-Next、Qwen3.5及其他混合Mamba模型的静默前缀缓存输出损坏和块表溢出问题，以及310P上Mamba对齐后处理挂起问题。 [#11353](https://github.com/vllm-project/vllm-ascend/issues/11353) [#11659](https://github.com/vllm-project/vllm-ascend/issues/11659) [#12038](https://github.com/vllm-project/vllm-ascend/issues/12038)

#### v0.18.0 · 2026.04.30（中文）

##### 硬件与算子支持

- 为Qwen3-Next添加AscendC casualconv1dfn算子。 [#6661](https://github.com/vllm-project/vllm-ascend/issues/6661)

##### 性能

- Qwen3.x性能 : [实验性]通过支持全图模式、PD分离、mamba预填充前缀缓存和flashcomm1、预构建chunk元数据以减少主机-设备同步开销，以及多项算子性能优化（包括 chunkgateddeltarule 、 chunkfwdkernelo 、 solvetril 、 recomputewufwdkernel 、 splitqkvrmsnormmrope 等），优化了Qwen3.x和Qwen3-Next的性能。@LoganJane @shaopeng-666 @ppppeng @SunnyLee151064 @hust17yixuan @Toneymiller @linfeng-yuan [#7487](https://github.com/vllm-project/vllm-ascend/issues/7487) [#6830](https://github.com/vllm-project/vllm-ascend/issues/6830) [#7506](https://github.com/vllm-project/vllm-ascend/issues/7506) [#7796](https://github.com/vllm-project/vllm-ascend/issues/7796) [#7527](https://github.com/vllm-project/vllm-ascend/issues/7527) [#7529](https://github.com/vllm-project/vllm-ascend/issues/7529) [#7495](https://github.com/vllm-project/vllm-ascend/issues/7495) [#7368](https://github.com/vllm-project/vllm-ascend/issues/7368)

#### v0.19.1rc1 · 2026.04.30（中文）

##### 功能特性

- Qwen3-Next混合注意力 ：支持piecewise和fulldecodeonly模式下的Qwen3-next混合注意力( [#7422](https://github.com/vllm-project/vllm-ascend/issues/7422) )

##### 性能

- 优化Qwen3Next/Qwen3.5预填充阶段的主机-设备同步问题( [#7967](https://github.com/vllm-project/vllm-ascend/issues/7967) )

##### 其他

- 修复qwen3-next编译错误 ( [#7936](https://github.com/vllm-project/vllm-ascend/issues/7936) )

#### v0.18.0rc1 · 2026.04.01（中文）

##### 性能

- 通过预构建块元数据，优化了Qwen3.5和Qwen3-Next GDN预填充路径，减少了主机-设备同步开销。 [#7487](https://github.com/vllm-project/vllm-ascend/issues/7487)

#### v0.17.0rc1 · 2026.03.15（中文）

##### 已知问题

- 由于tp权重切分方式变更，Qwen3-Next存在精度问题。将在下一个版本中修复。

#### v0.16.0rc1 · 2026.03.09（中文）

##### 功能特性

- Qwen3-Next现在支持FlashComm1。 [#6830](https://github.com/vllm-project/vllm-ascend/issues/6830)

##### 硬件与算子支持

- 为Qwen3-Next新增了AscendC casualconv1dfn算子。 [#6661](https://github.com/vllm-project/vllm-ascend/issues/6661)

#### v0.13.0 · 2026.02.06（中文）

##### 亮点

- Qwen3-Next ：[实验性]完全支持 Qwen3-Next 系列，包括 80B-A3B-Instruct，支持全图模式、MTP、量化 (W8A8)、NZ 优化和分块预填充。修复了多个精度和稳定性问题。 [#3450](https://github.com/vllm-project/vllm-ascend/issues/3450) [#3572](https://github.com/vllm-project/vllm-ascend/issues/3572) [#3428](https://github.com/vllm-project/vllm-ascend/issues/3428) [#3918](https://github.com/vllm-project/vllm-ascend/issues/3918) [#4058](https://github.com/vllm-project/vllm-ascend/issues/4058) [#4245](https://github.com/vllm-project/vllm-ascend/issues/4245) [#4070](https://github.com/vllm-project/vllm-ascend/issues/4070) [#4477](https://github.com/vllm-project/vllm-ascend/issues/4477) [#4770](https://github.com/vllm-project/vllm-ascend/issues/4770)
- 纯解码模式 ：在fulldecodeonly模式下增加了对Qwen3-Next和DeepSeekv32的支持，并修复了相关bug。 [#3949](https://github.com/vllm-project/vllm-ascend/issues/3949) [#3986](https://github.com/vllm-project/vllm-ascend/issues/3986) [#3763](https://github.com/vllm-project/vllm-ascend/issues/3763)

##### 硬件和算子支持

- 用于Qwen3-Next的Triton chunkgateddeltarule算子 [#4070](https://github.com/vllm-project/vllm-ascend/issues/4070)

##### 性能

- Qwen3-Next 性能 ：[实验性]通过 Triton 算子和优化提升了性能。 [#5664](https://github.com/vllm-project/vllm-ascend/issues/5664) [#5984](https://github.com/vllm-project/vllm-ascend/issues/5984) [#5765](https://github.com/vllm-project/vllm-ascend/issues/5765)

##### 文档

- 新增了多个模型的教程，包括 DeepSeek-V3.2-Exp、Qwen3-Next 以及各种多模态模型

##### 其他

- Qwen3-Next-MTP 精度 ：修复了 Qwen3-Next-MTP 在批量推理时的精度错误。 [#4932](https://github.com/vllm-project/vllm-ascend/issues/4932)

#### v0.14.0rc1 · 2026.01.26（中文）

##### 性能

- 提升了Qwen3-next的性能。 [#5664](https://github.com/vllm-project/vllm-ascend/issues/5664) [#5984](https://github.com/vllm-project/vllm-ascend/issues/5984) [#5765](https://github.com/vllm-project/vllm-ascend/issues/5765)

#### v0.13.0rc2 · 2026.01.24（中文）

##### 其他

- 支持在Qwen3-Next-MTP中使用全图 [#5477](https://github.com/vllm-project/vllm-ascend/issues/5477)

#### v0.13.0rc1 · 2025.12.27（中文）

##### 亮点

- 现在支持 Qwen3-Next MTP 与 chunked prefill [#4770](https://github.com/vllm-project/vllm-ascend/issues/4770) ，请参考 教程

##### 其他

- 修复了 Qwen3-Next-MTP 在批量推理时的精度错误。 [#4932](https://github.com/vllm-project/vllm-ascend/issues/4932)

##### 已知问题

- Qwen3-Next 不支持长序列场景，我们需要根据文档限制 gpu-memory-utilization 来运行 Qwen3-Next。我们将在下一个版本中改进。
- 当输入/输出约为 3.5k/1.5k 时，Qwen3-Next 的功能中断问题已修复，但这引入了性能回退。我们将在下一个版本中修复。 [#5357](https://github.com/vllm-project/vllm-ascend/issues/5357)

#### v0.11.0 · 2025.12.16（中文）

##### 已知问题

- Qwen3-Next doesn't support expert parallelism and MTP features in this release. And it'll be oom if the input is too long. We'll improve it in the next release

##### 核心

- 添加了大量 triton 内核。vLLM Ascend 的性能，尤其是 Qwen3-Next 和 DeepSeek 3.2 的性能得到了提升。请注意，triton 默认未安装和启用，但我们建议在大多数情况下启用它。您可以从 包地址 手动下载并安装。如果您在 X86 上运行 vLLM Ascend，则需要从 源码 自行构建 triton ascend。

#### v0.12.0rc1 · 2025.12.13（中文）

##### 核心

- 新增了大量 triton 内核。vLLM Ascend 的性能，尤其是 Qwen3-Next 和 DeepSeek 3.2 的性能得到了提升。请注意，triton 默认未安装和启用，但我们建议在大多数情况下启用它。您可以从 包地址 手动下载安装。如果您在 X86 上运行 vLLM Ascend，则需要从 源码 自行构建 triton ascend。

#### v0.11.0rc2 · 2025.11.21（中文）

##### 核心

- 修复了 qwen3-next 的一个错误。现在它更加稳定。 [#4025](https://github.com/vllm-project/vllm-ascend/issues/4025)

#### v0.11.0rc1 · 2025.11.10（中文）

##### 已知问题

- When running Qwen3-Next with expert parallelism enabled, please set HCCLBUFFSIZE environment variable to a suitable value, such as 1024.

#### v0.11.0rc0 · 2025.09.30（中文）

##### 其他

- Qwen3-next 现已稳定。 [#3007](https://github.com/vllm-project/vllm-ascend/issues/3007)
- 修复了 v0.10.2 中 Qwen3-next 引入的大量错误。 [#2964](https://github.com/vllm-project/vllm-ascend/issues/2964) [#2781](https://github.com/vllm-project/vllm-ascend/issues/2781) [#3070](https://github.com/vllm-project/vllm-ascend/issues/3070) [#3113](https://github.com/vllm-project/vllm-ascend/issues/3113)

#### v0.10.2rc1 · 2025.09.16（中文）

##### 亮点

- Added support for Qwen3-Next. Please note that the expert parallelism and MTP features do not work with this release. We will be adding support for them soon. Follow the official guide to get started. [#2917](https://github.com/vllm-project/vllm-ascend/issues/2917)

##### 已知问题

- Qwen3-Next 的 HBM 使用量高于预期。这是一个 已知问题 ，我们正在处理中。您可以根据并行配置设置合适的 maxmodellen 和 gpumemoryutilization 值以避免 OOM 错误。

### Qwen3 MoE

#### v0.26.0rc1 · 2026.09.03（中文）

##### 已知问题

- Qwen3-235B-A22B W8A8和Qwen3-235B W4A8在某些A3 PD混合aclgraph场景下性能可能低于基线。 [#15296](https://github.com/vllm-project/vllm-ascend/issues/15296)

#### v0.23.0 · 2026.08.16（中文）

##### 已知问题

- Qwen3-30B-A3B 浮点部署报告存在单批次性能回退。 [#12337](https://github.com/vllm-project/vllm-ascend/issues/12337)

#### v0.23.0rc1 · 2026.07.20（中文）

##### 已知问题

- 在报告的TP4全图配置中，Qwen3-30B-A3B浮点服务在批大小为1时可能出现1-2毫秒的TPOT回退。 [#12337](https://github.com/vllm-project/vllm-ascend/issues/12337)

#### v0.16.0rc1 · 2026.03.09（中文）

##### 功能特性

- Xlite Qwen3 MoE现在支持数据并行。 [#6715](https://github.com/vllm-project/vllm-ascend/issues/6715)

#### v0.13.0 · 2026.02.06（中文）

##### 已知问题

- Qwen3-235B 、 Qwen3-480B 在 prefill-decode 场景和 EP=32 场景下的性能未达到预期。我们将在下一个补丁版本中进行改进。

#### v0.14.0rc1 · 2026.01.26（中文）

##### 功能特性

- Xlite 后端现在支持 Qwen3 MoE。 [#5951](https://github.com/vllm-project/vllm-ascend/issues/5951)

#### v0.10.2rc1 · 2025.09.16（中文）

##### 其他

- 通过 rope 算子更新提升了 Qwen3 MoE 模型的性能。 [#2571](https://github.com/vllm-project/vllm-ascend/issues/2571)

#### v0.10.1rc1 · 2025.09.04（中文）

##### 核心

- Qwen3 MoE/Qwen2.5现已支持torchair图模式。 [#2403](https://github.com/vllm-project/vllm-ascend/issues/2403)

#### v0.9.1 · 2025.09.03（中文）

##### 变更

- 为 Qwen3-moe 模型添加 EPLB 支持。 [#2000](https://github.com/vllm-project/vllm-ascend/issues/2000)

#### v0.9.1rc3 · 2025.08.22（中文）

##### 核心

- 修复 qwen3 moe 与 aclgraph 不兼容的问题 [#2478](https://github.com/vllm-project/vllm-ascend/issues/2478)

#### v0.10.0rc1 · 2025.08.07（中文）

##### 核心

- vLLM Ascend现已支持w8a8量化的Kimi-K2、Qwen3-Coder和GLM-4.5，请按照此 教程 尝试。 [#2162](https://github.com/vllm-project/vllm-ascend/issues/2162)

##### 其他

- 序列并行适用于 Qwen3 MoE。 [#2209](https://github.com/vllm-project/vllm-ascend/issues/2209)

##### 已知问题

- 在 Qwen3 MoE 中，SP 无法集成到 Aclgraph 中。 [#2246](https://github.com/vllm-project/vllm-ascend/issues/2246)

#### v0.9.1rc2 · 2025.08.04（中文）

##### 模型改进

- Qwen3 MoE支持改进及图模式和DP相关的错误修复： [#1940](https://github.com/vllm-project/vllm-ascend/issues/1940) [#2006](https://github.com/vllm-project/vllm-ascend/issues/2006) [#1832](https://github.com/vllm-project/vllm-ascend/issues/1832)

##### 已知问题

- Qwen3 MoE 在启用 ep 时，由于 bincount 错误，tp 下的 aclgraph 模式失败。 [#2226](https://github.com/vllm-project/vllm-ascend/issues/2226)

#### v0.9.2rc1 · 2025.07.11（中文）

##### 亮点

- aclgraph 模式现在可以与 MoE 模型一起使用。目前，仅 Qwen3 MoE 经过了充分测试。 [#1381](https://github.com/vllm-project/vllm-ascend/issues/1381)

#### v0.7.3.post1 · 2025.05.29（中文）

##### 亮点

- 现已支持Qwen3和Qwen3MOE。Qwen3的性能和准确性已得到充分测试，您可以立即尝试。建议使用Mindie Turbo来提升Qwen3的性能。 [#903](https://github.com/vllm-project/vllm-ascend/issues/903) [#915](https://github.com/vllm-project/vllm-ascend/issues/915)

#### v0.8.4rc2 · 2025.04.29（中文）

##### 亮点

- 现已支持 Qwen3 和 Qwen3MOE。请参考 官方文档 运行快速演示。 [#709](https://github.com/vllm-project/vllm-ascend/issues/709)

### Qwen3

#### v0.26.0rc1 · 2026.09.03（中文）

##### 亮点

- DeepSeek V4 DSpark ：重构了DSv4 DSpark投机解码，支持对齐的SP处理和Qwen3 DSpark的QuaRot权重支持。 [#11431](https://github.com/vllm-project/vllm-ascend/issues/11431) [#12662](https://github.com/vllm-project/vllm-ascend/issues/12662)

#### v0.23.0rc1 · 2026.07.20（中文）

##### 稳定性与错误修复

- 修复了310P Qwen3-Embedding和Qwen3-VL-Embedding运行失败的问题。 [#9854](https://github.com/vllm-project/vllm-ascend/issues/9854)

#### v0.21.0rc1 · 2026.06.16（中文）

##### 稳定性与错误修复

- 修复了310P上Qwen3-Embedding和Qwen3-VL-Embedding运行失败问题。 [#9854](https://github.com/vllm-project/vllm-ascend/issues/9854)

#### v0.17.0rc1 · 2026.03.15（中文）

##### 其他

- 修复了使用LoRA运行Qwen3-Reranker-0.6B时的错误。 [#7156](https://github.com/vllm-project/vllm-ascend/issues/7156)

#### v0.11.0 · 2025.12.16（中文）

##### 已知问题

- DeepSeek 3/3.1 和 Qwen3 无法在 FULLDECODEONLY 图模式下工作。我们将在下一个版本中修复。 [#4990](https://github.com/vllm-project/vllm-ascend/issues/4990)

#### v0.12.0rc1 · 2025.12.13（中文）

##### 已知问题

- DeepSeek 3/3.1 和 Qwen3 在 FULLDECODEONLY 图模式下无法正常工作。我们将在下一个版本中修复。 [#4990](https://github.com/vllm-project/vllm-ascend/issues/4990)

#### v0.11.0rc1 · 2025.11.10（中文）

##### 亮点

- 现已支持 W4A4 量化。 [#3427](https://github.com/vllm-project/vllm-ascend/issues/3427) 官方教程可在 singlenpuqwen3w4a4 查看。

##### 核心

- Qwen3和Deepseek V3系列模型的性能得到提升。

#### v0.10.2rc1 · 2025.09.16（中文）

##### 其他

- 新增了 Qwen3 的 Prefill-Decode 分离官方文档。 [#2751](https://github.com/vllm-project/vllm-ascend/issues/2751)
- 通过 flashcommv1 提升了 Qwen3 稠密模型的性能。设置 VLLMASCENDENABLEDENSEOPTIMIZE=1 和 VLLMASCENDENABLEFLASHCOMM=1 以启用。 [#2779](https://github.com/vllm-project/vllm-ascend/issues/2779)
- 通过预取功能提升了 Qwen3 稠密模型的性能。设置 VLLMASCENDENABLEPREFETCHMLP=1 以启用。 [#2816](https://github.com/vllm-project/vllm-ascend/issues/2816)

#### v0.10.0rc1 · 2025.08.07（中文）

##### 其他

- 在自定义模型中使用 AddRmsNormQuant 算子优化 Qwen3 性能。 [#1806](https://github.com/vllm-project/vllm-ascend/issues/1806)

#### v0.9.1rc2 · 2025.08.04（中文）

##### 模型改进

- Qwen3在rmsnorm/rope/mlp算子上的性能改进： [#1545](https://github.com/vllm-project/vllm-ascend/issues/1545) [#1719](https://github.com/vllm-project/vllm-ascend/issues/1719) [#1726](https://github.com/vllm-project/vllm-ascend/issues/1726) [#1782](https://github.com/vllm-project/vllm-ascend/issues/1782) [#1745](https://github.com/vllm-project/vllm-ascend/issues/1745)

#### v0.9.2rc1 · 2025.07.11（中文）

##### 亮点

- 池化模型现在可以与 V1 引擎一起使用。您可以尝试使用 Qwen3 嵌入模型。 [#1359](https://github.com/vllm-project/vllm-ascend/issues/1359)

#### v0.7.3.post1 · 2025.05.29（中文）

##### 亮点

- 现已支持Qwen3和Qwen3MOE。Qwen3的性能和准确性已得到充分测试，您可以立即尝试。建议使用Mindie Turbo来提升Qwen3的性能。 [#903](https://github.com/vllm-project/vllm-ascend/issues/903) [#915](https://github.com/vllm-project/vllm-ascend/issues/915)

#### v0.8.4rc2 · 2025.04.29（中文）

##### 亮点

- 现已支持 Qwen3 和 Qwen3MOE。请参考 官方文档 运行快速演示。 [#709](https://github.com/vllm-project/vllm-ascend/issues/709)

### Qwen2.5

#### v0.16.0rc1 · 2026.03.09（中文）

##### 其他

- 修复 Qwen2.5VL 精度问题。 [#6975](https://github.com/vllm-project/vllm-ascend/issues/6975)

#### v0.13.0 · 2026.02.06（中文）

##### 已知问题

- 由于 transformers 包的升级，某些模型的量化权重（例如 qwen2.5vl 、 gemma3 、 minimax ）可能无法正常工作。我们将在下一个补丁版本中修复。 [#6302](https://github.com/vllm-project/vllm-ascend/issues/6302)

#### v0.11.0rc3 · 2025.12.03（中文）

##### 其他

- 修复了 qwen2.5 vl 在高并发下运行时的功能错误。 [#4553](https://github.com/vllm-project/vllm-ascend/issues/4553)

#### v0.11.0rc1 · 2025.11.10（中文）

##### 已知问题

- The accuracy of qwen2.5 VL is not very good. This is a bug caused by CANN, we will fix it soon.

#### v0.10.2rc1 · 2025.09.16（中文）

##### 核心

- Qwen2.5 VL 现在可与量化配合使用。 [#2778](https://github.com/vllm-project/vllm-ascend/issues/2778)

#### v0.10.1rc1 · 2025.09.04（中文）

##### 核心

- Qwen3 MoE/Qwen2.5现已支持torchair图模式。 [#2403](https://github.com/vllm-project/vllm-ascend/issues/2403)

#### v0.9.1rc2 · 2025.08.04（中文）

##### 模型改进

- Qwen2.5 VL通过mrope/填充机制改进： [#1261](https://github.com/vllm-project/vllm-ascend/issues/1261) [#1705](https://github.com/vllm-project/vllm-ascend/issues/1705) [#1929](https://github.com/vllm-project/vllm-ascend/issues/1929) [#2007](https://github.com/vllm-project/vllm-ascend/issues/2007)

#### v0.9.1rc1 · 2025.06.22（中文）

##### 实验性

- 此版本实验性支持 Atlas 300I 系列（功能测试已通过 Qwen2.5-7b-instruct/Qwen2.5-0.5b/Qwen3-0.6B/Qwen3-4B/Qwen3-8B）。 [#1333](https://github.com/vllm-project/vllm-ascend/issues/1333)

#### v0.9.0rc1 · 2025.06.09（中文）

##### 模型

- Qwen2.5 VL 现在支持 V1 引擎。 [#736](https://github.com/vllm-project/vllm-ascend/issues/736)

#### v0.7.3.post1 · 2025.05.29（中文）

##### 错误修复

- Qwen2.5-VL 现在可用于RLHF场景。 [#928](https://github.com/vllm-project/vllm-ascend/issues/928)

##### 文档

- 更新了Qwen2.5和Qwen2.5-VL的基准测试文档。 [#792](https://github.com/vllm-project/vllm-ascend/issues/792)

#### v0.7.3 · 2025.05.08（中文）

##### 模型

- 提升了Qwen2 vl和Qwen2.5 vl的性能。 [#702](https://github.com/vllm-project/vllm-ascend/issues/702)

### Qwen2-VL

#### v0.7.3 · 2025.05.08（中文）

##### 模型

- 提升了Qwen2 vl和Qwen2.5 vl的性能。 [#702](https://github.com/vllm-project/vllm-ascend/issues/702)

#### v0.8.5rc1 · 2025.05.06（中文）

##### 亮点

- 优化 Qwen2 VL 和 Qwen 2.5 VL [#701](https://github.com/vllm-project/vllm-ascend/issues/701)

#### v0.7.3rc2 · 2025.03.29（中文）

##### 模型

- 通过优化patch嵌入（Conv3D）提升了Qwen2-vl的性能。 [#398](https://github.com/vllm-project/vllm-ascend/issues/398)

#### v0.7.3rc1 · 2025.03.14（中文）

##### 模型

- 提升了Qwen2-VL的性能。 [#241](https://github.com/vllm-project/vllm-ascend/issues/241)

## GLM

### GLM-5.2

#### v0.30.0rc1 · 2026.10.11（中文）

##### 亮点

- GLM-5.3 ：为 GLM-5.3-Flash 启用稀疏 SFA C8（INT8 packed KV cache），为 GLM-5.2 启用 indexer MXFP4，修复了 GLM MRV2 问题以及 GLM-5.2 DSpark 序列长度/每请求 FIA 边界，修复了 GLM-5.3-Flash 小 slot page 膨胀问题，并为 GLM-5.3 回合了始终开启的推理能力。 [#17115](https://github.com/vllm-project/vllm-ascend/issues/17115) [#17949](https://github.com/vllm-project/vllm-ascend/issues/17949) [#18060](https://github.com/vllm-project/vllm-ascend/issues/18060) [#17613](https://github.com/vllm-project/vllm-ascend/issues/17613) [#17571](https://github.com/vllm-project/vllm-ascend/issues/17571) [#17545](https://github.com/vllm-project/vllm-ascend/issues/17545) [#17876](https://github.com/vllm-project/vllm-ascend/issues/17876)

##### 功能特性

- 新增支持 PP 和 DSpark 的 GLM-5.2 V2 稀疏 KV 卸载，以及用于稀疏 KV cache 卸载的融合量化 lightning indexer manage 算子。 [#17900](https://github.com/vllm-project/vllm-ascend/issues/17900) [#17444](https://github.com/vllm-project/vllm-ascend/issues/17444)

##### 文档

- 新增 DeepSeek V4.1 Flash A3 PD 部署指南，并记录了 DSV4-Flash/Pro 和 GLM-5.2 的 W4A4C8 量化方案。 [#17099](https://github.com/vllm-project/vllm-ascend/issues/17099) [#17226](https://github.com/vllm-project/vllm-ascend/issues/17226)

##### 稳定性与错误修复

- 修复了 GLM MRV2 问题、GLM-5.2 DSpark 序列长度/每请求 FIA 边界，以及 GLM-5.3-Flash 小槽位页膨胀问题。 [#17613](https://github.com/vllm-project/vllm-ascend/issues/17613) [#17571](https://github.com/vllm-project/vllm-ascend/issues/17571) [#17545](https://github.com/vllm-project/vllm-ascend/issues/17545)

#### v0.26.0rc1 · 2026.09.03（中文）

##### 亮点

- GLM-5.2 / DeepSeek V4 Flash 0731 / DeepSeek V4 Pro 0813精度和性能 ：解决了GLM-5.2 DSpark接受率回退和DeepSeek V4 Flash-0731 / Pro-0813精度问题（推理努力对齐、路由SwiGLU限制和前端行为），并跨层重用DSV4压缩器元数据以提升性能。 [#12262](https://github.com/vllm-project/vllm-ascend/issues/12262) [#13531](https://github.com/vllm-project/vllm-ascend/issues/13531) [#13993](https://github.com/vllm-project/vllm-ascend/issues/13993) [#14074](https://github.com/vllm-project/vllm-ascend/issues/14074) [#14397](https://github.com/vllm-project/vllm-ascend/issues/14397) [#14624](https://github.com/vllm-project/vllm-ascend/issues/14624) [#14994](https://github.com/vllm-project/vllm-ascend/issues/14994)

##### 文档

- 更新了DeepSeek-V4、GLM-5.2、Kimi-K2.x和Gemma4模型部署指南。 [#11525](https://github.com/vllm-project/vllm-ascend/issues/11525) [#11534](https://github.com/vllm-project/vllm-ascend/issues/11534) [#11055](https://github.com/vllm-project/vllm-ascend/issues/11055)

##### 稳定性与错误修复

- 修复了GLM-5.2 DSpark W8A8 eager模式接受问题。 [#12262](https://github.com/vllm-project/vllm-ascend/issues/12262)

#### v0.23.0 · 2026.08.16（中文）

##### 亮点

- 模型与硬件覆盖 ：扩展了对GLM-5.2、GLM-4.7-Flash、Qwen3.5/Qwen3.6、Qwen3-ASR、Qwen3-Omni、百灵MoE、Gemma4、Step3和MiniMax 2.x等模型在A2、A3、Ascend 950和Atlas 300I DUO上的支持与部署指南。GLM-5.2在Atlas 800 A3上支持长达100万token的长序列推理。 [#8657](https://github.com/vllm-project/vllm-ascend/issues/8657) [#9560](https://github.com/vllm-project/vllm-ascend/issues/9560) [#10441](https://github.com/vllm-project/vllm-ascend/issues/10441) [#10697](https://github.com/vllm-project/vllm-ascend/issues/10697) [#11091](https://github.com/vllm-project/vllm-ascend/issues/11091) [#11264](https://github.com/vllm-project/vllm-ascend/issues/11264) [#12115](https://github.com/vllm-project/vllm-ascend/issues/12115)

##### 文档

- 更新了 Ascend 950 DeepSeek-V3.1/V3.2 和 GLM-5.2 的部署指南。 [#12937](https://github.com/vllm-project/vllm-ascend/issues/12937) † [#13043](https://github.com/vllm-project/vllm-ascend/issues/13043) †

##### 已知问题

- GLM-5.2 1M 上下文部署仅在 Atlas 800 A3 上验证过；A2 系列未针对 1M 上下文进行验证。
- 对于使用稀疏闪存注意力（SFA）的模型（包括 DeepSeek-V3.2、GLM-5.1 和 GLM-5.2）的 P/D 分离部署，必须在预填充节点和解码节点上同时启用 DCP 或同时禁用。不对称的 DCP 配置可能导致精度问题。 [#14322](https://github.com/vllm-project/vllm-ascend/issues/14322) †
- 在 v0.23.0 中，将 GLM-5.2 DCP 与稀疏闪存注意力 C8（ enablesparsesfac8 ）结合使用存在已知问题，包括性能下降，因此不建议使用。 [#14011](https://github.com/vllm-project/vllm-ascend/issues/14011) †
- 启用 enablesparsesfac8 的 GLM-5.2-W4A8C8 P/D 分离部署在重复运行中可能显示 GPQA 精度波动约 2-3 个百分点。 [#14378](https://github.com/vllm-project/vllm-ascend/issues/14378)

#### v0.23.0rc1 · 2026.07.20（中文）

##### 亮点

- 扩展模型支持 ：在 A2 和 A3 上增加了 GLM-5.2 支持，并为 Qwen3-ASR-1.7B、Qwen3.5 和 Qwen3.6 增加了 Ascend 310P 支持。 [#10441](https://github.com/vllm-project/vllm-ascend/issues/10441) [#11264](https://github.com/vllm-project/vllm-ascend/issues/11264) [#10257](https://github.com/vllm-project/vllm-ascend/issues/10257) [#12115](https://github.com/vllm-project/vllm-ascend/issues/12115)

##### 文档

- 添加了 Kimi 2.6 和 GLM5.2 的文档。 [#9969](https://github.com/vllm-project/vllm-ascend/issues/9969) [#10544](https://github.com/vllm-project/vllm-ascend/issues/10544)

#### v0.22.1rc1 · 2026.06.30（中文）

##### 文档

- 添加了 Kimi 2.6 和 GLM5.2 的文档。 [#9969](https://github.com/vllm-project/vllm-ascend/issues/9969) [#10544](https://github.com/vllm-project/vllm-ascend/issues/10544)

### GLM-5.1

#### v0.26.0rc1 · 2026.09.03（中文）

##### 已知问题

- GLM5.1-W4A4C8-mxfp4在Ascend 950上可能因CPU绑定和负载均衡效应出现性能回退。 [#15268](https://github.com/vllm-project/vllm-ascend/issues/15268)

#### v0.23.0 · 2026.08.16（中文）

##### 稳定性与错误修复

- 修复了GLM-5.1 IndexCache权重加载以及GLM-4.7-Flash在MTP和逐层Memcache下首次请求的 IndexError 问题。 [#11363](https://github.com/vllm-project/vllm-ascend/issues/11363) [#11829](https://github.com/vllm-project/vllm-ascend/issues/11829)

##### 已知问题

- 对于使用稀疏闪存注意力（SFA）的模型（包括 DeepSeek-V3.2、GLM-5.1 和 GLM-5.2）的 P/D 分离部署，必须在预填充节点和解码节点上同时启用 DCP 或同时禁用。不对称的 DCP 配置可能导致精度问题。 [#14322](https://github.com/vllm-project/vllm-ascend/issues/14322) †
- DeepSeek V4 Flash 和 GLM-5.1 SWE 基准测试结果可能因间歇性评估失败而有所差异，包括容器崩溃、超时、依赖下载失败和代理非确定性。 [#14326](https://github.com/vllm-project/vllm-ascend/issues/14326)
- 在 Ascend 950 单节点混合 P/D 部署上，GLM-5.1 在 64k 输入/1k 输出且无前缀缓存命中的工作负载下可能产生过多的 P/D 传输开销。 [#14328](https://github.com/vllm-project/vllm-ascend/issues/14328)
- 同时启用 sfac8 和 lic8 的 GLM-5.1 P/D 分离部署在 64k 输入/1k 输出工作负载下报告存在性能回退。 [#14329](https://github.com/vllm-project/vllm-ascend/issues/14329)

#### v0.23.0rc1 · 2026.07.20（中文）

##### 稳定性与错误修复

- 修复了GLM-5.1 IndexCache权重加载以及GLM-4.7-Flash在首次请求时使用MTP和逐层MemCache时出现的 IndexError 。 [#11363](https://github.com/vllm-project/vllm-ascend/issues/11363) [#11829](https://github.com/vllm-project/vllm-ascend/issues/11829)
- 修复了vLLM v0.21.0下GLM5.1-W8A8 MTP加载权重错误。 [#10317](https://github.com/vllm-project/vllm-ascend/issues/10317)

##### 已知问题

- 使用 CANN 9.0.0 时，GLM5.1 1P1D 四机部署在 140k 上下文性能测试期间可能挂起，启用 MC2 的 Kimi-K2.5 在单节点 A3 上可能遇到 OOM。 [#10963](https://github.com/vllm-project/vllm-ascend/issues/10963)
- GLM5/GLM5.1 W4A8 deployments have known issues in some advanced configurations. CANN 9.0 with MC2 can return inaccurate output, FlashComm can fail during model startup, and MTP weight loading can fail in 1P1D A3 deployments. [#9395](https://github.com/vllm-project/vllm-ascend/issues/9395) [#9658](https://github.com/vllm-project/vllm-ascend/issues/9658) [#9655](https://github.com/vllm-project/vllm-ascend/issues/9655)
- GLM-5.1 deployments can hit MoeDistributeDispatchV2 /NPU graph failures when Expert Parallelism is used together with FULL graph mode. The reported workaround is to disable Expert Parallelism for FULL graph mode, or use PIECEWISE/eager mode. [#9503](https://github.com/vllm-project/vllm-ascend/issues/9503)
- GLM-5.1 can hang on the P node in 200k long-sequence 1P1D agent workloads after long-running service, with MoeDistributeDispatchV2 / aclnnMoeDistributeDispatchV4 reporting an AICore timeout. [#9958](https://github.com/vllm-project/vllm-ascend/issues/9958)

#### v0.22.1rc1 · 2026.06.30（中文）

##### 已知问题

- 使用 CANN 9.0.0 时，GLM5.1 1P1D 四机部署在 140K 上下文性能测试期间可能挂起，而启用 MC2 的 Kimi-K2.5 在单节点 A3 上可能遇到 OOM。 [#10963](https://github.com/vllm-project/vllm-ascend/issues/10963)

#### v0.21.0rc1 · 2026.06.16（中文）

##### 稳定性与错误修复

- 修复了vLLM v0.21.0中GLM5.1-W8A8 MTP加载权重错误。 [#10317](https://github.com/vllm-project/vllm-ascend/issues/10317)

##### 已知问题

- GLM5/GLM5.1 W4A8 部署在某些高级配置中存在已知问题。CANN 9.0 搭配 MC2 可能返回不准确的输出，FlashComm 可能在模型启动时失败，MTP 权重加载在 1P1D A3 部署中可能失败。 [#9395](https://github.com/vllm-project/vllm-ascend/issues/9395) [#9658](https://github.com/vllm-project/vllm-ascend/issues/9658) [#9655](https://github.com/vllm-project/vllm-ascend/issues/9655)
- GLM-5.1 部署在同时使用专家并行和 FULL 图模式时，可能遇到 MoeDistributeDispatchV2 /NPU 图失败。已报告的解决方法是针对 FULL 图模式禁用专家并行，或使用 PIECEWISE/eager 模式。 [#9503](https://github.com/vllm-project/vllm-ascend/issues/9503)
- GLM-5.1 在长时间运行服务后，可能在 200K 长序列 1P1D agent 工作负载的 P 节点上挂起， MoeDistributeDispatchV2 / aclnnMoeDistributeDispatchV4 报告 AICore 超时。 [#9958](https://github.com/vllm-project/vllm-ascend/issues/9958)

#### v0.20.2rc1 · 2026.06.03（中文）

##### 已知问题

- GLM5/GLM5.1 W4A8 部署在某些高级配置下存在已知问题。 [#9395](https://github.com/vllm-project/vllm-ascend/issues/9395)
- GLM-5.1 在长时间运行服务后，在 200k 长序列 1P1D agent 工作负载的 P 节点上可能挂起， MoeDistributeDispatchV2 / aclnnMoeDistributeDispatchV4 报告 AICore 超时。 [#9958](https://github.com/vllm-project/vllm-ascend/issues/9958)

#### v0.19.1rc1 · 2026.04.30（中文）

##### 文档

- GLM-5.1模型教程 ( [#8054](https://github.com/vllm-project/vllm-ascend/issues/8054) )

##### 已知问题

- 在单节点（非PD分离）场景下运行GLM-5/GLM-5.1模型时，可能出现错误结果或运行时错误。详情及解决方法请参见 [#8843](https://github.com/vllm-project/vllm-ascend/issues/8843) 。

### GLM-5

#### v0.23.0.post1 · 2026.09.21（中文）

##### 其他变更

- 整合了安装指南、GLM-5/5.2 部署说明、PD 和 310P 注意事项、发布元数据、导航标题、英文注释和中文翻译。 [#15449](https://github.com/vllm-project/vllm-ascend/issues/15449) [#14242](https://github.com/vllm-project/vllm-ascend/issues/14242) [#14338](https://github.com/vllm-project/vllm-ascend/issues/14338) [#14634](https://github.com/vllm-project/vllm-ascend/issues/14634) [#14698](https://github.com/vllm-project/vllm-ascend/issues/14698) [#14713](https://github.com/vllm-project/vllm-ascend/issues/14713) [#14906](https://github.com/vllm-project/vllm-ascend/issues/14906) [#15998](https://github.com/vllm-project/vllm-ascend/issues/15998) [#16106](https://github.com/vllm-project/vllm-ascend/issues/16106) [#14382](https://github.com/vllm-project/vllm-ascend/issues/14382) [#14387](https://github.com/vllm-project/vllm-ascend/issues/14387) [#14436](https://github.com/vllm-project/vllm-ascend/issues/14436) [#14579](https://github.com/vllm-project/vllm-ascend/issues/14579) [#14684](https://github.com/vllm-project/vllm-ascend/issues/14684) [#15534](https://github.com/vllm-project/vllm-ascend/issues/15534) [#16202](https://github.com/vllm-project/vllm-ascend/issues/16202)

#### v0.23.0rc1 · 2026.07.20（中文）

##### 文档

- 为 DeepSeek V3.2 和 GLM5 添加了 DSA-CP 配置文档。 [#9910](https://github.com/vllm-project/vllm-ascend/issues/9910)

##### 已知问题

- GLM5/GLM5.1 W4A8 deployments have known issues in some advanced configurations. CANN 9.0 with MC2 can return inaccurate output, FlashComm can fail during model startup, and MTP weight loading can fail in 1P1D A3 deployments. [#9395](https://github.com/vllm-project/vllm-ascend/issues/9395) [#9658](https://github.com/vllm-project/vllm-ascend/issues/9658) [#9655](https://github.com/vllm-project/vllm-ascend/issues/9655)
- GLM5 W4A8 deployments can see a significantly lower speculative decoding acceptance rate when MTP3 is used together with FlashComm. [#9803](https://github.com/vllm-project/vllm-ascend/issues/9803)

#### v0.21.0rc1 · 2026.06.16（中文）

##### 文档

- 新增了 DeepSeek V3.2 和 GLM5 的 DSA-CP 配置文档。 [#9910](https://github.com/vllm-project/vllm-ascend/issues/9910)

##### 已知问题

- GLM5/GLM5.1 W4A8 部署在某些高级配置中存在已知问题。CANN 9.0 搭配 MC2 可能返回不准确的输出，FlashComm 可能在模型启动时失败，MTP 权重加载在 1P1D A3 部署中可能失败。 [#9395](https://github.com/vllm-project/vllm-ascend/issues/9395) [#9658](https://github.com/vllm-project/vllm-ascend/issues/9658) [#9655](https://github.com/vllm-project/vllm-ascend/issues/9655)
- GLM5 W4A8 部署在同时使用 MTP3 和 FlashComm 时，推测解码接受率可能显著降低。 [#9803](https://github.com/vllm-project/vllm-ascend/issues/9803)

#### v0.20.2rc1 · 2026.06.03（中文）

##### 文档

- 新增了DeepSeek V3.2和GLM5的 enabledsacp 附加配置选项文档。 [#9910](https://github.com/vllm-project/vllm-ascend/issues/9910)

##### 已知问题

- GLM5/GLM5.1 W4A8 部署在某些高级配置下存在已知问题。 [#9395](https://github.com/vllm-project/vllm-ascend/issues/9395)
- GLM5 W4A8 部署在将 MTP3 与 FlashComm 一起使用时，推测解码接受率可能显著降低。 [#9803](https://github.com/vllm-project/vllm-ascend/issues/9803)

#### v0.18.0 · 2026.04.30（中文）

##### 亮点

- GLM5支持 ：[实验性]无需任何代码修改即可支持GLM5模型！

##### 性能

- DeepSeek-V3.2/GLM5性能 : 性能优化，支持W8A8C8量化，并优化KV缓存使用。@yydyzr @ZYang6263 @rjg-lyh @Nagisa125 [#7029](https://github.com/vllm-project/vllm-ascend/issues/7029) [#6610](https://github.com/vllm-project/vllm-ascend/issues/6610)

##### 文档

- 更新了 GLM5 的部署和支持文档，包括参数说明、最佳实践和常见问题解答。 [#7963](https://github.com/vllm-project/vllm-ascend/issues/7963) [#7909](https://github.com/vllm-project/vllm-ascend/issues/7909)

##### 已知问题

- 通过PD架构分别部署GLM5和Deepseek V3.2时，存在概率性输出为空或乱码的问题。 [#8853](https://github.com/vllm-project/vllm-ascend/issues/8853)
- 对于PD分离下D节点采用TP16 DP2并行度的GLM 5/5.1，其GPQA精度未达到标准。 [#8844](https://github.com/vllm-project/vllm-ascend/issues/8844)

#### v0.19.1rc1 · 2026.04.30（中文）

##### 文档

- 包含参数和常见问题的GLM5文档 ( [#7958](https://github.com/vllm-project/vllm-ascend/issues/7958) , [#7850](https://github.com/vllm-project/vllm-ascend/issues/7850) )

##### 其他

- 修复GLM-5使用flashcomm1时w8a8static中quantbias缺失的问题（ [#8220](https://github.com/vllm-project/vllm-ascend/issues/8220) ）

##### 已知问题

- 在单节点（非PD分离）场景下运行GLM-5/GLM-5.1模型时，可能出现错误结果或运行时错误。详情及解决方法请参见 [#8843](https://github.com/vllm-project/vllm-ascend/issues/8843) 。

#### v0.17.0rc1 · 2026.03.15（中文）

##### 其他

- 修复了由旋转量化MTP权重引起的GLM5-W8A8精度问题。 [#7139](https://github.com/vllm-project/vllm-ascend/issues/7139)

##### 已知问题

- GLM5需要transformers==5.2.0，此问题将由 vllm-project/vllm[#30566](https://github.com/vllm-project/vllm-ascend/issues/30566) 解决，不会包含在v0.17.0中。
- GLM5在2节点PD混合部署场景中存在一个问题，当并发数超过8时，推理可能会挂起（已在PR [#7235](https://github.com/vllm-project/vllm-ascend/issues/7235) [#7290](https://github.com/vllm-project/vllm-ascend/issues/7290) 中修复）。

#### v0.16.0rc1 · 2026.03.09（中文）

##### 亮点

- 通过参数化硬编码的MLA维度，现已支持GLM5-W8A8量化。 [#6902](https://github.com/vllm-project/vllm-ascend/issues/6902)

##### 其他

- 修复 GLM5 模型的 mulsadd 融合。 [#6928](https://github.com/vllm-project/vllm-ascend/issues/6928)

#### v0.15.0rc1 · 2026.02.27（中文）

##### 文档

- 增加了 GLM5 教程文档。 [#6709](https://github.com/vllm-project/vllm-ascend/issues/6709) [#6717](https://github.com/vllm-project/vllm-ascend/issues/6717)

### GLM-4.7

#### v0.23.0 · 2026.08.16（中文）

##### 亮点

- 模型与硬件覆盖 ：扩展了对GLM-5.2、GLM-4.7-Flash、Qwen3.5/Qwen3.6、Qwen3-ASR、Qwen3-Omni、百灵MoE、Gemma4、Step3和MiniMax 2.x等模型在A2、A3、Ascend 950和Atlas 300I DUO上的支持与部署指南。GLM-5.2在Atlas 800 A3上支持长达100万token的长序列推理。 [#8657](https://github.com/vllm-project/vllm-ascend/issues/8657) [#9560](https://github.com/vllm-project/vllm-ascend/issues/9560) [#10441](https://github.com/vllm-project/vllm-ascend/issues/10441) [#10697](https://github.com/vllm-project/vllm-ascend/issues/10697) [#11091](https://github.com/vllm-project/vllm-ascend/issues/11091) [#11264](https://github.com/vllm-project/vllm-ascend/issues/11264) [#12115](https://github.com/vllm-project/vllm-ascend/issues/12115)

##### 稳定性与错误修复

- 修复了GLM-5.1 IndexCache权重加载以及GLM-4.7-Flash在MTP和逐层Memcache下首次请求的 IndexError 问题。 [#11363](https://github.com/vllm-project/vllm-ascend/issues/11363) [#11829](https://github.com/vllm-project/vllm-ascend/issues/11829)

#### v0.23.0rc1 · 2026.07.20（中文）

##### 稳定性与错误修复

- 修复了GLM-5.1 IndexCache权重加载以及GLM-4.7-Flash在首次请求时使用MTP和逐层MemCache时出现的 IndexError 。 [#11363](https://github.com/vllm-project/vllm-ascend/issues/11363) [#11829](https://github.com/vllm-project/vllm-ascend/issues/11829)

##### 功能特性

- 增加了GLM4.7-Flash模型支持，使用Flash Attention后端。 [#9560](https://github.com/vllm-project/vllm-ascend/issues/9560)

#### v0.21.0rc1 · 2026.06.16（中文）

##### 功能特性

- 增加了对 GLM4.7-Flash 模型的支持，使用 Flash Attention 后端。 [#9560](https://github.com/vllm-project/vllm-ascend/issues/9560)

#### v0.20.2rc1 · 2026.06.03（中文）

##### 亮点

- Ascend 950 产品与 XLite 量化扩展 ：为 Ascend 950 产品添加了带行并行的 MXFP4 flatquant，并将 XLite 支持扩展到 GLM-4.7 W8A8 量化。 [#9391](https://github.com/vllm-project/vllm-ascend/issues/9391) [#9415](https://github.com/vllm-project/vllm-ascend/issues/9415)

#### v0.18.0 · 2026.04.30（中文）

##### 性能

- GLM4.7-Flash性能 : 为GLM4.7-Flash添加W8A8量化支持。@aipaes [#6492](https://github.com/vllm-project/vllm-ascend/issues/6492)

##### 文档

- 刷新了 Kimi-K2.5、GLM-4.7、DeepSeek-V3.2、MiniMax-M2.5 的部署和模型文档以及 PD 分离指南。 [#7371](https://github.com/vllm-project/vllm-ascend/issues/7371) [#7403](https://github.com/vllm-project/vllm-ascend/issues/7403) [#7292](https://github.com/vllm-project/vllm-ascend/issues/7292) [#7296](https://github.com/vllm-project/vllm-ascend/issues/7296) [#7300](https://github.com/vllm-project/vllm-ascend/issues/7300)

#### v0.19.1rc1 · 2026.04.30（中文）

##### 功能特性

- GLM4.7 C8支持 ：支持GLM4.7的C8（INT8 KV缓存）场景（ [#8174](https://github.com/vllm-project/vllm-ascend/issues/8174) ）
- XLite GLM-4.7支持（ [#7935](https://github.com/vllm-project/vllm-ascend/issues/7935) ）

##### 文档

- GLM4.7文档更新 ( [#8450](https://github.com/vllm-project/vllm-ascend/issues/8450) )

#### v0.18.0rc1 · 2026.04.01（中文）

##### 文档

- 刷新了Kimi-K2.5、GLM-4.7、DeepSeek-V3.2、MiniMax-M2.5的部署和模型文档，以及PD分离指南。 [#7371](https://github.com/vllm-project/vllm-ascend/issues/7371) [#7403](https://github.com/vllm-project/vllm-ascend/issues/7403) [#7292](https://github.com/vllm-project/vllm-ascend/issues/7292) [#7296](https://github.com/vllm-project/vllm-ascend/issues/7296) [#7300](https://github.com/vllm-project/vllm-ascend/issues/7300)

#### v0.15.0rc1 · 2026.02.27（中文）

##### 功能特性

- GLM4.7-Flash W8A8 量化 ：为 GLM4.7-Flash 添加了 W8A8 量化支持。 [#6492](https://github.com/vllm-project/vllm-ascend/issues/6492)

### GLM-4

#### v0.23.0rc1 · 2026.07.20（中文）

##### 稳定性与错误修复

- 修补了GLM47内联零参数流式工具调用。 [#9901](https://github.com/vllm-project/vllm-ascend/issues/9901)

#### v0.21.0rc1 · 2026.06.16（中文）

##### 稳定性与错误修复

- 修补GLM47内联零参数流式工具调用。 [#9901](https://github.com/vllm-project/vllm-ascend/issues/9901)

#### v0.16.0rc1 · 2026.03.09（中文）

##### 文档

- 新增了 GLM4.x 多节点部署教程。 [#6872](https://github.com/vllm-project/vllm-ascend/issues/6872)

##### 其他

- 修复 GLM4.6V 中的量化配置支持。 [#7062](https://github.com/vllm-project/vllm-ascend/issues/7062)

#### v0.13.0 · 2026.02.06（中文）

##### 其他

- GLM4.6 MTP ：GLM4.6 现在支持全图 MTP。 [#5460](https://github.com/vllm-project/vllm-ascend/issues/5460)

#### v0.13.0rc2 · 2026.01.24（中文）

##### 其他

- GLM4.6支持带全图的mtp [#5460](https://github.com/vllm-project/vllm-ascend/issues/5460)

#### v0.10.1rc1 · 2025.09.04（中文）

##### 其他

- 修复了rope维度不等于head维度的模型（如GLM4.5）的精度问题。 [#2601](https://github.com/vllm-project/vllm-ascend/issues/2601)

#### v0.10.0rc1 · 2025.08.07（中文）

##### 核心

- vLLM Ascend现已支持w8a8量化的Kimi-K2、Qwen3-Coder和GLM-4.5，请按照此 教程 尝试。 [#2162](https://github.com/vllm-project/vllm-ascend/issues/2162)

## Kimi

### Kimi K3

#### v0.26.0rc1 · 2026.09.03（中文）

这是vLLM Ascend v0.26.0的首个候选版本，与上游vLLM v0.26.0保持一致。此版本为模型受限版本，完全验证的模型包括Kimi K3、GLM‑5.2、DeepSeek V4 Flash 0731和DeepSeek V4 Pro 0813。其他模型的可用性不保证。完整测试报告请参见： v0.26.0rc1测试结论 。请按照 官方文档 开始使用。

##### 亮点

- Ascend上的Kimi K3 ：新增端到端Kimi K3支持，包括MLA DSpark投机解码、Ascend 950上的无RoPE MLAPO、融合QKV投影、融合归一化门控和注意力残差，以及投影器旋转。 [#12950](https://github.com/vllm-project/vllm-ascend/issues/12950) [#13277](https://github.com/vllm-project/vllm-ascend/issues/13277) [#13507](https://github.com/vllm-project/vllm-ascend/issues/13507) [#13989](https://github.com/vllm-project/vllm-ascend/issues/13989) [#13509](https://github.com/vllm-project/vllm-ascend/issues/13509) [#14231](https://github.com/vllm-project/vllm-ascend/issues/14231)

##### 文档

- 添加了Ascend上的Kimi-K3部署指南。 [#14125](https://github.com/vllm-project/vllm-ascend/issues/14125)

##### 已知问题

- Kimi K3 DSpark投机解码在长输入序列下草稿接受率较低，降低了预期的性能收益。 [#15237](https://github.com/vllm-project/vllm-ascend/issues/15237)

### Kimi K2

#### v0.26.0rc1 · 2026.09.03（中文）

##### 文档

- 更新了DeepSeek-V4、GLM-5.2、Kimi-K2.x和Gemma4模型部署指南。 [#11525](https://github.com/vllm-project/vllm-ascend/issues/11525) [#11534](https://github.com/vllm-project/vllm-ascend/issues/11534) [#11055](https://github.com/vllm-project/vllm-ascend/issues/11055)

#### v0.23.0rc1 · 2026.07.20（中文）

##### 稳定性与错误修复

- 修复了当P/D节点使用不等的TP大小且目标/草稿模型具有不同的全局KV头数量时，Kimi-K2.7 Code与Kimi-K2.5-DFlash的Mooncake KV传输分组问题。 [#11887](https://github.com/vllm-project/vllm-ascend/issues/11887)

##### 已知问题

- 在 A3 四机 2P1D 部署中，并发 terminal-bench2 测试下，Kimi-K2.6 可能在 D 节点上触发 Error in KVCacheTransferThread. error=unhashable type: 'list' 。 [#10962](https://github.com/vllm-project/vllm-ascend/issues/10962)
- 使用 CANN 9.0.0 时，GLM5.1 1P1D 四机部署在 140k 上下文性能测试期间可能挂起，启用 MC2 的 Kimi-K2.5 在单节点 A3 上可能遇到 OOM。 [#10963](https://github.com/vllm-project/vllm-ascend/issues/10963)

#### v0.22.1rc1 · 2026.06.30（中文）

##### 已知问题

- 在 A3 四机 2P1D 部署中，Kimi-K2.6 在并发 terminal-bench2 测试下可能触发 D 节点上的 Error in KVCacheTransferThread. error=unhashable type: 'list' 错误。 [#10962](https://github.com/vllm-project/vllm-ascend/issues/10962)
- 使用 CANN 9.0.0 时，GLM5.1 1P1D 四机部署在 140K 上下文性能测试期间可能挂起，而启用 MC2 的 Kimi-K2.5 在单节点 A3 上可能遇到 OOM。 [#10963](https://github.com/vllm-project/vllm-ascend/issues/10963)

#### v0.18.0 · 2026.04.30（中文）

##### 亮点

- Kimi-K2.x模型支持 ：[实验性]添加了对Kimi-K2.x模型的支持。@aipaes @dragondream-chen @SparrowMu @LoganJane [#6755](https://github.com/vllm-project/vllm-ascend/issues/6755)

##### 性能

- Kimi-K2.x性能 : [实验性]通过支持eagle3和flashcomm1，并减少d2h开销，优化了Kimi-K2.x的性能。@aipaes @dragondream-chen @SparrowMu @LoganJane @GDzhu01 @Yaphets24 @hust17yixuan [#7342](https://github.com/vllm-project/vllm-ascend/issues/7342) [#7390](https://github.com/vllm-project/vllm-ascend/issues/7390) [#7521](https://github.com/vllm-project/vllm-ascend/issues/7521)

##### 文档

- 刷新了 Kimi-K2.5、GLM-4.7、DeepSeek-V3.2、MiniMax-M2.5 的部署和模型文档以及 PD 分离指南。 [#7371](https://github.com/vllm-project/vllm-ascend/issues/7371) [#7403](https://github.com/vllm-project/vllm-ascend/issues/7403) [#7292](https://github.com/vllm-project/vllm-ascend/issues/7292) [#7296](https://github.com/vllm-project/vllm-ascend/issues/7296) [#7300](https://github.com/vllm-project/vllm-ascend/issues/7300)

#### v0.19.1rc1 · 2026.04.30（中文）

##### 文档

- Kimi-K2.5文档更新 ( [#7901](https://github.com/vllm-project/vllm-ascend/issues/7901) )

#### v0.18.0rc1 · 2026.04.01（中文）

##### 文档

- 刷新了Kimi-K2.5、GLM-4.7、DeepSeek-V3.2、MiniMax-M2.5的部署和模型文档，以及PD分离指南。 [#7371](https://github.com/vllm-project/vllm-ascend/issues/7371) [#7403](https://github.com/vllm-project/vllm-ascend/issues/7403) [#7292](https://github.com/vllm-project/vllm-ascend/issues/7292) [#7296](https://github.com/vllm-project/vllm-ascend/issues/7296) [#7300](https://github.com/vllm-project/vllm-ascend/issues/7300)

#### v0.15.0rc1 · 2026.02.27（中文）

##### 亮点

- Kimi-K2.5 模型支持 ：添加了对 Kimi-K2.5 模型的支持。 请注意 ，vLLM 0.15.0 存在一个已知的 Kimi-K2.5 问题。要修复此问题，请应用上游 vllm-project/vllm 仓库的更改，具体来自拉取请求 [#33320](https://github.com/vllm-project/vllm-ascend/issues/33320) 和 [#34501](https://github.com/vllm-project/vllm-ascend/issues/34501) 。 [#6755](https://github.com/vllm-project/vllm-ascend/issues/6755)

#### v0.11.0 · 2025.12.16（中文）

##### 其他

- 提升了 kimi-k2 的性能。 [#4555](https://github.com/vllm-project/vllm-ascend/issues/4555)

#### v0.11.0rc2 · 2025.11.21（中文）

##### 核心

- Kimi k2 量化版本现已可用。 [#4190](https://github.com/vllm-project/vllm-ascend/issues/4190)

#### v0.10.0rc1 · 2025.08.07（中文）

##### 核心

- vLLM Ascend现已支持w8a8量化的Kimi-K2、Qwen3-Coder和GLM-4.5，请按照此 教程 尝试。 [#2162](https://github.com/vllm-project/vllm-ascend/issues/2162)

## MiniMax

### MiniMax-M2.7

#### v0.26.0rc1 · 2026.09.03（中文）

##### 已知问题

- MiniMax-M2.7 W8A8在A3单节点场景下出现性能回退。128K输入/1K输出的双节点结果也低于基线阈值，但需要更多样本才能确定是持续回退还是正常性能波动。 [#15658](https://github.com/vllm-project/vllm-ascend/issues/15658)

#### v0.20.2rc1 · 2026.06.03（中文）

##### 已知问题

- MiniMax-M2.7 W8A8/QuaRot 在长序列部署中，当 PCP/DCP 与 Eagle3 推测解码结合使用时，GPQA 准确率可能低于预期。 [#9959](https://github.com/vllm-project/vllm-ascend/issues/9959)

#### v0.18.0 · 2026.04.30（中文）

##### 文档

- 为 MiniMax-M2.5 和 MiniMax-M2.7 添加了新的介绍。 [#8169](https://github.com/vllm-project/vllm-ascend/issues/8169)

### MiniMax-M2.5

#### v0.23.0 · 2026.08.16（中文）

##### 性能

- 重用预构建的块主机元数据以减少Qwen3.5和MiniMax-M2.5工作负载的同步开销。自动应用于受影响的模型路径。 [#9310](https://github.com/vllm-project/vllm-ascend/issues/9310)

#### v0.23.0rc1 · 2026.07.20（中文）

##### 稳定性与错误修复

- 修复了MiniMax-M2和MiniMax-M2.5的流式工具调用参数格式错误以及TP8+EP启动兼容性问题。 [#11505](https://github.com/vllm-project/vllm-ascend/issues/11505)

##### 性能

- 优化了 splitqkvtprmsnormrope ，采用网格步长加载和主机端倒数预计算；该 PR 报告在测试的 MiniMax-M2.5 W8A8 QuaRot 预填充工作负载上实现了约 5 倍的内核加速。 [#9830](https://github.com/vllm-project/vllm-ascend/issues/9830)

#### v0.22.1rc1 · 2026.06.30（中文）

##### 性能

- 优化了 splitqkvtprmsnormrope ，采用网格步长加载和主机端倒数预计算；该 PR 报告在测试的 MiniMax-M2.5 W8A8 QuaRot 预填充工作负载上实现了约 5 倍的内核加速。 [#9830](https://github.com/vllm-project/vllm-ascend/issues/9830)

#### v0.18.0 · 2026.04.30（中文）

##### 文档

- 为 MiniMax-M2.5 和 MiniMax-M2.7 添加了新的介绍。 [#8169](https://github.com/vllm-project/vllm-ascend/issues/8169)
- 刷新了 Kimi-K2.5、GLM-4.7、DeepSeek-V3.2、MiniMax-M2.5 的部署和模型文档以及 PD 分离指南。 [#7371](https://github.com/vllm-project/vllm-ascend/issues/7371) [#7403](https://github.com/vllm-project/vllm-ascend/issues/7403) [#7292](https://github.com/vllm-project/vllm-ascend/issues/7292) [#7296](https://github.com/vllm-project/vllm-ascend/issues/7296) [#7300](https://github.com/vllm-project/vllm-ascend/issues/7300)

#### v0.19.1rc1 · 2026.04.30（中文）

##### 亮点

- Eagle3 + MiniMax-M2.5支持 ：将Eagle3推测解码应用于MiniMax-M2.5模型，实现更快的推理（ [#7619](https://github.com/vllm-project/vllm-ascend/issues/7619) ）

#### v0.18.0rc1 · 2026.04.01（中文）

##### 文档

- 刷新了Kimi-K2.5、GLM-4.7、DeepSeek-V3.2、MiniMax-M2.5的部署和模型文档，以及PD分离指南。 [#7371](https://github.com/vllm-project/vllm-ascend/issues/7371) [#7403](https://github.com/vllm-project/vllm-ascend/issues/7403) [#7292](https://github.com/vllm-project/vllm-ascend/issues/7292) [#7296](https://github.com/vllm-project/vllm-ascend/issues/7296) [#7300](https://github.com/vllm-project/vllm-ascend/issues/7300)

#### v0.17.0rc1 · 2026.03.15（中文）

##### 功能特性

- [实验性] Ascend NPU现支持Minimax-m2.5模型。 [#7105](https://github.com/vllm-project/vllm-ascend/issues/7105)

### MiniMax-M2

#### v0.23.0 · 2026.08.16（中文）

##### 亮点

- 模型与硬件覆盖 ：扩展了对GLM-5.2、GLM-4.7-Flash、Qwen3.5/Qwen3.6、Qwen3-ASR、Qwen3-Omni、百灵MoE、Gemma4、Step3和MiniMax 2.x等模型在A2、A3、Ascend 950和Atlas 300I DUO上的支持与部署指南。GLM-5.2在Atlas 800 A3上支持长达100万token的长序列推理。 [#8657](https://github.com/vllm-project/vllm-ascend/issues/8657) [#9560](https://github.com/vllm-project/vllm-ascend/issues/9560) [#10441](https://github.com/vllm-project/vllm-ascend/issues/10441) [#10697](https://github.com/vllm-project/vllm-ascend/issues/10697) [#11091](https://github.com/vllm-project/vllm-ascend/issues/11091) [#11264](https://github.com/vllm-project/vllm-ascend/issues/11264) [#12115](https://github.com/vllm-project/vllm-ascend/issues/12115)

##### 稳定性与错误修复

- 修复了DeepSeek-R1-0528 W8A8共享专家无钳位精度路径以及MiniMax-M2/M2.5的畸形流式工具调用或TP8+EP启动问题。 [#11775](https://github.com/vllm-project/vllm-ascend/issues/11775) [#11505](https://github.com/vllm-project/vllm-ascend/issues/11505)

#### v0.23.0rc1 · 2026.07.20（中文）

##### 稳定性与错误修复

- 修复了MiniMax-M2和MiniMax-M2.5的流式工具调用参数格式错误以及TP8+EP启动兼容性问题。 [#11505](https://github.com/vllm-project/vllm-ascend/issues/11505)
- 向后移植了MiniMax M2工具调用流式支持。 [#9742](https://github.com/vllm-project/vllm-ascend/issues/9742)

##### 功能特性

- 在 GQA loadweights 中添加了 MiniMax M2 C8 缓存规模支持。 [#10461](https://github.com/vllm-project/vllm-ascend/issues/10461)

#### v0.22.1rc1 · 2026.06.30（中文）

##### 功能特性

- 在 GQA loadweights 中添加了 MiniMax M2 C8 缓存缩放支持。 [#10461](https://github.com/vllm-project/vllm-ascend/issues/10461)

#### v0.21.0rc1 · 2026.06.16（中文）

##### 稳定性与错误修复

- 反向移植MiniMax M2工具调用流式支持。 [#9742](https://github.com/vllm-project/vllm-ascend/issues/9742)

#### v0.18.0 · 2026.04.30（中文）

##### 亮点

- Minimax-m2.x模型支持 ：[实验性]添加了对带有eagle3的Minimax-m2.x模型的支持。@SparrowMu @GDzhu01 [#7105](https://github.com/vllm-project/vllm-ascend/issues/7105) [#7714](https://github.com/vllm-project/vllm-ascend/issues/7714)

##### 已知问题

- 目前，EPLB不支持 minimaxm2 模型和W4A8量化。 [#8341](https://github.com/vllm-project/vllm-ascend/issues/8341)

#### v0.13.0 · 2026.02.06（中文）

##### 亮点

- minimaxm2 ：[实验性]增加了对 minimaxm2 模型的支持。 [#5624](https://github.com/vllm-project/vllm-ascend/issues/5624)

#### v0.13.0rc2 · 2026.01.24（中文）

##### 模型支持

- minimaxm2现已支持。 [#5624](https://github.com/vllm-project/vllm-ascend/issues/5624)

## Gemma

### Gemma4

#### v0.30.0rc1 · 2026.10.11（中文）

##### 功能特性

- 为 Gemma4 扩展 splitqkvrmsnormrope ，支持 value normalization。 [#15332](https://github.com/vllm-project/vllm-ascend/issues/15332)

#### v0.26.0rc1 · 2026.09.03（中文）

##### 功能特性

- 新增Gemma4 E2B和E4B模型支持，支持A2/A3上的图执行和ModelSlim量化。 [#11536](https://github.com/vllm-project/vllm-ascend/issues/11536) [#11575](https://github.com/vllm-project/vllm-ascend/issues/11575) [#11791](https://github.com/vllm-project/vllm-ascend/issues/11791)

##### 文档

- 更新了DeepSeek-V4、GLM-5.2、Kimi-K2.x和Gemma4模型部署指南。 [#11525](https://github.com/vllm-project/vllm-ascend/issues/11525) [#11534](https://github.com/vllm-project/vllm-ascend/issues/11534) [#11055](https://github.com/vllm-project/vllm-ascend/issues/11055)

#### v0.23.0 · 2026.08.16（中文）

##### 亮点

- 模型与硬件覆盖 ：扩展了对GLM-5.2、GLM-4.7-Flash、Qwen3.5/Qwen3.6、Qwen3-ASR、Qwen3-Omni、百灵MoE、Gemma4、Step3和MiniMax 2.x等模型在A2、A3、Ascend 950和Atlas 300I DUO上的支持与部署指南。GLM-5.2在Atlas 800 A3上支持长达100万token的长序列推理。 [#8657](https://github.com/vllm-project/vllm-ascend/issues/8657) [#9560](https://github.com/vllm-project/vllm-ascend/issues/9560) [#10441](https://github.com/vllm-project/vllm-ascend/issues/10441) [#10697](https://github.com/vllm-project/vllm-ascend/issues/10697) [#11091](https://github.com/vllm-project/vllm-ascend/issues/11091) [#11264](https://github.com/vllm-project/vllm-ascend/issues/11264) [#12115](https://github.com/vllm-project/vllm-ascend/issues/12115)

#### v0.23.0rc1 · 2026.07.20（中文）

##### 实验性功能或优化

- 在 A2 和 Ascend 950 上增加了实验性的 Gemma4 支持。 [#11091](https://github.com/vllm-project/vllm-ascend/issues/11091) [#10643](https://github.com/vllm-project/vllm-ascend/issues/10643)

## Step

### Step3

#### v0.26.0rc1 · 2026.09.03（中文）

##### 功能特性

- 新增Ascend 950上的Step3.5/3.7 Flash支持。 [#10556](https://github.com/vllm-project/vllm-ascend/issues/10556)

#### v0.23.0 · 2026.08.16（中文）

##### 亮点

- 模型与硬件覆盖 ：扩展了对GLM-5.2、GLM-4.7-Flash、Qwen3.5/Qwen3.6、Qwen3-ASR、Qwen3-Omni、百灵MoE、Gemma4、Step3和MiniMax 2.x等模型在A2、A3、Ascend 950和Atlas 300I DUO上的支持与部署指南。GLM-5.2在Atlas 800 A3上支持长达100万token的长序列推理。 [#8657](https://github.com/vllm-project/vllm-ascend/issues/8657) [#9560](https://github.com/vllm-project/vllm-ascend/issues/9560) [#10441](https://github.com/vllm-project/vllm-ascend/issues/10441) [#10697](https://github.com/vllm-project/vllm-ascend/issues/10697) [#11091](https://github.com/vllm-project/vllm-ascend/issues/11091) [#11264](https://github.com/vllm-project/vllm-ascend/issues/11264) [#12115](https://github.com/vllm-project/vllm-ascend/issues/12115)

#### v0.23.0rc1 · 2026.07.20（中文）

##### 实验性功能或优化

- 增加了实验性的 Step3P7 和 Step3P5 支持，包括 Step3P5 MTP。 [#10697](https://github.com/vllm-project/vllm-ascend/issues/10697)

## Bailing

### Bailing

#### v0.19.1rc1 · 2026.04.30（中文）

##### 亮点

- Bailing模型支持 ：全面支持Bailing MoE模型，包括线性适配和ModelSlim量化（ [#8657](https://github.com/vllm-project/vllm-ascend/issues/8657) 、 [#8709](https://github.com/vllm-project/vllm-ascend/issues/8709) ）

##### 功能特性

- Bailing模型支持 ：全面支持Bailing MoE模型，包含线性适配和ModelSlim量化配置（ [#8657](https://github.com/vllm-project/vllm-ascend/issues/8657) 、 [#8709](https://github.com/vllm-project/vllm-ascend/issues/8709) ）

## 其他

### Llama

#### v0.23.0rc1 · 2026.07.20（中文）

##### 已知问题

- Llama LoRA 在 Ascend 上仍可能遇到 einsum 张量维度不匹配的问题。 [#10577](https://github.com/vllm-project/vllm-ascend/issues/10577)

#### v0.22.1rc1 · 2026.06.30（中文）

##### 已知问题

- Llama LoRA 在 Ascend 上仍可能遇到 einsum 张量维度不匹配的问题。 [#10577](https://github.com/vllm-project/vllm-ascend/issues/10577)

#### v0.9.1rc1 · 2025.06.22（中文）

##### 其他改进

- 新增初始用户故事页面（包含 LLaMA-Factory/TRL/verl/MindIE Turbo/GPUStack）。 [#1224](https://github.com/vllm-project/vllm-ascend/issues/1224)

#### v0.9.0rc1 · 2025.06.09（中文）

##### 模型

- Llama4 现已可用。 [#740](https://github.com/vllm-project/vllm-ascend/issues/740)

#### v0.7.1rc1 · 2025.02.19（中文）

##### 亮点

- 还支持Qwen、Llama系列及其他流行模型，更多详情请参见 supportedmodels 。

### InternVL

#### v0.13.0 · 2026.02.06（中文）

##### 亮点

- InternVL ：增加了对 InternVL 模型的支持，并提供了全面的端到端测试和精度评估。 [#3796](https://github.com/vllm-project/vllm-ascend/issues/3796) [#3964](https://github.com/vllm-project/vllm-ascend/issues/3964)

### Pangu

#### v0.13.0 · 2026.02.06（中文）

##### 亮点

- PanguUltraMoE ：[实验性]增加了对 PanguUltraMoE 模型的支持。 [#4615](https://github.com/vllm-project/vllm-ascend/issues/4615)

#### v0.13.0rc1 · 2025.12.27（中文）

##### 功能特性

- 支持 openPangu Ultra MoE 4615

## 平台与通用

### 平台与通用

#### v0.30.0rc1 · 2026.10.11（中文）

##### 亮点

- GLM-5.3-Flash ：新增对非逐层池化以及 Mooncake 逐层 Mamba 的 KV Pool 支持，新增逐层 memcache DRAM/SSD 池化，优化了 Triton KPool 和 gated norm，支持 GQA decode 上下文并行和仅 SFA 的 DSA CP，并提供了 P/D 和 KV cache pool 部署指南。 [#16945](https://github.com/vllm-project/vllm-ascend/issues/16945) [#17287](https://github.com/vllm-project/vllm-ascend/issues/17287) [#17698](https://github.com/vllm-project/vllm-ascend/issues/17698) [#17542](https://github.com/vllm-project/vllm-ascend/issues/17542) [#16478](https://github.com/vllm-project/vllm-ascend/issues/16478) [#17990](https://github.com/vllm-project/vllm-ascend/issues/17990) [#17987](https://github.com/vllm-project/vllm-ascend/issues/17987) [#17773](https://github.com/vllm-project/vllm-ascend/issues/17773) [#17946](https://github.com/vllm-project/vllm-ascend/issues/17946)
- 平台与执行 ：通过 main2main 流水线使插件与上游 vLLM v0.30.0 对齐，扩展 Model Runner V2 支持细粒度 TP（图模式下的 MLP、embedding、oproj）和异步 CPP 调度（默认开启经过评估后已回退，待进一步加固），落地 EPLB STAIR 放置策略，增强 PCP（分片 embedding/LM head 和 O projection 权重、PCP+DCP 叠加、图执行的 decode 分片）。 [#16527](https://github.com/vllm-project/vllm-ascend/issues/16527) [#17361](https://github.com/vllm-project/vllm-ascend/issues/17361) [#16967](https://github.com/vllm-project/vllm-ascend/issues/16967) [#17380](https://github.com/vllm-project/vllm-ascend/issues/17380) [#17661](https://github.com/vllm-project/vllm-ascend/issues/17661) [#17514](https://github.com/vllm-project/vllm-ascend/issues/17514) [#17512](https://github.com/vllm-project/vllm-ascend/issues/17512) [#17511](https://github.com/vllm-project/vllm-ascend/issues/17511) [#17509](https://github.com/vllm-project/vllm-ascend/issues/17509) [#17510](https://github.com/vllm-project/vllm-ascend/issues/17510) [#17508](https://github.com/vllm-project/vllm-ascend/issues/17508) [#17159](https://github.com/vllm-project/vllm-ascend/issues/17159) [#17502](https://github.com/vllm-project/vllm-ascend/issues/17502) [#17598](https://github.com/vllm-project/vllm-ascend/issues/17598) [#17456](https://github.com/vllm-project/vllm-ascend/issues/17456) [#17958](https://github.com/vllm-project/vllm-ascend/issues/17958) [#17940](https://github.com/vllm-project/vllm-ascend/issues/17940) [#18065](https://github.com/vllm-project/vllm-ascend/issues/18065) [#17112](https://github.com/vllm-project/vllm-ascend/issues/17112) [#17150](https://github.com/vllm-project/vllm-ascend/issues/17150) [#17157](https://github.com/vllm-project/vllm-ascend/issues/17157)

##### 功能特性

- 将细粒度 TP 支持（MLP、embedding）扩展到 MRV2，并在图模式范围内新增 oproj TP。 [#17361](https://github.com/vllm-project/vllm-ascend/issues/17361) [#16967](https://github.com/vllm-project/vllm-ascend/issues/16967)
- 在 MRV2 上为 CPP 新增异步调度。 [#17380](https://github.com/vllm-project/vllm-ascend/issues/17380)
- 为 GLM-Next MTP draft 模型启用 ACL graph 模式。 [#17178](https://github.com/vllm-project/vllm-ascend/issues/17178)
- 新增支持 PIECEWISE 执行的 KVPP PCP 池化，并为 DSpark 复用 MTP cache exclusion。 [#17112](https://github.com/vllm-project/vllm-ascend/issues/17112) [#17119](https://github.com/vllm-project/vllm-ascend/issues/17119)
- 在 P/D 分离部署中新增 MooncakeConnector V2 PCP 支持。 [#17355](https://github.com/vllm-project/vllm-ascend/issues/17355)
- 为 P/D 分离部署新增 MooncakeConnectorV2，支持与 AscendStoreConnector 和 MemCache KV 池化进行 MultiConnector 组合。 [#14068](https://github.com/vllm-project/vllm-ascend/issues/14068)
- 为 GLM-5.3-Flash 非分层池化以及 Mooncake 分层中的 Mamba 新增 KV Pool 支持。 [#16945](https://github.com/vllm-project/vllm-ascend/issues/16945) [#17287](https://github.com/vllm-project/vllm-ascend/issues/17287)
- 为 V4.1 和投机缓存复用新增 AscendStore 准备工作。 [#16973](https://github.com/vllm-project/vllm-ascend/issues/16973)
- 为稀疏 KV cache 卸载新增融合 lightning indexer manage 和融合 scatter copy 稀疏 flash attention 算子，并为分层稀疏卸载新增融合算子。 [#16640](https://github.com/vllm-project/vllm-ascend/issues/16640) [#17392](https://github.com/vllm-project/vllm-ascend/issues/17392)
- 为 EC Transfer 新增基于 MemCache 的 L1 encoder cache。 [#16953](https://github.com/vllm-project/vllm-ascend/issues/16953)
- 在 Docker 镜像中新增 flash-linear-attention-npu（用于 GDN prefill 的 FLA NPU 后端）。 [#17534](https://github.com/vllm-project/vllm-ascend/issues/17534) [#16420](https://github.com/vllm-project/vllm-ascend/issues/16420)
- 在 worker 中支持非均匀 KV cache page size。 [#16966](https://github.com/vllm-project/vllm-ascend/issues/16966)
- 将 MiniMax-M3 prefill KV-gather-Q 设为可选。 [#17241](https://github.com/vllm-project/vllm-ascend/issues/17241)
- 为 GLM-5.3 Flash 支持 GQA decode context parallelism 和仅 SFA 的 DSA CP。 [#17990](https://github.com/vllm-project/vllm-ascend/issues/17990) [#17987](https://github.com/vllm-project/vllm-ascend/issues/17987)
- 支持跨 PP stage 的 Top-K 传输。 [#15614](https://github.com/vllm-project/vllm-ascend/issues/15614)
- 在 KV Pool 中新增 GLM-5.3-Flash 分层 memcache DRAM/SSD 池化。 [#17698](https://github.com/vllm-project/vllm-ascend/issues/17698)
- 在 A2/A3 上支持 C8-MXFP（使用 E8M0 scale 的 FP8 KV cache）和 INT8 C8 RoPE0。 [#17180](https://github.com/vllm-project/vllm-ascend/issues/17180) [#16706](https://github.com/vllm-project/vllm-ascend/issues/16706)
- 为 EPLB 新增 HIXL 专家权重传输。 [#17578](https://github.com/vllm-project/vllm-ascend/issues/17578)
- 支持移除 reduce sample 的 batch-sharded sampling。 [#15011](https://github.com/vllm-project/vllm-ascend/issues/15011)
- 在 P/D 部署中，当 DCP > 1 且 numkvheads > 1 时使用 FullAttn TP 并行。 [#17524](https://github.com/vllm-project/vllm-ascend/issues/17524)
- 为 MRV2 UVA buffer 新增映射的 pinned CPU view，并使 spec-decode draft LM head 与 lmhead TP 对齐。 [#17680](https://github.com/vllm-project/vllm-ascend/issues/17680) [#15079](https://github.com/vllm-project/vllm-ascend/issues/15079)
- 为 DFlash DCP slot 使用物理 KV block size。 [#17717](https://github.com/vllm-project/vllm-ascend/issues/17717)
- 在 P/D 分离部署中新增 Mooncake V2 KV 接收失败处理。 [#18146](https://github.com/vllm-project/vllm-ascend/issues/18146)
- 允许在 MRV2 PCP 下进行概率性 draft sampling。 [#18086](https://github.com/vllm-project/vllm-ascend/issues/18086)
- 统一 MLA prolog 并连接 DCP current KV。 [#17615](https://github.com/vllm-project/vllm-ascend/issues/17615)
- 在 V1 runner 中支持 TurboQuant 打包 KV cache。 [#18048](https://github.com/vllm-project/vllm-ascend/issues/18048)
- 支持 GQA PCP 和 DCP 叠加。 [#18066](https://github.com/vllm-project/vllm-ascend/issues/18066)

##### 性能

- 为 GDN prefill 新增 FLA NPU 后端，并避免 GDN 布尔 token 排序回退到 AiCPU。 [#16420](https://github.com/vllm-project/vllm-ascend/issues/16420) [#17219](https://github.com/vllm-project/vllm-ascend/issues/17219)
- 在 GDN chunk forward 内核间复用转置后的 gate。 [#17339](https://github.com/vllm-project/vllm-ascend/issues/17339)
- 融合 GLM-5.3-Flash KDA decode 输出回写，并优化卷积状态拷贝。 [#17011](https://github.com/vllm-project/vllm-ascend/issues/17011) [#17010](https://github.com/vllm-project/vllm-ascend/issues/17010)
- 泛化 DCP 输出 pack 与 combine。 [#17387](https://github.com/vllm-project/vllm-ascend/issues/17387)
- 将 PCP embedding 交换限制在本地 token 范围内。 [#17561](https://github.com/vllm-project/vllm-ascend/issues/17561)
- 在 KV Pool 中去重每步 memcache RPC，并缓存逐层命中检查。 [#16947](https://github.com/vllm-project/vllm-ascend/issues/16947)
- 修复并优化昇腾上的采样 mask 打包（MRV2 内核）。 [#17193](https://github.com/vllm-project/vllm-ascend/issues/17193)
- 提升 dflashprepareinputs 性能（MRV2 算子）。 [#15314](https://github.com/vllm-project/vllm-ascend/issues/15314)
- 避免 Triton 中冗余的 resample JIT 变体。 [#17575](https://github.com/vllm-project/vllm-ascend/issues/17575)
- 为 SFA C8 复用设备 cache-store 分发。 [#17135](https://github.com/vllm-project/vllm-ascend/issues/17135)
- 融合 SFA K-path 算子，并为非 PD 推理启用 PROLOGV3 融合 decode，复用 indexer 权重投影和缓存的 slot-mapping 转换。 [#16328](https://github.com/vllm-project/vllm-ascend/issues/16328)
- 将 SFA Q up-projection 布局变换与 nputransposebatchmatmul 融合。 [#16198](https://github.com/vllm-project/vllm-ascend/issues/16198)
- 恢复带图安全性的选择性 eager DP padding。 [#16823](https://github.com/vllm-project/vllm-ascend/issues/16823)
- 为 MiniMax-M3 跳过重复的 MRV2 idle-DP indexer 工作。 [#17538](https://github.com/vllm-project/vllm-ascend/issues/17538)
- 在 MRV1 中仅提交脏 block-table 范围（后续因正确性问题回退；见已知问题）。 [#17066](https://github.com/vllm-project/vllm-ascend/issues/17066) [#17470](https://github.com/vllm-project/vllm-ascend/issues/17470)
- 在 MoE 中对 bf16 来源权重使用带 fp32 累加的 bf16 router GEMM。 [#17068](https://github.com/vllm-project/vllm-ascend/issues/17068)
- 优化 GLM-5.3-Flash Triton KPool 和 gated norm，并调整 tritonqrms 中的 ROWBLOCKSIZE 以提升 RMSNorm 性能。 [#17542](https://github.com/vllm-project/vllm-ascend/issues/17542) [#16478](https://github.com/vllm-project/vllm-ascend/issues/16478)
- 将 KV save fence 缩小到已释放 block 的请求。 [#17555](https://github.com/vllm-project/vllm-ascend/issues/17555)
- 避免 DSA-CP 元数据中的请求数特化，并融合 slot mapping 以减少重编译。 [#17346](https://github.com/vllm-project/vllm-ascend/issues/17346) [#17353](https://github.com/vllm-project/vllm-ascend/issues/17353)
- 在 310P 上对 MoE 路由使用 FP16 gate 投影。 [#17669](https://github.com/vllm-project/vllm-ascend/issues/17669)
- 为 GDN 融合 prefill 跳过未使用的设备元数据拷贝。 [#16887](https://github.com/vllm-project/vllm-ascend/issues/16887)
- 在 MegaMoe 下释放无用的 W8A8 fp32 MoE scales。 [#17105](https://github.com/vllm-project/vllm-ascend/issues/17105)
- 为 KDA 准备 Triton prefill 状态拷贝计划，并拓宽 Mamba 时序后处理状态拷贝。 [#17614](https://github.com/vllm-project/vllm-ascend/issues/17614) [#17260](https://github.com/vllm-project/vllm-ascend/issues/17260)
- 对共享专家 token padding 和 MoE prepare 使用 zero-block cat padding，替代逐层 F.pad 。 [#17577](https://github.com/vllm-project/vllm-ascend/issues/17577) [#16343](https://github.com/vllm-project/vllm-ascend/issues/16343)
- 将 KV save fence 缩小到已释放 block 的请求。 [#18094](https://github.com/vllm-project/vllm-ascend/issues/18094)
- 借助 AscendStore 减少 PP save 同步和 SchedulerOutput deepcopy 开销。 [#15636](https://github.com/vllm-project/vllm-ascend/issues/15636)
- 在 Docker 镜像中加入 fastokens，以降低 prefill 分词 CPU 开销（通过 VLLMUSEFASTOKENS=1 启用）。 [#15351](https://github.com/vllm-project/vllm-ascend/issues/15351)
- 移除 SFA 中的 NoPE 输出掩码。 [#16896](https://github.com/vllm-project/vllm-ascend/issues/16896)

##### 依赖项

- vLLM: v0.30.0
- CANN: 9.2.0
- 昇腾 HDK: 26.0.RC1
- PyTorch / torchnpu: 2.10.0 / 2.10.0.post4
- Triton Ascend: 3.2.2
- mooncake-transfer-engine-npu: 0.3.11.post1
- flash-linear-attention-npu: v26.9.1-beta2
- ray: >= 2.47.1, <= 2.48.0
- Python: 3.12 (release image base)

##### 弃用与配置变更

- 内置的 KDA 算子（causal conv、GDN state、gate cumsum）已替换为外部 flash-linear-attention-npu（flanpu）包。 [#17664](https://github.com/vllm-project/vllm-ascend/issues/17664) [#17727](https://github.com/vllm-project/vllm-ascend/issues/17727)
- 与 CANN 官方算子名称冲突的自定义算子已重命名并添加 vllm 后缀（KDA gate cumsum、GDN FwdH、sparse attention、quant lightning indexer），以避免运行时名称冲突；相关环境应安装对应的算子包。 [#17998](https://github.com/vllm-project/vllm-ascend/issues/17998) [#17997](https://github.com/vllm-project/vllm-ascend/issues/17997) [#17937](https://github.com/vllm-project/vllm-ascend/issues/17937) [#17209](https://github.com/vllm-project/vllm-ascend/issues/17209)
- MLA 预处理迁移至面向 NPU Graph 的 ACLNN 两阶段接口。 [#15182](https://github.com/vllm-project/vllm-ascend/issues/15182)
- 移除了 storekvblock 优化和 c8enablereshapeoptim 开关。 [#18128](https://github.com/vllm-project/vllm-ascend/issues/18128)
- 通过 --kv-quant-dtype 参数统一了 KV cache 量化 dtype 配置。 [#15514](https://github.com/vllm-project/vllm-ascend/issues/15514)

##### 文档

- 新增 GLM-5.3-Flash PD / KV cache pool 部署指南和 GLM-5.3-Flash A2 PD 部署指南。 [#17773](https://github.com/vllm-project/vllm-ascend/issues/17773) [#17946](https://github.com/vllm-project/vllm-ascend/issues/17946)
- 新增 GLM-5.3 PP PD 和 MemCache pooling 部署指南。 [#18169](https://github.com/vllm-project/vllm-ascend/issues/18169)
- 记录了流水线并行支持的 MRV2 特性栈，并基于统一特性文档模板重写了 KV pool 指南。 [#17449](https://github.com/vllm-project/vllm-ascend/issues/17449) [#16856](https://github.com/vllm-project/vllm-ascend/issues/16856)
- 更新了 PCP 特性兼容性表，并记录了 serving 和 runtime LoRA 的更新。 [#18050](https://github.com/vllm-project/vllm-ascend/issues/18050) [#17802](https://github.com/vllm-project/vllm-ascend/issues/17802) [#18104](https://github.com/vllm-project/vllm-ascend/issues/18104)
- 更新了 KV pool 格式文档。 [#17473](https://github.com/vllm-project/vllm-ascend/issues/17473)

##### 稳定性与错误修复

- 支持非均匀 KV cache 页大小。 [#16966](https://github.com/vllm-project/vllm-ascend/issues/16966)
- 在禁用前缀缓存时保留私有缓存组。 [#17569](https://github.com/vllm-project/vllm-ascend/issues/17569)
- 在设备适配器之间保留 SFA 和 indexer 缓存写入，并将 DP 填充的 SFA 输入与 attention 元数据对齐。 [#17594](https://github.com/vllm-project/vllm-ascend/issues/17594) [#16768](https://github.com/vllm-project/vllm-ascend/issues/16768)
- 基于传入的索引为 MTP 草稿重建稀疏 MLA 方案。 [#17535](https://github.com/vllm-project/vllm-ascend/issues/17535)
- 在重载时就地刷新 MLA/SFA 运行时权重。 [#16717](https://github.com/vllm-project/vllm-ascend/issues/16717)
- 修复了仅解码 DCP 下 Mooncake 空接收的问题，以及在 prefix-cache 查找前截断 Mooncake 混合 prefill 的问题。 [#17497](https://github.com/vllm-project/vllm-ascend/issues/17497) [#17407](https://github.com/vllm-project/vllm-ascend/issues/17407)
- 修复了 MRV2 P/D： registerkvcaches 仅处理首个张量的 bug、recompute-scheduler 跳过 prepareprefillinputs ，以及带 mamba align resume index 的抢占卸载多 D2H。 [#17522](https://github.com/vllm-project/vllm-ascend/issues/17522) [#17445](https://github.com/vllm-project/vllm-ascend/issues/17445) [#16729](https://github.com/vllm-project/vllm-ascend/issues/16729)
- 在 MoE 中于 GMM1 之前释放重新量化的 W4A4 MXFP4 激活。 [#16968](https://github.com/vllm-project/vllm-ascend/issues/16968)
- 通过共享 Mamba 组槽位恢复 310P 上的混合 KV cache 容量；修复了 310P 上 graph 模式下的 LoRA，并开放了 MRV2 LoRA。 [#17416](https://github.com/vllm-project/vllm-ascend/issues/17416) [#16457](https://github.com/vllm-project/vllm-ascend/issues/16457)
- 修正了 MRV1 中被拒绝 token 的 seqlens，并在跳过草稿时保留张量状态。 [#14883](https://github.com/vllm-project/vllm-ascend/issues/14883) [#17274](https://github.com/vllm-project/vllm-ascend/issues/17274)
- 修复了 PP 下 KV Pool 逐层缓存组索引，以及逐层状态准备/分配的舍入问题。 [#17246](https://github.com/vllm-project/vllm-ascend/issues/17246) [#17487](https://github.com/vllm-project/vllm-ascend/issues/17487)
- 在 sleep 模式下保留专用的 1 MiB HCCL 生命周期锚点；在权重传输关闭时销毁原生 HCCL 通信器。 [#15340](https://github.com/vllm-project/vllm-ascend/issues/15340) [#17154](https://github.com/vllm-project/vllm-ascend/issues/17154)
- 根据绑定的 NPU 选择本地通信端点。 [#16249](https://github.com/vllm-project/vllm-ascend/issues/16249)
- 修复了无隐式量化的 Engram BF16 检查点、CPU 绑定期间的 HOSTUVA 页迁移，以及同节点外部 DP 启动。 [#17513](https://github.com/vllm-project/vllm-ascend/issues/17513) [#17348](https://github.com/vllm-project/vllm-ascend/issues/17348) [#17248](https://github.com/vllm-project/vllm-ascend/issues/17248)
- 遵循逐层 KV cache dtype，并为分页 attention 保持 KV cache 连续。 [#18003](https://github.com/vllm-project/vllm-ascend/issues/18003) [#17924](https://github.com/vllm-project/vllm-ascend/issues/17924)
- 修复了 scatterndupdatesk 对非连续输入的静默行丢失问题，并在 transpose 算子中支持块跨步 KV cache。 [#17647](https://github.com/vllm-project/vllm-ascend/issues/17647) [#17868](https://github.com/vllm-project/vllm-ascend/issues/17868)
- 修复了使用自定义投机模型的 GLM C8，保留了打包 C8 KPool 混合块对齐，并保留了首个打包因果卷积状态。 [#17919](https://github.com/vllm-project/vllm-ascend/issues/17919) [#17922](https://github.com/vllm-project/vllm-ascend/issues/17922) [#17828](https://github.com/vllm-project/vllm-ascend/issues/17828)
- 修复了 DSA CP FULL graph 重放元数据，并将 DSpark SAS 元数据与共享可见 KV 对齐。 [#17750](https://github.com/vllm-project/vllm-ascend/issues/17750) [#17911](https://github.com/vllm-project/vllm-ascend/issues/17911)
- 修复了 MXFP8 O-proj TP 和 MRV2 DSACP 服务，并在 AscendApplyRotaryEmb 中遵循交错 RoPE。 [#17961](https://github.com/vllm-project/vllm-ascend/issues/17961) [#17825](https://github.com/vllm-project/vllm-ascend/issues/17825)
- 修复了 MooncakeConnectorV1 组合 attention 缓存归一化，并在稀疏 KV 卸载中重置请求级状态。 [#17867](https://github.com/vllm-project/vllm-ascend/issues/17867) [#17708](https://github.com/vllm-project/vllm-ascend/issues/17708)
- 修复了 310P kernel 块大小，以保持与物理 KV cache 块兼容。 [#17964](https://github.com/vllm-project/vllm-ascend/issues/17964)
- 修复了 MLA 空 PCP prefill rank 以及短 prefill 的 SFA O-projection gather。 [#17972](https://github.com/vllm-project/vllm-ascend/issues/17972) [#17947](https://github.com/vllm-project/vllm-ascend/issues/17947)
- 修复了 Model Runner V2 中的 Engram 历史和查找时序，并修复了多节点 DP 节点本地 head 分片。 [#17794](https://github.com/vllm-project/vllm-ascend/issues/17794) [#17427](https://github.com/vllm-project/vllm-ascend/issues/17427)
- 在混合缓存页重新分配时恢复 C8 V scales。 [#17956](https://github.com/vllm-project/vllm-ascend/issues/17956)
- 使用 MoE config 解析 MoE 通信方法，移除了 needexpertscale 设置，并在 MegaMoe 中支持 SiTU 和 MRV2。 [#17916](https://github.com/vllm-project/vllm-ascend/issues/17916) [#18024](https://github.com/vllm-project/vllm-ascend/issues/18024) [#17587](https://github.com/vllm-project/vllm-ascend/issues/17587)
- 在延迟 PP 后处理之前恢复 Mamba 块表，并避免在昇腾上进行完整的循环状态拷贝。 [#17954](https://github.com/vllm-project/vllm-ascend/issues/17954) [#17565](https://github.com/vllm-project/vllm-ascend/issues/17565)
- 将 worldSize 显式传递给 dispatchffncombine 算子，并将 constexpr 参数传递给 KDA 编译启动器。 [#17914](https://github.com/vllm-project/vllm-ascend/issues/17914) [#17913](https://github.com/vllm-project/vllm-ascend/issues/17913)
- 避免了 vocab parallel embedding 中 torch.compile 下的 ConstraintViolationError，并使非 PA FIA 的 key 和 value 连续。 [#17903](https://github.com/vllm-project/vllm-ascend/issues/17903) [#17925](https://github.com/vllm-project/vllm-ascend/issues/17925)
- 修复了 DFlash2 eager 元数据和 QuaRot 权重对齐，并对齐了混合 DFlash K/V 页。 [#17772](https://github.com/vllm-project/vllm-ascend/issues/17772) [#17683](https://github.com/vllm-project/vllm-ascend/issues/17683)
- 限制了昇腾 V2 并行草稿 dummy 请求，修复了 FIA 的投机 PP CPU token 计数，并在 graph capture 期间保留复制的草稿 dummy 元数据。 [#17746](https://github.com/vllm-project/vllm-ascend/issues/17746) [#17675](https://github.com/vllm-project/vllm-ascend/issues/17675) [#17747](https://github.com/vllm-project/vllm-ascend/issues/17747)
- 对仅 PCP 的复制草稿禁用 EPLB，并在 xlite 中通过 istensornz 检查修正 MoE gate 权重的 NZ 标志。 [#17959](https://github.com/vllm-project/vllm-ascend/issues/17959) [#17627](https://github.com/vllm-project/vllm-ascend/issues/17627)
- 在 KV Pool 中同步 MemCache 初始化。 [#17289](https://github.com/vllm-project/vllm-ascend/issues/17289)
- 在 cudagraph capture 后将静态 KV buffer 置零。 [#17659](https://github.com/vllm-project/vllm-ascend/issues/17659)
- 在 Model Runner V2 中拒绝旧版 DSA-CP。 [#18206](https://github.com/vllm-project/vllm-ascend/issues/18206)
- 修复了 CANN MegaMoE 的 E8M0 scale dtype 和缺失的 activation kwargs。 [#18157](https://github.com/vllm-project/vllm-ascend/issues/18157) [#18137](https://github.com/vllm-project/vllm-ascend/issues/18137)
- 在抢占卸载中处理混合缓存视图。 [#18140](https://github.com/vllm-project/vllm-ascend/issues/18140)
- 为全词表 DSpark 模型定义草稿 token 映射，并处理不带 TurboQuant 的 DSpark 后端。 [#18182](https://github.com/vllm-project/vllm-ascend/issues/18182) [#18183](https://github.com/vllm-project/vllm-ascend/issues/18183)
- 对 MiniMax-M3 FP8 KV 使用 64 token 的 kernel 最小值。 [#18125](https://github.com/vllm-project/vllm-ascend/issues/18125)
- 为 ACL graph padding 调整 DFlash query buffer 大小。 [#17379](https://github.com/vllm-project/vllm-ascend/issues/17379)
- 移除了 QSFA tiling 中遗留的调试日志。 [#18110](https://github.com/vllm-project/vllm-ascend/issues/18110)
- 当 oproj 容量超出时，引导用户查看 recipe 修复方案。 [#18126](https://github.com/vllm-project/vllm-ascend/issues/18126)
- 将 DSA 块大小设为 Triton constexpr 对象。 [#18079](https://github.com/vllm-project/vllm-ascend/issues/18079)
- 在 DP 和 MTP 下保留 PIECEWISE dummy query 宽度。 [#18038](https://github.com/vllm-project/vllm-ascend/issues/18038)
- 在 MRV2 上支持 encoder-decoder 模型状态。 [#17979](https://github.com/vllm-project/vllm-ascend/issues/17979)
- 避免了 MiniMax-M3 MRV2 forward 中的 current-config 查找。 [#17994](https://github.com/vllm-project/vllm-ascend/issues/17994)
- 在 KV cache 中归一化 GQA 元组并注册跨步缓存 span。 [#17934](https://github.com/vllm-project/vllm-ascend/issues/17934)
- 对齐了 MLA DCP DSpark 草稿元数据。 [#17580](https://github.com/vllm-project/vllm-ascend/issues/17580)
- 移除了 MRv1 routed-experts capture，并保持 MRV2 可启动。 [#17315](https://github.com/vllm-project/vllm-ascend/issues/17315)
- 在 CompressorMetadataKernel 中将 tilingData 标记为 const。 [#17463](https://github.com/vllm-project/vllm-ascend/issues/17463)
- 在 EPLB 中保留了专家缓冲区的 NPU 格式。 [#18015](https://github.com/vllm-project/vllm-ascend/issues/18015)
- 更新了 CPP 中在线校准模型的线性项。 [#18303](https://github.com/vllm-project/vllm-ascend/issues/18303)
- 在 TP>1 时将 EC 缓存加载设备固定到正确的 NPU 索引。 [#18291](https://github.com/vllm-project/vllm-ascend/issues/18291)
- 根据实际稀疏索引推导 GLM-5.3-Flash SMLA 方案。 [#18283](https://github.com/vllm-project/vllm-ascend/issues/18283)
- 在 SFA 中保留了 PCP decode 所有权和 KV-copy kernel 复用。 [#18266](https://github.com/vllm-project/vllm-ascend/issues/18266)
- 当 oproj 容量超出时，引导用户查看 recipe 修复方案。 [#18272](https://github.com/vllm-project/vllm-ascend/issues/18272)
- 在 cudagraph 捕获后将静态 KV 缓冲区清零。 [#18263](https://github.com/vllm-project/vllm-ascend/issues/18263)
- 为混合 PD 重计算尾部保留了 decode 图。 [#18152](https://github.com/vllm-project/vllm-ascend/issues/18152)
- 在 Model Runner V2 中拒绝了旧版 DSA-CP。 [#18210](https://github.com/vllm-project/vllm-ascend/issues/18210)
- 处理了空的 MLA PCP prefill rank。 [#18195](https://github.com/vllm-project/vllm-ascend/issues/18195)
- 对仅 PCP 的复制 draft 禁用了 EPLB。 [#18194](https://github.com/vllm-project/vllm-ascend/issues/18194)
- 在 P/D 中处理了 preempt offload 的混合缓存视图。 [#18141](https://github.com/vllm-project/vllm-ascend/issues/18141)
- 为全词表 DSpark 模型定义了 draft token 映射。 [#18184](https://github.com/vllm-project/vllm-ascend/issues/18184)
- 为 M3 FP8 KV 使用了 64-token kernel 最小值。 [#18132](https://github.com/vllm-project/vllm-ascend/issues/18132)
- 处理了不带 TurboQuant 的 DSpark 后端。 [#18185](https://github.com/vllm-project/vllm-ascend/issues/18185)
- 在 MRV2 上支持了 encoder-decoder 模型状态。 [#18044](https://github.com/vllm-project/vllm-ascend/issues/18044)
- 将 DSA block size 设为 Triton constexpr 对象。 [#18080](https://github.com/vllm-project/vllm-ascend/issues/18080)
- 在 DP 和 MTP 下保留了 PIECEWISE dummy query 宽度。 [#18108](https://github.com/vllm-project/vllm-ascend/issues/18108)
- 遵循了逐层 KV cache dtype。 [#18062](https://github.com/vllm-project/vllm-ascend/issues/18062)
- 修复了 Model Runner V2 中的 Engram 历史和查找时序。 [#18052](https://github.com/vllm-project/vllm-ascend/issues/18052)
- 复用了上游 PCP 推测和 dummy batch 处理。 [#17632](https://github.com/vllm-project/vllm-ascend/issues/17632)
- 将 P/D 重计算调度器与 0.30.0 的 main2main 对齐。 [#17672](https://github.com/vllm-project/vllm-ascend/issues/17672)

##### 已知问题

- 已回退所有配置下默认使用 Model Runner V2 的改动；MRV2 仍按配置选择性启用。 [#17661](https://github.com/vllm-project/vllm-ascend/issues/17661)
- 已在发布分支上回退 MRV1 dirty block-table 优化。 [#17470](https://github.com/vllm-project/vllm-ascend/issues/17470)
- 已回退已解决的 prefix retention 配置传播。 [#18029](https://github.com/vllm-project/vllm-ascend/issues/18029)

#### v0.23.0.post1 · 2026.09.21（中文）

##### 错误修复

- 修复了 DP 对齐 dummy run 期间 KV cache 的陈旧写入问题，方法是在构建 attention metadata 之前使每个 KV group 的 slot 映射失效。 [#15362](https://github.com/vllm-project/vllm-ascend/issues/15362)
- 修复了 Atlas 300I DUO 上 MTP overlay prefix cache 的精度问题，并在 ACL Graph 模式下保持 W8A8 MXFP8 转换缓冲区在 RL 权重重新加载过程中的稳定性。 [#14336](https://github.com/vllm-project/vllm-ascend/issues/14336) [#13905](https://github.com/vllm-project/vllm-ascend/issues/13905)

##### 其他变更

- 将 KV Pool 依赖固定为 memfabrichybrid==1.2.0 和 memcachehybrid==1.2.0 。 [#14352](https://github.com/vllm-project/vllm-ascend/issues/14352)
- 添加了发布分支的 nightly 和 weekly 模型配置，并在发布镜像中安装了 concurrent-log-handler 。 [#14559](https://github.com/vllm-project/vllm-ascend/issues/14559) [#14645](https://github.com/vllm-project/vllm-ascend/issues/14645) [#14739](https://github.com/vllm-project/vllm-ascend/issues/14739) [#16191](https://github.com/vllm-project/vllm-ascend/issues/16191)

#### v0.26.0rc1 · 2026.09.03（中文）

##### 亮点

- 稀疏注意力上下文并行 ：新增SFA DCP，支持复制索引器、紧凑KV收集和C8支持。为具有复制索引器的DCP启用了P/D分离。 [#11443](https://github.com/vllm-project/vllm-ascend/issues/11443) [#11870](https://github.com/vllm-project/vllm-ascend/issues/11870) [#11980](https://github.com/vllm-project/vllm-ascend/issues/11980) [#11696](https://github.com/vllm-project/vllm-ascend/issues/11696)
- 弃用清理 ：移除了层分片、FlashComm2、多流重叠门控、动态批处理SLO、权重预取、矩阵乘法全归约融合以及KV Pool中的KV卸载，以精简代码库。 [#11953](https://github.com/vllm-project/vllm-ascend/issues/11953) [#12117](https://github.com/vllm-project/vllm-ascend/issues/12117) [#11956](https://github.com/vllm-project/vllm-ascend/issues/11956) [#11933](https://github.com/vllm-project/vllm-ascend/issues/11933) [#11949](https://github.com/vllm-project/vllm-ascend/issues/11949) [#12119](https://github.com/vllm-project/vllm-ascend/issues/12119) [#11904](https://github.com/vllm-project/vllm-ascend/issues/11904)

##### 功能特性

- 新增对未量化MoE模型的LoRA支持，以及AlltoAll + EP + LoRA支持。 [#10977](https://github.com/vllm-project/vllm-ascend/issues/10977) [#12451](https://github.com/vllm-project/vllm-ascend/issues/12451)
- 为Eagle3和DFlash新增KV滑动窗口。 [#10023](https://github.com/vllm-project/vllm-ascend/issues/10023)
- 新增ShortRequestFirst调度和批处理作业感知调度器。 [#11576](https://github.com/vllm-project/vllm-ascend/issues/11576) [#12240](https://github.com/vllm-project/vllm-ascend/issues/12240) [#12719](https://github.com/vllm-project/vllm-ascend/issues/12719)
- 为预取卸载新增NZ静态缓冲区。 [#11945](https://github.com/vllm-project/vllm-ascend/issues/11945)
- 为NPU Worker新增更新配置和重新加载权重功能。 [#10126](https://github.com/vllm-project/vllm-ascend/issues/10126)
- 新增SFA C8支持：A3上的统一打包KV缓存布局，以及稀疏注意力路径的DCP复制索引器。 [#11228](https://github.com/vllm-project/vllm-ascend/issues/11228) [#11870](https://github.com/vllm-project/vllm-ascend/issues/11870)

##### 硬件与算子支持

- 扩展了Ascend 950支持：用于token分发的MXFP量化，以及带拓扑集群的CPU绑定。 [#11614](https://github.com/vllm-project/vllm-ascend/issues/11614) [#11717](https://github.com/vllm-project/vllm-ascend/issues/11717)
- 新增算子支持：KV量化稀疏Flash注意力，以及Triton SwiGLuStep内核（取代基于AscendC的fusedgdngating）。 [#11626](https://github.com/vllm-project/vllm-ascend/issues/11626) [#11467](https://github.com/vllm-project/vllm-ascend/issues/11467) [#12035](https://github.com/vllm-project/vllm-ascend/issues/12035)

##### 性能

- 优化了PCP FA恢复和输出合并，以减少开销。 [#11586](https://github.com/vllm-project/vllm-ascend/issues/11586)
- 在SFA元数据中向量化本地序列长度计算，以消除每次请求的NPU到CPU同步。 [#11762](https://github.com/vllm-project/vllm-ascend/issues/11762)
- 在上下文并行推测提议者元数据中避免了H2D同步。 [#11496](https://github.com/vllm-project/vllm-ascend/issues/11496)
- 使用融合的Triton内核和缓存优化了DSA-CP本地令牌元数据。 [#12193](https://github.com/vllm-project/vllm-ascend/issues/12193)
- 将混合的ChunkedPrefill拆分为独立的解码和预填充注意力调用。 [#11948](https://github.com/vllm-project/vllm-ascend/issues/11948)
- 优化了AscendStore键构建和未命中路径处理。 [#12814](https://github.com/vllm-project/vllm-ascend/issues/12814)
- 移除了DSA-CP的QLIMetadata构建器中的D2H同步。 [#12536](https://github.com/vllm-project/vllm-ascend/issues/12536)
- 将Mooncake接收线程绑定到KV缓存设备。 [#12126](https://github.com/vllm-project/vllm-ascend/issues/12126)

##### 依赖项

- 上游vLLM ：v0.26.0。
- Python ：>= 3.10, < 3.13。
- CANN ：9.1.0。
- PyTorch / torchnpu ：2.10.0 / 2.10.0.post4。
- Triton Ascend ：适用于A2、A3和Ascend 950的3.2.2；Atlas 300I DUO不支持Triton Ascend。
- Mooncake ：发布镜像中的0.3.11.post1。

##### 弃用和破坏性变更

- 移除了层分片。 [#11953](https://github.com/vllm-project/vllm-ascend/issues/11953)
- 移除了FlashComm2优化技术。 [#12117](https://github.com/vllm-project/vllm-ascend/issues/12117)
- 移除了多流重叠门控。 [#11956](https://github.com/vllm-project/vllm-ascend/issues/11956)
- 移除了动态批处理SLO。 [#11933](https://github.com/vllm-project/vllm-ascend/issues/11933)
- 移除了权重预取配置。 [#11949](https://github.com/vllm-project/vllm-ascend/issues/11949)
- 移除了matmul all-reduce和matmul all-reduce RMSNorm融合。 [#12119](https://github.com/vllm-project/vllm-ascend/issues/12119)
- 移除了KV Pool中的KV卸载。 [#11904](https://github.com/vllm-project/vllm-ascend/issues/11904)
- 移除了 dpallreduceonnpu 附加配置选项。 [#12496](https://github.com/vllm-project/vllm-ascend/issues/12496)
- 从MRV1中移除了PCP；使用MRV2进行预填充上下文并行。 [#12592](https://github.com/vllm-project/vllm-ascend/issues/12592)
- 移除了自定义top-k top-p AscendC实现，转而使用CANN算子。 [#12232](https://github.com/vllm-project/vllm-ascend/issues/12232)
- 重构了hamming操作并移除了稀疏操作。 [#12049](https://github.com/vllm-project/vllm-ascend/issues/12049)
- 弃用了 ASCENDBUFFERPOOL 环境变量；请使用 ASCENDENABLEUSEFABRICMEM=1 或 HCCLINTRAROCEENABLE=1 。 [#13856](https://github.com/vllm-project/vllm-ascend/issues/13856)

##### 即将弃用

- 为W4A8线性、W4A8 MoE逐组和W8A8 PDMix MoE量化添加了弃用警告。这些量化路径将在未来版本中移除。 [#13850](https://github.com/vllm-project/vllm-ascend/issues/13850)
- additional-config 中的 megamoemaxtokens 和 enablefusedmc2 配置将在下一版本中移入一个新的专用字典以进行集中维护。
- reduce sampling 功能是实验性的，将在未来版本中弃用。我们将遵循上游vLLM社区关于 batch-sharded sampling 功能的做法。

##### 文档

- 添加了KV Pool和Memcache SSD缓存配置指南。 [#12600](https://github.com/vllm-project/vllm-ascend/issues/12600) [#12670](https://github.com/vllm-project/vllm-ascend/issues/12670)
- 添加了RLHF LoRA HTTP API示例和端到端RLHF异步暂停/恢复示例。 [#14672](https://github.com/vllm-project/vllm-ascend/issues/14672) [#12300](https://github.com/vllm-project/vllm-ascend/issues/12300)

##### 稳定性与错误修复

- 修复了P/D、PCP、MTP和DCP中GDN状态和图调度精度回归问题。 [#11195](https://github.com/vllm-project/vllm-ascend/issues/11195) [#11893](https://github.com/vllm-project/vllm-ascend/issues/11893) [#12027](https://github.com/vllm-project/vllm-ascend/issues/12027)
- 修复了KV传输顺序、Mooncake分组以及AscendStore哈希/租约处理问题。 [#11887](https://github.com/vllm-project/vllm-ascend/issues/11887) [#12252](https://github.com/vllm-project/vllm-ascend/issues/12252) [#12012](https://github.com/vllm-project/vllm-ascend/issues/12012)
- 修复了DCP/DP服务挂起问题，并将重计算调度器限制为仅解码节点。 [#12036](https://github.com/vllm-project/vllm-ascend/issues/12036) [#11265](https://github.com/vllm-project/vllm-ascend/issues/11265) [#11537](https://github.com/vllm-project/vllm-ascend/issues/11537)
- 修复了310P投机解码精度、SDMA错误和内存计算问题。 [#11918](https://github.com/vllm-project/vllm-ascend/issues/11918) [#11678](https://github.com/vllm-project/vllm-ascend/issues/11678) [#11959](https://github.com/vllm-project/vllm-ascend/issues/11959)
- 修复了DSpark多DP错误和SP处理问题。 [#12612](https://github.com/vllm-project/vllm-ascend/issues/12612) [#12777](https://github.com/vllm-project/vllm-ascend/issues/12777)
- 修复了MLA-CP和GQA路径中fusedinferattention的连续内存错误。 [#11986](https://github.com/vllm-project/vllm-ascend/issues/11986) [#12025](https://github.com/vllm-project/vllm-ascend/issues/12025)
- 修复了DSA-CP中图填充的无效本地序列长度问题。 [#12840](https://github.com/vllm-project/vllm-ascend/issues/12840)
- 修复了逐层KV池中无效GVA处理问题。 [#12705](https://github.com/vllm-project/vllm-ascend/issues/12705)
- 修复了DP和PCP下AllGather MoE最终化顺序问题。 [#11921](https://github.com/vllm-project/vllm-ascend/issues/11921)
- 修复了批处理不变性未生效的问题。 [#11818](https://github.com/vllm-project/vllm-ascend/issues/11818)
- 修复了Qwen3.x多层KV缓存绑定问题。 [#11470](https://github.com/vllm-project/vllm-ascend/issues/11470)
- 修复了Triton中投机解码拒绝采样长度-1的bug。 [#11458](https://github.com/vllm-project/vllm-ascend/issues/11458)
- 修复了CPU绑定设备映射问题。 [#15518](https://github.com/vllm-project/vllm-ascend/issues/15518)
- 为vLLM 0.26移植了结构化输出修复。 [#15433](https://github.com/vllm-project/vllm-ascend/issues/15433)
- 在注意力元数据构建前使虚拟槽位失效。 [#15409](https://github.com/vllm-project/vllm-ascend/issues/15409)
- 在稀疏注意力下跳过generatemtpattentionmaskfordecode以避免hostbound。 [#15130](https://github.com/vllm-project/vllm-ascend/issues/15130)

##### 已知问题

- Qwen3-32B W8A8/QuaRot在v0.26.0rc的PD分离或启用池化场景下可能出现轻微性能回退。 [#15295](https://github.com/vllm-project/vllm-ascend/issues/15295)

#### v0.23.0 · 2026.08.16（中文）

##### 亮点

- 上下文并行与稀疏注意力 ：新增了带复制索引器的SFA DCP、紧凑KV收集、C8支持以及面向长上下文和P/D分离部署的设备端元数据路径。 [#9638](https://github.com/vllm-project/vllm-ascend/issues/9638) [#9809](https://github.com/vllm-project/vllm-ascend/issues/9809) [#11819](https://github.com/vllm-project/vllm-ascend/issues/11819) [#11871](https://github.com/vllm-project/vllm-ascend/issues/11871) [#11981](https://github.com/vllm-project/vllm-ascend/issues/11981)
- KV缓存生命周期与卸载 ：新增了混合/Mamba注意力前缀缓存；AscendStore中的CPU和SSD卸载覆盖所有后端。 [#8743](https://github.com/vllm-project/vllm-ascend/issues/8743) [#9533](https://github.com/vllm-project/vllm-ascend/issues/9533) [#9731](https://github.com/vllm-project/vllm-ascend/issues/9731) [#10393](https://github.com/vllm-project/vllm-ascend/issues/10393)
- 图执行与投机执行 ：新增了 FULLANDPIECEWISE 图模式，该模式默认启用且无需手动配置；DFlash FULLDECODEONLY ；零气泡异步调度；P-Eagle和PARD；以及扩展的MTP/Eagle3支持。 [#7640](https://github.com/vllm-project/vllm-ascend/issues/7640) [#8118](https://github.com/vllm-project/vllm-ascend/issues/8118) [#9572](https://github.com/vllm-project/vllm-ascend/issues/9572) [#10042](https://github.com/vllm-project/vllm-ascend/issues/10042) [#10566](https://github.com/vllm-project/vllm-ascend/issues/10566)

##### 功能特性

- 新增了多模态DFlash、面向Qwen VL/MoE模型的FlashComm支持，以及支持PCP感知的多模态推理。 [#7486](https://github.com/vllm-project/vllm-ascend/issues/7486) [#7897](https://github.com/vllm-project/vllm-ascend/issues/7897) [#8038](https://github.com/vllm-project/vllm-ascend/issues/8038) [#9340](https://github.com/vllm-project/vllm-ascend/issues/9340)
- 新增了面向强化学习工作负载的HCCL权重传输，以及面向投机草稿模型的D2D NetLoader支持。 [#9152](https://github.com/vllm-project/vllm-ascend/issues/9152) [#9893](https://github.com/vllm-project/vllm-ascend/issues/9893)
- 扩展了Model Runner V2，增加了初步的MoE和Eagle支持。 [#7885](https://github.com/vllm-project/vllm-ascend/issues/7885) [#7922](https://github.com/vllm-project/vllm-ascend/issues/7922)
- 扩展了EPLB，增加了额外的可观测性和动态负载均衡器示例。 [#9536](https://github.com/vllm-project/vllm-ascend/issues/9536) [#10627](https://github.com/vllm-project/vllm-ascend/issues/10627)
- 将C8 INT8 KV缓存扩展到具有打包布局和DCP复制索引器的稀疏注意力路径，并为Ascend 950新增了W8A8FP8和W4A16 MXFP量化路径。 [#10236](https://github.com/vllm-project/vllm-ascend/issues/10236) [#11014](https://github.com/vllm-project/vllm-ascend/issues/11014) [#11846](https://github.com/vllm-project/vllm-ascend/issues/11846) [#11871](https://github.com/vllm-project/vllm-ascend/issues/11871)

##### 硬件与算子支持

- 新增并优化了循环GDN、因果Conv1D、稀疏注意力、LightningIndexer、压缩器和融合量化算子。 [#7798](https://github.com/vllm-project/vllm-ascend/issues/7798) [#7926](https://github.com/vllm-project/vllm-ascend/issues/7926) [#9382](https://github.com/vllm-project/vllm-ascend/issues/9382) [#9491](https://github.com/vllm-project/vllm-ascend/issues/9491) [#9825](https://github.com/vllm-project/vllm-ascend/issues/9825) [#10730](https://github.com/vllm-project/vllm-ascend/issues/10730)
- 新增了Python 3.12支持，并将发布镜像迁移至Python 3.12。 [#9558](https://github.com/vllm-project/vllm-ascend/issues/9558)

##### 性能

- 将受支持的A2/A3注意力工作负载中的 npufusionattention 替换为 npuflashattentionunpad 。该选择是自动的，无需手动设置。 [#8671](https://github.com/vllm-project/vllm-ascend/issues/8671)
- 在使用PCP进行MLA预填充时，避免投影未使用的尾部KV令牌。通过 --prefill-context-parallel-size 启用PCP，优化将自动生效。 [#8787](https://github.com/vllm-project/vllm-ascend/issues/8787)
- 减少了使用异步调度的工作负载中的调度器发放气泡。通过 --async-scheduling 启用。 [#8766](https://github.com/vllm-project/vllm-ascend/issues/8766)
- 为异步推测解码添加了零气泡调度。通过 --async-scheduling 结合推测解码配置启用。 [#7640](https://github.com/vllm-project/vllm-ascend/issues/7640)
- 使用 aclrtMemcpyBatchAsync 对CPU卸载工作负载的KV缓存卸载副本进行批处理。按文档配置KV缓存CPU卸载；该路径中的批处理是自动的。 [#7819](https://github.com/vllm-project/vllm-ascend/issues/7819)
- 通过在通信前选择所需块，减少了PCP/DCP KV缓存全收集流量。通过 --prefill-context-parallel-size 或 --decode-context-parallel-size 启用PCP或DCP；无需单独的优化开关。 [#8050](https://github.com/vllm-project/vllm-ascend/issues/8050)
- 优化了受支持的量化模型路径中的 splitqkvtprmsnormrope 内核。内核选择是自动的，无需手动设置。 [#8059](https://github.com/vllm-project/vllm-ascend/issues/8059) [#9830](https://github.com/vllm-project/vllm-ascend/issues/9830)
- 减少了PCP/DCP的SFA预填充KV全收集通信。启用相应的上下文并行模式；优化的通信路径是自动的。 [#8043](https://github.com/vllm-project/vllm-ascend/issues/8043)
- 为使用重复、频率或存在惩罚的请求添加了Triton惩罚内核。当请求惩罚时自动选择。 [#7569](https://github.com/vllm-project/vllm-ascend/issues/7569)
- 优化了Model Runner V2的温度和top-k log-softmax内核。在Model Runner V2上为采样工作负载自动选择。 [#8083](https://github.com/vllm-project/vllm-ascend/issues/8083)
- 优化了Model Runner V2的min-p内核。当请求min-p采样时自动应用。 [#8243](https://github.com/vllm-project/vllm-ascend/issues/8243) [#7767](https://github.com/vllm-project/vllm-ascend/issues/7767)
- 为坏词过滤添加了Model Runner V2 Triton内核。当提供 badwords 时自动应用。 [#8030](https://github.com/vllm-project/vllm-ascend/issues/8030)
- 优化了Model Runner V2的bincount内核。为需要令牌计数的采样路径自动选择。 [#7757](https://github.com/vllm-project/vllm-ascend/issues/7757)
- 优化了Model Runner V2的ranks内核。为相应的采样路径自动选择。 [#7767](https://github.com/vllm-project/vllm-ascend/issues/7767)
- 减少了由运行时函数参数引起的可避免的Triton重新编译。缓存友好的路径是自动的，无需手动设置。 [#7481](https://github.com/vllm-project/vllm-ascend/issues/7481) [#7483](https://github.com/vllm-project/vllm-ascend/issues/7483)
- 重用等效的HCCL进程组以减少分布式初始化开销。匹配组的重用是自动的。 [#7654](https://github.com/vllm-project/vllm-ascend/issues/7654)
- 将CPU绑定延迟到工作器预热完成后，以避免干扰初始化。在受支持的ARM服务器上默认启用CPU绑定；除非显式禁用，否则无需手动设置。 [#7829](https://github.com/vllm-project/vllm-ascend/issues/7829)
- 当内核大小等于步长时，将符合条件的Conv3D操作转换为线性操作。匹配模型的转换是自动的。 [#8318](https://github.com/vllm-project/vllm-ascend/issues/8318)
- 优化了Ascend 310P上的MoE路由。自动应用于受支持的310P MoE工作负载。 [#9105](https://github.com/vllm-project/vllm-ascend/issues/9105)
- 为受支持的量化模型添加了NZ格式的W4A8 MoE压缩张量。使用Ascend量化加载兼容的W4A8检查点；格式选择是自动的。 [#9625](https://github.com/vllm-project/vllm-ascend/issues/9625)
- 优化了带推测解码的PCP/DCP的不规则掩码构建。启用上下文并行和推测解码；无需单独的优化开关。 [#9678](https://github.com/vllm-project/vllm-ascend/issues/9678)
- 重新设计了DFlash和MTP的reduce采样。这仍然是实验性的，默认禁用；通过 additionalconfig.enablereducesample=true 为分布式贪婪、top-k/top-p或拒绝采样启用。 [#8308](https://github.com/vllm-project/vllm-ascend/issues/8308) [#9735](https://github.com/vllm-project/vllm-ascend/issues/9735)
- 移除了PIECEWISE图执行中的主机-设备同步点。 FULLANDPIECEWISE 是默认图模式，因此无需手动配置。 [#9025](https://github.com/vllm-project/vllm-ascend/issues/9025)
- 优化了FusedMoE中的共享专家重叠时序。启用受支持的共享专家重叠配置；该路径中的时序优化是自动的。 [#9413](https://github.com/vllm-project/vllm-ascend/issues/9413)
- 跳过了混合缓存模型中Mamba组的不必要槽映射计算。当模型使用Mamba缓存组时自动应用。 [#10492](https://github.com/vllm-project/vllm-ascend/issues/10492)
- 在设备上构建单秩DSA压缩器元数据，以消除CPU构建和同步。自动应用于符合条件的非CP DSA压缩KV路径。 [#10741](https://github.com/vllm-project/vllm-ascend/issues/10741)
- 向量化了SFA本地序列长度计算，以消除每个请求的NPU到CPU同步。自动应用于SFA工作负载。 [#11816](https://github.com/vllm-project/vllm-ascend/issues/11816)
- 将SFA DSA-CP输出合并的完全全收集替换为令牌分片的全对全，以减少通信和峰值接收缓冲区使用。启用FlashComm1和 additionalconfig.enabledsacp=true ；无需单独的优化开关。 [#12137](https://github.com/vllm-project/vllm-ascend/issues/12137)
- 减少了PCP FlashAttention路径中的恢复和输出合并开销。通过 --prefill-context-parallel-size 启用PCP；优化的恢复路径是自动的。 [#11842](https://github.com/vllm-project/vllm-ascend/issues/11842)
- 在构建上下文并行推测提议者元数据时避免主机到设备同步。启用上下文并行和推测解码；优化的元数据路径是自动的。 [#11862](https://github.com/vllm-project/vllm-ascend/issues/11862)
- 在异步主机到设备复制之前快照查询起始位置，以保留非阻塞元数据传输。自动应用于异步复制路径。 [#12071](https://github.com/vllm-project/vllm-ascend/issues/12071)
- 添加了融合的W4A8 MoE调度、FFN和合并，以重叠通信与计算。使用Ascend量化加载受支持的W4A8 MoE检查点；融合内核选择是自动的。 [#7779](https://github.com/vllm-project/vllm-ascend/issues/7779)
- 为DSA-CP输出投影TP权重添加了异步全收集。启用FlashComm1和 additionalconfig.enabledsacp=true ；异步路径是自动的。 [#10694](https://github.com/vllm-project/vllm-ascend/issues/10694)
- 为P/D分离部署并行化了Mooncake KV接收处理。配置Mooncake KV传输连接器；接收并行是自动的。 [#10548](https://github.com/vllm-project/vllm-ascend/issues/10548)
- 优化了AscendStore键构建和KV池未命中处理以减少主机开销。配置 AscendStoreConnector ；优化的路径将自动选择。 [#12783](https://github.com/vllm-project/vllm-ascend/issues/12783) †
- 在AscendStore查询、保存和加载操作中重用分组块哈希，以减少重复的主机端哈希计算。配置 AscendStoreConnector ；重用是自动的。 [#13169](https://github.com/vllm-project/vllm-ascend/issues/13169) †

##### 稳定性与错误修复

- 修复了P/D、PCP、MTP和DCP中GDN状态和图调度精度的回归问题，包括单token有状态预填充处理。 [#11195](https://github.com/vllm-project/vllm-ascend/issues/11195) [#11893](https://github.com/vllm-project/vllm-ascend/issues/11893) [#12027](https://github.com/vllm-project/vllm-ascend/issues/12027) [#12255](https://github.com/vllm-project/vllm-ascend/issues/12255) †
- 修复了KV传输顺序和TP分片一致性、Mooncake分组、AscendStore哈希/租约/查找处理以及逐层KV Pool失败问题。 [#11887](https://github.com/vllm-project/vllm-ascend/issues/11887) [#12252](https://github.com/vllm-project/vllm-ascend/issues/12252) [#12371](https://github.com/vllm-project/vllm-ascend/issues/12371) † [#12797](https://github.com/vllm-project/vllm-ascend/issues/12797) † [#12819](https://github.com/vllm-project/vllm-ascend/issues/12819) †
- 修复了DCP/DP服务挂起问题，将重计算调度器限制为仅解码节点，并将AscendStore初始化延迟到首次真实解码请求。 [#12034](https://github.com/vllm-project/vllm-ascend/issues/12034) [#11490](https://github.com/vllm-project/vllm-ascend/issues/11490) [#11673](https://github.com/vllm-project/vllm-ascend/issues/11673)
- 禁用了与融合MC2不支持的共享专家多流重叠，并修复了SFA与DSA-CP及多个投机token的低MTP接受率问题。 [#12245](https://github.com/vllm-project/vllm-ascend/issues/12245) [#10878](https://github.com/vllm-project/vllm-ascend/issues/10878)
- 修复了AscendStore与流水线并行的兼容性并暴露了后端失败。 [#12762](https://github.com/vllm-project/vllm-ascend/issues/12762) †
- 修复了逐层KV Pool传输中无效GVA的处理。 [#12643](https://github.com/vllm-project/vllm-ascend/issues/12643) †
- 修复了A5 BF16 mmreducescatter 通信模式选择，并将FP8量化检测限制为仅A5设备。 [#12826](https://github.com/vllm-project/vllm-ascend/issues/12826) † [#12895](https://github.com/vllm-project/vllm-ascend/issues/12895) †
- 将SFA DSA-CP KV张量打包为一次all-gather，以纠正并简化通信路径。 [#12867](https://github.com/vllm-project/vllm-ascend/issues/12867) †
- 在Atlas 300I DUO上自动禁用不支持的 npugraphex 编译，并修复了底层旋转和稀疏注意力平铺/元数据问题。 [#12366](https://github.com/vllm-project/vllm-ascend/issues/12366) † [#12446](https://github.com/vllm-project/vllm-ascend/issues/12446) † [#12841](https://github.com/vllm-project/vllm-ascend/issues/12841) †
- 修复了小token形状下 npudequantswigluquant 的精度问题，并将 returnlse 传播到QuantSFA算子。 [#12913](https://github.com/vllm-project/vllm-ascend/issues/12913) † [#13197](https://github.com/vllm-project/vllm-ascend/issues/13197) †
- 移除了不必要的Memcache惰性初始化，并通过恢复同步保存、向调度器报告异步加载失败以及在传输线程中使用分组块大小来强化AscendStore传输。 [#13028](https://github.com/vllm-project/vllm-ascend/issues/13028) † [#13024](https://github.com/vllm-project/vllm-ascend/issues/13024) † [#13099](https://github.com/vllm-project/vllm-ascend/issues/13099) † [#13110](https://github.com/vllm-project/vllm-ascend/issues/13110) †
- 从自定义算子CMake构建中移除了 -Werror ，使编译器警告不会导致发布构建失败。 [#13095](https://github.com/vllm-project/vllm-ascend/issues/13095) †

##### 依赖项

- 上游vLLM ：v0.23.0。
- Python ：>= 3.10, < 3.13。
- CANN ：A2、A3和Ascend 950使用9.1.0；有关Atlas 300I DUO的平台特定CANN包，请参阅其安装指南。 [#13421](https://github.com/vllm-project/vllm-ascend/issues/13421) †
- PyTorch / torchnpu ：2.10.0 / 2.10.0.post4。
- Triton Ascend ：A2、A3和Ascend 950使用3.2.2；Atlas 300I DUO不支持Triton Ascend。
- Mooncake ：发布镜像中包含0.3.11.post1。

##### 弃用与配置变更

- 原先的 enablesparsec8 选项被拆分为 enablesparsesfac8 和 enablesparselic8 ；请根据所使用的稀疏注意力组件更新 --additional-config 。 [#12351](https://github.com/vllm-project/vllm-ascend/issues/12351)
- 将 FlashComm1 部署迁移到 additionalconfig.enableflashcomm1 。 [#9064](https://github.com/vllm-project/vllm-ascend/issues/9064)
- 在 AscendConfig 迁移过程中移除了 VLLMASCENDENABLECONTEXTPARALLEL 。DSA-CP 现在由 additionalconfig.enabledsacp 控制；先前依赖 FlashComm1 隐式启用 DSA-CP 的部署必须显式启用这两个选项。 [#9668](https://github.com/vllm-project/vllm-ascend/issues/9668) [#9697](https://github.com/vllm-project/vllm-ascend/issues/9697) [#9910](https://github.com/vllm-project/vllm-ascend/issues/9910)
- 在 v0.23.0 支持矩阵中，序列并行（Sequence Parallelism）对所有当前模型类别标记为不可用；在 v0.18.0 中使用过该功能的部署应尽可能迁移到 FlashComm1。 [#12860](https://github.com/vllm-project/vllm-ascend/issues/12860) †
- 已移除 ASCENDBUFFERPOOL 。请根据硬件和部署路径使用 ASCENDENABLEUSEFABRICMEM=1 或 HCCLINTRAROCEENABLE=1 。 [#13834](https://github.com/vllm-project/vllm-ascend/issues/13834) †

##### 即将弃用

- 层分片（Layer sharding）。
- FlashComm2。
- FlashComm3 多流重叠门控。
- 汉明稀疏（Hamming sparse）。
- 异步指数重叠。
- Matmul 全归约和 Matmul 全归约 RMSNorm 融合。
- 权重预取。
- 动态批次 SLO。
- KV Pool 中的 KV 卸载。
- 融合 MC2 模式 2（ enablefusedmc2=2 ）。
- 分页注意力（Paged attention）和 pashapelist 。

##### 已知问题

- 在 v0.23.0 中，不支持流水线并行（PP）与预填充上下文并行（PCP）的组合。
- 减少采样（ additionalconfig.enablereducesample=true ）为实验性功能。它与 P/D 分离部署和 lmhead 张量并行不兼容，在这些场景下会自动禁用。当请求采样 logprobs 时，请勿启用此功能，因为 logprob 值和 top-k 排名将在分区 logits 上计算，结果可能不正确。 [#13469](https://github.com/vllm-project/vllm-ascend/issues/13469) † [#13632](https://github.com/vllm-project/vllm-ascend/issues/13632) †
- 在 Ascend 950 上，SFA 不支持上下文并行；上下文并行的 MLA 和 GQA 路径为实验性功能。 [#13303](https://github.com/vllm-project/vllm-ascend/issues/13303) †
- 在图模式下， torch.ops.Cascend.mlapreprocess 和 torch.ops.Cascend.batchmatmultranspose 可能在 plog 中发出 rtMemcpy 107030 错误；该报告的错误不影响推理。 [#14347](https://github.com/vllm-project/vllm-ascend/issues/14347)
- AscendStore KV Pool 在逐层 Memcache、SSD 卸载、混合注意力加载失败和图回退行为方面存在特定后端的限制。 [#12390](https://github.com/vllm-project/vllm-ascend/issues/12390)
- 由于 HDK 不兼容，Ascend 950 图捕获暂时仅限于减少的阶段集，这可以避免崩溃但可能降低性能。 [#12998](https://github.com/vllm-project/vllm-ascend/issues/12998)

#### v0.23.0rc1 · 2026.07.20（中文）

##### 亮点

- 稀疏注意力和上下文并行 ：增加了带有复制索引器、紧凑 KV 收集和 C8 支持的 SFA DCP。 [#11819](https://github.com/vllm-project/vllm-ascend/issues/11819) [#11981](https://github.com/vllm-project/vllm-ascend/issues/11981) [#11846](https://github.com/vllm-project/vllm-ascend/issues/11846) [#11871](https://github.com/vllm-project/vllm-ascend/issues/11871)
- KV-cache 生命周期和卸载 ：为 P/D 解码器节点增加了重计算 KV-cache 卸载、AscendStore 协调以及带有 Memcache 后端的逐层 KV 池化。 [#10742](https://github.com/vllm-project/vllm-ascend/issues/10742) [#10393](https://github.com/vllm-project/vllm-ascend/issues/10393) [#11585](https://github.com/vllm-project/vllm-ascend/issues/11585)
- Ascend 950 量化和通信 ：增加了 W4A16 MXFP4、all-gather EP MXFP4 和低精度 token 分发路径。 [#11014](https://github.com/vllm-project/vllm-ascend/issues/11014) [#11287](https://github.com/vllm-project/vllm-ascend/issues/11287) [#11718](https://github.com/vllm-project/vllm-ascend/issues/11718) [#11766](https://github.com/vllm-project/vllm-ascend/issues/11766)

##### 功能特性

- 增加了虚拟宽度网络 Eagle3 和 Eagle3 支持，并带有分块流水线并行。 [#10042](https://github.com/vllm-project/vllm-ascend/issues/10042) [#10566](https://github.com/vllm-project/vllm-ascend/issues/10566)

##### 性能

- 优化了 SFA DSA-CP 输出合并，使用 All-to-All 通信和 PCP FlashAttention 恢复/输出合并。 [#12137](https://github.com/vllm-project/vllm-ascend/issues/12137) [#11842](https://github.com/vllm-project/vllm-ascend/issues/11842)
- 避免了上下文并行推测解码元数据中的 H2D 同步，并在异步 H2D 复制前快照查询位置。 [#11862](https://github.com/vllm-project/vllm-ascend/issues/11862) [#12071](https://github.com/vllm-project/vllm-ascend/issues/12071)
- 使用线程池并行化 KV-cache 接收，并为 DSA-CP 输出投影 TP 权重启用了异步 all-gather。 [#10548](https://github.com/vllm-project/vllm-ascend/issues/10548) [#10694](https://github.com/vllm-project/vllm-ascend/issues/10694)
- 在 SFA 元数据中向量化了本地序列长度计算。 [#11816](https://github.com/vllm-project/vllm-ascend/issues/11816)

##### 稳定性与错误修复

- 修复了Qwen MoE在Ascend 310P上的路由溢出和共享专家门控矩阵乘法失败问题。 [#11391](https://github.com/vllm-project/vllm-ascend/issues/11391) [#11730](https://github.com/vllm-project/vllm-ascend/issues/11730)
- 修复了当KV块组仅部分缺失时，AscendStore父块哈希链的问题。 [#12252](https://github.com/vllm-project/vllm-ascend/issues/12252)
- 禁用了在启用融合MC2时的共享专家多流重叠，以避免不支持的配置。 [#12245](https://github.com/vllm-project/vllm-ascend/issues/12245)
- 修复了DCP/DP服务挂起问题，并将重计算调度器限制为仅解码节点。 [#12034](https://github.com/vllm-project/vllm-ascend/issues/12034) [#11490](https://github.com/vllm-project/vllm-ascend/issues/11490)
- 将AscendStore初始化延迟到第一个真实解码请求。 [#11673](https://github.com/vllm-project/vllm-ascend/issues/11673)
- 修复了SFA与DSA-CP及多个推测令牌时的低MTP接受率问题。 [#10878](https://github.com/vllm-project/vllm-ascend/issues/10878)

##### 依赖项

- 上游vLLM : v0.23.0。
- Python : >= 3.10, < 3.13。
- CANN : A2、A3和Ascend 950使用9.0.1；310P的特定平台CANN包请参考其安装指南。
- PyTorch / torchnpu : 2.10.0 / 2.10.0.post2。
- Triton Ascend : 3.2.1。
- Mooncake : 发布镜像中为0.3.11.post1。

##### 即将弃用

- 层分片。
- FlashComm2。
- FlashComm3多流重叠门控。
- 汉明稀疏。
- 异步指数重叠。
- Matmul all-reduce和matmul all-reduce RMSNorm融合。
- 权重预取。
- 动态批处理SLO。
- KV池中的KV卸载。
- 融合MC2模式2 ( enablefusedmc2=2 )。
- 分页注意力和 pashapelist 。
- 选定的插件环境变量；其配置将迁移到等效的 --additional-config 选项。

##### 已知问题

- 在v0.23.0中，不支持流水线并行（PP）与预填充上下文并行（PCP）的组合。该组合的支持将推迟到后续版本。
- 原先的 enablesparsec8 选项已拆分为 enablesparsesfac8 和 enablesparselic8 。现有的 --additional-config 设置必须根据是否需要Sparse Flash Attention C8、LightningIndexer C8或两者，使用其中一个或两个新选项。 [#12351](https://github.com/vllm-project/vllm-ascend/issues/12351)
- 负载均衡代理可能吞掉解码错误并返回空的HTTP 200响应。 [#12166](https://github.com/vllm-project/vllm-ascend/issues/12166)
- 当请求的所有拉取任务完成前发生重新格式化时，KV缓存传输可能产生精度问题和TP分片不一致。 [#12359](https://github.com/vllm-project/vllm-ascend/issues/12359)

##### 亮点

- 用于 RL 工作负载的 HCCL 权重传输 ：为 Ascend NPU 添加了基于 HCCL 的权重传输后端，使训练器和推理工作节点能够在 RL 流水线中同步权重，而无需依赖 CUDA/NCCL。 [#9152](https://github.com/vllm-project/vllm-ascend/issues/9152)
- Ascend 950 扩展 ：扩展了 Ascend 950 的支持，包括 W8A8/W4A8 动态量化和平台特定的 CPU 绑定支持。 [#10236](https://github.com/vllm-project/vllm-ascend/issues/10236) [#10483](https://github.com/vllm-project/vllm-ascend/issues/10483)

##### 功能特性

- 为 DFlash 工作负载添加了多模态输入支持。 [#9340](https://github.com/vllm-project/vllm-ascend/issues/9340)
- P-Eagle 和 PARD 现已成为稳定的并行推测解码方法，并已通过验证测试。
- 为混合 Mamba 模型添加了 KV 消费者部分组缓存。 [#10009](https://github.com/vllm-project/vllm-ascend/issues/10009)
- [实验性] 为同一台机器上的多个 DP 等级添加了 SSD 支持，以避免 Mooncake 卸载目录中的本地等级路径冲突。 [#10477](https://github.com/vllm-project/vllm-ascend/issues/10477)

##### 硬件与算子支持

- 为 Ascend 950 添加了 W8A8/W4A8 动态量化支持。 [#10236](https://github.com/vllm-project/vllm-ascend/issues/10236)
- 为 Ascend 950 服务器拓扑和进程布局添加了 Ascend 950 CPU 绑定支持。 [#10483](https://github.com/vllm-project/vllm-ascend/issues/10483)

##### 性能

- 跳过了 Mamba 组的 computeslotmapping ，以减少混合缓存路径中的不必要工作。 [#10492](https://github.com/vllm-project/vllm-ascend/issues/10492)

##### 文档

- 更新了上下文并行、EPLB 和推测解码的文档。 [#10332](https://github.com/vllm-project/vllm-ascend/issues/10332)

##### 已知问题

- MiniMax 2.7 双节点 16 卡部署在负载下运行 10-20 分钟后可能挂起或崩溃。 [#10591](https://github.com/vllm-project/vllm-ascend/issues/10591)
- 使用 PD 分离加 MTP 的 Qwen3.x 仍可能出现精度问题，因为之前的 KVCache 块可能保持脏状态。 [#10961](https://github.com/vllm-project/vllm-ascend/issues/10961)

##### 亮点

- Hybrid与Mamba对齐前缀缓存 ：为Hybrid和Mamba架构新增基于对齐的前缀缓存机制，提升相关序列间的缓存命中率。 [#9533](https://github.com/vllm-project/vllm-ascend/issues/9533)
- FULLANDPIECEWISE图模式 ：引入结合全图与分段策略的混合图编译模式。需要HDK 25.5.1+ / CANN 8.5.0+以移除旧的流预算限制，从而在A3上支持约32k个图，在Ascend 950上支持约64k个图。 [#9572](https://github.com/vllm-project/vllm-ascend/issues/9572) [#9962](https://github.com/vllm-project/vllm-ascend/issues/9962)
- Python 3.12支持 ：Dockerfiles和setup.py现已正式支持Python 3.12，所有基础镜像已从 py3.11 升级至 py3.12 。 [#9558](https://github.com/vllm-project/vllm-ascend/issues/9558)

##### 功能特性

- 增加了Hybrid与Mamba对齐前缀缓存，以改善Hybrid和Mamba架构中的前缀缓存复用。 [#9533](https://github.com/vllm-project/vllm-ascend/issues/9533)
- 增加了逐层KV缓存事件回调，以实现更细粒度的逐层可观测性和控制。 [#9468](https://github.com/vllm-project/vllm-ascend/issues/9468)
- 增加了 FULLANDPIECEWISE 图模式，这是一种混合全图与分段方法的编译策略。需要HDK 25.5.1+ / CANN 8.5.0+以移除旧的流预算限制，从而支持显著更多的图捕获——在A3上约32k个，在Ascend 950上约64k个。相应地清理了旧的捕获大小剪枝逻辑。 [#9572](https://github.com/vllm-project/vllm-ascend/issues/9572) [#9962](https://github.com/vllm-project/vllm-ascend/issues/9962)
- 增加了对Ascend 950的W4A8 MXFP4量化支持。 [#8265](https://github.com/vllm-project/vllm-ascend/issues/8265)
- 增加了Ascend 950上的MXFP8 FlashCommV3支持。 [#9671](https://github.com/vllm-project/vllm-ascend/issues/9671)
- 增加了对W4A8 MoE压缩张量和C8量化（GQA）的NZ布局支持。 [#9625](https://github.com/vllm-project/vllm-ascend/issues/9625) [#9721](https://github.com/vllm-project/vllm-ascend/issues/9721)
- 在投机解码中增加了D2D NetLoader对草稿模型的权重加载。 [#9893](https://github.com/vllm-project/vllm-ascend/issues/9893)
- 增加了Mooncake Connector混合注意力支持。 [#8850](https://github.com/vllm-project/vllm-ascend/issues/8850)
- 增加了Mooncake KV池使用优化。 [#7820](https://github.com/vllm-project/vllm-ascend/issues/7820)
- 增加了KV池对加载失败块ID的支持，无需混合重计算。 [#9701](https://github.com/vllm-project/vllm-ascend/issues/9701)
- 增加了NPU存储元数据调试辅助功能，以改进故障排查。 [#9189](https://github.com/vllm-project/vllm-ascend/issues/9189)
- 在 executemodel() 中增加了torch保留/已分配内存分析。 [#9765](https://github.com/vllm-project/vllm-ascend/issues/9765)
- 增加了EPLB专家热度指标和EPLB耗时数据暴露。 [#9536](https://github.com/vllm-project/vllm-ascend/issues/9536)
- 在创建HCCL配置时增加了 groupname 参数，以实现更好的组管理。 [#9667](https://github.com/vllm-project/vllm-ascend/issues/9667)
- 启用了PCP/DCP前缀缓存，允许在分离式部署中跨prefill和decode复用KV缓存。 [#9638](https://github.com/vllm-project/vllm-ascend/issues/9638)
- 增加了简单而通用的CPU KV缓存卸载支持。 [#8743](https://github.com/vllm-project/vllm-ascend/issues/8743)
- 增加了带嵌入式客户端的Mooncake SSD卸载，用于大规模KV缓存存储。 [#9731](https://github.com/vllm-project/vllm-ascend/issues/9731)
- 重新加入了npugraphex的代码起始编译缓存（此前已回退），改善了预热时间。 [#9914](https://github.com/vllm-project/vllm-ascend/issues/9914)
- 在KV缓存分配前增加了ACL图内存预估，以防止图捕获期间的OOM。 [#9865](https://github.com/vllm-project/vllm-ascend/issues/9865)
- 为强化学习场景增加了batchinvariantops设置。 [#10034](https://github.com/vllm-project/vllm-ascend/issues/10034)
- 将负载均衡代理示例适配到共享调度器工作进程。 [#9645](https://github.com/vllm-project/vllm-ascend/issues/9645)

##### 硬件与算子支持

- 新增对 Ascend 950 的自定义 GDN 算子支持，包含一个新的融合 GDN 门控 AscendC 算子（ fusedgdngating ）。 [#9382](https://github.com/vllm-project/vllm-ascend/issues/9382) [#9601](https://github.com/vllm-project/vllm-ascend/issues/9601)
- 新增 A2/A3 和 Ascend 950 压缩器算子路径。 [#9350](https://github.com/vllm-project/vllm-ascend/issues/9350)
- 适配 GDN 和 Conv1D 算子以支持 Ascend 950 平台。 [#9224](https://github.com/vllm-project/vllm-ascend/issues/9224)
- 新增 Ascend 950 Dockerfile 和分离式 PD 端点配置文档。 [#9723](https://github.com/vllm-project/vllm-ascend/issues/9723) [#9690](https://github.com/vllm-project/vllm-ascend/issues/9690)
- 移除未使用的 MC2 预填充自定义算子，以精简算子表面。 [#9919](https://github.com/vllm-project/vllm-ascend/issues/9919)
- 新增在 Ascend 950 设备上的稀疏 Flash Attention 支持。 [#9825](https://github.com/vllm-project/vllm-ascend/issues/9825)
- 新增 LightningIndexer 和 SparseFlashAttention ACLNN 算子，以改善稀疏注意力性能。 [#9491](https://github.com/vllm-project/vllm-ascend/issues/9491)

##### 性能

- 优化了310P MoE路由路径以提升吞吐量。 [#9105](https://github.com/vllm-project/vllm-ascend/issues/9105)
- 为W4A8 MoE压缩张量增加了NZ格式支持，提供更好的内存访问模式。 [#9625](https://github.com/vllm-project/vllm-ascend/issues/9625)
- 为带有推测解码的PCP/DCP增加了不规则掩码构建优化，提升了效率。 [#9678](https://github.com/vllm-project/vllm-ascend/issues/9678)
- 重构了reduce采样以消除补丁行为，并同时支持DFlash和MTP。 [#9735](https://github.com/vllm-project/vllm-ascend/issues/9735)

##### 稳定性与错误修复

- 修复了与Eagle3的推测解码MLA形状不匹配问题，并增加了DeepSeek V2 Eagle3支持。 [#9703](https://github.com/vllm-project/vllm-ascend/issues/9703)
- 修复了在词汇表缩减（草稿到目标）情况下DFlash的草稿 lmhead 保留问题。 [#9795](https://github.com/vllm-project/vllm-ascend/issues/9795)
- 修复了Ascend 950上由 tokenindicestosample 引起的草稿模型索引越界错误。 [#9867](https://github.com/vllm-project/vllm-ascend/issues/9867)
- 增加了对草稿模型的DCP验证，以便及早发现配置不匹配。 [#9717](https://github.com/vllm-project/vllm-ascend/issues/9717)
- 修复了DSA压缩空闲虚拟图的越界问题。 [#9818](https://github.com/vllm-project/vllm-ascend/issues/9818)
- 修复了AscendMultiConnector中的HMA支持。 [#9782](https://github.com/vllm-project/vllm-ascend/issues/9782)
- 修补了GLM工具调用最终块以实现正确的流式终止。 [#9787](https://github.com/vllm-project/vllm-ascend/issues/9787)
- 修复了OpenAI格式聊天响应中发出空 toolcalls 的问题。 [#9791](https://github.com/vllm-project/vllm-ascend/issues/9791)
- 修复了310P上 causalconv1dv310 算子的精度。 [#9720](https://github.com/vllm-project/vllm-ascend/issues/9720)
- 修复了ACL dtype映射表以实现正确的dtype转换。 [#9826](https://github.com/vllm-project/vllm-ascend/issues/9826)
- 对 wqb 矩阵乘法进行分块以规避NPU 65536维度限制。 [#9780](https://github.com/vllm-project/vllm-ascend/issues/9780)
- 优化了eager模式下的路由器专家并修复了通信处理。 [#9728](https://github.com/vllm-project/vllm-ascend/issues/9728)
- 在 put 时对KV存储进行延迟初始化以避免过早分配资源。 [#9771](https://github.com/vllm-project/vllm-ascend/issues/9771)
- 修复了P/D部署中MTP占位符超过最大模型长度的问题。 [#9749](https://github.com/vllm-project/vllm-ascend/issues/9749)
- 为Mooncake混合连接器增加了压缩比和块ID裁剪。 [#9808](https://github.com/vllm-project/vllm-ascend/issues/9808)
- 修复了测试资源中 qwen.png 的FileNotFoundError。 [#9907](https://github.com/vllm-project/vllm-ascend/issues/9907)
- 修复了后端单元测试回归。 [#9805](https://github.com/vllm-project/vllm-ascend/issues/9805)
- 修复了Mooncake逐层KV传输连接器中的PCP握手端口冲突。 [#10019](https://github.com/vllm-project/vllm-ascend/issues/10019)
- 减少了稀疏C8的Mooncake KV缓存注册区域以避免资源耗尽。 [#10102](https://github.com/vllm-project/vllm-ascend/issues/10102)
- 修复了共享专家中的W4A8 MXFP量化。 [#10153](https://github.com/vllm-project/vllm-ascend/issues/10153)
- 修复了多DP场景下MoE挂起的问题。 [#10117](https://github.com/vllm-project/vllm-ascend/issues/10117)
- 修复了 topk 和 topp 可能为None时的reduce sampling问题。 [#10004](https://github.com/vllm-project/vllm-ascend/issues/10004)
- 增加了用于控制DP元数据allreduce通信的环境变量。 [#10046](https://github.com/vllm-project/vllm-ascend/issues/10046)
- 修复了 tokenindicestosample 的索引越界错误。 [#10080](https://github.com/vllm-project/vllm-ascend/issues/10080)
- 修复了 chunkscaleddotkktfwdkernel 的精度问题。 [#10033](https://github.com/vllm-project/vllm-ascend/issues/10033)
- 修复了Ascend 950上 splitqkvrmsnormrope Triton内核的精度。 [#9849](https://github.com/vllm-project/vllm-ascend/issues/9849)
- 修复了lmhead并行特性断言和夜间测试失败。 [#10100](https://github.com/vllm-project/vllm-ascend/issues/10100)
- 修复了NPU MoE量化方法以正确支持仅TP配置。 [#9908](https://github.com/vllm-project/vllm-ascend/issues/9908)
- 通过更新 discardrequestmask 修复了分块流水线并行卡住的问题。 [#9843](https://github.com/vllm-project/vllm-ascend/issues/9843)
- 修复了 cudagraphconfig 模式 FULL 的边界情况。 [#9863](https://github.com/vllm-project/vllm-ascend/issues/9863)
- 移除了 updateaclgraphsizes 中遗留的捕获大小剪枝。 [#9962](https://github.com/vllm-project/vllm-ascend/issues/9962)
- 修复了注意力中DSA v1 W8A8动态冲突。 [#9476](https://github.com/vllm-project/vllm-ascend/issues/9476)
- 修复了GLM流式工具调用名称保留问题。 [#10361](https://github.com/vllm-project/vllm-ascend/issues/10361)
- 修复了FP32 MM编码器注意力支持。 [#10200](https://github.com/vllm-project/vllm-ascend/issues/10200)
- 使vllm-ascend与上游vLLM单元测试预期保持一致。 [#10146](https://github.com/vllm-project/vllm-ascend/issues/10146)

##### 依赖项

- Python : Python 3.12 现已正式支持，并作为所有 Docker 镜像的默认版本。Python 3.10 和 3.11 仍受支持。 [#9558](https://github.com/vllm-project/vllm-ascend/issues/9558)
- 上游 vLLM : 从 v0.20.2 升级至 v0.21.0。 [#9835](https://github.com/vllm-project/vllm-ascend/issues/9835)
- xlite : 从 0.1.0rc9.dev210 升级至 0.1.0rc10.dev210 。
- CANN : A2/A3/Ascend 950 使用 9.0.0（与 v0.20.2rc1 相同）； 310P 使用 CANN 9.1.0 beta 。 注意 ： FULLANDPIECEWISE 需要 HDK 25.5.1+ / CANN 8.5.0+ 以修复流预算问题；旧版本仍受限于旧版流预算，可能回退至 PIECEWISE 。
- PyTorch / torchnpu : 2.10.0（与 v0.20.2rc1 相同）。
- triton-ascend : 3.2.1（与 v0.20.2rc1 相同）。
- Mooncake : 从 v0.3.8.post1 升级至 v0.3.9。 [#10339](https://github.com/vllm-project/vllm-ascend/issues/10339)

##### 重大变更与迁移说明

- VLLMASCENDENABLECONTEXTPARALLEL 已移除 ：环境变量 VLLMASCENDENABLECONTEXTPARALLEL 已在迁移至 AscendConfig 的过程中移除。用户应将剩余使用迁移至等效的 AscendConfig 选项。 [#9668](https://github.com/vllm-project/vllm-ascend/issues/9668)
- DSA-CP 配置解耦 ：DSA-CP 现在通过 additionalconfig.enabledsacp 控制，与 FlashComm1 开关解耦。之前依赖 FC1 隐式启用 DSA-CP 的用户现在必须显式设置 enableflashcomm1 和 enabledsacp 。 [#9697](https://github.com/vllm-project/vllm-ascend/issues/9697) [#9910](https://github.com/vllm-project/vllm-ascend/issues/9910)
- Docker 镜像中的 Python 3.12 ：所有 Docker 基础镜像现在使用 Python 3.12（ py3.12 ）。如果您的部署或自定义镜像依赖 py3.11 ，请相应更新镜像标签。 [#9558](https://github.com/vllm-project/vllm-ascend/issues/9558)

##### 文档

- 刷新并优化了当前开发分支的文档。 [#9606](https://github.com/vllm-project/vllm-ascend/issues/9606)
- 更新了模型代码转换器编写指南。 [#9881](https://github.com/vllm-project/vllm-ascend/issues/9881)
- 添加了 Ascend 950 分离式 PD 端点配置文档。 [#9690](https://github.com/vllm-project/vllm-ascend/issues/9690)

##### 已知问题

- FULLANDPIECEWISE on older HDK/CANN : HDK < 25.5.1 / CANN < 8.5.0 stacks still have the old stream-budget limitation, which may cause graph capture failures or fallback to PIECEWISE mode. Upgrade to HDK 25.5.1+ / CANN 8.5.0+ is recommended for full FULLANDPIECEWISE support.

#### v0.22.1rc1 · 2026.06.30（中文）

##### 亮点

- 用于 RL 工作负载的 HCCL 权重传输 ：为 Ascend NPU 添加了基于 HCCL 的权重传输后端，使得训练器和推理工作器无需 CUDA/NCCL 依赖即可在 RL 流水线中同步权重。 [#9152](https://github.com/vllm-project/vllm-ascend/issues/9152)
- Ascend 950 扩展 ：扩展了 Ascend 950 支持，包括 W8A8/W4A8 动态量化和平台特定的 CPU 绑定支持。 [#10236](https://github.com/vllm-project/vllm-ascend/issues/10236) [#10483](https://github.com/vllm-project/vllm-ascend/issues/10483)

##### 功能特性

- 为 DFlash 工作负载添加了多模态输入支持。 [#9340](https://github.com/vllm-project/vllm-ascend/issues/9340)
- P-Eagle 和 PARD 现在是稳定的并行推测解码方法，并已通过验证测试。
- 为混合 Mamba 模型添加了 KV 消费者部分组缓存。 [#10009](https://github.com/vllm-project/vllm-ascend/issues/10009)
- [实验性] 为同一台机器上的多个 DP rank 添加了 SSD 支持，以避免 Mooncake 卸载目录中的本地 rank 路径冲突。 [#10477](https://github.com/vllm-project/vllm-ascend/issues/10477)

##### 硬件和算子支持

- 为 Ascend 950 添加了 W8A8/W4A8 动态量化支持。 [#10236](https://github.com/vllm-project/vllm-ascend/issues/10236)
- 为 Ascend 950 服务器拓扑和进程布局添加了 Ascend 950 CPU 绑定支持。 [#10483](https://github.com/vllm-project/vllm-ascend/issues/10483)

##### 性能

- 跳过了 Mamba 组的 computeslotmapping ，以减少混合缓存路径中的不必要工作。 [#10492](https://github.com/vllm-project/vllm-ascend/issues/10492)

##### 文档

- 刷新了上下文并行、EPLB 和推测解码的文档。 [#10332](https://github.com/vllm-project/vllm-ascend/issues/10332)

##### 已知问题

- MiniMax 2.7 双节点 16 卡部署在负载下运行 10-20 分钟后可能会挂起或崩溃。 [#10591](https://github.com/vllm-project/vllm-ascend/issues/10591)
- Qwen3.x 配合 PD 分离和 MTP 仍可能出现精度问题，因为之前的 KVCache 块可能保持脏状态。 [#10961](https://github.com/vllm-project/vllm-ascend/issues/10961)

#### v0.21.0rc1 · 2026.06.16（中文）

##### 亮点

- Hybrid 和 Mamba 对齐前缀缓存 ：针对 Hybrid 和 Mamba 架构的基于对齐的新前缀缓存机制，提高了相关序列间的缓存命中率。 [#9533](https://github.com/vllm-project/vllm-ascend/issues/9533)
- FULLANDPIECEWISE 图模式 ：引入了一种结合全图与分段策略的混合图编译模式。 需要 HDK 25.5.1+ / CANN 8.5.0+ 以移除旧的流预算限制，从而在 A3 上支持约 32K 个图，在 Ascend 950 上支持约 64K 个图。 [#9572](https://github.com/vllm-project/vllm-ascend/issues/9572) [#9962](https://github.com/vllm-project/vllm-ascend/issues/9962)
- Python 3.12 支持 ：Dockerfiles 和 setup.py 现已正式支持 Python 3.12，所有基础镜像已从 py3.11 升级到 py3.12 。 [#9558](https://github.com/vllm-project/vllm-ascend/issues/9558)

##### 功能特性

- 增加了 Hybrid 和 Mamba 对齐前缀缓存，以改善 Hybrid 和 Mamba 架构中的前缀缓存复用。 [#9533](https://github.com/vllm-project/vllm-ascend/issues/9533)
- 增加了逐层 KV 缓存事件回调，以实现更精细的每层可观测性和控制。 [#9468](https://github.com/vllm-project/vllm-ascend/issues/9468)
- 增加了 FULLANDPIECEWISE 图模式，这是一种混合全图与分段方法的编译策略。 需要 HDK 25.5.1+ / CANN 8.5.0+ 以移除旧的流预算限制，从而支持显著更多的图捕获——在 A3 上约 32K 个，在 Ascend 950 上约 64K 个。相应地清理了旧的捕获大小修剪逻辑。 [#9572](https://github.com/vllm-project/vllm-ascend/issues/9572) [#9962](https://github.com/vllm-project/vllm-ascend/issues/9962)
- 增加了对 Ascend 950 的 W4A8 MXFP4 量化支持。 [#8265](https://github.com/vllm-project/vllm-ascend/issues/8265)
- 增加了 Ascend 950 上的 MXFP8 FlashCommV3 支持。 [#9671](https://github.com/vllm-project/vllm-ascend/issues/9671)
- 增加了对 W4A8 MoE 压缩张量和 C8 量化（GQA）的 NZ 布局支持。 [#9625](https://github.com/vllm-project/vllm-ascend/issues/9625) [#9721](https://github.com/vllm-project/vllm-ascend/issues/9721)
- 增加了推测解码中草稿模型的 D2D NetLoader 权重加载。 [#9893](https://github.com/vllm-project/vllm-ascend/issues/9893)
- 增加了 Mooncake Connector 混合注意力支持。 [#8850](https://github.com/vllm-project/vllm-ascend/issues/8850)
- 增加了 Mooncake KV 池使用优化。 [#7820](https://github.com/vllm-project/vllm-ascend/issues/7820)
- 增加了 KV 池对加载失败块 ID 的支持，无需混合重计算。 [#9701](https://github.com/vllm-project/vllm-ascend/issues/9701)
- 增加了 NPU 存储元数据调试助手，以改进故障排除。 [#9189](https://github.com/vllm-project/vllm-ascend/issues/9189)
- 在 executemodel() 中增加了 torch 保留/分配内存的性能分析。 [#9765](https://github.com/vllm-project/vllm-ascend/issues/9765)
- 增加了 EPLB 专家热度指标和 EPLB 耗时数据暴露。 [#9536](https://github.com/vllm-project/vllm-ascend/issues/9536)
- 在创建 HCCL 配置时增加了 groupname 参数，以实现更好的组管理。 [#9667](https://github.com/vllm-project/vllm-ascend/issues/9667)
- 启用了 PCP/DCP 的前缀缓存，允许在分离部署中跨预填充和解码阶段复用 KV 缓存。 [#9638](https://github.com/vllm-project/vllm-ascend/issues/9638)
- 增加了简单而通用的 CPU KV 缓存卸载支持。 [#8743](https://github.com/vllm-project/vllm-ascend/issues/8743)
- 增加了带有嵌入式客户端的 Mooncake SSD 卸载，用于大规模 KV 缓存存储。 [#9731](https://github.com/vllm-project/vllm-ascend/issues/9731)
- 重新添加了 npugraphex 的代码开始编译缓存（之前被回退），改善了预热时间。 [#9914](https://github.com/vllm-project/vllm-ascend/issues/9914)
- 在 KV 缓存分配前增加了 ACL 图内存估算，以防止图捕获期间的内存不足（OOM）。 [#9865](https://github.com/vllm-project/vllm-ascend/issues/9865)
- 新增强化学习场景下的batchinvariantops配置。 [#10034](https://github.com/vllm-project/vllm-ascend/issues/10034)
- 调整负载均衡代理示例以适配共享调度器工作节点。 [#9645](https://github.com/vllm-project/vllm-ascend/issues/9645)

##### 硬件和算子支持

- 新增Ascend 950自定义GDN算子支持，包含融合GDN门控AscendC算子（ fusedgdngating ）。 [#9382](https://github.com/vllm-project/vllm-ascend/issues/9382) [#9601](https://github.com/vllm-project/vllm-ascend/issues/9601)
- 新增A2/A3及Ascend 950压缩器算子路径。 [#9350](https://github.com/vllm-project/vllm-ascend/issues/9350)
- 适配GDN与Conv1D算子至Ascend 950平台。 [#9224](https://github.com/vllm-project/vllm-ascend/issues/9224)
- 新增Ascend 950 Dockerfile及解耦PD端点配置文档。 [#9723](https://github.com/vllm-project/vllm-ascend/issues/9723) [#9690](https://github.com/vllm-project/vllm-ascend/issues/9690)
- 移除未使用的MC2预填充自定义算子以精简算子表面。 [#9919](https://github.com/vllm-project/vllm-ascend/issues/9919)
- 新增Ascend 950设备上的稀疏Flash Attention支持。 [#9825](https://github.com/vllm-project/vllm-ascend/issues/9825)
- 新增LightningIndexer与SparseFlashAttention ACLNN算子以提升稀疏注意力性能。 [#9491](https://github.com/vllm-project/vllm-ascend/issues/9491)

##### 性能

- 优化310P MoE路由路径以提升吞吐量。 [#9105](https://github.com/vllm-project/vllm-ascend/issues/9105)
- 新增W4A8 MoE压缩张量的NZ格式支持，提供更优的内存访问模式。 [#9625](https://github.com/vllm-project/vllm-ascend/issues/9625)
- 新增PCP/DCP推测解码的不规则掩码构建优化，提升效率。 [#9678](https://github.com/vllm-project/vllm-ascend/issues/9678)
- 重构reduce采样以消除补丁行为并同时支持DFlash与MTP。 [#9735](https://github.com/vllm-project/vllm-ascend/issues/9735)

##### 稳定性与错误修复

- 修复推测解码MLA与Eagle3的形状不匹配问题，并新增DeepSeek V2 Eagle3支持。 [#9703](https://github.com/vllm-project/vllm-ascend/issues/9703)
- 修复DFlash在缩减（草稿到目标）词汇量时草稿 lmhead 的保留问题。 [#9795](https://github.com/vllm-project/vllm-ascend/issues/9795)
- 修复Ascend 950上由 tokenindicestosample 导致的草稿模型索引越界错误。 [#9867](https://github.com/vllm-project/vllm-ascend/issues/9867)
- 新增草稿模型的DCP验证功能以提前捕获配置不匹配问题。 [#9717](https://github.com/vllm-project/vllm-ascend/issues/9717)
- 修复DSA压缩空闲虚拟图越界问题。 [#9818](https://github.com/vllm-project/vllm-ascend/issues/9818)
- 修复AscendMultiConnector中的HMA支持。 [#9782](https://github.com/vllm-project/vllm-ascend/issues/9782)
- 修补GLM工具调用最终分块以实现正确的流式终止。 [#9787](https://github.com/vllm-project/vllm-ascend/issues/9787)
- 修复OpenAI格式聊天响应中发出空 toolcalls 的问题。 [#9791](https://github.com/vllm-project/vllm-ascend/issues/9791)
- 修复310P上 causalconv1dv310 算子的精度。 [#9720](https://github.com/vllm-project/vllm-ascend/issues/9720)
- 修复ACL数据类型映射表以实现正确的数据类型转换。 [#9826](https://github.com/vllm-project/vllm-ascend/issues/9826)
- 分块处理 wqb 矩阵乘法以规避NPU 65536维度限制。 [#9780](https://github.com/vllm-project/vllm-ascend/issues/9780)
- 优化即时模式下的路由专家并修复通信处理。 [#9728](https://github.com/vllm-project/vllm-ascend/issues/9728)
- 在 put 操作时延迟初始化KV存储以避免过早资源分配。 [#9771](https://github.com/vllm-project/vllm-ascend/issues/9771)
- 修复P/D部署中MTP占位符超过最大模型长度的问题。 [#9749](https://github.com/vllm-project/vllm-ascend/issues/9749)
- 新增Mooncake混合连接器的压缩比与块ID裁剪功能。 [#9808](https://github.com/vllm-project/vllm-ascend/issues/9808)
- 修复测试资源中 qwen.png 的FileNotFoundError错误。 [#9907](https://github.com/vllm-project/vllm-ascend/issues/9907)
- 修复了后端单元测试回归问题。 [#9805](https://github.com/vllm-project/vllm-ascend/issues/9805)
- 修复了Mooncake逐层KV传输连接器中的PCP握手端口冲突。 [#10019](https://github.com/vllm-project/vllm-ascend/issues/10019)
- 为稀疏C8减少了Mooncake KV缓存注册区域，以避免资源耗尽。 [#10102](https://github.com/vllm-project/vllm-ascend/issues/10102)
- 修复了共享专家中的W4A8 MXFP量化问题。 [#10153](https://github.com/vllm-project/vllm-ascend/issues/10153)
- 修复了多DP场景中MoE挂起的问题。 [#10117](https://github.com/vllm-project/vllm-ascend/issues/10117)
- 修复了 topk 和 topp 可能为None时的reduce采样问题。 [#10004](https://github.com/vllm-project/vllm-ascend/issues/10004)
- 新增了用于控制DP元数据allreduce通信的环境变量。 [#10046](https://github.com/vllm-project/vllm-ascend/issues/10046)
- 修复了 tokenindicestosample 索引越界错误。 [#10080](https://github.com/vllm-project/vllm-ascend/issues/10080)
- 修复了 chunkscaleddotkktfwdkernel 精度问题。 [#10033](https://github.com/vllm-project/vllm-ascend/issues/10033)
- 修复了Ascend 950上 splitqkvrmsnormrope Triton内核的精度问题。 [#9849](https://github.com/vllm-project/vllm-ascend/issues/9849)
- 修复了lmhead并行特性断言和夜间测试失败问题。 [#10100](https://github.com/vllm-project/vllm-ascend/issues/10100)
- 修复了NPU MoE量化方法以正确支持仅TP配置。 [#9908](https://github.com/vllm-project/vllm-ascend/issues/9908)
- 通过更新 discardrequestmask 修复了分块流水线并行卡住问题。 [#9843](https://github.com/vllm-project/vllm-ascend/issues/9843)
- 修复了 cudagraphconfig 模式 FULL 的边界情况。 [#9863](https://github.com/vllm-project/vllm-ascend/issues/9863)
- 移除了 updateaclgraphsizes 中的旧版捕获大小剪枝。 [#9962](https://github.com/vllm-project/vllm-ascend/issues/9962)
- 修复了注意力中DSA v1 W8A8动态冲突问题。 [#9476](https://github.com/vllm-project/vllm-ascend/issues/9476)
- 修复了GLM流式工具调用名称保留问题。 [#10361](https://github.com/vllm-project/vllm-ascend/issues/10361)
- 修复了FP32 MM编码器注意力支持。 [#10200](https://github.com/vllm-project/vllm-ascend/issues/10200)
- 使vllm-ascend与上游vLLM单元测试预期对齐。 [#10146](https://github.com/vllm-project/vllm-ascend/issues/10146)

##### 依赖项

- Python ：Python 3.12现已正式支持，并作为所有Docker镜像的默认版本。Python 3.10和3.11仍受支持。 [#9558](https://github.com/vllm-project/vllm-ascend/issues/9558)
- 上游vLLM ：从v0.20.2升级至v0.21.0。 [#9835](https://github.com/vllm-project/vllm-ascend/issues/9835)
- xlite ：从 0.1.0rc9.dev210 升级至 0.1.0rc10.dev210 。
- CANN ：A2/A3/Ascend 950使用9.0.0（与v0.20.2rc1相同）； 310P使用CANN 9.1.0 beta 。 注意 ： FULLANDPIECEWISE 需要HDK 25.5.1+ / CANN 8.5.0+以修复流预算问题；旧版本仍受旧版流预算限制，可能回退至 PIECEWISE 。
- PyTorch / torchnpu ：2.10.0（与v0.20.2rc1相同）。
- triton-ascend ：3.2.1（与v0.20.2rc1相同）。
- Mooncake ：从v0.3.8.post1升级至v0.3.9。 [#10339](https://github.com/vllm-project/vllm-ascend/issues/10339)

##### 重大变更与迁移说明

- VLLMASCENDENABLECONTEXTPARALLEL 已移除 ：环境变量 VLLMASCENDENABLECONTEXTPARALLEL 已随迁移至 AscendConfig 而移除。用户应将所有剩余使用迁移至等效的AscendConfig选项。 [#9668](https://github.com/vllm-project/vllm-ascend/issues/9668)
- DSA-CP配置解耦 ：DSA-CP现通过 additionalconfig.enabledsacp 控制，与FlashComm1开关解耦。之前依赖FC1隐式启用DSA-CP的用户，现在必须显式设置 enableflashcomm1 和 enabledsacp 。 [#9697](https://github.com/vllm-project/vllm-ascend/issues/9697) [#9910](https://github.com/vllm-project/vllm-ascend/issues/9910)
- Docker 镜像中的 Python 3.12 ：所有 Docker 基础镜像现已使用 Python 3.12（ py3.12 ）。如果您的部署或自定义镜像依赖于 py3.11 ，请相应更新镜像标签。 [#9558](https://github.com/vllm-project/vllm-ascend/issues/9558)

##### 文档

- 刷新并优化了当前开发分支的文档。 [#9606](https://github.com/vllm-project/vllm-ascend/issues/9606)
- 更新了模型代码转换器编写指南。 [#9881](https://github.com/vllm-project/vllm-ascend/issues/9881)
- 新增了 Ascend 950 解耦式 PD 端点配置文档。 [#9690](https://github.com/vllm-project/vllm-ascend/issues/9690)

##### 已知问题

- 旧版 HDK/CANN 上的 FULLANDPIECEWISE ：HDK < 25.5.1 / CANN < 8.5.0 栈仍存在旧的流预算限制，可能导致图捕获失败或回退到 PIECEWISE 模式。建议升级至 HDK 25.5.1+ / CANN 8.5.0+ 以获得完整的 FULLANDPIECEWISE 支持。

#### v0.20.2rc1 · 2026.06.03（中文）

##### 功能特性

- 新增Flash Attention 3支持，实现训练推理一致性。后端已在vLLM Ascend中就绪，待FA3包公开发布后即可直接使用。 [#9060](https://github.com/vllm-project/vllm-ascend/issues/9060)
- 新增DeepSeek PCP/DCP适配，提升对分离式部署的支持。 [#9058](https://github.com/vllm-project/vllm-ascend/issues/9058)
- 新增专用开关 additionalconfig.enabledsacp ，将DSA-CP与FC1解耦。DSA-CP现在需要同时显式启用FC1和DSA-CP，允许在需要时保持FC1启用而禁用DSA-CP。 [#9878](https://github.com/vllm-project/vllm-ascend/issues/9878)
- 新增DFlash工作负载的合并图支持。 [#9074](https://github.com/vllm-project/vllm-ascend/issues/9074)

##### 硬件与算子支持

- 在Ascend 950系列产品上启用了MXFP4 flatquant和行并行支持。 [#9391](https://github.com/vllm-project/vllm-ascend/issues/9391)
- 在Ascend 950系列产品上启用了MXFP4/MXFP8量化的MC2分发与合并支持。 [#9365](https://github.com/vllm-project/vllm-ascend/issues/9365) [#9328](https://github.com/vllm-project/vllm-ascend/issues/9328)

##### 性能

- 修复了新重叠路径中 cvindexerqkvprepare 多流并行未启用的问题。 [#9530](https://github.com/vllm-project/vllm-ascend/issues/9530)
- 通过移除PIECEWISE模式下的同步点，降低了主机设备同步开销。 [#9025](https://github.com/vllm-project/vllm-ascend/issues/9025)
- 优化了FusedMoE中共享专家的重叠时序。 [#9413](https://github.com/vllm-project/vllm-ascend/issues/9413)
- [实验性] 新增 enablereducesample 缩减采样，降低分布式贪婪、top-k/top-p和拒绝采样路径中的张量并行通信开销。 [#8308](https://github.com/vllm-project/vllm-ascend/issues/8308)

##### 依赖项

- 将匹配的上游vLLM基线升级到v0.20.2。 [#9270](https://github.com/vllm-project/vllm-ascend/issues/9270)
- 将CANN升级到9.0.0，并将triton-ascend升级到3.2.1。 [#9085](https://github.com/vllm-project/vllm-ascend/issues/9085)
- 将PyTorch和TorchNPU升级到2.10.0。 [#9128](https://github.com/vllm-project/vllm-ascend/issues/9128)

##### 重大变更与迁移说明

- 将一组运行时选项从环境变量迁移至 AscendConfig ，包括将FC1/FlashComm1开关迁移至 additionalconfig.enableflashcomm1 。升级时请检查配置代码和部署清单。 [#9064](https://github.com/vllm-project/vllm-ascend/issues/9064)
- 默认禁用了SwiGLU clamp，这可能会略微改变之前依赖旧默认值的工作负载行为。 [#9438](https://github.com/vllm-project/vllm-ascend/issues/9438)

##### 文档

- 刷新了当前主分支发布线的部署和功能文档。 [#9309](https://github.com/vllm-project/vllm-ascend/issues/9309) [#8968](https://github.com/vllm-project/vllm-ascend/issues/8968)

#### v0.18.0 · 2026.04.30（中文）

##### 亮点

- Qwen3.x支持 ：[实验性]无需任何代码修改即可支持Qwen3.x模型！
- EPLB（专家并行负载均衡） ：EPLB经过大量错误修复后更加稳定，性能也更好。EPLB现在在大多数情况下都能正常工作，推荐使用。 [#6528](https://github.com/vllm-project/vllm-ascend/issues/6528) [#7344](https://github.com/vllm-project/vllm-ascend/issues/7344) [#7890](https://github.com/vllm-project/vllm-ascend/issues/7890) [#6477](https://github.com/vllm-project/vllm-ascend/issues/6477)
- ACLGraph增强 ：ACLGraph现在支持为多步草稿捕获单个合并图，大大减少了多步推测解码场景中的主机瓶颈！ [#5553](https://github.com/vllm-project/vllm-ascend/issues/5553) [#5940](https://github.com/vllm-project/vllm-ascend/issues/5940)
- KV池化 ：增强的KV池与Mooncake连接器现在支持稀疏注意力，并且添加了LMCacheAscendConnector作为Ascend的新KV缓存池化解决方案，支持HIXL互连的FabricMem模式，支持yuanrong作为AscendStoreConnector的后端，现在MooncakeLayerwiseConnector可以与KV池化一起激活。与之前的版本相比，KV池化在TTFT上有巨大的性能优化！ [#6339](https://github.com/vllm-project/vllm-ascend/issues/6339) [#6882](https://github.com/vllm-project/vllm-ascend/issues/6882) [#6806](https://github.com/vllm-project/vllm-ascend/issues/6806) [#6869](https://github.com/vllm-project/vllm-ascend/issues/6869) [#7032](https://github.com/vllm-project/vllm-ascend/issues/7032)
- PD分离 ：Mooncake逐层连接器现在支持混合注意力管理器和PCP功能。 [#7022](https://github.com/vllm-project/vllm-ascend/issues/7022) [#6627](https://github.com/vllm-project/vllm-ascend/issues/6627)
- NPU Graph EX (npugraphex) 默认启用 ：npugraphex功能现在默认启用，通过集成的inductor pass和MatmulAllReduceAddRMSNorm融合提供更好的图优化。 [#6354](https://github.com/vllm-project/vllm-ascend/issues/6354) [#6664](https://github.com/vllm-project/vllm-ascend/issues/6664) [#6006](https://github.com/vllm-project/vllm-ascend/issues/6006)
- RL（强化学习） ：[实验性]RL通过使用AscendC和triton op实现的批量不变特性得到增强，并添加了路由重放功能。 [#6590](https://github.com/vllm-project/vllm-ascend/issues/6590) [#6696](https://github.com/vllm-project/vllm-ascend/issues/6696)
- CPU绑定默认启用 ：启用了仅限ARM的CPU绑定，采用全局切片A3策略，提高了主机绑定场景中的推理吞吐量。 [#6686](https://github.com/vllm-project/vllm-ascend/issues/6686)

##### 功能特性

- 混合模型现在支持前缀缓存。 [#7103](https://github.com/vllm-project/vllm-ascend/issues/7103)
- Flash Comm V1现在支持带有MLA的VL模型，消除了多模态服务的一个先前限制。 [#7390](https://github.com/vllm-project/vllm-ascend/issues/7390)
- VL MoE模型现在支持SP，并且移除了 spthreshold ，转而使用vLLM的 spmintokennum 。 [#7044](https://github.com/vllm-project/vllm-ascend/issues/7044)
- [实验性]流水线并行现在支持异步调度，提高了PP部署的吞吐量。 [#7136](https://github.com/vllm-project/vllm-ascend/issues/7136)
- Eagle3现在支持不带嵌入的QuaRot量化。 [#7038](https://github.com/vllm-project/vllm-ascend/issues/7038)
- 重构eagle3/mtp，eagle3和mtp现在使用相同的提议器。 [#6349](https://github.com/vllm-project/vllm-ascend/issues/6349) [#7033](https://github.com/vllm-project/vllm-ascend/issues/7033)

##### 硬件与算子支持

- 首次支持310P，性能大幅优化！ :
- 支持W8A8量化。 [#6641](https://github.com/vllm-project/vllm-ascend/issues/6641) [#6454](https://github.com/vllm-project/vllm-ascend/issues/6454)
- 支持量化与非量化场景下的weightNZ。 [#6705](https://github.com/vllm-project/vllm-ascend/issues/6705)
- 支持W8A8SC量化。 [#7075](https://github.com/vllm-project/vllm-ascend/issues/7075)
- 修复图模式下后采样不工作的问题。 [#8077](https://github.com/vllm-project/vllm-ascend/issues/8077)
- 为300I DUO添加addrmsnorm支持。 [#6704](https://github.com/vllm-project/vllm-ascend/issues/6704)
- 修复310P上ngram图回放精度错误。 [#7134](https://github.com/vllm-project/vllm-ascend/issues/7134)
- 自定义算子 : 新增多个自定义算子，包括:
- 添加Ascend Ops recurrentgateddeltarule算子。 [#6725](https://github.com/vllm-project/vllm-ascend/issues/6725)
- 为MoE模型添加GMM自定义算子。 [#7010](https://github.com/vllm-project/vllm-ascend/issues/7010)
- 优化splitqkvrmsnormrope算子。 [#6827](https://github.com/vllm-project/vllm-ascend/issues/6827)
- Triton rope现在支持从cossincache进行indexselecting。 [#5450](https://github.com/vllm-project/vllm-ascend/issues/5450)
- 添加AscendC融合算子transposekvcachebyblock以加速GQA传输。 [#6366](https://github.com/vllm-project/vllm-ascend/issues/6366)
- 优化 DispatchFFNCombine 内核性能，修复因未对齐UB访问导致的向量错误。 [#6468](https://github.com/vllm-project/vllm-ascend/issues/6468) [#6707](https://github.com/vllm-project/vllm-ascend/issues/6707)
- 重构并优化CausalConv1d。 [#7495](https://github.com/vllm-project/vllm-ascend/issues/7495)

##### 性能

- 初始化性能 : 优化Triton算子重编译，减少因函数参数优化触发的冗余重建和不必要重编译。 [#7647](https://github.com/vllm-project/vllm-ascend/issues/7647) [#7645](https://github.com/vllm-project/vllm-ascend/issues/7645)

##### 依赖项

- vLLM ：升级到0.18.0，并放弃对0.17.0的支持。
- TorchNPU ：由于一些已知问题，升级到2.9.0.post1+git4c901a4。此版本无法默认安装，请手动升级。我们可以从此链接获取安装包： https://vllm-ascend.obs.cn-north-4.myhuaweicloud.com/vllm-ascend/torchnpu-2.9.0.post1%2Bgit4c901a4- \({PYTHONTAG}-\) .whl}-manylinux228${ARCH 。 注意： 如果CANN已升级到9.0.0版本，请同步将TorchNPU版本升级到2.9.0.post2。
- triton-ascend ：由于一些已知问题，升级到3.2.0.dev20260322。此版本无法默认安装，请手动升级。我们可以从此链接获取安装包： https://vllm-ascend.obs.cn-north-4.myhuaweicloud.com/vllm-ascend/tritonascend-3.2.0.dev20260322- \({PYTHONTAG}-\) -manylinux227 \({ARCH}.manylinux228\) .whl 。 注意： 如果CANN已升级到9.0.0版本，请同步将triton-ascend版本升级到3.2.1。
- Transformers ：升级到>= 4.57.4。
- Mooncake ：升级到3.9.0。

##### 弃用与重大变更

- 清理并弃用了 ProfileExecuteDuration 功能。 [#6461](https://github.com/vllm-project/vllm-ascend/issues/6461)
- 移除了自定义的 rotaryembedding 算子。 [#6523](https://github.com/vllm-project/vllm-ascend/issues/6523)
- 清理了未使用的环境变量 USEOPTIMIZEDMODEL 。 [#6618](https://github.com/vllm-project/vllm-ascend/issues/6618)
- 配置选项 enableflashcommv1 已重命名为 enablesp 。 [#6883](https://github.com/vllm-project/vllm-ascend/issues/6883)

##### 文档

- 在常见问题解答中添加了抢占指导。 [#8136](https://github.com/vllm-project/vllm-ascend/issues/8136)
- 清理了文档措辞和语法。 [#8073](https://github.com/vllm-project/vllm-ascend/issues/8073)
- 添加了 CPU 绑定的用户/开发者指南。 [#7045](https://github.com/vllm-project/vllm-ascend/issues/7045)
- 添加了 Memcache 使用指南。 [#6476](https://github.com/vllm-project/vllm-ascend/issues/6476)
- 添加了后缀推测解码的基准测试教程。 [#6323](https://github.com/vllm-project/vllm-ascend/issues/6323)
- 添加了 npugraphex 介绍文档。 [#6306](https://github.com/vllm-project/vllm-ascend/issues/6306)

##### 其他

- 为捕获模式添加异步通信检查。 [#8149](https://github.com/vllm-project/vllm-ascend/issues/8149)
- 修复了池化场景间的 KV Pool 冲突，并修复了 vLLM v0.18.0 上缺失的 KV 缓存放置问题。 [#8101](https://github.com/vllm-project/vllm-ascend/issues/8101) [#7874](https://github.com/vllm-project/vllm-ascend/issues/7874)
- 通过修正注意力状态处理修复了短提示转发问题。 [#8088](https://github.com/vllm-project/vllm-ascend/issues/8088)
- 恢复 globalbs=0 和 mc2mask 以支持统一令牌分发，并支持节点间 RoCE 分层 MC2 通信。 [#8040](https://github.com/vllm-project/vllm-ascend/issues/8040)
- 通过从反向映射切换为正向映射，修复了 AscendModelSlimConfig 中的量化配置键映射。 [#7716](https://github.com/vllm-project/vllm-ascend/issues/7716)
- 修复了在 PD 部署中运行 MTP 时全图中所有 D-Nodes 的支持问题。 [#5472](https://github.com/vllm-project/vllm-ascend/issues/5472)
- Layerwise connector 现在支持重计算调度器。 [#5900](https://github.com/vllm-project/vllm-ascend/issues/5900)
- 修复了池化代码问题并更新了使用指南。 [#6126](https://github.com/vllm-project/vllm-ascend/issues/6126)
- NPUWorker Profiler 现在支持 profileprefix 以获得更好的性能分析体验。 [#6968](https://github.com/vllm-project/vllm-ascend/issues/6968)

##### 已知问题

- 目前，在多DP和大token数场景（ kvproducer 或 kvboth ）下，不推荐启用 VLLMASCENDENABLEFUSEDMC2 ，因为该场景可能会在DP间产生大量填充token，这些token会被路由到特定专家，导致某些rank接收的token过载，从而引发精度和性能问题。 [#8320](https://github.com/vllm-project/vllm-ascend/issues/8320)
- PCP和eagle3叠加使用时，当prefill请求的调度token数小于 1 + numspeculativetokens 时可能产生错误，导致该prefill请求被当作decode请求处理，从而引发错误。 [#8402](https://github.com/vllm-project/vllm-ascend/issues/8402)
- 不支持NPU软分区与 CUDAGraphMode.PIECEWISE 的组合使用。 [#8585](https://github.com/vllm-project/vllm-ascend/issues/8585)
- Qwen3.x在PD分离场景下存在精度问题。 [#8421](https://github.com/vllm-project/vllm-ascend/issues/8421)
- 目前，x86架构上存在一个已知问题，该问题已在CANN 9.0.0中解决。如果您想在x86上部署vllm-ascend，请手动升级CANN版本。 [#7993](https://github.com/vllm-project/vllm-ascend/issues/7993)
- P/D代理在重计算重试后可能会泄漏资源，并掩盖后续的metaserver错误。 [#8852](https://github.com/vllm-project/vllm-ascend/issues/8852)

#### v0.19.1rc1 · 2026.04.30（中文）

##### 亮点

- DFlash Attention后端 ：新增支持FULLDECODEONLY的DFlash注意力后端，以提升推理性能（ [#8118](https://github.com/vllm-project/vllm-ascend/issues/8118) 、 [#8516](https://github.com/vllm-project/vllm-ascend/issues/8516) 、 [#8627](https://github.com/vllm-project/vllm-ascend/issues/8627) ）
- 零气泡异步调度 ：对异步调度和推测解码实现了零气泡优化，显著降低了调度开销（ [#7640](https://github.com/vllm-project/vllm-ascend/issues/7640) ）
- A2/A3注意力算子升级 ：将npufusionattention替换为npuflashattentionunpad算子，以在A2和A3硬件上获得更优性能（ [#8671](https://github.com/vllm-project/vllm-ascend/issues/8671) ）

##### 功能特性

- Eagle + PCP + 全图模式 ：支持Eagle结合PCP和全图模式（ [#7924](https://github.com/vllm-project/vllm-ascend/issues/7924) ）
- PCP多模态推理 ：支持启用预填充上下文并行特性时的多模态推理（ [#8038](https://github.com/vllm-project/vllm-ascend/issues/8038) ）
- PP的动态分块 ：支持分块流水线并行的动态分块（ [#7896](https://github.com/vllm-project/vllm-ascend/issues/7896) ）
- 基于汉明距离的稀疏注意力 ：新增基于汉明距离的稀疏注意力推理框架和算子（ [#8564](https://github.com/vllm-project/vllm-ascend/issues/8564) 、 [#8346](https://github.com/vllm-project/vllm-ascend/issues/8346) ）
- 优化的因果Conv1d算子 ：新增优化的因果conv1d算子（ [#8215](https://github.com/vllm-project/vllm-ascend/issues/8215) ）
- 循环AscendC算子 ：为特定模型架构新增循环AscendC算子（ [#8055](https://github.com/vllm-project/vllm-ascend/issues/8055) ）
- Minitron-8B-Base支持 ：验证并支持nvidia/Minitron-8B-Base模型（ [#8157](https://github.com/vllm-project/vllm-ascend/issues/8157) ）
- MRv2的初始MoE支持 ：为Model Runner V2添加初始MoE模型支持（ [#7922](https://github.com/vllm-project/vllm-ascend/issues/7922) ）
- Xlite后端扩展 ：
- EPLB增强 ：
- Swift均衡器策略支持混合放置（ [#8035](https://github.com/vllm-project/vllm-ascend/issues/8035) ）
- EPLB对多模态模型的适配（ [#7743](https://github.com/vllm-project/vllm-ascend/issues/7743) ）
- modelrunnerv2的Eagle改进 ：
- 修复了图模式下Eagle的接受率问题（ [#8365](https://github.com/vllm-project/vllm-ascend/issues/8365) ）
- 修复了Eagle的精度问题（ [#8230](https://github.com/vllm-project/vllm-ascend/issues/8230) 、 [#8033](https://github.com/vllm-project/vllm-ascend/issues/8033) ）
- 适配Eagle以支持modelrunnerv2（ [#7885](https://github.com/vllm-project/vllm-ascend/issues/7885) ）
- MTP合并图 ：支持MTP（多Token预测）的合并图( [#6860](https://github.com/vllm-project/vllm-ascend/issues/6860) )
- 统一MoE专家放置 ：支持共享专家和路由专家的统一放置( [#7188](https://github.com/vllm-project/vllm-ascend/issues/7188) )
- Dispatch V2层级通信 ：支持dispatchv2/combinev2层级通信以提升MoE性能( [#7583](https://github.com/vllm-project/vllm-ascend/issues/7583) )
- Dispatch FFN Combine的Xmask ：为dispatchffncombine算子添加xmask功能（w8a8分支）( [#8560](https://github.com/vllm-project/vllm-ascend/issues/8560) )
- 融合W4A8内核 ：将W4A8 dispatch + FFN + combine融合为单个融合内核( [#7779](https://github.com/vllm-project/vllm-ascend/issues/7779) )
- KV缓存内存核算 ：在KV缓存规划中考虑图捕获内存( [#8289](https://github.com/vllm-project/vllm-ascend/issues/8289) )
- GDN优化 ：优化GDN非推测预填充回退元数据( [#7756](https://github.com/vllm-project/vllm-ascend/issues/7756) )
- Mamba前缀缓存 ：逐层连接器支持Mamba预填充前缀缓存( [#7814](https://github.com/vllm-project/vllm-ascend/issues/7814) )
- Yuanrong KV池后端 ：为KV池添加Yuanrong后端支持( [#6869](https://github.com/vllm-project/vllm-ascend/issues/6869) )

##### 硬件和算子支持

- 310P增强 ：
- 支持W8A8动态线性方法( [#7725](https://github.com/vllm-project/vllm-ascend/issues/7725) )
- 添加npucausalconv1d310 AscendC自定义算子( [#7798](https://github.com/vllm-project/vllm-ascend/issues/7798) )
- 添加recurrentgateddeltarule310 AscendC自定义算子( [#7926](https://github.com/vllm-project/vllm-ascend/issues/7926) )

##### 性能

- A2/A3注意力 ：用npuflashattentionunpad算子替换npufusionattention以提升性能( [#8671](https://github.com/vllm-project/vllm-ascend/issues/8671) )
- MLA PCP预填充优化 ：通过避免投影不必要的尾部KV Token来优化MLA PCP预填充注意力( [#8787](https://github.com/vllm-project/vllm-ascend/issues/8787) )
- 异步调度优化 ：
- 异步调度下发气泡优化( [#8766](https://github.com/vllm-project/vllm-ascend/issues/8766) )
- 零气泡异步调度与推测解码( [#7640](https://github.com/vllm-project/vllm-ascend/issues/7640) )
- KV缓存优化 ：
- 通过aclrtMemcpyBatchAsync实现批量KV缓存卸载( [#7819](https://github.com/vllm-project/vllm-ascend/issues/7819) )
- 通过在全收集前选择块来优化KV缓存收集( [#8050](https://github.com/vllm-project/vllm-ascend/issues/8050) )
- 算子优化 ：
- 优化splitqkvtprmsnormrope算子( [#8059](https://github.com/vllm-project/vllm-ascend/issues/8059) )
- 减少PCP/DCP（SFA）的预填充KV全收集通信( [#8043](https://github.com/vllm-project/vllm-ascend/issues/8043) )
- 添加惩罚相关的Triton内核以提升惩罚性能( [#7569](https://github.com/vllm-project/vllm-ascend/issues/7569) )
- Triton内核优化（modelrunnerv2） ：
- 优化temperaturekernel和topklogsoftmaxkernel( [#8083](https://github.com/vllm-project/vllm-ascend/issues/8083) )
- 优化minpkernel性能( [#8243](https://github.com/vllm-project/vllm-ascend/issues/8243) , [#7767](https://github.com/vllm-project/vllm-ascend/issues/7767) )
- 添加bad-words-kernel triton内核( [#8030](https://github.com/vllm-project/vllm-ascend/issues/8030) )
- 优化bincountkernel性能( [#7757](https://github.com/vllm-project/vllm-ascend/issues/7757) )
- 优化rankskernel性能( [#7767](https://github.com/vllm-project/vllm-ascend/issues/7767) )
- 优化由函数参数触发的triton重编译( [#7480](https://github.com/vllm-project/vllm-ascend/issues/7480) , [#7481](https://github.com/vllm-project/vllm-ascend/issues/7481) , [#7483](https://github.com/vllm-project/vllm-ascend/issues/7483) )
- HCCL进程组复用 ：在Ascend上复用等效的HCCL进程组( [#7654](https://github.com/vllm-project/vllm-ascend/issues/7654) )
- CPU绑定延迟 ：将CPU绑定延迟至工作线程预热完成( [#7829](https://github.com/vllm-project/vllm-ascend/issues/7829) )
- Conv3d转Linear转换 ：当卷积核大小等于步长时，将conv3d转换为linear ( [#8318](https://github.com/vllm-project/vllm-ascend/issues/8318) )

##### 依赖项

- vLLM ：升级至vLLM v0.19.1 ( [#8448](https://github.com/vllm-project/vllm-ascend/issues/8448) )
- Transformers ：从4.57.4升级至transformers 5.5.3，这是一个主版本升级，包含重大改进和API变更 ( [#8448](https://github.com/vllm-project/vllm-ascend/issues/8448) )
- lm-eval ：升级至lm-eval 0.4.11以兼容transformers 5.5.3 ( [#8448](https://github.com/vllm-project/vllm-ascend/issues/8448) )
- 新增依赖 ：在requirements中添加了memcache和memfabric ( [#8747](https://github.com/vllm-project/vllm-ascend/issues/8747) )

##### 文档

- PD分离指南 ：
- 使用UCM和Mooncake的PD分离 ( [#8338](https://github.com/vllm-project/vllm-ascend/issues/8338) )
- 动态分块流水线并行指南 ( [#8728](https://github.com/vllm-project/vllm-ascend/issues/8728) )
- 模型文档 ：
- Hunyuan-A13B-Instruct验证与文档 ( [#7381](https://github.com/vllm-project/vllm-ascend/issues/7381) )
- LLaVA-OneVision-Qwen2-0.5B-OV教程 ( [#7912](https://github.com/vllm-project/vllm-ascend/issues/7912) )
- 文档改进 ：
- 启用MathJax渲染Markdown公式 ( [#8793](https://github.com/vllm-project/vllm-ascend/issues/8793) )
- 更新版本策略 ( [#8656](https://github.com/vllm-project/vllm-ascend/issues/8656) )
- 在常见问题中添加抢占描述 ( [#8131](https://github.com/vllm-project/vllm-ascend/issues/8131) )
- 更新支持的vLLM版本 ( [#7923](https://github.com/vllm-project/vllm-ascend/issues/7923) )
- 参数化版本策略兼容性矩阵 ( [#8002](https://github.com/vllm-project/vllm-ascend/issues/8002) )
- 避免隐藏NPU导致的A2 CPU绑定重叠及文档更新 ( [#8792](https://github.com/vllm-project/vllm-ascend/issues/8792) )

##### 其他

- GQA C8全图模式 ：修复了GQA C8全图模式中的一个Bug ( [#8779](https://github.com/vllm-project/vllm-ascend/issues/8779) )
- DSV3.1 W4A8 TTFT ：回退 balanceflag 的变更以修复DSV3.1 W4A8 TTFT性能下降 ( [#8675](https://github.com/vllm-project/vllm-ascend/issues/8675) )
- 图捕获OOM ：修复modelrunnerv2中的图捕获内存溢出 ( [#8111](https://github.com/vllm-project/vllm-ascend/issues/8111) )
- DeepSeek 3.2 C8精度 ：通过回退量化层修复DeepSeek 3.2 C8精度 ( [#7628](https://github.com/vllm-project/vllm-ascend/issues/7628) )
- DeepSeek 3.2 DCP MTP ：修复ds3.2 dcp mtp问题 ( [#7617](https://github.com/vllm-project/vllm-ascend/issues/7617) )
- MTP1并发崩溃 ：修复MTP1在多个并发场景下的崩溃问题 ( [#7459](https://github.com/vllm-project/vllm-ascend/issues/7459) )
- 推测解码+异步 ：修复推测解码和异步Bug ( [#8461](https://github.com/vllm-project/vllm-ascend/issues/8461) )
- 推测解码+Logprobs ：修复禁用异步调度时推测解码+logprobs崩溃的问题 ( [#7861](https://github.com/vllm-project/vllm-ascend/issues/7861) )
- 重复惩罚 ：修复异步调度中repetitionpenalty不生效的问题 ( [#7789](https://github.com/vllm-project/vllm-ascend/issues/7789) )
- P/D KV缓存 ：修复P/D场景下TP不相等时MTP层的KV缓存问题 ( [#8540](https://github.com/vllm-project/vllm-ascend/issues/8540) )
- P/D短序列 ：修复P/D模式下短序列无响应的问题 ( [#8104](https://github.com/vllm-project/vllm-ascend/issues/8104) )
- P/D重试机制 ：添加重试机制以防止P/D中的丢包 ( [#8166](https://github.com/vllm-project/vllm-ascend/issues/8166) )
- 逐层连接器OOM ：修复大缓冲区传输过程中逐层连接器的OOM问题（ [#7834](https://github.com/vllm-project/vllm-ascend/issues/7834) ）
- KV池Put逻辑 ：修复KV池未放置KV缓存的问题，并修复KV传输的Put逻辑（ [#7875](https://github.com/vllm-project/vllm-ascend/issues/7875) ， [#7717](https://github.com/vllm-project/vllm-ascend/issues/7717) ）
- KV池PCP/DCP ：修复KV池的PCP和DCP错误（ [#8099](https://github.com/vllm-project/vllm-ascend/issues/8099) ）
- Mooncake后端 ：MooncakeBackend处理除Ascend之外的协议（ [#8514](https://github.com/vllm-project/vllm-ascend/issues/8514) ）
- FlashComm服务器初始化 ：修复当maxnumseqs不是tp的倍数时使用FLASHCOMM的服务器初始化错误（ [#7801](https://github.com/vllm-project/vllm-ascend/issues/7801) ）
- Triton重装 ：在vllm-ascend安装后重新安装triton-ascend（ [#7790](https://github.com/vllm-project/vllm-ascend/issues/7790) ）
- DBO兼容性 ：为Ascend NPU上的--enable-dbo添加兼容性保护（ [#8507](https://github.com/vllm-project/vllm-ascend/issues/8507) ）
- NPU上的GPU参数 ：在Ascend NPU上保护GPU特定的并行配置参数（ [#8703](https://github.com/vllm-project/vllm-ascend/issues/8703) ）
- A2 CPU绑定 ：避免隐藏NPU导致的A2 CPU绑定重叠（ [#8792](https://github.com/vllm-project/vllm-ascend/issues/8792) ）
- FIA填充错误 ：修复EAGLE在最大并发下的FIA填充错误（ [#7740](https://github.com/vllm-project/vllm-ascend/issues/7740) ）
- MoE加载精度 ：修复allgather中moeload的精度问题（ [#7887](https://github.com/vllm-project/vllm-ascend/issues/7887) ）
- Qwen的FlashComm1 + DCP ：支持Qwen模型的FlashComm1和DCP（ [#7673](https://github.com/vllm-project/vllm-ascend/issues/7673) ）
- 块验证 ：禁用块验证以避免NPU上的错误验证（ [#7603](https://github.com/vllm-project/vllm-ascend/issues/7603) ）
- 模型运行器V2全图 ：修复全图模式下的modelrunnerv2（ [#7945](https://github.com/vllm-project/vllm-ascend/issues/7945) ）
- MRv2推测解码 ：修复mrv2在推测解码时的运行时错误（ [#8209](https://github.com/vllm-project/vllm-ascend/issues/8209) ）
- GLM工具调用流式处理 ：修复GLM工具调用流式处理问题（ [#8832](https://github.com/vllm-project/vllm-ascend/issues/8832) ）
- 强制工具选择 ：修复强制工具选择中无内容处理的问题（ [#8833](https://github.com/vllm-project/vllm-ascend/issues/8833) ）
- MiniMax推理用量 ：修复MiniMax推理用量统计问题（ [#8831](https://github.com/vllm-project/vllm-ascend/issues/8831) ）
- lmhead TP logits截断后的MTP循环批次大小（ [#8718](https://github.com/vllm-project/vllm-ascend/issues/8718) ）
- 修复DSV32混合部署中layersharding导致的错误（ [#8717](https://github.com/vllm-project/vllm-ascend/issues/8717) ）
- EPLB topkids使用逻辑专家计数（ [#8501](https://github.com/vllm-project/vllm-ascend/issues/8501) ）
- EPLB验证逻辑优化及MTP支持冗余专家（ [#8710](https://github.com/vllm-project/vllm-ascend/issues/8710) ）
- SP在MoE序列并行中保留图字符串化（ [#8780](https://github.com/vllm-project/vllm-ascend/issues/8780) ）
- SpecDecode修复草稿quarot模型加载超时（ [#8736](https://github.com/vllm-project/vllm-ascend/issues/8736) ）
- 修复dummyrun预热与--language-model-only不匹配的问题（ [#8556](https://github.com/vllm-project/vllm-ascend/issues/8556) ）
- 修复AscendYaRNRotaryEmbedding中的AttributeError（ [#8734](https://github.com/vllm-project/vllm-ascend/issues/8734) ）
- Eagle3添加全图案例并检查模拟函数（ [#8668](https://github.com/vllm-project/vllm-ascend/issues/8668) ）
- 修复npufusedinferattentionscorev2中的attenmask（ [#8387](https://github.com/vllm-project/vllm-ascend/issues/8387) ）
- 修复eagle与dflash之间关于pcp的冲突（ [#8598](https://github.com/vllm-project/vllm-ascend/issues/8598) ）
- 修复DeepSeek 3.2 PCP+MTP的插槽映射错误（ [#8547](https://github.com/vllm-project/vllm-ascend/issues/8547) ）
- dispatchffncombine内核回滚（ [#8539](https://github.com/vllm-project/vllm-ascend/issues/8539) ）
- 要求层分片使用KV生产者（ [#8562](https://github.com/vllm-project/vllm-ascend/issues/8562) ）
- 310P使用CPU生成器缓存进行采样（ [#8495](https://github.com/vllm-project/vllm-ascend/issues/8495) ）
- 修复pcp+eagle3的computeslotmapping triton（ [#8435](https://github.com/vllm-project/vllm-ascend/issues/8435) ）
- 在fusemoe中处理基于枚举的MoE激活（ [#8465](https://github.com/vllm-project/vllm-ascend/issues/8465) ）
- 根据PD模式门控重计算/平衡/fusedmc2（ [#8373](https://github.com/vllm-project/vllm-ascend/issues/8373) ）
- w8a8 dispatch ffn combine偏置参数适配（ [#8342](https://github.com/vllm-project/vllm-ascend/issues/8342) ）
- 要求逐层AscendStorConnector使用分段cudagraph ( [#8283](https://github.com/vllm-project/vllm-ascend/issues/8283) )
- 修复patch balance调度器中远程KV等待提升的问题 ( [#8279](https://github.com/vllm-project/vllm-ascend/issues/8279) )
- 对CPU绑定子进程解析强制使用C语言环境 ( [#8251](https://github.com/vllm-project/vllm-ascend/issues/8251) )
- 在mlapo分支SFA中添加waitforkvlayerfromconnector ( [#8195](https://github.com/vllm-project/vllm-ascend/issues/8195) )
- 修复SP填充时维度不匹配的问题 ( [#7858](https://github.com/vllm-project/vllm-ascend/issues/7858) )
- 310P 修复Triton内核blocktable崩溃问题 ( [#8144](https://github.com/vllm-project/vllm-ascend/issues/8144) )
- 修复短提示的注意力状态问题 ( [#8029](https://github.com/vllm-project/vllm-ascend/issues/8029) )
- 310P 修复图模式下后采样不工作的问题 ( [#8017](https://github.com/vllm-project/vllm-ascend/issues/8017) )
- 310P 使GDN状态语义与vLLM对齐 ( [#7902](https://github.com/vllm-project/vllm-ascend/issues/7902) )
- 310P 处理ShardedStateLoader310中的空量化配置 ( [#7546](https://github.com/vllm-project/vllm-ascend/issues/7546) )
- 在eager模式下启用sp和eagle3时取消填充块表 ( [#7986](https://github.com/vllm-project/vllm-ascend/issues/7986) )
- 修复量化配置属性错误 ( [#7736](https://github.com/vllm-project/vllm-ascend/issues/7736) )
- 移除eplb不必要的weightscale包装行为 ( [#7733](https://github.com/vllm-project/vllm-ascend/issues/7733) )
- 适配model runnerv2的main2main并在休眠模式添加垃圾回收 ( [#7709](https://github.com/vllm-project/vllm-ascend/issues/7709) )
- 修复嵌入模型的前缀缓存支持 ( [#7452](https://github.com/vllm-project/vllm-ascend/issues/7452) )
- 在图+强化学习场景中复用权重地址 ( [#7473](https://github.com/vllm-project/vllm-ascend/issues/7473) )

##### 已知问题

- triton-ascend可能因g++内部编译器错误（段错误）而编译失败。解决方法：更新至 triton-ascend==3.2.0.dev20260322 并清除Triton缓存（ rm -rf ~/.triton/cache/ ）。 [#7782](https://github.com/vllm-project/vllm-ascend/issues/7782)
- TorchNPU ：由于某些已知问题，请升级到 2.9.0.post1+git4c901a4。此版本无法默认安装，请手动升级。我们可以从此链接获取安装包： https://vllm-ascend.obs.cn-north-4.myhuaweicloud.com/vllm-ascend/torchnpu-2.9.0.post1%2Bgit4c901a4-${PYTHONTAG}-${PYTHONTAG}-manylinux228${ARCH}.whl 。 注意： 如果 CANN 已升级到 9.0.0 版本，请同步将 TorchNPU 版本升级到 2.9.0.post2。

#### v0.18.0rc1 · 2026.04.01（中文）

##### 亮点

- DeepSeek模型现通过新的MLA算子可在Ascend 950产品上支持。 [#7232](https://github.com/vllm-project/vllm-ascend/issues/7232)

##### 功能特性

- Flash Comm V1 现支持带有MLA的VL模型，消除了之前多模态服务的限制。 [#7390](https://github.com/vllm-project/vllm-ascend/issues/7390)
- 支持在推测解码中为目标模型和草稿模型分别设置注意力后端，允许对每个模型进行更精细的后端调优。 [#7342](https://github.com/vllm-project/vllm-ascend/issues/7342)
- VL MoE模型现支持SP，并且移除了 spthreshold ，转而使用vLLM中的 spmintokennum 。 [#7044](https://github.com/vllm-project/vllm-ascend/issues/7044)
- Qwen VL模型现支持 w8a8mxfp8 量化。 [#7417](https://github.com/vllm-project/vllm-ascend/issues/7417)

##### 性能

- 优化了Triton算子的重新编译，减少了因函数参数优化触发的冗余重建和不必要的重新编译。 [#7647](https://github.com/vllm-project/vllm-ascend/issues/7647) [#7645](https://github.com/vllm-project/vllm-ascend/issues/7645)
- 简化了FIA预填充上下文合并路径，以提高运行时效率。 [#7293](https://github.com/vllm-project/vllm-ascend/issues/7293)

##### 其他

- 修复了PD分离中因DP节点间形状未对齐导致解码节点卡住的问题。 [#7534](https://github.com/vllm-project/vllm-ascend/issues/7534)
- 修复了v0.18.0升级后，Ascend上混合注意力加mamba模型可能以错误块大小启动的回归问题。 [#7528](https://github.com/vllm-project/vllm-ascend/issues/7528)
- 修复了单卡部署场景下多实例服务的OOM计算问题。 [#7427](https://github.com/vllm-project/vllm-ascend/issues/7427)
- 通过从反向映射切换到正向映射，修复了 AscendModelSlimConfig 中的量化配置键映射问题。 [#7716](https://github.com/vllm-project/vllm-ascend/issues/7716)

##### 已知问题

- triton-ascend可能因g++内部编译器错误（段错误）而编译失败。解决方法：更新至 triton-ascend==3.2.0.dev20260322 并清除Triton缓存（ rm -rf ~/.triton/cache/ ）。 [#7782](https://github.com/vllm-project/vllm-ascend/issues/7782)
- 在Ascend上使用tp-size >= 16时，FIA不支持所有MHA头维度。受影响的模型会因不支持的头维度而报错失败。此问题将在未来版本中FIA支持更多头维度时解决。 [#7729](https://github.com/vllm-project/vllm-ascend/issues/7729)
- 虽然Minimax-2.5现在支持PD分离，但内部测试发现启用此功能后GPQA基准测试性能下降13%。我们目前不建议为此模型启用PD分离，并正在努力进行优化修复。

#### v0.17.0rc1 · 2026.03.15（中文）

##### 亮点

- 现支持Ascend950芯片。 [#7151](https://github.com/vllm-project/vllm-ascend/issues/7151)
- Model Runner V2现支持ACLGraph（图模式）。 [#7110](https://github.com/vllm-project/vllm-ascend/issues/7110)
- 支持统一并行化推测解码，可同时启用并行草稿推理方案。 [#6766](https://github.com/vllm-project/vllm-ascend/issues/6766)

##### 功能特性

- 自动从模型文件中检测量化格式，并且也支持远程模型ID（例如 org/model-name ）。现在不需要 --quantization ascend 参数。 [#7111](https://github.com/vllm-project/vllm-ascend/issues/7111)
- 用于EPLB的FlashLB算法：支持每步热量收集和多阶段负载均衡，以提高专家并行效率。 [#6477](https://github.com/vllm-project/vllm-ascend/issues/6477)
- 带有张量并行和 --fully-sharded-loras 的LoRA现已修复并正常工作。 [#6650](https://github.com/vllm-project/vllm-ascend/issues/6650)
- 新增LMCacheAscendConnector作为Ascend的KV缓存池化解决方案。 [#6882](https://github.com/vllm-project/vllm-ascend/issues/6882)
- [实验性] Mooncake Layerwise Connector现支持具有多个KV缓存组的混合注意力管理器。 [#7022](https://github.com/vllm-project/vllm-ascend/issues/7022)
- [实验性] 混合模型中现支持前缀缓存。 [#7103](https://github.com/vllm-project/vllm-ascend/issues/7103)

##### 性能

- 流水线并行现在支持异步调度，提升了PP部署的吞吐量。 [#7136](https://github.com/vllm-project/vllm-ascend/issues/7136)
- 通过减少日志开销，改进了使用Mooncake连接器时的TTFT。 [#6125](https://github.com/vllm-project/vllm-ascend/issues/6125)
- 针对短序列（token长度 < blocksize）优化了KV池查找。 [#7146](https://github.com/vllm-project/vllm-ascend/issues/7146)
- 修复了Model Runner V2中的惩罚操作，实现了约10%的性能提升。 [#7013](https://github.com/vllm-project/vllm-ascend/issues/7013)

##### 文档

- 新增了EPD（编码-预填充-解码）文档和负载均衡代理示例。 [#6221](https://github.com/vllm-project/vllm-ascend/issues/6221)
- 新增了Ascend PyTorch Profiler使用指南。 [#7117](https://github.com/vllm-project/vllm-ascend/issues/7117)
- 修复了DSV3.1 PD配置文档。 [#7187](https://github.com/vllm-project/vllm-ascend/issues/7187)

##### 其他

- 修复了推测解码在全图模式下drafter崩溃的问题。 [#7158](https://github.com/vllm-project/vllm-ascend/issues/7158) [#7148](https://github.com/vllm-project/vllm-ascend/issues/7148)
- 修复了310P上ngram图回放的精度错误。 [#7134](https://github.com/vllm-project/vllm-ascend/issues/7134)
- 修复了上游vLLM变更后图模式下的FIA填充逻辑。 [#7144](https://github.com/vllm-project/vllm-ascend/issues/7144)
- 修复了rank0设备上衍生出额外进程的问题。 [#7107](https://github.com/vllm-project/vllm-ascend/issues/7107)
- 图捕获失败现在会正确抛出异常，便于调试。 [#5644](https://github.com/vllm-project/vllm-ascend/issues/5644)

##### 已知问题

- 在混合模型中，前缀缓存命中所需的最小token数目前较大。具体数值与tp大小相关，例如，当tp为2时，blocksize调整为2048，这意味着任何短于2048的前缀都不会被缓存。

#### v0.16.0rc1 · 2026.03.09（中文）

##### 功能特性

- [实验性] 支持ADXL/HIXL互联的FabricMem模式。 [#6806](https://github.com/vllm-project/vllm-ascend/issues/6806)
- NPUWorker Profiler现在支持profileprefix，以获得更好的性能分析体验。 [#6968](https://github.com/vllm-project/vllm-ascend/issues/6968)
- EPLB性能分析现在显示专家热度比较和eplb调整所需时间。 [#6877](https://github.com/vllm-project/vllm-ascend/issues/6877) [#7001](https://github.com/vllm-project/vllm-ascend/issues/7001)
- Mooncake Layerwise Connector现在支持kvpool。 [#7032](https://github.com/vllm-project/vllm-ascend/issues/7032)
- Eagle3现在支持不带嵌入的QuaRot量化。 [#7038](https://github.com/vllm-project/vllm-ascend/issues/7038)

##### 硬件与算子支持

- 310P现在支持w8a8sc量化方法。 [#7075](https://github.com/vllm-project/vllm-ascend/issues/7075)
- 新增了Ascend Ops recurrentgateddeltarule算子。 [#6725](https://github.com/vllm-project/vllm-ascend/issues/6725)
- 为MoE模型新增了GMM自定义算子。 [#7010](https://github.com/vllm-project/vllm-ascend/issues/7010)

##### 性能

- 优化了splitqkvrmsnormrope算子。 [#6827](https://github.com/vllm-project/vllm-ascend/issues/6827)
- 实现了全局CPU分区并改进了Ascend NPU的IRQ绑定，确保CPU分区不重叠并实现更好的资源管理。 [#6945](https://github.com/vllm-project/vllm-ascend/issues/6945)
- 通过重排状态更新操作优化了MTP执行。 [#6844](https://github.com/vllm-project/vllm-ascend/issues/6844)
- 通过使用全张量拷贝避免了mropepositions拷贝中的CPU同步。 [#7014](https://github.com/vllm-project/vllm-ascend/issues/7014)
- 移除了MoE模型中expertmap的H2D同步。 [#7000](https://github.com/vllm-project/vllm-ascend/issues/7000)

##### 依赖项

- CANN已升级至8.5.1，如果您未使用官方镜像，请记得手动升级。 [#6897](https://github.com/vllm-project/vllm-ascend/issues/6897)

##### 弃用与重大变更

- enableflashcommv1 配置选项已重命名为 enablesp 。 [#6883](https://github.com/vllm-project/vllm-ascend/issues/6883)
- 从模型文件自动检测量化格式的功能已回退，在 v0.16.0rc1 中，我们仍需添加 --quantization ascend 来服务由 modelslim 量化的模型。在远程模型 ID 的 bug 修复后，该功能将在下一版本中重新添加。 [#6873](https://github.com/vllm-project/vllm-ascend/issues/6873)

##### 文档

- 新增了 CPU 绑定的用户/开发者指南。 [#7045](https://github.com/vllm-project/vllm-ascend/issues/7045)
- 新增了指标使用文档和示例。 [#6962](https://github.com/vllm-project/vllm-ascend/issues/6962)
- 新增了用于 LLM 发现的 llms.txt。 [#6886](https://github.com/vllm-project/vllm-ascend/issues/6886)
- 新增了 310p 特殊参数 max-model-len 的说明。 [#7065](https://github.com/vllm-project/vllm-ascend/issues/7065)

##### 其他

- 修复 openEuler Dockerfile 错误。 [#6871](https://github.com/vllm-project/vllm-ascend/issues/6871)
- 大量 Bug 修复，包括：
- 修复启用 Context Parallel 时的 Eagle 推测解码。 [#6981](https://github.com/vllm-project/vllm-ascend/issues/6981) [#7079](https://github.com/vllm-project/vllm-ascend/issues/7079)
- 修复由上游 vLLM 变更引入的 LoRA 精度问题。 [#6958](https://github.com/vllm-project/vllm-ascend/issues/6958)
- 修复负载均衡代理服务器中的流式 content-type 问题。 [#6985](https://github.com/vllm-project/vllm-ascend/issues/6985)
- 修复元数据执行错误：整数模零。 [#6521](https://github.com/vllm-project/vllm-ascend/issues/6521)
- 修复 triton ropesiso 实现 Bug。 [#7082](https://github.com/vllm-project/vllm-ascend/issues/7082)
- 修复 updateaclgraphsizes 中 MTP 模型的错误层数。 [#7064](https://github.com/vllm-project/vllm-ascend/issues/7064)
- 修复 b020 之后 CANN 版本的编译错误。 [#7059](https://github.com/vllm-project/vllm-ascend/issues/7059)
- 修复 mergemultimodalembeddings 中的参数顺序 Bug。 [#7068](https://github.com/vllm-project/vllm-ascend/issues/7068)
- 修复 EPLB 中的 fused mc2 Bug。 [#6794](https://github.com/vllm-project/vllm-ascend/issues/6794)
- 修复用于计算 slot mapping 的内核块大小。 [#7019](https://github.com/vllm-project/vllm-ascend/issues/7019)
- 修复 P/D 分离中的逐层堆叠 MTP 错误。 [#7036](https://github.com/vllm-project/vllm-ascend/issues/7036)
- 修复 npurotaryembedding 的 RoPE 维度。 [#6880](https://github.com/vllm-project/vllm-ascend/issues/6880)
- 修复 Qwen-Omni 量化 Bug。 [#7042](https://github.com/vllm-project/vllm-ascend/issues/7042) [#7007](https://github.com/vllm-project/vllm-ascend/issues/7007)
- 修复图模式下 GDN 层的精度。 [#6822](https://github.com/vllm-project/vllm-ascend/issues/6822)
- 修复 PD 分离中 PCP/DCP 的精度 Bug。 [#6876](https://github.com/vllm-project/vllm-ascend/issues/6876)
- 修复 PD 分离中 MTP 的全图支持（所有 D-Node）。 [#6948](https://github.com/vllm-project/vllm-ascend/issues/6948)
- 修复同时启用 DP 和 DCP 时的 GQA 模型错误。 [#7012](https://github.com/vllm-project/vllm-ascend/issues/7012)
- 修复 MTP prefill 被错误分类为 decode 的边界情况。 [#6835](https://github.com/vllm-project/vllm-ascend/issues/6835)
- 修复 QuaRot 量化模型的 Eagle3 接受率。 [#6914](https://github.com/vllm-project/vllm-ascend/issues/6914)
- 修复启用 FlashComm V1 时 MTP 模型的 RoPE 形状不匹配。 [#6939](https://github.com/vllm-project/vllm-ascend/issues/6939)
- 修复启用静态内核时的 MoE 前向错误。 [#6964](https://github.com/vllm-project/vllm-ascend/issues/6964)
- 修复多模态模型的 GDN 层检测。 [#6941](https://github.com/vllm-project/vllm-ascend/issues/6941)
- 修复 300I 非量化模型权重 nd2nz 错误。 [#6851](https://github.com/vllm-project/vllm-ascend/issues/6851)
- 修复 CPU 绑定逻辑。 [#6889](https://github.com/vllm-project/vllm-ascend/issues/6889)
- 修复 Eagle 全图形状捕获。 [#6846](https://github.com/vllm-project/vllm-ascend/issues/6846)

##### 已知问题

- MTP 搭配大型 EP 配置可能导致图捕获缓冲区溢出。这是需要在 vLLM 中修复的 bug，目前有一个规避方法：显式设置 --compilation-config '{"maxcudagraphcapturesize": N}' ，其中 N = maxconcurrency (1 + numspeculativetokens) 。

#### v0.15.0rc1 · 2026.02.27（中文）

##### 亮点

- NPU Graph EX (npugraphex) 默认启用 ：npugraphex 功能现已默认启用，通过集成的 inductor pass 和 MatmulAllReduceAddRMSNorm 融合提供更好的图优化。 [#6354](https://github.com/vllm-project/vllm-ascend/issues/6354) [#6664](https://github.com/vllm-project/vllm-ascend/issues/6664) [#6006](https://github.com/vllm-project/vllm-ascend/issues/6006)
- 310P MoE 和 W8A8 支持 [实验性]：310P 现已支持 MoE 模型、W8A8 量化和 weightNZ 特性，显著扩展了硬件能力。 [#6530](https://github.com/vllm-project/vllm-ascend/issues/6530) [#6641](https://github.com/vllm-project/vllm-ascend/issues/6641) [#6454](https://github.com/vllm-project/vllm-ascend/issues/6454) [#6705](https://github.com/vllm-project/vllm-ascend/issues/6705)

##### 功能特性

- 自动检测量化格式 ：现在可以从模型文件自动检测量化格式。 [#6645](https://github.com/vllm-project/vllm-ascend/issues/6645)
- GPT-OSS 注意力支持 ：添加了 GPT-OSS 注意力实现。 [#5901](https://github.com/vllm-project/vllm-ascend/issues/5901)
- SFA 的 DCP 支持 ：为 SFA 架构添加了解码上下文并行 (DCP) 支持。 [#6563](https://github.com/vllm-project/vllm-ascend/issues/6563)
- Mooncake 逐层 PCP 支持 ：Mooncake 逐层连接器现在支持 PCP 功能。 [#6627](https://github.com/vllm-project/vllm-ascend/issues/6627)
- Mooncake 连接器远程 PTP 大小 ：Mooncake 连接器现在可以获取远程 PTP 大小。 [#5822](https://github.com/vllm-project/vllm-ascend/issues/5822)
- KV 池稀疏注意力 ：KV 池现在支持稀疏注意力。 [#6339](https://github.com/vllm-project/vllm-ascend/issues/6339)
- 使用 AscendC 的批量不变性 ：使用 AscendC 实现了批量不变性特性。 [#6590](https://github.com/vllm-project/vllm-ascend/issues/6590)
- 路由重放 ：添加了路由重放特性。 [#6696](https://github.com/vllm-project/vllm-ascend/issues/6696)
- 压缩张量 MoE W4A8 动态权重 ：添加了对压缩张量 moe w4a8 动态权重量化的支持。 [#5889](https://github.com/vllm-project/vllm-ascend/issues/5889)
- DispatchGmmCombineDecode 增强 ：DispatchGmmCombineDecode 现在支持 bf16/float16 gmm1/gmm2 权重和 ND 格式权重。 [#6393](https://github.com/vllm-project/vllm-ascend/issues/6393)
- RMSNorm 动态量化融合 ：添加了 rmsnorm 动态量化融合 pass。 [#6274](https://github.com/vllm-project/vllm-ascend/issues/6274)
- Worker 健康检查接口 ：为 worker 添加了 checkhealth 接口。 [#6681](https://github.com/vllm-project/vllm-ascend/issues/6681)

##### 硬件与算子支持

- 310P 支持扩展 ：对 310P 硬件的多项改进：
- 修复了 310P 上的注意力精度问题。 [#6803](https://github.com/vllm-project/vllm-ascend/issues/6803)
- 为 310P 添加了 weightNZ 特性，支持量化或非量化。 [#6705](https://github.com/vllm-project/vllm-ascend/issues/6705)
- 为 300I DUO 添加了 addrmsnorm 支持。 [#6704](https://github.com/vllm-project/vllm-ascend/issues/6704)
- 310P 现在支持 PrefillCacheHit 状态。 [#6756](https://github.com/vllm-project/vllm-ascend/issues/6756)
- 仅 ARM CPU 绑定 ：启用了仅 ARM CPU 绑定，并采用 NUMA 平衡的 A3 策略。 [#6686](https://github.com/vllm-project/vllm-ascend/issues/6686)
- Triton Rope 增强 ：Triton rope 现在支持从 cossincache 进行 indexselecting。 [#5450](https://github.com/vllm-project/vllm-ascend/issues/5450)
- AscendC 融合算子 ：添加了 AscendC 融合算子 transposekvcachebyblock 以加速 GQA 传输。 [#6366](https://github.com/vllm-project/vllm-ascend/issues/6366)
- Rotarydim 参数 ：在 rotaryembedding 中使用部分 rope 时，添加了对 rotarydim 参数的支持。 [#6581](https://github.com/vllm-project/vllm-ascend/issues/6581)

##### 性能

- 多模态 seqlens CPU 缓存 ：使用 seqlens CPU 缓存以避免频繁的 D2H 拷贝，提升多模态性能。 [#6448](https://github.com/vllm-project/vllm-ascend/issues/6448)
- DispatchFFNCombine 优化 ：优化了 DispatchFFNCombine 内核性能，并解决了因未对齐的 UB 访问导致的向量错误。 [#6468](https://github.com/vllm-project/vllm-ascend/issues/6468) [#6707](https://github.com/vllm-project/vllm-ascend/issues/6707)
- MLA/SFA 权重预取 ：重构了 MLA/SFA 权重预取，使其与 MoE 权重预取保持一致。 [#6629](https://github.com/vllm-project/vllm-ascend/issues/6629)
- MLP 权重预取 ：重构了 MLP 权重预取，使其与 MoE 模型的预取保持一致。 [#6442](https://github.com/vllm-project/vllm-ascend/issues/6442)
- 自适应块大小选择 ：在 linearpersistent 内核中增加了自适应块大小选择功能。 [#6537](https://github.com/vllm-project/vllm-ascend/issues/6537)
- EPLB 内存优化 ：减少了 EPLB 中用于热度聚合的内存。 [#6729](https://github.com/vllm-project/vllm-ascend/issues/6729)
- 内存迁移与中断核绑定 ：改进了绑定逻辑，增加了内存迁移和中断核绑定功能。 [#6785](https://github.com/vllm-project/vllm-ascend/issues/6785)
- Triton 稳定性 ：提升了 Ascend 上 Triton 在大网格下的稳定性。 [#6301](https://github.com/vllm-project/vllm-ascend/issues/6301)

##### 依赖项

- Mooncake ：升级至 v0.3.8.post1。 [#6428](https://github.com/vllm-project/vllm-ascend/issues/6428)

##### 弃用与重大变更

- ProfileExecuteDuration ：清理并弃用了 ProfileExecuteDuration 特性。 [#6461](https://github.com/vllm-project/vllm-ascend/issues/6461)
- 自定义 rotaryembedding 算子 ：移除了自定义的 rotaryembedding 算子。 [#6523](https://github.com/vllm-project/vllm-ascend/issues/6523)
- USEOPTIMIZEDMODEL ：清理了未使用的环境变量 USEOPTIMIZEDMODEL 。 [#6618](https://github.com/vllm-project/vllm-ascend/issues/6618)

##### 文档

- 为 vllm-ascend 增加了 AI 辅助模型适配工作流文档。 [#6731](https://github.com/vllm-project/vllm-ascend/issues/6731)
- 增加了 vLLM Ascend 开发指南 (AGETNS.md)。 [#6797](https://github.com/vllm-project/vllm-ascend/issues/6797)
- 增加了 Memcache 使用指南。 [#6476](https://github.com/vllm-project/vllm-ascend/issues/6476)
- 增加了请求转发文档。 [#6780](https://github.com/vllm-project/vllm-ascend/issues/6780)
- 增加了后缀推测解码的基准测试教程。 [#6323](https://github.com/vllm-project/vllm-ascend/issues/6323)
- 重构了教程文档结构。 [#6501](https://github.com/vllm-project/vllm-ascend/issues/6501)
- 增加了 npugraphex 介绍文档。 [#6306](https://github.com/vllm-project/vllm-ascend/issues/6306)

##### 其他

- PD 全图中的 MTP ：修复了在 PD 部署中运行 MTP 时全图对所有 D-Nodes 的支持问题。 [#5472](https://github.com/vllm-project/vllm-ascend/issues/5472)
- EAGLE 重构 ：将 MTP 路由至 EAGLE，但 PCP/DCP+MTP 情况除外。 [#6349](https://github.com/vllm-project/vllm-ascend/issues/6349)
- 推测解码精度 ：修复了 vLLM 0.15.0 中的推测接受率问题。 [#6606](https://github.com/vllm-project/vllm-ascend/issues/6606)
- PCP/DCP 精度 ：修复了 PCP/DCP 在推测解码中的精度问题。 [#6491](https://github.com/vllm-project/vllm-ascend/issues/6491)
- 动态 EPLB ：修复了动态 EPLB 无效的 bug，且 EPLB 不再依赖于指定模型。 [#6653](https://github.com/vllm-project/vllm-ascend/issues/6653) [#6528](https://github.com/vllm-project/vllm-ascend/issues/6528)
- KV Pool Mooncake 后端 ：正确初始化了 mooncake 后端的 headortprank。 [#6498](https://github.com/vllm-project/vllm-ascend/issues/6498)
- Layerwise Connector 重计算调度器 ：Layerwise connector 现在支持重计算调度器。 [#5900](https://github.com/vllm-project/vllm-ascend/issues/5900)
- Memcache 池 ：修复了启用 memcache 池时服务启动失败的问题。 [#6229](https://github.com/vllm-project/vllm-ascend/issues/6229)
- AddRMSNormQuant ：修复了 AddRMSNormQuant 不生效的问题。 [#6620](https://github.com/vllm-project/vllm-ascend/issues/6620)
- Pooling 代码 ：修复了 pooling 代码问题并更新了使用指南。 [#6126](https://github.com/vllm-project/vllm-ascend/issues/6126)
- 上下文并行 ：修复并统一了 PD 请求的判别逻辑。 [#5939](https://github.com/vllm-project/vllm-ascend/issues/5939)
- npugraphex ：修复了重复模式问题，并为 allreduce rmsnorm 融合 pass 增加了额外检查。 [#6513](https://github.com/vllm-project/vllm-ascend/issues/6513) [#6430](https://github.com/vllm-project/vllm-ascend/issues/6430)
- RecomputeScheduler ：修复了 RecomputeScheduler 与 vLLM v0.14.1 不兼容的问题。 [#6286](https://github.com/vllm-project/vllm-ascend/issues/6286)

#### v0.13.0 · 2026.02.06（中文）

##### 亮点

- LongCat-Flash ：[实验性]增加了对 LongCat-Flash 模型的支持。 [#3833](https://github.com/vllm-project/vllm-ascend/issues/3833)
- Whisper 和交叉注意力 ：[实验性]增加了对交叉注意力和 Whisper 模型的支持。 [#5592](https://github.com/vllm-project/vllm-ascend/issues/5592)
- 池化模型 ：[实验性]增加了对池化模型的支持，进行了 PCP 适配，并修复了多个与池化相关的 bug。 [#3122](https://github.com/vllm-project/vllm-ascend/issues/3122) [#4143](https://github.com/vllm-project/vllm-ascend/issues/4143) [#6056](https://github.com/vllm-project/vllm-ascend/issues/6056) [#6057](https://github.com/vllm-project/vllm-ascend/issues/6057) [#6146](https://github.com/vllm-project/vllm-ascend/issues/6146)
- 上下文并行 (PCP/DCP) ：[实验性]增加了对预填充上下文并行 (PCP) 和解码上下文并行 (DCP) 的全面支持，集成了 ACLGraph、MTP、分块预填充、MLAPO 和 Mooncake 连接器。这是一个实验性功能，欢迎反馈。 [#3260](https://github.com/vllm-project/vllm-ascend/issues/3260) [#3731](https://github.com/vllm-project/vllm-ascend/issues/3731) [#3801](https://github.com/vllm-project/vllm-ascend/issues/3801) [#3980](https://github.com/vllm-project/vllm-ascend/issues/3980) [#4066](https://github.com/vllm-project/vllm-ascend/issues/4066) [#4098](https://github.com/vllm-project/vllm-ascend/issues/4098) [#4183](https://github.com/vllm-project/vllm-ascend/issues/4183) [#5672](https://github.com/vllm-project/vllm-ascend/issues/5672)
- 全图模式 (ACLGraph) ：[实验性]增强的全图模式，支持GQA、内存优化、ACLGraph与Torchair统一逻辑，以及稳定性提升。 [#3560](https://github.com/vllm-project/vllm-ascend/issues/3560) [#3970](https://github.com/vllm-project/vllm-ascend/issues/3970) [#3812](https://github.com/vllm-project/vllm-ascend/issues/3812) [#3879](https://github.com/vllm-project/vllm-ascend/issues/3879) [#3888](https://github.com/vllm-project/vllm-ascend/issues/3888) [#3894](https://github.com/vllm-project/vllm-ascend/issues/3894) [#5118](https://github.com/vllm-project/vllm-ascend/issues/5118)
- 多Token预测 (MTP) ：显著改进的MTP支持，包括DeepSeek的分块预填充、量化支持、全图模式、PCP/DCP集成以及异步调度。MTP现在在大多数情况下可用，推荐使用。 [#2711](https://github.com/vllm-project/vllm-ascend/issues/2711) [#2713](https://github.com/vllm-project/vllm-ascend/issues/2713) [#3620](https://github.com/vllm-project/vllm-ascend/issues/3620) [#3845](https://github.com/vllm-project/vllm-ascend/issues/3845) [#3910](https://github.com/vllm-project/vllm-ascend/issues/3910) [#3915](https://github.com/vllm-project/vllm-ascend/issues/3915) [#4102](https://github.com/vllm-project/vllm-ascend/issues/4102) [#4111](https://github.com/vllm-project/vllm-ascend/issues/4111) [#4770](https://github.com/vllm-project/vllm-ascend/issues/4770) [#5477](https://github.com/vllm-project/vllm-ascend/issues/5477)
- Eagle推测解码 ：Eagle推测解码现在支持全图模式，且更加稳定。 [#5118](https://github.com/vllm-project/vllm-ascend/issues/5118) [#4893](https://github.com/vllm-project/vllm-ascend/issues/4893) [#5804](https://github.com/vllm-project/vllm-ascend/issues/5804)
- PD分离 ：将ADXL引擎设置为分离式预填充的默认后端，提升了性能和稳定性。为DeepSeek解码节点增加了KV NZ特性支持。 [#3761](https://github.com/vllm-project/vllm-ascend/issues/3761) [#3950](https://github.com/vllm-project/vllm-ascend/issues/3950) [#5008](https://github.com/vllm-project/vllm-ascend/issues/5008) [#3072](https://github.com/vllm-project/vllm-ascend/issues/3072)
- KV池与Mooncake ：增强的KV池，支持Mooncake连接器用于PCP/DCP、多种输入后缀，并提升了Layerwise连接器的性能。 [#3690](https://github.com/vllm-project/vllm-ascend/issues/3690) [#3752](https://github.com/vllm-project/vllm-ascend/issues/3752) [#3849](https://github.com/vllm-project/vllm-ascend/issues/3849) [#4183](https://github.com/vllm-project/vllm-ascend/issues/4183) [#5303](https://github.com/vllm-project/vllm-ascend/issues/5303)
- EPLB（弹性预填充负载均衡） ：[实验性]EPLB现在更加稳定，修复了许多bug。混合放置功能现已可用。 [#6086](https://github.com/vllm-project/vllm-ascend/issues/6086)
- Model Runner V2 ：[实验性]增加了对下一代vLLM——Model Runner V2的基本支持。未来版本将默认使用。 [#5210](https://github.com/vllm-project/vllm-ascend/issues/5210)

##### 功能特性

- W8A16量化 ：[实验性]增加了新的W8A16量化方法支持。 [#4541](https://github.com/vllm-project/vllm-ascend/issues/4541)
- UCM连接器 ：[实验性]增加了用于KV缓存卸载的UCMConnector。 [#4411](https://github.com/vllm-project/vllm-ascend/issues/4411)
- 批次不变性 ：[实验性]实现了批次不变性特性的基本框架。 [#5517](https://github.com/vllm-project/vllm-ascend/issues/5517)
- 采样 ：增强了Eagle中的采样功能，支持asyncscheduler和disablepaddeddrafterbatch。 [#4893](https://github.com/vllm-project/vllm-ascend/issues/4893)

##### 硬件和算子支持

- 自定义算子 ：新增了多个自定义算子，包括：
- 融合的matmul/reduce-scatter内核 [#3693](https://github.com/vllm-project/vllm-ascend/issues/3693)
- mrope融合算子 [#3708](https://github.com/vllm-project/vllm-ascend/issues/3708)
- l2norm triton内核 [#4595](https://github.com/vllm-project/vllm-ascend/issues/4595)
- RejectSampler、MoeInitRoutingCustom、DispatchFFNCombine自定义算子
- 算子融合 ：增加了支持SP的AddRmsnormQuant融合模式以及用于量化的inductor融合。 [#5077](https://github.com/vllm-project/vllm-ascend/issues/5077) [#4168](https://github.com/vllm-project/vllm-ascend/issues/4168)
- MLA/SFA ：将SFA重构为MLA架构，以提高可维护性。 [#3769](https://github.com/vllm-project/vllm-ascend/issues/3769)
- FIA算子 ：适配了带有flash解码功能的npufusedinferattentionscore。为优化小批量场景下的性能，现提供此注意力算子。请参考 常见问题解答 中的第22项以启用它。 [#4025](https://github.com/vllm-project/vllm-ascend/issues/4025)
- CANN 8.5支持 ：在FIA算子启用后，移除了CANN 8.5的CP冗余变量。 [#6039](https://github.com/vllm-project/vllm-ascend/issues/6039)

##### 性能

- FlashComm ：通过 oshared linear 和通信域修复，增强了 FlashComm v2 优化。 [#3232](https://github.com/vllm-project/vllm-ascend/issues/3232) [#4188](https://github.com/vllm-project/vllm-ascend/issues/4188) [#4458](https://github.com/vllm-project/vllm-ascend/issues/4458) [#5848](https://github.com/vllm-project/vllm-ascend/issues/5848)
- MoE 优化 ：优化了 MoE 模型的 all2allv，并增强了 all-reduce 跳过逻辑。 [#3738](https://github.com/vllm-project/vllm-ascend/issues/3738) [#5329](https://github.com/vllm-project/vllm-ascend/issues/5329)
- 注意力优化 ：将注意力更新流移出循环，将 BSND 转换为 TND 格式以优化长序列，并在注意力切换到 transposebatchmatmul 后移除转置步骤。 [#3848](https://github.com/vllm-project/vllm-ascend/issues/3848) [#3778](https://github.com/vllm-project/vllm-ascend/issues/3778) [#5390](https://github.com/vllm-project/vllm-ascend/issues/5390)
- 量化性能 ：在 Allgather EP 中将量化移到 allgather 之前。 [#3420](https://github.com/vllm-project/vllm-ascend/issues/3420)
- 逐层连接器 ：[实验性]提升了逐层连接器的性能。 [#5303](https://github.com/vllm-project/vllm-ascend/issues/5303)
- 前缀缓存 ：提升了前缀缓存功能的性能。 [#4022](https://github.com/vllm-project/vllm-ascend/issues/4022)
- 异步调度 ：修复了异步复制并消除了异步调度中的挂起问题。 [#4113](https://github.com/vllm-project/vllm-ascend/issues/4113) [#4233](https://github.com/vllm-project/vllm-ascend/issues/4233)
- 内存操作 ：移除了冗余的 D2H 操作，并删除了 modelrunner 中的冗余操作。 [#4063](https://github.com/vllm-project/vllm-ascend/issues/4063) [#3677](https://github.com/vllm-project/vllm-ascend/issues/3677)
- Rope 嵌入 ：通过 Triton 内核优化了 rope 嵌入，获得了巨大的性能提升。 [#5918](https://github.com/vllm-project/vllm-ascend/issues/5918)
- 采样 ：增加了对无 topk 约束的高级 applytopktopp 的支持。 [#6098](https://github.com/vllm-project/vllm-ascend/issues/6098)
- 多模态 ：在 AscendMMEncoderAttention 中并行化 Q/K/V 填充以获得更好的性能。 [#6204](https://github.com/vllm-project/vllm-ascend/issues/6204)

##### 依赖项

- CANN ：升级至 8.5.0 [#6112](https://github.com/vllm-project/vllm-ascend/issues/6112)
- TorchNPU ：已升级到 2.8.0.post2。该版本默认安装在 docker 容器中。
- triton-ascend ：升级至 3.2.0 [#6105](https://github.com/vllm-project/vllm-ascend/issues/6105)
- vLLM ：升级至 0.13.0，并放弃了对 0.12.0 的支持。 [#5146](https://github.com/vllm-project/vllm-ascend/issues/5146)
- Transformers ：升级至 >= 4.57.4 [#5250](https://github.com/vllm-project/vllm-ascend/issues/5250)

##### 弃用与重大变更

- CPUOffloadingConnector 已弃用。我们将在下一个版本中移除它。未来将被 vLLM 的 CPUOffload 功能取代。
- ProfileExecuteDuration 功能 已弃用。
- Ascend Scheduler 已被移除。 [#4623](https://github.com/vllm-project/vllm-ascend/issues/4623)
- Torchair 已被移除。 [#4814](https://github.com/vllm-project/vllm-ascend/issues/4814)
- VLLMASCENDENABLEDENSEOPTIMIZE 已被移除，建议使用 VLLMASCENDENABLEPREFETCHMLP 替代，因为它们总是同时启用。 [#5272](https://github.com/vllm-project/vllm-ascend/issues/5272)
- VLLMENABLEFUSEDEXPERTSALLGATHEREP 现已移除。 [#5270](https://github.com/vllm-project/vllm-ascend/issues/5270)
- VLLMASCENDENABLENZ 在 float 权重情况下被禁用，因为我们注意到在某些 float 情况下性能不佳。如果你确认它适用于你的场景，可以将其设置为 2。 [#4878](https://github.com/vllm-project/vllm-ascend/issues/4878)
- additionalconfig 中的 chunkedprefillformla 现已移除。 [#5296](https://github.com/vllm-project/vllm-ascend/issues/5296)
- additionalconfig 中的 dumpconfig 已重命名为 dumpconfigpath ，类型从 dict 改为 string 。 [#5296](https://github.com/vllm-project/vllm-ascend/issues/5296)
- 嵌入模型的 --task 参数 已弃用。 [#5257](https://github.com/vllm-project/vllm-ascend/issues/5257)
- 环境变量 VLLMASCENDENABLEMLAPO 的值将在下一个版本中默认设置为 True。该功能将在解码节点中默认启用。请注意，此功能会消耗更多内存。如果您对内存敏感，请将其设置为 False。

##### 文档

- 新增了针对 ACLGraph、MTP、KV Pool、EPLB 和 PD 分离功能的全面开发者指南
- 更新了 FAQ 和配置文档

##### 其他

- OOM 修复 ：VL 模型上的 OOM 错误现已修复。我们将持续观察。如果您再次遇到 OOM 问题，请提交 issue。 [#5136](https://github.com/vllm-project/vllm-ascend/issues/5136)
- ZMQ 错误修复 ：修复了 zmq 发送/接收失败的错误。 [#5503](https://github.com/vllm-project/vllm-ascend/issues/5503)
- 权重转置 ：修复了 RL 场景中的权重转置问题。 [#5567](https://github.com/vllm-project/vllm-ascend/issues/5567)
- Eagle3 SP ：使 SP 适配 eagle3。 [#5562](https://github.com/vllm-project/vllm-ascend/issues/5562)
- Flashcomm2 Oshard ：Flashcomm2 现在可与 oshard 通用特性配合使用。 [#4723](https://github.com/vllm-project/vllm-ascend/issues/4723)
- 细粒度共享专家重叠 ：支持细粒度共享专家重叠。 [#5962](https://github.com/vllm-project/vllm-ascend/issues/5962)

##### 已知问题

- Qwen3-32B 在 128K 输入场景下的性能不佳，建议在此场景下启用 pcp&dcp 特性。这将在下一个 CANN 版本中得到改进。
- 在 prefill-decode 场景下部署 deepseek3.1 时，请确保解码节点的 tp 大小大于 1。 TP=1 无法工作。这将在下一个 CANN 版本中修复。

#### v0.14.0rc1 · 2026.01.26（中文）

##### 亮点

- 310P 支持现已恢复。在此版本中，仅支持使用 eager 模式的基本 dense 和 vl 模型。我们将持续改进和维护对 310P 的支持。 [#5776](https://github.com/vllm-project/vllm-ascend/issues/5776)
- 支持压缩张量 moe w8a8-int8 量化。 [#5718](https://github.com/vllm-project/vllm-ascend/issues/5718)
- 支持 Medusa 推测解码。 [#5668](https://github.com/vllm-project/vllm-ascend/issues/5668)

##### 功能特性

- 支持 PD-mix 部署场景的 DSA-CP。 [#5702](https://github.com/vllm-project/vllm-ascend/issues/5702)
- 新增对新的 W4A4LAOSDYNAMIC 量化方法的支持。 [#5143](https://github.com/vllm-project/vllm-ascend/issues/5143)

##### 性能

- 改进了CPU绑定逻辑和性能。 [#5555](https://github.com/vllm-project/vllm-ascend/issues/5555)
- 合并Q/K拆分以简化AscendApplyRotaryEmb，提升性能。 [#5799](https://github.com/vllm-project/vllm-ascend/issues/5799)
- 新增Matmul Allreduce Rmsnorm融合Pass。默认禁用。在 --additionalconfig 中设置 fuseallreducerms=True 以启用。 [#5034](https://github.com/vllm-project/vllm-ascend/issues/5034)
- 使用triton内核优化rope embedding，大幅提升性能。 [#5918](https://github.com/vllm-project/vllm-ascend/issues/5918)
- 支持无topk约束的高级applytopktopp。 [#6098](https://github.com/vllm-project/vllm-ascend/issues/6098)
- 并行化AscendMMEncoderAttention中的Q/K/V填充以提升性能。 [#6204](https://github.com/vllm-project/vllm-ascend/issues/6204)

##### 其他

- model runner v2支持triton的penalty。 [#5854](https://github.com/vllm-project/vllm-ascend/issues/5854)
- model runner v2支持eagle spec解码。 [#5840](https://github.com/vllm-project/vllm-ascend/issues/5840)
- 通过默认设置 expandablesegments:True 修复多模态推理OOM问题。 [#5855](https://github.com/vllm-project/vllm-ascend/issues/5855)
- VLLMASCENDENABLEMLAPO 默认设置为 True 。在PD部署场景下，它会在解码节点上自动启用。请注意，此功能会消耗更多内存。如果您对内存敏感，请将其设置为False。 [#5952](https://github.com/vllm-project/vllm-ascend/issues/5952)
- SSL配置可设置为kvextraconfig，用于使用mooncake逐层连接器的PD部署。 [#5875](https://github.com/vllm-project/vllm-ascend/issues/5875)
- 支持 --max-model-len auto 。 [#6193](https://github.com/vllm-project/vllm-ascend/issues/6193)

##### 依赖项

- TorchNPU升级到2.9.0 [#6112](https://github.com/vllm-project/vllm-ascend/issues/6112)

##### 弃用与重大变更

- EPLB配置选项已移至 附加配置 中的 eplbconfig 。旧选项在此版本中已移除。
- 分析器环境变量，如 VLLMTORCHPROFILERDIR 和 VLLMTORCHPROFILERWITHPROFILEMEMORY ，现在不适用于vLLM Ascend。请改用vLLM的 --profiler-config 参数。 [#5928](https://github.com/vllm-project/vllm-ascend/issues/5928)

##### 已知问题

- 如果您偶尔遇到来自 EngineCore 进程的pickle错误，请将 此PR cherry-pick到您的本地vLLM代码中。此已知问题将在下一个vLLM版本中修复。

#### v0.13.0rc2 · 2026.01.24（中文）

##### 功能特性

- 实现批处理不变性的基本框架 [#5517](https://github.com/vllm-project/vllm-ascend/issues/5517)
- Eagle推测解码功能现在可与全图模式配合使用。 [#5118](https://github.com/vllm-project/vllm-ascend/issues/5118)
- 上下文并行(PCP&DCP)功能现在更加稳定，适用于大多数场景。请尝试使用。
- MTP和Eagle推测解码功能现在在大多数情况下都能正常工作。建议在大多数情况下使用它们。
- EPLB功能现在更加稳定。修复了许多错误。混合放置现在可以正常工作 [#6086](https://github.com/vllm-project/vllm-ascend/issues/6086)
- 支持在分离预填充场景中为DeepSeek解码节点启用kv nz功能 [#3072](https://github.com/vllm-project/vllm-ascend/issues/3072)

##### 模型支持

- LongCat-Flash现已支持。 [#3833](https://github.com/vllm-project/vllm-ascend/issues/3833)
- 支持交叉注意力和whisper模型 [#5592](https://github.com/vllm-project/vllm-ascend/issues/5592)

##### 性能

- 本版本新增了许多自定义算子和triton内核以加速模型性能。例如 RejectSampler 、 MoeInitRoutingCustom 、 DispatchFFNCombine 等。
- 改进了逐层连接器的性能 [#5303](https://github.com/vllm-project/vllm-ascend/issues/5303)

##### 其他

- 基础支持Model Runner v2。Model Runner V2是vLLM的下一代版本，将在未来版本中默认使用。 [#5210](https://github.com/vllm-project/vllm-ascend/issues/5210)
- 修复了zmq发送/接收可能失败的错误 [#5503](https://github.com/vllm-project/vllm-ascend/issues/5503)
- 修复RL场景中的权重转置问题 [#5567](https://github.com/vllm-project/vllm-ascend/issues/5567)
- 使SP适配eagle3 [#5562](https://github.com/vllm-project/vllm-ascend/issues/5562)
- 上下文并行(PCP&DCP)支持mlapo [#5672](https://github.com/vllm-project/vllm-ascend/issues/5672)
- Flashcomm2现在可与oshard通用功能配合使用 [#4723](https://github.com/vllm-project/vllm-ascend/issues/4723)
- 支持为Eagle草稿模型设置tp=1 [#5804](https://github.com/vllm-project/vllm-ascend/issues/5804)
- 支持细粒度共享专家重叠 [#5962](https://github.com/vllm-project/vllm-ascend/issues/5962)

##### 依赖项

- CANN 升级至 8.5.0
- TorchNPU 已升级到 2.8.0.post1。请注意，post 版本不会默认安装。请从 pypi 镜像 手动安装。
- triton-ascend 升级至 3.2.0

##### 弃用与重大变更

- CPUOffloadingConnector 已弃用，我们将在下一个版本中移除它。未来将由vLLM的CPUOffload功能替代。
- eplb配置选项已移至 附加配置 中的 eplbconfig 。旧选项将在下个版本中移除。
- ProfileExecuteDuration 功能 已弃用，由vLLM的 ObservabilityConfig 替代。
- VLLMASCENDENABLEMLAPO 环境变量的值将在下个版本中默认设为True，并默认在解码节点启用。请注意该功能会消耗更多内存，若对内存敏感请将其设为False。

#### v0.13.0rc1 · 2025.12.27（中文）

##### 亮点

- [实验性] 支持 Prefill Context Parallel 和 Decode Context Parallel，但请注意这是一个实验性功能，欢迎反馈。请参考 context parallel 特性指南

##### 功能特性

- 现在支持新的量化方法 W8A16。 [#4541](https://github.com/vllm-project/vllm-ascend/issues/4541)
- 现在支持跨机 Disaggregated Prefill。 [#5008](https://github.com/vllm-project/vllm-ascend/issues/5008)
- 添加用于 KV Cache Offloading 的 UCMConnector。 [#4411](https://github.com/vllm-project/vllm-ascend/issues/4411)
- 在 eagle 中支持 asyncscheduler 和 disablepaddeddrafterbatch。 [#4893](https://github.com/vllm-project/vllm-ascend/issues/4893)
- 在全图模式下支持 pcp + mtp。 [#4572](https://github.com/vllm-project/vllm-ascend/issues/4572)
- 增强 NPUModelRunner 中 MoE 模型的 all-reduce 跳过逻辑 [#5329](https://github.com/vllm-project/vllm-ascend/issues/5329)

##### 性能

- 添加l2norm triton内核 [#4595](https://github.com/vllm-project/vllm-ascend/issues/4595)
- 为AddRmsnormQuant添加SP新模式，该模式仅在图模式下生效。 [#5077](https://github.com/vllm-project/vllm-ascend/issues/5077)
- 在模型执行期间添加异步指数。 [#4501](https://github.com/vllm-project/vllm-ascend/issues/4501)
- 移除注意力后的转置步骤，改用transposebatchmatmul [#5390](https://github.com/vllm-project/vllm-ascend/issues/5390)
- 为优化小批量场景下的性能，提供了带flash解码功能的注意力算子，请参阅 公共FAQ 中的第22项以启用该功能。

##### 其他

- VL 模型的 OOM 错误现已修复。我们将持续观察，如果您再次遇到 OOM 问题，请提交 issue。 [#5136](https://github.com/vllm-project/vllm-ascend/issues/5136)
- 修复 npu-cpu offloading 接口变更错误。 [#5290](https://github.com/vllm-project/vllm-ascend/issues/5290)
- 修复 MHA 模型在 aclgraph 模式下的运行时错误 [#5397](https://github.com/vllm-project/vllm-ascend/issues/5397)
- 修复 ep=1 场景下不合适的 moecommtype [#5388](https://github.com/vllm-project/vllm-ascend/issues/5388)

##### 弃用与重大变更

- VLLMASCENDENABLEDENSEOPTIMIZE 已被移除。建议使用 VLLMASCENDENABLEPREFETCHMLP 作为替代，因为它们总是同时启用。 [#5272](https://github.com/vllm-project/vllm-ascend/issues/5272)
- VLLMENABLEFUSEDEXPERTSALLGATHEREP 现已移除。 [#5270](https://github.com/vllm-project/vllm-ascend/issues/5270)
- VLLMASCENDENABLENZ 在 float 权重情况下被禁用，因为我们注意到在某些 float 情况下性能不佳。如果您确认它适用于您的情况，可以将其设置为 2。 [#4878](https://github.com/vllm-project/vllm-ascend/issues/4878)
- additionalconfig 中的 chunkedprefillformla 现已移除。 [#5296](https://github.com/vllm-project/vllm-ascend/issues/5296)
- additionalconfig 中的 dumpconfig 已重命名为 dumpconfigpath ，类型从 dict 更改为 string 。 [#5296](https://github.com/vllm-project/vllm-ascend/issues/5296)

##### 依赖项

- vLLM 版本已升级至 0.13.0，并放弃对 0.12.0 的支持。 [#5146](https://github.com/vllm-project/vllm-ascend/issues/5146)
- Transformer 版本已升级至 >= 4.57.3 [#5250](https://github.com/vllm-project/vllm-ascend/issues/5250)

#### v0.11.0 · 2025.12.16（中文）

##### 亮点

- 提升了 deepseek 3/3.1 的性能。 [#3995](https://github.com/vllm-project/vllm-ascend/issues/3995)
- 提升了 sample 的性能。 [#4153](https://github.com/vllm-project/vllm-ascend/issues/4153)
- Eagle3 现已回归。 [#4721](https://github.com/vllm-project/vllm-ascend/issues/4721)

##### 其他

- 修复了 deepseek3.2-exp 的量化错误。 [#4797](https://github.com/vllm-project/vllm-ascend/issues/4797)
- 修复了 Prefill Decode 分离场景下的精度错误。 [#4437](https://github.com/vllm-project/vllm-ascend/issues/4437)
- 修复了 EPLB 的一些错误 [#4576](https://github.com/vllm-project/vllm-ascend/issues/4576) [#4777](https://github.com/vllm-project/vllm-ascend/issues/4777)
- 修复了 openEuler Docker 镜像的版本不兼容问题。 [#4745](https://github.com/vllm-project/vllm-ascend/issues/4745)

##### 弃用公告

- LLMdatadist 连接器已弃用，将在 v0.12.0rc1 中移除
- Torchair 图模式已弃用，将在 v0.12.0rc1 中移除
- Ascend 调度器已弃用，将在 v0.12.0rc1 中移除

##### 升级通知

- TorchNPU 已升级至 2.7.1.post1。请注意，该软件包已推送至 pypi 镜像 。因此难以将其添加到自动依赖中，请自行安装。
- CANN 已升级至 8.3.rc2。

##### 已知问题

- Deepseek 3.2 only work with torchair graph mode in this release. We'll make it work with aclgraph mode in the next release.
- Qwen2-audio doesn't work by default. Temporary solution is to set --gpu-memory-utilization to a suitable value, such as 0.8.
- CPU bind feature doesn't work if more than one vLLM instance is running on the same node.

##### 亮点

- DeepSeek 3.2 已稳定且性能得到提升。在此版本中，您无需再安装任何其他包。请按照 官方教程 开始使用。

##### 核心

- [实验性] 现在支持仅解码的完整图模式。虽然默认未启用，但我们建议在大多数情况下通过 --compilation-config '{"cudagraphmode":"FULLDECODEONLY"}' 启用它。如果遇到任何错误，请告知我们。我们将持续改进，并在接下来的几个版本中默认启用。
- 添加了大量 Ascend 算子以提升性能。这意味着从本版本开始，vLLM Ascend 仅适用于已构建的自定义算子。因此我们移除了环境变量 COMPILECUSTOMKERNELS 。您现在无法将其设置为 0。
- 推测解码方法 MTP 现在更加稳定。它可以在大多数情况下启用，解码 token 数量可以是 1、2、3。
- 现在支持推测解码方法 suffix 。感谢招商银行的贡献。
- 带有 W8A8 的 llm-compressor 量化工具现已可用。您现在可以直接使用此工具部署经过 W8A8 量化的模型。
- W4A4 量化现已可用。
- 支持论文 flashcomm 中的 flashcomm1 和 flashcomm2 特性 [#3004](https://github.com/vllm-project/vllm-ascend/issues/3004) [#3334](https://github.com/vllm-project/vllm-ascend/issues/3334)
- 现在支持池化模型，例如 bge、reranker 等。
- 官方文档已改进。我们重构了教程，使其更加清晰。用户指南和开发者指南现在更加完整。我们将持续改进。

##### 其他

- [实验性] 现已支持 Mooncake 逐层连接器。
- [实验性] 新增 KV 缓存池 功能。
- [实验性] 引入新的图模式 xlite 。该模式在某些模型上表现良好。请按照 官方教程 开始使用。
- 移除了 LLMdatadist kv 连接器。请改用 mooncake 连接器。
- 移除了 Ascend 调度器。 --additional-config {"ascendscheduler": {"enabled": true}} 不再生效。
- 移除了 Torchair 图模式。 --additional-config {"torchairgraphconfig": {"enabled": true}} 不再生效。请改用 aclgraph。
- 移除了 VLLMASCENDENABLETOPKTOPPOPTIMIZATION 环境变量。该功能已足够稳定，现已默认启用。
- 推测解码方法 Ngram 现已回归。
- 新增 msprobe 工具，帮助用户检查模型精度。请按照 官方文档 开始使用。
- 新增 msserviceprofiler 工具，帮助用户分析模型性能。请按照 官方文档 开始使用。

##### 已知问题

- Hunyuan OCR 无法工作。我们将在下一个版本中修复。 [#4989](https://github.com/vllm-project/vllm-ascend/issues/4989) [#4992](https://github.com/vllm-project/vllm-ascend/issues/4992)
- DeepSeek 3.2 无法与聊天模板一起工作。这是因为 vLLM v0.12.0 不支持它。我们将在下一个 v0.13.0rc1 版本中支持。
- DeepSeek 3.2 在某些情况下无法在高并发下工作。我们将在下一个版本中修复。 [#4996](https://github.com/vllm-project/vllm-ascend/issues/4996)
- 我们注意到 bf16/fp16 模型性能不佳。这主要是因为 VLLMASCENDENABLENZ 默认启用。请设置 VLLMASCENDENABLENZ=0 以禁用它。我们将在下一个版本中添加自动检测机制。
- 推测解码方法 suffix 无法工作。我们将在下一个版本中修复。您可以选择此提交来修复该问题： [#5010](https://github.com/vllm-project/vllm-ascend/issues/5010)

#### v0.12.0rc1 · 2025.12.13（中文）

##### 亮点

- DeepSeek 3.2 已稳定且性能得到提升。在本版本中，您无需再安装其他包。请按照 官方教程 开始使用。

##### 核心

- [实验性] 现已支持纯解码图模式。虽然默认未启用，但我们建议在大多数情况下通过 --compilation-config '{"cudagraphmode":"FULLDECODEONLY"}' 启用。如果遇到任何错误，请告知我们。我们将持续改进，并在后续几个版本中默认启用。
- 新增了大量 Ascend 算子以提升性能。这意味着从本版本开始，vLLM Ascend 仅在构建了自定义算子后才能工作。因此我们移除了环境变量 COMPILECUSTOMKERNELS ，您现在无法将其设置为 0。
- 推测解码方法 MTP 现在更加稳定，在大多数情况下均可启用，解码 token 数量可为 1、2、3。
- 推测解码方法 suffix 现已支持。感谢招商银行的贡献。
- llm-compressor 量化工具现已支持 W8A8。您现在可以直接通过此工具部署经过 W8A8 量化的模型。
- W4A4 量化现已支持。
- 支持论文 flashcomm 中的 flashcomm1 和 flashcomm2 特性 [#3004](https://github.com/vllm-project/vllm-ascend/issues/3004) [#3334](https://github.com/vllm-project/vllm-ascend/issues/3334)
- 现已支持池化模型，例如 bge、reranker 等
- 官方文档已得到改进。我们重构了教程，使其更加清晰。用户指南和开发者指南现在更加完整。我们将持续改进。

##### 其他

- [实验性] 现已支持 Mooncake 逐层连接器。
- [实验性] 新增 KV cache pool 特性
- [实验性] 引入了一种新的图模式 xlite 。它在某些模型上表现良好。请按照 官方教程 开始使用。
- LLMdatadist kv 连接器已被移除。请改用 mooncake 连接器。
- Ascend 调度器已被移除。 --additional-config {"ascendscheduler": {"enabled": true}} 不再生效。
- Torchair 图模式已被移除。 --additional-config {"torchairgraphconfig": {"enabled": true}} 不再生效。请改用 aclgraph。
- 环境变量 VLLMASCENDENABLETOPKTOPPOPTIMIZATION 已被移除。此特性已足够稳定，我们现在默认启用它。
- 推测解码方法 Ngram 现已回归。
- 新增 msprobe 工具，帮助用户检查模型精度。请按照 官方文档 开始使用。
- 新增 msserviceprofiler 工具，帮助用户分析模型性能。请按照 官方文档 开始使用。

##### 已知问题

- Hunyuan OCR 无法正常工作。我们将在下一个版本中修复。 [#4989](https://github.com/vllm-project/vllm-ascend/issues/4989) [#4992](https://github.com/vllm-project/vllm-ascend/issues/4992)
- DeepSeek 3.2 无法与聊天模板一起使用。这是因为 vLLM v0.12.0 不支持它。我们将在下一个 v0.13.0rc1 版本中支持。
- DeepSeek 3.2 在某些情况下无法在高并发下正常工作。我们将在下一个版本中修复。 [#4996](https://github.com/vllm-project/vllm-ascend/issues/4996)
- 我们注意到 bf16/fp16 模型性能不佳。这主要是因为 VLLMASCENDENABLENZ 默认启用。请设置 VLLMASCENDENABLENZ=0 以禁用它。我们将在下一个版本中添加自动检测机制。
- 推测解码方法 suffix 无法正常工作。我们将在下一个版本中修复。您可以选择此提交来修复该问题： [#5010](https://github.com/vllm-project/vllm-ascend/issues/5010)

#### v0.11.0rc3 · 2025.12.03（中文）

##### 亮点

- TorchNPU 已升级至 2.7.1.post1。请注意，该软件包已推送至 pypi 镜像 。因此难以将其添加到自动依赖中，请自行安装。
- 已禁用 NZ 权重加载器以加速稠密模型。请注意，这是一个临时解决方案。如果您发现性能变差，请告知我们，我们将持续改进。 [#4495](https://github.com/vllm-project/vllm-ascend/issues/4495)
- mooncake 现已安装到官方 Docker 镜像中，您现在可以直接在容器中使用它。 [#4506](https://github.com/vllm-project/vllm-ascend/issues/4506)

##### 其他

- 修复了 MoE 模型的 OOM 问题。 [#4367](https://github.com/vllm-project/vllm-ascend/issues/4367)
- 修复了多模态模型在 DP>1 时运行挂起的问题。 [#4393](https://github.com/vllm-project/vllm-ascend/issues/4393)
- 修复了 EPLB 的一些错误。 [#4416](https://github.com/vllm-project/vllm-ascend/issues/4416)
- 修复了 mtp>1 + lmheadtp>1 情况下的错误。 [#4360](https://github.com/vllm-project/vllm-ascend/issues/4360)
- 修复了长时间运行 vLLM serve 时的精度问题。 [#4117](https://github.com/vllm-project/vllm-ascend/issues/4117)

#### v0.11.0rc2 · 2025.11.21（中文）

##### 亮点

- CANN 已升级至 8.3.RC2。 [#4332](https://github.com/vllm-project/vllm-ascend/issues/4332)
- Ngram 推测解码方法现已回归。 [#4092](https://github.com/vllm-project/vllm-ascend/issues/4092)
- 通过更新默认捕获大小，提升了 aclgraph 的性能。 [#4205](https://github.com/vllm-project/vllm-ascend/issues/4205)

##### 核心

- 加速了 vLLM 的启动时间。 [#4099](https://github.com/vllm-project/vllm-ascend/issues/4099)

##### 其他

- 修复仅全解码模式的问题。全图模式现在更加稳定。 [#4106](https://github.com/vllm-project/vllm-ascend/issues/4106) [#4282](https://github.com/vllm-project/vllm-ascend/issues/4282)
- 修复EPLB功能的若干bug。 [#4150](https://github.com/vllm-project/vllm-ascend/issues/4150) [#4334](https://github.com/vllm-project/vllm-ascend/issues/4334)
- 修复VL模型在x86机器上无法运行的bug。 [#4285](https://github.com/vllm-project/vllm-ascend/issues/4285)
- 支持prefill分离代理的ipv6。请注意，mooncake连接器不支持ipv6，我们正在解决。 [#4242](https://github.com/vllm-project/vllm-ascend/issues/4242)
- 增加检查，确保EPLB在量化场景下仅支持w8a8方法。 [#4315](https://github.com/vllm-project/vllm-ascend/issues/4315)
- 增加检查，确保FLASHCOMM功能不与VL模型一起使用。该功能将在2025年第四季度支持。 [#4222](https://github.com/vllm-project/vllm-ascend/issues/4222)
- 音频所需库已安装在容器中。 [#4324](https://github.com/vllm-project/vllm-ascend/issues/4324)

##### 已知问题

- Ray + EP 无法工作，如果您使用ray运行vLLM Ascend，请禁用专家并行。 [#4123](https://github.com/vllm-project/vllm-ascend/issues/4123)
- responseformat 参数暂不支持，我们将很快支持。 [#4175](https://github.com/vllm-project/vllm-ascend/issues/4175)
- cpu绑定功能在多实例场景下（例如单节点多DP）无法工作，我们将在下一个版本中修复。

#### v0.11.0rc1 · 2025.11.10（中文）

##### 亮点

- CANN 已升级至 8.3.RC1，TorchNPU 已升级至 2.7.1。 [#3945](https://github.com/vllm-project/vllm-ascend/issues/3945) [#3896](https://github.com/vllm-project/vllm-ascend/issues/3896)
- PrefixCache 和 Chunked Prefill 现已默认启用。 [#3967](https://github.com/vllm-project/vllm-ascend/issues/3967)

##### 核心

- 现在支持Mooncake逐层连接器 [#2602](https://github.com/vllm-project/vllm-ascend/issues/2602) 。教程请参见 pddisaggregationmooncakemultinode 。
- 现在支持MTP > 1。 [#2708](https://github.com/vllm-project/vllm-ascend/issues/2708)
- [实验性] 现在支持图模式 FULLDECODEONLY ！ FULL 模式将在未来几周内推出。 [#2128](https://github.com/vllm-project/vllm-ascend/issues/2128)
- 现在支持池化模型，例如bge-m3。 [#3171](https://github.com/vllm-project/vllm-ascend/issues/3171)

##### 其他

- 重构MOE模块，使其更清晰易懂，并在量化和非量化场景下均提升了性能。
- 重构模型注册模块，使其更易于维护。我们将在2025年第四季度移除该模块。 [#3004](https://github.com/vllm-project/vllm-ascend/issues/3004)
- Torchair已弃用。一旦ACL Graph性能足够好，我们将移除它。截止日期为2026年第一季度。
- LLMDatadist KV连接器已弃用。我们将在2026年第一季度移除它。
- 重构线性模块以支持论文 flashcomm 中的flashcomm1和flashcomm2特性。 [#3004](https://github.com/vllm-project/vllm-ascend/issues/3004) [#3334](https://github.com/vllm-project/vllm-ascend/issues/3334)

##### 已知问题

- The memory may be leaked and the service may be stuck after long time serving. This is a bug from TorchNPU, we'll upgrade and fix it soon.
- For long sequence input case, there is no response sometimes and the kv cache usage becomes higher. This is a bug for scheduler. We are working on it.
- Qwen2-audio doesn't work by default, we're fixing it. Temporary solution is to set --gpu-memory-utilization to a suitable value, such as 0.8.
- The accuracy of DeepSeek3.2 with aclgraph is not correct. Temporary solution is to set cudagraphcapturesizes to a suitable value depending on the batch size for the input.

#### v0.11.0rc0 · 2025.09.30（中文）

##### 核心

- DeepSeek现在可以与aclgraph一起工作。 [#2707](https://github.com/vllm-project/vllm-ascend/issues/2707)
- MTP现在可以与aclgraph一起工作。 [#2932](https://github.com/vllm-project/vllm-ascend/issues/2932)
- 现在支持EPLB。 [#2956](https://github.com/vllm-project/vllm-ascend/issues/2956)
- 现在支持Mooncake store kvcache连接器。 [#2913](https://github.com/vllm-project/vllm-ascend/issues/2913)
- 现在支持CPU offload连接器。 [#1659](https://github.com/vllm-project/vllm-ascend/issues/1659)

##### 其他

- LoRA 功能现已恢复。 [#3044](https://github.com/vllm-project/vllm-ascend/issues/3044)
- Eagle3 推测解码方法现已恢复。 [#2949](https://github.com/vllm-project/vllm-ascend/issues/2949)

#### v0.10.2rc1 · 2025.09.16（中文）

##### 亮点

- Added quantization support for aclgraph [#2841](https://github.com/vllm-project/vllm-ascend/issues/2841)

##### 核心

- Aclgraph 现在可与 Ray 后端配合使用。 [#2589](https://github.com/vllm-project/vllm-ascend/issues/2589)
- MTP 现在可与 token > 1 的情况配合使用。 [#2708](https://github.com/vllm-project/vllm-ascend/issues/2708)
- 改进了启用异步调度器时的性能。 [#2783](https://github.com/vllm-project/vllm-ascend/issues/2783)
- 修复了使用默认调度器时非 MLA 模型的性能回退问题。 [#2894](https://github.com/vllm-project/vllm-ascend/issues/2894)

##### 其他

- 提升了 W8A8 量化的性能。 [#2275](https://github.com/vllm-project/vllm-ascend/issues/2275)
- 提升了 MoE 模型的性能。 [#2689](https://github.com/vllm-project/vllm-ascend/issues/2689) [#2842](https://github.com/vllm-project/vllm-ascend/issues/2842)
- 修复了应用推测解码和 aclgraph 时的资源限制错误。 [#2472](https://github.com/vllm-project/vllm-ascend/issues/2472)
- 修复了 Docker 镜像中的 git 配置错误。 [#2746](https://github.com/vllm-project/vllm-ascend/issues/2746)
- 修复了 prefill 阶段的滑动窗口注意力 bug。 [#2758](https://github.com/vllm-project/vllm-ascend/issues/2758)
- VLLMENABLEFUSEDEXPERTSALLGATHEREP 环境变量再次生效。 [#2740](https://github.com/vllm-project/vllm-ascend/issues/2740)
- 为 deepseek 中的 oproj 新增了一项改进。设置 oprojtensorparallelsize 以启用此功能。 [#2167](https://github.com/vllm-project/vllm-ascend/issues/2167)
- 修复了当设置 graphbatchsizes 时，deepseek 与 torchair 配合使用不符合预期的问题。 [#2760](https://github.com/vllm-project/vllm-ascend/issues/2760)
- 避免在 kvseqlen > 4k 时重复生成 rope 中的 sincoscache。 [#2744](https://github.com/vllm-project/vllm-ascend/issues/2744)
- 修复了 RLHF 场景下的权重加载错误。 [#2756](https://github.com/vllm-project/vllm-ascend/issues/2756)
- 添加了 warmupatb 步骤以加速推理。 [#2823](https://github.com/vllm-project/vllm-ascend/issues/2823)
- 修复了 MoE 模型的 aclgraph 流错误。 [#2827](https://github.com/vllm-project/vllm-ascend/issues/2827)

##### 已知问题

- 当 P 和 D 使用不同的 TP 大小运行 Prefill Decode 分离时，服务器会挂起。此问题已通过 vLLM 提交 修复，但该提交未包含在 v0.10.2 中。您可以选取此提交来修复该问题。
- 我们注意到由于 KV 缓存的重构，LoRA 在此版本中无法使用。我们将尽快修复。 2941
- 使用 Ascend 调度器时，请勿启用带有前缀缓存的 chunked prefill。其性能和准确性不佳/不正确。 [#2943](https://github.com/vllm-project/vllm-ascend/issues/2943)

#### v0.10.1rc1 · 2025.09.04（中文）

##### 亮点

- 招商银行通过添加自定义算子大幅提升了 LoRA 性能。 [#2325](https://github.com/vllm-project/vllm-ascend/issues/2325)
- 支持 Mooncake TransferEngine 用于 KV 缓存注册和 pullblocks 风格的分离式 prefill 实现。 [#1568](https://github.com/vllm-project/vllm-ascend/issues/1568)
- 现在支持将自定义算子捕获到 aclgraph 中。 [#2113](https://github.com/vllm-project/vllm-ascend/issues/2113)

##### 核心

- 新增MLP张量并行以提升性能，但请注意这会增加内存使用。 [#2120](https://github.com/vllm-project/vllm-ascend/issues/2120)
- openEuler升级至24.03版本。 [#2631](https://github.com/vllm-project/vllm-ascend/issues/2631)
- 新增自定义lmhead张量并行，以降低内存消耗并提升TPOT性能。 [#2309](https://github.com/vllm-project/vllm-ascend/issues/2309)
- 支持AscendScheduler下的滑动窗口注意力，从而修复Gemma3精度问题。 [#2528](https://github.com/vllm-project/vllm-ascend/issues/2528)

##### 其他

- 错误修复：
- 更新了图捕获大小计算，一定程度上缓解了某些场景下NPU流不足的问题。 [#2511](https://github.com/vllm-project/vllm-ascend/issues/2511)
- 修复了缓存掩码生成逻辑中的错误并进行了重构。 [#2442](https://github.com/vllm-project/vllm-ascend/issues/2442)
- 修复了nz格式在量化场景中不起作用的问题。 [#2549](https://github.com/vllm-project/vllm-ascend/issues/2549)
- 修复了因默认启用 enablesharedpertdp 导致的Qwen系列模型精度问题。 [#2457](https://github.com/vllm-project/vllm-ascend/issues/2457)
- 通过大量PR提升性能：
- 移除了torch.cat，改用List[0]。 [#2153](https://github.com/vllm-project/vllm-ascend/issues/2153)
- 将gmm的格式转换为nz。 [#2474](https://github.com/vllm-project/vllm-ascend/issues/2474)
- 优化了并行策略以减少通信开销。 [#2198](https://github.com/vllm-project/vllm-ascend/issues/2198)
- 优化了贪婪模式下的拒绝采样器。 [#2137](https://github.com/vllm-project/vllm-ascend/issues/2137)
- 一批重构PR以增强代码架构：
- 重构MLA。 [#2465](https://github.com/vllm-project/vllm-ascend/issues/2465)
- 重构torchair fusedmoe。 [#2438](https://github.com/vllm-project/vllm-ascend/issues/2438)
- 重构与allgather/mc2相关的fusedexperts。 [#2369](https://github.com/vllm-project/vllm-ascend/issues/2369)
- 重构torchair模型运行器。 [#2208](https://github.com/vllm-project/vllm-ascend/issues/2208)
- 重构CI。 [#2276](https://github.com/vllm-project/vllm-ascend/issues/2276)
- 参数变更：
- 在 additionalconfig 中新增 lmheadtensorparallelsize ，设置它以启用lmhead张量并行。 [#2309](https://github.com/vllm-project/vllm-ascend/issues/2309)
- 移除了部分未使用的环境变量 HCCNPATH 、 PROMPTDEVICEID 、 DECODEDEVICEID 、 LLMDATADISTCOMMPORT 和 LLMDATADISTSYNCCACHEWAITTIME 。 [#2448](https://github.com/vllm-project/vllm-ascend/issues/2448)
- 环境变量 VLLMLLMDDRPCPORT 现已重命名为 VLLMASCENDLLMDDRPCPORT 。 [#2450](https://github.com/vllm-project/vllm-ascend/issues/2450)
- 在环境变量中新增 VLLMASCENDENABLEMLPOPTIMIZE ，用于控制启用张量并行时是否开启mlp优化。此功能在eager模式下提供更好的性能。 [#2120](https://github.com/vllm-project/vllm-ascend/issues/2120)
- 从环境变量中移除了 MOEALL2ALLBUFFER 和 VLLMASCENDENABLEMOEALL2ALLSEQ 。 [#2612](https://github.com/vllm-project/vllm-ascend/issues/2612)
- 在 additionalconfig 中新增 enableprefetch ，用于控制是否启用权重预取。 [#2465](https://github.com/vllm-project/vllm-ascend/issues/2465)
- 在 additionalconfig.torchairgraphconfig 中新增 mode ，当为torchair使用reduce-overhead模式时，需要设置此模式。 [#2461](https://github.com/vllm-project/vllm-ascend/issues/2461)
- additionalconfig 中的 enablesharedexpertdp 现在默认禁用，建议在推理deepseek时启用。 [#2457](https://github.com/vllm-project/vllm-ascend/issues/2457)

##### 已知问题

- 滑动窗口注意力当前不支持分块预填充，因此我们只能启用AscendScheduler来运行。 [#2729](https://github.com/vllm-project/vllm-ascend/issues/2729)
- 启用MultiStream时创建mc2mask存在一个bug，将在下一个版本中修复。 [#2681](https://github.com/vllm-project/vllm-ascend/issues/2681)

#### v0.9.1 · 2025.09.03（中文）

##### 亮点

- Qwen系列模型现在支持图模式。使用V1引擎时默认生效。请参考 Qwen教程 。
- V1引擎支持分离式预填充。请参考 大规模专家并行 教程。
- 支持自动前缀缓存和分块预填充功能。
- 推测解码功能支持Ngram和MTP方法。
- 现在支持MOE和密集w4a8量化。请参考 量化指南 。
- V1引擎支持休眠模式功能。请参考 休眠模式教程 。
- 新增动态和静态EPLB支持。此功能仍处于实验阶段。

##### 注意

- 从本版本起不再支持 V0 引擎。请始终设置 VLLMUSEV1=1 以在 vLLM Ascend 中使用 V1 引擎。
- 本版本不再需要 Mindie Turbo，且旧版本的 Mindie Turbo 不兼容，请勿安装。目前所有功能和增强均已包含在 vLLM Ascend 中。如有需要，我们将在未来考虑重新加入。
- TorchNPU 已升级至 2.5.1.post1，CANN 已升级至 8.2.RC1。请勿忘记升级它们。

##### 核心

- 为 V1 引擎新增了 Ascend 调度器。该调度器与 Ascend 硬件更亲和。
- 结构化输出功能现已在 V1 引擎上生效。
- 新增了一批自定义算子以提升性能。

##### 变更

- 修复 MTP 在 Prefill Decode 分离场景下工作不正常的问题。 [#2610](https://github.com/vllm-project/vllm-ascend/issues/2610) [#2554](https://github.com/vllm-project/vllm-ascend/issues/2554) [#2531](https://github.com/vllm-project/vllm-ascend/issues/2531)
- 修复若干 bug 以确保 Prefill Decode 分离功能正常工作。 [#2538](https://github.com/vllm-project/vllm-ascend/issues/2538) [#2509](https://github.com/vllm-project/vllm-ascend/issues/2509) [#2502](https://github.com/vllm-project/vllm-ascend/issues/2502)
- 修复 torchair 模式下 shutil.rmtree 报文件未找到的错误。 [#2506](https://github.com/vllm-project/vllm-ascend/issues/2506)

##### 已知问题

- 运行 MoE 模型时，Aclgraph 模式仅支持张量并行。本版本中 DP/EP 不工作。
- 本版本中 V1 引擎不支持流水线并行。
- 如果在 eager 模式下使用 w4a8 量化，请设置 VLLMASCENDMLAPARALLEL=1 以避免 OOM 错误。
- 使用某些工具进行精度测试可能不正确。这不影响真实用户场景。我们将在下一个补丁版本中修复。 [#2654](https://github.com/vllm-project/vllm-ascend/issues/2654)
- 我们注意到在 Prefill Decode 分离场景下运行 vLLM Ascend 仍存在一些问题。例如，可能出现内存泄漏和服务卡死。这是由 vLLM 和 vLLM Ascend 的已知问题引起的。我们将在下一个补丁版本中修复。 [#2650](https://github.com/vllm-project/vllm-ascend/issues/2650) [#2604](https://github.com/vllm-project/vllm-ascend/issues/2604) vLLM[#22736](https://github.com/vllm-project/vllm-ascend/issues/22736) vLLM[#23554](https://github.com/vllm-project/vllm-ascend/issues/23554) vLLM[#23981](https://github.com/vllm-project/vllm-ascend/issues/23981)

#### v0.9.1rc3 · 2025.08.22（中文）

##### 核心

- MTP 支持 V1 调度器 [#2371](https://github.com/vllm-project/vllm-ascend/issues/2371)
- 添加 LMhead TP 通信组 [#1956](https://github.com/vllm-project/vllm-ascend/issues/1956)
- 修复由过时的 applygrammarbitmask 方法导致的 grammarbitmask IndexError [#2314](https://github.com/vllm-project/vllm-ascend/issues/2314)
- 移除 chunkedprefillformla [#2177](https://github.com/vllm-project/vllm-ascend/issues/2177)
- 修复 bug 并重构缓存掩码生成逻辑 [#2326](https://github.com/vllm-project/vllm-ascend/issues/2326)
- 修复关于 ascend 调度器的配置检查逻辑 [#2327](https://github.com/vllm-project/vllm-ascend/issues/2327)
- 取消在分离式预填充部署中 deepseek-mtp 与非 ascend 调度器之间的验证 [#2368](https://github.com/vllm-project/vllm-ascend/issues/2368)
- 修复使用 ray 分布式后端失败的问题 [#2306](https://github.com/vllm-project/vllm-ascend/issues/2306)
- 修复 ascend 调度器中请求块长度不正确的问题 [#2394](https://github.com/vllm-project/vllm-ascend/issues/2394)
- 修复 rope 中的头文件包含问题 [#2398](https://github.com/vllm-project/vllm-ascend/issues/2398)
- 修复 mtp 配置 bug [#2412](https://github.com/vllm-project/vllm-ascend/issues/2412)
- 修复错误信息并适配 attnmetadata 重构 [#2402](https://github.com/vllm-project/vllm-ascend/issues/2402)
- 修复由配置不匹配和 .kvcachebytes 文件缺失导致的 torchair 运行时错误 [#2312](https://github.com/vllm-project/vllm-ascend/issues/2312)
- 将 withprefill allreduce 从 cpu 移至 npu [#2230](https://github.com/vllm-project/vllm-ascend/issues/2230)

##### 文档

- 为 deepseek large EP 添加文档 [#2339](https://github.com/vllm-project/vllm-ascend/issues/2339)

##### 已知问题

- testaclgraph.py 在 A2 (910B1) 上使用 "fullcudagraph": True 时失败 [#2182](https://github.com/vllm-project/vllm-ascend/issues/2182)

#### v0.10.0rc1 · 2025.08.07（中文）

##### 亮点

- Disaggregate prefill现已支持V1引擎。您可以尝试使用DeepSeek模型 [#950](https://github.com/vllm-project/vllm-ascend/issues/950) ，并按照此 教程 操作。
- W4A8量化方法现已支持dense和MoE模型。 [#2060](https://github.com/vllm-project/vllm-ascend/issues/2060) [#2172](https://github.com/vllm-project/vllm-ascend/issues/2172)

##### 核心

- Ascend PyTorch适配器(torchnpu)已升级至 2.7.1.dev20250724 。 [#1562](https://github.com/vllm-project/vllm-ascend/issues/1562) 同时CANN已升级至 8.2.RC1 。 [#1653](https://github.com/vllm-project/vllm-ascend/issues/1653) 请记得在您的环境中更新它们，或使用最新镜像。
- vLLM Ascend现已支持Atlas 800I A3，从本版本开始将发布A3的镜像。 [#1582](https://github.com/vllm-project/vllm-ascend/issues/1582)
- V1 现已支持流水线并行。 [#1800](https://github.com/vllm-project/vllm-ascend/issues/1800)
- 前缀缓存功能现已与 Ascend 调度器配合使用。 [#1446](https://github.com/vllm-project/vllm-ascend/issues/1446)
- Torchair 图模式现已支持 tp > 4。 [#1508](https://github.com/vllm-project/vllm-ascend/issues/1508)
- MTP 现已支持 torchair 图模式。 [#2145](https://github.com/vllm-project/vllm-ascend/issues/2145)

##### 其他

- Bug修复：
- 修复了多模态模型（如 Qwen2-audio）与 Aclgraph 的功能性问题。 [#1803](https://github.com/vllm-project/vllm-ascend/issues/1803)
- 修复了外部启动场景下的进程组创建错误。 [#1681](https://github.com/vllm-project/vllm-ascend/issues/1681)
- 修复了引导解码的功能性问题。 [#2022](https://github.com/vllm-project/vllm-ascend/issues/2022)
- 修复了 DP 场景下常见 MoE 模型的精度问题。 [#1856](https://github.com/vllm-project/vllm-ascend/issues/1856)
- 通过大量PR提升了性能：
- 缓存 sin/cos 而非每层计算。 [#1890](https://github.com/vllm-project/vllm-ascend/issues/1890)
- 改进共享专家多流并行。 [#1891](https://github.com/vllm-project/vllm-ascend/issues/1891)
- 实现了 tp 启用时 prefill 阶段 allreduce 和 matmul 的融合。通过设置 VLLMASCENDENABLEMATMULALLREDUCE 为 1 启用此功能。 [#1926](https://github.com/vllm-project/vllm-ascend/issues/1926)
- 通过减少 All2All 通信优化量化 MoE 性能。 [#2195](https://github.com/vllm-project/vllm-ascend/issues/2195)
- 使用多播避免将 decode 请求填充至 prefill 大小。 [#1555](https://github.com/vllm-project/vllm-ascend/issues/1555)
- LoRA 性能已得到提升。 [#1884](https://github.com/vllm-project/vllm-ascend/issues/1884)
- 一批重构 PR 以增强代码架构：
- Torchair 模型运行器重构。 [#2205](https://github.com/vllm-project/vllm-ascend/issues/2205)
- 重构 forwardcontext 和 modelrunnerv1。 [#1979](https://github.com/vllm-project/vllm-ascend/issues/1979)
- 重构 AscendMetaData 注释。 [#1967](https://github.com/vllm-project/vllm-ascend/issues/1967)
- 重构 torchair 工具函数。 [#1892](https://github.com/vllm-project/vllm-ascend/issues/1892)
- 重构 torchair worker。 [#1885](https://github.com/vllm-project/vllm-ascend/issues/1885)
- 注册激活自定义算子而非覆盖 forwardoot。 [#1841](https://github.com/vllm-project/vllm-ascend/issues/1841)
- 参数变更：
- additionalconfig 中的 experttensorparallelsize 现已移除，EP 和 TP 现已与 vLLM 对齐。 [#1681](https://github.com/vllm-project/vllm-ascend/issues/1681)
- 在环境变量中添加 VLLMASCENDMLAPA ，使用此变量启用 deepseek mla decode 的 mla 分页注意力算子。
- 在环境变量中添加 VLLMASCENDENABLEMATMULALLREDUCE ，在张量并行启用时开启 MatmulAllReduce 融合内核。此功能在 A2 上受支持，eager 模式将获得更优性能。
- 在环境变量中添加 VLLMASCENDENABLEMOEALL2ALLSEQ ，是否启用 moe all2all seq，这为基于 alltoall 的扩展提供了基础框架。
- 在此 RFC 之后的一批 PR 使 UT 覆盖率达到了 76.34%： [#1298](https://github.com/vllm-project/vllm-ascend/issues/1298)
- 现已添加中文在线文档。 [#1870](https://github.com/vllm-project/vllm-ascend/issues/1870)

##### 已知问题

- Aclgraph 当前无法与 DP + EP 配合使用，主要差距在于 Aclgraph 捕获图所需的 npu 流数量不足。 [#2229](https://github.com/vllm-project/vllm-ascend/issues/2229)
- 启用多流时，W8A8 动态量化 DeepSeek 存在精度问题。此问题将在下一个版本中修复。 [#2232](https://github.com/vllm-project/vllm-ascend/issues/2232)
- MTP 当前不支持 V1 调度器，将在 Q3 修复。 [#2254](https://github.com/vllm-project/vllm-ascend/issues/2254)
- 当 DP > 1 运行 MTP 时，由于 vLLM 的某些问题，需要禁用指标记录器。 [#2254](https://github.com/vllm-project/vllm-ascend/issues/2254)

#### v0.9.1rc2 · 2025.08.04（中文）

##### 亮点

- 现在支持MOE和密集w4a8量化： [#1320](https://github.com/vllm-project/vllm-ascend/issues/1320) [#1910](https://github.com/vllm-project/vllm-ascend/issues/1910) [#1275](https://github.com/vllm-project/vllm-ascend/issues/1275) [#1480](https://github.com/vllm-project/vllm-ascend/issues/1480)
- 在 [#1943](https://github.com/vllm-project/vllm-ascend/issues/1943) 中支持动态EPLB
- V1引擎的分离式预填充支持与改进，持续开发和稳定分离式预填充功能，包括单机设置的性能增强和错误修复： [#1953](https://github.com/vllm-project/vllm-ascend/issues/1953) [#1612](https://github.com/vllm-project/vllm-ascend/issues/1612) [#1361](https://github.com/vllm-project/vllm-ascend/issues/1361) [#1746](https://github.com/vllm-project/vllm-ascend/issues/1746) [#1552](https://github.com/vllm-project/vllm-ascend/issues/1552) [#1801](https://github.com/vllm-project/vllm-ascend/issues/1801) [#2083](https://github.com/vllm-project/vllm-ascend/issues/2083) [#1989](https://github.com/vllm-project/vllm-ascend/issues/1989)

##### 模型改进

- DeepSeek DBO支持与改进： [#1285](https://github.com/vllm-project/vllm-ascend/issues/1285) [#1291](https://github.com/vllm-project/vllm-ascend/issues/1291) [#1328](https://github.com/vllm-project/vllm-ascend/issues/1328) [#1420](https://github.com/vllm-project/vllm-ascend/issues/1420) [#1445](https://github.com/vllm-project/vllm-ascend/issues/1445) [#1589](https://github.com/vllm-project/vllm-ascend/issues/1589) [#1759](https://github.com/vllm-project/vllm-ascend/issues/1759) [#1827](https://github.com/vllm-project/vllm-ascend/issues/1827) [#2093](https://github.com/vllm-project/vllm-ascend/issues/2093)
- DeepSeek MTP改进与错误修复： [#1214](https://github.com/vllm-project/vllm-ascend/issues/1214) [#943](https://github.com/vllm-project/vllm-ascend/issues/943) [#1584](https://github.com/vllm-project/vllm-ascend/issues/1584) [#1473](https://github.com/vllm-project/vllm-ascend/issues/1473) [#1294](https://github.com/vllm-project/vllm-ascend/issues/1294) [#1632](https://github.com/vllm-project/vllm-ascend/issues/1632) [#1694](https://github.com/vllm-project/vllm-ascend/issues/1694) [#1840](https://github.com/vllm-project/vllm-ascend/issues/1840) [#2076](https://github.com/vllm-project/vllm-ascend/issues/2076) [#1990](https://github.com/vllm-project/vllm-ascend/issues/1990) [#2019](https://github.com/vllm-project/vllm-ascend/issues/2019)
- DeepSeek MLA分块预填充/图模式/多流改进与错误修复： [#1240](https://github.com/vllm-project/vllm-ascend/issues/1240) [#933](https://github.com/vllm-project/vllm-ascend/issues/933) [#1135](https://github.com/vllm-project/vllm-ascend/issues/1135) [#1311](https://github.com/vllm-project/vllm-ascend/issues/1311) [#1750](https://github.com/vllm-project/vllm-ascend/issues/1750) [#1872](https://github.com/vllm-project/vllm-ascend/issues/1872) [#2170](https://github.com/vllm-project/vllm-ascend/issues/2170) [#1551](https://github.com/vllm-project/vllm-ascend/issues/1551)
- Ray：修复使用ray时的设备错误，添加initializecache并改进警告信息： [#1234](https://github.com/vllm-project/vllm-ascend/issues/1234) [#1501](https://github.com/vllm-project/vllm-ascend/issues/1501)

##### 图模式改进

- 修复 DeepSeek 与 deepseek 在 mc2 中的问题 [#1269](https://github.com/vllm-project/vllm-ascend/issues/1269)
- 修复 torchairgraphbatchsizes 错误 [#1570](https://github.com/vllm-project/vllm-ascend/issues/1570)
- 启用 torchair 图模式下 tp <= 4 的限制 [#1404](https://github.com/vllm-project/vllm-ascend/issues/1404)
- 修复 rope 精度错误 [#1887](https://github.com/vllm-project/vllm-ascend/issues/1887)
- 支持 FusedMoE 中共享专家的多流 [#997](https://github.com/vllm-project/vllm-ascend/issues/997)
- 在 torchair 图模式下为解码过程启用 kvcachenz [#1098](https://github.com/vllm-project/vllm-ascend/issues/1098)
- 修复 torchair 下的 chunked-prefill 情况，以解决 UnboundLocalError: local variable 'decodehsorqc' 问题 [#1378](https://github.com/vllm-project/vllm-ascend/issues/1378)
- 改进 w8a8 动态场景下共享专家多流性能 [#1561](https://github.com/vllm-project/vllm-ascend/issues/1561)
- 修复设置多流时的 moe 错误 [#1882](https://github.com/vllm-project/vllm-ascend/issues/1882)
- 在 EP 情况下将图批次大小向上取整到 tp 大小 [#1610](https://github.com/vllm-project/vllm-ascend/issues/1610)
- 修复启用 DP 时的 torchair 错误 [#1727](https://github.com/vllm-project/vllm-ascend/issues/1727)
- 为 torchairgraphconfig 添加额外检查 [#1675](https://github.com/vllm-project/vllm-ascend/issues/1675)
- 修复 torchair+chunk-prefill 场景下的 rope 错误 [#1693](https://github.com/vllm-project/vllm-ascend/issues/1693)
- 修复 chunkedprefill 为 true 时的 torchairgraph 错误 [#1748](https://github.com/vllm-project/vllm-ascend/issues/1748)
- 改进 prefill 优化以支持 torchair 图模式 [#2090](https://github.com/vllm-project/vllm-ascend/issues/2090)
- 修复 DP 场景下的 rank 设置 [#1247](https://github.com/vllm-project/vllm-ascend/issues/1247)
- 重置所有未使用位置以防止越界，解决 GatherV3 错误 [#1397](https://github.com/vllm-project/vllm-ascend/issues/1397)
- 移除 ModelRunner 中重复的多模态代码 [#1393](https://github.com/vllm-project/vllm-ascend/issues/1393)
- 修复块表形状以解决精度问题 [#1297](https://github.com/vllm-project/vllm-ascend/issues/1297)
- 在有限场景下实现原始全图 [#1503](https://github.com/vllm-project/vllm-ascend/issues/1503)
- 在全图中恢复分页注意力内核以提升性能 [#1677](https://github.com/vllm-project/vllm-ascend/issues/1677)
- 修复极端 --gpu-memory-utilization 场景下的 DeepSeek OOM 问题 [#1829](https://github.com/vllm-project/vllm-ascend/issues/1829)
- 启用 TorchAir 时关闭 aclgraph [#2154](https://github.com/vllm-project/vllm-ascend/issues/2154)

##### 算子改进

- 添加自定义 AscendC 内核 vocabparallelembedding [#796](https://github.com/vllm-project/vllm-ascend/issues/796)
- 修复 rope sin/cos 缓存错误 [#1267](https://github.com/vllm-project/vllm-ascend/issues/1267)
- 重构 AscendFusedMoE ([#1229](https://github.com/vllm-project/vllm-ascend/issues/1229)) [#1264](https://github.com/vllm-project/vllm-ascend/issues/1264)
- 在采样器中使用融合算子 nputopktopp [#1920](https://github.com/vllm-project/vllm-ascend/issues/1920)

##### 核心

- 在 [#2036](https://github.com/vllm-project/vllm-ascend/issues/2036) 中将 CANN 升级至 8.2.rc1
- 在 [#2135](https://github.com/vllm-project/vllm-ascend/issues/2135) 中将 TorchNPU 升级至 2.5.1.post1
- 在 [#2136](https://github.com/vllm-project/vllm-ascend/issues/2136) 中将 python 升级至 3.11
- 在 [#1749](https://github.com/vllm-project/vllm-ascend/issues/1749) 中禁用了 mindieturbo 中的量化
- 在 [#1323](https://github.com/vllm-project/vllm-ascend/issues/1323) 中修复了 v0 spec decode
- 在 [#1271](https://github.com/vllm-project/vllm-ascend/issues/1271) 中仅在使用 V0 spec decode 时直接启用 ACLOPINITMODE=1
- 在 [#1422](https://github.com/vllm-project/vllm-ascend/issues/1422) 中重构了 forwardcontext 和 modelrunnerv1
- 在 [#1423](https://github.com/vllm-project/vllm-ascend/issues/1423) 中修复了采样参数
- 在 [#1409](https://github.com/vllm-project/vllm-ascend/issues/1409) 中添加了启用权重 NZ 布局的开关，并为 GMM 启用 NZ
- 在 [#1449](https://github.com/vllm-project/vllm-ascend/issues/1449) [#1554](https://github.com/vllm-project/vllm-ascend/issues/1554) [#1598](https://github.com/vllm-project/vllm-ascend/issues/1598) 中解决了 ascendforwardcontext 中的 bug
- 在 [#1492](https://github.com/vllm-project/vllm-ascend/issues/1492) 中处理了 PrefillCacheHit 状态以修复前缀缓存精度 bug
- 在 [#1651](https://github.com/vllm-project/vllm-ascend/issues/1651) 中修复了加载权重错误并添加了新的 e2e 用例
- 在 [#1614](https://github.com/vllm-project/vllm-ascend/issues/1614) 中优化了 deepseek 中 rope 相关索引选择的数量
- 在 [#1642](https://github.com/vllm-project/vllm-ascend/issues/1642) 中添加了 mc2 mask
- 在 [#1667](https://github.com/vllm-project/vllm-ascend/issues/1667) [#1896](https://github.com/vllm-project/vllm-ascend/issues/1896) [#2003](https://github.com/vllm-project/vllm-ascend/issues/2003) 中修复了静态 EPLB log2phy 条件并改进了单元测试
- 在 [#1703](https://github.com/vllm-project/vllm-ascend/issues/1703) 中为 prefill 添加了 chunk mc2
- 在 [#1711](https://github.com/vllm-project/vllm-ascend/issues/1711) 中修复了 mc2 op GroupCoordinator bug
- 在 [#1721](https://github.com/vllm-project/vllm-ascend/issues/1721) 中修复了无法识别量化实际类型的问题
- 在 [#1755](https://github.com/vllm-project/vllm-ascend/issues/1755) 中修复了 tpsize == 1 时的 DeepSeek bug
- 在 [#1691](https://github.com/vllm-project/vllm-ascend/issues/1691) 中添加了对 prefill 节点中无延迟块的支持
- 在 [#1547](https://github.com/vllm-project/vllm-ascend/issues/1547) 中为未量化的 RL 训练优化了 MoE alltoallv 通信，并支持 alltoallv 的 dpo
- 在 [#1822](https://github.com/vllm-project/vllm-ascend/issues/1822) 中适配了 dispatchV2 接口
- 在 [#1807](https://github.com/vllm-project/vllm-ascend/issues/1807) 中修复了长输出场景下 disaggregate prefill 挂起的问题
- 在 [#1859](https://github.com/vllm-project/vllm-ascend/issues/1859) 中修复了 engine v0 时的 flashcommv1
- 在 [#1862](https://github.com/vllm-project/vllm-ascend/issues/1862) 中修复了某些情况下 epgroup 不等于 wordsize 的问题
- 在 [#1808](https://github.com/vllm-project/vllm-ascend/issues/1808) 中修复了 wheel glibc 版本不兼容的问题
- 在 [#1831](https://github.com/vllm-project/vllm-ascend/issues/1831) 中修复了 mc2 进程组以解决 self.cpugroup 为 None 的问题
- 在 [#1904](https://github.com/vllm-project/vllm-ascend/issues/1904) 中将 vllm 版本固定为 v0.9.1 以使 mypy 检查通过
- 在 [#1902](https://github.com/vllm-project/vllm-ascend/issues/1902) 中为 moe 应用了 npumoegatingtopksoftmax 以提升性能
- 在 [#1919](https://github.com/vllm-project/vllm-ascend/issues/1919) 中修复了 engine v0 时 pathdecorator 中的 bug
- 在 [#1644](https://github.com/vllm-project/vllm-ascend/issues/1644) 中避免在 disaggregated-prefill 场景下执行 cpu allreduce
- 在 [#1916](https://github.com/vllm-project/vllm-ascend/issues/1916) 中为 decode MoE 添加了 super kernel
- 在 [#1802](https://github.com/vllm-project/vllm-ascend/issues/1802) 中进行了 [Prefill Perf] 并行策略优化（以显存换速度的权衡）
- 在 [#2016](https://github.com/vllm-project/vllm-ascend/issues/2016) 中移除了 sharedexperts.downproj 中不必要的 reduceresults 访问
- 在 [#2002](https://github.com/vllm-project/vllm-ascend/issues/2002) 中使用向量化优化了 greedy reject sampler
- 在 [#1936](https://github.com/vllm-project/vllm-ascend/issues/1936) 中使多个 P 和 D 能够在单台机器上工作
- 在 [#2075](https://github.com/vllm-project/vllm-ascend/issues/2075) 中修复了当 tp > 1 且启用 multistreammoe 时 deepseek 模型 shared 与 routed experts 之间的形状冲突
- 在 [#2031](https://github.com/vllm-project/vllm-ascend/issues/2031) 中添加了 CPU 绑定支持
- 在 [#2129](https://github.com/vllm-project/vllm-ascend/issues/2129) 中添加了 withprefill cpu allreduce 以处理 D 节点重计算
- 在 [#2038](https://github.com/vllm-project/vllm-ascend/issues/2038) 中添加了 D2H 和 initRoutingQuantV2 以提升 prefill 性能

##### 文档

- 提供执行时长性能分析的端到端指南 [#1113](https://github.com/vllm-project/vllm-ascend/issues/1113)
- 为CANN包下载URL添加Referer头 [#1192](https://github.com/vllm-project/vllm-ascend/issues/1192)
- 添加重新安装说明文档 [#1370](https://github.com/vllm-project/vllm-ascend/issues/1370)
- 更新Disaggregate prefill README [#1379](https://github.com/vllm-project/vllm-ascend/issues/1379)
- 为kv cache注册样式实现Disaggregate prefill [#1296](https://github.com/vllm-project/vllm-ascend/issues/1296)
- 在 [#1965](https://github.com/vllm-project/vllm-ascend/issues/1965) 中修复examples/disaggregateprefillv1/README.md中的错误和非标准部分

##### 已知问题

- 对于特定硬件类型， fullcudagraphenable 尚不支持全图模式。 [#2182](https://github.com/vllm-project/vllm-ascend/issues/2182)
- 如 v0.9.1rc1 发布说明所述，将不包含 Atlas 300I 系列的支持。

#### v0.9.2rc1 · 2025.07.11（中文）

##### 亮点

- Atlas 300I 系列的性能已得到提升。 [#1591](https://github.com/vllm-project/vllm-ascend/issues/1591)

##### 核心

- Ascend PyTorch 适配器 (torchnpu) 已升级至 2.5.1.post1.dev20250619 。请记得在您的环境中更新它。 [#1347](https://github.com/vllm-project/vllm-ascend/issues/1347)
- 使用 aclgraph 模式时，GatherV3 错误已修复。 [#1416](https://github.com/vllm-project/vllm-ascend/issues/1416)
- W8A8 量化现在可以在 Atlas 300I 系列上工作。 [#1560](https://github.com/vllm-project/vllm-ascend/issues/1560)
- 修复了部署具有并行参数的模型时的精度问题。 [#1678](https://github.com/vllm-project/vllm-ascend/issues/1678)
- 预构建的 wheel 包现在需要较低版本的 glibc。用户可以直接通过 pip install vllm-ascend 使用它。 [#1582](https://github.com/vllm-project/vllm-ascend/issues/1582)

##### 其他

- 官方文档已更新，以提供更好的阅读体验。例如，添加了更多部署教程，更新了用户/开发者文档。更多指南即将推出。
- 新增环境变量 VLLMASCENDENABLETOPKTOPPOPTIMIZATION 以提升 topk-topp 采样的性能。默认值为 0，我们未来会考虑默认启用它。 [#1732](https://github.com/vllm-project/vllm-ascend/issues/1732)
- 修复了数据并行场景下的一批错误。 [#1273](https://github.com/vllm-project/vllm-ascend/issues/1273) [#1322](https://github.com/vllm-project/vllm-ascend/issues/1322) [#1275](https://github.com/vllm-project/vllm-ascend/issues/1275) [#1478](https://github.com/vllm-project/vllm-ascend/issues/1478)
- DeepSeek 性能已得到提升。 [#1194](https://github.com/vllm-project/vllm-ascend/issues/1194) [#1395](https://github.com/vllm-project/vllm-ascend/issues/1395) [#1380](https://github.com/vllm-project/vllm-ascend/issues/1380)
- Ascend 调度器现在可以与前缀缓存一起工作。 [#1446](https://github.com/vllm-project/vllm-ascend/issues/1446)
- DeepSeek 现在可以与前缀缓存一起工作。 [#1498](https://github.com/vllm-project/vllm-ascend/issues/1498)
- 支持 prompt logprobs 以恢复 V1 中的 ceval 精度。 [#1483](https://github.com/vllm-project/vllm-ascend/issues/1483)

##### 已知问题

- 流水线并行无法与 ray 和图模式一起工作： https://github.com/vllm-project/vllm-ascend/issues/1751 https://github.com/vllm-project/vllm-ascend/issues/1754

#### v0.9.1rc1 · 2025.06.22（中文）

##### 实验性

- 支持 EAGLE-3 用于推测解码。 [#1032](https://github.com/vllm-project/vllm-ascend/issues/1032)

##### 核心

- Ascend PyTorch 适配器 (torchnpu) 已升级至 2.5.1.post1.dev20250528 。请记得在您的环境中更新它。 [#1235](https://github.com/vllm-project/vllm-ascend/issues/1235)
- 支持 Atlas 300I 系列容器镜像。您可以从 quay.io 获取。
- 修复了逐 token 填充机制，使多卡图模式能够工作。 [#1300](https://github.com/vllm-project/vllm-ascend/issues/1300)
- 将 vLLM 升级至 0.9.1。 [#1165](https://github.com/vllm-project/vllm-ascend/issues/1165)

##### 其他改进

- 初步支持 MLA 的 Chunked Prefill。 [#1172](https://github.com/vllm-project/vllm-ascend/issues/1172)
- 新增了使用 ETP 运行 DeepSeek 的最佳实践示例。 [#1101](https://github.com/vllm-project/vllm-ascend/issues/1101)
- 使用 TorchAir 图对 DeepSeek 进行了性能改进。 [#1098](https://github.com/vllm-project/vllm-ascend/issues/1098) , [#1131](https://github.com/vllm-project/vllm-ascend/issues/1131)
- 支持使用 AscendScheduler 的推测解码功能。 [#943](https://github.com/vllm-project/vllm-ascend/issues/943)
- 提升 VocabParallelEmbedding 自定义算子的性能。该功能将在下一个版本中启用。 [#796](https://github.com/vllm-project/vllm-ascend/issues/796)
- 修复了在 Ray 上运行 vLLM Ascend 时的设备发现和设置错误。 [#884](https://github.com/vllm-project/vllm-ascend/issues/884)
- 带有 MC2 （合并计算与通信）的 DeepSeek 现在可以正常工作。 [#1268](https://github.com/vllm-project/vllm-ascend/issues/1268)
- 修复了静态 EPLB 功能中的 log2phy NoneType 错误。 [#1186](https://github.com/vllm-project/vllm-ascend/issues/1186)
- 改进了启用 DBO 的 DeepSeek 的性能。 [#997](https://github.com/vllm-project/vllm-ascend/issues/997) , [#1135](https://github.com/vllm-project/vllm-ascend/issues/1135)
- 重构 AscendFusedMoE。 [#1229](https://github.com/vllm-project/vllm-ascend/issues/1229)
- 新增单元测试框架。 [#1201](https://github.com/vllm-project/vllm-ascend/issues/1201)

##### 已知问题

- 在某些情况下，当启用 aclgraph 时，vLLM 进程可能会因 GatherV3 错误而崩溃。我们正在处理此问题，并将在下一个版本中修复。 [#1038](https://github.com/vllm-project/vllm-ascend/issues/1038)
- 前缀缓存功能在启用 Ascend Scheduler 但未启用分块预填充时无法正常工作。此问题将在下一个版本中修复。 [#1350](https://github.com/vllm-project/vllm-ascend/issues/1350)

#### v0.9.0rc2 · 2025.06.10（英文原文）

##### 亮点

- Fix the import error when vllm-ascend is installed without editable way. [#1152](https://github.com/vllm-project/vllm-ascend/issues/1152)

#### v0.9.0rc1 · 2025.06.09（中文）

##### 亮点

- DeepSeek 现在支持图模式。请参考 官方文档 进行尝试。 [#789](https://github.com/vllm-project/vllm-ascend/issues/789)
- Qwen 系列模型现在支持图模式。在 V1 引擎下默认启用。请注意，在此版本中，只有 Qwen 系列模型经过了图模式的充分测试。我们将在下一个版本中使其稳定并通用化。如果遇到任何问题，请随时在 GitHub 上提交 issue，并暂时通过初始化模型时设置 enforceeager=True 回退到 eager 模式。

##### 核心

- 多步调度器的性能已得到改进。感谢招商银行的贡献。 [#814](https://github.com/vllm-project/vllm-ascend/issues/814)
- V1 引擎现在支持 LoRA、Multi-LoRA 和动态服务。感谢招商银行的贡献。 [#893](https://github.com/vllm-project/vllm-ascend/issues/893)
- 前缀缓存和分块预填充功能现已可用。 [#782](https://github.com/vllm-project/vllm-ascend/issues/782) [#844](https://github.com/vllm-project/vllm-ascend/issues/844)
- 推测解码和 MTP 功能现在支持 V1 引擎。 [#874](https://github.com/vllm-project/vllm-ascend/issues/874) [#890](https://github.com/vllm-project/vllm-ascend/issues/890)
- DP 功能现在支持 DeepSeek。 [#1012](https://github.com/vllm-project/vllm-ascend/issues/1012)
- 输入嵌入功能现在支持 V0 引擎。 [#916](https://github.com/vllm-project/vllm-ascend/issues/916)
- 休眠模式功能现在支持 V1 引擎。 [#1084](https://github.com/vllm-project/vllm-ascend/issues/1084)

##### 模型

- 新增了一种名为双批次重叠（DBO）的新型 DeepSeek 模型。请设置 VLLMASCENDENABLEDBO=1 以使用它。 [#941](https://github.com/vllm-project/vllm-ascend/issues/941)

##### 其他

- 在线推理现已支持昇腾量化。 [#877](https://github.com/vllm-project/vllm-ascend/issues/877)
- 修复了图模式和MoE模型的一批错误。 [#773](https://github.com/vllm-project/vllm-ascend/issues/773) [#771](https://github.com/vllm-project/vllm-ascend/issues/771) [#774](https://github.com/vllm-project/vllm-ascend/issues/774) [#816](https://github.com/vllm-project/vllm-ascend/issues/816) [#817](https://github.com/vllm-project/vllm-ascend/issues/817) [#819](https://github.com/vllm-project/vllm-ascend/issues/819) [#912](https://github.com/vllm-project/vllm-ascend/issues/912) [#897](https://github.com/vllm-project/vllm-ascend/issues/897) [#961](https://github.com/vllm-project/vllm-ascend/issues/961) [#958](https://github.com/vllm-project/vllm-ascend/issues/958) [#913](https://github.com/vllm-project/vllm-ascend/issues/913) [#905](https://github.com/vllm-project/vllm-ascend/issues/905)
- 合并了一批性能优化PR。 [#784](https://github.com/vllm-project/vllm-ascend/issues/784) [#803](https://github.com/vllm-project/vllm-ascend/issues/803) [#966](https://github.com/vllm-project/vllm-ascend/issues/966) [#839](https://github.com/vllm-project/vllm-ascend/issues/839) [#970](https://github.com/vllm-project/vllm-ascend/issues/970) [#947](https://github.com/vllm-project/vllm-ascend/issues/947) [#987](https://github.com/vllm-project/vllm-ascend/issues/987) [#1085](https://github.com/vllm-project/vllm-ascend/issues/1085)
- 从本版本开始，也将发布二进制wheel包。 [#775](https://github.com/vllm-project/vllm-ascend/issues/775)
- 贡献者文档站点已 添加 。

##### 已知问题

- 在某些情况下，启用aclgraph可能导致vLLM进程崩溃。我们正在处理此问题，并将在下一个版本中修复。
- 本版本不支持多节点数据并行。这是vllm的一个已知问题，已在主分支上修复。 [#18981](https://github.com/vllm-project/vllm-ascend/issues/18981)

#### v0.7.3.post1 · 2025.05.29（中文）

##### 亮点

- 新增了性能指南。该指南旨在帮助用户在系统层面提升vllm-ascend性能，包括操作系统配置、库优化、部署指南等。 [#878](https://github.com/vllm-project/vllm-ascend/issues/878) 文档链接

##### 错误修复

- 用户现在可以从在线权重启动模型，例如直接从huggingface或modelscope启动。 [#858](https://github.com/vllm-project/vllm-ascend/issues/858) [#918](https://github.com/vllm-project/vllm-ascend/issues/918)
- 清除了无意义的日志信息 UserWorkspaceSize0 。 [#911](https://github.com/vllm-project/vllm-ascend/issues/911)
- Failed to import vllmascendC 的日志级别已从 error 改为 warning 。 [#956](https://github.com/vllm-project/vllm-ascend/issues/956)
- DeepSeek MLA现在可以在V1引擎中与chunked prefill配合使用。请注意，0.7.3中的V1引擎仅为实验性，仅供测试使用。 [#849](https://github.com/vllm-project/vllm-ascend/issues/849) [#936](https://github.com/vllm-project/vllm-ascend/issues/936)

##### 文档

- 添加说明，明确只有"modelscope<1.23.0"与0.7.3版本兼容。 [#954](https://github.com/vllm-project/vllm-ascend/issues/954)

#### v0.7.3 · 2025.05.08（中文）

##### 亮点

- 此版本包含之前所有候选版本（ v0.7.1rc1 、 v0.7.3rc1 、 v0.7.3rc2 ）中引入的所有功能。所有功能均已充分测试和验证。请访问官方文档查看详细的 功能 和 模型 支持矩阵。
- 将CANN升级至8.1.RC1以启用分块预填充和自动前缀缓存功能。您现在可以启用这些功能。
- 将PyTorch升级至2.5.1。vLLM Ascend不再依赖TorchNPU的开发版本。现在用户无需手动安装TorchNPU，2.5.1版本的TorchNPU将自动安装。 [#662](https://github.com/vllm-project/vllm-ascend/issues/662)

##### 核心

- 现已支持LoRA、Multi-LoRA和动态服务。性能将在下一个版本中提升。请遵循官方文档获取更多使用信息。感谢招商银行的贡献。 [#700](https://github.com/vllm-project/vllm-ascend/issues/700)

##### 模型

- 提升了 applypenalties 和 topKtopP 算子的性能。 [#525](https://github.com/vllm-project/vllm-ascend/issues/525)

##### 其他

- 修复了可能导致CPU内存泄漏的问题。 [#691](https://github.com/vllm-project/vllm-ascend/issues/691) [#712](https://github.com/vllm-project/vllm-ascend/issues/712)
- 新增环境变量 SOCVERSION 。如果在启用自定义算子时构建遇到soc检测错误，请将 SOCVERSION 设置为合适的值。 [#606](https://github.com/vllm-project/vllm-ascend/issues/606)
- 支持带有 v0.7.3-openeuler 标签的 openEuler 容器镜像。 [#665](https://github.com/vllm-project/vllm-ascend/issues/665)
- 前缀缓存功能现在可在 V1 引擎上运行。 [#559](https://github.com/vllm-project/vllm-ascend/issues/559)

#### v0.8.5rc1 · 2025.05.06（中文）

##### 亮点

- 升级 CANN 版本至 8.1.RC1，以支持在启用 V1 时的分块预填充和自动前缀缓存 ( --enableprefixcaching ) [#747](https://github.com/vllm-project/vllm-ascend/issues/747)

##### 核心

- 将 vLLM 升级到 0.8.5.post1 [#715](https://github.com/vllm-project/vllm-ascend/issues/715)
- 修复 profilerun 期间 CustomDeepseekV2MoE.forward 中的提前返回问题 [#682](https://github.com/vllm-project/vllm-ascend/issues/682)
- 适配 modelslim 生成的新量化模型 [#719](https://github.com/vllm-project/vllm-ascend/issues/719)
- 基于 llmdatadist 初步支持 P2P Disaggregated Prefill [#694](https://github.com/vllm-project/vllm-ascend/issues/694)
- 使用 /vllm-workspace 作为代码路径并在容器镜像中包含 .git ，以修复在 /workspace 下启动 vllm 时的问题 [#726](https://github.com/vllm-project/vllm-ascend/issues/726)
- 修复 setup.py 中 PYTHONINCLUDEPATH 的拼写错误 [#762](https://github.com/vllm-project/vllm-ascend/issues/762)

##### 其他

- 添加 Qwen3-0.6B 测试 [#717](https://github.com/vllm-project/vllm-ascend/issues/717)
- 添加 nightly CI [#668](https://github.com/vllm-project/vllm-ascend/issues/668)
- 添加精度测试报告 [#542](https://github.com/vllm-project/vllm-ascend/issues/542)

#### v0.8.4rc2 · 2025.04.29（中文）

##### 亮点

- 现已支持 Ascend W8A8 量化方法。请参考 官方文档 示例。欢迎提供任何 反馈 。 [#580](https://github.com/vllm-project/vllm-ascend/issues/580)

##### 核心

- ACLGraph功能现已支持V1引擎。由于该功能依赖CANN 8.1版本，默认情况下处于禁用状态。我们将在下一个版本中默认启用它。 [#426](https://github.com/vllm-project/vllm-ascend/issues/426)
- 将PyTorch升级至2.5.1。vLLM Ascend不再依赖TorchNPU的开发版本。现在用户无需手动安装TorchNPU，2.5.1版本的TorchNPU将自动安装。 [#661](https://github.com/vllm-project/vllm-ascend/issues/661)

##### 其他

- MiniCPM 模型现已可用。 [#645](https://github.com/vllm-project/vllm-ascend/issues/645)
- 支持带有 v0.8.4-openeuler 标签的 openEuler 容器镜像，并且对于 openEuler OS，自定义算子构建默认启用。 [#689](https://github.com/vllm-project/vllm-ascend/issues/689)
- 修复 ModuleNotFoundError 错误，使 Lora 能够正常工作 [#600](https://github.com/vllm-project/vllm-ascend/issues/600)
- 添加“使用 EvalScope 评估”文档 [#611](https://github.com/vllm-project/vllm-ascend/issues/611)
- 添加 VLLMVERSION 环境变量，使 vLLM 版本可配置，以帮助开发者在本地手动修改 vLLM 代码时设置正确的 vLLM 版本。 [#651](https://github.com/vllm-project/vllm-ascend/issues/651)

#### v0.8.4rc1 · 2025.04.18（中文）

##### 亮点

- 本版本包含对 vLLM V1 引擎的实验性支持。您可以访问 官方指南 获取更多详情。默认情况下，如果 V1 无法工作，vLLM 将回退到 V0，如果您想强制使用 V1，请设置 VLLMUSEV1=1 环境变量。
- 现已支持 LoRA、Multi-LoRA 和动态服务。性能将在下一个版本中提升。请参考 官方文档 了解更多使用信息。感谢招商银行的贡献。 [#521](https://github.com/vllm-project/vllm-ascend/issues/521) 。
- 支持休眠模式功能。目前该功能仅适用于 V0 引擎。V1 引擎的支持即将推出。 [#513](https://github.com/vllm-project/vllm-ascend/issues/513)

##### 核心

- 为V1引擎添加了Ascend调度器。该调度器与Ascend硬件具有更好的亲和性。未来将添加更多调度策略。 [#543](https://github.com/vllm-project/vllm-ascend/issues/543)
- 支持分离式预填充功能。目前仅支持1P1D模式。NPND正在由vllm团队设计。vllm-ascend将在vLLM就绪后支持该功能。请按照 官方指南 使用。 [#432](https://github.com/vllm-project/vllm-ascend/issues/432)
- 推测解码功能现已可用。目前仅支持V0引擎，V1引擎支持即将推出。 [#500](https://github.com/vllm-project/vllm-ascend/issues/500)
- V1引擎现已支持结构化输出功能。目前仅支持xgrammar后端，使用guidance后端可能会遇到一些错误。 [#555](https://github.com/vllm-project/vllm-ascend/issues/555)

##### 其他

- 新增通信器 pyhccl ，用于直接调用CANN HCCL库，替代 torch.distribute 。更多用法将在下一版本中添加。 [#503](https://github.com/vllm-project/vllm-ascend/issues/503)
- 自定义算子构建默认启用。您需要先安装 gcc 、 cmake 等软件包，然后从源码构建 vllm-ascend 。如果不需要编译，可设置环境变量 COMPILECUSTOMKERNELS=0 禁用。 [#466](https://github.com/vllm-project/vllm-ascend/issues/466)
- 自定义算子 rotary embedding 现已默认启用，以提升性能。 [#555](https://github.com/vllm-project/vllm-ascend/issues/555)

#### v0.7.3rc2 · 2025.03.29（中文）

##### 亮点

- 新增昇腾自定义算子框架。开发者现在可以使用 AscendC 编写自定义算子。新增了一个示例算子 rotaryembedding 。更多教程即将推出。安装 vllm-ascend 时，自定义算子编译默认处于禁用状态。设置 COMPILECUSTOMKERNELS=1 可启用它。 [#371](https://github.com/vllm-project/vllm-ascend/issues/371)
- 本版本基本支持 V1 引擎。完整支持将在 0.8.X 版本中完成。如果您遇到任何问题或对 V1 引擎有任何需求，请通过 该 issue 告知我们。 [#376](https://github.com/vllm-project/vllm-ascend/issues/376)
- Prefix cache 特性现已可用。您可以设置 enableprefixcaching=True 来启用它。 [#282](https://github.com/vllm-project/vllm-ascend/issues/282)

##### 核心

- 升级torchnpu版本至dev20250320.3，以提高精度并修复 !!! 输出问题。 [#406](https://github.com/vllm-project/vllm-ascend/issues/406)

##### 其他

- 修复了一个错误，确保多步调度器功能正常工作。 [#349](https://github.com/vllm-project/vllm-ascend/issues/349)
- 修复了一个错误，使前缀缓存功能能够以正确的精度工作。 [#424](https://github.com/vllm-project/vllm-ascend/issues/424)

#### v0.7.3rc1 · 2025.03.14（中文）

##### 亮点

- 支持推测解码功能。 [#252](https://github.com/vllm-project/vllm-ascend/issues/252)
- 支持多步调度器功能。 [#300](https://github.com/vllm-project/vllm-ascend/issues/300)

##### 核心

- 升级torchnpu版本至dev20250308.3，以提高 exponential 精度
- 添加了对池化模型的初步支持。基于Bert的模型，如 BAAI/bge-base-en-v1.5 和 BAAI/bge-reranker-v2-m3 现已可用。 [#229](https://github.com/vllm-project/vllm-ascend/issues/229)

##### 模型

- 现已支持MiniCPM。 [#164](https://github.com/vllm-project/vllm-ascend/issues/164)

##### 其他

- [文档] 添加了更多模型教程，包括DeepSeek、QwQ、Qwen和Qwen 2.5VL。详情请参阅 官方文档
- 在vLLM v0.7.3上固定modelscope<1.23.0以解决： https://github.com/vllm-project/vllm/pull/13807 [#13807](https://github.com/vllm-project/vllm-ascend/issues/13807)

##### 已知问题

- 在 某些情况下 ，尤其是当输入/输出非常长时，输出的精度可能不正确。我们正在处理该问题，将在下一个版本中修复。
- 减少了模型输出中的乱码。但如果您仍然遇到该问题，请尝试更改生成配置值（例如 temperature ）后重试。下面还有一个已知问题。欢迎提供任何 反馈 。 [#277](https://github.com/vllm-project/vllm-ascend/issues/277)

#### v0.7.1rc1 · 2025.02.19（中文）

##### 亮点

- 初步支持vLLM上的Ascend NPU。 #3
- 现已支持DeepSeek。 #88 #68

##### 核心

- 添加了Ascend量化配置选项，具体实现即将推出。 #7 #73
- 添加siluandmul和rope算子，并将混合算子添加到注意力层。 #18

##### 其他

- [CI] 启用Ascend CI以主动监控并提升vLLM在Ascend上的质量。 #3
- [Docker] 添加vllm-ascend容器镜像 #64
- [文档] 添加 在线文档 #55

##### 已知问题

- 此版本依赖于一个未发布的torchnpu版本。官方容器镜像中已预装该版本。如果您使用非容器环境，请手动 安装 。
- 运行vllm-ascend时，可能会出现类似 No platform detected, vLLM is running on UnspecifiedPlatform 或 Failed to import from vllm.C with ModuleNotFoundError("No module named 'vllm.C'") 的日志。这实际上不影响任何功能和性能，您可以忽略。此问题已在此 PR 中修复，该修复将很快包含在v0.7.3中。
- 运行vllm-ascend时，可能会出现类似 # CPU blocks: 35064, # CPU blocks: 2730 的日志，而正确的应为 # NPU blocks: 。这实际上不影响任何功能和性能，您可以忽略。此问题已在此 PR 中修复，该修复将很快包含在v0.7.3中。
