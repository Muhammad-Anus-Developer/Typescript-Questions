// Tests for equality and inequality with strings
const string1: string = "hello";
const string2: string = "world";

console.log("Equality test with strings:");
console.log(string1 === string2); // False
console.log(string1 === "hello"); // True

console.log("Inequality test with strings:");
console.log(string1 !== string2); // True
console.log(string2 !== "world"); // False

// Tests using the lower case function
const mixedCaseString: string = "HelloWorld";
const lowerCaseString: string = mixedCaseString.toLowerCase();

console.log("Lower case test:");
console.log(lowerCaseString === mixedCaseString.toLowerCase()); // True
console.log(lowerCaseString === mixedCaseString); // False

// Numerical tests
const num1: number = 10;
const num2: number = 5;

console.log("Numerical tests:");
console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log(num1 >= num2); // True
console.log(num1 <= num2); // False

// Tests using "and" and "or" operators
const condition1: boolean = true;
const condition2: boolean = false;

console.log("Tests using 'and' operator:");
console.log(condition1 && condition2); // False
console.log(condition1 && !condition2); // True

console.log("Tests using 'or' operator:");
console.log(condition1 || condition2); // True
console.log(!condition1 || condition2); // False

// Test whether an item is in an array
const array: number[] = [1, 2, 3, 4, 5];
const item1: number = 3;
const item2: number = 6;

console.log("Test whether an item is in an array:");
console.log(array.includes(item1)); // True
console.log(array.includes(item2)); // False

// Test whether an item is not in an array
console.log("Test whether an item is not in an array:");
console.log(!array.includes(item1)); // False
console.log(!array.includes(item2)); // True
