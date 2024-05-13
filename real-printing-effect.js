import { setTimeout as pause } from "timers/promises";
import chalkAnimation from "chalk-animation";
import readline from "readline-sync";
import chalk from "chalk";

const testText = "You are welcome";

console.log("Test");
async function realPrinting(str) {
    let newString = "";
    for (const letter of str.split("")) {
        console.clear();
        newString += letter;
        console.log(newString);
        await pause(150);
    }
}
await realPrinting(testText);
/* await realPrinting(testText);
await realPrinting(testText); */

/* async function realPrinting(str, useRainbow = false) {
    let newString = "";
    for (const letter of str.split("")) {
        console.clear();
        newString += letter;
        if (useRainbow === false) {
            console.log(newString);
        } else {
            chalkAnimation.rainbow(newString);
        }
        await pause(150);
    }
    return newString;
}

await realPrinting("Hello my friend!", true); */

await realPrinting("What is your name? ");
const name1 = readline.question("");
console.log(name1);
