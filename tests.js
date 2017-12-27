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
  font-family: Arial, "Helvetica Neue", sans-serif
}`)

    t.equal(css, `
p {
  color: red;
  background: blue;
  font-family: Arial, "Helvetica Neue", sans-serif;
}`)

    t.end()
  })

  t.test('multiple selectors', (t) => {
    const css = addSemis(`
p,
a {
  color: red
}

span, div {
  display: inline-block
}`)

    t.equal(css, `
p,
a {
  color: red;
}

span, div {
  display: inline-block;
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
p:hover, a::after {
  color: red
}`)

    t.equal(css, `
p:focus,
p:hover, a::after {
  color: red;
}`)

    t.end()
  })

  t.test('mixed selectors', (t) => {
    const css = addSemis(`
a,
p:focus,
p:hover,
span.active {
  color: red
}`)

    t.equal(css, `
a,
p:focus,
p:hover,
span.active {
  color: red;
}`)

    t.end()
  })

  t.test('random styles formatting', (t) => {
    const css = addSemis(`
p {
  color     :      red

  background: blue;
  BORDER: 1px    solid red


      border-radius:12px
      transform: rotate(15deg) translate(-20px,0px)
      font-family: Arial, "Helvetica Neue", sans-serif
      box-shadow: 1px -.2em 0 rgba(0, 0, 123, .3)
}`)

    t.equal(css, `
p {
  color     :      red;

  background: blue;
  BORDER: 1px    solid red;


      border-radius:12px;
      transform: rotate(15deg) translate(-20px,0px);
      font-family: Arial, "Helvetica Neue", sans-serif;
      box-shadow: 1px -.2em 0 rgba(0, 0, 123, .3);
}`)

    t.end()
  })
})
