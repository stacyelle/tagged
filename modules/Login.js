class Login {
  constructor() {
   
  }
  renderHomePage() {
    let uid = firebase.auth().currentUser.uid;
    return firebase.database().ref(`/users/${uid}`).once('value').then(function(snapshot) {
      let userData = snapshot.val();
      console.log(userData);
      $(".testRe").append(`<p>${uid}</p>
                          <p>${userData.make}</p>
                          <p>${userData.model}</p>
                          <p>${userData.plate}</p>
                          <p>${userData.vin}</p>
                          <p>${userData.year}</p>
                          <p>${userData.messages}</p>`);
    });
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

    signIn(email, password) {
     
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
        // [END_EXCLUDE]
      });
      // [END authwithemail]

  }
  
}
    