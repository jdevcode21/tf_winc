console.log("Hallo Winc Academy Studenten");

/*
// Dit is een grote som
console.log(1230941 * 1823794);
console.log(637263 / 54);
*/

const age = 23;
if (age >= 18) {
    console.log("Please enter in 5 minutes");
} else {
    console.log("Please wait outside");
}

const isFemale = true;
if (isFemale == true) {
    console.log("It's a female.");
} else {
    console.log("It's NOT a female.");
}

const driverStatus = 'bob';
if (driverStatus == 'bob') {
    console.log("You may drive.");
} else {
    console.log("You may not drive.");
}

if (age > 18 && age < 25) {
    console.log("Je krijgt 50% korting!");
}

const name = 'Bram';
if (name == 'Sarah' || name == 'Bram') {
    console.log('Deze persoon krijgt gratis biertje!');
}

const totalAmount = 60;
if (totalAmount >= 100) {
    console.log('Gratis champagne!');
} else if (totalAmount >= 50) {
    console.log('Gratis nachos!');
} else if (totalAmount >= 25) {
    console.log('Gratis bitterballen!');
}