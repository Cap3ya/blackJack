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

function donneruneCarte(jeuDeCarte) {
    const length = jeuDeCarte.length;
    const index = Math.floor(length * Math.random());

    return jeuDeCarte.splice(index, 1)[0];
}

function compteDesCartes(cartesDuJoueur) {
    return cartesDuJoueur.reduce((pre, carte) => pre + carte.value, 0);
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

    carteDuJoueur = []
    const jeuDeCarte = nouveauJeudeCartes();
    while (true) {

        const decision = prompt("Tu veux une Carte ?");
        if (decision === "yes") {
            carteDuJoueur.push(donneruneCarte(jeuDeCarte))
        }

        if (decision === "no" || compteDesCartes(carteDuJoueur) > 21) {
            // PARTIE PERDU FINISH
            break;
        }
    }
}

main()