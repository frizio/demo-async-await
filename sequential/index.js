//

const {taskOne, taskTwo} = require('./tasks');

async function main() {

    console.time('Misurazione tempo di esecuzione');
    const value1 = await taskOne();
    const value2 = await taskTwo();
    console.timeEnd('Misurazione tempo di esecuzione');

    console.log('Valore di ritorno di task one ' + value1);
    console.log('Valore di ritorno di task two ' + value2);
}

main();