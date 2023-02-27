function my_dictionary() {
    var Cars = {
        Nissan:"GTR R35",   // the keys here are vehicles
        Toyota:"Supra",     // the values are models of vehicles
        Honda:"NSX",
        Subaru:"Impreza STI"
  };
  document.getElementById("dictionary").innerHTML = Cars.model;
}


function my_dictionary() {
    var Cars = {
        Nissan:"GTR R35",   
        Toyota:"Supra",    
        Honda:"NSX",
        Subaru:"Impreza STI"
  };
  delete Cars.model;           // deleted the key and value
  document.getElementById("dictionary").innerHTML = Cars.model;
}