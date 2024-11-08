### What is Babel

Babel ek JavaScript compiler hai jo aapki code ko modern JavaScript version se purane versions mein compile kar deta hai, taaki aapka code purane browsers aur environments mein bhi sahi tarike se chale.

Suppose aapko apna JavaScript code kisi naye feature jaise ki "template literals" ka istemaal karke likhna hai:

```javascript
const name = "Alice";
console.log(`Hello ${name}!`);
```

Parantu ye code purane browsers mein kaam nahi karega kyunki vo template literals feature support nahi karte hain. Iss scenario mein, Babel aapki code ko ECMAScript 5 (ES5) version mein compile kar dega, jo purane browsers ki standard version hai aur support karta hai:

```javascript
var name = "Alice";
console.log("Hello " + name + "!");
```

Babel ka upyog karne ke liye, sabse pehle aapko usse install karna hoga. Aap ye command use karke Babel ko apne project mein add kar sakte hain:

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

Phir aap apni code ko compile karne ke liye ye command use kar sakte hain:

```
npx babel script.js --out-file compiled.js
```

Iss example mein `script.js` aapka original JavaScript code file hai aur `compiled.js` aapka compiled code file hai.

Babel ke bahut sare plugins aur presets available hote hain jo aapki code ko specific requirements ke according customize kar sakte hain. For example, agar aap React.js ka upyog kar rahe hain to aap `@babel/preset-react` preset ka upyog kar sakte hain jo React.js ke specific requirements ko compile karta hai.
