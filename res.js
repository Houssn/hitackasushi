let toggle = document.getElementById("toggle");
let mydiv = document.getElementById("navbar");

toggle.addEventListener("click" ,function () {
    mydiv.classList.toggle("open");
})