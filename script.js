function temp() {
  var cel = document.getElementById("c").value;
  if(cel.length==0) {
    alert("Please add the temperature in celsius");
  }
  else{ 
    var fah = (cel * 9/5) +32;
    document.getElementById("f").value = fah;
  }
}

function weight() {
  var kg = document.getElementById("kg").value;
  if(kg.length==0) {
    alert("Please add the weight in Kg");
  }
  else{ 
    var pounds = kg * 2.205;
    document.getElementById("pounds").value = pounds;
  }
}

function distance() {
  var km = document.getElementById("km").value;
  if(km.length==0) {
    alert("Please add the distance in Km");
  }
  else{ 
    var miles = km / 1.609;
    document.getElementById("miles").value = miles;
  }
}

