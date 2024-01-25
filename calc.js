let a = '';
let operator = '';
let b = '';

let state = 'number1'

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
    if (!isOperator(input) && state !== 'operator') {
        if (state == 'number1') a += input;
        else {
            if(state == 'operator') {
                clear();
                state =='number2'
            }
            b += input;
        }
    }
    else {
        clear()
        state = 'operator'
        operator = input;
    }
    display.innerHTML += input
}

function calculate(){
    
}

function clear() {
    const display = document.querySelector('#display')
    display.innerHTML = '';
}

function clearAll() {
    const display = document.querySelector('#display')
    display.innerHTML = '';
    a = '';
    b = '';
    operator = '';
}

function isOperator(input) {
    if (input == '+' || input == '-' || input == '÷' || input == 'X') return true;
    return false;
}