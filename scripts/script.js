let popupCallback = document.querySelector(".popup-callback");
let btnPopupCalculator = document.querySelector(".btn-popup-calculator");
let popupOrder = document.querySelector(".popup-order");
let btnClose = document.querySelector(".btn-close");

function showPopupOnClick() {
    popupCallback.classList.add("show");
}



btnPopupCalculator.addEventListener("click", showPopupOnClick);



btnClose.addEventListener("click", function () {
    popupCallback.classList.remove("show");
})
