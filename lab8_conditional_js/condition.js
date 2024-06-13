console.log("Student's Name");
console.log("===== Example 1: if statement =====")
let day1 = true;

if(day1){
    console.log("Good morning!");
}

console.log("===== Example 2: if-else statement ===== ");
let n1 = 8, n2 = '8';

if(n1 === n2){
    console.log("They are equal");
}
else{
    console.log("They are different");
}

console.log("===== Example 3: Multiway Condition Statement =====");
// check if a number is positive, negative, or zero
let number = 9;
if(number > 0){
    console.log(`Number ${number} is positive`);
}
else if(number < 0){
    console.log(`Number ${number} is negative`);
}
else if(number === 0){
    console.log("The number is zero");
}
else{
    console.log(`${number} is undefined`);
}

console.log("===== Example 4: Multiway Condition Statement in Prompt Function =====");
// check if a user enters a number, didn't enter anything, or pressed cancel button
let n = prompt("Enter a number: ");

if(n === null){
    console.log("Cancel was pressed");
}
else if(n===""){
    console.log("Ok button was pressed");
}
else if(isNaN(n)){
    console.log(`${n} is a string`);
}
else{
    console.log(`${n} is a number`);
}

console.log("===== Example 5: Nested Conditional Statement =====");
// check if a password has at least 6+ characters and no space
let password = prompt("Enter a password");

// to find the number of characters in a string, we use the method .length
if(password.length >= 6){
    console.log(`Password ${password} has ${password.length} characters`);
    if(password.indexOf(" ") === -1){
        console.log(`Password ${password} has no spaces`);
    }
    else{
        console.log(`Password ${password} has spaces`);
    }
}
else{
    console.log(`Password ${password} has less than 6 characters`);
}

//Exercise 0
console.log("===== Exercise 0 =====");

let userValue = prompt("Ener a value that could either be a string or a number: ");
if(userValue === null){
    console.log("Cancel was pressed");
}
else if(isNaN(userValue)){
    console.log(`${userValue} is a string`);
}
else{
    if(userValue > 0){
        console.log(`${userValue} is a positive number`);
    }
    else if(userValue < 0){
        console.log(`${userValue} is a negative number`);
    }
    else {
        console.log(`${userValue} is zero`);
    } 
}

console.log("===== Example 6: List ===== ");
let colors = ["red", "olive", "orange", "baby blue", "hot pink"];
// all list have an index number that starts with 0 (leftmost)
console.log(`The third color is ${colors[2]}`);

let selectColor = prompt("Example 6: Select a color using an index number: ");

switch(selectColor){
    case '0':
        console.log(`Selected color = ${colors[0]}`);
        break;
    case '1':
        console.log(`Selected color = ${colors[1]}`);
        break;
    case '2':
        console.log(`Selected color = ${colors[2]}`);
        break;
    case '3':
        console.log(`Selected color = ${colors[3]}`);
        break;
    case '4':
        console.log(`Selected color = ${colors[4]}`);
        break;
    default:
        console.log("Color is not in the list");
}

console.log("===== Example 7: String =====");
let greeting = "Good morning";
console.log(`The seventh character is ${greeting[6]}`);



//Exercise 1
let dayNumber = parseInt(prompt("Enter a number 1-7 to correspond to the day of the week: "));
console.log(dayNumber);
let day = '';
switch (dayNumber) {
  case 1:
    day = "Sunday";
    break;
  case 2:
    day = "Monday";
    break;
  case 3:
    day = "Tuesday";
    break;
  case 4:
    day = "Wednesday";
    break;
  case 5:
    day = "Thursday";
    break;
  case 6:
    day = "Friday";
    break;
  case 7:
    day = "Saturday";
    break;
  default:
    day = "Invalid day number";
}
console.log(`The picked day is ${day}`);

//Exercise 2
let score = parseInt(prompt("Enter your grade on the 0-100 scale: "));
if(score < 0 || isNaN(score)){
    console.log("Invalid Score");
}
else if(score >= 90){
    console.log(`A score of ${score} receives an A`);
}
else if(score >= 80){
    console.log(`A score of ${score} receives a B`);
}
else if(score >= 70){
    console.log(`A score of ${score} receives a C`);
}
else if(score >= 60){
    console.log(`A score of ${score} receives a D`);
}
else {
    console.log(`A score of ${score} receives an F`);
}

