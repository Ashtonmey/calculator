// Display variable

let displayNumber = "";

// add eventlisteners to each button

let number = document.querySelector(`#display-number`);

const buttons = document.querySelectorAll(`.number`);

buttons.forEach((button) => {

    button.addEventListener('click', function(e) {
        updateDisplay(e);
    });

});

// update display on button click fuction

function updateDisplay (e) {
    const display = document.querySelector(`#display-number`);
    displayNumber = displayNumber.concat(e.target.id);
    display.textContent = displayNumber;   
}

// operator function

function operate (op,a,b) {
    switch (op){
        case "+":
            return add (a,b);
        case "-":
            return subtract(a,b);
        case "x":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

// addition function

function add(a, b) {
    return a + b;
}

// subtraction fuction

function subtract(a, b) {
    return a - b;
}

// multpily function

function multiply (a, b) {
    return a*b;
}

// divide function

function divide (a, b) {
    return a/b;
}