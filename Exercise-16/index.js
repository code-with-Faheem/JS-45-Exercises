//Shrinking Guest List: 


var guests = ["Faheem","Hassan","Ahsan","Mujtaba"];
console.log("Unluckily,  we can only invite two guests to dinner.");

//Removing the guests from list:

var removedGuest1 = guests.pop();
var removedGuest2 = guests.pop();
console.log("Sorry " + removedGuest1 + ", you are not invited to dinner.");
console.log("Sorry " + removedGuest2 + ", you are not invited to dinner.");

//Inviting two guests to the Dinner.

console.log("Dear " + guests[0]+ ", you are invited please come to my Dinner.");
console.log("Dear " + guests[1] + ", you are invited please come to my Dinner.");

//Making the guests list empty:

guests.pop();
guests.pop();
console.log("Guests list is empty now:" + guests);