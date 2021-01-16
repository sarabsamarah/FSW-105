var readlineSync = require("readline-sync")
var firstNumber = readlineSync.questionInt("Please enter your first number:  "); //storing the number
var secondNumber = readlineSync.questionInt("Please enter your second number: ");
var enteredOperator = readlineSync.question("Please enter the operation: add, sub, mul, div ");
//below function adds two numbers
function addTwoNumbers(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}
function subTwoNumbers(firstNumber, secondNumber){
    return firstNumber - secondNumber;
    }
function mulTwoNumbers(firstNumber, secondNumber){
    return firstNumber * secondNumber;
    }
function divTwoNumbers(firstNumber, secondNumber){
    return firstNumber / secondNumber;
}

//console.log("addition of number " + firstNumber + "with number " + secondNumber + "gives you result of " + addTwoNumbers(firstNumber, secondNumber));

//function definition that accepts 3 parameters form the user
function myCalculator(firstNumber, secondNumber, enteredOperator){
if(enteredOperator == "add"){
    console.log("Gives the result of: " + addTwoNumbers(firstNumber, secondNumber));
} else if(enteredOperator == "sub"){
    console.log("Gives the result of: "+ subTwoNumbers(firstNumber, secondNumber));
}else if(enteredOperator == "mul"){
    console.log("Gives the result of: " + mulTwoNumbers(firstNumber, secondNumber));
} else if(enteredOperator == "div"){
    console.log("Gives the result of: " + divTwoNumbers(firstNumber, secondNumber));
}
}
myCalculator(firstNumber, secondNumber, enteredOperator);

// function myCalculator(firstNumber, secondNumber, enteredOperator){
//     if(enteredOperator == 'add'){
//         console.log("The result is: " + addTwoNumbers(firstNumber, secondNumber));
//     } else if (enteredOperator == 'mul'){
//         console.log("The result is: " + mulTwoNumbers(firstNumber, secondNumber));
//     } else if (enteredOperator == 'div'){
//         console.log("The result is: " + divTwoNumbers(firstNumber, secondNumber));
//     } else if (enteredOperator == 'sub') {
//         console.log("The result is: " + subTwoNumbers(firstNumber, secondNumber));
//     }
// }
//call the function and provide the 3 argument values
// console.log(myCalculator(firstNumber, secondNumber, enteredOperator));

//     if(enteredOperator == "mul"){
//         return multiplyCalculator(firstNumber, secondNumber);

//     } else if(enteredOperator == "div"){
//         return firstNumber / secondNumber;
//     }
// }
// console.log(multiplyCalculator());




// function myCalculator(firstNumber, secondNumber, enteredOperator){
//     if(enteredOperator == "add"){
//     console.log("addition of number " + firstNumber + "with number " + secondNumber + "gives you result of " + addTwoNumbers(firstNumber, secondNumber));
//     }
//     else if(enteredOperator == "sub"){

//     }
// }
//     console.log("subtraction of number :" + firstNumber + "with number " + secondNumber + "gives you result of " + addTwoNumbers(firstNumber, secondNumber))