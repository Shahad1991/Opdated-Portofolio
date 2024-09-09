const h2Element = document.getElementById('changingH2');
const h2Texts = ['kreativ', 'samarbeidsvillig', 'nysgerrig', 'struktureret', 'ambitiøs', 'detaljeorienteret', 'imødekommende'];
let currentIndex = 0;
let letterIndex = 0;

function typeWriter() {
    if (letterIndex < h2Texts[currentIndex].length) {
        h2Element.textContent += h2Texts[currentIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(typeWriter, 100); // Juster hastigheden her
    } else {
        setTimeout(eraseText, 1000); // Juster pause før sletning her
    }
}

function eraseText() {
    if (letterIndex > 0) {
        h2Element.textContent = h2Element.textContent.slice(0, -1);
        letterIndex--;
        setTimeout(eraseText, 50); // Juster sletningshastigheden her
    } else {
        currentIndex = (currentIndex + 1) % h2Texts.length;
        setTimeout(typeWriter, 300); // Juster tid før skrivning starter igen her
    }
}

typeWriter(); // Start the typing animation




var slideIndex = 1;
var slideInterval;

document.addEventListener("DOMContentLoaded", function () {
    showSlides(slideIndex); // Vis første slide
    startAutoSlide(); // Start automatisk slideshow
});

// Funktion til at ændre slide ved at tilføje eller trække fra slideIndex
function plusSlides(n) {
    showSlides(slideIndex += n);
    resetAutoSlide(); // Genstart automatisk slideshow ved manuel navigation
}

// Funktion til at sætte det aktuelle slide baseret på dot, der blev klikket på
function currentSlide(n) {
    showSlides(slideIndex = n);
    resetAutoSlide(); // Genstart automatisk slideshow ved manuel navigation
}

// Funktion til at vise det aktuelle slide
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Start automatisk slideshow
function startAutoSlide() {
    slideInterval = setInterval(function () {
        plusSlides(1);
    }, 25000); // Ændrer slide hvert 5. sekund
}

// Stop automatisk slideshow
function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Genstart automatisk slideshow ved manuel navigation
function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}



