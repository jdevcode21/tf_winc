// The Grade Assigner 
function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'E';
    }
}

const gradeassigner = () => {
    for (i = 60; i <= 100; i++) {
        const result = assignGrade(i);
        console.log("Voor " + i + " punten, krijg je een " + result)
    }
};

gradeassigner();
