### What is the Enhanced Object literals

Enhanced Object literals is a feature in JavaScript that allows developers to create objects with more concise and expressive syntax.

Basically, instead of writing properties and methods of an object one by one, you can just write them directly inside curly braces {} while creating the object.

For example:

```
const name = 'John';
const age = 30;

// without Enhanced Object literals
const person = {
  name: name,
  age: age,
  greet: function() {
    console.log('Hello!');
  }
};

// with Enhanced Object literals
const person = {
  name,
  age,
  greet() {
    console.log('Hello!');
  }
};
```

In the above example, we have created an object `person` with two properties - `name` and `age` - and a method called `greet`.

In the first version, we had to write the property names and values separately using the colon (:), and the method was defined using the keyword `function`. In the second version, we could use the shorthand syntax of just writing the variable names for the properties and define the method using arrow function syntax.

Overall, Enhanced Object literals can make your code more concise and easier to read, especially when dealing with complex objects.

### What is Enhanced Object literals Function in object

Enhanced Object literals is a feature in JavaScript that allows developers to create and manipulate objects in a more concise and flexible way.

Let me explain with an example in Hinglish language:

Suppose you want to create an object to represent a person's information, traditionally you would write something like this:

```javascript
var person = {
  name: "John",
  age: 30,
  gender: "male",
  occupation: "engineer",
};
```

With Enhanced Object literals, you can do the same thing in a more concise way by writing:

```javascript
var name = "John";
var age = 30;
var gender = "male";
var occupation = "engineer";

var person = {
  name,
  age,
  gender,
  occupation,
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am a ${this.gender} ${this.occupation}.`
    );
  },
};
```

Notice how we can use the variable names directly as property names in the object, without having to repeat them. We can also define methods within the object using the same syntax.

Enhanced Object literals also allow us to compute property names dynamically, like this:

```javascript
var propName = "email";

var person = {
  name: "John",
  age: 30,
  [propName]: "john@example.com",
};
```

In this example, the `propName` variable is used to compute the property name for the email address. The resulting object will have a property called `email`.

Overall, Enhanced Object literals provide a more concise and readable syntax for creating and manipulating objects in JavaScript.

### Enhanced Object literals compute property name

"Enhanced object literals" ki madad se hum object ke properties ko define aur initialize karne mein zyada flexibility paate hain. Ismein ek behetar tarika hai "computed property names", jiske through hum dynamic property names create kar sakte hain.

Computed property name ka matlab hai ki object ke property ke naam ko runtime mein calculate karke define kiya ja sakta hai. Iske liye hum square brackets [] ka use karte hain. Yeh feature JavaScript mein ES6 version mein introduce kiya gaya tha.

Jaise ki maan lijiye aapko ek program likhna hai jismein users ki information store karni hai. Har user ke pass unique ID hai, aur aap unki information ko us ID ke hisaab se access karna chahte hain. Tab aap computed property names ka use kar sakte hain.

Chaliye is concept ko ek udaharan se samjhe:

```
// without computed property name
let userId = 123;
let user = {
  id: userId,
  name: 'John',
  email: 'john@example.com'
};

// with computed property name
let users = {
  [userId]: {
    name: 'John',
    email: 'john@example.com'
  }
};
```

Yahan pe, humne pahle `userId` variable mein `123` assign kiya hai. Fir hum ek object `user` ko define kiya hai, jismein humne `id`, `name` aur `email` properties set ki hain. Lekin agar hum multiple users ki information store karna chahte hain, tab `user` object ko dubara dubara define karna hoga multiple baar, jiski wajah se code ki length badh jayegi.

Iske liye, hum `users` object mein computed property name ka use kar sakte hain. Yahan pe `[userId]` square brackets ke andar humne `userId` variable ko include kiya hai. Isse hum runtime mein `userId` ki value (`123`) ke hisaab se property name create kar sakte hain.

Overall, enhanced object literals aur computed property names ki madad se hum JavaScript mein objects ko define aur initialize karte samay zyada flexibility paate hain. Yeh feature code ko concise aur maintainable banane mein bhi help karta hai.
