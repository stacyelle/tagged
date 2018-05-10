//finds a user from their plate number, as input put another user

class Messaging {
    constructor() {
      
    }


    sendMessage() {   
        let messageCount = 1;
        let messageContent = null;    
        let plateOfRecipient = null;  
        let uidOfRecipient = null;    
        
        //finds a user from their plate number, as input put another user
        plateOfRecipient = $("#userSearch").val()
        console.log(plateOfRecipient);
        firebase.database().ref('users').orderByChild('plate').equalTo(plateOfRecipient).on("value", function(snapshot) {
            // let uidOfRecipientObject = snapshot.val();
            uidOfRecipient = Object.keys(snapshot.val())[0];
            console.log(uidOfRecipient);

            if (uidOfRecipient){
                console.log("user exists!");

                 // sends a message to the user found above  
                messageContent = $("#messageContent").val();
                firebase.database().ref(`users/${uidOfRecipient}/messages`).update({
                    [messageCount] : messageContent
                    });
                messageCount++;
                console.log("message sent!")

            } else {
                alert("Sorry, that plate isn't registered yet!");
            }
        });


    }; 
 };
