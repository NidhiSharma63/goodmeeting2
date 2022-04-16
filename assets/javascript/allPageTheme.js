$(document).ready(function () {
    const modevalue = localStorage.getItem("goodmeeting_today_color_scheme");
    const moon = $('.moon');
    const sun = $('.sun');
    // declare fun.. to handle dark theme and light theme
    const showSun = () =>{
        moon.removeClass('moonBlock');
        moon.addClass('nonVisible');
        sun.removeClass('nonVisible')
        sun.addClass('sunBlock');
        $(document.body).removeClass("darkTheme");
        $(".logoContainer").html(`<img src = "/assets/images/logo.png"></img>`);
    }
    const showMoon = () =>{
        moon.removeClass('nonVisible');
        moon.addClass('moonBlock')
        sun.addClass('nonVisible')
        sun.removeClass('sunBlock');
        $(document.body).addClass("darkTheme");
        $(".logoContainer").html(`<img src = "/assets/images/header/logo2.png"></img>`);
    }
    // switch to light theme
    moon.click(()=>{
        showSun();
        localStorage.setItem("goodmeeting_today_color_scheme", 'light');
    });
    // switch to dark theme
    sun.click(()=>{
       showMoon();
       localStorage.setItem("goodmeeting_today_color_scheme", 'dark');
    });
    // change theme value according to home page
    const changeTheme = () => {
        if (modevalue == 'dark') {
            showMoon();
        } else {
            showSun()
        }
    }
     changeTheme();
})