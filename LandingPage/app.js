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

    });

    $(".logBtn").click(function () {
        let user = $("#email").val();
        let pass = $("#logPassword").val();
        loginBtn.signIn(user, pass);
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
                var vin = $("#vin").val();
                var plate = $("#regPlateNum").val();
                var uid = user.uid;
                var make = null;
                var model = null;
                var year = null;
                $.get({
                    url: `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${vin}?format=json`,
                    method: "GET",
                    success: function (response) {

                        make = response.Results[0].Make;
                        model = response.Results[0].Model;
                        year = response.Results[0].ModelYear;
                        console.log("car api started");

                    }

                }).then(() => {
                    firebase.database().ref(uid).once('value').then(function (snapshot) {
                        const user = snapshot.val();
                        console.log("database starts");
                        if (user) {
                            console.log("user exists!");
                        } else {
                            function writeUserData(uid, plate, vin, make, model, year) {

                                firebase.database().ref(uid).set({
                                    plate: plate,
                                    vin: vin,
                                    make: make,
                                    model: model,
                                    year: year,
                                    messages: { "0": "Welcome to Tagged!" }
                                });
                            }
                            writeUserData(uid, plate, vin, make, model, year);
                        }
                    }).then(() => {
                        loginBtn.renderHomePage();
                    }).then(() => {
                        window.location = '../HomePage/index.html';
                    });
                });
            }
        });
    }
    stateListener();
});
