### Question 1. Print 1 to 10 using ++ operator

```
let num = 0;

//printing in new line
console.log(++num);
console.log(++num);
console.log(++num);
console.log(++num);
console.log(++num);
console.log(++num);
console.log(++num);
console.log(++num);
console.log(++num);
console.log(++num);

//printing in same line
let num = 0;
console.log(
++num,
++num,
++num,
++num,
++num,
++num,
++num,
++num,
++num,
++num
);

//print in document
let num = 0;
document.write(
++num +
"<br/>" +
++num +
"<br/>" +
++num +
"<br/>" +
++num +
"<br/>" +
++num +
"<br/>" +
++num +
"<br/>" +
++num +
"<br/>" +
++num +
"<br/>" +
++num +
"<br/>" +
++num +
"<br/>"
);

```

### Question 2. Print 10 to 1 using -- operator

```
let num = 11;

//printing in new line
console.log(--num);
console.log(--num);
console.log(--num);
console.log(--num);
console.log(--num);
console.log(--num);
console.log(--num);
console.log(--num);
console.log(--num);
console.log(--num);

//printing in same line
let num = 11;
console.log(
--num,
--num,
--num,
--num,
--num,
--num,
--num,
--num,
--num,
--num
);

//print in document
let num = 11;
document.write(
--num +
"<br/>" +
--num +
"<br/>" +
--num +
"<br/>" +
--num +
"<br/>" +
--num +
"<br/>" +
--num +
"<br/>" +
--num +
"<br/>" +
--num +
"<br/>" +
--num +
"<br/>" +
--num +
"<br/>"
);
```

### Question 3. Check output of following in console

```
console.log(1 + 1);
console.log(1 + 200);
console.log(200 + "300");
console.log("learnjavascript" + 400);
```

### Question 4. Check output of following in console

```
console.log(2 === 2);
console.log(2 == "2");
console.log(2 === +"2");
console.log("learnjavascript" == "learnjavascript");
console.log("LearnJavascript" == "learnjavascript");
console.log(0.3 == 0.3);
console.log(1.0 == 1);
console.log(1.0 === 1);
```

### Question 5. Create 5 variables for your bank account details. It would be better if you use let, const and var all 3.

```
//Account Details of my account
const accountNumber = 546565;
let ifscCode = "KOTAK5656";
var accoutHolderName = "Sajid Ali Khan";
let balance = 400;
let bankAddress = "Kalwar Road, Jhotwara, Jaipur";
```

### Question 6. Write any code and explain that code using multi line comment.

```
/*
  Below code is used to numbers for 1 to 10
*/
console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
```

### Question 7. Write difference between Process and Thread.

A process is an instance of a program that is being executed by one or many threads. A thread is a lightweight, independent unit of execution that exists within a process. Each thread has its own program counter, stack, and local variables. Threads within the same process share the same memory space and can communicate with each other easily, while threads in different processes have separate memory spaces and must use inter-process communication (IPC) mechanisms to communicate. In short, a process is a program in execution, while a thread is a single execution sequence within that process.

### Question 8. Write differences between let, const and var.

In JavaScript, var, let, and const are used to declare variables.

var is the oldest way to declare a variable in JavaScript. It is function-scoped, which means that a variable declared with var is only accessible within the function it was declared in, or if it is declared outside of any function, it is accessible throughout the entire script. Variables declared with var can be reassigned new values.

let is similar to var, but it is block-scoped. This means that a variable declared with let is only accessible within the block it was declared in. Variables declared with let can be reassigned new values.

const is also similar to let, but it is used to declare variables that cannot be reassigned new values after they are initialized. A variable declared with const is also block-scoped, so it can only be accessed within the block it was declared in.

In summary, var is function scoped, let and const are block scoped, let can be reassigned and const can not be reassigned.

### Question 9. Give 1 example of each operator with expected output
   \*\*
   %
   !=
   !==
   <=
   \> =\*/

```
> console.log(2 \*\* 4);
> console.log(14 % 10);
> console.log(5 != "5");
> console.log(5 !== "5");
> console.log(10 <= 5);
> console.log(10 >= 10);
```

### Question 10. Write in your own language. What is JavaScript? Explain in detail.

JavaScript is a programming language that is primarily used to create interactive and dynamic web pages. It is a client-side scripting language, which means that it runs directly in the web browser, rather than on a server. JavaScript allows developers to create a wide range of interactive elements on web pages, such as form validation, image sliders, and interactive maps. It can also be used to create browser-based games and desktop applications using technologies such as Electron and Node.js. JavaScript code is usually written in a text editor and then embedded in an HTML or PHP file, which is then run in a web browser. JavaScript is also often used in combination with other technologies such as HTML, CSS, and web frameworks such as Angular, React, and Vue.js.
