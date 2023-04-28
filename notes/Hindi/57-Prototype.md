### what is Prototypes

Prototypes in JavaScript refer to an object that serves as a blueprint for other objects. Every object in JavaScript has a prototype, which provides it with default properties and methods.

For example, let's say we have an object called "Person" with two properties - name and age. We can create another object called "john" and set its prototype to be the "Person" object. This means that the "john" object will inherit the properties and methods of the "Person" object.

Here's an example code snippet:

```
// Creating the Person object
var Person = {
  name: "",
  age: 0,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

// Creating the john object
var john = Object.create(Person);

// Setting the name and age properties of the john object
john.name = "John";
john.age = 30;

// Calling the greet method on the john object
john.greet(); // Output: "Hello, my name is John"
```

In the above example, we first create the "Person" object with two properties (name and age) and a method called "greet". Then, we create a new object called "john" using the "Object.create()" method and set its prototype to be the "Person" object.

Next, we set the "name" and "age" properties of the "john" object. Finally, we call the "greet" method on the "john" object, which outputs "Hello, my name is John".

So, in summary, prototypes in JavaScript allow us to create objects that inherit properties and methods from other objects. This makes it easy to create reusable code and avoid repetition.
