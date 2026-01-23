
// 1- Écris une fonction puissanceQuiAffiche qui prend deux nombres base et puissance et affiche toutes les puissances de base de 1 à puissance.
function puissanceQuiAffiche (base, puissance) {
    var res =1;
    for(var i= 0; i <=puissance; i++) {
        res= res*base;
    }
    console.log (res);

}
puissanceQuiAffiche(3,2);


// 2- Écris une fonction afficheDiviseurs qui prend un nombre n et affiche tous ses diviseurs.
function afficheDiviseurs(n) {
    for (var i=1;i<=n;i++) {
        if(i%n === 0) {
            console.log(i);
        }
    }
}
afficheDiviseurs(9);



// 3- Écris une fonction afficheNombresImpaire qui prend un nombre n et affiche tous les nombres impairs de 1 à n.
function afficheNombresImpaire(n) {
    for (var i=1;i<n;i++) {
        if(i%2 != 0) {
            console.log(i);
        }
    }
}
afficheNombresImpaire(9);


// 4- Écris une fonction afficheMotInverse qui prend une chaîne de caractères et affiche les lettres dans l’ordre inverse.
function afficheMotInverse (chaine) {
    var res ="";
    for(var i=chaine.length -1;i>=0;i--) {
        res += chaine[i];
    }
    console.log(res);
}
afficheMotInverse("hello");