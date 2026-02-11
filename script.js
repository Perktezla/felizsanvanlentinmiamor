// Abrir la carta al click
const boton = document.getElementById("boton-secreto");
const carta = document.querySelector(".carta");

boton.addEventListener("click", () => {
  carta.classList.add("abrir-carta");
  boton.parentElement.style.display = "none"; // Oculta Kuromi + botón
});

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
  heart.style.animationDelay = Math.random() * 10 + "s";

  container.appendChild(heart);
}
