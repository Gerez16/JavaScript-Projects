function count_To_five() { 
    var Digit = "";     
    var x = 1;
    while ( x < 5) {
        Digit += "<br>" + x; // code block to be executed
        x++;
    }
    document.getElementById("Counting_to_five").innerHTML = Digit;
}

var days = ["monday", "tuesday", "wednesday", "thursday", "friday"];    //code block to be executed
var content = "";
var D;
function for_Loop() {
    for ( D = 0; D < days.length; D++) {
        content += days[D] + "<br>";
    }
    document.getElementById("days_in_week").innerHTML = content;
}


function car_pics() {
    var Car_brands = [];
    Car_brands[0] = "Nissan";   // The getelementbyid is being called from 
    Car_brands[1] = "Toyota";   //the html file and it will display
    Car_brands[2] = "Chevrolet"; // the american brand
    Car_brands[3] = "BMW";
    document.getElementById("Cars").innerHTML = "This is a picture of an american car brand" +
    Car_brands[2];
}

var X = 30;     // defined the variable here
document.write(X);
{
    let X = 100;    // secondly defined the let here
    document.write("<br>" + X);
}
document.write("<br>" + X);