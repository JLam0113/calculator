function add(a, b) {
    return a + b;
}

function subtract(a, b){
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