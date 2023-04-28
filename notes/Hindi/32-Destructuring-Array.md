### destructuring and destructuring Arrays

Destructuring refers to a technique in which we can extract values from arrays or objects and assign them to variables in a more concise manner.

To destructure an array, we use square brackets [] and assign each variable name to the corresponding value at the same position in the array.

For example:

```
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a); // output: 1
console.log(b); // output: 2
console.log(c); // output: 3
```

In the above example, we first declared an array called `arr` with three values. Then, we used destructuring to assign the first value of the array to the variable `a`, the second value to variable `b`, and the third value to variable `c`. When we log each variable, we get the corresponding value from the array.

Destructuring ka matlab hota hai ki hum ek array ke values ko variables mein assign kar sakte hain ek concise tareeke se. Iske liye hum square brackets [] ka istemaal karte hain aur har variable ka naam uss value se assign karte hain jo array mein uski position ke corresponding hai.

example ke liye:

```
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a); // output: 1
console.log(b); // output: 2
console.log(c); // output: 3
```

Upar ke example mein, humne pehle ek array `arr` declare kiya jismein teen values hain. Fir humne destructuring ka istemaal karke pehli value ko variable `a`, dusri value ko variable `b`, aur teesri value ko variable `c` mein assign kiya. Jab hum har variable ka output log karte hain, toh humein corresponding array ke value mil jaata hai.

### reverse values using destructuring

Destructuring in JavaScript is a way to extract values from objects and arrays into separate variables. To reverse values using destructuring in JavaScript, you can use the array destructuring syntax along with the `reverse()` method.

Here's an example code snippet that demonstrates how to reverse values using destructuring in JavaScript:

```
// Original array
const numbers = [1, 2, 3, 4, 5];

// Reverse values using destructuring
let [a, b, c, d, e] = numbers.reverse();

// Output reversed values
console.log(e, d, c, b, a);
```

yadi aap kisi array ke values ko reverse karna chahte hai to aap JavaScript mein destructuring ka use kar sakte hai. Iske liye aap array destructuring syntax aur `reverse()` method ka use kar sakte hai. Jaisa ki humne upar ke example mein dekha, hum ek numbers array se shuruwat karte hai aur fir usse reverse karke alag alag variables `a`, `b`, `c`, `d`, aur `e` mein assign karte hai. Ant mein, hum reversed values ko log karke output karte hai.

### How to return two values from function

Function se do values return karne ke liye aap ek tuple (ट्यूपल) bana sakte hai jo multiple values ko store karta hai. Isme aap ek se zyada values ko comma (,) separated brackets mein daal sakte hai.

Yaha ek example di gayi hai Python language mein:

```python
def calculate(a, b):
    sum = a + b
    diff = a - b
    return sum, diff

result = calculate(5, 3)
print(result)
```

Iss code mein `calculate()` function `a` aur `b` ke sum aur difference ko calculate karke ek tuple mein return karta hai. Fir `result` variable mein iss tuple ko assign kiya jata hai aur print kiya jata hai. Output niche diya gaya hai:

```python
(8, 2)
```

Jaise ki aap dekh sakte hai, `result` tuple mein dono values `sum` aur `diff` available hai. Aap inhe separate variables mein assign kar sakte hai bhi:

```python
s, d = result
print(s)
print(d)
```

Output:

```python
8
2
```

Iss tarah se aap ek se zyada values ko return kar sakte hai function se.

### Destructure a nested array

Destructuring a nested array in JavaScript means extracting values from an array that is itself nested inside another array. This can be done using the square bracket syntax ([ ]) and assigning variable names to each of the values being extracted.

Let's take an example:

```javascript
const arr = [1, 2, [3, 4]];
const [a, b, [c, d]] = arr;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
console.log(d); // Output: 4
```

In the above example, we have an array `arr` which contains three elements - `1`, `2`, and another array `[3, 4]`. We want to extract each value and assign it to a separate variable, so we use destructuring syntax to do so.

We declare variables `a`, `b`, `c` and `d` and assign them the values of `arr[0]`, `arr[1]`, `arr[2][0]` and `arr[2][1]` respectively.

So `a` will be assigned `1`, `b` will be assigned `2`, `c` will be assigned `3` and `d` will be assigned `4`.

imagine an array as a box containing smaller boxes inside it. The outermost box represents the main array and the smaller boxes inside it represent the nested arrays. To extract the contents of the nested boxes, we need to open each one and take out what's inside. Similarly, in JavaScript, we use destructuring to extract the values from the nested array by assigning them to separate variables.

### How to set default values in destructuring

Destructuring in JavaScript is a way to extract values from objects or arrays and assign them to variables. It allows you to write less code and make it more readable.

To set default values in destructuring, you can use the "default value" syntax. This syntax allows you to specify a default value for a variable if the value extracted from the object or array is undefined.

Here's an example:

```
// Object Destructuring with Default Values
const { name = 'Anonymous', age = 18 } = { name: 'John' };
console.log(name); // Output: John
console.log(age); // Output: 18

// Array Destructuring with Default Values
const [fruit = 'apple', vegetable = 'carrot'] = ['banana'];
console.log(fruit); // Output: banana
console.log(vegetable); // Output: carrot
```

In the above example, we are using object and array destructuring with default values. In object destructuring, we are extracting the values of "name" and "age" from an object. If "name" is not defined in the object, then the default value "Anonymous" will be used. Similarly, if "age" is not defined, then the default value "18" will be used.

In array destructuring, we are extracting the values of "fruit" and "vegetable" from an array. If "fruit" is not defined in the array, then the default value "apple" will be used. Similarly, if "vegetable" is not defined, then the default value "carrot" will be used.

Hope that helps!

### destructuring Objects

Destructuring objects in JavaScript is a way to extract individual properties or values from an object and assign them to variables in a more concise manner. It allows you to destructure (or break apart) an object into smaller pieces, which can be useful when you need to work with only certain parts of an object.

For example, let's say we have an object `person` with properties `name`, `age`, and `city`. We can use destructuring to extract these properties into separate variables like so:

```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

const { name, age, city } = person;

console.log(name); // Output: John
console.log(age); // Output: 30
console.log(city); // Output: New York
```

In the above code, we used the curly braces `{}` to create a variable for each property we want to extract from the `person` object. The variable names correspond with the property names, and their values are assigned accordingly.

We could also rename the variables using colon `:` syntax like this:

```javascript
const { name: fullName, age: personAge, city: homeCity } = person;

console.log(fullName); // Output: John
console.log(personAge); // Output: 30
console.log(homeCity); // Output: New York
```

In this case, we've renamed the extracted properties to `fullName`, `personAge`, and `homeCity`.

Destructuring can also be used to extract nested properties. For example:

```javascript
const user = {
  id: 1,
  name: "Joe",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
};

const {
  name,
  address: { city },
} = user;

console.log(name); // Output: Joe
console.log(city); // Output: Anytown
```

In this example, we've extracted the `name` property and the `city` property from the nested `address` object.

Overall, destructuring objects is a useful feature in JavaScript that can simplify your code by allowing you to extract properties from an object in a more concise way.

### How to extract any value from object using destructring

Destructuring in JavaScript is a way to extract values from objects or arrays and assign them to variables. To extract a value from an object, you can use the following syntax:

```
const { key } = object;
```

Here, `key` is the property you want to extract and `object` is the object that contains the property.

For example, suppose you have an object `person` like this:

```javascript
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
};
```

To extract the `name` property of the `person` object, you can use destructuring like this:

```javascript
const { name } = person;
console.log(name); // Output: John
```

You can also extract nested properties using destructuring. For example, to extract the `city` property of the `address` object inside the `person` object, you can do this:

```javascript
const {
  address: { city },
} = person;
console.log(city); // Output: New York
```

In this case, the `{ address: { city } }` syntax is used to extract the `city` property from the `address` object inside the `person` object.

Destructuring is a powerful feature in JavaScript that allows you to write more concise and readable code. By extracting values from objects and assigning them to variables, you can avoid cluttering your code with long object references and make it easier to work with complex data structures.

### How to rename Object property name in destrcutring

Destructuring allows you to extract values from an object and assign them to variables. In JavaScript, if you want to rename a property while destructuring, you can use the colon ':' syntax.

Example:
Suppose we have an object `person` with properties `name`, `age`, and `gender`. We want to rename the property `gender` to `sex` while destructuring the object.

```
const person = {
  name: "John",
  age: 30,
  gender: "male"
};

// destructuring with property renaming
const { name, age, gender: sex } = person;

console.log(name); // output: John
console.log(age); // output: 30
console.log(sex); // output: male
```

In the above example, we used the colon ':' syntax to rename the `gender` property as `sex`. Now, `sex` variable will contain the value of `gender` property from `person` object.

Hinglish Explanation:

Destructuring se hum object ke properties ko variables mein assign kar sakte hai. Agar aap property ka naam change karna chahte hai to aap colon ':' syntax ka use kar sakte hai. Iske liye hum ek example lete hai - Suppose humare paas `person` naam ka object hai jisme `name`, `age` aur `gender` properties hai. Hum chahte hai ki `gender` property ka naam `sex` ho jaaye jab hum object ko destructuring karte hai. Aise karne ke liye, hum colon ':' syntax ka use karenge.

example:

```
const person = {
  name: "John",
  age: 30,
  gender: "male"
};

// destructuring with property renaming
const { name, age, gender: sex } = person;

console.log(name); // output: John
console.log(age); // output: 30
console.log(sex); // output: male
```

Upar diye gaye example mein humne colon ':' syntax ka use karke `gender` property ka naam `sex` kar diya hai. Ab `sex` variable `person` object ki `gender` property ke value ko store karega.

### Setting Default values in destructuring in javascript

Destructuring is a feature introduced in ES6 (ECMAScript 2015) that allows developers to extract data from arrays, objects and assign them to variables in a concise syntax. Default values in destructuring allow you to provide a fallback value in case the extracted value is undefined or null. Let's understand this with an example:

```javascript
// Without default values
const person = { name: "John", age: 30 };
const { name, occupation } = person;

console.log(name); // "John"
console.log(occupation); // undefined

// With default values
const person = { name: "John", age: 30 };
const { name, occupation = "unemployed" } = person;

console.log(name); // "John"
console.log(occupation); // "unemployed"
```

In the above example, we are destructuring the `person` object and extracting the `name` and `occupation` properties. Since the `occupation` property does not exist in the `person` object, its value is assigned `undefined`. In the second example, we have provided a default value for the `occupation` property as `"unemployed"`, which will be used in case the extracted value is `undefined`.

The syntax for providing default values in destructuring is to use the `=` operator followed by the desired default value, as shown below:

```javascript
const { variableName = defaultValue } = objectName;
```

we can say that setting default values in destructuring allows us to provide a backup value if the extracted value from an object or array is not present, similar to how we keep a backup plan in case our original plan fails.

### Destructuring of Nested Object

Destructuring of nested objects in JavaScript means extracting values from an object and assigning them to variables in a more concise way. This technique can be used to access deeply nested properties of an object.

For example, let's say we have an object `person` with nested properties like this:

```
const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    state: "NY",
    zip: "10001"
  }
};
```

If we want to extract the values of `city`, `state`, and `zip` properties of `address` object, we can use destructuring like this:

```
const { name, age, address: { city, state, zip } } = person;
```

This will create new variables `name`, `age`, `city`, `state`, and `zip`, and assign the corresponding values from the `person` object.

Here's what each part of the destructuring syntax means:

- `{ name, age, address: { city, state, zip } }` is the pattern that specifies which properties we want to extract from the `person` object.
- `name` and `age` are simple properties that we extract directly.
- `address: { city, state, zip }` is a nested pattern that specifies that we want to extract the `city`, `state`, and `zip` properties of the `address` object.

We can then use these variables as needed:

```
console.log(name); // "John"
console.log(age); // 30
console.log(city); // "New York"
console.log(state); // "NY"
console.log(zip); // "10001"
```

Destructuring of nested objects can be a powerful tool for working with complex data structures in JavaScript.

### How to use destrcutring in Function

Destructuring का उपयोग javascript में विभिन्न तरीकों से किया जाता है, इसमें हम एक फंक्शन के पैरामीटर में डिफॉल्ट वैल्यूज और विभिन्न प्रकार की डेटा संरचनाओं (data structures) को बहुत सरल तरीके से अनपैक (unpack) करते हैं।

example

```
function printUserDetails({name, age, location}) {
   console.log(`Name: ${name}, Age: ${age}, Location: ${location}`);
}

const user = { name: 'John', age: 30, location: 'New York' };

printUserDetails(user);
```

इस उदाहरण में, हमने `printUserDetails` नामक एक फंक्शन बनाया है जो एक object के properties को डिस्ट्रक्चर इस्तेमाल करके अनपैक करता है। फंक्शन के पैरामीटर में हमने एक object जिसके properties `name`, `age`, और `location` को डिस्ट्रक्चरिंग से अलग-अलग वेरिएबल में अनपैक कर लिया है।

आखिर में, हमने `user` नामक एक object बनाया जिसमें उपयोगकर्ता का नाम, उम्र और स्थान हैं और इस object को `printUserDetails` फंक्शन में पास कर दिया है।

फंक्शन को कॉल करने पर, फंक्शन पैरामीटर में अनपैक किए गए वेरिएबल की मदद से उपयोगकर्ता की जानकारी को प्रिंट करता है।

इस तरह, डिस्ट्रक्चरिंग का उपयोग करके, हम फंक्शन पैरामीटर में विभिन्न डेटा संरचनाओं (data structures) को आसानी से अनपैक कर सकते हैं।
