### What is Promise

Promise ek JavaScript object hota hai jiska use kiya jaata hai asynchronous code ke liye. Asynchronous code ka matlab hota hai ki jab hum kisi task ko execute kar rahe hote hai aur uska result time lagakar aata hai tab tak hum dusre tasks ko perform kar sakte hai.

Promise ek tarah se guarantee deta hai ki kisi task ka result future me available ho jayega. Jab hum koi task Promise object me wrap karte hai, to wo task ek new thread me execute hota hai aur promise hume ek reference deta hai jisse hum task ke result ko future me access kar sakte hai.

Example:

Ek common example hai fetch() function jo network request ko execute karta hai. Ye function data ko retrieve karne ke liye server se communication karta hai. Iska syntax niche diya gaya hai:

```
fetch(url)
  .then(response => {
    // handle the response
  })
  .catch(error => {
    // handle the error
  });
```

Is example me, `fetch()` ek Promise object return karta hai. Hum `then()` method me ek callback function pass karte hai jo response ko handle karti hai. Agar fetch() me koi error hota hai to `catch()` method error ko handle karta hai.

Upar diye gaye example se hum ye samajh sakte hai ki Promise ek asynchronous operation ko represent karta hai jo future me resolve ya reject ho sakta hai. Hum `then()` aur `catch()` methods se resolve aur reject cases ko handle kar sakte hai.
