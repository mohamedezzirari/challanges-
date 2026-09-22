function compterVoyelles(chaine){
    let result = 0
    //for(let chaines of chaine) 
    for (let i = 0; i <= chaine.length;i++){
        if ( chaine[i] === "a"||chaine[i] === "e"||chaine[i] === "i"||chaine[i] === "o"||chaine[i] === "u")
            result++
    }
    return result
    
}
console.log(compterVoyelles("developpeur"));
