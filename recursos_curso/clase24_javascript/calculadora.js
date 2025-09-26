// Función para sumar
function sumar(h, j) {
    return h + j;
}

// Función para restar
function restar(a, b) {
    return a - b;
}

// Función para multiplicar
function multiplicar(a, b) {
    return a * b;
}

// Función para dividir
function dividir(a, b) {
    if (b === 0) {
        return 'Error: División por cero';
    }
    return a / b;
}

// Función para obtener los datos del usuario y realizar la operación
function calcular() {
    const operacion = prompt('Elija una operación: sumar, restar, multiplicar, dividir').toLowerCase();
    const num1 = parseFloat(prompt('Ingrese el primer número:'));
    const num2 = parseFloat(prompt('Ingrese el segundo número:'));

    let resultado;

    switch (operacion) {
        case 'sumar':
            resultado = sumar(num1, num2);
            break;
        case 'restar':
            resultado = restar(num1, num2);
            break;
        case 'multiplicar':
            resultado = multiplicar(num1, num2);
            break;
        case 'dividir':
            resultado = dividir(num1, num2);
            break;
        default:
            document.getElementById('resultado').innerText = 'Operación no válida';
            return;
    }

    document.getElementById('resultado').innerText = `El resultado de la ${operacion} es: ${resultado}`;
}

// Ejecutar la función calcular
calcular();
