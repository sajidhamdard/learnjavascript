### what is Promise Combinators: race, allSettled and any in javascript
Promise Combinators in JavaScript are methods that operate on multiple promises and return a new promise. The three Promise Combinators are:

1. Promise.race(iterable): Returns a new promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.

2. Promise.allSettled(iterable): Returns a new promise that resolves with an array of objects that describe the outcome of each promise in the iterable, whether fulfilled or rejected.

3. Promise.any(iterable): Returns a new promise that resolves with the value of the first fulfilled promise in the iterable. If all promises are rejected, it rejects with an AggregateError containing an array of rejection reasons. Note that this method is not yet supported by all browsers.
