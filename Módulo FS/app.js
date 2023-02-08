// EJECUTAR UNO POR UNO LOS CODIGOS
// Las funciones al ser asincronas se ejecutan despues de las demas

const fs = require('fs');

//* LEER UN ARCHIVO
fs.readFile('./index.html', 'utf-8' , (err, data) => {
    if (err) throw err;
    console.log(data);
});

/* Expliacion de la funcion readFile:
    - El primer parametro es la ruta del archivo a leer
    - El segundo parametro es el tipo de codificacion del archivo
    - El tercer parametro es una funcion que se ejecuta cuando se termina de leer el archivo
*/

//* RENOMBRAR UN ARCHIVO
fs.rename('./index.html', './index2.html', (err) => {
    if (err) throw err;
    console.log('Archivo renombrado');
});

/* Expliacion de la funcion rename:
    - El primer parametro es la ruta del archivo a renombrar
    - El segundo parametro es la nueva ruta del archivo
    - El tercer parametro es una funcion que se ejecuta cuando se termina de renombrar el archivo
*/

//* ELIMINAR UN ARCHIVO
fs.unlink('./index.html', (err) => {
    if (err) throw err;
    console.log('Archivo eliminado');
});

/* Expliacion de la funcion unlink:
    - El primer parametro es la ruta del archivo a eliminar
    - El segundo parametro es una funcion que se ejecuta cuando se termina de eliminar el archivo
*/

//* CREAR UNA CARPETA
fs.mkdir('./carpeta', (err) => {
    if (err) throw err;
    console.log('Carpeta creada');
});

/* Expliacion de la funcion mkdir:
    - El primer parametro es la ruta de la carpeta a crear
    - El segundo parametro es una funcion que se ejecuta cuando se termina de crear la carpeta
*/

//* ELIMINAR UNA CARPETA
fs.rmdir('./carpeta', (err) => {
    if (err) throw err;
    console.log('Carpeta eliminada');
});

/* Expliacion de la funcion rmdir:
    - El primer parametro es la ruta de la carpeta a eliminar
    - El segundo parametro es una funcion que se ejecuta cuando se termina de eliminar la carpeta
*/

//* LEER UNA CARPETA
fs.readdir('./', (err, files) => {
    if (err) throw err;
    console.log(files);
});

/* Expliacion de la funcion readdir:
    - El primer parametro es la ruta de la carpeta a leer
    - El segundo parametro es una funcion que se ejecuta cuando se termina de leer la carpeta
*/

//* REEMPLAZAR CONTENIDO DE UN ARCHIVO
fs.writeFile('./index.html', 'Hola mundo', (err) => {
    if (err) throw err;
    console.log('Archivo reemplazado');
});

/* Expliacion de la funcion writeFile:
    - El primer parametro es la ruta del archivo a reemplazar
    - El segundo parametro es el contenido a reemplazar
    - El tercer parametro es una funcion que se ejecuta cuando se termina de reemplazar el archivo
*/

//* AGREGAR CONTENIDO A UN ARCHIVO
fs.appendFile('./index.html', 'Hola mundo', (err) => {
    if (err) throw err;
    console.log('Archivo modificado');
});

/* Expliacion de la funcion appendFile:
    - El primer parametro es la ruta del archivo a modificar
    - El segundo parametro es el contenido a agregar al archivo
    - El tercer parametro es una funcion que se ejecuta cuando se termina de modificar el archivo
*/

//* COPIAR UN ARCHIVO
fs.copyFile('./index.html', './index2.html', (err) => {
    if (err) throw err;
    console.log('Archivo copiado');
});

/* Expliacion de la funcion copyFile:
    - El primer parametro es la ruta del archivo a copiar
    - El segundo parametro es la ruta del archivo copia
    - El tercer parametro es una funcion que se ejecuta cuando se termina de copiar el archivo
*/


//! --------------------- EJEMPLO SIN ASYNC ---------------------
fs.readFileSync('./index.html', 'utf-8');