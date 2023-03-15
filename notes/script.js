let str = "";
for (let i = 1; i <= 5; i++) {
  let sum = 0;
  for (let j = 1; j <= i; j++) {
    if (i !== 1) {
      sum = sum + i;
    } else {
      sum = "";
    }
  }
  str = str + i.toString().repeat(i) + sum + " ";
}
console.log(str);
