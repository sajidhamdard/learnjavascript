### Question 1. Create two variables and store some numbers in them. Now do below operations:
   - Addition
   - Multiplication
   - Substraction
   - Divide

```
let a = 20;
let c = 10;
console.log(a + c);
console.log(a - c);
console.log(a * c);
console.log(a / c);
```

### Question 2. Take one number. If number is odd then print odd else print even.

```
let a = 10;
if (a % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}
```

### Question 3. Using prompt ask user to enter name and then show the name in alert.

```
let name = prompt("What is your name?");
alert(name);
```

### Question 4. Take two numbers if first number is less than second number than print your name, age and mobile number else print your father name, age and mobile number.

```
let a = 2;
let b = 10;
if (a < b) {
  console.log("Sajid");
  console.log(32);
  console.log(979475435);
} else {
  console.log("Majid Khan");
  console.log(55);
  console.log(988789798);
}
```

### Question 5. Take two numbers. Now using && and || operator check if both numbers are divisible of 5 && 10 or not. Also check both numbers are even or not.

```
let a = 10;
let b = 20;
if (
  a % 5 === 0 &&
  a % 10 === 0 &&
  b % 10 === 0 &&
  b % 5 === 0 &&
  a % 2 === 0 &&
  b % 2 === 0
) {
  console.log("Yes");
} else {
  console.log("No");
}
```

### Question 6. print Hello world using console.log, window.alert and document.write

```
console.log("hello");
window.alert("hello");
document.write("hello");
```

### Question 7. Take all falsy values and check in if condition.

```
if (NaN) {
  console.log("Yes");
} else {
  console.log("No");
}

if (0) {
  console.log("Yes");
} else {
  console.log("No");
}

if ("") {
  console.log("Yes");
} else {
  console.log("No");
}

if (null) {
  console.log("Yes");
} else {
  console.log("No");
}

if (false) {
  console.log("Yes");
} else {
  console.log("No");
}

if (undefined) {
  console.log("Yes");
} else {
  console.log("No");
}
```

### Question 8. Using confirm box ask questions "Do you want to play?". if user click on Ok then print yes and if user click on Cancel then print No

```
let ans = confirm("Do you want to play?");
if (ans) {
  console.log("Yes");
} else {
  console.log("No");
}

```

### Question 9. If total members in your family are more than 5 then print Big Family, if members are between 3 to 5 then print small family else print very small family

```
let familyMembers = 1;
if (familyMembers > 5) {
  console.log("Big family");
} else if (familyMembers >= 3 && familyMembers <= 5) {
  console.log("Small family");
} else {
  console.log("Very small family");
}
```

### Question 10. Using ++, -- print 1 to 10 and then 10 to 5

```
let a = 0;
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);

console.log(a--);
console.log(a--);
console.log(a--);
console.log(a--);
console.log(a--);
console.log(a--);

```
