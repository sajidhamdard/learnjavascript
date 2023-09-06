### Question 1: Create an array called fruits that contains the following elements: "apple", "banana", "orange". Now check if "orange" is in the fruits array.

```
// create an array of fruits
let fruits = ["apple", "banana", "orange"];

// check if "orange" is in the array
if (fruits.includes("orange")) {
  console.log("Orange is in the array");
} else {
  console.log("Orange is not in the array");
}
```

### Question 2: Given an array of numbers, write a function that returns the sum of all the even numbers in the array.

```
function sumEvenNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
}
let numbers = [5, 10, 15, 20, 25, 30]
console.log(sumEvenNumbers(numbers));
```

### Question 3 : Given two arrays of numbers, write a function that returns a new array that contains only the unique elements from both arrays.

```
function uniqueElements(arr1, arr2) {
  const set = new Set([...arr1, ...arr2]); // merge the arrays and create a Set to eliminate duplicates
  return [...set]; // convert the Set back to an array and return it
}

// Example usage:
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const uniqueArr = uniqueElements(arr1, arr2);
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5, 6]
```

### Question 4: Given an array of strings, write a function that returns the longest string in the array.

```
function findLongestString(arr) {
  let longest = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}
```

### Question 5: Write a function that takes an array of numbers and returns the largest number in the array.

```
function findLargestNumber(arr) {
  let largestNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}
```

### Question 6: Write a function that takes an array of numbers and returns a new array that only contains the even numbers from the original array.

```
function filterEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}
```

### Question 7: Write a function that takes an array of strings and returns a new array that only contains strings with more than 5 characters.

```
function filterStrings(arr) {
  return arr.filter(str => str.length > 5);
}
```

### Question 8: Write a function that takes two arrays of numbers and returns a new array that contains the intersection of the two arrays (i.e. only the numbers that appear in both arrays).

```
function findIntersection(arr1, arr2) {
  // Create an empty array to hold the intersection
  let intersection = [];

  // Loop through the first array
  for (let i = 0; i < arr1.length; i++) {
    // Check if the current element is also in the second array
    if (arr2.includes(arr1[i])) {
      // If it is, add it to the intersection array
      intersection.push(arr1[i]);
    }
  }

  // Return the intersection array
  return intersection;
}
```

### Question 9: Write a function that takes an array of numbers and returns a new array where each element is the square of the original element

```
function squareArray(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] ** 2);
  }
  return result;
}
```

### Question 10: Write a function that takes an array of numbers and returns the average of all the numbers in the array.

```
function average(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
```

### Question 11: Write a function that takes an array of numbers and returns a new array that only contains numbers that are greater than 5. Use filter function

```
function filterGreaterThan5(numbers) {
  return numbers.filter(num => num > 5);
}

const numbers = [1, 3, 5, 7, 9, 11, 13];
const greaterThan5 = filterGreaterThan5(numbers);
console.log(greaterThan5); // Output: [7, 9, 11, 13]
```

### Question 12: Write a function that takes an array of numbers and returns a new array where each element is the original element plus 1. use map function

```
function addOneToArray(arr) {
  return arr.map(num => num + 1);
}
```

### Question 13: Write a function that takes an array of numbers and returns a new array that contains only the unique numbers using reduce.

```
function getUniqueNumbers(arr) {
  return arr.reduce(function(result, current) {
    if (result.indexOf(current) === -1) {
      result.push(current);
    }
    return result;
  }, []);
}
```

### Question 14: Write a function that takes an array of strings and returns the total number of characters in all the strings using reduce.

```
function countTotalCharacters(arr) {
  return arr.reduce((total, str) => total + str.length, 0);
}

const arr = ['hello', 'world', 'how', 'are', 'you'];
const totalCharacters = countTotalCharacters(arr);
console.log(totalCharacters); // Output: 18
```

### Question 15: Write a function that takes an array of strings and sorts them by their length in ascending order.

```
function sortStringsByLength(strings) {
  strings.sort((a, b) => a.length - b.length);
  return strings;
}

let strings = ["apple", "banana", "cherry", "date"];
console.log(sortStringsByLength(strings)); // Output: ["date", "apple", "cherry", "banana"]
```

### Question 16: Write a function that takes an array of numbers and returns the second highest number.

```
function getSecondHighestNumber(numbers) {
  // Sort the array in descending order
  const sortedArray = numbers.sort((a, b) => b - a);
  // Return the element at index 1
  return sortedArray[1];
}

const numbers = [10, 5, 20, 15];
console.log(getSecondHighestNumber(numbers)); // Output: 15
```

### Question 17 : Write a function that takes an array of numbers and returns a new array with all the unique numbers.

```
function getUniqueNumbers(numbers) {
  return Array.from(new Set(numbers));
}

// Example usage
let numbers = [1, 2, 3, 2, 4, 3, 5];
console.log(getUniqueNumbers(numbers)); // Output: [1, 2, 3, 4, 5]
```

### Question 18: Write a function that takes an array of strings and returns a new array with only the strings that contain the letter "a".

```
function filterStringsContainingA(arr) {
  return arr.filter((str) => str.includes("a"));
}
```

### Question 19: Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.

```
function sortNumbersAscending(numbers) {
  return numbers.sort((a, b) => a - b);
}
```

### Question 20: Write a function that takes an array of strings and flattens each string into an array of characters, then flattens the result into a single array.

```
function flattenStrings(strings) {
  return strings
    .map(str => str.split('')) // split each string into an array of characters
    .reduce((acc, arr) => acc.concat(arr), []); // flatten the array of arrays into a single array
}

let strings = ['hello', 'world', 'how', 'are', 'you'];
let flattened = flattenStrings(strings);
console.log(flattened); // Output: ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d", "h", "o", "w", "a", "r", "e", "y", "o", "u"]
```
