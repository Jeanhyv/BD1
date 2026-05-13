const slides = document.querySelectorAll(".slide");
const counter = document.getElementById("counter");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentSlide = 0;

function showSlide(index) {
  if (index < 0) {
    currentSlide = 0;
  } else if (index >= slides.length) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
  });

  counter.textContent = `${currentSlide + 1} / ${slides.length}`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
    nextSlide();
  }

  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    prevSlide();
  }

  if (event.key === "Home") {
    showSlide(0);
  }

  if (event.key === "End") {
    showSlide(slides.length - 1);
  }
});

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

showSlide(currentSlide);
