 // sends a message to the user found in the userSearch function     
        var messageCount = 1;
        var messageContent = null;

        
        function sendMessage() {                    
                messageContent = $("#messageContent").val();
                firebase.database().ref(`users/${uid}/messages`).update({
                    [messageCount] : messageContent
                    });
                messageCount++;
                }; 

        
       