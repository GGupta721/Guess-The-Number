
let guesses = []; 

// Variable for store the correct random number 

let correctNumber = getRandomNumber();



window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);

}


function playGame(){
  let numberGuess = document.getElementById('number-guess').value
  displayLogic(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory(); 
      
    
}


function displayLogic(numberGuess){
  if(numberGuess==correctNumber){
    showYouWon();
  }
  else if(numberGuess>correctNumber){
    showNumberAbove();
  }
  else{
    showNumberBelow();
  }
}

function initGame(){
  correctNumber = getRandomNumber();
  guesses = [];
  displayHistory();
  document.getElementById("result").innerHTML = '';

}


function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}


function getRandomNumber(){

  var number = Math.random() * 100;
  number = Math.floor(number) + 1;
  return number;

}


function saveGuessHistory(guess) {
  guesses[guesses.length] = guess;
  //guesses.push(guess);

}


function displayHistory() {
  let index=0; 
  let list = "<ul class='list-group'>";
  while(index < guesses.length){
    list += "<li class='list-group-item'>" + "You guessed: " + guesses[guesses.length-1-index++] + "</li>";
    //index += 1;
  }
  list += '</ul>'
  //console.log
  document.getElementById("history").innerHTML = list;
}




function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"

  let dialog = getDialog('won', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
 
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}
