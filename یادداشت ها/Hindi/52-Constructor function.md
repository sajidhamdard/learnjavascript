### what is Constructor function

Constructor function JavaScript mein ek special type ka function hai jo object create karne ke liye use kiya jaata hai. Isko hum class jaise consider karte hai, kyunki isse bhi hum multiple objects create kar sakte hai.

Ek Constructor function ko define karne ke liye hum function keyword ke saath ek naam specify karte hai, aur usmein properties or methods define karte hai. Saath hi, jab hum constructor function ko call karte hai toh ye ek new object create karta hai.

Example ke taur par, agar hum ek Car object create karna chahte hai, toh hum aisa kar sakte hai:

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.make); // Output: Toyota
```

Is example mein, humne `Car` constructor function ko define kiya hai jismein `make`, `model`, aur `year` properties hain. Fir humne `new` keyword ka use karke ek naya Car object create kiya hai, jiska make `'Toyota'`, model `'Corolla'`, aur year `2020` hai.

hum keh sakte hai ki Constructor function ek template hai jisko hum use karke multiple objects create kar sakte hai. Ye ek blueprint ki tarah hota hai jismein hum properties and methods define karte hai jo har object ke liye same hote hai.

### what is new keyword

`new` एक JavaScript की keyword है जो object के instance को create करने के लिए use किया जाता है। जब हम `new` keyword का use करते हैं तो एक नया object create होता है जो class या constructor function से बना होता है।

इसके लिए, हमें एक constructor function बनानी होती है जो नया object create करती है। उसके बाद, हम `new` keyword का use करते हुए उस constructor function को call करते हैं। इस प्रकार, नया object create होता है और उसे variable में assign किया जाता है।

example

```javascript
// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Creating object using new keyword
const person1 = new Person("John", 25);
console.log(person1); // Output: {name: "John", age: 25}
```

जैसा कि ऊपर दिखाया गया है, हमने `Person` constructor function create किया जो `name` और `age` property के साथ एक object create करता है। फिर हम `new` keyword का use करते हुए `Person` constructor function को call करते हैं और नया object `person1` create करते हैं।
