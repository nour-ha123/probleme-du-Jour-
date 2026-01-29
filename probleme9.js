// 1- Crée une fonction qui prend un tableau et retourne le nombre d’éléments pairs avec une boucle while.

function pair (t) {
    var i =0;
    var res =0;
    while(i<t.length) {
        if(t[i]%2 === 0)
            res++
        i++
    }
    return res;
}
pair([1,2,3,4,5]);

// 2- Crée une fonction qui prend un tableau et retourne un nouveau tableau contenant les éléments en ordre inverse avec une boucle for.
function inverse(t) {
    var newt = [];
    for(var i=t.length-1;i>=0;i--) {
        newt.push(t[i]);
    }
    return newt
}
inverse([1,2,3,4]);


// 3- Crée une fonction qui prend un tableau et retourne un nouveau tableau contenant seulement les nombres impairs avec une boucle while.

function impairs(t) {
    var newt=[];
    var i=0;
    while(i<t.length) {
        if (t[i]%2 !== 0) {
            newt.push(t[i]);
        }
        i++
    }
    return newt
}
impairs([1,2,3,4,5,6,7]);

// 4- Crée une fonction qui prend un tableau et retourne le nombre d’éléments positifs avec une boucle while.

function positif(t) {
    var i =0;
    var res =0;
    while (i <t.length) {
        if (t[i] > 0) {
            res++
        }
        i++
    }
    return res
}
positif([1,-2,3,-4]);

// 5- Crée une fonction qui prend un tableau et retourne un nouveau tableau contenant les éléments à l’index pair avec une boucle for.
function pairs(t) {
    var newt=[];
    var i=0;
    while(i<t.length) {
        if (i%2 === 0) {
            newt.push(t[i]);
        }
        i++
    }
    return newt
}
pairs([1,2,3,4,5,6,7]);