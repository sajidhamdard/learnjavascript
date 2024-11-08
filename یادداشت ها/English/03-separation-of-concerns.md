# Separation of Concerns

### What is separation of concerns principle ?

The separation of concerns principle in JavaScript refers to the practice of separating different parts of a program or application into distinct and independent units, with each unit responsible for a specific functionality or concern. This allows for better organization, maintainability, and scalability of the codebase. For example, in a Web application, the concerns of layout, styling, and scripting can be separated into different modules or files. This allows for easier testing, debugging, and updating of individual parts of the application without affecting the rest of the codebase

### How to link JavaScript file in html ?

You can link a JavaScript file in an HTML file using the <script> tag. The <script> tag is used to embed JavaScript code in an HTML document. To link a JavaScript file, you would use the "src" attribute in the <script> tag to specify the location of the file.

- For example
  if you have a JavaScript file called "main.js" in the same directory as your HTML file, you can link to it by using the following code in the <head> or <body> section of your HTML file:

```html
<script src="main.js"></script>
```

You can also include the JavaScript code directly within the <script> tag

```html
<script>
   //JavaScript code goes here
</script>
```

It's important to note that the <script> tag should be placed either in the <head> or <body> section of the HTML file, depending on when you want the JavaScript to be executed. If you put it in the <head> section, the JavaScript will be executed before the page is fully loaded. If you put it in the <body> section, the JavaScript will be executed after the page is fully loaded.
