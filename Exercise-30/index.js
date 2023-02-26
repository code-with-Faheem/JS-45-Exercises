// No Users: 


var username = ["Hassan","Faheem","Ahsan","admin","Mujhtaba"];
var new_username = ["Ali", "Muhammad", "Gulam","Hassan", "Ahsan"];
for (var i = 0; i < username.length; i++) {
    var flg = true;
    flg = check(new_username[i]);
    if (flg) {
        console.log(new_username[i] + " user is accepted..");
    }
    else {
        console.log(new_username[i] + " is not accepted..");
    }
}
function check(s) {
    var flg = false;
    for (var i = 0; i < username.length; i++) {
        if (username[i] == s) {
            flg = true;
        }
    }
    if (flg == true) {
        flg = false;
    }
    else {
        flg = true;
    }
    return flg;
}