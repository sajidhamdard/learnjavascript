### What is Ajax ?

AJAX (Asynchronous JavaScript and XML) is a technique used in web development to create more dynamic and interactive web pages. AJAX allows web pages to retrieve and send data to a server asynchronously, meaning that the page can be updated without requiring a full page reload.

AJAX is commonly used to fetch data from a server and update the content of a web page without requiring the user to refresh the page. This can lead to a smoother and more responsive user experience, as the page can be updated in real-time as the user interacts with it.

Here's an example of using AJAX in JavaScript to fetch data from a server:

```javascript
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  }
};

xhr.open('GET', 'https://example.com/data.json');
xhr.send();
```

In this example, we create a new XMLHttpRequest object, which is a built-in JavaScript object that allows us to communicate with a server over HTTP. We set the onreadystatechange property of the object to a callback function that will be called whenever the state of the request changes.

When the readyState property of the request object is equal to 4 (indicating that the request is complete) and the status property is equal to 200 (indicating a successful response from the server), we parse the response text as JSON and log it to the console.

We then use the open() method of the request object to specify the HTTP method (GET in this case) and the URL of the resource we want to fetch (https://example.com/data.json). Finally, we use the send() method to send the request to the server.

When the server responds, the onreadystatechange callback function is called, and we process the response as necessary.

Note that there are also many libraries and frameworks available that simplify the process of making AJAX requests in JavaScript, such as jQuery, Axios, and fetch.
