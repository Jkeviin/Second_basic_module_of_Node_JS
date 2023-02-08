const saludar = (nombre) => {
    if(!nombre) throw new Error("No hay nombre")
    // throw lo que hace es que si se cumple la condicion, va a tirar un error, y el programa se va a detener ahi
    return `Hola ${nombre}`
}

const saludarHolaMundo = () => {
    return "Hola Mundo"
}

/* Modulo export
    Lo que hace el modulo export es que cuando se importe este archivo
    en otro archivo, se va a poder usar la funcion saludar
*/
module.exports = {
    saludar,
    saludarHolaMundo
}