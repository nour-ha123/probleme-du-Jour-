

function each(tab, func) {
  for (var i = 0; i < tab.length; i++) {
    func(tab[i], i);
  }
}

function map(array, func) {
  var result = [];
  each(array, function (el, i) {
    result.push(func(el, i));
  });
  return result;
}


// 1 - Écrire une fonction qui prend un tableau de nombres et retourne un tableau où chaque nombre est augmenté de 10 % en utilisant map.
function nombres (num) {
  return map(num, function(el) {
      return el + (el * 10 / 100);
  })
}

// 2 - Écrire une fonction qui prend un tableau de phrases et retourne un tableau contenant le nombre de lettres de chaque phrase (sans compter les espaces) en utilisant each .
function phrases (chaine) {
  return map(chaine, function(el) {
      var phrase = el.replace(" ", "")
      return phrase.length;
  })
}


// 3 - Écrire une fonction qui prend un tableau de nombres et affiche la moyenne de tous les nombres en utilisant each .
function moyene (tab) {
  var somme = 0;
  each(tab, function(el) {
    somme = somme + el
  });
  return somme / tab.length
}

// 4 - Écrire une fonction appelée agesEnMinutes qui
//  prend en paramètre un tableau d’objets et
//  retourne un nouveau tableau d’objets après avoir converti les âges de années en minutes
//  en utilisant map.
// 
//  var personnes = [{
//        nom: {
//              prenom: 'Majd',
//            secondPrenom: 'Eddin',
//      },
//       age: 30
//       }, {
//       nom: {
//             prenom: 'Fatima',
//             nomFamille: 'Himmamy'
//        },
//        age: 26
//        }, {
//        nom: {
//              prenom: 'Sahar',
//              secondPrenom: 'MHD'
//        },
//        age: 27
//        }, {
//        nom: {
//              prenom: 'Nour',
//              secondPrenom: 'Eddin',
//        },
//        age: 15
//        }, {
//        nom: {
//              prenom: 'Ahmad',
//              nomFamille: 'Awad'
//        },
//        age: 33
//  }];
// 


function age(obj) {
  var agem = 0
  return map(obj, function(el) {
    return agem = obj.age * 365 * 1440
  })
}