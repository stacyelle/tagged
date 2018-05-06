// Initialize Firebase

// var config = {
//     apiKey: "AIzaSyB5RbgCmZKgv8wCcdZJJ4g6cBiO0qGj8SM",
//     authDomain: "tagged-978dc.firebaseapp.com",
//     databaseURL: "https://tagged-978dc.firebaseio.com",
//     projectId: "tagged-978dc",
//     storageBucket: "tagged-978dc.appspot.com",
//     messagingSenderId: "509152854944"
// };
// firebase.initializeApp(config);

// const database = firebase.database();

// var userId = firebase.auth().currentUser.uid;
// var ref = firebase.database().ref("UserID")
//   console.log(ref);

// var ref = firebase.database().ref("tag");
// ref.once("value")
//   .then(function(snapshot) {
//     var name = snapshot.child("name").val(); // {first:"Ada",last:"Lovelace"}
    // var firstName = snapshot.child("name/first").val(); // "Ada"
    // var lastName = snapshot.child("name").child("last").val(); // "Lovelace"
    // var age = snapshot.child("age").val(); // null
    // console.log(name);
  // });

// var userId = firebase.auth().currentUser.uid;
// firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//     console.log(username);
// });