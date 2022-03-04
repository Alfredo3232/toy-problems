var peopleNumber = 4;
//use if else statements to properly name a group of people according to the number of the variable peopleNumber
if (peopleNumber <= 0){
  console.log( "No People");
} else if ( peopleNumber === 1){
  console.log("One Person");
}else if ( peopleNumber === 2){
  console.log("A Duo");
}else if ( peopleNumber === 3){
  console.log("A Trio");
}else if ( peopleNumber === 4){
  console.log("A Squad");
} else{
  console.log("This is a lot of people")
}
