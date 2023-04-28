### what is Call Stack

Call Stack ek aisi jagah hai jahan JavaScript engine apne functions ko track karta hai. Jab bhi hum koi function call karte hai, toh wo function call stack pe add ho jaata hai. Aur jab ye function execute ho jaata hai, tab ye call stack se hata diya jaata hai.

Ek example ke through samjhaate hain. Maan lijiye aapke paas do functions hain - `greet()` aur `hello()`. Ab aap `greet()` function ko call karte hain. Toh uss samay `greet()` function Call Stack me add ho jaata hai. Phir `greet()` function me se `hello()` function ko call karte hain. Tab `hello()` function bhi Call Stack me add ho jaata hai.

Ab `hello()` function execute hota hai aur call stack se hat jaata hai. Phir `greet()` function bhi execute ho jaata hai aur woh bhi call stack se hat jaata hai. Is tarah se Call Stack ka use karke JavaScript engine apna flow control maintain karta hai.
