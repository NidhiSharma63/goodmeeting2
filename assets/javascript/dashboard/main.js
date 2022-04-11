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
    changeTheme();
    $('.sideBar').click(function(){
        $('.contentContainer').toggleClass('shrinkContainerWidht');
        $('.iconsInfo').toggleClass('show')
    });
    $('.stat1').click(function(){
        $('.contentContainer').toggleClass('shrinkContainerWidht');
        $('.iconsInfo').toggleClass('show')
    });
    $('.stat2').click(function(){
        $('.contentContainer').toggleClass('shrinkContainerWidht');
        $('.iconsInfo').toggleClass('show')
    });
    $('.stat3').click(function(){
        $('.contentContainer').toggleClass('shrinkContainerWidht');
        $('.iconsInfo').toggleClass('show')
    });
    $('.help').click(function(){
        $('.contentContainer').toggleClass('shrinkContainerWidht');
        $('.iconsInfo').toggleClass('show')
    });
     $('.feedback').click(function(){
        $('.contentContainer').toggleClass('shrinkContainerWidht');
        $('.iconsInfo').toggleClass('show')
    });
});
