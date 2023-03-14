function License_function() {  // defining a function and naiming it
    var Age, Drive;   //defining a variable and giving it
                            // a string value
    Age = document.getElementById("License").value;
    Drive = (Age  < 18) ? "You are too young":"You are  eligible";
    document.getElementById("License").innerHTML = Can_drive + " to drive";  //putting the value 

                                                                        //of the variable intp the HTML elementfrompoint
}

function Dogs(Breeds, Age, Color) {   //chose the function of dogs
    this.Dog_Breeds = Breeds;   
    this.Dog_Age = Age;
    this.Dog_Color = Color;
}
var Jack = new Dogs("German Shepherd", "2 years", "Black and Brown");
var Emily = new Dogs("Bulldog", "1 year", "White and Black");
var Erik = new Dogs("Golden Retriever", "5 months", "light brown");
function myFunction() {
    document.getElementById("Keyword_and_Constructors").innerHTML =
    "Erik owns a&nbsp"  + Erik.Dog_Color + "-colored&nbsp" + Erik.Dog_Age + "&nbsp and it is  " + Erik.Dog_Age
    
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

