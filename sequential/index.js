//

const {taskOne, taskTwo} = require('./tasks');

async function main() {

    const value1 = await taskOne();
    const value2 = await taskTwo();

    console.log('Valore di ritorno di task one ' + value1);
    console.log('Valore di ritorno di task two ' + value2);
}
