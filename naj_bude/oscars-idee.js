import chalk from "chalk";
import { setTimeout } from "timers/promises";

/* export async function realPrinting(str, colorize = false) {
    let newString = "";
    for (const letter of str.split("")) {
        console.clear();
        newString += letter;
        if (colorize) {
            console.log(colorizingStringChar(newString));
        } else {
            console.log(newString);
        }
        await setTimeout(150);
    }
}

function colorizingStringChar(string) {
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
} */

function colorsGenerator(string) {
    let colors = [];
    const letters = string.split("");
    for (let letter of letters) {
        let color = [
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
        ];
        colors.push({
            letter: letter,
            color: color,
        });
    }
    return colors;
}

async function realPrinting(str) {
    let newString = "";
    for (const letter of str.split("")) {
        console.clear();
        const colorResult = colorsGenerator(letter);

        // Extract the color
        const color = colorResult[0].color;

        // Use the color with chalk
        newString += chalk.rgb(color[0], color[1], color[2])(letter);
        //newString += chalk.colorsGenerator(letter);
        console.log(newString);
        await setTimeout(150);
    }
}

realPrinting("Hello! How are you!");

const result = colorsGenerator("this is a test");
console.log(result);
const firstElement = result[0];

console.log(firstElement.letter); // Outputs the letter of the first element
console.log(firstElement.color);

// "langsame printing"
// gefärbte logs

//const testSTRING = "This is a test string";

//realPrinting(testSTRING, true); // To enable colorized printing
// realPrinting(testSTRING); // To print without colorization
