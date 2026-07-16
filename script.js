const heart = document.getElementById("heart");

const total = 180;

for (let i = 0; i < total; i++) {

    let t = (Math.PI * 2 * i) / total;

    let x = 16 * Math.pow(Math.sin(t), 3);
    let y = 13 * Math.cos(t)
          - 5 * Math.cos(2 * t)
          - 2 * Math.cos(3 * t)
          - Math.cos(4 * t);

    x *= 14;
    y *= 14;

    const text = document.createElement("div");
    text.className = "heart-text";
    text.innerText = "I LOVE YOU";

    text.style.left = (250 + x) + "px";
    text.style.top = (250 - y) + "px";

    text.dataset.delay = i * 0.2;

    heart.appendChild(text);
}

function animate() {

    const items = document.querySelectorAll(".heart-text");
    const time = Date.now() / 400;

    items.forEach(item => {

        const d = parseFloat(item.dataset.delay);
        const move = Math.sin(time + d) * 6;

        item.style.transform = `translate(${move}px, ${-move}px)`;

    });

    requestAnimationFrame(animate);
}

function createFlower() {

    const flower = document.createElement("div");
    flower.classList.add("flower");

    const flowers = ["🌹","🌸","🌺","🌷","💐"];

    flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.animationDuration = (3 + Math.random() * 4) + "s";

    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 7000);
}

setInterval(createFlower, 400);

animate();
