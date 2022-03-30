const testimonialTextContainer = document.querySelector(".testimonialTextContainer")
const dashboardImageContainer = document.querySelector(".dashboardImageContainer");
let testimonialTextContainerWidth = testimonialTextContainer.offsetWidth;
let dashboardImageContainerWidth = dashboardImageContainer.offsetWidth;
const testimonialSlider = document.querySelector(".testimonialSlider");
const testimonialDot = document.querySelectorAll(".testimonialDot");
const dashboardImagesSlider = document.querySelector(".dashboardImagesSlider");
const dashboardDots = document.querySelectorAll(".dashboardDot");
// initialize varibale for testimonialand dashboard slide
let currentTestimonialSlide = 0;
let testimonialMoveSlide = true;
let testimonialTouchStart, dashboardTouchStart;
let testimonialTouchEnd, dashboardTouchEnd;
let currentDashboardSlide = 0;
let dashboardMoveSlide = true;

//geting the values
const totalTestinomialSlideLength = dashboardImagesSlider.children.length;
const totalDashboardSlideLength = dashboardImagesSlider.children.length;
// move slides
class HandleNextSlide {
    constructor({
        currentSlide,
        totalSlideLength,
        slider,
        containerWidth,
        dots
    }) {
        this.currentSlide = currentSlide;
        this.totalSlideLength = totalSlideLength;
        this.slider = slider;
        this.containerWidth = containerWidth;
        this.dots = dots;
    }
    showNextSlide() {
        // move slider to left
        if (this.currentSlide == this.totalSlideLength) {
            this.slider.style.left = 0 + "px";
        } else {
            this.slider.style.left = -this.containerWidth * this.currentSlide + "px";
        }
        this.handleDotOpacity();
        this.increaseSlide();
    }
    handleDotOpacity() {
        if (this.currentSlide > 0 && this.currentSlide < this.totalSlideLength) {
            this.dots[this.currentSlide - 1].classList.remove("opacity");
            this.dots[this.currentSlide].classList.add("opacity");
        }
        if (this.currentSlide === 0) {
            this.dots[this.totalSlideLength - 1].classList.remove("opacity");
            this.dots[0].classList.add("opacity");
        }
    }
    increaseSlide() {
        this.currentSlide++;
        if (this.currentSlide == this.totalSlideLength) {
            this.currentSlide = 0;
        }
    }
}

const moveTestimonialSlide = new HandleNextSlide({
    currentSlide: currentTestimonialSlide,
    totalSlideLength: totalTestinomialSlideLength,
    slider: testimonialSlider,
    containerWidth: testimonialTextContainerWidth,
    dots: testimonialDot
});
const moveDashboardSlide = new HandleNextSlide({
    currentSlide: currentDashboardSlide,
    totalSlideLength: totalDashboardSlideLength,
    slider: dashboardImagesSlider,
    containerWidth: dashboardImageContainerWidth,
    dots: dashboardDots
});
setInterval(() => {
    moveTestimonialSlide.showNextSlide();
    moveDashboardSlide.showNextSlide();
}, 3000);
window.onload = () => {
    moveTestimonialSlide.showNextSlide();
    moveDashboardSlide.showNextSlide();
}