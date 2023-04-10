### what is Module Pattern

Module Pattern ek design pattern hai jise Javascript mein use kiya jaata hai. Is pattern mein, hum apne code ko module ke roop mein organise karte hain, taaki hamara code reusable ho aur code ki complexity kam ho.

Is pattern mein, hum apna code ek function ke andar likhte hain aur us function ka return value, hum module ke roop mein use karte hain. Isse, hum dusre files mein bhi apne code ko import kar sakte hain aur usko reuse kar sakte hain.

Ek example ke dwara samjhte hain:

// Module definition
var MyModule = (function() {
// Private variable
var myPrivateVar = "Hello World";

// Private function
function myPrivateFunc() {
console.log(myPrivateVar);
}

// Public API
return {
publicVar: "I am a public variable",
publicFunc: function() {
console.log("I am a public function");
},
invokePrivateFunc: function() {
myPrivateFunc();
}
};
})();

// Usage
console.log(MyModule.publicVar); // Output: "I am a public variable"
MyModule.publicFunc(); // Output: "I am a public function"
MyModule.invokePrivateFunc(); // Output: "Hello World"

Is example mein, hum ek self-invoking function ka use kiya hai jise hum MyModule variable mein store karte hain. Is function mein, hum private aur public variables aur functions define karte hain.

Private variable aur function directly access nahi kiye jaa sakte hai lekin public variable aur function ko access kiya jaa sakta hai.

yeh samjhaya ja sakta hai ki module pattern mein hum apna code function ke andar likhte hain aur us function ka return value, hum module ke roop mein use karte hain. Isse hamara code reusable aur organised hota hai.
