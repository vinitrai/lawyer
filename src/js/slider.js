
function slideShow(){
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentIndex = 0;
let intervalId;

// Reset the position of slides
const resetSlides = () => {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${index * 100}%)`;
    });
};

// Function to show the current slide
const showSlide = () => {
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.style.transform = 'translateX(0)';
        } else if (index < currentIndex) {
            slide.style.transform = 'translateX(-100%)';
        } else {
            slide.style.transform = 'translateX(100%)';
        }
    });
};

// Function to go to the next slide
const nextSlide = () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlide();
};

//Function to go to the previous slide
const previousSlide =()=>{
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    showSlide();
}
// Start the automatic slide transition
const startSlideShow = () => {
    intervalId = setInterval(nextSlide, 5000); // Transition every 5 seconds (adjust as needed)
};

// Stop the automatic slide transition
const stopSlideShow = () => {
    clearInterval(intervalId);
};

// Event listener for next button
nextBtn.addEventListener('click', () => {
    nextSlide();
    stopSlideShow(); // Stop automatic slide transition on manual interaction
});

// Event listener for previous button
prevBtn.addEventListener('click', () => {
    previousSlide();
    stopSlideShow(); // Stop automatic slide transition on manual interaction
});

// Initialize the carousel
resetSlides();
showSlide();
startSlideShow(); // Start the automatic slide transition
}

export default slideShow;