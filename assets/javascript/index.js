// testimonial text
const testimonialArrayText = [
    "Good Meeting Today has improved my meeting planning, execution and preparation and in turn increased my meeting productivity notably. The platform is simple and easy to use and provides you with accountability for your meetings. I have gotten addicted to improving my meeting score!",
    "After being forced to move twice within five years, our customers had a hard time finding us and our sales plummeted. The Lorem Ipsum Co. not only revitalized our brand, but saved our nearly 100-year-old family business from the brink of ruin by optimizing our website for search and creating our Google My Business listing.",
    "I was skeptical of SEO and content marketing at first, but the Lorem Ipsum Company not only proved itself financially speaking, but the response I have received from customers is incredible. The work is top-notch and I consistently outrank all my competitors on Google."
]
const testimonialUserName = [
    "Mimi",
    "Mike Brashears",
    "Rob Joor"
]
const testimonialUserStatus = [
    "Junior Project Manager,London",
    "Owner, Brashears Insurance",
    "Owner, Joors Welding and Metal Service"
]
const testimonialTextContainer = document.querySelector(".testimonialTextContainer")
const width = testimonialTextContainer.offsetWidth;
const testimonialSlider = document.querySelector(".testimonialSlider");
const testimonials = document.querySelectorAll(".testimonial");
$(document).ready(() => {
   let count = 0;
   const nexSlide = () =>{
       if(count<testimonials.length-1){
        testimonialSlider.style.left = -width*count+"px"
       }
       count++
       if(count==testimonials.length){
           count=0;
       }
   }
setInterval(() => {
    nexSlide();
}, 4000);
});