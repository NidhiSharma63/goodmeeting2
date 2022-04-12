$(document).ready(() => {
    const headerBox = $(".headerBox");
    const headerContainer = $(".headerContainer");
    const sideBar = $(".sideBar");
    const sideBarDivContainer = $(".sideBarDivContainer");
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