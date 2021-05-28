// Checking if a number is big
const checker = function (num) {
    if (num > 100) {
        return true;
    } else if (num <= 100) {
        return false;
    }
}
console.log(checker(100));

// Bouncer at a club  
const pplChecker = function (maxNum, currNum, age) {
    let thingsBrendaSay = [];
    if (maxNum == 100) {
        return thingsBrendaSay.push("it's too busy now, come back later");
    }
    if (currNum < 100) {
        return thingsBrendaSay.push("come in");
    }
    if (age <= 18) {
        return thingsBrendaSay.push("this is a club for adults");
    } else {
        return thingsBrendaSay
    }
};

console.log(pplChecker(100, 90, 18));

// Calculating the average
const calAverage = function (num1, num2, num3, num4, num5) {
    let sum = num1 + num2 + num3 + num4 + num5;
    let average = sum / 5;
    let outcome = Math.round(average);
    return outcome;
}

console.log(outcome);

calAverage(1, 2, 3, 4, 5);