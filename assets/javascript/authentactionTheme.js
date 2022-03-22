$(document).ready(function () {
    const modevalue = localStorage.getItem("goodmeeting_today_color_scheme");
    // console.log(modevalue)
    const changeTheme = () => {
        if (modevalue == 'dark') {
            $(document.body).addClass("darkTheme")
        } else {
            $(document.body).removeClass("darkTheme")
        }
    }
    changeTheme()
})