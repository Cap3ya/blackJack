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

function main() {

    bankrollDuJoueur = 1000;

    const jeuDeCartes = nouveauJeuDeCartes();

    while (true) {

        cartesDuDealer = []
        cartesDuJoueur = []

        // Donner deux cartes au joueur
        cartesDuJoueur.push(donnerUneCarte(jeuDeCartes));
        cartesDuJoueur.push(donnerUneCarte(jeuDeCartes));
        // Donner deux cartes au dealer (2eme dans la boucle)
        cartesDuDealer.push(donnerUneCarte(jeuDeCartes));

        while (true) {

            if (compteDesCartes(cartesDuJoueur) > 21) {
                break // PERDU
            }

            if (compteDesCartes(cartesDuDealer) < 17) {
                cartesDuDealer.push(donnerUneCarte(jeuDeCartes));
            }

            alert(
                "\nCompte Carte Joueur: " + compteDesCartes(cartesDuJoueur) +
                "\nCompte Carte Dealer: " + compteDesCartes(cartesDuDealer)
            )

            const decision = prompt("Tu veux une carte ? (y/n)");
            if (decision === "y") {
                cartesDuJoueur.push(donnerUneCarte(jeuDeCartes))
            }
            else if (decision === "n") {
                break; // Sortir du while
            }
            else {
                console.log("WARNING! Command " + decision + " n'existe pas.")
            }

        }


        if (compteDesCartes(cartesDuJoueur) > 21) {

            alert("Mise Perdu")
        }
        else if (compteDesCartes(cartesDuJoueur) == 21) {
            alert("Tu as gagné 1.5x ta mise !")
        }
        else if (compteDesCartes(cartesDuJoueur) > compteDesCartes(cartesDuDealer)) {
            alert("Tu as gagné 1x ta mise !")
        }
        else {
            alert("Mise Perdu")
        }

        const decision = prompt("Rejouer ? (y/n)");
        if (decision == "n") {
            break;
        }
    }
}

main()