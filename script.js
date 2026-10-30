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

const photos = document.querySelectorAll(".photos, .ordiN3, .photos-page3");

photos.forEach(function(zoom) {
    zoom.addEventListener("click", function() {
        zoom.classList.toggle("agrandie");
    });
});

const bouton = document.querySelector(".play-video");
const photo = document.querySelector(".video-container img");
const video = document.querySelector(".ma-video");

if (bouton && photo && video) {

    bouton.addEventListener("click", function() {

        photo.style.display = "none";
        bouton.style.display = "none";

        video.style.display = "block";
        video.controls = true;

        video.play();

        if (video.requestFullscreen) {
            video.requestFullscreen();
        }

    });

}
