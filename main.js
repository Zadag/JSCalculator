addition = (num1, num2) => num1 + num2;
subtraction = (num1, num2) => num1 - num2;
multiplication = (num1, num2) => num1 * num2;
division = (num1, num2) => num1 / num2;

let displayTarget = document.getElementsByClassName('display')[0];
const btns = document.querySelectorAll('button');

let num1 = '';
let num2 = '';
let operator = '';
let displayContent = [num1 + operator + num2];


const operators = ["+", "-", "/", "*"];

const changeDisplay = function (){
    displayTarget.textContent = displayContent; 
}

const operate = function() {

}



btns.forEach((button) => {
    button.addEventListener('click', () => {
        changeNum(button.id);
        changeDisplay();
    });
});


displayTarget.textContent = "test";