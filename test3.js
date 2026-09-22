//var prompt = require('prompt-sync')();
//var n = prompt('Mode de Passe : ');
//function verifierMotDePasse(MotDePasse) {
   // if (
       // verifierMotDePasse.length >= 8 && verifierMotDePasse.includes("@")) {
         //   return true
        //}
       // else {
        //    return false
       // }
        
   // }
   // console.log(verifierMotDePasse(true));//true
   // console.log(verifierMotDePasse(false));//false /*

var prompt = require('prompt-sync')();
var n = prompt('Mode de Passe : ');
function verifierMotDePasse(MotDePasse) {
    if (MotDePasse.length >= 8 && MotDePasse.includes("@")){
        return true
    }
    return false
}
console.log(verifierMotDePasse("code@1234"+"correct"));//true
console.log(verifierMotDePasse("code1234") + "pass word uncorrect ");//false