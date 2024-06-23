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
    // switch text content 'btnpressme' button from Press Me to 'Button was Pressed'
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

/**
 * Thursday, June 20
 * Form Events
 * Input Event
*/

//get reference to form elements
const myform = document.querySelector("#myform");
// get the <div class="greeting">
const greeting = document.querySelector(".greeting");
const greetingname = document.querySelector(".greeting p span");

myform.addEventListener("submit", (event) => {
    // prevent the default form submission behaviour
    event.preventDefault();

    // username validation
    const usernameinput = document.querySelector("#username");
    // collect the input text value
    const username = usernameinput.value;

    // validation 1: make sure the user types a username before pressing the submit button
    if(username.trim() === ""){
        alert("Please enter a username");
        return; // stop further execution
    }

    // if the validation passed, you can submi the data to the server
    // greeting message after the validation
    greetingname.innerHTML = username;
    greeting.style.display = "block";
    
    // after the form is submitted, we can clear the username from the input field
    usernameinput.value = "";
})

/**
 * password validation
 */

// collect form elements
const passwordfield = document.querySelector("#passwordfield");
const submitbtn = document.querySelector(".submitbtn");
// collect the password error message element
const passworderror = document.querySelector(".passworderror");

// disable button on window load
window.addEventListener("load", () => {
    submitbtn.disabled = true;
    submitbtn.style.backgroundColor = "lightgray";
})

// check the length of the password
passwordfield.addEventListener("input", () => {
    let numbercharacters = passwordfield.value.length; 
    if(numbercharacters < 8){
        passworderror.textContent = "Invalid! Password must have 8+ characters";
        passworderror.style.color = "red";
        passwordfield.style.border = "solid 2px red";

    }
    else{
        passworderror.innerHTML = "&#x2713; Valid Password";
        passworderror.style.color = "green";
        passwordfield.style.border = "solid 2px green";
        validPassword = true;
    }
    validateForm()
})


// feedback and comments section
const comments = document.querySelector("#comments");
const commenterror = document.querySelector(".commenterror");
const numchars = document.querySelector("#numchars");

comments.addEventListener("input", () => {
    let areaCharacters = comments.value.length;
    numchars.textContent = areaCharacters;

    if (areaCharacters < 50) {
        commenterror.textContent = "Invalid! Comment Must be 50-2000 characters";
        comments.style.border = "solid 2px red";
        submitbtn.disabled = true;
        submitbtn.style.backgroundColor = "lightgray";
    } else {
        comments.style.border = "solid 2px green";
        validComment = true;
    }
    validateForm()
});

// validation checkpoints
let validPassword = false;
let validComment = false;

function validateForm() {
    if(validComment && validPassword){
        submitbtn.disabled = false;
        submitbtn.style.backgroundColor = "red";
    }
}







