$(document).ready(() => {
    // declare switchDarkTheme function
    const switchDarkTheme = () => {
        $(document.body).addClass("darkTheme");
        $(".logoContainer").html(`<img src = "./assets/images/header/logo2.png"></img>`);
    }
    // declare switchLightTheme function
    const switchLightTheme = () => {
        $(document.body).removeClass("darkTheme");
        $(".logoContainer").html(`<img src = "./assets/images/header/logo.png"></img>`);
    }
    // make testimonial and footer light black
    const changeTestimonialsFooterColor = () => {
        $(".section6").css("background-color", "#313640");
        $(".slider").css("background-color", "#313640");
    }
    // show dark text and move circle
    const showDarkMode = () => {
        if ($(".circle").hasClass("circleMoveLeft")) {
            $(".circle").removeClass("circleMoveLeft");
        }
        $(".circle").addClass("circleMoveRight");
        $(".circle").css("margin-left", "1rem");
        $(".light").addClass("nonVisible");
        $(".dark").addClass("visible");
        $(".dark").removeClass("nonVisible");
    }
    // show light text and move circle
    const showLightMode = () => {
        if ($(".circle").hasClass("circleMoveRight")) {
            $(".circle").removeClass("circleMoveRight");
        }
        $(".circle").addClass("circleMoveLeft");
        $(".circle").css("margin-left", "-4rem");
        $(".light").removeClass("nonVisible");
        $(".dark").addClass("nonVisible");
    }
    let setMode = localStorage.getItem("goodmeeting_today_color_scheme");
    if (setMode === 'dark') {
        switchDarkTheme();
        showDarkMode();
        changeTestimonialsFooterColor();
    } else {
        switchLightTheme();
        showLightMode();
    }
    // Select the button
    const btns = document.querySelectorAll(".darkSwitch");
    // Listen for a click on the button
    btns.forEach(btn => {
        btn.addEventListener("click", function () {

            if ($(document.body).hasClass("darkTheme")) {
                // ... then switch it to "lightTheme-mode.css"
                localStorage.setItem("goodmeeting_today_color_scheme", 'light');
                switchLightTheme();
                showLightMode();
            } else {
                // ... switch it to "darkTheme-mode.css"
                showDarkMode();
                switchDarkTheme();
                changeTestimonialsFooterColor();
                localStorage.setItem("goodmeeting_today_color_scheme", 'dark');
            }
        });
    });
});