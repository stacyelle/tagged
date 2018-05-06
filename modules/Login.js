class Login {
  constructor() {

  }
  loginButtonAnimate() {
    
      let viewportWidth = $(window).width();
      let viewportHeight = $(window).height();
      
      $("#logo-jumbotron").animate({ 
          position: "absolute",
          bottom: viewportHeight / 8,
          width: "400", 
          height: "200" 
      });
      $(".regForm").animate({
        left: "-150%"
      });
      $(".logForm").animate({
          left: "45%"
      });
  }
  toggleSignIn(email, password) {
    if (firebase.auth().currentUser) {
      // [START signout]
      firebase.auth().signOut();
      // [END signout]
    } else {
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
      // Sign in with email and pass.
      // [START authwithemail]
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        $('.quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
      });
      // [END authwithemail]
    }
    $('.quickstart-sign-in').disabled = true;
  }
  
  
}
    