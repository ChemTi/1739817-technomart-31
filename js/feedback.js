const contactsWriteus = document.querySelector(".contacts-writeus");
const modalWriteus = document.querySelector(".modal-writeus");
const modalCloseWriteus = document.querySelector(".modal-close-writeus");
const loginForm = document.querySelector(".login-form");
const loginIconUser = document.querySelector(".login-icon-user");
const loginIconEmail = document.querySelector(".login-icon-email");

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}

contactsWriteus.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWriteus.classList.add("modal-show");  

    if (storage) {
        loginIconUser.value = storage;
        loginIconUser.focus();
    } else {
        loginIconEmail.focus();
    }
} );

modalCloseWriteus.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWriteus.classList.remove("modal-show"); 
    modalWriteus.classList.remove("modal-error");   
} );

loginForm.addEventListener("submit", function (evt) {
    if (!loginIconUser.value || !loginIconEmail.value) {
    evt.preventDefault(); 
    modalWriteus.classList.remove("modal-error");
    modalWriteus.offsetWidth = modalWriteus.offsetWidth;
    modalWriteus.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
        localStorage.setItem("name", loginIconUser.value);        
        }
    }
} );

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (modalWriteus.classList.contains("modal-show")) {
            evt.preventDefault();
            modalWriteus.classList.remove("modal-show")
        }
    }
} );