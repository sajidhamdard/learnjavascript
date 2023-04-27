### What is String

Javascript mein, String ek primitive data type hai jo text ko represent karta hai. Har string ek sequence of characters hoti hai aur ek quotation mark (' ' aur " ") ke beech mein define ki jati hai.

Jaise ki,

```
var naam = 'Amit'; // single quotes mein string ko define kiya gaya hai
var message = "Main aaj khush hoon."; // double quotes mein string ko define kiya gaya hai
```

Ismein, `naam` aur `message` variables string values store kar rahe hai.

String mein characters indexes ke dwara access kiye ja sakte hai. Index 0 se start hota hai aur string.length - 1 tak chalta hai. Iske alawa, hum strings ko concatenate (combine) kar sakte hai `+` operator se.

Jaise ki,

```
var firstName = 'Amit';
var lastName = 'Kumar';
var fullName = firstName + ' ' + lastName; // Concatenate karne ke liye '+'' operator ka use kiya gaya hai.
console.log(fullName); // Output: Amit Kumar
```

Yahan, `fullName` variable `firstName` aur `lastName` strings se combined hai. Hum yeh bhi dekh sakte hai ki space `" "` concatenate karne ke liye bhi use kiya gaya hai.

In summary, String ek primitive data type hai jo text ko represent karta hai. Har string ek sequence of characters hoti hai aur quotation marks ke beech mein define ki jaati hai. Strings ko index ke dwara access kiya ja sakta hai aur concatenate karne ke liye `+` operator ka use kiya jaa sakta hai.

### How to create String

JavaScript mein ek string banane ke liye hum " " ya fir ' ' (single quotes) ka use karte hain. Jaise ki:

```
var str1 = "Hello";
var str2 = 'world';
```

Yahan humne do variables `str1` aur `str2` banaye hain jo ek-ek string hai. `str1` mein "Hello" string hai aur `str2` mein "world".

Agar aapko kuch bhi double quote (" ") ke andar likhna hai jaisa ki `"I'm a string"` toh aap use single quote (' ') ke andar wrap kar sakte hain. Jaise ki:

```
var str3 = 'I\'m a string';
```

Yahan humne `\` ka use kiya hai taaki string mein single quote ka use kar sakein.

Hum multiple strings ko concatenate bhi kar sakte hain, jisse ek naya string banega. Jaise ki:

```
var greeting = str1 + ', ' + str2 + '!'; // Output: Hello, world!
```

Yahan `+` operator ka use kiya gaya hai do strings ko concatenate karne ke liye. `greeting` variable mein ab "Hello, world!" string hai.

Is tarah se hum JavaScript mein strings create kar sakte hain.

### String Literal vs String Object ?

String Literal aur String Object dono tarah ke string hote hai, lekin unke banane ka tarika alag hota hai.

String Literal ek aisa string hai jo code mein directly declare kiya jata hai, aur use double quotes (" ") ya single quotes (' ') ke beech mein likha jata hai. Jab hum isse banate hai to iska ek reference bhi ban jata hai. Jaise:

```
String literal = "Hello World!";
```

String Object ek aisa string hai jo hum new keyword se create karte hai. Ismein humein ek object banaana padta hai jo ki String class ka object hota hai. Jaise:

```
String object = new String("Hello World!");
```

Dono hi tareeke se banaye gaye string mein same value hai, lekin inki memory allocation aur usage mein antar hota hai. Jab hum string literal banate hai to uska reference pool me store ho jaata hai (jise String Constant Pool kehte hai) aur jab hum dusri jagah se usi literal ko use karte hai to woh phele se stored reference ko point karta hai. Lekin jab hum string object banate hai to har baar naya object ban jata hai aur alag-alag memory allocation hoti hai.

Upar diye gaye examples ko hinglish mein likhenge to yeh aise dikhega:

```
// String Literal
String literal = "Hello World!";

//String Object
String object = new String("Hello World!");
```

### String length property

"String length property" refers to the number of characters in a string. It is a built-in property of the String object in JavaScript and can be accessed using the ".length" syntax.

For example, consider the following code:

```
var name = "ChatGPT";
console.log(name.length); // Output: 7
```

In this code, we have defined a variable "name" with the value "ChatGPT". We then use the ".length" property to find out the length of the string "name", which is 7.

Similarly, we can use the ".length" property to find out the length of any string, as shown below:

```
var message = "Namaste dosto!";
console.log(message.length); // Output: 14
```

Here, we have defined a variable "message" with the value "Namaste dosto!". We then use the ".length" property to find out the length of the string "message", which is 14.

इसका मतलब होता है कि "String length property" एक स्ट्रिंग में उपलब्ध वर्णों की संख्या को दर्शाता है। यह JavaScript में String ऑब्जेक्ट की बिल्ट-इन property होती है और ".length" का syntax उपयोग करके इसे एक्सेस किया जा सकता है।

एक उदाहरण के रूप में, निम्नलिखित कोड का विवरण दिया गया है:

```
var name = "ChatGPT";
console.log(name.length); // Output: 7
```

इस कोड में, हमने एक वेरिएबल "name" को "ChatGPT" के साथ परिभाषित किया है। फिर हम ".length" property का उपयोग करके "name" स्ट्रिंग की लंबाई पता लगाते हैं, जो 7 है।

इसी तरह, हम किसी भी स्ट्रिंग की लंबाई का पता लगाने के लिए ".length" property का उपयोग कर सकते हैं, जैसा कि निम्नलिखित में दिखाया गया है:

```
var message = "Namaste dosto!";
console.log(message.length); // Output: 14
```

यहाँ, हमने "message" वेरिएबल को "Namaste dosto!" के साथ परिभाषित किया है। फिर हम ".length" property का उपयोग करके "message" स्ट्रिंग की लंबाई पता लगाते हैं, जो 14 है।

### String functions

String functions in JavaScript are built-in functions that allow you to manipulate and modify strings. Here's a list of commonly used string functions in JavaScript:

1. length(): This function returns the length of the string.

Example:
var str = "Hello World";
console.log(str.length); // Output: 11

2. toUpperCase(): This function converts all characters in a string to uppercase.

Example:
var str = "hello world";
console.log(str.toUpperCase()); // Output: HELLO WORLD

3. toLowerCase(): This function converts all characters in a string to lowercase.

Example:
var str = "HELLO WORLD";
console.log(str.toLowerCase()); // Output: hello world

4. indexOf(): This function returns the index of the first occurrence of a specified substring in a string.

Example:
var str = "Hello World";
console.log(str.indexOf("o")); // Output: 4

5. slice(): This function extracts a part of a string and returns a new string.

Example:
var str = "Hello World";
console.log(str.slice(0, 5)); // Output: Hello

6. replace(): This function replaces the first occurrence of a specified substring with another substring.

Example:
var str = "Hello World";
console.log(str.replace("Hello", "Hi")); // Output: Hi World

7. trim(): This function removes whitespace from both ends of a string.

Example:
var str = " Hello World ";
console.log(str.trim()); // Output: Hello World

8. concat(): This function joins two or more strings and returns a new string.

Example:
var str1 = "Hello";
var str2 = "World";
console.log(str1.concat(" ", str2)); // Output: Hello World

In Hindi (Devanagari script):
JavaScript में स्ट्रिंग फंक्शंस वह बिल्ट इन फंक्शंस हैं जो आपको स्ट्रिंग को मैनिपुलेट और मॉडिफाई करने की अनुमति देते हैं। यहाँ जावास्क्रिप्ट में उपयोग में आने वाले स्ट्रिंग फंक्शंस की सूची है:

1. length(): यह फंक्शन स्ट्रिंग की लंबाई लौटाता है।

उदाहरण:
var str = "Hello World";
console.log(str.length); // आउटपुट: 11

2. toUpperCase(): यह फंक्शन स्ट्रिंग के सभी अक्षरों को अपरकेस में रूपांतरित करता है।

उदाहरण:
var str = "hello world";
console.log(str.toUpperCase()); // आउटपुट: HELLO WORLD

3. toLowerCase(): यह फंक्शन स्ट्रिंग के सभी अक्षरों को लोअरकेस में रूपांतरित करता है।

उदाहरण:
var str = "HELLO WORLD";
console.log(str.toLowerCase()); // आउटपुट: hello world

4. indexOf(): यह फंक्शन स्ट्रिंग में एक निर्दिष्ट उपस्थिति से पहले उपस्थिती के आधार पर एक सबस्ट्रिंग का इंडेक्स लौटाता है।

उदाहरण:
var str = "Hello World";
console.log(str.indexOf("o")); // आउटपुट: 4
