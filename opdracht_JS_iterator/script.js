let colors = ['yellow', 'blue', 'red', 'orange']

// oude stijl: loops
const forLoopPrinter = () => {
    for (let i = 0; i < colors.length; i++) {
        console.log(colors[i]);
    }
};

const whileLoopPrinter = () => {
    let i = 0;
    while (i < colors.length) {
        console.log(colors[i]);
        i++;
    }
}

forLoopPrinter();
whileLoopPrinter();

// nieuwe stijl: array methods
colors.forEach(item => console.log(item));


// -----------------------

1. 5 - 7 regels
2. slechts een regel
3. makkelijker te onthouden.
4.