/* create a social media profile, it should have the propreties name, friends, and messages create functions
post message, that adds a message in the messages array
delete message, that deletes a message in messages array
add and remove friends that add and subtracts the amount of friends you have
 */

var socialMediaProfile ={
    name: "Alfredo",
    friends: 20,
    messages: ["Hello World!", "I am in Mexico", "Tacos"],
    postMessage: function(message){
        socialMediaProfile.messages.push(message);
    },
    deleteMessage: function(index){
        socialMediaProfile.messages.splice(index,1);
    },
    addFriend: function(){
        socialMediaProfile.friends += 1;
    },
    removeFriend: function(){
        socialMediaProfile.friends -= 1;
    }
};
