const symboles = ['Cœur', 'Carreau', 'Trèfle', 'Pique'];


const valeurs = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valet', 'Dame', 'Roi', 'As'];


const jeuDeCartes = [];
const jeuDeCartes2 = jeuDeCartes;
const jeuDeCartes3 = jeuDeCartes;
const jeuDeCartes4 = jeuDeCartes;
const jeuDeCartes5 = jeuDeCartes;
const jeuDeCartes6 = jeuDeCartes;



for (const symbole of symboles) {
    for (const valeur of valeurs) {
        const carte = {
            symbole: symbole,
            valeur: valeur
        };
        jeuDeCartes.push(carte);
    }
}


console.log(jeuDeCartes6);