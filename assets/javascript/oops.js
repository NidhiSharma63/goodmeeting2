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
        if (this.currentSlide == this.totalSlideLength) {
            this.slider.style.left = 0 + "px";
        } else {
            this.slider.style.left = -this.containerWidth * this.currentSlide + "px";
        }
        this.handleDotOpacity();
    }
    // handleDotOpacity in nextslide
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
    // handle slide when dot clicked
    dotsClickHandler() {
        this.dots.forEach(dot => {
            dot.addEventListener("click", (e) => {
                let dotClickedIndex;
                if (e.target.classList.contains("testimonialDot")) {
                    testimonialMoveSlide = false;
                    if (testimonialMoveSlide === false) {
                        dotClickedIndex = e.target.dataset.index;
                        this.dotsClickedSlideHandler(dotClickedIndex);
                    }
                    setTimeout(() => {
                        this.dots[dotClickedIndex].classList.remove("active");
                        testimonialMoveSlide = true;
                    }, 5000);
                }
                if (e.target.classList.contains("dashboardDot")) {
                    dashboardMoveSlide = false;
                    if(dashboardMoveSlide === false){
                        dotClickedIndex = e.target.dataset.index;
                        this.dotsClickedSlideHandler(dotClickedIndex);
                    }
                    setTimeout(() => {
                        this.dots[dotClickedIndex].classList.remove("active");
                        dashboardMoveSlide = true;
                    }, 5000);
                }

            })
        });
    }

    dotsClickedSlideHandler(dotIndex) {
        if (dotIndex != this.currentSlide) {
            this.dots[this.currentSlide].classList.remove("opacity");
            this.dots[dotIndex].classList.add("opacity");
            this.dots[dotIndex].classList.add("active");
        }
        this.slider.style.left = -this.containerWidth * dotIndex + "px";
        console.log(this.currentSlide);
        console.log(dotIndex+"dotIndex");
        this.currentSlide = parseInt(dotIndex);
        console.log(this.currentSlide);
        console.log(dotIndex+"dotIndex");
    }
    // increase slide after every 3sec
    increaseSlide() {
        this.currentSlide += 1;
        if (this.currentSlide == this.totalSlideLength) {
            this.currentSlide = 0;
        }
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
    // first call increaseSlide:to increase slide
    // second call showNextSlide:to show next slide
    if (testimonialMoveSlide) {
        moveTestimonialSlide.increaseSlide();
        moveTestimonialSlide.showNextSlide();
    }
    if (dashboardMoveSlide) {
        moveDashboardSlide.increaseSlide();
        moveDashboardSlide.showNextSlide();
    }
}, 3000);
window.onload = () => {
    moveTestimonialSlide.showNextSlide();
    moveDashboardSlide.showNextSlide();
    moveTestimonialSlide.dotsClickHandler();
    moveDashboardSlide.dotsClickHandler();
}