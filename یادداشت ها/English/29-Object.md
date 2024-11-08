### What is an object ?
In JavaScript, an object is a collection of key-value pairs, where the keys are strings (or symbols) and the values can be any JavaScript data type, including other objects. Objects in JavaScript are dynamic, meaning that their properties can be added, modified, or removed at runtime. They are also reference types, which means that when you assign an object to a variable, the variable holds a reference to the object in memory rather than a copy of its value.


### What is Object literal syntax ?
Object literal syntax in JavaScript is a way to create an object by directly defining its properties and values within curly braces. It is a shorthand notation for creating objects without using the constructor function. For example:

```javascript
const myObject = { 
  name: 'John', 
  age: 30, 
  city: 'New York' 
};
```

This creates an object `myObject` with three properties: `name`, `age`, and `city`, each with a corresponding value. Object literal syntax is a common and convenient way to create objects in JavaScript.


### How to create Object using new keyword ?
To create an object using the `new` keyword in JavaScript, you can define a constructor function and use the `new` keyword to instantiate an object of that type. Here's an example:

```
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Create a new instance of the Person object
const john = new Person('John', 30);

console.log(john); // Output: { name: 'John', age: 30 }
```

In this example, we define a constructor function called `Person`, which takes two parameters (`name` and `age`) and assigns them to properties on the newly created object using the `this` keyword. To create a new instance of the `Person` object, we use the `new` keyword followed by the name of the constructor function and any arguments that need to be passed to it.

When the `new` keyword is used with a constructor function, it creates a new object, sets the `this` keyword to refer to that object, executes the code inside the constructor function (which typically sets up the object's properties), and then returns the new object.


### Explain Object Annotations
Object Annotations in javascript are a way to define and initialize objects. An object is created by enclosing key-value pairs within curly braces `{}`. The keys represent the properties of the object and the values represent the values of those properties.

There are two ways to add properties to an object using object annotations:

1. Dot notation: Here, the object property is accessed using the dot `.` operator and assigned a value.

```
const myObject = {};
myObject.property1 = "value1";
myObject.property2 = "value2";
```

2. Bracket notation: Here, the object property is accessed using the square brackets `[]` and assigned a value.

```
const myObject = {};
myObject["property1"] = "value1";
myObject["property2"] = "value2";
```

Object annotations can also be used to define object literals, which are objects that are defined with their properties and values at the same time. Here's an example:

```
const myObject = {
  property1: "value1",
  property2: "value2"
};
``` 

In this case, the properties are defined inside the curly braces `{}` separated by commas `,`.


### Explain Dot annotation
In JavaScript, dot notation is a way to access properties and methods of an object using the dot (.) operator. Using dot notation, you can access properties and methods of an object by specifying the object name followed by a dot and then the property or method name.

For example, if you have an object called "person" with properties "name" and "age", you can access the name property using dot notation like this:

```
var person = {
  name: "John",
  age: 30
};

console.log(person.name); // Output: "John"
```

Similarly, you can call a method of an object using dot notation like this:

```
var person = {
  name: "John",
  age: 30,
  sayHello: function() {
    console.log("Hello!");
  }
};

person.sayHello(); // Output: "Hello!"
``` 

Note that dot notation only works for accessing properties and methods that have valid identifier names. For properties or methods with special characters or reserved words in their names, you must use bracket notation instead.


### Explain Bracket annotation
Bracket annotation in JavaScript is a way of accessing an object's property using square brackets and a string key instead of the traditional dot notation. For example, instead of writing `object.property`, you can write `object['property']`. This is useful when the property name is dynamic or contains special characters that are not valid as identifier names. 

For instance, if you have an object `myObj` with a property whose name is stored in a variable `propName`, you can access it using bracket annotation like this: `myObj[propName]`. Similarly, if the property name contains special characters like spaces or hyphens, you can use bracket annotation to access it: `myObj['special-prop']`.

Note that while most objects in JavaScript support bracket annotation, there are some exceptions, such as primitive values (e.g., strings, numbers) and some built-in objects like `Math` or `Date`.


### Explain Object properties : Key and Value
In JavaScript, an object is a collection of key-value pairs. The "key" in an object refers to the unique identifier that is used to access its corresponding "value". 

For example, consider an object representing a person:

```
let person = {
  name: "John",
  age: 30,
  address: "123 Main St"
};
```

In this case, `name`, `age`, and `address` are the keys, while `"John"`, `30`, and `"123 Main St"` are their corresponding values.

To access the value of a specific key, you can use dot notation or bracket notation:

```
console.log(person.name); // Output: John
console.log(person["age"]); // Output: 30
```


### Explain Array inside an Object
In JavaScript, an array inside an object is a way to store multiple values in a single property of an object. This property can be accessed using the dot notation or square bracket notation. 

For example, let's say we have an object called "car" with properties such as "make", "model", and "year". We can add an array called "features" that includes additional information about the car, such as its color, engine size, and transmission type.

Here's an example:

```
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2021,
  features: ["red", "2.5L", "automatic"]
};
```

We can access the values in the "features" array using the dot notation or square bracket notation:

```
console.log(car.features[0]); // Output: "red"
console.log(car["features"][1]); // Output: "2.5L"
``` 

So, by using an array inside an object, we can organize related data together and easily access it when needed.


### Explain Function inside an Object
In JavaScript, objects can contain functions as properties, which are called "methods". These methods can be accessed and invoked using dot notation.

For example, consider an object representing a car:

```
let car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2018,
  start: function() {
    console.log('Starting the car...')
  },
  drive: function(speed) {
    console.log(`Driving at ${speed} mph...`)
  },
  stop: function() {
    console.log('Stopping the car.')
  }
}
```

Here, `start`, `drive`, and `stop` are all methods of the `car` object. They can be invoked by calling them using dot notation:

```
car.start(); // Output: Starting the car...
car.drive(50); // Output: Driving at 50 mph...
car.stop(); // Output: Stopping the car.
```

Inside these methods, you can access other properties of the object using the `this` keyword:

```
let car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2018,
  start: function() {
    console.log(`Starting the ${this.make} ${this.model}...`)
  },
  // ...
}
```

Here, `this.make` and `this.model` refer to the `make` and `model` properties of the `car` object.


### Explain Uses of this inside an Object
In JavaScript, `this` refers to the current object that a method is being called on, or the object that a function is invoked with. It allows you to access and modify properties and methods of the object within which `this` is used.

Some common uses of `this` inside an object include:

1. Accessing object properties: you can use `this.propertyName` to access a property of the current object.

2. Modifying object properties: you can use `this.propertyName = value` to modify a property of the current object.

3. Calling object methods: you can use `this.methodName()` to call a method defined in the current object.

4. Creating new properties or methods: you can use `this.newPropertyName = value` or `this.newMethodName = function() { }` to add new properties or methods to the current object.

Note that the value of `this` depends on how a function is called. When a function is called without an explicit context (i.e., as a standalone function), `this` refers to the global object (e.g., `window` in the browser). To avoid this, you can use the `bind`, `call`, or `apply` methods to explicitly set the value of `this`.


### Explain Object functions : Keys(), Values(), entries()
In JavaScript, object functions `keys()`, `values()`, and `entries()` are used to extract information from an object.

- The `keys()` function returns an array of all the keys within an object.
- The `values()` function returns an array of all the values within an object.
- The `entries()` function returns an array of arrays that contain key-value pairs as `[key, value]`.

Here's an example:

```javascript
const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj)); // output: ["a", "b", "c"]
console.log(Object.values(obj)); // output: [1, 2, 3]
console.log(Object.entries(obj)); // output: [["a", 1], ["b", 2], ["c", 3]]
```

Note that these functions iterate over the enumerable properties of an object. If you want to include non-enumerable properties, you can use `Object.getOwnPropertyNames()`, `Object.getOwnPropertySymbols()`, or `Reflect.ownKeys()`.


