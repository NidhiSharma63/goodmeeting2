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
const totalTestinomialSlideLength = testimonialSlider.children.length;
const totalDashboardSlideLength = dashboardImagesSlider.children.length;
// move slides
class CommonVaribles {
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
}

class MoveSlides extends CommonVaribles {
    showNextSlide() {
        // move slider to left
        console.log("came current slide", this.currentSlide);
        if (this.currentSlide == this.totalSlideLength) {
            this.slider.style.left = 0 + "px";
        } else {
            this.slider.style.left = -this.containerWidth * this.currentSlide + "px";
        }
        this.handleDotOpacity();
        // this.increaseSlide();
        console.log("passing" + this.currentSlide);
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
    dotsClickHandler() {
        this.dots.forEach(dot => {
            dot.addEventListener("click", (e) => {
                // console.log(e.target)
                let dotClickedIndex ;
                if(e.target.classList.contains("testimonialDot")){
                    testimonialMoveSlide = false;
                    dotClickedIndex = e.target.dataset.index;
                    this.dotsClickedSlideHandler(dotClickedIndex);
                }
                if(e.target.classList.contains("dashboardDot")){
                    dashboardMoveSlide = false;
                    dotClickedIndex = e.target.dataset.index;
                    this.dotsClickedSlideHandler(dotClickedIndex);
                }
            })
        });
    }
    dotsClickedSlideHandler(dotIndex)  {
        // console.log(dotIndex+"dotIndex");
        // console.log(this.currentSlide+"currenslide");
    }
}
const moveTestimonialSlide = new MoveSlides({
    currentSlide: currentTestimonialSlide,
    totalSlideLength: totalTestinomialSlideLength,
    slider: testimonialSlider,
    containerWidth: testimonialTextContainerWidth,
    dots: testimonialDot
});
const moveDashboardSlide = new MoveSlides({
    currentSlide: currentDashboardSlide,
    totalSlideLength: totalDashboardSlideLength,
    slider: dashboardImagesSlider,
    containerWidth: dashboardImageContainerWidth,
    dots: dashboardDots
});
setInterval(() => {
   if(testimonialMoveSlide){
    moveTestimonialSlide.showNextSlide();
    moveTestimonialSlide.increaseSlide();
    }
   if(dashboardMoveSlide){
    moveDashboardSlide.showNextSlide();
    moveDashboardSlide.increaseSlide();
    }
}, 3000);
window.onload = () => {
    moveTestimonialSlide.showNextSlide();
    moveDashboardSlide.showNextSlide();
    moveTestimonialSlide.increaseSlide();
    moveDashboardSlide.increaseSlide();
    moveTestimonialSlide.dotsClickHandler();
    moveDashboardSlide.dotsClickHandler();
}