//finds a user from their plate number, as input put another user

var uidOfRecipient = null;
var plateOfRecipient = null;
function userSearch() {
    plateOfRecipient = $("#userSearch").val()
        firebase.database().ref('users').orderByChild('plate').equalTo(plateOfRecipient).on("value", function(snapshot) { 
            uidOfRecipient = snapshot.val();
            if (uidOfRecipient){
                console.log("user exists!");
            } else {
                console.log("user does not exist!");
            }
    })
}
