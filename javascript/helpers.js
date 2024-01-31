export function compteDesCartes(cartesDuJoueur) {
    return cartesDuJoueur.reduce((prev, curr) => prev + curr.point, 0);
}
