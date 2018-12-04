//

const util = require('util')
const sleep = util.promisify(setTimeout);

module.exports = {

    async taskOne() {
        try {
            await sleep(1000);
            return 'One value';            
        } catch (error) {
            console.log(error);
        }
    },

    async taskTwo() {
        try {
            await sleep(3000);
            return 'Two value';   
        } catch (error) {
            console.log(error);
        }
    }

}