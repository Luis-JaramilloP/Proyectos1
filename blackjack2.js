const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let puntos = 0; // La variable inicial
rl.question("¿Quieres otra carta? (si/no): ", (respuesta) => {
    
    if (respuesta.toLowerCase() === "si") {
        console.log("¡Repartiendo carta...!");
        // Aquí iría tu lógica para sumar más puntos
    } else {
        console.log("Te has plantado con " + puntos + " puntos.");
    }

    rl.close(); // ¡Importante! Esto cierra la terminal para que no se quede "colgada"
});

// Función que calcula el valor de cualquier carta
function valorCarta(carta) {
    // Si la carta es J, Q o K, vale 10
    if (carta === 'J' || carta === 'Q' || carta === 'K') {
        return 10;
    } 
    // Si la carta es un As (A), (por ahora diremos que vale 11)
    else if (carta === 'A') {
        return 11;
    } 
    // Si es un número (2, 3, 4... 10), vale ese mismo número
    else {
        return parseInt(carta); // parseInt convierte el texto a número
    }
}

// --- Funcionamiento ---

let primeraCarta = '7';
let segundaCarta = 'K';

// Sumamos los valores a tu variable de puntos
puntos += valorCarta(primeraCarta); 
puntos += valorCarta(segundaCarta);

console.log("Tus puntos son: " + puntos); // Mostrará: 17
