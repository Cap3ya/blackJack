import Joueur from "./joueur.js";
import nouveauJeuDeCartes from "./jeuDeCartes.js";

function main() {

    const jeuDeCartes = nouveauJeuDeCartes();

    const dealer = new Joueur();
    const joueur = new Joueur();

    while (true) {

        // Remet cartes et points à zéro
        joueur.reset();
        dealer.reset();

        // Donner deux cartes au joueur
        joueur.prendUneCarte(jeuDeCartes);
        joueur.prendUneCarte(jeuDeCartes);

        // Donner deux cartes au dealer (2eme dans la boucle)
        dealer.prendUneCarte(jeuDeCartes);

        while (true) {

            if (joueur.points > 21) {
                break // PERDU
            }

            if (dealer.points < 17) {
                dealer.prendUneCarte(jeuDeCartes);
            }

            alert(
                "\nCompte Carte Joueur: " + joueur.points +
                "\nCompte Carte Dealer: " + dealer.points +
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

        if (joueur.points > 21) {
            alert(`${joueur.points} > 21: Tu as perdu ta mise`)
        }
        else if (joueur.points == 21) {
            alert(`${joueur.points} = 21: Tu as gagné 1.5x ta mise`)
        }
        else {
            if (dealer.points > 21) {
                alert(`Tu as gagné 1x ta mise`)
            }
            else {
                if (joueur.points > dealer.points) {
                    alert(`${joueur.points} > ${dealer.points}: Tu as gagné 1x ta mise`)
                }
                else {
                    alert(`${joueur.points} < ${dealer.points}: Tu as perdu ta mise`)
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