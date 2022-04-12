$(document).ready(function () {
    const handleSideBar = () => {
        $('.contentContainer').toggleClass('shrinkContainerWidht');
        $('.iconsInfo').toggleClass('show');
        $('.iconsContainer').toggleClass('boxShadowRemove');
    }
    const handleSideBarOnWidthChange = () => {
        $('.iconsInfo').toggleClass('show');
        $('.iconsContainer').toggleClass('boxShadowRemove');
    }
   
    if (matchMedia) {
        var mq2 = window.matchMedia("(max-width: 965px)");
        mq2.addListener(WidthChange2);
        WidthChange2(mq2);
    }
    // media query change
    function WidthChange2(width2) {
        if (width2.matches) {
            $('.sideBar').click(() => {
                handleSideBarOnWidthChange();
            });
            $('.stat1').click(() => {
                handleSideBarOnWidthChange();
            });
            $('.stat2').click(() => {
                handleSideBarOnWidthChange();
            });
            $('.stat3').click(() => {
                handleSideBarOnWidthChange();
            });
            $('.help').click(() => {
                handleSideBarOnWidthChange();
            });
            $('.feedback').click(() => {
                handleSideBarOnWidthChange();
            });
        } else {
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
        }
    }
  
});
