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
select.form-input {
	appearance: none;
	-webkit-appearance: none;
	background-color: hsl(0deg 0% 100% / 7%);
	color: #fff;
	cursor: pointer;
}
select.form-input option {
	background-color: hsl(220deg 15% 18%);
	color: #fff;
}
.flex-buttons {
	display: flex;
	gap: 0;
	flex-wrap: wrap;
	margin-top: 1rem;
}
.component-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 2.5rem;
	margin-bottom: 0.75rem;
}
.component-title {
	font-size: 1.3rem;
	font-weight: 600;
	color: rgba(255, 255, 255, 0.9);
	line-height: 1;
}
.collapse-btn {
	background: hsl(220deg 80% 50% / 70%);
	color: #fff;
	border: none;
	padding: 0.4rem 0.9rem;
	border-radius: var(--border-radius);
	cursor: pointer;
	font-size: 1.3rem;
	font-weight: 600;
	transition: all 0.2s;
	flex-shrink: 0;
	min-width: 2.5rem;
	min-height: 2.5rem;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	touch-action: manipulation;
	-webkit-user-select: none;
	user-select: none;
}
.collapse-btn:hover {
	background: hsl(220deg 80% 60% / 90%);
}
.option-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0.25rem;
}
.option-header > div {
	gap: 0.75rem !important;
}
.option-title {
	font-size: 1.1rem;
	font-weight: 500;
	color: rgba(255, 255, 255, 0.75);
}
.select-option, .modal-input {
	background: hsl(0deg 0% 100% / 8%);
	border-radius: var(--border-radius);
	padding: 0.75rem;
	margin-top: 0.5rem;
	border: 1px solid rgba(255,255,255,0.1);
}
.remove-btn-red {
	outline: none;
	touch-action: manipulation;
	-webkit-user-select: none;
	user-select: none;
	background: hsl(0deg 70% 40% / 80%);
	padding-left: 1rem;
	padding-right: 1rem;
	height: 4rem;
	font-size: 1.5rem;
	font-weight: 500;
	border-radius: var(--border-radius);
	color: #fff;
	border: none;
	cursor: pointer;
	transition: all 0.3s;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}
.remove-btn-red:hover {
	background: hsl(0deg 70% 50% / 90%);
	transform: translateY(-1px);
	box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
}
.remove-btn-small {
	height: auto;
	padding: 0.4rem 0.9rem;
	font-size: 1.3rem;
	box-shadow: none;
}
.inline-error {
	display: block;
	color: var(--error);
	font-size: 1rem;
	margin-top: 0.3rem;
	margin-bottom: 0.25rem;
}
/* Mode toggle */
.mode-toggle-wrapper {
	display: flex;
	justify-content: center;
	margin: 1.5rem 0 0.5rem 0;
}
.mode-toggle {
	display: flex;
	background: hsl(0deg 0% 100% / 7%);
	border-radius: var(--border-radius);
	padding: 0.3rem;
	gap: 0.3rem;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
	flex-wrap: wrap;
	justify-content: center;
}
.mode-btn {
	outline: none;
	touch-action: manipulation;
	-webkit-user-select: none;
	user-select: none;
	padding: 0.6rem 1.4rem;
	border: none;
	border-radius: calc(var(--border-radius) - 2px);
	cursor: pointer;
	font-weight: 500;
	font-size: 1.4rem;
	transition: all 0.25s;
	color: rgba(255, 255, 255, 0.55);
	background: transparent;
}
.mode-btn.active {
	background: hsl(220deg 80% 50% / 80%);
	color: #fff;
	box-shadow: 0 3px 8px rgba(0, 0, 0, 0.35);
}
.mode-btn:not(.active):hover {
	color: rgba(255, 255, 255, 0.85);
	background: hsl(0deg 0% 100% / 10%);
}
.required-star {
	color: hsl(0deg 80% 60%);
	margin-left: 0.2rem;
	font-weight: 700;
}

</style>

Here you can make embeds using the respective text inputs. (supports normal components and components v2.)

```admonish note
Embed Builder creates Discord embeds/containers with titles, descriptions, fields, buttons, select menus,  modals, and more.
```

<div class="mode-toggle-wrapper">
  <div class="mode-toggle">
    <button class="mode-btn active" id="modeNormal">Normal Embed Builder</button>
    <button class="mode-btn" id="modeSend">Send Embed Builder</button>
    <button class="mode-btn" id="modeCompV2">CompV2 Builder</button>
  </div>
</div>
<div id="normalBuilder">
<div class="picker-container">
	<h2>Normal Embed Builder</h2>
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
     <label>Media &amp; Style</label>
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
</div>
<div id="sendBuilder" style="display:none;">
<div class="picker-container">
  <h2>Send Embed Builder</h2>
  <p>Fill text input fields below to generate a <code>$sendEmbedMessage</code> call.</p>

  <!-- Destination -->
  <div class="form-group">
    <label>Destination</label>
    <div class="form-row">
      <div style="display:flex;flex-direction:column;gap:0.4rem;">
        <input id="s_channelId" class="form-input" placeholder="Channel ID">
        <span style="font-size:1.1rem;color:rgba(255,255,255,0.45);">Channel ID <span class="required-star">*</span> required</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:0.4rem;">
        <input id="s_content" class="form-input" placeholder="Content (text above embed)">
        <span style="font-size:1.1rem;color:rgba(255,255,255,0.45);">Optional — text sent above the embed</span>
      </div>
    </div>
  </div>

  <!-- Author -->
  <div class="form-group">
    <label>Author</label>
    <div class="form-row">
      <input id="s_authorName" class="form-input" placeholder="Author Name">
      <input id="s_authorIcon" class="form-input" placeholder="Author Icon URL">
    </div>
  </div>

  <!-- Title -->
  <div class="form-group">
    <label>Title</label>
    <div class="form-row">
      <input id="s_title" class="form-input" placeholder="Title">
      <input id="s_titleUrl" class="form-input" placeholder="Title URL">
    </div>
  </div>

  <!-- Description -->
  <div class="form-group">
    <label>Description</label>
    <textarea id="s_description" class="form-input form-textarea" placeholder="Description..."></textarea>
  </div>

  <!-- Media & Style -->
  <div class="form-group">
    <label>Media &amp; Style</label>
    <div class="form-row">
      <input id="s_thumbnail" class="form-input" placeholder="Thumbnail URL">
      <input id="s_image" class="form-input" placeholder="Image URL">
      <input id="s_color" class="form-input" placeholder="#ffffff" value="#7289da">
    </div>
  </div>

  <!-- Footer -->
  <div class="form-group">
    <label>Footer</label>
    <div class="form-row">
      <input id="s_footer" class="form-input" placeholder="Footer Text">
      <input id="s_footerIcon" class="form-input" placeholder="Footer Icon URL">
    </div>
    <label class="checkbox-label">
      <input type="checkbox" id="s_timestamp" class="form-checkbox">
      <span>Add Timestamp</span>
    </label>
    <label class="checkbox-label">
      <input type="checkbox" id="s_returnMsgId" class="form-checkbox">
      <span>Return Message ID</span>
    </label>
  </div>

  <div class="btn-row">
    <button id="s_generateBtn" class="generate-btn">Generate</button>
    <button id="s_copyBtn" class="copy-btn">Copy Output</button>
    <button id="s_clearBtn" class="clear-btn">Clear All</button>
  </div>

  <div id="s_output" class="output">Generated code appears here...</div>
  <div class="char-count" id="s_charCount">0 characters</div>
  <div class="error" id="s_error"></div>
</div>
</div>

<!-- ═══════════════════════════════════════════════════════════
     COMPV2 BUILDER
     ═══════════════════════════════════════════════════════════ -->
<div id="compV2Builder" style="display:none;">
<div class="picker-container">
  <h2>CompV2 Builder</h2>
  <p>Add components below to generate Components V2 code.</p>

  <!-- Add Components card -->
  <div class="form-group">
    <label>Add Components</label>
    <div class="flex-buttons" id="cv2AddButtons">
      <button class="add-field-btn" id="cv2AddContainer">+ Container</button>
      <button class="add-field-btn" id="cv2AddTextDisplay">+ Text Display</button>
      <button class="add-field-btn" id="cv2AddSeparator">+ Separator</button>
      <button class="add-field-btn" id="cv2AddSection">+ Section</button>
      <button class="add-field-btn" id="cv2AddThumbnail">+ Thumbnail</button>
      <button class="add-field-btn" id="cv2AddMediaGallery">+ Media Gallery</button>
      <button class="add-field-btn" id="cv2AddMediaItem">+ Media Item</button>
      <button class="add-field-btn" id="cv2AddActionRow">+ Action Row</button>
      <button class="add-field-btn" id="cv2AddButtonCV2">+ Button CV2</button>
      <button class="add-field-btn" id="cv2AddUserSelect">+ User Select</button>
      <button class="add-field-btn" id="cv2AddRoleSelect">+ Role Select</button>
      <button class="add-field-btn" id="cv2AddMentionable">+ Mentionable Select</button>
    </div>
  </div>

  <!-- Dynamic component cards go here -->
  <div id="cv2Components"></div>

  <!-- Output -->
  <div class="btn-row">
    <button id="cv2GenerateBtn" class="generate-btn">Generate Code</button>
    <button id="cv2CopyBtn" class="copy-btn">Copy Output</button>
    <button id="cv2ClearBtn" class="clear-btn">Clear All</button>
  </div>
  <div id="cv2Output" class="output">Generated code appears here...</div>
  <div class="char-count" id="cv2CharCount">0 characters</div>
  <div class="error" id="cv2Error"></div>
</div>

</div>

## Functions

```admonish note
Generated code uses standard BDFD embed functions.
```

**Core**:

- [`$title[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/title.md), [`$description[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/description.md), [`$color[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/color.md), [`$image[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/image.md), [`$thumbnail[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/thumbnail.md)
- [`$author[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/author.md), [`$footer[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/footer.md), [`$addTimestamp`](https://wiki.botdesignerdiscord.com/nightly/bdscript/addTimestamp.md)
- [`$addField[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/addField.md), [`$addButton[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/addButton.md), [`$addSelectMenuOption[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/addSelectMenuOption.md)
- [`$newModal[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/newModal.md), [`$addTextInput[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/addTextInput.md)
- [`$sendEmbedMessage[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/sendEmbedMessage.md)
- [`$addContainer[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/addContainer.md), [`$addTextDisplay[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/addTextDisplay.md), [`$addSeparator[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/addSeparator.md), [`$addSection[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/addSection.md)
- [`$addThumbnail[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/addThumbnail.md), [`$addMediaGallery[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/addMediaGallery.md), [`$addMediaGalleryItem[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/addMediaGalleryItem.md)
- [`$addActionRow[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/addActionRow.md), [`$addButtonCV2[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/addButtonCV2.md), [`$addUserSelect[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/addUserSelect.md), [`$addRoleSelect[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/addRoleSelect.md), [`$addMentionableSelect[]`](https://wiki.botdesignerdiscord.com/nightly/bdscript/addMentionableSelect.md)

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
