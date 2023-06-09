# JavaScript Syllabus

### Introduction

- What is programming language?
- What is front-end?
- What is back-end?
- Introduction
  - HTML
  - CSS
  - JavaScript
- Role of HTML, CSS, and JavaScript?

### History of JavaScript

- JavaScript history
- ECMAScript
- Versions of JavaScript
- Backward & Forward compatible

### Visual Studio Code Setup

- What is an IDE?
- Downloading & Installing Visual Studio Code
- File vs Folder vs Workspace
- VSCode shortcuts
- Installing extensions
- Applying Settings
- Applying Color Theme
- Setting Default Formatter

### Project setup

- Separation of concern
- Setting up starter files

## JavaScript Core

### JavaScript Features

- High Level Language
- Garbage Collected
- Interpreted Language (JIT)
- Multi Paradigm
- Prototype based functions
- First Class Function
- Dynamically Type
- Single Threaded
- Non-Blocking Event Loop
- Platform Independent

### Interaction

- console.log
- document.write()
- window.alert()
- innerHTML

### Value, Variable and Data types

- Value, Variable and Data Types
- Difference between primitive and non-primitive data types
- Primitive Data types (In built data types)
  - Number
  - String
  - Undefined
  - Boolean
  - Symbol (new in ECMAScript 2015)
  - BigInt (new in ECMAScript 2020)
- Non-primitive Data types
  - Object
  - Array

### Truthy and Falsy Values

- What are the truthy and falsy values in JavaScript
- Falsy values : undefined, 0, null, ‘’, false, NaN
- Falsy and Truthy values in conditional statements

### Type Conversion

- Implicit type conversion/Automatic Type conversion/Coercion
- Explicit type conversion/Manual Type conversion
  - Number
  - String
  - Boolean

### JavaScript Popup Boxes

- Alert Box
- Confirm Box
- Prompt Box

### Identifiers

- What is an identifier
- Rules for creating identifier
- Reserved keywords

### Comments

- What is comment
  - Single line comment
  - Multi line comment
- Comment rules

### Statement

- What is a statement in programming
- How to write a single line of statement
- How to write a multi-line statement or code-block
- Use of Semi colon and whitespace in statement

### let, const and var

- let
- const
- var
- Difference between let, const and var
- When to use let, const and var

### JavaScript operators

- Arithmetic operator
  - \+	Addition
  - \-	Subtraction
  - \*	Multiplication
  - **	Exponentiation (ES2016)
  - /	Division
  - %	Modulus (Division Remainder)
  - ++	Increment
  - --	Decrement
- Assignment operator
  - =
  - +=
  - -=
  - *=
  - /=
  - %=
  - **=
- Comparison operator
  - ==	equal to
  - ===	equal value and equal type
  - !=	not equal
  - !==	not equal value or not equal type
  - \>	greater than
  - <	less than
  - \>=	greater than or equal to
  - <=	less than or equal to
  - ?  ternary operator
- Logical operators
  - &&	logical and
  - ||	logical or
  - !	logical not
- Operator precedence
  - [Operator Precedence Table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table) 
- Truth table of &&, || and !
- Loose equality operator ==
- Strict equality operator ===
- Typeof operator
- Ternary operator

### Conditional statements

- if
- else if
- else
- Grouping multiple conditions using logical operator
- Nested If else

### use strict

- What is the significance of use strict
- How JavaScrit behave without use strict

### Looping and Switch

- For Loop
- While Loop
- Do while loop
- Loop inside loop
- Backwards Loop
- For of loop
- For in loop
- Switch case
- Break and continue

### JavaScript String

- What is a String
- Uses of single quote and double quotes in string
- Escape characters
- How to create a String
- String Literal
- String Object
- String Literal vs String Object
- String length
- String to Array
- String Template Literal
- String functions
  - charAt
  - slice
  - substring
  - substr
  - replace
  - repeat
  - toUpperCase
  - toLowerCase
  - concat
  - trim
  - padStart
  - padEnd
  - charAt
  - split
  - indexOf
  - valueOf
  - lastIndexOf
  - startsWith
  - endsWith
  - search
  - match
  - includes

### Scope

- What is Scoping
- Different types of scopes in JavaScript
  - Global Scope
  - Functional scope
  - Block scope

### Functions

- Type of functions
  - Function declaration
  - Function expression
  - Arrow function
  - Anonymous function
- Difference between function declaration and function expression
- Difference between function expression and arrow function
- Function invoking/calling
- Function calling from other function
- Function as values
- Parameters
- Arguments
- Arguments Object in functions
- Default parameters
- Passing arguments: value vs reference
- First Class function/Citizen
- High Order function
- Callback function
- setTimeOut
- setInterval
- Function returning function
- The call and apply methods
- The bind method
- Immediately invoked function expression
- Closures
- Hoisting
- Temporal Dead Zone
- DRY Principle
- Generator function
- Currying
- eval()

## Debugging

- Debugging
- Overview of Google chrome developer tools
- Debugging points, adding a breakpoint
- Fixing errors
  - console.log
  - console.warn
  - console.error
  - console.table
- How to fix a bug, different steps:
  - Identifying bug
  - finding bug
  - fixing bug
  - Not repeat bugs
- Different type of errors
  - Syntax Error
  - Reference Error
  - Type Error
  - Eval Error
  - Internal Error
  - Range Error
  - URI Error

## Numbers and Dates

### Number

- Converting numbers
- NaN
- Infinity
- Number System
  - Binary
  - Octal
  - Decimal
  - HexaDecimal
- Checking numbers
- Hoisting in numbers
- Math and Rounding
- The Reminder operator
- Numeric Separators
- Working with BigInt
- Exceptions in BigInt
- Number class functions
  - toFixed
  - toString
  - valueOf
  - Number()
  - parseInt
  - parseFloat
  - isNaN
- Number Properties
  - MAX_VALUE
  - MIN_VALUE
  - POSITIVE_INFINITY
  - NEGATIVE_INFINITY

### Date

- Creating Dates and different ways of creating Date object
- Understanding milliseconds and other units of time
- Operations with Dates
- Date setter methods
- Date getter methods
- Internationalization Dates
- Internationalization Numbers
- setTimeOut and setInterval

## JavaScript Data Structures

### Array

- What is an Array
- Need of Array
- How to create an Array
- Array Literal
- Array Object
- Index in Array
- Array length property
- Array Declaration
- Looping Array
- Array functions
  - sort
  - push
  - pop
  - unshift
  - shift
  - toString
  - join
  - concat
  - splice
  - slice
  - sort
  - reverse
  - forEach
  - at
  - map
  - filter
  - reduce
  - find
  - findIndex
  - some
  - every
  - flat
  - flatMap

### Object

- What is an object
- Object literal syntax
- Object creation using new keyword
- Annotation
  - Dot
  - Bracket
- Object properties
  - Key
  - Value
- Array in Object
- Function in Object
- Uses of this in Object
- Object methods
  - Keys
  - Values
  - Entries

### Set

- What is a Set
- Creating set
- Elements order in Set
- Functions
  - size
  - has
  - delete function
  - other functions
- Index in set
- Printing set values using for of loop
- Creating set tarray
- forEach method
- WeakSet

### Map

- What is a Map
- Creating new map
- Adding value in map
- Chaining in map
- Functions
  - get
  - has
  - size
  - clear
- Array as key
- Iteration of Map
- Object tmap
- Map tarray
- forEach function on map
- WeakMap

## Modern Features

### Destructuring Arrays

- What is destructuring
- Reverse values using destructuring
- Return two values from function
- Destructuring of nested array
- Setting default values
- Destructuring Objects
- Extract value
- Different property name
- Default values
- Nested Object
- In Function

### The Spread Operator

- Assigning values
- Copy Array
- Join 2 Arrays
- String tarray using spread
- Passing arguments in function
- Shallow copy

### The Rest Parameter

- Assign values
- Rest element last element
- Assign values in object
- Variable arguments in function

### Short Circuiting

- Use of ||
- Replace with ternary operator
- With non nullish values
- Use of &&
- Calling function using &&
- The Nullish Coalescing Operator ??
- Logical Assignment Operator
  - ||=
  - &&=
  - ??=

### Enhanced Object literals

- Exactly same name
- Function in object
- Computer property name

### Optional Chaining

- Multiple condition in if condition
- Work for nullish
- Checking if method exist
- Checking array is empty

## JavaScript DOM and BOM

### DOM (Document Object Model)

- Introduction
- DOM functions
  - getElementById
  - getElementsByTagName
  - getElementsByClassName
  - querySelector
  - querySelectorAll
  - write()
- Properties
  - innerHTML
  - attribute
  - style.property
  - textContent
- Forms
- Forms validation
- Properties
  - Disabled
  - Max
  - Min
  - Pattern
  - Required
- Type of Events
  - Onclick
  - Onchange
  - Other events
- Mouse events
  - Onmousedown
  - Onmouseup
  - Other events
- Event Listener
  - addEventListener
  - Event bubbling
  - Event capturing
  - Event Delegation
- Navigation
  - parentNode
  - childNodes
  - firstChild
  - lastChild
  - nextSibling
  - previousSibling
- DOM Nodes
  - createElement
  - createTextNode
  - appendChild

### JavaScript BOM

- Window
- History
- Navigator
- Screen
- Location
- Timing
- Cookies
- LocalStorage

## RegExp

- What is Regex
- search()
- exec()
- test()

## Json & XML

- What is JSON?
- Rules for creating valid JSON?
- What is XML?
- Rules for creating valid XML?

### JavaScript Inside

- JavaScript Engine
- Call Stack
- Execution Context
- Memory/Heap
- Compiler
- Interpreter
- Compiler Vs Interpreter
- Event Loop
- Execution Context consists of 3 things:
  - Variable Environment
    - let, const and var declarations
    - functions
    - Arguments Objects
- Scope Chain
- this keyword
- Execution Context divides in twparts
- Type of execution context
  - Global
  - Functional
- Creation Phase
- Code Phase
- Scope Chain:
  - Scoping: How our programs variables are organized and accessed
- 3 types:
  - Global Scope
  - Local/Function Scope
  - Block Scope
- this key word
  - this in global scope
  - this in function
  - this in object
  - this in arrow function
  - this in inside function inside object
- Primitive vs Object
  - Understanding of how primitive and non-primitives are stored in
    memory
  - Copying object
  - Copy first level properties
    - Shallow copy
    - Deep copy

## OOPS

### JavaScript OOPs

- OOPs Concepts
  - Object
  - Class
  - Abstraction
  - Encapsulation
  - Inheritance
  - Polymorphism
- OOPs in JavaScript
  - Constructor functions and new operator
    - Prototypes
    - Native Prototype
    - Prototypal inheritance and prototype chain
    - Prototypal inheritance on Built-in objects
  - ES6 classes
    - Setters and Getters
    - Static methods
    - Object.create
    - Inheritance between classes
  - Object.create function
  - Inheritance 
    - Through constructor functions
    - Using ES6 classes
    - Using object.create
  - Encapsulation
    - Protected Properties and Methods
    - Private Class Fields and Methods
- Chaining methods
- Mixins

## Asynchronous JavaScript

- What is Asynchronous ?
- Ajax
- What is an API ?
- XMLHttpRequest
- How the web works
  - Server
  - Client
  - Request
  - Response
- Callback
- Promise
  - Promise and Fetch API
  - Cross Origin
  - Download progress
  - Abort
  - Consuming Promises
  - Chaining Promises
  - Handling Rejected Promises
- Asynchronous
  - The Event Loop
  - Create a Simple Promise
  - Consuming Promise using Async/Await
  - Error Handling
   - Try catch
  - Returning values from Async functions
  - Running promises in Parallel
  - Promise Combinators
   - race 
   - allSettled
   - any

## Modern JavaScript Tools and Techniques

- Modules
- Exporting and importing in Modules
- Top-Level await
- The Module Pattern
- Bundling With Parcel and NPM Scripts
- Configuring Babel and Polyfilling
- Transpiling
- Transpiling vs Polyfilling
