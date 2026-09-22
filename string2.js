function compterLettre(chaine, lettre){
    let result = 0
for (let i = 0;i<chaine.length;i++)
    if(chaine[i]===lettre)
        result++;
    return result
    
    
}
console.log(compterLettre("javascript", "a")); //3
