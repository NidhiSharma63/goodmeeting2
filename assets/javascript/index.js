$(document).ready(function () {
    const headerBox = $(".headerBox");
    const headerContainer = $(".headerContainer");
    const sideBar = $(".sideBar");
    const sideBarDivContainer = $(".sideBarDivContainer")
    if (matchMedia) {
        var mq2 = window.matchMedia("(max-width: 945px)");
        mq2.addListener(WidthChange2);
        WidthChange2(mq2);
    }
    // media query change
    function WidthChange2(width2) {
        if (width2.matches) {
            headerBox.addClass("hide");
            sideBar.removeClass("hide");
            headerContainer.css("justify-content", " space-between")
        } else {
            headerBox.removeClass("hide");
            headerContainer.css("justify-content", " space-around")
            sideBar.addClass("hide")
        }
    }
    sideBar.click(() => {
        if (sideBarDivContainer.hasClass("hide")) {
            sideBarDivContainer.removeClass("hide");
            sideBarDivContainer.addClass("sideBarDivContainerShow");
            sideBarDivContainer.removeClass("sideBarDivContainerHide");
            sideBar.addClass("barMarginShow");
            sideBar.removeClass("barMarginHide");
        } else {
            sideBarDivContainer.removeClass("sideBarDivContainerShow");
            sideBarDivContainer.addClass("sideBarDivContainerHide");
            sideBar.removeClass("barMarginShow");
            sideBar.addClass("barMarginHide");
            setTimeout(() => {
                sideBarDivContainer.addClass("hide");
            }, 800);
        }
    });

    // declare switchDarkTheme function
    const switchDarkTheme = () =>{
        $(document.body).addClass("darkTheme");
        $(".logoContainer").html(`<img src = "/assets/images/header/logo2.png"></img>`);
    }
    // declare switchLightTheme function
    const switchLightTheme = () =>{
        $(document.body).removeClass("darkTheme");
        $(".logoContainer").html(`<img src = "/assets/images/header/logo.png"></img>`);
    }
    // make testimonial and footer light black
    const changeTestimonialsFooterColor = () =>{
        $(".section6").css("background-color","#313640");
        $(".slider").css("background-color","#313640");
    }
    let setMode = localStorage.getItem("goodmeeting_today_color_scheme");
    if (setMode === 'dark') {
        switchDarkTheme();
        changeTestimonialsFooterColor();
    } else {
        switchLightTheme()
    }
    // Select the button
    const btns = document.querySelectorAll(".darkSwitch");
    // Listen for a click on the button
    btns.forEach(btn => {
        btn.addEventListener("click", function () {
            if ($(document.body).hasClass("darkTheme")) {
                // ... then switch it to "lightTheme-mode.css"
                localStorage.setItem("goodmeeting_today_color_scheme", 'light');
                switchLightTheme()
                $(".logoContainer").html(`<img src = "/assets/images/header/logo.png"></img>`)
            } else {
                // ... switch it to "darkTheme-mode.css"
                switchDarkTheme();
                changeTestimonialsFooterColor();
                localStorage.setItem("goodmeeting_today_color_scheme", 'dark');
            }
        });
    });
});