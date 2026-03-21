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
    <p>让 LLM 自主搜索、标记、整理并注释您整个 Zotero 文库。</p>
  </div>
  <div class="rtd-feature-card">
    <strong>MinerU PDF 解析</strong>
    <p>使用高保真 PDF 解析，完整保留表格、公式、图表和复杂版式。</p>
  </div>
</div>

---

## 最新更新

- **Agent 模式（Beta）**：LLM-for-Zotero 现在可以作为自主 Agent 在您的 Zotero 文库中工作。
- **Codex 认证**：ChatGPT Plus 订阅用户可以使用 `gpt-5.4` 等 Codex 模型，无需单独的 API 密钥。
- **MinerU PDF 解析**：高保真提取现可更准确地保留表格、公式和图表。
- **更名**：插件现已更名为 `llm-for-zotero`。

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
| `codex_responses` | ChatGPT/Codex 认证 | ChatGPT Plus 直连，无需单独 API 密钥 |

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

## Agent 模式（Beta）

<div class="rtd-warning">
  <div class="rtd-admonition-title">注意</div>
  Agent 模式默认禁用。请在<strong>首选项</strong>中启用，然后在上下文栏中切换 <strong>Agent (beta)</strong>。
</div>

启用后，LLM 将成为一个**自主 Agent**，可在您的 Zotero 文库中执行读取、搜索和写入操作。采用人机协作设计——所有写入操作均需您明确审批后方可执行。

### 可用工具

| 工具 | 说明 |
|---|---|
| `query_library` | 搜索和列举 Zotero 条目、文集、相关论文及重复项 |
| `read_library` | 读取元数据、笔记、注释、附件及文集详情 |
| `inspect_pdf` | 读取前置内容、搜索页面、提取证据、检查当前阅读器视图 |
| `search_literature_online` | 搜索在线学术资源（Crossref、Semantic Scholar、arXiv、PubMed 等）或获取外部元数据 |
| `mutate_library` | 批量写入操作——元数据编辑、标签管理、文集管理、笔记写入、文献导入 |
| `undo_last_action` | 撤销上一次已审批的写入批次 |

设计理念是**少而通用的工具**，而非一长串特定任务工具。直接问 Agent 它能做什么——它会告诉您。

### 内置动作

最新版本强调通用工具而非固定的动作菜单。常见 Agent 工作流包括：

| 动作 | 功能说明 |
|---|---|
| **检查论文** | 读取元数据、笔记、注释和基于 PDF 的证据 |
| **查找相关文献** | 在文库或在线学术资源中搜索相关论文 |
| **应用标签** | 起草标签变更，经您批准后批量应用 |
| **撰写笔记** | 准备与当前论文关联的笔记或摘要 |
| **撤销变更** | 撤销最近一次已审批的写入批次 |

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

<img src="https://raw.githubusercontent.com/yilewang/llm-for-zotero/main/assets/agent/write_note.png" alt="Agent 撰写笔记">

### 安全与审批

所有写入操作均通过**人机协作确认**流程：

- Agent 提出一批变更建议（如添加标签、编辑元数据）。
- 您在审批表单中查看拟定变更。
- 您可以在任何变更生效前选择**批准**、**拒绝**或**修改**。
- 如有问题，使用 `undo_last_action` 进行撤销。

---

## Codex 认证配置

如果您拥有 **ChatGPT Plus** 订阅，可以使用 **Codex 认证**免 API 密钥访问 `gpt-5.4` 等模型。插件通过 Codex CLI 复用您的 ChatGPT 登录凭据。

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

| 设置项 | 值 |
|---|---|
| 认证模式 | `codex auth` |
| API 地址 | `https://chatgpt.com/backend-api/codex/responses` |
| 模型 | 例如 `gpt-5.4` |

点击**测试连接**以验证。

<img src="/images/llm-for-zotero/codex.png" alt="Codex 认证配置截图">

### 技术说明

- 从 `~/.codex/auth.json`（或 `$CODEX_HOME/auth.json`）读取本地凭据。
- 遇到 401 响应时自动尝试刷新 Token。
- 支持本地 PDF 内容定位和截图/图像输入。
- Codex 认证模式暂不支持嵌入向量和 `/files` 上传流程。

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

是的，插件完全免费且开源（AGPL v3）。您只需为调用所选服务商的 API 付费。使用 Codex 认证时，ChatGPT Plus 订阅用户无需单独 API 密钥。

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
