

// 1- Crée une fonction qui affiche les nombres de 0 à 10 avec while. (console.log()) :) 
function nombres() {
    var counter = 0;
    while (counter <= 10) {
        console.log(counter);
        counter = counter + 1;
    }
    return
}

nombres();


// 2- Crée une fonction qui prend un nombre et affiche les nombres de ce nombre jusqu’à 0 avec while. 
function nombres (num) {
    var counter = 0;
    while (counter = num) {
        console.log(num);
        num = num - 1;
        counter = counter + 1;
    }
    return 
}
nombres(5);



// 3- Crée une fonction qui prend un nombre et affiche "Bonjour" ce nombre de fois avec while.
function nombres (num) {
    var counter = 0;
    while (counter < num) {
        console.log("bonjour");
        counter = counter + 1;
    }
}
nombres(3);