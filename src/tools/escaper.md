# Escaper

<style>
.editPage {
	visibility: hidden;
}
.picker-container {
    background: var(--card-bg);
	border-radius: var(--border-radius);
	border: 1px solid rgba(255, 255, 255, 0.05);
	margin-top: 1.5rem;
	padding-bottom: 0rem;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}
.picker-container h2 {
    margin-top: -.5rem;
    padding-top: 1.5rem;
}
.picker-container p {
	margin-top: -1.5rem;
}
.textarea-row {
	display: block;
	margin: 1rem 0;
}
.escaper-input, .escaper-output {
    color: #fff;
    padding: 1rem;
    background: hsl(0deg 0% 100% / 7%);
    border-radius: var(--border-radius);
	border-width: 0;
    font-family: monospace;
    font-size: 1.5rem ;
    line-height: 1.5;
    height: 16rem;
    width: 100%;
    outline: none;
	resize: vertical;
	transition: all 0.3s;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
	margin-bottom: 1rem;
}
.escaper-input:focus {
	box-shadow: 0 0 0 3px rgba(255,255,255,0.3), 0 8px 15px rgba(0, 0, 0, 0.4);
}
.escaper-output {
    background: hsl(0deg 0% 100% / 7%);
    min-height: 16rem;
    white-space: pre-wrap;
    word-break: break-all;
    color: #fff;
}
.btn-row {
	display: flex;
	gap: 1rem;
	margin: 1rem 0;
	flex-wrap: wrap;
	justify-content: center;
}
.escape-btn, .copy-btn, .clear-btn {
	outline: none;
	touch-action: manipulation;
	-webkit-user-select: none;
	user-select: none;
	padding-left: 1rem;
	padding-right: 1rem;
	height: 4rem;
	border: none;
	border-radius: var(--border-radius);
	cursor: pointer;
	font-size: 1.5rem ;
	color: #fff;
	background: hsl(0deg 0% 100% / 7%);
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
	transition: all 0.3s;
	font-weight: 500;
}
.escape-btn {
	background: hsl(0deg 0% 100% / 7%);
	font-weight: 500;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	font-size: 1.5rem ;
	height: 4rem ;
}
.escape-btn:hover, .copy-btn:hover, .clear-btn:hover {
	transform: translateY(-1px);
	box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
}
.error {
	color: var(--error);
	font-size: 1.2rem;
	min-height: 1rem;
	padding: 0;
	margin: 0;
}
.char-count {
    color: #aaa;
    font-size: 1.2rem;
    margin-top: 0.5rem;
}

.highlight-span {
	background: hsl(0deg 0% 100% / 10%);
	color: #fff;
	padding: 0.5rem 0.75rem;
	border-radius: 6px;
	font-family: monospace;
	font-weight: bold;
	font-size: 1.3rem;
}
.output-span {
	background: hsl(0deg 0% 100% / 10%);
	padding: 0.5rem 0.75rem;
	border-radius: 6px;
	font-family: monospace;
	font-size: 1.3rem;
	color: #fff;
}
</style>

Here you can escape special characters to use in ur code.

```admonish note
Escape characters are used to treat special symbols as plain text instead of triggering functions. This lets your bot return characters like <span class="highlight-span">;</span>, <span class="highlight-span">$</span>, <span class="highlight-span">]</span>, <span class="highlight-span">\\</span> inside your message without breaking the script.
```

<div class="picker-container">
	<h2>Character Escaper</h2>
  	<p>Paste text to escape. Click Escape Code to process.</p>
  	<div class="textarea-row">
    	<textarea id="inputText" class="escaper-input" placeholder="Original text..."></textarea>
    	<textarea id="outputText" class="escaper-output" readonly placeholder="Escaped text..."></textarea>
  	</div>
  	<div class="btn-row">
    	<button id="escapeBtn" class="escape-btn">Escape Code</button>
    	<button id="copyBtn" class="copy-btn">Copy Output</button>
    	<button id="clearBtn" class="clear-btn">Clear</button>
  	</div>
  	<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem; padding-bottom: 1.5rem;">
    	<div class="char-count" id="charCount">0 / 0 characters</div>
    	<div class="error" id="errorText" style="margin: 0; flex-shrink: 0;"></div>
  	</div>
</div>

## Escaping Rules

```admonish note
These characters are changed:

<span class="highlight-span">$</span> → <span class="output-span">%{DOL}%</span>

<span class="highlight-span">]</span> → <span class="output-span">\\]</span>

<span class="highlight-span">;</span> → <span class="output-span">\\;</span>

<span class="highlight-span">\\</span> → <span class="output-span">\\\\</span>
```

## Functions

```admonish note
Use in BDFD functions like [`$sendMessage[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/sendMessage.md), [`$async[]`](https://wiki.botdesignerdiscord.com/nightly/guides/general/bds2/asyncScopes.md), embeds, etc.
```

## Example

```
$nomention
$sendMessage[[%{DOL}%Hello\\; this is pretty cool\\; right%{DOL}%\\]]
```

```discord yaml
- user_id: 860384146778226699
  username: Zubariel
  color: "#ffffff"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    [$Hello; this is pretty cool; right$]
```

```admonish question title="How to use?"
Paste text → Escape Code → Copy Output → Paste in BDFD.
```
