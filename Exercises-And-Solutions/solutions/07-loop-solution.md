# For Loop Exercise

### 1. Print 1 to 100

```
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
```

### 2. Print all Odd numbers from 1 to 100

```
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
```

### 3. Print all Even numbers from 1 to 100

```
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

### 4. Print all numbers which are divisible of 5 in 1 to 100

```
for (let i = 1; i <= 100; i++) {
 if (i % 5 === 0) {
   console.log(i);
 }
}
```

### 5. Print all numbers which are divisible of 5 and 15 in 1 to 100

```
for (let i = 1; i <= 100; i++) {
 if (i % 5 === 0 && i % 15=== 0) {
   console.log(i);
 }
}
```

### 6. Print 2's table

```
let x = 2;
for (let i = 1; i <= 10; i++) {
  console.log(i * x);
}
```

### 7. Ask user a question "How many times do you want to print Hello World?" and then print Hello World that number of times.

```
let count = Number(prompt("How many times do you want to print Hello World"));
for (let i = 1; i <= count; i++) {
  console.log(i+ " Hello World");
}
```

### 8. Calculate sum of all numbers from 1 to 100.

```
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("The sum of all numbers:", sum);
```

### 9. Calculate sum of all odd numbers from 1 to 100.

```
let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}
console.log("The sum of all odd numbers:", sum);

```

### 10. Calculate sum of all even numbers from 1 to 100.

```
let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log("The sum of all even numbers:", sum);

```

### 11. Print 1,2,4,8,16,32,64.......upto 2048

```
for (let i = 1; i <= 2048; i = i *= 2) {
  console.log(i);
}
```

### 12. Print below series

    ```
    1,2,3,4,5,6,7,8,9,10
    11,12,13,14,15,16,17,18,19,20
    .
    .
    ......................99,100

    ```

```
for (i = 1; i <= 100; i = i + 1) {
document.write(i);
if (i % 10 === 0) {
  document.write("<br>");
}
}
```

### 13. Print 1 to 100, but with a specific condition. If a number is divisible by both 3 and 5, it logs "fizzbuzz" to the console instead of the number itself.

```
for (i = 1; i <= 100; i = i + 1) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + "fizzbuzz");
  }
}
```

### 14. Print 10's table like this below:

```
2*1=2
2*2=4
2*3=6
2*4=8
2*5=10
.
.
.
2*10=20
```

```
let x = 10;
for (i = 1; i <= 10; i = i + 1) {
  console.log(x + "*" + i + "=" + x * i);
}

```

### 15. Run a loop from 1 to 50

```
From 1 to 10 print "A"
From 11 to 20 print "B"
From 21 to 30 print "C"
From 31 to 40 print "D"
From 41 to 50 print "E"
```

```
for (let i = 1; i <= 50; i++) {
  if (i <= 10) {
    console.log(i + " A");
  } else if (i <= 20) {
    console.log(i + " B");
  } else if (i <= 30) {
    console.log(i + " C");
  } else if (i <= 40) {
    console.log(i + " D");
  } else if (i <= 50) {
    console.log(i + " E");
  }
}

```

### 16. Run a loop from 50 to 1

```
From 50 to 41 print "A"
From 40 to 31 print "B"
From 30 to 21 print "C"
From 20 to 11 print "D"
From 10 to 1 print "E"
```

```
for (let i = 50; i >= 1; i--) {
if (i <= 10) {
    console.log(i + " E");
} else if (i <= 20) {
    console.log(i + " D");
} else if (i <= 30) {
    console.log(i + " C");
} else if (i <= 40) {
    console.log(i + " B");
} else if (i <= 50) {
    console.log(i + " A");
}
}
```

### 17. Print below series:

5 25 125.. till number is less than equal to 10000

```
for (let i = 1; i <= 10000; i = i*= 5) {
  console.log(i);
}

```

### 18. Print below series:
    3,6,9,12... till number is less than equal to 500

```
for (let i = 3; i <= 500; i = i + 3) {
 console.log(i);
}

```

### 19. print below series:

```
120
221
322
423
524
625
726
827
928
1029
```

```
for (let i = 1, j = 20; i <= 10; i++, j++) {
  console.log(i + "" + j);
}

```

### 20. Print below series:

100 95 90 85 80 ... till 0

```
for (let i = 100; i >= 0; i = i - 5) {
  console.log(i);
}

```

### 21. Number 70 is divisible by which numbers till 70? Find out and print those numbers.

```
for (let i = 1; i <= 70; i++) {
if (i % 7 === 0) {
  console.log(i);
}
}

```

# while loop Exercise

### 1. Write a while loop that logs the numbers 1 to 10 in the console.

```
let i = 1;
while (i <= 10) {
console.log(i);
i++;
}
```

### 2. Calculate sum of all numbers from 1 to 10.

```
let i = 1;
let sum = 0;
while (i <= 10) {
  sum = sum + i;
  i++;
}
console.log(sum);

```

### 3. Counting down from 10 to 1

```
let i = 10;
while (i >= 1) {
console.log(i);
i--;
}
```

### 4. Print 2's table

```
let x = 2;
let i = 1;
while (i <= 10) {
  console.log(i * x);
  i++;
}
```

### 5. Calculate sum of all odd numbers from 1 to 100

```
let i = 1;
while (i <= 100) {
  if (i % 2 == 1) {
    console.log(i);
  }
  i++;
}
```

# do while loop

### 1. Write a do...while loop that logs the numbers 1 to 5 in the console

```
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
```

### 2. Counting down from 10 to 1

```
let i = 10;
do {
  console.log(i);
  i--;
} while (i >= 1);
```

### 3. Calculate sum of all numbers from 1 to 10

```
 let i = 1;
let sum = 0;
 do {
sum = sum + i;
 i++;
} while (i <= 10);
  console.log(sum);
```

### 4. Print 2's table

```
let x = 2;
let i = 1;
do {
  console.log(i * x);
  i++;
} while (i <= 10);

```

### 5. Ask user a question "How many times do you want to print Hello World?" and then print "Hello World" that number of times.

```
let count = Number(prompt("How many times do you want to print Hello World"));
let i = 1;
do {
  console.log("hallo World : " + i);
  i++;
} while (i <= count);

```

### 6. Calculate sum of all even numbers from 1 to 100.

```
let i = 1;
let sum = 0;
do {
  if (i % 2 === 0) {
    sum = sum + i;
  }
  i++;
} while (i <= 100);
console.log(sum);
```
