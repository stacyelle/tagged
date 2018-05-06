$(function () {
    let registerBtn = new Register();
    let loginBtn = new Login();

    $(".register").click(() => {
        registerBtn.registerButtonAnimate();
        $(".arrow").hide();
    });
    $(".login").click(() => {
        loginBtn.loginButtonAnimate();
        $(".arrow").hide();
    });

    // button submits for register and login
    $(".regBtn").click(function () {
        let email = $("#emailAddress").val();
        let pass = $("#regPassword").val();
        let plate = $("#regPlateNum").val();
        registerBtn.handleSignUp(email, pass);
    });

    $(".logBtn").click(function () {
        let user = $("#email").val();
        let pass = $("#logPassword").val();
        loginBtn.toggleSignIn(user, pass);  
    });

    firebase.auth().onAuthStateChanged(function (user) {
        // [START_EXCLUDE silent]
        // document.getElementById('quickstart-verify-email').disabled = true;
        // [END_EXCLUDE]
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            console.log(uid);
            // [START_EXCLUDE]
            // document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
            //document.getElementById('quickstart-sign-in').textContent = 'Sign out';
            // let textContent = JSON.stringify(user, null, '  ');
            // console.log(textContent);
            //   if (!emailVerified) {
            //     document.getElementById('quickstart-verify-email').disabled = false;
            //   }
            // [END_EXCLUDE]
            var userId = firebase.auth().currentUser.uid;
            var plate = $("#regPlateNum").val();
            var vin = $('#vin').val();
            firebase.database().ref(userId).once('value').then(function(snapshot) {
                console.log(snapshot.val());
            });
            function writeUserData(userId, plate, vin ) {
                // let email = $("#emailAddress").val();
                // let pass = $("#regPassword").val();
                firebase.database().ref(userId).set({
                  username: plate,
                  vin: vin,
                  messages: ["Welcome to Tagged!"]
                });
              }
            
            writeUserData(userId, plate, vin);
        } else {

        }
        // Updates the user attributes:
        // user.updateProfile({
        //     displayName: "platenum",
        //     photoURL: "https://example.com/jane-q-user/profile.jpg"
        // }).then(function () {
        //     // Profile updated successfully!
        //     // "Jane Q. User"
        //     var displayName = user.displayName;
        //     // "https://example.com/jane-q-user/profile.jpg"
        //     var photoURL = user.photoURL;
        // }, function (error) {
        //     // An error happened.
        // });




    });


});