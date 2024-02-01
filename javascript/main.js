import dom from "./dom.js";
import Joueur from "./joueur.js";
import nouveauJeuDeCartes from "./jeuDeCartes.js";

function main() {
  const jeuDeCartes = nouveauJeuDeCartes();
  const dealer = new Joueur("dealer");
  const joueur = new Joueur("joueur");

  // Remet cartes et points à zéro
  dom.buttonDeal.addEventListener("click", (event) => {
    joueur.reset();
    dealer.reset();
    dom.reset();
  });

  dom.buttonHit.addEventListener("click", (event) => {
    if (dealer.points === 0) {
      if (joueur.points <= 21) {
        joueur.prendUneCarte(jeuDeCartes);
      }
    }
  });

  dom.buttonStand.addEventListener("click", (event) => {
    if (joueur.points === 0) {
      alert("Reprendre une carte");
    } else {
      while (dealer.points < 16) {
        dealer.prendUneCarte(jeuDeCartes);
      }
    }
  });
}

main();
