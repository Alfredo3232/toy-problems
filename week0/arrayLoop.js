// write a logic that loop over a nested array and prints 2 values of each array and prints them
var cookies = [
    { type: "Raisin", cost: 1.80 },
    { type: "Chocolate", cost: 3 },
    { type: "Plain", cost: 1.20 },
    { type: "M&M", cost: 3 }
];
cookies.forEach(function(cookie){
       console.log(cookie.type+ " " + cookie.cost);
})
