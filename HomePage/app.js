$(function(){
    let signOut = new Login();

    $(".logOut").click(function () {
        firebase.auth().signOut();
        window.location = '../LandingPage/index.html';
        console.log("signed out");
     });

     
});
