
// Funzione di js che esegue il codice in esso contenuto dopo un certo tempo. Utilizza callback
// setTimeout(function()  {});

const util = require('util');
// Converte funzioni maneggiate con callback in funzioni maneggiate con promise o async-await
util.promisify(setTimeout);

module.exports = {

    async taskOne() {

        return 'One value';
    },

    async taskTwo() {

        return 'Two value';
    }

}