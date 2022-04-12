$(document).ready(function () {
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
    if (matchMedia) {
        var mq2 = window.matchMedia("(max-width: 950px)");
        mq2.addListener(WidthChange2);
        WidthChange2(mq2);
    }
    // media query change
    function WidthChange2(width2) {
        if (width2.matches) {$('.contentContainer').removeClass('shrinkContainerWidht');
        } else {
            headerBox.removeClass("hide");
            headerContainer.css("justify-content", " space-around")
            sideBar.addClass("hide")
        }
    }
});
