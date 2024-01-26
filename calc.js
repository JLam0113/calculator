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
    if (b == '0') clear();
    return a / b;
}

function operate(operator) {
    if (operator == "+")
        return add(parseFloat(a), parseFloat(b))
    else if (operator == "-") {
        return subtract(parseFloat(a), parseFloat(b))
    }
    else if (operator == "X") {
        return multiply(parseFloat(a), parseFloat(b))
    }
    else if (operator == "÷") {
        return divide(parseFloat(a), parseFloat(b))
    }
}

function updateDisplay(input) {
    const display = document.querySelector('#display')
    if (!isOperator(input)) {
        if (state == 'number1') a += input;
        else {
            if (state == 'operator') {
                clear();
                state = 'number2';
            }
            b += input;
        }
    }
    else {
        if (b !== '') calculate();
        clear();
        state = 'operator';
        operator = input;
    }
    display.innerHTML += input
}

function updateDisplayDot(input){
    const display = document.querySelector('#display')
    if(display.innerHTML.includes('.')) return;
    else updateDisplay('.');
}

function calculate() {
    if(state == 'operator' || b == '' || a == '') return;
    clear();
    const display = document.querySelector('#display')
    a = Math.round(operate(operator) * 100) / 100;
    display.innerHTML += a;
    b = '';
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
    state = 'number1';
}

function isOperator(input) {
    if (input == '+' || input == '-' || input == '÷' || input == 'X') return true;
    return false;
}