### what is Memory/Heap

JavaScript is a programming language that is commonly used to build interactive web applications. In JavaScript, the memory is divided into two main regions: the Stack and the Heap.

The Stack is a region of memory that stores function calls and their local variables. Each time a function is called, a new frame is added to the top of the stack, and when the function returns, the frame is removed from the stack. This allows for efficient memory management and prevents memory leaks.

The Heap, on the other hand, is a larger region of memory that stores objects and their data. Objects are created in the heap, and references to those objects can be stored on the stack or in other objects. Memory management in the heap is not automatic, so it's important for developers to manually manage the creation and destruction of objects to prevent memory leaks.

Let's take an example to understand this better:
Suppose we want to create an object called "person" with properties like name, age, and address. We would create this object in the heap using the following code:

```
let person = {
  name: "John",
  age: 30,
  address: "123 Main St"
};
```

Now, if we want to access the "name" property of the person object, we can use the following code:

```
console.log(person.name);
```

This will print "John" to the console.

It's important to note that when we create an object in the heap, we need to make sure to properly manage its memory. If we no longer need the "person" object, we should remove it from memory using the `delete` keyword like this:

```
delete person;
```

This will free up the memory used by the "person" object and prevent memory leaks.

we can say that memory/heap ko Javascript me do hisso me divide kiya jata hai: Stack aur Heap. Stack me function calls aur unke local variables store hote hai, jabki Heap me objects aur unke data store hote hai. Objects ko heap me create kiya jata hai aur references unke stack ya dusre objects me store kiye ja sakte hai. Memory management heap me automatic nahi hoti hai, isliye developers ko manually object creation aur destruction manage karna padta hai memory leaks se bachne ke liye.
