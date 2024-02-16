//JavaScript Code


function multiplyBy() {
    let userInputOne = document.getElementById('tbFirstNum').value;
    let userInputTwo = document.getElementById('tbSecondNum').value;
    let action = userInputOne * userInputTwo;
    let totalCalc = document.getElementById('totalChangeLabOutput');
    //totalCalc.textContent = action + ' Is your total';
    totalCalc.textContent = 'Your total = ' + action;
}

function divideBy() {
    let userInputOne = document.getElementById('tbFirstNum').value;
    let userInputTwo = document.getElementById('tbSecondNum').value;
    let action = userInputOne / userInputTwo;
    let totalCalc = document.getElementById('totalChangeLabOutput');
    //totalCalc.textContent = action + ' Is your total';
    totalCalc.textContent = 'Your total = ' + action;
}

function subtractBy() {
    let userInputOne = document.getElementById('tbFirstNum').value;
    let userInputTwo = document.getElementById('tbSecondNum').value;
    let action = userInputOne - userInputTwo;
    let totalCalc = document.getElementById('totalChangeLabOutput');
    //totalCalc.textContent = action + ' Is your total';
    totalCalc.textContent = 'Your total = ' + action;
}

function addBy() {
    let userInputOne = document.getElementById('tbFirstNum').value;
    let userInputTwo = document.getElementById('tbSecondNum').value;
    let action = parseInt(userInputOne) + parseInt(userInputTwo);
    //let action = Number(userInputOne) + Number(userInputTwo);
    let totalCalc = document.getElementById('totalChangeLabOutput');
    //totalCalc.textContent = action + ' Is your total';
    totalCalc.textContent = 'Your total = ' + action;
}
