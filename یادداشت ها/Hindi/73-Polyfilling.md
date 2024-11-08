### What is Polyfilling

Polyfilling in JavaScript is a technique used to add support for new features or functionality to older browsers that do not natively support them. Let me explain it in Hinglish:

Suppose aapne ek new bike li hai, aur usme kuch advanced features hai jaise ki digital speedometer, automatic headlight, etc. Lekin aapki friend ki bike mein ye sabhi features nahi hai, woh purani bike hai. Aise mein agar aap apni friend ko bataana chahte hai ki ye saare features aapki bike mein hai, toh aap unke bike mein ye sabhi features add kar sakte hai. Ye hi hota hai polyfilling.

Ab isko JavaScript mein translate karte hai. Suppose aapne ek new version of JavaScript use kiya hai aur isme kuch new functions aur methods aaye hai, lekin purane browsers mein ye functions aur methods support nahi karte. Toh aap polyfilling technique ka use karke un purane browsers ko upgrade kar sakte hai.

For example, let's say you want to use the `Array.prototype.includes()` method, which was introduced in ECMAScript 2016. However, this method is not supported by some older browsers like Internet Explorer. To make sure it works on these older browsers, you can use a polyfill like this:

```
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/) {
    'use strict';
    var O = Object(this);
    var len = parseInt(O.length) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1]) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    while (k < len) {
      var currentElement = O[k];
      if (searchElement === currentElement ||
         (searchElement !== searchElement && currentElement !== currentElement)) {
        return true;
      }
      k++;
    }
    return false;
  };
}
```

This polyfill checks whether the `Array.prototype.includes()` method is already defined. If not, it defines the method using a custom implementation that provides similar functionality. Now you can use this method in your code without worrying about browser compatibility issues.
