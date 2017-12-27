module.exports = function addSemis (css) {
  return css.replace(/(\w+\s*:[^{;}\n]+?)(\s*}|(?<!,\s*)\n|$)/g, '$1;$2')
}
