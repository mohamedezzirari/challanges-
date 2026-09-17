var prompt = require('prompt-sync')();
let partie1 = Number(prompt("partie1 :"));
let partie2 = Number(prompt("partie2 :"));
let partie3 = Number(prompt("partie3 :"));
let partie4= Number(prompt("partie4 :"));
let total = partie1 + partie2 +partie3 + partie4
let moyenne = total/4 ;
console.log("score total :"+total);
console.log("Moyenne :"+ moyenne);

