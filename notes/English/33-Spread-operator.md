### What is The Spread Operator ?

The Spread Operator in JavaScript is denoted by three consecutive dots (…) and it allows an iterable (like an array or a string) to be expanded into individual elements. 

For example, consider the following code snippet:

```
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]
```

Here, the spread operator is used to concatenate the arrays `arr1` and `arr2` into a new array `arr3`. The resulting output is `[1, 2, 3, 4, 5, 6]`. 

Similarly, we can also use the spread operator to add elements to an existing array or pass an array as arguments to a function.


### How to assign values using spread operator ?

To assign values in JavaScript using the spread operator, you can use the spread syntax (...) to create a new array, object or function that includes all the elements of an existing array, object or function, plus additional elements.

Here's an example of how to use spread operator to assign values in JavaScript:

1. Assigning values in array:
```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6]; //assigning new values using spread operator
console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]
```

2. Assigning values in object:
```javascript
const obj1 = {a: 1, b: 2};
const obj2 = {...obj1, c: 3, d: 4}; // assigning new values using spread operator
console.log(obj2); // Output: {a: 1, b: 2, c: 3, d: 4}
```

3. Assigning values in function:
```javascript
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); //assigning values using spread operator
// Output: 6
```
In the above example, we used the spread operator to pass the `numbers` array as arguments to the `sum()` function. The spread operator expands the array into individual values, which are then passed as arguments to the function.


### How to copy Array spread operator?

To copy an array in JavaScript using the spread operator, you can simply use the spread operator followed by the variable name of the array that you want to copy. Here's an example:

```javascript
const originalArray = [1, 2, 3, 4];
const copiedArray = [...originalArray];

console.log(originalArray); // Output: [1, 2, 3, 4]
console.log(copiedArray); // Output: [1, 2, 3, 4]
```

In this example, we first create an array called `originalArray` with four elements. We then use the spread operator (`...`) to create a new array called `copiedArray`, which has all the elements of the `originalArray`.

Note that when using the spread operator to copy an array, it creates a shallow copy, meaning that any nested objects or arrays within the original array will not be copied but rather referenced to the same memory location.


### How to Join 2 Arrays using spread operator ?

To join two arrays in JavaScript using the spread operator, you can simply place the spread operator (...) in front of each array variable separated by a comma inside a new array literal ([]). Here's an example:

```
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
```

In the above example, we create two arrays `arr1` and `arr2`. We then use the spread operator to combine them into a new array `combinedArray`. Finally, we log the contents of the `combinedArray` using `console.log()`.


### How to convert String to array using spread ?

To convert a string to an array using the spread syntax in JavaScript, you can use the `split()` method along with the spread operator (`...`) to split the string into individual characters and then convert them into an array.

Here's an example code snippet that demonstrates how to convert a string to an array using spread:

```javascript
const str = "hello";
const arr = [...str];

console.log(arr); // Output: ["h", "e", "l", "l", "o"]
```

In the above example, the spread operator `...` is used to spread the string `str` into individual characters. These individual characters are then wrapped in an array using square brackets `[...]` to create the resulting array `arr`.

Note that this technique only works for converting a string to an array of characters. If you want to split a string into an array of substrings based on a delimiter, you should use the `split()` method without the spread operator.


### Passing arguments in function using spread ?

In JavaScript, the spread operator (`...`) can be used to pass an array or iterable object as individual arguments to a function. 

Here's an example of how to use the spread operator to pass arguments to a function:

```
function myFunction(x, y, z) {
  console.log(x, y, z);
}

const args = [1, 2, 3];

myFunction(...args); // Output: 1 2 3
```

In this example, the `myFunction` function takes three arguments (`x`, `y`, and `z`). We then define an array `args` containing `[1, 2, 3]`. Finally, we call `myFunction` using the spread operator (`...args`) to pass each element of the `args` array as individual arguments to the function. This results in the output `1 2 3` being printed to the console.


### Shallow copy

A shallow copy in JavaScript creates a new object that points to the same memory location as the original object. This means that if you make a change to the original object, it will also affect the copied object. 

Here's an example of creating a shallow copy using the spread operator:

```
const originalObj = { 
  name: "John", 
  age: 30, 
  hobbies: ["reading", "writing"] 
};

const shallowCopyObj = {...originalObj};

originalObj.hobbies.push("coding");

console.log(originalObj); // {name: "John", age: 30, hobbies: ["reading", "writing", "coding"]}
console.log(shallowCopyObj); // {name: "John", age: 30, hobbies: ["reading", "writing", "coding"]}
```

As you can see, changes made to the `hobbies` array in the original object also affect the `hobbies` array in the shallow copied object, since they share the same memory location.


### Deep copy

In JavaScript, a deep copy is a copy of an object or array that creates a new instance but also copies all nested objects and arrays rather than referencing them. This means that changes made to the original object will not affect the copied object.

Here's an example:

```
let originalArray = [1, 2, [3, 4]];
let copiedArray = JSON.parse(JSON.stringify(originalArray));
```

In this example, `originalArray` contains an array with two numbers and another nested array. To create a deep copy of this array, we can use the `JSON.parse()` and `JSON.stringify()` methods. 

The `JSON.stringify()` method converts the `originalArray` into a string, including all nested objects and arrays. The `JSON.parse()` method then creates a new object by parsing the stringified version of the `originalArray`.

With this method of copying, any changes made to `originalArray` after creating the `copiedArray` will not affect the `copiedArray`, as they are completely separate instances in memory. For example:

```
originalArray[2][0] = 5;
console.log(originalArray); // [1, 2, [5, 4]]
console.log(copiedArray);    // [1, 2, [3, 4]]
```

In this case, changing the first element of the nested array in `originalArray` does not affect the corresponding element in `copiedArray`.
