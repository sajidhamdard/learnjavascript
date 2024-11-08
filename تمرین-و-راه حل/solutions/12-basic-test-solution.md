### Question 1 : Create Bill Calculator

```
// Get input from the user
let fries = parseInt(prompt("How many french fries (60rs per piece) do you want to order?")) || 0;
let burgers = parseInt(prompt("How many burgers (50rs per piece) do you want to order?")) || 0;
let chowmin = parseInt(prompt("How many plates of chowmin (100rs per plate) do you want to order?")) || 0;
let manchurian = parseInt(prompt("How many plates of Manchurian (80rs per plate) do you want to order?")) || 0;
let cokes = parseInt(prompt("How many Cokes (50 per piece) do you want to order?")) || 0;

// Calculate the total bill
let friesPrice = fries * 60;
let burgersPrice = burgers * 50;
let chowminPrice = chowmin * 100;
let manchurianPrice = manchurian * 80;
let cokesPrice = cokes * 50;

let totalBill = friesPrice + burgersPrice + chowminPrice + manchurianPrice + cokesPrice;

// Display the total bill to the user
alert(`Your total bill is: ${totalBill}rs`);
```

### Question 2 Print Pattern

```
let rows = 5;

for(let i=rows; i>=1; i--) {
  let pattern = "";
  for(let j=1; j<=i; j++) {
    if(j%2 === 0) {
      pattern += "#";
    } else {
      pattern += "$";
    }
  }
  console.log(pattern);
}

```

### Question 3 : Print Series

```
// Get input from the user
let n = parseInt(prompt("How many times do you want to print the series?"));

// Initialize variables for the series
let a = 1;
let b = 2;
let c;

// Print the series n times
for (let i = 1; i <= n; i++) {
  // Print the first two numbers of the series
  if (i == 1) {
    document.write(a + " ");
  } else if (i == 2) {
    document.write(b + " ");
  } else {
    // Calculate the next number of the series and print it
    c = a + b;
    a = b;
    b = c;
    document.write(c + " ");
  }
}
```

### Question: 4

```
let userAnswer = prompt("Do you drink tea/coffee?");

switch (userAnswer.toLowerCase()) {
  case "tea":
    console.log("tea");
    break;
  case "coffee":
    console.log("coffee");
    break;
  default:
    console.log("water");
    break;
}
```

### Question : 5

```
let age = prompt("What is your age?");

if (age > 18 && age < 50) {
  let coffeeResponse = confirm("Would you like to have a coffee?");

  if (coffeeResponse) {
    let coffeeType = prompt("What type of coffee you want to have?");
    alert(`Hello Sir/Mam, here is your ${coffeeType} coffee.`);
  }
} else if (age < 18) {
  let teaResponse = confirm("Would you like to have tea?");

  if (teaResponse) {
    let teaType = prompt("What type of tea do you want?");
    alert(`Hello Sir/Mam, here is your ${teaType} tea.`);
  } else {
    alert("Sorry visit again please.");
  }
}
```

### Question : 6

```
let num1 = Number(prompt("Enter first number:"));
let num2 = 39;

let diff = Math.abs(num1 - num2);

if (diff > 40) {
  console.log(diff * 2);
} else {
  console.log(diff * 3);
}
```

### Question : 7

```
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

if (num1 > 18 && num2 < 10) {
  console.log(num1 + num2);
} else {
  console.log(num1 * num2);
}
```

### Question : 8

```
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let num3 = Number(prompt("Enter third number:"));
let num4 = Number(prompt("Enter fourth number:"));
let num5 = Number(prompt("Enter fifth number:"));

if (num1 == num2 || num1 == num3 || num1 == num4 || num1 == num5 || num2 == num3 || num2 == num4 || num2 == num5 || num3 == num4 || num3 == num5 || num4 == num5) {
  console.log("Yes");
} else {
  console.log("No");
}
```

### Question: 9

```
let num = Number(prompt("Enter a number:"));
if (num % 10 == 0 && num % 20 == 0) {
  console.log(num * 51);
} else {
  console.log(num * 59);
}
```

### Question: 10

```
let str = prompt("Enter a string:");

if (str.length > 15) {
  for (let i = 1; i <= str.length; i++) {
    console.log(2 * i);
  }
} else {
  console.log("No");
}
```

### Question : 11

```
let str = "hello world";

// Convert the string to an array
let arr = str.split("");

// Reverse the elements of the array
for (let i = 0; i < arr.length / 2; i++) {
  let temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
}

// Join the elements back into a string
let reversedStr = arr.join("");

console.log(reversedStr); // Output: "dlrow olleh"
```

### Question: 12

```
let str = "hello world";
let charCount = new Map();

// Loop through the string and store each character in the Map
for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (charCount.has(char)) {
    charCount.set(char, charCount.get(char) + 1);
  } else {
    charCount.set(char, 1);
  }
}

// Loop through the Map and print the characters with a count greater than 1
charCount.forEach((count, char) => {
  if (count > 1) {
    console.log(char);
  }
});
```

### Question 13

```
let str = "hello world";
let uniqueChars = new Set();
let duplicateChars = new Set();

// Loop through the string and check if each character is already in the uniqueChars Set
// If the character is already in the uniqueChars Set, add it to the duplicateChars Set
for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (uniqueChars.has(char)) {
    duplicateChars.add(char);
  } else {
    uniqueChars.add(char);
  }
}

// Print the duplicateChars Set
console.log(duplicateChars);
```

### Question : 14

```
let str = "hello world";
let vowels = 0;
let consonants = 0;

// Loop through the string and check if each character is a vowel or a consonant
for (let i = 0; i < str.length; i++) {
  let char = str[i].toLowerCase();
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    vowels++;
  } else if (char >= "a" && char <= "z") {
    consonants++;
  }
}

// Print the number of vowels and consonants
console.log("Number of vowels: " + vowels);
console.log("Number of consonants: " + consonants);
```

### Question: 15

```
function isPalindrome(str) {
  // Convert the string to lowercase and remove all non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Loop through the string and compare the characters at the beginning and end
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }

  // If all the characters match, then the string is a palindrome
  return true;
}
```

### Question : 16

```
function longestPalindrome(str) {
  const n = str.length;
  const dp = new Array(n).fill(null).map(() => new Array(n).fill(false));
  let maxLength = 1;
  let start = 0;

  // All substrings of length 1 are palindromes
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  // Check for substrings of length 2
  for (let i = 0; i < n - 1; i++) {
    if (str[i] === str[i+1]) {
      dp[i][i+1] = true;
      maxLength = 2;
      start = i;
    }
  }

  // Check for substrings of length 3 or greater
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      const j = i + len - 1;
      if (str[i] === str[j] && dp[i+1][j-1]) {
        dp[i][j] = true;
        maxLength = len;
        start = i;
      }
    }
  }

  return str.substr(start, maxLength);
}
```

### Question : 17

```
function removeDuplicates(str) {
  let seen = {};
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!seen[char]) {
      seen[char] = true;
      result += char;
    }
  }

  return result;
}

console.log(removeDuplicates('hello world')); // Output: helo wrd
```

### Question : 18

```
const str = 'Hello, world!';
let count = 0;

for (let i = 0; i < str.length; i++) {
  const char = str[i];
  if (char !== ' ' && char !== ',' && char !== '!') {
    count++;
  }
}

console.log(`The string "${str}" has ${count} letters (excluding spaces and punctuation).`);
```

### Question: 19

```
function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

const str1 = 'racecar';
console.log(`${str1} is a palindrome: ${isPalindrome(str1)}`);

const str2 = 'hello';
console.log(`${str2} is a palindrome: ${isPalindrome(str2)}`);
```

### Question : 20

1. Using the split, reverse, and join methods:

```
function reverseString(str) {
  return str.split('').reverse().join('');
}

const str = 'hello world';
console.log(reverseString(str)); // prints "dlrow olleh"
```

2. Using a loop :

```
function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

const str = 'hello world';
console.log(reverseString(str)); // prints "dlrow olleh"
```

3. Using recursion :

```
function reverseString(str) {
  if (str === '') {
    return '';
  } else {
    return reverseString(str.substr(1)) + str[0];
  }
}

const str = 'hello world';
console.log(reverseString(str)); // prints "dlrow olleh"
```

### Question 21

```
function firstNonRepeatedChar(str) {
  let freq = {};

  // loop through string and count frequency of each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    freq[char] = (freq[char] || 0) + 1;
  }

  // loop through string again and return first character with frequency of 1
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (freq[char] === 1) {
      return char;
    }
  }

  // if no non-repeated character found, return null
  return null;
}

console.log(firstNonRepeatedChar('hello')); // output: "h"
console.log(firstNonRepeatedChar('aabbc')); // output: "c"
console.log(firstNonRepeatedChar('aabbcc')); // output: null
```

### Question 22

```
function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

console.log(removeVowels('hello')); // output: "hll"
console.log(removeVowels('world')); // output: "wrld"
console.log(removeVowels('JavaScript')); // output: "JvScrpt"
```

### Question 23

```
function isNumeric(str) {
  return /^\d+$/.test(str);
}

console.log(isNumeric('123')); // output: true
console.log(isNumeric('3.14')); // output: false
console.log(isNumeric('-42')); // output: false
console.log(isNumeric('1e3')); // output: false

```

### Question 24

```
function findLargestWord(str) {
  // Split the string into an array of words
  const words = str.split(' ');

  // Initialize a variable to store the longest word
  let longestWord = '';

  // Iterate through each word
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    // If the current word is longer than the longest word, update the longest word
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }

  return longestWord;
}

console.log(findLargestWord('The quick brown fox jumps over the lazy dog')); // output: 'quick'
console.log(findLargestWord('I like to eat bananas')); // output: 'bananas'
console.log(findLargestWord('Hello world')); // output: 'Hello'
```

### Question : 25

```
let str = "Hello world! This is a test string.";
let charToRemove = "o";

// Remove all occurrences of 'o'
let newStr = str.replace(new RegExp(charToRemove, "g"), "");

console.log("Original string: " + str);
console.log("String with character removed: " + newStr);


Original string: Hello world! This is a test string.
String with character removed: Hell wrld! This is a test string.
```

### Question : 26

```
let sentence = "this is a sample sentence.";

let capitalized = sentence
  .split(" ") // Split the sentence into an array of words
  .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
  .join(" "); // Join the words back into a sentence

console.log(capitalized);

This Is A Sample Sentence.

```

### Question : 27

```
function findMostFrequentChar(str) {
  let charMap = {};
  let maxChar = '';
  let maxCount = 0;

  // loop through the string and count the frequency of each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
    // update maxChar and maxCount if a new character with higher frequency is found
    if (charMap[char] > maxCount) {
      maxChar = char;
      maxCount = charMap[char];
    }
  }

  return maxChar;
}

// example usage
let str = 'hello world';
let mostFrequentChar = findMostFrequentChar(str);
console.log(`The most frequent character in '${str}' is '${mostFrequentChar}'.`);
```
