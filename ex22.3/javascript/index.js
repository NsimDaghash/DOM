//const { hidden, visible } = require("chalk");

const guessedLettersText= document.querySelector(`.guessedLettersText`),
      statusText = document.querySelector(`.statusText`),
      btn = document.querySelector(`.btn`),
      guessedletters = document.querySelector(`.guessedletters`),
      continuebt = document.querySelector(`.continuebt`) ;

      document.body.style.textAlign =  "center";

  // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
  let computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  // Creating variables to hold the number of wins, losses, and ties. They start at 0.
  let guessedLetters = [ ];
  let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  statusText.innerHTML=("Guess a letter");
 // statusText.style.color = "red";
  guessedletters.innerHTML = ("Keys guessed");
  btn.value = "?";
  const regconfirmbtn = document.createElement('input');
    regconfirmbtn.value = 'YES';
    regconfirmbtn.type = 'button';
    regconfirmbtn.style.marginLeft= '15px';
    regconfirmbtn.style.marginTop = '15px';
    regconfirmbtn.style.visibility = "hidden";
/****************************************** */
  function playagain() { 
    statusText.innerHTML=("Right letter!"); 
    statusText.style.color = "green";     
    guessedletters.innerHTML = ("would you like to play again");
    guessedLetters.splice(0, guessedLetters.length);  
        regconfirmbtn.style.visibility = "visible";
        regconfirmbtn.addEventListener('click',() => {
           // alert ("you have registered");
           regconfirmbtn.style.visibility = "hidden";
           location.reload();
        })
        continuebt.appendChild(regconfirmbtn); 
};              
/************************************** */
  function updateguessedletters() { 
      guessedLettersText.innerHTML = guessedLetters;
  };
/************************************** */
  document.onkeydown = function(event) {
    if(regconfirmbtn.style.visibility == "hidden"){
      //validates that user guess is an alphabet letter 
      if(event.keyCode >= 65 && event.keyCode <= 90) {      
          let userGuess = event.key.toLowerCase(); 
          console.log(userGuess)
          //if user guesses computer guess, adds a point and resets guesses remaining
          if(userGuess === computerGuess) {
            btn.value = userGuess;
            guessedLetters.splice(0, guessedLetters.length);
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

            statusText.innerHTML=("Guess a letter");
            statusText.style.color = "black";
            guessedletters.innerHTML = ("Keys guessed");
            playagain();
          }
          // else if user guesses same letter again, will alert to enter again
          else if (guessedLetters.includes(userGuess)) {
                statusText.innerHTML=("You have already made this guess!");
                statusText.style.color = "red"; 
              }
          else {
                statusText.innerHTML=("Nope,wrong letter!");
                guessedLetters.push(userGuess);
                statusText.style.color = "red"; 
          }
          updateguessedletters();
      } else {
          alert("Enter a valid letter");  // alerts if user guess is not a valid alphabet letter
  }
  }
  else{
    alert ("confirm Tes button to continue");
  }
};
