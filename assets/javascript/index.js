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
// initialize varibale for testimonialand dashboard slide
let currentTestimonialSlide = 0;
let testimonialMoveSlide = true;
let testimonialTouchStart, dashboardTouchStart;
let testimonialTouchEnd, dashboardTouchEnd;
let dashboardSlide = 0;
let dashboardMoveSlide = true;

//geting the values
const totalTestinomialSlideLength = dashboardImagesSlider.children.length;
const totalDashboardSlideLength = dashboardImagesSlider.children.length;
//show next slide
const NextSlide = ({
    currentSlide,
    totalSlideLength,
    slider,
    containerWidth,
    dots
}) => {
    // move slider to left
    if (currentSlide == totalSlideLength) {
        slider.style.left = 0 + "px";
    } else {
        slider.style.left = -containerWidth * currentSlide + "px";
    }
    handleDotOpacity(currentSlide, totalSlideLength, dots);
}
// handle opactiy 
const handleDotOpacity = (currentSlide, totalSlideLength, dots) => {
    if (currentSlide > 0 && currentSlide < totalSlideLength) {
        dots[currentSlide - 1].classList.remove("opacity");
        dots[currentSlide].classList.add("opacity");
    }
    if (currentSlide === 0) {
        dots[totalSlideLength - 1].classList.remove("opacity");
        dots[0].classList.add("opacity");
    }
}
const startTestimonialMoveSlide = () => setTimeout(() => {
    testimonialMoveSlide = true
}, 8000);
// get testimonial touch point
const testimonialTouchStartHandler = (e) => {
    testimonialTouchStart = e.changedTouches[0].clientX;
}
// get direction of move
const testimonialTouchMoveHandler = (e) => {
    e.preventDefault();
    testimonialTouchEnd = e.targetTouches[0].clientX;
    testimonialMoveSlide = false;
}
// handle next slide when touch is end
const touchEndNextSlideHandler = ({
    currentSlide,
    slider,
    containerWidth,
    dots
}) => {
    slider.style.left = -containerWidth * (currentSlide + 1) + "px";
    dots[currentSlide + 1].classList.add("opacity");
    dots[currentSlide].classList.remove("opacity");
}
// handle prev slide when touch is end
const touchEndPrevSlideHandler = ({
    currentSlide,
    slider,
    containerWidth,
    dots
}) => {
    slider.style.left = -containerWidth * (currentSlide - 1) + "px";
    dots[currentSlide - 1].classList.add("opacity");
    dots[currentSlide].classList.remove("opacity");
}
// handle touch end event
const testimonialTouchEndHandler = (e) => {
    e.preventDefault();
    let arguementOfNextPrevSlideTestimonial = {
        currentSlide: currentTestimonialSlide,
        slider: testimonialSlider,
        containerWidth: testimonialTextContainerWidth,
        dots: testimonialDot
    }
    const showNextTestimonialSLide = (testimonialTouchStart > testimonialTouchEnd);
    const showPrevTestimonialSLide = (testimonialTouchStart < testimonialTouchEnd);
    if (showNextTestimonialSLide) {
        if (currentTestimonialSlide < totalTestinomialSlideLength - 1 && currentTestimonialSlide >= -1) {
            touchEndNextSlideHandler(arguementOfNextPrevSlideTestimonial);
            currentTestimonialSlide = currentTestimonialSlide + 1
            startTestimonialMoveSlide();
        }
    }
    if (showPrevTestimonialSLide) {
        if (currentTestimonialSlide > 0 && currentTestimonialSlide < totalTestinomialSlideLength) {
            touchEndPrevSlideHandler(arguementOfNextPrevSlideTestimonial);
            currentTestimonialSlide = currentTestimonialSlide - 1;
            startTestimonialMoveSlide();
        }
    }
}
//dots clicked function
const testimonialDotsClicked = (e) => {
    console.log(e.target.dataset.testimonial)
    testimonialMoveSlide = false;
    const clickedTestimonialDotIndex = e.target.dataset.index;
    if (currentTestimonialSlide != clickedTestimonialDotIndex) {
        testimonialDot[currentTestimonialSlide].classList.remove("opacity");
    }
    testimonialDot[clickedTestimonialDotIndex].classList.add("opacity");
    currentTestimonialSlide = clickedTestimonialDotIndex;
    testimonialSlider.style.left = -testimonialTextContainerWidth * currentTestimonialSlide + "px"
    startTestimonialMoveSlide();
}
// manage all function of testimonial slider
const mainTestimonialFunction = () => {
    NextSlide({
        currentSlide: currentTestimonialSlide,
        totalSlideLength: totalTestinomialSlideLength,
        slider: testimonialSlider,
        containerWidth: testimonialTextContainerWidth,
        dots: testimonialDot
    });
    testimonialSlider.addEventListener("touchstart", testimonialTouchStartHandler);
    testimonialSlider.addEventListener("touchmove", testimonialTouchMoveHandler);
    testimonialSlider.addEventListener("touchend", testimonialTouchEndHandler);
    // addEventListener on each dot
    testimonialDot.forEach((dot) => {
        dot.addEventListener("click", testimonialDotsClicked);
    })

}
// dashboardSlider function start
const startDashboardMoveSlide = () => setTimeout(() => {
    dashboardMoveSlide = true
}, 8000);
// get dashboard touch point
const dashboardTouchStartHandler = (e) => {
    dashboardTouchStart = e.changedTouches[0].clientX;
}
// get direction of move
const dashboardTouchMoveHandler = (e) => {
    e.preventDefault();
    dashboardTouchEnd = e.targetTouches[0].clientX;
    dashboardMoveSlide = false;
}
// handle touch end event
const dashboardTouchEndHandler = (e) => {
    e.preventDefault();
    let arguementOfNextPrevSlideDashboard = {
        currentSlide: currentDashboardSlide,
        slider: dashboardSlider,
        containerWidth: dashboardContainerWidth,
        dots: dashboardDot
    }
    const showNextdashboardSLide = (dashboardTouchStart > dashboardTouchEnd);
    const showPrevdashboardSLide = (dashboardTouchStart < dashboardTouchEnd);
    if (showNextdashboardSLide) {
        if (dashboardSlide < totalDashboardSlideLength - 1 && dashboardSlide >= -1) {
            touchEndNextSlideHandler(arguementOfNextPrevSlideDashboard);
            dashboardSlide = dashboardSlide + 1
            startDashboardMoveSlide();
        }
    }
    if (showPrevdashboardSLide) {
        if (dashboardSlide > 0 && dashboardSlide < totalDashboardSlideLength) {
            touchEndPrevSlideHandler(arguementOfNextPrevSlideDashboard);
            dashboardSlide = dashboardSlide - 1;
            startDashboardMoveSlide();
        }
    }
}
//dots clicked function
const dashboardDotsClicked = (e) => {
    e.preventDefault();
    dashboardMoveSlide = false;
    const clickedDashboardDotIndex = e.target.dataset.index;
    if (dashboardSlide != clickedDashboardDotIndex) {
        dashboardDots[dashboardSlide].classList.remove("opacity");
    }
    dashboardDots[clickedDashboardDotIndex].classList.add("opacity");
    dashboardSlide = clickedDashboardDotIndex;
    dashboardImagesSlider.style.left = -dashboardImageContainerWidth * dashboardSlide + "px"
    startDashboardMoveSlide();
}

const mainDashboardFunction = () => {
    NextSlide({
        currentSlide: dashboardSlide,
        totalSlideLength: totalDashboardSlideLength,
        slider: dashboardImagesSlider,
        containerWidth: dashboardImageContainerWidth,
        dots: dashboardDots
    });
    dashboardImagesSlider.addEventListener("touchstart", dashboardTouchStartHandler);
    dashboardImagesSlider.addEventListener("touchmove", dashboardTouchMoveHandler);
    dashboardImagesSlider.addEventListener("touchend", dashboardTouchEndHandler);
    // addEventListener on each dot
    dashboardDots.forEach((dot) => {
        dot.addEventListener("click", dashboardDotsClicked);
    })
}
// call the function after every 4sec
setInterval(() => {
    // for testimonialSlider
    if (testimonialMoveSlide) {
        currentTestimonialSlide++;
        if (currentTestimonialSlide == totalTestinomialSlideLength) {
            currentTestimonialSlide = 0;
        }
        mainTestimonialFunction();
    }
    // for dashboardSlide
    if (dashboardMoveSlide) {
        dashboardSlide++;
        if (dashboardSlide == totalDashboardSlideLength) {
            dashboardSlide = 0;
        }
        mainDashboardFunction();
    }

}, 4000);
// and call the function when window is load
window.onload = () => {
    mainTestimonialFunction();
    mainDashboardFunction();
}