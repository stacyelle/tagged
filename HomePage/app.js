$(function(){
    let signOut = new Login();

    $(".logOut").click(function () {
        firebase.auth().signOut();
        window.location = '../LandingPage/index.html';
        console.log("signed out");
     });
     $(".data").click(function () {
    let uid = firebase.auth().currentUser;
   // let ref = firebase.database().ref("users/" + uid);
    console.log(uid);

     });

});

