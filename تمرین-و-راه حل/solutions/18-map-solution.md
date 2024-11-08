# Exericse 18 Solutions

### **Question** 1: Create a new Map and add key-value pairs to it

```javascript
const myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);
```

### **Question** 2: Get the value of a specific key in a Map

```javascript
const age = myMap.get('age'); // Returns 30
```

### **Question** 3: Check if a key exists in a Map 

```javascript
const hasName = myMap.has('name'); // Returns true
const hasEmail = myMap.has('email'); // Returns false
```

### **Question** 4: Iterate over the keys of a Map using a for...of loop

```javascript
for (const key of myMap.keys()) {
    console.log(key);
}
```

### **Question** 5: Iterate over the values of a Map using a for...of loop

```javascript
for (const value of myMap.values()) {
    console.log(value);
}
```

### **Question** 6: Iterate over the key-value pairs of a Map using a for...of loop

```javascript
for (const [key, value] of myMap) {
    console.log(key, value);
}
```

### **Question** 7: Convert a Map to an array of key-value pairs

```javascript
const arrayFromMap = Array.from(myMap);
```

### **Question** 8: Convert an array of key-value pairs to a Map

```javascript
const array = [['color', 'blue'], ['size', 'medium']];
const mapFromArray = new Map(array);
```

### **Question** 9: Use the forEach() method to iterate over the key-value pairs of a Map

```javascript
myMap.forEach((value, key) => {
    console.log(key, value);
});
```

### **Question** 10: Use the Map keys() method to get an iterator for the keys of a Map 

```javascript
const keysIterator = myMap.keys();
```

### **Question** 11: Use the Map values() method to get an iterator for the values of a Map

```javascript
const valuesIterator = myMap.values();
```

### **Question** 12: Use the Map entries() method to get an iterator for the key-value pairs of a Map 

```javascript
const entriesIterator = myMap.entries();
```

### **Question** 13: Use the Map has() method to check if a Map contains a key 

```javascript
const hasEmail = myMap.has('email'); // Returns false
```

### **Question** 14: 

```javascript
Use the Map get() method to get the value associated with a key in a Map
```

### **Question** 15: Use the Map set() method to add a new key-value pair to a Map 

```javascript
myMap.set('email', 'john@example.com');
```

### **Question** 16: Use the Map delete() method to remove a key-value pair from a Map

```javascript
myMap.delete('age');
```

### **Question** 17: Use the Map clear() method to remove all key-value pairs from a Map 

```javascript
myMap.clear();
```

### **Question** 18: Use the Object.fromEntries() method to create a new object from a Map 

```javascript
const objFromMap = Object.fromEntries(myMap);
```

### **Question** 19: Use the Map constructor to create a new Map from an array of key-value pairs 

```javascript
const keyValuesArray = [['color', 'red'], ['size', 'large']];
const newMap = new Map(keyValuesArray);
```


