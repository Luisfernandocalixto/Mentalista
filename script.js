// Devuelve el mayor número de un array
function obtenerNumeroMayor(numeros) {
    let resultado = 0;
    // Recorremos el array para obtener el valor mayor
    for (var i = 0; i < numeros.length; i++) {
        let numero = numeros[i];
        // En la primera vuelta cogemos el valor
        if (i == 0) {
            resultado = numero;
        }
        // En las demás cogemos el valor si es mayor al que tenemos
        else {
            if (numero > resultado) {
                resultado = numero;
            }
        }
    }
    // Siempre devuelve el mayor de todos
    return resultado;
}
/*  */
let numeroSecreto = parseInt(Math.random() * 1000) + 1;

let intentos = 0;
let numeroMaximo = []

while (numeroDigitado != numeroSecreto) {
    intentos++;
    var numeroDigitado = prompt('Intento: ' + intentos + '\nIngrese un número entre 1 y 1000');
    //si el numeroDigitado es igual al número secreto
    if (numeroDigitado == numeroSecreto) {
        alert("¡Acertaste! ¡Felicidades!");
    } else if (numeroDigitado > numeroSecreto) {
        alert('Te equivocaste... el número secreto es menor que ' + numeroDigitado);
        numeroMaximo.push(numeroDigitado);
    } else if (numeroDigitado < numeroSecreto) {
        alert('Te equivocaste... el número secreto es mayor ' + numeroDigitado);
        numeroMaximo.push(numeroDigitado);
    }
}
/*  */
let valor = obtenerNumeroMayor(numeroMaximo);
let muestra = document.getElementById("muestra");
muestra.style.width = 200
muestra.style.fontSize = 20
muestra.style.color = '#fff'

muestra.textContent = `El valor máximo que llevas para adivinar un número correcto es: ${valor}`
/*  */

