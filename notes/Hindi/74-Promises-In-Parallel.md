### what is Running promises in Parallel

JavaScript promises allow for asynchronous operations to be run without blocking the main thread. Running promises in parallel means running multiple promises simultaneously, without waiting for one to finish before starting the next one.

For example, let's say we have three functions that return promises: `fetchUserData()`, `fetchPostData()`, and `fetchCommentData()`. We want to fetch all three sets of data at the same time, instead of waiting for one to finish before starting the next.

To do this, we can use the `Promise.all()` method, which takes an array of promises as an argument and returns a single promise that resolves when all the promises in the array have resolved. Here's how it works:

```js
const userDataPromise = fetchUserData();
const postDataPromise = fetchPostData();
const commentDataPromise = fetchCommentData();

Promise.all([userDataPromise, postDataPromise, commentDataPromise])
  .then(([userData, postData, commentData]) => {
    // Do something with the fetched data
  })
  .catch((error) => {
    // Handle any errors that occurred during fetching
  });
```

In this example, we create three promises for fetching user data, post data, and comment data. Then we pass these promises as an array to `Promise.all()`. When all three promises have resolved, the `.then()` callback function is called with an array of the resolved data from each promise.

Note that if any of the promises passed to `Promise.all()` are rejected (i.e., their `.catch()` method is called), then the entire `Promise.all()` call will be rejected and skip straight to the `.catch()` function.

"parallel mein promises chalana" to mean "running promises in parallel". We can also say "ek saath kai promises ko chalana" to mean "running multiple promises simultaneously".
