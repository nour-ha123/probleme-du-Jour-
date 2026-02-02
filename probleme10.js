 // 1 - Écris une fonction nommée removeElement qui prend un tableau et une valeur
 // en paramètres et retourne un nouveau tableau avec la première occurrence
 // de cette valeur supprimée. Si la valeur n’est pas trouvée, retourne le tableau original.
function removeElement(tab,v) {
    var newt = []
    for (var i=0; i < tab.length; i++) {
        if ( tab[i] === v) {
            newt.push(tab[i])
        }
    }
    return newt;
}



 // 2 - Écris une fonction appelée reverseStr qui prend une chaîne de caractères
 // en entrée et retourne l’inverse de chaque lettre suivie d’un nombre
 // en commençant par zéro (à résoudre avec une boucle while).
 // exemple : reverseStr('hello'); ==> "o0l1l2e3h4"

function reverseStr (chaine) {
    var i = chaine.length-1;
    var count = 0;
    var res = "";
    while(i>=0) {
        res += chaine[i]+ count;
        i--;
        count++;
    }
    return res;

}


 // 3- Écris une fonction nommée objKey qui prend un objet en paramètre
 //  et retourne un tableau contenant les clés de l’objet.
 // objKey({name:'ahmed', age:20}) ==> ['name','age']
function objKey(obj) {
    var newt = []
    for( var cle in obj) {
        newt.push(obj[cle])
    }
}


// 4- Prends un tableau et supprime chaque deuxième élément de ce tableau.
// Garde toujours le premier élément et commence à supprimer à partir de l’élément suivant.
// Exemple :
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
// removeEveryOther(myArr) ==> ['Keep', 'Keep', 'Keep']
function removeEveryOther(tab) {
    var newt = []
    for (var i=0; i< tab.length; i+=2) {
        newt.push(tab[i]);
    }
    return newt
}
