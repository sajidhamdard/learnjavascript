### Question 1. Take two numbers and take a value which should be the sum of the two numbers plus some other number. Now findout the 3rd number.

```
 let a = 50;
 let b = 20;
 let sum = 100;
 console.log(sum - (a + b));
```

### Question 2. Ask the below questions:
   - What is your English marks in 10th?
   - What is your Science marks in 10th?
   - What is your Math marks in 10th?
   - What is your Hindi marks in 10th?
   - What is your SST marks in 10th?
     Now calculate percentage by taking all the 5 subjects numbers.

```
let hindi = Number(prompt("What is your Hindi marks"));
let english = Number(prompt("What is your English marks"));
let math = Number(prompt("What is your Math marks"));
let science = Number(prompt("What is your Science marks"));
let sst = Number(prompt("What is your SST marks"));
let total = hindi + english + math + science + sst;
let percentage = (total / 500) \* 100;
console.log(percentage);
```

### Question 3. In which century were your born? find out by asking birth year. Use Math.floor function to remove decimal portion of the century. If you are born in any year after 1999 then century will be 20 and in the same way if you are born after 1899 then century will be 19th.

```
   let year = 2002;
   let century = Math.floor(year / 100) + 1;
   console.log(century);
```

### Question 4. Add 20 in your name and check value in console.
   Add true to your name and check output
   Add 30+"learnjavascript" and check type of the final value.

```
console.log("learnjavascript" + 20);
console.log(true + "learnjavascript");
console.log(30 + "learnjavascript");
```

### Question 5. Create Reverse Game. Ask any question with 2 possible answers. If user selects first option then show second option in alert and vice versa.

For example: Do you drink coffee or tea? and If user says coffee then show Tea in alert and if user says tea then show coffee.

```
   let ans = prompt("Do you drink coffee or tea?");
   if (ans === "coffee") {
   console.log("Tea");
   } else if (ans === "tea") {
   console.log("coffee");
   } else {
   console.log("Wrong choice");
   }
```

### Question 6. Test below conditions using &&, || and not logical operators. Take any number check if number is even and also check if number is multiple of 4 or not. If both conditions are true then check if number is less than 100 or number is 84 or not.

```
   let num = 20;
   if (num % 2 === 0 && num % 4 === 0 && (num < 100 || num === 84)) {
      console.log("yes");
   } else {
      console.log("no");
   }
```

### Question 7. Take city temprature. If temp is less than 10 degree then print very cold. If city temp is less than 30 and greater than equal to 10 then print cold. If temp is between 30 to 40 then print Hot. Else print Very hot.

```
let temp  = 30;
if(temp < 10) {
   console.log("Very Cold");
} else if(temp < 30 && temp >= 10 ) {
   console.log("Cold")
} else if(temp <= 40 && temp >= 30) {
   console.log("Hot")
} else {
   console.log("Very Hot");
}
```

### Question 8. Using prompt ask user about his/her age. If user is greater than 18 then show user message "Do you want to open account?" If yes click on Okay button then ask your 4 below questions

   - What is your name ?
   - What is your aaadhar number ?
   - What is your address?
   - What is your mobile number?

and print all these details in console. If click on cancel then show message "Sorry, please visit again."

```
let age  = Number(prompt("What is your age?"));
if(age > 18) {
   let choice  = confirm("Do you want to open account?");
   if(choice) {
      let name = prompt("What is your name?);
      let aadhar = prompt("What is your Aadhar number?);
      let address = prompt("What is your address?);
      let mobile = prompt("What is your mobile?);
      console.log(name, aadhar, address, mobile);
   }
}
```

### Question 9. Create a simple calcultor. Firslty ask your about the operation. Like "What do you want to do?" User can type choice in any way like +,- or plus, minus or add, sub etc. After that ask user about first number and then second number and finally show the desired output.

```
   let ans = prompt("What do you want to peform?");
   let num1 = Number(prompt("Enter number 1"));
   let num2 = Number(prompt("Enter number 2"));
   if (ans === "+") {
      console.log(num1 + num2);
   } else if (ans === "-") {
      console.log(num1 - num2);
   } else if (ans === "/") {
      console.log(num1 / num2);
   } else if (ans === "_") {
      console.log(num1 _ num2);
   } else {
      console.log("Wrong choice");
   }
```

### Question 10. Who is most intelligent in your family? Ask 10th percentage of each family member and check who got the highest marks. If total family members are more than 4 then you can use Math.max() function

```
let p1 = Number(prompt("What is your percentage?"));
let p2 = Number(prompt("What is your percentage?"));
let p3 = Number(prompt("What is your percentage?"));
let p4 = Number(prompt("What is your percentage?"));
let p5 = Number(prompt("What is your percentage?"));
let p6 = Number(prompt("What is your percentage?"));
let ans = Math.max(p1, p2, p3, p4, p5, p6);
console.log(ans);
```
