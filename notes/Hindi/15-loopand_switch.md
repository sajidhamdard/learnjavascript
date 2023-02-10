### ==========loop=========

Actually किसी code of block को repeatedly run करने का सबसे easy way looping है ,

- JavaScript में different Looping Statements हैं -

### ==========while loop==========

While Loop Simply Nested Statements को Execute करता है , जब तक कि दी हुई Condition false
न हो। जब तक Condition true है तब तक Loop Execute होगा। While Loop को Entry Control Loop
भी कहते हैं क्योंकि loop को Execute करने से पहले दी हुई condition Check होती है, condition True
होने पर ही Loop में Entry होती है।

- JavaScript while Loop Syntax:

```
while(condition / expression){
   //write your logic
}
```

```
var x = 1;
while (x <= 10) {
  document.write(x + ", ");
  /*increment by 1*/
  ++x;
}
```

- Note: Curly braces are not required for a single-line body

Means if else की तरह ही while loop में भी अगर सिंगल statement है तो हम Curly braces { } न भी
लिखें तो भी कोई Problem नहीं है।

- for example:

```
var x = 1;
while (x <= 3) document.write(x++);
```

### JavaScript Nested While Loop

इसके अलावा आप JavaScript में Nested While Loop का भी use कर सकते हैं , means While Loop के
अंदर एक और While Loop

- JavaScript Nested While Loop Example:

```
var x = 1;
while (x <= 10) {
  let y = 1;
  document.write(y + " ");
  while (y < x) {
    y++;
    document.write(y + " ");
  }

  ++x;
  document.write("<br>");
}
```

### ==========do while loop==========

while loop और do while loop में यही main difference भी है , while loop में सबसे पहले condition
ही check होती है उसके बाद ही code of block run होता है , अगर condition false है तो loop में entry
ही नहीं होगी , उसके उलट do while loop में सबसे पहले code of block run होगा और सबसे end में
condition check होती है , इससे कोई फर्क नहीं पड़ता कि condition सही है या गलत , Loop को एक बार
Run होना ही है।

- JavaScript do while Loop Syntax:

```
do{  //code of block
}
while(condition / expression);

```

- for example:

```
let x = 1;
do {
  document.write("It will run only once");
} while (x >= 10);
```

### ==========for lop==========

Actually किसी code of block को repeatedly run करने का सबसे easy way looping है ,
while loop या do while loop में अगर हम ध्यान से देखेंगे तो 3 steps को follow किया गया है -

- Initialization
- Condition
- And Increment / Decrement

while loop या do while loop में 3 steps हम अलग अलग लिखते थे।

अब For Loop में इन तीनो statements को अलग अलग लिखने की वजाय हम एक साथ लिखते है जिससे
Looping और easy हो जाती है।

JavaScript में For Loop हम तब use करते हैं जब हमें पता हो कि Loop को कितने बार रन करना है ,
और यही main Difference है While Loop और For Loop में।

- for Lop Syntax:

```
for(initialization ; condition ; increment / decrement)
{
 //code of block
}
```

1.First Expression For Loop में Initial Expression हैं जहाँ हम किसी variable को Define करते हैं ।
2.Second Expression Conditional Expression होता है और हर iteration में second expression
execute होता , Condition True होने पर ही loop में Entry होती है otherwise हम Loop से बाहर हो
जाते हैं। 
3.सबसे last में Third Expression रन होता है , जहां पर हम किसी variable को Increment /
Decrement करते हैं। यह भी हर iteration के last में ही execute होता है। , हालाँकि यह Optional
होता है , यह variable हम Loop के अंदर भी Increment / Decrement कर सकते हैं ।

- for example:

```
let number = 5;
for (let x = 1; x <= 10; x++) {
  document.write(number + " x " + x + " = " + x * number + "<br>");
}
```

इसके अलावा हम JavaScript में Array को For Loop की help से आसानी से iterate कर सकते हैं।

```
var array_var = [12, 234, 45];
for (let index = 0; index < array_var.length; index++) {
  document.write(index + " , Value : " + array_var[index] + "<br>");
}
```

Example में length एक Predefined JavaScript keyword है जिसका use Iterate Object
(String , Object , Array) की length जानने के लिए किया जाता है। \*/

Nested While Loop की तरह ही हम Nested For Loop (For Loop Inside Another For Loop) भी use
कर सकते हैं।

- for example:

```
for (let x = 1; x <= 5; x++) {
  for (let y = 1; y <= x; y++) {
    document.write(y + " ");
  }
  document.write("<br>");
}
```

### ==========for in lop==========

javaScript में for in loop का use की object (जो कि key : value pair में data store किये हो )
को iterate करने के लिए use करते हैं। for in loop का main purpose enumerable Object properties
को iterate करना है ।

- for in loop Syntax:

```
for(variable in object)
{
  //write your logic here
}

```

variable : यह variable हर Iteration में object की property store करता है। कह सकते हैं कि index
store करता है।

object : यह actual object होता है जिसके लिए Looping Apply कर रहे हैं।

### Why Use for...in?

for in loop का main purpose Object properties को iterate करना है , JavaScript में Array के
साथ इसका use उतना लाभकारी नहीं है। Array iterate करने के लिए हम forEach या for of loop का use
करते हैं।

इसके अलावा इसका use debugging purpose करने के लिए किया जाता है , किसी object की properties
को check करने के लिए (Using Console or otherwise) .

- for example:

```
let string = "Welcome";
let index;
for (index in string) {
  document.write(`property : ${index} and value : ${string[index]} <br>`);
}
```

for in loop की हेल्प से हम आसानी से किसी object की values को modify कर सकते हैं।

```
var object = {
  name: "Rahul Rajput",
  age: 54,
  designation: "Web Developer",
};
```

```
let property;
document.write(`Before Change : <br>`);
for (property in object) {
  document.write(`property : ${property} and value : ${object[property]} <br>`);
}
document.write(`After Change : <br>`);
for (property in object) {
  if (property == "age") object[property] = 30;

  document.write(`property : ${property} and value : ${object[property]} <br>`);
}
```

### ==========for of ==========

जिसका main purpose iterable Object (जैसे कि Array) की values को iterate करना है। Means
for of loop direct object value से interact कराता है।

इसके साथ साथ built-in String, Array, array-like objects (e.g., arguments or NodeList),
TypedArray, Map, Set, और user-defined iterables भी iterate करता है।

- JavaScript for of Vs for in Vs for Loop

for of loop का main purpose iterable Object (जैसे कि Array) की values को iterate करना है।
जबकि for in loop का main purpose Object की enumerable properties keys को Iterate करना है।

और for loop की तुलना में for of loop काफी easy to understand और weaknesses को improve किया
है , by eliminating the counting logic and exit condition.

- for of loop syntex:

```
for(val of object)
{
  //write your logic here
}
```

- for example:

```
var object = new String("Welcome");
for (val of object) {
  document.write(`value : ${val}<br>`);
}
```

Explain - हम जानते हैं कि JavaScript में String को new keyword के through as a Object define
कर सकते हैं , तो Example में सबसे पहले एक string object define किया then उस पर for of loop
apply किया। जो की direct हमें String object की values iterate कर रहा है।

- for of loop : Iterating Array

```
var array_var = [12, 34, 56, "strin", true];
for (val of array_var) {
  document.write(`value : ${val}<br>`);
}

```

### ==========switch statment==========

JavaScript में switch statement , किसी matched expression के लिए code of block Run करता है ,
यह लगभग else if की तरह ही work करता है जहा हम कई सारी Conditions में से True Condition वाला
statement ही Run होता था, और अगर एक भी condition match नहीं होती तो else part (default) run
होता था।

switch में हम case clause use करते हैं , और जो case expression से match करता है वही statement
execute करता है। और कोई case match न होने पर default statement execute होता है।

- switch Syntax :

```
switch (expression)
{
    case valueN:
       document.write("case 1");
        break;
    case valueN:
        document.write("Case 2");
        break;
    default:
        document.write("default case");
}
```

:expression - दिया गया expression , case में दी गयी value से match होता है।

:case clause - एक switch loop में कितने ही case clause हो सकते हैं , और case में दी जाने वाली value दिए गए expression से match करती है अगर expression match होता है ,तो उस case से associated code of block रन हो जाता है।

:break - expression match होने पर उस case से associated code of block रन होने के बाद break statement switch loop को terminate करता है।

:default - अगर कोई भी expression match नहीं होता है तो default statement run होता है।

- for example:

```
let x = "apple";
switch (x) {
  case "cake":
    document.write("x is cake");
    break;
  case "orange":
    document.write("x is orange");
    break;
  case "apple":
    document.write("x is apple");
    break;
  default:
    document.write("default case running");
}
```

- Note - जैसा कि आप example में देख रहे होंगे कि हर case के end में break keyword का use किया गया है , जिससे कि matched case statement ही run हो अगर हम ये break remove तो जिस case के साथ expression match करता है वहाँ से सभी statements (cases) switch Loop ख़त्म होने तक execute होंगे।

```
let x = "apple";
switch (x) {
  case "cake":
    document.write(`x is cake`);
    break;
  case "apple":
    document.write(`x is apple <br>`);
  case "orange":
    document.write(`x is orange <br>`);
  default:
    document.write(`default case running`);
}
```

देखा आपने कि break keyword remove करने पर जो case match होता है वहाँ से सभी statements (including default statement ) execute होते है।
