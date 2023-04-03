```javascript
let x = 10;

const y = 20;

var z = 30;
```

# ==========let==========

let:iska use variable declertion ka leya kiya jata hai.let variable ko declertion sa phala use nahi kar sktay.let ma value re assign kar sktay hai.let ko redeclere nahi kar sktay.for example:

- for example

```javascript
let x = 10;
x = 20;
console.log(x);
```

- SyntaxError: 'x' has already been declared

# ==========const==========

const keyword ka use constand variable bananay ka leya kiya jata hai hai.const vha variable hota hai jis ki value change nahi kar sktay hai.const variable ko declertion sa phala use nahi kar sktay.

- for example

```javascript
const x = 10;
x = 20;
console.log();
```

- typeErroe:this will also give an error

# ==========var==========

var variable let variable ki trha hi kam karta hai.lakin var or let ma kuch defrience hai.
var ko decleration sa phala use kar sktay hai.var ko redecler bhi kar sktay hai.

- for example

```javascript
console.log(val);
var val = 300;
```

- allowed and value will be undefined here
