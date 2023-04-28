# Module Pattern

The Module Pattern is a design pattern in JavaScript that allows you to create encapsulated and reusable code by creating a self-contained module that can expose public APIs to the outside world while keeping the implementation details hidden from other parts of your code.

Here's an example of the Module Pattern in JavaScript:

```javascript
var myModule = (function () {
  // private variable
  var message = "Hello World!";
  
  // private function
  function showMessage() {
    console.log(message);
  }
  
  // public API
  return {
    displayMessage: function () {
      showMessage();
    }
  };
})();

myModule.displayMessage(); // outputs "Hello World!"
```

In this example, we create a new module by defining an immediately invoked function expression (IIFE) that returns an object with the public API of our module. Inside the IIFE, we define private variables and functions that are not exposed to the outside world.

The message variable and the showMessage() function are private, meaning they cannot be accessed from outside the module. The displayMessage() function is part of the public API, so it can be accessed from outside the module.

When we call myModule.displayMessage(), the displayMessage() function calls the private showMessage() function, which displays the message "Hello World!" in the console.

The Module Pattern allows us to create reusable and encapsulated code, avoiding potential naming conflicts with other parts of our code. It also helps to keep our code organized and easier to maintain by hiding implementation details.
