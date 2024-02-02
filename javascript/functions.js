import nouveauJeuDeCartes from "./jeuDeCartes.js";

export function start() {
    let jeuDeCartes = nouveauJeuDeCartes();
    joueur.reset();
    dealer.reset();
    dom.reset();
    dom.informations.textContent = "Start"
}

export function restart() {
    let temp = joueur.cagnotte;
    start();
    dealTwoCards()
    mBtn.forEach(btn => btn.style.display = "inline");
    hit.style.display = "none";
    outcome.style.display = "none";
    restartBtn.style.display = "none";
    mBtn.forEach(btn => {
        btn.addEventListener('click', function (event) {
            joueur.mise = parseInt(event.target.textContent.split("$")[1]);


            mBtn.forEach(btn => btn.style.display = "none");
            hit.style.display = "inline";
            outcome.style.display = "inline";
            restartBtn.style.display = "inline";

            updateCagnote(joueur.cagnotte, joueur.mise);
        });
    });

    joueur.cagnotte = temp;
}


export function dealTwoCards() {
    joueur.prendUneCarte(jeuDeCartes);
    joueur.prendUneCarte(jeuDeCartes);

    dealer.prendUneCarte(jeuDeCartes);
}

export function hit() {
    joueur.prendUneCarte(jeuDeCartes)
    dom.informations.textContent = "Nouvelle Carte"
}

export function updateCagnote(cagnotte, mise) {
    if (mise > cagnotte) {
        dom.informations.textContent = "You can't bet more than you have!";
    } else {
        let temp = cagnotte - mise;
        dom.cagnotteJoueur.innerText = temp;
    }
}

export function profitCalculator(mise, multiplicator) {
    let temps = mise * multiplicator;
    let total = joueur.cagnotte += temps;
    dom.cagnotteJoueur.innerText = total;
}

export function outcomes() {
    let outcome;
    let multiplicator

    if (joueur.points > 21) {
        outcome = 'You Lose'
        multiplicator = 0;
        profitCalculator(joueur.mise, multiplicator)
        restart();
    }
    else if (joueur.points == 21) {
        outcome = `Tu as gagné 1.5x ta mise`;
        multiplicator = 1.5;
        profitCalculator(joueur.mise, multiplicator);
        restart()
    }
    else {
        if (dealer.points > 21) {
            outcome = `Tu as gagné 1x ta mise`;
            multiplicator = 2
            profitCalculator(joueur.mise, multiplicator);
            restart();
        }
        else {
            if (joueur.points > dealer.points) {
                outcome = `Tu as gagné 1x ta mise`;
                multiplicator = 2;
                profitCalculator(joueur.mise, multiplicator);
                restart();
            }
            else {
                outcome = `Tu as perdu ta mise`;
                multiplicator = 0;
                profitCalculator(joueur.mise, multiplicator);
                restart();
            }
        }
    }
    dom.informations.textContent = outcome;
}