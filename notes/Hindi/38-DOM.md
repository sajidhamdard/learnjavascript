### DOM

DOM stands for Document Object Model. It is a hierarchical tree-like structure that represents the HTML or XML document as an object in JavaScript. The DOM provides a way for JavaScript to interact with and modify the content and structure of web pages.

For example, consider the following HTML code:

```
<!DOCTYPE html>
<html>
<head>
	<title>My Page</title>
</head>
<body>
	<h1>Welcome!</h1>
	<p>This is my first webpage.</p>
	<button id="my-button">Click me!</button>
	<script src="script.js"></script>
</body>
</html>
```

In JavaScript, we can access and manipulate elements of this page using the DOM. For instance, we can add an event listener to the button element like this:

```javascript
const button = document.getElementById("my-button");
button.addEventListener("click", function () {
  alert("Hello world!");
});
```

This code uses the `document` object to locate the button element by its `id` attribute, and then adds an event listener to it. When the button is clicked, the anonymous function passed to `addEventListener` is executed, which displays an alert box with the message "Hello world!".

Overall, the DOM provides a powerful way for JavaScript to manipulate the content and structure of web pages dynamically, enabling rich user interactions and responsive web applications.

### Explain all DOM functions like write, getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll

DOM (Document Object Model) functions are used to manipulate HTML elements on a web page. Here's a brief explanation of some commonly used DOM functions:

1. write(): Allows you to write text or HTML directly onto the page, overwriting its current contents. For example:

```javascript
document.write("Hello World!");
```

This will replace the current page content with "Hello World!".

2. getElementById(): Allows you to get an HTML element by its ID attribute. For example:

```javascript
var myElement = document.getElementById("my-id");
```

This will retrieve the element with the ID "my-id".

3. getElementsByClassName(): Allows you to get a collection of HTML elements by their class name. For example:

```javascript
var myElements = document.getElementsByClassName("my-class");
```

This will retrieve all elements with the class "my-class".

4. getElementsByTagName(): Allows you to get a collection of HTML elements by their tag name. For example:

```javascript
var myElements = document.getElementsByTagName("h1");
```

This will retrieve all h1 elements in the page.

5. querySelector(): Allows you to select the first matching element using a CSS selector. For example:

```javascript
var myElement = document.querySelector("#my-id .my-class");
```

This will retrieve the first element that matches the selector "#my-id .my-class".

6. querySelectorAll(): Allows you to select all matching elements using a CSS selector. For example:

```javascript
var myElements = document.querySelectorAll(".my-class");
```

This will retrieve all elements that match the selector ".my-class".

### Explain DOM useful Properties like innerHTML, attribute, style.property,

DOM ke kuchh useful properties hain jaise ki innerHTML, attribute, style.property, aur textContent. Ye sabhi properties ek HTML element ke alag-alag parts ko manipulate karne mein madad karte hain.

1. innerHTML: Ye property ek HTML element ke andar ke HTML content ko retrieve ya set karne ke liye use hota hai. Agar aap HTML element ke andar ka content badalna chahte hain, to innerHTML property ka upyog kar sakte hain.
   Example:

```
// HTML element ko select karein
var myElem = document.querySelector("#myElement");

// innerHTML ka upyog karke content ko badle
myElem.innerHTML = "<h2>Hello world!</h2>";
```

2. Attribute: Hum HTML tags ke attributes mein se kisi bhi attribute ko access aur manipulate kar sakte hain. Isko hum DOM tree ki is tarah se refer karte hain `element.attributeName`, jahaan `attributeName` koi bhi attribute ho sakta hai jaise ki `id`, `class`, `src`, etc.
   Example:

```
// HTML element ko select karein
var myImg = document.querySelector("#myImage");

// attribute mein change karein
myImg.src = "new-image.jpg";
```

3. style.property: Ye property ek HTML element ke inline CSS styles ko access aur manipulate karne ke liye use hota hai. Inline CSS styles wo styles hote hain jo HTML tag ke "style" attribute mein define kiye jaate hain.
   Example:

```
// HTML element ko select karein
var myPara = document.querySelector("#myParagraph");

// inline CSS styles ko change karein
myPara.style.color = "red";
myPara.style.fontSize = "20px";
```

4. textContent: Ye property ek HTML element ke andar ka plain text content ko retrieve ya set karne ke liye use hota hai. Agar aap HTML element ke andar ka text content badalna chahte hain, to textContent property ka upyog kar sakte hain.
   Example:

```
// HTML element ko select karein
var myElem = document.querySelector("#myElement");

// textContent ka upyog karke content ko badle
myElem.textContent = "Hello world!";
```

Yeh sabhi properties bahut hi useful hote hain aur hum inka upyog karke dynamic web pages bana sakte hain.

### what is DOM Forms

DOM Forms are a way to collect data from users through web forms using JavaScript and the Document Object Model (DOM). When a user submits a form, the browser sends the data to the server for processing.

For example, let's say you have a login page where users enter their username and password. You can use DOM Forms to retrieve the input values and validate them before sending them to the server.

In Hinglish, DOM Forms ke dwara hum log web forms se users se data collect karte hai JavaScript aur Document Object Model (DOM) ka use karke. Jab user ek form submit karta hai, toh browser data ko server pe process karne ke liye bhejta hai.

Jaise ki, maan lo aapke paas ek login page hai jaha users apna username aur password daalte hai. Aap DOM Forms ka use karke input values ko retrieve kar sakte hai aur unhe validate karke server pe send kar sakte hai.

### Forms

Forms validation ka matlab hai ki jab bhi koi user ek form fill kar raha hai, tab us form ke andar diye gaye inputs ko sahi tarike se validate karna. Agar koi input sahi nahi hai toh user ko error message dikhai dega aur woh form submit nahi kar paayega jab tak ki sahi tarike se validate na ho jaaye.

Ek example lete hain - agar hum ek user registration form banate hain jismein user apna naam daalega, apna email address daalega, apna password daalega aur confirm password bhi daalega. Toh is form mein humko kuch validations lagaani padegi:

1. Naam mein sirf alphabets hone chahiye, agar numbers ya special characters hote hain toh error message show karein.
2. Email address valid hona chahiye (jaise: abc@xyz.com), agar invalid hai toh error message show karein.
3. Password kam se kam 8 characters ka hona chahiye aur ek uppercase letter, ek lowercase letter aur ek number hona chahiye. Agar nahi hai toh error message show karein.
4. Confirm password password se match karna chahiye, agar nahi hai toh error message show karein.

In validations ko JavaScript language mein implement kiya jaa sakta hai. Jab user form submit karta hai, tab Javascript code form inputs ko check karta hai aur agar koi validation fail hota hai toh error message display karta hai. Agar sab validations pass hote hain tabhi form submit ho jaata hai.

### Forms Properties like Disabled,Max,Min,Pattern,Required

Forms mein kuch properties hoti hai jaise ki Disabled, Max, Min, Pattern aur Required.

1. Disabled: Ye property aise cases mein use hoti hai jab humein ek field ko disable karna hota hai, yani usko user dwara edit nahi kiya ja sakta. Is property ko hum is tarah se set kar sakte hain:

   ```
   <input type="text" name="username" disabled>
   ```

   Is example mein, "username" field disabled ho gaya hai aur user usko edit nahi kar sakta.

2. Max: Ye property input fields ke liye use hoti hai jismein maximum value limit set karni hoti hai. Jaise ki:

   ```
   <input type="number" name="age" max="100">
   ```

   Is example mein, "age" field ka maximum value 100 rakha gaya hai, yani user 100 se badi value enter nahi kar sakta.

3. Min: Is property ki madad se hum input field mein minimum value limit set kar sakte hain. Jaise ki:

   ```
   <input type="number" name="marks" min="0">
   ```

   Is example mein, "marks" field ka minimum value 0 rakha gaya hai, yani user -ve value enter nahi kar sakta.

4. Pattern: Ye property input field ke liye use hoti hai jahan par humein specific pattern ke according data enter karna hota hai. Jaise ki:

   ```
   <input type="text" name="phone" pattern="[0-9]{10}">
   ```

   Is example mein, "phone" field mein sirf 10 digit numeric characters hi enter kiye ja sakte hain.

5. Required: Ye property input field ke liye use hoti hai jahan par humein ye zaroori karna hota hai ki user us field mein data enter kare. Jaise ki:

   ```
   <input type="email" name="email" required>
   ```

   Is example mein, "email" field ko required kiya gaya hai, yani user is field mein kuch na kuch zaroor enter karna hoga.

### Explain Type of Events

Aaj main aapko events ke kuch pramukh prakar ke baare mein batane ja raha hoon:

1. Cultural Events: Ye aise events hote hain jahan par kisi sanskritik activity ko promote kiya jaata hai. Jaise ki, dance night, music concert, theatre plays ya phir poetry recitals. Is tarah ke events mein desh aur sanskriti ka pratinidhitva kiya jata hai.

2. Sports Events: Ye events khel-kood se related hote hain jaise ki cricket match, football game, ya phir marathon race. In events mein athletes apne skills dikhate hain aur apne desh ke liye jeetna prayaas karte hain.

3. Corporate Events: Ye events companies aur businesses dwara organize kiye jaate hain. Inmein launch parties, product releases, award ceremonies aur annual meetings shamil hote hain. Is tarah ke events mein businesses apne brand ko promote karte hain aur employees ko reward dete hain.

4. Social Events: Ye aise events hote hain jinke mukhya uddeshya logon ko ek saath laana hota hai. Jaise ki weddings, birthdays, anniversaries aur family reunions. Inmein khushi aur pyaar ka mahaul banaaya jaata hai.

5. Educational Events: Ye events education aur learning se related hote hain. Examples include seminars, workshops, guest lectures aur conferences. Is tarah ke events mein knowledge aur information ka exchange hota hai.

Ummid hai ki ye samajhne mein aasaan hoga!

### Explain event functions like Onclick,Onchange etc

Event Functions (इवेंट फंक्शन) का उपयोग वेब पेज पर यूजर के एक्शन को ट्रैक करने के लिए किया जाता है। ये फंक्शन मौजूदा HTML या JavaScript कोड में एक्सेक्यूट होते हैं और यूजर के कुछ कार्यों, जैसे बटन क्लिक या इनपुट बदलाव, के नतीजे के रूप में चलते हैं।

ये हैं कुछ Event Functions जो हम अक्सर उपयोग करते हैं:

1. Onclick (ऑन-क्लिक): जब यूजर किसी बटन, लिंक या इमेज पर क्लिक करता है तो यह फंक्शन कॉल होता है। इसका उदाहरण निम्नलिखित है:

```
<button onclick="alert('Hello World!')">Click Me!</button>
```

इसका अर्थ है कि जब यूजर बटन पर क्लिक करता है, तो "Hello World!" अलर्ट दिखाई देगा।

2. Onchange (ऑन-चेंज): जब यूजर कुछ इनपुट (input) फील्ड को बदलता है तो यह फंक्शन कॉल होता है। इसका उदाहरण निम्नलिखित है:

```
<input type="text" onchange="alert('Text Changed!')">
```

इसका अर्थ है कि जब यूजर इस इनपुट फ़ील्ड को बदलता है, तो "Text Changed!" अलर्ट दिखाई देगा।

3. Onload (ऑन-लोड): जब वेब पेज सही ढंग से लोड होता है तो यह फंक्शन कॉल होता है। इसका उदाहरण निम्नलिखित है:

```
<body onload="alert('Page Loaded!')">
```

इसका अर्थ है कि जब वेब पेज सही ढंग से लोड होता है, तो "Page Loaded!" अलर्ट दिखाई देगा।

ये Event Functions कुछ उदाहरण हैं, जिन्हें हम HTML या JavaScript में उपयोग करते हैं।

### Explain Mouse events like Onmousedown, Onmouseup

Mouse events are actions that occur when a user interacts with a computer mouse. There are several types of mouse events, including Onmousedown and Onmouseup.

Onmousedown is an event that occurs when a user presses down on a mouse button. For example, if you click and hold down the left mouse button, an Onmousedown event will be triggered. This can be used to perform various actions, such as selecting text or dragging an object.

Onmouseup is an event that occurs when a user releases a mouse button after pressing it down. For instance, if you release the left mouse button after holding it down, an Onmouseup event will be triggered. This is often used in conjunction with Onmousedown to perform actions like drag and drop.

In Hinglish language:

Mouse events woh actions hai jo hotey hai jab koi user computer mouse se interact karta hai. Kai tarah ke mouse events hotey hai jaise Onmousedown aur Onmouseup.

Onmousedown event tab hota hai jab koi user mouse button ko press karta hai. Maan lijiye ki agar aap left mouse button ko click karke hold karte hai toh ek Onmousedown event trigger hoga. Iska use alag alag actions ke liye kiya ja sakta hai, jaise ki text select karna ya phir kisi object ko drag karna.

Onmouseup event tab hota hai jab koi user mouse button ko press karne ke baad usey release karta hai. Jaisa ki agar aap left mouse button ko hold karke rakhte hai aur uskay baad usey release karte hai toh ek Onmouseup event trigger hoga. Yah bahut baar Onmousedown ke saath istemal kiya jaata hai jaise ki drag and drop actions karne ke liye.

### Explain Event Listener with example and also explain addEventListener

Event Listener ek programming concept hai jo allows hota hai ki aap apne code me event ko detect kar saken. Event ka matlab hota hai koi action jaise button click, mouse hover ya keyboard press. Jab koi event occur hota hai to Event Listener usse detect karta hai aur uske baad specified action ko perform karta hai.

addEventListener() ek JavaScript method hai jo element ke liye ek event listener add karta hai. Ye method 3 parameters leta hai - event type, function aur optional capturing/bubbling boolean value.

Example: Agar hum ek button pe click karte hain to kuch text display hona chahiye. To iske liye humein event listener add karna hoga.

HTML Code:

```
<button id="myBtn">Click Me</button>
<p id="demo"></p>
```

JavaScript Code:

```
const btn = document.getElementById("myBtn");
btn.addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Button Clicked!";
});
```

Is code me, humne `getElementById()` method se button element ko select kiya hai. Fir `addEventListener()` method use kiya hai jisme `click` event type aur function pass kiya hai jo execute hoga jab button click hoga. Function me humne `getElementById()` method use kiya hai aur `innerHTML` property ke zariye `demo` paragraph tag ke andar "Button Clicked!" text display kiya hai.

AddEventListener() ek bohot hi important JavaScript method hai aur iske zariye aap event-based programming me proficient ho sakte hain.

### Explain Event bubbling

Event bubbling (ईवेंट बबलिंग) होता है जब कोई DOM तत्व (जैसे HTML एलीमेंट) पर कोई इवेंट हुआ तो, उस इवेंट को देखने के लिए सबसे पहले उस तत्व के सबसे निचले बच्चों में ढूंढा जाता है और फिर उसके ऊपर के तत्वों की ओर बढ़ते जाते हैं। अंत में, उस तत्व के सभी बच्चों के ऊपर से गुजरने के बाद, उसके प्रारंभिक तत्व के लिए इवेंट हैंडलर को ढूंढा जाता है।

जैसे कि, यदि हमारे पास एक HTML तालिका है जिसमें एक <td> तत्व है जिस पर क्लिक करने पर एक इवेंट हुआ, तो इसमें ईवेंट बबलिंग का उदाहरण है। जब हम <td> पर क्लिक करते हैं, तो सबसे पहले इसके सबसे निचले बच्चों में से (अगर कोई होते हैं) ढूंढा जाता है, जैसे <span>, <img> या कोई अन्य तत्व। फिर, ऊपर की तरफ बढ़ते जाते हैं और उस तालिका के अन्य तत्वों के ऊपर से भी गुजरते हैं, जैसे <tr> और <table>। इस प्रक्रिया के बाद, इवेंट हैंडलर को <td> में ढूंढा जाता है जिसने यह इवेंट हासिल किया था।

इस प्रकार, Event bubbling (ईवेंट बबलिंग) नेस्टेड HTML तत्वों में एक साधारण इवेंट हैंडलिंग मॉडल है, जो कि अनुकूलित होने में मदद करता है।

### Explain Event capturing

Event capturing, also known as event propagation, is the process by which an event that occurs on a particular HTML element is propagated or passed down to its child elements or up to its parent elements in the DOM tree.

For example, suppose we have a webpage with a div element containing a button element:

```html
<div id="myDiv">
  <button id="myButton">Click me!</button>
</div>
```

If we attach a click event listener to both the div and the button elements using JavaScript, and then click the button, the event will be triggered first on the button and then on the div, as it propagates up the DOM tree:

```javascript
const button = document.getElementById("myButton");
const div = document.getElementById("myDiv");

button.addEventListener("click", () => {
  console.log("Button clicked!");
});

div.addEventListener("click", () => {
  console.log("Div clicked!");
});
```

Event capturing yeh hota hai ki jab humare paas kisi HTML element par ek event hota hai toh wah iss element ke child elements ko bhi propagate karta hai, ya phir uske parent elements tak bhi pahunch sakta hai. Jaise ki agar humare paas ek div element hai jisme ek button element hai, aur hum JavaScript mein dono elements par click event listeners add karte hai, toh agar hum button par click karte hai toh pehle button par event trigger hoga aur phir div par, kyunki wah DOM tree ke upar propagate ho raha hai.

### Explain Navigation and parentNode,childNodes,firstChild,lastChild,nextSibling,previousSibling

Navigation की बात करें, यह एक महत्वपूर्ण प्रक्रिया है जो वेब साइट या एप्लिकेशन में उपयोग की जाती है ताकि हम एलिमेंट्स को प्राप्त कर सकें और उसके साथ कुछ अभिक्रियाएँ कर सकें।

parentNode, childNodes, firstChild, lastChild, nextSibling, previousSibling विभिन्न एलिमेंट्स के साथ नेविगेशन करने के लिए उपयोग किए जाने वाले DOM properties हैं।

parentNode property किसी एलिमेंट के parent element को दर्शाता है। यदि हम किसी एलिमेंट के parentNode property को एक वेरिएबल में स्टोर करते हैं तो हम उस parent element का उपयोग करके उस परिवर्तन को कर सकते हैं।

उदाहरण के रूप में, हम एक div element को स्थानांतरित करना चाहते हैं जो कि उसके parent element के भीतर है। हम इस दिशा में सफल होने के लिए इस div element के parentNode property का उपयोग करके उसके parent element का पता लगा सकते हैं।

childNodes property एक NodeList object को वापस देता है, जो कि एक एलिमेंट के सभी child elements को दर्शाता है। इसे उपयोग करके हम अद्यतन और delete करने के लिए किसी एलिमेंट के सभी child elements को धुंड सकते हैं।

उदाहरण के रूप में, हम एक unordered list (ul) में सभी list items (li) को delete करना चाहते हैं। हम childNodes property का उपयोग करके ul element के सभी li elements को धुंड सकते हैं और उन्हें delete कर सकते हैं।

firstChild property किसी element का पहला child element दर्शाता है। इसे उपयोग करके हम किसी element के सबसे पहले child element का पता लगा सकते हैं।

lastChild property किसी element का अंतिम child element दर्शाता है। इसे उपयोग करके हम किसी element के सबसे अंतिम child element का पता लगा सकते हैं।

nextSibling property किसी element के समान

### Explain DOM Nodes and createElement,createTextNode,appendChild

Doston, DOM Nodes ek aisa concept hai jo web development mein bahut important hota hai. DOM (Document Object Model) ek tree-like structure hoti hai jisme har ek HTML element, text, comment ya fir attribute ko ek node ke roop mein represent kiya jaata hai.

createElement, createTextNode aur appendChild ye teeno methods DOM Nodes ke creation aur manipulation mein use kiye jaate hain. createElement method se hum naye DOM element nodes create kar sakte hain. createTextNode method se hum naye text nodes create kar sakte hain. Aur appendChild method se hum kisi existing DOM element mein dusre DOM element ya fir text node ko add kar sakte hain.

Ab ek example se samjhte hain:

```
<!DOCTYPE html>
<html>
  <body>
    <div id="example"></div>

    <script>
      // Create a new DOM element
      var newElement = document.createElement("p");

      // Create a new text node
      var newText = document.createTextNode("Hello World!");

      // Append the new text node to the new element
      newElement.appendChild(newText);

      // Append the new element to an existing element
      var parentElement = document.getElementById("example");
      parentElement.appendChild(newElement);
    </script>
  </body>
</html>
```

Is example mein humne createElement method se ek naya &lt;p&gt; element banaya hai. Uske baad humne createTextNode method se "Hello World!" text ka naya node banaya hai. Phir humne appendChild method se is text node ko newly created &lt;p&gt; element ke andar daal diya hai. Finally, humne appendChild method se is new &lt;p&gt; element ko exist karne wale div ("#example") ke andar add kar diya hai.
