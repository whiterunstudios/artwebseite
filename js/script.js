// Dynamischer Hintergrundwechsel
const hero = document.getElementById("hero");
const backgrounds = [
  "https://www.camenzind-kunst.ch/files/userdata/filemanager/data/IMG_8385-002-.jpeg",
  "https://www.camenzind-kunst.ch/files/userdata/filemanager/data/IMG_8894-002-.JPG",
  "https://www.camenzind-kunst.ch/files/userdata/filemanager/data/IMG_7254.jpeg"
];

let bgIndex = 0;

function switchBackground() {
  hero.style.backgroundImage = `url('${backgrounds[bgIndex]}')`;
  bgIndex = (bgIndex + 1) % backgrounds.length;
}
switchBackground();
setInterval(switchBackground, 7000);

// Lightbox
const images = document.querySelectorAll("#gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  });
});
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Mobile Nav Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ScrollReveal mit IntersectionObserver
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));

