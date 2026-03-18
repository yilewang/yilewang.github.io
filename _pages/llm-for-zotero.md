---
layout: docs
title: "LLM for Zotero — Documentation"
permalink: /llm-for-zotero/
author_profile: false
---

<h1 id="overview">LLM for Zotero</h1>

<div class="rtd-badges">
  <a href="https://www.zotero.org"><img src="https://img.shields.io/badge/Zotero-7-green?style=flat-square&logo=zotero&logoColor=CC2936" alt="Zotero 7"></a>
  <a href="https://www.zotero.org"><img src="https://img.shields.io/badge/Zotero-8-green?style=flat-square&logo=zotero&logoColor=CC2936" alt="Zotero 8"></a>
  <a href="https://www.gnu.org/licenses/agpl-3.0"><img src="https://img.shields.io/badge/License-AGPL_v3-blue.svg?style=flat-square" alt="AGPL v3"></a>
  <a href="https://github.com/yilewang/llm-for-zotero/releases"><img src="https://img.shields.io/github/v/release/yilewang/llm-for-zotero?style=flat-square" alt="Latest release"></a>
  <a href="https://github.com/yilewang/llm-for-zotero/stargazers"><img src="https://img.shields.io/github/stars/yilewang/llm-for-zotero?style=flat-square" alt="GitHub Stars"></a>
</div>

**llm-for-zotero** is a free, open-source plugin for [Zotero](https://www.zotero.org/) that brings Large Language Models directly into the PDF reader. Unlike tools that require uploading PDFs to a web portal, this plugin lets you chat with your papers *without leaving Zotero*. It sits quietly in the reader sidebar — your standby research assistant, ready whenever you need it.

<img src="/images/llm-for-zotero/demo.png" alt="Screenshot of the llm-for-zotero sidebar inside the Zotero PDF reader">

<div class="rtd-feature-grid">
  <div class="rtd-feature-card">
    <strong>Chat with Papers</strong>
    <p>Ask questions about any open PDF. Answers are grounded in the paper with clickable citations.</p>
  </div>
  <div class="rtd-feature-card">
    <strong>Multi-Provider Support</strong>
    <p>OpenAI, Anthropic, Google Gemini, DeepSeek, local models — use any LLM you prefer.</p>
  </div>
  <div class="rtd-feature-card">
    <strong>Agent Mode</strong>
    <p>Let the LLM autonomously search, tag, organize, and annotate your entire Zotero library.</p>
  </div>
  <div class="rtd-feature-card">
    <strong>Privacy-First</strong>
    <p>Uses your own API keys. No data is sent to third-party portals — privacy governed by your provider.</p>
  </div>
</div>

---

## Installation

1. **Download the latest `.xpi` release**
   Go to the [Releases Page](https://github.com/yilewang/llm-for-zotero/releases) and download the latest `.xpi` file.

2. **Install the add-on in Zotero**
   Open Zotero &rarr; `Tools` &rarr; `Add-ons` &rarr; click the gear icon &rarr; **Install Add-on From File** &rarr; select the `.xpi` file.

3. **Restart Zotero**
   Restart Zotero to complete the installation. The plugin automatically checks for future updates on startup.

<div class="rtd-tip">
  <div class="rtd-admonition-title">Tip</div>
  The plugin supports both <strong>Zotero 7</strong> and <strong>Zotero 8</strong>. Make sure you are running a compatible version.
</div>

---

## Configuration

Open **Preferences** &rarr; navigate to the **llm-for-zotero** tab.

1. Select your **Provider** (e.g. OpenAI, Gemini, DeepSeek).
2. Paste your **API Base URL**, **API key**, and **model name**.
3. Click **Test Connection** to verify.

<img src="/images/llm-for-zotero/model_setting.gif" alt="Provider and model configuration">

### Supported Providers & Protocols

The plugin natively supports five provider protocols:

| Protocol | Description | Key Capabilities |
|---|---|---|
| `responses_api` | OpenAI Responses API | Streaming, tool calls, file uploads, multimodal |
| `openai_chat_compat` | OpenAI-compatible chat APIs | Streaming, tool calls, multimodal |
| `anthropic_messages` | Anthropic Messages API | Streaming, tool calls, multimodal |
| `gemini_native` | Google Gemini API | Streaming, tool calls, multimodal |
| `codex_responses` | ChatGPT/Codex auth | ChatGPT Plus integration, no separate API key |

### Supported Models

| API URL | Model | Reasoning Levels | Notes |
|---|---|---|---|
| `https://api.openai.com/v1/responses` | gpt-5.4 | default, low, medium, high, xhigh | PDF uploads supported |
| `https://api.openai.com/v1/responses` | gpt-5.4-pro | medium, high, xhigh | PDF uploads supported |
| `https://api.deepseek.com/v1` | deepseek-chat | default | |
| `https://api.deepseek.com/v1` | deepseek-reasoner | default | |
| `https://generativelanguage.googleapis.com` | gemini-3-pro-preview | low, high | |
| `https://generativelanguage.googleapis.com` | gemini-2.5-flash | medium | |
| `https://generativelanguage.googleapis.com` | gemini-2.5-pro | default, low, high | |
| `https://api.moonshot.ai/v1` | kimi-k2.5 | default | |

Any model that exposes an **OpenAI-compatible HTTP API** also works — including locally hosted models via tools like Ollama, LM Studio, or vLLM.

### Multiple Providers

You can configure **up to 10 provider groups**, each with multiple models. This lets you:

- Use a multimodal model for figure interpretation and a text model for summaries.
- Cross-check answers across different models for more comprehensive understanding.
- Switch models mid-conversation from the model selector dropdown.

### Reasoning Levels & Hyperparameters

For models that support it, you can set **reasoning levels** per request: `default`, `low`, `medium`, `high`, or `xhigh`. This controls how deeply the model thinks before answering.

Additional per-model settings include:

| Parameter | Description | Default |
|---|---|---|
| Temperature | Controls output randomness (0 = deterministic, 2 = creative) | 1.0 |
| Max output tokens | Limit the length of model responses | 2048 |
| Input token cap | Restrict the context size sent to the model | Model default |
| System prompt | Custom instructions prepended to every request | — |

---

## Usage Guide

1. **Open any PDF** in the Zotero reader.
2. **Click the LLM Assistant icon** in the right-hand toolbar to open the sidebar.
3. **Type a question** such as *"What is the main conclusion of this paper?"*

On the first message, the model loads the full paper content as context. Follow-up questions use focused retrieval from the same paper, keeping the conversation fast and relevant.

### Conversation Modes

The plugin supports three distinct conversation modes:

| Mode | Description |
|---|---|
| **Paper conversation** | Chat about a specific open PDF. Context is drawn from that paper. |
| **Global conversation** | Library-wide chat, not tied to any specific paper. |
| **Note conversation** | Chat while editing a Zotero note, with note content as context. |

### Interface Controls

- **Model selector** — switch between configured models mid-conversation.
- **Reasoning selector** — choose the reasoning level for the current request.
- **Font scaling** — adjust sidebar font size from 80% to 180%.
- **Auto-scroll** — automatically scrolls to the latest message.
- **Token usage** — real-time display of input, output, and reasoning tokens consumed.

---

## Grounded Answers with Citation Navigation

<img src="/images/llm-for-zotero/citation_jump.gif" alt="One-click jump from an AI citation to the paper source">

When you ask a question, the model generates answers **grounded in the paper's content**. Each claim is backed by a citation — click any citation to jump straight to the source passage in the PDF. This makes it easy to verify answers and find relevant sections.

---

## Paper Summarization

<img src="/images/llm-for-zotero/summarize.gif" alt="Instant paper summary in the sidebar">

Get a concise summary of any paper in seconds. The summary is generated from the full text of the open PDF. You can customize the summary prompt to focus on specific aspects — methodology, results, implications, or anything else.

---

## Selected Text Explanation

<img src="/images/llm-for-zotero/text.gif" alt="Selected text being explained by the model">

Select any complex paragraph or technical term in the PDF and ask the model to explain it. You can add **up to 5 pieces of context** from the paper or previous answers to refine the explanation.

An optional pop-up automatically suggests adding selected text to the chat. This can be disabled in settings if you prefer manual control.

---

## Figure Interpretation

<img src="/images/llm-for-zotero/screenshot.gif" alt="Screenshot-based figure interpretation">

Take a screenshot of any figure, chart, or diagram and ask the model to interpret it. The plugin supports **up to 10 screenshots** at a time, making it easy to analyze complex multi-panel figures or compare visuals across sections.

<div class="rtd-tip">
  <div class="rtd-admonition-title">Tip</div>
  For best results with figures, use a multimodal model (e.g. GPT-4o, Gemini Pro, Claude) that supports image inputs.
</div>

---

## Cross-Paper Comparison

<img src="/images/llm-for-zotero/multi.gif" alt="Cross-paper comparison using the slash command">

Open multiple papers in different tabs and compare them side by side. Type **`/`** in the chat input to cite another open paper as additional context. You can reference **up to 10 papers** in a single conversation, enabling rich cross-paper analysis.

---

## External Document Upload

<img src="/images/llm-for-zotero/upload_files.gif" alt="External file upload for additional context">

Upload documents from your local drive as additional context. Supported formats:

- **PDF** (up to 50 MB per file)
- **DOCX** (Word documents)
- **PPTX** (PowerPoint presentations)
- **TXT** (plain text)
- **Markdown** (.md files)

---

## Save to Notes

<img src="/images/llm-for-zotero/save_notes.gif" alt="Model answers saved to Zotero notes">

Save any answer or selected text directly to your **Zotero notes** with one click. This integrates seamlessly with your existing note-taking workflow — no copy-pasting required.

---

## Conversation History & Export

<img src="/images/llm-for-zotero/save_chat.gif" alt="Conversation export to Zotero notes">

Conversations are **automatically saved** locally and associated with the paper you're reading. You can:

- Browse past conversations from the history panel.
- **Export entire conversations** to Zotero notes in Markdown format.
- Exported notes include selected text, screenshots, and properly rendered LaTeX equations.

---

## Custom Quick-Action Presets

<img src="/images/llm-for-zotero/shortcuts.gif" alt="Custom quick-action preset configuration">

Create **up to 10 custom presets** for frequently used prompts — available at the tap of a button. Built-in presets include:

- **Summarize** — generate a concise summary
- **Key Points** — extract main findings
- **Methodology** — describe the research methods
- **Limitations** — identify weaknesses or gaps

You can customize these or add your own to match your research workflow.

---

## Agent Mode (Beta)

<div class="rtd-warning">
  <div class="rtd-admonition-title">Important</div>
  Agent Mode is disabled by default. Enable it in <strong>Preferences</strong>, then toggle <strong>Agent (beta)</strong> in the context bar.
</div>

When enabled, the LLM becomes an **autonomous agent** that can read, search, and write within your Zotero library. It operates with a human-in-the-loop design — all write operations require your explicit approval before execution.

### Available Tools

| Tool | Description |
|---|---|
| `query_library` | Search and list Zotero items, collections, related papers, and duplicates |
| `read_library` | Read metadata, notes, annotations, attachments, and collection details |
| `inspect_pdf` | Read front matter, search pages, retrieve evidence, inspect the active reader view |
| `search_literature_online` | Search live scholarly sources (Crossref, Semantic Scholar, arXiv, PubMed, and more) or fetch external metadata |
| `mutate_library` | Batch write operations — metadata edits, tagging, collection management, note writing, paper imports |
| `undo_last_action` | Revert the last approved write batch |

The design philosophy is **fewer, more general tools** rather than a long list of task-specific ones. Ask the agent what it can do — it will tell you.

### Built-in Actions

The agent comes with several pre-built workflows:

| Action | What it does |
|---|---|
| **Audit Library** | Checks your library for quality and completeness issues |
| **Sync Metadata** | Synchronizes and updates paper metadata from online sources |
| **Organize Unfiled** | Sorts unfiled papers into appropriate collections |
| **Auto Tag** | Automatically generates and applies relevant tags |
| **Discover Related** | Finds related papers in your library or online |

### Agent Demos

#### Multi-step workflow

The agent can chain multiple tools together to accomplish complex tasks — for example, finding a paper, reading its metadata, searching for related work, and writing a summary note.

<img src="/images/llm-for-zotero/agent/multi_steps.gif" alt="Multi-step agent workflow" style="max-width:512px;">

#### Read a figure directly

<img src="/images/llm-for-zotero/agent/single_figure.gif" alt="Agent reading a figure from the PDF">

#### Read multiple pages

<img src="/images/llm-for-zotero/agent/full_docs.gif" alt="Agent reading multiple pages">

#### Find related papers

<img src="/images/llm-for-zotero/agent/related_papers.gif" alt="Agent finding related papers">

#### Apply tags automatically

<img src="/images/llm-for-zotero/agent/apply_tags.gif" alt="Agent applying tags to a paper">

#### Write a note

<img src="/images/llm-for-zotero/agent/write_note.gif" alt="Agent writing a note">

### Safety & Confirmation

All write operations go through a **human-in-the-loop confirmation** workflow:

- The agent proposes a batch of changes (e.g. add tags, edit metadata).
- You review the proposed changes in a rich approval form.
- You can **approve**, **reject**, or **modify** before any changes are applied.
- If something goes wrong, use `undo_last_action` to revert.

---

## Codex Auth Setup

If you have a **ChatGPT Plus** subscription, you can use **Codex auth** to access models like `gpt-5.4` without a separate API key. The plugin reuses your ChatGPT login via the Codex CLI.

### Step-by-step setup

**1. Install the Codex CLI** (one-time):

```bash
# macOS / Linux (requires Node.js 18+)
npm install -g @openai/codex

# macOS alternative (no Node.js needed)
brew install --cask codex
```

**2. Log in with your ChatGPT account:**

```bash
codex login
```

A browser window opens — sign in with your ChatGPT Plus account. Credentials are saved to `~/.codex/auth.json`.

**3. Configure the plugin:**

In Zotero &rarr; **Preferences** &rarr; **llm-for-zotero**:

| Setting | Value |
|---|---|
| Auth Mode | `codex auth` |
| API URL | `https://chatgpt.com/backend-api/codex/responses` |
| Model | e.g. `gpt-5.4` |

Click **Test Connection** to verify.

<img src="/images/llm-for-zotero/codex.png" alt="Codex auth configuration">

### Technical Notes

- Reads local credentials from `~/.codex/auth.json` (or `$CODEX_HOME/auth.json`).
- Automatically attempts token refresh on 401 responses.
- Local PDF grounding and screenshot inputs are supported.
- Embeddings and the `/files` upload flow are not yet supported in Codex auth mode.

---

## Frequently Asked Questions

**Is it free to use?**

Yes, the plugin is completely free and open source (AGPL v3). You only pay for API calls to your chosen provider. With Codex auth, ChatGPT Plus subscribers can use their existing subscription without a separate API key.

**Does it work with local models?**

Yes — any model that provides an OpenAI-compatible HTTP API works. This includes models served via [Ollama](https://ollama.ai/), [LM Studio](https://lmstudio.ai/), [vLLM](https://docs.vllm.ai/), or any other compatible server. Just enter the local API URL and model name in settings.

**Is my data used to train models?**

No. You use your own API key, so data privacy is governed by the terms of your chosen provider. Most API providers (e.g. OpenAI, Anthropic) do not use API data for model training.

**Can I use multiple models at the same time?**

Yes. Configure up to 10 provider groups, each with multiple models. Switch between models mid-conversation using the model selector dropdown.

**How does context retrieval work?**

On the first message about a paper, the plugin loads the full text as context. Follow-up questions use **hybrid retrieval** (BM25 + embedding-based search) with diversity optimization to find the most relevant passages, keeping responses fast and accurate.

**How do I report a bug or request a feature?**

Please [open an issue](https://github.com/yilewang/llm-for-zotero/issues) on GitHub.

---

## Contributing & Support

Contributions are welcome! Whether it's bug reports, feature requests, or pull requests — feel free to [open an issue](https://github.com/yilewang/llm-for-zotero/issues) or submit a PR on [GitHub](https://github.com/yilewang/llm-for-zotero).

If you find this plugin helpful, consider:
- Leaving a star on [GitHub](https://github.com/yilewang/llm-for-zotero)
- [Buying me a coffee](https://buymeacoffee.com/yat.lok)
