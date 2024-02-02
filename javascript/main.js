import dom from "./dom.js";
import Joueur from "./joueur.js";
import nouveauJeuDeCartes from "./jeuDeCartes.js";

let jeuDeCartes = nouveauJeuDeCartes();
const joueur = new Joueur("joueur");
const dealer = new Joueur("dealer");
let cagnotte = 1000;
let mise;

let current = document.getElementById("buttons");
let divCagnotte = document.createElement("div");
current.appendChild(divCagnotte);
let displayCagnotte = document.getElementById("cagnotteJoueur");
displayCagnotte.innerHTML = cagnotte;

let startBtn = document.createElement("button");
startBtn.innerText = "Start";
divCagnotte.appendChild(startBtn);

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

    dealer.prendUneCarte(jeuDeCartes);
}

function nouvelleCarte() {
    joueur.prendUneCarte(jeuDeCartes)
    dom.informations.textContent = "Nouvelle Carte"
}

function updateCagnote(cagnotte, mise) {
    
   if ( mise > cagnotte){
    console.log("You can't bet more than u have");
   }else{
    let temp;
    temp = cagnotte - mise;
    displayCagnotte.innerText = temp
}}

function profitCalculator(mise, multiplicator) {
        let temps = mise * multiplicator;
        let total =  cagnotte += temps;
        displayCagnotte.innerText = total;
}

function outcomes() {
    let outcome;
    let multiplicator

    if (joueur.points > 21) {
        outcome = 'You Lose'
        multiplicator = 0;
        profitCalculator(mise, multiplicator);
    }
    else if (joueur.points == 21) {
        outcome = `Tu as gagné 1.5x ta mise`;
        multiplicator = 1.5;
        profitCalculator(mise, multiplicator);
    }
    else {
        if (dealer.points > 21) {
            outcome = `Tu as gagné 1x ta mise`;
            multiplicator = 2
            profitCalculator(mise, multiplicator);
        }
        else {
            if (joueur.points > dealer.points) {
                outcome = `Tu as gagné 1x ta mise`;
                multiplicator = 2;
                profitCalculator(mise, multiplicator);
            }
            else {
                outcome = `Tu as perdu ta mise`;
                multiplicator = 0;
                profitCalculator(mise, multiplicator);
            }
        }
    }
    dom.informations.textContent = outcome;
}

let m1 = document.createElement("button");
m1.innerText = "$1";
m1.className = 'mBtn';

let m5 = document.createElement("button");
m5.innerText = "$5";
m5.className = 'mBtn';

let m25 = document.createElement("button");
m25.innerText = "$25";
m25.className = 'mBtn';

let m100 = document.createElement("button");
m100.innerText = "$100";
m100.className = 'mBtn';

let m500 = document.createElement("button");
m500.innerText = "$500";
m500.className = 'mBtn';

let m2500 = document.createElement("button");
m2500.innerText = "$2500";
m2500.className = 'mBtn';

let newCard = document.createElement("button")
newCard.innerText = "hit"

let stand = document.createElement("button")
stand.innerText = "stand";

let double = document.createElement("double")
double.innerText = "stand";

let outcome = document.createElement("button")
outcome.innerText = "outcome";

let restartBtn = document.createElement("button")
restartBtn.innerHTML ="Restart"

// Assume dealTwoCard is defined somewhere in your code
// dealTwoCard.style.display = "none";

startBtn.addEventListener("click", () => {
    startBtn.style.display = "none"
    divCagnotte.appendChild(m1);
    divCagnotte.appendChild(m5);
    divCagnotte.appendChild(m25);
    divCagnotte.appendChild(m100);
    divCagnotte.appendChild(m500);
    divCagnotte.appendChild(m2500);
    start();
});

let mBtn = [m1, m5, m25, m100, m500, m2500];

mBtn.forEach(btn => btn.addEventListener('click', function (event) {
    mBtn.forEach(btn => btn.style.display = "none");
    mise = parseInt(event.target.textContent.split("$")[1]);
    divCagnotte.appendChild(newCard);
    divCagnotte.appendChild(outcome);
    divCagnotte.appendChild(restartBtn);
    updateCagnote(cagnotte, mise);
    dealTwoCards()
}));

newCard.addEventListener("click", () => {
    nouvelleCarte();
})

outcome.addEventListener("click", () => {
    outcomes();
    profitCalculator(mise, multiplicator);
});

restartBtn.addEventListener("click", () => {
    joueur.reset()
    dealer.reset()
    dom.reset()
})