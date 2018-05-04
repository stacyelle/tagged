$(function(){
    let registerBtn = new Register();
    $(".registerForm").hide();
    
    $(".register").click(() => {
        registerBtn.registerButtonAnimate();
    });
})