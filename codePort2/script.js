//POUR SELECTIONNER TOUT LES LI et queryselector simple de li  c'est prend que le premier
//const nature = document.querySelectorAll('li');
//console.log(nature)

//si je donne un id nature à li  je peux le recup avec
// const nature = document.getelementbyid('nature')
// nature.addEventListener('click',()=>{
// const paragraphe = document.createElement('p')
// const texte = 'Cupcake toppingfdjeiofjznoefijezrf'})

const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})

const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
    });
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === slides.length - 1;
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});