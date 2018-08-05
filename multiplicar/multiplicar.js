//REQUIRES
const fs = require('fs');
const colors = require('colors');

crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La base no es un numero');
            return;
        } else if (!Number(limite)) {
            reject('El limite no es un numero');
            return;
        }
        let contenido = '';
        for (let indice = 1; indice <= limite; indice++) {
            contenido += `${base} * ${indice} = ${base*indice}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-a-la-${limite}.txt`, contenido, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}-a-la-${limite}.txt`);
        });

    });
}


let listarTabla = (base, limite) => {

    console.log('==========================='.cyan);
    console.log(`        TABLA DEL ${base}`.cyan);
    console.log('==========================='.cyan);
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('La base no es un numero');
            return;
        } else if (!Number(limite)) {
            reject('El limite no es un numero');
            return;
        }
        for (let indice = 1; indice <= limite; indice++) {
            console.log(`${base} * ${indice} = ${base*indice}\n`);
        }
    });
}

module.exports = {
    listarTabla: listarTabla,
    crearArchivo: crearArchivo
}