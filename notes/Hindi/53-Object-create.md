### How to use Object.create

Object.create() ek JavaScript function hai jo ek naya object create karne me help karta hai. Yeh function do parameters leta hai: prototype aur propertiesObject.

Prototype parameter ke through aap specify kar sakte hai ki aapka naya object kis prototype se inherit karega. Prototype ek existing object ho sakta hai jiska aap clone banana chahte hai.

PropertiesObject parameter optional hai aur ismein aap apne naye object ke property aur unki values set kar sakte hai.

example

```
// Create a person object as prototype
const person = {
  greeting: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

// Create a new object using person as prototype
const john = Object.create(person);

// Set properties of john object
john.name = 'John';
john.age = 30;

// Call the method of john object
john.greeting(); // Output: Hello, my name is John
```

Is example mein humne ek `person` object create kiya jiska `greeting` method hai. Fir humne `Object.create()` function ka use karke ek naya object `john` create kiya jiske prototype ke roop mein `person` object set kiya gaya hai. Ab humne `john` object ke properties set kiye jaise ki `name` aur `age`, fir `greeting()` method ko call kiya jisne apna output `"Hello, my name is John"` diya.
