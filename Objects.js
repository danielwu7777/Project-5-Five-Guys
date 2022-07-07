//Created 7/7/2022 by Noah Moon
// Edited 7/7/2022 by Daniel Wu: Added functions for arithmetic operations
const Form = document.getElementById("calculator");
const Screen = Form.screen;

function printToScreen(text){
    Screen.innerHTML = text
}

// Created 7/7/2022 by Daniel Wu
// Takes two integers and returns the sum
function sum(x, y) {
    return x + y;
}

// Created 7/7/2022 by Daniel Wu
// Takes two integers and returns the first input minus the second
function difference(left, right) {
    return left - right;
}

// Created 7/7/2022 by Daniel Wu
// Takes two integers and returns the product
function product(x, y) {
    return x * y;
}

// Created 7/7/2022 by Daniel Wu
// Takes two integers and returns the first input divided by the second
function quotient(x, y) {
    return x / y;
}

printToScreen("THIS IS A TEST")