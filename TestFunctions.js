// Created 7/7/2022 by Daniel Wu
/* Functions are copied from Functions.js */
/* Tested by pasting this whole page into codepen.io and seeing output */

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

/*------------------TESTS------------------*/
// Created 7/7/2022 by Daniel Wu
// Test 1: Sum of 0 and 0
actual = sum(0, 0);
expected = 0;
if (actual == expected) {
    document.writeln("Test 1 passed<br>")
}
else {
    document.writeln("Test 1 Failed<br>")
}

// Created 7/7/2022 by Daniel Wu
// Test 2: Sum of 5 and 3
actual = sum(5, 3);
expected = 8;
if (actual == expected) {
    document.writeln("Test 2 passed<br>")
}
else {
    document.writeln("Test 2 Failed<br>")
}

// Created 7/7/2022 by Daniel Wu
// Test 3: Sum of 43 and -4
actual = sum(43, -4);
expected = 39;
if (actual == expected) {
    document.writeln("Test 3 passed<br>")
}
else {
    document.writeln("Test 3 Failed<br>")
}

// Created 7/7/2022 by Daniel Wu
// Test 4: Sum of 24 and 15
actual = sum(24, 15);
expected = 39;
if (actual == expected) {
    document.writeln("Test 4 passed<br>")
}
else {
    document.writeln("Test 4 Failed<br>")
}

// Created 7/7/2022 by Daniel Wu
// Test 5: Difference of 0 and 0
actual = difference(0, 0);
expected = 0;
if (actual == expected) {
    document.writeln("Test 5 passed<br>")
}
else {
    document.writeln("Test 5 Failed<br>")
}

// Created 7/7/2022 by Daniel Wu
// Test 6: Difference of 10 and 20
actual = difference(10, 20);
expected = -10;
if (actual == expected) {
    document.writeln("Test 6 passed<br>")
}
else {
    document.writeln("Test 6 Failed<br>")
}

// Created 7/7/2022 by Daniel Wu
// Test 7: Difference of 35 and 7
actual = difference(35, 7);
expected = 28;
if (actual == expected) {
    document.writeln("Test 7 passed<br>")
}
else {
    document.writeln("Test 7 Failed<br>")
}

// Created 7/7/2022 by Daniel Wu
// Test 8: Difference of 24 and -5
actual = difference(24, -5);
expected = 29;
if (actual == expected) {
    document.writeln("Test 8 passed<br>")
}
else {
    document.writeln("Test 8 Failed<br>")
}

// Created 7/7/2022 by Daniel Wu
// Test 9: Product of 0 and 0
actual = product(0, 0);
expected = 0;
if (actual == expected) {
    document.writeln("Test 9 passed<br>")
}
else {
    document.writeln("Test 9 Failed<br>")
}

// Created 7/7/2022 by Daniel Wu
// Test 10: Product of 5 and 5
actual = product(5, 5);
expected = 25;
if (actual == expected) {
    document.writeln("Test 10 passed<br>")
}
else {
    document.writeln("Test 10 Failed<br>")
}

// Created 7/7/2022 by Daniel Wu
// Test 11: Product of 3 and -8
actual = product(3, -8);
expected = -24;
if (actual == expected) {
    document.writeln("Test 11 passed<br>")
}
else {
    document.writeln("Test 11 Failed<br>")
}

// Created 7/7/2022 by Daniel Wu
// Test 12: Quotient of 4 and 2
actual = quotient(4, 2);
expected = 2;
if (actual == expected) {
    document.writeln("Test 12 passed<br>")
}
else {
    document.writeln("Test 12 Failed<br>")
}

// Created 7/7/2022 by Daniel Wu
// Test 13: Quotient of 14 and -7
actual = quotient(14, -7);
expected = -2;
if (actual == expected) {
    document.writeln("Test 13 passed<br>")
}
else {
    document.writeln("Test 13 Failed<br>")
}

// Created 7/7/2022 by Daniel Wu
// Test 14: Quotient of 54 and 9
actual = quotient(54, 9);
expected = 6;
if (actual == expected) {
    document.writeln("Test 14 passed<br>")
}
else {
    document.writeln("Test 14 Failed<br>")
}