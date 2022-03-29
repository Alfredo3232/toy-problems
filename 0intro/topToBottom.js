/*
Create a function that takes an array that contains two strings and return them so that the strings go from top to bottom.
example of invoking the function:
   topToBot(['Hello','World']);

should return:
H W  
e o  
l r  
l l  
o d
*/
function topToBot(array){
   let first = array[0];
   let second = array[1];
   let result = "";
   for(var i = 0; i < first.length; i++){
       result += first[i] + second[i] + "\n"
   }
    return result
}
console.log(topToBot(['Hello','World']))
