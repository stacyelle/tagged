$(function(){
    let signOut = new Login();
    let loginHome = new Login();
    let messaging = new Messaging();

    $("#userSearch").hide();
    $("#messageContent").hide();
    $("#send-button").hide();



    $(".logOut").click(function () {
        firebase.auth().signOut();
        window.location = '../LandingPage/index.html';
        console.log("signed out");
     });
     firebase.auth().onAuthStateChanged((user) => {
        if (user == null) {
           window.location = '../LandingPage/index.html';
        }
        else {
            // TODO: start actual work
            loginHome.renderHomePage();
            loginHome.renderInbox();
        }
      });
     
    $("#send-button").on("click", function(e) {
        e.preventDefault();
        messaging.sendMessage();
        alert("Message Sent!");
        $("#userSearch").hide();
        $("#messageContent").hide();
        $("#send-button").hide();

    });

    $("#new-message").click(function () {
        $("#userSearch").show();
        $("#messageContent").show();
        $("#send-button").show();
    })
});


