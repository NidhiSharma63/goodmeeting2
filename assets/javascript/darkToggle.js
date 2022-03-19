$(document).ready(function () {
    let mode = document.querySelector(".mode")
    // make moon visible full
    const moonVisible = () => {
        if ($(".moon").hasClass('nonVisible')) {
            $(".moon").removeClass('nonVisible')
        }
        $(".moon").addClass('visible');
        $(".sun").addClass('nonVisible');
    }
    // make moon invisible full
    const moonNonVisible = () => {
        $(".moon").addClass('nonVisible');
        $(".sun").removeClass('nonVisible')
    }
    // get localStorage value
    let setMode = localStorage.getItem("goodmeeting_today_color_scheme");
    if (setMode === null) {
        mode.href = '/assets/css/lightTheme.css';
        moonNonVisible();
        $(".logoContainer").html(`<img src = "/assets/images/logo.png"></img>`);
    } else if (setMode === 'dark') {
        mode.href = '/assets/css/darkTheme.css';
        moonVisible();
        $(".logoContainer").html(`<img src = "/assets/images/logo2.png"></img>`);
    } else {
        mode.href = '/assets/css/lightTheme.css';
        moonNonVisible();
        $(".logoContainer").html(`<img src = "/assets/images/logo.png"></img>`);
    }
    $('.darkSwitch').click(function () {
        // If the current URL contains "ligh-theme.css"
        if (mode.getAttribute("href") == "/assets/css/lightTheme.css") {
            // ... then switch it to "dark-mode.css"
            localStorage.setItem("goodmeeting_today_color_scheme", 'dark');
            mode.href = '/assets/css/darkTheme.css';
            $(".logoContainer").html(`<img src = "/assets/images/logo2.png"></img>`)
            moonVisible()
        } else {
            // ... switch it to "lightTheme-mode.css"
            moonNonVisible()
            mode.href = "/assets/css/lightTheme.css";
            $(".logoContainer").html(`<img src = "/assets/images/logo.png"></img>`);
            localStorage.setItem("goodmeeting_today_color_scheme", 'light');
        }
    });

});