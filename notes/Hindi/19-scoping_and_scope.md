# Scoping:

yeh batati hain ke hamare code ma banaye huaa variable function and object kha kha use keya ja skta hain.

- type of scope
  1.Global scope.
  2.Functional scope.
  3.Block scope.

### Global scope:

vah variable function va objrct jo ki top level par likhe gaye hain. mtlb ke koi function if else ke ander nahi hain to unhae khai par bhi exice keya ja skta hain.is scope ko Globla scope khate hain.

- for example:

```
let ab = "hello";
function check() {
  let i = 10;
  console.log(ab); //hello
}
check();
```

### Functional scope:

functional scope ma vah variable and function ata hai jo ki function ke ander banaye gyae hain.in variable funaction va object ko function ke bhar use nahi kar skte hain.

```
function firstfunction() {
  Name = "learnjavascript";
  document.getElementById("value1").innerHTML = Name;
}
firstfunction();
document.getElementById("value2").innerHTML = typeof Name;

```
