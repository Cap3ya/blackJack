const dom = {
    cartesJoueur: document.getElementById('cartesJoueur'),
    cartesDealer: document.getElementById('cartesDealer'),

    appendCartesJoueur(carte) {
        const root = this.cartesJoueur;
        const img = document.createElement('img');
        img.src = carte.src;
        root.appendChild(img)
    },

    appendCartesDealer(carte) {
        const root = this.cartesDealer;
        const img = document.createElement('img');
        img.src = carte.src;
        root.appendChild(img)
    },

    reset() {
        this.cartesJoueur.innerHTML = "";
        this.cartesDealer.innerHTML = "";
    }
}

export default dom; 