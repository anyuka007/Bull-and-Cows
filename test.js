import readline from "readline-sync";

function sumOfBullsAndCows(bulls, cows) {
    return Number(bulls) + Number(cows);
}

function isValidQuantity(quantity) {
    return quantity >= 0 && quantity <= 4;
}

// Verwendung der Funktionen
let usersAnswerBulls = readline.question("How many Bulls? ");
let usersAnswerCows = readline.question("How many Cows? ");

if (!isValidQuantity(usersAnswerBulls) || !isValidQuantity(usersAnswerCows)) {
    console.log("The Quantity should be 0-4");
    // Fragen Sie erneut nach den Werten...
}

if (sumOfBullsAndCows(usersAnswerBulls, usersAnswerCows) > 4) {
    console.log("Check please, bulls + cows should be 4");
    // Fragen Sie erneut nach den Werten...
}

let gameData = {
    bulls: [1, 2, 0, 1],
    cows: [2, 3, 3, 5],
};
console.table(gameData);
