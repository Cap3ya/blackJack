import Joueur from "./joueur.js";
import nouveauJeuDeCartes from "./jeuDeCartes.js";

function main() {

    const jeuDeCartes = nouveauJeuDeCartes();

    const dealer = new Joueur();
    const joueur = new Joueur();

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
                "\nCompte Carte Dealer: " + dealer.compteDesPoints() +
                "\nNbr carte restantes: " + jeuDeCartes.length
            )

            const decision = prompt("Tu veux une carte ? (y/n)");
            if (decision === "y") {
                joueur.prendUneCarte(jeuDeCartes)
            }
            else if (decision === "n" || decision == null) {
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
                    alert(`${joueur.compteDesPoints()} > ${dealer.compteDesPoints()}: Tu as gagné 1x ta mise`)
                }
                else {
                    alert(`${joueur.compteDesPoints()} < ${dealer.compteDesPoints()}: Tu as perdu ta mise`)
                }
            }
        }

        const decision = prompt("Rejouer ? (y/n)");
        if (decision == "n" || decision == null) {
            break;
        }
    }
}

main()