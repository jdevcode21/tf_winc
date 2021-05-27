const redWall = function (arg) {
    console.log("The wall has been painted " + arg + '.');
}

redWall('green');

const paintedWall = function (direction, color) {
    console.log('The ' + direction + ' wall has been painted ' + color + '.');
};

paintedWall('southeast', 'red');