### What is default parameter ?

Default parameter ek programming concept hai jismein ek function ka argument deafult value se initialize kiya jaata hai. Jaise ki, agar hum kisi function mein ek argument ko default value assign karte hain toh jab bhi uss function ko call kiya jaata hai aur uss argument ka value nahi diya jaata hai, toh woh argument default value ke saath initialize ho jaata hai.

For example, agar hum ek function define karte hain jiska naam hai print_name aur usmein ek argument hai name, toh hum uska default value "Guest" rakh sakte hain. Iska matlab hai ki agar hum print_name function ko call karte hain aur usmein koi Name nahi dete hain toh "Guest" as a default value use ho kar print ho jayega.

Yehi concept Hinglish mein samjhaya jaaye toh - agar tumhein koi party mein invite kiya gaya hai aur invitation mein likha hai ki RSVP pe apna naam dena zaruri hai, lekin agar tumne RSVP mein naam nahi diya toh tum automatically "Guest" ke roop mein count kiye jaoge.

### What is passing arguments: value vs reference in JavaScript ?

JavaScript mein, argument pass karna do tariko se kiya jata hai - value aur reference ke dwara. Value-based argument mein, argument ka copy function ke andar banaya jata hai aur ismein koi bhi changes function se bahar visible nahi hote hain. Jabki reference-based argument mein, original object ya array ko function ke through modify kiya ja sakta hai aur yeh changes function ke bahar bhi visible hote hain.

Value-based argument ka ek example hai:

```
function addOne(num) {
  num = num + 1;
  console.log(num); // output: 6
}

let myNum = 5;
addOne(myNum);
console.log(myNum); // output: 5
```

Is example mein, `addOne` function ko `myNum` variable ke value ke sath call kiya jata hai, jo ki initially 5 hai. Function mein, `num` variable ko `myNum` ki value se assign kiya jata hai. Iske baad, `num` variable mein 1 add kar diya jata hai. Lekin `myNum` variable ki value function ke bahar waise hi rehti hai jaise pahle thi, yaani 5.

Reference-based argument ka ek example hai:

```
function addToArr(arr, val) {
  arr.push(val);
  console.log(arr); // output: [1, 2, 3, 4]
}

let myArr = [1, 2, 3];
addToArr(myArr, 4);
console.log(myArr); // output: [1, 2, 3, 4]
```

Is example mein, `addToArr` function ko `myArr` variable ke sath call kiya jata hai, jo `[1, 2, 3]` hai. Function mein, `arr` variable ko `myArr` ki reference se assign kiya jata hai. Iske baad, `val` variable ko 4 se assign kiya jata hai. Fir, `push()` method ka use karke `arr` array mein `val` value add kiya jata hai. Ab, `myArr` variable ki value bhi `addToArr` function ke through modify ho jati hai aur ismein `[1, 2, 3, 4]` ho jata hai.

Is tarah se, value-based argument mein original variable/function ke copy banaya jata hai aur modifications us copy pe kiye jate hain. Jabki reference-based arguments mein original variable ko hi modify kiya jata hai aur changes function ke bahar bhi visible hote hain.

### What is First Class function/Citizen ?

First Class functions (FCF) refer to the ability of a programming language to treat functions as variables or first-class citizens. This means that functions can be assigned to variables, passed as arguments to other functions, and returned as values from functions.

For example, let's consider the following Python code:

```
def add(x, y):
    return x + y

result = add(3, 4)
print(result)
```

In this code, `add` is a function that takes two arguments `x` and `y`, and returns their sum. We then assign the value returned by `add(3, 4)` to the variable `result`, which is then printed to the console.

Now, let's see an example of treating a function as a first-class citizen:

```
def add(x, y):
    return x + y

def apply(func, x, y):
    return func(x, y)

result = apply(add, 3, 4)
print(result)
```

In this code, we have defined a new function `apply` that takes three arguments: a function `func`, and two arguments `x` and `y`. The `apply` function then applies the function `func` to the arguments `x` and `y`.

We then call the `apply` function with the `add` function as the `func` argument, and `3` and `4` as the `x` and `y` arguments. The result of calling `apply` is the same as calling `add(3, 4)`, which is `7`.

So, in summary, first-class functions allow us to treat functions as data, which gives us more flexibility and power when writing code.

### What is High Order function ?

High order function ek aisa function hota hai jo doosre functions ko argument ke roop mein le sakta hai, ya fir ek function ko return kar sakta hai. Iss tarah ke functions ka upyog kisi specific kaam ke liye kaafi flexible aur powerful hota hai.

Ek udaharan ke roop mein, hum ek high order function likh sakte hain jo kisi list ke har item pe apply ho sakta hai aur use double kar sake. Is function ko hum "map" kehte hain:

```python
def double(x):
    return x * 2

my_list = [1, 2, 3, 4, 5]

new_list = map(double, my_list)

print(list(new_list)) # Output: [2, 4, 6, 8, 10]
```

Yahaan, `double` function ko `map` function ke argument ke roop mein pass kiya gaya hai. `Map` function ne phir `my_list` ke har item pe `double` function ko apply kiya aur ek naye list mein un values ko store kar diya jismein har value original list ke corresponding value ka double tha.

Iss example mein, `map` function ek high order function hai kyunki usne ek doosre function (`double`) ko apna argument ke roop mein liya hai.

### What is Callback function ?

Callback function ek programming concept hai jisme ek function ko dusre function mein argument ke taur par pass kiya jaata hai aur yeh function baad mein call kiya jaata hai. Yeh kaam karke asynchronous programming mein kaafi help karta hai.

Let's take an example: Suppose humare paas ek function hai jo do numbers ka sum calculate karta hai:

```python
def add_numbers(a, b):
    return a + b
```

Ab humein ek aur function banana hai jo kisi bhi do numbers ka product calculate karega, lekin ismein hum chaahte hai ki agar iska calculation complete hua toh humare paas ek message aa jaaye. Iske liye hum callback function ka use karenge:

```python
def multiply_numbers(a, b, callback):
    result = a * b
    callback(result)

# Ab hum apna callback function bana sakte hain
def print_result(result):
    print("Product is:", result)

multiply_numbers(5, 6, print_result)
```

Yahaan humne `multiply_numbers` mein `callback` parameter add kiya jisse hum uss function mein bhejte hain. Fir `multiply_numbers` function mein hum result ko calculate karte hain aur `callback` function ko call kar dete hain jisse wo message print kar sake.

Upar diye gaye example mein humne Python ka use kiya hai, lekin callback functions ka concept kisi bhi programming language mein istemaal kiya ja sakta hai.

### What is setTimeOut ?

setTimeOut ek JavaScript function hai jiske through hum apne code ko delay kar sakte hai. Iske liye, setTimeOut function ko call kiya jata hai aur ismein pehle argument mein ek function define kiya jata hai jo hum delay karna chahte hai, aur dusre argument mein delay time (milliseconds) specify kiya jata hai.

For example:

```
setTimeout(function() {
  console.log("Hello, world!");
}, 3000);
```

Is code mein, setTimeout function ko call kiya gaya hai jismein pehla argument ek anonymous function hai jo "Hello, World!" console.log statement print karega, aur dusra argument hai 3000 milliseconds ka delay time hai.

Iss code ko Hinglish mein explain karte hai:
"setTimeout" ek JavaScript function hai jisse hum code mein delay laga sakte hain. Jaise ki agar humein 3 second ke baad "Hello, World!" console mein print karna hai to hum "setTimeout" function use karenge. Ismein hum pehle argument mein "Hello, World!" print karne wali function ko define karenge aur dusre argument mein 3000ms (3 seconds) ka time specify karenge."

### What is setInterval ?

setInterval ek JavaScript function hai jo humein time-based actions ko perform karne mein help karta hai. Iske through, hum ek function ko specific interval ke baad repeatedly call kar sakte hain.

Iske liye sabse pehle hum setInterval() function ko call karte hain aur usmein do parameters pass karte hain:

1. Ek function jo humein har interval ke baad call karna hai.
2. Interval ka duration milliseconds mein kitna hona chahiye.

Jab hum is function ko call karte hain, woh turant ek ID return karta hai jo humare setInterval loop ko stop karne ke liye use kar sakte hain.

Example:

Agar humein 1 second ke interval ke baad "Hello World" print karna hai, to hum is tarah ka code likh sakte hain:

```javascript
let count = 0;
const intervalId = setInterval(() => {
  console.log("Hello World");
  count++;
  if (count === 5) {
    clearInterval(intervalId);
  }
}, 1000);
```

Iss code mein, humne `count` variable ki madad se 5 iterations ke baad setInterval loop ko stop karne ka condition set kiya hai. Humne `setInterval()` function ko call kiya aur usmein ek anonymous function pass kiya jo 1 second ke interval ke baad "Hello World" print karega.

### what is Function returning a function ?

Function returning a function is when a function returns another function as its output instead of a regular value. The returned function can be stored in a variable and called later.

For example, let's say we want to create a function that adds a given number to any input. We can define this function like this:

```
def add_number(number):
    def add_to_input(input_num):
        return input_num + number
    return add_to_input
```

this would be something like "function jo ek aur function return karta hai". Iska matlab hai ki hum ek aisi function bana sakte hain jismein hum ek number ko diya hai aur ye function ek aur function return karta hai. Ye returned function input number ko liya aur usmein diye hue number ko add karke output dega.

In the above example, `add_number` function takes in a `number` argument and defines an inner function `add_to_input` that takes a single input `input_num`. This inner function adds the `number` passed to it to the `input_num` and returns the result.

The `add_number` function then returns the `add_to_input` function as its output. Now, we can store the returned function in a variable and call it with different inputs like this:

```
add_five = add_number(5)
add_ten = add_number(10)

print(add_five(3))  # Output: 8
print(add_ten(3))   # Output: 13
```

Here, we created two new functions, `add_five` and `add_ten`, by calling the `add_number` function with arguments 5 and 10 respectively. These new functions add 5 and 10 to their inputs, respectively. Calling these new functions with different inputs gives us the desired output.

I hope this helps!

### What are the call and apply methods ?

Call and Apply methods are functions in JavaScript that allow you to invoke a function with a specific context (or "this" value) and arguments.

The difference between the two is that call takes individual arguments separated by commas, while apply takes arguments as an array.

For example, let's say we have a function named "printFullName" which takes two arguments: firstName and lastName. We also have an object named "person" with properties "firstName" and "lastName". We can use the Call method to invoke the "printFullName" function with the "person" object as the context:

```
function printFullName(firstName, lastName) {
  console.log(this.firstName + " " + this.lastName);
}

var person = {
  firstName: "John",
  lastName: "Doe"
}

printFullName.call(person); // Output: John Doe
```

In this example, we used the Call method to invoke the printFullName function with the "person" object as the context. The "this" keyword inside the function now refers to the "person" object, and we get the output "John Doe".

Similarly, to use the Apply method, we can pass the arguments as an array:

```
printFullName.apply(person, ["Jane", "Doe"]); // Output: Jane Doe
```

Here, we passed an array containing two values - "Jane" and "Doe" - as the arguments for the function. The Apply method allows us to pass arguments as an array instead of individual arguments.

So, in summary, Call and Apply methods are used to invoke a function with a specific context (or "this" value) and arguments.

### What is the bind method ?

Bind method ek JavaScript function ka method hai jo humein ek naya function return karta hai. Bind method se hum apne original function ko ek naya "this" value aur arguments ke saath connect kar sakte hai.

Bind method ka syntax aisa hota hai: `function.bind(thisArg, arg1, arg2, ...)`

Ismein `thisArg` ek object hota hai jise hum bind karna chahte hai aur `arg1`, `arg2`, ... baki ke arguments hote hai jo humare original function mein pass kiye jaate hai.

Ek example dekh lete hai:

```
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const printName = person.fullName.bind(person);

console.log(printName()); // Output: John Doe
```

Is example mein humne `person` object ka `fullName` method banaya hai jo `this.firstName` aur `this.lastName` ki madad se full name return karta hai. Fir humne `bind()` method ka use karke `printName` variable mein `person.fullName` ko bind kiya hai. Ab hum `printName()` ko call karte hai toh yeh `person.fullName()` ko call karega lekin `this` ka value `person` hi hoga.

Mujhe ummeed hai ki ab aapko bind method samajh mein aa gaya hoga!

### What is Immediately invoked function expression ?

Immediately Invoked Function Expression (IIFE) is a JavaScript function that is executed as soon as it's defined. In simple terms, it's a function that runs right away.

Example in JavaScript:

(function(){
// Code to be executed immediately
})();

In Hinglish language:

Immediately invoked function expression (IIFE) ek JavaScript function hai jo ki define hote hi execute ho jata hai. Saral bhasha me samjhe to ye ek function hai jo turant chal jata hai.

Udaharan JavaScript me:

(function(){
// Code jo immediate taur par execute hoga
})();

### What is Closure in javascript ?

Closure in JavaScript refers to the ability of a function to access variables from its outer lexical scope, even after the outer function has returned.

Ek closure tab hota hai jab ek function bahar ke variables aur functions ke references ko lekar apne andar use karta hai, aur phir wo function ussi state mein rehta hai jis mein usko define kiya gaya tha. Yeh bahar ke variables aur functions ke liye private scope create karta hai.

For example:

```
function counter() {
  let count = 0;
  return function increment() {
    count++;
    console.log(count);
  }
}

const c = counter();
c(); // logs 1
c(); // logs 2
```

Iss code mein, `counter` function ek function `increment` ko return karta hai. `increment` function `count` variable ko access kar sakta hai, jo `counter` function ke lexical scope mein define kiya gaya hai. Jab `c` ko `counter` se invoke kiya jata hai, wo `increment` function ko return karta hai jismein `count` variable ki value increment ho jaati hai. Har baar jab `increment` function call kiya jata hai, wo `count` variable ki updated value ko print karta hai.

Iss tarah se, closure ka upyog karke hum private variables aur functions ko create kar sakte hai, jinka access sirf unhi functions ke through possible hai jismein wo define kiye gaye hai.
