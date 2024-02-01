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

  // while (true) {
  //   if (joueur.points > 21) {
  //     break; // PERDU
  //   }

  //   if (dealer.points < 17) {
  //     dealer.prendUneCarte(jeuDeCartes);
  //   }

  //   if (joueur.points > 21) {
  //     alert(`${joueur.points} > 21: Tu as perdu ta mise`);
  //   } else if (joueur.points == 21) {
  //     alert(`${joueur.points} = 21: Tu as gagné 1.5x ta mise`);
  //   } else {
  //     if (dealer.points > 21) {
  //       alert(`Tu as gagné 1x ta mise`);
  //     } else {
  //       if (joueur.points > dealer.points) {
  //         alert(`${joueur.points} > ${dealer.points}: Tu as gagné 1x ta mise`);
  //       } else {
  //         alert(`${joueur.points} < ${dealer.points}: Tu as perdu ta mise`);
  //       }
  //     }
  //   }
  // }
}

main();
