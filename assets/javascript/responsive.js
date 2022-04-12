$(document).ready(() => {
    const headerBox = $(".headerBox");
    const headerContainer = $(".headerContainer");
    const sideBar = $(".sideBar");
    const sideBarDivContainer = $(".sideBarDivContainer");
    if (matchMedia) {
        var mq2 = window.matchMedia("(max-width: 945px)");
        mq2.addListener(WidthChange2);
        WidthChange2(mq2);
    }
    // media query change
    function WidthChange2(width2) {
        if (width2.matches) {
            headerBox.addClass("hide");
            sideBar.removeClass("hide");
            headerContainer.css("justify-content", " space-between")
        } else {
            headerBox.removeClass("hide");
            headerContainer.css("justify-content", " space-around")
            sideBar.addClass("hide")
        }
    }
    sideBar.click(() => {
        if (sideBarDivContainer.hasClass("hide")) {
            sideBarDivContainer.removeClass("hide");
            sideBarDivContainer.addClass("sideBarDivContainerShow");
            sideBarDivContainer.removeClass("sideBarDivContainerHide");
            sideBar.addClass("barMarginShow");
            sideBar.removeClass("barMarginHide");
            $("body").css("overflow-y", "hidden");
        } else {
            sideBarDivContainer.removeClass("sideBarDivContainerShow");
            sideBarDivContainer.addClass("sideBarDivContainerHide");
            sideBar.removeClass("barMarginShow");
            sideBar.addClass("barMarginHide");
            $("body").css("overflow-y", "visible");
            setTimeout(() => {
                sideBarDivContainer.addClass("hide");
            }, 800);
        }
    });

    
});