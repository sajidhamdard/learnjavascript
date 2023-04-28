### what ia Promise Combinators: race, allSettled and any

Promise Combinators are higher-order functions in JavaScript that allow you to combine multiple Promises and handle their results in a concise way. These functions include `Promise.race()`, `Promise.allSettled()`, and `Promise.any()`. Let's look at each of these in more detail:

1. `Promise.race()` - Yeh function multiple promises ko combine karta hai aur sabse pehle resolve ya reject hone wali promise ka result return karta hai.

Example: Imagine you have two Promises, one that resolves after 2 seconds and another that resolves after 5 seconds. If you want to get the result of whichever Promise resolves first, you can use `Promise.race()` like this:

```
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Result of Promise 1');
  }, 2000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Result of Promise 2');
  }, 5000);
});

Promise.race([promise1, promise2])
  .then((result) => {
    console.log(result); // Output: "Result of Promise 1"
  });
```

2. `Promise.allSettled()` - Yeh function ek array mein diye gaye promises ko combine karta hai aur jab sabhi promises settle ho jaate hain (yani resolve ya reject ho jaate hain), to ek array of objects return karta hai jo har promise ke liye uske status, value/ reason properties mein details deta hai.

Example: Let's say you have three Promises, but you don't care about which ones resolve or reject, you just want to know the status of all of them. You can use `Promise.allSettled()` like this:

```
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Result of Promise 1');
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Error: Promise 2 rejected');
  }, 5000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Result of Promise 3');
  }, 3000);
});

Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
    /* Output: [
      { status: 'fulfilled', value: 'Result of Promise 1' },
      { status: 'rejected', reason: 'Error: Promise 2 rejected' },
      { status: 'fulfilled', value: 'Result of Promise 3' }
    ] */
  });
```

3. `Promise.any()` - Yeh function ek array mein diye gaye promises ko combine karta hai aur sabse pehle resolve hone wali promise ka result return karta hai. Agar saare promises reject ho jayein to, ek AggregateError throw karta hai.

Example: Imagine you have three Promises, but you only care about the result of the first one that resolves. You can use `Promise.any()` like this:

```
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Result of Promise 1');
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Error: Promise 2 rejected');
  }, 5000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Result of Promise 3');
  }, 3000);
});

Promise.any([promise1, promise2, promise3])
  .then((result) => {
    console.log(result); // Output: "Result of Promise 1"
  })
  .catch((error) => {
    console.log(error); // This block will not execute in this example
  });
```
