function Ride_Function() {  // defining a function and naiming it
    var Height, Can_ride;   //defining a variable and giving it
                            // a string value
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride";  //putting the value 

                                                                        //of the variable intp the HTML elementfrompoint
}

function Vehicle(Make, Model, Year, Color) {   //chose a function
    this.Vehicle_Make = Make;   
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge","Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keyword_and_Constructors").innerHTML =
    "Erik drives a&nbsp"  + Erik.Vehicle_Color + "-colored&nbsp" + Erik.Vehicle_Model + "&nbsp manufactured in " + Erik.Vehicle_Year
    
}

document.getElementById("New_and_This").innerHTML //

function count_Function() {
    document.getElementById(Nested_Function).innerHTML = count();
    function count() {
        var starting_point= 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

