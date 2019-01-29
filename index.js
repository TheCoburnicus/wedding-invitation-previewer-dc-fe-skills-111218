
//object.addEventListener = (click,"uno");//

// document.getElementById("myBtn").addEventListener("click", function(){
//  document.getElementById("demo").innerHTML = "Hello World";
})

document.getElementById("uno").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

object.onclick = function(){uno};

object.onclick = function(){dos};

object.onclick = function(){tres};

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    return false;
  }
}

