### What is DOM ?

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. 

In simpler terms, the DOM is a tree-like structure of objects that represent the HTML elements on a webpage. With JavaScript, you can manipulate these objects to modify the content and structure of a webpage dynamically.

Here's an example of how to access and modify the content of an HTML element using the DOM in JavaScript:

HTML:
```html
<div id="myDiv">Hello, World!</div>
```

JavaScript:
```javascript
// Access the div element with id "myDiv"
var myDiv = document.getElementById("myDiv");

// Change the text inside the div
myDiv.innerHTML = "Goodbye, World!";
```

In this example, we first use the `document.getElementById()` method to access the `<div>` element with the ID of "myDiv". Then, we use the `innerHTML` property to change the text inside the `<div>` to "Goodbye, World!".


### Explain all DOM functions ?

1. `document.write`: This function writes text or HTML onto the page.

Example: 
```javascript
document.write("Hello, World!");
```

2. `document.getElementById`: This function returns an element by its ID attribute.

Example: 
```javascript
const myElement = document.getElementById("my-id");
```

3. `document.getElementsByClassName`: This function returns a collection of elements with the specified class name.

Example: 
```javascript
const myElements = document.getElementsByClassName("my-class");
```

4. `document.getElementsByTagName`: This function returns a collection of elements with the specified tag name.

Example: 
```javascript
const myElements = document.getElementsByTagName("p");
```

5. `document.querySelector`: This function returns the first element that matches the specified CSS selector.

Example: 
```javascript
const myElement = document.querySelector("#my-id .my-class");
```

6. `document.querySelectorAll`: This function returns all elements that match the specified CSS selector as a NodeList.

Example: 
```javascript
const myElements = document.querySelectorAll(".my-class");
```


### DOM useful Properties

Sure, here are brief explanations and examples of some useful DOM properties:

1. innerHTML: This property allows you to access or modify the HTML content inside an element. For example, if you have a div element with an id of "myDiv", you can retrieve its contents like this:

```javascript
let myDiv = document.getElementById("myDiv");
let contents = myDiv.innerHTML;
console.log(contents); // prints the HTML content inside the div
```

You can also change the contents of the div using innerHTML:

```javascript
myDiv.innerHTML = "<p>This is some new content!</p>";
```

2. attribute: This property allows you to access or modify the value of a specific attribute of an element. For example, if you have an img element with an id of "myImage" and a src attribute, you can retrieve the value of the src attribute like this:

```javascript
let myImg = document.getElementById("myImage");
let srcValue = myImg.getAttribute("src");
console.log(srcValue); // prints the value of the src attribute
```

You can also change the value of the src attribute using setAttribute:

```javascript
myImg.setAttribute("src", "new-image.jpg");
```

3. style.property: This property allows you to access or modify a specific CSS property of an element. For example, if you have a div element with an id of "myDiv" and a background color of red, you can retrieve the value of the background-color property like this:

```javascript
let myDiv = document.getElementById("myDiv");
let bgColor = myDiv.style.backgroundColor;
console.log(bgColor); // prints the value of the background-color property
```

You can also change the value of the background-color property using style:

```javascript
myDiv.style.backgroundColor = "blue";
```

4. textContent: This property allows you to access or modify the text content inside an element. For example, if you have a p element with the id of "myPara", you can retrieve its text content like this:

```javascript
let myPara = document.getElementById("myPara");
let contents = myPara.textContent;
console.log(contents); // prints the text content inside the p element
```

You can also change the text content of the p element using textContent:

```javascript
myPara.textContent = "This is some new text!";
```


### DOM Forms

The Document Object Model (DOM) is a programming interface for web documents. HTML forms are used to collect data from users on a website, and the DOM provides a way to access and manipulate the form elements.

An example of DOM manipulation with forms could be creating a contact form with input fields for name, email, and message, and then using JavaScript to validate the input and submit the form data to a server using an AJAX request.

To do this, you would use the DOM to access the form element and its child input elements, add event listeners to validate the input as the user types, and prevent the form from submitting if any errors are detected. When the form is successfully validated, you would use an AJAX request to send the data to the server and display a success message to the user.


### Forms validation

Forms validation is the process of ensuring that user-submitted data in a web form meets certain requirements or constraints. This helps prevent errors and improves the overall quality of the data collected.

For example, let's say you have a registration form on your website where users can sign up for an account. You may want to validate certain fields to ensure that they are filled out correctly, such as:

- Email address: Ensure that the email address is formatted correctly and contains an "@" symbol.
- Password: Ensure that the password is at least 8 characters long and contains a combination of letters, numbers, and symbols.
- Date of birth: Ensure that the user is over 18 years old by checking the year of birth against the current year.

By validating these fields, you can prevent users from submitting incorrect or invalid data, which could cause issues later on. Additionally, you can provide helpful error messages to guide users towards correcting any mistakes they've made in the form.


### Forms Properties 

- Disabled: Used to disable a form control so that it cannot be edited or submitted. Example: 

`<input type="text" name="username" disabled>`

- Max: Specifies the maximum value for an input field. Example:

`<input type="number" name="age" max="100">`

- Min: Specifies the minimum value for an input field. Example:

`<input type="number" name="age" min="18">`

- Pattern: Used to specify a regular expression for validating the value of an input field. Example:

`<input type="text" name="zipcode" pattern="[0-9]{5}" placeholder="Enter your zip code">`

- Required: Used to mark an input field as required, which means that the user must fill in the field before submitting the form. Example:

`<input type="text" name="email" required>`


### Type of Events with example

There are various types of events, some of which include:

In JavaScript, there are different types of events that can occur. Here are some of the most common types of events:

- Click events - This event occurs when a user clicks on a specific element, such as a button or a link.

- Mouse events - These events occur when the user interacts with the mouse, such as moving the mouse over an element or clicking a mouse button.

- Keyboard events - These events occur when the user interacts with the keyboard, such as pressing a key or releasing a key.

- Form events - These events occur when a user interacts with a form, such as submitting a form or resetting a form.

- Focus events - These events occur when an element gains or loses focus, such as when a user clicks on an input field or clicks away from it.

- Load events - These events occur when a web page or an element on the page finishes loading.

- Error events - These events occur when an error occurs, such as when an image fails to load or when an AJAX request fails.

These are just a few examples of the many types of events that can occur in JavaScript. Handling these events properly is crucial to building interactive and responsive web applications.

### Event functions

Event functions are used in web development to trigger specific actions based on user interactions with a webpage. Here are some examples:

1. onClick: This event function is triggered when a user clicks on an HTML element. Here's an example code snippet:

```javascript
<button onclick="alert('Hello, world!')">Click me</button>
```

When the button is clicked, an alert box will be displayed with the message "Hello, world!".

2. onChange: This event function is triggered when the value of an input element is changed by the user. Here's an example code snippet:

```javascript
<input type="text" onchange="alert(this.value)">
```

When the user types something into the text input and then moves the cursor away from it, an alert box will be displayed with the value that was entered.

3. onSubmit: This event function is triggered when a form is submitted by the user. Here's an example code snippet:

```javascript
<form onsubmit="alert('Form submitted!')">
  <input type="text">
  <input type="submit">
</form>
```

When the user submits the form (by clicking the submit button or pressing enter), an alert box will be displayed with the message "Form submitted!".


### Mouse events

Mouse events such as Onmousedown and Onmouseup are triggered by user interactions with a computer mouse. 

Onmousedown event is triggered when the user presses down on a mouse button (left, right or middle). For example, if a user clicks on a button to start playing a video game, the Onmousedown event is triggered.

Onmouseup event is triggered when the user releases the mouse button after pressing it down. For instance, if a user clicks and drags an object on a webpage, the Onmouseup event is triggered when they release the mouse button to drop the object.

Here's an example of how these mouse events can be used in JavaScript:

```javascript
let button = document.getElementById("button");

button.addEventListener("mousedown", function() {
  console.log("Button pressed down");
});

button.addEventListener("mouseup", function() {
  console.log("Button released");
});
```

In this example, we first select a HTML element with an ID of "button". We then add event listeners to detect the Onmousedown and Onmouseup events on this button. When the button is pressed down, the message "Button pressed down" will be logged to the console. Similarly, when the button is released, the message "Button released" will be logged to the console.


### Event Listener

An event listener is a programming construct that waits for a specific event to occur and executes some code in response. It allows developers to respond to user actions, browser events, or other programmatic events.

For example, you could add an event listener to a button on a webpage, waiting for the user to click it. When the button is clicked, the event listener would execute some code such as displaying a message or navigating to a different page.

addEventListener is a method used in JavaScript to attach an event listener to an element on a webpage. The syntax for addEventListener is as follows:

```javascript
element.addEventListener(event, function, useCapture);
```

- `element`: The HTML element to which the event listener is attached.
- `event`: The name of the event to listen for (e.g. "click", "submit", "keydown").
- `function`: The function to execute when the event occurs.
- `useCapture`: An optional boolean value specifying whether to use event capturing instead of event bubbling.

Here's an example of how you might use addEventListener to attach a click event listener to a button:

```javascript
const button = document.querySelector('button');

button.addEventListener('click', function() {
  alert('Button clicked!');
});
```

In this example, we're finding the first button element on the page using `document.querySelector`, then attaching a click event listener to it with `addEventListener`. When the button is clicked, the anonymous function we passed as the second argument to `addEventListener` will execute, showing an alert box with the message "Button clicked!".


### Event bubbling

Event bubbling is a mechanism in which an event that occurs on a nested element will propagate upwards through its parent elements until it reaches the top-most element or document object.

For example, suppose you have an HTML page with a list of items inside a div container. Each item is also contained within its own div. If you click on one of the items, the click event will be triggered on that item first, then on its parent div, and so on until it reaches the top-level container.

Here's some example code:

```html
<div id="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

```javascript
document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', event => {
    console.log(`Clicked ${event.target.textContent}`);
  });
});

document.querySelector('#container').addEventListener('click', event => {
  console.log(`Container clicked`);
});
```

In this example, if you click on "Item 1", you'll see two log messages: "Clicked Item 1" and "Container clicked". This is because the click event bubbles up from the item to its parent container.


### Event capturing

Event capturing is the process by which an event that occurs on a nested or child element "bubbles up" through its parent elements and eventually reaches the top-level document. During this process, each parent element has the opportunity to capture the event and execute any associated event handlers before the event continues to propagate.

For example, consider a webpage with a nested list of items. When a user clicks on one of the list items, a click event is fired on that item's HTML element. This event then bubbles up through the parent elements of the list item, such as the list itself, the div containing the list, the body of the document, and finally the document object itself. 

At each level of the hierarchy, any event handlers registered for the event type can be executed to perform some action or modify the behavior of the event. This allows for more fine-grained control over the handling of events and enables complex interactions on web pages.


### Navigation 

Navigation refers to the process of accessing and traversing through different elements in a structured document like HTML or XML. 

In JavaScript, parentNode, childNodes, firstChild, lastChild, nextSibling, and previousSibling are properties of the DOM (Document Object Model) which allow us to navigate through the nodes (elements) in an HTML document.

- `parentNode`: It returns the parent node of the current node.
Example: 
```html
<div>
  <p id="child">This is a child element</p>
</div>

<script>
const childNode = document.getElementById("child");
const parentNode = childNode.parentNode;
console.log(parentNode); // Output: <div></div>
</script>
```

- `childNodes`: It returns a collection of child nodes of the current node in the form of an array-like object called a NodeList.
Example:
```html
<div>
  <p id="child1">This is the first child element</p>
  <p id="child2">This is the second child element</p>
</div>

<script>
const parent = document.querySelector("div");
const children = parent.childNodes;
console.log(children); // Output: [text, <p>, text, <p>, text]
</script>
```

- `firstChild`: It returns the first child node of the current node.
Example:
```html
<div>
  <p id="child1">This is the first child element</p>
  <p id="child2">This is the second child element</p>
</div>

<script>
const parent = document.querySelector("div");
const firstChild = parent.firstChild;
console.log(firstChild); // Output: #text
</script>
```

- `lastChild`: It returns the last child node of the current node.
Example:
```html
<div>
  <p id="child1">This is the first child element</p>
  <p id="child2">This is the second child element</p>
</div>

<script>
const parent = document.querySelector("div");
const lastChild = parent.lastChild;
console.log(lastChild); // Output: #text
</script>
```

- `nextSibling`: It returns the next sibling node of the current node.
Example:
```html
<div>
  <p id="first-child">This is the first child element</p>
  <p id="second-child">This is the second child element</p>
</div>

<script>
const firstChild = document.getElementById("first-child");
const nextSibling = firstChild.nextSibling;
console.log(nextSibling); // Output: #text
</script>
```

- `previousSibling`: It returns the previous sibling node of the current node.
Example:
```html
<div>
  <p id="first-child">This is the first child element</p>
  <p id="second-child">This is the second child element</p>
</div>

<script>
const secondChild = document.getElementById("second-child");
const previousSibling = secondChild.previousSibling;
console.log(previousSibling); // Output: #text
</script>
```


### DOM Nodes

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. DOM Nodes are objects in the DOM hierarchy that represent elements, attributes, and/or text content.

createElement(): This method creates a new element node with the tag name provided as an argument. For example, the following code creates a new "div" element:

```javascript
const newDiv = document.createElement("div");
```

createTextNode(): This method creates a new text node with the specified text content. For example, the following code creates a new text node containing the string "Hello, world!":

```javascript
const newText = document.createTextNode("Hello, world!");
```

appendChild(): This method adds a child node to the end of the list of children of a specified parent node. For example, the following code appends the new "div" element created above and the new text node to an existing element with the ID "container":

```javascript
const container = document.getElementById("container");
container.appendChild(newDiv);
container.appendChild(newText);
```

This would add the new "div" element and the new text node as children of the "container" element in the HTML document.


