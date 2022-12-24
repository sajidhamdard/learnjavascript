/*
 ==========Array==========

 Array:
javascript me array ak non primitive type hain. array ak object hota hain. jiska use data structure ke form me data store karne ke kam ata hain.yadi hume ak se jyada value store karvane hain.to hume utnye variable bnane pdaye gye jitne values hain.is problem ko solve karne ke leya hum arrya ka use karte hain.yadi array ma ak sa jyada value store karvane hain. to hum index ki madad se kar skte hain.array ma jis oder ma value dali hain usi oder me value nikle gi.yadi hum ko random ooder ma value nikalne hain to index ka use kar skte hain.

array tow type sa bana skte hain.

1.litrel way
let array=[1,2,3];

2.object way
ley arr = new array();
console(arr[1]);


kisi bhi programing language me array ki index 0 se start hoti hain.

console.log(arr.length);

length proprty array ki size ke bara ma btate hain.


loopung array:
array ka nature iterable type ka hota hain. iska mtlb yaha hain ki array par loop chlaya ja skta hain. yadi arrya par hum for loop, while loop, do while loop, ka use karte hain.to 0 se lakr array ki length se 1 kam tak loop chla skte hain. array par hum for of loop chla skte hain. 

javascript ma set, map, string, etc bydefault arrray sport karte hain.
*/

//   array function
/*
1.array push():
push() array method में array के end पर एक या एक से ज्यादा elements को जोड़ा जाता है और उसके बाद array की length return करता है |

Syntax for push() Array
arr.push(addElement1,...addElementN)
for example
*/
var arr = [15, 20, 30, 50, 55];

document.write("Array : " + arr + "<br />");
document.write("Length of Array : " + arr.push(65) + "<br />");
document.write("Array : " + arr + "<br />");
document.write("Length of Array : " + arr.push(75, 70) + "<br />");
document.write("Array : " + arr + "<br />");

/*
2.array sort():
sort() array method में alphabet और numeric array को sort किया जाता है | sort() method ख़ास string array के लिए बनाया गया है |

Syntax for sort() Array
arr.sort(compare_func)
for example:
*/
var names = ["Rakesh", "Mukesh", "Ramesh", "Kamalesh"];
document.write(names.sort() + "<br />");

/*
3. array pop:
pop() array method में array के last element को array से remove करके return किया जाता है |

Syntax for pop() Array
arr.pop()

for example:
*/
var arr = [15, 20, 30, 50, 55];

document.write("Array : " + arr + "<br />");
document.write("Removed Element : " + arr.pop() + "<br />");
document.write("Array : " + arr + "<br />");
document.write("Removed Element : " + arr.pop() + "<br />");
document.write("Array : " + arr + "<br />");
document.write("Removed Element : " + arr.pop() + "<br />");
document.write("Array : " + arr + "<br />");

/*
4.array unshift():
unshift() array method से array पर शुरुआत में एक या एक से ज्यादा element(s) को add किया जाता है और नए array की length को return किया जाता है |

Syntax for unshift() Array
arr.unshift(element1,...,elementN)
for example:
*/
var arr = [1, 2, 3, 4, 5];
document.write(
  "Length of Array after adding Elements: " + arr.unshift(6, 7, 8) + "<br />"
);
document.write(arr);

/*
5.array shift():
shift() array method में array के शुरुआत के element को remove किया जाता है |

Syntax for shift() Array
arr.shift()
for example:
*/
var arr = [15, 20, 30, 50, 55];

document.write("Array : " + arr + "<br />");
document.write("Removed Element : " + arr.shift() + "<br />");
document.write("Array : " + arr + "<br />");
document.write("Removed Element : " + arr.shift() + "<br />");
document.write("Array : " + arr + "<br />");
document.write("Removed Element : " + arr.shift() + "<br />");
document.write("Array : " + arr + "<br />");

/*
6.array toString():
toString() array method से array को string में convert किया जाता है |

Syntax for toString() Array
arr.toString()
for example:
*/
var arr = [1, 2, 3, 4, 5];
document.write("Type : " + typeof arr + "<br />");
document.write(arr + "<br /><br />");

document.write("Type : " + typeof arr.toString() + "<br />");
document.write(arr.toString() + "<br />");

/*
7.array join():
join() array method में दिए हुए seperator से हर element को seperate किया जाता है |

Syntax for join() Array
arr.join(object_name)
for example:
*/
var arr = [10, 20, 30, 40, 50];

document.write(arr.join() + "<br />");
document.write(arr.join("."));

/*
8.array concat():
concat() array method में एक या एक से ज्यादा arrays को जोड़ा जाता है |

Syntax for concat() Array
arr1.concat(arr2, arr3, arrN)
for example:
*/
var arr1 = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8];
var arr3 = [9, 10, 11, 12];

document.write(arr1.concat(arr2, arr3) + "<br />");
document.write(arr2.concat(arr2, arr3) + "<br />");

/*
9.array splice():
splice() array method में array में elements add(s) या remove(s) या add(s) और remove(s) किये जाते है और removed किये गए element को return करता है |

Syntax for splice() Array
arr.splice(startIndex, howMany, element1,..,elementN)

Parameter :

startIndex : यहाँ पर जो index दी जाती है वहा से array के element(s) add या remove किये जाते है | अगर index array की length से बड़ा होता है तो कोई element remove नहीं होता बल्कि array के elements end पर add किये जाते है |

howMany : ये optional होता है | अगर कोई value दी नहीं जाती तो इसकी default value '0' होती है | मतलब कोई element remove नहीं होता | अगर कोई number दिया जाता है तो startIndex से इस number तक elements को remove किया जाता है |

(element1,..elementN) : यहाँ पर add किये जानेवाले element(s) को दिया जाता है |
for example:
*/
var arr1 = [1, 2, 3, 4, 5];
document.write("Removed Element(s) : " + arr1.splice(2, 3) + "<br />");
document.write("splice() Returned Array : " + arr1 + "<br /><br />");

var arr2 = [1, 2, 3, 4, 5];
document.write("Removed Element(s) : " + arr2.splice(2, 3, 5, 6, 5) + "<br />");
document.write("splice() Returned Array : " + arr2 + "<br");

/*
10.array slice():
slice() array method में start और end index से नए array को return किया जाता है |

Syntax for slice() Array
arr.slice(start, end)

start : इस index से slice की शुरुआत होती है | यहाँ पर अगर negative index होता है तो array के end से slice किया जाता है |

end : इस index पर slice का end होता है | ये optional होता है | यहाँ ये दिया नहीं जाता तो start से array के सभी elements return किये जाते है |

for example:
*/
var arr = [15, 20, 30, 50, 55];
document.write(arr.slice(2) + "<br />");
document.write(arr.slice(2, 3) + "<br />");
document.write(arr.slice(2, -1) + "<br />");

/*
11.array sort():
ort() array method में alphabet और numeric array को sort किया जाता है | sort() method ख़ास string array के लिए बनाया गया है |

Syntax for sort() Array
arr.sort(compare_func)

compare_func : इस function से sort order define किया जाता है | ये optional होता है | अगर दिया नहीं जाता तो ascending order से sort किया जाता है |

for example:
*/
var names = ["Rakesh", "Mukesh", "Ramesh", "Kamalesh"];
document.write(names.sort() + "<br />");

/*
12.array reverse():
reverse() array method में दिए हुए array के elements को includes किया जाता है |

Syntax for reverse() Array
arr.reverse()

for example:
*/
var arr = [15, 20, 30, 30, 50];
document.write(arr.reverse() + "<br />");

/*
13.array forEach():
forEach() array method में हर एक array element के लिए function execute किया जाता है |

Example for forEach() Array
*/
var arr = [10, 20, 30, 40, 50];

arr.forEach(function (element, index) {
  document.write("[" + index + "]: " + element + "<br />");
});

/*
14.array map():
map function , एक callback function या arrow function accept करता है , callback function में value और index number दोनों मिलते हैं जबकि arrow function में सिर्फ value मिलती है।

map() function Array के प्रत्येक value को user defined callback function में send करता है , और एक Array नई values के साथ return करता है।

for example:
*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let table_of_two = arr.map(function (value) {
  return value * 2;
});
document.write(table_of_two);

/*
15.array filter():
filter() array method में दिए हुए function से हर एक array के element को check करके उनका array return करता है | अगर array में से एक भी element function के statement के विरुद्ध होता है तो उस array के element को remove किया जाता है |

filter() function से original array पर कोई फर्क नहीं पड़ता |

Example for filter() Array
*/
function checkPositive(checkvalue) {
  return checkvalue >= 0;
}

var arr1 = [1, 2, 3, 4, 5];
document.write(arr1.filter(checkPositive) + "<br />");

var arr2 = [1, 2, -3, 4, 5];
document.write(arr2.filter(checkPositive));

/*
16.array find():
find() array method में दिए हुए function के statement से related अगर कोई पहला index find होता है तो उसकी value return होती है |

Example for find() Array
*/
function checkfunc(checkvalue) {
  return checkvalue > 1;
}

var arr1 = [1, 2, 3, 4, 5];
document.write(arr1.find(checkfunc) + "<br />");

var arr2 = [10, 5, 9, 3, 1];
document.write(arr2.find(checkfunc) + "<br />");

var arr3 = [0, -1, 2, 1, 0];
document.write(arr3.find(checkfunc));

/*
17.array some():
some() array method में अगर एक भी element function के statement से related हो तो ये 'true' return करता है | अगर function के statement से related नहीं होता तो 'false' return होता है |

some() method; every() method के विरुद्ध होता है |
Example for some() Array
*/
function checkNegative(checkvalue) {
  return checkvalue < 0;
}

var arr1 = [1, 2, 3, 4, 5];
document.write(arr1.some(checkNegative) + "<br />");

var arr2 = [1, 2, -3, 4, 5];
document.write(arr2.some(checkNegative));

/*
18.array every():
every() array method से दिए हुए function से हर एक array के element को check करके boolean value return करता है | अगर array में से एक भी element function के statement के विरुद्ध होता है तो 'false' value return होती है |

Example for every() Array
*/
function checkPositive(checkvalue) {
  return checkvalue >= 0;
}

var arr1 = [1, 2, 3, 4, 5];
document.write(arr1.every(checkPositive) + "<br />");

var arr2 = [1, 2, -3, 4, 5];
document.write(arr2.every(checkPositive));
