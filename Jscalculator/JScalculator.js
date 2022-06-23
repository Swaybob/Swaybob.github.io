let firstNum = prompt('Enter your first number');
let sign = prompt('which operation do you want to perform? + or - or * or /:')
let secondNum = prompt('Enter the second number')



function Calculate() {
    if (sign == '+') {
        alert(Number(firstNum) + Number(secondNum));
    } else if (sign == '-') {
        alert(Number(firstNum) - Number(secondNum));
    } else if (sign == '*') {
        alert(Number(firstNum) * Number(secondNum));
    }
    else {
        alert(Number(firstNum) / Number(secondNum));
    }
}
Calculate()