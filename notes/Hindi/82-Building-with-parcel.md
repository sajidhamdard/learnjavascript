### what is Bundling With Parcel and NPM Scripts

Bundling is the process of combining multiple files into a single file for optimized performance. In JavaScript, we often use bundling tools like Parcel and NPM Scripts to bundle our code.

Parcel is a zero configuration bundler that automatically handles many tasks such as bundling, minification, and optimization without any additional setup required. You can install Parcel using NPM by running the following command in your terminal:

```
npm install -g parcel-bundler
```

Once you have installed Parcel, you can create a new project directory and create an index.html file and an index.js file inside it. Your file structure should look like this:

```
project/
├── index.html
└── index.js
```

Inside your index.js file, you can write some basic JavaScript code:

```javascript
const greet = (name) => {
  console.log(`Hello ${name}!`);
};

greet("World");
```

To bundle this code using Parcel, you simply need to run the following command in your terminal:

```
parcel build index.js
```

This will create a new file called `dist/main.js` which contains your bundled code.

NPM Scripts is another popular tool used for bundling in JavaScript. With NPM Scripts, you can define custom scripts in your package.json file that can be used to run various tasks, including bundling. Here's an example of how you can use NPM Scripts to bundle your code:

First, you need to install some dependencies:

```
npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env
```

Next, you can add the following script to your package.json file:

```json
{
  "scripts": {
    "build": "webpack --mode production ./src/index.js --output ./dist/bundle.js"
  }
}
```

This script tells webpack to bundle your code in production mode and output the result to a file called `bundle.js` inside a directory called `dist`.

To run this script, you can simply execute the following command in your terminal:

```
npm run build
```

This will bundle your code using webpack and output the result to the specified location.

In Hinglish, bundling ek process hai jisme kai files ko combine kiya jata hai ek optimized performance ke liye. JavaScript mein, ham bundling tools jaise ki Parcel aur NPM Scripts ka use kar sakte hai apne code ko bundle karne ke liye. Parcel ek zero configuration bundler hai jo bundling, minification, optimization jaise tasks ko automatically handle karta hai bina kisi additional setup ke. Aap Parcel ko NPM se install kar sakte hai niche diye gaye command ka use karke:

```
npm install -g parcel-bundler
```

Parcel ko install karne ke baad, aap ek new project directory create kar sakte hai aur usmein ek index.html file aur ek index.js file create kar sakte hai. Aapka file structure isi tarah ka dikhega:

```
project/
├── index.html
└── index.js
```

Aapke index.js file mein, aap basic JavaScript code likh sakte hai:

```javascript
const greet = (name) => {
  console.log(`Hello ${name}!`);
};

greet("World");
```

Apne code ko Parcel ke jariye bundle karne ke liye, aapko terminal mein niche diye gaye command ko execute karna hoga:

```
parcel build index.js
```

Yeh aapka code bundle karke `dist/main.js` namak ek naya file create karega jismein aapka bundled code hoga.

NPM Scripts ek aur popular tool hai jo JavaScript mein bundling ke liye use kiya jata hai. NPM Scripts ke jariye, aap apne package.json file mein custom scripts define kar sakte hai jo ki bundling jaisi various tasks ko run karne ke liye use kiye ja sakte hai. Yahaan ek example diya gaya hai jisme aap NPM Scripts ka use karke apna code bundle kar sakte hai:

Sabse pehle, aapko kuch dependencies install karne hoge:

```
npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env
```

Next, aap apne package.json file mein niche diye gaye script ko add kar sakte hai:

```json
{
  "scripts": {
    "build": "webpack --mode production ./src/index.js --output ./dist/bundle.js"
  }
}
```

Is script mein, webpack ko bataya jata hai ki code ko production mode mein bundle karna hai aur result ko `dist` naamak directory mein `bundle.js`
