//POUR SELECTIONNER TOUT LES LI et queryselector simple de li  c'est prend que le premier
//const nature = document.querySelectorAll('li');
//console.log(nature)

//si je donne un id nature à li  je peux le recup avec
// const nature = document.getelementbyid('nature')
// nature.addEventListener('click',()=>{
// const paragraphe = document.createElement('p')
// const texte = 'Cupcake toppingfdjeiofjznoefijezrf'})

//MENU BURGER
const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});

//LOADER AVEC BARRE DE PROGRESSION

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const progressBar = document.querySelector(".progress-bar");

  let width = 0;
  const duration = 5000;
  const intervalTime = 20;
  const increment = (intervalTime / duration) * 100;

  const interval = setInterval(() => {
    width += increment;
    if (width >= 100) {
      width = 100;
      clearInterval(interval);

      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 2000);
    }
    progressBar.style.width = width + "%";
  }, intervalTime);
});

//SLIDER
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slider .slide");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  showSlide(currentIndex);

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });
});
