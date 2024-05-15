import { setTimeout } from "timers/promises";
import chalkAnimation from "chalk-animation";
import readline from "readline-sync";
import chalk from "chalk";

let color = [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
];
let randomColor = chalk.rgb(color[0], color[1], color[2]).bold;

export async function realPrinting(str, colorize = false, word) {
    let newString = "";
    for (const letter of str.split("")) {
        console.clear();
        newString += letter;
        if (colorize) {
            console.log(colorizingStringChar(newString, word));
        } else {
            console.log(newString);
        }
        await setTimeout(150);
    }
}

/* function colorizingStringChar(string) {
    let coloredString = "";
    for (let i = 0; i < string.length; i++) {
        let color = [
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
        ];
        let coloredChar = `${chalk
            .rgb(color[0], color[1], color[2])
            .bold(`${string[i]}`)}`;
        coloredString += coloredChar;
    }
    return coloredString;
}

function colorizingStringWord(string) {
    const arrayOfWords = string.split(" ");
    for (let i = 0; i < arrayOfWords.length; i++) {
        let color = [
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
        ];
        arrayOfWords[i] = `${chalk
            .rgb(color[0], color[1], color[2])
            .bold(`${arrayOfWords[i]}`)}`;
    }
    return arrayOfWords.join(" ");
}
 */
// "langsame printing"
// gefärbte logs

const testSTRING = "This is a test string";

realPrinting(testSTRING, true); // To enable colorized printing
// realPrinting(testSTRING); // To print without colorization

function colorizingStringChar(string, wordToColorize) {
    let words = string.split(wordToColorize);
    let coloredString = words.join(randomColor(wordToColorize));
    return coloredString;
}

await realPrinting("Nice to meet you, name!", true, "Nice");
