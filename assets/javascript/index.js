const testimonialTextContainer = document.querySelector(".testimonialTextContainer")
const dashboardImageContainer = document.querySelector(".dashboardImageContainer");
let testimonialTextContainerWidth = testimonialTextContainer.offsetWidth;
let dashboardImageContainerWidth = dashboardImageContainer.offsetWidth;
const testimonialSlider = document.querySelector(".testimonialSlider");
const testimonialDot = document.querySelectorAll(".testimonialDot");
const dashboardImagesSlider = document.querySelector(".dashboardImagesSlider");
const dashboardDots = document.querySelectorAll(".dashboardDot");
window.addEventListener('resize', function () {
    testimonialTextContainerWidth = testimonialTextContainer.offsetWidth;
    dashboardImageContainerWidth = dashboardImageContainer.offsetWidth;
});
// initialize varibale
let testimonialSlide = 0;
let dashboardSlide = 0;
let moveSlide = true;
let isTestimonialTouchMove;
let touchStart;
let touchend;
const nexSlide = () => {
    // if testimonialSlide less than testimonialSlider.children.length and dashboardImagesSlider.children.length
    if (testimonialSlide < (testimonialSlider.children.length)) {
        testimonialSlider.style.left = -testimonialTextContainerWidth * testimonialSlide + "px";
        testimonialDot[testimonialSlide].classList.add("opacity");
    }
    // make slide move on Touch and do isTestimonialTouchMove = false
    testimonialSlider.addEventListener("touchstart", (e) => {
        e.preventDefault();
        touchStart = e.targetTouches[0].clientX;
        isTestimonialTouchMove = false;
    });
    testimonialSlider.addEventListener("touchmove", (e) => {
        // when touch is move then do move slide false and isTestimonialTouchMove = true;
        touchend = e.targetTouches[0].clientX;

        moveSlide = false;
        isTestimonialTouchMove = true;
        e.preventDefault();

    });
    testimonialSlider.addEventListener("touchend", (e) => {
        // if slide is move then make current testimonialSlide = testimonialSlide + 1
        e.preventDefault();
        if (touchStart > touchend) {
            if (testimonialSlide < testimonialSlider.children.length - 1 && testimonialSlide >= -1) {
                testimonialSlider.style.left = -testimonialTextContainerWidth * (testimonialSlide + 1) + "px";
                testimonialDot[testimonialSlide + 1].classList.add("opacity");
                testimonialDot[testimonialSlide].classList.remove("opacity");
                setTimeout(() => {
                    moveSlide = true;
                }, 8000);
                testimonialSlide = testimonialSlide + 1
            }
        }
        if(touchend>touchStart){
            if(testimonialSlide>0&&testimonialSlide<testimonialSlider.children.length){
                testimonialSlider.style.left = -testimonialTextContainerWidth * (testimonialSlide-1) + "px";
                setTimeout(() => {
                    moveSlide = true
                }, 8000);
                testimonialSlide = testimonialSlide - 1;
            }
        }
    })
    // addEventListener on each dot
    testimonialDot.forEach((dot) => {
        dot.addEventListener("click", (e) => {
            // make moveSlide = false
            moveSlide = false;
            if (testimonialSlide != e.target.dataset.testimonial) {
                testimonialDot[testimonialSlide].classList.remove("opacity");
            }
            testimonialDot[e.target.dataset.testimonial].classList.add("opacity");
            testimonialSlide = e.target.dataset.testimonial;
            testimonialSlider.style.left = -testimonialTextContainerWidth * testimonialSlide + "px"
            setTimeout(() => {
                moveSlide = true
            }, 8000);
        })
    })

    if (testimonialSlide == testimonialSlider.children.length) {
        testimonialSlide = 0;
        testimonialSlider.style.left = 0 + "px"
        testimonialDot[testimonialSlide].classList.add("opacity");
    }
}
const mainTestimonialFunction = () => {
    // remove class opacity from last dot and call nextslide function
    if (testimonialSlide > 0 && testimonialSlide <= testimonialSlider.children.length) {
        testimonialDot[testimonialSlide - 1].classList.remove("opacity");

    }
    nexSlide();
}
setInterval(() => {
    if (moveSlide) {
        testimonialSlide++
        mainTestimonialFunction();
    }
}, 4000);

mainTestimonialFunction();

// dashboardSlider function

const nexDashboardSlide = () => {
    // if count less  dashboardImagesSlider.children.length 
    if (dashboardSlide < (dashboardImagesSlider.children.length)) {
        // adding 2 to dashboardImagesSlider left to make fit the image
        dashboardImagesSlider.style.left = -dashboardImageContainerWidth * dashboardSlide + 2 + "px";
        dashboardDots[dashboardSlide].classList.add("opacity");
    }
    // addEventListener on each dot
    dashboardDots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
            // make moveSlide = false
            moveSlide = false;
            if (dashboardSlide != e.target.dataset.dashboard) {
                dashboardDots[dashboardSlide].classList.remove("opacity");
            }
            dashboardDots[e.target.dataset.dashboard].classList.add("opacity");
            dashboardSlide = e.target.dataset.dashboard;
            dashboardImagesSlider.style.left = -dashboardImageContainerWidth * dashboardSlide + 2 + "px"
            setTimeout(() => {
                moveSlide = true
            }, 8000);
        })
    })

    if (dashboardSlide == dashboardImagesSlider.children.length) {
        dashboardSlide = 0;
        dashboardImagesSlider.style.left = 0 + "px";
        dashboardDots[dashboardSlide].classList.add("opacity");
    }
}
const mainDashboardFunction = () => {
    // remove class opacity from last dot and call nextslide function
    if (dashboardSlide > 0 && dashboardSlide <= dashboardImagesSlider.children.length) {
        dashboardDots[dashboardSlide - 1].classList.remove("opacity");

    }
    nexDashboardSlide();
}
setInterval(() => {
    if (moveSlide) {
        dashboardSlide++
        mainDashboardFunction();
    }
}, 4000);

mainDashboardFunction();