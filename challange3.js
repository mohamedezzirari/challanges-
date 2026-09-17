var prompt = require('prompt-sync')();
let  Carburant = Number(prompt("carburant : "));
let Distance = Number(prompt("distance :"));
let Consommation =Math.trunc( (Carburant / Distance) * 100)
console.log("Consommation:" + Consommation + "L/" +100+ "km")
