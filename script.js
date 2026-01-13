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
const btn_00 = document.querySelector("#btn_00");
const btn_C = document.querySelector("#btn_C");
const btn_divide = document.querySelector("#btn_divide");
const btn_spec = document.querySelector("#btn_spec");
const btn_multiply = document.querySelector("#btn_multiply");
const btn_substract = document.querySelector("#btn_substract");
const btn_add = document.querySelector("#btn_add");
const btn_equal = document.querySelector("#btn_equal");

let input = ("");
let numberOne;
let numberTwo;
let operator = 0;   // operator = 1 (add), 2 (substruct), 3 (multiply), 4 (divide);
let result = 0;
let operatorNext = 0;
let pressBefore = 0; // = 1 (number button), 2 (operator button), 3 (equal button);
const dot = ("");



function sum(a,b) {
    return (a+b);
}
function substruct(a,b) {
    return (a-b);
}
function divide(a,b) {
    if (b === 0) {
        return ("ERROR")
    } else {
        return (a/b);
    }
}
function multiply(a,b) {
    return (a*b);
}

function lengthDisplay(num) {
    let str = String(num);
        if (str.length >15) {
            return num.toExponential(12);
        } else return num;
}

function clean() {
    numberOne = undefined;
    numberTwo = undefined;
    operator = 0;
    result = 0;
    operatorNext = 0;
    input = ("");
    display.textContent = ("");
    pressBefore = 0;
}

function addNumber(number) {
    if (pressBefore === 3) {
        clean();
        input+= `${number}`;
        } else if (input.length <15) {
            if (number === dot) {
                if (input.includes(".")){} else input+= `.`;
            } else {
                    input+= `${number}`;
    }}
    display.textContent = input;
    pressBefore = 1;
}

btn_0.addEventListener("click", () => addNumber(0));
btn_00.addEventListener("click", () => {
    addNumber(0);
    addNumber(0);
});
btn_1.addEventListener("click", () => addNumber(1));
btn_2.addEventListener("click", () => addNumber(2));
btn_3.addEventListener("click", () => addNumber(3));
btn_4.addEventListener("click", () => addNumber(4));
btn_5.addEventListener("click", () => addNumber(5));
btn_6.addEventListener("click", () => addNumber(6));
btn_7.addEventListener("click", () => addNumber(7));
btn_8.addEventListener("click", () => addNumber(8));
btn_9.addEventListener("click", () => addNumber(9));
btn_dot.addEventListener("click", () => addNumber(dot));

const calcBody = document.querySelector(".calcBody")
btn_spec.addEventListener("click", () => {
    calcBody.classList.add ("specialMode");
});



function operate() {
    console.log(numberOne,numberTwo,operator,input);
    if (numberOne !== undefined && numberTwo !== undefined && operator !==0) {
        if (operator === 1) {
            result = sum(numberOne,numberTwo);
        } else if (operator === 2) {
            result = substruct(numberOne,numberTwo);
        } else if (operator === 3) {
            result = multiply(numberOne,numberTwo);
        } else if (operator === 4) {
            result = divide(numberOne,numberTwo);
        }
        display.textContent = lengthDisplay(result);
        // display.textContent = Number(result.toFixed(8)).toString();
        numberOne = result;
        console.log(result);
    };
};
btn_C.addEventListener ("click", () => {clean()});

btn_add.addEventListener ("click", () => {
    if (numberOne === undefined) {
        numberOne = Number(input);
        } else if (
            pressBefore === 3) {
                numberTwo = 0;
                } else if (input === ("")){
                    operate();
                    } else {
                            numberTwo = Number(input);
                            operate();
                            };
    pressBefore = 2;
    operator = 1;
    input = ("");
});

btn_substract.addEventListener ("click", () => {
    if (numberOne === undefined) {
        numberOne = Number(input);
        } else if (
            pressBefore === 3) {
                numberTwo = 0;
                } else if (input === ("")){
                    operate();
                    } else {
                            numberTwo = Number(input);
                            operate();
                            };
    pressBefore = 2;
    operator = 2;
    input = ("");
});

btn_multiply.addEventListener ("click", () => {
   if (numberOne === undefined) {
        numberOne = Number(input);
        } else if (
            pressBefore === 3) {
                numberTwo = 0;
                } else if (input === ("")){
                    operate();
                    } else {
                            numberTwo = Number(input);
                            operate();
                            };
    pressBefore = 2;
    operator = 3;
    input = ("");
});

btn_divide.addEventListener ("click", () => {
   if (numberOne === undefined) {
        numberOne = Number(input);
        } else if (
            pressBefore === 3) {
                numberTwo = 0;
                } else if (input === ("")){
                    operate();
                    } else {
                            numberTwo = Number(input);
                            operate();
                            };
    pressBefore = 2;
    operator = 4;
    input = ("");
});



btn_equal.addEventListener ("click", () => {
    if (input === ("")){
        operate();
        } else {
            numberTwo = Number(input);
            operate();
            };
    pressBefore = 3;
});
