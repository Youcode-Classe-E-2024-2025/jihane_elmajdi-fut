import { data } from "./data.js";

let dataPlayer = JSON.parse(localStorage.getItem("dataPlayer")) || data.players;
localStorage.setItem("dataPlayer", JSON.stringify(dataPlayer));

console.log(JSON.parse(localStorage.getItem("dataPlayer")));
// Sélectionner le bouton et le formulaire
let bouton = document.querySelector(".add-i");
let formulaire = document.querySelector(".bg-form");
// Ajouter un événement au clic sur le bouton
bouton.addEventListener("click", function () {
  formulaire.classList.toggle("visible");
  document.querySelector(".rectangle").style.display = "none";
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
    <div class="image click">
      <img src="${player.photo}" alt="${player.name}" class="img"/>
    </div>
  `;
    container.appendChild(image);
  });
}

const players = localStorage.getItem("dataPlayer");
let text = "";
console.log("hhhh", players);

//les deux formation//
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

//drag & drop
let element = null;

document
  .querySelector(".rectangle")
  .addEventListener("dragstart", function (e) {
    if (e.target.className == "img" || e.target.className == "image click") {
      element = e.target;
    }
  });

document.querySelectorAll(".cart-dans-terrain").forEach((item) => {
  item.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  item.addEventListener("drop", function (e) {
    e.preventDefault();
    if (element) {
      element.style.width = "100%";
      console.log(e.currentTarget.children);
      if (e.currentTarget.children.length >= 2) {
        const player = e.currentTarget.children[1];
        const elm = document.createElement("div");
        elm.className = "image click";
        elm.appendChild(player);
        document.querySelector(".rectangle").appendChild(elm);
        e.currentTarget.innerHTML = `
          <div class="remove"><i class="fa-solid fa-trash"></i></div>
        `;
      }
      e.currentTarget.appendChild(element);

      element = null;
    }
  });
});

document.getElementById("addplayer").addEventListener("click", function (e) {
  e.preventDefault();
  const name = document.getElementById("Name").value;
  const photo = document.getElementById("img").value;
  const position = document.getElementById("position").value;
  const nationality = document.getElementById("Nationality").value;
  const flag = document.getElementById("flag").value;
  const club = document.getElementById("club").value;
  const logo = document.getElementById("logo").value;
  const rating = document.getElementById("rating").value;
  const pace = document.getElementById("pace").value;
  const shooting = document.getElementById("shooting").value;
  const passing = document.getElementById("passing").value;
  const dribbling = document.getElementById("dribbling").value;
  const defending = document.getElementById("defending").value;
  const physical = document.getElementById("physical").value;

  if (
    name.trim().length == 0 ||
    photo.trim().length == 0 ||
    position.trim().length == 0 ||
    nationality.trim().length == 0 ||
    flag.trim().length == 0 ||
    club.trim().length == 0 ||
    logo.trim().length == 0 ||
    rating.trim().length == 0 ||
    pace.trim().length == 0 ||
    shooting.trim().length == 0 ||
    passing.trim().length == 0 ||
    dribbling.trim().length == 0 ||
    defending.trim().length == 0 ||
    physical.trim().length == 0
  ) {
    alert("s'il vous plait remplissez le formulaire");
  } else {
    const player = {
      name,
      photo,
      position,
      nationality,
      flag,
      club,
      logo,
      rating,
      pace,
      shooting,
      passing,
      dribbling,
      defending,
      physical,
    };

    dataPlayer.push(player);
    localStorage.setItem("dataPlayer", JSON.stringify(dataPlayer));
    afficheData();
  }
});

const removebtns = document.querySelectorAll(".remove");

removebtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.currentTarget.nextElementSibling) {
      const elm = document.createElement("div");
      elm.className = "image click";
      elm.appendChild(e.currentTarget.nextElementSibling);
      document.querySelector(".rectangle").appendChild(elm);
      e.currentTarget.parentElement.innerHTML = `
          <div class="remove"><i class="fa-solid fa-trash"></i></div>
        `;
    }
  });
});
