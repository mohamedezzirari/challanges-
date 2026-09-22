function inverserChaine(chaine){
    let result = ""
    for (let i = chaine.length-1; i>=0;i--){

        result = result + chaine[i]
    }
    
    return result
    }
    console.log(inverserChaine("hello"));
