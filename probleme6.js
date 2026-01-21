

// 1- Écris une fonction factorielleN qui calcule la factorielle de n avec une boucle while.

function factorielleN (n) {
    var res = 1;
    while (n > 0) {
        res = res * n;
        n--;
    }
    return res;
}
factorielleN(3);

// 2- Écris une fonction afficheMultiplesDe3 qui prend un nombre n et affiche tous les multiples de 3 de 0 jusqu’à n.
function afficheMultiplesDe3 (n) {
    while (n > 0) {
        if (n % 3 === 0) {
            console.log(n);
        }
        n--;
    }
}
afficheMultiplesDe3(9);


// 3- Écris une fonction compteVoyelles qui prend une chaîne de caractères et compte le nombre de voyelles avec une boucle while.
function compteVoyelles(chaine) {
    var s = "aeiouy";
    var counter = 0;
    var i = 0;
    while ( i < chaine.length) {
        if (s.includes(chaine[i]) ) {
            counter++;
        }
        i++;
    }
    return counter;
   
}
compteVoyelles("ghsqaedf");
