// Declare variables

let displayNumber = ""; // intitial dsiplay number variable
let operatorChoice = null; // Initial declare of operator choice
let operatorCount = 0; // counts the number of times and operator has been clicked
let numbers = [];


// add eventlisteners to each number button

const buttons = document.querySelectorAll(`.number`);

buttons.forEach((button) => {

    button.addEventListener('click', function(e) {
        updateDisplay(e);
    });

});

// add event listener to clear button

const clearButton = document.querySelector("#c");
clearButton.addEventListener('click', () => {
    clear();
});

// add event listeners to operator buttons

const opButtons = document.querySelectorAll (`.operator`);

opButtons.forEach((opButton)  => {

opButton.addEventListener('click', (e) => {    
    saveNumber(e);        
    })

opButton.addEventListener('click', (e) => {
    saveOperator(e);
})
    
});


// clear function 

function clear () {
    displayNumber = "";
    operatorChoice = null;
    operatorCount = 0;
    numbers = [];

    const display = document.querySelector(`#display-number`);
    display.textContent = "0";

}

// update display on numerical button click function

function updateDisplay (e) {
    const display = document.querySelector(`#display-number`);
    displayNumber = displayNumber.concat(e.target.id);
    display.textContent = displayNumber;  
}

// save operator function

function saveOperator (e){
    operatorChoice = e.target.id;
    console.log(operatorChoice);
}

// save number function

function saveNumber (e){
    numbers[operatorCount] = displayNumber;    
    operatorCount++;
    clearDisplay();
    console.log(numbers);
}

// function to clear display 

function clearDisplay () {
    const display = document.querySelector(`#display-number`);
    display.textContent = "0";
    displayNumber = "";
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