var prompt = require('prompt-sync')();
var last = prompt("enter las named : ");
var first = prompt("enter first named : ");



console.log(genererEmail(first, last).toLowerCase);


function genererEmail(prenom, nome) {
    //nome +"." + prenom + "@entreprise.com"
    return `${nome}.${prenom}@entreprise.com`
}

