function the_sentence() {       // named function
    var part_1 = "i wish ";     // created a three part variable
    var part_2 = " there was "; // to create a sentence
    var part_3 = " a three day weekend ";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_method() {       //named function
    var Sentence = "dont let yesterday take up too much of today"; // a sentence variable
    var Section = Sentence.slice(27,35);
    document.getElementById("Slice").innerHTML = Section; // added the call id
}

function string_method() {      //named function
    var X = 200;
    document.getElementById("Numbers_to_string").innerHTML = X.toString(); //call elementadded
}

function precision_method() { // named function
    var X =22444.20089894;
    document.getElementById("Precision").innerHTML = X.toPrecision(5); //call element added
}