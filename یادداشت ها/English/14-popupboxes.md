## Popup Boxes

### Alert Box

The alert() method in JavaScript is used to display a virtual alert box. It is mostly used to give a warning message to the users. It displays an alert dialog box that consists of some specified message (which is optional) and an OK button. When the dialog box pops up, we have to click "OK" to proceed.

```javascript
alert("hello world");
```

### Confirm box

Javascript confirmation dialog box is used to display a message to the user for confirming something.
Note: Confirmation dialog box gives two button “OK” and “Cancel”. The confirm() method returns true if Ok button is clicked else returns false.

```javascript
confirm("Are you sure?");
```

### Prompt Box

The prompt() method in JavyaScript is used to display a prompt box that prompts the user for the input. It is generally used to take the input from the user before entering the page. It can be written without using the window prefix. When the prompt box pops up, we have to click "OK" or "Cancel" to proceed.
When the user clicks "OK," the box returns the input value. Otherwise, it returns null on clicking "Cancel".

```javascript
let answer = prompt("What is your name ?");
console.log(answer);
```
