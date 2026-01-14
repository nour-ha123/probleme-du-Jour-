// 1- Crée une fonction qui prend un nombre et retourne "positif", "négatif" ou "zéro" selon sa valeur.

function valeur (nombre) {
    if(nombre > 0) {
        return "positif"
    }
    else if (nombre < 0) {
        return "négatif"
    }
    return "zéro"
}
valeur(2);



// 2- Crée une fonction qui prend un nombre et retourne "divisible par 3", "divisible par 5" ou "autre" selon le cas.

function divisible(nombre) {
    if(nombre/3 === 3) {
        return "divisible par 3"
    }
    else if (nombre/5 === 5) {
        return "divisible par 5"
    }
    return "autre"
}
divisible(9);




// 3- Crée une fonction qui prend deux nombres et retourne le plus grand des deux.

function grand(num1,num2) {
    if(num1 > num2) {
        return num1
    }
    return num2
}
grand(2,4);


// 4- Crée une fonction qui prend une note (0 à 20) et retourne "réussi" si la note est >= 10, sinon "échoué".
function note(numbre) {
    if(numbre >= 10) {
        return "réussi"
    }
    return "échoué"
}
note(11);