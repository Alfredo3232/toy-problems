/* You are trying to build a esports team, but you need at least 5 players in your team.
create a function that checks the amount of players in your array, returns true if you have 5 players and false if you don't
 */
var team = ["Me", "Friend 1", "Friend 2", "Friend 3", "Friend 4"];
function hasEnoughPlayers(team){
  if (team.length >= 5){
      return true;
  } else{
      return false;
  }
}
console.log(hasEnoughPlayers(team));
