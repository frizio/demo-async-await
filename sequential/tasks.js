//

const util = require('util')
const sleep = util.promisify(setTimeout);

module.exports = {

    async taskOne() {
        try {
            throw new Error('Si è verificato un errore');
            await sleep(4000);
            return 'One value';            
        } catch (error) {
            console.log(error);
        }
    },

    async taskTwo() {
        try {
            await sleep(2000);
            return 'Two value';   
        } catch (error) {
            console.log(error);
        }
    }

}