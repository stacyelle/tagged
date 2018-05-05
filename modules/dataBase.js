var config = {
    apiKey: "AIzaSyB5RbgCmZKgv8wCcdZJJ4g6cBiO0qGj8SM",
    authDomain: "tagged-978dc.firebaseapp.com",
    databaseURL: "https://tagged-978dc.firebaseio.com",
    projectId: "tagged-978dc",
    storageBucket: "tagged-978dc.appspot.com",
    messagingSenderId: "509152854944"
 };

// Get a reference to the database service
const database = firebase.database();

  var userId = firebase.auth().currentUser.uid;
  firebase.database().ref('Tag').once('value').then(function(snapshot) {
    console.log(snapshot.val());
  });