### Hoisting

hoisting ka matlab hai ki, kisi bhi variable or function declaration ko uske scope ke top par move kar diya jata hai, jabki unhe originally code mein declare kiya gaya ho. Jaise ki agar humne ek variable ko declare kiya hai aur usse pehle hi use karne ki koshish kari hai, toohamare code mein error aa sakta hai. Lekin hoisting ke dwara, variable ki declaration yaad rakhi jaati hai aur execution time par, undefined value assign ki jaati hai. Yehi process function declarations ke liye bhi apply hota hai.

For example, let's say you have the following code:

```
console.log(x);
var x = 10;
```

Normally, this code would result in an error because `x` is undefined at the time it is being logged. However, due to hoisting, the variable declaration `var x` is moved to the top of its scope (in this case, the global scope), resulting in the following code:

```
var x;
console.log(x);
x = 10;
```

So when the code is actually executed, `x` has a value of `undefined`, which is what gets logged to the console.

Similarly, hoisting also applies to function declarations. For example:

```
foo();

function foo() {
  console.log("Hello world!");
}
```

In this case, the function declaration for `foo()` is moved to the top of its scope, resulting in the following code:

```
function foo() {
  console.log("Hello world!");
}

foo();
```
