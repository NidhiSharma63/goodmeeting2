$(document).ready(function () {

    // make headerContainer fixed on scrolling
    window.onscroll = () => {
        if (window.scrollY > 110) {
            console.log("fixed");
            $('.headerContainer').addClass('fixed');
            $('.headerBox').addClass('headerBoxFixed');
            $('.section2').addClass('section2Fixed')
        } else {
            $('.headerContainer').removeClass('fixed');
            $('.headerBox').removeClass('headerBoxFixed');
            $('.section2').removeClass('section2Fixed')
        }
    }
    if (matchMedia) {
        var mq = window.matchMedia("(max-width: 1280px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
    }

    // media query change
    function WidthChange(mq) {
        if (mq.matches) {
            $(".sideBar").removeClass("hide");
            $(".sideBar").css("margin-top","1rem")
            $(".headerBox").addClass("sideBarDiv");
            $(".ul").addClass("sideBarDivUl");
            $(".logoContainer").addClass("hide");
            $(".login_logout_section ").addClass("sideBarDivloginLogoutSection");
            $('.headerContainer').addClass('sideBarHeaderContainer');
            $('.headerContainer').css("box-shadow","0rem 0.1rem 0.1rem -0.1rem #313640");
            $(".sideBarLogo").removeClass("hide");
            $(".sideBarLogo").css("margin-top","1rem");
            $('.headerBox').removeClass('headerBoxFixed');
            $(".darkSwitch").css("margin-left","9rem")
        } else {
            $(".loginBtn").removeClass("hide");
            $(".registerBtn").removeClass("hide");
            $(".ul").removeClass("hide");
            $(".sideBar").addClass("hide");
            $(".sideBar").removeClass("sideBarLogoAnim");
            $(".sideBarLogo").addClass("hide");
            $(".logoContainer").removeClass("hide");
            $(".headerBox").removeClass("sideBarDiv");
            $(".ul").removeClass("sideBarDivUl");
            $(".login_logout_section ").removeClass("sideBarDivloginLogoutSection");
            $('.headerBox').addClass('headerBoxFixed');
            $('.headerContainer').removeClass('sideBarHeaderContainer');
            $('.headerContainer').css("box-shadow","0");

            $(".darkSwitch").css("margin-left","0rem")
        }
    }
    $(".sideBar").click(function () {
        if ($(".sideBarDiv").hasClass("sideBarDivShow")) {
            $(".sideBarDiv").addClass("sideBarDivHide")
            $(".sideBar").addClass("sideBarLogoAnimHide");
            setTimeout(() => {
                $(".sideBarDiv").removeClass("sideBarDivShow")
                $(".sideBar").removeClass("sideBarLogoAnim");
            }, 1000);
        } else {
            $(".sideBarDiv").addClass("sideBarDivShow")
            $(".sideBar").addClass("sideBarLogoAnim");
            $(".sideBarDiv").removeClass("sideBarDivHide")
            $(".sideBar").removeClass("sideBarLogoAnimHide");
        }
    })
});