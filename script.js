// 1️⃣ Abrir la carta al click
const boton = document.getElementById("boton-secreto");
const carta = document.querySelector(".carta");

boton.addEventListener("click", () => {
  // Añadimos clase que activa animación de carta
  carta.classList.add("abrir-carta");

  // Ocultamos botón
  boton.style.display = "none";
});

// 2️⃣ Animación de brillo/fade-in de carta
// Se activa al añadir la clase 'abrir-carta' en CSS
// Lluvia de corazones
const container = document.getElementById("hearts-container");
const totalHearts = 35; // cantidad de corazones

for (let i = 0; i < totalHearts; i++) {
  const heart = document.createElement("div");
  heart.classList.add("heart-float");
  heart.innerText = "💜";

  // Posición horizontal aleatoria
  heart.style.left = Math.random() * 100 + "vw";

  // Tamaño aleatorio
  const size = Math.random() * 20 + 15;
  heart.style.fontSize = size + "px";

  // Duración de caída aleatoria
  const duration = Math.random() * 5 + 5;
  heart.style.animationDuration = duration + "s";

  // Retraso inicial aleatorio
  heart.style.animationDelay = Math.random() * 5 + "s";

  container.appendChild(heart);
}
