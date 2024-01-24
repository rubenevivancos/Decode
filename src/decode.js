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

// Evento que se activa cuando se completa la lectura del archivo
rl.on('close', () => {
    console.log('Valores asignados a índices:', linesByIndex);

    // Ordenar el array de menor a mayor
    array.sort((a, b) => a - b);

    // Crear un nuevo array con elementos como una piramide de menor a mayor: INICIO
    const newArray = [];
    
    let a = 0; 
    let b = 1; 
    let suma = 1;
    while (b <= array.length) {
        newArray.push(array.slice(a, b).join(" "));
        suma++;
        a = b; 
        b = b + suma;
    } 
    console.log(newArray);
    // Crear un nuevo array con elementos como una piramide de menor a mayor: FIN

    // Acceder a un valor por su índice
    const indiceDeseado = 5;
    if (linesByIndex[indiceDeseado]) {
        console.log(`Valor en el índice ${indiceDeseado}:`, linesByIndex[indiceDeseado]);
        console.log("array --> " + array);
    } else {
        console.log(`Índice ${indiceDeseado} no encontrado.`);
    }
});