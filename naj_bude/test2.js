import readline from "readline-sync";

import { setTimeout as pause } from "timers/promises";
import { createSpinner } from "nanospinner";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";

/* const question = chalkAnimation.rainbow("What is your name? ").start();
await pause(1000);
//question.stop(); // Stoppt die Animation, damit die Eingabeaufforderung korrekt angezeigt wird

const name = readline.question("");
const greeting = `Hello, ${name}! Let's play a game "Bulls and Cows".`;
chalkAnimation.rainbow(greeting);
await pause(2000);

console.log("End"); */

let value = "Room";

console.log(`My guess is ${chalk.blue.bgRed.bold(value)}`);

console.log("🏧");
