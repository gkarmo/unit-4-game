
    var wins = 0;
    var losses = 0;
    var totalScore;
    var randomNum;
    var picOne;
    var picTwo;
    var picThree;
    var picFour;

    
    //Generates a new random number when called
    function getRandomNum () {
        randomNum = Math.floor(Math.random() * 102) +19;
        return $("#random-number").text(randomNum);
    }
    getRandomNum();

    //Reset total score to 0 
    function resetScore () {
        totalScore = 0;
        return $(".total-score").text(totalScore);
    }
    resetScore();

    //Generates new button value
    function newButValue () {
        picOne = Math.floor(Math.random() * 12) + 1;
        picTwo = Math.floor(Math.random() * 12) + 1;
        picThree = Math.floor(Math.random() * 12) + 1;
        picFour = Math.floor(Math.random() * 12) + 1;
    }
    newButValue();

    //Updates game
    function gameRules () {
        if (totalScore == randomNum) {
          $(".outcome").text("YOU WIN!!");
          getRandomNum();
          newButValue();
          resetScore();
            wins++;
          $(".win-count").text(wins);
      } 
      else if (totalScore > randomNum) {
        $(".outcome").text("YOU LOSE :(");
          getRandomNum();
          newButValue();
          resetScore();
          losses++;
          $(".losses-count").text(losses);
      } 
    }

    

    $(document).ready(function() {

    // The following adds pic's number to total score
      $("#pic1").on("click", function() {

        totalScore = totalScore + picOne;
        $(".total-score").text(totalScore);
        gameRules();
    
      });

      $("#pic2").on("click", function() {
        
        totalScore = totalScore + picTwo;
        $(".total-score").text(totalScore);
        gameRules();


      });

      $("#pic3").on("click", function() {
        
        totalScore = totalScore + picThree;
        $(".total-score").text(totalScore);
        gameRules();
 

      });

      $("#pic4").on("click", function() {
        
        totalScore = totalScore + picFour;
        $(".total-score").text(totalScore);
        gameRules();

      });

    });

