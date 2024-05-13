import chalk from "chalk";
const log = console.log;

log(chalk.blue("Hello world!"));

// Combine styled and normal strings
log(chalk.blue("Hello") + " World" + chalk.red("!"));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold("Hello world!"));

// Nest styles
log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));

// Nest styles of the same type even (color, underline, background)
log(
    chalk.green(
        "I am a green line " +
            chalk.blue.underline.bold("with a blue substring") +
            " that becomes green again!"
    )
);

// ES2015 template literal
log(`
CPU: ${chalk.red("90%")}
RAM: ${chalk.green("40%")}
DISK: ${chalk.yellow("70%")}
`);

// Use RGB colors in terminal emulators that support it.
log(chalk.red("orange"));
log(chalk.rgb(123, 45, 67).underline("Underlined reddish color"));
log(chalk.hex("#DEADED").bold("Bold gray!"));

const name = "Sindre";
console.log(chalk.green("Hello %s"), name);
//=> 'Hello Sindre'

// Table https://nodejs.org/docs/latest/api/console.html#console_console_log_data_args

/* console.table([
    { bulls: 1, cows: 1 },
    { bulls: 1, cows: 0 },
]); */
// ┌─────────┬─────┬─────┐
// │ (index) │ a   │ b   │
// ├─────────┼─────┼─────┤
// │ 0       │ 1   │ 'Y' │
// │ 1       │ 'Z' │ 2   │
// └─────────┴─────┴─────┘

/* console.table(
    [
        { a: 1, b: "Y" },
        { a: "Z", b: 2 },
    ],
    ["a"]
); */
// ┌─────────┬─────┐
// │ (index) │ a   │
// ├─────────┼─────┤
// │ 0       │ 1   │
// │ 1       │ 'Z' │
// └─────────┴─────┘

import chalkAnimation from "chalk-animation";
import { setTimeout as pause } from "timers/promises";

/* const rainbow = chalkAnimation.rainbow("rainbow ipsum dolor sit amet");
setTimeout(() => {
    rainbow.stop(); // Animation stops
}, 3000); */

/*await pause(3000);
const pulse = chalkAnimation.pulse("pulse ipsum dolor sit amet");
setTimeout(() => {
    pulse.stop(); // Animation stops
}, 3000);
await pause(6000);
const glitch = chalkAnimation.glitch("glitch ipsum dolor sit amet");
setTimeout(() => {
    glitch.stop(); // Animation stops
}, 3000);
await pause(9000);
const radar = chalkAnimation.radar("radar ipsum dolor sit amet");

setTimeout(() => {
    glitch.stop(); // Animation stops
}, 3000);
await pause(12000);
const neon = chalkAnimation.neon("neon ipsum dolor sit amet");
// chalkAnimation.karaoke("karaoke ipsum dolor sit amet");

setTimeout(() => {
    radar.stop(); // Animation stops
}, 3000);

setTimeout(() => {
    neon.stop(); // Animation stops
}, 2000);
/* setTimeout(() => {
    rainbow.start(); // Animation resumes
}, 2000); */
// console.log("Stop");*/

// Change the animation speed using a second parameter. Should be greater than 0, default is 1.

/* chalkAnimation.rainbow("Lorem ipsum", 2); // Two times faster than default
setTimeout(() => {
    rainbow.stop(); // Animation stops
}, 3000); */

// Change the animated text seamlessly with replace()

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

stringAnimated("And how it looks like? With function");

let str = "Loading";
const rainbow = chalkAnimation.rainbow(str, 0.5);

// Add a new dot every second
setInterval(() => {
    rainbow.replace((str += "."));
}, 500);

setTimeout(() => {
    rainbow.stop(); // Animation stops
}, 5000); /* console.table([
//await pause(5000);

/* import figlet from "figlet";
console.log("gjdjkjhc");
clearTimeout;
clearInterval;
 */
