$(function(){
    let registerBtn = new Register();
    let loginBtn = new Login();
    
    $(".register").click(() => {
        registerBtn.registerButtonAnimate();
    });
    $(".login").click(() => {
        loginBtn.loginButtonAnimate();
    });
})