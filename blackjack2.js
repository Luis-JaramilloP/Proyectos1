const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. Definimos las cartas y sus valores
const mazo = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function obtenerValor(carta) {
    if (['J', 'Q', 'K'].includes(carta)) return 10;
    if (carta === 'A') return 11;
    return parseInt(carta);
}

// 2. Variables de la partida
let puntosJugador = 0;

function repartirCarta() {
    // Genera un índice aleatorio entre 0 y 12 (el tamaño del mazo)
    const indiceAleatorio = Math.floor(Math.random() * mazo.length);
    return mazo[indiceAleatorio];
}

function jugar() {
    console.clear();
    console.log("--- BIENVENIDO AL BLACKJACK ---");

    // Repartimos las dos primeras cartas
    let carta1 = repartirCarta();
    let carta2 = repartirCarta();
    
    puntosJugador = obtenerValor(carta1) + obtenerValor(carta2);

    console.log(`Tu primera carta: ${carta1}`);
    console.log(`Tu segunda carta: ${carta2}`);
    console.log(`Total de puntos: ${puntosJugador}`);

    verificarEstado();
}

function verificarEstado() {
    if (puntosJugador > 21) {
        console.log("¡TE PASASTE! Superaste los 21 puntos. Perdiste.");
        rl.close();
    } else if (puntosJugador === 21) {
        console.log("¡BLACKJACK! Tienes exactamente 21 puntos. ¡Ganaste!");
        rl.close();
    } else {
        pedirOtra();
    }
}

function pedirOtra() {
    rl.question("\n¿Quieres otra carta? (si/no): ", (respuesta) => {
        if (respuesta.toLowerCase().trim() === 'si') {
            let nuevaCarta = repartirCarta();
            puntosJugador += obtenerValor(nuevaCarta);
            
            console.log(`Nueva carta: ${nuevaCarta}`);
            console.log(`Total actual: ${puntosJugador}`);
            
            verificarEstado(); // Volvemos a revisar si se pasó de 21
        } else {
            console.log(`Te plantas con ${puntosJugador} puntos. ¡Suerte!`);
            rl.close();
        }
    });
}

// Iniciar juego
jugar();
