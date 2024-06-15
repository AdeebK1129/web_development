console.log("Adeeb Khan");
// select <div id="special">
let division = document.querySelector("#special");

// change CSS style, color, to the selected division
division.style.color = "olive";

// select <span class="s3">20%</span>
let s3 = document.querySelector(".s3");

// change CSS style, color, to the selected division
s3.style.color = "magenta";
s3.style.fontSize = "30px";

// select <span class="s4">OFF</span>
let s4 = document.querySelector(".s4");
s4.style.backgroundColor = "lightgray";
s4.style.padding = "12px";

// change text content 
s3.textContent = "50%";
s4.innerHTML = "OFF by <b><em>midnight</em></b>";

// className method
let spans = document.querySelectorAll("#special span");
spans[1].className = "changefontfamily";



