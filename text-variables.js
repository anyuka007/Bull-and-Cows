import chalk from "chalk";
import {
    colorizingStringWord,
    colorizingStringChar,
} from "./text-utilities.js";

export const nameOfGame = `  
                8""""8                                                   8""""8                     
                8    8   e   e e     e     eeeee    eeeee eeeee eeeee    8    " eeeee e   e  e eeeee
                8eeee8ee 8   8 8     8     8   "    8   8 8   8 8   8    8e     8  88 8   8  8 8   "
                88     8 8e  8 8e    8e    8eeee    8eee8 8e  8 8e  8    88     8   8 8e  8  8 8eeee
                88     8 88  8 88    88       88    88  8 88  8 88  8    88   e 8   8 88  8  8    88
                88eeeee8 88ee8 88eee 88eee 8ee88    88  8 88  8 88ee8    88eee8 8eee8 88ee8ee8 8ee88`;

export const bullAndCow = `
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

export const youWon = `
                8    8                8   8   8              8 
                8    8 eeeee e   e    8   8   8 eeeee eeeee  88
                8eeee8 8  88 8   8    8e  8  88 8  88 8   8  88
                  88   8   8 8e  8    88  8  88 8   8 8e  8  88
                  88   8   8 88  8    88  8  88 8   8 88  8   
                  88   8eee8 88ee8    88ee8ee8e 8eee8 88  8  88
  `;

export const textLines = [
    "",
    "",
    `${chalk.red.bold("      Rules of this Game       ")},`,
    "",
    `I will try to guess a ${chalk.blue.bold("secret code")},`,
    "that you create.",
    `It should be a sequence of ${chalk.blue.bold("4 digits")},`,
    `which are ${chalk.blue.bold("not repeated")}.`,
];

export const artLines = `
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

export const textLines2 = [
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
    `is ${chalk.blue.bold("correct")} ${chalk.bold.underline(
        "both"
    )} ${chalk.blue.bold("in value and position")}.`,
    "",
    `A ${chalk.yellow.bold("cow")} means that a digit in my guess`,
    `is correct ${chalk.yellow.bold("in value")} ${chalk.bold.underline(
        "but"
    )}`,
    `in the ${chalk.yellow.bold("wrong position")}.`,
    "",
    "",
    colorizingStringWord("Let's start the game!"),
];

export const artLines2 = `⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣴⣶⣶⡦⠤⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
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

export const computerThoughts = [
    "Hold on",
    "I'm considering all options",
    "I need to weigh all possible scenarios",
    "Let me analyze this",
    "Let me think",
    "One moment, please",
    "Let me check it",
    "What could it be?",
];

export const rulesUserGuesses = [
    "",
    "",
    `${chalk.red.bold("      Rules of this Game       ")},`,
    "",
    `You will try to guess a ${chalk.blue.bold("secret code")},`,
    "that I create.",
    `It should be a sequence of ${chalk.blue.bold("4 digits")},`,
    `which are ${chalk.blue.bold("not repeated")}.`,
];

export const rulesUserGuesses2 = [
    "",
    "",
    `${chalk.red.bold("      Rules of this Game       ")},`,
    "",
    `You'll make ${chalk.blue.bold("guesses")} at the code ,`,
    "After each guess, I'll provide feedback to you",
    `I tell you the number of ${chalk.blue.bold(
        "bulls"
    )} 🐂 and ${chalk.yellow.bold("cows")} 🐄 :`,
    "",
    `A ${chalk.blue.bold("bull")} means that a digit in your guess`,
    `is ${chalk.blue.bold("correct")} ${chalk.bold.underline(
        "both"
    )}  ${chalk.blue.bold("in value and position")}.`,
    "",
    `A ${chalk.yellow.bold("cow")} means that a digit in your guess`,
    `is correct ${chalk.yellow.bold("in value")} ${chalk.bold.underline(
        "but"
    )}`,
    `in the ${chalk.yellow.bold("wrong position")}.`,
    "",
    `Write the word "${colorizingStringWord("stop")}" to end the current game.`,
    "",
    colorizingStringChar("Let's start the game!"),
];

export const computerThoughtsUserGuesses = [
    "Hold on",
    "Just a moment",
    "Just a second, please",
    "Let me analyze this",
    "I have to count",
    "One moment, please",
    "Let me check it",
];

export const computerAnswersUserGuesses = [
    "Your guess is wrong",
    "That's not it.",
    "Sorry, that's incorrect.",
    "Not quite.",
    "Unfortunately, that's incorrect.",
    "Sorry, that's not the one.",
    "Not the right answer.",
];

export const seeYou = ` 
                    8""""8                                                            8 
                    8      eeee eeee    e    e eeeee e   e    eeeee eeeee eeeee eeeee 88
                    8eeeee 8    8       8    8 8  88 8   8    8   " 8  88 8  88 8   8 88
                        88 8eee 8eee    8eeee8 8   8 8e  8    8eeee 8   8 8   8 8e  8 88
                    e   88 88   88        88   8   8 88  8       88 8   8 8   8 88  8   
                    8eee88 88ee 88ee      88   8eee8 88ee8    8ee88 8eee8 8eee8 88  8 88`;

export const bullGoodbye = `
                                                /)  (\\
                                           .-._((,~~.))_.-,
                                            °-.   @@   .-°
                                              / ,n--n. \\
                                       (''\\  ( ( .__. ) )  /'')
                                        '. ",_) '----' (_," .'
                                         "._             _. "
                                            /            \\
                                           (              )
                                           ('-.__    __.-')
                                            \\   /'--'\\   /
                                             ) /      \\ (
                                            /._\\      /_,\\
                                                     `;
