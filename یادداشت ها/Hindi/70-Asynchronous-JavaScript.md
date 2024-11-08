### Asynchronous

Asynchronous JavaScript refers to the ability of JavaScript to execute non-blocking code, allowing other code to run in the meantime. This is achieved through the use of callbacks, promises, and async/await functions, which allow developers to write code that can be executed in a non-sequential order. Asynchronous JavaScript is important for building responsive and efficient web applications, as it allows for tasks to be performed without delaying the execution of other code.

### Ajax

Ajax (Asynchronous JavaScript and XML) ek programming technique hai jismein JavaScript ka use hota hai web pages ko dynamic banane ke liye. Ismein, web page pe data ko load karne ke liye ek HTTP request bheja jaata hai server se, aur server JSON, XML, ya HTML format mein response deti hai. Ye response phir client-side (web browser) mein use kiya jaata hai usse webpage ko update karne ke liye.

Ek example ke through samjhate hain:

Maan lo hume ek webpage banana hai jismein ek button ho. Jab user uss button ko click kare toh hamare webpage pe ek image show hone lage. Ab iske liye humare paas 2 options hai:

1. Page ko refresh kare: Jab user button pe click karega toh hamari website refresh hogi aur image dikhayi degi. Lekin yeh ek slow process hai aur user ko wait karna padega.

2. Ajax ka use kare: Jab user button pe click karega, toh hum ajax ka use karke server se image fetch kar lete hai aur usse webpage pe show kar dete hai. Yeh process behad fast hota hai kyunki page reload nahi hota. Isse user ko bhi wait nahi karna padta.

Iska syntax yeh hota hai:

```javascript
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Action after successful response
  }
};
xhttp.open("GET", "url_of_server_api", true);
xhttp.send();
```

Yahan `url_of_server_api` server-side code ka URL hota hai jismein api end-point diya hota hai. Is API endpoint se data fetch karne ke liye `GET` method ka use kiya jata hai.

Ummid hai aap samajh gaye honge!

### API

API stands for "Application Programming Interface," which is essentially a set of rules and protocols that allow software programs to communicate with each other. In the context of JavaScript, an API can refer to a variety of things, including browser APIs (which allow JavaScript to interact with web page elements), third-party APIs (which allow developers to access data or functionality provided by external services), and server-side APIs (which allow client-side JavaScript to communicate with backend servers).

Let me give you an example to understand it better. Suppose you want to display the weather on your website. You could write code to scrape weather data from various websites, but that would be time-consuming and unreliable. Alternatively, you could use a weather API, which provides a standardized way to access weather data from a reliable source.

Here's a simple example of how you might use a weather API in JavaScript:

```javascript
fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=<your-api-key>"
)
  .then((response) => response.json())
  .then((data) => {
    const temperature = data.main.temp - 273.15;
    const description = data.weather[0].description;
    console.log(
      `The temperature in London is ${temperature}°C and the weather is ${description}.`
    );
  })
  .catch((error) => {
    console.error("Error fetching weather data:", error);
  });
```

In this code, we're using the `fetch` function (which is part of the browser's built-in `window` object) to make a request to the OpenWeatherMap API, passing in our API key and the city we want to get weather data for (`London`). The API will respond with a JSON object containing weather data for that location, which we can parse and use to display information to the user.

I hope this helps you understand what an API is in JavaScript!

### XMLHttpRequest

XMLHttpRequest ek JavaScript object hai jo web pages ko dynamic banane ke liye istemal hota hai. Iska istemal server ki taraf se data lene aur bhejne ke liye kiya jata hai, bina page ko refresh kiye.

Ismein JavaScript code se kuch data ko server se mangwa kar use web page mein dikhaya ja sakta hai. Iske liye humein XMLHttpRequest ka object create karna hota hai aur uske baad request ko send kar dena hota hai. Jab server se request complete ho jaati hai to hum uska response receive kar sakte hain aur use web page mein show karva sakte hain.

Example:

```
// XMLHttpRequest object create karein
var xmlhttp = new XMLHttpRequest();

// Request URL set karein
xmlhttp.open("GET", "https://api.example.com/data", true);

// Response aane par function ko call karein
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("data").innerHTML = this.responseText;
  }
};

// Request ko server tak send karein
xmlhttp.send();
```

Iss example mein humne XMLHttpRequest ka object create kiya aur server se data mangne ke liye request bheji. Agar response successful aayega to `onreadystatechange` function call hoga jismein humne response data ko `data` id wale HTML element mein show kiya hai.

### How the web works

Web JavaScript mein kaise kaam karta hai? Example ke saath detail mein samjhao.

Web ko Javascript se chalane ke liye, humein client-side programming ki zaroorat hoti hai. Client-side programming ka matlab hai ki humare code ko user ke browser mein execute kiya jaata hai aur uske dwara hi website ki functionality provide ki jaati hai.

Jab user browser par kisi website ka URL enter karta hai toh browser server se request bhejta hai aur server response mein HTML, CSS aur Javascript files bhejta hai. Yeh sabhi files browser ke taraf se download ho jaate hai aur phir HTML file ke andar CSS aur Javascript files ko link kiya jaata hai.

Javascript ka use karke hum apne HTML page ko interactive bana sakte hain. Jaise ki hum apne webpage par buttons, forms, animations, navigation menus add kar sakte hain. Javascript mein DOM (Document Object Model) ka use hota hai. Isse hum apne webpage ke elements ko manipulate kar sakte hain aur unke saath interact kar sakte hain.

Example ke liye, agar humein ek button par click karne par background color change karna hai, toh hum Javascript ka use kar sakte hain. Iske liye hum HTML file mein button tag create karenge aur usmein onclick event add karenge. Jab user button par click karega toh onclick event trigger hoga aur Javascript code run hoga. Javascript code mein hum DOM ka use karke background color ko change karenge.

HTML:

```
<button onclick="changeColor()">Click me</button>
```

Javascript:

```
function changeColor() {
  document.body.style.backgroundColor = "blue";
}
```

Iss example mein, jab user button par click karega toh changeColor function call hoga. Iss function mein hum DOM ka use karke page ke background color ko blue kar rahe hain.

Aise hi Javascript ka use karke hum apne webpage ko aur bhi interactive bana sakte hain.

### Server

Server ek computer program hai jo internet par chalta hai aur client ko data provide karta hai. JavaScript mein bhi server-side programming kiya ja sakta hai. Server-side programming ke liye Node.js ka use kiya jata hai.

Node.js ek open-source, cross-platform, server-side JavaScript runtime environment hai. Iska use JavaScript code ko server-side execute karne ke liye kiya ja sakta hai. Node.js mein server banane ke liye `http` module ka use kiya jata hai.

Neeche diye gaye example mein, hum ek simple Node.js server banayenge jo `Hello World` message ko dikhata hai:

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World\n");
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
```

Is example mein, `http` module ko `require` karke server variable mein store kiya gaya hai. Fir, `createServer()` function se ek naya server create kiya gaya hai. Ye function ek callback function accept karta hai jiske parameters `request` object (client request) aur `response` object (server response) hote hain. Callback function mein `writeHead()` function se HTTP header set kiya gaya hai aur `end()` function se response body (yahaan `Hello World`) ko send kiya gaya hai.

Finally, `listen()` function se server ko specified port number (yahaan 3000) par start kiya gaya hai. Jab ye chalne lagta hai to command prompt mein "Server listening on port 3000" message show hota hai.

Is tarah se, JavaScript mein server-side programming ka use karke hum web applications ko bana sakte hain.

### Client

Client in JavaScript refers to the part of a web application that runs in a user's web browser. It can be thought of as the user-facing side of the application, responsible for displaying content and handling user interactions.

For example, let's say you visit a website like Facebook. When you open the website in your browser, the client-side code written in JavaScript is executed on your computer, rendering the webpage and allowing you to interact with it.

In Hinglish language:
Javascript me Client ka matlab hota hai wo hissa jiska istemal user apne web browser me karta hai. Ye uss web application ka wo hissa hai jo user ko dikhta hai aur jisme wo interact karta hai. Jaise ki agar hum Facebook jaisi website kholein to jab hum usse apne browser me kholte hain, to Client-side me likha JavaScript code humare computer par chalta hai jo webpage ko render karta hai aur hum usme interact kar sakte hain.

### Request ?

Request JavaScript mein ek tarika hai jiske dwara hum server se data ya resources ko retrieve kar sakte hai. Iske liye hum XMLHttpRequest (XHR) object ka upyog karte hai.

Jab hum kisi webpage par jaate hai, toh hum essentially ek request bhejte hai server ko us webpage ke saath related resources haasil karne ke liye, jaise ki images, CSS files, aur scripts. Jab server request ko poore tarike se process kar leta hai, toh woh response send karta hai client tak. Request object XHR object ke madhyam se banaya jata hai aur iska upyog hum asynchronous HTTP (AJAX) requests ke liye karte hai.

Ek example ke tor par, aap kisi API se data retrieve karna chahte hai, jaise ki OpenWeatherMap API jo current weather data provide karta hai. Aap ek GET request bhejte hai server ko, jismein endpoint URL aur API key hote hai. Server aapki request ko process karta hai aur JSON format mein weather data return karta hai.

Neeche diye gaye code snippet mein ek example diya gaya hai jismein XHR object ka upyog kiya ja raha hai ek GET request bhejne ke liye OpenWeatherMap API ko:

```
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=yourAPIkey', true);
xhr.onload = function() {
  if (this.status === 200) {
    console.log(JSON.parse(this.response));
  }
};
xhr.send();
```

Is code mein, `new XMLHttpRequest()` se ek naya XHR object banaya gaya hai. `xhr.open()` mein, humne GET request ke liye endpoint URL aur API key provide kiya hai, aur `xhr.onload()` mein humne response ko handle kiya hai - yahaan par, hum log console mein return kiya hai JSON response. Finally, `xhr.send()` se request send kiya gaya hai server tak.

### Response ?

Response ek JavaScript object hota hai jo HTTP requests ke response ko represent karta hai. Ye object server se received data, headers aur status codes ko store karta hai.

Jab hum JavaScript se kisi HTTP request ko bhejte hai, server uss request ka response bhejta hai. Iss response mei bohot saare information hote hai jaise ki response ka status code (200, 404 etc.), content type (text, JSON, HTML), cookies, headers (cache-control, content-length etc.) aur actual data.

Iss response ko handle karne ke liye hum Response object ka use karte hai. Iss object mei hum response ka data access kar sakte hai aur uska use apni application mei kar sakte hai.

Example ke taur par, agar hum ek GET request bhej rahe hai to hum "fetch" API ka use kar sakte hai. Iske baad hum response ko handle karne ke liye "then()" method ka use kar sakte hai.

Jaise ki:

```javascript
fetch("https://example.com/data")
  .then((response) => {
    console.log(response.status);
    console.log(response.headers.get("content-type"));
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

Iss example mei, hum server se data fetch karte hai. Phir hum response ke status code aur headers ko console mei print karte hai. Uske baad hum response ka JSON data access karke console mei print karte hai.

Iss tarah se hum Response object ka use karke server se received data ko access aur manipulate kar sakte hai aur iss data ko apni application mei use kar sakte hai.

### Callback ?

Callback JavaScript mein ek function hai jo dusre function mein pass kiya jaata hai. Jab woh function complete ho jaata hai, toh callback function execute hota hai. Ye ek common programming concept hai jo JavaScript mein bahut use hota hai.

For example, suppose aap ek image download karna chahte hain aur jab wo download ho jaye toh uske baad kuch aur kaam karna chahte hain. Toh aap ek function bana sakte hain jismein image download karne ka code hai aur ek callback function pass kar sakte hain. Jab image download ho jaaye, toh callback function execute hoga aur aap apna agla kaam kar sakte hain.

Ek or example dekhte hian:

```
function getDataFromServer(url, callback) {
  // server se data fetch karne ka code
  // ...
  // jab data aa jaye toh callback function ko call karein
  callback(data);
}

// function call with callback function
getDataFromServer('https://example.com/data', function(data){
    console.log(data); // fetched data
    // do something with fetched data
});
```

Ismein `getDataFromServer()` function mein humne `callback` parameter pass kiya hai. Jab server se data fetch ho jata hai, toh `callback()` function ko call ho jata hai aur uss function mein hum fetched data ko use kar sakte hain.

Aap is concept ko apne project mein bhi use kar sakte hain. Isse aap apne code ko modular and reusable bana sakte hain.

### Promise and Fetch API ?

Promise aur Fetch API dono JavaScript ke important concepts hain jo web development mein kaafi use kiye jaate hain.

Promise ek aisa object hota hai jo async operations ko handle karne ke liye use kiya jaata hai. Jab hum kisi async operation jaise ki network request ya file reading ko perform karte hain, to uska result humein future mein milta hai. Promise humein ek reference deta hai future result ke liye, jisse hum uske liye wait kar sakte hain aur jab result available ho jaaye, hum usko handle kar sakte hain.

Example:

```
const myPromise = new Promise((resolve, reject) => {
  // async operation (e.g., network request)
  const result = performAsyncOperation();

  if (result) {
    resolve(result); // promise resolved with result
  } else {
    reject('Error occurred'); // promise rejected with error
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

Yahan humne `new Promise()` ka use kiya hai ek async operation ko perform karne ke liye. Agar async operation successful raha, to hum `resolve()` method se promise ko resolve karte hain aur agar koi error aata hai to `reject()` method se promise ko reject karte hain. Phir humne `.then()` method ka use kiya hai resolve value ko handle karne ke liye aur `.catch()` method ka use kiya hai error ko handle karne ke liye.

Fetch API ek Web API hai jo client-side se server-side data retrieve karne ke liye use kiya jaata hai. Ye XMLHttpRequest (XHR) ke alternative ke roop mein introduce kiya gaya hai. Fetch API promises based hai, jisse aap async operations ko easily handle kar sakte hain.

Example:

```
fetch('https://api.example.com/data')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

Yahan humne `fetch()` method ka use kiya hai server-side se data retrieve karne ke liye. Fir humne `.then()` method ka use kiya hai response ko parse karne ke liye aur `.catch()` method ka use kiya hai error ko handle karne ke liye.

### Consuming Promises ?

Promises in JavaScript are a way to handle asynchronous operations, such as fetching data from an API or reading from a file. When you create a Promise, it can be in one of three states: pending, fulfilled, or rejected.

Consuming Promises refers to the process of handling the result of a Promise after it has been fulfilled or rejected. This involves using the `.then()` method to handle successful cases and the `.catch()` method to handle errors.

For example, let's say we want to fetch data from an API using the `fetch()` function which returns a Promise. We can consume the Promise like this:

```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json()) // Handle successful case
  .then((data) => console.log(data)) // Handle successful case
  .catch((error) => console.error(error)); // Handle error case
```

In this example, we first call the `fetch()` function with the URL of the API endpoint. This returns a Promise that resolves to a Response object. We then use the `.json()` method on the Response object to extract the JSON data from the response, which also returns a Promise. We chain another `.then()` method to handle the successful case and log the data to the console. Finally, we add a `.catch()` method to handle any errors that may occur during the process.

In Hinglish language, Consuming Promises ka matlab hai ki jab ham async operations ko handle karte hai jaise ki APIs se data fetch karna ya files se read karna, to hamein Promise ke result ko handle karna hota hai. Isme `.then()` method ko use karke hum successful cases ko handle karte hai aur `.catch()` method ko use karke errors ko handle karte hai. Ye process Promise ko consume karna kehlata hai.

### Chaining Promises ?

Chaining Promises in JavaScript is a technique where you can connect multiple Promise objects together to execute one after the other in a sequence.

Consider an example where you want to fetch some data from a server using an API call. The API call returns a Promise object that resolves with the response data. Now, after receiving the data, you want to perform some operation on it, say filter or map, which also returns a Promise object. Finally, you want to display the processed data on the UI.

Here's how you can chain these promises together:

```
fetch('https://example.com/data')
  .then(response => response.json())
  .then(data => data.filter(item => item.price > 10))
  .then(filteredData => {
    // Display the filtered data on the UI
  })
  .catch(error => {
    // Handle any errors
  });
```

In the above code, the `fetch()` method returns a Promise object that resolves with the response data. We then use the `.then()` method to parse the JSON data returned by the response.

We then chain another `.then()` method to filter the data based on our condition. The result of this operation is then passed to the next `.then()` method, which displays the processed data on the UI.

If any error occurs during the execution of the promises, the `.catch()` method is used to handle the error.

Hope this helps!

### Handling Rejected Promises ?

Rejected Promises in JavaScript are a way for asynchronous code to report errors or failures. When a Promise is rejected, it means that an error has occurred and the result of the operation is not available.

Handling Rejected Promises involves catching the error or failure and taking appropriate action. This can be done using the `catch` method on the Promise object or by passing a second argument to the `then` method.

Here's an example:

```
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Something went wrong!'))
  }, 1000)
})

promise.catch(error => {
  console.error(error.message)
})
```

In this example, we create a Promise that will be rejected after a delay of one second using the `reject` function. We then use the `catch` method to handle the rejection by logging the error message to the console.

Another way to handle rejected Promises is by chaining a `then` method with a second argument which is a function that handles the error.

```
promise.then(null, error => {
  console.error(error.message)
})
```

This achieves the same result as the previous example.

Handling Rejected Promises means dealing with cases when things go wrong while executing asynchronous operations in JavaScript. We can catch these errors using the `catch` method on the Promise object or by passing a second argument to the `then` method. It's important to handle these errors properly so that we can take appropriate action and prevent our code from crashing.

### explain Asynchronous Behind the Scene: The Event Loop in javascript ?

JavaScript is a popular programming language that is used in web development. It is a single-threaded language, which means it can only execute one task at a time. However, JavaScript has a feature called the "event loop" that allows it to handle asynchronous code.

Asynchronous code is code that does not run synchronously or in a predictable order. For example, when making an HTTP request to a server, the response may take some time to arrive. In the meantime, the JavaScript code should continue to run without waiting for the response. The event loop helps to handle this type of asynchronous code.

The event loop is a mechanism that allows JavaScript to handle asynchronous tasks by continuously checking if there are any pending tasks in the event queue. If there are any tasks, it will pick them up and execute them one by one. Once a task is completed, it moves on to the next task in the queue.

Here's an example: Suppose you have a JavaScript function that makes an HTTP request:

```
function makeRequest() {
  fetch('https://example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
}
```

When this function is called, it makes an HTTP request to `https://example.com/data` and retrieves some data. However, since this is an asynchronous operation, the JavaScript code will continue to run while waiting for the response.

The event loop comes into play here. While waiting for the response, the JavaScript engine can perform other tasks instead of blocking the thread. Once the response arrives, the event loop will pick it up from the event queue and execute the code inside the `then` block, logging the returned data to the console.

JavaScript ek single-threaded programming language hai jo ki sirf ek kaam ko ek saath karta hai. Lekin JavaScript mein "event loop" naam ka ek feature hai jo asynchronous code ko handle karne mein madad karta hai.

Asynchronous code wo hota hai jo syncronously nahi chalta ya phir ek predictable order mein nahi chalta. Jaise ki HTTP request bhejne par server se uska response aane mein time lag sakta hai. Is beech mein, JavaScript code ko response ka wait karne ke bina execute karna chahiye. Event loop asynchronous code ko handle karne mein madad karta hai.

Event loop ek mechanism hai jo JavaScript ko continuously check karta hai ki koi pending tasks event queue mein hai ya nahi. Agar koi task hai to wah use pick up karta hai aur ek-ek karke execute karta hai. Task complete hone ke baad, wah next task mein move karta hai.

Ek example ke roop mein dekha jaye: Maan lijiye ki aapke paas ek JavaScript function hai jo HTTP request bhejta hai:

```
function makeRequest() {
  fetch('https://example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
}
```

Is function ko call karne par, yah `https://example.com/data` par HTTP request bhejta hai aur kuch data retrieve karta hai. Lekin, kyunki ye asynchronous operation hai, JavaScript code response ka wait karte hue bhi run karna shuru karta hai.

Yahaan event loop kaam mein aata hai. Response ka wait karte hue, JavaScript engine thread ko block nahi hone deta aur instead mein dusre tasks perform kar sakta hai. Jab response aata hai, event loop wah event queue se ise pick up karta hai aur `then` block ke andar return hua data ko console pe log karta hai.

### Building a Simple Promise in javascript ?

Promise ka use JavaScript mein asynchronous code ko handle karne ke liye kiya jata hai. Jab hum kisi task ko async tarike se execute karte hain, to uski output aane mein der lagti hai aur tab tak humare code ke execution process par wait karna padta hai.

Promise ka use karke hum async task ka output ek promise object mein store kar sakte hain, jiske baad hum usko resolve ya reject kar sakte hain. Promise mein do states hote hain - resolved aur rejected.

Ek simple example ke through Promise ko samjhate hain:

```
// Ek function banayein jo 2 numbers ka sum return kare
function addNumbers(num1, num2) {
  // Promise object create karein
  const promise = new Promise((resolve, reject) => {
    // Sum calculate karenge
    const sum = num1 + num2;

    // Agar sum 50 se bada hai to resolve karein
    if (sum > 50) {
      resolve(sum);
    } else {
      // Agar sum 50 se chota hai to reject karein
      reject("Sum is less than 50");
    }
  });

  // Promise object return karein
  return promise;
}

// Function call karein aur sum print karein
addNumbers(30, 25)
  .then((result) => console.log(result)) // Output: 55
  .catch((error) => console.log(error));

addNumbers(10, 20)
  .then((result) => console.log(result)) // Output: Error message "Sum is less than 50"
  .catch((error) => console.log(error));
```

Is example mein humne `addNumbers()` naam ka ek function banaya hai, jismein humne do numbers liye aur unka sum calculate kiya. Agar sum 50 se bada hai to usko resolve kiya, warna reject kiya.

`Promise` object ke through humne function ka output ko handle kiya hai. `addNumbers()` function mein promise object create kiya gaya hai, jismein humne resolve ya reject function ko call kiya. Promise object return karne ke baad humne use `.then()` aur `.catch()` methods se access kiya hai.

`.then()` method ka use humne tab kiya hai jab promise object resolved ho gaya tha. Is case mein, humne `console.log(result)` kiya, jiske output mein sum print hua.

Isi tarah, `.catch()` method ka use humne tab kiya hai jab promise object rejected ho gaya tha. Is case mein, humne `console.log(error)` kiya, jiske output mein error message print hua.

Yeh ek basic example tha. Promise ko aur bhi depth mein jaane ke liye aur examples ke saath practice karna chahiye.

### Consuming Promise with Async/Await in javascript ?

Async/Await is a feature in JavaScript that allows developers to write asynchronous code in a synchronous fashion. It makes use of the Promise object to handle the asynchronous operations.

Let's first understand what a Promise is. In simple terms, a Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value.

Now, suppose you have a function that returns a Promise object. To consume this promise using Async/Await, first, you need to mark your current function as async using the `async` keyword. Then, within this function, you can use the `await` keyword before calling the function that returns the Promise object. This will pause the execution of the function until the Promise is resolved or rejected. Once resolved, you can get the result of the Promise using the `.then()` method. If the Promise is rejected, you can catch the error using the `.catch()` method.

Here's an example:

```javascript
// Function that returns a Promise object
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received"); // Resolves after 2 seconds
    }, 2000);
  });
}

// Consume Promise using Async/Await
async function processData() {
  try {
    const result = await getData();
    console.log(result); // Logs 'Data received' after 2 seconds
  } catch (error) {
    console.error(error);
  }
}

processData(); // Calls processData function
```

In this example, the `getData()` function returns a Promise object that resolves after 2 seconds with the string `'Data received'`. The `processData()` function is marked as async and uses the `await` keyword to pause the execution until the Promise returned by `getData()` is resolved. Once resolved, the result is logged to the console. If an error occurs, it is caught using the `catch()` method.

I hope this explanation helps you understand how to consume Promise with Async/Await in JavaScript. If you have any further queries, feel free to ask!

### Error Handling with Try catch in javascript ?

Try-Catch statement is used in JavaScript to handle runtime errors that may occur during the execution of a code block. The basic idea is to try and execute a block of code, if it throws an error, catch that error and handle it gracefully without stopping the execution of the entire program.

Here's an example of how to use Try-Catch statement in JavaScript:

```javascript
try {
  // Block of code that may throw an error
  let num = "hello";
  console.log(num + 5);
} catch (error) {
  // Handle the error
  console.log("An error occurred: " + error.message);
}
```

In this example, the `try` block attempts to concatenate a string with a number. Since `num` is not a valid number, this operation will throw a TypeError. However, instead of crashing the program, the error is caught by the `catch` block and handled gracefully. The error message is printed to the console, indicating that an error occurred.

The Hinglish equivalent of this code would look something like this:

```javascript
koshishKaro {
  // Kode ka ek block, jo ki kisi galati ko utpann kar sakta hai
  let num = "hello";
  console.log(num + 5);
} pakdoPakadao(error) {
  // Galati ko sambhalo
  console.log("Ek galati aayi hai: " + error.message);
}
```

code, `koshishKaro` corresponds to the `try` keyword, while `pakdoPakadao` corresponds to `catch`. The rest of the code is similar to the original JavaScript example. Keep in mind that this is just for illustrative purposes and using proper English keywords is generally recommended for better code readability and maintainability.

### Returning values from Async functions in javascript ?

Async functions in JavaScript are special functions that allow you to write asynchronous code using the `async` and `await` keywords. These functions always return a promise, which can be resolved with the value returned by the function.

For example, let's say we have an async function called `getAlbums()` that fetches a list of albums from an API:

```javascript
async function getAlbums() {
  const response = await fetch("https://example.com/api/albums");
  const data = await response.json();
  return data;
}
```

In this function, we use the `await` keyword to wait for the response from the API before parsing its JSON data. Finally, we return the parsed data from the function.

To use this function and get the data it returns, we can call it and use the `then()` method to handle the promise:

```javascript
getAlbums().then((data) => {
  console.log(data);
});
```

In Hinglish language:

Async functions JavaScript mein kuchh aise functions hain jo `async` aur `await` shabdon ka upayog karke aysnchronous code likhne ki suvidha dete hain. Ye functions hamesha ek promise ko vapas karte hain, jise function se vapas kiya gaya value resolve kar sakta hai.

Jaise ki, maan lo hamare paas ek async function hai jiska naam hai `getAlbums()` jo ek API se albums ki ek list laata hai:

```javascript
async function getAlbums() {
  const response = await fetch("https://example.com/api/albums");
  const data = await response.json();
  return data;
}
```

Is function mein hum `await` keyword ka upayog karke API se response ka intezaar karte hain, uske baad iske JSON data ko parse karte hain aur ant mein function se parse kiya gaya data vapas karte hain.

Is function ka upayog karne ke liye aur isse vapas kiya gaya data prapt karne ke liye, hum ise call kar sakte hain aur `then()` method ka upayog karke promise handle kar sakte hain:

```javascript
getAlbums().then((data) => {
  console.log(data);
});
```

### Running promises in Parallel in javascript ?

JavaScript promises are used to handle asynchronous operations in a more readable and maintainable way. Running promises in parallel means executing multiple promises simultaneously, without waiting for one promise to resolve before starting the next one.

Let's consider an example where we need to fetch data from three different APIs and then process the results:

```
const fetchAPI1 = () => {
  return fetch('https://api.example.com/data1')
    .then(response => response.json())
}

const fetchAPI2 = () => {
  return fetch('https://api.example.com/data2')
    .then(response => response.json())
}

const fetchAPI3 = () => {
  return fetch('https://api.example.com/data3')
    .then(response => response.json())
}

Promise.all([fetchAPI1(), fetchAPI2(), fetchAPI3()])
  .then(([data1, data2, data3]) => {
    // Process results
  })
  .catch(error => {
    // Handle errors
  })
```

In this example, we define three separate functions to fetch data from different APIs using the `fetch` function, which returns a Promise that resolves with the JSON response. We then use `Promise.all()` to execute all three promises in parallel and wait for all of them to resolve. The `Promise.all()` method takes an array of promises and returns a new Promise that resolves with an array of results when all the promises have resolved.

Once all promises are resolved, we can access the results in the `.then()` callback. The results will be passed as an array in the order that the promises were passed to `Promise.all()`.

To summarize, running promises in parallel allows us to perform multiple asynchronous tasks at the same time, which can significantly improve performance in applications that rely heavily on network requests or other long-running operations.

### Promise Combinators: race, allSettled and any in javascript ?

Promise Combinators in JavaScript are helper functions that allow developers to work with promises more efficiently. Three commonly used Promise Combinators are - `Promise.race`, `Promise.allSettled`, and `Promise.any`.

1. `Promise.race`: It accepts an array of Promises, and it returns a new Promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.

Example: Suppose you want to get data from two APIs, and you only need the data from the API that responds first. You can use `Promise.race` to achieve this:

```javascript
const promise1 = fetch("https://api.example.com/data1");
const promise2 = fetch("https://api.example.com/data2");

Promise.race([promise1, promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

In this example, we have two fetch requests that return Promises. We pass both of these promises to `Promise.race`. The `then` method is called when one of the promises is resolved. If either of the promises is rejected, the `catch` method will be called.

2. `Promise.allSettled`: It accepts an array of Promises, and it returns a new Promise that resolves after all the Promises in the array have settled (either fulfilled or rejected). The resolution value is an array of objects that describe the outcome of each Promise.

Example: Suppose you want to make multiple API requests, and you want to know the status of each request after it has completed. You can use `Promise.allSettled` to achieve this:

```javascript
const promise1 = fetch("https://api.example.com/data1");
const promise2 = fetch("https://api.example.com/data2");
const promise3 = fetch("https://api.example.com/data3");

Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    results.forEach((result) => {
      console.log(result.status, result.value);
    });
  })
  .catch((error) => {
    console.error(error);
  });
```

In this example, we have three fetch requests that return Promises. We pass all these promises to `Promise.allSettled`. The `then` method is called after all the Promises have settled. It loops through the array of objects and logs the status and value of each Promise.

3. `Promise.any`: It accepts an array of Promises, and it returns a new Promise that resolves as soon as one of the Promises in the array fulfills. If all the promises are rejected, then it rejects with an AggregateError containing an array of rejection reasons.

Example: Suppose you want to make multiple API requests, and you only need the data from the first successful request. You can use `Promise.any` to achieve this:

```javascript
const promise1 = fetch("https://api.example.com/data1");
const promise2 = fetch("https://api.example.com/data2");

Promise.any([promise1, promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

In this example, we have two fetch requests that return Promises. We pass both of these promises to `Promise.any`. The `then` method is called when one of the promises is fulfilled. If all the promises are rejected, the `catch` method will be called with an AggregateError containing an array of rejection reasons.

To summarize, Promise Combinators (`Promise.race`, `Promise.allSettled`, and `Promise.any`) provide useful abstractions for working with Promises in JavaScript. They allow developers to write cleaner and more concise code while also improving the overall reliability of their applications.
