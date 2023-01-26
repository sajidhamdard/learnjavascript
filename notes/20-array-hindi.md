### What is Array:

Array ek Data Structure hota hai jiska use ek se jyada items ko store krane ke lie kia jata hai. Array me kisi b type ka data store kraya ja skta hai. Array me sare element contigous (memory me pas pas) memory block me save hote hain.

Arrays index based hote hai. Iska matlab ye hai ki hm array me elements ko index se access kr skte hain. Array ki index 0 se start hoti hai.

Javascript me array ek non primitive type hai. Array ek object hota hain. Yadi hume ek se jyada value store karvani hai to hume utne variable bnane pdenge jitni values hain. Is problem ko solve karne ke liye hum Array ka use karte hain.

Array me jis order me value insert ki hain usi oder me value niklegi. Yadi hum ko random order me value nikalni hain to index ka use kar skte hain.

Array dynamic nature ka hota hai. It means iski size dynamically apne aap badhegi ya kam hogi jaise jaise hum elements ko add/remove krenge.

-Array two type se bana skte hain:

- Literal way

  ```
  let arr= [1,2,3];
  ```

- Object way

```
  let arr = new array();
  console(arr[1]);
```

- Yadi hume Array ki size check krni hai to length property use kr skte hain

```
  console.log(arr.length);
```

### What is Looping Array:

Array ka nature iterable type ka hota hain. iska matlab yeh hain ki array par loop chlaya ja skta hain. yadi arrya par hum for loop, while loop, do while loop ka use karte hain to 0 se lekar array ki length se 1 kam tak loop chla skte hain. array par hum for of loop b chla skte hain.

- Javascript me set, map, string, etc by default Array support karte hain.

Array me kafi built-in functions hain jinhe use krke hm Array pr kaam kr skte hain

- Array functions:

# push():

push array function se array के end me एक या एक से ज्यादा elements को जोड़ा जाता है और उसके बाद array की length return करता है |

- Syntax for push():
  arr.push(addElement1,...addElementN)
- for example:

  ```
  var arr = [15, 20, 30, 50, 55];
  document.write("Array : " + arr + "<br />");
  document.write("Length of Array : " + arr.push(65) + "<br />");
  document.write("Array : " + arr + "<br />");
  document.write("Length of Array : " + arr.push(75, 70) + "<br />");
  document.write("Array : " + arr + "<br />");

  ```

  output:

Array : 15,20,30,50,55
Length of Array : 6
Array : 15,20,30,50,55,65
Length of Array : 8
Array : 15,20,30,50,55,65,75,70

# sort():

sort array method में alphabet और numeric array को sort किया जाता है | sort() method ख़ास string array के लिए बनाया गया है | sort function diye gye Array ko natural sorting order me sort krta hai. For example A, B se phle aayega. Isi trah 10, 2 se phle aayega. Numbers ko sort krne ke lie hm compare function bna skte hain.

- Syntax for sort():

  ```
  arr.sort(function(a,b) {
    return a-b; //ascending order
  });
  ```

- for example:
  ```
  var names = ["Rakesh", "Mukesh", "Ramesh", "Kamalesh"];
  document.write(names.sort() + "<br />");
  ```

output: Kamalesh,Mukesh,Rakesh,Ramesh

let num = [1, 2, 3, 4, 10, 100, 20, 50, 31];
console.log(
num.sort(function (a, b) {
return b - a;
})
);

output: [100, 50, 31, 20, 10, 4, 3, 2, 1]

```
let num = [1, 2, 3, 4, 10, 100, 20, 50, 31];
 console.log(
   num.sort(function (a, b) {
     return a - b;
   })
 );

 output: [1, 2, 3, 4, 10, 20, 31, 50, 100]
```

### pop():

pop() array method में array के last element को array से remove
करके return किया जाता है |

- Syntax for pop():
  arr.pop()

- for example:

```
 var arr = [15, 20, 30, 50, 55];

 document.write("Array : " + arr + "<br />");
 document.write("Removed Element : " + arr.pop() + "<br />");
 document.write("Array : " + arr + "<br />");
 document.write("Removed Element : " + arr.pop() + "<br />");
 document.write("Array : " + arr + "<br />");
 document.write("Removed Element : " + arr.pop() + "<br />");
 document.write("Array : " + arr + "<br />");

output:
 Array : 15,20,30,50,55
 Removed Element : 55
 Array : 15,20,30,50
 Removed Element : 50
 Array : 15,20,30
 Removed Element : 30
 Array : 15,20
```

### unshift():

unshift() method से array ki starting में एक या एक से ज्यादा element(s) को add किया जाता है और नए array की length को return किया जाता है |

- Syntax for unshift():
  arr.unshift(element1,...,elementN)

-for example:

```
 var arr = [1, 2, 3, 4, 5];
 document.write(
   "Length of Array after adding Elements: " + arr.unshift(6, 7, 8) + "<br />"
 );
 document.write(arr);

output:
 Length of Array after adding Elements: 8
 6,7,8,1,2,3,4,5
```

### shift():

shift() array method में array के शुरुआत के element को remove किया जाता है |

- Syntax for shift():
  arr.shift()

- for example:
  ```
  var arr = [15, 20, 30, 50, 55];
  document.write("Array : " + arr + "<br />");
  document.write("Removed Element : " + arr.shift() + "<br />");
  document.write("Array : " + arr + "<br />");
  document.write("Removed Element : " + arr.shift() + "<br />");
  document.write("Array : " + arr + "<br />");
  document.write("Removed Element : " + arr.shift() + "<br />");
  document.write("Array : " + arr + "<br />");
  ```

output:
Array : 15,20,30,50,55
Removed Element : 15
Array : 20,30,50,55
Removed Element : 20
Array : 30,50,55
Removed Element : 30
Array : 50,55

```

```

### toString():

toString() array method से array को string में convert किया जाता है |

- Syntax for toString():
  arr.toString()

- for example:
  ```
  var arr = [1, 2, 3, 4, 5];
  document.write("Type : " + typeof arr + "<br />");
  document.write(arr + "<br /><br />");
  document.write("Type : " + typeof arr.toString() + "<br />");
  document.write(arr.toString() + "<br />");
  ```

output:
Type : object
1,2,3,4,5

Type : string
1,2,3,4,5

```

```

### join():

join() array method में दिए हुए seperator से हर element को seperate किया जाता है |

- Syntax for join():
  arr.join(object_name)

- for example:

```
var arr = [10, 20, 30, 40, 50];
document.write(arr.join() + "<br />");
document.write(arr.join("."));

output:
10,20,30,40,50
10.20.30.40.50
```

### concat():

concat() array method में एक या एक से ज्यादा arrays को जोड़ा जाता है |

- Syntax for concat():
  arr1.concat(arr2, arr3, arrN)

- for example:

```
var arr1 = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8];
var arr3 = [9, 10, 11, 12];
document.write(arr1.concat(arr2, arr3) + "<br />");
document.write(arr2.concat(arr2, arr3) + "<br />");

output:
1,2,3,4,5,6,7,8,9,10,11,12
5,6,7,8,5,6,7,8,9,10,11,12
```

### splice():

splice() array method में array में elements add(s) या remove(s) किये जाते है और removed किये गए element को return करता है |

- Syntax for splice():
  arr.splice(startIndex, howMany, element1,..,elementN)

### Parameter :

startIndex : यहाँ पर जो index दी जाती है वहा से array के element(s) add या remove किये जाते है | अगर index array की length से बड़ा होता है तो कोई element remove नहीं होता बल्कि array के elements end पर add किये जाते है |

howMany : ये optional होता है | अगर कोई value दी नहीं जाती तो इसकी default value '0' होती है | मतलब कोई element remove नहीं होता | अगर कोई number दिया जाता है तो startIndex से इस number तक elements को remove किया जाता है |

(element1,..elementN) : यहाँ पर add किये जानेवाले element(s) को दिया जाता है |

- for example:

```
var arr1 = [1, 2, 3, 4, 5];
document.write("Removed Element(s) : " + arr1.splice(2, 3) + "<br />");
document.write("splice() Returned Array : " + arr1 + "<br /><br />");
var arr2 = [1, 2, 3, 4, 5];
document.write("Removed Element(s) : " + arr2.splice(2, 3, 5, 6, 5) + "<br />");
document.write("splice() Returned Array : " + arr2 + "<br");

output:
Removed Element(s) : 3,4,5
```

### splice() Returned Array : 1,2

Removed Element(s) : 3,4,5
splice() Returned Array : 1,2,5,6,5

### slice():

slice() array method में start और end index से नए array को return किया जाता है |

- Syntax for slice():
  arr.slice(start, end)

start : इस index से slice की शुरुआत होती है | यहाँ पर अगर negative index होता है तो array के end से slice किया जाता है |

end : इस index पर slice का end होता है | ये optional होता है | यहाँ ये दिया नहीं जाता तो start से array के सभी elements return किये जाते है |

- for example:

```
var arr = [15, 20, 30, 50, 55];
document.write(arr.slice(2) + "<br />");
document.write(arr.slice(2, 3) + "<br />");
document.write(arr.slice(2, -1) + "<br />");

output:
30,50,55
30
30,50
```

### sort():

sort() array method में alphabet और numeric array को sort किया जाता है | sort() method ख़ास string array के लिए बनाया गया है |

- Syntax for sort():
  arr.sort(compare_func)

compare_func : इस function से sort order define किया जाता है | ये optional होता है | अगर दिया नहीं जाता तो natural ascending order से sort किया जाता है |

- for example:
  Syntax for sort():

```
arr.sort(function(a,b) {
return a-b; //ascending order
});

arr.sort(function(a,b) {
return a-b; //descending order
});
```

- for example:

```
var names = ["Rakesh", "Mukesh", "Ramesh", "Kamalesh"];
document.write(names.sort() + "<br />");
output: Kamalesh,Mukesh,Rakesh,Ramesh

let num = [1, 2, 3, 4, 10, 100, 20, 50, 31];
console.log(
num.sort(function (a, b) {
return b - a;
})
);

output: [100, 50, 31, 20, 10, 4, 3, 2, 1]

```

```
let num = [1, 2, 3, 4, 10, 100, 20, 50, 31];
console.log(
num.sort(function (a, b) {
return a - b;
})
);

output: [1, 2, 3, 4, 10, 20, 31, 50, 100]
```

### reverse():

### reverse()

array method में दिए हुए array के elements को reverse किया जाता है |

- Syntax for reverse():
  arr.reverse()

- for example:

```
var arr = [15, 20, 30, 30, 50];
document.write(arr.reverse() + "<br />");

output:
50,30,30,20,15
```

### forEach():

forEach() array method में हर एक array element के लिए function execute किया जाता है |

- Example for forEach():

```
var arr = [10, 20, 30, 40, 50];
arr.forEach(function (element, index) {
document.write("[" + index + "]: " + element + "<br />");
});

output:
[0]: 10
[1]: 20
[2]: 30
[3]: 40
[4]: 50
```

### map():

map function , एक callback function या arrow function accept करता है , callback function में value और index number दोनों मिलते हैं जबकि arrow function में सिर्फ value मिलती है।

map() function Array के प्रत्येक value को user defined callback function में send करता है , और एक Array नई values के साथ return करता है।

- for example:

```
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let table_of_two = arr.map(function (value) {
return value \* 2;
});
document.write(table_of_two);

output:
2,4,6,8,10,12,14,16,18,20
```

### filter():

filter() array method में दिए हुए function से हर एक array के element को check करके उनका array return करता है | अगर array में से एक भी element function के statement के विरुद्ध होता है तो उस array के element को remove किया जाता है |

filter() function से original array पर कोई फर्क नहीं पड़ता |

- Example for filter():

```
function checkPositive(checkvalue) {
return checkvalue >= 0;
}
```

```
var arr1 = [1, 2, 3, 4, 5];
document.write(arr1.filter(checkPositive) + "<br />");
var arr2 = [1, 2, -3, 4, 5];
document.write(arr2.filter(checkPositive));

output:
1,2,3,4,5
1,2,4,5
```

### find():

find() array method में दिए हुए function के statement से related अगर कोई पहला index find होता है तो उसकी value return होती है |

- Example for find():

function checkfunc(checkvalue) {
return checkvalue > 1;
}

```
var arr1 = [1, 2, 3, 4, 5];
document.write(arr1.find(checkfunc) + "<br />");
var arr2 = [10, 5, 9, 3, 1];
document.write(arr2.find(checkfunc) + "<br />");
var arr3 = [0, -1, 2, 1, 0];
document.write(arr3.find(checkfunc));

output:
2
10
2
```

### findIndex():

findIndex() array में दिए हुए function के statement से related अगर कोई पहला index find होता है तो उसकी index return होती है |

- Example for find():
  function checkfunc(checkvalue) {
  return checkvalue > 1;
  }

```
var arr1 = [1, 2, 3, 4, 5];
document.write(arr1.findIndex(checkfunc) + "<br />");
var arr2 = [10, 5, 9, 3, 1];
document.write(arr2.findIndex(checkfunc) + "<br />");
var arr3 = [0, -1, 2, 1, 0];
document.write(arr3.findIndex(checkfunc));

output:
1
0
2
```

### some():

some() array method में अगर एक भी element function के statement से related हो तो ये 'true' return करता है | अगर function के statement से related नहीं होता तो 'false' return होता है |

some() method, every() method के विरुद्ध होता है |

- Example for some():

function checkNegative(checkvalue) {
return checkvalue < 0;
}

```
var arr1 = [1, 2, 3, 4, 5];
document.write(arr1.some(checkNegative) + "<br />");
var arr2 = [1, 2, -3, 4, 5];
document.write(arr2.some(checkNegative));

output:
false
true
```

### every():

every() array method से दिए हुए function से हर एक array के element को check करके boolean value return करता है | अगर array में से एक भी element function के statement के विरुद्ध होता है तो 'false' value return होती है |

- Example for every():

function checkPositive(checkvalue) {
return checkvalue >= 0;
}

```
var arr1 = [1, 2, 3, 4, 5];
document.write(arr1.every(checkPositive) + "<br />");
var arr2 = [1, 2, -3, 4, 5];
document.write(arr2.every(checkPositive));

output:
true
false
```

### at():

at() function di gyi index pr jo element hota hai use return krta hai. at function ki ye speciality ki hai ki ye negative index b leta hai. Negative index ke case me ye array se item last se return krta hai. Last element ke lie -1 index deni hoti hai. Isi trah second last element ke lie -2 index deni hoti hai

- for example:

```
var arr = [10, 20, 30, 40, 50];
console.log(arr.at(1));
console.log(arr.at(2));
console.log(arr.at(-1));
console.log(arr.at(-2));

output:
20
30
50
40
```

### reduce():

reduce() function array ke sare elements ko iterate krta hai aur ek single value return krta hai. reduce() function 2 arguments leta hai :

- callback function
- initial value (ise accumulator b kha jata hai )

callback function array ke sare elements ke lie call hota hai aur ye 2 arguments leta hai :

- the accumulator
- current element
  callback function fir updated value return krna chahiye

for example below function array ke elements ka sum calcualte krega:

```
let myArray = [1, 2, 3, 4, 5];
let sum = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15
```

### reduce():

function ka use array ko ek object bnane ya kisi other type ka data structure bnane me kia ja skta hai. Iske lie hume ek accumulator object dena hoga and callback function us object ko each iteration me update krega

- for example:

```
let myArray = [{x: 1, y:2}, {x: 3, y: 4}]
let result = myArray.reduce( (acc, cur) => {
acc[cur.x] = cur.y;
return acc;
}, {})
console.log(result); // {1: 2, 3: 4}
```

### reduce()

function me yadi initial value ni di gyi hai to array ka first element ko initial value mana jayega. Is case accumulator first value hoga and current value second value hogi.

- for example:

```
var arr = [10, 20, 30, 40, 50];
let sum = arr.reduce(function (total, val) {
return total + val;
}, 100);
console.log(sum); // 250
let sum = arr.reduce(function (total, val) {
return total + val;
});
console.log(sum); // 150
```

### flat():

flat() function yadi array ke inside array hai to unko ek single one dimensional array bnane ke kaam aata hai. flat() ek optional parameter number leta hai jaise b depth b khte hai jo ye decide krta hai ki Array kitni depth tak merge hoke ek single array bnega.

For example, following code arrays ko merge krke ek single array me return krta hai:

```
let myArray = [[1, 2], [3, 4], [5, 6]];
let flatArray = myArray.flat();
console.log(flatArray); // [1, 2, 3, 4, 5, 6]

let myArray = [[1, 2], [3, [4,5]], [6]];
let flatArray = myArray.flat(2); //depth 2
console.log(flatArray); // [1, 2, 3, 4, 5, 6]

```

### flatMap():

flatMap() function, 2 functions flat and map functions ka combination hai. Ye function phle sare elements ko diye hue function ke according map krta hai fir sare elements ko merge krke ek single array bnata hai. flatMap() ek single argument leta hai jisme hume mapping function deta hai jo ki sare elements ke lie call hota hai.

for example niche diye hue code me sare elements ko merge krke ek single array bnayega and har value ko 2 se multiply b krega.

```
let myArray = [[1, 2], [3, 4], [5, 6]];
let flatMappedArray = myArray.flatMap((subArray) => subArray.map((x) => x\*2));
console.log(flatMappedArray); // [2, 4, 6, 8, 10, 12]
```

### flatMap()

us condition me useful hai jha array ke andar nested arrays ho. Kuki hm single step me hi array ko flat and map dono kr skte hai.
