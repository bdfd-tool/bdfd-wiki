# Highlighter

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
.control-bar {
	display: flex;
	gap: 1rem;
	margin-bottom: 1.5rem;
	flex-wrap: wrap;
}
.control-btn {
	outline: none;
	touch-action: manipulation;
	user-select: none;
	padding-left: 1rem;
	padding-right: 1rem;
	height: 4rem;
	border: none;
	border-radius: var(--border-radius);
	cursor: pointer;
	font-size: 1.5rem;
	color: #fff;
	background: hsl(0deg 0% 100% / 7%);
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
	transition: all 0.3s;
	font-weight: 500;
	flex: 1;
	min-width: 150px;
}
.control-btn:hover {
	transform: translateY(-1px);
	box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
}
.function-selector-wrapper {
	position: relative;
	flex: 1;
	min-width: 150px;
}
.function-dropdown {
	position: absolute;
	top: calc(100% + 0.5rem);
	left: 0;
	right: 0;
	background: var(--card-bg);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: var(--border-radius);
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
	max-height: 300px;
	overflow-y: auto;
	z-index: 100;
	display: none;
}
.function-dropdown.active {
	display: block;
}
.function-search {
	width: 100%;
	padding: 0.75rem;
	background: hsl(0deg 0% 100% / 10%);
	border: none;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	color: #fff;
	font-size: 1rem;
	outline: none;
}
.function-list {
	max-height: 240px;
	overflow-y: auto;
}
.function-item {
	padding: 0.75rem 1rem;
	color: #fff;
	cursor: pointer;
	transition: background 0.2s;
	
	font-size: 1rem;
}
.function-item:hover {
	background: hsl(0deg 0% 100% / 10%);
}
.functions-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: 1rem;
	margin-bottom: 1.5rem;
}
.function-card {
	background: hsl(0deg 0% 100% / 7%);
	border-radius: var(--border-radius);
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}
.function-info {
	display: flex;
	align-items: center;
	gap: 0.75rem;
	flex: 1;
	min-width: 0;
}
.color-badge {
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	flex-shrink: 0;
	border: 2px solid rgba(255, 255, 255, 0.2);
}
.function-name {
	font-size: 1.1rem;
	color: #fff;
	overflow: hidden;
	text-overflow: ellipsis;
}
.function-actions {
	display: flex;
	gap: 0.5rem;
	flex-shrink: 0;
}
.action-btn {
	background: none;
	border: none;
	color: rgba(255, 255, 255, 0.6);
	cursor: pointer;
	font-size: 1.1rem;
	padding: 0.25rem;
	transition: all 0.2s;
	width: 1.75rem;
	height: 1.75rem;
	display: flex;
	align-items: center;
	justify-content: center;
}
.action-btn:hover {
	color: #fff;
}
.btn-row {
	display: flex;
	gap: 1rem;
	margin: 1.5rem 0;
	flex-wrap: wrap;
	justify-content: center;
}
.btn-secondary {
	outline: none;
	touch-action: manipulation;
	user-select: none;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	height: 4rem;
	border: none;
	border-radius: var(--border-radius);
	cursor: pointer;
	font-size: 1.5rem;
	color: #fff;
	background: hsl(0deg 0% 100% / 7%);
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
	transition: all 0.3s;
	font-weight: 500;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
}
.btn-secondary:hover {
	transform: translateY(-1px);
	box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
}
.output-container {
	background: hsl(0deg 0% 100% / 7%);
	border-radius: var(--border-radius);
	overflow: hidden;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}
.output-header {
	background: hsl(0deg 0% 100% / 5%);
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.output-title {
	font-size: 1.5rem;
	font-weight: 600;
	color: #fff;
	display: flex;
	align-items: center;
	gap: 0.5rem;
}
.copy-output-btn {
	background: none;
	border: none;
	color: rgba(255, 255, 255, 0.8);
	cursor: pointer;
	font-size: 1rem;
	padding: 0.5rem 1rem;
	transition: all 0.2s;
	border-radius: var(--border-radius);
	display: flex;
	align-items: center;
	gap: 0.5rem;
}
.copy-output-btn:hover {
	background: hsl(0deg 0% 100% / 10%);
	color: #fff;
}
.output-box {
    color: #fff;
    font-size: 1rem;
    line-height: 1.6;
    padding: 1rem;
    white-space: pre-wrap;
    word-break: break-word;
    height: 16rem;
    overflow-y: auto;
}
.info-text {
    color: #aaa;
    font-size: 1rem;
    margin-top: 0.8rem;
    margin-bottom: 1rem;
}
.error-text {
	color: var(--error);
	font-size: 1rem;
	min-height: 1rem;
	margin-top: 0.5rem;
}
.modal-overlay {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.5);
	display: none;
	align-items: center;
	justify-content: center;
	z-index: 1000;
}
.modal-overlay.active {
	display: flex;
}
.modal-content {
	background: var(--card-bg);
	border-radius: var(--border-radius);
	padding: 2rem;
	max-width: 400px;
	width: 90%;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
	border: 1px solid rgba(255, 255, 255, 0.05);
}
.modal-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1.5rem;
}
.modal-title {
	font-size: 1.5rem;
	font-weight: 600;
	color: #fff;
}
.modal-close {
	background: none;
	border: none;
	color: rgba(255, 255, 255, 0.6);
	font-size: 1.5rem;
	cursor: pointer;
	padding: 0;
	width: 2rem;
	height: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
}
.modal-close:hover {
	color: #fff;
}
.modal-body {
	margin-bottom: 1.5rem;
}
.modal-label {
	display: block;
	color: rgba(255, 255, 255, 0.9);
	font-size: 1rem;
	margin-bottom: 0.5rem;
	font-weight: 500;
}
.color-picker-row {
	display: flex;
	gap: 0.5rem;
	align-items: center;
}
.color-picker-visual {
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
	cursor: pointer;
	border: 2px solid rgba(255, 255, 255, 0.2);
	flex-shrink: 0;
}
.color-input {
	flex: 1;
	padding: 0.75rem;
	background: hsl(0deg 0% 100% / 10%);
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: var(--border-radius);
	color: #fff;
	
	font-size: 1rem;
	text-align: center;
	outline: none;
}
.style-selector {
	display: flex;
	gap: 0.5rem;
	margin-top: 0.75rem;
	flex-wrap: wrap;
}
.style-btn {
	padding: 0.75rem 1rem;
	background: hsl(0deg 0% 100% / 10%);
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: var(--border-radius);
	color: #fff;
	cursor: pointer;
	font-size: 1rem;
	transition: all 0.2s;
}
.style-btn:hover {
	background: hsl(0deg 0% 100% / 15%);
}
.style-btn.active {
	background: hsl(120deg 70% 50%);
	border-color: hsl(120deg 70% 60%);
}
.modal-preview {
	background: hsl(0deg 0% 100% / 10%);
	padding: 1rem;
	border-radius: var(--border-radius);
	
	font-size: 1.2rem;
	color: #fff;
	margin-top: 1rem;
}
.modal-save {
	width: 100%;
	padding: 0.75rem;
	background: hsl(0deg 0% 100% / 7%);
	border: none;
	border-radius: var(--border-radius);
	color: #fff;
	font-size: 1rem;
	font-weight: 500;
	cursor: pointer;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
	transition: all 0.3s;
}
.modal-save:hover {
	transform: translateY(-1px);
	box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
}
.import-textarea {
	width: 100%;
	min-height: 10rem;
	padding: 1rem;
	background: hsl(0deg 0% 100% / 10%);
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: var(--border-radius);
	color: #fff;

	font-size: 1rem;
	resize: vertical;
	outline: none;
	margin-bottom: 1rem;
}
.confirm-modal .modal-body {
	text-align: center;
}
.confirm-modal .modal-body p {
	color: rgba(255, 255, 255, 0.9);
	margin-bottom: 1.5rem;
	font-size: 1rem;
}
.confirm-buttons {
	display: flex;
	gap: 1rem;
	justify-content: center;
}
.confirm-btn {
	padding: 0.75rem 1.5rem;
	border: none;
	border-radius: var(--border-radius);
	cursor: pointer;
	font-size: 1rem;
	font-weight: 500;
	transition: all 0.3s;
}
.confirm-btn.cancel {
	background: hsl(0deg 0% 50%);
	color: #fff;
}
.confirm-btn.delete {
	background: hsl(0deg 100% 50%);
	color: #fff;
}
.confirm-btn:hover {
	transform: translateY(-1px);
	opacity: 0.9;
}
</style>

Here you can create custom code highlighting themes for BDFD.

```admonish note
The code highlighter allows you to assign custom colors and styles to BDFD functions, creating syntax highlighting themes that improve code readability. Generate JSON themes to use in the BDFD app's highlighting settings.
```

<div class="picker-container">
<h2>Code Highlighter</h2>
<p>Highlight different functions and text using unique colors for better coding experience.</p>

<div class="control-bar">
<button id="importThemeBtn" class="control-btn">Import Theme</button>
<div class="function-selector-wrapper">
<button id="addFunctionBtn" class="control-btn">Add Function</button>
<div id="functionDropdown" class="function-dropdown">
<input type="text" id="functionSearch" class="function-search" placeholder="Search function...">
<div id="functionList" class="function-list"></div>
</div>
</div>
<button id="deleteAllBtn" class="control-btn">Delete All</button>
</div>

<div id="functionsGrid" class="functions-grid"></div>

<div class="btn-row">
<button id="generateBtn" class="btn-secondary">Generate Code</button>
</div>

<div class="output-container">
<div class="output-header">
<span class="output-title">Highlighted Code</span>
<button id="copyOutputBtn" class="copy-output-btn">📋 Copy</button>
</div>
<div id="output" class="output-box">Your highlighted code will appear here...</div>
</div>

<div class="info-text" id="infoText">0 functions</div>
<div class="error-text" id="errorText"></div>
</div>

<div id="editModal" class="modal-overlay">
<div class="modal-content">
<div class="modal-header">
<h3 class="modal-title">Edit Highlight</h3>
<button id="modalClose" class="modal-close">×</button>
</div>
<div class="modal-body">
<label class="modal-label">Color</label>
<div class="color-picker-row">
<div id="colorPickerVisual" class="color-picker-visual"></div>
<input type="text" id="hexInput" class="color-input" placeholder="#FFFFFF">
</div>

<label class="modal-label" style="margin-top: 1rem;">Style</label>

<div class="style-selector">
<button class="style-btn active" data-style="0">Normal</button>
<button class="style-btn" data-style="2">Italic</button>
<button class="style-btn" data-style="1">Bold</button>
<button class="style-btn" data-style="3">Bold+Italic</button>
</div>

<div class="modal-preview" id="modalPreview">Sample Text</div>
</div>
<button id="modalSave" class="modal-save">Save</button>
</div>
</div>

<div id="importModal" class="modal-overlay">
<div class="modal-content">
<div class="modal-header">
<h3 class="modal-title">Import JSON Theme</h3>
<button id="importModalClose" class="modal-close">×</button>
</div>
<div class="modal-body">
<textarea id="importTextarea" class="import-textarea" placeholder="Paste your JSON theme here"></textarea>
<div class="error-text" id="importError"></div>
</div>
<div class="confirm-buttons">
<button id="cancelImport" class="confirm-btn cancel">Cancel</button>
<button id="applyImport" class="confirm-btn delete">Apply Theme</button>
</div>
</div>
</div>

<div id="deleteModal" class="modal-overlay confirm-modal">
<div class="modal-content">
<div class="modal-header">
<h3 class="modal-title">Confirm Deletion</h3>
<button id="deleteModalClose" class="modal-close">×</button>
</div>
<div class="modal-body">
<p>Are you sure you want to delete this function?</p>
<div class="confirm-buttons">
<button id="cancelDelete" class="confirm-btn cancel">Cancel</button>
<button id="confirmDelete" class="confirm-btn delete">Delete</button>
</div>
</div>
</div>
</div>

<div id="deleteAllModal" class="modal-overlay confirm-modal">
<div class="modal-content">
<div class="modal-header">
<h3 class="modal-title">Confirm Deletion</h3>
<button id="deleteAllModalClose" class="modal-close">×</button>
</div>
<div class="modal-body">
<p>Are you sure you want to delete the saved theme? This action cannot be undone.</p>
<div class="confirm-buttons">
<button id="cancelDeleteAll" class="confirm-btn cancel">Cancel</button>
<button id="confirmDeleteAll" class="confirm-btn delete">Delete</button>
</div>
</div>
</div>
</div>

## Functions

```admonish note
Generated code uses standard BDFD highlighting JSON format.
```

**Base Highlights:**

- Default Text - Main text color
- Fallback - Functions not in custom list
- Numbers - Numeric values
- `[]` - Bracket characters
- `;` - Semicolon characters

**Custom Functions:**
Add any BDFD function to customize its color and style.

## Example

**Generated JSON:**

```json
{
  "defaultTextHighlight": { "color": 4288341353, "style": 0 },
  "fallbackHighlight": { "color": 4291546079, "style": 0 },
  "bracketHighlight": { "color": 4294921292, "style": 1 },
  "semicolonHighlight": { "color": 4294920266, "style": 1 },
  "functionsHighlights": {
    "$nomention": { "color": 4294932473, "style": 0 },
    "$if": { "color": 4288905212, "style": 0 }
  }
}
```

```admonish question title="Where to paste this JSON body?"
Paste this JSON directly into the Highlighting Settings within the BDFD app. To do this, open the app, go to Settings → Change Code Highlight Settings, then click Apply Theme and paste the JSON.
```

<script src="highlighter.js"></script>
