### Map:

Map bhi ek datastructure hai jiska use key value form me data store krne ke kaam aata hai. Key ke according data map hota hai islie is datastructure ko Map khte hai.

- Creating a new map:
- syntax :

```
var map = new Map();
```

- Adding a value in map :

```
map.set(1, 100);
map.set("A", "hello");
```

left side me key hoti hai vah right side me value hoti hai. Yadi
hum same key pr dubara value add krte hain to purani value new value
se replace ho jati hai

- for example:

```
map.set(1, 100);
map.set("A", "hello");
map.set(1, 1000);
```

to is example me 1 key pr value 1000 hogi na ki 100 kuki humne value
ko replace kr dia hai.

### Chaining in Map:

Chaining ka matlab yeh hai ki bar bar map variable ka reference use krne ki bjay hum set function pr direct next set function call kr skte hai. Kuki set function vah map hi return krta hai.

- for example

```
var map = new Map();
map.set(1,100);
map.set('A', "hello");
```

- Isko hum Chaining ki through kr skte hain.

```
map.set(1,100).set('A', "hello");
```

### Get function:

Map ka get function argument me key vara hai vah us key se mapped value return krta hai

- for example

```
map.get(1); //100 return krega
map.get('A'); //Hello return krega
```

### has function:

Map ka has function argument me key vara hai aur check krta hai ki vah key map me hai ya nhi. agar vah key map me hai to true return krta hai otherwise false return krta hai.

- for example:

```
map.has(1); //true return krega kuki 1 key hai
map.has(12); //false return krega kuki 12 key ni hai
```

### size function:

map ka size function map me kitni key hain unka count return
krta hai.

- for example:

```
var map = new Map();
map.set(1,100);
map.set('A', "hello");

map.size(); //2 return krega kuki is map me 2 keys hain
```

### clear function:

map ka clear function map ko khali kr deta hai. Khali ka matlab yah hai ki map se sare key, value entries remove ho jayengi

```
var map = new Map();
map.set(1,100);
map.set('A', "hello");
{1:100, 'A':'hello'}
map.clear(); // {} map khali ho jayega
```

### Iteration of Map:

1. Using for of loop :

```
var map = new Map();
map.set(1,100);
map.set('A', "hello");

for(var value of map) {
    console.log(value); // [1, 100] ['A', 'Hello']
}
```

Yadi hum map ko for of loop se iterate krte hain to value me hume
ek array milta hai vah us array me 2 values hoti hai. 0 index pr key
hoti hai vah 1 index pr value hoti hai. Yadi hume key aur value ko separate use krna hai to array me se index ki madad se use krna hoga

- for example:

```
for(var value of map) {
    console.log(value[0]); //key
    console.log(value[1]); //value
}
```

2. forEach function

```
var map = new Map();
map.set(1,100);
map.set('A', "hello");
map.forEach(function(value, key) {
    console.log(value, key);
});
```

Yadi hume map ko foreach function se iterate krna hai to hume foreach function ko ek function expression pass krni hoti hai vah us function me 2 argument lene hote hai. first argument me value pass hogi vah 2nd arugment me key pass hogi

### Map to Array:

Map to array krne ke lie hum ... 3 dots ki madad se kr skte hain
3 dots ko spread operator bolte hain.

```
var map = new Map();
map.set(1,100);
map.set('A', "hello");
var arr  = [...map]; //Map to Array
```

### Array to Map:

Yadi hume array to map me convert krna hai to ek bda array bnana hoga vah us bde array me hume chote chote arrays bnane honge. har array me 2 elements honge. 1st index pr key hogi vah 2nd index pr value hogi.first is array ko Map me pass krna hota hai

```
var map = new Map([
    [1, 100],
    ['A', 'Hello']
]); //Array to Map
```

### Object to map:

Yadi hume Object se map me convert krna hai to hum Object.entries function ki madad se kr skte hain.

```
var obj  = {
    name : "learnjavascript",
    age : 21
}

var map = new Map(Object.entries(obj));
```

### Array as key:

Yadi hum map me array as a key use kr rhe hain to hume us array ka reference rkhna hota hai otherwise hum us array pr jo value hai use get ni kr skte hain. JavaScript me Array ke object hota hai islie Array ka reference rkhna jruri hai.

- For example:

```
var map = new Map();
map.set([1, 2, 3], 10000);
console.log(map);
console.log(map.get([1, 2, 3])); //undefined
```

Yeh work ni krega kuki dono array ek alag alag object hain. Iska matlab yeh hai ki dono ek jaise dhik rhe hain lekin fir b internally Javascript inko alag alag man rha hai. Yadi hume ise work krvana hai to hume array ko ek variable m dalke rkhna hoga. aur bad me value get krte time same variable use krna hoga

- For example:

```
var map = new Map();
var arr = [1, 2, 3];
map.set(arr, 10000);
console.log(map);
console.log(map.get(arr)); //10000
```
