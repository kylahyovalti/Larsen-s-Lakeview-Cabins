let currentSlide = 0;

function showSlide(index) {
  const slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slides[index].classList.add("active");
}

function changeSlide(direction) {
  const slides = document.getElementsByClassName("slide");

  currentSlide += direction;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
}

window.onload = function () {
  showSlide(0);
};

document.addEventListener("DOMContentLoaded", function () {

  function openPopup() {
    document.getElementById("popup").style.display = "block";
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }

  if (!localStorage.getItem("surveyShown")) {
    setTimeout(() => {
      openPopup();
      localStorage.setItem("surveyShown", "true");
    }, 3000);
  }

  const form = document.querySelector("#surveyForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for your feedback!");
    closePopup();
  });

  function showOtherInput() {
    document.getElementById("otherInput").style.display = "block";
  }

  window.showOtherInput = showOtherInput;

  document.querySelectorAll('input[name="source"]').forEach(radio => {
    radio.addEventListener("change", function () {
      if (this.value !== "Other") {
        document.getElementById("otherInput").style.display = "none";
      }
    });
  });

});