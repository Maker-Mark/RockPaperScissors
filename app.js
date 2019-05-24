//Make big function that is the whole game
const game = () => {
 
//Use let to update the score
  let pScore = 0, cScore = 0; // we want these in global scope for the duration of the game.
  //Start the game
    const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener('click', ()=>{
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //Play the match
  const playMatch = () => {
  const options = document.querySelectorAll(".options button");
  const playerHand = document.querySelector(".player-hand");
  const computerHand = document.querySelector(".computer-hand");
  var compScore = document.querySelector(".computer-score p");
  var playerScore = document.querySelector(".player-score p");

  //Computer options
  const computerOptions = ['rock', 'paper', 'scissors'];
   //Math.random() gives us a num betrween 0 and 1. Simply use the array.

   //Here, "this" is whatever option resolves down to.
   //We still have access to option as the const is defined within our outer scope.
   options.forEach(option=>{
      option.addEventListener('click', function() {
        
        const compNumber = Math.floor(Math.random() *3);
       //Computer's choice
       const compChoice = computerOptions[compNumber];
        let res = compareHands(this.textContent, compChoice);
        console.log(res);
        if(res == 2)
        compScore.textContent++;
        if(res == 1)
        playerScore.textContent++;

        //Update Images
        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${compChoice}.png`;
      });

   });
  };

  const compareHands = (playerChoice, compChoice) =>{
    const winner = document.querySelector(".winner");
    if(playerChoice === compChoice){
      winner.textContent = "Tie";
      return 0;
    }
    //Rock
    if(playerChoice === 'rock' ){
      if(compChoice === 'scissors'){
      winner.textContent = 'Player Wins';
      return 1;
      } else{
      winner.textContent = 'Computer Wins';
      return 2;
      }
    }
    
    //Paper
    if(playerChoice === 'paper' ){
      if(compChoice === 'scissors'){
      winner.textContent = 'Computer Wins';
      return 2;
      } else{
      winner.textContent = 'Player Wins';
      return 1;
      }
    }

    //Scissors
    if(playerChoice === 'scissors' ){
      if(compChoice === 'rock'){
      winner.textContent = 'Computer Wins';
      return 2;
      } else{
      winner.textContent = 'Player Wins';
      return 1;
      }
    }


  }

  //Call all the inner fuctions within the startGame()
  startGame();
  playMatch();


};
//Start the actual game function
game();