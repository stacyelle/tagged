class Register {
    constructor() {

    }
    registerButtonAnimate() {
        let viewportWidth = $(window).width();
        let viewportHeight = $(window).height();
        
        $("#logo-jumbotron").animate({ 
            position: "absolute",
            bottom: viewportHeight / 6,
            width: "50px", //800
            height: "50px" //400
        });
        $(".logForm").animate({
            left: "150%"
            
        });
        $(".regForm").animate({
            left: "45%"
        });
    }
}