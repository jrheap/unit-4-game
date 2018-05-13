$(document).ready(function() {
    generateMm()
   // we need to print the random number that get put into the goal number
   console.log(goalNum);
   var goalNum = Math.floor(Math.random() * (120 - 19) + 19)
   console.log(goalNum, "this is gaol num");
   $("#goal").text(goalNum);
   // console.log(goalNum);
   // create variable
   var wins = "";
   var counter = 0;
   var looses = "";
   // make an array of numbers

   function reset() {
       goalNum = Math.floor(Math.random() * (120 - 19) + 19)
       $("#goal").text(goalNum);
       $('#mm').empty()
       counter = 0;
       $("#current").text(counter)
       generateMm()
   }

   // need to give each image a value
   function generateMm() {
       for(var i = 0; i < 4; i++) {
           console.log("generated Mm", i);
           var MmImage = $('<div class="col-sm-3"><a class="crystal" id="cry' + i + '" ><img id="crystal" data-value="' + Math.floor(Math.random() * (12 - 1) + 1) + '" style="height:300px; width:auto;" src="./assets/images/mm' + i + '.png"></a></div>');
       
           $('#mm').append(MmImage);
       }
       console.log("crystals have been generated");
   }



   // click on the picture and print its number on the sceen
       //we need some way to tell if an img was clicked on or not
        
   $('#mm').on("click", "#crystal" , function(event){
       event.preventDefault()

       console.log($(this).attr('data-value'));
       var crystalValue = $(this).attr('data-value')
       counter = counter + (+crystalValue);
       console.log(counter);
       $("#current").text(counter)
       //if our counter is > than the goal we should loose
       //else if out counter is == the goal we win
       //else game keeps going
       if (counter > goalNum) {
           looses++;
           $('#losses').text(looses);
           reset()
       }
       else if (counter === goalNum) {
           wins++;
           $('#wins').text(wins);
           reset()
       }
   })
});




