import chalk from "chalk";
// Funktion zur Erzeugung eines zufälligen Zeichens aus dem ASCII-Zeichenbereich 33-126 (druckbare Zeichen)
/* function randomCharacter() {
    const charCode = Math.floor(Math.random() * (126 - 33 + 1)) + 33;
    return String.fromCharCode(charCode);
} */

function randomCharacter() {
    const characters =
        " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
    return characters[Math.floor(Math.random() * characters.length)];
}

// Matrix Rain Klasse
class MatrixRain {
    constructor(columns) {
        this.columns = columns;
        this.streams = [];
        this.initializeStreams();
    }

    // Initialisiere die Streams
    initializeStreams() {
        for (let i = 0; i < this.columns; i++) {
            this.streams.push({
                column: i,
                length: Math.floor(Math.random() * 20) + 5, // Zufällige Länge des Streams
                characters: [],
            });
        }
    }

    // Fülle die Zeichen für jeden Stream
    fillStreams() {
        for (const stream of this.streams) {
            // Gelegentlich ein Leerzeichen oder das nächste Zeichen hinzufügen
            if (Math.random() > 0.8) {
                stream.characters.unshift(" ");
            } else {
                stream.characters.unshift(randomCharacter());
            }

            if (stream.characters.length > stream.length) {
                stream.characters.pop(); // Zeichen entfernen, wenn die maximale Länge überschritten ist
            }
        }
    }

    // Matrix Rain in der Konsole anzeigen
    display() {
        console.clear(); // Klar die Konsole vor jedem Zeichnen
        for (let i = 0; i < 20; i++) {
            // Anzahl der Zeilen, die in der Konsole angezeigt werden sollen
            let row = "";
            for (const stream of this.streams) {
                const character = stream.characters[i] || " ";
                row += character + " "; // Leerzeichen zwischen den Zeichen hinzufügen
            }
            console.log(chalk.green(row)); // Ausgabe der Zeile in der Konsole
        }
    }

    // Aktualisiere und zeige den Regen an
    update() {
        this.fillStreams();
        this.display();
    }
}

// Erstelle eine Instanz von MatrixRain mit 40 Spalten
const matrix = new MatrixRain(40);

// Aktualisiere den Regen alle 100 Millisekunden
setInterval(() => {
    matrix.update();
}, 100);
