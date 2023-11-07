// Récupérez le bouton par sa classe
const boutonLevel = document.querySelector(".boutonlevel");

// Récupérez l'élément image et le compteur
const image = document.getElementById("image");
let compteur = document.getElementById("compteur");
let facteurDeMultiplication = 2;

let nombreDeClics = 0; // Initialisez le compteur à 0

// Mise à jour de la couleur du bouton en fonction du compteur
function mettreAJourCouleurBouton() {
  if (nombreDeClics >= 10) {
    boutonLevel.classList.remove("gris");
    boutonLevel.classList.add("blanc");
  } else {
    boutonLevel.classList.remove("blanc");
    boutonLevel.classList.add("gris");
  }
}

boutonLevel.addEventListener("click", function () {
  if (nombreDeClics >= 10) {
    nombreDeClics = nombreDeClics - 10;
    compteur.textContent = nombreDeClics;
    mettreAJourCouleurBouton();
    ameliorationCompteur();
  }
});

function ameliorationCompteur() {
  nombreDeClics++;
}

// Ajoutez un gestionnaire d'événement de clic sur l'image
image.addEventListener("click", function () {
  ameliorationCompteur(); // Incrémentation du compteur
  compteur.textContent = nombreDeClics; // Met à jour l'affichage du compteur
  mettreAJourCouleurBouton(); // Met à jour la couleur du bouton
});

// Appeler la fonction initiale pour définir la couleur du bouton au chargement de la page
mettreAJourCouleurBouton();
