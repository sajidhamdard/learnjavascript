### what is JSON

JSON (JavaScript Object Notation) ek format hain jiske use se data ko exchange karne ke liye web applications mein istemaal kiya jaata hai. Yeh ek lightweight format hain jo human-readable bhi hota hain aur easily parse bhi ho jaata hain.

JSON ka use JavaScript mein data transmit karne ke liye kiya jaata hain, jaise ki server se client tak ya phir client se server tak. JSON format mein data key-value pairs ke form mein hota hain. Har key ek unique identifier hoti hain aur uske saath associated value hoti hain. Key aur value dono hi double quotes ke bich mein likhe jaate hain aur colon in dono ko separate karta hain.

Example ke taur par, agar hum ek student ki information ko JSON format mein store karna chahte hain toh woh is tarah se dikhega:

```
{
  "name": "Rohan",
  "age": 21,
  "gender": "male",
  "marks": [80, 85, 90],
  "contact": {
    "email": "rohan@example.com",
    "phone": "1234567890"
  }
}
```

Is example mein, `name`, `age`, `gender`, `marks`, aur `contact` keys hain aur unke corresponding values hain. `marks` array format mein hain, aur `contact` ek object hain, jiska inner key-value pair hai.

Iss JSON data ko JavaScript mein use karne ke liye, hum `JSON.parse()` method ka use karte hain jisse isse JavaScript objects mein convert kiya ja sakta hain:

```
const studentData = '{ "name": "Rohan", "age": 21, "gender": "male", "marks": [80, 85, 90], "contact": { "email": "rohan@example.com", "phone": "1234567890" } }';

const student = JSON.parse(studentData);

console.log(student.name); // Output: Rohan
```

Iss code snippet mein, `JSON.parse()` method ka use karke hum `studentData` ko JavaScript objects mein convert karte hain. Phir hum `console.log()` se `student` object ke `name` property ko print karte hain jismein `"Rohan"` output aayega.

Yehi JSON format ko use karke data exchange karne ka basic example hain.

### XML

XML (Extensible Markup Language) is a way to store and exchange data in a structured format, using tags similar to HTML. In JavaScript, XML can be used to transfer data between different systems or applications that may not share the same programming language or database technology.

For example, let's say you have a web application that needs to get data from an external API (Application Programming Interface). The response from this API may come back in XML format, containing information about products, customers, or some other data. You can parse this XML response in JavaScript using built-in methods such as `XMLHttpRequest` or `fetch`.

Here's an example of XML data:

```xml
<bookstore>
  <book category="cooking">
    <title>Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
  </book>
  <book category="children">
    <title>Harry Potter and the Philosopher's Stone</title>
    <author>J.K. Rowling</author>
    <year>1997</year>
    <price>10.99</price>
  </book>
</bookstore>
```

In this example, we have an XML document representing a bookstore, with two books in different categories, each with its own title, author, year, and price.

You can access the data in this XML document using JavaScript by first creating an instance of the `DOMParser` object, which allows you to parse the XML data into an object that you can work with:

```javascript
const xmlData = `
<bookstore>
  <book category="cooking">
    <title>Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
  </book>
  <book category="children">
    <title>Harry Potter and the Philosopher's Stone</title>
    <author>J.K. Rowling</author>
    <year>1997</year>
    <price>10.99</price>
  </book>
</bookstore>
`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlData, "text/xml");
```

In this example, we first define the XML data as a string. We then create a new `DOMParser` object and use its `parseFromString` method to parse the XML data into an `XMLDocument` object called `xmlDoc`.

Once you have parsed the XML data into an `XMLDocument` object, you can access its elements and attributes using JavaScript:

```javascript
const books = xmlDoc.getElementsByTagName("book");

for (let i = 0; i < books.length; i++) {
  const book = books[i];
  const title = book.getElementsByTagName("title")[0].textContent;
  const author = book.getElementsByTagName("author")[0].textContent;
  const year = book.getElementsByTagName("year")[0].textContent;
  const price = book.getElementsByTagName("price")[0].textContent;

  console.log(`${title} by ${author}, published in ${year}, costs $${price}`);
}
```

In this example, we use the `getElementsByTagName` method to get an array of all the `book` elements in the XML document. We then loop over each `book` element and extract its `title`, `author`, `year`, and `price` elements using the `getElementsByTagName` method again. Finally, we log the information about each book to the console.
