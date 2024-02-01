import dom from "./dom.js";
import Joueur from "./joueur.js";
import nouveauJeuDeCartes from "./jeuDeCartes.js";

let jeuDeCartes = nouveauJeuDeCartes();
const joueur = new Joueur("joueur");
const dealer = new Joueur("dealer");

dom.bouttonsOnClick(btnTextContent => {
    switch (btnTextContent) {
        case "Start":
            start();
            break;
        case "DealTwoCards":
            dealTwoCards();
            break;
        case "Outcomes":
            outcomes();
            break;
        case "NouvelleCarte":
            nouvelleCarte();
            break;
    }
})

function start() {
    jeuDeCartes = nouveauJeuDeCartes();
    joueur.reset();
    dealer.reset();
    dom.reset();
    dom.informations.textContent = "Start"
}

function dealTwoCards() {
    joueur.prendUneCarte(jeuDeCartes);
    joueur.prendUneCarte(jeuDeCartes);

    while (dealer.points <= 17 && dealer.cartes.length < 3) {
        dealer.prendUneCarte(jeuDeCartes);
    }
    dom.informations.textContent = "Deal two cards"
}

function nouvelleCarte() {
    joueur.prendUneCarte(jeuDeCartes)
    dom.informations.textContent = "Nouvelle Carte"
}

function outcomes() {
    let outcome;

    if (joueur.points > 21) {
        outcome = 'You Lose'
    }
    else if (joueur.points == 21) {
        outcome = `Tu as gagné 1.5x ta mise`;
    }
    else {
        if (dealer.points > 21) {
            outcome = `Tu as gagné 1x ta mise`;
        }
        else {
            if (joueur.points > dealer.points) {
                outcome = `Tu as gagné 1x ta mise`;
            }
            else {
                outcome = `Tu as perdu ta mise`;
            }
        }
    }
    dom.informations.textContent = outcome;
}
