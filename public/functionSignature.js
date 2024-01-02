"use strict";
// function signatures:
let calc;
calc = (num1, num2, operation) => {
    switch (operation) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "invalid operation";
    }
};
console.log(calc(5, 3, "+-"));
let logStuff;
logStuff = (obj) => {
    console.log(obj.age);
};
