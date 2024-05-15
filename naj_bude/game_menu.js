import readline from "readline-sync";

import { setTimeout as pause } from "timers/promises";
import { createSpinner } from "nanospinner";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";

function menu() {
    const games = [
        chalk.blue.bold("I guess the number"),
        chalk.yellow.bold("You guess the number"),
    ];
    console.log("Which game would you like to play?");
    const index = readline.keyInSelect(games, "Choose the appropriate number", {
        cancel: chalk.green.bold("Exit"),
    });
    const output =
        index === -1
            ? "Bye!"
            : `Ok, let's play a game where ${chalk.blue.bold(games[index])}.`;

    console.log(output);
    switch (index) {
        case 0:
            console.log("case1");
            break;
        case 1:
            console.log("case2");
            break;
        case -1:
            console.log("exit");
            break;
    }
}
menu();
