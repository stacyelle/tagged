$(function(){
    let loginHome = new Login();
    let search = new Search();

    $(".logOut").click(() => {
        firebase.auth().signOut();
        window.location = '../LandingPage/index.html';
     });

     $(".search-input").on("submit", function(e) {
         e.preventDefault();
        let searchResult = search.userSearch();
        loginHome.renderSearchResult(searchResult);
     });


     firebase.auth().onAuthStateChanged((user) => {
        if (user == null) {
            window.location = '../LandingPage/index.html';
        }
        else {
            // TODO: start actual work
            let uid = firebase.auth().currentUser.uid;
            loginHome.renderHomePage();
        }
      });
     

});


