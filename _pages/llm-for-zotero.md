---
layout: docs
title: "llm-for-zotero: A Research Agent System for your Zotero Library"
permalink: /llm-for-zotero/
author_profile: false
lang: en
lang_alt: /llm-for-zotero/zh/
---

<h1 id="overview">llm-for-zotero: A Research Agent System for your Zotero Library</h1>

<div class="rtd-badges">
  <a href="https://www.zotero.org"><img src="https://img.shields.io/badge/Zotero-Supported-green?style=flat-square&logo=zotero&logoColor=CC2936" alt="Zotero supported"></a>
  <a href="https://github.com/windingwind/zotero-plugin-template"><img src="https://img.shields.io/badge/Using-Zotero%20Plugin%20Template-blue?style=flat-square&logo=github" alt="Using Zotero Plugin Template"></a>
  <a href="https://www.gnu.org/licenses/agpl-3.0"><img src="https://img.shields.io/badge/License-AGPL_v3-blue.svg?style=flat-square" alt="AGPL v3"></a>
  <a href="https://github.com/yilewang/llm-for-zotero/releases"><img src="https://img.shields.io/github/v/release/yilewang/llm-for-zotero?style=flat-square" alt="Latest release"></a>
  <a href="https://github.com/yilewang/llm-for-zotero/stargazers"><img src="https://img.shields.io/github/stars/yilewang/llm-for-zotero?style=flat-square" alt="GitHub Stars"></a>
  <a href="https://github.com/yilewang/llm-for-zotero/releases"><img src="https://img.shields.io/github/downloads/yilewang/llm-for-zotero/total?style=flat-square" alt="GitHub Downloads"></a>
  <a href="https://buymeacoffee.com/yat.lok"><img src="https://img.shields.io/badge/Support-Buy%20Me%20A%20Coffee-FF813F?style=flat-square&logo=buy-me-a-coffee&logoColor=white" alt="Buy Me A Coffee"></a>
  <a href="https://yilewang.github.io"><img src="https://img.shields.io/badge/website-yilewang.github.io-informational?style=flat-square&logo=github" alt="Personal website"></a>
</div>

<p style="margin: 4px 0 20px; font-size: 0.9em;">📖 <a href="/llm-for-zotero/zh/"><strong>中文版使用手册</strong></a></p>

<p style="text-align:center;">
  <img src="/images/llm-for-zotero/label.png" alt="LLM for Zotero logo: a brain icon merged with the Zotero shield" style="max-width:512px; display:block; margin:0 auto;">
</p>

**llm-for-zotero** brings Large Language Models into the Zotero reader, so you can ask questions, summarize papers, inspect figures, compare sources, and save notes without leaving your library. It works with standard API providers, local OpenAI-compatible models, WebChat, Codex App Server, and Claude Code.

<img src="/images/llm-for-zotero/demo.png" alt="Screenshot of the llm-for-zotero sidebar inside the Zotero PDF reader">

<img src="/images/llm-for-zotero/demo2.png" alt="Second screenshot of the llm-for-zotero assistant inside Zotero">

<div class="rtd-feature-grid">
  <a class="rtd-feature-card" href="#grounded-answers-with-citation-navigation">
    <strong>Grounded Paper Chat</strong>
    <p>Ask questions about any open PDF and jump from model citations back to the source passage.</p>
  </a>
  <a class="rtd-feature-card" href="#supported-providers--protocols">
    <strong>Multi-Provider Support</strong>
    <p>OpenAI, Anthropic, Gemini, DeepSeek, Moonshot, local OpenAI-compatible models, and more.</p>
  </a>
  <a class="rtd-feature-card" href="#webchat-setup-chatgpt-web-sync">
    <strong>WebChat</strong>
    <p>Use ChatGPT, DeepSeek, or Google Gemini through the browser with Sync for Zotero when you do not want a provider API key.</p>
  </a>
  <a class="rtd-feature-card" href="#agent-mode-beta">
    <strong>Agent Mode (Beta)</strong>
    <p>An autonomous agent that manages your library, runs terminal commands, and accesses local files — with approval before changes are applied.</p>
  </a>
  <a class="rtd-feature-card" href="#general-web-search">
    <strong>General Web Search</strong>
    <p>Research current public information, read source pages, and connect web evidence with papers in your Zotero library.</p>
  </a>
  <a class="rtd-feature-card" href="#mineru-pdf-parsing">
    <strong>MinerU PDF Parsing</strong>
    <p>Use cloud MinerU or a local mineru-api server for high-fidelity parsing that preserves tables, equations, figures, and complex layouts.</p>
  </a>
  <a class="rtd-feature-card" href="#precise-figure-extraction">
    <strong>Precise Figure Extraction</strong>
    <p>Ask about a figure and the agent crops it straight from the source PDF — sharp, accurate, and ready to embed in your notes.</p>
  </a>
  <a class="rtd-feature-card" href="#standalone-window-mode">
    <strong>Standalone Window</strong>
    <p>Open the LLM Assistant in its own dedicated window with a full-sized chat interface and conversation history sidebar.</p>
  </a>
  <a class="rtd-feature-card" href="#file-based-notes">
    <strong>File-Based Notes</strong>
    <p>Save research notes as Markdown files in Obsidian, Logseq, or any local notes folder with metadata, citations, and extracted figures.</p>
  </a>
  <a class="rtd-feature-card" href="#skills">
    <strong>Customizable Skills</strong>
    <p>8 built-in skills guide the agent's workflows for common tasks. Create your own with simple Markdown files.</p>
  </a>
  <a class="rtd-feature-card" href="#codex-setup-chatgpt-plus-subscribers">
    <strong>Codex & Claude Code</strong>
    <p>Use Codex through the local app-server runtime, or run experimental Claude Code conversations. The plugin starts the Claude Code bridge for you.</p>
  </a>
</div>

---

## Demo Video

Watch how to conduct a literature review in Library chat with the llm-for-zotero agent.

<figure class="rtd-doc-figure rtd-doc-figure--wide">
  <video controls playsinline preload="metadata" width="1600" height="1524" aria-label="Demo: a literature review in Library chat" src="https://github.com/user-attachments/assets/c3c80e9c-a8cd-487f-9b1c-49ff717f514c">
    Your browser does not support embedded video.
    <a href="https://github.com/user-attachments/assets/c3c80e9c-a8cd-487f-9b1c-49ff717f514c">Watch the demo video directly.</a>
  </video>
  <figcaption>If the video does not play here, <a href="https://github.com/user-attachments/assets/c3c80e9c-a8cd-487f-9b1c-49ff717f514c">open the demo video directly</a>.</figcaption>
</figure>

## Quick Start

1. Download the latest `.xpi` file from the [Releases page](https://github.com/yilewang/llm-for-zotero/releases).
2. In Zotero, open `Tools` &rarr; `Add-ons` &rarr; gear icon &rarr; **Install Add-on From File**, then select the `.xpi`.
3. Restart Zotero.
4. Open `Preferences` &rarr; `llm-for-zotero`, choose a provider, enter the base URL, key, and model, then click **Test Connection**.
5. Open a PDF in Zotero and click the LLM Assistant icon in the right-hand toolbar.

If you do not want to use a provider API key, start with [WebChat](#webchat-setup-chatgpt-web-sync) or [Codex App Server](#codex-setup-chatgpt-plus-subscribers).

## Requirements

- Zotero
- A model backend: provider API key, local OpenAI-compatible model, WebChat, Codex App Server, or Claude Code.
- A Chromium-based browser for WebChat mode.
- Node.js 18+ for npm-based Codex CLI installation and for Claude Code mode. The macOS Codex cask does not require a separate Node.js install.
- A Tavily API key is required only if you enable general web search in Agent Mode.
- A personal MinerU API key or a local `mineru-api` server is recommended if you enable MinerU parsing.

## Choose Your Setup

| Goal | Recommended path | API key required? |
|---|---|---|
| Use OpenAI, Gemini, DeepSeek, Moonshot, or another provider | Configure an API provider in Zotero preferences | Yes |
| Use a local model | Connect any OpenAI-compatible local HTTP API | Usually no |
| Use ChatGPT, DeepSeek, or Google Gemini in the browser | [WebChat](#webchat-setup-chatgpt-web-sync) with the Sync for Zotero extension | No provider API key |
| Use Codex models with ChatGPT Plus | [Codex App Server](#codex-setup-chatgpt-plus-subscribers) | No separate API key |
| Use Claude Code inside Zotero | [Claude Code bridge](#claude-code-setup-experimental) | Claude Code auth |
| Research current public web information | [General web search](#general-web-search) in Agent Mode with Tavily | Tavily key |
| Improve PDF extraction for tables, equations, and figures | [MinerU PDF parsing](#mineru-pdf-parsing) | Personal MinerU key recommended |

<figure class="rtd-doc-figure rtd-doc-figure--wide">
  <img src="/images/llm-for-zotero/webchat-gemini-provider.png" alt="AI Providers settings showing API, Codex CLI, and browser-extension access paths, including WebChat for DeepSeek, ChatGPT, and Google Gemini" width="1468" height="1192" loading="lazy">
  <figcaption>Choose the access path that matches your account: API Key for provider APIs, Codex CLI for Codex Direct, or Browser extension for WebChat. The WebChat provider offers DeepSeek, ChatGPT, and Google Gemini without a provider API key.</figcaption>
</figure>

---

## What's New

**v3.9.14**

- **Task progress shows the sources of each answer.**
  The side panel lists, for each question, the papers and web pages the Agent used and the passages it read.
  **Show in answer** jumps to the sentence that cites a source.
  See [Task Progress and Sources](#task-progress-and-sources).
- **Web answers credit their sources** with numbered marks and a source chip, which stay when you copy the answer.
- **Conversations grouped by agent:** the window sidebar can group chats into **Agent**, **Codex**, and **Claude** sections.
- **The composer floats** over the bottom of the chat and grows as you type.
- **MinerU local server on demand:** the plugin can start a local MinerU server when it parses a PDF and stop it when it is idle.
  See [Using a Local MinerU Server](#using-a-local-mineru-server).
- **OpenCode Go** is a new provider preset.

**v3.9.13**

- **Side panel** in the standalone window holds up to eight tabs: a side chat, past chats, and everything a chat made.
- **Files the Agent saves** show as preview cards under the answer, and each paper gets its own folder.
  See [Files the Agent Saves](#files-the-agent-saves).
- **Papers outside your library:** the Agent can read the abstract and open-access text of a paper from a DOI, PubMed, PMC, or arXiv ID.
- **Claude Code works without setup:** the plugin starts and stops the bridge that Claude Code needs.
- **AI note edits keep citations, highlights, and images** in place.
- **DeepSeek search** is a new choice for web search, next to Tavily and AnySearch.

**Earlier updates**

- **Usage Statistics** provides a local overview of Paper chat and Library chat activity, with time filters, activity and token charts, model details, CSV export, and reset controls.
  See [Usage Statistics](#usage-statistics).
- **Built-in web and literature research** lets the Agent search the public web, read source pages, and combine current online information with evidence from your Zotero library.
  Answers can include paragraph-level source cards, while the activity trace keeps general web results and scholarly literature results visually distinct.
  See [General Web Search](#general-web-search).
- **Codex App Server** is the recommended Codex path for ChatGPT Plus users. It runs through the local `codex app-server` runtime and is configured from the **Agent** tab.
- **Claude Code Mode (experimental)** runs Claude Code as a separate conversation system inside Zotero, using your own Claude Code login. It can use the plugin's Zotero tools to read your library and, with your approval, edit notes, tags, metadata, and imports. See [Claude Code Setup](#claude-code-setup-experimental).
- **One history** lists Agent, Codex, and Claude chats together. Click the runtime badge in the message box to switch runtimes, and attach an earlier conversation from the slash menu or by asking for it in plain words.
- **WebChat Mode** supports ChatGPT, DeepSeek, and Google Gemini web sync through the Sync for Zotero browser extension.
- **File-Based Notes**: Notes are no longer hard-coded to Obsidian. Configure any local Markdown directory, including Obsidian, Logseq, or a plain folder. See [File-Based Notes](#file-based-notes).
- **Skills**: Customizable guidance files shape how the agent handles different tasks. 8 built-in skills are included, plus a portal for creating your own. See [Skills](#skills).
- **Standalone Window Mode** opens the assistant in a dedicated window with paper chat, library chat, and conversation history.
- **Cache-aware Agent Mode** preserves stable paper context, prior read evidence, and coverage state across longer research turns, then compacts old transcript history automatically when the context window gets crowded.
- **Citation navigation** keeps citation labels conservative until page locations are verified, while quote-based citations can jump back to the matching Zotero passage.
- **MinerU PDF parsing**: High-fidelity extraction preserves tables, equations, and figures more accurately, with support for cloud MinerU, local `mineru-api` servers, bulk parsing, cache repair, sync packages, tags, and parsing filters.
- **Precise Figure Extraction**: Figure questions and figure notes now use crops cut directly from the source PDF — with MinerU as the index — instead of MinerU's own figure images, for sharper, more accurate figures. See [Precise Figure Extraction](#precise-figure-extraction).

Thanks to [@jianghao-zhang](https://github.com/jianghao-zhang) and [@boltma](https://github.com/boltma) for major contributions to the Codex App Server, Claude Code, and file upload workflows.

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
  llm-for-zotero supports Zotero.
</div>

---

## Configuration

Open **Preferences** &rarr; navigate to the **llm-for-zotero** tab.

1. Select your **Provider** (e.g. OpenAI, Gemini, DeepSeek).
2. Paste your **API Base URL**, **secret key**, and **model name**.
3. Click **Test Connection** to verify.

<img src="/images/llm-for-zotero/model_setting.gif" alt="Provider and model configuration">

### Supported Providers & Protocols

Preset providers include **OpenAI**, **Gemini**, **Anthropic**, **MiniMax**, **GLM**, **DeepSeek**, **Grok**, **Qwen**, **Kimi**, and **GitHub Copilot**. You can also add any customized OpenAI-compatible HTTP endpoint, including Ollama, LM Studio, vLLM, or a remote proxy.

The plugin natively supports these provider protocols:

| Protocol | Description | Main capabilities |
|---|---|---|
| `responses_api` | OpenAI-style Responses APIs | Streaming, tool calls, file uploads, multimodal inputs, reasoning |
| `openai_chat_compat` | OpenAI-compatible chat/completions APIs | Tool calls and multimodal inputs without direct file upload |
| `anthropic_messages` | Anthropic Messages API | Streaming, tool calls, multimodal inputs |
| `gemini_native` | Google Gemini API | Streaming, tool calls, multimodal inputs |
| `codex_responses` | Codex App Server / Codex Auth (Legacy) | Codex conversations for ChatGPT Plus subscribers without a separate API key |
| `web_sync` | WebChat bridge for ChatGPT / DeepSeek / Google Gemini | Browser-extension relay without provider API keys |

### Supported Models (Examples)

| API URL | Model | Reasoning Levels | Notes |
|---|---|---|---|
| `https://api.openai.com/v1/responses` | gpt-5.4 | default, low, medium, high, xhigh | PDF uploads supported |
| `https://api.openai.com/v1/responses` | gpt-5.4-pro | medium, high, xhigh | PDF uploads supported |
| `https://api.deepseek.com/v1` | deepseek-chat | default | |
| `https://api.deepseek.com/anthropic` | deepseek-v4-flash | default | |
| `https://generativelanguage.googleapis.com` | gemini-3-pro-preview | low, high | |
| `https://generativelanguage.googleapis.com` | gemini-2.5-flash | medium | |
| `https://generativelanguage.googleapis.com` | gemini-2.5-pro | default, low, high | |
| `https://api.moonshot.ai/v1` | kimi-k2.5 | default | |

You can also set up **multiple providers**, each with multiple models for different tasks, such as a multimodal model for figures and a text model for summaries. Cross-check answers across models when you want broader coverage.

### Advanced: Reasoning Levels & Hyperparameters

You can set different reasoning levels per model in the conversation panel, such as `default`, `low`, `medium`, `high`, and `xhigh`, depending on model support. You can also adjust hyperparameters like `temperature` and `max_tokens_output` for more creative or more deterministic responses.

---

## Usage Guide

1. **Open any PDF** in the Zotero reader.
2. **Click the LLM Assistant icon** in the right-hand toolbar to open the sidebar.
3. **Type a question** such as *"What is the main conclusion of this paper?"*

On the first message, the model loads the full paper content as context. Follow-up questions use focused retrieval from the same paper, keeping the conversation fast and relevant.

### Conversation Modes

The plugin supports multiple conversation contexts:

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

When you ask a question, the model generates answers grounded in the paper's content. Citation labels stay conservative until page locations are verified; click a verified citation or quote-based citation to jump back to the matching Zotero passage.

---

## Paper Summarization

<img src="/images/llm-for-zotero/summarize.gif" alt="Instant paper summary in the sidebar">

Get a concise summary of any paper in seconds. The summary is generated from the full text of the open PDF, and you can customize the prompt to focus on methodology, results, implications, or anything else.

---

## Selected Text Explanation

<img src="/images/llm-for-zotero/text.gif" alt="Selected text being explained by the model">

Select any complex paragraph or technical term in the PDF and ask the model to explain it. You can add up to **5 pieces of context** from the paper or previous answers to refine the explanation.

An optional pop-up automatically suggests adding selected text to the chat. This can be disabled in settings if you prefer manual control.

---

## Figure Interpretation

<img src="/images/llm-for-zotero/screenshot.gif" alt="Screenshot-based figure interpretation">

Take a screenshot of any figure, chart, or diagram and ask the model to interpret it. The plugin supports up to **10 screenshots** at a time.

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

Upload documents from your local drive as additional context. Supported formats include **PDF**, **DOCX**, **PPTX**, **TXT**, and **Markdown**.

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

## Usage Statistics

Open **Zotero Settings/Preferences** &rarr; **llm-for-zotero** &rarr; **Usage** to review activity recorded by the plugin.

<figure class="rtd-doc-figure rtd-doc-figure--wide">
  <img src="/images/llm-for-zotero/usage/usage-statistics.png" alt="Usage Statistics panel in llm-for-zotero showing Paper chat and Library chat totals, a question activity heatmap, and a daily token chart" width="1240" height="1144" loading="lazy">
  <figcaption>The Usage tab summarizes Paper chat and Library chat activity over time while keeping the underlying statistics in your local Zotero database.</figcaption>
</figure>

Use **Overview**, **Paper chat**, and **Library chat** to move between the combined dashboard and scope-specific details.
The **7d**, **30d**, and **All** controls filter the summary, daily token chart, model breakdown, and detail lists; the activity heatmap continues to show the available history, up to one year.

- **Overview** shows question totals, distinct papers and conversations, input/output token totals, a questions-or-papers activity heatmap, tokens per day, and a model breakdown that identifies the provider or runtime and the paper/library split.
- **Paper chat** lists the papers you asked about most, with question and token totals.
- **Library chat** lists the heaviest conversations, with their question and token totals.

The panel reports token usage only and does not estimate monetary cost.
For conversations from before the Usage tab existed, question and paper activity is reconstructed from stored messages, while token totals are clearly labeled as estimates derived from the stored prompt size and assistant text, including stored reasoning.
If a provider does not report tokens, the panel marks those turns as unreported or shows an em dash with an explanation instead of treating them as zero.
WebChat turns are excluded from both live statistics and historical reconstruction.

Usage statistics remain in your own Zotero database and are not sent elsewhere by this panel.
**Export CSV** saves the recorded rows for the selected time range, while **Reset statistics** permanently clears all usage rows without deleting conversations, notes, or papers.
Historically reconstructed rows are not rebuilt after a reset.

---

## Custom Quick-Action Presets

<img src="/images/llm-for-zotero/shortcuts.gif" alt="Custom quick-action preset configuration">

Customize quick-action presets to match your research workflow. Built-in presets include:

- **Summarize** — generate a concise summary
- **Key Points** — extract main findings
- **Methodology** — describe the research methods
- **Limitations** — identify weaknesses or gaps

---

## Standalone Window Mode

Open the LLM Assistant in its own dedicated window, separate from the Zotero reader sidebar. The standalone window provides a full-sized chat interface with a collapsible conversation history panel on the left.

### How to open

| Method | Action |
|---|---|
| **Keyboard shortcut** | `Ctrl+Shift+L` (macOS: `Cmd+Shift+L`) |

### Features

- **Paper chat & Library chat** &mdash; Switch between paper-specific and library-wide conversations using the tabs at the top.
- **Conversations** &mdash; Browse past chats in the sortable **Conversations** list in the left sidebar. You can group them into foldable **Agent**, **Codex**, and **Claude** sections, each with its own sort order and a **+** button for a new chat. Pinned papers stay at the top, and each one keeps its own side panel tabs.
- **Side panel** &mdash; Open it with the button at the end of the **Paper chat \| Library chat** row. It holds up to eight tabs:
  - **Side chat:** ask a quick question without leaving the main chat. It sees the main chat, can use a different model, and is not saved.
  - **History:** read an earlier chat next to the current one, quote it, add its paper, or make it the main chat.
  - **Miscellaneous:** everything the chats of this paper made, such as diagrams, figures, web pages, code, plans, and files. **Go to chat** jumps to the message that made it.
  - **Task progress:** the sources for each question. See [Task Progress and Sources](#task-progress-and-sources).

  Diagrams, code, web pages, figures, plans, and files in the chat have a **&rarr;\|** button that moves them into their own side panel tab.
  Select text in an answer and pick **Quote in side chat** to ask about it in a side chat.
- **Full feature parity** &mdash; Everything available in the reader sidebar &mdash; screenshots, file uploads, agent mode, quick-action presets, reference picker &mdash; works identically in the standalone window.
- **Search** &mdash; Search through your conversation history using the search overlay.

While the standalone window is open, the reader sidebar panels show a placeholder with options to **Focus Window** (bring the standalone window to the foreground) or **Close Window & Return Here** (close standalone and restore the sidebar).

<figure class="rtd-doc-figure rtd-doc-figure--wide">
  <img src="/images/llm-for-zotero/window/side-panel.png" alt="Standalone window with a side chat open in the side panel next to the main chat" width="1600" height="887" loading="lazy">
  <figcaption>The side panel opens next to the main chat. Here it holds a side chat.</figcaption>
</figure>

<figure class="rtd-doc-figure rtd-doc-figure--wide">
  <img src="/images/llm-for-zotero/window/miscellaneous.png" alt="Miscellaneous tab listing diagrams, figures, and files made by the chats of one paper" width="1600" height="887" loading="lazy">
  <figcaption><strong>Miscellaneous</strong> lists everything the chats of this paper made, newest first.</figcaption>
</figure>

<figure class="rtd-doc-figure rtd-doc-figure--wide">
  <img src="/images/llm-for-zotero/window/move-to-side.png" alt="A diagram moved from the chat into its own side panel tab" width="1600" height="887" loading="lazy">
  <figcaption>The <strong>&rarr;|</strong> button moves a diagram, figure, web page, or file into its own side panel tab.</figcaption>
</figure>

---

## File-Based Notes

Beyond Zotero's built-in notes, the agent can save research notes as Markdown files in any local directory you choose. The plugin is **not tied to any specific note-taking app**: point it at an Obsidian vault, a Logseq graph, or a plain folder of `.md` files.

### Configuration

Open **Preferences** &rarr; **llm-for-zotero** and scroll to the **Notes Directory** section.

<img src="/images/llm-for-zotero/outside_notes.png" alt="Notes Directory settings" style="max-width:512px;">

| Setting | Description | Example |
|---|---|---|
| **Nickname** | How you refer to this directory in chat; the agent recognizes the name when you mention it | `Obsidian`, `Logseq` |
| **Notes Directory Path** | Absolute path to the root directory where notes are saved | `/Users/me/MyVault` |
| **Default Folder** | Default subfolder for new notes; the agent can write elsewhere if you ask it to | `Logs` |
| **Attachments Folder** | Folder for copied figures and images, relative to the directory root | `Logs/imgs` |

Click **Test Write Access** to verify the plugin can write to your directory.

### How it works

Ask the agent to write a note using the nickname you configured, for example *"Summarize this paper and save it to Obsidian"* or *"Log this to my Logseq"*. The agent will:

1. **Gather content** from the paper, including metadata, summary, key points, and figures when available.
2. **Compose a Markdown note** following the `write-note` skill.
3. **Add YAML frontmatter** matching the `write-note` template: `title`, `created`, `tags`, `citekey`, `doi`, and `journal`; author information stays in the note body.
4. **Embed extracted figure crops** — precise crops cut from the source PDF — and copy them into the attachments folder when requested. See [Precise Figure Extraction](#precise-figure-extraction).
5. **Write the note** to `{notes_directory}/{default_folder}/{title}.md`.

If you want to keep notes inside Zotero, the agent can also write to internal item notes with the `write-note` skill. Ask it to "save a note for this paper" without mentioning an external directory.

### Zotero Notes vs. File-Based Notes

<img src="/images/llm-for-zotero/note2.jpeg" alt="Zotero internal note" style="max-width:512px;">

<img src="/images/llm-for-zotero/obsidian_example.png" alt="A Zotero paper note rendered in Obsidian" style="max-width:512px;">

Notes use [Pandoc citation syntax](https://pandoc.org/MANUAL.html#citations) (`[@citekey]`), compatible with Obsidian's Zotero Integration and Pandoc plugins, as well as most Markdown readers.

<div class="rtd-tip">
  <div class="rtd-admonition-title">Tip</div>
  Note templates and figure-embedding rules live in the <code>write-note</code> skill. Open the Standalone Window, then the Skills portal, to customize them.
</div>

### Editing Zotero Notes With the Agent

- **Citations, PDF highlights, and images stay intact.** The agent sees each one as a placeholder such as {% raw %}`{{citation:3fa9c1 ("Smith", 2020, p. 42)}}`{% endraw %}, and every edit puts the original item back, so a rewrite can move a citation but never break it. An edit that would drop one is refused unless you asked for it to be deleted.
- **Clickable citations.** Ask for page citations and the agent writes {% raw %}`{{cite item=123 page=42}}`{% endraw %}, which becomes the same citation Zotero's **Insert Citation** makes: clicking it opens the PDF at that page.
- **Study-note blanks.** A line of underscores inside a quote (`> ___`) becomes a divider, and a checklist item made only of underscores (`- [ ] ____`) keeps its checkbox as a fill-in blank.

---

## General Web Search

Starting with v3.9.4, Agent Mode can research the public web without leaving Zotero.
The Agent can search for current information, open selected source pages for focused reading, and combine those findings with papers, notes, and metadata from your Zotero library.
This is useful when a question depends on information that may be newer than a paper or a model's training data, such as current documentation, organization pages, policies, product information, or recent public reporting.

<div class="rtd-tip">
  <div class="rtd-admonition-title">Agent Mode required</div>
  General web search is a tool used by <a href="#agent-mode-beta">Agent Mode</a>.
  It is separate from <a href="#webchat-setup-chatgpt-web-sync">WebChat</a>, which connects Zotero to a browser-based chat service.
</div>

### Set Up Tavily

Web search can use [Tavily](https://tavily.com/) (the default), AnySearch, or DeepSeek.
Tavily uses its own API key, separate from your model-provider key.

1. [Create a Tavily account](https://app.tavily.com/) and obtain an API key.
2. Open Zotero &rarr; **Preferences** &rarr; **llm-for-zotero** &rarr; **Agent**.
3. In **Web search**, keep **Tavily**, paste the key, and click **Test connection**.
4. Enable [Agent Mode](#agent-mode-beta), then ask a question that needs current or public web evidence.

There is no separate on/off switch.
The `web_search` and `web_read` tools become available to the Agent when the selected provider can run.
They are not added to WebChat, Codex, or Claude Code chats, which use their own web search.

<figure class="rtd-doc-figure rtd-doc-figure--wide">
  <img src="/images/llm-for-zotero/web-search/tavily-setup.png" alt="Tavily Web Search settings with an API key field, connection test, credit information, and privacy notice" width="1162" height="626" loading="lazy">
  <figcaption>Configure and test the Tavily key from the Agent preferences. The key remains in your local Zotero preferences.</figcaption>
</figure>

### Other Search Providers

| Provider | Key | Cost | Limits |
|---|---|---|---|
| **AnySearch** | Optional; leave it blank for anonymous access | Server-controlled quota | 1&ndash;10 results per search; reads one to five URLs from the same run; no depth, topic, date, or domain filters; no PDF or Office extraction |
| **DeepSeek** | Uses the key of your first model profile with the official `https://api.deepseek.com` address | $0.75 per 1,000 successful searches or page reads, billed to that DeepSeek account | Queries up to 128 characters, filters included |

Select the provider in **Preferences** &rarr; **llm-for-zotero** &rarr; **Agent** &rarr; **Web search**.
For AnySearch, **Test search (sends a public query)** sends one fixed public query and uses quota.
DeepSeek never sends keys of relays or other hosts.
Each provider receives your search queries and the URLs the Agent reads.

### What the Agent Can Do

| Need | How the Agent handles it |
|---|---|
| Find current public information | Uses general web search and selects a search depth appropriate for the request |
| Inspect a specific source | Reads a public page step by step, and goes deeper only when the page needs it |
| Discover academic papers | Uses scholarly literature search for paper metadata, recommendations, references, and citation relationships |
| Read a paper outside your library | Reads the abstract and open-access text from a DOI, PubMed, PMC, or arXiv ID, without importing it |
| Combine evidence types | Can use web search and literature search in the same turn, while keeping their results separate in the activity trace |
| Explain where a claim came from | Ends each cited sentence with a numbered mark and adds a source chip at the end of the answer; the marks and chip stay when you copy the answer |

General web search and scholarly literature search are complementary rather than interchangeable.
Use web search for current documentation, institutional pages, public explanations, standards, policies, and other open-web material.
Use literature search when you need academic discovery through OpenAlex, arXiv, and Europe PMC, with Crossref and Semantic Scholar for metadata.
The Agent checks your paper and your library first, and searches outside only when they cannot answer.
For a broad research question, the Agent can use both and synthesize the results with evidence already in Zotero.

<div class="rtd-doc-figure-grid">
  <figure class="rtd-doc-figure">
    <img src="/images/llm-for-zotero/web-search/web-and-literature-trace.png" alt="Agent activity trace showing a live literature search followed by a separate general web search" width="960" height="2160" loading="lazy">
    <figcaption>The activity trace separates scholarly literature results from general web results, so you can see which route produced each source.</figcaption>
  </figure>
  <figure class="rtd-doc-figure">
    <img src="/images/llm-for-zotero/web-search/paragraph-source-cards.png" alt="An Agent answer with source cards attached to a paragraph, showing site favicons, organizations, titles, and links" width="902" height="992" loading="lazy">
    <figcaption>Paragraph-level source cards make supporting pages easy to identify and open without interrupting the answer.</figcaption>
  </figure>
</div>

### Example Requests

- *"Use current web sources to check whether the recommendations in this paper have changed, and show me what changed."*
- *"Compare this paper with the latest public guidance from the WHO, and keep paper evidence separate from web evidence."*
- *"Research the current state of representational drift, using both recent academic literature and reliable public research pages."*
- *"Read this URL, compare its claims with the papers in my current Zotero collection, and cite each source near the claim it supports."*

You do not need to specify a search depth in ordinary requests.
The Agent can choose between basic and advanced search based on the question, or you can ask explicitly for a broader or deeper search when coverage matters more than credit use.

### Credits, Privacy, and Verification

Tavily usage consumes Tavily credits.
The v3.9.4 preferences panel shows the release-time credit model: basic search uses 1 credit, advanced search uses 2 credits, and extraction is charged per five successfully read pages.
At the time of writing, Tavily's free plan provides 1,000 credits each month without requiring a credit card.
Allowances and pricing can change, so consult [Tavily's credit and pricing documentation](https://docs.tavily.com/documentation/api-credits) and your account for the current terms.

Search queries and requested URLs are sent to Tavily under Tavily's privacy, retention, and search-index policies.
When results are displayed, Zotero may load favicons from public URLs supplied by Tavily.
Do not include credentials, unpublished material, personal data, or other sensitive private text in a web query.

Web sources can change or disagree.
Use the source marks to open important pages and verify high-stakes claims against the original source before relying on them.

---

## Agent Mode (Beta)

<div class="rtd-warning">
  <div class="rtd-admonition-title">Important</div>
  Agent Mode is disabled by default. Turn on <strong>Original Agent</strong> in <strong>Preferences</strong> &rarr; <strong>Agent</strong> tab. While it is on, new chats use the Agent. If you also turn on Codex or Claude Code, click the runtime badge in the message box to switch between them.
</div>

<figure class="rtd-doc-figure rtd-doc-figure--wide">
  <img src="/images/llm-for-zotero/agent/runtime-settings.png" alt="Agent settings showing enabled Original Agent, Codex, and Claude Code runtimes" width="1164" height="592" loading="lazy">
  <figcaption>The Agent settings page keeps the Original Agent, Codex, and Claude Code runtimes together. Enable the runtimes you want here, then switch between them from the chat header or the runtime badge in the message box.</figcaption>
</figure>

<figure class="rtd-doc-figure rtd-doc-figure--wide">
  <img src="/images/llm-for-zotero/agent/runtime-badge.png" alt="Runtime badge menu in the message box with Agent, Codex, and Claude choices" width="1600" height="1600" loading="lazy">
  <figcaption>Click the runtime badge in the message box to switch between <strong>Agent</strong>, <strong>Codex</strong>, and <strong>Claude</strong>.</figcaption>
</figure>

In a normal chat, the model answers from the context you give it.
In Agent Mode, the model can also use **tools**: small actions that read, search, or change your Zotero library.
You ask in plain words, and the Agent decides which tools to use and in which order.

The rule is simple: tools that only read run directly; tools that change something wait for your approval and can be undone.

### How an Agent Run Works

1. **You ask.** For example: *"Find the papers in this collection that use calcium imaging, tag them, and write a summary note."*
2. **The Agent splits the request into parts** and tracks each part, so a long request does not lose a step.
3. **The Agent reads.** It searches your library, reads papers and notes, and searches outside sources only when your library cannot answer.
4. **The Agent proposes changes.** A tag, a metadata edit, a note, or a command shows as a confirmation card. Nothing changes until you approve it.
5. **The Agent answers.** Cited sentences end with a numbered mark, and the task progress panel shows what each answer used.
6. **You can undo.** Ask the Agent to undo, and it reverts recorded changes, newest first.

If a choice is unclear, such as which collection to use, the Agent asks you before it continues.

Long agent runs are cache-aware. The plugin keeps stable Zotero context and previously read evidence separate from the changing chat transcript, tracks which papers and passages have already been inspected, and automatically compacts old turns when the model context fills up. Follow-up questions can reuse grounded evidence when it is still relevant, while the agent reads again when the needed source or coverage layer is missing.

### Task Progress and Sources

Task progress opens in a side panel tab of the standalone window.
It has one block for each question, with the papers and web pages that question used.

- For a library paper, it lists the passages the Agent read, then where the answer uses them.
- For a web page, it shows the page with the site's icon. Web links open in the side panel.
- **Show in answer** finds the sentence that cites a source, highlights it, and scrolls to it.

Use it to check what the Agent read before you trust an answer.
It works in paper chat and in library chat.

<figure class="rtd-doc-figure rtd-doc-figure--wide">
  <img src="/images/llm-for-zotero/agent/task-progress-library.png" alt="Task progress panel listing library papers, the passages the agent read, and Show in answer links" width="1600" height="1085" loading="lazy">
  <figcaption>For a library paper, task progress lists the passages the Agent read. <strong>Show in answer</strong> highlights the sentence that uses each passage.</figcaption>
</figure>

<figure class="rtd-doc-figure rtd-doc-figure--wide">
  <img src="/images/llm-for-zotero/agent/task-progress-web.png" alt="Task progress panel for a web search answer, with numbered source marks in the answer" width="1600" height="1088" loading="lazy">
  <figcaption>The same panel works for web search answers.</figcaption>
</figure>

<div class="rtd-doc-figure-grid">
  <figure class="rtd-doc-figure">
    <img src="/images/llm-for-zotero/agent/task-progress-evidence.png" alt="A web source opened in the Page tab of the side panel next to the answer" width="1600" height="1085" loading="lazy">
    <figcaption>Open a source to see the page next to the answer.</figcaption>
  </figure>
  <figure class="rtd-doc-figure">
    <img src="/images/llm-for-zotero/agent/what-agent-read.png" alt="What the agent read tab showing the exact text the agent saw for a web source" width="866" height="1800" loading="lazy">
    <figcaption><strong>What the agent read</strong> shows the exact text the Agent saw, and says when it saw only a search snippet.</figcaption>
  </figure>
</div>

### Papers Outside Your Library

The Agent can read a paper that is not in your library, from a DOI, PubMed ID, PMC ID, or arXiv ID.
It reads the full abstract, and the full text when the paper is open access.
For a paper that is only available as a PDF, it gives you the link.
Reading never imports the paper; ask the Agent to import it if you want to keep it.

### Earlier Conversations

The Agent can find, read, and attach an earlier chat, up to three at a time.
Type `/` and pick **Add past conversation**, or just ask, for example *"add the chat where I asked about grid cells last week."*
This works in Agent, Codex, and Claude modes.

### Files the Agent Saves

When the Agent saves a file, such as a web page, a Markdown summary, a picture, or a table, a preview card shows under the answer.
From the card you can open the file in the full view, show it in its folder, or move it to the side panel.
The card stays if you delete the file later, and says that the file is gone.

Each paper gets its own folder for saved files.
In **Preferences** &rarr; **llm-for-zotero** &rarr; **Agent** &rarr; **Saved files**, you can choose where these folders go.
**Check folders** lists them with their size, shows folders of deleted papers first, and lets you delete the ones you no longer need.

<figure class="rtd-doc-figure rtd-doc-figure--wide">
  <img src="/images/llm-for-zotero/agent/file-card.png" alt="A preview card for a web page file the agent saved, under the answer" width="1600" height="1112" loading="lazy">
  <figcaption>A preview card shows each file the Agent saves.</figcaption>
</figure>

<figure class="rtd-doc-figure rtd-doc-figure--wide">
  <img src="/images/llm-for-zotero/agent/saved-files-settings.png" alt="Saved files settings with the folder location and the Check folders button" width="1600" height="1331" loading="lazy">
  <figcaption>Choose where saved files go, and clean up old folders with <strong>Check folders</strong>.</figcaption>
</figure>

### Agent Tools

You do not need to call these tools yourself; the Agent picks them.
The table helps you understand the activity trace and the confirmation cards.

| Tool area | Tools | What they do |
|---|---|---|
| Library and PDF reading | `library_search`, `library_read`, `library_retrieve`, `paper_read`, `read_attachment`, `context_read` | Search items and collections, read metadata, read papers, search paper passages, render PDF pages, inspect attachments and the chat context |
| Scholarly discovery | `literature_search`, `literature_read`, `literature_review` | Search OpenAlex, arXiv, and Europe PMC for papers, recommendations, references, and citations (metadata lookup via CrossRef and Semantic Scholar), read the abstract and open-access text of an outside paper, then present ranked candidates |
| General web research | `web_search`, `web_read` | Search the current public web with Tavily, AnySearch, or DeepSeek, read relevant pages, and credit the sources in the answer |
| Past conversations | `past_chat_search`, `past_chat_read`, `past_chat_attach` | Find an earlier chat, read it, and attach it to the current chat |
| Library writes | `library_update`, `library_import`, `library_delete`, `annotate_pdf` | Apply tags, update metadata, move items, manage collections and attachments, merge duplicates, trash items, import identifiers or local files, highlight PDF passages |
| Citations and settings | `library_cite`, `library_settings` | Format citations and bibliographies with Zotero's citation engine, and read or change the Zotero preferences the agent may touch |
| Notes and documents | `note_write`, `note_write_batch`, `submit_document` | Create, append to, or edit Zotero notes, write one note on each of many items, and finalize longer documents |
| Filesystem and scripting | `file_io`, `run_command`, `zotero_script` | Read/write local files, run analysis commands, or execute Zotero JavaScript with write confirmations |
| Skills and questions | `load_skill`, `request_user_input` | Load a skill's instructions when the task needs them, and ask you a question when a choice is ambiguous |
| Task tracking | `task_update`, `workflow_script` | Split a compound request into parts the plugin tracks, and run several tool calls in one script with loops and conditions |
| Safety | `undo` | Undo recorded write actions from the conversation's durable change history, one at a time or several newest-first |

**Example use cases:**

- Run a Python or R script to analyze data extracted from your library.
- Export metadata as CSV/JSON for external processing.
- Invoke CLI tools (e.g. `pandoc`, `ffmpeg`, `pdftotext`) as part of an agent workflow.
- Write and execute scripts dynamically to transform or visualize your research data.
- Read local data files and incorporate results back into Zotero notes.

<div class="rtd-warning">
  <div class="rtd-admonition-title">Important</div>
  Terminal and file access tools require confirmation before execution. The agent will show you the command or file operation it wants to perform, and you must approve it before it runs.
</div>

### Built-in Actions

The agent provides high-level actions for common library workflows. These chain multiple tools together automatically.

| Action | What it does |
|---|---|
| **Audit Library** | Scan your library or a collection for incomplete metadata, missing PDFs, missing tags, and other gaps; optionally save the report as a Zotero note |
| **Auto-Tag** | Suggest tags for the current paper, selected papers, selected collections, or the whole library, then open an editable batch tag-review dialog |
| **Complete Metadata** | Audit targeted papers for missing bibliographic fields, fetch canonical metadata, and open one review card for the proposed updates |
| **Discover Related** | Find related papers from recommendations, references, or citations |
| **Organize Unfiled** | Find unfiled items and organize them into collections via an interactive review workflow |
| **Literature Review** | Launch the guided literature review workflow |
| **Library Statistics** | Summarize library or collection statistics such as item types, years, authors, journals, collections, tags, annotations, and growth over time |

### MCP Server

The plugin runs a built-in **Model Context Protocol (MCP)** server, allowing external AI agents and tools to interact with your Zotero library programmatically.

- **Endpoint**: `http://localhost:23119/llm-for-zotero/mcp`
- **Protocol**: JSON-RPC 2.0 (MCP v2024-11-05)
- **Methods**: `initialize`, `tools/list`, `tools/call`

This means you can connect any MCP-compatible AI agent (e.g. Claude Desktop, Cursor, custom agents) to your Zotero library and use all the tools listed above.

### Agent Demos

#### Multi-step workflow

The agent can chain multiple tools together to accomplish complex tasks, such as finding a paper, reading its metadata, searching for related work, and writing a summary note.

<img src="/images/llm-for-zotero/agent/multi_steps.gif" alt="Multi-step agent workflow" style="max-width:512px;">

#### Find related papers

There are two ways to find related papers:

- **`/discover_related`** runs a direct OpenAlex search for the paper you are viewing. It does not need a model. It opens **Recommendations**, **References**, and **Citations** tabs with up to 20 papers each. Use `/discover_related 30` to change the number, **Load more** for 20 more, and **Import selected** to save the papers you choose.
- **Ask in chat**, for example *"find relevant papers"* or *"find 15 relevant papers."* The Agent ranks the candidates and gives a reason for each. It starts with five unless you give a number. Use **Find more** for another batch and **Import selected** to save your choice. If fewer good matches exist, the card says so instead of padding the list.

<img src="/images/llm-for-zotero/agent/related_papers.gif" alt="Agent finding related papers">

#### Apply tags automatically

<img src="/images/llm-for-zotero/agent/apply_tags.gif" alt="Agent applying tags to a paper">

#### Write a note

<img src="/images/llm-for-zotero/agent/write_note.png" alt="Agent writing a note">

### Safety & Confirmation

All write operations go through a **human-in-the-loop confirmation** workflow:

- The agent proposes a batch of changes (e.g. add tags, edit metadata).
- You review the proposed changes in a rich approval form.
- You can **approve**, **reject**, or **modify** before any changes are applied.
- If something goes wrong, ask the agent to undo; the `undo` tool reverts recorded write actions newest-first.
- Terminal commands and file operations also require explicit approval before execution.

---

## Skills

<img src="/images/llm-for-zotero/skills.png" alt="Skills management portal" style="max-width:512px;">

Skills are customizable guidance files that shape how the agent approaches different types of requests.
A skill teaches the Agent *how* to do a task, such as which tools to use and in which order; it does not add new tools.
Each skill is a Markdown file with a short description and a body of instructions.

<div class="rtd-tip">
  <div class="rtd-admonition-title">Note</div>
  Skills require <strong>Agent Mode</strong> to be enabled. They have no effect in standard chat mode.
</div>

### Built-in Skills

The plugin ships with **8 built-in skills** covering common research workflows. They are automatically copied to your skills folder on first run.

| Skill | What it guides the agent to do |
|---|---|
| `evidence-based-qa` | Retrieve missing evidence for specific methods, results, or claims in selected papers or collections |
| `analyze-figures` | Extract a precise figure crop from the source PDF (using MinerU as the index) and read it directly; read tables as structured text |
| `compare-papers` | Compare selected papers or collection papers by theme, method, or findings |
| `library-analysis` | Analyze your whole library or a collection with statistics, without overflowing the context |
| `literature-review` | Discover papers, deep-read the most relevant few, and write a structured review with citations |
| `reorganize-library` | Sort papers into folders or tags: show the proposed grouping first, reuse existing folders and tags, then move or tag in batches |
| `write-note` | Write, save, or edit a Zotero note or a Markdown note in your notes directory |
| `import-cited-reference` | Import papers cited in the current PDF into Zotero by DOI |

### How Skills Work

1. At the start of each turn, the Agent sees only the name and description of each skill.
2. If the Agent decides that the task needs a skill, it calls `load_skill` to read the full instructions. There is no automatic pre-selection.
3. If you pick a skill from the `/` menu, the plugin applies it directly.
4. A skill applies only in the contexts its file allows, such as one paper or a whole library.
5. An approved plan keeps the exact skill versions it was approved with.

Because the Agent chooses skills from their descriptions, a clear and precise description matters more than anything else in a custom skill.

### Creating Custom Skills

1. Open the **Standalone Window** (`Ctrl+Shift+L` / macOS: `Cmd+Shift+L`).
2. Click the **Skills icon** in the top toolbar to open the Skills portal.
3. Click the **"+ New skill"** button to create a template file.
4. The template opens in your default text editor. Edit the frontmatter and the instructions:

```
---
name: my-custom-skill
id: my-custom-skill
description: Describe what this skill does
version: 1
contexts: any
activation: auto
---

Describe precisely when and how the agent should apply this workflow.
```

{:start="5"}
5. Save the file. The skill is loaded immediately &mdash; no restart needed.

**Skill file format:**

| Field | Description |
|---|---|
| `name`, `id` | Identifier shown in the `/` menu and in skill pickers |
| `description` | What the skill does. The Agent reads it to decide when to load the skill, so make it precise |
| `version` | Increase it when you make significant changes |
| `contexts` | Where the skill applies: `any`, `single-paper`, `paper-set`, `library-corpus`, `note`, or `visual-input`; separate several with commas |
| `activation` | `auto` (the Agent may load it), `manual` (only from the `/` menu), or `both` |
| Instruction body | Markdown text after the closing `---`. The Agent reads it when the skill applies |

### Managing Skills

- **Left-click** a skill in the portal to open it in your default text editor.
- **Right-click** a skill for a context menu with **Show in file system** and **Delete** options.
- Skills are stored in `{ZoteroDataDir}/llm-for-zotero/skills/` as `.md` files.
- If you delete a built-in skill, it stays deleted across restarts &mdash; the plugin respects your choice. New built-in skills added in plugin updates are seeded automatically without restoring skills you removed.

<div class="rtd-tip">
  <div class="rtd-admonition-title">Tip</div>
  You can share custom skills with others by exchanging <code>.md</code> files. Drop a skill file into your skills folder and it will be picked up on the next plugin startup or after creating/deleting any skill in the portal.
</div>

---

<a id="webchat-setup-chatgpt-web-sync"></a>

## WebChat Setup (ChatGPT, DeepSeek & Gemini Web Sync)

**WebChat mode** sends your questions to [chatgpt.com](https://chatgpt.com), [chat.deepseek.com](https://chat.deepseek.com), or [gemini.google.com](https://gemini.google.com) through a browser extension, then streams responses back into Zotero.
It is useful when you want browser-chat access without a provider API key.

<img src="/images/llm-for-zotero/webchat.gif" alt="Animation showing WebChat mode connected to chatgpt.com">

### Prerequisites

- Access to the selected provider site.
  Account requirements depend on the site and feature; Gemini may allow anonymous text conversations, while PDF upload and conversation history may require sign-in.
- A Chromium-based browser such as Chrome, Edge, Brave, or Arc.

### Step-by-step setup

**1. Download the browser extension:**

Go to [github.com/yilewang/sync-for-zotero](https://github.com/yilewang/sync-for-zotero) &rarr; **Releases**, download the latest `extension.zip`, and unzip it to a folder on your computer.

**2. Install the extension (sideload):**

- Open your browser and navigate to `chrome://extensions`
- Enable **Developer Mode** (toggle in the top-right corner)
- Click **Load unpacked** and select the unzipped extension folder
- The "Sync for Zotero" extension should now appear in your extensions list

**3. Configure the plugin:**

In Zotero &rarr; **Preferences** &rarr; **llm-for-zotero**:

| Setting | Value |
|---|---|
| Auth Mode | `WebChat` |
| Model | `chatgpt.com`, `chat.deepseek.com`, or `gemini.google.com` |

**4. Start chatting:**

Open the matching ChatGPT, DeepSeek, or Google Gemini tab in your browser and keep it open.
For Gemini, open [gemini.google.com/app](https://gemini.google.com/app) and choose the Gemini model on the website; the Zotero bridge does not change the site's model selection.
In Zotero, the plugin panel shows a WebChat indicator with a connection dot (green = connected, red = not detected).
Type a question and send.

### WebChat features

- **PDF attachment** &mdash; Right-click the paper chip to toggle PDF sending (purple = send, grey = skip).
- **Screenshots** &mdash; Use the camera button to attach figure screenshots to your message.
- **Conversation history** &mdash; Click the clock icon to browse and load past web conversations.
- **Exit** &mdash; Click the "Exit" button to return to regular API mode.

#### Gemini notes

- Use the latest paired releases of **llm-for-zotero** and **Sync for Zotero**.
  Older browser-extension builds do not advertise Gemini support and Zotero will stop the request before sending it.
- Gemini WebChat can send one PDF per request and can also attach screenshots.
  Wait for the attachment preview to finish loading before sending.
- If Gemini's composer still contains an attachment from an earlier attempt, remove it before retrying.
  If Zotero says a send could not be verified, inspect the Gemini tab before retrying to avoid submitting the same prompt twice.
- Gemini responses and history are read from the rendered page, so a Gemini website update may temporarily require a Sync for Zotero adapter update.

<div class="rtd-warning">
  <div class="rtd-admonition-title">Important</div>
  WebChat mode requires the matching provider tab to stay open with the Sync for Zotero extension active. Keep the browser and Zotero in the same desktop session, avoid minimizing or backgrounding the active WebChat tab during a request, and watch for the green connection dot. WebChat currently supports paper chat only; library chat is not supported yet.
</div>

### Technical Notes

- The plugin embeds a lightweight HTTP relay server on Zotero's built-in port (23119). The browser extension polls this relay to exchange queries and responses.
- Agent mode, slash commands (`/`), and the reference picker (`@`) are disabled in WebChat mode.
- Reasoning/thinking mode is controlled on the web app side, not through the plugin's reasoning toggle.

---

## Codex Setup (ChatGPT Plus Subscribers)

If you have a **ChatGPT Plus** subscription, you can use Codex models in the plugin without a separate API key by signing in through the Codex CLI.

New users should choose **Codex App Server** from the **Agent** tab. The older **Codex Auth (Legacy)** path remains available for existing users, but is planned for future deprecation after app-server validation.

- **Codex App Server (Recommended)**: Spawns the local `codex app-server` CLI and talks to it over stdio. This is the official way to use Codex in third-party apps and the preferred setup for new users. It is configured from the **Agent** tab and appears as a dedicated **Codex** button in the chat header.
- **Codex Auth (Legacy)**: Uses the ChatGPT/Codex Responses backend directly. Existing users can keep this configuration for now, but new users should choose `Codex App Server`.

_Special thanks to [@jianghao-zhang](https://github.com/jianghao-zhang) for contributing the original Codex Auth integration, and to [@boltma](https://github.com/boltma) for designing the Codex App Server integration._

### Step-by-step setup

**1. Install the Codex CLI** (one-time):

```bash
# macOS / Linux (requires Node.js 18+)
npm install -g @openai/codex

# macOS alternative (no Node.js needed)
brew install --cask codex
```

On Windows, install Codex from PowerShell or Command Prompt rather than WSL, so Zotero MCP can use the Windows-local loopback connection.

**2. Log in with your ChatGPT account:**

```bash
codex login
```

A browser window opens — sign in with your ChatGPT Plus account. Credentials are saved to `~/.codex/auth.json`.

**3. Enable Codex App Server in Zotero:**

Open Zotero &rarr; **Preferences** &rarr; **llm-for-zotero** &rarr; **Agent** tab:

| Setting | Recommended value |
|---|---|
| Enable Codex App Server integration | `On` |
| Model | e.g. `gpt-5.4` |
| Reasoning | `auto`, `low`, `medium`, `high`, or `xhigh` |

Click **Test connection** to verify that Zotero can launch `codex app-server`, then click the **Codex** button in the chat header to enter the Codex conversation system.

`Codex App Server` and `Claude Code` are mutually exclusive runtime modes in the Agent tab. Disable one before enabling the other.

Existing users who need the old path can open the **AI Providers** tab, choose `Codex Auth (Legacy)`, keep API URL `https://chatgpt.com/backend-api/codex/responses`, and use the same Codex model name, for example `gpt-5.5`.

<img src="/images/llm-for-zotero/codex_claude.png" alt="Recommended Codex App Server configuration">

### Codex Auth (Legacy) Technical Notes

- Reads local credentials from `~/.codex/auth.json` (or `$CODEX_HOME/auth.json`).
- Automatically attempts token refresh on 401 responses.
- Embeddings are not supported in legacy direct mode yet.
- Local PDF/reference text grounding and screenshot/image inputs are supported.
- The Responses `/files` upload + `file_id` attachment flow is not supported yet.

---

## Claude Code Setup (Experimental)

Claude Code mode runs Claude Code as a separate conversation system inside Zotero. It reuses the sidebar and standalone-window UI, but has its own `paper` / `open` scope state, model and reasoning settings, permission semantics, slash commands, and project skills. Claude chats appear in the same history list as your other chats, with a small **Claude** label.

_Special thanks to [@jianghao-zhang](https://github.com/jianghao-zhang), who built the Claude Code integration and its bridge ([`cc-llm4zotero-adapter`](https://github.com/jianghao-zhang/cc-llm4zotero-adapter)). The bridge now ships inside the plugin, with the author's permission, under [`packages/claude-bridge`](https://github.com/yilewang/llm-for-zotero/tree/main/packages/claude-bridge)._

<div class="rtd-warning">
  <div class="rtd-admonition-title">Under development</div>
  Claude Code mode currently does <strong>not</strong> support native Zotero API operations. Use the built-in <a href="#agent-mode-beta">Agent Mode</a> for native library tools such as reading item state, editing notes, tagging papers, updating metadata, or importing items.
</div>

### Prerequisites

You need two things on your computer. The plugin takes care of the rest.

- **Node.js 18 or newer.** Download it from [nodejs.org](https://nodejs.org) (the LTS version is fine), or use a version manager such as NVM, Volta, or Homebrew. Check it in a terminal with `node --version`.
- **Claude Code, installed and logged in.** Follow Anthropic's [installation](https://code.claude.com/docs/en/installation.md) and [authentication](https://code.claude.com/docs/en/authentication.md) guides. You can use your Claude subscription or an API key.

### 1. Install and Log In to Claude Code

In a terminal, run:

```bash
claude
```

Finish the login steps it shows, then close it. You only need to do this once.

### 2. Turn On Claude Code Inside Zotero

Open Zotero &rarr; **Preferences** &rarr; **llm-for-zotero** &rarr; **Agent** tab, and switch on **Claude Code**. Recommended settings:

| Setting | Recommended value |
|---|---|
| **Claude Code** | `On` |
| **Config source** | `default - user + project + local` |
| **Permission mode** | `safe` |
| **Default model** | `sonnet` |
| **Default reasoning** | `auto` |

Then click the **Claude Code** button in the chat header, or click the runtime badge in the message box and pick **Claude**, to enter Claude Code mode.

<figure class="rtd-doc-figure rtd-doc-figure--wide">
  <img src="/images/llm-for-zotero/agent/claude-settings.png" alt="Claude Code settings showing the bridge status with Restart and Open log buttons" width="1600" height="1331" loading="lazy">
  <figcaption>The settings show whether Claude Code is running, with <strong>Restart</strong> and <strong>Open log</strong> buttons.</figcaption>
</figure>

That is all. You do **not** need to download or start a bridge yourself. While Claude Code mode is on, Zotero starts a small helper program (the "bridge") that connects Zotero to your Claude Code. It runs only on your computer, only answers Zotero, and stops when you quit Zotero or turn Claude Code off. If you never turn on Claude Code, nothing extra runs.

The **Bridge** section at the top of the Claude Code settings shows whether the bridge is running. Use **Restart bridge** if something seems stuck, and **Open log** to see what the bridge reported.

Keep **Config source** on `default` unless you already understand Claude Code settings layers. In `default`, Claude Code can use your normal user settings plus Zotero-managed project and per-conversation local settings. The other options are:

- `user-only`: only your machine-wide Claude settings.
- `zotero-only`: only Zotero-managed project and local settings.

### 3. If It Does Not Work

The Bridge status line says what is wrong in plain words. The usual causes:

| The status says | What to do |
|---|---|
| **Node.js was not found** | Install Node.js 18 or newer. If it is installed but Zotero cannot find it, run `which node` (macOS, Linux) or `where node` (Windows) in a terminal and paste the result into **Advanced** &rarr; **Node.js path**. |
| **needs Node.js 18 or newer** | Install a newer Node.js from [nodejs.org](https://nodejs.org). |
| **Claude Code was not found** | Install Claude Code. If it is installed, run `which claude` (macOS, Linux) or `where claude` (Windows) and paste the result into **Advanced** &rarr; **Claude Code path**. |
| Running, but Claude replies fail | Claude Code is probably not logged in. Run `claude` in a terminal and log in, then press **Restart bridge**. |
| **keeps stopping** | Press **Open log** to see why, fix the cause, then press **Restart bridge**. |

Zotero opened from the Dock or Start menu does not always see the same programs as your terminal. The plugin looks in the usual places (NVM, Volta, Homebrew, `~/.local/bin`, and the Claude Code installer's folder), but the two path settings are there if it still cannot find them.

**Advanced options**

- **Extra bridge options** passes command-line options to the bridge, for example `--additional-directories ~/Papers` to let Claude read another folder, or `--append-system-prompt-file ~/zotero-claude.md`. Press **Restart bridge** after changing it.
- **Use my own bridge** is for people who run the bridge themselves, for example inside WSL while Zotero runs on Windows, or on another computer. Zotero then sends Claude requests to the **Bridge URL** and does not start its own bridge. The bridge's code lives in [`packages/claude-bridge`](https://github.com/yilewang/llm-for-zotero/tree/main/packages/claude-bridge); see its README for how to run it by hand.

### Upgrading From the Old `cc-llm4zotero-adapter`

Earlier versions needed the separate [`cc-llm4zotero-adapter`](https://github.com/jianghao-zhang/cc-llm4zotero-adapter) repository and `npm run serve:bridge` or `npm run daemon:*`. That is no longer needed. Your Claude Code conversations, skills, and settings keep working, because the new bridge uses the same `~/Zotero/agent-runtime` and `~/Zotero/agent-state` folders.

If you installed the old macOS background service, it can stay, since it does not get in the way, but it is no longer used. Zotero tells you once if it finds it. To remove it, run this in your old adapter folder:

```bash
npm run daemon:uninstall
```

If you already deleted that folder, run these two commands instead:

```bash
launchctl bootout gui/$(id -u)/com.toha.ccbridge
rm ~/Library/LaunchAgents/com.toha.ccbridge.plist
```

### 4. Claude Project Skills and Commands

Zotero creates a Claude runtime root under your home directory, usually shaped like:

```text
~/Zotero/agent-runtime/profile-.../
```

Shared Claude project assets live in:

```text
CLAUDE.md
.claude/settings.json
.claude/skills/
.claude/commands/
```

Each Claude conversation also gets its own local `.claude` folder under the runtime `scopes/` tree, so per-conversation overrides do not leak into other chats.

### Models and Non-Anthropic Setups

The Zotero UI loads the model catalog advertised by the Claude Code bridge and preserves each model value exactly, including aliases, explicit model IDs, context-window variants, custom provider values, and future model families.
The chat model picker identifies the active conversation, so model discovery uses the same scoped `.claude/settings.local.json` stack as the turn.
The model preference remains editable when discovery is unavailable.
Claude Code is responsible for resolving or rejecting the selected value and for applying provider or proxy configuration.

---

## MinerU PDF Parsing

**MinerU** is an advanced PDF parsing engine that extracts high-fidelity Markdown from PDFs while preserving tables, equations, figures, and complex layouts that standard text extraction often mangles.

<img src="/images/llm-for-zotero/minerU.png" alt="Screenshot showing MinerU PDF parsing results in the plugin">

Parsed results are cached locally and reused in later conversations. When **Auto-parse newly added items** is enabled, newly added PDF attachments are sent to MinerU as they enter the Zotero library. If auto-parse is off, you can still parse selected or filtered PDFs from the **Manage Files** panel.

The MinerU cache is designed for AI, not as a second human PDF reader. Zotero stays the place where you read, annotate, and manage the original PDF. MinerU creates structured sidecar material that models can use: clean Markdown, section ranges, page hints, tables, equations, and extracted figure assets. This keeps the original Zotero UI mostly untouched while giving the assistant much better paper context than raw PDF text extraction.

For figure questions, MinerU acts as the index that locates each figure, while the image the model actually sees is a precise crop taken from the source PDF; see [Precise Figure Extraction](#precise-figure-extraction).

### How to Enable MinerU

1. Open Zotero &rarr; **Preferences** &rarr; **llm-for-zotero**.
2. Find the **MinerU** section and check **Enable MinerU**.
3. Keep cloud mode enabled, or check **Use local MinerU server** for local mode.
4. For cloud mode, optionally enter your own MinerU API key.
5. For local mode, run a self-hosted `mineru-api` server and keep the default base URL (`http://127.0.0.1:8000`) unless your server uses a different address.
6. To parse new imports automatically, check **Auto-parse newly added items**. Then add or import a PDF into your Zotero library. The plugin will parse newly added PDF attachments with MinerU and cache the result for future conversations.

### Using Your Own API Key

MinerU can start without an API key through the built-in API, but a personal key is strongly recommended. The built-in API may no longer be supported after **June 1, 2026**.

To get a free personal key:

1. Go to [mineru.net](https://mineru.net) and create an account.
2. Generate an API key in your account settings.
3. Paste the key into Zotero &rarr; **Preferences** &rarr; **llm-for-zotero** &rarr; **MinerU**.
4. Click **Test Connection** to verify.

When a personal API key is provided, the plugin calls the MinerU API directly at `https://mineru.net/api/v4`.

### Using a Local MinerU Server

Local MinerU server support was contributed by [@renyong18](https://github.com/renyong18) in [PR #152](https://github.com/yilewang/llm-for-zotero/pull/152).

Local mode sends PDFs to a self-hosted `mineru-api` server through `POST /file_parse` and stores the returned ZIP output in the same local cache format as cloud parsing. The default base URL is `http://127.0.0.1:8000`.

**Prerequisites for local mode:**

1. Install MinerU and run `mineru-api`; see the [MinerU docs](https://github.com/opendatalab/MinerU) for installation.
2. Make sure required models are downloaded. `mineru-api` lazy-loads on first request, so the first parse after starting the server or switching backend can take noticeably longer than steady state.

You can pick a `Backend` in the local section:

- `pipeline` (default) — general-purpose, multi-language, CPU-friendly.
- `vlm` — VLM-based, high accuracy on Chinese/English documents, requires GPU.
- `hybrid` — newer high-accuracy hybrid pipeline, multi-language, requires local compute.

`Test Connection` checks that the server process responds at `/health`; it does not guarantee that all models are warmed up.

**Start and stop the server automatically** (contributed by [@AkimioJR](https://github.com/AkimioJR) in [#530](https://github.com/yilewang/llm-for-zotero/pull/530)):

- Enter the command that starts the server, for example `mineru-api`.
- The plugin starts the server when it parses a PDF.
- It stops the server after a set idle time, to free memory and GPU memory. The default is 10 minutes.
- Preferences show the server status, with **Start** and **Stop** buttons.
- The server also stops when you quit Zotero.

With the default `127.0.0.1` address, PDFs stay on your machine. If you change the base URL to a LAN or remote server, PDFs are sent to that server.

**Pause / cancel limitation:** `mineru-api` exposes no cancel or DELETE endpoint, only `POST /file_parse`, `POST /tasks`, `GET /tasks/{id}`, `GET /tasks/{id}/result`, and `GET /health`. When you click Pause, the plugin stops the queue and aborts the HTTP wait, but the parse already running on the server keeps executing until it finishes, so GPU/CPU work will not stop immediately. Restart the `mineru-api` process yourself if you need to abort immediately, such as when switching backend without waiting.

### Managing MinerU Caches

The **MinerU** preferences tab includes a **Manage Files** panel for maintaining parsed PDF caches:

- Browse cached and uncached PDFs by collection, tag, title, author, year, and added date.
- Start parsing all visible files, only filtered files, or selected files.
- Repair local MinerU caches and synced packages when metadata or files drift.
- Delete all, filtered, selected, or single-item caches from the manager.
- Use tag filters, including automatic Zotero tags, to choose which papers are included in bulk actions.

Automatic cache management is event-driven. The plugin watches Zotero item additions, finds PDF attachments on regular items or standalone PDFs, and waits briefly before processing so Zotero can finish importing the file. If the Zotero item exists but the PDF file path or parent attachment list is not ready yet, the queue retries after short delays instead of failing immediately. Deleted attachments are removed from the queue, and already cached PDFs are skipped.

The queue respects the same filters as bulk parsing. It skips PDFs that already have a local MinerU cache or an available synced package, avoids duplicate queue entries, and shows live status through the MinerU dots: ready, processing, or failed. A normal metadata edit does not repeatedly reparse a finished PDF; modify events are mainly used to recover in-progress, failed, or file-readiness cases.

When a parse succeeds, the plugin writes a cache under Zotero's data directory in `llm-for-zotero-mineru/<attachmentId>/`. The canonical files include `full.md`, `manifest.json`, `content_list.json`, extracted assets such as images, and `_llm_source.json` provenance. The manifest is built for AI access: it maps section titles to character ranges, page hints, and section-level figures so the agent can read the relevant slice of `full.md` instead of loading the whole paper for every question.

After writing a MinerU cache, the plugin clears stale in-memory text and embedding caches for that PDF. The next question can then use MinerU-quality chunks and regenerate retrieval data from the better parsed text.

Advanced parsing filters can skip files before automatic or bulk parsing:

- **Skip files over N pages** controls the maximum page count used by Start All, Start Filtered, Start Selected, and auto-parse. The default is 100 pages.
- **Exclude PDFs by Filename** accepts comma-separated substrings, or regex patterns wrapped in `/slashes/`, for translated copies, supplements, or other files you do not want parsed automatically.

If **Sync MinerU cache with Zotero file sync** is enabled, the plugin can create companion ZIP attachments containing `full.md`, `manifest.json`, `content_list.json`, and extracted assets. Sync is optional and default-off. Existing local caches sync only when you request it from the MinerU tab, and synced packages can restore a missing local cache when needed. The repair path validates package metadata and content hashes, prunes duplicate packages for the same source PDF, removes orphaned local caches, and restores usable local cache folders from synced ZIP packages.

### Precise Figure Extraction

<img src="/images/llm-for-zotero/figure_extraction.png" alt="Figures detected and cropped directly from source PDF pages, each outlined in red">

When Agent Mode answers a question about a figure — or saves a note that discusses one — it pulls a **precise, high-resolution crop straight from the source PDF**, using the MinerU cache only as an index.
Ask something like *"What does Figure 3 show?"* and the agent locates the figure from the MinerU parse, cuts a clean crop from the original PDF page, and reads that exact image, caption and panels included.

This is different from [Figure Interpretation](#figure-interpretation), where you take the screenshot yourself.
Here the agent finds and crops the figure for you, and those same crops are what get embedded when you save a figure to your notes.

| Step | What happens |
|---|---|
| **Index with MinerU** | The MinerU parse supplies figure labels, captions, and page hints. |
| **Crop from the PDF** | The figure image is cut directly from the original PDF page, not from MinerU's own images, so labels and panels stay sharp. |
| **Cache and reuse** | Each crop is fingerprinted against the PDF and reused by later questions and notes; the cache repairs itself when the source changes. |
| **Embed in notes** | Saving a figure note embeds the crop as `![Figure N](…)` and auto-imports it as a Zotero attachment. |

**Good to know:**

- **No setup.** Crops are produced by a small extraction runtime that the plugin downloads and manages per platform, so you never install Python or any other tool yourself.
- **Figures, not tables.** Tables are read as structured Markdown text from the MinerU parse, so figure extraction skips them by design.
- **Requires a MinerU cache.** Figure extraction needs the paper to be parsed by MinerU first. Without a cache, the agent falls back to captions and surrounding text and tells you it could not extract the figure image.

<div class="rtd-tip">
  <div class="rtd-admonition-title">Tip</div>
  Figure handling is governed by the <code>analyze-figures</code> skill, which requires <a href="#agent-mode-beta">Agent Mode</a>. Open the <a href="#skills">Skills</a> portal to tune how figures are located, interpreted, and embedded.
</div>

---

## Privacy and Data Flow

- In standard provider mode, paper content and user messages are sent to the model provider you configure.
- In local-model mode, requests go to the local OpenAI-compatible endpoint you configure.
- In WebChat mode, requests are relayed through the browser extension to `chatgpt.com`, `chat.deepseek.com`, or `gemini.google.com`.
- In cloud MinerU mode, PDFs selected for automatic or manual MinerU parsing are sent to MinerU.
- In local MinerU mode, PDFs selected for automatic or manual MinerU parsing are sent to the local or remote `mineru-api` server you configure.
- Conversation history and cached paper context are stored locally by the plugin.
- Agent Mode write operations are routed through reviewable actions and session undo where supported.

---

## Troubleshooting

| Symptom | What to check |
|---|---|
| **Test Connection fails** | Confirm the base URL, API key, model name, and provider protocol. |
| **The assistant cannot see a paper** | Reopen the PDF tab, then send a new message so the plugin can rebuild context. |
| **WebChat shows a red dot** | Keep the selected ChatGPT, DeepSeek, or Gemini tab open and confirm the latest Sync for Zotero extension is loaded. |
| **Gemini WebChat is rejected before sending** | Update both llm-for-zotero and Sync for Zotero, reload `gemini.google.com/app`, and confirm Gemini's composer is ready. |
| **Codex App Server fails** | Run `codex login`, confirm `codex` is on `PATH`, then click **Test connection** again. |
| **Claude Code mode hangs** | Read the **Bridge** status line in the Claude Code settings, press **Open log**, then press **Restart bridge**. See [If It Does Not Work](#3-if-it-does-not-work). |
| **MinerU parsing fails** | Add a personal MinerU API key for cloud mode, or confirm your local `mineru-api` server responds at `/health`, then retry **Test Connection**. |

For bugs or unclear failures, please [open an issue](https://github.com/yilewang/llm-for-zotero/issues).

---

## Roadmap

- [x] Agent mode (beta)
- [x] MinerU PDF parsing
- [x] GitHub Copilot auth
- [x] WebChat mode (ChatGPT, DeepSeek, and Google Gemini web sync)
- [x] Standalone window mode ([#78](https://github.com/yilewang/llm-for-zotero/issues/78))
- [x] File-based notes (Obsidian, Logseq, any Markdown directory)
- [x] Claude Code integration
- [x] Codex App Server integration
- [x] Customized skills
- [x] Local MinerU support
- [x] Cross-device synchronization (MinerU cache)
- [ ] Agent memory system

---

## Frequently Asked Questions

**Is it free to use?**

Yes, the plugin is completely free and open source (AGPL v3). You only pay for API calls to your chosen provider. With Codex App Server, ChatGPT Plus subscribers can use their existing subscription without a separate API key.

**Does it work with local models?**

Yes. As long as the local model provides an OpenAI-compatible HTTP API, you can connect it by entering the appropriate API Base URL and key in settings.

**Is my data used to train models?**

The plugin does not train models. Data handling depends on the backend you choose: your configured API provider, local model, WebChat, Codex, Claude Code, or MinerU.

**How do I report a bug or request a feature?**

Please [open an issue](https://github.com/yilewang/llm-for-zotero/issues) on GitHub.

---

## Contributing & Support

Contributions are welcome! Whether it's bug reports, feature requests, or pull requests — feel free to [open an issue](https://github.com/yilewang/llm-for-zotero/issues) or submit a PR on [GitHub](https://github.com/yilewang/llm-for-zotero).

If you find this plugin helpful, consider:
- Leaving a star on [GitHub](https://github.com/yilewang/llm-for-zotero)
- [Buying me a coffee](https://buymeacoffee.com/yat.lok)
- Donating via Alipay QR code below:
<img src="/images/llm-for-zotero/alipay.png" alt="Alipay donation QR code" style="max-width:200px;">

---

## Star History

[![Star History Chart](https://api.star-history.com/image?repos=yilewang/llm-for-zotero&type=date&legend=top-left)](https://www.star-history.com/?repos=yilewang%2Fllm-for-zotero&type=date&legend=top-left)
