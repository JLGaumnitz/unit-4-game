$(document).ready(function() {

    //Variables
    var wins = 0;
    var losses = 0;
    $(".wins-text").text("Your wins: " + wins);
    $(".losses-text").text("Your losses: " + losses);

    var aud = document.getElementById("myAudio");
    aud.volume = 0.05; // default 1 means 100%
    
    //Array of different gem images
    var gemImages = ["./assets/images/blue-teardrop-gem.png", "./assets/images/red-square-gem.png", "./assets/images/purple-hexagon-gem.png", "./assets/images/green-heart-gem.png"];
    
    //Assigning random number to each gem
    function gemValues() {

        for (var i = 0; i < gemImages.length; i++) {
        
            var image = $("<img>");
            image.addClass("gem-buttons gem gem-image");
            image.attr("src", gemImages[i]);
            image.attr("data-letter", Math.floor(Math.random() * 12) +1);
            $("#gems").append(image);
        }

    }

    function playGame() {

        var counter = 0;
        $(".your-guess").text("Your points: " + counter); 

        //Generates random number 
        var targetNumber = Math.floor(Math.random() * (120-19) + 19);
            
        //And displays it on the browser
        $(".number-to-guess").text("Target number: " + targetNumber);
            console.log(targetNumber);

        //When user clicks on a gem 
        $(".gem-buttons").on("click", function() {
            
        //Assigns random number to each click
            
            gemIsClicked = true;
            var gemValue = ($(this).attr("data-letter"));
            gemValue = parseInt(gemValue);
            //Adds every click to global counter
            counter += gemValue;
            
            console.log(gemValue);
            console.log(counter);
            
            $(".your-guess").text("Your points: " + counter);
            
            if (counter === targetNumber) {
            alert("You win!");
            wins++;
            $(".wins-text").text("Your wins: " + wins);
            $("#gems").empty();
            gemValues();
            playGame();
            }
            
            else if (counter >= targetNumber) {
            alert("You lose!");
            losses++;
            $(".losses-text").text("Your losses: " + losses);
            $("#gems").empty();
            gemValues();
            playGame();
            }
            
        });
    }
    
    gemValues();
    playGame();

});