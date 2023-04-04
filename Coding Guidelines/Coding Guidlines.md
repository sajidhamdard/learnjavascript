# Coding Guidelines

Use Strict Mode: Always use strict mode in your JavaScript code to avoid unexpected behavior and catch common coding mistakes.

## Naming Convention

- Class Names - UpperCamelCase
- Function Names - lowerCamelCase
- Variables - lowerCamelCase
- Constants - UPPER_CASE_UNDERSCORE_SEPERATED
- Variable Names
  - Names should be appropriate to the intention of how the variable is used
    and should be as descriptive as possible
  - Names should never be shorter than 3 characters unless it is an indexer
  - Shorthand names should not be used as they obfuscate the usage of the variable
    (e.g. scl instead of school)

## Guidelines for functions

- Use Arrow Functions: Use arrow functions instead of traditional function expressions to write shorter, more concise code.
- Docs on all public methods, within reason
- Function Explanation
  - Inputs
  - Outputs
  - Errors
- Docs must be updated when code is updated
- No Doc is required for getters and setters
- Docs on all public Classes
- Description of the class
- Max Arguments limit to 7, after 7 create a payload
- Avoid really long methods. ideally a method text should fit within a single screen
  view. Try to reduce the method size by creating helper methods and removing
  any copy/pasted or duplicated code.
- Classes that have too many fields could be redesigned to have fewer fields,
  possibly through some nested object grouping of some of the information.
- function to do one and only one function
- Plural naming convention for methods returning array
- Don't insert new functions in the middle of existing code.

## Variables

- Use const and let instead of var: Use const and let instead of var to declare variables. const is used for variables that will not be reassigned, while let is used for variables that may be reassigned.
- Avoid Global Variables: Avoid using global variables as they can cause naming conflicts and lead to unexpected behavior
- Variable declarations should be grouped together in the highest common code
  scope that makes sense
- Variable should be declared from outside loop.
- All local variables declared should have a default value assigned to them
- Remove unused parameters and variables
- Use Strict Equality: Use strict equality (===) instead of loose equality (==) to avoid unexpected behavior due to type coercion.
- Use the Correct Data Types: Use the correct data types for variables and function parameters to avoid unexpected behavior due to type coercion.

## Statements

- Limit 1 statement per line
- Use Semicolons: Although semicolons are optional in JavaScript, it's a good practice to use them to avoid potential errors
- Remove duplicate statements
- Tertiary|Ternary Statements
  - Only simple statements should be used
  - Complex or compound Tertiary statements should be avoided
- Braces should be present even if only one line of code exist (not applicable for
  cases)
- Use Ternary Operators: Use ternary operators to write shorter and more concise conditional statements.

## Errors

- Use Error Handling: Always handle errors in your code using try-catch blocks or error handling functions to avoid unexpected crashes and improve user experience.
- Catch blocks should never be empty, either log, comment or perform some
  meaningful logic
- Cleanup logic should not be duplicated in both try and catch blocks, if needed it
  should be placed in the finally block
- Error should not be thrown and caught from within the same block of code
- Errors should bubble where appropriate and be handled where logically
  applicable: catch it only if you can act on it.
- REST Services
  - Errors in web services should be caught, logged and the appropriate
    status code should be returned

## Warnings

Clean up all warnings before checkin(Possible to configure in save action)

## Formatter

- Format the code before checkin(Possible to configure in save action)
- Use Template Literals: Use template literals instead of string concatenation to create dynamic strings. They are more readable and easier to maintain.

## Scoping

- Most restricted scope should be provided to the variables and methods
- Functions are public only if they are a public api, i.e. being consumed from outside
  the resident class
- Getters/Setters may remain public even if not consumed from anywhere
- Member and static (excluding constants) variables should be private

## Comments

- Use Comments: Use comments to explain your code, especially if it's complex. This will make it easier for others to understand your code and make changes if needed
- Commented code should be removed before check-in.
- Complex code should be commented and maintained throughout changes

## Must Haves

- Classes should be no more than 400 lines
- Functions should be no more than 75 lines

## Logical

- Ensure unnecessary checks are not written in code

## General

- Follow the OOPS concepts. Use OOP principles like encapsulation, inheritance, and polymorphism to make your code more modular and maintainable.
- Use latest APIs of particular language to write the code.
- Create reusable generic Utility classes in case the functionality can be reused in
  application
- Inherit from an existing class if it makes sense.
- Use Modular Code: Break your code into smaller, reusable modules to make it more organized and maintainable.
- Use Promises: Use Promises instead of callbacks for asynchronous operations as they provide a cleaner and more readable code.
- Avoid Using eval(): Avoid using eval() as it can introduce security vulnerabilities and lead to performance issues.
- Write Unit Tests: Write unit tests to ensure that your code works as expected and catch bugs early on in the development process.
- Avoid Magic Numbers: Avoid using "magic numbers" or hard-coded values in your code. Use constants or variables instead to make your code more maintainable.
- Avoid Nested Callbacks: Avoid nesting callbacks as it can lead to "callback hell" and make your code difficult to read and maintain. Instead, use Promises or async/await to handle asynchronous operations.
- Use Destructuring: Use object and array destructuring to extract values from objects and arrays more efficiently.
- Avoid Using the Global Object: Avoid using the global object (window in the browser and global in Node.js) as it can lead to naming conflicts and unexpected behavior.
- Use ES6 Features: Use ES6 features like classes, spread operators, and default parameters to write more modern and concise code.
- Use Linters: Use linters like ESLint to enforce coding standards and catch common mistakes early on in the development process.
- Use the Array.forEach() Method: Use the Array.forEach() method instead of for loops to iterate over arrays. It's more concise and readable.
- Use Object.freeze() to Freeze Objects: Use the Object.freeze() method to freeze objects and prevent them from being modified.
- Use JSON.stringify() to Serialize Objects: Use the JSON.stringify() method to serialize objects into JSON format.
- Use Console.log() for Debugging: Use the console.log() method to debug your code and log information to the console. Avoid leaving console logs in production code.
