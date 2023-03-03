function multipliction() {      // defining a function and naming it
    var simple_math = 6 * 8;    //  defining a variable and giving it
                                
    document.getElementById("math1") .innerHTML = "6 x 8 =" + simple_math;
}

function division() {       //defining a function and naming it
    var simple_math = 48/6; // defining a variable
    document.getElementById("button_text").innerHTML = "48/6 = " + simple_math;
}

function subtraction_function() {   //defining a function and namng it
    var subtraction = 5 - 2;        // defining a variable 
    document.getElementById("math").innerHTML= "5 - 2 =" + subtraction;
}

function addition_() {      // defining a function
    var addition = 2 + 2;   //defining a variable 
    document.getElementById("math").innerHTML = "2 + 2 ="+ addition;
}

var x = 5;
x++;
document.write(x);

var x = 5.25;
x--;
document.write(x);

function modulus_operator() {
    var simple_math = 25 % 6;
    document.getElementById("math").innerHTML = "when you divide 25 by 6 you have a
    remainder of: " + simple_math;
}
window.alert(math.random() *100);
