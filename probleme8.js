// 1- Crée une fonction qui prend un nombre et retourne true s’il est pair, sinon false.

function pair (n) {
    if (n % 2 === 0) {
        return true
    }
    return false
}
pair (8);

// 2- Crée une fonction pour inverser une chaîne donnée avec une boucle for

function inverse (chaine) {
    var res =""
    for(var i=0; i < chaine.length ; i++) {
        res= chaine[i]+ res
    }
    return res
}
inverse("hello");


// 3- Crée une fonction pour supprimer le dernier élément d’un tableau et le retourner sans itérer

function tab (array) {
    return array.pop();
}
tab([1,2,3]);


// 4- Crée une fonction pour supprimer le premier élément d’un tableau et le retourner sans itérer
function tab (array) {
    return array.shift();
}
tab([1,2,3]);



// 5- Crée une fonction pour trouver le premier nombre divisible par 3 et 5 entre 1 et 50 avec une boucle while

function divisible () {
    var res = 1;

    while (res <= 50) {
        if (res %3 === 0 && res %5 === 0) {
            return res
        }
        res ++
    }
    return res
}
divisible();