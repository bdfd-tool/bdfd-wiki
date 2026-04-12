# Embed Builder

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
.form-group {
	margin-bottom: 1.5rem;
} 
.form-group label {
	display: block;
	font-size: 1.3rem ;
	font-weight: 500;
	margin-bottom: 0.75rem;
	color: rgba(255, 255, 255, 0.9);
	letter-spacing: 0.01em;
}
.form-row {
	display: grid;
	gap: 1rem;
	grid-template-columns: 1fr;
}
@media (min-width: 640px) {
	.form-row {
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	}
}
.form-input {
    color: #fff;
    padding: 1rem;
    background: hsl(0deg 0% 100% / 7%);
    border-radius: var(--border-radius);
	border-width: 0;
    font-family: monospace;
    font-size: 1.5rem ;
    line-height: 1.5;
    width: 100%;
    outline: none;
	transition: all 0.3s;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}
.form-input:focus {
	box-shadow: 0 0 0 3px rgba(255,255,255,0.3), 0 8px 15px rgba(0, 0, 0, 0.4);
}
.form-textarea {
    min-height: 10rem;
    resize: vertical;
}
.form-checkbox {
	width: 1.2rem;
	height: 1.2rem;
	border-radius: 0.25rem;
	background: hsl(0deg 0% 100% / 10%);
	border: 1px solid rgba(255,255,255,0.2);
	cursor: pointer;
	margin: 0;
}
.form-checkbox:checked {
	background: hsl(120deg 70% 50%);
	border-color: hsl(120deg 70% 60%);
}
.checkbox-label {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	margin-top: 0.75rem;
	cursor: pointer;
	user-select: none;
}
.checkbox-label span {
	font-size: 1.3rem ;
	color: rgba(255, 255, 255, 0.9);
	font-weight: 400;
}
.btn-row {
	display: flex;
	gap: 1rem;
	margin-top: 1.5rem;
	margin-bottom: 1.5rem;
	flex-wrap: wrap;
	justify-content: center;
}
.generate-btn, .copy-btn, .clear-btn {
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
	font-weight: 500;
	transition: all 0.3s;
	color: #fff;
	background: hsl(0deg 0% 100% / 7%);
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
	font-size: 1.5rem ;
}
.generate-btn {
	background: hsl(0deg 0% 100% / 7%);
	font-weight: 500;
	font-size: 1.5rem ;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	height: 4rem ;
}
.generate-btn:hover, .copy-btn:hover, .clear-btn:hover {
	transform: translateY(-1px);
	box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
}
.output {
    background: hsl(0deg 0% 100% / 7%);
    border-width: 0;
    min-height: 16rem;
    white-space: pre-wrap;
    word-break: break-all;
    color: #fff;
    font-family: monospace ;
    font-size: 1.5rem ;
    line-height: 1.5;
    padding: 1rem;
    border-radius: var(--border-radius);
    margin-top: 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}
.error {
	color: var(--error);
	font-size: 1rem ;
	min-height: 1rem;
	margin-top: 0.5rem;
}
.char-count {
    color: #aaa;
    font-size: 1.2rem ;
    margin-top: 0.75rem;
    margin-bottom: 1.5rem;
}
.add-field-btn {
	outline: none;
	touch-action: manipulation;
	-webkit-user-select: none;
	user-select: none;
	background: hsl(0deg 0% 100% / 7%);
	padding-left: 1rem;
	padding-right: 1rem;
	height: 4rem;
	font-size: 1.5rem ;
	font-weight: 500;
	border-radius: var(--border-radius);
	color: #fff;
	border: none;
	cursor: pointer;
	margin-right: 0.5rem;
	margin-bottom: 0.5rem;
	transition: all 0.3s;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}
.add-field-btn:hover {
	transform: translateY(-1px);
	box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
}
.field-row, .button-row, .select-row, .modal-row {
	background: hsl(0deg 0% 100% / 5%);
	border-radius: var(--border-radius);
	padding: 1rem;
	margin-bottom: 1rem;
	margin-top: 1rem;
	border: 1px solid rgba(255,255,255,0.08);
}
.remove-btn {
	background: hsl(0deg 0% 50% / 30%);
	color: #fff;
	border: none;
	padding: 0.625rem 1rem;
	border-radius: var(--border-radius);
	cursor: pointer;
	font-size: 1rem ;
	font-weight: 500;
	transition: all 0.2s;
}
.remove-btn:hover {
	background: hsl(0deg 0% 60% / 40%);
}
.flex-buttons {
	display: flex;
	gap: 0;
	flex-wrap: wrap;
	margin-top: 1rem;
}
</style>

Here you can make embeds using the respective text inputs.

```admonish note
Embed Builder creates Discord embeds with titles, descriptions, fields, buttons, select menus,  modals, and more.
```

<div class="picker-container">
	<h2>Embed Builder</h2>
  	<p>Fill text input fields below to generate embed code.</p>
   
   <div class="form-group">
     <label>Author</label>
     <div class="form-row">
       <input id="authorName" class="form-input" placeholder="Author Name">
       <input id="authorIcon" class="form-input" placeholder="Author Icon URL">
       <input id="authorUrl" class="form-input" placeholder="Author URL">
     </div>
   </div>

   <div class="form-group">
     <label>Title</label>
     <div class="form-row">
       <input id="title" class="form-input" placeholder="Title">
       <input id="titleUrl" class="form-input" placeholder="Title URL">
     </div>
   </div>

   <div class="form-group">
     <label>Description</label>
     <textarea id="description" class="form-input form-textarea" placeholder="Description..."></textarea>
   </div>

   <div class="form-group">
     <label>Media & Style</label>
     <div class="form-row">
       <input id="thumbnail" class="form-input" placeholder="Thumbnail URL">
       <input id="image" class="form-input" placeholder="Image URL">
       <input id="color" class="form-input" placeholder="#ffffff" value="#7289da">
     </div>
   </div>

   <div class="form-group">
     <label>Footer</label>
     <div class="form-row">
       <input id="footer" class="form-input" placeholder="Footer Text">
       <input id="footerIcon" class="form-input" placeholder="Footer Icon URL">
     </div>
     <label class="checkbox-label">
       <input type="checkbox" id="timestamp" class="form-checkbox">
       <span>Add Timestamp</span>
     </label>
   </div>

   <div class="flex-buttons">
     <button id="addField" class="add-field-btn">+ Field</button>
     <button id="addButton" class="add-field-btn">+ Button</button>
     <button id="addSelect" class="add-field-btn">+ Select Menu</button>
     <button id="addModal" class="add-field-btn">+ Modal</button>
   </div>

   <div id="dynamicFields"></div>

   <div class="btn-row">
     <button id="generateBtn" class="generate-btn">Generate Embed</button>
     <button id="copyBtn" class="copy-btn">Copy Output</button>
     <button id="clearBtn" class="clear-btn">Clear All</button>
   </div>

   <div id="output" class="output">Generated code appears here...</div>
   <div class="char-count" id="charCount">0 characters</div>
   <div class="error" id="error"></div>
</div>


## Functions
```admonish note
Generated code uses standard BDFD embed functions.
```
  
**Core**:
- [`$title[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/title.md), [`$description[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/description.md), [`$color[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/color.md), [`$image[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/image.md), [`$thumbnail[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/thumbnail.md)
- [`$addField[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/addField.md), [`$addButton[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/addButton.md), [`$addSelectMenuOption[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/addSelectMenuOption.md)
- [`$newModal[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/newModal.md), [`$addTextInput[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/addTextInput.md)

## Example
```
$nomention
$title[Hello]
$description[Welcome to embed builder.]
$color[#673ab7]
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
  content: <none>
  embed:
    title: Hello
    description: Welcome to embed builder.
    color: "#673ab7"
```

```admonish question title="How it works?"
Fill form → Generate → Copy code → Paste in BDFD commands.
```

<script src="embed.js"></script>