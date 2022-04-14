$(document).ready(() => {
    let setMode = localStorage.getItem("goodmeeting_today_color_scheme");
    // declare switchDarkTheme function
    const switchDarkTheme = () => {
        $(document.body).addClass("darkTheme");
        $(".logoContainer").html(`<img src = "./assets/images/header/logo2.png"></img>`);
    }
    // declare switchLightTheme function
    const switchLightTheme = () => {
        $(document.body).removeClass("darkTheme");
        $(".logoContainer").html(`<img src = "./assets/images/logo.png"></img>`);
    }
    // make testimonial and footer light black
    const changeTestimonialsFooterColor = () => {
        $(".section6").css("background-color", "#313640");
        $(".slider").css("background-color", "#313640");
    }
    const showSun = () => {
        $(".sun").removeClass("nonVisible")
        $(".sun").addClass("sunBlock");
        $(".moon").addClass("hide");
    }
    const showMoon = () => {
        $(".sun").addClass("nonVisible")
        $(".sun").removeClass("sunBlock");
        $(".moon").removeClass("hide");
    }
    if (setMode === 'dark') {
        switchDarkTheme();
        showMoon();
        changeTestimonialsFooterColor();
    } else {
        switchLightTheme();
        showSun();
    }
    // Select the button
    const btns = document.querySelector(".darkSwitch");
    // Listen for a click on the button
    btns.addEventListener("click", function () {
        if ($(document.body).hasClass("darkTheme")) {
            // ... then switch it to "lightTheme-mode.css"
            localStorage.setItem("goodmeeting_today_color_scheme", 'light');
            switchLightTheme();
            showSun();
        } else {
            // ... switch it to "darkTheme-mode.css"
            showMoon();
            switchDarkTheme();
            changeTestimonialsFooterColor();
            localStorage.setItem("goodmeeting_today_color_scheme", 'dark');
        }
    });
    $(".moon").click(() => {
        showSun();
    });
    $(".sun").click(() => {
        showMoon();
    })
});