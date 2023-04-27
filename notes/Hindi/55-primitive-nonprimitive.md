### what is Primitive vs Object

JavaScript में, Primitive डेटा टाइप्स उन जानकारियों को दर्शाते हैं जो सबसे आसानी से होल्ड होती हैं और वे Immutable होते हैं ( अर्थात परिवर्तन योग्य नहीं होते हैं।) जबकि Objects डेटा टाइप्स उन जानकारियों को दर्शाते हैं जो अधिक जटिल होती हैं और mutable होती हैं ( अर्थात परिवर्तन योग्य होती हैं।)

Primitive डेटा टाइप्स में 5 विभिन्न टाइप्स होते हैं: Strings, Numbers, Booleans, null और undefined.

example

```
let name = "John"; //String
let age = 30; //Number
let isStudent = true; //Boolean
let job = null; //null
let pet; //undefined
```

Objects डेटा टाइप्स अनेक key-value pairs को सामने रखते हैं, जो की properties कहलाते हैं। Objects बनाने के लिए, { } विशेषकों में कुछ values दर्ज करने से एक नया object बनता है।

example

```
let person = {
  name: "John",
  age: 30,
  isStudent: true
};
```

इसमें, "person" एक Object है जिसके अंदर "name", "age", और "isStudent" properties हैं।आप इस प्रकार भी एक नया property add कर सकते हैं:

```
person.job = "developer";
```

इससे, "person" object के अंदर एक नया property ("job") add हो गया है।

### what is Understanding of how primitive and non-primitives are stored in memory

Primitive data types in JavaScript are stored directly in memory, whereas non-primitive data types are stored by reference.

Primitive data types include strings, numbers, booleans, null, and undefined. When a primitive value is assigned to a variable, the actual value is stored in memory at that variable's location. For example:

```
let name = "John";
let age = 25;
let isMarried = true;
```

In this code snippet, the variables `name`, `age`, and `isMarried` are all primitive data types. The string "John" is stored at the memory location for the variable `name`, the number 25 is stored at the memory location for the variable `age`, and the boolean value `true` is stored at the memory location for the variable `isMarried`.

Non-primitive data types include objects, arrays, and functions. When a non-primitive value is assigned to a variable, only the reference to the memory location where the value is stored is stored in that variable. For example:

```
let person = { name: "John", age: 25 };
let numbers = [1, 2, 3, 4];
```

In this code snippet, the variable `person` is an object and the variable `numbers` is an array, both of which are non-primitive data types. When these values are assigned to their respective variables, only a reference to the memory location where the values are stored is stored in those variables.

To illustrate this concept, let's say we create another variable `anotherPerson` and assign it the value of `person`:

```
let anotherPerson = person;
```

Now, if we change the `name` property of `anotherPerson`, it will also change the `name` property of `person`. This is because both variables hold a reference to the same memory location where the object `{ name: "John", age: 25 }` is stored, so any changes made to one variable will be reflected in the other variable as well:

```
anotherPerson.name = "Jane";
console.log(person.name); // Output: Jane
```

In summary, primitive data types in JavaScript are stored directly in memory, while non-primitive data types are stored by reference to their memory location. This means that when non-primitive values are assigned to variables, only a reference to the memory location where the value is stored is stored in that variable, not the value itself.

### How to Copy object? Shallow copy and deep copy

Object copy refers to creating a new object with the same values as an existing object. In JavaScript, there are two types of copying methods: Shallow Copy and Deep Copy.

Shallow Copy:
A Shallow copy only creates a new object but does not duplicate the nested objects. Instead, it creates a reference to the nested objects in the original object. Therefore, any changes made to the nested objects will be reflected in both the original and copied objects. We use the Object.assign() method to create a shallow copy.

Let's take an example to understand this better:

```
// Original object
const originalObj = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    state: "NY"
  }
};

// Shallow copy of original object
const copiedObj = Object.assign({}, originalObj);

// Modifying the nested object in the copied object
copiedObj.address.city = "Los Angeles";

console.log(copiedObj);
// Output: {name: "John", age: 30, address: {city: "Los Angeles", state: "NY"}}

console.log(originalObj);
// Output: {name: "John", age: 30, address: {city: "Los Angeles", state: "NY"}}
```

As you can see, even though we modified the nested object in the copied object, the changes also got reflected in the original object.

Deep Copy:
A Deep copy creates a completely independent clone of the original object, including all the nested objects. Therefore, any changes made to the nested objects in the copied object will not affect the original object. We can use the JSON.parse() and JSON.stringify() methods to create a deep copy.

Let's take an example to understand this better:

```
// Original object
const originalObj = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    state: "NY"
  }
};

// Deep copy of original object
const copiedObj = JSON.parse(JSON.stringify(originalObj));

// Modifying the nested object in the copied object
copiedObj.address.city = "Los Angeles";

console.log(copiedObj);
// Output: {name: "John", age: 30, address: {city: "Los Angeles", state: "NY"}}

console.log(originalObj);
// Output: {name: "John", age: 30, address: {city: "New York", state: "NY"}}
```

As you can see, even though we modified the nested object in the copied object, the changes did not get reflected in the original object.
