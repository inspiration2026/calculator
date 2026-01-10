// DOM load to js-----------------------------
let display = document.querySelector(".display");
console.log (display.textContent);
const btn_0 = document.querySelector("#btn_0");
const btn_1 = document.querySelector("#btn_1");
const btn_2 = document.querySelector("#btn_2");
const btn_3 = document.querySelector("#btn_3");
const btn_4 = document.querySelector("#btn_4");
const btn_5 = document.querySelector("#btn_5");
const btn_6 = document.querySelector("#btn_6");
const btn_7 = document.querySelector("#btn_7");
const btn_8 = document.querySelector("#btn_8");
const btn_9 = document.querySelector("#btn_9");
const btn_dot = document.querySelector("#btn_dot");
const btn_sqr = document.querySelector("#btn_sqr");
const btn_C = document.querySelector("#btn_C");
const btn_divide = document.querySelector("#btn_divide");
const btn_x = document.querySelector("#btn_x");
const btn_multiply = document.querySelector("#btn_multiply");
const btn_substract = document.querySelector("#btn_substract");
const btn_add = document.querySelector("#btn_add");
const btn_equal = document.querySelector("#btn_equal");

let input = ("");

btn_1.addEventListener("click", () => {
    input+="1";
    display.textContent = input;
});
btn_2.addEventListener("click", () => {
    input+="2";
    display.textContent = input;
});
btn_3.addEventListener("click", () => {
    input+="3";
    display.textContent = input;
});
btn_4.addEventListener("click", () => {
    input+="4";
    display.textContent = input;
});
btn_5.addEventListener("click", () => {
    input+="5";
    display.textContent = input;
});
btn_6.addEventListener("click", () => {
    input+="6";
    display.textContent = input;
});
btn_7.addEventListener("click", () => {
    input+="7";
    display.textContent = input;
});
btn_8.addEventListener("click", () => {
    input+="8";
    display.textContent = input;
});
btn_9.addEventListener("click", () => {
    input+="9";
    display.textContent = input;
});
btn_dot.addEventListener("click", () => {
    input+=".";
    display.textContent = input;
});

let numberOne = 0;
let numberTwo = 0;
let operator = 0;
let result = 0;
let operatorNext = 0;
// operator = 1 (add), 2 (substruct), 3 (multiply), 4 (divide), 5 (sqr);

function operate() {
    console.log(operator);
    if (numberOne !== 0 && numberTwo !== 0 && operator !==0) {
        if (operator === 1) {
            result = numberOne + numberTwo;
            display.textContent = result;
            numberOne = result;
        } else if (operator === 2) {
            result = (numberOne - numberTwo);
            display.textContent = result;
            numberOne = result;
        }
    };
    numberTwo = 0;
};
btn_C.addEventListener ("click", () => {
    numberOne = 0;
    numberTwo = 0;
    operator = 0;
    result = 0;
    operatorNext = 0;
    input = ("");
    display.textContent = ("");
});

btn_add.addEventListener ("click", () => {
    if (numberOne === 0) {
        numberOne = Number(input);
        operator = 1;
        input = ("");

        } else {
            numberTwo = Number(input);
            operate();
            operator = 1;
            input = ("");
        }
});

btn_substract.addEventListener ("click", () => {
    if (numberOne === 0) {
        numberOne = Number(input);
        operator = 2;
        input = ("");

        } else {
            numberTwo = Number(input);
            operate();
            operator = 2;
            input = ("");
        }
});


btn_equal.addEventListener ("click", () => {
    if (numberOne !== 0 && numberOne !== result) {
    numberTwo = Number(input);
    operate();
    }
});
