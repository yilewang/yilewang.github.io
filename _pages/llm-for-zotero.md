---
layout: single
title: "LLM for Zotero — Documentation"
permalink: /llm-for-zotero/
author_profile: false
toc: true
toc_label: "Documentation"
toc_icon: "book"
toc_sticky: true
---

<style>
/* ReadTheDocs-inspired styling */
.page__content {
  max-width: 960px !important;
  font-size: 0.95em;
}

.page__content h2 {
  border-bottom: 2px solid #e1e4e5;
  padding-bottom: 0.4em;
  margin-top: 2.5em;
}

.page__content h3 {
  margin-top: 2em;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.2em;
  margin: 1.5em 0;
}

.feature-card {
  border: 1px solid #e1e4e5;
  border-radius: 6px;
  padding: 1.2em;
  background: #fafafa;
  transition: box-shadow 0.2s;
}

.feature-card:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.feature-card h4 {
  margin-top: 0;
  color: #2980b9;
}

.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4em;
  margin: 1em 0;
}

.badge-row img {
  height: 22px;
}

.hero-section {
  text-align: center;
  margin-bottom: 2em;
}

.hero-section img {
  max-width: 300px;
}

.demo-img {
  display: block;
  margin: 1.2em auto;
  max-width: 100%;
  border: 1px solid #e1e4e5;
  border-radius: 6px;
}

.install-steps {
  counter-reset: step;
}

.install-steps > li {
  position: relative;
  padding-left: 0.4em;
  margin-bottom: 1em;
}

table {
  font-size: 0.9em;
}

.tip-box {
  border-left: 4px solid #2980b9;
  background: #f0f7fd;
  padding: 0.8em 1em;
  margin: 1em 0;
  border-radius: 0 4px 4px 0;
}

.warning-box {
  border-left: 4px solid #e67e22;
  background: #fdf5ee;
  padding: 0.8em 1em;
  margin: 1em 0;
  border-radius: 0 4px 4px 0;
}

.tool-table td:first-child {
  white-space: nowrap;
  font-family: monospace;
  font-size: 0.9em;
}
</style>

<div class="hero-section">
  <img src="/images/llm-for-zotero/label.png" alt="LLM for Zotero logo">
  <p style="font-size:1.15em; color:#555; margin-top:0.8em;">
    Your right-hand side AI research assistant — chat with papers, manage your library, all inside Zotero.
  </p>
</div>

<div class="badge-row" style="justify-content: center;">
  <a href="https://www.zotero.org"><img src="https://img.shields.io/badge/Zotero-7-green?style=flat-square&logo=zotero&logoColor=CC2936" alt="Zotero 7"></a>
  <a href="https://www.zotero.org"><img src="https://img.shields.io/badge/Zotero-8-green?style=flat-square&logo=zotero&logoColor=CC2936" alt="Zotero 8"></a>
  <a href="https://www.gnu.org/licenses/agpl-3.0"><img src="https://img.shields.io/badge/License-AGPL_v3-blue.svg?style=flat-square" alt="AGPL v3"></a>
  <a href="https://github.com/yilewang/llm-for-zotero/releases"><img src="https://img.shields.io/github/v/release/yilewang/llm-for-zotero?style=flat-square" alt="Latest release"></a>
  <a href="https://github.com/yilewang/llm-for-zotero/stargazers"><img src="https://img.shields.io/github/stars/yilewang/llm-for-zotero?style=flat-square" alt="GitHub Stars"></a>
</div>

---

**llm-for-zotero** is a free, open-source plugin for [Zotero](https://www.zotero.org/) that brings Large Language Models directly into the PDF reader. Unlike tools that require uploading PDFs to a web portal, this plugin lets you chat with your papers *without leaving Zotero*. It sits quietly in the reader sidebar — your standby research assistant, ready whenever you need it.

<img src="/images/llm-for-zotero/demo.png" alt="Screenshot of the llm-for-zotero sidebar inside the Zotero PDF reader" class="demo-img">

<div class="feature-grid">
  <div class="feature-card">
    <h4>Chat with Papers</h4>
    <p>Ask questions about any open PDF. Answers are grounded in the paper with clickable citations.</p>
  </div>
  <div class="feature-card">
    <h4>Multi-Provider Support</h4>
    <p>OpenAI, Anthropic, Google Gemini, DeepSeek, local models — use any LLM you prefer.</p>
  </div>
  <div class="feature-card">
    <h4>Agent Mode</h4>
    <p>Let the LLM autonomously search, tag, organize, and annotate your entire Zotero library.</p>
  </div>
  <div class="feature-card">
    <h4>Privacy-First</h4>
    <p>Uses your own API keys. No data is sent to third-party portals — privacy governed by your provider.</p>
  </div>
</div>

---

## Installation

<ol class="install-steps">
  <li>
    <strong>Download the latest <code>.xpi</code> release</strong><br>
    Go to the <a href="https://github.com/yilewang/llm-for-zotero/releases">Releases Page</a> and download the latest <code>.xpi</code> file.
  </li>
  <li>
    <strong>Install the add-on in Zotero</strong><br>
    Open Zotero &rarr; <code>Tools</code> &rarr; <code>Add-ons</code> &rarr; click the gear icon &rarr; <strong>Install Add-on From File</strong> &rarr; select the <code>.xpi</code> file.
  </li>
  <li>
    <strong>Restart Zotero</strong><br>
    Restart Zotero to complete the installation. The plugin automatically checks for future updates on startup.
  </li>
</ol>

<div class="tip-box">
<strong>Tip:</strong> The plugin supports both <strong>Zotero 7</strong> and <strong>Zotero 8</strong>. Make sure you are running a compatible version.
</div>

---

## Configuration

Open **Preferences** &rarr; navigate to the **llm-for-zotero** tab.

1. Select your **Provider** (e.g. OpenAI, Gemini, DeepSeek).
2. Paste your **API Base URL**, **API key**, and **model name**.
3. Click **Test Connection** to verify.

<img src="/images/llm-for-zotero/model_setting.gif" alt="Provider and model configuration" class="demo-img">

### Supported Providers & Protocols

The plugin natively supports five provider protocols:

| Protocol | Description | Key Capabilities |
|---|---|---|
| `responses_api` | OpenAI Responses API | Streaming, tool calls, file uploads, multimodal |
| `openai_chat_compat` | OpenAI-compatible chat APIs | Streaming, tool calls, multimodal |
| `anthropic_messages` | Anthropic Messages API | Streaming, tool calls, multimodal |
| `gemini_native` | Google Gemini API | Streaming, tool calls, multimodal |
| `codex_responses` | ChatGPT/Codex auth | ChatGPT Plus integration, no separate API key |

### Supported Models (Examples)

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

## Features

### Grounded Answers with Citation Navigation

<img src="/images/llm-for-zotero/citation_jump.gif" alt="One-click jump from an AI citation to the paper source" class="demo-img">

When you ask a question, the model generates answers **grounded in the paper's content**. Each claim is backed by a citation — click any citation to jump straight to the source passage in the PDF. This makes it easy to verify answers and find relevant sections.

### Paper Summarization

<img src="/images/llm-for-zotero/summarize.gif" alt="Instant paper summary in the sidebar" class="demo-img">

Get a concise summary of any paper in seconds. The summary is generated from the full text of the open PDF. You can customize the summary prompt to focus on specific aspects — methodology, results, implications, or anything else.

### Selected Text Explanation

<img src="/images/llm-for-zotero/text.gif" alt="Selected text being explained by the model" class="demo-img">

Select any complex paragraph or technical term in the PDF and ask the model to explain it. You can add **up to 5 pieces of context** from the paper or previous answers to refine the explanation.

An optional pop-up automatically suggests adding selected text to the chat. This can be disabled in settings if you prefer manual control.

### Figure Interpretation

<img src="/images/llm-for-zotero/screenshot.gif" alt="Screenshot-based figure interpretation" class="demo-img">

Take a screenshot of any figure, chart, or diagram and ask the model to interpret it. The plugin supports **up to 10 screenshots** at a time, making it easy to analyze complex multi-panel figures or compare visuals across sections.

<div class="tip-box">
<strong>Tip:</strong> For best results with figures, use a multimodal model (e.g. GPT-4o, Gemini Pro, Claude) that supports image inputs.
</div>

### Cross-Paper Comparison

<img src="/images/llm-for-zotero/multi.gif" alt="Cross-paper comparison using the slash command" class="demo-img">

Open multiple papers in different tabs and compare them side by side. Type **`/`** in the chat input to cite another open paper as additional context. You can reference **up to 10 papers** in a single conversation, enabling rich cross-paper analysis.

### External Document Upload

<img src="/images/llm-for-zotero/upload_files.gif" alt="External file upload for additional context" class="demo-img">

Upload documents from your local drive as additional context. Supported formats:

- **PDF** (up to 50 MB per file)
- **DOCX** (Word documents)
- **PPTX** (PowerPoint presentations)
- **TXT** (plain text)
- **Markdown** (.md files)

### Save to Notes

<img src="/images/llm-for-zotero/save_notes.gif" alt="Model answers saved to Zotero notes" class="demo-img">

Save any answer or selected text directly to your **Zotero notes** with one click. This integrates seamlessly with your existing note-taking workflow — no copy-pasting required.

### Conversation History & Export

<img src="/images/llm-for-zotero/save_chat.gif" alt="Conversation export to Zotero notes" class="demo-img">

Conversations are **automatically saved** locally and associated with the paper you're reading. You can:

- Browse past conversations from the history panel.
- **Export entire conversations** to Zotero notes in Markdown format.
- Exported notes include selected text, screenshots, and properly rendered LaTeX equations.

### Custom Quick-Action Presets

<img src="/images/llm-for-zotero/shortcuts.gif" alt="Custom quick-action preset configuration" class="demo-img">

Create **up to 10 custom presets** for frequently used prompts — available at the tap of a button. Built-in presets include:

- **Summarize** — generate a concise summary
- **Key Points** — extract main findings
- **Methodology** — describe the research methods
- **Limitations** — identify weaknesses or gaps

You can customize these or add your own to match your research workflow.

---

## Agent Mode (Beta)

<div class="warning-box">
<strong>Note:</strong> Agent Mode is disabled by default. Enable it in <strong>Preferences</strong>, then toggle <strong>Agent (beta)</strong> in the context bar.
</div>

When enabled, the LLM becomes an **autonomous agent** that can read, search, and write within your Zotero library. It operates with a human-in-the-loop design — all write operations require your explicit approval before execution.

### Available Tools

<table class="tool-table">
<thead>
<tr><th>Tool</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>query_library</td><td>Search and list Zotero items, collections, related papers, and duplicates</td></tr>
<tr><td>read_library</td><td>Read metadata, notes, annotations, attachments, and collection details</td></tr>
<tr><td>inspect_pdf</td><td>Read front matter, search pages, retrieve evidence, inspect the active reader view</td></tr>
<tr><td>search_literature_online</td><td>Search live scholarly sources (Crossref, Semantic Scholar, arXiv, PubMed, and more) or fetch external metadata</td></tr>
<tr><td>mutate_library</td><td>Batch write operations — metadata edits, tagging, collection management, note writing, paper imports</td></tr>
<tr><td>undo_last_action</td><td>Revert the last approved write batch</td></tr>
</tbody>
</table>

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

<img src="/images/llm-for-zotero/agent/multi_steps.gif" alt="Multi-step agent workflow" class="demo-img" style="max-width:512px;">

#### Read a figure directly

<img src="/images/llm-for-zotero/agent/single_figure.gif" alt="Agent reading a figure from the PDF" class="demo-img">

#### Read multiple pages

<img src="/images/llm-for-zotero/agent/full_docs.gif" alt="Agent reading multiple pages" class="demo-img">

#### Find related papers

<img src="/images/llm-for-zotero/agent/related_papers.gif" alt="Agent finding related papers" class="demo-img">

#### Apply tags automatically

<img src="/images/llm-for-zotero/agent/apply_tags.gif" alt="Agent applying tags to a paper" class="demo-img">

#### Write a note

<img src="/images/llm-for-zotero/agent/write_note.gif" alt="Agent writing a note" class="demo-img">

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

<img src="/images/llm-for-zotero/codex.png" alt="Codex auth configuration" class="demo-img">

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

---

<p style="text-align:center; color:#999; font-size:0.85em;">
  llm-for-zotero is maintained by <a href="https://github.com/yilewang">Yile Wang</a>. Licensed under AGPL v3.
</p>
