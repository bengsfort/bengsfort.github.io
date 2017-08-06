module.exports = function stringify(str) {
  if (typeof(str) !== 'string') return '';
  return JSON.stringify(str);
}