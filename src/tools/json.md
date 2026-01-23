# JSON Editor

<style>
.description {
    background-color: var(--card-hover);
    padding: 20px;
    border-radius: var(--border-radius);
    margin-bottom: 25px;
    border-left: 4px solid var(--link-color);
}

.description p {
    font-size: 1.5rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    color: #dcddde;
}

.input-section {
    margin: 2rem 0;
}

.json-input {
    width: 100%;
    min-height: 200px;
    padding: 1.5rem;
    font-size: 1.5rem;
    background-color: var(--card-bg);
    border: 2px solid var(--card-hover);
    border-radius: var(--border-radius);
    color: #ffffff;
    box-sizing: border-box;
    font-family: 'Consolas', monospace;
    resize: vertical;
}

.json-input:focus {
    outline: none;
    border-color: var(--link-color);
}

.json-input.valid {
    border-color: var(--success);
}

.json-input.invalid {
    border-color: var(--error);
}

.control-buttons {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    justify-content: center;
    align-items: center;
}

.control-button {
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
    font-size: 2.25rem;
    margin: 0.25%;
    color: #fff;
    background: hsl(0deg 0% 100% / 7%);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    flex: 1;
    text-align: center;
    transition: all 0.2s;
}

.control-button:hover {
    transform: scale(1.05);
    border-radius: 8px;
    border-width: 1px;
    transition: 0.2s;
}

.search-section {
    margin: 1.5rem 0;
    padding: 1rem;
    background-color: var(--card-hover);
    border-radius: var(--border-radius);
}

.search-row {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;
}

.search-input {
    flex: 1;
    padding: 1rem;
    font-size: 1.5rem;
    background-color: var(--card-bg);
    border: 2px solid var(--card-hover);
    border-radius: var(--border-radius);
    color: #ffffff;
    box-sizing: border-box;
}

.search-input:focus {
    outline: none;
    border-color: var(--link-color);
}

.search-type {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.search-radio {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.4rem;
    cursor: pointer;
}

.search-radio input[type="radio"] {
    transform: scale(1.2);
    accent-color: var(--link-color);
    cursor: pointer;
}

.search-stats {
    color: var(--text-muted);
    font-size: 1.4rem;
    margin-top: 1rem;
    text-align: center;
}

.advanced-controls {
    display: flex;
    gap: 1rem;
    margin: 1.5rem 0;
}

.advanced-button {
    outline: none;
    touch-action: manipulation;
    -webkit-user-select: none;
    user-select: none;
    padding: 1rem 1.5rem;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    font-size: 1.5rem;
    color: #fff;
    background: hsl(0deg 0% 100% / 7%);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    flex: 1;
    text-align: center;
    transition: all 0.2s;
}

.advanced-button:hover {
    transform: scale(1.05);
    border-radius: 8px;
    border-width: 1px;
    transition: 0.2s;
}

.advanced-button.add {
    background-color: var(--success);
}

.advanced-button.delete {
    background-color: var(--error);
}

.advanced-button.duplicate {
    background-color: var(--warning);
}

.keys-section {
    border: 1px solid rgba(255, 255, 255, 0.05);
    background-color: var(--card-bg);
    padding: 1.5rem;
    border-radius: var(--border-radius);
    margin-top: 2rem;
}

.keys-section h3 {
    margin-top: 0;
    color: #ffffff;
    font-size: 2rem;
    border-bottom: 2px solid var(--success);
    padding-bottom: 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.keys-count {
    background-color: var(--link-color);
    color: white;
    padding: 0.2rem 0.8rem;
    border-radius: 10px;
    font-size: 1.2rem;
}

.keys-container {
    margin-top: 1rem;
    max-height: 400px;
    overflow-y: auto;
    padding: 0.5rem;
}

.key-group {
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: rgb(10 10 10 / 15%);
    border-radius: var(--border-radius);
    transition: all 0.2s;
}

.key-group:hover {
    transform: translateY(-2px);
}

.key-group-title {
    color: var(--link-color);
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.key-group-info {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.key-count {
    background-color: var(--success);
    color: white;
    padding: 0.2rem 0.8rem;
    border-radius: 10px;
    font-size: 1.2rem;
}

.key-group-controls {
    display: flex;
    gap: 0.5rem;
}

.group-button {
    padding: 0.3rem 0.8rem;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    font-size: 1.2rem;
    background-color: var(--card-hover);
    color: white;
    transition: all 0.2s;
}

.group-button:hover {
    transform: translateY(-1px);
}

.group-button.delete-all {
    background-color: var(--error);
}

.keys-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.key-item {
    background-color: var(--card-hover);
    padding: 1rem;
    border-radius: var(--border-radius);
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 1.4rem;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-width: 250px;
    flex: 1;
    min-width: 200px;
}

.key-item:hover {
    background-color: rgb(102 126 234 / 20%);
    transform: translateY(-2px);
}

.key-item.editing {
    background-color: var(--success);
    border-color: var(--success);
}

.key-item.highlighted {
    animation: highlight 1.5s ease-in-out;
    border-color: var(--warning);
}

@keyframes highlight {
    0%, 100% { 
        border-color: var(--warning);
        box-shadow: 0 0 0 rgba(250, 166, 26, 0);
    }
    50% { 
        box-shadow: 0 0 15px rgba(250, 166, 26, 0.5);
    }
}

.key-name {
    font-weight: bold;
    color: var(--link-color);
    font-size: 1.6rem;
}

.key-path {
    font-size: 1.2rem;
    color: var(--text-muted);
    font-family: 'Consolas', monospace;
}

.key-value {
    font-size: 1.2rem;
    color: var(--text-muted);
    font-family: 'Consolas', monospace;
    word-break: break-all;
    margin-top: 0.5rem;
}

.key-value.string {
    color: var(--success);
}

.key-value.number {
    color: #faa61a;
}

.key-value.boolean {
    color: var(--error);
}

.key-value.null {
    color: var(--text-muted);
}

.key-value.object {
    color: var(--link-color);
    font-style: italic;
}

.key-value.array {
    color: var(--link-color);
    font-style: italic;
}

.key-actions {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
}

.key-button {
    padding: 0.5rem;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    font-size: 1.2rem;
    background-color: var(--card-bg);
    color: white;
    transition: all 0.2s;
    flex: 1;
    text-align: center;
}

.key-button:hover {
    transform: translateY(-1px);
}

.key-button.edit-name {
    background-color: var(--success);
}

.key-button.edit-value {
    background-color: var(--link-color);
}

.key-button.delete {
    background-color: var(--error);
}

.key-button.duplicate {
    background-color: var(--warning);
}

.key-input, .value-input {
    background: transparent;
    border: none;
    color: #ffffff;
    font-size: 1.4rem;
    outline: none;
    padding: 0.2rem 0.5rem;
    border-bottom: 1px solid var(--success);
    width: 100%;
}

.value-input {
    border-bottom-color: var(--link-color);
    font-family: 'Consolas', monospace;
}

.add-key-dialog {
    background-color: var(--card-hover);
    padding: 1.5rem;
    border-radius: var(--border-radius);
    margin-top: 1rem;
    display: none;
}

.add-key-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form-row {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.form-label {
    color: var(--text-muted);
    font-size: 1.4rem;
    min-width: 80px;
}

.form-input {
    flex: 1;
    padding: 0.8rem;
    font-size: 1.4rem;
    background-color: var(--card-bg);
    border: 2px solid var(--card-hover);
    border-radius: var(--border-radius);
    color: #ffffff;
    box-sizing: border-box;
}

.form-input:focus {
    outline: none;
    border-color: var(--link-color);
}

.form-buttons {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    margin-top: 1rem;
}

.form-button {
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    font-size: 1.4rem;
    color: white;
    transition: all 0.2s;
}

.form-button.save {
    background-color: var(--success);
}

.form-button.cancel {
    background-color: var(--error);
}

.stats-section, .errors-section, .results {
    border: 1px solid rgba(255, 255, 255, 0.05);
    background-color: var(--card-bg);
    padding: 1.5rem;
    border-radius: var(--border-radius);
    margin-top: 2rem;
}

.stats-section h3, .errors-section h3, .results h3 {
    margin-top: 0;
    color: #ffffff;
    font-size: 2rem;
    border-bottom: 2px solid var(--link-color);
    padding-bottom: 0.75rem;
}

.errors-section h3 {
    border-bottom-color: var(--error);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-top: 1rem;
}

.stat-item {
    background-color: rgb(10 10 10 / 15%);
    padding: 1rem;
    border-radius: var(--border-radius);
    border-left: 4px solid var(--success);
    transition: all 0.2s;
}

.stat-item:hover {
    transform: translateY(-2px);
}

.stat-label {
    color: var(--text-muted);
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
}

.stat-value {
    color: #ffffff;
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Consolas', monospace;
}

.error-list {
    list-style-type: none;
    padding-left: 0;
    margin: 1rem 0 0 0;
}

.error-list li {
    padding: 1rem;
    margin: 1rem 0;
    background-color: rgb(10 10 10 / 15%);
    border-radius: var(--border-radius);
    border-left: 4px solid var(--error);
    color: var(--error);
    font-size: 1.5rem;
    display: flex;
    align-items: flex-start;
}

.error-icon {
    margin-right: 1rem;
    font-size: 1.6rem;
}

.result-content {
    min-height: 1rem;
    padding: 0rem 0;
}

.no-results {
    color: var(--text-muted);
    font-style: italic;
    text-align: center;
    padding: 1rem;
    font-size: 1.5rem;
}

.json-preview {
    background-color: rgb(10 10 10 / 15%);
    padding: 1rem;
    border-radius: var(--border-radius);
    margin-top: 1rem;
    max-height: 300px;
    overflow-y: auto;
    font-family: 'Consolas', monospace;
    font-size: 1.4rem;
    white-space: pre-wrap;
    word-break: break-all;
}

.json-key {
    color: var(--link-color);
    font-weight: bold;
}

.json-string {
    color: var(--success);
}

.json-number {
    color: #faa61a;
}

.json-boolean {
    color: var(--error);
}

.json-null {
    color: var(--text-muted);
}

.json-bracket {
    color: #ffffff;
    font-weight: bold;
}

.hidden {
    display: none;
}
</style>

<div class="container">
    <div class="description">
        <p>This JSON validator helps you validate and analyze JSON data. Paste your JSON code to check for syntax errors, view key statistics, and edit keys directly.</p>
        <p>Use the search to find keys by name or value. Add new keys, delete existing ones, or duplicate keys with their values.</p>
        <p>All changes are reflected in real-time in the JSON preview.</p>
    </div>
    <div class="input-section">
        <textarea class="json-input" id="jsonInput" placeholder='Paste your JSON here... Example: {"name": "John", "age": 30, "city": "New York"}'>{"name": "John", "age": 30, "city": "New York", "name": "Duplicate"}</textarea>
    </div>
    <div class="control-buttons">
        <button class="control-button" id="validateBtn">Validate JSON</button>
        <button class="control-button" id="formatBtn">Format JSON</button>
        <button class="control-button" id="clearBtn">Clear</button>
    </div>
    <div class="search-section" id="searchSection" style="display: none;">
        <div class="search-row">
            <input type="text" class="search-input" id="searchInput" placeholder="Search keys or values...">
            <button class="advanced-button" id="clearSearchBtn">Clear Search</button>
        </div>
        <div class="search-type">
            <label class="search-radio">
                <input type="radio" name="searchType" value="name" checked>
                Search by Key Name
            </label>
            <label class="search-radio">
                <input type="radio" name="searchType" value="value">
                Search by Value
            </label>
            <label class="search-radio">
                <input type="radio" name="searchType" value="both">
                Search Both
            </label>
        </div>
        <div class="search-stats" id="searchStats"></div>
    </div>
    <div class="advanced-controls" id="advancedControls" style="display: none;">
        <button class="advanced-button add" id="addKeyBtn">Add New Key</button>
        <button class="advanced-button duplicate" id="duplicateKeyBtn">Duplicate Selected</button>
        <button class="advanced-button delete" id="deleteKeyBtn">Delete Selected</button>
    </div>
    <div class="add-key-dialog" id="addKeyDialog">
        <div class="add-key-form">
            <div class="form-row">
                <label class="form-label">Key Name:</label>
                <input type="text" class="form-input" id="newKeyName" placeholder="Enter key name">
            </div>
            <div class="form-row">
                <label class="form-label">Value:</label>
                <input type="text" class="form-input" id="newKeyValue" placeholder="Enter value (string, number, true/false, null)">
            </div>
            <div class="form-row">
                <label class="form-label">Path (optional):</label>
                <input type="text" class="form-input" id="newKeyPath" placeholder="parent.child (leave empty for root)">
            </div>
            <div class="form-buttons">
                <button class="form-button save" id="saveNewKeyBtn">Save Key</button>
                <button class="form-button cancel" id="cancelNewKeyBtn">Cancel</button>
            </div>
        </div>
    </div>
    <div class="keys-section" id="keysSection" style="display: none;">
        <h3>JSON Keys <span class="keys-count" id="keysCount">0</span></h3>
        <div class="keys-container" id="keysContainer"></div>
    </div>
    <div class="stats-section" id="statsSection" style="display: none;">
        <h3>JSON Statistics</h3>
        <div class="stats-grid" id="statsGrid"></div>
    </div>
    <div class="errors-section" id="errorsSection" style="display: none;">
        <h3>Validation Errors</h3>
        <div class="error-list" id="errorList"></div>
    </div>
    <div class="results" id="previewSection" style="display: none;">
        <h3>JSON Preview</h3>
        <div class="result-content">
            <div class="json-preview" id="jsonPreview"></div>
        </div>
    </div>
</div>

<script src="json-validator.js"></script>