console.log("Adeeb Khan");
console.log("===== Example 1: For Loop as a Counter =====");
let i = 1;
for(i; i < 10; i++){
    console.log(`iteration = ${i}`);
}

console.log("===== Example 2: For Loop as a Decrement Counter =====");
// create a loop counter from 10 to 0 step 1
for(let n = 10; n>=0; n--){
    console.log(`iteration = ${n}`)
}

console.log("===== Example 3: Condition Inside the Loop =====");
// check how many even numbers ar in between -5 and 5
let counter = 0;
for(let m = -5; m<5; m++){
    console.log(`iteration = ${m}`);
    if(m%2 === 0 && m !== 0){
        counter++;
    }
}
console.log(`There is/are ${counter} even numbers`);

console.log("===== Example 4: While Loop as a Counter =====");
let p = 0;
while(p <= 4){
    console.log(`iteration = ${p}`);
    p++;
}

console.log("===== Example 5: While Loop Application =====");
// guess number game
const SECRET = 8;

let guessnumber = parseInt(prompt("Guess a number between 1 and 10"));
while(guessnumber !== SECRET){
    guessnumber = parseInt(prompt("Guess a number between 1 and 10"));
}

console.log("===== Example 6: While Loop in a List =====");
let colors = ["magenta", "olive", "baby blue"];
let sizeOfColors = colors.length;
console.log(sizeOfColors);
let index = 0;
while(index < sizeOfColors){
    console.log(colors[index]);
    index++;
}

console.log("===== Example 7: While Loop to Simulate a Password Log-In =====");
// terminate the loop if password fails in three attempts
const password = "peterpan";
let userPassword = prompt("Enter a Password: ");
let numberattempt = 0;
while(userPassword !== password){
    numberattempt++;
    if(numberattempt > 2){
        console.log("Your account is locked");
        break
    }
    userPassword = prompt(`You have ${3 - numberattempt} attempts left. Enter a password again`);
}
console.log("Have a good day!");

console.log("===== Example 8: do-while loop to simulate a withdraw from a bank account =====");
// user tries to withdraw money from an account with balance of $1000
let withdraw = 0;
let balance = 1000;
do{
    withdraw = parseInt(prompt("How much do you want to withdraw?"))
    if(withdraw <= balance){
        balance -= withdraw;
        break;
    }
    else{
        console.log("Insufficient funds, try again");
    }
}while(withdraw > balance);

console.log(`Your new balance is ${balance}`);

console.log("===== Exercise: Simulate a Bank Transaction =====");
// simulate the collection of a pin number of 4 digits
// ask the user to pick a transcation by entering the corresponding number: View the Balance (1), Withdraw (2) (if, else, else, switch)
// ask the user if they want another transcation
// print result

// Pin Collection
const pin = "1234";
let userPin = prompt("Enter your pin: ");
let numberattempts = 0;
while(userPin !== pin){
    numberattempts++;
    if(numberattempts > 2){
        console.log("Your account is locked");
        break
    }
    userPin = prompt(`You have ${3 - numberattempts} attempts left. Enter your 4-digit pin again again`);
}
let bankActionPrompt = parseInt(prompt("Pick your transaction by entering the corresponding number: View Your Balance (1), Withdraw (2)"));
bankAction = "";
switch(bankAction){
    case 1:
        bankAction = "View Your Balance";
        break;
    case 2: 
        bankAction = "Withdraw";
        break;
    default:
        console.log("Invalid Action Selected, please try again")
}





