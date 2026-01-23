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

.description p:last-child {
    margin-bottom: 0;
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

.control-button.format {
    background: hsl(0deg 0% 100% / 7%);
}

.control-button.clear {
    background: hsl(0deg 0% 100% / 7%);
}

.results {
    border: 1px solid rgba(255, 255, 255, 0.05);
    background-color: var(--card-bg);
    padding: 1.5rem;
    border-radius: var(--border-radius);
    margin-top: -1rem;
}

.results h3 {
    margin-top: 0;
    color: #ffffff;
    font-size: 2rem;
    border-bottom: 2px solid var(--link-color);
    padding-bottom: 0.75rem;
}

.result-content {
    min-height: 1rem;
    padding: 0rem 0;
}

#jsonPreview {
    margin-top: -2rem;
}

.stats-section {
    border: 1px solid rgba(255, 255, 255, 0.05);
    background-color: var(--card-bg);
    padding: 1.5rem;
    border-radius: var(--border-radius);
    margin-top: 2rem;
}

.stats-section h3 {
    margin-top: 0;
    color: #ffffff;
    font-size: 2rem;
    border-bottom: 2px solid var(--link-color);
    padding-bottom: 0.75rem;
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

.errors-section {
    border: 1px solid rgba(255, 255, 255, 0.05);
    background-color: var(--card-bg);
    padding: 1.5rem;
    border-radius: var(--border-radius);
    margin-top: 2rem;
}

.errors-section h3 {
    margin-top: 0;
    color: #ffffff;
    font-size: 2rem;
    border-bottom: 2px solid var(--error);
    padding-bottom: 0.75rem;
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
}

.keys-container {
    margin-top: 1rem;
}

.key-group {
    margin-bottom: 2rem;
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
    gap: 1rem;
}

.key-count {
    background-color: var(--success);
    color: white;
    padding: 0.2rem 0.8rem;
    border-radius: 10px;
    font-size: 1.2rem;
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

.key-name {
    font-weight: bold;
    color: var(--link-color);
}

.key-value {
    font-size: 1.2rem;
    color: var(--text-muted);
    font-family: 'Consolas', monospace;
    word-break: break-all;
    max-width: 250px;
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

.edit-controls {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.edit-btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.2s;
    background: hsl(0deg 0% 100% / 7%);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    color: #fff;
}

.edit-btn:hover {
    transform: scale(1.05);
    border-radius: 8px;
    border-width: 1px;
    transition: 0.2s;
}

.success {
    color: var(--success);
    padding: 1.5rem;
    background-color: rgb(10 10 10 / 15%);
    border-radius: var(--border-radius);
    text-align: center;
    border-left: 4px solid var(--success);
}

.no-results {
    color: var(--text-muted);
    font-style: italic;
    text-align: center;
    padding: 1rem;
    font-size: 1.5rem;
}

.search-info {
    color: var(--text-secondary);
    font-size: 1.6rem;
    margin-top: -1.5rem;
    padding-top: 0;
}

.warning {
    color: var(--error);
    font-size: 1.4rem;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: var(--border-radius);
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
</style>

<div class="container">
    <div class="description">
        <p>This JSON validator helps you validate and analyze JSON data. Paste your JSON code to check for syntax errors, view key statistics, and edit keys directly.</p>
        <p>The validator provides detailed information about your JSON structure, including key count, nesting depth, and data type distribution.</p>
        <p>Click on any key to edit it directly in the JSON structure.</p>
    </div>
    <div class="input-section">
        <textarea class="json-input" id="jsonInput" placeholder='Paste your JSON here... Example: {"name": "John", "age": 30, "city": "New York"}'>{"name": "John", "age": 30, "city": "New York", "name": "Duplicate"}</textarea>
    </div>
    <div class="control-buttons">
        <button class="control-button" id="validateBtn">Validate JSON</button>
        <button class="control-button format" id="formatBtn">Format JSON</button>
        <button class="control-button clear" id="clearBtn">Clear</button>
    </div>
    <div class="stats-section" id="statsSection" style="display: none;">
        <h3>JSON Statistics</h3>
        <div class="stats-grid" id="statsGrid"></div>
    </div>
    <div class="keys-section" id="keysSection" style="display: none;">
        <h3>JSON Keys</h3>
        <div class="keys-container" id="keysContainer"></div>
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

<script src="json-validator.js"></script><script src="json-validator.js"></script>