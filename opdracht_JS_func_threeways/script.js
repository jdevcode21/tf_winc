// function declaration
function declarationFunc(num1, num2) {
    let squaredNum1 = num1 * num1;
    let squaredNum2 = num2 * num2;
    let sum = squaredNum1 + squaredNum2;
    return sum;
}

// function expression
const expressionFunc = function (num1, num2) {
    let squaredNum1 = num1 * num1;
    let squaredNum2 = num2 * num2;
    let sum = squaredNum1 + squaredNum2;
    return sum;
}

// arrow function
const arrowFunc = (num1, num2) => {
    let squaredNum1 = num1 * num1;
    let squaredNum2 = num2 * num2;
    let sum = squaredNum1 + squaredNum2;
    return sum;
}

console.log(declarationFunc(2, 3));
console.log(expressionFunc(2, 3));
console.log(arrowFunc(2, 3));
