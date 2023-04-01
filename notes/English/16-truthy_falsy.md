### Truthy and Falsy values

In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except below 6 values:

```
 false
 0 or -0 or 0n
 ""
 null
 undefined
 NaN
```

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
