//

const {taskOne, taskTwo} = require('./tasks');

async function main() {

    try {
        console.time('Misurazione tempo di esecuzione');
        const results = await Promise.all( [taskOne(), taskTwo()] );
        console.timeEnd('Misurazione tempo di esecuzione');

        console.log('Valore di ritorno di task one ' + results[0]);
        console.log('Valore di ritorno di task two ' + results[1]);

    } catch (error) {
        console.log(error);                
    }

}

main();