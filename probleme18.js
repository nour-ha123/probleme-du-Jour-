/**
 * Trouve le premier élément qui apparaît un nombre pair de fois dans un tableau.
 * N'oublie pas de gérer les éléments avec plusieurs occurrences paires et retourne le premier.
 * Retourne null s'il n'y a aucun élément avec un nombre pair d'occurrences.
 * Exemple d'utilisation :
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); // 4
 */

etape 1 : on ajoute un tableau Vide
etape 2 : boucle for pour parcourir le tableau
etape 3 : on ajoute un counter vide 
etape 4 : on calcul le nombre de repetition pour chaque element 
etape 5 : on ajout if pour voir si le counter est pair 
etape 6 : on retourn null s'il ya aucun nombre

var evenOccurrence = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for(var j = 0; j <arr.length; j++) {
      if(arr[i] === arr[j]) {
        count = count + 1;
      }
    }
    if (count % 2 === 0) {
      return arr[i]
    } 
  }
  return null
};
