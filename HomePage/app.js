$(function(){
    let signOut = new Login();
    let loginHome = new Login();
    let messaging = new Messaging();

    $(".logOut").click(function () {
        firebase.auth().signOut();
        window.location = '../LandingPage/index.html';
        console.log("signed out");
     });
     firebase.auth().onAuthStateChanged((user) => {
        if (user == null) {
          //  window.location = '../LandingPage/index.html';
        }
        else {
            // TODO: start actual work
            loginHome.renderHomePage();
        }
      });
     
    $("#send-button").on("click", function(e) {
        e.preventDefault();
        messaging.sendMessage();

    });

     
});
