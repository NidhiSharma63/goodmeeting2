$(document).ready(function () {
    const modevalue = localStorage.getItem("goodmeeting_today_color_scheme");
    const moon = $('.moon');
    const sun = $('.sun');
    // declare fun.. to handle dark theme and light theme
    const showSun = () =>{
        moon.removeClass('visible');
        moon.addClass('hide');
        sun.removeClass('nonVisible')
        sun.addClass('sunBlock');
        $(document.body).removeClass("darkTheme");
        $(".logo").html(`<img src = "/assets/images/logo.png"></img>`);
    }
    const showMoon = () =>{
        moon.addClass('visible');
        moon.removeClass('hide');
        sun.addClass('nonVisible')
        sun.removeClass('sunBlock');
        $(document.body).addClass("darkTheme");
        $(".logo").html(`<img src = "/assets/images/header/logo2.png"></img>`);
    }
    // switch to light theme
    moon.click(()=>{
        showSun();
    });
    // switch to dark theme
    sun.click(()=>{
       showMoon();
    });
    // change theme value according to home page
    const changeTheme = () => {
        if (modevalue == 'dark') {
            showMoon();
        } else {
            showSun()
        }
    }
   window.onload = changeTheme();
})