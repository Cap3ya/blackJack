import dom from "./dom.js";

class Joueur {
    constructor(name) {
        this.name = name
        this.cartes = [];
        this.points = 0;
        this.cagnotte = 1000;
    }

    prendUneCarte(jeuDeCartes) {
        const nbrCarteRestantes = jeuDeCartes.length;
        const indice = Math.floor(nbrCarteRestantes * Math.random());

        // Retire une carte du jeu de cartes
        const carte = jeuDeCartes.splice(indice, 1)[0];
        // Si carte est valeur AS
        if (carte.valeur === "as") {
            // Définir si point est 11 ou 1 selon points joueur
            if (this.points + carte.point[0] > 21) {
                carte.point = carte.point[1]; // vaut 1
            }
            else {
                carte.point = carte.point[0]; // vaut 11
            }
        }

        this.points += carte.point;
        this.cartes.push(carte);

        if (this.name === "joueur") {
            dom.appendCartesJoueur(carte)
            dom.appendPointsJoueur(this.points)

        }
        else if (this.name === "dealer") {
            dom.appendCartesDealer(carte)
            dom.appendPointsDealer(this.points)
        }
    }

    reset() {
        this.cartes = [];
        this.points = 0;
    }
}

export default Joueur;