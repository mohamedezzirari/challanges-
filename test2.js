var prompt = require('prompt-sync')();
var n = Number(prompt('add a number : '));

function additionnerTout(...args) {
    let additionnerTout = 0
    for (let arg of args)

        additionnerTout += arg



    return additionnerTout


}
let total = additionnerTout(10, 20, 30, n)




console.log("Total :" + total);
