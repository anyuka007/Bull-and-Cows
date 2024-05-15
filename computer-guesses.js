import readline from "readline-sync";

import { setTimeout as pause } from "timers/promises";
import chalkAnimation from "chalk-animation";

import {
    textLines,
    artLines,
    textLines2,
    artLines2,
    computerThoughts,
} from "./text-variables.js";
import {
    colorizingStringChar,
    colorizingStringWord,
    stringAnimated,
} from "./text-utilities.js";

export async function computerGuessesGame() {
    console.clear();
    const yesOrNo = ["yes", "no"];
    console.log("Would you like to read the rules?");
    await pause(1000);
    let answer = readline.question("Please enter 'yes' or 'no': ", {
        limit: yesOrNo,
    });

    console.clear();

    async function rules() {
        for (let i = 0; i < Math.max(textLines.length, artLines.length); i++) {
            const text = textLines[i] || "";
            const art = artLines[i] || "";
            console.log(art + " " + text);
        }
        //await pause(15000);
        await readline.keyIn("\n    Press 'space' when you are ready. ");
        console.clear();

        for (
            let i = 0;
            i < Math.max(textLines2.length, artLines2.length);
            i++
        ) {
            const text = textLines2[i] || "";
            const art = artLines2[i] || "";
            console.log(art + " " + text);
        }

        await readline.keyIn("\n    Press 'space' when you are ready. ");
        console.clear();
    }

    if (answer.toLowerCase() === "no") {
        console.log(colorizingStringWord("Let's get started!"));
    } else if (answer.toLowerCase() === "yes") {
        rules(); // call rules function here
    }

    // Generation of array with all mögliche combinatiins
    let arrayWithCombinations = [];
    for (let i = 123; i < 10000; i++) {
        let combination = i.toString();
        if (combination.length === 3) {
            combination = "0" + i;
        }
        if (
            combination[0] !== combination[1] &&
            combination[0] !== combination[2] &&
            combination[0] !== combination[3] &&
            combination[1] !== combination[2] &&
            combination[1] !== combination[3] &&
            combination[2] !== combination[3]
        ) {
            arrayWithCombinations.push(combination);
        }
    }

    function guessGenerator(arrayWithCombinations) {
        return arrayWithCombinations[
            Math.floor(Math.random() * arrayWithCombinations.length)
        ];
    }

    let guess = guessGenerator(arrayWithCombinations);

    await pause(1000);
    console.log(`My guess is ${colorizingStringWord(guess)}`);
    await pause(1000);

    function getValidInput(question, max) {
        let input;
        do {
            input = Number(readline.question(question));
            if (isNaN(input) || input < 0 || input > max) {
                console.log(`Please enter a number between 0 and ${max}`);
            }
        } while (isNaN(input) || input < 0 || input > max);
        return input;
    }

    function checkingTheGuess() {
        let usersAnswerBulls = getValidInput("How many bulls? ", 4);
        if (usersAnswerBulls === "4") {
            console.log("YooHoo! I won!");
            return [usersAnswerBulls, 0];
        }

        let usersAnswerCows = getValidInput(
            "How many cows? ",
            4 - usersAnswerBulls
        );

        if (usersAnswerBulls === "0" && usersAnswerCows === "0") {
            console.log("I'm so lucky!");
        }

        return [usersAnswerBulls, usersAnswerCows];
    }

    function arrayWithCombinationsReducing(
        arrayWithCombinations,
        guess,
        bulls,
        cows
    ) {
        bulls = Number(bulls);
        cows = Number(cows);
        const reducedArray = arrayWithCombinations.filter((combination) => {
            let bulls1 = 0;
            let cows1 = 0;
            for (let i = 0; i < combination.length; i++) {
                if (guess[i] === combination[i]) {
                    bulls1++;
                } else if (
                    guess.includes(combination[i]) &&
                    guess[i] !== combination[i]
                ) {
                    cows1++;
                }
            }
            // console.log(combination, bulls1, cows1);
            return bulls1 === bulls && cows1 === cows;
        });
        return reducedArray;
    }
    let [usersAnswerBulls, usersAnswerCows] = checkingTheGuess();
    let reducedArray = arrayWithCombinationsReducing(
        arrayWithCombinations,
        guess,
        usersAnswerBulls,
        usersAnswerCows
    );
    // console.log("reducedArray length", reducedArray.length);
    // console.log("initial Array", arrayWithCombinations.length);

    while (reducedArray.length > 1) {
        guess = guessGenerator(reducedArray);
        const randomPhrase =
            computerThoughts[
                Math.floor(Math.random() * computerThoughts.length)
            ];
        stringAnimated(randomPhrase);
        await pause(2000);

        console.log(`My guess ist ${colorizingStringWord(guess)}`);
        let [usersAnswerBulls, usersAnswerCows] = checkingTheGuess();
        if (usersAnswerBulls === 4) {
            console.log(colorizingStringChar("I won!"));
            break;
        }
        reducedArray = arrayWithCombinationsReducing(
            reducedArray,
            guess,
            usersAnswerBulls,
            usersAnswerCows
        );

        // console.log("reducedArray length", reducedArray.length);
        // console.log("initial Array", arrayWithCombinations.length);

        await pause(1000);

        if (reducedArray.length === 1) {
            chalkAnimation.rainbow("Aha! I think I've got it!").start();
            await pause(1000);
            console.log(
                "Your number is " + colorizingStringWord(reducedArray[0])
            );
        }
        if (reducedArray.length === 0) {
            stringAnimated("Aha! I think I've got it!");
            await pause(1000);
            console.log(
                `It seems there is a ${colorizingStringWord(
                    "mistake"
                )} in your input 🥺`
            );
            await pause(1000);
        }
    }
}
