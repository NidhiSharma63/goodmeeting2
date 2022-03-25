
const testimonialTextContainer = document.querySelector(".testimonialTextContainer")
let width = testimonialTextContainer.offsetWidth;
const testimonialSlider = document.querySelector(".testimonialSlider");
const testimonialContent = document.querySelectorAll(".testimonialContent");
const testimonialDot = document.querySelectorAll(".testimonialDot");
window.addEventListener('resize', function () {
    width = testimonialTextContainer.offsetWidth;
});
// initialize varibale
let count = 0;
let moveSlide = true;

const nexSlide = () => {
    // if count less than testimonialContent.length move slider
    if (count < testimonialContent.length) {
        testimonialSlider.style.left = -width * count + "px"
        testimonialDot[count].classList.add("opacity");
    }
    // addEventListener on each dot
    testimonialDot.forEach((dot) => {
        dot.addEventListener("click", (e) => {
            // make moveSlide = false
            moveSlide = false;
                if (count != e.target.dataset.testimonial) {
                    testimonialDot[count].classList.remove("opacity");
                }
            testimonialDot[e.target.dataset.testimonial].classList.add("opacity");
            count = e.target.dataset.testimonial;
            testimonialSlider.style.left = -width * count + "px"
            setTimeout(() => {
                moveSlide = true
            }, 8000);
        })
    })

    if (count == testimonialContent.length) {
        count = 0;
        testimonialSlider.style.left = 0 + "px"
        testimonialDot[count].classList.add("opacity");
    }
}
const mainFunction = () => {
    // remove class opacity from last dot and call nextslide function
    if (count > 0 && count <= testimonialContent.length) {
        testimonialDot[count - 1].classList.remove("opacity");

    }
    nexSlide();
}
setInterval(() => {
    if (moveSlide) {
        count++
        mainFunction();
    }
}, 4000);

mainFunction();