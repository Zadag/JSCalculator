addition = (num1, num2) => num1 + num2;
subtraction = (num1, num2) => num1 - num2;
multiplication = (num1, num2) => num1 * num2;
division = (num1, num2) => num1 / num2;
negative = (someNum) => someNum - (2 * someNum);

let displayTarget = document.getElementsByClassName('display')[0];
const btns = document.querySelectorAll('button');

let num1 = '';
let num2 = '';
let operator = '';
const operators = ["+", "-", "/", "*", "="];

const checkOverflow = function(){
    if ((num1 + ' ' + operator + ' ' + num2).length > 13){
        displayTarget.textContent = "Overflow";
    }
}
const checkDecimal = function(num){
    num = num.toString();
    if (num.includes(".")) return true;
}
//changeDisplay takes the button input buttonVal and checks where the new button input should be appended
const changeDisplay = function (buttonVal){
    if((buttonVal != "+") && (buttonVal != "-") && (buttonVal != "*") && (buttonVal != "/") && (buttonVal != "=") && (buttonVal != "sign") && (buttonVal != "c") && (operator === "")){
        if(checkDecimal(num1) && buttonVal === ".") return;
        num1 += buttonVal;
    }else if(operators.includes(buttonVal) && num1 != ""){
        if(buttonVal != "=") operator = buttonVal;
    }else if (operators.includes(operator)){
        if(checkDecimal(num2) && buttonVal === ".") return;
        num2 += buttonVal;
    }
    displayTarget.textContent = num1 + " " + operator + " " + num2; 
}
//evaluate checks if an evaluation needs to occur and if so, it evaluates the expression 
//based on the values of num1 num2 and operator.  operation is the value of the button input.
const evaluate = function(operation){
    if((operators.includes(operation) && num2 != "") || operator === "=" || operator === "c" || operation ==="sign"){
        console.log("operating");
        if(operation === "sign" && num1 != ""){
            if(operator != ""){
            	return
            }
            if(operator === ""){
                console.log("negatizing");
                num1 = parseFloat(num1) - (2 * parseFloat(num1));
                num1 = num1.toString();
            }//else num2 = parseFloat(num2) - (2 * parseFloat(num2));
        }
        if(operator === "+"){
            num1 = addition(parseFloat(num1), parseFloat(num2)).toString()
            num2 = "";
            operator = "";
        }else if(operator === "-"){
            num1 = subtraction(parseFloat(num1), parseFloat(num2)).toString()
            num2 = "";
            operator = "";
        }else if(operator === "*"){
            num1 = multiplication(parseFloat(num1), parseFloat(num2)).toString()
            num2 = "";
            operator = "";
        }else if(operator === "/"){
            num1 = division(parseFloat(num1), parseFloat(num2)).toString();
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
        if(num1.charAt(0) === "-" && button.value === "sign" && operator != "")  return
        if(button.value === "c"){
            num1 = "";
            num2 = "";
            operator = ""
        }
        evaluate(button.value);
        changeDisplay(button.value);
        checkOverflow();
        console.log(num1 + operator + num2)
        console.log(num1)
    });
});
