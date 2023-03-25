### Question 1: Write a JavaScript program to check whether a string "Code" presents at 5th (index 4) position in a given string, if "Code" presents in the string return the string without "Code" otherwise return the original one.

```
function checkString(str) {
  if (str.length >= 8 && str.slice(4, 8) === "Code") {
    return str.slice(0, 4) + str.slice(8);
  } else {
    return str;
  }
}

// Example usage
console.log(checkString("HelloCodeWorld")); // Output: HelloWorld
console.log(checkString("HelloWorld")); // Output: HelloWorld
```

### Question 2: Write a JavaScript program to capitalize the first letter of each word of a given string.

```
function capitalizeFirstLetter(str) {
  let words = str.split(" "); // split the string into an array of words
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1); // capitalize the first letter of each word
  }
  return words.join(" "); // join the words back into a string
}

// Example usage
console.log(capitalizeFirstLetter("hello world")); // Output: "Hello World"
console.log(capitalizeFirstLetter("this is a test")); // Output: "This Is A Test"
```

### Question 3: Write a JavaScript program to check whether all the digits in a given number are the same or not.

```
function checkSameDigits(num) {
  // Convert number to a string
  let numStr = num.toString();
  // Loop through each character in the string
  for (let i = 1; i < numStr.length; i++) {
    // If any character is not the same as the first character, return false
    if (numStr[i] !== numStr[0]) {
      return false;
    }
  }
  // If all characters are the same, return true
  return true;
}

console.log(checkSameDigits(111111)); // true
console.log(checkSameDigits(123456)); // false
console.log(checkSameDigits(444444)); // true
```

### Question 4: Write a JavaScript function that reverse a number.

```
function reverseNumber(num) {
  return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
}

console.log(reverseNumber(12345)); // Output: 54321
console.log(reverseNumber(-6789)); // Output: -9876
```

### Question 5: Write a JavaScript function to extract unique characters from a string.

```
function uniqueCharacters(str) {
  let unique = "";
  for (let i = 0; i < str.length; i++) {
    if (unique.indexOf(str[i]) === -1) {
      unique += str[i];
    }
  }
  return unique;
}
```

### Question 6: Write a JavaScript function to chop a string into chunks of a given length.

```
function chunkString(str, chunkSize) {
  const chunks = [];
  for (let i = 0; i < str.length; i += chunkSize) {
    chunks.push(str.slice(i, i + chunkSize));
  }
  return chunks;
}
```

### Question 7: Write a JavaScript function to find a word within a string.

```
function findWord(str, word) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word) {
      return true;
    }
  }
  return false;
}
```

### Question 8: Create an array of numbers. Now filter out all the numbers from the array where number is in between 30-50. After filtering the numbers, add 20 to each number and finally print the sum of all numbers using reduce function.

```
let numbers = [10, 20, 30, 40, 50, 60];

let filteredNumbers = numbers.filter(num => num < 30 || num > 50);

let modifiedNumbers = filteredNumbers.map(num => num + 20);

let sum = modifiedNumbers.reduce((total, num) => total + num, 0);

console.log(sum);
```

### Question 9

Convert below array

```
[[1,2], [3,4], [5,6], [7,8], [9,10]]
to
[3,7,11,15,19]
```

```
const arr = [[1,2], [3,4], [5,6], [7,8], [9,10]];

const result = arr.map(subArr => subArr.reduce((sum, num) => sum + num));
// result is now [3, 7, 11, 15, 19]

```

### Question 10

Print below pattern

```
1 2 3 4 5
 2 3 4 5
  3 4 5
   4 5
    5
```

```
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5 - i + 1; j++) {
    row += (i + j - 1) + " ";
  }
  console.log(" ".repeat(i - 1) + row);
}
```
