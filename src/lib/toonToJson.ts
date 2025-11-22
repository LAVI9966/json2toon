/**
 * Converts TOON format to JSON following the specification
 */

export function toonToJson(toon: string): any {
  const lines = toon.split('\n');
  const result = parseToonLines(lines, 0);
  return result.value;
}

interface ParseResult {
  value: any;
  nextIndex: number;
}

function parseToonLines(lines: string[], startIndex: number): ParseResult {
  let currentIndex = startIndex;
  const currentLine = lines[currentIndex];
  
  if (!currentLine) {
    return { value: null, nextIndex: currentIndex + 1 };
  }
  
  const indent = getIndentation(currentLine);
  
  // Check for uniform array header
  const arrayMatch = currentLine.match(/^(\s*)([A-Za-z0-9_\-]+)?\[(\d+)\]\{([A-Za-z0-9_\-,]+)\}:$/);
  if (arrayMatch) {
    return parseUniformArray(lines, currentIndex);
  }
  
  // Check for dash array
  if (currentLine.trim().startsWith('-')) {
    return parseDashArray(lines, currentIndex);
  }
  
  // Check for object or key-value
  if (currentLine.includes(':')) {
    return parseObject(lines, currentIndex);
  }
  
  // Primitive value
  return { value: parseValue(currentLine.trim()), nextIndex: currentIndex + 1 };
}

function parseUniformArray(lines: string[], startIndex: number): ParseResult {
  const headerLine = lines[startIndex];
  const match = headerLine.match(/^(\s*)([A-Za-z0-9_\-]+)?\[(\d+)\]\{([A-Za-z0-9_\-,]+)\}:$/);
  
  if (!match) {
    throw new Error(`Invalid array header: ${headerLine}`);
  }
  
  const indent = getIndentation(headerLine);
  const length = parseInt(match[3]);
  const keys = match[4].split(',');
  
  const array: any[] = [];
  let currentIndex = startIndex + 1;
  
  for (let i = 0; i < length && currentIndex < lines.length; i++) {
    const dataLine = lines[currentIndex];
    if (!dataLine.trim()) {
      currentIndex++;
      continue;
    }
    
    const values = parseCSVLine(dataLine.trim());
    const obj: any = {};
    
    keys.forEach((key, idx) => {
      obj[key] = values[idx] !== undefined ? parseValue(values[idx]) : null;
    });
    
    array.push(obj);
    currentIndex++;
  }
  
  return { value: array, nextIndex: currentIndex };
}

function parseDashArray(lines: string[], startIndex: number): ParseResult {
  const array: any[] = [];
  const baseIndent = getIndentation(lines[startIndex]);
  let currentIndex = startIndex;
  
  while (currentIndex < lines.length) {
    const line = lines[currentIndex];
    if (!line.trim()) {
      currentIndex++;
      continue;
    }
    
    const lineIndent = getIndentation(line);
    if (lineIndent < baseIndent) break;
    if (lineIndent > baseIndent) break;
    
    if (!line.trim().startsWith('-')) break;
    
    const content = line.substring(line.indexOf('-') + 1).trim();
    
    if (content === '') {
      // Next line contains the value
      currentIndex++;
      const result = parseToonLines(lines, currentIndex);
      array.push(result.value);
      currentIndex = result.nextIndex;
    } else {
      array.push(parseValue(content));
      currentIndex++;
    }
  }
  
  return { value: array, nextIndex: currentIndex };
}

function parseObject(lines: string[], startIndex: number): ParseResult {
  const obj: any = {};
  const baseIndent = getIndentation(lines[startIndex]);
  let currentIndex = startIndex;
  
  while (currentIndex < lines.length) {
    const line = lines[currentIndex];
    if (!line.trim()) {
      currentIndex++;
      continue;
    }
    
    const lineIndent = getIndentation(line);
    if (lineIndent < baseIndent) break;
    if (lineIndent > baseIndent) break;
    
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) break;
    
    const key = line.substring(0, colonIndex).trim();
    const valueStr = line.substring(colonIndex + 1).trim();
    
    if (valueStr === '') {
      // Value on next lines
      currentIndex++;
      const result = parseToonLines(lines, currentIndex);
      obj[key] = result.value;
      currentIndex = result.nextIndex;
    } else {
      obj[key] = parseValue(valueStr);
      currentIndex++;
    }
  }
  
  return { value: obj, nextIndex: currentIndex };
}

function parseCSVLine(line: string): string[] {
  const values: string[] = [];
  let current = '';
  let inQuotes = false;
  let escaped = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (escaped) {
      if (char === 'n') current += '\n';
      else if (char === '\\') current += '\\';
      else if (char === '"') current += '"';
      else if (char === ',') current += ',';
      else current += char;
      escaped = false;
    } else if (char === '\\') {
      escaped = true;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      values.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  
  values.push(current);
  return values;
}

function parseValue(str: string): any {
  if (str === 'null') return null;
  if (str === 'undefined') return undefined;
  if (str === 'true') return true;
  if (str === 'false') return false;
  
  // Remove quotes if present
  if (str.startsWith('"') && str.endsWith('"')) {
    str = str.slice(1, -1);
    // Unescape
    str = str
      .replace(/\\n/g, '\n')
      .replace(/\\,/g, ',')
      .replace(/\\"/g, '"')
      .replace(/\\\\/g, '\\');
    return str;
  }
  
  // Try number
  const num = Number(str);
  if (!isNaN(num) && str !== '') return num;
  
  return str;
}

function getIndentation(line: string): number {
  const match = line.match(/^(\s*)/);
  return match ? match[1].length : 0;
}
