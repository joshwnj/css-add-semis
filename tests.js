const addSemis = require('./')
const tape = require('tape')

tape('usage', (t) => {
  t.test('single property', (t) => {
    const css = addSemis(`
.myClass {
  color: red
}`)

    t.equal(css, `
.myClass {
  color: red;
}`)

    t.end()
  })

  t.test('multiple properties', (t) => {
    const css = addSemis(`
p {
  color: red
  background: blue
}`)

    t.equal(css, `
p {
  color: red;
  background: blue;
}`)

    t.end()
  })

  t.test('multiple selectors', (t) => {
    const css = addSemis(`
p,
a {
  color: red
}`)

    t.equal(css, `
p,
a {
  color: red;
}`)

    t.end()
  })

  t.test('pseudo', (t) => {
    const css = addSemis(`
p:hover {
  color: red
}`)

    t.equal(css, `
p:hover {
  color: red;
}`)

    t.end()
  })

  t.test('multiple pseudos', (t) => {
    const css = addSemis(`
p:focus,
p:hover {
  color: red
}`)

    t.equal(css, `
p:focus,
p:hover {
  color: red;
}`)

    t.end()
  })
})
