
<style>
:root {
    --color1: #7289da;
    --color2: #43b581;
    --color3: #2f3136;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background-color: #36393f;
    color: #dcddde;
}

.container {
    background-color: var(--color3);
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
}

h1 {
    color: #ffffff;
    text-align: center;
    margin-bottom: 25px;
    font-size: 28px;
}

.description {
    background-color: #40444b;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 25px;
    border-left: 4px solid var(--color1);
}

.description p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 10px;
    color: #dcddde;
}

.input-section {
    margin-bottom: 25px;
}

.json-input {
    width: 100%;
    min-height: 200px;
    padding: 15px;
    font-size: 16px;
    background-color: #40444b;
    border: 2px solid #202225;
    border-radius: 8px;
    color: #ffffff;
    box-sizing: border-box;
    font-family: 'Consolas', monospace;
    resize: vertical;
}

.json-input:focus {
    outline: none;
    border-color: var(--color1);
}

.json-input.valid {
    border-color: var(--color2);
}

.json-input.invalid {
    border-color: #ed4245;
}

.control-buttons {
    display: flex;
    gap: 15px;
    margin-bottom: 25px;
}

.control-button {
    flex: 1;
    padding: 12px 20px;
    background-color: var(--color1);
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    text-align: center;
}

.control-button:hover {
    background-color: #5b6eae;
    transform: translateY(-2px);
}

.control-button.format {
    background-color: var(--color2);
}

.control-button.format:hover {
    background-color: #3ca374;
}

.control-button.clear {
    background-color: #ed4245;
}

.control-button.clear:hover {
    background-color: #c03537;
}

.results {
    background-color: #202225;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
}

.results h3 {
    margin-top: 0;
    color: #ffffff;
    font-size: 18px;
    border-bottom: 2px solid var(--color1);
    padding-bottom: 10px;
}

.result-content {
    min-height: 80px;
    padding: 15px 0;
}

.stats-section {
    background-color: #2f3136;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 25px;
}

.stats-section h3 {
    margin-top: 0;
    color: #ffffff;
    font-size: 18px;
    border-bottom: 2px solid var(--color1);
    padding-bottom: 10px;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-top: 15px;
}

.stat-item {
    background-color: #40444b;
    padding: 15px;
    border-radius: 6px;
    border-left: 4px solid var(--color2);
}

.stat-label {
    color: #99aab5;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 5px;
}

.stat-value {
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Consolas', monospace;
}

.errors-section {
    background-color: #2f3136;
    padding: 20px;
    border-radius: 8px;
    margin-top: 25px;
}

.errors-section h3 {
    margin-top: 0;
    color: #ffffff;
    font-size: 18px;
    border-bottom: 2px solid #ed4245;
    padding-bottom: 10px;
}

.error-list {
    list-style-type: none;
    padding-left: 0;
    margin: 15px 0 0 0;
}

.error-list li {
    padding: 12px;
    margin: 8px 0;
    background-color: rgba(237, 66, 69, 0.1);
    border-radius: 6px;
    border-left: 4px solid #ed4245;
    color: #f04747;
    font-size: 14px;
    display: flex;
    align-items: flex-start;
}

.error-icon {
    margin-right: 10px;
    font-size: 16px;
}

.keys-section {
    background-color: #2f3136;
    padding: 20px;
    border-radius: 8px;
    margin-top: 25px;
}

.keys-section h3 {
    margin-top: 0;
    color: #ffffff;
    font-size: 18px;
    border-bottom: 2px solid var(--color2);
    padding-bottom: 10px;
}

.keys-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 15px;
}

.key-item {
    background-color: #40444b;
    padding: 8px 15px;
    border-radius: 20px;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 14px;
    color: #ffffff;
}

.key-item:hover {
    background-color: var(--color1);
    transform: translateY(-2px);
}

.key-item.editing {
    background-color: var(--color2);
    border-color: var(--color2);
}

.key-input {
    background: transparent;
    border: none;
    color: #ffffff;
    font-size: 14px;
    outline: none;
    width: 150px;
    padding: 2px 5px;
    border-bottom: 1px solid var(--color2);
}

.success {
    color: var(--color2);
    padding: 15px;
    background-color: rgba(67, 181, 129, 0.1);
    border-radius: 6px;
    text-align: center;
    border-left: 4px solid var(--color2);
}

.no-results {
    color: #99aab5;
    font-style: italic;
    text-align: center;
    padding: 20px;
}

.json-preview {
    background-color: #2f3136;
    padding: 15px;
    border-radius: 6px;
    margin-top: 15px;
    max-height: 300px;
    overflow-y: auto;
    font-family: 'Consolas', monospace;
    font-size: 14px;
    white-space: pre-wrap;
    word-break: break-all;
}

.json-key {
    color: var(--color1);
    font-weight: bold;
}

.json-string {
    color: var(--color2);
}

.json-number {
    color: #faa61a;
}

.json-boolean {
    color: #ed4245;
}

.json-null {
    color: #99aab5;
}

.json-bracket {
    color: #ffffff;
    font-weight: bold;
}
</style>

<div class="container">
    <h1>🔧 JSON Execution Validator</h1>
    <div class="description">
        <p>This JSON validator helps you validate and analyze JSON data. Paste your JSON code to check for syntax errors, view key statistics, and edit keys directly.</p>
        <p>The validator provides detailed information about your JSON structure, including key count, nesting depth, and data type distribution.</p>
        <p>Click on any key to edit it directly in the JSON structure.</p>
    </div>
    <div class="input-section">
        <textarea class="json-input" id="jsonInput" placeholder='Paste your JSON here... Example: {"name": "John", "age": 30, "city": "New York"}'>{"name": "John", "age": 30, "city": "New York"}</textarea>
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
        <div class="keys-list" id="keysList"></div>
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