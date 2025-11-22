/**
 * Simple token counter approximation
 * Splits on whitespace and punctuation
 */

export function countTokens(text: string): number {
  if (!text || text.trim() === '') return 0;
  
  // Split on whitespace and common punctuation
  const tokens = text
    .split(/[\s\n\r,;:.!?()\[\]{}]+/)
    .filter(token => token.length > 0);
  
  return tokens.length;
}
