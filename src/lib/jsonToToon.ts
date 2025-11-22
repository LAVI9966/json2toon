/**
 * Converts JSON to TOON format following the specification
 */

export function jsonToToon(json: any, indent = 0): string {
  const indentStr = '  '.repeat(indent);
  
  if (json === null) return 'null';
  if (json === undefined) return 'undefined';
  
  // Handle primitives
  if (typeof json === 'boolean') return json.toString();
  if (typeof json === 'number') return json.toString();
  if (typeof json === 'string') return formatString(json);
  
  // Handle arrays
  if (Array.isArray(json)) {
    if (json.length === 0) return '[]';
    
    // Check if array contains uniform objects
    if (isUniformObjectArray(json)) {
      return formatUniformArray(json, indent);
    }
    
    // Non-uniform array - use dash notation
    return formatNonUniformArray(json, indent);
  }
  
  // Handle objects
  if (typeof json === 'object') {
    return formatObject(json, indent);
  }
  
  return String(json);
}

function formatString(str: string): string {
  // Check if string needs quoting
  const needsQuoting = 
    str.includes(',') ||
    str.includes(':') ||
    str.includes('\n') ||
    str.trim() !== str ||
    str === '' ||
    /[^A-Za-z0-9_\-@.\/]/.test(str);
  
  if (!needsQuoting) return str;
  
  // Escape special characters
  const escaped = str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/,/g, '\\,');
  
  return `"${escaped}"`;
}

function isUniformObjectArray(arr: any[]): boolean {
  if (arr.length === 0) return false;
  if (!arr.every(item => typeof item === 'object' && item !== null && !Array.isArray(item))) {
    return false;
  }
  
  const firstKeys = Object.keys(arr[0]).sort();
  return arr.every(item => {
    const itemKeys = Object.keys(item).sort();
    return itemKeys.length === firstKeys.length &&
           itemKeys.every((key, i) => key === firstKeys[i]);
  });
}

function formatUniformArray(arr: any[], indent: number): string {
  const indentStr = '  '.repeat(indent);
  const keys = Object.keys(arr[0]);
  
  let result = `[${arr.length}]{${keys.join(',')}}:\n`;
  
  for (const item of arr) {
    const values = keys.map(key => {
      const value = item[key];
      if (typeof value === 'object' && value !== null) {
        return formatString(JSON.stringify(value));
      }
      return formatString(String(value));
    });
    result += indentStr + '  ' + values.join(',') + '\n';
  }
  
  return result.trimEnd();
}

function formatNonUniformArray(arr: any[], indent: number): string {
  const indentStr = '  '.repeat(indent);
  let result = '';
  
  for (const item of arr) {
    result += indentStr + '- ';
    if (typeof item === 'object' && item !== null && !Array.isArray(item)) {
      // Inline object
      result += '\n';
      result += jsonToToon(item, indent + 1);
    } else {
      result += jsonToToon(item, 0);
    }
    result += '\n';
  }
  
  return result.trimEnd();
}

function formatObject(obj: any, indent: number): string {
  const indentStr = '  '.repeat(indent);
  let result = '';
  const entries = Object.entries(obj);
  
  for (let i = 0; i < entries.length; i++) {
    const [key, value] = entries[i];
    
    if (typeof value === 'object' && value !== null) {
      result += indentStr + key + ':\n';
      result += jsonToToon(value, indent + 1);
    } else {
      result += indentStr + key + ': ' + jsonToToon(value, 0);
    }
    
    if (i < entries.length - 1) result += '\n';
  }
  
  return result;
}
