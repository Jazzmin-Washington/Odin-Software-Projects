// Develop a Rock, Paper, Scissors Game

// Test
//console.log("Hello World")

// Get the human choice for the game
function getHumanChoice() {
    let userInput = prompt("Please pick Rock ✊, Paper ✋, or Scissors ✌️");
    
    // Convert userInput to lowercase for case-insensitive comparison
    userInput = userInput.toLowerCase();
    // Make sure the options or rock, paper or scissors
    if (userInput === 'rock' || userInput === '✊') {
        console.log("Great, you have selected Rock");
				return 'rock';
    } else if (userInput === 'paper' || userInput === '✋') {
        console.log("Great, you have selected Paper");
				return 'paper';
    } else if (userInput === 'scissors' || userInput === '✌️') {
        console.log("Great, you have selected Scissors");
				return 'scissors';
    } else {
        alert("You have chosen an invalid answer. Please try again.");
			getHumanChoice();
    }
	return userInput;
}

// Get the computer's choice randomly
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    console.log(`The computer has chosen ${computerChoice}`);
    return computerChoice;
}

// Determine the winner of the round
function getWinner(computerChoice, userChoice) {
    if (computerChoice === userChoice) {
        console.log(`It's a Tie! Both computer and user picked: ${userChoice}`);
        return 2; // Tie
    } else if (
        (computerChoice === 'rock' && userChoice === 'scissors') ||
        (computerChoice === 'paper' && userChoice === 'rock') ||
        (computerChoice === 'scissors' && userChoice === 'paper')
    ) {
        console.log(`Computer wins! ${computerChoice} beats ${userChoice}`);
        return 0; // Computer wins
    } else {
        console.log(`You win! ${userChoice} beats ${computerChoice}`);
        return 1; // Human wins
    }
}


// Function to keep track of score and facilitate the game
function playRound(num_rounds){
	let computerScore = 0;
	let userScore = 0;
	
	// Loop through each of the rounds
	for (let i = 0; i < num_rounds; i++) {
		console.log(`Playing Round  ${i + 1}:`)
		let userChoice = getHumanChoice();
		setTimeout(100);
		let computerChoice = getComputerChoice();
		setTimeout(100)
		let winner = getWinner(computerChoice, userChoice); 
		
		if(winner === 2) {
			computerScore += 1; 
			userScore +=1;
		}
		else if (winner === 0) {
			computerScore +=1;
		}
		else if (winner === 1) {
			userScore +=1;
		}
	}
	if (computerScore == userScore){
		console.log("It's a Tie! Great Job!")
	}
	else if (computerScore > userScore){
		console.log("The computer has won the game!")
	}
	else if (computerScore < userScore){
		console.log("You have won the game!")
	}
}

console.log("Let's play Rock, Paper, Scissors!");
num_rounds = parseInt(prompt("How many rounds would you like to play?"));
setTimeout(100);
if (num_rounds!= null && num_rounds > 0){
	playRound(num_rounds);
}


