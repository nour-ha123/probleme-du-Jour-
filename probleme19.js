// commonCharacters:
/**
 *
 * Écrire une fonction qui prend deux chaînes de caractères en arguments
 * et retourne une chaîne contenant les caractères présents dans les deux chaînes
 * (sans duplication), dans l’ordre où ils apparaissent dans `a`.
 * N’oubliez pas d’ignorer les espaces et les caractères déjà rencontrés !
 *
 * Exemple : commonCharacters('acexivou', 'aegihobu')
 * Retourne : 'aeiou'
 *
 * Doit retourner null s’il n’y a aucun caractère en commun.
 *
 *
 */

entrer deux chaines sortie une chaine qui contenant les caractéres presents dans les deux chaines ou bien null
etape 1: entre comme parametres deux chaines
etape 2: ajouter un valeur resultat vide
etape 3: boucle for pour parcourir les chaines
etape 4: ajouter un valeur caractere avec le peremier caractére par defaut
etape 5: if resultat egale un caractére dans la deuxieme chaine on ajoute ce caractére a la resultat
etape 6: inserer les caractéres presents dans les deux chaines dans le valeur resultat
etape 7: retour null si il ya aucun caractére 
var commonCharacters = function(string1, string2) {
  var resultat = "";
  for(var i = 0; i< string1.length; i++){
    var caractere= string1[i];
    if(caractere !== "" && string2.includes(caractere) && !resultat.includes(caractere)){
      resultat = resultat + caractere
    }
  }
  if (resultat !== ""){
    return resultat
  }
  return null
};
