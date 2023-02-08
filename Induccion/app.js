// Importar el módulo
const saludos = require('./saludos') // Estamos requiriendo el archivo saludo.js (Un modulo)

/* Para importar un solo elemento del modulo
    const { saludar } = require('./saludos')

    console.log(saludar("Kevin"))       */

// Llamamos a la funcion saludar
console.log(saludos.saludar("Kevin"))
console.log(saludos.saludarHolaMundo())

