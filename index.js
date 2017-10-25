module.exports = function addSemis (css) {
  return css.replace(/(\w+:[^;}\n]+?)(\s*}|\n|$)/g, '$1;$2')
}
