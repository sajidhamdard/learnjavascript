# Exercise-09

### Question 1

let str = "My name is learn javascript";

Split this string using space and find length.

```
const str = "My name is learn javascript";
const words = str.split(" ");
const length = words.length;

console.log(length); // output: 5

```

### Question 2

Write a program to check if a string is palindrome or not?

```
let str = "aabaa";
let str2 = "";
for (let i = str.length - 1; i >= 0; i--) {
  str2 = str2 + str[i];
}
if (str == str2) {
  console.log("is palindrome");
} else {
  console.log("Not palindrome");
}

```

### Question 3

9581894461 Convert to below

```
95818*****
*****94461
958**944**
```

```
const phoneNumber = "9581894461";

const result1 = phoneNumber.slice(0, 5).padEnd(10, "*"); // "95818*****"
const result2 = phoneNumber.slice(5).padStart(10, "*"); // "*****94461"
const result3 = phoneNumber.slice(0, 3) + "**" + phoneNumber.slice(7, 10) + "**"; // "958**944**"

console.log(result1);
console.log(result2);
console.log(result3);


```

### Question 4

Write a program to reverse a string. For example:

```
Hello -> olleH
Bye -> eyB
```

```
let str = "Hello, World!";
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}

console.log(reversedStr);

```

### Question 5

Captialize first character of the String. For example:

```
learnjavascript -> Learnjavascript
hello -> Hello
```

```
let str = "hello";
let capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);

console.log(capitalizedStr);

```

### Question 6

In a string convert uppercase character to lowercase and vice versa.

```
HeLlo -> hElLO
leArNjavaScript -> LEaRnJAVAsCRIPT
```

```
let str = "Hello, World!";
let convertedStr = "";

for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (char === char.toUpperCase()) {
    convertedStr += char.toLowerCase();
  } else {
    convertedStr += char.toUpperCase();
  }
}

console.log(convertedStr);
```

### Question 7

Camelize the string. for example:

```
Hello World -> helloWorld
my name is Sajid -> myNameIsSajid
learn javascript -> learnJavascript
```

```
let str = "hello world";
let words = str.split(" ");
let camelizedWords = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let camelizedWord = word.charAt(0).toUpperCase() + word.slice(1);
  camelizedWords.push(camelizedWord);
}

let camelizedStr = camelizedWords.join("");

console.log(camelizedStr);
```

### Question 8

Count number of spaces in a string.

```
let str = "Hello world! How are you?";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === " ") {
    count++;
  }
}

console.log(count);

```

### Question 9

Print below pattern using repeat function

```
1111111111
222222222
33333333
4444444
555555
66666
7777
888
99
0
```

```
for (let i = 1; i <= 10; i++) {
  let row = "";
  for (let j = 1; j <= 10 - i; j++) {
    row += i.toString().repeat(2);
  }
  console.log(row);
}

```

### Question 10

"My name is Sajid Khan", take input from user and print whatever is there after the word. For example:

```
    Hello learn javascript
    input: "rn"
    output: javascipt
```

```
let input = prompt("Enter a sentence:");
let word = prompt("Enter a word to search for:");

let index = input.indexOf(word);
let output = "";

if (index >= 0) {
  output = input.substring(index + word.length);
}

console.log(output);

```

### Question 11

substring vs slice vs substr

1. substring(start, end):
   This method extracts a substring from the string, starting at the start index and ending at the end index (exclusive). If end is omitted, the substring extends to the end of the string. If start is greater than end, substring() will swap the two arguments. Negative values for start or end are treated as 0

```
let str = "hello world";
console.log(str.substring(0, 5));  // "hello"
console.log(str.substring(6));     // "world"

```

2. slice(start, end):
   This method is similar to substring(), but it allows negative values for start and end, which are treated as offsets from the end of the string. If end is omitted, the substring extends to the end of the string.

   ```
   let str = "hello world";
     console.log(str.slice(0, 5));      // "hello"
     console.log(str.slice(6));         // "world"
     console.log(str.slice(-5));        // "world"
     console.log(str.slice(0, -6));     // "hello"

   ```

3. substr(start, length):
   This method extracts a substring from the string, starting at the start index and extending for length characters. If length is omitted, the substring extends to the end of the string. Negative values for start are treated as offsets from the end of the string

```
let str = "hello world";
console.log(str.substr(0, 5));     // "hello"
console.log(str.substr(6));        // "world"
console.log(str.substr(-5));       // "world"
console.log(str.substr(0, -6));    // ""

```

### Question 12

What is Regex ? Examples?
Regex (short for Regular Expression) is a sequence of characters that defines a search pattern. It is used to match and manipulate text based on certain patterns. In JavaScript, regex patterns are represented by the RegExp object, which can be used with various string methods such as match(), replace(), test(), and split().

### Question 13

match vs search function difference

The match() function is used to find all the matches of a regular expression within a string. It returns an array of all the matches found, or null if no matches were found. The match() function takes a regular expression as its argument, and the optional g flag can be used to search for all matches within the string.

Here's an example of using the match() function:

```
let str = "The quick brown fox jumps over the lazy dog";
let matches = str.match(/o/g);
console.log(matches);  // ["o", "o", "o", "o"]

```

The search() function, on the other hand, is used to find the index of the first occurrence of a regular expression within a string. It returns the index of the first match found, or -1 if no matches were found. The search() function also takes a regular expression as its argument.

Here's an example of using the search() function:

```
let str = "The quick brown fox jumps over the lazy dog";
let index = str.search(/fox/i);
console.log(index);  // 16

```

### Question 14

Take a sentence from prompt. In next question ask for a string and check if that string is present in that sentence or not.

### Question 15

Take a string and if in that string anything is there other than the characters $, \_, number, a-z, A_Z then remove them from the string. Don't use regex. for example:

```
We%^%$Cod!@#e -> We$Code
```

```
let str = prompt("Enter a string:");
let newStr = "";

for (let i = 0; i < str.length; i++) {
  let char = str.charAt(i);
  if ((char >= 'a' && char <= 'z') ||
      (char >= 'A' && char <= 'Z') ||
      (char >= '0' && char <= '9') ||
      char === '$' || char === '_' ) {
    newStr += char;
  }
}

console.log(newStr);
```
