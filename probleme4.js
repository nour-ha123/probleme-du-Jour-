// 1- Crée une fonction qui prend deux nombres et retourne :
// "égaux" s’ils sont identiques
// "différents" sinon
function identique(num1,num2) {
    if (num1 === num2) {
        return "égaux"
    }
    return "différents"
}
identique(10,10)




// 2- Crée une fonction qui prend une chaîne et retourne true
// si elle est vide, sinon false
function vide(string) {
    if (string === "") {
        return true
    }
    return false
}




// 3- Crée une fonction qui prend une vitesse et retourne :
// "lent" si inférieure à 30
// "normal" si entre 30 et 90
// "rapide" si supérieure à 90
function vitesse(num) {
    if (num < 30) {
        return "lent"
    }
    else if (num >= 30 && num <= 90) {
        return "normal"
    }
    else (num > 90) 
        return "rapide"
}





// 4- Crée une fonction qui prend un nombre et retourne true
// s’il est divisible par 2 OU par 3
// MAIS PAS par les deux en même temps

function divisible(num1) {
    if (num1 % 2 === 0 || num1 % 3 === 0 ) {
        return true
    }
    return false
}
