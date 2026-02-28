/*
 en utilisant les closures, créez une fonction appelée creerCafe qui possède les propriétés et méthodes suivantes :
 cafe : une propriété représentant le nombre de cafés que votre café peut servir.
 petitGateau : une propriété représentant le nombre de petits gâteaux que votre café peut servir.

 

 Créez une fonction interne servirClient qui sert du café et des petits gâteaux au nombre de clients passé en paramètre.
*/

// Exemple :
// var starBucks = creerCafe(20,15);
// starBucks(5)  => "Nous avons servi 5 clients et il reste 15 cafés et 10 petits gâteaux"
// starBucks(10) => "Nous avons servi 10 clients et il reste 5 cafés et 0 petits gâteaux"
// starBucks(3)  => "Nous n'avons plus de petits gâteaux"

function creerCafe (cafe, petitGateau) {
    return function servirClient(clients) {
        if(cafe === 0){
            return "Nous n'avons plus de cafe"
        }
        else if(petitGateau === 0 ) {
            return "Nous n'avons plus de petits gâteaux"
        }

        cafe = cafe - clients
        petitGateau = petitGateau - clients
        return "Nous avons servi " + clients + " cliens et il reste " + cafe + " cafés et " + petitGateau + " petits gâteaux"
    }
}
