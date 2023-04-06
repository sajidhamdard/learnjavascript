### What is Optional Chaining

Optional chaining is a feature in programming languages that allows you to safely access properties and methods of an object, even if the object is null or undefined.

In other words, it provides a way to avoid "TypeError: Cannot read property 'x' of null/undefined" errors when accessing nested properties and methods of an object.

Here's an example in JavaScript:

```
const person = {
  name: "Rohan",
  address: {
    city: "Mumbai",
    pincode: 400001
  }
};

console.log(person?.address?.city); // Output: Mumbai

const otherPerson = null;

console.log(otherPerson?.address?.city); // Output: undefined (no error thrown)
```

The `?.` operator is used to access properties or methods of an object, but it also checks if the parent object (`person` or `otherPerson`) is null or undefined before attempting to access the child property (`address.city`). If the parent object is null or undefined, the expression evaluates to undefined instead of throwing an error.

that Optional Chaining ek aisi feature hai jismein hum kisi object ke properties aur methods ko surakshit tarike se access kar sakte hain, chahe wo object null ya undefined ho. Isse hum TypeError: Cannot read property 'x' of null/undefined jaise errors se bach sakte hain jab hum nested properties aur methods ko access karte hain.

### Multiple condition in if condition using optional chaining ?

If you want to check multiple conditions in an `if` statement and some of the values may be `undefined` or `null`, you can use optional chaining along with logical operators.

For example, let's say you have an object `person` that may or may not have a `name` and an `age` property:

```javascript
const person = {
  name: "John",
  age: undefined,
};
```

To check if the person is eligible for voting based on their age, you can write an `if` statement with optional chaining and logical operators like this:

```javascript
if (person?.age >= 18 && person?.name) {
  console.log(`${person.name} is eligible for voting.`);
} else {
  console.log(`${person.name} is not eligible for voting.`);
}
```

In the above code, the optional chaining operator `?.` checks if the `person` object has an `age` and `name` property without throwing an error if they are `undefined` or `null`. If both properties exist and the person's age is greater than or equal to 18, the first block of the `if` statement is executed. Otherwise, the else block is executed.

this means that you can check multiple conditions in an `if` statement using optional chaining and logical operators. This is useful when some of the values you want to check may be missing or null. For example, you can check if a person is eligible for voting based on their age and name, even if their name is missing.

### How to check if method exist in javascript using optional chaining

Optional chaining is a feature in JavaScript that allows you to check if a property or method exists on an object before accessing it. To check if a method exists using optional chaining, you can append the method name with a question mark (`?`) after the object reference.

Here's an example in Hinglish:

```
// Define an object with a `greet` method
const person = {
  name: "Amit",
  greet: function() {
    console.log("Namaste!");
  }
};

// Check if the `greet` method exists using optional chaining
if (person?.greet) {
  person.greet(); // Output: Namaste!
} else {
  console.log("Method does not exist.");
}
```

In this example, we define an object `person` with a `greet` method. We then use optional chaining to check if the `greet` method exists on the `person` object. If it does, we call the method and output "Namaste!". If it doesn't, we output "Method does not exist."

Note that optional chaining is only available in modern versions of JavaScript, so it may not work in older browsers.

### How to check if array is empty or not using optional chaining

Array ko khali hai ya nahi check karne ke liye, optional chaining ka upyog kiya jaa sakta hai. Optional chaining ek shorthand hai jo JavaScript mein null checks ko kam karne ke liye istemal kiya jaata hai. Jab humko pata nahi hota ki koi property exist karti hai ya nahi, tab hum optional chaining ka upyog kar sakte hai.

Example:
Suppose humare paas ek array hai `myArray` jisko hum check karna chahte hai ki wo khali hai ya nahi. Optional chaining ka syntax dot (.) ke baad question mark (?) laga kar use kiya jata hai. Agar array khali hai toh uska length 0 hoga aur agar non-empty hai toh uska length greater than 0 hoga. Hum optional chaining ka upyog `?.length` karke kar sakte hai.

Code Example:

```
const myArray = []

if (myArray?.length === 0) {
  console.log("Array is empty")
} else if (myArray?.length) {
  console.log(`Array has ${myArray.length} elements`)
} else {
  console.log("Array does not exist")
}
```

Yahan, hum optional chaining `?.` ka upyog `myArray?.length` ke through kiya hai. Agar array khali hai toh `myArray?.length` undefined return karega aur `if` condition false hoga. Lekin agar array empty nahi hai, toh `myArray?.length` ki value 0 hogi aur `if` condition true hoga.
