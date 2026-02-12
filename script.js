const boton = document.getElementById("boton-secreto");
const carta = document.querySelector(".carta");

boton.addEventListener("click", () => {
  carta.classList.add("abrir-carta");
  boton.style.display = "none";
  moverKuromis();
});

function moverKuromis() {
  const kuromiOriginal = document.querySelector(".kuromi-top");
  kuromiOriginal.style.display = "none";

  const kuromiIzq = document.createElement("img");
  kuromiIzq.src = "Kuromi1.png";
  kuromiIzq.classList.add("kuromi-lateral", "izquierda");

  const kuromiDer = document.createElement("img");
  kuromiDer.src = "Kuromi1.png";
  kuromiDer.classList.add("kuromi-lateral", "derecha");

  document.body.appendChild(kuromiIzq);
  document.body.appendChild(kuromiDer);
}

// Lluvia de corazones
const container = document.getElementById("hearts-container");
const totalHearts = 35;

for (let i = 0; i < totalHearts; i++) {
  const heart = document.createElement("div");
  heart.classList.add("heart-float");
  heart.innerText = "💜";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 5 + 5 + "s";
  heart.style.animationDelay = Math.random() * 5 + "s";

  container.appendChild(heart);
}
