// Sélectionner le bouton et le formulaire
let bouton = document.querySelector(".add-i");
let formulaire = document.querySelector(".bg-form");
// Ajouter un événement au clic sur le bouton
bouton.addEventListener("click", function (e) {
  e.preventDefault();
  formulaire.style = "display: block";
});
