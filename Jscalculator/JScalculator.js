let firstNum = prompt('Enter your first number');
let sign = prompt('which operation do you want to perform? + or - or * or /:')
let secondNum = prompt('Enter the second number')

// alert(firstNum)
// alert(sign)
// alert(secondNum)

function Calculate() {
    if (sign == '+') {
        alert(firstNum + secondNum);
    } else if (sign == '-') {
        alert(firstNum - secondNum);
    } else if (sign == '*') {
        alert(firstNum * secondNum);
    }
    else {
        alert(firstNum / secondNum);
    }
}
Calculate()