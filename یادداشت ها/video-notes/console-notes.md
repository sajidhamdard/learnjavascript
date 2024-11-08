# Simple Logging

```
console.log(10);
console.log("Hello World");
```  

# Print values of variable
```
let age = 10;
let myName = "EasyCoding";
let obj = {
  pincode: 302012,
};
console.log(age);
console.log(myName);
console.log(obj);
```

# in Same line
```
console.log(age, myName, obj);
console.log(10, 20, 30);

let arr = [1, 2, 3, 4, 5];
console.log(arr);
```

# warn function
```
console.warn("Warning: You have used wrong value");
```

# error function
```
console.error("Error: number error");
```

# table function
```
let address = {
  pincode: 303030,
  city: "Jaipur",
  state: "Rajasthan",
};
console.log(address);
console.table(address);
```

# Styling text
```
console.log("%cMy Formatted Text", "color:yellow;font-weight:400");
```

# Grouping
```
console.group("Registration");
console.log("User entered name");
console.log("User entered age");
console.log("User entered address");
console.groupEnd("Registration");

console.group("Registration Two");
console.log("User entered name");
console.log("User entered age");
console.log("User entered address");
console.groupEnd("Registration Two");
```

# time and timeEnd function
```
console.time("myLoopTime");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.timeEnd("myLoopTime");
```
#assert function

```
console.assert(2 + 3 === 6, "Value not equal");
console.assert(2 + 4 === 6, "Value not equal");
```
