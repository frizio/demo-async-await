//

const util = require('util')
const sleep = util.promisify(setTimeout);

module.exports = {

    async taskOne() {
        await sleep(4000);
        return 'One value';
    },

    async taskTwo() {
        await sleep(2000);
        return 'Two value';
    }

}