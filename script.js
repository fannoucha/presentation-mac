const boutons = document.querySelectorAll(".next-button, .bouton-précédent");
boutons.forEach(function(bouton) {
    bouton.addEventListener("click", function() {
        window.location.href = bouton.dataset.page;
    });
});
const button = document.querySelector(".dropdown-button");
const menu = document.querySelector(".dropdown-content");
button.addEventListener("click", function () {
    menu.classList.toggle("open");
});




const photos = document.querySelectorAll(".ordiN3, .photos-page3");
photos.forEach(function(zoom) {
    zoom.addEventListener("click", function() {
        zoom.classList.toggle("agrandie");
    });
});
