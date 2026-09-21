var prompt = require('prompt-sync')();
var title  = prompt('title :');
var nom = prompt('nom :');
function salutClient(nom,title){
        return `bonjour ${title} ${nom}.`



}
console.log(salutClient(nom,title || "client" ));


