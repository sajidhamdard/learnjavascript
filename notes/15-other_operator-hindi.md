### loose equality operator(==)

yaha do variable ko compair karta hain.pr compair karta time data type strictly check
nahi karta hain.or jha bhi possibal hota hain vaha omomatic type conversion karke value
compair karta hain.

```
var x = 20;
var y = "20";
if (x == y) {
console.log(true);
} else {
console.log(false);
}
```

### strict equality operator(====)

yaha 2 value ko strictly check karta hain.iska mtlb hain ke value ka sath sath data type
bhi check karta hain.

```
var x = "20";
var y = 20;
if (x === y) {
console.log(true);
} else {
console.log(false);
}
```

### type of operator

yaha data type btata hain.

```
var x = 10;
console.log(typeof x); //number
x = "Wecode";
console.log(typeof x); //string
```

### ternory operator

yadi if else me single line ka code hain to use ternory operator ke help se karte
hain

```
let x = 10;
x < 20 ? console.log("yes") : console.log("no");
```
