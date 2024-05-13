import readline from "readline-sync";

import { setTimeout as pause } from "timers/promises";
import { createSpinner } from "nanospinner";
import chalkAnimation from "chalk-animation";
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

async function realPrinting(str) {
    let newString = "";
    for (const letter of str.split("")) {
        console.clear();
        newString += letter;
        console.log(newString);
        await pause(150);
    }
}

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
} */

// await realPrinting("Hello my friend!", true);

/* const rainbow = chalkAnimation.rainbow("Hello my friend!");
await pause(2000);
rainbow.stop(); */

await realPrinting("Hello my friend!");
await realPrinting("What is your name?");
const name = readline.question("");
await realPrinting(`Nice to meet you, ${name}!`);
await realPrinting("Let's play a game...");
await pause(1000);
// await realPrinting("Hello my friend!");
// const name = readline.question("What is your name? ");
//console.log(`Nice to meet you, ${colorizingStringChar(name)}!`);
//await pause(1000);
//console.log("Let's play a game...");
await pause(3000);
console.clear();
/* console.log(
    `Hello, ${colorizingStringChar(
        name
    )}! Let's play a game ${colorizingStringChar("Bulls and Cows")}.`
); */
let nameOfGame = `  
                8""""8                                                   8""""8                     
                8    8   e   e e     e     eeeee    eeeee eeeee eeeee    8    " eeeee e   e  e eeeee
                8eeee8ee 8   8 8     8     8   "    8   8 8   8 8   8    8e     8  88 8   8  8 8   "
                88     8 8e  8 8e    8e    8eeee    8eee8 8e  8 8e  8    88     8   8 8e  8  8 8eeee
                88     8 88  8 88    88       88    88  8 88  8 88  8    88   e 8   8 88  8  8    88
                88eeeee8 88ee8 88eee 88eee 8ee88    88  8 88  8 88ee8    88eee8 8eee8 88ee8ee8 8ee88`;

const bullAndCow = `
        .=                          =. 
       :=+                          =+:
       *.+                          +.#                                 
       *..+                        =: *                ;.                   .;
       +:  -*-   :=**=--=**=:   -#=  .+                 .=     .+@@@     =.
        -+.     +*==*****#%%#*     .+-                   *%##@+  -   :##*..
          -%#=##%*====+++#%%%@@%+#%=                  *@@@%+*%.  +%  -@@@@@@@@.      
        .####%@@+*+=**+*%%@%%#@@%####:                +@@@@@@%%=    *##@@@@%*     
           :-: +=#**#*++#@%*%%+ :-:                      :..%@@#    @@#    
                #=+*%+++*%@%%@                            #@#%@@    @@.              
                :##+*+++*%%%%-                           +@@@%@--++=+@       
                 -@+#+++*%%@-                            @@=-@-.%%@%:%        
                  +%#%##%#%+                            -@-:@@==#%%+:@% 
                  =#%*###%@+                            =@ =@@@@@+ ##.%.
                   .#@%%@#.                              -  #*=%@ .:  : 

`;

function animateText(text) {
    return text
        .split("\n")
        .map((line) => line.slice(1) + line[0]) // jedes Element wurde verschobt an das Ende der Zeile
        .join("\n");
}

let animationInterval = setInterval(() => {
    nameOfGame = animateText(nameOfGame);
    console.log("Zusätzliche Informationen"); // Loggen Sie die zusätzlichen Informationen
    console.clear();
    /* if (Math.random() < 0.2) {
                        console.log(colorizingStringWord(nameOfGame));
                    } else {
                        console.log(nameOfGame);
                    } */
    console.log(colorizingStringChar(nameOfGame));
    console.log(bullAndCow);
}, 300); // geschwindigkeit ändern

await pause(4000);

clearInterval(animationInterval); // um die Animation zu stoppen.

console.clear();
const yesOrNo = ["yes", "no"];
console.log("Would you like to read the rules?");
await pause(1000);
let answer = readline.question("Please enter 'yes' or 'no': ", {
    limit: yesOrNo,
});

console.clear();
async function rules() {
    const textLines = [
        "",
        "",
        `${chalk.red.bold("      Rules of this Game       ")},`,
        "",
        `I will try to guess a ${chalk.blue.bold("secret code")},`,
        "that you create.",
        `It should be a sequence of ${chalk.blue.bold("4 digits")},`,
        `which  are ${chalk.blue.bold("not repeated")}.`,
    ];

    const artLines = `
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣀⣤⣴⠆⠀⠀⠀
    ⠀⠀⠀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣠⣤⣤⣿⣿⣿⢧⡀⠀⠀⠀
    ⠀⠀⣼⢿⣿⣿⣆⠀⠀⠀⣀⠀⠀⠀⠈⢙⣿⣿⠛⠉⢉⣽⣿⣿⣿⣾⣿⣶⡄⠀
    ⠀⠀⣿⢸⣿⣿⣿⣷⣶⣿⣿⣷⣀⣀⣠⣾⣿⣿⠆⠀⠈⣹⣿⠟⠛⠛⠛⠛⠁⠀
    ⠀⠀⣿⠈⠀⣨⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⡀⠀⣀⣴⡿⠃⠀⠀⠀⠀⠀⠀⠀
    ⠀⢀⡿⠀⠘⢻⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠘⠁⢀⣠⡾⢋⣴⣶⣤⠄⠀⠀⠀⠀⣿⣿⠋⣠⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⢸⡏⠀⠀⠈⣉⡀⠀⠀⠀⠀⠀⣿⡏⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠸⠿⠀⠀⠀⠹⠿⠄⠀⠀⠀⠀⠿⠧⠀⠸⠷⠀⠀⠀⠀⠀⠀⠀⠀
    `.split("\n");

    for (let i = 0; i < Math.max(textLines.length, artLines.length); i++) {
        const text = textLines[i] || "";
        const art = artLines[i] || "";
        console.log(art + " " + text);
    }
    //await pause(15000);
    await readline.keyIn("\n    Press 'space' when you are ready. ");
    console.clear();

    const textLines2 = [
        "",
        "",
        `${chalk.red.bold("      Rules of this Game       ")},`,
        "",
        `I'll make ${chalk.blue.bold("guesses")} at the code ,`,
        "After each guess, you'll provide feedback to me",
        `Please tell me the number of ${chalk.blue.bold(
            "bulls"
        )} 🐂 and ${chalk.yellow.bold("cows")} 🐄 :`,
        "",
        `A ${chalk.blue.bold("bull")} means that a digit in my guess`,
        `is  ${chalk.blue.bold("correct")} ${chalk.bold.underline(
            "both"
        )}  ${chalk.blue.bold("in value and position")}.`,
        "",
        `A ${chalk.yellow.bold("cow")} means that a digit in my guess`,
        `is correct ${chalk.yellow.bold("in value")}, ${chalk.bold.underline(
            "but"
        )}`,
        `in the ${chalk.yellow.bold("wrong position")}.`,
        "",
        "",
        colorizingStringWord("Let's start the game!"),
    ];

    const artLines2 = `⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣴⣶⣶⡦⠤⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢰⣿⣛⣉⣉⣉⣩⣭⣥⣤⣤⣤⡤⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠈⠀⠉⠉⠁⠀⠀⠀⠀⠀⠀⠈⠉⢢⠆⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠤⠤⠤⠄⢀⣀⣀⣀⡘⡄⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠐⠁⠀⠀⠀⠀⡀⠀⠀⢴⣶⣧⡀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⡠⠊⠀⠀⠀⠀⠀⠀⠀⠹⡄⠀⠨⣿⣿⣷⡄⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⡸⠁⠀⠀⠀⠀⠀⠀⢰⠀⠀⠙⣤⣶⣿⣿⣿⣿⡄⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⡐⠁⠀⠀⠀⠀⠀⡠⣴⠾⣷⡆⠀⢿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣧⣴⡄⢻⣿⣿⣿⣿⣿⠀⠀⠀⠀
    ⠀⠀⠀⠀⢸⠀⠀⢠⠀⠀⠀⠀⠀⠀⠈⠉⢉⠿⢿⣆⢿⣿⣿⣿⣿⡀⠀⠀⠀
    ⠀⠀⠀⠀⠎⠀⠀⣿⡄⠀⠀⠀⠀⠀⠀⠘⠋⢛⣟⠛⠃⠙⠻⠿⣿⡇⠀⠀⠀
    ⠀⠀⠀⢸⡄⠀⠀⡘⠋⠉⡀⢠⣾⡰⢶⣶⡖⠁⣤⣳⣿⣶⢶⣶⡌⠳⠤⣀⣀
    ⠀⠀⠀⢸⢠⠀⢀⣿⣿⣶⣿⣿⣿⠇⠀⠁⣷⣄⣈⣙⣛⣿⣿⣿⡲⡒⠒⠒⠊
    ⠀⠀⠀⠀⣿⣾⣿⣿⣿⣿⣿⣿⡟⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣟⣿⣶⡄⠀⠀
    ⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠐⣿⠿⣿⣿⣿⣿⡿⠋⠀⠙⣿⡇⠀⠀
    ⠀⠀⠀⣿⣿⡿⠁⠸⣿⣿⣿⣿⣿⣦⠸⠋⢸⣿⣿⣿⡿⠁⠀⠀⠀⢸⣷⡀⠀
    ⠀⠀⠀⣻⣿⡇⠀⠀⠀⣹⣿⡿⢻⣿⢠⡀⠸⣿⣿⣿⣧⠀⠀⠀⠀⠘⣿⣧⠀
    ⠀⠀⢠⠉⣿⠇⠀⠀⢰⠋⣿⣰⣁⡟⠀⠁⢼⣿⡿⠿⠏⠀⠀⠀⠀⠀⠋⠟⠀
    ⠀⠀⢰⣿⠋⠀⠀⠀⢀⣿⡏⠛⠐⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⣾⡇⠀⠀⠀⢀⠎⢹⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠜⢹⡇⠀⠀⠀⠾⣶⡾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠮⣿⠿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    `.split("\n");

    for (let i = 0; i < Math.max(textLines2.length, artLines2.length); i++) {
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

// const name = readline.question("What is your name? ");
// console.log(`Hello, ${name}! Let's play a game "Bulls and Cows".`);
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
    let usersAnswerBulls = getValidInput("How many Bulls? ", 4);
    if (usersAnswerBulls === "4") {
        console.log("YooHoo! I won!");
        return [usersAnswerBulls, 0];
    }

    let usersAnswerCows = getValidInput(
        "How many Cows? ",
        4 - usersAnswerBulls
    );

    if (usersAnswerBulls === "0" && usersAnswerCows === "0") {
        console.log("I'm so lucky!");
    }

    return [usersAnswerBulls, usersAnswerCows];
}

/* const spinner = createSpinner().start();
await pause(2000);
spinner.stop(); */

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
console.log("reducedArray length", reducedArray.length);
// console.log("initial Array", arrayWithCombinations.length);

function stringAnimated(str) {
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

while (reducedArray.length > 1) {
    guess = guessGenerator(reducedArray);
    //const spinner = createSpinner("Let me think").start();

    // chalkAnimation.rainbow("Let me think").start();
    const computerThought = [
        "Hold on",
        "I'm considering all options",
        "I need to weigh all possible scenarios",
        "Let me analyze this",
        "Let me think",
        "One moment, please",
        "Let me check it out",
        "What could it be?",
    ];
    const randomPhrase =
        computerThought[Math.floor(Math.random() * computerThought.length)];
    stringAnimated(randomPhrase);
    await pause(2000);
    //spinner.stop();
    console.log(`My guess ist ${colorizingStringWord(guess)}`);
    let [usersAnswerBulls, usersAnswerCows] = checkingTheGuess();
    if (usersAnswerBulls === 4) {
        break;
    }
    reducedArray = arrayWithCombinationsReducing(
        reducedArray,
        guess,
        usersAnswerBulls,
        usersAnswerCows
    );
    // spinner.stop();
    console.log("reducedArray length", reducedArray.length);
    // console.log("initial Array", arrayWithCombinations.length);

    await pause(1000);

    if (reducedArray.length === 1) {
        chalkAnimation.rainbow("Aha! I think I've got it!").start();
        console.log("Your Number is " + reducedArray[0]);
    }
    if (reducedArray.length === 0) {
        chalkAnimation.rainbow("Aha! I think I've got it!").start();
        console.log("Oops, there is a mistake in your input");
    }
}

/* let gameData = {
    guesses: [1216, 1586],
    userAnswers: {
        bulls: [1, 2],
        cows: [2, 3],
    },
};

gameData.guesses.push("Ihr Guess");
gameData.userAnswers.push("Ihre Antwort");
 */
