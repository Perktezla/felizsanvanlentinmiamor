// Abrir el sobre
const envelope = document.getElementById("envelope");
envelope.addEventListener("click", () => {
    envelope.classList.add("open");
    envelope.querySelector(".click-text").style.display = "none";
});

// Lluvia de corazones
const container = document.getElementById('hearts-container');
const totalHearts = 40;

for(let i = 0; i < totalHearts; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart-float');
    heart.innerText = "💜";

    heart.style.left = Math.random() * 100 + "vw";

    const size = Math.random() * 25 + 15;
    heart.style.fontSize = size + "px";

    const duration = Math.random() * 5 + 5;
    heart.style.animationDuration = duration + "s";

    heart.style.animationDelay = Math.random() * 5 + "s";

    container.appendChild(heart);
}
