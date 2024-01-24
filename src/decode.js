const fs = require('fs');
const readline = require('readline');

// Ruta del archivo a leer
const filePath = 'tu_archivo.txt';

// Objeto para almacenar líneas por índice
const linesByIndex = {};
const array = [];

// Crear una interfaz de lectura
const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
    crlfDelay: Infinity // Para manejar correctamente los saltos de línea en Windows
});

// Evento que se activa cuando se lee una línea
rl.on('line', (line) => {
    const [index, value] = line.trim().split(' ');
    linesByIndex[index] = value;
    array.push(index);
});