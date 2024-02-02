const dom = {
    cartesJoueur: document.getElementById('cartesJoueur'),
    cartesDealer: document.getElementById('cartesDealer'),
    pointsJoueur: document.getElementById('pointsJoueur'),
    pointsDealer: document.getElementById('pointsDealer'),
    informations: document.getElementById('informations'),
    buttons: document.getElementById('buttons'),

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

    appendPointsJoueur(point) {
        const root = this.pointsJoueur;
        root.textContent = point;
    },

    appendPointsDealer(point) {
        const root = this.pointsDealer;
        root.textContent = point
    },

    reset() {
        this.cartesJoueur.innerHTML = "";
        this.cartesDealer.innerHTML = "";
        this.pointsJoueur.textContent = 0;
        this.pointsDealer.textContent = 0;
    }
}

export default dom; 