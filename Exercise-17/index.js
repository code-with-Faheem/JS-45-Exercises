//Seeing the World:


var places = ["New York","London","Paris","Mecca","Madinah"];

//Array in its original order.

console.log("Original order: " + places);

//Array in alphabetical order without changing the original list:

console.log("Alphabetical order: " + places.slice().sort());

//Array is still in its original order:

console.log("Original order again: " + places);

//Array in reverse alphabetical order without changing the order of the original list:

console.log("Reverse alphabetical order: " + places.slice().sort().reverse());

//Array is still in its original order:

console.log("Original order again: " + places);

//Reverse the order of your list again.

places.reverse();
console.log("Reversed Order: " + places);

//Reverse the order of your list again.

places.reverse();
console.log("Original order again: " + places);

//Sort your array in alphabetical order.

places.sort();
console.log("Alphabetical order: " + places);

//Sort to change your array in reverse alphabetical order.

places.sort().reverse();
console.log("Reversed alphabatical order: " + places);