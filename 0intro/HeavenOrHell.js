/*
create a function when given an array of strings of names, if that name starts with a vowel print "Welcome to Hell, Name"  
if that name doesnt start with a vowel print "Welcome to Heaven, Name"
-make sure it does this for every string in the array
*/

var heavenOrHell = function(arr){
    for(let i = 0; i < arr.length; i++){
        if(/[aeiou]/.test(arr[i][0].toLowerCase())){
            console.log("Welcome to Hell, " + arr[i])
        }else{
            console.log("Welcome to Heaven, " + arr[i])
        }
    }
}

heavenOrHell(["abel", "Erlinda", "ismael", "omar", "ulises", "mark"])
