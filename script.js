const boton = document.getElementById("boton-secreto");
const carta = document.querySelector(".carta");
const textoCarta = document.getElementById("texto-carta");

const mensaje = `Hola Mi Amor 💜,

No soy muy bueno escribiendo cartas, pero hoy quería tomarme un momento para recordarte lo agradecido que estoy por tener la oportunidad de hablar contigo y, al mismo tiempo, la suerte tan grande que es poder llamarte mi amor.

Me gustas mucho, Lizbeth. Sé que te lo digo seguido, pero nunca está de más recordártelo. Gracias por ser una mujer tan maravillosa, incluso en el poco tiempo que llevamos compartiendo. Eres una chica muy tierna, muy bonita y muy amable. Tu voz es hermosa, eres muy cariñosa conmigo y haces que cada momento a tu lado se sienta especial.

Te amo, Lizbeth. Te deseo, te quiero, me encantas, me gustas… y agradezco cada segundo que pasamos juntos cada charla, cada mensaje, cada risa compartida. Sé que a veces no soy el mejor novio o no siempre soy el más cariñoso, pero prometo mejorar, por ti y por nosotros.

Te amo muchísimo.

💜 Te Amo mi Amor 💜`;

// Fechas para los contadores
const inicioHablar = new Date("2026-01-08T04:28:00");
const inicioNovios = new Date("2026-02-08T04:22:00");

boton.addEventListener("click", () => {
  carta.classList.add("abrir-carta");
  document.querySelector(".centro-pantalla").style.display = "none";
  escribirTexto();
  iniciarContadores();
  moverKuromis();
});

// Escribir texto animado
function escribirTexto() {
  let i = 0;
  const velocidad = 20;

  const intervalo = setInterval(() => {
    textoCarta.innerText = mensaje.slice(0, i);
    i++;
    if (i > mensaje.length) clearInterval(intervalo);
  }, velocidad);
}

// Contadores en tiempo real
function iniciarContadores() {
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

// Mover Kuromis a los lados
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
for (let i = 0; i < 35; i++) {
  const heart = document.createElement("div");
  heart.classList.add("heart-float");
  heart.innerText = "💜";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 5 + 5 + "s";
  heart.style.animationDelay = Math.random() * 5 + "s";

  container.appendChild(heart);
}
