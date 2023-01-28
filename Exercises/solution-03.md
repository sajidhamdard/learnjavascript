let marks = 59;
if (marks >= 60) {
console.log("Pass");
} else {
console.log("Fail");
}

let num = 35;
if (num % 2 === 0) {
console.log("even");
} else {
console.log("odd");
}

let num = 35;
let num2 = 34;
if (num % 2 === 1 && num2 % 2 === 1) {
console.log("Odd");
} else {
console.log("Even");
}

let a = 10;
let b = 20;
let c = 30;
let d = 40;
a = b; //a=20,b=20,c=30,d=40
b = c; //a=20,b=30,c=30,d=40
c = d; //a=20,b=30,c=40,d=40
d = a; //a=20,b=30,c=40,d=20
console.log(a, b, c, d);
//20 30 40 20

let num = 2;
console.log(num ** 1);
console.log(num ** 2);
console.log(num \*\* 3 - 2);

let num = 60;
if (num % 10 === 0 && num % 5 === 0) {
console.log("Yes");
} else {
console.log("No");
}

num % 10 === 0 && num % 5 === 0 ? console.log("Yes") : console.log("No");

let num = 5;
if (num \* 20 === 100) {
console.log("Yes");
} else {
console.log("No");
}

let marks = 880;
let totalMarks = 1000;
let percentage = (marks / totalMarks) \* 100;
if (percentage > 70) {
console.log("Pass");
} else {
console.log("Fail");
}

let year = 2000;
let today = 2023;
let age = today - year;
console.log(age);

console.log(2 + 5 _ 10 - 20 \*\* 2); // -348
console.log((20 / 5) _ 10 + 10); // 50
console.log(10 && 20 + 10 \* 10); // 120 short circuiting
console.log(30 > 20 && 10 + 4 < 15); //true
console.log((30 > 20 && 10 + 4 < 15) || 10); //true
console.log(30 < 20 || 10 + 5 < 15 || 10); //10 short circuiting
console.log(30 < 20 || (10 + 5 < 15 && 10)); //false

//Convert all solutions into ternary operator
//Marksheet Logic
percentage >= 80 Distinction
percentage greater than or equal to 60 and less than 80 first division
percentage greater than or equal to 33 and less than 60 second division
percentage less than 33 fail

3 number hai any number
