const mostrarTema = (tema, a, b) => {
  console.log(`${tema}, la suma de ${a} + ${b} es ${a + b}`);
};

mostrarTema("JavaScript", 2, 3);

//* setTimeout: ejecuta una función después de un tiempo en milisegundos

setTimeout(() => {
  mostrarTema("setTimeout", 2, 3);
}, 2000);

// setTimeout( mostrarTema, 2000, "Node.js", 2, 3); // A diferencia de la función anterior, esta no necesita una función anónima
//* setInmediate: ejecuta una función inmediatamente después de que el código se ejecute

console.log("Hola");
setImmediate(() => {
  mostrarTema("setImmediate", 2, 3);
});
console.log("Mundo");

// setImmediate( mostrarTema, "Node.js", 2, 3); // A diferencia de la función anterior, esta no necesita una función anónima

//* setInterval: ejecuta una función cada cierto tiempo en milisegundos (Infinito hasta que se detenga)

setInterval(() => {
  mostrarTema("setInterval", 2, 3);
}, 2000);

// setInterval( mostrarTema, 2000, "Node.js", 2, 3); // A diferencia de la función anterior, esta no necesita una función anónima






//* clearInmediate: detiene la ejecución de una función setInmediate

const id = setImmediate(() => {
  mostrarTema("setImmediate", 2, 3);
});
clearImmediate(id);

//* clearInterval: detiene la ejecución de una función setInterval

const id2 = setInterval(() => {
  mostrarTema("setInterval", 2, 3);
}
, 2000);
clearInterval(id);

//* clearTimeOut: detiene la ejecución de una función setTimeout

const id3 = setTimeout(() => {
  mostrarTema("setTimeout", 2, 3);
}, 2000);
clearTimeout(id);

