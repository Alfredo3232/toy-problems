/*  conditional statements and logical operators problem:
    You want to go to the park with your family on a friday, 
  create logic that checks whether if
  1. weather is true or false
  2. busy is true or false
  3. familyBusy true or false
    weather has to be true to check if both busy and familyBusy have to be false to go to the park. Print "The weather is bad" if weather = false, 
    print "You are going to the park" if weather = true, busy and family = false etc...
*/
var weather = true;
var busy = false;
var familyBusy = true;

if ( weather === true){
   if ( busy === false && familyBusy === false ){
   console.log( "You are going to the park" );
   } else if ( busy === true){
     console.log( "You are busy");
   } else if ( familyBusy === true){
     console.log( "Your family is busy");
   }
} else{
  console.log( "The weather is bad" );
}
