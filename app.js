$(function () {
    let registerBtn = new Register();
    let loginBtn = new Login();

    $(".register").click(() => {
        registerBtn.registerButtonAnimate();
    });
    $(".login").click(() => {
        loginBtn.loginButtonAnimate();
    });

// button submits for register and login
    $(".regBtn").click(function () {
        let email = $("#emailAddress").val();
        let pass = $("#regPassword").val();
        registerBtn.handleSignUp(email, pass);
    });

    $(".logBtn").click(function () {
        let user = $("#plateNum").val();
        let pass = $("#logPassword").val();
        
    });



});