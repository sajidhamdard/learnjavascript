# Coding Guidelines for JavaScript Developers

## Use Strict Mode

Always use strict mode in your JavaScript code to avoid unexpected behavior and catch common coding mistakes.

## Naming Convention

- **Class Names**: UpperCamelCase
- **Function Names**: lowerCamelCase
- **Variables**: lowerCamelCase
- **Constants**: UPPER_CASE_UNDERSCORE_SEPARATED
- **Variable Names**
  - Names should be appropriate to the intention of how the variable is used and should be as descriptive as possible.
  - Names should never be shorter than 3 characters unless it is an indexer.
  - Shorthand names should not be used as they obfuscate the usage of the variable (e.g., `scl` instead of `school`).

## Guidelines for Functions

- Use Arrow Functions: Use arrow functions instead of traditional function expressions to write shorter, more concise code.
- Document functions with inputs, outputs, and potential errors.
- Keep documentation up-to-date with code changes.
- No documentation required for getters and setters.
- Document all classes with a description of their purpose.
- Limit the number of function arguments to 7; use payloads for more.
- Avoid overly long methods; keep methods ideally fitting within a single screen view. Refactor as needed.
- Consider redesigning classes with too many fields.
- Each function should have a single responsibility.
- Use plural naming convention for methods returning arrays.
- Avoid inserting new functions in the middle of existing code.

## Variables

- Use `const` and `let` instead of `var`.
- Avoid global variables.
- Group variable declarations in the highest common code scope.
- Declare variables outside of loops.
- Assign default values to all local variables.
- Remove unused parameters and variables.
- Use strict equality (`===`) over loose equality (`==`).
- Use correct data types for variables and function parameters.

## Statements

- Limit one statement per line.
- Use semicolons for statement termination.
- Remove duplicate statements.
- Use ternary operators for simple conditional statements.
- Include braces even for one-line code blocks (except for `case` statements).

## Errors

- Implement error handling using try-catch blocks or error handling functions.
- Avoid empty catch blocks; log, comment, or perform meaningful logic.
- Place cleanup logic in the `finally` block if needed.
- Avoid throwing and catching errors within the same code block.
- Let errors bubble where appropriate and handle them logically.
- In api calls, catch, log appropriate status code for errors.

## Warnings

Clean up all warnings before check-in (if possible, configure in save actions).

## Formatter

- Format the code before check-in (if possible, configure in save actions).
- Use template literals for dynamic strings.

## Scoping

- Provide the most restricted scope for variables and functions (if used in class).
- Global Functions are public only if part of a Global scope.
- Getters/setters in a class may remain public if not consumed externally.
- Member and static variables (excluding constants) should be private.

## Comments

- Use comments to explain complex code.
- Remove commented code before check-in.
- Comment and maintain complex code throughout changes.

## Must-Haves

- Classes should not exceed 400 lines.
- Functions should not exceed 75 lines.

## Logical

- Eliminate unnecessary checks in the code.

## General

- Follow OOP principles (encapsulation, inheritance, polymorphism).
- Utilize the latest language APIs.
- Create reusable utility classes when functionality can be reused.
- Inherit from existing classes when appropriate.
- Use modular code and break it into smaller, reusable modules.
- Prefer Promises over callbacks for asynchronous operations.
- Avoid using `eval()`.
- Write unit tests for code validation.
- Avoid magic numbers; use constants or variables.
- Avoid nested callbacks; use Promises or async/await.
- Use destructuring for object and array manipulation.
- Avoid using the global object (e.g., `window` or `global`).
- Utilize ES6 features.
- Use linters (e.g., ESLint) for code standards enforcement.
- Use `Array.forEach()` instead of for loops.
- Use `Object.freeze()` to prevent object modification.
- Use `JSON.stringify()` to serialize objects.
- Use `console.log()` for debugging; remove logs in production code.
