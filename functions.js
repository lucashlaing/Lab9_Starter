let form = document.querySelector('form');

class DivideByZeroError extends Error {
  constructor(message) {
    super(message); 
    this.name = "DivideByZeroError";
  }
}

if (!window.onerror) {
  window.onerror = function(message) {
    console.log("Error happened with message:" + message);
    return false; // Let the browser log it normally too
  };
}

form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    try{
    if(isNaN(firstNum)){
        throw new SyntaxError("first num not a number")
    }
    if(isNaN(secondNum)){
        throw new SyntaxError("first num not a number")
    }

    if(operator === "/" && secondNum === "0"){
        throw new DivideByZeroError("cant devide by zero")
    }

    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    }catch(err) {
    console.log(err)
    } finally {
    console.log("Finished calculation")
    }

});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

function consoleLog(){
    console.log("Logged to console")
}

function consoleErr(){
    console.error("Logging an error")
}

function consoleCount() {
    console.count("Count Btn Clicked")
}

function consoleWarn() {
    console.warn("Warning Issued")
}

function consoleAssert() {
    const fear = false
    console.assert(fear, "Fear asserted");
}

function consoleClear() {
    console.clear()
}

function consoleDir() {
    const obj = { name: "Example", type: "Object" }
    console.dir(obj)
}

function consoleDirxml() {
    const element = document.getElementById("error-btns")
    console.dirxml(element)
}

function consoleGroupStart() {
    console.group("Grouped Logs")
    console.log("Log inside group")
}

function consoleGroupEnd() {
    console.groupEnd()
}

function consoleTable() {
    const data = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    ]
    console.table(data)
}

function startTimer() {
    console.time("MyTimer")
}

function endTimer() {
    console.timeEnd("MyTimer")
}

function consoleTrace() {
    console.trace("Trace button clicked")
}

function triggerGlobalError() {
    randFunc()
}