$(document).ready(() => {

    const testimonialTextContainer = document.querySelector(".testimonialTextContainer")
    let width = testimonialTextContainer.offsetWidth;
    const testimonialSlider = document.querySelector(".testimonialSlider");
    const testimonials = document.querySelectorAll(".testimonial");
    const testimonialDot = document.querySelectorAll(".testimonialDot");
    window.addEventListener('resize', function () {
        width = testimonialTextContainer.offsetWidth;
    });
    let count = 0;
    const nexSlide = () => {
        if (count < testimonials.length - 1) {
            testimonialSlider.style.left = -width * count + "px"
            testimonialDot[count].classList.add("opacity");
        }
        count++
        if (count == testimonials.length) {
            count = 0;
            testimonialSlider.style.left = 0 + "px"
            testimonialDot[count].classList.add("opacity");
        }
    }
    setInterval(() => {
        // remove class opacity from last dot
        if (count > 0 && count < testimonials.length) {
            testimonialDot[count - 1].classList.remove("opacity");

        }
        nexSlide();
    }, 3000);

    testimonialDot.forEach((dot) => {
        dot.addEventListener("click", () => {
            testimonialSlider.style.left = -width * dot.dataset.testimonial + "px";
            testimonialDot[count].classList.remove("opacity");
            testimonialDot[dot.dataset.testimonial].classList.add("opacity");
        })
    })

    window.onload = nexSlide();
});