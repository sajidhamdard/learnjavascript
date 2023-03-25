## Object Questions

### Question 1: Write a function that takes an object as an input and returns a new object with the same keys and values, but with all the string values capitalized.

```
function capitalizeObjectValues(obj) {
  const newObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "string") {
      newObj[key] = value.toUpperCase();
    } else {
      newObj[key] = value;
    }
  }
  return newObj;
}
```

### Question 2: Write a function that takes two objects as inputs and returns a new object that contains only the keys that are present in both objects, along with their corresponding values from the first object.

```
function intersectObjects(obj1, obj2) {
  let result = {};
  for (let key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      result[key] = obj1[key];
    }
  }
  return result;
}
```

### Question 3: Write a function that takes an array of objects as an input and returns a new array that contains only the objects that have unique values for a specified key. For example, if the input array contains objects with a "name" key, the function should return an array of objects with unique names.

```
function filterUniqueObjects(arr, key) {
  let uniqueValues = new Set();
  let result = [];

  for (let obj of arr) {
    if (!uniqueValues.has(obj[key])) {
      uniqueValues.add(obj[key]);
      result.push(obj);
    }
  }

  return result;
}

let arr = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "Bob", age: 40 }
];

let filteredArr = filterUniqueObjects(arr, "name");
console.log(filteredArr); // Output: [{ name: "Alice", age: 20 }, { name: "Bob", age: 30 }, { name: "Charlie", age: 35 }]
```

### Question 4: Write a function that takes an object as an input and returns an array of all the keys in the object, sorted alphabetically.

```
function sortKeys(obj) {
  return Object.keys(obj).sort();
}

const myObj = { name: "John", age: 30, city: "New York" };
const sortedKeys = sortKeys(myObj);

console.log(sortedKeys); // ["age", "city", "name"]
```

### Question 5: Write a function that takes an object and a string as input and returns a new object with all the keys that start with the specified string. The original object should not be modified.

```
function filterObjectKeys(obj, prefix) {
  const filteredObj = {};
  for (let key in obj) {
    if (key.startsWith(prefix)) {
      filteredObj[key] = obj[key];
    }
  }
  return filteredObj;
}
```

## Array Questions

### Question 1: Write a function that takes an array of strings as an input and returns a new array where each string has been capitalized (i.e. the first letter of each word is capitalized).

```
function capitalizeWords(arr) {
  return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
}

const words = ["apple", "banana", "cherry", "date"];
const capitalizedWords = capitalizeWords(words);
console.log(capitalizedWords);
// Output: ["Apple", "Banana", "Cherry", "Date"]
```

### Question 2: Write a function that takes an array of numbers as an input and returns the highest product of any three numbers in the array.

```
function highestProductOfThree(array) {
  if (array.length < 3) {
    throw new Error('Array must have at least 3 numbers');
  }

  // Initialize variables to hold the highest and lowest numbers
  // seen so far, and the highest and second highest products of
  // two numbers seen so far.
  let highest = Math.max(array[0], array[1]);
  let lowest = Math.min(array[0], array[1]);
  let highestProductOfTwo = array[0] * array[1];
  let lowestProductOfTwo = array[0] * array[1];
  let highestProductOfThree = array[0] * array[1] * array[2];

  // Loop through the array, updating the highestProductOfThree,
  // highestProductOfTwo, and lowestProductOfTwo variables as we go.
  for (let i = 2; i < array.length; i++) {
    const current = array[i];

    highestProductOfThree = Math.max(
      highestProductOfThree,
      current * highestProductOfTwo,
      current * lowestProductOfTwo
    );

    highestProductOfTwo = Math.max(
      highestProductOfTwo,
      current * highest,
      current * lowest
    );

    lowestProductOfTwo = Math.min(
      lowestProductOfTwo,
      current * highest,
      current * lowest
    );

    highest = Math.max(highest, current);
    lowest = Math.min(lowest, current);
  }

  return highestProductOfThree;
}
```

### Question 3: Write a function that takes two arrays as inputs and returns a new array that contains only the elements that are present in both arrays, with no duplicates.

```
function arrayIntersection(a, b) {
  // Create an empty object to store the elements of the first array.
  const seen = {};

  // Add each element of the first array to the object.
  for (let i = 0; i < a.length; i++) {
    seen[a[i]] = true;
  }

  // Create an empty array to store the common elements.
  const result = [];

  // Loop through the second array, checking if each element is
  // also in the object. If it is, add it to the result array and
  // remove it from the object to avoid duplicates.
  for (let i = 0; i < b.length; i++) {
    const element = b[i];
    if (seen[element]) {
      result.push(element);
      delete seen[element];
    }
  }

  return result;
}
```

### Question 4: Write a function that takes an array of strings as an input and returns a new array that contains only the strings that are palindromes (i.e. they are the same forwards and backwards).

```
function findPalindromes(arr) {
  // Create an empty array to store the palindromes.
  const palindromes = [];

  // Loop through the input array.
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];

    // Check if the string is a palindrome by comparing it to its
    // reverse. If it is, add it to the palindromes array.
    if (str === str.split('').reverse().join('')) {
      palindromes.push(str);
    }
  }

  return palindromes;
}
```

### Question 5: Write a function that takes an array of numbers as an input and returns a new array where each number has been multiplied by 2 if it is even, or by 3 if it is odd.

```
function doubleEvenTripleOdd(arr) {
  // Create an empty array to store the result.
  const result = [];

  // Loop through the input array.
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    // If the number is even, multiply it by 2 and add it to the result array.
    // Otherwise, multiply it by 3 and add it to the result array.
    if (num % 2 === 0) {
      result.push(num * 2);
    } else {
      result.push(num * 3);
    }
  }

  return result;
}
```

## Set Questions

### Question 1: Write a function that takes an array of Sets as an input and returns a new Set that contains only the elements that are present in all of the Sets.

```
function setIntersection(arr) {
  // Create a copy of the first Set in the array.
  const result = new Set(arr[0]);

  // Loop through the remaining Sets in the array.
  for (let i = 1; i < arr.length; i++) {
    // Create an empty Set to store the common elements.
    const common = new Set();

    // Loop through the elements in the current Set.
    for (const element of arr[i]) {
      // If the element is also in the result Set, add it to the common Set.
      if (result.has(element)) {
        common.add(element);
      }
    }

    // Replace the result Set with the common Set.
    result.clear();
    for (const element of common) {
      result.add(element);
    }
  }

  return result;
}
```

### Question 2: Write a function that takes an array of numbers as an input and returns a new Set that contains only the numbers that are odd.

```
function filterOddNumbers(arr) {
  // Create an empty Set to store the odd numbers.
  const oddNumbers = new Set();

  // Loop through the input array.
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    // If the number is odd, add it to the oddNumbers Set.
    if (num % 2 !== 0) {
      oddNumbers.add(num);
    }
  }

  return oddNumbers;
}
```

### Question 3: Write a function that takes two Sets as inputs and returns a new Set that contains only the elements that are present in the first Set but not the second.

```
function setDifference(set1, set2) {
  // Create a new Set to store the difference.
  const difference = new Set();

  // Loop through the elements in the first Set.
  for (const element of set1) {
    // If the element is not in the second Set, add it to the difference Set.
    if (!set2.has(element)) {
      difference.add(element);
    }
  }

  return difference;
}
```

### Question 4: Write a function that takes an array of Sets as an input and returns a new Set that contains only the unique elements across all of the Sets.

```
function setUnion(arr) {
  // Create a new Set to store the union.
  const union = new Set();

  // Loop through the Sets in the input array.
  for (const set of arr) {
    // Loop through the elements in the current Set.
    for (const element of set) {
      // Add the element to the union Set.
      union.add(element);
    }
  }

  return union;
}
```

### Question 5: Write a function that takes two Sets as inputs and returns a new Set that contains only the elements that are present in the first Set and the second Set, but not in both.

```
function symmetricDifference(set1, set2) {
  // Create a new Set to store the symmetric difference.
  const symmetricDiff = new Set();

  // Loop through the elements in the first Set.
  for (const element of set1) {
    // If the element is not in the second Set, add it to the symmetric difference Set.
    if (!set2.has(element)) {
      symmetricDiff.add(element);
    }
  }

  // Loop through the elements in the second Set.
  for (const element of set2) {
    // If the element is not in the first Set, add it to the symmetric difference Set.
    if (!set1.has(element)) {
      symmetricDiff.add(element);
    }
  }

  return symmetricDiff;
}
```

## Map Questions

### Question 1: Write a function that takes two Maps as inputs and returns a new Map that contains only the keys that are present in both Maps, with the corresponding values from the first Map.

```
function mapIntersection(map1, map2) {
  // Create a new Map to store the intersection.
  const intersection = new Map();

  // Loop through the entries in the first Map.
  for (const [key, value] of map1) {
    // If the key is in the second Map, add the key-value pair to the intersection Map.
    if (map2.has(key)) {
      intersection.set(key, value);
    }
  }

  return intersection;
}
```

### Question 2: Write a function that takes a Map of numbers as an input and returns a new Map where each key is the square root of the corresponding key in the input Map, and the value is the square of the corresponding value in the input Map.

```
function squareRootMap(map) {
  // Create a new Map to store the square roots of keys and squares of values.
  const result = new Map();

  // Loop through the entries in the input Map.
  for (const [key, value] of map) {
    // Compute the square root of the key and the square of the value.
    const sqrtKey = Math.sqrt(key);
    const squaredValue = value ** 2;

    // Add the square root of the key and the square of the value to the result Map.
    result.set(sqrtKey, squaredValue);
  }

  return result;
}
```

### Question 3: Write a function that takes two Maps as inputs and returns a new Map that contains only the keys that are present in both Maps, with the corresponding values from the second Map.

```
function mapIntersection(map1, map2) {
  // Create a new Map to store the intersection.
  const intersection = new Map();

  // Loop through the entries in the second Map.
  for (const [key, value] of map2) {
    // If the key is in the first Map, add the key-value pair to the intersection Map.
    if (map1.has(key)) {
      intersection.set(key, value);
    }
  }

  return intersection;
}
```

### Question 4: Write a function that takes a Map of numbers as an input and returns the sum of the values of all of the even keys in the Map.

```
function sumEvenKeys(map) {
  let sum = 0;

  // Loop through the entries in the Map.
  for (const [key, value] of map) {
    // If the key is even, add the value to the sum.
    if (key % 2 === 0) {
      sum += value;
    }
  }

  return sum;
}
```

### Question 5: Write a function that takes a Map of strings as an input and returns a new Map where each key is a letter and the value is the number of times that letter appears in the values of the input Map.

```
function letterCount(map) {
  // Create a new Map to store the letter counts.
  const letterCounts = new Map();

  // Loop through the entries in the input Map.
  for (const [key, value] of map) {
    // Loop through the characters in the value string.
    for (const char of value) {
      // If the character is a letter, add it to the letter count for this key.
      if (/[a-zA-Z]/.test(char)) {
        const letter = char.toLowerCase();
        const count = letterCounts.get(letter) || 0;
        letterCounts.set(letter, count + 1);
      }
    }
  }

  return letterCounts;
}
```
