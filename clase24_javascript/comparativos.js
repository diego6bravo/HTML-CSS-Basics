let x = '6';
let y = 6;

let resultado = document.getElementById('resultado');
let resultadoEstricto = document.getElementById('resultadoEstricto');

if (x == y) {
    resultado.innerText = 'x es igual a y'; // Esto se imprimirá porque '5' se convierte a 5
} else {
    resultado.innerText = 'x no es igual a y';
}

if (x === y) {
    resultadoEstricto.innerText = 'x es estrictamente igual a y'; // Esto no se imprimirá porque los tipos son diferentes
} else {
    resultadoEstricto.innerText = 'x no es estrictamente igual a y';
}
