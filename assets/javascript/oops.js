const testimonialTextContainer = document.querySelector(".testimonialTextContainer")
const dashboardImageContainer = document.querySelector(".dashboardImageContainer");
let testimonialTextContainerWidth = testimonialTextContainer.offsetWidth;
let dashboardImageContainerWidth = dashboardImageContainer.offsetWidth;
const testimonialSlider = document.querySelector(".testimonialSlider");
const testimonialDot = document.querySelectorAll(".testimonialDot");
const dashboardImagesSlider = document.querySelector(".dashboardImagesSlider");
const dashboardDots = document.querySelectorAll(".dashboardDot");
<<<<<<< HEAD
=======
const testimonialContent = document.querySelectorAll(".testimonialContent");
>>>>>>> master
const dashboardImg = document.querySelectorAll(".dashboardImg");
// initialize varibale for testimonialand dashboard slide
let currentTestimonialSlide = 0;
let currentDashboardSlide = 0;
let testimonialMoveSlide = true;
let testimonialTouchStart, dashboardTouchStart;
let testimonialTouchEnd, dashboardTouchEnd;
let dashboardMoveSlide = true;
<<<<<<< HEAD
const totalDashboardSlideLength = dashboardImagesSlider.children.length;

=======

//geting the values
const totalTestinomialSlideLength = testimonialSlider.children.length;
const totalDashboardSlideLength = dashboardImagesSlider.children.length;
>>>>>>> master
// move slides
class CommonVaribles {
    constructor({
        currentSlide,
        totalSlideLength,
        slider,
        containerWidth,
        dots
<<<<<<< HEAD
    } = {}) {
=======
    }={}) {
>>>>>>> master
        this.currentSlide = currentSlide;
        this.totalSlideLength = totalSlideLength;
        this.slider = slider;
        this.containerWidth = containerWidth;
        this.dots = dots;
    }
}
<<<<<<< HEAD
const fetchData = async () => {
    const response = await fetch('./assets/javascript/testinomial.json');
    return response.json();
}

=======
>>>>>>> master

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
                    if (dashboardMoveSlide === false) {
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
    // dotsClickedSlideHandler  
    dotsClickedSlideHandler(dotIndex) {
        if (dotIndex != this.currentSlide) {
            this.dots[this.currentSlide].classList.remove("opacity");
            this.dots[dotIndex].classList.add("opacity");
            this.dots[dotIndex].classList.add("active");
        }
        this.slider.style.left = -this.containerWidth * dotIndex + "px";
        this.currentSlide = parseInt(dotIndex);
    }
    // get the touchstart value
    getTouchStart(e) {
<<<<<<< HEAD
        if (e.target.classList.contains("testimonialText")) {
            testimonialTouchStart = e.touches[0].clientX;
        }
        if (e.target.classList.contains("dashboardImg")) {
=======
        if(e.target.classList.contains("testimonialText")){
            testimonialTouchStart = e.touches[0].clientX;
        }
        if(e.target.classList.contains("dashboardImg")){
>>>>>>> master
            dashboardTouchStart = e.touches[0].clientX;
        }
    }
    // get touch move value
    getTouchMove(e) {
<<<<<<< HEAD
        if (e.target.classList.contains("testimonialText")) {
            testimonialTouchEnd = e.touches[0].clientX;
            testimonialMoveSlide = false;
            setTimeout(() => {
                testimonialMoveSlide = true;
            }, 8000);
        }
        if (e.target.classList.contains("dashboardImg")) {
            dashboardTouchEnd = e.touches[0].clientX;
            dashboardMoveSlide = false;
            setTimeout(() => {
                dashboardMoveSlide = true;
=======
        if(e.target.classList.contains("testimonialText")){
            testimonialTouchEnd = e.touches[0].clientX;
            testimonialMoveSlide=false;
            setTimeout(() => {
                testimonialMoveSlide=true;
            }, 8000);
        }
        if(e.target.classList.contains("dashboardImg")){
            dashboardTouchEnd = e.touches[0].clientX;
            dashboardMoveSlide=false;
            setTimeout(() => {
                dashboardMoveSlide=true;
>>>>>>> master
            }, 8000);
        }
    }
    // handle slide when touch end
    touchEndNextSlideHandler(e) {
        if (this.currentSlide < this.totalSlideLength - 1 && this.currentSlide >= -1) {
            this.slider.style.left = -this.containerWidth * (this.currentSlide + 1) + "px";
            this.dots[this.currentSlide + 1].classList.add("opacity");
            this.dots[this.currentSlide].classList.remove("opacity");
            this.currentSlide = this.currentSlide + 1
        }
    }
<<<<<<< HEAD
    touchEndPreviousSlideHandler(e) {
        if (this.currentSlide > 0 && this.currentSlide < this.totalSlideLength) {
=======
    touchEndPreviousSlideHandler(e){
        if(this.currentSlide > 0 && this.currentSlide < this.totalSlideLength){
>>>>>>> master
            this.slider.style.left = -this.containerWidth * (this.currentSlide - 1) + "px";
            this.dots[this.currentSlide - 1].classList.add("opacity");
            this.dots[this.currentSlide].classList.remove("opacity");
            this.currentSlide = this.currentSlide - 1
        }
    }
    // increase slide after every 3sec
    increaseSlide() {
        this.currentSlide += 1;
        if (this.currentSlide == this.totalSlideLength) {
            this.currentSlide = 0;
        }
    }
}
<<<<<<< HEAD
const showData = async () => {
    const data = await fetchData();
    data.forEach((item) => {
        testimonialSlider.innerHTML +=
            `<div class="testimonialContent">
        <div class="testimonialText letterSpacing font1 lightBlackColor">${item.review}</div>
        <div class="testimonialUser">
        <p class="userName font1 secondaryColor">${item.reviewer}</p>
        <p class="userStatus font1 secondaryColor">${item.status}</p>
        </div>
        </div>`
    })
    // getting values
    const testimonialContent = document.querySelectorAll(".testimonialContent");
    const totalTestinomialSlideLength = testimonialSlider.children.length;
    // declaring the class
    const moveTestimonialSlide = new MoveSlides({
        currentSlide: currentTestimonialSlide,
        totalSlideLength: totalTestinomialSlideLength,
        slider: testimonialSlider,
        containerWidth: testimonialTextContainerWidth,
        dots: testimonialDot
    });

    testimonialContent.forEach(content => {
        content.addEventListener("touchstart", (e) => {
            e.preventDefault();
            moveTestimonialSlide.getTouchStart(e);
        });
        content.addEventListener("touchmove", (e) => {
            e.preventDefault();
            moveTestimonialSlide.getTouchMove(e);
        });
        content.addEventListener("touchend", (e) => {
            e.preventDefault();
            if (testimonialTouchStart > testimonialTouchEnd) {
                moveTestimonialSlide.touchEndNextSlideHandler(e);
            }
            if (testimonialTouchStart < testimonialTouchEnd) {
                moveTestimonialSlide.touchEndPreviousSlideHandler(e);
            }
        });
    });
    setInterval(() => {
        // first call increaseSlide:to increase slide
        // second call showNextSlide:to show next slide
        if (testimonialMoveSlide) {
            moveTestimonialSlide.increaseSlide();
            moveTestimonialSlide.showNextSlide();
        }
    }, 3000);
    moveTestimonialSlide.showNextSlide();
    moveTestimonialSlide.dotsClickHandler();
}
=======

const moveTestimonialSlide = new MoveSlides({
    currentSlide: currentTestimonialSlide,
    totalSlideLength: totalTestinomialSlideLength,
    slider: testimonialSlider,
    containerWidth: testimonialTextContainerWidth,
    dots: testimonialDot
});
>>>>>>> master
const moveDashboardSlide = new MoveSlides({
    currentSlide: currentDashboardSlide,
    totalSlideLength: totalDashboardSlideLength,
    slider: dashboardImagesSlider,
    containerWidth: dashboardImageContainerWidth,
    dots: dashboardDots
});
<<<<<<< HEAD
=======

// touch start and end
testimonialContent.forEach(content => {
    content.addEventListener("touchstart", (e) => {
        e.preventDefault();
        moveTestimonialSlide.getTouchStart(e);
    });
    content.addEventListener("touchmove", (e) => {
        e.preventDefault();
        moveTestimonialSlide.getTouchMove(e);
    });
    content.addEventListener("touchend", (e) => {
        e.preventDefault();
        if(testimonialTouchStart > testimonialTouchEnd){
            moveTestimonialSlide.touchEndNextSlideHandler(e);
        }
        if(testimonialTouchStart < testimonialTouchEnd){
            moveTestimonialSlide.touchEndPreviousSlideHandler(e);
        }
    });
});
>>>>>>> master
dashboardImg.forEach(img => {
    img.addEventListener("touchstart", (e) => {
        e.preventDefault();
        moveDashboardSlide.getTouchStart(e);
    });
    img.addEventListener("touchmove", (e) => {
        e.preventDefault();
        moveDashboardSlide.getTouchMove(e);
    });
    img.addEventListener("touchend", (e) => {
        e.preventDefault();
<<<<<<< HEAD
        if (dashboardTouchStart > dashboardTouchEnd) {
            moveDashboardSlide.touchEndNextSlideHandler(e);
        }
        if (dashboardTouchStart < dashboardTouchEnd) {
=======
        if(dashboardTouchStart > dashboardTouchEnd){
            moveDashboardSlide.touchEndNextSlideHandler(e);
        }
        if(dashboardTouchStart < dashboardTouchEnd){
>>>>>>> master
            moveDashboardSlide.touchEndPreviousSlideHandler(e);
        }
    });
});
setInterval(() => {
    // first call increaseSlide:to increase slide
    // second call showNextSlide:to show next slide
<<<<<<< HEAD
=======
    if (testimonialMoveSlide) {
        moveTestimonialSlide.increaseSlide();
        moveTestimonialSlide.showNextSlide();
    }
>>>>>>> master
    if (dashboardMoveSlide) {
        moveDashboardSlide.increaseSlide();
        moveDashboardSlide.showNextSlide();
    }
}, 3000);
window.onload = () => {
<<<<<<< HEAD
    showData();
    moveDashboardSlide.showNextSlide();
=======
    moveTestimonialSlide.showNextSlide();
    moveDashboardSlide.showNextSlide();
    moveTestimonialSlide.dotsClickHandler();
>>>>>>> master
    moveDashboardSlide.dotsClickHandler();
}