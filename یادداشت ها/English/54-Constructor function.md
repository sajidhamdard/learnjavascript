### Constructor function

In JavaScript, a constructor function is a function that is used to create and initialize objects created with the new keyword.

Here's an example of a constructor function for creating a Person object:

```javascript
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.walk = function() {
    console.log(`${this.name} is walking.`);
  };
}
```

In this example, we define a constructor function called Person that takes in arguments for the person's name, age, and gender. Inside the constructor function, we use the this keyword to set those properties on the newly created object. We also define a walk() method on the object using a function expression.

To create a new Person object using the constructor function, we use the new keyword:
```javascript
const person1 = new Person('Alice', 30, 'female');
```

In this example, we create a new Person object called person1 and pass in the arguments 'Alice', 30, and 'female' to the constructor function.

We can then access the properties and methods on the person1 object using dot notation:

```javascript
console.log(person1.name); // logs "Alice"
person1.walk(); // logs "Alice is walking."
```

Note that using a constructor function to create objects can be more memory-efficient than using object literals, as methods defined inside the constructor function are shared by all instances of the object. Additionally, using a constructor function can make the code more modular and easier to read and maintain.

### new keyword in JavaScript

In JavaScript, the new keyword is used to create a new instance of an object that was defined with a constructor function.

When you use the new keyword with a constructor function, JavaScript creates a new object and sets its prototype property to the prototype property of the constructor function. It then calls the constructor function with the this keyword set to the newly created object.

Here's an example:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person('Alice', 30);
console.log(person1.name); // logs "Alice"
console.log(person1.age); // logs 30
```

In this example, we define a constructor function called Person that takes in arguments for the person's name and age. We then create a new instance of the Person object using the new keyword and passing in the arguments 'Alice' and 30.

When we log the person1.name and person1.age properties, we can see that they have been set to the values we passed in to the constructor function.

Note that using the new keyword with a constructor function is important for setting up the prototype chain correctly. Without the new keyword, the this keyword inside the constructor function would refer to the global window object instead of the new object that you're trying to create.
