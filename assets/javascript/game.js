$(document).ready(function() {

// ===============================================================
//VARIABLES
// ===============================================================
    var wins = 0;
    var losses = 0;
    $(".wins-text").text("Your wins: " + wins);
    $(".losses-text").text("Your losses: " + losses);

    var aud = document.getElementById("myAudio");
    aud.volume = 0.05; // default 1 means 100%
    
    //Array of four crystal images
    var crystalImages = [
        "assets/images/blue-teardrop-crystal.PNG", 
        "assets/images/red-square-crystal.PNG", 
        "assets/images/purple-hexagon-crystal.PNG", 
        "assets/images/green-heart-crystal.PNG"
    ];

// ===============================================================
//FUNCTIONS
// ===============================================================

//Assigning random number to each crystal
    function crystalValues() {

        for (var i = 0; i < crystalImages.length; i++) {
        
            var image = $("<img>");
            image.addClass("crystal-buttons crystal crystal-image");
            image.attr("src", crystalImages[i]);
            //Assigns a random value between 1 and 12 to each crystal
            image.attr("data-letter", Math.floor(Math.random() * 12) +1);
            $("#crystals").append(image);
        }
     }

    function playGame() {

        var counter = 0;
        $(".your-points").text("Your points: " + counter); 

        //Generates random number between 19 and 120, known as the Target Number 
        var targetNumber = Math.floor(Math.random() * (120-19) + 19);
            
        //And displays it in the HTML page at "target-number"
        $(".target-number").text("Target number: " + targetNumber);
            console.log("Target number is: " + targetNumber);

        //When user clicks on a crystal 
        $(".crystal-buttons").on("click", function() {
            
        //Assigns random number to each click
            crystalIsClicked = true;
            var crystalValue = ($(this).attr("data-letter"));
            crystalValue = parseInt(crystalValue);
        //Adds every click to global counter
            counter += crystalValue;
            
            console.log("Crystal value clicked is: " + crystalValue);
            console.log("Counter is currently: " + counter);
            
            $(".your-points").text("Your points: " + counter);
            
            if (counter === targetNumber) {
                wins++;
                $(".wins-text").text("Your wins: " + wins);
                $("#crystals").empty();
                crystalValues();
                playGame();
                $("#winModal").modal("show");
            }
            
            else if (counter >= targetNumber) {
            // alert("So sorry. You have gone over the target number. Please try again.");
            losses++;
            $(".losses-text").text("Your losses: " + losses);
            $("#crystals").empty();
            crystalValues();
            playGame();
            $("#lossModal").modal("show");
        }
            
        });
    }

    // Calling functions
    crystalValues();
    playGame();


});