const readPromptNumber = (text) => {
    let stringInput = prompt(text);
    if (stringInput === null)
        throw "Cancelled!";
    let inputAsNumber = Number(stringInput);
    if (isNaN(inputAsNumber))
        throw "Input is not a number!";
    return inputAsNumber; // readPromptNumber("blabla") returns a number
}

const randomNum = Math.floor(Math.random() * 26);
console.log(randomNum);

let naam = prompt('Welkom! Wat is je naam?');
if (naam === null)
    throw "Cancelled!";

alert('Hey ' + naam);

let input = readPromptNumber("Voer een nummer in van 0 tot 25 om te beginnen met raden...");
while (input !== randomNum) {
    input = readPromptNumber("Dat is niet correct. Voer opnieuw een getal in tussen 0 en 25.")
    console.log(input);
    if (input === null) // after pressing Cancel
        throw "Cancelled!";
}
alert("Gefeliciteerd je hebt gewonnen. Dag " + naam + ". Tot de volgende keer");
