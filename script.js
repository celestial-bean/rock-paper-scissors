function computerPlay() {
  let pick = Math.floor(Math.random() * 3);

  if (pick === 2) {
    return "rock"
  } else if (pick === 1) {
    return "paper";
  } else {
    return "scissors";
  }

}

var selector = document.getElementsByClassName("score");
var scoreDoc = selector[0];
var reason = document.getElementsByClassName("reason");
var reason = reason[0];
var outcome = document.getElementsByClassName("outcome");
var outcome = outcome[0];

function playRound(playerChoice, computerChoice, scores) {

 if (playerChoice === "end") {
  reason.textContent="";
    if (scores[0]>scores[1]){
    outcome.textContent="You win the game.";
        }else if (scores[0]==scores[1]){
      outcome.textContent="Tie game.";
    }else{
    outcome.textContent="Computer wins the game"}
     scores[0]=0;
     scores[1]=0;
      
    scoreDoc.textContent="Score is Player:0 Computer:0"
  }
  console.log(`player choice was ${playerChoice} and computer chose ${computerChoice}`);
  if (playerChoice === computerChoice) {
    return "Tie."

  } else if (playerChoice === "paper") {

    if (computerChoice === "rock") {
      return "You win that round.";
    } else if (computerChoice === "scissors") {
      reason.textContent = "Scissors beats paper.";
      return "computer";
    }
  } else if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      reason.textContent = "Paper beats rock."
      return "computer";
    } else if (computerChoice === "scissors") {
      return "You win that round.";
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      return "You win that round.";
    } else if (computerChoice === "rock") {
      reason.textContent = "Rock beats scissors.";
      return "computer";
    }
  } else {

    return "That is not an option.";

  }
}

//function playerChoice(option){

//let final = option.toLowerCase();
//return final;
//}
var scores = [0, 0];

function game(option, scores) {

  let playerScore = scores[0];
  let compScore = scores[1];
  let game = 0;

  game = playRound(option, computerPlay(), scores);

  if (game === "Tie.") {
    outcome.textContent = "Tie.";
    reason.textContent = "You both played the same thing."
    scoreDoc.textContent = `Score is Player:${playerScore}  Computer:${compScore}`;
  } else if (game === "You win that round.") {
    playerScore++;
    outcome.textContent = game;
    reason.textContent = ""
    scoreDoc.textContent = `Score is Player:${playerScore}  Computer:${compScore}`;
  } else if (game == "computer") {
    compScore++;
    outcome.textContent = "You lost that round."
    scoreDoc.textContent = `Score is Player:${playerScore}  Computer:${compScore}`;
  }

  //
  //if (compScore > playerScore) {
  // outcome.textContent = "Computer wins that round.  ";
  //  } else if (playerScore > compScore) {
  //    outcome.textContent = "You won that round.  ";
  //  } else {
  //    outcome.textContent = "Tie round.  "
  //  }
  var scores = [playerScore, compScore]
  return scores;
}

let target = document.getElementsByClassName("rock");
target[0].addEventListener("click", function() {
  scores = game("rock", scores);
})

target = document.getElementsByClassName("paper");
target[0].addEventListener("click", function() {
  scores = game("paper", scores);
})

target = document.getElementsByClassName("scissors");
target[0].addEventListener("click", function() {
  scores = game("scissors", scores);
})

target = document.getElementsByClassName("end");
target[0].addEventListener("click", function() {
  game("end", scores);
})
