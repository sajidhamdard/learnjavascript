# Output

### What is console.log

"console.log" ek pre-defined method hai JavaScript mein, jo developers ko allow karta hai ki wo messages ya values ko console mein display kar sakein. Console jaisa ek command-line interface hota hai jahan se aap apne code ke output ko dekh sakte hain aur koi bhi error debug kar sakte hain. Jaise ki agar aapke paas ek variable hai "name" ke naam se jo ki string value "John" ko contain karta hai. Agar aap is value ko console mein display karna chahte hain to aap console.log ka upyog is tarah se kar sakte hain:

```
const name = "John";
console.log(name);
```

This will print the value "John" to the console.

```
const name = "John";
console.log(name);
```

Isse "John" ki value console mein print ho jayegi.

### What is document.write

Document.write ek JavaScript function hai jo kisi text ya HTML code ko webpage par display karne ke liye istemal kiya jaata hai. Is function ki madad se aap dinamically webpage par content add kar sakte hai jab user page ko load karta hai.

Example:
Agar aapko apne webpage par "Hello, World!" message show karna hai to aap document.write('Hello, World!'); likh sakte hai. Jab user aapke webpage ko load karega to usme yeh message display hoga.

Document.write ek JavaScript ka function hai jiski madad se hum kuchh bhi text ya HTML code ko website par dikha sakte hain. Yeh function tab kaam karta hai jab website load hota hai. Jaise agar hum "Hello, World!" ka message website mein dikhana chahte hain to hum document.write('Hello, World!'); likhenge aur jab website load hoga to yeh message dikhayi dega.

### What is window.alert

"Window.alert" is a function in JavaScript that displays an alert message box on the web page. The purpose of this function is to inform the user about certain actions or events occurring on the webpage.

For example, let's say you are developing a website where users need to fill out a form. You can use the "window.alert" function to inform them if they have left any field empty.

Here's how you can use window.alert in Hinglish language:

Suppose, you want to inform the user that they have successfully submitted a form. You can use the following code:

```
window.alert("Sukriya! Aapka form submit ho gaya hai.");
```

This will display an alert message box displaying the message "Sukriya! Aapka form submit ho gaya hai." and the user will have to click on the "OK" button to dismiss the message box.

Similarly, if you want to inform the user that they have left a field empty, you can use the following code:

```
window.alert("Kripya sabhi fields ko bharein.");
```

This will display an alert message box displaying the message "Kripya sabhi fields ko bharein." and the user will have to fill out all the required fields before submitting the form.

### What is innerHTML

InnerHTML ek JavaScript property hai jo ki kisi HTML element ke andar ke content ko access karne aur modify karne ke liye use kiya jata hai.

Jab hum innerHTML ka use karte hai, tab hum ek HTML element ke andar ke text, HTML tags aur attributes ko change kar sakte hai. Hum isko aise bhi samajh sakte hai ki innerHTML property ek element ke andar ka HTML code hi represent karta hai.

Ab ek example se samajhte hai - agar humein ek paragraph tag me text ko badalna hai to hum uss paragraph tag ke innerHTML property ko set kar sakte hai. Jaise:

```html
<p id="my-para">Hello World!</p>
```

```javascript
document.getElementById("my-para").innerHTML = "Namaste Duniya!";
```

Is example me humne `document.getElementById` method ka use kiya jisse hum my-para id wale paragraph tag ko select kar rahe hai, aur fir uske innerHTML property ko set karke uske text ko badal diya hai.

Iss tareeke se hum HTML elements ke content ko dynamically update kar sakte hai. Lekin dhyan rahe ki isse XSS (Cross-Site Scripting) attack ka risk bhi hota hai, isliye humein humesha sanitization aur validation ka dhyan rakhna chahiye.
