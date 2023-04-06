### Promise Combinators: race, allSettled and any

Promise Combinators in JavaScript are methods that operate on multiple promises and return a new promise. The three Promise Combinators are:

1. Promise.race(iterable): Returns a new promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise. Promise.race() takes an array of promises and returns a new promise that resolves or rejects as soon as one of the input promises resolves or rejects. Here's an example:

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'Promise 1');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Promise 2');
});

Promise.race([promise1, promise2])
  .then(result => console.log(result)); // Output: 'Promise 1'
```

In this example, Promise.race() returns a new promise that resolves with the value of promise1, because promise1 resolves before promise2.

2. Promise.allSettled(iterable): Returns a new promise that resolves with an array of objects that describe the outcome of each promise in the iterable, whether fulfilled or rejected. Promise.allSettled() takes an array of promises and returns a new promise that resolves with an array of objects that describe the state of each input promise (whether it resolved or rejected and with what value). Here's an example:

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'Promise 1');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, 'Promise 2');
});

Promise.allSettled([promise1, promise2])
  .then(results => console.log(results));
// Output: [{status: 'fulfilled', value: 'Promise 1'}, {status: 'rejected', reason: 'Promise 2'}]
```

In this example, Promise.allSettled() returns a new promise that resolves with an array of objects, one for each input promise, that describes the status and value or reason of each promise.

3. Promise.any(iterable): Returns a new promise that resolves with the value of the first fulfilled promise in the iterable. If all promises are rejected, it rejects with an AggregateError containing an array of rejection reasons. Note that this method is not yet supported by all browsers. Promise.any() takes an array of promises and returns a new promise that resolves as soon as one of the input promises resolves. If all input promises reject, Promise.any() returns a rejected promise. Here's an example:

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(reject, 500, 'Promise 1');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Promise 2');
});

Promise.any([promise1, promise2])
  .then(result => console.log(result)); // Output: 'Promise 2'
```

In this example, Promise.any() returns a new promise that resolves with the value of promise2, because promise2 resolves before promise1.
