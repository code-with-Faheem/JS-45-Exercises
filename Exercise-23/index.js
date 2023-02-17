//More Conditional Tests: 


// Tests for equality and inequality with strings

let name1 = "Faheem";
let name2 = "Hassan";
console.log(name1 == "Faheem");
console.log(name1 == name2);
console.log(name2 !== "Hassan");
console.log(name2 !== name1);

//Tests using the lower case function

let name3 = "FAHEEM"; 
let name4 = "faheem";
console.log(name3 == name4);
console.log(name3 != name4);
console.log(name3.toLowerCase() == name4);
console.log(name3 == name4.toLowerCase());

//Numerical tests involving equality and inequality, greater than and less than

let num1 = 5;
let num2 = 15;

console.log(num1 == 5); // True
console.log(num1 == num2); // False
console.log(num1 != 15); // True
console.log(num1 != num2); // True
console.log(num1 > num2); // False
console.log(num2 > num1); // True

//Tests using "and" and "or" operators
let num3  = 5;
let num4  = 15;

console.log(num3 > 3 && num4 < 20); // True
console.log(num3 > 3 && num4 > 20); // False
console.log(num3 < 3 || num4 < 20); // True
console.log(num3 > 3 || num4 < 20); // True
console.log(num3 > 3 || num4 > 20); // True
console.log(num3 < 3 || num4 > 20); // False

//Test whether an item is in a array

let fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("apple")); // True
console.log(fruits.includes("orange")); // True

//Test whether an item is not in a array

let fruits2 = ["apple", "banana", "orange"];
console.log(fruits2.includes("grape")); // False
console.log(fruits2.includes("Guava")); // False