import readline from "readline-sync";

import { setTimeout as pause } from "timers/promises";
import { createSpinner } from "nanospinner";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";

import figlet from "figlet";
import gradient from "gradient-string";
import { bullAndCow, nameOfGame, youWon } from "./text-variables.js";
import { colorizingStringChar } from "./text-utilities.js";

export async function animatedHeader(header, additionalText, animationSpeed) {
    function animateText(text) {
        return text
            .split("\n")
            .map((line) => (line.length ? line.slice(1) + line[0] : "")) // jedes Element wurde verschobt an das Ende der Zeile
            .join("\n");
    }

    const animationInterval = setInterval(() => {
        header = animateText(header);
        console.clear();
        console.log(colorizingStringChar(header));
        console.log(additionalText);
    }, animationSpeed); // Animationsgeschwindigkeit ändern

    await pause(3000);

    // Stopping the interval after pauseTime
    clearInterval(animationInterval);
}
//await animatedHeader(nameOfGame, bullAndCow, 300);

//await animatedHeader(youWon, " ", 300);
