### What is Fetch

Fetch ek JavaScript API hai jo humein server se data fetch karne ki suvidha deta hai. Iska upyog hum client-side web applications mein karte hai jahan par humein server se data retrieve karne ki zarurat hoti hai without reloading the entire page.

Fetch method ek HTTP request bhejta hai aur uska response promise ke roop mein wapas milta hai. Iske liye hum `fetch()` function ka upyog karte hai, jismein hum URL ka naam aur request method (GET, POST, PUT, DELETE etc.) specify karte hain.

Example:

```
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP error ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
```

Yahan humne `fetch()` function ka upyog kiya hai ek URL ('https://api.example.com/data') ke sath GET request bhejne ke liye. Phir humne Promise chain ka upyog kiya hai jisse ki hum response ko handle kar sakein. Agar response OK nahi hai toh humne ek error throw kiya hai. Agar response sahi hai toh hum JSON parse kiya hai aur console mein data print kiya hai.
