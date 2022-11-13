/* 
An operator is capable of manipulating a certain value or operand. Operators are used to perform specific mathematical and logical computations on operands. In other words, we can say that an operator operates the operands. In JavaScript operators are used for compare values, perform arithmetic operations etc. There are various operators supported by JavaScript:  
    => Arithmetic Operators
        +	Addition
        -	Subtraction
        *	Multiplication
        **	Exponentiation (ES2016)
        /	Division
        %	Modulus (Division Remainder)
        ++	Increment
        --	Decrement
    => Comparison Operators
        ==	equal to
        ===	equal value and equal type
        !=	not equal
        !==	not equal value or not equal type
        >	greater than
        <	less than
        >=	greater than or equal to
        <=	less than or equal to
        ?	ternary operator
    => Logical Operators
        &&	logical and
        ||	logical or
        !	logical not
    => Assignment Operators
        =	    x = y	    x = y
        +=	    x += y	    x = x + y
        -=	    x -= y	    x = x - y
        *=	    x *= y	    x = x * y
        /=	    x /= y	    x = x / y
        %=	    x %= y	    x = x % y
        **=	x   **= y	    x = x ** y
*/

//Example of some most used operators
let i = 10;
++i;
++i;
console.log(i); //12

let j = 10;
--j;
--j;
console.log(j); //8

let k = 24;
let ans = k % 5;
console.log(ans); //4

/*
Truth Table of Logical Operators

condition 1(e.g., X)	condition 2(e.g., Y)	NOT X( ~ X )	X AND Y( X && Y )	X OR Y( X || Y )
    false	                false	                true	        false	            false
    false	                true	                true	        false	            true
    true	                false	                false	        false	            true
    true	                true	                false	        true	            true
*/
