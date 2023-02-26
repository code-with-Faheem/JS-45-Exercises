//Great Magicians: 


function printing(names) {
    for (var i = 0; i < names.length; i++) {
        greet(names[i]);
    }
}
function greet(H) {
    console.log(" greet to have " + H);
}
function show_magician(s) {
    console.log('--------lit of magician--------');
    for (var i = 0; i < s.length; i++) {
        console.log(s[i]);
    }
}
var magicain = ["Ahsan", "Mujhtaba", "Hassan", "Faheem"];
printing(magicain);
show_magician(magicain);
