//Unchanged Magicians: 


function printing(names) {
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
function make_great(ar) {
    var tmp = [];
    for (var i = 0; i < ar.length; i++) {
        tmp.push(ar[i] + ' great magicain');
    }
    return tmp;
}
var magicain = ["Ahsan", "Mujhtaba", "Hassan", "Faheem"];
printing(magicain);
var great_magician = make_great(magicain);
printing(great_magician);
