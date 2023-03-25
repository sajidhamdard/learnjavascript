let arr = [2, 4, 5, [3, 5, 7], 7, 8];
let ans = arr.flatMap(test);
function test(num) {
  return [num];
}
console.log(ans);

const arr = [10, 2, 9, 41, 5];
arr.sort(sortFn);

function sortFn(num1, num2) {
  console.log(num1, num2);
  return -1;
}

console.log(arr);
