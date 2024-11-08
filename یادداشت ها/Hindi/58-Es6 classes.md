### what is ES6 classes

ES6 classes in JavaScript are a new syntax for creating reusable objects with properties and methods. Think of classes as blueprints or templates for creating multiple instances of similar objects.

Let's take an example of a class called `Car`:

```javascript
class Car {
  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }

  startEngine() {
    console.log(`Starting engine of ${this.color} ${this.model}...`);
  }
}
```

In the above code, we have defined a class called `Car` which has three properties: `model`, `year` and `color`. The `constructor` method is used to initialize these properties when a new instance of the class is created.

We have also defined a method called `startEngine` which logs a message to the console when called. This method can be called on any instance of the `Car` class.

To create a new instance of the `Car` class, we can use the following code:

```javascript
let myCar = new Car("Toyota", 2022, "red");
```

This creates a new instance of the `Car` class with the properties `model` set to `'Toyota'`, `year` set to `2022`, and `color` set to `'red'`.

We can now call the `startEngine` method on `myCar` like this:

```javascript
myCar.startEngine();
// Output: Starting engine of red Toyota...
```

So, in summary, ES6 classes provide a simpler and more concise way to define and create objects with predefined properties and methods.

### what is Setters and Getters

Setters and Getters in JavaScript are functions that allow us to control the access and modification of object properties. In simpler terms, they enable us to get and set the values of object properties using functions.

For example, suppose we have an object called `person` with properties `name` and `age`. We can define setters and getters for these properties as follows:

```javascript
const person = {
  _name: "",
  _age: 0,

  set name(name) {
    // Setter for name property
    this._name = name;
  },

  set age(age) {
    // Setter for age property
    if (age > 0 && age < 120) {
      this._age = age;
    } else {
      console.log("Invalid age");
    }
  },

  get name() {
    // Getter for name property
    return this._name;
  },

  get age() {
    // Getter for age property
    return this._age;
  },
};
```

Here, we have defined setters and getters for the `name` and `age` properties using `set` and `get` keywords respectively. The `_name` and `_age` variables with an underscore prefix are used to store the actual values of these properties.

Now, we can set and get the values of the `name` and `age` properties using these setters and getters as follows:

```javascript
person.name = "John"; // Using setter for name property
person.age = 30; // Using setter for age property

console.log(person.name); // Using getter for name property
console.log(person.age); // Using getter for age property
```

In Hinglish, we can say ki Setters aur Getters JavaScript mein functions hai jo humein object ke properties ko access aur modify karne ki permission dete hai. Ye humein functions use karke object ke properties ki values ko get aur set karne ki suvidha pradaan karte hai.

### what is Static methods

Static methods in JavaScript are functions that belong to the class itself rather than to any specific instance of that class. These methods can be accessed directly on the class without creating an object of the class.

Static methods are declared using the keyword `static` before the function name. Here's an example:

```javascript
class MyClass {
  static myStaticMethod() {
    console.log("This is a static method.");
  }
}

MyClass.myStaticMethod(); // Output: This is a static method.
```

In this example, `myStaticMethod()` is a static method of the `MyClass` class. It can be called directly on the class without creating an instance of `MyClass`.

Now let me explain in Hinglish:

Static method ka matlab hota hai ki ye woh method hota hai jo sirf class se related hota hai aur kisi bhi particular instance se nahi. Ismein hum ek class ke andar ek function likhte hain jisko `static` keyword ke sath define kiya jata hai. Is tarah ke methods ko direct class ke upar call kiya jaa sakta hai bina kisi object ke banaye.

Upar diye gaye example mein `MyClass` class ka ek static method hai jiska naam `myStaticMethod()` hai. Hum ise `MyClass.myStaticMethod()` syntax se direct call kar sakte hain bina kisi `MyClass` ke object ke banaye.

### How to use ES6 classes

ES6 classes in JavaScript are a way to create objects using a class-based syntax. Here's how you can use them, explained in Hinglish with an example:

Sabse pehle, hum ek class banayenge "Person" naam se. Is class mein hum log "name" aur "age" properties rakhenge.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

Yahan `constructor` ek special method hai, jo class ke objects ko initialize karta hai. Hum yahaan `name` aur `age` arguments le rahe hain, aur fir `this` keyword se unhein instance variables mein store kar rahe hain.

Ab hum log is class se ek object banaenge, jiska naam "john" hoga, aur age 25 hogi.

```javascript
const john = new Person("John", 25);
```

Yahan `new` keyword se hum log ek naya instance (ya object) banarahe hain, jiske liye hum log `Person` class ka use kar rahe hain. Hum arguments mein "John" aur 25 pass kar rahe hain, jisse `john` object ke `name` aur `age` properties set ho jaayenge.

Ab hum log `console.log()` se `john` object ke properties dekh sakte hain:

```javascript
console.log(john.name); // Output: "John"
console.log(john.age); // Output: 25
```
