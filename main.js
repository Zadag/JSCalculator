addition = (num1, num2) => num1 + num2;
subtraction = (num1, num2) => num1 - num2;
multiplication = (num1, num2) => num1 * num2;
division = (num1, num2) => num1 / num2;

let displayTarget = document.getElementsByClassName('display')[0];
const btns = document.querySelectorAll('button');

let num1 = '';
let num2 = '';
let operator = '';
const operators = ["+", "-", "/", "*", "="];

const checkDecimal = function(num){
    if (num.includes(".")) return true;
}

const changeDisplay = function (buttonVal){
    if((buttonVal != "+") && (buttonVal != "-") && (buttonVal != "*") && (buttonVal != "/") && (buttonVal != "=") && (operator === "")){
        if(checkDecimal(num1) && buttonVal === ".") return;
        num1 += buttonVal;
    }else if(operators.includes(buttonVal)){
        if(buttonVal != "=") operator = buttonVal;
    }else if (operators.includes(operator)){
        if(checkDecimal(num2) && buttonVal === ".") return;
        num2 += buttonVal;
    }
    console.log(num2);
    displayTarget.textContent = num1 + " " + operator + " " + num2; 
}

const evaluate = function(operation){
    if((operators.includes(operation) && num2 != "") || operator === "="){
        console.log("operating");
        if(operator === "+"){
            num1 = addition(parseFloat(num1), parseFloat(num2))
            num2 = "";
            operator = "";
        }else if(operator === "-"){
            num1 = subtraction(parseFloat(num1), parseFloat(num2))
            num2 = "";
            operator = "";
        }else if(operator === "*"){
            num1 = multiplication(parseFloat(num1), parseFloat(num2))
            num2 = "";
            operator = "";
        }else if(operator === "/"){
            num1 = division(parseFloat(num1), parseFloat(num2));
            num2 = "";
            operator = "";
        }else if (operator === "c"){
            num1 = "";
            num2 = "";
            operator = "";
        }
    }
}


btns.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.value);
        evaluate(button.value);
        changeDisplay(button.value);
    });
});

