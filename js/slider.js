// Перфораторы и Дрели
const prevBtn = document.querySelectorAll(".slider-content-left-icon");
const nextBtn = document.querySelectorAll(".slider-content-right-icon");

const leftRadiotBtn = document.querySelectorAll(".slider-controls-left-radio");
const rightRadioBtn = document.querySelectorAll(".slider-controls-right-radio");
const containCurrent = document.querySelectorAll(".slider-controls > button");
const currentPosition = document.querySelector(".current");

const perfSlide = document.querySelector(".slider-content-perfo");
const drilsSlide = document.querySelector(".slider-content-drills");

prevBtn.forEach((item)=>{
  item.addEventListener("click", (evt)=>{
    evt.preventDefault()
    if(perfSlide.classList.contains("display-none")){
      perfSlide.classList.remove("display-none")
    }
    drilsSlide.classList.add("display-none")
})
})
nextBtn.forEach((item)=>{
  item.addEventListener("click", (evt)=>{
    evt.preventDefault()
    if(drilsSlide.classList.contains("display-none")){
      drilsSlide.classList.remove("display-none")
    }
    perfSlide.classList.add("display-none")
  })
})

// //для левого radio
// leftRadiotBtn.forEach((item)=>{
//   item.addEventListener("click", (evt)=>{
//     if(drilsSlide.classList.contains("display-none")) {
//       drilsSlide.classList.remove("display-none")
//     }
//     perfSlide.classList.add("display-none")
//   })
// })

// //для правого radio
// rightRadioBtn.forEach((item)=>{
//   item.addEventListener("click", (evt)=>{
//     if(perfSlide.classList.contains("display-none")){
//       perfSlide.classList.remove("display-none")
//     }
//     drilsSlide.classList.add("display-none")
//   })
// })

// Доставка
const btnDelivery = document.querySelector('.services-delivery a');
const btnQuarantie = document.querySelector('.services-guarantee a');
const btnCredit = document.querySelector('.services-credit a');
const blockTruck = document.querySelector(".services-truck-position");
const blockQuarantie = document.querySelector(".services-guarantee-position");
const blockCredit = document.querySelector(".services-credit-position");

btnDelivery.addEventListener("click", function (evt){
  evt.preventDefault();
  if(blockTruck.classList.contains("visually-hidden")){
    blockTruck.classList.remove("visually-hidden");
  }
  if(btnCredit.classList.contains("services--show")){
    btnCredit.classList.remove("services--show");
  }
  if(btnQuarantie.classList.contains("services--show")){
    btnQuarantie.classList.remove("services--show");
  }
  btnDelivery.classList.add("services--show");
  blockQuarantie.classList.add("visually-hidden");
  blockCredit.classList.add("visually-hidden");
})
btnQuarantie.addEventListener("click", function (evt){
  evt.preventDefault();
  if(blockQuarantie.classList.contains("visually-hidden")){
    blockQuarantie.classList.remove("visually-hidden")
  }
  if(btnCredit.classList.contains("services--show")){
    btnCredit.classList.remove("services--show");
  }
  if(btnDelivery.classList.contains("services--show")){
    btnDelivery.classList.remove("services--show");
  }
  btnQuarantie.classList.add("services--show");
  blockTruck.classList.add("visually-hidden");
  blockCredit.classList.add("visually-hidden");
})
btnCredit.addEventListener("click", function (evt){
  evt.preventDefault();
  if(blockCredit.classList.contains("visually-hidden")){
    blockCredit.classList.remove("visually-hidden")
  }
  if(btnQuarantie.classList.contains("services--show")){
    btnQuarantie.classList.remove("services--show");
  }
  if(btnDelivery.classList.contains("services--show")){
    btnDelivery.classList.remove("services--show");
  }
  btnCredit.classList.add("services--show");
  blockQuarantie.classList.add("visually-hidden")
  blockTruck.classList.add("visually-hidden")
})
