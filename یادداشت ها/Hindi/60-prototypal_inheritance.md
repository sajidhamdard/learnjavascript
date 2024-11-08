JavaScript me classical inheritance ni hota hai jisme parent ek class hoti hai. Iske bjay JavaScript prototypal inheritance use krti hai.

### Prototypal Inheritance:

Prototypal inheritance me object ka parent prototype hota hai. Javascript object ki ek hidden property prototype hoti hai. Yeh prototype property ya to null hoti hai ya fir kisi dusre object ko refer krti hai.
Ek object ki sirf ek hi prototype property ho skti hai

Why do we use prototypal inheritance and what are the benefits of using it? : Prototypal inheritance me object ka parent prototype object hota hai. Is prototype object me common properties and functions add kr skte hain. Jinhe ki sare objects use kr skte hain.

- Prototypal inheritance 3 ways se kr skte hain:

  1. Constructor function
  2. ES6 classes
  3. Object.create

### Constructor function:

Constructor function ek normal function ki trah hi hota hai lekin is function me kuch chize extra hoti hain.

Is function ko call krte time new keyword ka use krte hain. new keyword lgane se ek new object create ho jata hai. Aur is object me properties ki value assign krne ke lie constructor function me this keyword ka use hota
hai.

- for example:

```
const Person = function (name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
};

const sajid = new Person("Sajid", 31, "Jhotwara, Jaipur");
```

ek constructor function se hm kitne b objects create kr skte hain. Ek new object bnane ke lie firse new keyword ka use krna pdega. for example:

```
 const afzal = new Person("Afzal", 28, "Sikar");
```

Jab b hm constructor function se object bnate hain to prototype chain automatically bn jati hain. Agar hume ise verify krna hai to console me object ko print karvane ke bad expand krke dekh skte hain.

object (individual properties and functions)
prototype (common properties and functions)
prototype (JavaScript predefined properties and functions)

### What is Prototype chain?:

Created object ka parent ek Prototype object hota hai. Vah is prototype object ka parent b ek Prototype object hota hai. Jb b hm koi method call krte hain ya property use krte hain to vah property/function ko prototype object me search kia jata hai. Agar vah function/property prototype object me ni milti hai to error throw hoti hai.

### How to add common properties and functions in a prototype:

Iske 2 ways hai. Ek to hm direct constructor function ke prototype me add kr skte hain and dusra tarika ye hai ki object ki **proto** property use kr skte hain

\_proto\_\_ property outdated ho chuki hai islie hume ise use ni krna chahiye. Iski jgah hm Object.getPrototypeOf/Object.setPrototypeOf use kr skte hain.

```
 Person.prototype.pincode = 302012; //first tarika
   sajid.__proto__.pincode = 302012; //Dusra tarika
```

Isi trah se hm kisi b prototype me ek function b add kr skte hain.

- for example:

```
 Person.prototype.getAddress = function () {
       return this.address;
   };
   const sajid = new Person("Sajid", 31, "Jhotwara, Jaipur");
   console.log(sajid.getAddress());
```

### ES6 classes:

ES6 classes constructor function ko different tarike se likhne ka way provide krata hai. But ES6 classes internally (behind the scene) costructor function hi use krta hain. Ye modern tarika hai hai constructor function ko class ki form me likhne ka

- for example:

```
class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

const sajid = new Person("Sajid", 31, "Jhotwara, Jaipur");
console.log(sajid);
```

Yadi hume kisi class ke prototype me koi function/property add krna hai to constructor se bahar add kr skte hain. Vah automatically prototype me add ho jayega.

- For example:

```
 class Person {
      constructor(name, age, address) {
       this.name = name;
         this.age = age;
          this.address = address;
      }
      getAddress() {
          return this.address; //Will be part of prototype object
      }
  }

```

### Object.create:

Object create function new object create krne ke kaam aata hai. create function ko hm ek object pass kr skte hain aur vah object create ho jayega aur uski prototype chain b automatically bn jayegi.

Yadi hm object ni bnana chahte hai aur proerties bad me set krna chahte hai to create function ko ek empty object pass krna pdega.

- For example:

```
const Person = Object.create(); //Error
 console.log(Person);

```

- Another example:

```
const Person = Object.create({});
  Person.name = "Sajid";
   Person.age = 31;
    Person.address = "Jhotwara, Jaipur";
  console.log(Person); //Person object me prototype chain automatically create ho jayegi.

```
