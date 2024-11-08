### what is Handling Rejected Promises

"Rejected Promises" refers to the situation where a Promise in JavaScript fails to fulfill its intended task, such as due to an error or exception. Handling Rejected Promises involves defining what should happen when a Promise is rejected, so that the program can gracefully handle errors and prevent potential crashes.

To handle a Rejected Promise, we attach a ".catch()" method to the Promise object. This method takes a function as its argument, which will be called if the Promise is rejected. Within this function, we can define how to handle the error, such as logging it to the console, displaying an error message to the user, or attempting to recover from the error.

Here's an example of handling a Rejected Promise:

```
fetch('https://example.com/data')
  .then(response => response.json())
  .then(data => {
     // process the data
  })
  .catch(error => {
     console.error('Failed to retrieve data:', error);
     // handle the error
  });
```

In this example, we are using the "fetch()" function to retrieve data from a web API. If the retrieval fails for any reason (e.g., due to network connectivity issues), the Promise will be rejected and the code within the ".catch()" method will be executed. This code logs an error message to the console and provides a fallback option for handling the error.

Handling Rejected Promises is important for writing robust and reliable JavaScript code, as it helps prevent unexpected behavior and improves the overall user experience.
