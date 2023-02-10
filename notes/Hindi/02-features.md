# 02 : JavaScript Features

### What is High level language?

High level programming language vah programming language hoti hai jise is trah se design kia gya hai ki us language ko asani se likha, pdha vah smja ja skta hai. High level language ek english like nature language ke equal hi hoti hai. High level language ko sikhna asan hota hai. High level language kafi sare actions aise hote hain jo vo khud manage kr leti hai aur hume ni krne hote hain. for example : 1) memory managemant. 2) communication with hardware

### What is Garbage Collected ?

Javascript ek garbage collected language hai. Garbage collected ka yha ye matlab hai ki Javascript engine me ek utility chalti hai jise garbage collector khte hain. Garbage collector unused memory ko free karta hai. yah automatically run hota hai. Garbage collector aise objects ko identify krta hai jinko program me ab access ni kia ja skta un objects ko memory se remove kr deta hai.

Memory size agar kam ho to garbage collector fast run hoga, aur agar memory size jyada hai to slow run hoga.

### What is Interpreted Language (JIT)-> (Just in time commpiler) ?

compiler: yeh ak utility hai jo kisi bhi code ko compile karti hai. Vah compile karne ka bad ek new file generate karta hai vah us file ko run karta hai.
Interpreter: Yeh ek utility hoti hai jo Java script ke code ko line by line run karti hai.
JIT: JavaScript compiler and Interpreter dono ka mixture hai. Yeh ek technique hai jise ki JavaScript engine ke dwara code ki performance improve krne ke lie kia jata hai. Code ko runtime pr compile krke uski performance ko improve krta hai. JIT vah code jo jyada use ho rha hai us code ka optimized machine code generate krta hai. Isse JavaScript ki performance kafi imporve hoti hai kuki optimized code original Interpreted JavaScript code se fast run hota hai.

### What is Multi Paradigm ?

Multi Paradigm ka matlb hai ki javascript different style of programming support karti hai. for example : 1) Object orinted programming 2) functional programming 3) event driven programming

### What Prototype based functions ?

Advanced topic. Will be covered in later files in detail.

### What is First Class Function ?

Advanced topic. Will be covered in later files in detail.

### What is Dynamically Typed/ Dynamic ?

Javascript ek Dynamically based language hai.iska mtlb yaha hai ki hum kisi variable me kisi b type ka data assign kar skte hain. Jis b type ka data hm variable me assign krte hain variable ki vahi type ho jati hai.

for example:

```
let x = 10; // type will be number
x = "learnjavascript"; //type will be string
x = false; //type will be boolean
```

### What is Single Threaded ?

JavaScript ek single threaded language hai. Thread ek process ka part hota hai. Jo ki independently within process run hota hai. Javascript ek sath ek sa jyada thread run nahi kar sakti iska mtlb hai ki javascript engine me kisi bhi time par ek hi thread run hogi.

### What is Non-Blocking Event Loop ?

Advanced topic. Will be covered in later files in detail.
