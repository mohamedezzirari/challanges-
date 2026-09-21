let prompt = require('prompt-sync')();
let i =0;
do { 

console.log( "1 → Afficher le profil\n",
    "2 → Afficher les paramètres\n",
    "3 → Afficher les notifications\n",
    "4 → Se déconnecter\n");
    
    
let choix = Number(prompt("choice :"))

    switch (choix) {
        case 1:
            console.log("Ouverture les profil")
            
            break;
        case 2:
            console.log("Ouverture les paramètres")
            break;
        case 3:
            console.log("Ouverture les notifications")
            break;
        case 4:
            console.log("déconnected")
            break;
        default:
            choix = "Choix invalide."
            console.log("Choix invalide.")
    }} while (i>=4)

            
 










