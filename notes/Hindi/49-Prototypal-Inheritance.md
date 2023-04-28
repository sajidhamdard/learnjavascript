### what is Prototypal inheritance and prototype chain

Prototypal Inheritance एक तरीका है जिससे JavaScript में एक Object से दूसरे Object को inherit किया जाता है।

जब आप एक Object को create करते हैं, तो उस Object के पास एक prototype link होता है, जिससे वह अन्य Objects से properties एवं methods inherit करता है। इस prototype link को Prototype Chain कहा जाता है।

जैसे कि, आप निम्नलिखित कोड का उपयोग करके Object को create कर सकते हैं।

```
// parent object
var person = {
  name: 'John Doe',
  greet: function() {
    console.log('Hello, my name is ' + this.name);
  }
};

// child object
var employee = Object.create(person);
employee.id = 123;
employee.getEmployeeDetails = function() {
  console.log('ID: ' + this.id);
  this.greet();
};

employee.getEmployeeDetails(); // ID: 123, Hello, my name is John Doe
```

इस code में, `person` Object में `name` property एवं `greet()` method होते हैं। `employee` Object में `id` property एवं `getEmployeeDetails()` method होते हैं। `employee` Object एक child object है, जो कि `person` Object से inherit किया गया है।

जब `getEmployeeDetails()` method को call किया जाता है, तो `this.greet()` line द्वारा `greet()` method भी call किया जाता है। इसके लिए, JavaScript runtime `employee` Object पर search करता है, फिर उसके prototype link के माध्यम से `person` Object पर search करता है, जहां `greet()` method मौजूद होता है। इस रूप में, `employee` Object `person` Object से properties एवं methods inherit करता है, और यह Prototype Chain के माध्यम से होता है।

### what is Prototypal inheritance on Built-in objects

Prototypal inheritance in JavaScript refers to the mechanism by which objects can inherit properties and methods from other objects, known as their prototypes. In JavaScript, every object has a prototype, which acts as a template for that object's properties and methods.

Let's take an example of a built-in object in JavaScript, the Array object. Suppose we want to create a new array that has some additional methods beyond those provided by the built-in Array object. We can do this by creating a new object that inherits from Array's prototype.

Here's an example:

```
// Define our custom object
const myArray = Object.create(Array.prototype);

// Add a custom method to our object
myArray.customMethod = function() {
  console.log('This is a custom method.');
};

// Use our custom method
myArray.customMethod(); // Output: "This is a custom method."
```

In this example, we create a new object called `myArray` using the `Object.create()` method, passing in the `Array.prototype` object as its prototype. This means that `myArray` will inherit all of the properties and methods of `Array.prototype`.

We then add a custom method to `myArray` using dot notation, just like any other object in JavaScript. Finally, we call our custom method on `myArray` and it outputs the expected message.

Overall, prototypal inheritance is a powerful feature in JavaScript that allows us to create new objects that inherit properties and methods from existing objects, making our code more efficient and easier to maintain.

### what is Difference between Inheritance and classes

Inheritance और Classes दोनों JavaScript में Object-Oriented Programming (OOP) के भिन्न पहलुओं हैं।

Classes, जैसा कि नाम से पता चलता है, एक बनावट हैं जो एक नया Object बनाने के लिए उपयोग होती है। क्लास में आमतौर पर constructor फ़ंक्शन, method और properties होते हैं। निम्नलिखित उदाहरण में, हम क्लास बनाते हैं जिसका नाम Car होता है जिसमें मॉडल, रंग और स्पीड के लिए Properties और start, stop और drive के लिए methods होते हैं।

example

```
class Car {
  constructor(model, color, speed) {
    this.model = model;
    this.color = color;
    this.speed = speed;
  }

  start() {
    console.log("Starting the car...");
  }

  stop() {
    console.log("Stopping the car...")
  }

  drive() {
    console.log(`Driving the ${this.color} ${this.model} at ${this.speed} mph`);
  }
}

const myCar = new Car("Tesla", "Red", 100);
myCar.start(); // Starting the car...
myCar.drive(); // Driving the Red Tesla at 100 mph
```

Inheritance में, एक Class को दूसरी Class से inherit किया जाता है और उसकी Properties और methods को उस class के objects में उपलब्ध कराया जाता है। जब हम एक Class को inherit करते हैं, तो नई Class parent Class की सभी Properties और methods को इंहेरिट करती है और उन्हें override भी कर सकती है। निम्नलिखित उदाहरण में, हम Car class को extend करते हुए ElectricCar class बनाते हैं। ElectricCar class में नई Property battery को add किया गया है और drive method को override किया गया है।

example

```
class ElectricCar extends Car {
  constructor(model, color, speed, battery) {
    super(model, color, speed); // Calling parent constructor
    this.battery = battery;
  }

  drive() {
    console.log(`Driving the ${this.color} ${this.model} at ${this.speed} mph using the electric motor`);
  }
}

const myElectricCar = new ElectricCar("Tesla", "Red", 100, "Lithium-ion");
myElectricCar.start(); // Starting the car...
myElectricCar.drive(); // Driving the Red Tesla at 100 mph using the electric motor
```

इस उदाहरण में, ElectricCar ने Car class को inherit किया है और उसकी Properties जैसे model, color और speed को भी inherit कर लिया है जो कि उस Class के Objects में उपलब्ध हैं। इसके अलावा, ElectricCar class में एक नई Property battery को add किया गया है और drive method को override किया ग

### How to use constructor functions ? Explain in detail with example and in Hinglish language.

Constructor functions ka upyog hum new keyword ke saath object banane ke liye karte hai. Ye ek special type ki function hoti hai jo hume class-based programming mei constructor ke taur par use ki jaati hai.

A constructor function ka naam hamesha capital letter se shuru hota hai, jisse wo aasani se distinguish ho sake. Jab hum ise call karte hai to ye ek naya object bana deta hai aur usko return kar deta hai.

example

```javascript
// Constructor function definition
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Creating a new object using the constructor function
var myCar = new Car("Honda", "Civic", 2010);

// Accessing object properties
console.log(myCar.make); // Output: Honda
console.log(myCar.model); // Output: Civic
console.log(myCar.year); // Output: 2010
```

Is example me humne `Car` naam ka ek constructor function define kiya hai. Ismein humne teen parameters `make`, `model`, aur `year` liye hai. Jab hum object create karenge to hum in teeno properties ko set kar payenge.

Phir humne `new` keyword ka use kiya hai jisse ki humne ek naya object `myCar` banaya hai. Is object ke andar `Car` constructor function ke property `make`, `model`, aur `year` ki values store ho gayi hai.

Last mein humne console par `myCar` ke alag alag properties ko access kiya hai.
