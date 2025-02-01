document.addEventListener("DOMContentLoaded", function () {
  let images = document.querySelectorAll(".slideshow img");
  let currentIndex = 0;

  function changeSlide() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  }

  setInterval(changeSlide, 4000); // Change image every 4 seconds
});
