$(document).ready(function () {
    const modevalue = localStorage.getItem("goodmeeting_today_color_scheme");
    // console.log(modevalue)
    const changeTheme = () => {
        if (modevalue == 'dark') {
            $(document.body).addClass("darkTheme");
            $('.section1 .col2 .col2Container').css('color','white')
        } else {
            $(document.body).removeClass("darkTheme")
            $('.section1 .col2 .col2Container').css('color','var(--secondary-color)')
        }
    }
    changeTheme();
    $('.sideBar').click(function(){
        $('.contentContainer').toggleClass('shrinkContainerWidht');
        $('.iconsInfo').toggleClass('show');
        $('.iconsContainer').toggleClass('boxShadowRemove');
    });
    $('.stat1').click(function(){
        $('.contentContainer').toggleClass('shrinkContainerWidht');
        $('.iconsInfo').toggleClass('show');
        $('.iconsContainer').toggleClass('boxShadowRemove');
    });
    $('.stat2').click(function(){
        $('.contentContainer').toggleClass('shrinkContainerWidht');
        $('.iconsInfo').toggleClass('show');
        $('.iconsContainer').toggleClass('boxShadowRemove');
    });
    $('.stat3').click(function(){
        $('.contentContainer').toggleClass('shrinkContainerWidht');
        $('.iconsInfo').toggleClass('show');
        $('.iconsContainer').toggleClass('boxShadowRemove');
    });
    $('.help').click(function(){
        $('.contentContainer').toggleClass('shrinkContainerWidht');
        $('.iconsInfo').toggleClass('show');
        $('.iconsContainer').toggleClass('boxShadowRemove');
    });
     $('.feedback').click(function(){
        $('.contentContainer').toggleClass('shrinkContainerWidht');
        $('.iconsInfo').toggleClass('show');
        $('.iconsContainer').toggleClass('boxShadowRemove');
    });
});
