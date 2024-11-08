### what is (DRY) principle in javascript ? Explain in detail with example and in Hinglish language.

DRY principle kehta hai ki humein ek hi jaga kaam karne wale code ko baar-baar likhna nahi chahiye balki uska use alag alag jagao pe karne ke liye functions ya classes bana kar karna chahiye. Isse code ki length kam hoti hai aur future mein code maintenance aur modification bhi aasaan hoti hai.
The DRY principle in JavaScript stands for "Don't Repeat Yourself". It is a software development principle that encourages developers to avoid duplicating code and instead promote code reuse.

In simpler words, DRY principle tells us to not write the same code over and over again, but rather create functions or classes that can be reused throughout the codebase. This helps reduce code redundancy, improves maintainability, and makes it easier to update and modify the code in the future.

For example, let's say we have a web application that needs to calculate the area of a rectangle in multiple places. Instead of writing the same calculation logic every time, we can define a function to handle it:

```javascript
function calculateRectangleArea(width, height) {
  return width * height;
}
```

Now, whenever we need to calculate the area of a rectangle, we can simply call this function instead of rewriting the same code:

```javascript
const area = calculateRectangleArea(10, 20);
console.log(area); // Output: 200
```
