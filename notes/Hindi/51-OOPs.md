### what is OOP

OOP stands for "Object-Oriented Programming." In JavaScript, OOP is a programming paradigm that focuses on creating objects to represent real-world entities and then using those objects to perform actions and interact with other objects.

Let's consider an example of a car. We can create an object called "car" that has properties like "model," "make," "color," and "year," as well as methods like "start," "stop," and "drive." Here's some code to create a car object:

```javascript
class Car {
  constructor(model, make, color, year) {
    this.model = model;
    this.make = make;
    this.color = color;
    this.year = year;
  }

  start() {
    console.log("Starting the car...");
  }

  stop() {
    console.log("Stopping the car...");
  }

  drive() {
    console.log("Driving the car...");
  }
}

const myCar = new Car("Civic", "Honda", "Silver", 2022);
console.log(myCar.model); // Output: Civic
myCar.start(); // Output: Starting the car...
```

In this example, we have created a class called "Car" that has a constructor function to initialize the car object with its properties. We also defined three methods: "start," "stop," and "drive," which can be called on any car object.

We then create a new instance of the Car class called "myCar," passing in the values for its properties. We can access and modify these properties using dot notation (e.g., `myCar.model = "Accord";`). We can also call the methods on "myCar" (e.g., `myCar.start();`).

OOP provides a way to organize code into reusable and modular pieces that can be easier to maintain and understand. By encapsulating data and behavior into objects, we can create more robust and flexible programs.

### what is Constructor functions and new operator

Constructor functions aur new operator JavaScript mein object-oriented programming ke concepts hai. Constructor functions ka use objects ko create karne ke liye kiya jata hai.

Constructor functions khud ek function hote hai jo ek blueprint ki tarah work karte hai. Ye blueprint se based on objects banate hai. Ismein, ham class ki tarah property aur method define kar sakte hai.

New operator ka use constructor function ke object create karne ke liye kiya jata hai. Jab bhi hum new operator ka use karte hai, toh ek empty object create hota hai aur uske baad constructor function call karke, us object mein properties aur methods set kiye jaate hai.

Example ke liye, hum ek Person constructor function bana sakte hai:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(
      "Hello, my name is " + this.name + " and I am " + this.age + " years old."
    );
  };
}
```

Yahan, humne ek Person constructor function banaya hai jismein "name" aur "age" properties hain, aur "greet" method hai jiske zariye hum person ko greet kar sakte hai.

Ab hum new operator ka use karke, is constructor function se objects create kar sakte hai:

```javascript
const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);

console.log(person1.name); // Output: John
console.log(person2.age); // Output: 25
person1.greet(); // Output: Hello, my name is John and I am 30 years old.
```

Yahan, humne `new Person` ka use karke do objects banaye hai. Ek person1 jiska naam John hai aur age 30 hai, aur dusra person2 jiska naam Jane hai aur age 25 hai. Humne `console.log` aur `person1.greet()` ke zariye inke properties aur methods ko access kiya hai.

Ummid hai yeh samjh mein aaya hoga!

### what is Prototypes

Prototypes in JavaScript refer to the mechanism through which objects inherit properties and methods from other objects.

In simpler terms, when you create an object in JavaScript, it automatically inherits certain properties and methods from another object, known as its prototype. These inherited properties and methods can be accessed and used by the new object.

For example, let's say we want to create a new object called "person". We can do so using the following code:

```javascript
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
```

Here, we have created an object with four properties - `firstName`, `lastName`, `age`, and `fullName`. The `fullName` property is a method that returns the full name of the person.

Now, let's create another object called "student" that inherits from the "person" object:

```javascript
var student = Object.create(person);
student.firstName = "Jane";
student.lastName = "Smith";
student.grade = "A";
```

Here, we have used the `Object.create()` method to create a new object called "student" that inherits from the "person" object. We have then added three additional properties to the "student" object - `firstName`, `lastName`, and `grade`.

Since the "student" object inherits from the "person" object, it also has access to the `fullName` method. We can call this method on the "student" object as follows:

```javascript
console.log(student.fullName()); // Output: Jane Smith
```

So, in essence, prototypes in JavaScript allow us to create objects that inherit properties and methods from other objects, making our code more efficient and reusable.

Ab sabko samajh mein aaya hoga ki Prototypes kya hote hai JavaScript mein. Yah ek mechanism hai jiski madad se hum ek naye object ko kisi dusre object se properties aur methods ko inherit karne ki suvidha pradaan karte hain. Iski madad se hum apna code efficient tarike se likh sakte hain aur use dobara upyog me la sakte hain.

### what is Prototypal inheritance and prototype chain

Prototypal Inheritance aur Prototype Chain JavaScript mein kya hai? Isko Example ke saath detail mein explain karein, Hinglish mein.

JavaScript mein Prototypal Inheritance ek bahut hi important concept hai. Har object ke paas apna prototype hota hai, jo use inheriting properties and methods allow karta hai.

Prototype chain yeh determine karta hai ki object kis tarah se inheriting properties and methods leta hai. Jab aap kisi property or method ke liye ek object par access karte hain, JavaScript sabse pehle uss object ke prototype mein search karta hai, aur agar woh usmein nahi milta toh uske prototype ka prototype mein search karta hai. Yeh process prototype chain kehte hai.

For example:

```
// Hum ek constructor function bana rahe hai
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Hum Person ke prototype mein ek method add kar rahe hai
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Ek instance create kar rahe hai
const person1 = new Person('John', 30);

// greet method call karte hai
person1.greet(); // Output: Hello, my name is John and I am 30 years old.
```

Is example mein humne ek constructor function `Person` banaya jiske prototype mein humne `greet` method add kiya. Fir humne ek instance `person1` create kiya aur uspe `greet` method call kiya. Jab `greet` method ko call kiya gaya toh JavaScript sabse pehle `person1` object ke prototype mein search kiya, aur wahaan `greet` method mil gaya.

### what is Prototypal inheritance on Built-in objects

Prototypal inheritance in JavaScript means that objects can inherit properties and methods from other objects, known as their "prototype". When a property or method is accessed on an object, JavaScript first looks for it on the object itself, and if it's not found there, it checks the object's prototype, and so on up the prototype chain until the property or method is found or there are no more prototypes to check.

For example, let's say we have an array object in JavaScript. The array object has a prototype, which is another object that contains all of the methods and properties that arrays can use. We can create a new array like this:

```javascript
let myArray = [1, 2, 3];
```

When we try to access a method or property on `myArray`, JavaScript first checks to see if it exists on `myArray` itself. If it doesn't, then it checks the array prototype for the method or property. For example, if we call the `map()` method on `myArray` like this:

```javascript
let newArray = myArray.map(function (num) {
  return num * 2;
});
```

JavaScript will first look for the `map()` method on `myArray`. Since `map()` is not a property of `myArray`, JavaScript will look for it on the array prototype. It will find `map()` there and execute it, which will return a new array with each element multiplied by 2.

Prototypal inheritance ka matlab hai ki objects kay pass kisi aur object se properties aur methods inherit kiye jaa sakte hai, jo uske "prototype" ke naam se jaante hai. Jab koi property ya method access hota hai kisi object per JavaScript mei, sabse pehle wo uss object mei dhundta hai agar wo waha nahi hai to wo uss object ke prototype ko check karta hai, is tarah se prototype chain ke through jate jate check karta hai property ya method ko.

For example: Agar hum JavaScript mei ek array object lete hai, toh uska prototype bhi hota hai jo dusre object mei methods aur properties ko store karta hai. Hum ek naya array aise create kar sakte hai:

```javascript
let myArray = [1, 2, 3];
```

Agar hum `myArray` per koi method ya property access karte hai, toh JavaScript sabse pehle check karta hai ki wo property/method `myArray` mei hai ya nahi, agar nahi hai toh wo array ke prototype mei jaata hai aur waha se search karta hai. Jaise ki agar hum `map()` method use karte hai `myArray` per:

```javascript
let newArray = myArray.map(function (num) {
  return num * 2;
});
```

Toh JavaScript sabse pehle `map()` method ko `myArray` mei dhundega, lekin waha ye method nahi hai, isliye wo array ke prototype mei jayega aur waha se `map()` method ko execute karega. Ye method ek new array return karega jismein har element ko 2 se multiply kiya hua hai.

### what is ES6 classes

ES6 classes are a feature in JavaScript that allow you to create object-oriented programming (OOP) structures in a more familiar way, similar to other programming languages like Java or Python.

In Hinglish language, ES6 classes ko hum JavaScript mein use karke OOP ki tarah programming kar sakte hai jaise Java ya Python mein hota hai.

To explain with an example, let's say you want to create a class for a Car object. In traditional JavaScript, you might use a constructor function and add properties and methods to its prototype:

```
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Car.prototype.getDescription = function() {
  return `This is a ${this.year} ${this.make} ${this.model}.`;
}
```

But with ES6 classes, you can define the same class in a more concise way:

```
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDescription() {
    return `This is a ${this.year} ${this.make} ${this.model}.`;
  }
}
```

The `class` keyword declares a new class called `Car`. The `constructor` method is automatically called when you create a new instance of the class and sets the initial values of the object's properties. The `getDescription` method defines a behavior for the Car object.

You can then create instances of the class just like in traditional JavaScript:

```
const myCar = new Car('Honda', 'Civic', 2022);
console.log(myCar.getDescription()); // "This is a 2022 Honda Civic."
```

Overall, ES6 classes provide a cleaner syntax for creating objects in JavaScript and make it easier to write and read OOP code.

### what is Setters and Getters

Setters aur Getters JavaScript mein properties ko access aur modify karne ke liye use kiye jaate hain. Setters property values ko set karte hain, jabki Getters property values ko retrieve karte hain.

Iska ek example dekhte hain:

```js
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

const person1 = new Person("John");
console.log(person1.name); // Output: John

person1.name = "Jane";
console.log(person1.name); // Output: Jane
```

Yahan `Person` class mein `name` property ko access karne aur modify karne ke liye `get` aur `set` functions ka use kiya gaya hai. `get` function `name` ki current value ko return karta hai, jabki `set` function `name` ki value ko set karta hai.

`person1` object ko create karne ke baad, humne `name` property ko `John` se `Jane` mein update kiya aur phir console par uski value ko print kiya.

Setters aur Getters JavaScript mein properties ko handle karne ke kaam aate hain. Setters property ki value ko set karte hain, jabki Getters property ki value ko retrieve karte hain. Upar diye gaye example mein, `Person` class mein `name` property ke liye `get` aur `set` functions ka use kiya gaya tha. `get` function `name` ki current value ko return karta hai, jabki `set` function `name` ki value ko set karta hai.

### what is Static methods

Static methods in JavaScript are functions that belong to a class rather than an instance of the class. These methods can be called directly on the class itself, without the need to create an instance.

Static methods JavaScript mein wo functions hote hai jo ki ek class ke andar hote hai, lekin class ke ek instance ke andar nahi hote hai. In methods ko class ke object ke bina seedhe class pe call kiya ja sakta hai.

Example:
Let's say we have a class called `Math` with a static method called `square` which calculates the square of a given number:

Humein maan lo ki humare paas ek "Math" class hai jismein "square" naam ka static method hai, jo ki diye gaye number ka square calculate karta hai:

```javascript
class Math {
  static square(num) {
    return num * num;
  }
}

console.log(Math.square(5)); // Output: 25
```

Here, we define a static method `square` inside the `Math` class using the `static` keyword. We can then call this method directly on the `Math` class without creating an instance of it.

Is example mein humne `static` keyword ka upyog karke `square` naam ka static method define kiya hai `Math` class ke andar. Fir humne iss method ko `Math` class ke object ke bina direct call kiya hai.

### how to Object.create

Object.create() JavaScript mein ek method hai jo aapko ek naya object banaane mein madad karta hai, jiske paas ek prototype ke roop mein ek existing object ka reference hota hai. Yeh method aapko inheritance-based programming ki suvidha deta hai.

Iska upyog karne ke liye, aap pehle se hi ek object ko prototype ke roop mein define karte hain aur uske baad Object.create() ko use karke naye object ko us prototype se inherit kar sakte hain.

Syntax:

```
Object.create(prototype_object, optional_properties_object);
```

Yahan `prototype_object` ek object hai jo naye object ka prototype banega. Agar aap chahte hain ki naya object mein kuch aur upalabdh vikalpon ke saath banaya jaaye to aap ise optional_properties_object ke roop mein bhi pass kar sakte hain.

Example:

```
// Ek person object ka prototype tayyar karo
const personPrototype = {
  greeting: function() {
    console.log(`Namaste, mera naam ${this.name} hai.`);
  }
};

// Ek naya person object create karo, jismein name property hai.
const person1 = Object.create(personPrototype, {
  name: { value: 'Rahul' },
});

// Output: Namaste, mera naam Rahul hai.
person1.greeting();
```

Is example mein, humne `personPrototype` object ko prototype ke roop mein tayyar kiya hai. Fir `Object.create()` method ka upyog karke humne `person1` object ko `personPrototype` se inherit karne ke liye banaya hai. Ismein `name` ek optional property hai, jo humne `{ value: 'Rahul' }` ke roop mein define kiya hai.

Jab `person1.greeting()` method call hua, toh `this.name` ka value `"Rahul"` ho gaya aur output `"Namaste, mera naam Rahul hai."` aaya.

### what is difference between Inheritance and classes

Inheritance aur classes dono JavaScript mein programming concepts hain. Inheritance ka matlab hota hai ki ek object dusre object se kuchh properties ya methods inherit karta hai. Jabki Classes bahut saare objects ko define karne ke liye use ki jaati hai.

JavaScript mein inheritance ke liye prototype concept ka use kiya jaata hai. Ek object ka prototype dusre object se inherit kar sakta hai. Prototype chaining ke dwara, ek object ke prototype se uske parent object ka prototype tak pahuncha ja sakta hai.

Classes ke liye ES6 standard ne class keyword introduce kiya hai. Ye class JavaScript mein bhi ek constructor function hi hoti hai. Class ke andar properties aur methods define kiye jaate hain, jo object banane ke liye use kiye jaate hain.

Ab dekhte hain ek example se:

```
//Inheritance Example
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.printDetails = function() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
};

function Employee(name, age, salary) {
  Person.call(this, name, age);
  this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.printDetails = function() {
  console.log(`Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`);
};

let emp1 = new Employee('John', 30, 50000);
emp1.printDetails(); //Output: Name: John, Age: 30, Salary: 50000

//Classes Example
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }

  printDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`);
  }
}

let emp1 = new Employee('John', 30, 50000);
emp1.printDetails(); //Output: Name: John, Age: 30, Salary: 50000
```

Is example mein humne ek Person class banayi hai, jiske properties name aur age hain, aur ek printDetails method hai. Fir humne Employee class banai hai, jo Person class ko extend karti hai. Employee class ke andar bhi properties name aur age hain, saath hi salary property hai. Employee class ka printDetails method override kiya gaya hai, jisme name, age aur salary sabhi details print ho rahi hain.

Dono examples mein output same aa raha hai, lekin Inheritance example mein prototype chaining ki madad se inheritance kiya gaya hai, jabki Classes example mein ES6 standard ke class keyword ka use kiya gaya hai.

### how to Using constructor functions

Constructor functions are used in Javascript to create objects with predefined properties and methods. They are similar to classes in other languages.

constructor functions ko Javascript mein istemaal karne ke liye hum pehle ek function banate hain jismein hamari object ki properties aur methods define hote hain. Ismein hamari function ka naam capital letter se shuru hota hai taaki yeh ek constructor function ki tarah use ho sake.

Let's take an example of creating a person object using a constructor function:

```
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function() {
    console.log("Hello, my name is " + this.name);
  }
}

var person1 = new Person("John", 25);
var person2 = new Person("Mary", 30);

console.log(person1.name); // Output: John
console.log(person2.age); // Output: 30

person1.greet(); // Output: Hello, my name is John
```

In the above example, we have created a constructor function called `Person` which takes two parameters - name and age. Inside the function, we set the `name` and `age` properties of the object using `this`. We also define a `greet` method which logs a greeting message to the console.

To create a new object using the `Person` constructor function, we use the `new` keyword followed by the name of the function and the arguments for the constructor. In this case, we create two person objects - `person1` and `person2`.

We can access the properties of the object using dot notation (`person1.name`) and call the methods on the object (`person1.greet()`).

Using constructor functions allows us to create multiple instances of an object with the same properties and methods, and also provides a way to encapsulate the logic for creating an object.

### how to Using ES6 classes

ES6 classes are a way to create objects in JavaScript using the class syntax. The class keyword provides a more familiar syntax for defining object-oriented programming (OOP) constructs such as classes and inheritance.

Here's an example of how to use ES6 classes to create a Person class:

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person('John', 30);
person1.sayHello(); // Output: "Hello, my name is John and I am 30 years old."
```

In this example, we've defined a `Person` class with a constructor that takes `name` and `age` parameters. We've also added a `sayHello` method that logs a message to the console.

To create a new instance of the `Person` class, we use the `new` keyword and pass in arguments for the `name` and `age` parameters. We then call the `sayHello` method on the new object.

ES6 classes also allow us to extend a class to create a subclass. Here's an example of how to use inheritance to create a `Student` class that extends the `Person` class:

```
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I am in grade ${this.grade}.`);
  }
}

const student1 = new Student('Jane', 15, 10);
student1.sayHello(); // Output: "Hello, my name is Jane, I am 15 years old, and I am in grade 10."
```

In this example, we've defined a `Student` class that extends the `Person` class using the `extends` keyword. We've also added a `grade` property to the constructor and overridden the `sayHello` method to include the `grade`.

To call the `sayHello` method on the `Student` object, we create a new instance of the `Student` class and call the `sayHello` method on that object.

Overall, ES6 classes provide a cleaner and more intuitive syntax for creating objects and implementing inheritance in JavaScript.

### how to Using object.create in javascript?

`Object.create` ek JavaScript method hai jo aapko naye objects ko create karne me help karta hai. Yah method parent object ke properties and methods ko inherit karke new object banata hai.

Is method ka syntax yeh hota hai:

```
Object.create(parentObj, propertiesObject)
```

Yaha `parentObj` parameter vo object hai jisse aapki new object inheritance legi. Agar aap null denge to new object khali hoga.

`propertiesObject` parameter optional hai aur isse aap new object me additional properties or methods add kar sakte hai.

Ab example dekhte hai:

```javascript
// Parent object
const vehicle = {
  type: "vehicle",
  displayType: function () {
    console.log(`This is a ${this.type}.`);
  },
};

// Child object
const car = Object.create(vehicle, {
  type: {
    value: "car",
  },
});

car.displayType(); // Output: This is a car.
```

Yahan humne `vehicle` naam ka parent object banaya hai jisme ek `type` property hai aur `displayType` method hai.

Fir humne `Object.create()` method ka use karke `car` naam ka new object banaya hai jo `vehicle` object se inherit karega aur usme `type` property ki value "car" set ki gayi hai.

Finally, humne `displayType()` method call kiya jo `car` object ke type ko print karega.

I hope aapko samajh me aaya hoga ki `Object.create()` method kaise kaam karta hai aur iska use kaise kiya jata hai.

### expalin Encapsulation: Protected Properties and Methods

Encapsulation is a concept in object-oriented programming where the internal data and methods of an object are kept private and only accessible through public interfaces. In JavaScript, we can achieve encapsulation using the access modifiers: public, private, and protected.

Protected properties and methods are only accessible within the object itself and its subclasses. They cannot be accessed outside of the object. We can denote a property or method as protected by adding an underscore prefix to its name.

For example, let's say we have a class called `Person` with a protected property called `_name` and a protected method called `_sayHello()`:

```
class Person {
  constructor(name) {
    this._name = name;
  }

  _sayHello() {
    console.log(`Hello, my name is ${this._name}.`);
  }
}
```

In this example, `_name` and `_sayHello()` are both protected. We can create a subclass of `Person` called `Employee` that can access these protected members:

```
class Employee extends Person {
  constructor(name, title) {
    super(name);
    this._title = title;
  }

  introduce() {
    this._sayHello();
    console.log(`I'm a(n) ${this._title}.`);
  }
}
```

In this example, `Employee` is a subclass of `Person` and can access the protected `_name` property and `_sayHello()` method. The `introduce()` method uses `_sayHello()` to introduce the employee and then displays their job title.

To summarize, encapsulation is the idea of keeping internal data and methods private and only accessible through public interfaces. We can use the protected access modifier in JavaScript to make certain properties and methods only accessible within an object and its subclasses.

### explain Encapsulation: Private Class Fields and Methods

Encapsulation refers to the practice of keeping certain parts of an object or class hidden from the outside world, while exposing only a limited set of methods and properties for interaction.

In JavaScript, this can be achieved through the use of private class fields and methods. Private fields are data members that can only be accessed within the class that defines them, while private methods are functions that can only be called from within the class.

Suppose you have a class called BankAccount that represents a user's bank account. It has properties like the account holder's name, account number, and balance. You don't want anyone to be able to directly modify these properties from outside the class, as it could lead to security issues. Instead, you want to provide a limited set of methods that users can use to interact with the account, such as deposit(), withdraw(), and checkBalance().

To achieve this, you can use private class fields and methods. For example, you can define the balance property as a private field by prefixing it with a # symbol:

```
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log("Insufficient funds!");
    }
  }

  checkBalance() {
    console.log(`Current balance: ${this.#balance}`);
  }
}
```

In this example, the #balance field is only accessible within the BankAccount class. Users can interact with the account by calling the public methods deposit(), withdraw(), and checkBalance(), but they cannot directly access or modify the balance field.

Using encapsulation in this way helps to keep your code organized and secure. It allows you to control how users interact with your objects and prevents them from accidentally or intentionally modifying data they shouldn't have access to.

### what is Chaining methods

Chaining methods in JavaScript is a technique that allows you to call multiple methods on the same object in a single line of code. When chaining methods, each method returns the object itself, allowing you to call another method on it. This can help make your code more concise and readable.

For example, let's say we have an array of numbers and we want to filter out all the even numbers, then square each remaining number, and finally get their sum. We can achieve this using chaining methods as follows:

```
const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .filter(num => num % 2 !== 0) // filter out even numbers
  .map(num => num ** 2) // square each remaining number
  .reduce((total, num) => total + num, 0); // get their sum

console.log(result); // Output: 35
```

In this example, we first call the `filter()` method on the `numbers` array to filter out all the even numbers, which returns a new array containing only the odd numbers. Then, we call the `map()` method on this filtered array to square each remaining number, which returns another new array with the squared numbers. Finally, we call the `reduce()` method on this mapped array to get their sum, which is stored in the `result` variable.
