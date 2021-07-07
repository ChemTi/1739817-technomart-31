const contactsMap = document.querySelector(".contacts-map");
const modalMap = document.querySelector(".modal-map");
const modalCloseMap = document.querySelector(".modal-close-map");

contactsMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.add("modal-show");
});


modalCloseMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modalMap.classList.contains("modal-show")) {
        evt.preventDefault();
        modalMap.classList.remove("modal-show");
        }
    }
});