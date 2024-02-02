const dom = {
  cartesJoueur: document.getElementById("cartesJoueur"),
  cartesDealer: document.getElementById("cartesDealer"),
  pointsJoueur: document.getElementById("playerscore"),
  pointsDealer: document.getElementById("dealerscore"),
  buttonHit: document.getElementById("hit"),
  buttonStand: document.getElementById("stand"),
  buttonRestart: document.getElementById("restart"),

  appendCartesJoueur(carte) {
    const root = this.cartesJoueur;
    const img = document.createElement("img");
    img.src = carte.src;
    root.appendChild(img);
  },

  appendCartesDealer(carte) {
    const root = this.cartesDealer;
    const img = document.createElement("img");
    img.src = carte.src;
    root.appendChild(img);
  },

  appendPointsJoueur(points) {
    const root = this.pointsJoueur;
    root.textContent = points;
  },

  appendPointsDealer(points) {
    const root = this.pointsDealer;
    root.textContent = points;
  },

  reset() {
    this.cartesJoueur.innerHTML = "";
    this.cartesDealer.innerHTML = "";
    this.pointsDealer.innerHTML = "";
    this.pointsJoueur.innerHTML = "";
  },
};

export default dom;
