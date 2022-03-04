//create logic when given a interger in peopleNumber, 0 or lower should print "No People", 1 "a solo", 2 "a duo, 3 "a trio", 4 "a squad"
var peopleNumber = 4;

if (peopleNumber <= 0){
  console.log( "No People");
} else if ( peopleNumber === 1){
  console.log("Solo");
}else if ( peopleNumber === 2){
  console.log("A Duo");
}else if ( peopleNumber === 3){
  console.log("A Trio");
}else if ( peopleNumber === 4){
  console.log("A Squad");
} else{
  console.log("This is a lot of people")
}
