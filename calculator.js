

// operator function

function operate (op,a,b) {
    switch (op){
        case "+":
            return add (a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "x":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
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