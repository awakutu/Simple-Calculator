const calculatorScreen = document.querySelector(".calculator-screen");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector('.all-clear'); 
const decimal = document.querySelector('.decimal');
const percentBtn = document.querySelector('.percentage');

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const inputOperator = (operator) => {
  if (calculationOperator === ''){
          prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "";
};

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      console.log(result)
      break;
      default: return
  }
  currentNumber = result;
  calculationOperator = "";
};

equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
  });

  const clearAll = () => {
    prevNumber='';
    calculationOperator ='';
    currentNumber= '0';
  }

  clearBtn.addEventListener('click', ()=>{
      clearAll();
      updateScreen(currentNumber);
  })

  const calcPercent = () => {
    let result="";
    result = parseFloat(currentNumber/100);
    currentNumber = result; 
  }

percentBtn.addEventListener('click',() =>{
    calcPercent();
    updateScreen(currentNumber)
})

  inputDecimal = (dot) => {
   if (currentNumber.includes('.')){
       return;
   }   
  currentNumber += dot;
  }

  decimal.addEventListener('click', (event) =>{
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})
