/*create a function using ternary operators to determine if the given two values are NOT THE SAME.
 1. create a function that takes in two values
 2. your function must print "are not the same" if the two given values arent the same
 3. your function must print "are the same" if the two given values are the same
*/
function same(c, d) {
  return (c !== d) ?  c + " and " + d + " are not the same" 
    : (c === d) ? c + " and " + d + " are the same"
}
