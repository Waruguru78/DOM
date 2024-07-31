let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = null;

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    updateDisplay();
}

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand += number;
    updateDisplay();
}

function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculate() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Error: Division by zero");
                clearDisplay();
                return;
            }
            computation = prev / current;
            break;
        default:
            return;
    }
    currentOperand = `${previousOperand} ${operation} ${currentOperand} = ${computation}`;
    operation = null;
    previousOperand = '';
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentOperand || '0';
}
