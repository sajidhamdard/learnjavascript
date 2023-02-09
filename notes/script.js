let str = "Wecode";
console.log(str.repeat(10));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.startsWith("We", 3)); //case sensitive
console.log(str.indexOf("c"));
console.log(str.lastIndexOf("c"));
console.log(str.includes("cod"));
console.log(str.charAt(4)); // d
console.log(str.charAt(10)); // check length otherwise answer will be empty
console.log(str.replace("cod", "hello")); //replace function will not change original string
console.log("         Sajid Khan                 ".trim());
console.log("         Sajid Khan    ".trimStart());
console.log("         Sajid Khan    ".trimEnd());
console.log(str.concat(" Jaipur", " Rajasthan", " India"));
if (str.indexOf("cod") > -1) {
  console.log("yes");
} else {
  console.log("no");
}

if (str.includes("cod")) {
  console.log("yes");
} else {
  console.log("no");
}
