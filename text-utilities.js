import chalk from "chalk";
import { setTimeout as pause } from "timers/promises";
import chalkAnimation from "chalk-animation";

export function colorizingStringChar(string) {
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
export function colorizingStringWord(string) {
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

export function stringAnimated(str) {
    let animatedStr = str;
    const rainbow = chalkAnimation.rainbow(animatedStr, 0.5); // speed of changing

    // Add a new dot every second
    const intervalId = setInterval(() => {
        animatedStr += ".";
        rainbow.replace(animatedStr);
    }, 500);

    setTimeout(() => {
        clearInterval(intervalId); // Clear the interval
        rainbow.stop(); // Animation stops
    }, 5000);
}

export async function realPrinting(str) {
    let newString = "";
    for (const letter of str.split("")) {
        console.clear();
        newString += letter;
        console.log(newString);
        await pause(150);
    }
}
