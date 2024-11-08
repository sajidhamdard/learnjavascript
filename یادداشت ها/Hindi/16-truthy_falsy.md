### What is truthy and falsy value:

truthy value vah value hoti hain. jinka answer true hota hain.
falsy vah value hoti hain.jinka answer false hota hain.

- false
- 0 or -0 or 0n
- ""
- null
- undefined
- NaN

```
if (NaN) {
  console.log("Yes");
} else {
  console.log("No"); //answer because NaN is a falsy value
}
```

```
if (10) {
  console.log("Yes"); //answer because 10 is a truthy value
} else {
  console.log("No");
}
```
