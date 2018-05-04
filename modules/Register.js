class Register {
    constructor() {

    }
    registerButtonAnimate() {
        let viewportWidth = $(window).width();
        let viewportHeight = $(window).height();
        $("#logo-jumbotron").animate({ 
            bottom: viewportHeight - 560,
            left: viewportWidth - 800,  
            width: 300
        });
    }
}