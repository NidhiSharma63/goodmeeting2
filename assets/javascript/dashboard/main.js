$(document).ready(function () {
    // $('.moon').click(() => {
    //     const getModeValue = localStorage.getItem("goodmeeting_today_color_scheme");
    //         if(getModeValue==='dark'){
    //             $(document.body).removeClass("darkTheme");
    //             localStorage.setItem("goodmeeting_today_color_scheme", 'light');
    //         }else{
    //             $(document.body).addClass("darkTheme");
    //             localStorage.setItem("goodmeeting_today_color_scheme", 'dark');
    //         }
    // })

    const handleSideBar = () => {
        $('.contentContainer').toggleClass('shrinkContainerWidht');
        $('.iconsInfo').toggleClass('show');
        $('.iconsContainer').toggleClass('boxShadowRemove');
    }
    $('.sideBar').click(() => {
        handleSideBar();
    });
    $('.stat1').click(() => {
        handleSideBar();
    });
    $('.stat2').click(() => {
        handleSideBar();
    });
    $('.stat3').click(() => {
        handleSideBar();
    });
    $('.help').click(() => {
        handleSideBar();
    });
    $('.feedback').click(() => {
        handleSideBar();
    });
});