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
   
});
