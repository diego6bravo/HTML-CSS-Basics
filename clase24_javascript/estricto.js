
    'use strict'
    let saludo = 'hola';
    function saludar() {
        mensaje = 'Buenos dias'; // Esto debería causar un error en modo estricto
        console.log(saludo + mensaje);
    }
    saludar();

