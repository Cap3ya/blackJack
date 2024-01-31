function nouveauJeuDeCartes() {
    const enseignes = ['coeur', 'carreaux', 'trefle', 'pique'];
    const valeurs_points = [
        ["as", [11, 1]], // vaut 11 points si possible (total < 21) sinon 1 point 
        ["deux", 2],
        ["trois", 3],
        ["quatre", 4],
        ["cinq", 5],
        ["six", 6],
        ["sept", 7],
        ["huit", 8],
        ["neuf", 9],
        ["dix", 10],
        ["valet", 10],
        ["dame", 10],
        ["roi", 10],
    ]

    const jeuDeCartes = [];

    for (const enseigne of enseignes) {
        for (const [valeur, point] of valeurs_points) {
            const carte = {
                enseigne: enseigne,
                valeur: valeur,
                point: point,
                href: `/images/cartes/${enseigne}-${valeur}.svg`
            };
            jeuDeCartes.push(carte);
        }
    }

    return jeuDeCartes
}

function donnerUneCarte(jeuDeCarte) {
    const length = jeuDeCarte.length;
    const indice = Math.floor(length * Math.random());

    const carte = jeuDeCarte.splice(indice, 1)[0];
    // Si carte est AS alors définir si point est 1 ou 11
    if (carte.valeur === "as") {
        if (compteDesCartes(cartesDuJoueur) + carte.point[0] > 21) {
            carte.point = carte.point[1];
        }
        else {
            carte.point = carte.point[0];
        }
    }

    return carte;
}

function compteDesCartes(cartesDuJoueur) {
    return cartesDuJoueur.reduce((prev, curr) => prev + curr.point, 0);
}

class Joueur {
    constructor() {
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
            if (compteDesCartes(this.cartes) + carte.point[0] > 21) {
                carte.point = carte.point[1]; // vaut 1
            }
            else {
                carte.point = carte.point[0]; // vaut 11
            }
        }
        this.cartes.push(carte);
    }

    compteDesPoints() {
        return this.cartes.reduce((prev, curr) => prev + curr.point, 0);
    }
}

function main() {

    const dealer = new Joueur();
    const joueur = new Joueur();

    const jeuDeCartes = nouveauJeuDeCartes();

    while (true) {

        // Remet cartes à zéro
        joueur.cartes = []
        dealer.cartes = []

        // Donner deux cartes au joueur
        joueur.prendUneCarte(jeuDeCartes);
        joueur.prendUneCarte(jeuDeCartes);

        // Donner deux cartes au dealer (2eme dans la boucle)
        dealer.prendUneCarte(jeuDeCartes);

        while (true) {

            if (joueur.compteDesPoints() > 21) {
                break // PERDU
            }

            if (dealer.compteDesPoints() < 17) {
                dealer.prendUneCarte(jeuDeCartes);
            }

            alert(
                "\nCompte Carte Joueur: " + joueur.compteDesPoints() +
                "\nCompte Carte Dealer: " + dealer.compteDesPoints()
            )

            const decision = prompt("Tu veux une carte ? (y/n)");
            if (decision === "y") {
                joueur.prendUneCarte(jeuDeCartes)
            }
            else if (decision === "n") {
                break; // Sortir du while
            }
            else {
                console.log("WARNING! Command " + decision + " n'existe pas.")
            }

        }


        if (joueur.compteDesPoints() > 21) {
            alert(`${joueur.compteDesPoints()} > 21: Tu as perdu ta mise`)
        }
        else if (joueur.compteDesPoints() == 21) {
            alert(`${joueur.compteDesPoints()} = 21: Tu as gagné 1.5x ta mise`)
        }
        else {
            if (dealer.compteDesPoints > 21) {
                alert(`Tu as gagné 1x ta mise`)
            }
            else {
                if (joueur.compteDesPoints() > dealer.compteDesPoints()) {
                    alert(`${joueur.compteDesPoints()} > ${dealer.compteDesPoints}: Tu as gagné 1x ta mise`)
                }
                else {
                    alert(`${joueur.compteDesPoints()} < ${dealer.compteDesPoints}: Tu as perdu ta mise`)
                }
            }
        }

        const decision = prompt("Rejouer ? (y/n)");
        if (decision == "n") {
            break;
        }
    }
}

main()