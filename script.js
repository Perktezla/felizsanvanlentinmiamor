// Abrir la carta al click
const boton = document.getElementById("boton-secreto");
const carta = document.querySelector(".carta");

boton.addEventListener("click", () => {
  carta.classList.add("abrir-carta");
  boton.style.display = "none";
});

// Lluvia de corazones
const container = document.getElementById("hearts-container");
const totalHearts = 35;

for (let i = 0; i < totalHearts; i++) {
  const heart = document.createElement("div");
  heart.classList.add("heart-float");
  heart.innerText = "💜";

  // Posición horizontal aleatoria
  heart.style.left = Math.random() * 100 + "vw";

  // Tamaño aleatorio
  const size = Math.random() * 20 + 15;
  heart.style.fontSize = size + "px";

  // Duración animación aleatoria
  const duration = Math.random() * 5 + 5;
  heart.style.animationDuration = duration + "s";

  // Retraso inicial aleatorio
  heart.style.animationDelay = Math.random() * 10 + "s";

  container.appendChild(heart);
}
