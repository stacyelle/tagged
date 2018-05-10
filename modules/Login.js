class Login {
  constructor() {
   
  }
  renderHomePage() {
    let uid = firebase.auth().currentUser.uid;
    return firebase.database().ref(`/users/${uid}`).once('value').then(function(snapshot) {
      let userData = snapshot.val();
      console.log(userData);
      console.log(userData.messages);
      $(".testRe").append(`<p class="plate">${userData.plate}</p>
                          <p>${userData.make}</p>
                          <p>${userData.model}</p>
                          <p>${userData.year}</p>
                          <p class="vin">${userData.vin}</p>`);
    });


  }

  renderInbox() {
    let uid = firebase.auth().currentUser.uid;
      firebase.database().ref(`/users/${uid}/messages`).on('value', function(snapshot) {
        var messagesObject = snapshot.val();
        var result = Object.values(messagesObject);

        for (var i = 0; i < result.length; i++) {
          $(".inbox").append(`<p class="message">${result[i]}</p>`);
        }
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
  
 