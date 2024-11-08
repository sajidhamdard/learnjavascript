### What is an API

Ek API (Application Programming Interface) JavaScript mein ek tarika hai jisse hum apne code ko dusre software ya websites se connect kar sakte hain. API ke dwara, hum kisi bhi remote server ki information ko access kar sakte hain aur usme input/output ka use karke data ko manipulate bhi kar sakte hain.

Ek example ke tor par, agar hum kisi weather website se real-time weather data fetch karna chahte hain to hum unke API ka use kar sakte hain. Aise me, hum ek HTTP request bhejte hain jo server tak pahuchta hai aur jisme JSON format mein weather data hota hai. Fir hum is data ko parse karke apne code mein use kar sakte hain.

JavaScript me, hum fetch() function ka use kar API se data fetch kar sakte hain. Jaise ki niche diya gaya hai:

```
fetch('https://api.weather.com/data/weather?location=NewYork&apikey=12345')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
```

Is code snippet mein hum 'https://api.weather.com' se weather data fetch kar rahe hain. Hum 'fetch()' function mein URL aur API key ka use kar rahe hain. Fir hum promise-based approach ka use karke response ko JSON format me parse kar rahe hain (`.json()`), aur fir console mein print kar rahe hain (`console.log(data)`). Agar koi error aata hai to hum `.catch()` block mein error handle karte hain.
