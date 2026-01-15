
// 1- Crée une fonction qui prend une heure (0–23) et retourne :
// "matin" si < 12
// "après-midi" si entre 12 et 18
// "soir" si > 18
function heure(numbre) {
    if (numbre <12) {
        return "matin"
    }
    else if (numbre >=12 && numbre <= 18) {
        return "aprés-midi"
    }
    else if (numbre> 18) {
        return "soir"
    }
}
heure(14);



// 2- Crée une fonction qui prend un score et retourne :
// "excellent" si score >= 90
// "bon" si score >= 70
// "moyen" si score >= 50
// "faible" sinon
function score(numbre) {
    if(numbre >= 90) {
        return "excellent"
    }
    else if (numbre >= 70 && numbre < 90) {
        return "bon"
    }
    else if (numbre >= 50 && numbre < 70 && numbre < 90) {
        return "moyen"
    }
    return faible
}
score(75);




// 3- Crée une fonction qui prend trois nombres et retourne le **plus petit** des trois

//sans utiliser Math.min
function petit(num1,num2,num3) {
    if (num1 > num2 && num1 >num3) {
        return num1
    }
    else if (num2>num1 && num2>num3) {
        return num2
    }
    else if (num3>num1 && num3>num2) {
        return num3
    }
}
petit(20,5,40);

