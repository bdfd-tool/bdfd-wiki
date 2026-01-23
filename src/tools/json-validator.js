// JSON Validator Application

// DOM Elements
const jsonInput = document.getElementById('jsonInput');
const validateBtn = document.getElementById('validateBtn');
const formatBtn = document.getElementById('formatBtn');
const clearBtn = document.getElementById('clearBtn');
const statsSection = document.getElementById('statsSection');
const statsGrid = document.getElementById('statsGrid');
const keysSection = document.getElementById('keysSection');
const keysList = document.getElementById('keysList');
const errorsSection = document.getElementById('errorsSection');
const errorList = document.getElementById('errorList');
const previewSection = document.getElementById('previewSection');
const jsonPreview = document.getElementById('jsonPreview');

// Current editing state
let currentJson = null;
let editingKey = null;

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
    keysList.innerHTML = '';
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
        maxDepth: depth,
        objectCount: 0,
        arrayCount: 0,
        stringCount: 0,
        numberCount: 0,
        booleanCount: 0,
        nullCount: 0,
        totalSize: JSON.stringify(obj).length
    };
    
    function traverse(current, currentDepth) {
        stats.maxDepth = Math.max(stats.maxDepth, currentDepth);
        
        if (Array.isArray(current)) {
            stats.arrayCount++;
            current.forEach(item => {
                if (typeof item === 'object' && item !== null) {
                    traverse(item, currentDepth + 1);
                }
            });
        } else if (typeof current === 'object' && current !== null) {
            stats.objectCount++;
            Object.keys(current).forEach(key => {
                stats.totalKeys++;
                const value = current[key];
                
                if (typeof value === 'string') {
                    stats.stringCount++;
                } else if (typeof value === 'number') {
                    stats.numberCount++;
                } else if (typeof value === 'boolean') {
                    stats.booleanCount++;
                } else if (value === null) {
                    stats.nullCount++;
                } else if (typeof value === 'object') {
                    traverse(value, currentDepth + 1);
                }
            });
        }
    }
    
    traverse(obj, depth);
    return stats;
}

// Get the root type of JSON
function getRootType(obj) {
    if (Array.isArray(obj)) return 'Array';
    if (typeof obj === 'object' && obj !== null) return 'Object';
    return typeof obj;
}

// Display all keys from JSON
function showKeys(json) {
    keysSection.style.display = 'block';
    keysList.innerHTML = '';
    
    const keys = extractKeys(json);
    
    keys.forEach(key => {
        const keyElement = document.createElement('div');
        keyElement.className = 'key-item';
        keyElement.textContent = key;
        keyElement.title = `Click to edit key: ${key}`;
        
        keyElement.addEventListener('click', () => {
            startEditingKey(key, keyElement);
        });
        
        keysList.appendChild(keyElement);
    });
}

// Extract all keys from JSON object
function extractKeys(obj, prefix = '', keys = []) {
    if (typeof obj === 'object' && obj !== null) {
        Object.keys(obj).forEach(key => {
            const fullKey = prefix ? `${prefix}.${key}` : key;
            keys.push(fullKey);
            
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                extractKeys(obj[key], fullKey, keys);
            }
        });
    }
    return keys;
}

// Start editing a key
function startEditingKey(oldKey, element) {
    if (editingKey === oldKey) return;
    
    // Stop any current editing
    if (editingKey) {
        stopEditingKey();
    }
    
    editingKey = oldKey;
    element.classList.add('editing');
    
    // Create input field
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'key-input';
    input.value = oldKey;
    input.placeholder = 'Enter new key name';
    
    // Replace text with input
    element.innerHTML = '';
    element.appendChild(input);
    input.focus();
    input.select();
    
    // Handle input events
    input.addEventListener('blur', () => finishEditingKey(input, element));
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            finishEditingKey(input, element);
        } else if (e.key === 'Escape') {
            cancelEditingKey(element, oldKey);
        }
    });
}

// Finish editing a key
function finishEditingKey(input, element) {
    const newKey = input.value.trim();
    
    if (newKey && newKey !== editingKey) {
        // Update JSON
        updateJsonKey(editingKey, newKey);
        
        // Update input field
        jsonInput.value = JSON.stringify(currentJson, null, 2);
        
        // Re-validate
        validateJson();
    } else {
        cancelEditingKey(element, editingKey);
    }
    
    editingKey = null;
}

// Cancel editing
function cancelEditingKey(element, originalKey) {
    element.classList.remove('editing');
    element.textContent = originalKey;
    editingKey = null;
}

// Stop editing current key
function stopEditingKey() {
    const editingElement = document.querySelector('.key-item.editing');
    if (editingElement) {
        editingElement.classList.remove('editing');
        const originalKey = editingElement.textContent || editingKey;
        editingElement.textContent = originalKey;
    }
    editingKey = null;
}

// Update a key in the JSON structure
function updateJsonKey(oldKey, newKey) {
    if (!currentJson) return;
    
    const keyPath = oldKey.split('.');
    const newKeyPath = newKey.split('.');
    
    // Simple implementation for top-level keys
    if (keyPath.length === 1) {
        if (currentJson.hasOwnProperty(oldKey)) {
            currentJson[newKey] = currentJson[oldKey];
            delete currentJson[oldKey];
        }
    }
    // For nested keys, we would need more complex traversal
    // This is a simplified version
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