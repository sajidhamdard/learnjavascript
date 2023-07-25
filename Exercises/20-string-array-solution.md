### Question 1 : Write a function that takes a string and returns a new string with all the words reversed using the spread operator.

```
function reverseWords(str) {
  return [...str.split(' ')].map(word => word.split('').reverse().join('')).join(' ');
}

// Example usage:
reverseWords("Hello world") // "olleH dlrow"
```

### Question 2 : Create a function that takes in an array and uses the rest operator to remove the first element from the array and finally return the array without first element.
```
function removeFirstElement(...arr) {
  const [, ...rest] = arr;
  return rest;
}

// Example usage:
removeFirstElement(1, 2, 3, 4) // [2, 3, 4]
```
### Question 3 : Create a function that takes in an unknown number of arrays and uses the rest operator to flatten them into a single array

```
function flattenArrays(...arrays) {
  return [].concat(...arrays);
}

// Example usage:
flattenArrays([1, 2], [3, 4], [5, 6]) // [1, 2, 3, 4, 5, 6]
```
### Question 4 : Write a function that takes an object as a parameter and returns the value of its "x" property if it exists, otherwise it returns null. Hint : (Use optional chaining)

```
function getPropertyX(obj) {
  return obj?.x ?? null;
}

// Example usage:
getPropertyX({ x: 5 }) // 5
getPropertyX({ y: 10 }) // null
```
### Question 5 : Write a function which takes in an array and create two separate arrays for odd numbers and even numbers and finally merge them in the order that all odd numbers will move to the left of the array and all even numbers to right of the array.

```
function separateOddEven(arr) {
  const odd = arr.filter(num => num % 2 !== 0);
  const even = arr.filter(num => num % 2 === 0);
  return [...odd, ...even];
}

// Example usage:
separateOddEven([1, 2, 3, 4, 5, 6]) // [1, 3, 5, 2, 4, 6]
```
### Question 6 : Create an array of numbers. Now change the position of each element with their next element. 

```
let arr = [1, 2, 3, 4, 5, 6, 7];
let newArr = [];
for (let i = 0; i < arr.length; i = i + 2) {
  if (i === arr.length - 1) {
    newArr.push(arr[i]);
  } else {
    newArr.push(arr[i + 1]);
    newArr.push(arr[i]);
  }
}
console.log(newArr);


// Example usage:
shiftElements([1, 2, 3, 4, 5, 6, 7]) // [2, 1, 4, 3, 6, 5, 7]
```
###  Question 7 : Ask user below questions 
```
What is your age  : 12
What is your mobile : 9581894461
What is your address : Jaipur
```

Now create an object and use enhanced object literal property computation to create below object 
```
{
    age12 : 12
    9581894461 : 'Mobile',
    Jaipur12Address : 'Jaipur'
}
```
```
const age = 12;
const mobile = 9581894461;
const address = "Jaipur";

const obj = {
  [`age${age}`]: age,
  [mobile]: "Mobile",
  [`${address}${age}Address`]: address,
};

// Example usage:
console.log(obj); // { age12: 12, 9581894461: 'Mobile', Jaipur12Address: 'Jaipur' }
```
### Question 8 :  Using enhanced object literal function, create a function sum which takes an array as parameter and return sum of all the numbers in the array.

```
let obj = {
  sum(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
  },
};

const arr = [1, 2, 3, 4, 5];
console.log(obj.sum(arr)); // Output: 15
```
### Question 9 :  Take a number and check if number is greater than 80 or not. If yes then assign 100 to number else assign 200. Use short circuiting whereever possible. 

```
const number = 85;
const result = number > 80 && 100 || 200;

// Example usage:
console.log(result); // 100
```
### Question 10 :  Create an array of 10 numbers. Now create a new array of 0 and 1 using Array destructring based on if number is odd then 1 else 0

```
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const binaryArray = numbers.map(number => {
  const binaryValue = number % 2 === 0 ? 0 : 1;
  return binaryValue;
});

console.log(binaryArray); // [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
```
### Question 11 :  Given an array of price, use map function to return a new array where each price is converted to new price including tax, which is the price with a 10% tax added.

```
const prices = [10.00, 20.00, 30.00, 40.00, 50.00];

const pricesWithTax = prices.map(price => {
  const priceWithTax = price * 1.1; // Calculate the price with a 10% tax
  return priceWithTax;
});

console.log(pricesWithTax); //[11, 22, 33, 44, 55]
```
### Question 12 : Given an array of strings, use reduce to return the total number of characters in all the strings.

```
const strings = ['hello', 'world', 'javascript', 'reduce'];

const totalCharacters = strings.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.length;
}, 0);

console.log(totalCharacters); //28
```
### Question 13 : Given an array of strings, use map and reduce to return the total number of characters in all the strings with a length less than 5.

```
const strings = ['hell', 'world', 'javascript', 'reduce', 'map', 'filter'];

const totalCharacters = strings
  .filter(str => str.length < 5) // filter strings with length less than 5
  .map(str => str.length) // map each string to its length
  .reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0); // sum the lengths of all the strings

console.log(totalCharacters); // 7
```
### Question 14 :  Given an array of numbers, use map, filter, and reduce to return the sum of all the odd numbers multiplied by 3

```
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers
  .filter(num => num % 2 !== 0) // filter out the even numbers
  .map(num => num * 3) // multiply each odd number by 3
  .reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0); // sum the results of the map function

console.log(sum); // 75
```
### Question 15 :  Given a string, reverse the order of the words in the string. For example, "the quick brown fox" becomes "fox brown quick the".

```
const str = "the quick brown fox";
const reversedStr = str.split(" ").reverse().join(" ");
console.log(reversedStr);
```
