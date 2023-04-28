### what is Consuming Promise with Async/Await

JavaScript mein Promise ek aisa feature hai jo asynchronous code ko manage karne ke liye istemal kiya jata hai. Async/Await keywords bhi ismein shamil hote hain, jo humein ek easier way provide karte hain promises ko consume karne ke liye.

Async/Await ka use Promises ko consume karne ke liye hota hai. Asynchronous code ke liye Promises kaafi useful hote hain, aur ismein Async/Await ka use humein code ko cleaner aur readable banane mein help karta hai.

Let's take an example:

```
function getUserDetails(userId) {
  return new Promise((resolve, reject) => {
    // simulate API call
    setTimeout(() => {
      const users = [
        { id: 1, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Smith', age: 30 },
        { id: 3, name: 'Bob Johnson', age: 40 }
      ];
      const user = users.find(user => user.id === userId);
      if (user) {
        resolve(user);
      } else {
        reject('User not found');
      }
    }, 2000);
  });
}

async function printUserDetails(userId) {
  try {
    const userDetails = await getUserDetails(userId);
    console.log(`Name: ${userDetails.name}, Age: ${userDetails.age}`);
  } catch (error) {
    console.error(error);
  }
}

printUserDetails(2); // Output: Name: Jane Smith, Age: 30
```

Is example mein `getUserDetails` ek promise return karta hai, jo simulate kiya gaya hai ki ye ek API call hai. `printUserDetails` function mein hum async keyword ka use karte hain, aur getUserDetails function ko await ke saath call karte hain.

Jab hum getUserDetails function ko await ke saath call karte hain, to ye promise resolve karne tak wait karta hai. Jab promise resolve ho jaata hai, to userDetails variable mein uska data store hota hai. Iske baad hum console mein user details print karte hain.

Agar promise reject hua to catch block mein error message print hota hai.
