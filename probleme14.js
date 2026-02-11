// Utilisez les fonctions utilitaires suivantes dans vos solutions
function each(coll, f) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
}
  
function filter(array, predicate) {
    var acc = [];
    each(array, function(element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
}
  
function map(array, func) {
    var acc = [];
    each(array, function(element, i) {
      acc.push(func(element, i));
    });
    return acc;
}
  

//=======================================================================
//                                  Q1
//=======================================================================

// Écrire une fonction qui prend un tableau de chaînes en entrée
// et retourne un tableau contenant toutes ces chaînes, mais converties en majuscules.
// Résolvez cela en utilisant l'une des fonctions utilitaires les plus appropriées (each, map, filter).
// var strArr = ['hello', 'world', 'whirled', 'peas'];
// uppercaseAll(strArr); ==> [ 'HELLO', 'WORLD', 'WHIRLED', 'PEAS' ]

function uppercaseAll(arrayOfStrings) {
}

//=============================================================================
//                                  Q2
//=============================================================================

// Écrire une fonction qui prend un tableau d'objets en entrée et retourne un tableau
// contenant uniquement les pays dont la population est supérieure à 500 millions.
// Résolvez cela en utilisant l'une des fonctions utilitaires les plus appropriées (each, map, filter).
// Voici les données avec lesquelles vous allez travailler :

var data = [
    {
      country: "China",
      population: 1409517397
    },
    {
      country: "India",
      population: 1339180127
    },
    {
      country: "USA",
      population: 324459463
    },
    {
      country: "Indonesia",
      population: 263991379
    }
];
// highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]

function highestPopulation(arrayOfObjects) {
}

//=============================================================================
//                                  Q3
//=============================================================================

// Écrire une fonction halveAll qui prend un tableau de nombres en entrée et retourne un tableau
// avec tous ces nombres divisés par deux.
// Résolvez cela en utilisant l'une des fonctions utilitaires les plus appropriées (each, map, filter).
// var numsArray = [2, 6, 20, 8, 14];
// halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]

function halveAll(numbers) {
}

//=============================================================================
//                                  Q4
//=============================================================================

// Écrire une fonction appelée values qui accepte un objet en paramètre et retourne un tableau
// des valeurs de cet objet.
// Résolvez cela en utilisant l'une des fonctions utilitaires les plus appropriées (each, map, filter).
// values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];

function values(obj) {
}

//=============================================================================
//                                  Q5
//=============================================================================

// Écrire une fonction appelée shortestString qui accepte un tableau de chaînes et retourne la chaîne la plus courte.
// Résolvez cela en utilisant l'une des fonctions utilitaires les plus appropriées (each, map, filter).
// shortestString(["hii","s","longest","hi"]) ==> "s"

function shortestString(strings) {
}
