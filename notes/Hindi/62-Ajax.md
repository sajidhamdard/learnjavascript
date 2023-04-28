### What is Ajax

Ajax in javascript hai ek technique jiske dwara hum webpage ko dynamically update kar sakte hain bina page ko refresh kiye. Iska full form hai "Asynchronous JavaScript and XML".

Jab hum koi webpage load karte hain, toh server se data retrieve karne ke liye ek naya request bhejna padta hai aur page ko refresh karna padta hai. Lekin Ajax ka upyog karke, hum ek web page par hi data receive kar sakte hain aur use display kar sakte hain.

Ek example lete hain: Suppose ki hum ek blog post padh rahe hain aur comment section open hai. Jab hum comment section ko refresh karte hain, tab humein naye comments dikhai dete hain. Lekin agar hum Ajax ka upyog karein, toh jab bhi koi naya comment aaye ga, tab wo automatically comment section mein add ho jaayega bina page refresh kiye.

Iske liye, hum JavaScript ka istemal karenge jo server ke saath asynchronous request bhejega, jismein data exchange ke liye JSON (JavaScript Object Notation) ka use kiya jaata hai. JSON ek lightweight data interchange format hai jo easy to read and write hota hai.

Upar di gayi example mein, jab koi naya comment aata hai, toh JavaScript us data ko retrieve karta hai aur use DOM (Document Object Model) ke through comment section mein add karta hai. Is tarah se, web page ko refresh kiye bina new data display kiya ja sakta hai.
