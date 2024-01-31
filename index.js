function nouveauJeuDeCartes() {
    const enseignes = ['coeur', 'carreaux', 'trefle', 'pique'];
    const valeurs_points = [
        ["as", [11, 1] ], // vaut 11 points si possible (total < 21) sinon 1 point 
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
    const index = Math.floor(length * Math.random());

    return jeuDeCarte.splice(index, 1)[0];
}

function compteDesCartes(cartesDuJoueur) {
    return cartesDuJoueur.reduce((prev, curr) => prev + curr.valeur, 0);
}

function hasBlackjack(compteDesCartes) {
    return compteDesCartes === 21
}

function beatTheDealer(compteDesCartesJoueur, compteDesCartesDealer) {
    return compteDesCartesJoueur > compteDesCartesDealer;
}

//hasBlackjack(compteDesCartes(carteDuJoueur));
//beatTheDealer(compteDesCartes(carteDuJoueur), compteDesCartes(carteDuDealer));

function main() {

    cartesDuJoueur = []
    const jeuDeCartes = nouveauJeuDeCartes();
    while (true) {

        const decision = prompt("Tu veux une Carte ? (y/n)");
        if (decision === "y") {
            cartesDuJoueur.push(donnerUneCarte(jeuDeCartes))
        }

        else if (decision === "n" || compteDesCartes(cartesDuJoueur) > 21) {
            console.log("Bye bye");
            break;
        }

        else {
            console.log("WARNING! Command " + decision + "n'existe pas.")
        }

        console.log("Compte Carte Joueur: ", compteDesCartes(cartesDuJoueur));
        console.log("carte reçu: ", cartesDuJoueur.at(-1))
        console.log("nbr carte joueur: ", cartesDuJoueur.length)
        console.log("nbr carte jeu de cartes: ", jeuDeCartes.length)
    }
}

main()