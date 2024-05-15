// rules
// number generation
// nach guess fragen
// compare input mit der number
// antwort sagen
// wenn richtig, congrats
// wenn nein  - wiedeerhole
// wieder nach guess fragen....

import readline from "readline-sync";

import { setTimeout as pause } from "timers/promises";
import { createSpinner } from "nanospinner";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";

import {
    colorizingStringWord,
    stringAnimated,
    realPrinting,
    colorizingStringChar,
} from "./text-utilities.js";

import {
    artLines,
    artLines2,
    rulesUserGuesses,
    rulesUserGuesses2,
    computerThoughtsUserGuesses,
    computerAnswersUserGuesses,
} from "./text-variables.js";

export async function userGuessesGame() {
    console.clear();
    const yesOrNo = ["yes", "no"];
    console.log("Would you like to read the rules?");
    await pause(1000);
    let answer = readline.question("Please enter 'yes' or 'no': ", {
        limit: yesOrNo,
    });

    console.clear();
    async function rules() {
        for (
            let i = 0;
            i < Math.max(rulesUserGuesses.length, artLines.length);
            i++
        ) {
            const text = rulesUserGuesses[i] || "";
            const art = artLines[i] || "";
            console.log(art + " " + text);
        }
        //await pause(15000);
        await readline.keyIn("\n    Press 'space' when you are ready. ");
        console.clear();

        for (
            let i = 0;
            i < Math.max(rulesUserGuesses2.length, artLines2.length);
            i++
        ) {
            const text = rulesUserGuesses2[i] || "";
            const art = artLines2[i] || "";
            console.log(art + " " + text);
        }

        await readline.keyIn("\n    Press 'space' when you are ready. ");
        console.clear();
    }

    if (answer.toLowerCase() === "no") {
        console.log(colorizingStringWord("Let's get started!"));
    } else if (answer.toLowerCase() === "yes") {
        rules(); // call rules function here
    }

    let arrayWithCombinations = [];
    for (let i = 123; i < 10000; i++) {
        let combination = i.toString();
        if (combination.length === 3) {
            combination = "0" + i;
        }
        if (
            combination[0] !== combination[1] &&
            combination[0] !== combination[2] &&
            combination[0] !== combination[3] &&
            combination[1] !== combination[2] &&
            combination[1] !== combination[3] &&
            combination[2] !== combination[3]
        ) {
            arrayWithCombinations.push(combination);
        }
    }

    function numberGenerator(arrayWithCombinations) {
        return arrayWithCombinations[
            Math.floor(Math.random() * arrayWithCombinations.length)
        ];
    }

    let number = numberGenerator(arrayWithCombinations);

    // console.log(number);

    await realPrinting("I have already chosen the number");
    await pause(1000);

    async function getGuessFromUser() {
        console.log("What is your guess?");

        function hasUniqueDigits(number) {
            const digits = number.split("");
            for (let i = 0; i < digits.length; i++) {
                if (isNaN(Number(digits[i]))) {
                    return false;
                }
                for (let j = i + 1; j < digits.length; j++) {
                    if (digits[i] === digits[j]) {
                        return false;
                    }
                }
            }
            return true;
        }

        function getValidInput(question) {
            let input;
            do {
                input = readline.question(question);
                if (input.toLocaleLowerCase() === "stop") {
                    break;
                }
                if (input.length !== 4 || !hasUniqueDigits(input)) {
                    console.log(
                        "Please enter a 4-digit number with unique digits"
                    );
                }
            } while (input.length !== 4 || !hasUniqueDigits(input));
            return input;
        }

        return getValidInput("");
    }

    async function guessCheck() {
        let correctGuess = false;
        while (!correctGuess) {
            const usersGuess = await getGuessFromUser();
            if (usersGuess.toLowerCase() === "stop") {
                console.log(
                    `The game is over. The number I guessed is ${colorizingStringWord(
                        number
                    )}`
                );
                await pause(1000);
                correctGuess = true;
            } else if (usersGuess === number) {
                console.log(
                    `${colorizingStringChar(
                        "You won!"
                    )} The number I guessed is ${colorizingStringWord(number)}!`
                );
                correctGuess = true;
            } else {
                let bulls = 0;
                let cows = 0;
                for (let i = 0; i < usersGuess.length; i++) {
                    if (usersGuess[i] === number[i]) {
                        bulls++;
                    } else if (
                        number.includes(usersGuess[i]) &&
                        number[i] !== usersGuess[i]
                    ) {
                        cows++;
                    }
                }
                const randomPhrase =
                    computerThoughtsUserGuesses[
                        Math.floor(
                            Math.random() * computerThoughtsUserGuesses.length
                        )
                    ];
                stringAnimated(randomPhrase);
                await pause(2000);
                const randomAnswer =
                    computerAnswersUserGuesses[
                        Math.floor(
                            Math.random() * computerAnswersUserGuesses.length
                        )
                    ];
                console.log(
                    `${randomAnswer} There are ${chalk.blue.bold(
                        bulls
                    )} bulls and ${chalk.yellow.bold(cows)} cows. `
                );

                // console.log(number);
                await pause(1000);
            }
        }
    }

    await guessCheck();
}
