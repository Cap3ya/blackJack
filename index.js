function nouveauJeudeCartes() {
    const symboles = ['Cœur', 'Carreau', 'Trèfle', 'Pique'];
    const valeurs = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    const jeuDeCartes = [];

    for (const symbole of symboles) {
        for (const valeur of valeurs) {
            const carte = {
                symbole: symbole,
                valeur: valeur
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
    const jeuDeCartes = nouveauJeudeCartes();
    while (true) {

        const decision = prompt("Tu veux une Carte ? (y/n)");
        if (decision === "y") {
            cartesDuJoueur.push(donnerUneCarte(jeuDeCartes))
            console.log("carte reçu: ", cartesDuJoueur.at(-1))
            console.log("nbr carte joueur: ", cartesDuJoueur.length)
            console.log("nbr carte jeu de cartes: ", jeuDeCartes.length)
        }

        console.log("Compte Carte Joueur: ", compteDesCartes(cartesDuJoueur));

        if (decision === "n" || compteDesCartes(cartesDuJoueur) > 21) {
            console.log("Bye bye");
            break;
        }
    }
}

main()