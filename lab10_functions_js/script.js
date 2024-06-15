/**
 * Adeeb Khan
 * June 15, Function and Object
 */

console.log("Adeeb Khan");
function msg(){
    console.log("Hello World!");
}

// function to print numbers between 1 and 3, inclusive
function printcount(){
    for(let x = 1; x<= 3; x++){
        console.log(x);
    }
}

// function that passes a name as argument
function greeting(name){
    console.log(`Welcoem to Javascript ${name}`);
}

// function that passes multiple arguments
function fullname(firstname, lastname){
    console.log(`Welcome to JS ${firstname} ${lastname[0]}`);
}

let firstname = "Martha";
let lastname = "Smith";

fullname(firstname, lastname);


// function without parameters but returns a value
function sumxy(){
    let x = 10;
    let y = -2
    return x+y;
}

// function with parameters
function sum(x,y){
    return x+y;
}
/**
 const sum = function(num1, num2){
    return num1 + num2;
 }
 */


// calling sum()
let s = sum(5, 10);
console.log(`The sum is ${s}`);

// function check if a number is positive
function checkPositive(number){
    return number > 0;
}

// call the function 
let n = 2;
let check = checkPositive(n);
console.log(`is number ${n} positive? ${checkPositive(n)}`);

const addition = function(num1, num2){
    return num1 + num2;
}

// arrow function
const product = (num1, num2) => { return num1 + num2; }

/*
// regular variable function
const product = function(num1, num2){
    return num1 + num2
}
*/


// ANONYMOUS FUNCTION
(
    function(){
        console.log("This is an anonymous function");
    }
)();

(
    ()=>{console.log("This is an anonymous arrow funciton")}
)();


// OBJECT
/* real-world objects are all around us, and they each have attributes and behaviours that can describe
-attributes describe the features than an object has
- behaviours describe actions that an object can perform
*/

// car is the object
let car = {
    // attributes
    make: "Jeep",
    year: 2021,
    model: "Wrangler",
    startmileage: 10,
    endmilage: 50,

    // behaviours (methods)
    accelerate : function(){ return this.model },
    brake : function () { return this.make },
    distancetravel : function() { return this.endmileage - this.startmileage }
}

// add a method 'start' to the car object
car.start = function(){
    return `${this.make} ${this.model} is running`;
}

// add a property 'price'
car.price = 32000;

