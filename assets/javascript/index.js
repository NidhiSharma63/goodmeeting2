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

//common next slide function
const commonNextSlide = (slide,totalSlideLength,slider,containerWidth,dot) => {
    // if curentSlide less than totalSlideLength
    console.log("commn slide"+slider.style.left);
    console.log(slide);
       // if curentSlide equal than totalSlideLength
       if (slide == totalSlideLength) {
        console.log("slide is become equal")
        slider.style.left = 0 + "px";
        dot[0].classList.add("opacity");
    }
    // console.log(slide)
    if (slide < (totalSlideLength)) {
        slider.style.left = -containerWidth * slide + "px";
        dot[slide].classList.add("opacity");
    }
 
}
// show next slide function
const showNextSlide = () => {
    console.log(testimonialSlider.style.left);
    // if testimonialSlide less than totalTestinomialSlideLengths
    if (testimonialSlide < (totalTestinomialSlideLength)) {
        testimonialSlider.style.left = -testimonialTextContainerWidth * testimonialSlide + "px";
        testimonialDot[testimonialSlide].classList.add("opacity");
    }
// if testimonialSlide equal than totalTestinomialSlideLengths
    if (testimonialSlide == totalTestinomialSlideLength) {
        testimonialSlide = 0;
        testimonialSlider.style.left = 0 + "px"
        testimonialDot[testimonialSlide].classList.add("opacity");
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
// when touch is end and after getting the direction in which touch is move
const testimonialTouchEndHandler = (e) => {
    e.preventDefault();
    // if touchStart > touchend it means touch is move to left so show the next slide
    if (testimonialTouchStart > testimonialTouchEnd) {
        if (testimonialSlide < totalTestinomialSlideLength - 1 && testimonialSlide >= -1) {
            testimonialSlider.style.left = -testimonialTextContainerWidth * (testimonialSlide + 1) + "px";
            testimonialDot[testimonialSlide + 1].classList.add("opacity");
            testimonialDot[testimonialSlide].classList.remove("opacity");
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
            testimonialSlider.style.left = -testimonialTextContainerWidth * (testimonialSlide - 1) + "px";
            testimonialDot[testimonialSlide - 1].classList.add("opacity");
            testimonialDot[testimonialSlide].classList.remove("opacity");
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
    e.preventDefault()
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
const nexSlide = () => {
    // showNextSlide();
    commonNextSlide(testimonialSlide, totalTestinomialSlideLength, testimonialSlider, testimonialTextContainerWidth, testimonialDot);
    testimonialSlider.addEventListener("touchstart", testimonialTouchStartHandler);
    testimonialSlider.addEventListener("touchmove", testimonialTouchMoveHandler);
    testimonialSlider.addEventListener("touchend", testimonialTouchEndHandler);
    // addEventListener on each dot
    testimonialDot.forEach((dot) => {
        dot.addEventListener("click", testimonialDotsClicked);
    })

}
// mainTestimonialFunction()
const mainTestimonialFunction = () => {
    // remove class opacity from last dot and call nextslide function
    if (testimonialSlide > 0 && testimonialSlide <= totalTestinomialSlideLength) {
        testimonialDot[testimonialSlide - 1].classList.remove("opacity");

    }
    nexSlide();
};

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
            dashboardImagesSlider.style.left = -dashboardImageContainerWidth * (dashboardSlide + 1) +2+ "px";
            dashboardDots[dashboardSlide + 1].classList.add("opacity");
            dashboardDots[dashboardSlide].classList.remove("opacity");
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
            dashboardImagesSlider.style.left = -dashboardImageContainerWidth * (dashboardSlide - 1) +2+ "px";
            dashboardDots[dashboardSlide - 1].classList.add("opacity");
            dashboardDots[dashboardSlide].classList.remove("opacity");
            // show to current slide for 8sec and after that call the next slide function 

            setTimeout(() => {
                testimonialMoveSlide = true
            }, 8000);
            dashboardSlide = dashboardSlide - 1;
        }
    }
}
// show nextdashboard slide and handle it
const showNextDashboardSlide = () => {
    // if dashboardSlide less dashboardImagesSlider.children.length 
    if (dashboardSlide < (dashboardImagesSlider.children.length)) {
        // adding 2 to dashboardImagesSlider left to make fit the image
        dashboardImagesSlider.style.left = -dashboardImageContainerWidth * dashboardSlide + 2 + "px";
        dashboardDots[dashboardSlide].classList.add("opacity");
    }
    // if dashboardSlide equall dashboardImagesSlider.children.length 

    if (dashboardSlide == dashboardImagesSlider.children.length) {
        dashboardSlide = 0;
        dashboardImagesSlider.style.left = 0 + "px";
        dashboardDots[dashboardSlide].classList.add("opacity");
    }

}

// show slide when dashboard dots clicked
const dashboardDotsClicked = (e) => {
    e.preventDefault();
    // make dashboardMoveSlide = false
    console.log("slide from outside" + dashboardSlide);
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


const nexDashboardSlide = () => {
    // call nextslide function
    showNextDashboardSlide();
    dashboardImagesSlider.addEventListener("touchstart", dashboardTouchStartHandler);
    dashboardImagesSlider.addEventListener("touchmove", dashboardTouchMoveHandler);
    dashboardImagesSlider.addEventListener("touchend", dashboardTouchEndHandler);
    // addEventListener on each dot
    dashboardDots.forEach((dot) => {
        dot.addEventListener("click", dashboardDotsClicked);
    })

}
const mainDashboardFunction = () => {
    // remove class opacity from last dot and call nextslide function
    if (dashboardSlide > 0 && dashboardSlide <= dashboardImagesSlider.children.length) {
        dashboardDots[dashboardSlide - 1].classList.remove("opacity");

    }
    nexDashboardSlide();
}
// call the function after every 4sec
// setInterval(() => {
//     // for dashboardSlide
//     if (dashboardMoveSlide) {
//         dashboardSlide++
//         mainDashboardFunction();
//     }
// }, 4000);
setInterval(() => {
    // for testimonialSlide
    if (testimonialMoveSlide) {
        // testimonialSlide++
        if(testimonialSlide == totalTestinomialSlideLength){
            testimonialSlide = 0;
        }
        testimonialSlide++
        mainTestimonialFunction();
    }
}, 4000);
// and call the function when widow is load

window.onload = () => {

    mainTestimonialFunction();
    mainDashboardFunction();

}