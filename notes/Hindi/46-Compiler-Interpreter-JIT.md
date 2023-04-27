### what is Compiler

Compiler ek aisa software hai jo humari code (jaise ki JavaScript) ko machine-readable format (jaise ki binary code) mein badalta hai. Is process ke baad, computer asani se humari code ko samajh sakta hai aur uss par execution kar sakta hai.

Compiler ka basic kaam hota hai code ki syntax aur grammar ko check karna aur use machine-readable instructions mein convert karna. Ye process source code aur object code ke beech mein hoti hai.

Jab hum apne JavaScript code ko likhte hain, to wo human-readable hota hai aur computer ko samajhne mein mushkil hoti hai. Iss liye, humein apne code ko compiler ke through translate karna padta hai.

For example, agar hum ye JavaScript code likhte hain:

```
let x = 5;
let y = 10;
let z = x + y;
console.log(z);
```

To compiler usse machine-readable format mein convert karega, jaise ki:

```
0101010110101101...
```

Iss tarah se, humari code ki execution speed bhi fast ho jaati hai, kyunki computer ko binary code ko execute karna bahut hi asaan hota hai.

Isliye hum apne JavaScript code ko browser ya server par run karne se pehle compiler ke through translate karte hain takki computer unhe asani se samajh sakein.

### what is Interpreter

Interpreter JavaScript ka ek hissa hai jo code ko line-by-line execute karta hai. Yah ek runtime environment ke roop mein kam karta hai aur code ko interpret karta hai jab wah run kiya jata hai.

Jab aap apna JavaScript code banate hain, to Interpreter usko ek programming language se dusre programming language mein convert karta hai. Yah code ko execute karne ke liye tarika taiyar karta hai, jise browser mein execute kiya ja sakta hai.

Interpreter ek bahut hi important role nibhata hai JavaScript programming mein. Interpreter code ko debug karne mein bhi kaafi madad karta hai, kyonki wah error messages generate karta hai jab aapka code sahi nahi hota hai.

example

```
var x = 5;
var y = 10;
var z = x + y;
console.log(z);
```

Is code mein `var` keyword se tino variables define kiye gaye hain – `x`, `y`, aur `z`. Phir `z` mein `x` aur `y` ka sum store kiya gaya hai. Finally, `console.log()` function se `z` ki value console par print ki gayi hai.

Jab aap is code ko chalate hain, tab Interpreter sabse pehle `var x = 5;` line ko interpret karta hai aur `x` variable ko `5` se assign karta hai. Phir wah `var y = 10;` line ko interpret karta hai aur `y` variable ko `10` se assign karta hai. Isi tarah Interpreter `var z = x + y;` line ko bhi interpret karta hai aur `z` variable mein `15` ka sum store karta hai. Finally, `console.log(z);` line ko interpret karke `z` ki value (`15`) console par print karta hai.

Is tarah Interpreter JavaScript mein code ko interpret karta hai aur runtime environment ke andar execute karta hai.

### Difference Compiler and Interpreter

Compiler aur Interpreter dono programming languages ke liye use hote hai, lekin inka kaam aur tareeka alag hota hai. Ek Compiler program ko puri tarah se ek baar compile karta hai, jabki ek Interpreter code ko line by line read karke execute karta hai.

JavaScript me bhi Compiler aur Interpreter dono ka upyog kiya jaata hai:

Compiler: Jab hum JavaScript code likhte hai to usko sabse pahle ek Compiler ke through Compile kiya jaata hai, jisme code ki syntax check ki jati hai aur use byte code me convert kiya jaata hai. Byte code CPU ke liye samajhne me aasan hota hai. Ye Compiler time ke dauraan hi hota hai. Jaise hi hamara JavaScript code run karna hota hai, is compiled code ko directly CPU ko provide kiya jata hai.

Interpreter: Ye interpreter runtime par hota hai, matlab ki jab hamara code execution ke dauraan run karta hai tab. Ye JavaScript code ko line-by-line read karta hai aur usko machine-readable language me translate karta hai. Is process ko "Just-in-time (JIT)" compilation kehte hai.

Ek udaharan se samjhe to Compiler ka kaam ek teacher ke jaisa hota hai jo kisi student ke sare notes ko pehle se check karke unke mistakes ko sudhaar leta hai. Lekin Interpreter ka kaam ek translator ki tarah hota hai jo Foreign language me baat kar rahe vyakti ke vichaar ko dusre vyakti ko samjhane me madad karta hai.

.
