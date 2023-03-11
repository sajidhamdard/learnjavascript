## Array Questions Solution

### Question 1

```
const arr = [1, 2, 3];
console.log(arr[1]);
console.log(arr.at(1));
```

### Question 2

```
const arr = [1, 2, 3, 4, 5];
console.log(arr.length);
```

### Question 3

```
const arr = [1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

### Question 4

```
const arr = [1, 2, 3, 4, 5, 6];
arr.forEach(test);

function test(num) {
  console.log(num);
}
```

### Question 5

```
const arr = [1, 2, 3];
arr.push(10);
console.log(arr);
```

### Question 6

```
const arr = [1, 2, 3, 4];
arr.splice(1, 1);
console.log(arr);
```

### Question 7

```
const arr = [1, 2, 3, 4, 5];
arr.pop();
console.log(arr);
```

```
const arr = [1, 2, 3, 4, 5];
arr.splice(arr.length - 1, 1);
console.log(arr);
```

### Question 8

```
const arr = [1, 2, 3, 4, 5];
if (arr.includes(3)) {
  console.log("yes");
} else {
  console.log("no");
}
```

### Question 9

```
const arr = [10, 2, 9, 41, 35];
arr.sort(sortFn);

function sortFn(num1, num2) {
  return num1 - num2;
}
console.log(arr);
```

### Question 10

```
const arr = [10, 2, 9, 41, 35];
arr.sort(sortFn);
function sortFn(num1, num2) {
  return num2 - num1;
}
console.log(arr);
```

### Question 11

```
const arr = [10, 2, 9, 41, 35];
const arr2 = [9, 45, 234, 56];
console.log(arr.concat(arr2));
console.log(arr2.concat(arr));
```

### Question 12

```
const arr = [10, 2, 9];
console.log(arr.toString());
```

### Question 13

```
const arr = [10, 2, 9, 4];
console.log(arr.reverse());
```

### Question 14

```
const arr = [10, 2, 9, 4, 5];
let num = 9;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === num) {
    console.log(i);
  }
}
```

```
const arr = [10, 2, 9, 4, 5];
let ans = arr.findIndex(test);
function test(num) {
  return num === 9;
}
console.log(ans);
```

```
const arr = [10, 2, 9, 4, 5];
console.log(arr.indexOf(9));
```

### Question 15

```
const arr = [10, 2, 9, 4, 5, 50];
console.log(arr.slice(0, 3));
```

### Question 16

```
const arr = [10, 2, 9, 4, 5, 50];
let ans = arr.map(test);
function test(num) {
  return num * 2;
}
console.log(ans);
```

### Question 17

```
const arr = [10, 2, 9, 4];
let sum = 0;
let index = 0;
while (index < arr.length) {
  sum = sum + arr[index];
  index++;
}
console.log(sum);
```

### Question 18

```
const arr = [10, 2, 9, 4];
let ans = arr.filter(test);
function test(num) {
  return num % 2 === 0;
}
console.log(ans);
```

### Question 19

```
const arr = [10, 2, 9, 4];
console.log(arr.join("-"));
```

### Question 20

```
const arr = [10, 2, 9, 4];
const arr2  = [4,56,234,554];
console.log(arr.concat(arr2));
console.log(arr2.concat(arr));
```
