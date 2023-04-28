### what is Error Handling with Try catch

Error handling with try-catch in JavaScript is a way to gracefully handle errors that may occur while running our code. The basic idea is to try something and if it fails, catch the error and handle it appropriately.

Here's an example of how to use try-catch in JavaScript:

```javascript
try {
  // code that may throw an error
  let result = someFunction();
} catch (error) {
  // handle the error
  console.log("An error occurred: " + error.message);
}
```

In this example, we're trying to call a function called `someFunction()`. If this function throws an error, the catch block will be executed and the error message will be logged to the console. Note that the error object passed into the catch block contains information about the error, such as the error message.

Now, let me explain this in Hinglish:

Error handling ka matlab hota hai ki hum apne code ko aise likhe jisme agar koi error aa bhi jaye toh usse handle kar sakein aur code kaam karna jari rahe. Try-catch ka use karke hum apne code mei errors ko gracefully handle kar sakte hain.

Aap yeh code dekhiye:

```javascript
try {
  // Code jisse Error aa sakta hai
  let result = someFunction();
} catch (error) {
  // Error ko handle karein
  console.log("Kuch galat ho gaya: " + error.message);
}
```

Iss example mei hum ek function `someFunction()` ko call kar rahe hain. Agar yeh function koi error throw karta hai toh catch block execute hoga aur error message console mei print hoga. Yaad rakhiye ki catch block mei pass kiya gaya error object error ke baare mei information deta hai, jaise error message.
