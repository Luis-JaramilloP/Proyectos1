const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Variables de estado
let puntosUsuario = 0;
let victoriasUsuario = 0;
let victoriasCPU = 0;
let ronda = 1;

console.clear();
console.log("--- BIENVENIDO A CARA O SELLA (Mejor de 3) ---");

function lanzarMoneda() {
    if (victoriasUsuario === 2 || victoriasCPU === 2) {
        finalizarJuego();
        return;
    }

    console.log(`\n--- RONDA ${ronda} ---`);
    rl.question("¿Eliges 'cara' o 'sella'?: ", (eleccionUsuario) => {
        eleccionUsuario = eleccionUsuario.toLowerCase().trim();

        if (eleccionUsuario !== "cara" && eleccionUsuario !== "sella") {
            console.log("Opción no válida. Escribe 'cara' o 'sella'.");
            return lanzarMoneda(); // Repetir la pregunta
        }

        // Lógica de aleatoriedad (0 = cara, 1 = sella)
        let resultadoAleatorio = Math.floor(Math.random() * 2) === 0 ? "cara" : "sella";
        console.log(`La moneda gira en el aire y cae en... ¡${resultadoAleatorio.toUpperCase()}!`);

        if (eleccionUsuario === resultadoAleatorio) {
            console.log("¡Ganaste esta ronda! +5 puntos.");
            puntosUsuario += 5;
            victoriasUsuario++;
        } else {
            console.log("Perdiste esta ronda...");
            victoriasCPU++;
        }

        console.log(`Marcador: Tú ${victoriasUsuario} - CPU ${victoriasCPU}`);
        ronda++;

        // Siguiente ronda
        lanzarMoneda();
    });
}

function finalizarJuego() {
    console.log("\n==============================");
    if (victoriasUsuario > victoriasCPU) {
        console.log("¡FELICIDADES! Ganaste el mejor de 3.");
    } else {
        console.log("LA CPU GANA. Más suerte la próxima vez.");
    }
    console.log(`Puntos finales: ${puntosUsuario}`);
    console.log("==============================\n");
    rl.close();
}

// Iniciar el juego
lanzarMoneda();

    


