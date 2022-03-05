// write a function when given a interger it returns that number of "yes"
 var result = "";
function agree(num) {
   for( var i = 0; i < num; i++){
       result = result + "yes";
   }
  return result; 
} 
console.log (agree(7));
