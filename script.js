// Sélectionner le bouton et le formulaire
let bouton = document.querySelector(".add-i");
let formulaire = document.querySelector(".bg-form");
// Ajouter un événement au clic sur le bouton
bouton.addEventListener("click", function (e) {
  e.preventDefault();
  formulaire.style = "display: block";
});
//les deux formation
const formation = {
  "3-4-3": [
    { bottom: "180px", left: "285px" },
    { top: "145px", left: "430px" },
    { top: "145px", right: "430px" },
    { bottom: "500px", left: "285px" },
    { bottom: "500px", left: "110px" },
    { bottom: "500px", left: "455px" },
    { bottom: "410px", left: "288px" },
    { bottom: "350px", left: "430px" },
    { bottom: "350px", left: "140px" },
    { bottom: "250px", left: "285px" },
    { bottom: "70px", left: "285px" },
  ],
  "3-4-3": [
    { bottom: "617px", left: "340px" },
    { top: "145px", left: "480px" },
    { top: "145px", right: "480px" },
    { bottom: "500px", left: "285px" },
    { bottom: "500px", left: "110px" },
    { bottom: "500px", left: "455px" },
    { bottom: "620px", left: "230px" },
    { bottom: "350px", left: "430px" },
    { bottom: "350px", left: "140px" },
    { bottom: "250px", left: "288px" },
    { top: "70px", left: "285px" },
  ],
};
