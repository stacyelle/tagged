$(function () {
    let registration = new Register();
    let login = new Login();

    $(".register").click(() => {
        registration.registerButtonAnimate();
        $(".arrow").fadeOut();
        $(".regForm").fadeIn();
    });
    $(".login").click(() => {
        login.loginButtonAnimate();
        $(".arrow").fadeOut();
        $(".logForm").fadeIn();
    });

    // button submits for register and login
    $(".regBtn").click(function () {
        let email = $("#emailAddress").val();
        let pass = $("#regPassword").val();
        registration.handleSignUp(email, pass);

    });

    $(".logBtn").click(function () {
        let user = $("#email").val();
        let pass = $("#logPassword").val();
        login.signIn(user, pass);
    });

    // smooth scroll with link clicks
    $('.tagged').on('click', function (event) {
        var target = $(this.getAttribute('href'));

        if (target.length) {
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
                let uid = user.uid;

                firebase.database().ref(`users/${uid}`).once('value').then(function (snapshot) {
                    const user = snapshot.val();
                    console.log();
                    if (user == null) {

                        let vin = $("#vin").val();
                        let plate = $("#regPlateNum").val();
                        $.get({
                            url: `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${vin}?format=json`,
                            method: "GET",
                            success: function (response) {

                                let make = response.Results[0].Make;
                                let model = response.Results[0].Model;
                                let year = response.Results[0].ModelYear;
                                console.log("car api started");
                                registration.writeUserData(uid, plate, vin, make, model, year);
                            }

                        }).then(() => {
                            window.location ='../HomePage/index.html';
                       });
                    }else {
                        window.location ='../HomePage/index.html';
                    }
                });
            };
        });
    };

    stateListener();
});
