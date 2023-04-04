### How to use Object.create ?

In JavaScript, you can use the `Object.create()` method to create a new object with an existing object as its prototype. Here's an example:

```
const parent = {
  sayHello: function() {
    console.log('Hello!');
  }
};

const child = Object.create(parent);
child.sayHello(); // outputs "Hello!"
```

In this example, the `parent` object is the prototype of the `child` object. The `sayHello()` method is defined on the `parent` object, but it can be called on the `child` object because of the prototype chain.

You can also pass a second argument to `Object.create()` to define additional properties for the new object. For example:

```
const child = Object.create(parent, {
  name: { value: 'Alice' }
});

console.log(child.name); // outputs "Alice"
```

In JavaScript, the `Object.create()` method is used to create a new object with the specified prototype object and properties. Here's an example of how to use it:

```
// Create a prototype object
const personPrototype = {
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

// Create a new object with personPrototype as its prototype
const person1 = Object.create(personPrototype);

// Add properties to person1
person1.name = "John";
person1.age = 30;

// Call the greet method on person1
person1.greet(); // Output: Hello, my name is John.
```

In this example, we first create a `personPrototype` object that has a `greet` method. We then use `Object.create()` to create a new object called `person1`, with `personPrototype` as its prototype. We add some properties to `person1`, including `name` and `age`. Finally, we call the `greet` method on `person1`, which outputs "Hello, my name is John."
