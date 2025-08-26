// Product Section

  document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("productSlider");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");

    function scrollSlider(direction) {
      const scrollAmount = 280;
      if (!slider) return;

      slider.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }

    // 🔁 Auto-scroll every 4 seconds (optional)
    setInterval(() => {
      scrollSlider("right");
    }, 4000);

    // 👈 Add manual scroll on button clicks
    leftBtn.addEventListener("click", () => scrollSlider("left"));
    rightBtn.addEventListener("click", () => scrollSlider("right"));
  });



// Hero Slider Functionality
const heroSlides = document.querySelectorAll('.hero-slider .slide');
const heroDots = document.querySelectorAll('.hero-slider .dot');
const heroPrevBtn = document.querySelector('.hero-slider .prev-slide');
const heroNextBtn = document.querySelector('.hero-slider .next-slide');
let currentHeroSlide = 0;
let heroSlideInterval;

// Initialize hero slider
function initHeroSlider() {
    if (!heroSlides.length) return;
    
    // Set first slide as active
    heroSlides[currentHeroSlide].classList.add('active');
    heroDots[currentHeroSlide].classList.add('active');
    
    // Start auto slide
    startHeroSlideTimer();
}

// Next hero slide function
function nextHeroSlide() {
    goToHeroSlide((currentHeroSlide + 1) % heroSlides.length);
}

// Previous hero slide function
function prevHeroSlide() {
    goToHeroSlide(currentHeroSlide === 0 ? heroSlides.length - 1 : currentHeroSlide - 1);
}

// Go to specific hero slide
function goToHeroSlide(n) {
    // Remove active class from current slide and dot
    heroSlides[currentHeroSlide].classList.remove('active');
    heroDots[currentHeroSlide].classList.remove('active');
    
    // Update current slide
    currentHeroSlide = n;
    
    // Add active class to new slide and dot
    heroSlides[currentHeroSlide].classList.add('active');
    heroDots[currentHeroSlide].classList.add('active');
    
    // Reset timer
    resetHeroSlideTimer();
}

// Start auto hero slide timer
function startHeroSlideTimer() {
    heroSlideInterval = setInterval(nextHeroSlide, 5000); // Change slide every 5 seconds
}

// Reset hero slide timer
function resetHeroSlideTimer() {
    clearInterval(heroSlideInterval);
    startHeroSlideTimer();
}

// Hero Slider Event Listeners
if (heroPrevBtn && heroNextBtn) {
    heroPrevBtn.addEventListener('click', prevHeroSlide);
    heroNextBtn.addEventListener('click', nextHeroSlide);
}

// Hero Slider Dot navigation
if (heroDots) {
    heroDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToHeroSlide(index);
        });
    });
}

// Initialize hero slider when DOM is loaded
document.addEventListener('DOMContentLoaded', initHeroSlider);

// Counter Animation
const counters = document.querySelectorAll('.counter');
let hasAnimated = false;

function startCounting() {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 100;
        
        function updateCount() {
            const current = +counter.innerText;
            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        }
        
        updateCount();
    });
    hasAnimated = true;
}  