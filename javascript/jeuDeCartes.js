function nouveauJeuDeCartes() {

    const enseignes = ['coeur', 'carreaux', 'trefle', 'pique'];
    const valeurs_points = [
        ["as", [11, 1]], // vaut 11 points si possible (total < 21) sinon 1 point 
        ["deux", 2],
        ["trois", 3],
        ["quatre", 4],
        ["cinq", 5],
        ["six", 6],
        ["sept", 7],
        ["huit", 8],
        ["neuf", 9],
        ["dix", 10],
        ["valet", 10],
        ["dame", 10],
        ["roi", 10],
    ]

    const jeuDeCartes = [];

    for (const enseigne of enseignes) {
        for (const [valeur, point] of valeurs_points) {
            const carte = {
                enseigne: enseigne,
                valeur: valeur,
                point: point,
                href: `/images/cartes/${enseigne}-${valeur}.svg`
            };
            jeuDeCartes.push(carte);
        }
    }

    return jeuDeCartes
}

export default nouveauJeuDeCartes;