import readline from "readline-sync";

import { setTimeout as pause } from "timers/promises";
import chalk from "chalk";
import {
    bullAndCow,
    bullGoodbye,
    nameOfGame,
    seeYou,
} from "./text-variables.js";
import { animatedHeader } from "./animated-header.js";
import { realPrinting } from "./text-utilities.js";
import { userGuessesGame } from "./user-guesses.js";
import { computerGuessesGame } from "./computer-guesses.js";

await realPrinting("Hello my friend!");
await realPrinting("What is your name?");
const name = readline.question("");
await realPrinting(`Nice to meet you, ${name}!`);
await realPrinting("Let's play a game...");
await pause(1000);
console.clear();

await animatedHeader(nameOfGame, bullAndCow, 300);

let playAgain = true;

async function menu() {
    console.clear();
    const games = [
        chalk.blue.bold("I guess the number"),
        chalk.yellow.bold("You guess the number"),
    ];
    console.log("Which game would you like to play?");
    await pause(1000);
    const index = readline.keyInSelect(games, "Choose the appropriate number", {
        cancel: chalk.green.bold("Exit"),
    });

    const output =
        index === -1
            ? "Ok, as  you wish..."
            : `Ok, let's play a game where ${chalk.blue.bold(games[index])}.`;

    console.log(output);

    switch (index) {
        case 0:
            // console.log("case1");
            // await pause(1000);
            await computerGuessesGame();
            await checkPlayAgain();
            break;
        case 1:
            // console.log("case2");
            // await pause(1000);
            await userGuessesGame();
            await checkPlayAgain();
            break;
        case -1:
            await pause(1000);
            playAgain = false;
            await animatedHeader(seeYou, bullGoodbye, 300);
            break;
    }
    await pause(1000);
}

await menu();
await pause(1000);

async function checkPlayAgain() {
    const yesOrNo1 = ["yes", "no"];
    console.log("Would you like to play again?");
    await pause(1000);
    let answerPlayAgain = readline.question("Please enter 'yes' or 'no': ", {
        limit: yesOrNo1,
    });

    if (answerPlayAgain === "no") {
        playAgain = false;
        await animatedHeader(seeYou, bullGoodbye, 300);
    }

    if (answerPlayAgain === "yes") {
        await realPrinting("Ok, let's do it again!");
        await pause(1000);
    }

    while (playAgain) {
        await menu();
    }
}
