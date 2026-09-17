var prompt = require('prompt-sync')();
let duree = Number(prompt("duree : "));
let categorie="";
if (duree<60){
    categorie="court metrage";
}else if (duree<=120){
    categorie="film standard";
}else{
    categorie="film long";
}
console.log("duree: " + duree + "minutes");
console.log("categorie :"+ categorie);





/*Less than 60 minutes →Court métrage
From 60 to 120 minutes →Film standard
Over 120 minutes →Film long*/