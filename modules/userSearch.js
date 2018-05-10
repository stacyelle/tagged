//finds a user from their plate number, as input put another user
class Search {
    constructor() {
      
    }
    userSearch() {
        let uidOfRecipient = null; 
        let plateOfRecipient = null;

        plateOfRecipient = $("input").val()
        console.log(plateOfRecipient);
            firebase.database().ref('users').orderByChild('plate').equalTo(plateOfRecipient).on("value", function(snapshot) { 
                uidOfRecipient = snapshot.val();
                if (uidOfRecipient){
                    return uidOfRecipient;
                } else {
                     alert("Sorry, no matches");
                }
        })
    }
}

