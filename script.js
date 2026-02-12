const boton = document.getElementById("boton-secreto");
const carta = document.querySelector(".carta");
const textoCarta = document.getElementById("texto-carta");
const finalRomantico = document.getElementById("final-romantico");

const mensaje = `Hola Mi Amor 💜,

No soy muy bueno escribiendo cartas, pero hoy quería recordarte lo agradecido que estoy por tenerte.

Me gustas mucho, <span class="nombre-brillo">Lizbeth</span>. Gracias por ser tan maravillosa conmigo.

Te amo muchísimo. 💜`;

boton.addEventListener("click", () => {
  document.querySelector(".centro-pantalla").style.display = "none";
  carta.classList.add("abrir-carta");
  escribirTexto();
  iniciarContadores();
});

function escribirTexto() {
  let i = 0;
  const velocidad = 35;
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = mensaje;
  const textoPlano = tempDiv.innerHTML;

  const intervalo = setInterval(() => {
    textoCarta.innerHTML = textoPlano.slice(0, i);
    i++;
    if (i > textoPlano.length) {
      clearInterval(intervalo);
      finalRomantico.classList.remove("oculto");
    }
  }, velocidad);
}

function iniciarContadores() {
const inicioHablar = new Date("2026-01-08T04:28:00");
const inicioNovios = new Date("2026-02-08T04:22:00");

  setInterval(() => {
    document.getElementById("contador-hablando").innerText = calcularTiempo(inicioHablar);
    document.getElementById("contador-novios").innerText = calcularTiempo(inicioNovios);
  }, 1000);
}

function calcularTiempo(inicio) {
  const ahora = new Date();
  const diff = ahora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  return `${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

// Lluvia de corazones
const container = document.getElementById("hearts-container");
for (let i = 0; i < 30; i++) {
  const heart = document.createElement("div");
  heart.classList.add("heart-float");
  heart.innerText = "💜";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 5 + 5 + "s";
  container.appendChild(heart);
}