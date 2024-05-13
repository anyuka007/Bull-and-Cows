import { setTimeout as pause } from "timers/promises";
import chalkAnimation from "chalk-animation";
import readline from "readline-sync";
import chalk from "chalk";

async function processString(str) {
    let newString = "";
    const words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let coloredWord = await realPrinting(word);
        coloredWord = colorizingStringWord(coloredWord);
        newString += coloredWord + " ";
    }

    return newString.trim();
}

async function realPrinting(str) {
    let printedString = "";
    for (const letter of str.split("")) {
        console.clear();
        printedString += letter;
        console.log(printedString);
        await pause(150);
    }
    return str;
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

// Beispielaufruf
const inputString = "Hallo Welt";
processString(inputString)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
