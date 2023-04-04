# Statement

### What is Statement

जावास्क्रिप्ट में स्टेटमेंट एक आदेश होता है जो कंप्यूटर को बताता है कि क्या अपने कोड में करना है। यह एक लाइन में हो सकता है या एक ब्लॉक में, जो एक समूह के रूप में काम करते हैं।

कुछ स्टेटमेंट उदाहरण निम्नलिखित हैं:

```javascript
let x = 5; // एक वेरिएबल बनाना और उसे 5 के बराबर सेट करना।
console.log("Hello world!"); // "Hello world!" कंसोल पर प्रिंट करना।
if (x > 3) {
  // अगर x 3 से बड़ा है तो निम्नलिखित कोड को चलाना।
  console.log("x is greater than 3");
}
```

इस उदाहरण में, `let` एक स्टेटमेंट है जो `x` नाम की एक वेरिएबल बनाता है और उसे 5 के बराबर सेट करता है। `console.log()` भी एक स्टेटमेंट है जो "Hello world!" स्ट्रिंग को कंसोल पर प्रिंट करता है। `if` स्टेटमेंट एक ब्लॉक में होता है जो अगर `x` 3 से बड़ा है तो `console.log()` स्टेटमेंट को चलाता है जो "x is greater than 3" स्ट्रिंग को कंसोल पर प्रिंट करता है।

### What is Semicolon

Semicolon ka matlab hai 'sentence khatam'. Javascript mein, semicolon ek punctuation mark hai jo batata hai ki ek sentence khatam ho gaya aur dusra shuru ho raha hai. Semicolon ka upyog statements ko samapt karne ke liye hota hai. Jab bhi hum ek statement ko likhte waqt uski ant mei semicolon laga dete hai, toh woh statement complete hoti hai. Yeh interpreter ko batata hai ki ab ek naya statement shuru hone wala hai.

For example, consider the following code:

```javascript
var x = 5;
var y = 7;
console.log(x + y);
```

```javascript
var x = 5;
var y = 7;
console.log(x + y);
```

Explicitly using semicolons is considered good practice because it makes the code more readable and less prone to errors.

### What is WhiteSpace in statement

WhiteSpace refers to the space characters, tabs, and newline characters in a piece of code that don't have any effect on the functionality of the code. In JavaScript, WhiteSpace can be used to improve the readability and organization of code.

Let's take an example:

```javascript
let name = "John";
if (name === "John") {
  console.log("Hello, John!");
}
```

In this example, there are spaces and new lines between the code that don't have any effect on its functionality. We can remove those whitespaces and rewrite the same code as follows:

```javascript
let name = "John";
if (name === "John") {
  console.log("Hello, John!");
}
```

This code works exactly the same way as the code with white spaces, but it's harder to read and understand.

Whitespace can also be helpful for aligning code and making it more visually appealing. For example:

```javascript
function addNumbers(num1, num2) {
  return num1 + num2;
}

let sum = addNumbers(5, 7);
console.log(sum);
```

In this example, we use whitespace to align the parameters in the function definition and to separate the different statements. This makes the code easier to read and understand.

To summarize, Whitespaces are unnecessary characters in the code that don't affect its functionality but make it more readable and organized.

### What is Code block or Multi-line statement?

Code block ya multi-line statement ek ese code ka group hota hai jisme multiple statements (commands) ko ek sath likha ja sakta hai. Iska use complex tasks ko simplify karne ke liye kiya jata hai taki aapko bar-bar same code likhne ki jarurat na pade.

Iska format aam tor par curly brackets { } se define kiya jata hai, jaha ek bracket se code block start hota hai aur dusre bracket se end hota hai. Jaise:

```javascript
if (x > 5) {
  print("x is greater than 5");
  x = x + 1;
}
```

Upar wale example me, `if` statement ke andar code block define kiya gaya hai, jisme do statements hain: "x is greater than 5" ko print karna aur variable `x` ko 1 se zyada kar dena.

Code block ka use loops, functions, conditional statements jaise bahut se programming concepts me hota hai.
