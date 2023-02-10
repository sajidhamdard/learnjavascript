# Coding Guidelines

## Naming Convention

- Class Names - UpperCamelCase
- Method Names - lowerCamelCase
- Variables - lowerCamelCase
- Constants - UPPER_CASE_UNDERSCORE_SEPERATED
- Variable Names
  - Names should be appropriate to the intention of how the variable is used
    and should be as descriptive as possible
  - Names should never be shorter than 3 characters unless it is an indexer
  - Shorthand names should not be used as they obfuscate the usage of the variable
    (e.g. scl instead of school)

## Guidelines for functions

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

- Variable declarations should be grouped together in the highest common code
  scope that makes sense
- Variable should be declared from outside loop.
- All local variables declared should have a default value assigned to them
- Remove unused parameters and variables

## Statements

- Limit 1 statement per line
- Remove duplicate statements
- Tertiary|Ternary Statements
  - Only simple statements should be used
  - Complex or compound Tertiary statements should be avoided
- Braces should be present even if only one line of code exist (not applicable for
  cases)

## Errors

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

Format the code before checkin(Possible to configure in save action)

## Scoping

- Most restricted scope should be provided to the variables and methods
- Functions are public only if they are a public api, i.e. being consumed from outside
  the resident class
- Getters/Setters may remain public even if not consumed from anywhere
- Member and static (excluding constants) variables should be private

## Comments

- Commented code should be removed before check-in.
- Complex code should be commented and maintained throughout changes

## Must Haves

- Classes should be no more than 400 lines
- Functions should be no more than 75 lines

## Logical

- Ensure unnecessary checks are not written in code

## General

- Follow the OOPS concepts
- Use latest APIs of particular language to write the code.
- Create reusable generic Utility classes in case the functionality can be reused in
  application
- Inherit from an existing class if it makes sense.
