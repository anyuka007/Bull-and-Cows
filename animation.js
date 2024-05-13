let nameOfGame = `  
                8""""8                                                   8""""8                     
                8    8   e   e e     e     eeeee    eeeee eeeee eeeee    8    " eeeee e   e  e eeeee
                8eeee8ee 8   8 8     8     8   "    8   8 8   8 8   8    8e     8  88 8   8  8 8   "
                88     8 8e  8 8e    8e    8eeee    8eee8 8e  8 8e  8    88     8   8 8e  8  8 8eeee
                88     8 88  8 88    88       88    88  8 88  8 88  8    88   e 8   8 88  8  8    88
                88eeeee8 88ee8 88eee 88eee 8ee88    88  8 88  8 88ee8    88eee8 8eee8 88ee8ee8 8ee88`;

import chalk from "chalk";

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

function animateText(text) {
    return text
        .split("\n")
        .map((line) => line.slice(1) + line[0]) // jedes Element wurde verschobt an das Ende der Zeile
        .join("\n");
}

let animationInterval = setInterval(() => {
    nameOfGame = animateText(nameOfGame);
    console.clear();
    /* if (Math.random() < 0.2) {
        console.log(colorizingStringWord(nameOfGame));
    } else {
        console.log(nameOfGame);
    } */
    console.log(colorizingStringChar(nameOfGame));
}, 300); // geschwindigkeit ändern

import { setTimeout as pause } from "timers/promises";
await pause(4000);

clearInterval(animationInterval); // um die Animation zu stoppen.
console.log("Yii");
