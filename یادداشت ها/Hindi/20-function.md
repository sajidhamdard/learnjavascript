### ==========Functions==========

function wo code hota hain.jise hum bar bar reuse kar skte hain.function ki help sa bahut
bade se bada code ko chote chote parts ma divide kar deya jata hain.

- javascript m function 3 type se bana skte hain.
  1.function declaration.
  2.function expression.
  3.arrow function

### What is function declaration:

function decleration me function ka name dena jaruri hain.function decleration ko jis line par declar kiya hai.us line sa phele call kar skte hain. function decleration ki hoisting hoti hain.

- function declaration syntex:

```
function sum(a, b) {
return a + b;
}
var ans = sum(10, 20);
```

Parametar vah variables hota hain. jinhe hum function me brackets ka andr likte hain. parametar ka kuch bhi name ho skta hain.Ek function yadi kuch bhi return nhi kar raha hain.to undefine return hoga.otherwise jo value return ki hain voh value return hogi.

Argument or paremetar ki mapping left to right hoti hain.yadi kisi parametar ki value pass nahi ki hain. to us parametar ki value undefine hogi.function ki return value ko hum kisi variable m store krva skte hain.

### What is function expression:

function expression bhi function decleration ki trha hota hain.lakin in dono me kuch difference hain.jese ki function expression ka name nahi hota hain.is liye is ko variable m store kiya jata hain.function expression ko jis line par banaya gaya hain.us line se
phele use nahi kar skte hain. function expression ki hoisting nahi hoti hain.

- function expression syntex:

```
var sum = function (a, b) {
return a, b;
};
var ans = sum(10, 20);
console.log(ans);
```

### What is arrow function:

Arrow function me function keyword ka use nahi hota hota. yadi arrow function me single line ka code hain or us code ma hum kuch return kar rahe hain to crlibresh or return likhne ki jaruri nahi hain sirf jo retrun karenge wo value likh dnege sirf or arrow function automatic khud return karega.yadi arrow function ma hum
kuch bhi return nahi kar rahe hain. and code ak line se jyada hain.to crliresh lagna jaruri hain.arrow function ko bhi hum phala call nahi kar skte hain.arrow function ki hoisting nhi hoti hain.

- arrow function syntex:

```
let test = () => expression;
var sum = (a, b) => {
return a + b;
};
console.log(sum(20, 10));
```

Anonymous function vah function jiska koi name nahi hota.us ko anonymous function khate hain.

- syntex :

```
let test = function(param1, param2)
{
//write your logic here
}
```

```
let ex_var = "A Variable";
let test = function () {
document.write(`Full Name : ${arguments[0]} <br>`);
document.write(`External Variable : ${ex_var}`);
};
test("Rahul Rajput");
```

- function inside function (function ka andr function)

### What is function inside function:

Yadi koi function kisi dusrye function ke andr bnaya gaya hai. to us function ko sirf bahar vale function ke andr hi use kiya ja skta hain.andr vale function ko hum bahar se call nahi kar skte hain.

- for example

```
function sum(a, b) {
console.log(a + b);
hello();
function hello() {
console.log("hello");
}
}
sum(10, 20);
```

- Arguments object function ko pass keya gaya arguments ko btata hain.

```
function sum(a, b, c) {
console.log(arguments);
}
sum(1, 2, 3, 4, 5);
```
