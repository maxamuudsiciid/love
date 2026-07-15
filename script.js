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

    text.dataset.x = x;
    text.dataset.y = y;
    text.dataset.delay = i * 0.2;

    heart.appendChild(text);
}

function animate() {

    const items = document.querySelectorAll(".heart-text");
    const time = Date.now() / 400;

    items.forEach(item => {

        const x = parseFloat(item.dataset.x);
        const y = parseFloat(item.dataset.y);
        const d = parseFloat(item.dataset.delay);

        const move = Math.sin(time + d) * 6;

        item.style.transform = `translate(${move}px, ${-move}px)`;
    });
  function showMessage() {

    const box = document.getElementById("messageBox");

    if (box.style.display === "none" || box.style.display === "") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }

}

    requestAnimationFrame(animate);
}

animate();
