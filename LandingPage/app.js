$(function () {
    let registerBtn = new Register();
    let loginBtn = new Login();

    $(".register").click(() => {
        registerBtn.registerButtonAnimate();
        $(".arrow").fadeOut();
        $(".regForm").fadeIn();
    });
    $(".login").click(() => {
        loginBtn.loginButtonAnimate();
        $(".arrow").fadeOut();
        $(".logForm").fadeIn();
    });

    // button submits for register and login
    $(".regBtn").click(function () {
        let email = $("#emailAddress").val();
        let pass = $("#regPassword").val();
        let vin = $("#vin").val();
        registerBtn.handleSignUp(email, pass);
        function writeUserData(userId, plate, vin) {
            firebase.database().ref(userId).set({
                plate: plate,
                vin: vin,
                messages: ["Welcome to Tagged!"]
            });
        }

    });
    
    $(".logBtn").click(function () {
        let user = $("#email").val();
        let pass = $("#logPassword").val();
        loginBtn.signIn(user, pass);
    });

    // smooth scroll with link clicks
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));

    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
      $(".arrow").fadeOut();
      $(".regForm").fadeOut();
      $(".logForm").fadeOut();

    }
});
    let stateListener = () => {
    firebase.auth().onAuthStateChanged(function (user) {

        if (user) {
            // User is signed in.
        setTimeout(function(){
            window.location = '../HomePage/index.html';
        },800);
            console.log("signed in");          
        }
  
    });
}
stateListener();
});
