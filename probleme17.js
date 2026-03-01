// Une liste de livres orientée objet !

// Créer une classe ListeDeLivres  
// Créer une autre classe appelée Livre  

// Les listes de livres doivent avoir les propriétés suivantes :
// - Nombre de livres marqués comme lus  
// - Nombre de livres marqués comme non lus  
// - Une référence vers le prochain livre à lire (objet Livre)  
// - Une référence vers le livre en cours de lecture (objet Livre)  
// - Une référence vers le dernier livre lu (objet Livre)  
// - Un tableau contenant tous les livres  

// Chaque Livre doit avoir plusieurs propriétés :
// - Titre  
// - Genre  
// - Auteur  
// - Lu (true ou false)  
// - Date de lecture : peut être vide, sinon doit être un objet JS Date()  

// Chaque ListeDeLivres doit avoir quelques méthodes :

// .ajouter(livre)  
// → doit ajouter un livre à la liste des livres.

// .terminerLivreCourant()  
// → doit marquer le livre en cours de lecture comme "lu"  
// → lui donner une date de lecture avec new Date(Date.now())  
// → changer le dernier livre lu pour être le livre qui vient d’être terminé  
// → changer le livre en cours pour être le prochain livre à lire  
// → changer la propriété "prochain livre à lire" pour être le premier livre non lu trouvé dans la liste des livres  

function Livre(Titre,Genre,Auteur) {
    liv = {};
    liv.Titre = Titre;
    liv.Genre = Genre;
    liv.Auteur = Auteur;
    liv.Lu = false;
    liv.Date = null;

    return liv;
    
}
function ListeDeLivres(){
    liste = {};
    liste.lus = 0;
    liste.nonlus = 0;
    liste.prochainLivre = null;
    liste.livreEnCours = null;
    liste.dernierLivreLu = null;
    liste.livres = [];

    liste.ajouter = ajouter;
    liste.terminerLivreCourant = terminerLivreCourant;

    return liste;

}

var ajouter = function(livre) {
    this.livres.push(livre);
    this.nonlus++;
    this.livreEnCours = livre;
    return "Livre ajouter : " + this.livre
}

var terminerLivreCourant = function() {
    this.livreEnCours.Lu = true;
    this.livreEnCours.date = Date.now();
    this.dernierLivreLu = this.livreEnCours;
    this.lus++;
    this.nonlus--;
    this.livreEnCours = this.prochainLivre;

    return "livre terminé : " + this.dernierLivreLu;
}