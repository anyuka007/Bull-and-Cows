// str + shift + alt + i;

import { setTimeout as pause } from "timers/promises";
import { createSpinner } from "nanospinner";
import chalkAnimation from "chalk-animation";
import readline from "readline-sync";
import chalk from "chalk";

/* console.log("😁", "🐂", "🐄", "🐮", "𝓜𝓸𝓸✩‧₊˚🐄");

const bull = `⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣴⣶⣶⡦⠤⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
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
`;

console.log(bull);

const cow = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠀⠀⠀⠀⣠⣾⠙⠲⡄⠀⠀⠀⠀⠀⠀      
⠀⠀⠀⠀⠀⠀⣀⣀⡀⠀⠀⠀⠀⡁⠙⠩⢒⡒⡚⠁⠀⠀⠀⠈⠶⢤⡴⠒⠀⠐  
⠀⠀⠀⢀⣴⠊⠀⡀⠌⠁⠒⠒⠢⠵⣄⠀⠀⣼⠀⠀⢀⠀⢀⡦⡘⠁⠀⣀⣠⠜
⠀⢰⠋⠀⡀⠀⠀⠄⠀⠀⠀⠀⠀⠀⡀⠈⠁⠈⡇⠀⠀⢀⠉⢠⠉⠁⠉⠁⠀⠀
⠀⡾⠀⡰⠀⠀⠀⠀⠀⠀⠀⠀⠀⡐⠁⠀⠀⡘⠀⠀⠀⠀⢀⡜⠀⠀⠀⠀⠀⠀
⠘⡇⠀⠃⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀⠀⠀⠈⢿⣅⣆⢀⡠⢪⡇⠀⠀⠀⠀⠀⠀
⣇⡇⠀⡄⠀⠀⠀⠀⠀⠀⠀⢰⠀⠀⡠⠀⠀⠀⠑⠚⠃⢡⠛⠀⠀⠀⠀⠀⠀⠀
⡇⡇⠀⢳⠀⠀⠀⠀⠀⠀⠀⡆⠀⠐⠀⠀⠀⠀⠀⢀⠔⠁⠀⠆⠀⠀⠀⠀⠀⠀
⠸⢣⠀⠈⢧⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠊⠀⠀⡸⠀⠀⠀⠀⠀⠀⠀
⠀⢻⠀⠀⣎⠓⠤⣀⣀⡀⠀⢸⢄⠀⠀⢀⠀⠀⠀⠀⠀⢰⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠘⠀⢸⢸⠀⢸⠀⠀⠀⠀⠙⡄⠀⠀⣇⡀⢀⠔⡉⠀⡆⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢠⠀⡌⡄⢀⠃⠀⠀⠀⠀⠀⢰⠀⠀⡇⠈⠁⢠⡃⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢸⠀⡇⠃⠈⠀⠀⠀⠀⠀⠀⠀⠀⢰⠀⠀⠀⠈⡀⢠⠃⠀⠀⠀⠀⠀⠀⠀⠀
⠀⡸⠀⢹⠀⢴⠀⠀⠀⠀⠀⠀⠐⡀⢸⠀⠀⠀⠀⠃⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢯⣀⡽⠒⠒⠀⠀⠀⠀⠀⠀⠀⠇⢸⠀⠀⠀⠐⡀⠸⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡃⠀⡆⠀⠀⠀⣧⠀⢡⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣀⡀⠽⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`;
console.log(cow);

const cow2 = `
                                    
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣀⣤⣴⠆⠀⠀⠀
⠀⠀⠀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣠⣤⣤⣿⣿⣿⢧⡀⠀⠀⠀
⠀⠀⣼⢿⣿⣿⣆⠀⠀⠀⣀⠀⠀⠀⠈⢙⣿⣿⠛⠉⢉⣽⣿⣿⣿⣾⣿⣶⡄⠀
⠀⠀⣿⢸⣿⣿⣿⣷⣶⣿⣿⣷⣀⣀⣠⣾⣿⣿⠆⠀⠈⣹⣿⠟⠛⠛⠛⠛⠁⠀
⠀⠀⣿⠈⠀⣨⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⡀⠀⣀⣴⡿⠃⠀⠀⠀⠀⠀⠀⠀
⠀⢀⡿⠀⠘⢻⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠘⠁⢀⣠⡾⢋⣴⣶⣤⠄⠀⠀⠀⠀⣿⣿⠋⣠⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢸⡏⠀⠀⠈⣉⡀⠀⠀⠀⠀⠀⣿⡏⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠸⠿⠀⠀⠀⠹⠿⠄⠀⠀⠀⠀⠿⠧⠀⠸⠷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`;
console.log(cow2);

const cowText = `

⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣀⣤⣴⠆⠀⠀⠀
⠀⠀⠀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣠⣤⣤⣿⣿⣿⢧⡀⠀⠀⠀
⠀⠀⣼⢿⣿⣿⣆⠀⠀⠀⣀⠀⠀⠀⠈⢙⣿⣿⠛⠉⢉⣽⣿⣿⣿⣾⣿⣶⡄⠀
⠀⠀⣿⢸⣿⣿⣿⣷⣶⣿⣿⣷⣀⣀⣠⣾⣿⣿⠆⠀⠈⣹⣿⠟⠛⠛⠛⠛⠁⠀
⠀⠀⣿⠈⠀⣨⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⡀⠀⣀⣴⡿⠃⠀⠀⠀⠀⠀⠀⠀
⠀⢀⡿⠀⠘⢻⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠘⠁⢀⣠⡾⢋⣴⣶⣤⠄⠀⠀⠀⠀⣿⣿⠋⣠⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢸⡏⠀⠀⠈⣉⡀⠀⠀⠀⠀⠀⣿⡏⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠸⠿⠀⠀⠀⠹⠿⠄⠀⠀⠀⠀⠿⠧⠀⠸⠷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`;
console.log(cow2);
 */
const yesOrNo = ["yes", "no"];
//readline.setDefaultOptions({ limit: yesOrNo });
let answer = readline.question("Please choose 'yes' or 'no': ", {
    limit: yesOrNo,
});

console.log(`You selected: ${answer}`);

async function rules() {
    const textLines = [
        "",
        "",
        `${chalk.red.bold("      Rules of this Game       ")},`,
        "",
        `I will try to guess a ${chalk.blue.bold("secret code")},`,
        "that you create.",
        `It should be a sequence of ${chalk.blue.bold("4 digits")},`,
        `which  are ${chalk.blue.bold("not repeated")}`,
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
    await readline.keyIn("Press 'space' when you are ready. ");
    console.clear();

    /* const bullText = `⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣴⣶⣶⡦⠤⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
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
    `;
 */
    const textLines2 = [
        "",
        "",
        `${chalk.red.bold("      PART 2       ")},`,
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
        `${chalk.blueBright.bold("Let")}${chalk.magentaBright.bold(
            "'s"
        )} ${chalk.cyan.bold("start")} ${chalk.greenBright.bold(
            "the"
        )} ${chalk.white.bold("game")} ${chalk.rgb(255, 136, 0).bold("!")}`,
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

    await readline.keyIn("Press 'space' when you are ready. ");
    console.clear();
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

    console.log(coloredString);
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
    console.log(arrayOfWords.join(" "));
}

if (answer.toLowerCase() === "no") {
    colorizingStringChar("Let's play the game!");
} else if (answer.toLowerCase() === "yes") {
    rules(); // call rules function here
}

/* colorizingStringWord("How are you? I am fine, thank you");
colorizingStringChar("How are you? I am fine, thank you"); */
