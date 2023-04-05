### Temporal Dead Zone (TDZ)

TDZ ek period hai jahan hum ek varibale ko declare kar dete hain par usse pehle use access nahi kar sakte jab tak usse value assign nahi karte. Yeh ek error hai jo aata hai agar hum uss variable ko TDZ ke dauran access karte hain.

Temporal Dead Zone (TDZ) is a period in JavaScript where a declared variable cannot be accessed before it is assigned a value.

Let me explain this with an example: Suppose you declare a variable "x" using the keyword "let" inside a function:

```
function myFunction() {
  console.log(x);
  let x = 5;
}
```

Now, when you call the function `myFunction()`, you will get an error that says "Cannot access 'x' before initialization". This is because `x` is still in the TDZ and has not been assigned a value yet.

To avoid this error, you need to move the console.log statement after the assignment of the variable:

```
function myFunction() {
  let x = 5;
  console.log(x);
}
```

TDZ ek period hai jahan hum ek varibale ko declare kar dete hain par usse pehle use access nahi kar sakte jab tak usse value assign nahi karte. Yeh ek error hai jo aata hai agar hum uss variable ko TDZ ke dauran access karte hain.
