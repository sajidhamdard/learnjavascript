# Destrcutring :

Destrcutring ek syntax hota hai jiski help se hm Array/Object me se values
easily nikal ke variables me store kr skte hain.

### Destructuring Arrays

- Destrcutring of array values :

```
let arr  = [1,2,3,4,5];
let [a,b,c] = [arr];
console.log(a, b, c); // 1 2 3
```

- Yadi hume koi value skip krni hai to uske lie keval comma lgana hoga

```
let arr  = [1,2,3,4,5];
let [, , b, c] = [arr];
console.log(b, c); // 3 4
```

### Reverse values using destructuring :

- normal way

```
let a = 10;
let b = 20;
let c = a; //10
a = b; // a=20
b = c; //b = 10
console.log(a, b);
```

### reverse two numbers using destructring

```
let a = 10;
let b = 20;
[b, a] = [a, b];
console.log(a, b);
```

### Return two values from function:

Yadi hume kisi function se ek se jyada value return krni hai
to ye possible ni hai. But iske lie hum ek array function se return kr skte hain aur us
array me ek se jyada values push krke return kr skte hain

- return more than one value from function using array

```
function getvalues() {
  return [1, 2];
}

console.log(getvalues()); // [1,2]
```

### Destructuring of nested array:

Yadi array ke nested array hai to us nested array ki values ko
destructure krne ke lie hume b nested array bnana pdega

- for example :

- Nested Array destructuring

```
let arr = [1, 2, [3, 4, [6, 7, 8], 5], 6, 7];
let [, , [, , [, a]]] = arr;
console.log(a);

```

```
let arr = [1, 2, [3, 4, 5], 6, 7];
let [, , [, a]] = arr;
console.log(a);
```

### Setting default values:

Yadi hum ye chahte hai ki agar koi element array se hm nikal rhe hain aur vo element us array me ni hai to value undefined hogi. is case me hum kuch default value de skte hain. Yadi value array me hai to vo value pick hogi otherwise default value pick hogi

- default values

```
let arr = [1, 2];
let [a, b, c = 20] = arr;
console.log(a, b, c);
```

```
let arr = [1, 2, 5];
let [a, b, c = 20, d = 1000] = arr;
console.log(a, b, c, d);
```

### Destructuring Objects:

Destructuring objects ki help se hm object ko destructure kr
skte hain.

```
let obj  = {
    name : "learnjavascript",
    age : 21,
    address : {
        colony : "Madina Colony",
        pincode : 302012
    }
}
```

Extract value:
Value ko extract krne ke lie left side me curly braces me key ka nam
dena hota hai. Yea key ka naam exactly same hona chahiye otherwise error aayegi.Jo key ka naam hm dete hain vhi variable ka nam hota hai aur us key me jo value hai vo us variable ko assign ho jati hai\*/

```
let {name, age} = obj;
console.log(name, age); //learnjavascript 21
```

Different property name:
Yadi hume koi property ko extract krke use kisi variable me
store krana hai to hm use variable ko rename b kr skte hain. rename krne ke lie property ka naam ke bad colon lgana hota hai.

```
let {name:myName, age : myAge} = obj;
console.log(myName, myAge); //learnjavascript 21
```

Default values:
Yadi kisi Key ke lie object me koi value ni hai to us key ki value
undefined hogi. Is case me yadi hum koi default value chahte hai to de skte hain. Default value dene ke lie key ke bad equal to lgake value deni hoti hai.Default value tabi assign hogi jab us key ke lie object me koi b value ni hai

```
let obj  = {
    name : "learnjavascript"
}
let {name, age} = obj; //learnjavascript undefined
let {name, age= 30}; //learnjavascript 30 default value hai age ki

let obj  = {
    name : "learnjavascript",
    age : 50
}

let {name, age= 30}; //learnjavascript 50 default value hai age ki
```

Nested Object:
Destructuring me hum nested objects ko b extract kr skte hain. Aisa
krne ke lie hume nested object vala tarika use krna hoga

- for example:

```
let obj  = {
    name : "learnjavascript",
    age : 21,
    address : {
        colony : "Madina Colony",
        pincode : 302012
    }
}

let {name, address : {pincode}} = obj;
console.log(name, pincode); //learnjavascript 302012
console.log(name, address); //learnjavascript {address object}
```

In Function:
Yadi hum object kisi function ko pass kr rhe hain to is case me
hum complete object us function ko pass krte hain. Pr ye tarika tab hi shi hai jab hm pura object use me le rhe hain. Yadi hum us object me se kuch specific values hi pick kr rhe hain to aise case me hm function me object Destructuring ki help se values ko us object se destructure kr skte hain.

- for example

- Without Destructring

```
let obj  = {
    name : "learnjavascript",
    age : 21,
    address : {
        colony : "Madina Colony",
        pincode : 302012
    }
}
printDetails(obj);
function printDetails(obj){
    console.log(obj.name, obj.address.pincode);
}
```

- With Destructring

```
function printDetails({name, address : {pincode}}){
    console.log(name, pincode);
}
```

Shallow Copy:
Shallow copy ka matlab yeh hai ki jab b hm ek non primitive data type ko dusre variable me store krte hain vah kisi ek me b change krte hain to dono me change hota hai pr yeh change sirf Non Primitive data ke lie hai hota hai. Primitive data jo ki top level pr hai usme kuch b change krenge to dono me change ni hoga.

-for example:

```
let obj = {
  name: "learnjavascript",
  age: 21,
};

let obj1 = Object.assign({}, obj);
obj1.name = "Sajid"; //obj.name me change ni hoga kuki name field ki value ek string hai
console.log(obj, obj1);//learnjavascript Sajid
```

- 2nd example:

```
let obj = {
  name: "learnjavascript",
  age: 21,
  address: {
    pincode: 302012,
  },
};

let obj1 = Object.assign({}, obj);
obj1.address.pincode = 302020; //Kuki address ki value ek object hai islie change krne pr dono variables me change hoga
console.log(obj.address.pincode, obj1.address.pincode);
```

Deep Copy:
Yadi hum ye chahte hai ki object me koi value chahe primitive ho ya non primitive usme change kren to dono jgah change ni hona chahiye. Iske lie fir hm shallow copy krne ki bjay deep copy krenge
Deep copy krne ka asan tarika yeh hai ki hm Object ko phle string me convert krne vah fir us string ko dubara se Object me convert kren

- for example:

```
let obj = {
  name: "learnjavascript",
  age: 21,
  address: {
    pincode: 302012,
  },
};

let obj1 = JSON.parse(JSON.stringify(obj));
obj1.address.pincode = 302020;
console.log(obj.address.pincode, obj1.address.pincode); //302012 302020
```

Spread Operator:
Spread operator ki madad se hm aisa koi b data jo iterable type
ka hai like Array, Set, Object etc ko extract/unpack kr skte hain

- Spread operator 3 dots se bnta hai ...

- Assigning values : Yadi hume ek array dusre array me assign krna hai to hm direct assign kr skte hain.

- for example:

```
let arr = [1, 2, 3, 4, 5];
let arr2 = arr;
arr2.push(100);
console.log(arr, arr2);
```

Upar vale case me is trah se assignment krne pr dono array me se yadi kisi b array me change krte hain to dono array me change hoga.
Yadi hum ye behaviour ni chahte hai to hm spread opeator ki madad se assignment kr skte hain. Jab spread opeator ki madad se assignment hota hai to normal copy na hoke shallow copy hoti hai.

- for example:

```
let arr = [1, 2, 3, 4, 5];
let arr2 = [...arr];
arr2.push(100);
console.log(arr, arr2);
```

- Is case me arr2 me change krne pr arr me koi change ni hoga

- Copy Array :

```
let arr = [1, 2, 3, 4, 5];
let arr2 = [...arr];
```

### Join 2 Arrays\_:

Yadi hume ek se jyada arrays ko join krna hai to hum comma
seperated arrays deke join kr skt hain

- for example

```
let arr = [1, 2];
let arr2 = [6,7];
let arr3 = [...arr, ...arr2];
console.log(arr3); // 1 2 6 7
```

### String to array using spread:

Yadi String ko characters ke array me convert krna hai
to hum spread operator ki help se kr skte hain

- for example

```
let str = "learnjavascript";
let arr = [...str];
console.log(arr); // ['W', 'e' , 'C', 'o', 'd', 'e']
```

Passing arguments in function:
Yadi hum kisi fuction ko array pas kr rhe hain aur us function ek andar array se index ka use krke values nikal rhe hain to aisa
na krke hum ye kaam spread operator ki help se easily kr skte hain

- Without spread operator

```
let arr = [1, 2, 34, 4, 5, 56, 7, 7];
sum(arr);
function sum(arr) {
console.log(arr[0] + arr[1] + arr[2]); //37
}
```

- With Spread operator

```
sum(...arr);
function sum(a, b, c) {
console.log(a + b + c); //37
}
```

- Shallow copy :

```
let obj = {
name : "learnjavascript",
age : 21
}

let obj1 = {...obj};
```

The Rest Parameter:
Rest parameter ka symbol spread opeartor ki trah hi hota hai
lekin rest parameter ka kaam different hota hai. Rest parameter hm rest/bachi hui values ko extract krne ke lie kaam me lete hain

### Assign values:

Rest opeartor equal to ke left side me use hota hai. Rest operator
last elemt hona chahiye. Vah rest parameter bachi hui jitni b values hain un sbko is rest parameter vale variable me store kra dega.

- For example:

```
let arr = [1,2,3,4,5];
let [a, ...b] = arr;
console.log(a, b); //1 [2,3,4,5]
```

Rest element last element:
Rest element last element hona chahiye otherwise error aayegi.

- For example:

```
let arr = [1,2,3,4,5];
let [a, ...b, c] = arr;
console.log(a, b, c); //error
```

### Assign values in object:

Yadi array ki trah hi hum bachi hui sari values kisi
variable me dalna chah rhe hai to hm spread operator ka use kr skte hain. Spread operator bachi hui sari key, values ko ek object bnake us rest paramater vale variable me store kra dega

- for example:

```
let obj = {
name :"learnjavascript",
age : 21,
address : "Jhotwara"
}

let {name, ...obj1} = obj;
console.log(name, obj1); //learnjavascript {age : 21, address : "Jhotwara"}
```

### Variable arguments in function:

Yadi koi aisi situation hai ki jisme function ko variable arguments lene hai means argument ka count fix ni hai to aise case ko handle
krne ke lie hum rest parameter use me le skte hain. Rest parameter us function ko pass kie gye sare arguments ka ek array bnake us array me store kr dega

- for example

```
for 2 arguments
let a = 1;
let b = 2;
sum(a, b);
function sum(a, b) {
console.log(a+b);
}
```

- for 3 arguments

```
let a = 1;
let b = 2;
let c = 3
sum(a, b, c);
function sum(a, b,c ) {
console.log(a+b+c);
}
```

Upar vali approach se yadi hum code likhenge to hume bar bar code change krna pdega Islie hm rest parameter ka use krenge

```
let a = 1;
let b = 2;
sum(a, b); //3
sum(a, b, 10); //13
sum(12, 20 , 19, 40, 50, 60); //201
function sum(...arr) {
let sm = 0;
for(let val of arr) {
sm = sm + val;
}
console.log(sm);
}
```

### Short Circuiting:

Short circuting hm || operator ya && operator ki madad se
kr skte hain. Short circuiting falsy values ke lie kaam ni krta hain
jaise ki 0, false etc. Yadi hume inke lie b chlana hai to Nullish Coalescing Operator ?? ka use lenege.

- Example of ||:
  || me jab tak true value ni mil jati check kia jayega. Jaise hi true value milegi search krna band ho jayega. Aur yadi last tak true value ni mili to last value hi answer hoga

```
let a = 0 || 10; // 10
let b = 0 || null || 30 || 10; //30

```

### Example of &&:

&& me jab tak value true hai search krega. Jaise hi false value milegi search krna band ho jayega aur answer vah false value ayegi. But other case me yadi flow last elemlent tak jata hai to fir last element hi answer hoga chahe vo true ho ya false.

```
a = 0 && 10; // 0
b = 0 && null && 30 && 10; //0
let c = 10 && 20 && null; // null
let d = 20 && 30 && 50; // 50
```

### Calling function using && :

&& Operator ki help hm function ko b call kr skte hain` function tabi call hoga jab phli conditon true hogi

- for example:

```
30 && printHello(); //Hello
0 && printHello(); //No output
function printHello() {
  console.log("Hello");
}
```

### Nullish Coalescing Operator ?? \*:

Yeh operator Short circuiting operator || ki trah hi kaam krega lekin yeh operator keval null and undefined ke lie ni chlta hai. Baki sari values ke lie chlega

### for example:

```
let a  = 0 ?? 10;  //0
let b  = false ?? 30; // false
let c = null ?? undefined ?? 50; //50
let d  = null ?? undefined; //undefined
```

### Logical Assignment operator:

Hm short circuiting and equal opeator ka use krke
ek short way me values assgin kr skte hain. Logical assignment operator ka yeh negative point hai ki hm ise sirf single condtion ke lie use kr skte hain.

### for example:

```
let x  = 10;
if(!x) {
  x = 20;
}
```

- Same example Logical assignment operator ki madad se b likh skte hain

```
let x  = 10;
x ||= 20; // 10

```

let y = 0;
y ||= 30; //30

```

- Same hm && and ?? operator ke sath b use kr skte hain

```

let x = 10;
x &&= 20; // 20

```


```

let y = 0;
y &&= 30; //0

```

```

let x = 0;
x ||= 20; // 20
x ??=20; //0

```

```

let y = false;
y ||= 30; //30
y ??= 30; //false

```

```

let z = null;
z ||= 40; //40
z ??= 40; //40

```

### Enhanced Object literals:
Modern features me object literals likhne ke ways me kuch
changes hue hain. aise 3 changes niche explain kie hain

- Exactly same name:
Yadi hm object me kisi variable ke through value dal rhe hain
aur hm ye b chahte hain ki key ka naam vhi hoga jo variable ka naam hai to hume aise case me sirf variable ka naam likhna hota. Value automatic assign ho jayegi. Yeh value vhi value hogi jo us varible ki value hai.

```

let myName = "learnjavascript";

let obj = {
myName,
};
console.log(obj); // {myName: 'learnjavascript'}

```

### function in object:
Yadi hum object me function bna rhe hain to hume : vah function
likhne ki jrurat ni hai.

- for example :

- Old way

```

let obj = {
sum: function (a, b) {
console.log(a + b);
},
};

```

- New way
- Upar vale function ko niche vale function ki trah b likh skte hain

```

obj = {
sum(a, b) {
console.log(a + b);
},
};

```

### Computed Property names:

Generally object me keys ka name fix hota hai but agar humari aisi requirement hai ki hm key ko calculate/compute krna chahte hai to kr skte hain. Aisa krne ke lie hume array brackets ka use krna hoga vah in brackets ke andar jo b expression likhni hai vah likh skte hain

- for example :

```

let a = "age";
obj = {
[a + 2]: "learnjavascript",
[10+20] : 100
};
console.log(obj); //{age2: 'learnjavascript', 30 : 100}

```

### Optional Chaining:

Yadi object ke andar nested object hai aur hm us nested object se koi value extract kr rhe hain to is case me type error aa skti hai. Ye case tabi hoga jab jo key humne likhi vah key last key na ho aur object me vo key available na ho Yadi vah key last key hai to error ni ayegi, undefined aayega.

- for example :

```

let obj = {
address: {
otherAddress: {
pincode: 302012,
},
},
};
console.log(obj.address.otherAddress.pincode); //302012
console.log(obj.address.otherAddress.pincodes); //undefined
console.log(obj.address.address.pincode); //type error

obj = {
address: {},
};

console.log(obj.address.otherAddress.pincode); //TypeError: Cannot read properties of undefined (reading 'pincode')
console.log(obj?.address?.otherAddress?.pincode); ///undefined

```

- Optional chaingin ko hm khi jgah pr use kr skte hain

- for example: Hum ye check kr skte hain ki array empty hai ya nhi

- Checking array is empty

```

let arr = [1, 2, 4, 5];
console.log(arr[2]?.address?.pincode); //undefined

let arr = [1, 2, { address: { pincode: 302012 } }, 4, 5];
console.log(arr[2]?.address?.pincode); //302012

```

### Calling function:

Yadi functiion bna hua ni hai aur hum use call kr rhe hain to error aayegi. But is error ko htane ke lie hum optional Chaining ka use kr skte hain

- for example :

```

let obj = {};
obj?.printHello?.(); //No error

let obj = {};
obj?.printHello(); //Error

```

- Using optional Chaining in conditon :

```

let obj = {
name: "Sajid",
age: 21,
myAddress: {
pincode: 302012,
address: {
city: "Jaipur",
state: "Rajasthan",
},
},
};

```

- Without optional chaining

```

if (
obj &&
obj.myAddress &&
obj.myAddress.address &&
obj.myAddress.address.city
) {
console.log("Hello");
} else {
console.log("City Not present");
}

```

- With optional chaining

```

if (obj?.myAddress?.other?.city) {
console.log("Hello");
} else {
console.log("City Not present");
}

```

```
