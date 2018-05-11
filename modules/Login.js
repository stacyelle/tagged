class Login {
  constructor() {

  }
  renderHomePage() {
    let uid = firebase.auth().currentUser.uid;
    return firebase.database().ref(`/users/${uid}`).once('value').then(function (snapshot) {
      let userData = snapshot.val();
      

      $(".testRe").append(`<p class="plate">${userData.plate}</p>
                          <p>${userData.make}</p>
                          <p>${userData.model}</p>
                          <p>${userData.year}</p>
                          <p class="vin">${userData.vin}</p>`);
    });

  }
  renderInbox() {
    let uid = firebase.auth().currentUser.uid;

    firebase.database().ref(`/users/${uid}/messages`).once('value', function (snapshot) {
      let messagesObject = snapshot.val();
      let resultValues = Object.values(messagesObject).reverse();
      let resultKeys = Object.keys(messagesObject).reverse();
      
      for (var i = 0; i < resultValues.length; i++) {
        for (var i = 0; i < resultKeys.length; i++) {
          $(".inbox").append(`<p class="currentMessage"><span>${resultKeys[i]}</span> : ${resultValues[i]}</p>`);
        }
      }
    });
  }
  removeMessage(message) {  
    let uid = firebase.auth().currentUser.uid;
      firebase.database().ref(`users/${uid}/messages/${message}`).remove();  
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

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
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

