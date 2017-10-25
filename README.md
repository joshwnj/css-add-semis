# css-add-semis

Tiny function to add semicolons to a CSS string.

## Install

`npm i --save css-add-semis`

## Usage

```js
import addSemis from 'css-add-semis'

console.log(addSemis(`

  .exampleClass {
    font-size: 100px
    margin: 2rem 0
  }
  
`))
```

Outputs:

```css
  .exampleClass {
    font-size: 100px;
    margin: 2rem 0;
  }
```


