### Prototypal inheritance and prototype chain

Prototypal inheritance is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects, known as their prototypes. When a property or method is accessed on an object, JavaScript first looks for it directly on the object, and if it's not found, it looks for it on the object's prototype, and then on the prototype's prototype, and so on, following the prototype chain until the property or method is found or until the end of the chain is reached (which is the object `Object.prototype`, the final fallback).

The prototype chain is the chain of prototypes that an object follows to access properties and methods. Each object has an internal property called `[[Prototype]]` (also accessible via the `__proto__` property) that points to its prototype object. When an object is created using object literals, the default prototype is `Object.prototype`. However, you can create custom prototypes by defining constructor functions and setting their `prototype` property to an object that will be used as the prototype for the objects created with that constructor function.


### Prototypal inheritance on Built-in objects in JavaScript

Prototypal inheritance is a fundamental concept in JavaScript that allows objects to inherit properties and methods from other objects. In the case of built-in objects, such as arrays or strings, they inherit their properties and methods from their prototype object. This means that any instance of an array, for example, will have access to all the properties and methods defined on the Array.prototype object. Similarly, instances of strings will have access to the properties and methods defined on the String.prototype object. This feature makes JavaScript highly flexible and extensible.

### Difference between Inheritance and classes

In JavaScript, classes are blueprints for creating objects with specific properties and methods. Inheritance, on the other hand, is a mechanism that allows an object to inherit properties and methods from another object. 

Classes provide a way to define objects with similar behavior and characteristics in a reusable way. They can be used to create multiple instances of an object with their own unique characteristics.

Inheritance allows objects to share properties and methods with other objects, which can simplify code and avoid repetition. It provides a way to create new objects based on existing ones, inheriting their properties and methods while also adding or modifying them as needed.

In summary, classes are used to define objects while inheritance is a mechanism for sharing properties and methods between objects.


### How to use constructor functions ?

Constructor functions in JavaScript are used to create objects with shared properties and methods. Here's an example of how to use a constructor function:

1. Define the constructor function: 
```
function Person(name, age) {
  this.name = name;
  this.age = age;
}
```

2. Create new instances of the object using the `new` keyword:
```
let person1 = new Person('John', 30);
let person2 = new Person('Jane', 25);
```

3. Access the object's properties using dot notation:
```
console.log(person1.name); // Output: John
console.log(person2.age); // Output: 25
```

You can also add methods to the constructor function's prototype, which will be shared by all instances of the object:
```
Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}.`);
}

person1.sayHello(); // Output: Hello, my name is John.
person2.sayHello(); // Output: Hello, my name is Jane.
```
