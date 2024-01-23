let a = '';
let operator = '';
let b = '';

let whichNumber = 'number1'

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(number1, operate, number2) {
    if (operate == "add")
        return add(number1, number2)
    else if (operate == "subtract") {
        return subtract(number1, number2)
    }
    else if (operate == "multiply") {
        return multiply(a, b)
    }
    else if (operate == "divide") {
        return divide(a, b)
    }
}

function updateDisplay(input) {
    const display = document.querySelector('#display')
    if (!isOperator(input)) {
        if (whichNumber == 'number1') a += input;
        else b += input;
    }
    else {
        // TODO
        // Clear input when going from operator to number
        // Block input if another operator is chosen back to back
        clear()
        whichNumber = 'number2'
    }
    display.innerHTML += input
}

function clear() {
    const display = document.querySelector('#display')
    display.innerHTML = '';
}

function isOperator(input) {
    if (input == '+' || input == '-' || input == '÷' || input == 'x') return true;
    return false;
}