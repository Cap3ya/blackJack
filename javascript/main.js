import dom from "./dom.js";
import Joueur from "./joueur.js";
import nouveauJeuDeCartes from "./jeuDeCartes.js";

let jeuDeCartes = nouveauJeuDeCartes();
const joueur = new Joueur("joueur");
const dealer = new Joueur("dealer");

// faire func double
//faire func stand
// Dealer after hit or stand
// Outcomes 

dom.buttonsOnClick(target => {

    switch (target.textContent) {
        case "Start":
            start();
            break;

        case "Hit":
            hit();
            break;

        case "Stand":
            stand();
            break;

        case "Double":
            double()
            break;

        case "Outcome":
            outcomes();
            break;

        case "Restart":
            start();
            break;
    }

    /* miseBtns */
    if (/^\$/.test(target.textContent)) {
        const mise = parseInt(target.textContent.split("$")[1]);
        joueurMise(mise)
    }
})

// Functions 

function start() {

    if (jeuDeCartes.length < 10) {
        jeuDeCartes = nouveauJeuDeCartes();
    }

    joueur.reset(); //points et cartes
    dealer.reset(); //points et cartes
    dom.reset(); //points et cartes

    dom.startBtn.hidden = true;
    dom.restartBtn.hidden = true;
    dom.miseBtns.forEach(btn => btn.hidden = false);
}

function joueurMise(mise) {

    if (mise > joueur.cagnotte) {
        dom.informations.textContent = "You can't bet more than you have!";
    } else {
        joueur.setMise(mise);
        dom.miseBtns.forEach(btn => btn.hidden = true);
        dom.hitBtn.hidden = false;
        dom.standBtn.hidden = false;
        dom.doubleBtn.hidden = false;

        joueur.prendUneCarte(jeuDeCartes);
        joueur.prendUneCarte(jeuDeCartes);
        dealer.prendUneCarte(jeuDeCartes);
    }

}

function hit() {
    joueur.prendUneCarte(jeuDeCartes)

    if (joueur.points >= 21) {
        dealerPrendCartes()
    }
}

function stand() {
    dealerPrendCartes();
}

function double() {
    joueur.setMise(joueur.mise * 2);
    joueur.prendUneCarte(jeuDeCartes);

    if (joueur.points >= 21) {
        dealerPrendCartes()
    }
}

function dealerPrendCartes() {
    dom.doubleBtn.hidden = true;
    dom.standBtn.hidden = true;
    dom.hitBtn.hidden = true;

    while (dealer.points < 17) {
        dealer.prendUneCarte(jeuDeCartes);
    }

    outcomes();
}

function outcomes() {
    let outcome;

    if (joueur.points > 21) {
        outcome = "Tu as perdu $" + joueur.mise;
    }
    else if (joueur.points == 21) {
        if (dealer.points == 21) {
            outcome = "Tu es remboursé $" + joueur.mise;
            joueur.setCagnotte(joueur.mise);
        }
        outcome = "Tu as gagné $" + (joueur.mise * 3 / 2);
        joueur.setCagnotte((1 + 1.5) * joueur.mise);
    }
    else {
        if (dealer.points > 21) {
            outcome = "Tu as gagné $" + joueur.mise;
            joueur.setCagnotte(2 * joueur.mise);
        }
        else {
            if (joueur.points > dealer.points) {
                outcome = "Tu as gagné $" + joueur.mise;
                joueur.setCagnotte(2 * joueur.mise);
            }
            else if (joueur.points == dealer.points) {
                outcome = "Tu es remboursé $" + joueur.mise;
                joueur.setCagnotte(joueur.mise);
            }
            else {
                outcome = "Tu as perdu $" + joueur.mise;
            }
        }
    }
    dom.informations.textContent = outcome;
    restart()
}

function restart() {
    dom.hitBtn.hidden = true;
    dom.standBtn.hidden = true;
    dom.doubleBtn.hidden = true;
    dom.restartBtn.hidden = false;
}
