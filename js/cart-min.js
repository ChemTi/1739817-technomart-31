const productsBuyButton=document.querySelectorAll(".products-list-item-button-buy"),continueBuyButton=document.querySelector(".button-continueshop-catalog"),modalCloseCatalog=document.querySelector(".modal-close-catalog"),modalCart=document.querySelector(".modal-cart");productsBuyButton.forEach(t=>{t.addEventListener("click",function(t){t.preventDefault(),modalCart.classList.add("modal-show")})}),modalCloseCatalog.addEventListener("click",function(t){t.preventDefault(),modalCart.classList.remove("modal-show")}),continueBuyButton.addEventListener("click",function(t){t.preventDefault(),modalCart.classList.remove("modal-show")}),window.addEventListener("keydown",function(t){27===t.keyCode&&modalCart.classList.contains("modal-show")&&(t.preventDefault(),modalCart.classList.remove("modal-show"))});