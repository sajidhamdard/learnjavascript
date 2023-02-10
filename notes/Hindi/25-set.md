### Set:

Set b ek datastructure jiska use unique values ke lie kia jata hai
iska matlab yah hai ki set duplicate values ko remove kr deta hai vah keval unique
values hi rkhta hai

- Creating set :

```
var set = new Set(); //Syntax

//Insert elements in set :
//Set me add function ki madad se data dala ja skta hai
set.add(1);
set.add(3);
set.add(5);
set.add(3);
set.add(1);

answer: {
  1, 3, 5;
} //3 or 1 repeat hue hai islie unhe dubara add nhi kia jayega

```

### Elements Order in Set:

Set me jis order me humne data dala hai usi order me data print b hoga lekin yadi koi value repeat hoti hai to vah value us order me ni hogi

- for example

```
set.add(1);
set.add(3);
set.add(5);
set.add(3);
set.add(1);
set.add(6);
{
  1, 3, 5, 6;
}
```

- Set size function:
  size function set ki size ke bare me btata hai.Size function sirf unique values ka count hi btata hai

```
set.add(1);
set.add(3);
set.add(5);
set.add(3);
set.add(1);
set.add(6);

set.size(); // 4
```

### Set has function:

has function argument me ek value vara hai vah us value ko set me check krta hai. Yadi set me vah value hai to true return krega otherwise false return hoga

```
set.add(1);
set.add(3);
set.add(5);
set.add(3);
set.add(1);
set.add(6);

set.has(6); //true
set.has(9); //false
```

### Set devare function:

Set devare function ek argument vara hai vah
us argument ki value ko set me check krta hai. yadi vah value set me
hai to use devare kr dega otherwise devare ni krega

```
set.add(1);
set.add(3);
set.add(5);
set.add(3);
set.add(1);
set.add(6);

set.devare(6); //6 set se remove ho jayega
```

### Index in Set:

Kuki set me se data remove hota hai islie set me data ki
position fix ni hoti. Isi reason se set me index support ni krti hai\*/

- for example

```
set.add(1);
set.add(3);
set.add(5);
set.add(3);
set.add(1);
set.add(6);

set[1]; //kaam ni krega
```

Ise kaam krane ke lie hume set ko array me convert krna pdega tabi
index kaam kregi

```
for example : */
var arr = [...set];
arr[0]; //Ye chlega

//Printing values using for of loop :

set.add(1);
set.add(3);
set.add(5);
set.add(3);
set.add(1);
set.add(6);

//Print values
for (var value of set) {
  console.log(value);
}

//Creating set to Array  :

set.add(1);
set.add(3);
set.add(5);
set.add(3);
set.add(1);
set.add(6);

var arr = [...set]; //Set to Array

//Foreach method on Set :

set.foreach(function (value) {
  console.log(value);
});

```
