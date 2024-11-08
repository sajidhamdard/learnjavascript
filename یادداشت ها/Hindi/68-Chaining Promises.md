### what is Chaining Promises

Chaining Promises in JavaScript refers to a technique that allows multiple asynchronous operations to execute sequentially, where the output of one operation becomes the input of the next operation.

For example, suppose you want to fetch data from an API, process it, and then display it on the webpage. In this case, you can use Promises to chain these operations together. Here's an example:

```
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => processData(data))
  .then(result => displayData(result))
  .catch(error => console.error(error));
```

In the above code, `fetch` is used to make an HTTP request to the API and return a Promise that resolves with the response. The first `then` method is used to extract the JSON data from the response. The second `then` method calls the `processData` function with the extracted data, which returns a new Promise that resolves with the processed data. Finally, the third `then` method calls the `displayData` function with the processed data to display it on the webpage. If any error occurs during any of these steps, the `catch` method will handle it.

In Hinglish, chaining Promises in JavaScript ka matlab hai ki ek Technique jismein ek se zyada async operations ko sequence mein execute kiya ja sakta hai, jahan ek operation ka output agle operation ka input banta hai.

Jaise ki agar aapko API se data fetch karna hai, usse process karna hai aur phir web page pe display karna hai. Iss case mein, aap Promises ka use kar sakte hai aur inse operations ko chain kar sakte hai. Neeche diya gaya code dekhiye:

```
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => processData(data))
  .then(result => displayData(result))
  .catch(error => console.error(error));
```

Upar diye gaye code mein, `fetch` ka use HTTP request banane ke liye kiya gaya hai aur ek Promise ko return kar dia jata hai jo response ke saath resolve hota hai. Pehla `then` method response se JSON data extract karne ke liye use kiya jata hai. Dusra `then` method `processData` function ko extracted data ke saath call karta hai jo ek naya Promise ko resolve karta hai processed data ke saath. Antim `then` method `displayData` function ko process kiya hua data ke saath call karta hai taki usse web page pe display kiya ja sake. Agar koi error in steps mein kahin bhi aati hai to `catch` method ise handle karega.
