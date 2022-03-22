// write logic that loops over a nested array and prints the 2 values of each object element

var cookies = [
    { type: "Raisin", cost: 1.80 },
    { type: "Chocolate", cost: 3 },
    { type: "Plain", cost: 1.20 },
    { type: "M&M", cost: 3 }
];
cookies.forEach(function(cookie){
       console.log(cookie.type+ " " + cookie.cost);
})
