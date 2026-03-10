---
layout: splash
title: "LLM-for-Zotero"
permalink: /llm-for-zotero/
author_profile: false
excerpt: "Documentation for LLM-for-Zotero, a Zotero plugin that brings chat and agent workflows directly into the reader."
---

<style>
:root {
  --software-ink: #1e1d1a;
  --software-muted: #625d55;
  --software-line: #ddd5ca;
  --software-panel: #fffdf9;
  --software-panel-strong: #f7f1e8;
  --software-sidebar: #f4efe7;
  --software-accent: #b53a2d;
  --software-accent-deep: #8f271d;
  --software-accent-soft: #fae1dc;
  --software-teal: #1f6b68;
  --software-code: #fff7ed;
  --software-shadow: 0 18px 40px rgba(48, 38, 28, 0.08);
}

.page__content {
  max-width: 1320px !important;
  padding-top: 1.25rem !important;
}

.page {
  float: none !important;
  width: 100% !important;
}

.page__meta,
.page__share,
.page__related,
.sidebar,
.author__avatar,
.author__content,
.author__urls-wrapper {
  display: none !important;
}

.software-docs {
  color: var(--software-ink);
}

.software-docs p,
.software-docs li {
  font-size: 1rem;
  line-height: 1.75;
}

.software-docs code {
  background: var(--software-code);
  border: 1px solid rgba(181, 58, 45, 0.14);
  border-radius: 0.35rem;
  color: var(--software-accent-deep);
  padding: 0.1rem 0.35rem;
}

.docs-header {
  background: linear-gradient(135deg, rgba(250, 225, 220, 0.95), rgba(255, 253, 249, 0.98) 52%, rgba(232, 242, 239, 0.92));
  border: 1px solid var(--software-line);
  border-radius: 1.4rem;
  box-shadow: var(--software-shadow);
  margin-bottom: 2rem;
  overflow: hidden;
}

.docs-header__inner {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.9fr);
  padding: 2rem;
}

.docs-kicker {
  color: var(--software-accent);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
}

.docs-header h1 {
  font-size: clamp(2.2rem, 4vw, 3.6rem);
  letter-spacing: -0.03em;
  line-height: 1.05;
  margin: 0 0 0.9rem;
}

.docs-header p {
  color: var(--software-muted);
  font-size: 1.08rem;
  margin-bottom: 1rem;
  max-width: 40rem;
}

.docs-pillbar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin: 1rem 0 1.35rem;
}

.docs-pill {
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(181, 58, 45, 0.16);
  border-radius: 999px;
  color: var(--software-accent-deep);
  font-size: 0.92rem;
  font-weight: 600;
  padding: 0.45rem 0.8rem;
}

.docs-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.docs-actions .btn {
  border-radius: 999px;
  font-weight: 700;
}

.docs-quickbox {
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(31, 107, 104, 0.14);
  border-radius: 1.1rem;
  padding: 1.25rem;
}

.docs-quickbox h2 {
  font-size: 1rem;
  margin: 0 0 0.85rem;
}

.docs-quickbox ol {
  margin: 0;
  padding-left: 1.25rem;
}

.docs-quickbox li {
  margin-bottom: 0.6rem;
}

.docs-shell {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 270px minmax(0, 1fr);
  align-items: start;
}

.docs-nav {
  background: var(--software-sidebar);
  border: 1px solid var(--software-line);
  border-radius: 1rem;
  padding: 1rem;
  position: sticky;
  top: 5rem;
}

.docs-nav__title {
  color: var(--software-accent);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin-bottom: 0.9rem;
  text-transform: uppercase;
}

.docs-nav a {
  border-left: 2px solid transparent;
  color: var(--software-muted);
  display: block;
  font-size: 0.97rem;
  font-weight: 600;
  margin-bottom: 0.18rem;
  padding: 0.45rem 0.75rem;
  text-decoration: none;
  transition: all 0.18s ease;
}

.docs-nav a:hover,
.docs-nav a:focus {
  background: rgba(255, 255, 255, 0.78);
  border-left-color: var(--software-accent);
  color: var(--software-accent-deep);
}

.docs-content {
  display: grid;
  gap: 1.25rem;
}

.docs-section {
  background: var(--software-panel);
  border: 1px solid var(--software-line);
  border-radius: 1rem;
  box-shadow: var(--software-shadow);
  padding: 1.5rem;
  scroll-margin-top: 5.8rem;
}

.docs-section h2 {
  font-size: 1.65rem;
  letter-spacing: -0.03em;
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.docs-section h3 {
  font-size: 1.15rem;
  margin-top: 0;
  margin-bottom: 0.45rem;
}

.docs-subtitle {
  color: var(--software-muted);
  margin-bottom: 1.15rem;
}

.docs-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.docs-card {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(247, 241, 232, 0.8));
  border: 1px solid rgba(181, 58, 45, 0.12);
  border-radius: 0.95rem;
  padding: 1rem;
}

.docs-card p:last-child,
.docs-callout p:last-child {
  margin-bottom: 0;
}

.docs-card strong {
  color: var(--software-accent-deep);
}

.docs-steps {
  counter-reset: docstep;
  display: grid;
  gap: 0.9rem;
}

.docs-step {
  background: #fff;
  border: 1px solid var(--software-line);
  border-radius: 0.95rem;
  padding: 1rem 1rem 1rem 1.1rem;
  position: relative;
}

.docs-step::before {
  align-items: center;
  background: var(--software-accent);
  border-radius: 999px;
  color: #fff;
  counter-increment: docstep;
  content: counter(docstep);
  display: inline-flex;
  font-size: 0.85rem;
  font-weight: 700;
  height: 1.7rem;
  justify-content: center;
  margin-bottom: 0.7rem;
  width: 1.7rem;
}

.docs-media {
  border: 1px solid var(--software-line);
  border-radius: 0.95rem;
  margin-top: 1rem;
  overflow: hidden;
}

.docs-media img {
  display: block;
  width: 100%;
}

.docs-promptlist {
  display: grid;
  gap: 0.75rem;
}

.docs-prompt {
  background: #fff;
  border: 1px solid var(--software-line);
  border-left: 4px solid var(--software-teal);
  border-radius: 0.85rem;
  padding: 0.95rem 1rem;
}

.docs-prompt code {
  display: block;
  line-height: 1.6;
}

.docs-callout {
  background: linear-gradient(135deg, rgba(31, 107, 104, 0.08), rgba(255, 255, 255, 0.92));
  border: 1px solid rgba(31, 107, 104, 0.18);
  border-radius: 1rem;
  padding: 1.1rem;
}

.docs-callout h3 {
  color: var(--software-teal);
}

.docs-split {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.docs-list {
  margin: 0;
  padding-left: 1.2rem;
}

.docs-list li + li {
  margin-top: 0.45rem;
}

.docs-footer {
  align-items: center;
  background: linear-gradient(135deg, rgba(181, 58, 45, 0.08), rgba(31, 107, 104, 0.08));
  border: 1px solid var(--software-line);
  border-radius: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  margin-top: 1.2rem;
  padding: 1.25rem 1.4rem;
}

.docs-footer p {
  margin: 0;
}

@media (max-width: 1080px) {
  .docs-shell,
  .docs-header__inner,
  .docs-grid,
  .docs-split {
    grid-template-columns: 1fr;
  }

  .docs-nav {
    position: static;
  }
}

@media (max-width: 720px) {
  .docs-header__inner,
  .docs-section {
    padding: 1.2rem;
  }

  .docs-header h1 {
    font-size: 2.2rem;
  }
}
</style>

<div class="software-docs">
  <section class="docs-header">
    <div class="docs-header__inner">
      <div>
        <div class="docs-kicker">LLM-for-Zotero Documentation</div>
        <h1>LLM-for-Zotero</h1>
        <p>
          A Zotero plugin that brings large language models and agent workflows directly into the PDF reader so you can
          summarize papers, explain selected text, interpret figures, compare related work, and save useful outputs back
          into your notes.
        </p>
        <div class="docs-pillbar">
          <span class="docs-pill">Zotero 7 and 8</span>
          <span class="docs-pill">OpenAI, Gemini, DeepSeek, OpenAI-compatible APIs</span>
          <span class="docs-pill">Codex auth supported</span>
          <span class="docs-pill">Notes, screenshots, and file uploads</span>
          <span class="docs-pill">Agent mode with approvals</span>
        </div>
        <div class="docs-actions">
          <a class="btn btn--primary" href="https://github.com/yilewang/llm-for-zotero">GitHub</a>
          <a class="btn btn--inverse" href="https://github.com/yilewang/llm-for-zotero/releases">Download .xpi</a>
        </div>
      </div>
      <div class="docs-quickbox">
        <h2>Quick Start</h2>
        <ol>
          <li>Install the latest <code>.xpi</code> from the release page.</li>
          <li>Open Zotero preferences and configure your model provider.</li>
          <li>Open any PDF and launch the LLM sidebar from the right toolbar.</li>
          <li>Ask a question such as <code>Summarize this paper in five bullets.</code></li>
        </ol>
        <div class="docs-media">
          <img src="https://raw.githubusercontent.com/yilewang/llm-for-zotero/main/assets/demo.png" alt="LLM for Zotero interface" />
        </div>
      </div>
    </div>
  </section>

  <div class="docs-shell">
    <aside class="docs-nav" aria-label="LLM-for-Zotero page navigation">
      <div class="docs-nav__title">On This Page</div>
      <a href="#overview">Overview</a>
      <a href="#install">Install and configure</a>
      <a href="#workflow">Daily workflow</a>
      <a href="#functions">Main functions</a>
      <a href="#agent-mode">Agent mode</a>
      <a href="#codex-auth">Codex auth</a>
      <a href="#prompts">Starter prompts</a>
      <a href="#links">Project links</a>
    </aside>

    <div class="docs-content">
      <section class="docs-section" id="overview">
        <h2>Overview</h2>
        <p class="docs-subtitle">
          LLM for Zotero is designed for paper reading inside Zotero rather than in a separate browser tool.
          The plugin keeps your paper, context, screenshots, and notes in one workflow.
        </p>
        <div class="docs-grid">
          <div class="docs-card">
            <h3>Read in place</h3>
            <p>Open a paper in Zotero and chat with the current PDF without leaving the reader.</p>
          </div>
          <div class="docs-card">
            <h3>Ground answers in context</h3>
            <p>Use selected text, screenshots, or extra files to give the model exactly the evidence it needs.</p>
          </div>
          <div class="docs-card">
            <h3>Work across papers</h3>
            <p>Open multiple tabs and cite another paper with <code>/</code> when you want comparison or synthesis.</p>
          </div>
          <div class="docs-card">
            <h3>Keep results in Zotero</h3>
            <p>Save answers, selected snippets, screenshots, and conversation history directly into notes.</p>
          </div>
        </div>
      </section>

      <section class="docs-section" id="install">
        <h2>Install and configure</h2>
        <p class="docs-subtitle">You only need a Zotero install and one working model provider connection.</p>
        <div class="docs-steps">
          <div class="docs-step">
            <h3>Install the plugin</h3>
            <p>Download the latest <code>.xpi</code> from GitHub Releases, then in Zotero open <code>Tools -> Add-ons</code> and choose <code>Install Add-on From File</code>.</p>
          </div>
          <div class="docs-step">
            <h3>Open the settings panel</h3>
            <p>Restart Zotero, open <code>Preferences</code>, and switch to the <code>llm-for-zotero</code> tab.</p>
          </div>
          <div class="docs-step">
            <h3>Add a model connection</h3>
            <p>Pick your provider, then enter the API URL, secret key, and model name. You can set up multiple providers and models for different tasks.</p>
          </div>
          <div class="docs-step">
            <h3>Test before using</h3>
            <p>Use <code>Test Connection</code> to verify the configuration before starting your first paper chat.</p>
          </div>
        </div>
        <div class="docs-split" style="margin-top: 1rem;">
          <div class="docs-callout">
            <h3>Good first question</h3>
            <p><code>What is the main conclusion of this paper, and what evidence supports it?</code></p>
          </div>
          <div class="docs-callout">
            <h3>Supported extra files</h3>
            <p>PDF, DOCX, PPTX, TXT, and Markdown files can be added as extra context.</p>
          </div>
        </div>
      </section>

      <section class="docs-section" id="workflow">
        <h2>Daily workflow</h2>
        <p class="docs-subtitle">A typical reading session fits into four moves.</p>
        <div class="docs-grid">
          <div class="docs-card">
            <strong>1. Start broad</strong>
            <p>Ask for a summary, the research question, or the main takeaway to decide whether the paper is worth deeper reading.</p>
          </div>
          <div class="docs-card">
            <strong>2. Narrow with context</strong>
            <p>Select a paragraph, add a figure screenshot, or upload a related file when a specific claim needs more explanation.</p>
          </div>
          <div class="docs-card">
            <strong>3. Compare or extend</strong>
            <p>Use <code>/</code> to cite another open paper and ask how the methods, datasets, or conclusions differ.</p>
          </div>
          <div class="docs-card">
            <strong>4. Save what matters</strong>
            <p>Export a strong answer into Zotero notes so your reasoning and supporting context stay attached to the paper.</p>
          </div>
        </div>
      </section>

      <section class="docs-section" id="functions">
        <h2>Main functions</h2>
        <p class="docs-subtitle">These are the core tasks the plugin is built to handle.</p>

        <div class="docs-card">
          <h3>Summarize a paper quickly</h3>
          <p>The first turn loads the full paper context so the model can produce a summary grounded in the document you are reading.</p>
          <p><code>Summarize this paper in five bullets: problem, method, data, main result, and limitation.</code></p>
          <div class="docs-media">
            <img src="https://raw.githubusercontent.com/yilewang/llm-for-zotero/main/assets/summarize.gif" alt="Summarizing a paper in LLM for Zotero" />
          </div>
        </div>

        <div class="docs-card" style="margin-top: 1rem;">
          <h3>Explain selected text</h3>
          <p>Select a dense paragraph or term in the PDF and ask the model to explain it. The selected text becomes extra context on top of the paper itself.</p>
          <p><code>Explain this selected paragraph in plain English and define the technical terms.</code></p>
          <div class="docs-media">
            <img src="https://raw.githubusercontent.com/yilewang/llm-for-zotero/main/assets/text.gif" alt="Explaining selected text in LLM for Zotero" />
          </div>
        </div>

        <div class="docs-card" style="margin-top: 1rem;">
          <h3>Interpret figures and screenshots</h3>
          <p>Capture a figure or visual region from the paper and ask for an interpretation. This is useful when the key claim is hidden in a chart or diagram.</p>
          <p><code>What does this figure show, and how does it support the paper's argument?</code></p>
          <div class="docs-media">
            <img src="https://raw.githubusercontent.com/yilewang/llm-for-zotero/main/assets/screenshot.gif" alt="Interpreting a figure in LLM for Zotero" />
          </div>
        </div>

        <div class="docs-card" style="margin-top: 1rem;">
          <h3>Compare multiple papers</h3>
          <p>When multiple papers are open in Zotero, type <code>/</code> to cite another paper as context and ask for a structured comparison.</p>
          <p><code>Compare this paper with /the other tab on objective, method, dataset, and weaknesses.</code></p>
          <div class="docs-media">
            <img src="https://raw.githubusercontent.com/yilewang/llm-for-zotero/main/assets/multi.gif" alt="Comparing papers in LLM for Zotero" />
          </div>
        </div>

        <div class="docs-card" style="margin-top: 1rem;">
          <h3>Add extra documents</h3>
          <p>You can upload local files that are not already in Zotero, including PDF, DOCX, PPTX, TXT, and Markdown.</p>
          <p><code>Read this uploaded document and tell me how it changes the interpretation of the current paper.</code></p>
          <div class="docs-media">
            <img src="https://raw.githubusercontent.com/yilewang/llm-for-zotero/main/assets/upload_files.gif" alt="Uploading extra files in LLM for Zotero" />
          </div>
        </div>

        <div class="docs-card" style="margin-top: 1rem;">
          <h3>Save answers and conversation history</h3>
          <p>Strong answers can be exported directly into Zotero notes, and conversation history is stored per paper so you can resume later.</p>
          <p><code>Save this answer to my note with headings and preserve the equations.</code></p>
          <div class="docs-split">
            <div class="docs-media">
              <img src="https://raw.githubusercontent.com/yilewang/llm-for-zotero/main/assets/save_notes.gif" alt="Saving an answer to a note" />
            </div>
            <div class="docs-media">
              <img src="https://raw.githubusercontent.com/yilewang/llm-for-zotero/main/assets/save_chat.gif" alt="Saving a conversation in Zotero" />
            </div>
          </div>
        </div>

        <div class="docs-split" style="margin-top: 1rem;">
          <div class="docs-callout">
            <h3>Custom shortcuts</h3>
            <p>Create quick actions for repeated workflows like methodology summaries, limitations, or future-work extraction.</p>
          </div>
          <div class="docs-callout">
            <h3>Agent Mode</h3>
            <p>Switch to agent mode when you want the plugin to inspect your library, plan multi-step work, and prepare changes for review.</p>
          </div>
        </div>
      </section>

      <section class="docs-section" id="agent-mode">
        <h2>Agent mode</h2>
        <p class="docs-subtitle">
          Chat mode is best for direct paper questions. Agent mode is for workflows where the assistant needs to inspect
          Zotero state, choose tools, and complete several steps in sequence.
        </p>
        <div class="docs-split">
          <div class="docs-card">
            <h3>How to enable it</h3>
            <ol class="docs-list">
              <li>Open <code>Preferences</code> and go to the <code>llm-for-zotero</code> tab.</li>
              <li>Check <code>Enable Agent Mode (Beta)</code>.</li>
              <li>Open a PDF and click the <code>Agent mode</code> toggle in the context bar.</li>
            </ol>
            <p>The toggle stays hidden until the beta setting is enabled.</p>
          </div>
          <div class="docs-card">
            <h3>When to use it</h3>
            <ul class="docs-list">
              <li>Use chat mode for fast answers about the current paper.</li>
              <li>Use agent mode for library search, note inspection, metadata cleanup, tagging, and collection work.</li>
              <li>Run it from the current paper or from open chat when the task spans multiple papers and files.</li>
            </ul>
          </div>
        </div>

        <div class="docs-grid" style="margin-top: 1rem;">
          <div class="docs-card">
            <h3>What the agent can inspect</h3>
            <p>It can search your library, browse collections, list unfiled or untagged papers, read notes and annotations, compare papers, search related work online, and inspect the current reader view or specific PDF pages.</p>
          </div>
          <div class="docs-card">
            <h3>Safe write actions</h3>
            <p>When a task would modify Zotero data, the agent prepares a review card first. You approve note saves, metadata edits, tag changes, new collections, and collection moves before anything is applied.</p>
          </div>
          <div class="docs-card">
            <h3>Visible activity trace</h3>
            <p>Each agent turn shows an activity log in the chat so you can see tool calls, status updates, and expandable reasoning summaries instead of getting a black-box answer.</p>
          </div>
          <div class="docs-card">
            <h3>Undo support</h3>
            <p>The agent keeps an undo stack for recent write actions in the current conversation, so you can ask it to undo the last agent-applied change if a batch edit is not what you wanted.</p>
          </div>
        </div>

        <div class="docs-callout" style="margin-top: 1rem;">
          <h3>Good agent prompts</h3>
          <ul class="docs-list">
            <li><code>Find papers in my Zotero library related to this article and group them by method.</code></li>
            <li><code>Audit this paper's metadata, explain what is wrong, and prepare a clean fix.</code></li>
            <li><code>Read my notes and annotations for this paper, then draft a structured summary.</code></li>
            <li><code>List untagged papers in this library and suggest tags I can review.</code></li>
          </ul>
        </div>
      </section>

      <section class="docs-section" id="codex-auth">
        <h2>Codex auth</h2>
        <p class="docs-subtitle">If you have a ChatGPT Plus subscription, you can reuse that login with Codex auth instead of supplying an API key.</p>
        <div class="docs-split">
          <div class="docs-card">
            <h3>Setup steps</h3>
            <ol class="docs-list">
              <li>Install the Codex CLI.</li>
              <li>Run <code>codex login</code> in your terminal.</li>
              <li>In Zotero settings, set <code>Auth Mode</code> to <code>codex auth</code>.</li>
              <li>Set <code>API URL</code> to <code>https://chatgpt.com/backend-api/codex/responses</code>.</li>
              <li>Choose a Codex model such as <code>gpt-5.4</code>.</li>
              <li>Click <code>Test Connection</code>.</li>
            </ol>
          </div>
          <div class="docs-card">
            <h3>What this enables</h3>
            <ul class="docs-list">
              <li>Use Codex models without an API key.</li>
              <li>Ground answers in local PDF text and screenshots.</li>
              <li>Reuse credentials stored in <code>~/.codex/auth.json</code>.</li>
              <li>Keep the same Zotero workflow while lowering API key management overhead.</li>
            </ul>
          </div>
        </div>
        <div class="docs-media">
          <img src="https://raw.githubusercontent.com/yilewang/llm-for-zotero/main/assets/codex.png" alt="Codex auth setup in LLM for Zotero" />
        </div>
      </section>

      <section class="docs-section" id="prompts">
        <h2>Starter prompts</h2>
        <p class="docs-subtitle">A few prompts that work well on day one.</p>
        <div class="docs-promptlist">
          <div class="docs-prompt"><code>Summarize this paper for me in five bullets and tell me whether it is worth a careful read.</code></div>
          <div class="docs-prompt"><code>Explain this selected text like I am new to this subfield, but keep the scientific meaning precise.</code></div>
          <div class="docs-prompt"><code>What assumptions does this method make, and where in the paper are they justified?</code></div>
          <div class="docs-prompt"><code>Compare this paper with /the other open paper on data, method, evaluation, and limitations.</code></div>
          <div class="docs-prompt"><code>Read this uploaded document and tell me which parts are relevant to the paper I am reading now.</code></div>
          <div class="docs-prompt"><code>Turn the best part of this answer into a Zotero note with a short title and bullet-point takeaways.</code></div>
        </div>
      </section>

      <section class="docs-section" id="links">
        <h2>Project links</h2>
        <div class="docs-footer">
          <p>Source code, releases, and issue tracking are all on GitHub.</p>
          <div class="docs-actions">
            <a class="btn btn--primary" href="https://github.com/yilewang/llm-for-zotero">Repository</a>
            <a class="btn btn--inverse" href="https://github.com/yilewang/llm-for-zotero/releases">Releases</a>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>
