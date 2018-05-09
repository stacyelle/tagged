$(function(){
    let signOut = new Login();
    let loginHome = new Login();

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
            let uid = firebase.auth().currentUser.uid;
            console.log(uid);
<<<<<<< HEAD
=======
            loginHome.renderHomePage();
>>>>>>> f7da58599a7b7207a17f5685235377b19506e5eb
        }
      });
     
});

