//Changing Guest List: 


var guests = ["Faheem","Hassan","Ahsan",];
 
//Remove a guest from the list.

var absentGuest = guests.pop();
console.log( absentGuest + " cannot attend the Dinner.");

//Add the new guest to list.

var newGuest = "Mujtaba";
guests.push(newGuest);

//Inviting them again.

console.log("Dear " + guests[0]  +", you are invited to dinner at my home on Saturday. It would be an honour to have you there.");
console.log("Dear " + guests[1]  +", you are invited to dinner at my home on Saturday. It would be an honour to have you there.");
console.log("Dear " + guests[2]  +", you are invited to dinner at my home on Saturday. It would be an honour to have you there.");
