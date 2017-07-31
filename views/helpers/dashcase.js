module.exports = function dashcase(str) {
  if (typeof(str) !== 'string') return '';
  return str.toLowerCase().trim().replace(/(\s|_)/g, '-');
}