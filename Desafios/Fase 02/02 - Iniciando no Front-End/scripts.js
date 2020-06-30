const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", () => {
        const imageName = card.getAttribute("id");
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("img").src = imageName;
    })
}

document.querySelector('.close-modal').addEventListener("click", () => {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('img').src = "";
})

document.querySelector('.maximize-modal').addEventListener("click", () => {
    document.querySelector('.modal-content').classList.add('active');
})

