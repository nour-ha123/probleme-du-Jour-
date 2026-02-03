// 1-Écris une fonction removeByIndex qui supprime l’élément à l’index donné et retourne le nouveau tableau.

function removeByIndex(tab,index) {
   var newt = [];
   newt = newt.slice(0,index);
   return newt
}


// 2-Écris une fonction pick qui prend un objet et un tableau de clés, et retourne un nouvel objet avec seulement ces clés.
function pick(objet,tab) {
    var newo= {};
    for(var i=0; i < tab.length;i++) {
        newo[i] = objet[i];
    }
    return newo;
}




//3- Écris une fonction mostFrequent qui prend un tableau et retourne la valeur qui apparaît le plus souvent dans un tableau.

function mostFrequent(tab) {
    var res;
    
    for (var i=0; i <tab.legth; i++) {
        res = tab[i];
        var count = 0;
        for (var j=0; j <tab.legtn; j++) {
            if (res === tab[j]) {
                count++
            }
        }
    }
    return res

}