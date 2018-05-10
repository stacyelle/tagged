$(function(){
    let loginHome = new Login();
    let search = new Search();

    $(".logOut").click(() => {
        firebase.auth().signOut();
        window.location = '../LandingPage/index.html';
     });
     $("form").on("submit", function(e) {
         e.preventDefault();
        search.userSearch();
     });


     firebase.auth().onAuthStateChanged((user) => {
        if (user == null) {
            window.location = '../LandingPage/index.html';
        }
        else {
            // TODO: start actual work
            let uid = firebase.auth().currentUser.uid;
            console.log(uid);
            loginHome.renderHomePage();
        }
      });
     
});

