const hasSemi = /;\s*$/
module.exports = function addSemis (css) {
  return css.replace(/(\{\s*)([\s\S]+?)(\s*\})/g, function (matches, open, body, close) {
    return open + body
      .split('\n')
      .map(function (line) {
        const isEmpty = line.trim() === ''
        return isEmpty || hasSemi.test(line) ? line : line + ';'
      })
      .join('\n') + close
  })
}
