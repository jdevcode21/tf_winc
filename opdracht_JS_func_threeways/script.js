// function declaration
function declarationFunc(num1, num2) {
    let squaredNum1 = num1 * num1;
    let squaredNum2 = num2 * num2;
    let sum = squaredNum1 + squaredNum2;
    let sumSquared = sum * sum;
    return sumSquared;
}

// function expression
const expressionFunc = function (num1, num2) {
    let squaredNum1 = num1 * num1;
    let squaredNum2 = num2 * num2;
    let sum = squaredNum1 + squaredNum2;
    let sumSquared = sum * sum;
    return sumSquared;
}

// arrow function
const arrowFunc = (num1, num2) => {
    let squaredNum1 = num1 * num1;
    let squaredNum2 = num2 * num2;
    let sum = squaredNum1 + squaredNum2;
    let sumSquared = sum * sum;
    return sumSquared;
}

console.log(declarationFunc(2, 3));
console.log(expressionFunc(2, 3));
console.log(arrowFunc(2, 3));
