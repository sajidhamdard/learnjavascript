### Debugging

Debugging ek process hai jahan hum apne code me errors ko dhoondte hai aur unhe fix karte hai. JavaScript me debugging ka matlab hota hai ki hum apne code ke errors ko dhoondh kar unhe solve karein taaki hamara code properly work kare.

Bahut se tools hote hai jaise console.log(), Chrome DevTools, aur Visual Studio Code debugger jo humein JavaScript code me error ko find karne me help karte hai.

Ek example ke liye, agar hum ek variable ko undefined value se initialize karte hai:

```javascript
let name;
console.log(name);
```

Is case me console par "undefined" print hoga kyunki humne variable `name` ko koi value assign nahi ki hai. Is tarah se hum apne code me errors ko identify kar sakte hai aur unhe fix kar sakte hai.

Agar hum Visual Studio Code ka use karte hai toh hum break points laga kar debugger ka use kar sakte hai. Break points lagane ke baad jab hum apna code run karenge toh wo execution ke time pe break ho jayega aur hum uss point se aage execute kar sakte hai. Isse hum apne code ke errors ko easily findout kar sakte hai.

Ummid hai ki ye samajh me aa gaya hoga ki JavaScript debugging kya hota hai aur iska importance kya hai.

### Developer Tool

JavaScript Developer Tools are a set of features provided by web browsers to help developers debug and optimize their JavaScript code. These tools include a range of functions such as managing console logs, inspecting code execution, profiling performance, and analyzing network traffic.

For example, Google Chrome's DevTools provides a comprehensive set of developer tools that you can access by pressing the F12 key or right-clicking on any element in the page and selecting "Inspect." Once open, you will see several tabs that allow you to inspect the DOM, CSS, Network, Console, and more.

Using the Console tab, you can execute JavaScript code directly in the browser and log out the output. This is helpful for quickly testing code snippets and debugging issues. The Network tab shows all the HTTP requests made by the browser, allowing you to see which resources are being loaded and how long they take to load.

Additionally, DevTools has a Sources tab where you can insert breakpoints in your code to stop it at specific points, examine variable values and step through the code line by line.

Overall, these DevTools provide a powerful set of features that can help developers build and troubleshoot complex JavaScript applications more efficiently.

### Fixing errors

JavaScript mein errors ki shikayat aksar hoti hai, aur iske sahi karne ke liye kuch steps hote hain jo neeche bataye gaye hain:

1. Error message padhein: Jab bhi aapka code execute hone se pehle ya during execution mein error aata hai, toh console mein ek error message show hota hai. Is error message ko padhkar aapko pata chal jayega ki kis line mein error hai aur uski wajah kya hai.

2. Code ko review karein: Error message padhne ke baad aapko woh line of code dekhna chahiye jisme error hai. Us line of code ko carefully review karein aur dekhein ki kya galat likha hai.

3. Syntax ki sahiyta check karein: JavaScript ek syntax-based language hai, isliye aapki code mein sahi syntax hona bahut zaroori hai. Syntax error ko fix karne ke liye, aapko code ko carefully check karna hoga aur galti ko theek karna hoga.

4. Variables aur functions ki spelling ki jaanch karein: Aksar kabhi-kabhi variables aur functions ki spelling mistakes ho jati hai, jiske wajah se code mein error aata hai. Isliye, code mein use kiye gaye variables aur functions ki spelling ko carefully check karein.

5. Debugging tools ka istemaal karein: JavaScript mein debugging tools available hote hain jaise ki Chrome DevTools, Firefox Debugger, etc. In tools ka istemaal karke aap apne code mein errors ko easily trace kar sakte hain aur unhe sahi kar sakte hain.

Example:
Maan lete hain ki aapne ek JavaScript function likha hai jo dono numbers ko add karta hai:

function addNumbers(a, b) {
var sum = a + b;
console.log(sum);
}

Lekin agar aap is function ko call karte hain aur sirf ek number pass karte hain, toh error message show ho jayega:

addNumbers(5);

Error: Uncaught ReferenceError: b is not defined

Is error message se pata chalta hai ki kyonki aapne sirf ek parameter pass kiya hai, isliye 'b' variable undefined hai. Is error ko fix karne ke liye, aapko function call ko do parameters ke saath update karna hoga:

addNumbers(5, 10);

Output: 15

Is tarah se aap JavaScript mein errors ko fix kar sakte hain aur apne code ko smooth functioning karwa sakte hain.

### different types of errors .

Javascript mein kai prakar ke errors hote hai. Kuch common errors hain jaise Syntax errors, Reference errors, Type errors aur Range errors.

1. Syntax error: Ye error jab aata hai jab aapka code javascript language ke rules ke khilaaf hota hai. Jaise ki agar aapne ek statement ko likhne ke liye semi-colon (;) nahi lagaya to ye error aayega.

Example:

```
// Invalid syntax
let x = 5
console.log(x)
```

Ismein semi-colon missing hai statement ke end mein.

2. Reference error: Jab aap kisi varibale ko access karte hai jo exist nahi karta ya fir usko define nahi kiya gaya hai to ye error aata hai.

Example:

```
// Accessing undefined variable
console.log(x);
```

Ismein variable x ka value define nahi kiya gaya hai.

3. Type error: Ye error tab hota hai jab aapka code ki type mismatch ho jati hai. Jaise ki aapne string ka operation number pe apply kiya ho.

Example:

```
// Trying to use string method on a number
let x = 123;
console.log(x.toUpperCase());
```

Ye error isliye aaya kyunki humne uppercase() method ko number mein use kiya hai, lekin ye method sirf string ke liye hota hai.

4. Range error: Jab aapka code range se bahar ho jata hai, jaise ki ek array ke element ke index ke bahar ho jaye ya fir ek number ki range se bahar ho jaye to ye error aata hai.

Example:

```
// Trying to access an element outside the array
let arr = [1, 2, 3];
console.log(arr[3]);
```

Ismein hum 4th index element ko access karne ki koshish kar rahe hai, jo ki array ke range se bahar hai.

In prakaron ke alawa bhi kai errors hote hai, par inmein se ye sabse common errors hai. Aapko javascript mein aane wale errors ka pata hona zaruri hai taaki aap unhe avoid kar sake aur apna code efficient tarike se likh sake.
