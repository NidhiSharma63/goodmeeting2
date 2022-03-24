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

$(document).ready(() => {
    const testimonialDot = document.querySelectorAll(".testimonialDot")
    let i = 1;
    $(".testimonialText").html((testimonialArrayText)[0]);
    $(".userName").html(testimonialUserName[0]);
    $(".userStatus").html(testimonialUserStatus[0]);
    testimonialDot.forEach((item) => {
        if (0 == item.dataset.testimonial) {
            item.classList.add("opacity")
        } else {
            item.classList.remove("opacity")
        }
    });
    $("#testimonialDot1").click(() => {
        $(".testimonialText").html((testimonialArrayText)[0]);
        $(".userName").html(testimonialUserName[0]);
        $(".userStatus").html(testimonialUserStatus[0]);
        i=0;
    });
    $("#testimonialDot2").click(() => {
        $(".testimonialText").html((testimonialArrayText)[1]);
        $(".userName").html(testimonialUserName[1]);
        $(".userStatus").html(testimonialUserStatus[1]);
        i=1;
    });
    $("#testimonialDot3").click(() => {
        $(".testimonialText").html((testimonialArrayText)[2]);
        $(".userName").html(testimonialUserName[2]);
        $(".userStatus").html(testimonialUserStatus[2]);
        i=2;
    });
 
    setInterval(() => {
        if (i == 3) {
            i = 0;
        }
        $(".testimonialText").html((testimonialArrayText)[i]);
        $(".userName").html(testimonialUserName[i]);
        $(".userStatus").html(testimonialUserStatus[i]);
        testimonialDot.forEach((item) => {
            if (i == item.dataset.testimonial) {
                item.classList.add("opacity")
            } else {
                item.classList.remove("opacity")
            }
        });
        i += 1
    }, 4000);

});