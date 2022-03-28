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
//geting the values
const totalTestinomialSlideLength = dashboardImagesSlider.children.length;
const totalDashboardSlideLength = dashboardImagesSlider.children.length;
// initialize varibale for testimonial slide
let testimonialSlide = 0;
let testimonialMoveSlide = true;
let isTestimonialTouchMove;
let testimonialTouchStart;
let testimonialTouchEnd;

// intialize variable for dashboard slide
let dashboardSlide = 0;
let dashboardMoveSlide = true;
let isDashboardTouchMove;
let dashboardTouchStart;
let dashboardTouchEnd;

//common next slide function to call next slide
const commonNextSlide = (slide, totalSlideLength, slider, containerWidth, dots) => {
    // if curentSlide less than totalSlideLength;
    if (slide == totalSlideLength) {
        slider.style.left = 0 + "px";
    }
    // if curentSlide equal to totalSlideLength
    if (slide < (totalSlideLength)) {
        slider.style.left = -containerWidth * slide + "px";
    }
    removeOPacityFromLastDot(slide, totalSlideLength, dots);
}
// remove opacity class from previous dot and add class to current slide dot
const removeOPacityFromLastDot = (slide, totalSlideLength, dots) => {
    if (slide > 0 && slide < totalSlideLength) {
        dots[slide - 1].classList.remove("opacity");
        dots[slide].classList.add("opacity");
    }
    if (slide === 0) {
        dots[totalSlideLength - 1].classList.remove("opacity");
        dots[0].classList.add("opacity");
    }
}
// get the initial touch positon of testimonial slider and keep isTestimonialTouchMove = false
const testimonialTouchStartHandler = (e) => {
    testimonialTouchStart = e.changedTouches[0].clientX;
}
// get the direction in which touch is move and make isTestimonialTouchMove = true;
const testimonialTouchMoveHandler = (e) => {
    testimonialTouchEnd = e.targetTouches[0].clientX;
    testimonialMoveSlide = false;
    e.preventDefault();
}
// show the next slide when touch event is end
const touchEndNextSlideHandler = (slide, slider, containerWidth, dots) => {
    slider.style.left = -containerWidth * (slide + 1) + "px";
    dots[slide + 1].classList.add("opacity");
    dots[slide].classList.remove("opacity");
}
// show the prevoius slide when touch event is end
const touchEndPrevSlideHandler = (slide, slider, containerWidth, dots) => {
    slider.style.left = -containerWidth * (slide - 1) + "px";
    dots[slide - 1].classList.add("opacity");
    dots[slide].classList.remove("opacity");
}
// when touch is end and after getting the direction in which touch is move
const testimonialTouchEndHandler = (e) => {
    e.preventDefault();
    // if touchStart > touchend it means touch is move to left so show the next slide
    if (testimonialTouchStart > testimonialTouchEnd) {
        if (testimonialSlide < totalTestinomialSlideLength - 1 && testimonialSlide >= -1) {
            touchEndNextSlideHandler(testimonialSlide, testimonialSlider, testimonialTextContainerWidth, testimonialDot);
            // show to current slide for 8sec and after that call the next slide function 
            setTimeout(() => {
                testimonialMoveSlide = true;
            }, 8000);
            testimonialSlide = testimonialSlide + 1
        }
    }
    // if testimonialTouchEnd > touchStart it means touch is move to right so show the prev slide
    if (testimonialTouchEnd > testimonialTouchStart) {
        if (testimonialSlide > 0 && testimonialSlide < totalTestinomialSlideLength) {
            touchEndPrevSlideHandler(testimonialSlide, testimonialSlider, testimonialTextContainerWidth, testimonialDot);
            // show to current slide for 8sec and after that call the next slide function 
            setTimeout(() => {
                testimonialMoveSlide = true
            }, 8000);
            testimonialSlide = testimonialSlide - 1;
        }
    }
}
// when testimonialDot is click then call the testimonialDots Clicked function
const testimonialDotsClicked = (e) => {
    // make testimonialMoveSlide = false
    testimonialMoveSlide = false;
    //  if current slide is not equal to dot clicked slide then remove opactiy class from dot
    if (testimonialSlide != e.target.dataset.testimonial) {
        testimonialDot[testimonialSlide].classList.remove("opacity");
    }
    testimonialDot[e.target.dataset.testimonial].classList.add("opacity");
    testimonialSlide = e.target.dataset.testimonial;
    testimonialSlider.style.left = -testimonialTextContainerWidth * testimonialSlide + "px"
    setTimeout(() => {
        testimonialMoveSlide = true
    }, 8000);
}
// show next slide function when any event is trigger
const mainTestimonialFunction = () => {
    commonNextSlide(testimonialSlide, totalTestinomialSlideLength, testimonialSlider, testimonialTextContainerWidth, testimonialDot);
    testimonialSlider.addEventListener("touchstart", testimonialTouchStartHandler);
    testimonialSlider.addEventListener("touchmove", testimonialTouchMoveHandler);
    testimonialSlider.addEventListener("touchend", testimonialTouchEndHandler);
    // addEventListener on each dot
    testimonialDot.forEach((dot) => {
        // console.log("slide passed" + testimonialSlide)
        dot.addEventListener("click", testimonialDotsClicked);
    })

}
// dashboardSlider function start
// get the initial touch positon of dashboard slider and keep isdashboardTouchMove = false
const dashboardTouchStartHandler = (e) => {
    dashboardTouchStart = e.changedTouches[0].clientX;
}
// get the direction in which touch is move and make isdashboardTouchMove = true;
const dashboardTouchMoveHandler = (e) => {
    dashboardTouchEnd = e.targetTouches[0].clientX;
    dashboardMoveSlide = false;
    e.preventDefault();
}
// when touch end and after getting the direction in which touch is move
const dashboardTouchEndHandler = (e) => {
    e.preventDefault();
    // if touchStart > touchend it means touch is move to left so show the next slide
    if (dashboardTouchStart > dashboardTouchEnd) {
        if (dashboardSlide < dashboardImagesSlider.children.length - 1 && dashboardSlide >= -1) {
            touchEndNextSlideHandler(dashboardSlide, dashboardImagesSlider, dashboardImageContainerWidth, dashboardDots);
            // show to current slide for 8sec and after that call the next slide function 
            setTimeout(() => {
                testimonialMoveSlide = true;
            }, 8000);
            dashboardSlide = dashboardSlide + 1
        }
    }
    // if testimonialTouchEnd > touchStart it means touch is move to right so show the prev slide
    if (dashboardTouchEnd > dashboardTouchStart) {
        if (dashboardSlide > 0 && dashboardSlide < dashboardImagesSlider.children.length) {
            touchEndPrevSlideHandler(dashboardSlide, dashboardImagesSlider, dashboardImageContainerWidth, dashboardDots);
            // show to current slide for 8sec and after that call the next slide function 
            setTimeout(() => {
                testimonialMoveSlide = true
            }, 8000);
            dashboardSlide = dashboardSlide - 1;
        }
    }
}
// show slide when dashboard dots clicked
const dashboardDotsClicked = (e) => {
    e.preventDefault();
    dashboardMoveSlide = false;
    if (dashboardSlide != e.target.dataset.dashboard) {
        dashboardDots[dashboardSlide].classList.remove("opacity");
    }
    dashboardDots[e.target.dataset.dashboard].classList.add("opacity");
    dashboardSlide = e.target.dataset.dashboard;
    dashboardImagesSlider.style.left = -dashboardImageContainerWidth * dashboardSlide + 2 + "px"
    setTimeout(() => {
        dashboardMoveSlide = true
    }, 8000);
}

const mainDashboardFunction = () => {
    // call nextslide function
    commonNextSlide(dashboardSlide, totalDashboardSlideLength, dashboardImagesSlider, dashboardImageContainerWidth, dashboardDots);
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
    // for testimonialSlide
    if (testimonialMoveSlide) {
        testimonialSlide++;
        if (testimonialSlide == totalTestinomialSlideLength) {
            testimonialSlide = 0;
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
// and call the function when widow is load
window.onload = () => {
    mainTestimonialFunction();
    mainDashboardFunction();
}