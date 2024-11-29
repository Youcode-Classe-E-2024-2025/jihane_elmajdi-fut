import { data } from "./data.js";

let dataPlayer = JSON.parse(localStorage.getItem("dataPlayer")) || data.players;
localStorage.setItem("dataPlayer", JSON.stringify(dataPlayer));

console.log(JSON.parse(localStorage.getItem("dataPlayer")));
// Sélectionner le bouton et le formulaire
let bouton = document.querySelector(".add-i");
let formulaire = document.querySelector(".bg-form");
// Ajouter un événement au clic sur le bouton
bouton.addEventListener("click", function (e) {
  e.preventDefault();
  formulaire.classList.toggle("visible");
  // formulaire.style = "display: block";
});

let cartsTerrain = document.querySelectorAll(".cart-dans-terrain");
cartsTerrain.forEach(function (cart) {
  cart.addEventListener("click", afficheData);
});

function afficheData() {
  const container = document.querySelector(".rectangle");
  container.innerHTML = "";

  if (container.style.display === "none") {
    container.style.display = "flex";
  } else {
    container.style.display = "none";
  }

  dataPlayer.forEach((player) => {
    const image = document.createElement("div");
    image.innerHTML = `
    <div class="image">
      <img src="${player.photo}" alt="${player.name}" />
    </div>
  `;
    container.appendChild(image);
  });
}

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
