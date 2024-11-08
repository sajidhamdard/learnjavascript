### Question 1. Create a variable marks and assign any number. If marks are greater than 60 then print Pass else print Fail.

```
let marks = 59;
if (marks >= 60) {
    console.log("Pass");
} else {
    console.log("Fail");
}
```

### Question 2. Take two numbers and check if both numbers are odd or not. If yes then print Odd otherwise print Even

```
let num = 35;
let num2 = 34;
if (num % 2 === 1 && num2 % 2 === 1) {
    console.log("Odd");
} else {
    console.log("Even");
}
```

### Question 3. Take 4 variables a, b, c, d and assign their values in the way mentioned below and check output:
   a = b
   b = c
   c = d
   d = a

```
let a = 10;
let b = 20;
let c = 30;
let d = 40;
a = b; //a=20,b=20,c=30,d=40
b = c; //a=20,b=30,c=30,d=40
c = d; //a=20,b=30,c=40,d=40
d = a; //a=20,b=30,c=40,d=20
console.log(a, b, c, d); //20 30 40 20
```

### Question 4. Print 2's table using \*\* operator. Use any logic but it should print 2's table.

```
console.log(2**1);
console.log(2**2);
console.log(2**3-2);
console.log(2**3);
console.log(2**4-6);
console.log(2**4-4);
console.log(2**4-2);
console.log(2**4);
console.log(2**4+2);
console.log(2**4+4);
```

### Question 5. Check output of following:

```
console.log(2 + 5 _ 10 - 20 \*\* 2); // -348
console.log((20 / 5) _ 10 + 10); // 50
console.log(10 && 20 + 10 \* 10); // 120 short circuiting
console.log(30 > 20 && 10 + 4 < 15); //true
console.log((30 > 20 && 10 + 4 < 15) || 10); //true
console.log(30 < 20 || 10 + 5 < 15 || 10); //10 short circuiting
console.log(30 < 20 || (10 + 5 < 15 && 10)); //false
```

### Question 6. Take a number and check if number is odd or not. If number is Odd then print Yes else print No.

```
let num = 35;
if (num % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}
```

### Question 7. Take a number and check if number is divisible by 10 && 5. If yes then print Yes else print No.

```
let num = 60;
if (num % 10 === 0 && num % 5 === 0) {
    console.log("Yes");
} else {
    console.log("No");
}
```

### Question 8. Take a number and check if number \* 20 makes it 100 or not. If yes the print Yes else print No.

```
let num = 5;
if (num \* 20 === 100) {
    console.log("Yes");
} else {
    console.log("No");
}
```

### Question 9. Calculate your 10th percentage and print Pass or Fail. If marks are more than 70 then print Pass else print Fail

```
let marks = 880;
let totalMarks = 1000;
let percentage = (marks / totalMarks) \* 100;
if (percentage > 70) {
    console.log("Pass");
} else {
    console.log("Fail");
}
```

### Question 10. Take your age and check if your age is greater than 21 or not. If yes then print Adult else print Minor.

```
let year = 2000;
let today = 2023;
let age = today - year;
console.log(age);
```
