### Optional Chaining

Optional Chaining, also known as Optional Property Access, is a feature in JavaScript that allows you to access properties of an object without causing an error if the property doesn't exist. It uses the question mark (?) operator to check if the property exists before accessing it.

For example, let's say you have an object called `person`, which has a property called `address`. If you want to access the `street` property of the `address` object, you would normally do:

```
const street = person.address.street;
```

However, if the `address` property doesn't exist on the `person` object, this will result in an error. With optional chaining, you can write the same code like this:

```
const street = person?.address?.street;
```

The `?.` operator checks if the `address` property exists before attempting to access the `street` property. If `address` doesn't exist, `street` will be set to `undefined`.

Here's another example. Let's say you have an array of objects called `users`, and each user object has a `profile` property which may or may not exist. You want to loop through the array and print out the `username` property of each user's profile, but only if the `profile` property exists. You can do this with optional chaining like so:

```
users.forEach((user) => {
  const username = user?.profile?.username;
  if (username) {
    console.log(username);
  }
});
```

Optional Chaining ek aise feature hai jo JavaScript mein upyog hota hai aur jo apko object ke properties ko access karne deta hai bina kisi error ke agar wo property exist nahi karti hai. Ye feature question mark (?) operator ka use karta hai jisse ki wo check kar sake ki property exist karta hai ya nahi before accessing it. Ye code likhne mein aasani paida karta hai aur errors se bachata hai.

### Multiple condition in if condition using optional chaining

Multiple condition in if condition using optional chaining in javascript allows you to check if multiple nested properties or methods exist before accessing them, without causing an error if any of them are undefined or null.

Here's an example:

```javascript
if (obj?.prop1?.prop2?.method()) {
  // do something
}
```

In this example, `obj` is an object that may or may not have a property `prop1`, which in turn may or may not have a property `prop2`, which may or may not have a method called `method()`. Using the optional chaining operator (`?.`) between each property and method ensures that the code will not throw an error if any of these properties or methods are undefined or null.

If all the properties and method exist, the condition will evaluate to true and the code inside the block `{}` will execute.

In simpler terms, this code checks if `obj` has `prop1` which has `prop2` which has a method called `method()`, and if all of these things exist, then it will execute the code inside the if block.

Note that the optional chaining operator (`?.`) is supported in modern browsers and environments, but not in older versions of JavaScript or in some legacy environments.

### How to check if method exist in javascript using optional chaining

Optional chaining is a powerful feature introduced in ES2020 that allows you to safely access properties and methods of an object without worrying about it being null or undefined. To check if a method exists in JavaScript using optional chaining, you can use the following syntax:

```
object?.methodName()
```

Here, the `object` represents the object on which you want to call the method, and `methodName` is the name of the method you want to call. The `?.` before the method name checks if the object exists before trying to call the method. If the object is null or undefined, the code will not throw an error and the method will not be called.

Let's take an example to understand this better. Suppose you have an object `person` with a property `name` and a method `sayHello()`:

```
const person = {
  name: "John",
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
```

Now, let's say you want to call the `sayHello()` method on the `person` object, but you're not sure if the `person` object exists. You can use optional chaining like this:

```
person?.sayHello();
```

This code will first check if the `person` object exists, and if it does, it will call the `sayHello()` method on it.

But what if the `person` object is null or undefined? In that case, the code will simply do nothing and not throw an error.

```
const person = null;
person?.sayHello(); // This code will do nothing
```

So, to summarize, to check if a method exists in JavaScript using optional chaining, you can use the `object?.methodName()` syntax. This will safely call the method if the object exists, and do nothing if it does not.

### How to check if array is empty or not using optional chaining

Optional chaining in JavaScript is a handy feature that allows you to check if a property or method exists on an object without causing an error if the object is null or undefined.

To check if an array is empty or not using optional chaining, you can use the length property with the optional chaining operator '?.'.

Here's an example:

```javascript
const arr = [];

if (arr?.length === 0) {
  console.log("Array is empty");
} else {
  console.log(`Array has ${arr?.length} element(s)`);
}
```

In the above example, we first use the optional chaining operator '?.' to check if the array exists. If it does, then we access its length property using the dot operator '.' and again use the optional chaining operator '?.' to make sure that the length property exists on the array.

If the array is empty, then its length will be 0, and we print "Array is empty." Otherwise, we print the number of elements in the array.

Optional chaining ek aisi JavaScript ki suvidha hai jisse aap ek object ke upar maujood kisi property ya method ko bina error ke check kar sakte hain agar woh null ya undefined hai.

Ek array khali hai ya nahi check karne ke liye, aap optional chaining ka upayog karke uski length property ka istemaal kar sakte hain. `?.` operater ka use karke aap dekh sakte hain ki array hai ya nahi.

example

```javascript
const arr = [];

if (arr?.length === 0) {
  console.log("Array khali hai");
} else {
  console.log(`Array mein ${arr?.length} element(s) hain`);
}
```

Upar die gye udahran mein humne pahle optional chaining operater '?.' ka upayog karke dekha hai ki kya array maujood hai ya nahi. Agar hai, toh hum uski length property tak pahunchte hain '.' operater ka istemaal karke aur phir dobara optional chaining operater '?.' ka use karke dekhate hain ki kya length property array ke upar maujood hai ya nahi.

Agar array khali hai toh uski length 0 hogi aur hum 'Array khali hai' print karenge. Varna, hum array mein kitne element hai woh print karenge.
