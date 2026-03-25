/**
 * Trouve le premier élément qui apparaît un nombre pair de fois dans un tableau.
 * N'oublie pas de gérer les éléments avec plusieurs occurrences paires et retourne le premier.
 * Retourne null s'il n'y a aucun élément avec un nombre pair d'occurrences.
 * Exemple d'utilisation :
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); // 4
 */


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




var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);

entre un tableau sortie nombre ou null 
1 : boucle for pour parcourir sur le tableau 
2 : on declare un counter
3 : boucle for pour comparer l'element actuel de la premier boucle par tous les elements du tableau
4 : if condition si la condition est vrai on augment le counter
5 : dans la deuxieme boucle on va verifier si le counter est un nombre pair sinon on retourn null 

var evenOccurrence = function(arr) {
  for (var i =0; i <arr.length; i++) {
    var count = 0;
    for (var j =0; j < arr.length; j++) {
      if(arr[i] === arr[j]) {
        count++
      }
    }
    if(count %2 === 0 && count !== 0) {
      return arr[i]
    }
  }
  return null
}