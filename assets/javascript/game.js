$(document).ready(function() {


// we need to print the random number that get put into the goal number
var goalNum = Math.floor(Math.random()* 120);
$("#goal").text(goalNum);
// console.log(goalNum);
// create variable
var wins= "";
var counter = 0;
var looses = "";
// make an array of numbers
var numOptions = [
    Math.floor(Math.random() * 6) + 3, 
    Math.floor(Math.random() * 7) + 2, 
    Math.floor(Math.random() * 5) + 2, 
    Math.floor(Math.random() * 12) + 4,
    ];

// console.log(numOptions[0])
// console.log(numOptions[1])
// console.log(numOptions[2])
// console.log(numOptions[3])
// console.log(numOptions)

// need to give each image a value


// click on the picture and print its number on the sceen














  if (counter === goalNum){
      wins++;
  } else if (counter > goalNum){
      looses++;
  }

});


















