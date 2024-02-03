const dom = {
    cagnotteJoueur: document.getElementById('cagnotteJoueur'),
    miseJoueur: document.getElementById('miseJoueur'),

    cartesJoueur: document.getElementById('cartesJoueur'),
    pointsJoueur: document.getElementById('pointsJoueur'),

    cartesDealer: document.getElementById('cartesDealer'),
    pointsDealer: document.getElementById('pointsDealer'),

    informations: document.getElementById('informations'),

    buttons: document.getElementById('buttons'),
    startBtn: document.getElementById('startBtn'),
    hitBtn: document.getElementById('hitBtn'),
    standBtn: document.getElementById('standBtn'),
    doubleBtn: document.getElementById('doubleBtn'),
    restartBtn: document.getElementById('restartBtn'),
    miseBtns: document.querySelectorAll(".mBtn"),

    appendCartesJoueur(carte) {
        const root = this.cartesJoueur;
        const div = document.createElement('div');
        div.className = 'carte'
        const img = document.createElement('img');
        img.src = carte.src;
        div.appendChild(img)
        root.appendChild(div)
    },

    appendCartesDealer(carte) {
        const root = this.cartesDealer;
        const div = document.createElement('div');
        div.className = 'carte'
        const img = document.createElement('img');
        img.src = carte.src;
        div.appendChild(img)
        root.appendChild(div)
    },

    appendPointsJoueur(point) {
        const root = this.pointsJoueur;
        root.textContent = point;
    },

    appendPointsDealer(point) {
        const root = this.pointsDealer;
        root.textContent = point
    },

    buttonsOnClick(callback) {
        this.buttons.addEventListener('click', (event) => {
            callback(event.target);
        })
    },

    reset() {
        this.cartesJoueur.innerHTML = "";
        this.cartesDealer.innerHTML = "";
        this.pointsJoueur.textContent = 0;
        this.pointsDealer.textContent = 0;
        this.miseJoueur.textContent = 0
    },
}

export default dom; 