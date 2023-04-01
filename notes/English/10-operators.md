# Operators

An operator is capable of manipulating a certain value or operand. Operators are used to perform specific mathematical and logical computations on operands. In other words, we can say that an operator operates the operands. In JavaScript operators are used for compare values, perform arithmetic operations etc. There are various operators supported by JavaScript:

- Arithmetic Operators

```
 +	Addition
 -	Subtraction
 *	Multiplication
 **	Exponentiation (ES2016)
 /	Division
 %	Modulus (Division Remainder)
 ++	Increment
 --	Decrement
```

- Comparison Operators

```
  ==	equal to
  ===	equal value and equal type
  !=	not equal
  !==	not equal value or not equal type
  >	    greater than
  <	    less than
  >=	greater than or equal to
  <=	less than or equal to
  ?	    ternary operator

```

- Logical Operators

  1. && logical and
  2. || logical or
  3. ! logical not

- Assignment Operators

```

    =	    x = y	    x = y
    +=	    x += y	    x = x + y
    -=	    x -= y	    x = x - y
    *=	    x *= y	    x = x * y
    /=	    x /= y	    x = x / y
    %=	    x %= y	    x = x % y
    **=	x   **= y	    x = x ** y

```

- Typeof operators : In JavaScript, the typeof operator is used to determine the type of a variable or expression. The typeof operator returns a string that indicates the type of the operand.

Here are some examples of how the typeof operator can be used:

```

console.log(typeof 1); // 'number'
console.log(typeof 'hello'); // 'string'
console.log(typeof true); // 'boolean'
console.log(typeof {}); // 'object'
console.log(typeof []); // 'object'
console.log(typeof function() {}); // 'function'
console.log(typeof null); // 'object'
console.log(typeof undefined); // 'undefined'

```

It's worth noting that typeof null returns 'object' which is considered as a bug in javascript.

Another important thing is that typeof operator returns 'undefined' for variables that have been declared but have not been assigned a value.

In summary, typeof operator is used to check the type of a variable or an expression in JavaScript, it returns a string indicating the type of the operand.

- Operator precedence

In JavaScript, operator precedence determines the order in which operations are performed in an expression. Some operators have higher precedence than others, and will be executed first.

For example, in the expression 1 + 2 _ 3, the multiplication operator (_) has higher precedence than the addition operator (+), so the multiplication is done first, resulting in the expression being evaluated as 1 + (2 \* 3) = 7.

Here is the list of operator precedence in JavaScript, from highest to lowest:

1. () Parentheses
2. \*\* Exponentiation
3. ++, -- (postfix)
4. ++, -- (prefix)
5. -, + (unary)
6. ! (not)
7. \_, /, %
8. +, -
9. <, <=, >, >=, instanceof
10. ==, !=, ===, !==
11. &&
12. ||
13. ?: (ternary)
14. =, +=, -=, \_=, /=, %=, \*\*=, &#8203;oaicite:{"index":0,"invalid_reason":"Malformed citation <<=, >>=, >>>"}&#8203;=
15. yield
16. await
17. ... (spread operator)

It's worth noting that when operators have the same precedence they are evaluated left to right, this is called left-to-right associativity

In summary, operator precedence is the order in which operations are performed in an expression, it's determined by the precedence of operators, with some operators having a higher precedence than others and will be executed first.

### Truth Table of Logical Operators

| x     | y     | x and y | x or y | !x    |
| ----- | ----- | ------- | ------ | ----- |
| true  | true  | true    | true   | false |
| true  | false | false   | true   | false |
| false | true  | false   | true   | true  |
| false | false | false   | false  | true  |
