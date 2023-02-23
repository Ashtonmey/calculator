// declare variables

let displayNumber = ""; // initial dsiplay number variable
let operators = [0]; // Initial declare of operator choice
let operatorCount = 0; // counts the number of times and operator has been clicked
let numbers = [""];
let numberCount = 0;

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

// add event listener to equal button

const calculateButton = document.querySelector(`#calculate`);
calculateButton.addEventListener('click', (e) => {
    calculate(numbers, operators, e);
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

function calculate (num, op, e) {
    saveNumber(e);
    
    let result = 0;

    for(i = 0; i< op.length; i++)
    {
        if (i == 0)
        {
            result = operate(op[i],num[i],num[i+1]);
            
        }
        else {
            result = operate(op[i],result,num[i+1]);
        }
        
    }
    console.log(result)
    
    const display = document.querySelector(`#display-number`);
    display.textContent = result;

}

// clear function 

function clear () {
    displayNumber = "";
    operators = [];
    operatorCount = 0;
    numbers = [];
    numberCount = 0;

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
    operators[operatorCount] = e.target.id;
    console.log(operators);
    operatorCount++;
}

// save number function

function saveNumber (e){
    numbers[numberCount] = displayNumber;    
    numberCount++;
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
    return +a + +b;
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