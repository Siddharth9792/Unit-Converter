// select input field
var input= document.querySelector("#input");

// Catch event
input.addEventListener("input", convert);

function convert(){
    var value = input.value;
    var output = document.querySelector(#output);
    if (value !== ""){
        // Show output
        output.style.display = "block";
  } else {
        output.style.display = "none";
  }           
    

    document.querySelector("#grams").textContent = value *453.592;

    document.querySelector("#kilogram").textContent = value * 453.592 / 1000;

    document.querySelector("#ounce").textContent = value * 16;
    // console.log("hello")
}