let display = document.getElementById("display");

function appendValue(value) {
    // Ensure only one decimal per number
    if (value === '.') {
        // Split the current display by operators (+, -, *, /) to get the current number being entered
        const currentNumber = display.value.split(/[\+\-\*\/]/).pop();
        if (currentNumber.includes('.')) {
            return; // If the current number already has a decimal, stop adding another one
        }
    }
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function toggleSign() {
    if (display.value) {
        // Find the last number in the expression and toggle its sign
        let operators = ['+', '-', '*', '/'];
        let lastOperatorIndex = -1;

        for (let operator of operators) {
            let index = display.value.lastIndexOf(operator);
            if (index > lastOperatorIndex) {
                lastOperatorIndex = index;
            }
        }

        // Extract the current number
        let currentNumber = display.value.slice(lastOperatorIndex + 1);

        if (currentNumber.startsWith('-')) {
            // If the current number is negative, make it positive
            display.value = display.value.slice(0, lastOperatorIndex + 1) + currentNumber.slice(1);
        } else {
            // If the current number is positive, make it negative
            display.value = display.value.slice(0, lastOperatorIndex + 1) + '-' + currentNumber;
        }
    }
}
