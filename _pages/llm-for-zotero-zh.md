---
layout: docs
title: "LLM for Zotero — 文档"
permalink: /llm-for-zotero/zh/
author_profile: false
lang: zh
lang_alt: /llm-for-zotero/
---

<h1 id="overview">LLM for Zotero</h1>

<div class="rtd-badges">
  <a href="https://www.zotero.org"><img src="https://img.shields.io/badge/Zotero-7-green?style=flat-square&logo=zotero&logoColor=CC2936" alt="Zotero 7"></a>
  <a href="https://www.zotero.org"><img src="https://img.shields.io/badge/Zotero-8-green?style=flat-square&logo=zotero&logoColor=CC2936" alt="Zotero 8"></a>
  <a href="https://www.gnu.org/licenses/agpl-3.0"><img src="https://img.shields.io/badge/License-AGPL_v3-blue.svg?style=flat-square" alt="AGPL v3"></a>
  <a href="https://github.com/yilewang/llm-for-zotero/releases"><img src="https://img.shields.io/github/v/release/yilewang/llm-for-zotero?style=flat-square" alt="最新版本"></a>
  <a href="https://github.com/yilewang/llm-for-zotero/stargazers"><img src="https://img.shields.io/github/stars/yilewang/llm-for-zotero?style=flat-square" alt="GitHub Stars"></a>
  <a href="https://yilewang.github.io"><img src="https://img.shields.io/badge/网站-yilewang.github.io-informational?style=flat-square&logo=github" alt="个人网站"></a>
</div>

<p style="margin: 4px 0 20px; font-size: 0.9em;">📖 <a href="/llm-for-zotero/"><strong>English Documentation</strong></a></p>

**llm-for-zotero** 是一款免费的开源 [Zotero](https://www.zotero.org/) 插件，可将大型语言模型直接集成到 PDF 阅读器中。与需要将 PDF 上传到网页端的工具不同，本插件让您无需离开 Zotero 即可与论文对话。它静静地驻留在阅读器侧栏——随时待命的研究助手。

<img src="/images/llm-for-zotero/demo.png" alt="llm-for-zotero 侧栏在 Zotero PDF 阅读器中的截图">

<div class="rtd-feature-grid">
  <div class="rtd-feature-card">
    <strong>与论文对话</strong>
    <p>就任意打开的 PDF 提问，回答基于论文内容并附带可点击的引用跳转。</p>
  </div>
  <div class="rtd-feature-card">
    <strong>多模型支持</strong>
    <p>OpenAI、Anthropic、Google Gemini、DeepSeek、本地模型——使用任何您偏好的 LLM。</p>
  </div>
  <div class="rtd-feature-card">
    <strong>Agent 模式</strong>
    <p>自主管理文库、执行终端命令、访问本地文件的智能代理——所有变更均需您审批。</p>
  </div>
  <div class="rtd-feature-card">
    <strong>MinerU PDF 解析</strong>
    <p>使用高保真 PDF 解析，完整保留表格、公式、图表和复杂版式。</p>
  </div>
  <div class="rtd-feature-card">
    <strong>独立窗口模式</strong>
    <p>在独立窗口中打开 LLM 助手，提供全尺寸聊天界面和对话历史侧栏。</p>
  </div>
  <div class="rtd-feature-card">
    <strong>文件笔记</strong>
    <p>将研究笔记保存为 Markdown 文件，可写入 Obsidian、Logseq 或任意本地笔记目录，并保留元数据、引用和图表。</p>
  </div>
  <div class="rtd-feature-card">
    <strong>可自定义技能</strong>
    <p>8 个内置技能引导 Agent 针对常见任务采用合适工作流，支持通过 Markdown 文件创建自定义技能。</p>
  </div>
</div>

---

## 最新更新

- **Codex App Server（推荐）**：ChatGPT Plus 订阅用户应优先使用新的 `Codex App Server` 认证方式，通过官方本地 `codex app-server` 流程免 API 密钥调用 `gpt-5.4` 等 Codex 模型。旧的直连后端方式仍作为 `Codex Auth (Legacy)` 保留给现有用户。最初的 Codex Auth 集成由 [@jianghao-zhang](https://github.com/jianghao-zhang) 贡献；新的 Codex App Server 集成由 [@boltma](https://github.com/boltma) 设计。详见 [Codex 配置](#codex-配置chatgpt-plus-订阅用户)。
- **Agent 动作支持灵活论文范围**：`auto_tag` 和 `complete_metadata` 现在可作用于当前论文、已选择论文、已选择文集或整个文库，并在批量变更前打开审阅卡片。
- **文件笔记**：笔记目录不再硬编码为 Obsidian。您可以配置任意本地 Markdown 目录，包括 Obsidian、Logseq 或普通文件夹。详见 [文件笔记](#文件笔记)。
- **独立窗口笔记编辑修复**：独立窗口现在会在上下文区域保留当前笔记编辑状态。
- **Claude/Anthropic 兼容性修复**：更新了 Anthropic 消息顺序，并加入 Claude Opus 4.7 支持。
- **Skills 技能系统**：可自定义的引导文件会影响 Agent 的任务处理方式。内置 8 个技能，并支持创建自定义技能。详见 [Skills 技能系统](#skills-技能系统)。
- **MinerU PDF 解析**：高保真提取可更准确地保留表格、公式和图表。

---

## 安装

1. **下载最新的 `.xpi` 安装包**
   前往 [Releases 页面](https://github.com/yilewang/llm-for-zotero/releases) 下载最新的 `.xpi` 文件。

2. **在 Zotero 中安装插件**
   打开 Zotero &rarr; `工具` &rarr; `附加组件` &rarr; 点击齿轮图标 &rarr; **从文件安装附加组件** &rarr; 选择 `.xpi` 文件。

3. **重启 Zotero**
   重启 Zotero 完成安装。插件会在每次启动时自动检查更新。

<div class="rtd-tip">
  <div class="rtd-admonition-title">提示</div>
  本插件同时支持 <strong>Zotero 7</strong> 和 <strong>Zotero 8</strong>，请确保您运行的是兼容版本。
</div>

---

## 配置

打开 **首选项** &rarr; 切换到 **llm-for-zotero** 标签页。

1. 选择您的**服务商**（如 OpenAI、Gemini、DeepSeek）。
2. 填写 **API 基础 URL**、**API 密钥** 和**模型名称**。
3. 点击 **测试连接** 以验证配置。

<img src="/images/llm-for-zotero/model_setting.gif" alt="服务商与模型配置动图">

### 支持的服务商与协议

插件原生支持以下五种服务商协议：

| 协议 | 说明 | 主要功能 |
|---|---|---|
| `responses_api` | OpenAI Responses API | 流式输出、工具调用、文件上传、多模态 |
| `openai_chat_compat` | OpenAI 兼容聊天 API | 流式输出、工具调用、多模态 |
| `anthropic_messages` | Anthropic Messages API | 流式输出、工具调用、多模态 |
| `gemini_native` | Google Gemini API | 流式输出、工具调用、多模态 |
| `codex_responses` | Codex App Server / Codex Auth (Legacy) | ChatGPT Plus 订阅用户可免单独 API 密钥使用 Codex 模型，推荐选择 Codex App Server |

### 支持的模型

| API 地址 | 模型 | 推理等级 | 备注 |
|---|---|---|---|
| `https://api.openai.com/v1/responses` | gpt-5.4 | default, low, medium, high, xhigh | 支持 PDF 上传 |
| `https://api.openai.com/v1/responses` | gpt-5.4-pro | medium, high, xhigh | 支持 PDF 上传 |
| `https://api.deepseek.com/v1` | deepseek-chat | default | |
| `https://api.deepseek.com/v1` | deepseek-reasoner | default | |
| `https://generativelanguage.googleapis.com` | gemini-3-pro-preview | low, high | |
| `https://generativelanguage.googleapis.com` | gemini-2.5-flash | medium | |
| `https://generativelanguage.googleapis.com` | gemini-2.5-pro | default, low, high | |
| `https://api.moonshot.ai/v1` | kimi-k2.5 | default | |

任何提供 **OpenAI 兼容 HTTP API** 的模型均可使用，包括通过 Ollama、LM Studio 或 vLLM 本地部署的模型。

### 多服务商配置

您可以配置**最多 10 个服务商组**，每组包含多个模型，从而：

- 用多模态模型解读图表，用文本模型生成摘要。
- 通过多个模型交叉验证答案，获得更全面的理解。
- 在对话中随时通过模型选择器切换模型。

### 推理等级与超参数

对于支持的模型，您可以为每次请求设置**推理等级**：`default`、`low`、`medium`、`high` 或 `xhigh`，用于控制模型在回答前的思考深度。

其他可调参数：

| 参数 | 说明 | 默认值 |
|---|---|---|
| Temperature | 控制输出随机性（0 = 确定性，2 = 创意性） | 1.0 |
| 最大输出 Token 数 | 限制模型回复长度 | 2048 |
| 输入 Token 上限 | 限制发送给模型的上下文大小 | 模型默认值 |
| 系统提示词 | 每次请求前置的自定义指令 | — |

---

## 使用指南

1. 在 Zotero 阅读器中**打开任意 PDF**。
2. **点击右侧工具栏中的 LLM 助手图标**以打开侧栏。
3. **输入问题**，例如*"这篇论文的主要结论是什么？"*

首条消息会将整篇论文作为上下文加载，后续问题则通过检索定位相关段落，保持对话快速且精准。

### 对话模式

插件支持三种对话模式：

| 模式 | 说明 |
|---|---|
| **论文对话** | 针对当前打开的 PDF 进行对话，上下文来自该论文。 |
| **全局对话** | 覆盖整个文库的对话，不限定于某篇论文。 |
| **笔记对话** | 编辑 Zotero 笔记时进行对话，以笔记内容为上下文。 |

### 界面控件

- **模型选择器** — 在对话中随时切换已配置的模型。
- **推理等级选择器** — 为当前请求选择推理深度。
- **字体缩放** — 将侧栏字体大小从 80% 调整至 180%。
- **自动滚动** — 自动滚动至最新消息。
- **Token 用量** — 实时显示输入、输出及推理 Token 消耗。

---

## 带引用跳转的有据答案

<img src="/images/llm-for-zotero/citation_jump.gif" alt="一键从 AI 引用跳转到论文原文">

提问时，模型会生成**基于论文内容**的答案，每条结论均附有引用——点击即可跳转到 PDF 中的原始段落，方便核实答案并快速定位相关章节。

---

## 论文摘要生成

<img src="/images/llm-for-zotero/summarize.gif" alt="侧栏中即时生成论文摘要">

数秒内为任意论文生成简洁摘要。摘要基于完整 PDF 全文生成，您可以自定义提示词，聚焦于研究方法、结果、启示或其他任何方面。

---

## 选中文本解释

<img src="/images/llm-for-zotero/text.gif" alt="模型对选中文本进行解释">

选中 PDF 中任意复杂段落或专业术语，请模型为其解释。您最多可添加 **5 条上下文**（来自论文或之前的回答）以进一步细化解释。

可选弹窗会自动建议将选中文本添加到对话，不喜欢可在设置中关闭。

---

## 图表解读

<img src="/images/llm-for-zotero/screenshot.gif" alt="基于截图的图表解读">

截取任意图形、图表或示意图，请模型进行解读。每次最多支持 **10 张截图**，适合分析复杂的多面板图表或跨章节对比视觉内容。

<div class="rtd-tip">
  <div class="rtd-admonition-title">提示</div>
  解读图表时，建议使用支持图像输入的多模态模型（如 GPT-4o、Gemini Pro、Claude）以获得最佳效果。
</div>

---

## 跨论文对比

<img src="/images/llm-for-zotero/multi.gif" alt="使用斜杠命令进行跨论文对比">

在不同标签页中打开多篇论文，并排对比。在输入框中输入 **`/`** 可引用其他已打开的论文作为额外上下文，单次对话最多可引用 **10 篇论文**，实现深度跨文献分析。

---

## 外部文档上传

<img src="/images/llm-for-zotero/upload_files.gif" alt="上传外部文件作为额外上下文">

从本地磁盘上传文档作为额外上下文，支持格式：

- **PDF**（每个文件最大 50 MB）
- **DOCX**（Word 文档）
- **PPTX**（PowerPoint 演示文稿）
- **TXT**（纯文本）
- **Markdown**（.md 文件）

---

## 保存至笔记

<img src="/images/llm-for-zotero/save_notes.gif" alt="将模型回答保存到 Zotero 笔记">

一键将任意回答或选中文本直接保存到 **Zotero 笔记**，与您现有的笔记工作流无缝集成，无需手动复制粘贴。

---

## 对话历史与导出

<img src="/images/llm-for-zotero/save_chat.gif" alt="将对话导出到 Zotero 笔记">

对话会**自动保存**到本地并与对应论文关联。您可以：

- 在历史记录面板中浏览过往对话。
- 将**完整对话**以 Markdown 格式导出到 Zotero 笔记。
- 导出内容包含选中文本、截图，以及正确渲染的 LaTeX 数学公式。

---

## 自定义快捷预设

<img src="/images/llm-for-zotero/shortcuts.gif" alt="自定义快捷预设配置">

创建**最多 10 个自定义预设**，将常用提示词一键触发。内置预设包括：

- **总结** — 生成简洁摘要
- **关键要点** — 提取主要发现
- **研究方法** — 描述研究方法
- **局限性** — 识别不足或局限

您可以修改这些预设或添加自定义内容，以适配您的研究工作流。

---

## 独立窗口模式

<img src="/images/llm-for-zotero/standalone_window.png" alt="LLM 助手独立窗口">

在独立窗口中打开 LLM 助手，脱离 Zotero 阅读器侧栏。独立窗口提供全尺寸聊天界面，左侧配有可折叠的对话历史面板。

### 打开方式

| 方式 | 操作 |
|---|---|
| **快捷键** | `Ctrl+Shift+L`（macOS：`Cmd+Shift+L`） |

### 功能特点

- **论文对话与文库对话** &mdash; 通过顶部标签页切换论文级对话和文库级对话。
- **对话历史** &mdash; 在可折叠的左侧面板中按日期分组（今天、昨天、最近 7/30 天、更早）浏览历史对话。
- **功能完全一致** &mdash; 阅读器侧栏中的所有功能（截图、文件上传、Agent 模式、快捷预设、引用选择器）在独立窗口中均可正常使用。
- **搜索** &mdash; 通过搜索浮层快速查找历史对话。

独立窗口打开时，阅读器侧栏面板会显示占位提示，提供**聚焦窗口**（将独立窗口置于前台）和**关闭窗口并返回侧栏**两个选项。

---

## 文件笔记

除了 Zotero 内置笔记外，Agent 还可以将研究笔记保存为您指定本地目录中的 Markdown 文件。插件**不绑定任何特定笔记软件**：可以指向 Obsidian 知识库、Logseq 图谱，或普通 `.md` 文件夹。

### 配置

打开 **首选项** &rarr; **llm-for-zotero**，滚动到 **Notes Directory** 部分。

<img src="/images/llm-for-zotero/outside_notes.png" alt="笔记目录设置" style="max-width:512px;">

| 设置项 | 说明 | 示例 |
|---|---|---|
| **Nickname** | 在聊天中称呼该目录的名称；当您提到这个名称时，Agent 会识别它 | `Obsidian`、`Logseq` |
| **Notes Directory Path** | 保存笔记的根目录绝对路径 | `/Users/me/MyVault` |
| **Default Folder** | 新笔记默认写入的子文件夹；如果您明确要求，Agent 也可以写入其他文件夹 | `Logs` |
| **Attachments Folder** | 复制图表和图片的目录，相对于笔记目录根路径 | `Logs/imgs` |

点击 **Test Write Access** 验证插件是否有权限写入该目录。

### 工作原理

使用您配置的昵称要求 Agent 写笔记，例如*"总结这篇论文并保存到 Obsidian"* 或 *"把这篇记录到我的 Logseq"*。Agent 将：

1. **采集内容**：从论文中提取元数据、摘要、关键要点，并在可用时加入图表。
2. **编写 Markdown 笔记**：遵循 `write-note` 技能中的约定。
3. **添加 YAML 前置信息**：匹配 `write-note` 模板中的 `title`、`created`、`tags`、`citekey`、`doi`、`journal`；作者信息保留在正文中。
4. **复制图表**（按需）：将 MinerU 解析的 PDF 图表复制到附件文件夹。
5. **写入笔记**：保存到 `{notes_directory}/{default_folder}/{title}.md`。

<img src="/images/llm-for-zotero/obsidian_example.png" alt="Obsidian 中渲染的 Zotero 论文笔记">

笔记使用 [Pandoc 引用语法](https://pandoc.org/MANUAL.html#citations)（`[@citekey]`），兼容 Obsidian 的 Zotero Integration 和 Pandoc 插件，也适用于大多数 Markdown 阅读器。

<div class="rtd-tip">
  <div class="rtd-admonition-title">提示</div>
  笔记模板和图表嵌入规则位于 <code>write-note</code> 技能中。打开独立窗口中的 Skills 面板即可自定义。
</div>

---

## Agent 模式（Beta）

<div class="rtd-warning">
  <div class="rtd-admonition-title">注意</div>
  Agent 模式默认禁用。请在<strong>首选项</strong>中启用，然后在上下文栏中切换 <strong>Agent (beta)</strong>。
</div>

启用后，LLM 将成为一个**自主 Agent**，可在 Zotero 文库中执行读取、搜索和写入操作。读取工具可直接运行；写入工具会进入确认卡片，并支持撤销。

### 文库与 PDF 读取工具

这些工具让 Agent 浏览您的文库、PDF、附件和在线学术资源，不会修改任何内容。

| 工具 | 说明 |
|---|---|
| `query_library` | 发现 Zotero 条目和文集：搜索或列举任意条目类型，可按作者、年份、文集、条目类型或标签筛选，浏览文集树，查找相关论文和重复项 |
| `read_library` | 读取一个或多个条目的结构化状态：元数据、笔记、注释、附件和文集归属 |
| `read_paper` | 读取 PDF 文本内容，默认读取开篇章节，也可指定章节索引；单次最多 20 篇论文 |
| `search_paper` | 通过问题在论文中查找证据，返回排序后的相关段落；单次最多 10 篇论文 |
| `view_pdf_pages` | 将 PDF 页面渲染为图像，支持按问题、页码或当前阅读器视图捕获，用于视觉分析 |
| `read_attachment` | 按 Zotero 附件 ID 读取 HTML 快照、文本文件、图片等附件，或将整个文件发送给模型 |
| `search_literature_online` | 从 CrossRef、Semantic Scholar 等在线学术源搜索元数据、推荐、参考文献和引用 |

### 文库写入工具

所有写入工具均需人工确认后方可生效。

| 工具 | 说明 |
|---|---|
| `apply_tags` | 为一篇或多篇论文添加或移除标签 |
| `update_metadata` | 更新标题、作者、DOI、期刊、摘要等元数据字段 |
| `move_to_collection` | 将论文加入或移出文集 |
| `manage_collections` | 创建或删除文集 |
| `manage_attachments` | 删除、重命名或重新链接损坏的附件文件路径 |
| `merge_items` | 合并重复条目：保留主条目，将子项从其他条目移入，并将重复项移至回收站 |
| `trash_items` | 将条目移至回收站 |
| `import_identifiers` | 通过 DOI、ISBN、arXiv ID 或 URL 导入论文 |
| `import_local_files` | 从本地导入文件到 Zotero；Zotero 会为可识别 PDF 自动抓取元数据 |
| `edit_current_note` | 编辑当前 Zotero 笔记，或用纯文本、Markdown、HTML 创建新笔记 |
| `undo_last_action` | 撤销本次对话中最近一次已确认的写入操作 |

### 文件系统与脚本工具

Agent 包含面向本地文件、脚本和 Zotero 运行时自动化的系统级工具。

| 工具 | 说明 |
|---|---|
| `file_io` | 读写本地文件系统中的文本和图片文件，支持 offset/length 局部读取 |
| `run_command` | 在本地机器上执行 Shell 命令（macOS 使用 zsh，Linux 使用 bash，Windows 使用 cmd.exe），适合分析脚本和命令行工具 |
| `zotero_script` | 在 Zotero 运行时内部执行 JavaScript；读取模式用于批量取数，写入模式用于自定义变更 |

**典型使用场景：**

- 运行 Python 或 R 脚本分析从文库中提取的数据。
- 将元数据导出为 CSV/JSON 供外部处理。
- 调用命令行工具（如 `pandoc`、`ffmpeg`、`pdftotext`）作为 Agent 工作流的一部分。
- 动态编写并执行脚本，转换或可视化您的研究数据。
- 读取本地数据文件，并将结果写回 Zotero 笔记。

<div class="rtd-warning">
  <div class="rtd-admonition-title">注意</div>
  终端与文件访问工具在执行前均需确认。Agent 会展示它要执行的命令或文件操作，您必须审批后才会运行。
</div>

### 内置动作

Agent 为常见文库管理工作流提供高级动作，自动串联多个工具。

| 动作 | 功能说明 |
|---|---|
| **文库审计** | 扫描整个文库或某个文集中元数据不完整、缺少 PDF、缺少标签等问题，并可将报告保存为 Zotero 笔记 |
| **自动标签** | 为当前论文、已选择论文、已选择文集或整个文库推荐标签，并打开可编辑的批量标签审阅对话框 |
| **补全元数据** | 审计目标论文缺失的书目信息，从外部源获取规范元数据，并通过一个审阅卡片确认更新 |
| **发现相关文献** | 通过推荐、参考文献或被引关系查找相关论文 |
| **整理未归档条目** | 查找未归档条目，通过交互式审阅流程归入文集 |
| **文献综述** | 启动引导式文献综述工作流 |
| **文库统计** | 汇总文库或文集的条目类型、年份、作者、期刊、文集、标签、注释和增长趋势等统计信息 |

### MCP 服务器

插件运行内置的 **Model Context Protocol (MCP)** 服务器，允许外部 AI Agent 和工具以编程方式与您的 Zotero 文库交互。

- **端点**：`http://localhost:23119/llm-for-zotero/mcp`
- **协议**：JSON-RPC 2.0（MCP v2024-11-05）
- **方法**：`initialize`、`tools/list`、`tools/call`

这意味着您可以将任何兼容 MCP 的 AI Agent（如 Claude Desktop、Cursor、自定义 Agent）连接到您的 Zotero 文库，使用上述所有工具。

### Agent 演示

#### 多步骤工作流

Agent 可以串联多个工具完成复杂任务——例如查找论文、读取元数据、搜索相关文献并撰写摘要笔记。

<img src="/images/llm-for-zotero/agent/multi_steps.gif" alt="多步骤 Agent 工作流" style="max-width:512px;">

#### 直接读取图表

<img src="/images/llm-for-zotero/agent/single_figure.gif" alt="Agent 从 PDF 读取图表">

#### 读取多页内容

<img src="/images/llm-for-zotero/agent/full_docs.gif" alt="Agent 读取多页内容">

#### 查找相关论文

<img src="/images/llm-for-zotero/agent/related_papers.gif" alt="Agent 查找相关论文">

#### 自动应用标签

<img src="/images/llm-for-zotero/agent/apply_tags.gif" alt="Agent 为论文应用标签">

#### 撰写笔记

<img src="/images/llm-for-zotero/agent/write_note.gif" alt="Agent 撰写笔记">

### 安全与审批

所有写入操作均通过**人机协作确认**流程：

- Agent 提出一批变更建议（如添加标签、编辑元数据）。
- 您在审批表单中查看拟定变更。
- 您可以在任何变更生效前选择**批准**、**拒绝**或**修改**。
- 如有问题，使用 `undo_last_action` 进行撤销。
- 终端命令和文件操作同样需要明确审批后才会执行。

---

## Skills 技能系统

<img src="/images/llm-for-zotero/skills.png" alt="Skills 技能管理面板" style="max-width:512px;">

Skills（技能）是可自定义的引导文件，用于调整 Agent 处理不同类型请求的方式。每个技能是一个 Markdown 文件，包含正则表达式触发模式：当您的消息匹配某个技能的模式时，该技能的指令会自动注入 Agent 的系统提示词中，引导它使用最高效的工具和工作流来完成任务。

<div class="rtd-tip">
  <div class="rtd-admonition-title">注意</div>
  Skills 需要启用 <strong>Agent 模式</strong>才能生效，在标准聊天模式下无效。
</div>

### 内置技能

插件内置 **8 个技能**，覆盖常见的研究工作流。首次运行时会自动复制到您的技能文件夹。

| 技能 | 触发场景 | 引导 Agent 执行的操作 |
|---|---|---|
| `simple-paper-qa` | 关于论文的一般性问题（摘要、发现、作者、TLDR） | 读取论文一次后直接回答，避免不必要的检索调用 |
| `evidence-based-qa` | 关于具体方法、结果、数据或论断的问题 | 先读取论文，再通过定向 `search_paper` 检索特定证据 |
| `analyze-figures` | 按编号引用图表、表格或示意图 | 优先使用 MinerU 缓存图像，并将图像直接发送给模型分析 |
| `compare-papers` | 比较或对比多篇论文的请求 | 批量读取论文，再针对比较要点检索证据 |
| `library-analysis` | 总结、分析或审计整个文库的请求 | 使用高效脚本遍历文库条目，而非通过上下文分页 |
| `literature-review` | 文献综述或研究综合的请求 | 发现论文、深度阅读最相关的几篇，并按主题综合 |
| `write-note` | 写作阅读笔记、Zotero 笔记或笔记目录 Markdown 文件的请求 | 生成带元数据、Pandoc 引用和可选图表复制的笔记 |
| `import-cited-reference` | 导入当前 PDF 中引用文献的请求 | 提取参考文献，并将选中的引用论文导入 Zotero |

### 工作原理

1. 在 Agent 模式下发送消息时，插件会将您的文本与每个技能的 `match` 模式进行匹配。
2. 如果技能中的**任何一个**模式匹配成功（OR 语义），该技能的指令会被注入 Agent 的系统提示词中。
3. 多个技能可以同时激活——如果您的消息匹配了多个技能的模式。
4. Agent 将这些指令作为工具选择和工作流的引导——技能教会 Agent **如何**完成任务，而非定义它**能做什么**。

### 创建自定义技能

1. 打开**独立窗口**（`Ctrl+Shift+L` / macOS：`Cmd+Shift+L`）。
2. 点击顶部工具栏中的 **Skills 图标**打开技能管理面板。
3. 点击 **"+ New skill"** 按钮创建模板文件。
4. 模板会在默认文本编辑器中打开，编辑以下三个关键部分：

```
---
id: my-custom-skill
match: /你的正则表达式模式/i
match: /另一个触发模式/i
---

当此技能匹配时，Agent 应遵循的指令。
描述工作流程、优先使用哪些工具以及任何约束条件。
```

{:start="5"}
5. 保存文件。技能会立即加载——无需重启。

**技能文件格式：**

| 字段 | 必需 | 说明 |
|---|---|---|
| `id` | 是 | 技能的唯一标识符 |
| `match` | 是（至少一个） | 正则表达式模式，支持可选标志（`i`、`g`、`m` 等）。可重复——多个 `match` 行使用 OR 语义 |
| 指令正文 | 是 | 结束标记 `---` 之后的 Markdown 文本。技能匹配时会注入 Agent 的系统提示词 |

### 管理技能

- **左键点击**面板中的技能可在默认文本编辑器中打开编辑。
- **右键点击**技能弹出上下文菜单，包含**在文件系统中显示**和**删除**选项。
- 技能以 `.md` 文件形式存储在 `{Zotero数据目录}/llm-for-zotero/skills/` 中。
- 如果您删除了内置技能，它将在重启后保持删除状态——插件尊重您的选择。插件更新中新增的内置技能会自动添加，但不会恢复您已删除的技能。

<div class="rtd-tip">
  <div class="rtd-admonition-title">提示</div>
  您可以通过交换 <code>.md</code> 文件与他人分享自定义技能。将技能文件放入您的技能文件夹，在下次插件启动或在面板中创建/删除任何技能后即会被加载。
</div>

---

## WebChat 配置（ChatGPT 网页同步）

**WebChat 模式**通过浏览器扩展将您的问题直接发送到 [chatgpt.com](https://chatgpt.com)——无需 API 密钥。查询从 Zotero 转发到 ChatGPT 网页界面，回复实时流式传回插件。

### 前置条件

- ChatGPT 账号（免费版、Plus 或 Team 均可）
- Chromium 内核浏览器（Chrome、Edge、Brave、Arc 等）

### 配置步骤

**1. 下载浏览器扩展：**

前往 [github.com/yilewang/sync-for-zotero](https://github.com/yilewang/sync-for-zotero) &rarr; **Releases**，下载最新的 `sync-for-zotero-extension.zip`，解压到电脑上的文件夹。

**2. 安装扩展（侧载）：**

- 打开浏览器，访问 `chrome://extensions`
- 开启右上角的**开发者模式**
- 点击**加载已解压的扩展程序**，选择解压后的扩展文件夹
- "Sync for Zotero" 扩展应出现在扩展列表中

**3. 配置插件：**

打开 Zotero &rarr; **首选项** &rarr; **llm-for-zotero**：

| 设置项 | 值 |
|---|---|
| 认证模式 | `WebChat` |
| 模型 | （自动设为 `chatgpt.com`） |

**4. 开始对话：**

在浏览器中打开一个 ChatGPT 标签页并保持打开。在 Zotero 中，插件面板会显示 "chatgpt.com" 指示器及连接状态点（绿色 = 已连接，红色 = 未检测到）。输入问题并发送即可。

### WebChat 功能

- **PDF 附件** &mdash; 右键点击论文标签切换 PDF 发送状态（紫色 = 发送，灰色 = 跳过）。
- **截图** &mdash; 使用截图按钮将图片上下文附加到消息中。
- **对话历史** &mdash; 点击时钟图标浏览和加载过往 ChatGPT 对话。
- **退出** &mdash; 点击 "Exit" 按钮返回常规 API 模式。

### 技术说明

- 插件在 Zotero 内置端口（23119）上嵌入轻量级 HTTP 中继服务器，浏览器扩展通过轮询该中继交换查询和响应。
- WebChat 模式下禁用 Agent 模式、斜杠命令（`/`）和引用选择器（`@`）。
- 推理/思考模式在 ChatGPT 端控制，而非通过插件的推理切换按钮。

---

## Codex 配置（ChatGPT Plus 订阅用户）

如果您拥有 **ChatGPT Plus** 订阅，可以通过 Codex CLI 登录，在插件中免单独 API 密钥使用 `gpt-5.4` 等 Codex 模型。

插件现在提供两种 Codex 相关模式。新用户应选择 **Codex App Server**。

- **Codex App Server（推荐）**：启动本地 `codex app-server` CLI，并通过 stdio 与其通信。这是第三方应用使用 Codex 的官方方式，也是新用户首选配置。
- **Codex Auth (Legacy)**：直接调用 ChatGPT/Codex Responses 后端。现有用户暂时可以保留该配置，但新用户应选择 `Codex App Server`。

_特别感谢 [@jianghao-zhang](https://github.com/jianghao-zhang) 贡献最初的 Codex Auth 集成，以及 [@boltma](https://github.com/boltma) 设计 Codex App Server 集成。_

### 配置步骤

**1. 安装 Codex CLI**（一次性操作）：

```bash
# macOS / Linux（需要 Node.js 18+）
npm install -g @openai/codex

# macOS 替代方案（无需 Node.js）
brew install --cask codex
```

**2. 登录 ChatGPT 账号：**

```bash
codex login
```

浏览器窗口将自动打开——使用您的 ChatGPT Plus 账号登录。凭据保存至 `~/.codex/auth.json`。

**3. 配置插件：**

在 Zotero &rarr; **首选项** &rarr; **llm-for-zotero** 中：

| 设置项 | 推荐值 |
|---|---|
| 认证模式 | `Codex App Server` |
| API 地址 | 留空 |
| 模型 | 例如 `gpt-5.4` |

点击**测试连接**以验证。

仍需旧方式的现有用户可以选择 `Codex Auth (Legacy)`，API 地址保持 `https://chatgpt.com/backend-api/codex/responses`，模型名称保持不变。

<img src="/images/llm-for-zotero/codex.png" alt="推荐的 Codex App Server 配置截图">

### Codex Auth (Legacy) 技术说明

- 从 `~/.codex/auth.json`（或 `$CODEX_HOME/auth.json`）读取本地凭据。
- 遇到 401 响应时自动尝试刷新 Token。
- 支持本地 PDF 内容定位和截图/图像输入。
- Legacy 直连模式暂不支持嵌入向量和 `/files` 上传流程。

---

## MinerU PDF 解析

**MinerU** 是一款先进的 PDF 解析引擎，可从 PDF 中提取高保真 Markdown，同时保留表格、公式、图表和复杂版式——这些内容在标准文本提取中往往会被破坏。

<img src="https://raw.githubusercontent.com/yilewang/llm-for-zotero/main/assets/minerU.png" alt="MinerU PDF 解析结果截图">

启用后，插件会将 PDF 发送到 MinerU API 进行解析并在本地缓存结果。此后与该论文的所有交互都将使用 MinerU 解析的内容，为模型提供更丰富、更准确的上下文。

### 启用方法

1. 打开 Zotero &rarr; **首选项** &rarr; **llm-for-zotero**。
2. 找到 **MinerU** 部分，勾选**启用 MinerU**。
3. 可选填入您自己的 MinerU API 密钥。
4. 打开任意 PDF 开始对话，插件会在首次使用时解析 PDF 并缓存结果。

### 使用自有 API 密钥

插件提供共享社区代理，开箱即用无需 API 密钥，但共享配额有限。如需更大用量：

1. 前往 [mineru.net](https://mineru.net) 注册账号。
2. 在账号设置中生成 API 密钥。
3. 将密钥粘贴到 Zotero &rarr; **首选项** &rarr; **llm-for-zotero** &rarr; **MinerU**。
4. 点击**测试连接**以验证。

提供个人 API 密钥后，插件将直接调用 `https://mineru.net/api/v4`。未提供密钥时，使用社区代理。

---

## 常见问题

**是否免费使用？**

是的，插件完全免费且开源（AGPL v3）。您只需为调用所选服务商的 API 付费。使用 Codex App Server 认证时，ChatGPT Plus 订阅用户无需单独 API 密钥。

**是否支持本地模型？**

支持——任何提供 OpenAI 兼容 HTTP API 的模型均可使用，包括通过 [Ollama](https://ollama.ai/)、[LM Studio](https://lmstudio.ai/)、[vLLM](https://docs.vllm.ai/) 等工具本地部署的模型。在设置中填写本地 API 地址和模型名称即可。

**我的数据是否会用于训练模型？**

不会。您使用自己的 API 密钥，数据隐私由您所选服务商的条款约束。大多数 API 服务商（如 OpenAI、Anthropic）不会将 API 数据用于模型训练。

**能否同时使用多个模型？**

可以。配置最多 10 个服务商组，每组包含多个模型，通过模型选择器在对话中随时切换。

**上下文检索是如何工作的？**

首条消息会加载论文全文作为上下文，后续问题使用**混合检索**（BM25 + 嵌入向量搜索）并结合多样性优化，定位最相关段落，保持响应快速准确。

**如何报告 Bug 或提交功能请求？**

请在 GitHub 上 [提交 Issue](https://github.com/yilewang/llm-for-zotero/issues)。

---

## 贡献与支持

欢迎贡献！无论是 Bug 反馈、功能请求还是 Pull Request——欢迎在 [GitHub](https://github.com/yilewang/llm-for-zotero) 上提交 Issue 或 PR。

如果本插件对您有帮助，欢迎：
- 在 [GitHub](https://github.com/yilewang/llm-for-zotero) 上给个 Star ⭐
- [请我喝杯咖啡](https://buymeacoffee.com/yat.lok)
- 通过支付宝扫码捐赠：

<img src="/images/llm-for-zotero/alipay.png" alt="支付宝捐赠二维码" style="max-width:200px;">

---

## Star 趋势

[![Star History Chart](https://api.star-history.com/image?repos=yilewang/llm-for-zotero&type=date&legend=top-left)](https://www.star-history.com/?repos=yilewang%2Fllm-for-zotero&type=date&legend=top-left)
