function nouveauJeudeCartes() {
    const symboles = ['Cœur', 'Carreau', 'Trèfle', 'Pique'];
    const valeurs = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    
    const jeuDeCartes = [];
    
    for (const symbole of symboles) {
        for (const valeur of valeurs) {
            const carte = {
                symbole: symbole,
                valeur: valeur
            };
            jeuDeCartes.push(carte);
        }
    }

    return jeuDeCartes
}

function extraireUneCarte (jeuDeCarte) {
    const length = jeuDeCarte.length;
    const index = Math.floor( length * Math.random());

    return jeuDeCarte.splice(index, 1)[0];
}

function compteDesCartes (cartesDuJoueur) {

    const compte = cartesDuJoueur.reduce( (pre, carte) => pre + carte.value, 0)

    return compte; 
}

const jeuDeCarte = nouveauJeudeCartes();
console.log(jeuDeCarte)
const carte = extraireUneCarte(jeuDeCarte);
console.log(carte)

carteDuJoueur = []

carteDuJoueur.push(extraireUneCarte(jeuDeCarte));
carteDuJoueur.push(extraireUneCarte(jeuDeCarte));
carteDuJoueur.push(extraireUneCarte(jeuDeCarte));

console.log("Compte Manuel", carteDuJoueur[0].valeur + carteDuJoueur[1].valeur + carteDuJoueur[2].valeur)

function compteDesCartes (cartesDuJoueur) {

    return cartesDuJoueur.reduce( (pre, cur) => pre + cur.valeur, 0); 
}

console.log("Compte Function", compteDesCartes(carteDuJoueur))