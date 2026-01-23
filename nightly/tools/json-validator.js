// Enhanced JSON Validator Application with duplicate key support

// DOM Elements
const jsonInput = document.getElementById('jsonInput');
const validateBtn = document.getElementById('validateBtn');
const formatBtn = document.getElementById('formatBtn');
const clearBtn = document.getElementById('clearBtn');
const statsSection = document.getElementById('statsSection');
const statsGrid = document.getElementById('statsGrid');
const keysSection = document.getElementById('keysSection');
const keysContainer = document.getElementById('keysContainer');
const errorsSection = document.getElementById('errorsSection');
const errorList = document.getElementById('errorList');
const previewSection = document.getElementById('previewSection');
const jsonPreview = document.getElementById('jsonPreview');

// Current editing state
let currentJson = null;
let editingItem = null;
let keyIndexMap = new Map();

// Initialize the application
function initializeApp() {
    // Add event listeners
    validateBtn.addEventListener('click', validateJson);
    formatBtn.addEventListener('click', formatJson);
    clearBtn.addEventListener('click', clearJson);
    
    // Auto-validate on input with debounce
    let debounceTimer;
    jsonInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(validateJson, 500);
    });
    
    // Initial validation
    validateJson();
}

// Validate JSON function
function validateJson() {
    const input = jsonInput.value.trim();
    
    // Clear previous results
    clearResults();
    keyIndexMap.clear();
    
    if (!input) {
        showNoInputMessage();
        return;
    }
    
    try {
        // Parse JSON
        currentJson = JSON.parse(input);
        
        // Update UI for valid JSON
        jsonInput.classList.remove('invalid');
        jsonInput.classList.add('valid');
        
        // Show statistics
        showStatistics(currentJson);
        
        // Show keys
        showKeys(currentJson);
        
        // Show preview
        showPreview(currentJson);
        
    } catch (error) {
        // Handle JSON parsing errors
        jsonInput.classList.remove('valid');
        jsonInput.classList.add('invalid');
        
        showError(error);
    }
}

// Format JSON function
function formatJson() {
    const input = jsonInput.value.trim();
    
    if (!input) {
        alert('Please enter some JSON to format.');
        return;
    }
    
    try {
        const parsed = JSON.parse(input);
        const formatted = JSON.stringify(parsed, null, 2);
        jsonInput.value = formatted;
        
        // Re-validate after formatting
        validateJson();
        
    } catch (error) {
        alert('Invalid JSON. Cannot format.');
    }
}

// Clear JSON function
function clearJson() {
    jsonInput.value = '';
    clearResults();
    jsonInput.classList.remove('valid', 'invalid');
    showNoInputMessage();
}

// Clear all result sections
function clearResults() {
    statsSection.style.display = 'none';
    keysSection.style.display = 'none';
    errorsSection.style.display = 'none';
    previewSection.style.display = 'none';
    statsGrid.innerHTML = '';
    keysContainer.innerHTML = '';
    errorList.innerHTML = '';
    jsonPreview.innerHTML = '';
}

// Show message when no input
function showNoInputMessage() {
    previewSection.style.display = 'block';
    jsonPreview.innerHTML = '<div class="no-results">Enter JSON data to begin validation</div>';
}

// Show error message
function showError(error) {
    errorsSection.style.display = 'block';
    
    const errorItem = document.createElement('li');
    errorItem.innerHTML = `
        <span class="error-icon">❌</span>
        <div>
            <strong>${error.name}:</strong> ${error.message}
            ${error.lineNumber ? `<br><small>Line: ${error.lineNumber}</small>` : ''}
        </div>
    `;
    
    errorList.appendChild(errorItem);
}

// Calculate and display JSON statistics
function showStatistics(json) {
    statsSection.style.display = 'block';
    
    const stats = calculateStatistics(json);
    
    const statItems = [
        { label: 'Total Keys', value: stats.totalKeys },
        { label: 'Unique Keys', value: stats.uniqueKeys },
        { label: 'Duplicate Keys', value: stats.duplicateKeys },
        { label: 'Nesting Depth', value: stats.maxDepth },
        { label: 'Object Count', value: stats.objectCount },
        { label: 'Array Count', value: stats.arrayCount },
        { label: 'String Values', value: stats.stringCount },
        { label: 'Number Values', value: stats.numberCount },
        { label: 'Boolean Values', value: stats.booleanCount },
        { label: 'Null Values', value: stats.nullCount },
        { label: 'Total Size', value: `${stats.totalSize} bytes` },
        { label: 'JSON Type', value: getRootType(json) }
    ];
    
    statsGrid.innerHTML = '';
    statItems.forEach(stat => {
        const statElement = document.createElement('div');
        statElement.className = 'stat-item';
        statElement.innerHTML = `
            <div class="stat-label">${stat.label}</div>
            <div class="stat-value">${stat.value}</div>
        `;
        statsGrid.appendChild(statElement);
    });
}

// Calculate various statistics about the JSON
function calculateStatistics(obj, depth = 0) {
    const stats = {
        totalKeys: 0,
        uniqueKeys: new Set(),
        duplicateKeys: 0,
        maxDepth: depth,
        objectCount: 0,
        arrayCount: 0,
        stringCount: 0,
        numberCount: 0,
        booleanCount: 0,
        nullCount: 0,
        totalSize: JSON.stringify(obj).length
    };
    
    function traverse(current, currentDepth, path = '') {
        stats.maxDepth = Math.max(stats.maxDepth, currentDepth);
        
        if (Array.isArray(current)) {
            stats.arrayCount++;
            current.forEach((item, index) => {
                if (typeof item === 'object' && item !== null) {
                    traverse(item, currentDepth + 1, `${path}[${index}]`);
                }
            });
        } else if (typeof current === 'object' && current !== null) {
            stats.objectCount++;
            
            // Track keys for duplicates
            const keys = Object.keys(current);
            keys.forEach(key => {
                const fullPath = path ? `${path}.${key}` : key;
                
                // Count total keys
                stats.totalKeys++;
                
                // Track duplicates
                if (stats.uniqueKeys.has(key)) {
                    stats.duplicateKeys++;
                } else {
                    stats.uniqueKeys.add(key);
                }
                
                // Store in key index map for duplicate handling
                if (!keyIndexMap.has(key)) {
                    keyIndexMap.set(key, []);
                }
                keyIndexMap.get(key).push(fullPath);
                
                const value = current[key];
                
                // Count value types
                if (typeof value === 'string') {
                    stats.stringCount++;
                } else if (typeof value === 'number') {
                    stats.numberCount++;
                } else if (typeof value === 'boolean') {
                    stats.booleanCount++;
                } else if (value === null) {
                    stats.nullCount++;
                } else if (typeof value === 'object') {
                    traverse(value, currentDepth + 1, fullPath);
                }
            });
        }
    }
    
    traverse(obj, depth);
    
    // Convert Set size to number
    stats.uniqueKeys = stats.uniqueKeys.size;
    
    return stats;
}

// Get the root type of JSON
function getRootType(obj) {
    if (Array.isArray(obj)) return 'Array';
    if (typeof obj === 'object' && obj !== null) return 'Object';
    return typeof obj;
}

// Display all keys from JSON with duplicate support
function showKeys(json) {
    keysSection.style.display = 'block';
    keysContainer.innerHTML = '';
    
    // Group keys by name to handle duplicates
    const keyGroups = new Map();
    
    // Collect all key-value pairs with their paths
    function collectKeys(obj, path = '', parent = json) {
        if (typeof obj === 'object' && obj !== null) {
            Object.keys(obj).forEach(key => {
                const fullPath = path ? `${path}.${key}` : key;
                const value = obj[key];
                const valueType = getValueType(value);
                
                if (!keyGroups.has(key)) {
                    keyGroups.set(key, []);
                }
                
                keyGroups.get(key).push({
                    key: key,
                    path: fullPath,
                    value: value,
                    valueType: valueType,
                    displayValue: formatValueForDisplay(value)
                });
                
                if (typeof value === 'object' && value !== null) {
                    collectKeys(value, fullPath, obj);
                }
            });
        }
    }
    
    collectKeys(json);
    
    // Create UI for each key group
    keyGroups.forEach((items, keyName) => {
        const groupElement = document.createElement('div');
        groupElement.className = 'key-group';
        
        const titleElement = document.createElement('div');
        titleElement.className = 'key-group-title';
        titleElement.innerHTML = `
            ${keyName}
            ${items.length > 1 ? `<span class="key-count">${items.length}</span>` : ''}
        `;
        
        const keysListElement = document.createElement('div');
        keysListElement.className = 'keys-list';
        
        items.forEach((item, index) => {
            const keyElement = createKeyElement(item, index);
            keysListElement.appendChild(keyElement);
        });
        
        groupElement.appendChild(titleElement);
        groupElement.appendChild(keysListElement);
        keysContainer.appendChild(groupElement);
    });
}

// Create a key element with edit functionality
function createKeyElement(item, index) {
    const keyElement = document.createElement('div');
    keyElement.className = 'key-item';
    keyElement.dataset.path = item.path;
    keyElement.dataset.keyIndex = index;
    
    const keyNameElement = document.createElement('div');
    keyNameElement.className = 'key-name';
    keyNameElement.textContent = item.key;
    
    const keyValueElement = document.createElement('div');
    keyValueElement.className = `key-value ${item.valueType}`;
    keyValueElement.textContent = item.displayValue;
    
    const controlsElement = document.createElement('div');
    controlsElement.className = 'edit-controls';
    
    const editNameBtn = document.createElement('button');
    editNameBtn.className = 'edit-btn';
    editNameBtn.textContent = 'Edit Name';
    editNameBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        startEditingKey(item, keyElement, 'name');
    });
    
    const editValueBtn = document.createElement('button');
    editValueBtn.className = 'edit-btn';
    editValueBtn.textContent = 'Edit Value';
    editValueBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        startEditingKey(item, keyElement, 'value');
    });
    
    controlsElement.appendChild(editNameBtn);
    controlsElement.appendChild(editValueBtn);
    
    keyElement.appendChild(keyNameElement);
    keyElement.appendChild(keyValueElement);
    keyElement.appendChild(controlsElement);
    
    return keyElement;
}

// Get value type for CSS class
function getValueType(value) {
    if (typeof value === 'string') return 'string';
    if (typeof value === 'number') return 'number';
    if (typeof value === 'boolean') return 'boolean';
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'array';
    if (typeof value === 'object') return 'object';
    return 'unknown';
}

// Format value for display
function formatValueForDisplay(value) {
    if (value === null) return 'null';
    if (typeof value === 'string') return `"${value.length > 30 ? value.substring(0, 27) + '...' : value}"`;
    if (typeof value === 'object') {
        if (Array.isArray(value)) {
            return `[${value.length} items]`;
        } else {
            return `{${Object.keys(value).length} keys}`;
        }
    }
    return String(value);
}

// Start editing a key or value
function startEditingKey(item, element, editType) {
    if (editingItem) {
        cancelEditing(editingItem.element, editingItem.item, editingItem.editType);
    }
    
    editingItem = { element, item, editType };
    element.classList.add('editing');
    
    // Clear the element content
    element.innerHTML = '';
    
    if (editType === 'name') {
        // Create name input
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.className = 'key-input';
        nameInput.value = item.key;
        nameInput.placeholder = 'Enter new key name';
        
        element.appendChild(nameInput);
        nameInput.focus();
        nameInput.select();
        
        // Handle input events
        nameInput.addEventListener('blur', () => finishEditingKey(nameInput.value, null));
        nameInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                finishEditingKey(nameInput.value, null);
            } else if (e.key === 'Escape') {
                cancelEditing(element, item, editType);
            }
        });
        
    } else if (editType === 'value') {
        // Create value input
        const valueInput = document.createElement('input');
        valueInput.type = 'text';
        valueInput.className = 'value-input';
        valueInput.value = typeof item.value === 'string' ? item.value : JSON.stringify(item.value);
        valueInput.placeholder = 'Enter new value';
        
        element.appendChild(valueInput);
        valueInput.focus();
        valueInput.select();
        
        // Handle input events
        valueInput.addEventListener('blur', () => finishEditingKey(null, valueInput.value));
        valueInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                finishEditingKey(null, valueInput.value);
            } else if (e.key === 'Escape') {
                cancelEditing(element, item, editType);
            }
        });
    }
}

// Finish editing
function finishEditingKey(newKey, newValue) {
    if (!editingItem) return;
    
    const { item, element, editType } = editingItem;
    
    try {
        let updatedJson = JSON.parse(jsonInput.value);
        
        if (editType === 'name' && newKey && newKey !== item.key) {
            // Update key name in JSON
            updatedJson = updateKeyInJson(updatedJson, item.path, newKey);
        } else if (editType === 'value' && newValue !== undefined) {
            // Update value in JSON
            updatedJson = updateValueInJson(updatedJson, item.path, parseValue(newValue));
        }
        
        // Update the input and re-validate
        jsonInput.value = JSON.stringify(updatedJson, null, 2);
        validateJson();
        
    } catch (error) {
        alert(`Error: ${error.message}`);
        cancelEditing(element, item, editType);
    }
    
    editingItem = null;
}

// Cancel editing
function cancelEditing(element, item, editType) {
    element.classList.remove('editing');
    
    // Re-create the key element
    const newElement = createKeyElement(item, element.dataset.keyIndex);
    element.parentNode.replaceChild(newElement, element);
    
    editingItem = null;
}

// Update a key in JSON structure by path
function updateKeyInJson(json, path, newKey) {
    const pathParts = path.split('.');
    let current = json;
    
    // Navigate to parent object
    for (let i = 0; i < pathParts.length - 1; i++) {
        if (current[pathParts[i]] === undefined) {
            throw new Error(`Path not found: ${pathParts[i]}`);
        }
        current = current[pathParts[i]];
    }
    
    const oldKey = pathParts[pathParts.length - 1];
    
    if (current[oldKey] !== undefined) {
        // Create new key and delete old one
        current[newKey] = current[oldKey];
        delete current[oldKey];
    }
    
    return json;
}

// Update a value in JSON structure by path
function updateValueInJson(json, path, newValue) {
    const pathParts = path.split('.');
    let current = json;
    
    // Navigate to the object containing the key
    for (let i = 0; i < pathParts.length - 1; i++) {
        if (current[pathParts[i]] === undefined) {
            throw new Error(`Path not found: ${pathParts[i]}`);
        }
        current = current[pathParts[i]];
    }
    
    const key = pathParts[pathParts.length - 1];
    
    if (current[key] !== undefined) {
        current[key] = newValue;
    }
    
    return json;
}

// Parse input value to appropriate type
function parseValue(input) {
    const trimmed = input.trim();
    
    // Try to parse as JSON
    if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
        try {
            return JSON.parse(trimmed);
        } catch (e) {
            // If not valid JSON, treat as string
        }
    }
    
    // Try to parse as number
    if (!isNaN(trimmed) && trimmed !== '') {
        const num = Number(trimmed);
        if (!isNaN(num)) {
            return num;
        }
    }
    
    // Try to parse as boolean
    if (trimmed.toLowerCase() === 'true') return true;
    if (trimmed.toLowerCase() === 'false') return false;
    
    // Try to parse as null
    if (trimmed.toLowerCase() === 'null') return null;
    
    // Default to string
    return trimmed;
}

// Display formatted JSON preview
function showPreview(json) {
    previewSection.style.display = 'block';
    jsonPreview.innerHTML = syntaxHighlight(JSON.stringify(json, null, 2));
}

// Syntax highlighting for JSON
function syntaxHighlight(json) {
    if (!json) return '';
    
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
        let cls = 'json-number';
        
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'json-key';
                match = match.replace(/:$/, '<span class="json-bracket">:</span>');
            } else {
                cls = 'json-string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'json-boolean';
        } else if (/null/.test(match)) {
            cls = 'json-null';
        } else if (/\d/.test(match)) {
            cls = 'json-number';
        }
        
        return `<span class="${cls}">${match}</span>`;
    })
    .replace(/{|}|\[|\]/g, (match) => {
        return `<span class="json-bracket">${match}</span>`;
    })
    .replace(/\n/g, '<br>')
    .replace(/ /g, '&nbsp;');
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Export functions for testing
window.validateJson = validateJson;
window.formatJson = formatJson;
window.clearJson = clearJson;