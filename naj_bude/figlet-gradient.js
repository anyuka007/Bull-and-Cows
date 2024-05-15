import figlet from "figlet";
import gradient from "gradient-string";

figlet(
    "               You won!",
    {
        font: "Standard",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 300,
        whitespaceBreak: true,
    },
    function (err, data) {
        if (err) {
            console.log("Something went wrong...");
            console.dir(err);
            return;
        }
        console.log(data);
    }
);

console.log(gradient("cyan", "pink")("Hello world!"));
let coolGradient = gradient(["#FF0000", "#00FF00", "#0000FF"]);
let coolString = coolGradient("This is a fancy string!");
console.log(coolString);
console.log(gradient.rainbow("I love gradient-strings!"));

let myString = "        Hello, World!";

// Wenden Sie figlet auf den String an, um ihn in ASCII-Art umzuwandeln
figlet(myString, function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }

    // Wenden Sie gradient auf den resultierenden String an
    console.log(gradient.rainbow(data));
});
