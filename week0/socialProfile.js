/* create a socialMediaProfile object, it should have the following propreties name, friends, and messages array. 
Create a function post message, that adds a message in the messages array
delete message, that deletes a message in messages array
create two function named addFriends and removeFriends that adds or removes from the friends proprety
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
