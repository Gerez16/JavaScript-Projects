function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 3 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 10 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("What_time_is_it").innerHTML = Reply;
}

if ( 200 > 100) {
    document.write(" The right number is smaller than the number on the right.")

}

function Height_Function() {
    Height = document.getElementById("Height").value;
    if (Height >= 6) {
        Ride = "You are tall enough to get on the adult rides";
    }
    else {
        Ride = "You are not tall enough to get on the rides";
    }
    document.getElementById("How_Tall_Are_You?").innerHTML = Ride;
}

var X = 100;
function Add_numbers_1()  {
    document.write(10 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {
    var X = 50;
    document.write(30 + X + "<br>");
}
function Add_numbers_4() {
    document.write(X + 100);
}
Add_numbers_3();
Add_numbers_4();


console.log(20 + 20); // this should be viewd on developer tools
document.getElementById("plus").innerHTML // void the line 46 to for no error..