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

    requestAnimationFrame(animate);
}

animate();

function toggleMessage() {
    document.querySelector(".message-box").classList.toggle("open");
}

function showMessage() {
    const box = document.getElementById("messageBox");

    if (box.style.display === "none" || box.style.display === "") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}
