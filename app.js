//TABLAS

// REQUIRES
//const fs = require('fs'); // FILE SYSTEM Require propio de node+



const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');
let comando = argv._[0];



switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(mensaje => console.log('Listado'))
            .catch(error => console.log(error));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.cyan(archivo)}`))
            .catch(error => console.log(error));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

//const fs = require('express'); // PAQUETE QUE SE INSTALA, NO NATIVOS
//const fs = require('./path'); // Paquetes propios
/*
 */