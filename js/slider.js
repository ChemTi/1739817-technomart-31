const sliderLeftIcon = document.querySelector(".slider-content-left-icon");
const sliderRightIcon = document.querySelector(".slider-content-right-icon");
const sliderContentPerfo = document.querySelector(".slider-content-perfo");
const sliderContentDrills = document.querySelector(".slider-content-drills");

sliderRightIcon.addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderContentPerfo.classList.add("display-none");
    sliderContentDrills.classList.remove("display-none");
});

sliderLeftIcon.addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderContentPerfo.classList.add("display-none");
    sliderContentDrills.classList.add("display-block");
});
