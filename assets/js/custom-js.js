const crossBtn = document.getElementById("cross-btn");
const popUpBanner = document.getElementById("pop-up-banner");

const crossBtn2 = document.getElementById("cross-btn-2");
const stickyBanner = document.getElementById("sticky-banner");

crossBtn.addEventListener("click", (e) => {
    popUpBanner.style.display = "none";
})

crossBtn2.addEventListener("click", (e) => {
    stickyBanner.style.display = "none";
})