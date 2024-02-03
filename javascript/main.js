import dom from "./dom.js";
import Joueur from "./joueur.js";
import nouveauJeuDeCartes from "./jeuDeCartes.js";

let jeuDeCartes = nouveauJeuDeCartes();
const joueur = new Joueur("joueur");
const dealer = new Joueur("dealer");

// Listener

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
    dom.informations.textContent = "Allez, mise!"
}

function joueurMise(mise) {

    if (mise > joueur.cagnotte) {
        dom.informations.textContent = "Pas de bras, pas de Chocolat!";
    } else {
        joueur.addToMise(mise);
        dom.miseBtns.forEach(btn => btn.hidden = true);
        dom.hitBtn.hidden = false;
        dom.standBtn.hidden = false;
        dom.doubleBtn.hidden = false;

        joueur.prendUneCarte(jeuDeCartes);
        joueur.prendUneCarte(jeuDeCartes);
        dealer.prendUneCarte(jeuDeCartes);

        dom.informations.textContent = "This is the question.."
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
    if (joueur.mise > joueur.cagnotte) {
        dom.informations.textContent = "Pas de bras, pas de Chocolat!";
    } else {
        joueur.addToMise(joueur.mise);
        hit();
    }
}

function dealerPrendCartes() {
    dom.doubleBtn.hidden = true;
    dom.standBtn.hidden = true;
    dom.hitBtn.hidden = true;

    do {
        dealer.prendUneCarte(jeuDeCartes);
    } while (Math.random() > dealer.points / 21)

    outcomes();
}

function outcomes() {
    let outcome;

    if (joueur.points > 21) {
        outcome = "Tu as perdu $" + joueur.mise;
    }
    else if (joueur.points == 21) {
        if (dealer.points == 21) {
            if (dealer.cartes.length < joueur.cartes.length) {
                outcome = "Tu as perdu $" + joueur.mise;
            }
            else if (dealer.cartes.length == joueur.cartes.length) {
                outcome = "Tu es remboursé $" + joueur.mise;
                joueur.addToCagnotte(joueur.mise);
            }
            else {
                outcome = "Tu as gagné $" + (joueur.mise * 3 / 2);
                joueur.addToCagnotte((1 + 1.5) * joueur.mise);
            }
        }
        else {
            outcome = "Tu as gagné $" + (joueur.mise * 3 / 2);
            joueur.addToCagnotte((1 + 1.5) * joueur.mise);
        }
    }
    else {
        if (dealer.points > 21) {
            outcome = "Tu as gagné $" + joueur.mise;
            joueur.addToCagnotte(2 * joueur.mise);
        }
        else {
            if (joueur.points > dealer.points) {
                outcome = "Tu as gagné $" + joueur.mise;
                joueur.addToCagnotte(2 * joueur.mise);
            }
            else if (joueur.points == dealer.points) {
                outcome = "Tu es remboursé $" + joueur.mise;
                joueur.addToCagnotte(joueur.mise);
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
