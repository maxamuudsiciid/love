const heart = document.getElementById("heart");

// Samee qoraalo badan oo wadnaha ah
for (let i = 0; i < 120; i++) {

    const span = document.createElement("span");
    span.className = "heart-text";
    span.innerHTML = "❤️";

    const angle = Math.random() * Math.PI * 2;
    const radius = 120 * Math.sqrt(Math.random());

    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    span.dataset.x = x;
    span.dataset.y = y;
    span.dataset.delay = Math.random() * 6;

    span.style.left = (250 + x) + "px";
    span.style.top = (250 + y) + "px";

    heart.appendChild(span);
}

function animate() {

    const items = document.querySelectorAll(".heart-text");
    const time = Date.now() / 400;

    items.forEach(item => {

        const x = parseFloat(item.dataset.x);
        const y = parseFloat(item.dataset.y);
        const d = parseFloat(item.dataset.delay);

        const move = Math.sin(time + d) * 6;

        item.style.transform =
            `translate(${move}px,${-move}px)`;

    });

    requestAnimationFrame(animate);
}

animate();

function showMessage() {

    const box = document.getElementById("messageBox");

    if (box.style.display === "block") {
        box.style.display = "none";
    } else {
        box.style.display = "block";
    }

}
