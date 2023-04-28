### What is loop

Loop ek programming construct hai jo ek block of code ko baar-baar execute karne ki permission deta hai. Ye ek aisa mechanism hai jiska use hum repetitive tasks ko asaani se solve karne ke liye karte hai.

Javascript mein 3 types ke loops hote hai: for loop, while loop, aur do-while loop.

For loop ka use jab karna hota hai jab humein ek list ya array ko iterate karna hota hai. For loop ke andar hum ek counter variable ka use karte hai jo humein bata hai ki loop kitni baar repeat hona hai. Yeh loop syntax ke andar 3 expressions hoti hai: initialization, condition, and update.

Example:

```
for (var i = 0; i < 5; i++) {
  console.log("Hello " + i);
}
```

Iss example mein, hum for loop ka use kar rahe hai jisse "Hello" string 0 se 4 tak print ho raha hai. Loop ke andar, humne ek counter variable "i" initialize kiya hai jiska starting value 0 hai, aur humne yeh bhi decide kiya hai ki yeh loop tab tak chalega jab tak "i" ki value 5 se kam hai, iske baad humne "i" ko increment kiya hai.

While loop ka use jab karna hota hai jab humein kisi task ko perform karte waqt ek condition ko check karna hota hai. While loop ke andar hum sirf ek condition statement dete hai jisse hum yeh decide karte hai ki loop continue hoga ya nahi.

Example:

```
var num = 0;
while (num < 5) {
  console.log("World " + num);
  num++;
}
```

Iss example mein, hum while loop ka use kar rahe hai jisse "World" string 0 se 4 tak print ho raha hai. Humne "num" variable ko initialize kiya hai, aur uski value zero rakhi hai. While loop ke andar, humne yeh decide kiya hai ki jab tak "num" ki value 5 se kam hai, tab tak loop continue kare. Har baar loop execute hone par hum "num" ko increment karte hai.

Do-while loop bhi while loop ki tarah hi hota hai, bas ek chhota sa difference hai ki do-while loop mei pehle code block execute hota hai phir condition check ki jaati hai. Iska matlab hai ki do-while loop ke andar ke code block atleast ek baar to execute hoga.

Example:

```
var i = 0;
do {
  console.log("Welcome " + i);
  i++;
} while (i < 3);
```

Iss example mein, hum do-while loop ka use kar rahe hai jisse "Welcome" string 0 se 2 tak print ho raha hai. Do-while loop ke andar, hum pehle "Welcome" string ko print karte hai, aur phir "i" variable ki value ko increment karte hai. Fir humne condition check ki hai ki kya "i" ki value 3 se kam hai ya nahi. Agar humara answer "true" hai to loop wapas se start hoga aur agar "false" hai to loop stop ho jayega.

Is tarah se loops ka use karke hum repetitive programming tasks ko asaani se solve kar sakte hai.

### What is for loop

For loop JavaScript mein ek tarah ka loop hai jiske dwara hum kisi array ya object ke andar ke har element ko access kar sakte hain. For loop ke ander ek counter variable hoti hai jo ki shuruat se lekar loop ke ant tak badhti rahti hai aur uske dwara hum har ek element ko access kar sakte hain.

For loop ka syntax yeh hai:

```
for (let i = 0; i < array.length; i++) {
  // code block to be executed
}
```

Yahan `let i = 0` ek counter variable hai jiska initial value 0 hai, `array.length` array ke length se compare kiya jaata hai aur `i++` loop ke har iteration ke baad counter ko increment karta hai.

Ab ek example lete hain jismein hum ek array ke saare elements ko console par print karenge:

```
const fruits = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

Yahan `fruits` ek array hai jismein hum 3 strings store kar rahe hain. For loop ke ander counter variable `i` hai jo 0 se shuruat karta hai aur `fruits.length` (yani 3) tak chalta hai. Har iteration ke baad hum `console.log(fruits[i])` ka use karke current index ki value console par print karte hain.

```
Apple
Banana
Orange
```

### What is for...of loop

"for...of" loop in JavaScript is a way to iterate over iterable objects like Arrays, Strings, Maps, Sets, etc. It is similar to the "for...in" loop, but it provides more concise and readable syntax for looping through elements in an array or other iterable objects.

To use the "for...of" loop, we first declare a variable to hold each element in the iterable object. Then, we use the "of" keyword followed by the iterable object to loop through its elements.

Here's an example of using "for...of" loop to loop through an array of numbers:

```javascript
const numbers = [1, 2, 3, 4];

for (const num of numbers) {
  console.log(num); // Output: 1, 2, 3, 4
}
```

In this example, we declared a constant variable "numbers" that holds an array of numbers. We then used "for...of" loop to iterate over each element of the "numbers" array, assigning each element to the variable "num", and logging it to the console.

Another example is to loop through a string:

```javascript
const str = "Hello World";

for (const char of str) {
  console.log(char); // Output: H, e, l, l, o, , W, o, r, l, d
}
```

In this example, we declared a constant variable "str" that holds a string value. We then used "for...of" loop to iterate over each character of the string, assigning each character to the variable "char", and logging it to the console.

In summary, "for...of" loop is a convenient way to iterate over the elements of an iterable object in JavaScript.

### What is for...in loop

"for...in" loop is a type of loop in JavaScript that allows you to iterate over the properties of an object. In simple terms, it helps you to loop through each key-value pair of an object and perform some action on them.

Here's an example in Hinglish:

Suppose you have a dictionary (object) with multiple words and their meanings. You want to loop through every word and print its meaning. Here's how you can use "for...in" loop to achieve this:

```
// Define the dictionary object
var dictionary = {
  "apple": "seb",
  "banana": "kela",
  "orange": "santara"
};

// Loop through each word in the dictionary object
for (var word in dictionary) {

  // Print the word and its meaning
  console.log(word + " ka arth hai " + dictionary[word]);
}
```

In this example, we define an object called "dictionary" with three key-value pairs. We then use a "for...in" loop to loop through each key-value pair in the object. Inside the loop, we print the word and its meaning using the "console.log()" function. The output of this program will be:

```
apple ka arth hai seb
banana ka arth hai kela
orange ka arth hai santara
```

So, the "for...in" loop is a very useful construct in JavaScript for iterating over the properties of an object. It is particularly helpful when you need to work with data stored in objects.

### What is while loop

While loop JavaScript mein ek aisa loop hai jo ek shart ko check karta hai aur jab tak wo shart true rahe, tab tak loop chalta rehta hai.

Is loop ke andar code block ko ek baar bhi nahi chalaya jata hai agar shart hi false hoti hai. While loop ka syntax neeche diya gaya hai:

```
while (shart) {
  // Code Block
}
```

Yahan "shart" ek boolean expression hai, jo true ya false ho sakta hai. Aur "Code Block" ek set of statements hai jo execute hote rahtey hai jab tak shart true rahti hai.

Example:

```
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

Iss example mein humne ek variable "i" create kiya aur ek while loop ka use kiya jo "i" ki value 5 se kam hone tak chalta rehta hai. Har baar "i" ki value print hoti hai aur phir "i" ki value 1 se badhaya jaata hai. Jab "i" ki value 6 ho jaati hai to loop khatam ho jaata hai.

Iska output hoga:

```
1
2
3
4
5
```

### What is do...while loop

Do...while loop ek aisa loop hai jo kisi bhi code block ko baar-baar execute karta hai jab tak ki uske condition ka result true na ho. Yeh loop pehle code block ko execute karta hai aur phir condition check karta hai. Agar condition true hoti hai to loop continue rahta hai, lekin agar condition false hoti hai tab bhi code block ko kam se kam ek baar execute kar diya jaata hai.

Ek example ke through samajhte hain:

```
var i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
```

Is code mein `i` ki value 1 se start hogi aur do..while loop ke andar code block ko execute karne ke baad `i` ki value 1 se 2 ho jayegi. Phir condition check hoti hai ki kya `i` ki value 5 se choti ya barabar hai? Kyunki yeh condition abhi true hai, isliye loop 2nd iteration ke liye chalta rahega aur `i` ki value 3 ho jayegi. Iss tarah se loop ke har iteration mein `i` ki value badhti rahegi jab tak ki `i` ki value 5 na ho jaye. Jab `i` ki value 6 ho jati hai, to condition false ho jati hai aur loop se bahar nikal jata hai.

Iss tarah se do..while loop ek baar to code block ko execute karta hi hai chahe condition true ho ya false ho.

### What is Switch Statment

Switch statement in JavaScript is a conditional statement that allows you to evaluate an expression and execute different code blocks based on the value of that expression. It's a way to simplify writing multiple if/else statements.

For example, let's say you have a variable called "dayOfWeek" that contains a string representing the day of the week. You want to perform different actions depending on the value of "dayOfWeek". Instead of using multiple if/else statements, you can use a switch statement:

```
var dayOfWeek = "Monday";

switch (dayOfWeek) {
  case "Monday":
    console.log("It's Monday, time to start the week!");
    break;
  case "Tuesday":
    console.log("It's Tuesday, still a long way to go...");
    break;
  case "Wednesday":
    console.log("It's Wednesday, halfway there!");
    break;
  case "Thursday":
    console.log("It's Thursday, almost done!");
    break;
  case "Friday":
    console.log("It's Friday, yay weekend!");
    break;
  default:
    console.log("Invalid day of the week.");
}
```

In this example, the switch statement evaluates the value of the "dayOfWeek" variable and executes the code block corresponding to the matching case label. If there is no match, the default case is executed.

So, if "dayOfWeek" is "Monday", the output will be "It's Monday, time to start the week!". If "dayOfWeek" is "Saturday", the output will be "Invalid day of the week." because there is no matching case label.

Switch statements are useful when you have a large number of conditions to check and want to avoid writing nested if/else statements.

### What is case clause

"Case clause" (केस क्लॉज) जावास्क्रिप्ट में एक संरचना है जो switch ब्लॉक के अंदर इस्तेमाल की जाती है। यह एक conditional statement है, जो switch block में निर्दिष्ट value को evaluate करती है और शर्तों के आधार पर उपयुक्त code block को execute करती है।

जब switch block की expression की value किसी एक case के value से match करती है, तो उस case के अंदर का code block execute होता है। अगर कोई case match नहीं होता है, तो default case का code block execute होता है।

इसका syntax निम्नलिखित है:

```
switch (expression) {
  case value1:
    //code block
    break;
  case value2:
    //code block
    break;
  case value3:
    //code block
    break;
  default:
    //code block
}
```

यहाँ expression value को evaluate करने के लिए है जो case के values से match करती हैं। अगर expression किसी bhi case value से match करता है, तो उस case का code block execute होता है। इसके बाद break statement से execution control switch block से बाहर निकल जाता है।

example

```
let day = "Monday";
switch (day) {
  case "Sunday":
    console.log("Today is Sunday");
    break;
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  default:
    console.log("Today is some other day");
}
```

इस example में, variable 'day' की value "Monday" है, इसलिए switch block में वह "Monday" case से match होती है। इसलिए उस case के अंदर का code block execute होता है और निम्न output print होता है:

```
Today is Monday
```

### What is break

Break ka matlab hai ek code block se bahar nikalna. Jab tak hum break na use karein, tab tak loop ya switch statement continue hote rahenge.

Ek example ke through samjhate hain:

```
for (let i = 1; i <= 5; i++) {
  console.log(i);
  if (i === 3) {
    break;
  }
}
```

Iss code mein, hum for loop ka use karke 1 se 5 tak ke numbers ko print kar rahe hai. Lekin jab `i` ki value 3 ho jaati hai toh humne `break` ka use kiya hai, jisse ki loop uss point pe hi stop ho jaata hai aur aage nahi chalta.

Agar hum issi code ke bina break ka use karte toh output yeh hota:

```
1
2
3
4
5
```

Lekin humne break ka use kiya hai jab `i` ki value 3 ho jaati hai, isliye output yeh hoga:

```
1
2
3
```

### What is default case in a Switch Statement ?

Switch Statements are used in programming languages to execute different blocks of code based on the value of an expression.

The default case is a branch in a switch statement that is executed when no other case matches the value of the expression. It is like a catch-all clause in a try-catch block.

For example, let's say we have a variable called "dayOfWeek" which represents the day of the week (1 for Sunday, 2 for Monday, and so on) and we want to print a message depending on the day of the week:

```
int dayOfWeek = 3;
switch(dayOfWeek){
    case 1:
        System.out.println("Today is Sunday");
        break;
    case 2:
        System.out.println("Today is Monday");
        break;
    //... cases for other days of the week
    default:
        System.out.println("Invalid day of the week");
}
```

we could say that the default case is like a "baki sab" option in a switch statement. It is executed when none of the other options match the given value.
