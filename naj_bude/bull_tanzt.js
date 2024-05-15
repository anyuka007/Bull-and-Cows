/* function randomChar() {
    const chars = ".•*:｡☆･:,｡*:･ﾟ⭐️✨";
    return chars.charAt(Math.floor(Math.random() * chars.length));
}

function animateRain() {
    const columns = process.stdout.columns || 50; // Отримати ширину консолі
    const rows = process.stdout.rows || 20; // Отримати висоту консолі
    let rain = [];

    // Ініціалізувати дощ
    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < columns; j++) {
            row += " ";
        }
        rain.push(row);
    }

    function updateRain() {
        // Переміщення дощових крапель вниз
        for (let i = rain.length - 1; i >= 0; i--) {
            for (let j = 0; j < columns; j++) {
                if (Math.random() < 0.05) {
                    rain[i] =
                        rain[i].substring(0, j) +
                        randomChar() +
                        rain[i].substring(j + 1);
                }
            }
            if (Math.random() < 0.2) {
                rain.pop();
                rain.unshift(" ".repeat(columns));
            }
        }
        // Очистити консоль та вивести дощ
        process.stdout.write("\x1Bc"); // Очистити консоль
        process.stdout.write(rain.join("\n")); // Вивести дощ
    }

    setInterval(updateRain, 500);
}

animateRain();
 */

/* const firework = ` 
               ⚝    ♥
   ☆         '       ☆       •  ☆   '     •           💥 *
                                                               '
       *                ☆'          *          💥        '
   .           ☆               |               ⚡️
               '.         |    |      '       |   '     *
                 \💥        \   \             ⚡️
       '          \     '✨ |    |  *        /☆                ☆  *
            *      ☆.       \   |     ✰     ⚡️    💥      '
  •                  \      |   \          ⚡️               ☆
  ✨'  *     '      \      \   '.       |
        -._            ☆                  ⚡️         *
  ' '      ``._   💥                           '          •      '
  ♡           ☆\✰      ✰    * .   .      *
☆  '        ♥    ✰                       •*         _..:='        ☆
             .  '      ✰       💥    *   .       _•:--'
          ☆           .     .     *         .-'         ✨
   .               '             . '   💥           ☆         •
  *       ___.-=--..-•_     *                '               '
                                  💥       ♥
                ☆        _.'  .'       '⚝        '  ✨             💥
     ☆              *_•-'   .'            .               *
                   .'                       '•_             ♥  
   '       '                        .       .  '.     •
       •                      ☆                  '
               💥        '             '                          .
     .                          ✨        .           ✨  ☆
             ☆        .                                    
     `;
 */
const test = `
     
                                                   .''.       
                       .''.      .        *''*    :_\/_:     . 
                      :_\/_:   _\(/_  .:.*_\/_*   : /\ :  .'.:.'.
                  .''.: /\ :   ./)\   ':'* /\ * :  '..'.  -=:o:=-
                 :_\/_:'.:::.    ' *''*    * '.\'/.' _\(/_'.':'.'
                 : /\ : :::::     *_\/_* /    -= o =-  /)\    '  *
                  '..'  ':::'     * /\ *     .'/.\'.   '    :
                      *   *        *..*         :           *
                        *   *       *          :           *
                        *             *        :        *
                         `;

const test2 = `
                                                                                                        
                                                                               
                                                                               
                                                                               
                                                                               
                                        *=       -=                            
                                                                               
                                         :.  *.   -                            
                               .-    .+.  #. #. =+-*-   =+                     
                        .*           :==*:.* =.+-.                             
                .       .          -%#:.*=.       ...                          
                .:      :  .:     .-++=::.       .%*-                          
         :.      -.  ..+  -.        ....          -=.  .                       
           .     .-  *  .*     =#.      ::      .%- .+-   .                    
             .: -=:= #  :   .+:     .-:  .*    .: .%+                          
         .:--  =*--:.     ..   .:==:.  .%+   --.*    -:                        
              -=-.           ..       .:  :  -= +                              
             ...            -:.   =. +%. .   ::       :. =#.      =@:          
     :=+++=-:.                ....       -        -   .  *=.%@. :+%.           
         : .*-              :-=.     *= +.     .. *%. :  *: :. =-.             
     -:     .-=:                .--.   .+      -: :#+@%: =    ..  +=           
                 =          :*.        =.      .#@-.*             #+           
              :#-     .:  .=           +        .                 :**+*@:      
            -*:   .#--:+ # : :..      .*    =#=:.:-                            
          :+.    .- . -- =- -   .:    *=       =*                   :.         
        ::            =     .:        @:      .#- -:               **=         
                    . -      :-      .@.       =##-             +-             
                  :-  :       -.     :@       =+:   -.:. =#..++ :**            
                      .        *     -#          .*. %+::@* :%-  =@:           
                               .#    -#        .#=      =@.                    
                                =-   -*       =%.       -=                     
                                .*   :*     .%=                                
                                 ==  .+    :@:                                 
                                  %.  +   :@:                                  
                                  --  -  .@-                                   
                                  .-     =+                                    
                                                                               
                                                                               
                                                                               
                                                                               `;

const bullVictory = `   


                                             /)  (\
                                        .-._((,~~.))_.-,
                                         °-.   @@   .-°
                                           / ,n--n. \
                                    (''\  ( ( .__. ) )  /'')
                                     '. ",_) '----' (_," .'
                                      "._             _. "
                                         /            \
                                        (              )
                                        ('-.__    __.-')
                                         \   /'--'\   /
                                          ) /      \ (
                                         /._\      /_,\
     `;

const bullPatterns = [
    `

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
        `,
    `
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
                                                    \\ `,
    `

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
                                                      \\ `,
];

/* const bullGoodbye = `
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
                                                     `; */

// import { setTimeout as wait } from "timers/promises";
/* console.clear();
console.log(bullPatterns[0]);
await wait(300);
console.clear();
console.log(bullPatterns[1]);
await wait(300);
console.clear();
console.log(bullPatterns[2]);
await wait(300);
console.clear();
console.log(bullPatterns[1]);
await wait(300);
console.clear();
console.log(bullPatterns[0]);
await wait(300);
console.clear();
console.log(bullPatterns[1]);
await wait(300);
console.clear();
console.log(bullPatterns[2]);
await wait(300); */

import readline from "readline-sync";

import { setTimeout as pause } from "timers/promises";
import { createSpinner } from "nanospinner";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";

import figlet from "figlet";
import gradient from "gradient-string";
import {
    bullAndCow,
    nameOfGame,
    seeYou,
    youWon,
    bullGoodbye,
} from "../text-variables.js";
import { colorizingStringChar } from "../text-utilities.js";
import { animatedHeader } from "../animated-header.js";

/*async function repeatPattern(patterns, delay) {
    while (true) {
        for (let i = 0; i < patterns.length; i++) {
            console.clear();
            console.log(patterns[i]);
            await wait(delay);
        }
    }
}

// Sie können die Funktion dann mit Ihrem Muster und Verzögerung aufrufen
repeatPattern(bullPatterns, 300); */

async function repeatPattern(patterns, delay) {
    while (true) {
        for (let i = 0; i < patterns.length; i++) {
            console.clear();
            console.log(patterns[i]);
            await pause(delay);
        }
        for (let i = patterns.length - 2; i > 0; i--) {
            console.clear();
            console.log(patterns[i]);
            await pause(delay);
        }
    }
}

// Sie können die Funktion dann mit Ihrem Muster und Verzögerung aufrufen
repeatPattern(bullPatterns, 300);

// await animatedHeader(seeYou, bullGoodbye, 300);
