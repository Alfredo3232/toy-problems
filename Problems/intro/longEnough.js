/* write a function, when given a username and a password returns true if username is longer than 4 characters and the password is at least 8 characters long, and false
if false
*/
function valid(username, password) {
  if (username.length > 4 && password.length >= 8) {
    return true;
  }
    return false;

}
let output = valid("ExampleUsername", "ExamplePassword");
console.log(output);
