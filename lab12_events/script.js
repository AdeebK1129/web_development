/**
 * Monday, June 17, 2024
 * Adeeb Khan
 */

// onclick event
let btnl = document.querySelector(".btnl");
// step 2: bound the click event to btnl 
btnl.onclick = function(){
    alert("Hi There!");
}

// onmouseover
document.querySelector(".linkqcc").onmouseover = () => {
    alert("QCC LINK WAS TOUCHED");
}

// change color div
let colorcontainer = document.querySelector(".colorcontainer");
let btncolor = document.querySelector(".btncolor");

btncolor.addEventListener("click", () => {
    colorcontainer.style.backgroundColor = randomcolor();
})

let randomcolor = () => {
    let redvalue = Math.floor(Math.random() * 255);
    let greenvalue = Math.floor(Math.random() * 255);
    let bluevalue = Math.floor(Math.random() * 255);
    return `rgb(${redvalue}, ${greenvalue}, ${bluevalue})`;
}

// collect the three buttons
const orangeButton = document.querySelector(".btnorange");
const oliveButton = document.querySelector(".btnolive");
const resetButton = document.querySelector(".resetColor");

// add click event to each button to the background color to olive and orange respectively
orangeButton.addEventListener("click", () => {
    orangeButton.style.backgroundColor = "orange";
})

oliveButton.addEventListener("click", () => {
    oliveButton.style.backgroundColor = "olive";
})

//reset 
resetButton.addEventListener("click", () => {
    orangeButton.style.backgroundColor = "white";
    oliveButton.style.backgroundColor = "white";
})




