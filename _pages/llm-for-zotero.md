---
layout: docs
title: "LLM-for-Zotero — Documentation"
permalink: /llm-for-zotero/
author_profile: false
lang: en
lang_alt: /llm-for-zotero/zh/
---

<h1 id="overview">LLM-for-Zotero</h1>

<div class="rtd-badges">
  <a href="https://www.zotero.org"><img src="https://img.shields.io/badge/Zotero-7-green?style=flat-square&logo=zotero&logoColor=CC2936" alt="Zotero 7"></a>
  <a href="https://www.zotero.org"><img src="https://img.shields.io/badge/Zotero-8-green?style=flat-square&logo=zotero&logoColor=CC2936" alt="Zotero 8"></a>
  <a href="https://www.gnu.org/licenses/agpl-3.0"><img src="https://img.shields.io/badge/License-AGPL_v3-blue.svg?style=flat-square" alt="AGPL v3"></a>
  <a href="https://github.com/yilewang/llm-for-zotero/releases"><img src="https://img.shields.io/github/v/release/yilewang/llm-for-zotero?style=flat-square" alt="Latest release"></a>
  <a href="https://github.com/yilewang/llm-for-zotero/stargazers"><img src="https://img.shields.io/github/stars/yilewang/llm-for-zotero?style=flat-square" alt="GitHub Stars"></a>
  <a href="https://yilewang.github.io"><img src="https://img.shields.io/badge/website-yilewang.github.io-informational?style=flat-square&logo=github" alt="Personal website"></a>
</div>

<p style="margin: 4px 0 20px; font-size: 0.9em;">📖 <a href="/llm-for-zotero/zh/"><strong>中文版使用手册</strong></a></p>

**llm-for-zotero** is a plugin for [Zotero](https://www.zotero.org/) that integrates Large Language Models directly into the Zotero PDF reader. Unlike tools that require uploading PDFs to a web portal, this plugin lets you chat with your papers without leaving Zotero. It sits quietly in the reader sidebar, ready whenever you need it.

<img src="/images/llm-for-zotero/demo.png" alt="Screenshot of the llm-for-zotero sidebar inside the Zotero PDF reader">

<div class="rtd-feature-grid">
  <div class="rtd-feature-card">
    <strong>Grounded Paper Chat</strong>
    <p>Ask questions about any open PDF and jump from model citations back to the source passage.</p>
  </div>
  <div class="rtd-feature-card">
    <strong>Multi-Provider Support</strong>
    <p>OpenAI, Gemini, DeepSeek, local OpenAI-compatible models, and more.</p>
  </div>
  <div class="rtd-feature-card">
    <strong>Agent Mode (Beta)</strong>
    <p>An autonomous agent that manages your library, runs terminal commands, and accesses local files — with approval before changes are applied.</p>
  </div>
  <div class="rtd-feature-card">
    <strong>MinerU PDF Parsing</strong>
    <p>Use high-fidelity PDF parsing that preserves tables, equations, figures, and complex layouts.</p>
  </div>
  <div class="rtd-feature-card">
    <strong>Standalone Window</strong>
    <p>Open the LLM Assistant in its own dedicated window with a full-sized chat interface and conversation history sidebar.</p>
  </div>
  <div class="rtd-feature-card">
    <strong>Obsidian Integration</strong>
    <p>Write notes from Zotero papers directly to your Obsidian vault with metadata, citations, and extracted figures.</p>
  </div>
  <div class="rtd-feature-card">
    <strong>Customizable Skills</strong>
    <p>9 built-in skills guide the agent's workflows for common tasks. Create your own with simple Markdown files.</p>
  </div>
</div>

---

## Recent Updates

- **Skills**: Customizable guidance files that shape how the agent handles different tasks. 9 built-in skills included, plus a portal for creating your own. See [Skills](#skills).
- **Standalone Window Mode**: Open the LLM Assistant in its own dedicated window, separate from the reader sidebar. See [Standalone Window Mode](#standalone-window-mode).
- **Obsidian Integration**: Write notes from Zotero papers directly to your Obsidian vault with customizable templates. See [Obsidian Integration](#obsidian-integration).
- **Agent Mode (Beta)**: LLM-for-Zotero can now act as an autonomous agent inside your Zotero library.
- **Terminal & File Access**: The agent can execute shell commands and read/write files on your local machine — like a coding agent inside Zotero.
- **MCP Server**: External AI agents can connect to Zotero via the built-in Model Context Protocol server.
- **Codex auth**: ChatGPT Plus subscribers can use Codex models such as `gpt-5.4` without a separate API key.
- **MinerU PDF parsing**: High-fidelity extraction now preserves tables, equations, and figures more accurately.

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
2. Paste your **API Base URL**, **secret key**, and **model name**.
3. Click **Test Connection** to verify.

<img src="/images/llm-for-zotero/model_setting.gif" alt="Provider and model configuration">

The plugin natively supports multiple provider protocols: `responses_api`, `openai_chat_compat`, `anthropic_messages`, `gemini_native`, and more.

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

When you ask a question, the model generates answers grounded in the paper's content. Click any citation to jump straight to the source passage in your Zotero library.

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

## Custom Quick-Action Presets

<img src="/images/llm-for-zotero/shortcuts.gif" alt="Custom quick-action preset configuration">

Customize quick-action presets to match your research workflow. Built-in presets include:

- **Summarize** — generate a concise summary
- **Key Points** — extract main findings
- **Methodology** — describe the research methods
- **Limitations** — identify weaknesses or gaps

---

## Standalone Window Mode

<img src="/images/llm-for-zotero/standalone_window.png" alt="LLM Assistant standalone window">

Open the LLM Assistant in its own dedicated window, separate from the Zotero reader sidebar. The standalone window provides a full-sized chat interface with a collapsible conversation history panel on the left.

### How to open

| Method | Action |
|---|---|
| **Keyboard shortcut** | `Ctrl+Shift+L` (macOS: `Cmd+Shift+L`) |

### Features

- **Paper chat & Library chat** &mdash; Switch between paper-specific and library-wide conversations using the tabs at the top.
- **Conversation history** &mdash; Browse past conversations organized by date (Today, Yesterday, Last 7/30 days, Older) in the collapsible left sidebar.
- **Full feature parity** &mdash; Everything available in the reader sidebar &mdash; screenshots, file uploads, agent mode, quick-action presets, reference picker &mdash; works identically in the standalone window.
- **Search** &mdash; Search through your conversation history using the search overlay.

While the standalone window is open, the reader sidebar panels show a placeholder with options to **Focus Window** (bring the standalone window to the foreground) or **Close Window & Return Here** (close standalone and restore the sidebar).

---

## Obsidian Integration

The agent can write notes from your Zotero papers directly into your [Obsidian](https://obsidian.md/) vault &mdash; with full metadata, citations, and optionally extracted figures.

### Configuration

Open **Preferences** &rarr; **llm-for-zotero** and scroll to the **Obsidian Integration** section.

<img src="/images/llm-for-zotero/obsidian_setting.png" alt="Obsidian Integration settings" style="max-width:512px;">

| Setting | Description | Default |
|---|---|---|
| **Vault Path** | Absolute path to your Obsidian vault root | _(required)_ |
| **Default Folder** | Subfolder for notes (created if it doesn't exist) | `Logs` |
| **Attachments Folder** | Subfolder for copied figures and images | `imgs` |
| **Note Template** | Markdown template with `{% raw %}{{title}}{% endraw %}`, `{% raw %}{{date}}{% endraw %}`, `{% raw %}{{content}}{% endraw %}` placeholders | Built-in default |

Click **Test Write Access** to verify the plugin can write to your vault.

### How it works

Ask the agent to write a note to Obsidian (e.g. *"Summarize this paper and save it to Obsidian"*). The agent will:

1. **Gather content** from the paper (metadata, summary, key points, etc.).
2. **Compose a Markdown note** using your configured template.
3. **Add YAML frontmatter** with title, date, tags, authors, year, and citation key.
4. **Copy figures** (optional) from MinerU-parsed PDFs into the attachments folder.
5. **Write the note** to `{vault_path}/{default_folder}/{title}.md`.

<img src="/images/llm-for-zotero/obsidian_example.png" alt="A Zotero paper note in Obsidian">

Notes use [Pandoc citation syntax](https://pandoc.org/MANUAL.html#citations) (`[@citekey]`), compatible with Obsidian's Zotero Integration and Pandoc plugins.

<div class="rtd-tip">
  <div class="rtd-admonition-title">Tip</div>
  The Obsidian integration works best when <strong>Agent Mode</strong> is enabled. The agent handles content extraction, template formatting, and file writing automatically.
</div>

---

## Agent Mode (Beta)

<div class="rtd-warning">
  <div class="rtd-admonition-title">Important</div>
  Agent Mode is disabled by default. Enable it in <strong>Preferences</strong>, then toggle <strong>Agent (beta)</strong> in the context bar.
</div>

When enabled, the LLM becomes an **autonomous agent** that can read, search, and write within your Zotero library — and beyond. In addition to library operations, the agent can execute terminal commands and access files on your local machine, functioning like a coding agent inside Zotero. All write operations require your explicit approval before execution.

### Read Tools

These tools let the agent explore your library and the scholarly web without modifying anything.

| Tool | Description |
|---|---|
| `query_library` | Search and list Zotero items, collections, related papers, and duplicates. Supports multiple query modes (list, search, duplicates, unfiled, untagged) with filtering by collection, PDF status, and tags |
| `read_library` | Read structured item state: metadata, notes, annotations, attachments (all types), and collection membership |
| `inspect_pdf` | Advanced PDF operations: read front matter, search pages, retrieve evidence, render pages, capture the active reader view, and read specific chunks or full documents |
| `search_literature_online` | Search live scholarly sources (OpenAlex, arXiv, EuropePMC) or fetch external metadata (CrossRef, Semantic Scholar). Modes: recommendations, references, citations, search, metadata |

### Write Tools

All write tools require human confirmation before changes take effect.

| Tool | Description |
|---|---|
| `apply_tags` | Add or remove tags on one or more papers, with batch support |
| `update_metadata` | Update metadata fields (title, authors, DOI, journal, abstract, etc.) on items |
| `move_to_collection` | Move items between Zotero collections |
| `manage_collections` | Create or delete collections (folders) with optional nesting |
| `edit_current_note` | Create or edit Zotero notes, with local image import support |
| `import_identifiers` | Import papers by DOI, arXiv ID, or other identifiers — Zotero auto-retrieves metadata |
| `import_local_files` | Import local files (PDFs, documents) from the filesystem into Zotero |
| `manage_attachments` | Add or remove attachments (PDFs, supplementary files) on items |
| `merge_items` | Merge duplicate items: keeps master, moves all children from duplicates, then trashes duplicates |
| `trash_items` | Move items to trash |
| `undo_last_action` | Revert the last approved write batch |

### Terminal & File System Access

The agent includes two system-level tools that turn it into a **coding agent** capable of running scripts and processing data — all from within Zotero.

| Tool | Description |
|---|---|
| `run_command` | Execute shell commands on your local machine (zsh on macOS, bash on Linux, cmd.exe on Windows). Pipes, redirects, globbing, and all shell features work. 300-second timeout per command |
| `file_io` | Read and write files on your local filesystem. Supports UTF-8 and other encodings |

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
| **Audit Library** | Scan your library (or a collection) for items with incomplete metadata — missing abstract, DOI, tags, or PDF attachment. Optionally saves the report as a Zotero note |
| **Auto-Tag** | Find all papers without tags and open a batch tag-assignment dialog for your review |
| **Discover Related** | Find related papers to a seed paper through recommendations, references, or citations from scholarly sources |
| **Sync Metadata** | Fetch external metadata (CrossRef, Semantic Scholar) and apply updates across items |
| **Organize Unfiled** | Find unfiled items and organize them into collections via an interactive review workflow |

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

#### Read a figure directly

<img src="/images/llm-for-zotero/agent/single_figure.gif" alt="Agent reading a figure from the PDF">

#### Read multiple pages

<img src="/images/llm-for-zotero/agent/full_docs.gif" alt="Agent reading multiple pages">

#### Find related papers

<img src="/images/llm-for-zotero/agent/related_papers.gif" alt="Agent finding related papers">

#### Apply tags automatically

<img src="/images/llm-for-zotero/agent/apply_tags.gif" alt="Agent applying tags to a paper">

#### Write a note

<img src="https://raw.githubusercontent.com/yilewang/llm-for-zotero/main/assets/agent/write_note.png" alt="Agent writing a note">

### Safety & Confirmation

All write operations go through a **human-in-the-loop confirmation** workflow:

- The agent proposes a batch of changes (e.g. add tags, edit metadata).
- You review the proposed changes in a rich approval form.
- You can **approve**, **reject**, or **modify** before any changes are applied.
- If something goes wrong, use `undo_last_action` to revert.
- Terminal commands and file operations also require explicit approval before execution.

---

## Skills

<img src="/images/llm-for-zotero/skills.png" alt="Skills management portal" style="max-width:512px;">

Skills are customizable guidance files that shape how the agent approaches different types of requests. Each skill is a Markdown file with regex trigger patterns: when your message matches a skill's patterns, its instructions are automatically injected into the agent's system prompt, guiding it to use the most efficient tools and workflows for the task at hand.

<div class="rtd-tip">
  <div class="rtd-admonition-title">Note</div>
  Skills require <strong>Agent Mode</strong> to be enabled. They have no effect in standard chat mode.
</div>

### Built-in Skills

The plugin ships with **9 built-in skills** covering common research workflows. They are automatically copied to your skills folder on first run.

| Skill | Triggers on | What it guides the agent to do |
|---|---|---|
| `simple-paper-qa` | General questions about a paper (summary, findings, authors, TLDR) | Read the paper once and answer immediately &mdash; avoids unnecessary retrieval calls |
| `evidence-based-qa` | Questions about specific methods, results, data, or claims | Read first, then use targeted `search_paper` retrieval for specific evidence |
| `analyze-figures` | References to figures, tables, or diagrams by number | Use MinerU-cached images when available; send images directly to the model |
| `compare-papers` | Requests to compare or contrast multiple papers | Batch front-matter reads, then targeted evidence retrieval for comparison points |
| `library-analysis` | Requests to summarize, analyze, or audit your library | Use efficient scripting to iterate all items at once instead of paginating |
| `literature-review` | Requests for a literature review or research synthesis | Three-phase workflow: discover papers, deep-read the top 3&ndash;5, then synthesize thematically |
| `note-from-paper` | Requests to create reading notes from a paper | Read the paper, optionally include MinerU-extracted figures, write a Zotero note |
| `note-editing` | Requests to save, edit, or create notes | Smart defaults for note target (paper vs. standalone), prefer patches over full rewrites |
| `write-to-obsidian` | Requests to export to Obsidian | Compose with YAML frontmatter, Pandoc citations, and optional figure copying |

### How Skills Work

1. When you send a message in Agent Mode, the plugin tests your text against every skill's `match` patterns.
2. If **any** pattern in a skill matches (OR semantics), that skill's instruction is injected into the agent's system prompt for that request.
3. Multiple skills can activate simultaneously if your message matches more than one.
4. The agent uses these instructions as guidance for tool selection and workflow &mdash; they teach the agent *how* to approach a task, not *what* tasks it can do.

### Creating Custom Skills

1. Open the **Standalone Window** (`Ctrl+Shift+L` / macOS: `Cmd+Shift+L`).
2. Click the **Skills icon** in the top toolbar to open the Skills portal.
3. Click the **"+ New skill"** button to create a template file.
4. The template opens in your default text editor. Edit the three key parts:

```
---
id: my-custom-skill
match: /your regex pattern here/i
match: /another trigger pattern/i
---

Instructions for the agent when this skill matches.
Describe the workflow, which tools to prefer, and any constraints.
```

{:start="5"}
5. Save the file. The skill is loaded immediately &mdash; no restart needed.

**Skill file format:**

| Field | Required | Description |
|---|---|---|
| `id` | Yes | Unique identifier for the skill |
| `match` | Yes (at least one) | Regex pattern with optional flags (`i`, `g`, `m`, etc.). Repeatable &mdash; multiple `match` lines use OR semantics |
| Instruction body | Yes | Markdown text after the closing `---`. Injected into the agent's system prompt when the skill matches |

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

## WebChat Setup (ChatGPT Web Sync)

**WebChat mode** sends your questions directly to [chatgpt.com](https://chatgpt.com) through a browser extension — no API key needed. Queries are relayed from Zotero to the ChatGPT web interface, and responses stream back into the plugin.

### Prerequisites

- A ChatGPT account (Free, Plus, or Team)
- A Chromium-based browser (Chrome, Edge, Brave, Arc, etc.)

### Step-by-step setup

**1. Download the browser extension:**

Go to [github.com/yilewang/sync-for-zotero](https://github.com/yilewang/sync-for-zotero) &rarr; **Releases**, download the latest `sync-for-zotero-extension.zip`, and unzip it to a folder on your computer.

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
| Model | (auto-set to `chatgpt.com`) |

**4. Start chatting:**

Open a ChatGPT tab in your browser and keep it open. In Zotero, the plugin panel shows a "chatgpt.com" indicator with a connection dot (green = connected, red = not detected). Type a question and send.

### WebChat features

- **PDF attachment** &mdash; Right-click the paper chip to toggle PDF sending (purple = send, grey = skip).
- **Screenshots** &mdash; Use the camera button to attach figure screenshots to your message.
- **Conversation history** &mdash; Click the clock icon to browse and load past ChatGPT conversations.
- **Exit** &mdash; Click the "Exit" button to return to regular API mode.

### Technical Notes

- The plugin embeds a lightweight HTTP relay server on Zotero's built-in port (23119). The browser extension polls this relay to exchange queries and responses.
- Agent mode, slash commands (`/`), and the reference picker (`@`) are disabled in WebChat mode.
- Reasoning/thinking mode is controlled on the ChatGPT side, not through the plugin's reasoning toggle.

---

## Codex Auth Setup

If you have a **ChatGPT Plus** subscription, you can use **Codex auth** to access models like `gpt-5.4` without a separate API key. The plugin reuses your ChatGPT login via the Codex CLI.

_Special thanks to [@jianghao-zhang](https://github.com/jianghao-zhang) for contributions to this feature._

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
- Embeddings are not supported in codex auth mode yet.
- Local PDF/reference text grounding and screenshot/image inputs are supported.
- The Responses `/files` upload + `file_id` attachment flow is not supported yet.

---

## MinerU PDF Parsing

**MinerU** is an advanced PDF parsing engine that extracts high-fidelity Markdown from PDFs while preserving tables, equations, figures, and complex layouts that standard text extraction often mangles.

<img src="https://raw.githubusercontent.com/yilewang/llm-for-zotero/main/assets/minerU.png" alt="Screenshot showing MinerU PDF parsing results in the plugin">

When enabled, the plugin sends your PDF to the MinerU API for parsing and caches the result locally. All later interactions with that paper reuse the MinerU-parsed content, giving the model richer and more accurate context.

### How to Enable MinerU

1. Open Zotero &rarr; **Preferences** &rarr; **llm-for-zotero**.
2. Find the **MinerU** section and check **Enable MinerU**.
3. Optionally enter your own MinerU API key.
4. Open any PDF and start chatting. The plugin will parse the PDF on first use and cache the result for later conversations.

### Using Your Own API Key

The plugin provides a shared community proxy so MinerU works out of the box without an API key, but the shared quota is limited. For heavier usage:

1. Go to [mineru.net](https://mineru.net) and create an account.
2. Generate an API key in your account settings.
3. Paste the key into Zotero &rarr; **Preferences** &rarr; **llm-for-zotero** &rarr; **MinerU**.
4. Click **Test Connection** to verify.

When a personal API key is provided, the plugin calls the MinerU API directly at `https://mineru.net/api/v4`. Without a key, it uses the community proxy.

---

## Frequently Asked Questions

**Is it free to use?**

Yes, the plugin is completely free and open source (AGPL v3). You only pay for API calls to your chosen provider. With Codex auth, ChatGPT Plus subscribers can use their existing subscription without a separate API key.

**Does it work with local models?**

Yes. As long as the local model provides an OpenAI-compatible HTTP API, you can connect it by entering the appropriate API Base URL and key in settings.

**Is my data used to train models?**

No. You use your own API key, so data privacy is governed by the terms of your chosen provider.

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
