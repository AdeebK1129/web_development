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

// setAttribute method
// find the first <h1> element and we are going to set the class attribute 'title' to it
let title = document.querySelector("h1");
title.setAttribute("class", "styletitle");

// remove a class name from an element
// remove the class 'info' from <div class="info">
let divmoreinfo = document.querySelector(".moreinfo");
divmoreinfo.classList.remove("info");

// append a text after <div id="special">
let divspecial = document.querySelector("#special");
divspecial.append("NEW INFORMATION");

// appendChild to add a new <li> to <ul class="todo">
// step 1) create <li> element
let newitem = document.createElement("li");
// step 2) give content to the new <li>
let newlist = document.createTextNode("Post Student's Work");
// join the newlist into newitem.
newitem.appendChild(newlist);
// step 3) Append as child the newitem the newitem into the document
// append to <ul class="todo">
let todolist = document.querySelector(".todo");
todolist.appendChild(newitem);

// remove an element using removeChild method
todolist.removeChild(todolist.children[1]);

// remove an element using remove method
// select the element that you want to remove and use the method remove
todolist.children[0].remove();