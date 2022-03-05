/*
 * - Use a `while` loop
 * - The while loop must stop 
 * - The output of the while loop should be your daily schedule using console logs in a 24 hour time clock 
 * - Your code should not be empty
 */

var num = 24;
while (num >= 0){
     if (num === 8){
    console.log("Wake Up");
} else if( num === 9){
    console.log("Bush Teeth & Eat Breakfast");
} else if (num === 11){
    console.log("Start Coding");
} else if (num === 16){
    console.log("Eat Dinner");
} else if (num === 19){
    console.log("End Coding & Take a Shower");
} else if (num === 22){
    console.log("Sleep");
} else{
     console.log(num);
}
  num = num - 1;
}
