$(document).ready(function () {

    // make headerContainer fixed on scrolling
    window.onscroll = () => {
        // if (window.scrollY > 110) {
        //     console.log("fixed");
        //     $('.headerContainer').addClass('fixed');
        //     $('.headerBox').addClass('headerBoxFixed');
        //     $('.section2').addClass('section2Fixed')
        // } else {
        //     $('.headerContainer').removeClass('fixed');
        //     $('.headerBox').removeClass('headerBoxFixed');
        //     $('.section2').removeClass('section2Fixed')
        // }
    }
    if (matchMedia) {
        var mq = window.matchMedia("(max-width: 1104px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
    }

    if (matchMedia) {
        var mq2 = window.matchMedia("(max-width: 900px)");
        mq2.addListener(WidthChange2);
        WidthChange2(mq2);
    }
    // media query change
    function WidthChange(width) {
        
        if (width.matches) {
            console.log("changed")
            $(".headerContainer").addClass("flex");
            $(".headerBox").addClass("flexGrowHalf")
            $(".headerLogo").removeClass("hide");
            $(".headerBoxLogo").addClass("hide");
        } else {
            $(".headerContainer").removeClass("flex");
            $(".headerBox").removeClass("flexGrowHalf")
            $(".headerBoxLogo").removeClass("hide");
            $(".headerLogo").addClass("hide");
        }
    }
    
    // media query change
    function WidthChange2(width) {
       if(width.matches){
        $(".headerBox").addClass("headerBoxFlex");
        $(".headerBox").addClass("hide");
        $(".sideBar").removeClass("hide");
        $(".ulContainer").css("width","10rem");
        $(".ulContainer").css("margin-top","8rem");
        $(".ulContainer").css("height","10rem");
        $(".ul").css("flex-direction","column");
        $(".login_logout_section").css("height","14rem");
        $(".login_logout_section").css("flex-direction","column");
       }
    }

    if (matchMedia) {
        var mq3 = window.matchMedia("(min-width: 901px)");
        mq3.addListener(WidthChange3);
        WidthChange3(mq3);
    }
    // media query change
    function WidthChange3(width2) {
        
        if (width2.matches) {
            $(".headerBox").removeClass("headerBoxFlex");
        $(".headerBox").removeClass("hide");
        $(".sideBar").addClass("hide");
        $(".ulContainer").css("width","29rem");
        $(".ulContainer").css("margin-top","0rem");
        $(".ulContainer").css("height","0rem");
        $(".ul").css("flex-direction","row");
        $(".login_logout_section").css("height","0rem");
        $(".login_logout_section").css("flex-direction","row");
        }
    }
    $(".sideBar").click(()=>{
        $(".headerBox").removeClass("hide");
        $(".headerBox").addClass("sideBarDivShow")
    })
});