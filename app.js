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
        let user = $("#regPlateNum").val();
        registerBtn.handleSignUp(email, pass);

    });

    $(".logBtn").click(function () {
        let user = $("#plateNum").val();
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
            // [START_EXCLUDE]
            // document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
            //document.getElementById('quickstart-sign-in').textContent = 'Sign out';
            let textContent = JSON.stringify(user, null, '  ');
            console.log(textContent);
            //   if (!emailVerified) {
            //     document.getElementById('quickstart-verify-email').disabled = false;
            //   }
            // [END_EXCLUDE]
        } else {

        }
        // Updates the user attributes:
        user.updateProfile({
            displayName: "Jane Q. User",
            photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(function () {
            // Profile updated successfully!
            // "Jane Q. User"
            var displayName = user.displayName;
            // "https://example.com/jane-q-user/profile.jpg"
            var photoURL = user.photoURL;
        }, function (error) {
            // An error happened.
        });

        // Passing a null value will delete the current attribute's value, but not
        // passing a property won't change the current attribute's value:
        // Let's say we're using the same user than before, after the update.
        user.updateProfile({ photoURL: null }).then(function () {
            // Profile updated successfully!
            // "Jane Q. User", hasn't changed.
            var displayName = user.displayName;
            // Now, this is null.
            var photoURL = user.photoURL;
        }, function (error) {
            // An error happened.
        });
        // [START_EXCLUDE silent]
        //document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
    });



});