# 04 : Identifiers

### Identifiers:

JavaScript me Identifiers names hote hain jo ki kisi variables, functions, class ko name dene ke lie use kia jata await.

for example:

```javascript
let value = 10; //value is an identifer

//sum is an identifier here
function sum(a, b) {
  console.log(a + b);
}
```

### Rules for creating identifier:

JavaScript me identifiers case sensitive hote hain. Case sensitive ka matlab ye hai ki small ya capital letter agar identifier me use kia hai to vhi name fir hum aage use krenge. for example abc and ABC same ni hai.

indentifier bnane ke lie $, \_, and digits (0-9) ka use hota hai but variable name digit se start ni ho skta hai.

- Invalid Identifier examples

```javascript
let 12x = 10;
let &value = 10;
```

- Valid Identifier examples

```javascript
let x12 = 10;
let _value = 20;
let $_value = 100;
```
