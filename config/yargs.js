const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('crear', 'Gemera un archivo con la tabla de multiplicar', options)
    .command('listar', 'Imprime en consola la tabla de multiplicar', options)
    .help()
    .argv;

module.exports = {
    argv: argv
}