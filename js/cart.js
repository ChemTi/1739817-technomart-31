const productsBuyButton = document.querySelectorAll(".products-list-item-button-buy"); //  надо взять все элементы в псевдомассив
const continueBuyButton = document.querySelector(".button-continueshop-catalog");
const modalCloseCatalog = document.querySelector(".modal-close-catalog");
const modalCart = document.querySelector(".modal-cart");

productsBuyButton.forEach((item)=>{ // проходим циклом по коллекции элементов и вешаем на каждый элемент событие по нажатию
    item.addEventListener("click", function (evt) {
        evt.preventDefault();
    modalCart.classList.add("modal-show");
    });
})


modalCloseCatalog.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalCart.classList.remove("modal-show");
});

continueBuyButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalCart.classList.remove("modal-show");
});


window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (modalCart.classList.contains("modal-show")) {
            evt.preventDefault();
            modalCart.classList.remove("modal-show")
        }
    }
} );
