### What is Polyfilling ?

Polyfilling in JavaScript refers to the technique of adding new functionalities to older versions of the language that are not natively supported by those versions. This is typically done using modern code that detects whether a certain feature is available in the current version of JavaScript, and provides a fallback implementation if it is not.

For example, the Array.from() method was introduced in ECMAScript 6 (ES6) and allows you to create an array from an array-like or iterable object. However, this method is not available in older versions of JavaScript, such as ES5. In order to use this method in older versions of JavaScript, you can use a polyfill that provides an implementation of the method if it is not already available.

Here is an example of a polyfill for Array.from():

```javascript
if (!Array.from) {
  Array.from = function (object) {
    return Array.prototype.slice.call(object);
  };
}
```
This code checks if the Array.from() method is already defined. If it is not, it defines a new function with the same name that uses the slice() method to create an array from the provided object. This allows you to use Array.from() in older versions of JavaScript that do not support it natively.
