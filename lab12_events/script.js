/**
 * Monday and Tuesday, June 17 and 18, 2024
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

// collect the button
let btnpressme = document.querySelector(".btnpressme");
btnpressme.addEventListener("click", (e) =>{
    // switch text content 'btnpressme' button from Press Me to 'Button was Press'
    if(e.target.textContent === "Press Me!"){
        e.target.textContent = "Button was Pressed";
    }
    else{
        e.target.textContent = "Press Me!";
    }
    // toggle between class 'btnpressme' and 'btnactive'
    e.target.classList.toggle("btnactive");
});

/* remove an item from a list */
let listfruits = document.querySelector("#listfruits");
listfruits.addEventListener("click", (event) => {
    if(event.target.tagName.toLowerCase() === "li"){
        event.target.remove()
    }
})

/* prevent default of an event */
let visitqcc = document.querySelector(".visitqcc");
visitqcc.addEventListener("click", (event) => {
    event.preventDefault()
    alert("QCC website is off! Try Later");
})

/* Scroll Events */
let content = document.querySelector("#content");
let btnscrollright = document.querySelector(".btnscrollright");
btnscrollright.addEventListener("click", () => {
    window.scrollBy(100, 0);
})

/* Slice Photo Gallery */
let btnleft = document.querySelector(".btnleft");
let btnright = document.querySelector(".btnright");
let gallerycontainer = document.querySelector(".gallerycontainer");

btnleft.addEventListener("click", () => {
    gallerycontainer.scrollBy({
        left: -500,
        behavior: "smooth"
    })
})

btnright.addEventListener("click", () => {
    gallerycontainer.scrollBy({
        left: 500,
        behavior: "smooth"
    })
})

/* To Top */
const gotop = document.querySelector(".gotop");

window.addEventListener("scroll", () => {
    let pxtop = window.scrollY;
    if(pxtop >= 300){
        gotop.style.display = "block";
    }
    else{
        gotop.style.display = "none";
    }
})





