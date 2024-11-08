### What is Optional Chaining ?

Optional Chaining is a feature in JavaScript that allows developers to access object properties without worrying about whether the object is null or undefined. It is denoted by the question mark (`?`) and the dot (`.`) operator. 

Here's an example:

```javascript
const user = {
  name: 'John',
  address: {
    street: '123 Main St',
    city: 'New York'
  }
};

// Accessing nested property using Optional Chaining
const country = user?.address?.country;

console.log(country); // Output: undefined
```

In this example, we're trying to access the `country` property of the `address` object, which doesn't exist. However, because we used optional chaining, the variable `country` will be assigned the value `undefined` instead of throwing a TypeError.


### Multiple condition in if condition using optional chaining ?

Yes, it is possible to use optional chaining in JavaScript to check for multiple conditions in an if statement. Here is an example:

```javascript
if (object1?.property1 === value1 && object2?.property2 === value2) {
  // code to be executed if both conditions are true
}
```

In the above example, optional chaining (`?.`) is used to check if `object1` and `object2` exist before accessing their properties `property1` and `property2`, respectively. If either `object1` or `object2` does not exist, then the expression will short-circuit and return `undefined`. This prevents a `TypeError` from being thrown if an object is null or undefined.

The `&&` operator is then used to combine the two conditions, requiring both to be true in order for the code block to execute.

Note that optional chaining is only available in newer versions of JavaScript (ES2020+), so it may not be supported in all environments.


### How to check if method exist in javascript using optional chaining ?

To check if a method exists in JavaScript using optional chaining, you can use the `?.` operator. This operator allows you to access properties and methods on an object without causing errors if the object is null or undefined.

Here's an example:

```javascript
const myObj = {
  foo: {
    bar: () => {
      console.log("Hello");
    }
  }
};

// Optional chaining to check if the method exists
if (myObj?.foo?.bar) {
  myObj.foo.bar(); // Outputs "Hello"
}
```

In this example, we have an object `myObj` with a nested `foo` object that contains a `bar` method. We use optional chaining to check if `myObj`, `myObj.foo`, and `myObj.foo.bar` exist before calling `myObj.foo.bar()`. If any of these objects or methods don't exist, the expression will short-circuit and no errors will be thrown.


### How to check if array is empty or not using optional chaining ?

To check if an array is empty or not using optional chaining in JavaScript, you can use the `?.` operator to access the `length` property of the array without causing an error if the array is null or undefined. Here's an example:

```javascript
const arr1 = []; // empty array
const arr2 = [1, 2, 3]; // non-empty array

// Using optional chaining to check if the array is empty
if (arr1?.length === 0) {
  console.log("arr1 is empty");
} else {
  console.log("arr1 is not empty");
}

if (arr2?.length === 0) {
  console.log("arr2 is empty");
} else {
  console.log("arr2 is not empty");
}
```

In the above example, we have used optional chaining by adding a `?.` between the variable name and the `length` property. If the array is null or undefined, the expression `arr?.length` will evaluate to `undefined`, which is falsy, so the condition `arr?.length === 0` will be true only if the array is non-null and has length zero.


