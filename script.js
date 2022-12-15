const pick = [ "rock", "paper", "scissors" ];

// Computer pick it's choice.

const getComputerChoice = () => {
	const choice = pick[Math.floor(Math.random() * pick.length)];
	return choice;
}

// Player type in it's choice.

const getPlayerChoice = () => {
	let choice = prompt("Rock, paper or scissors?");
	if (choice == null) {
		return;
	} else if (choice == "") {
		alert("Please type in your choices.");
		return getPlayerChoice();
	} else {
		choice = choice.toLowerCase();
		if (pick.includes(choice) == false) {
			alert("Not the expected input. Please try again.");
			return getPlayerChoice();
		} else {
			return choice;
		}
	}
}

// Set points for both player and computer.

let playerPoint = 0;
let compPoint = 0;

// Start one round.

const playRound = (playerSelection, computerSelection) => {
	if (playerSelection == "rock" && computerSelection == "scissors") {
		playerPoint++;
		alert("You win this round!");
	} else if (playerSelection == "scissors" && computerSelection == "paper") {
		playerPoint++;
		alert("You win this round!");
	} else if (playerSelection == "paper" && computerSelection == "rock") {
		playerPoint++;
		alert("You win this round!");
	} else if (playerSelection == computerSelection) {
		alert("It's a tie!");
	} else {
		compPoint++;
		alert("Computer win this round!");
	} 
}

// Play for 5 rounds

const game = () => {
	for (let i = 0; i < 5; i++) {
		const playerInput = getPlayerChoice();
		const compInput = getComputerChoice();
		if (playerInput == null) {
			alert("Exiting the game. Goodbye!");
			return;
		} else {
			playRound(playerInput, compInput);
		}
	}

	if (playerPoint > compPoint) {
		alert("Player gets " + playerPoint + " points and computer gets " + compPoint + " points.");
		alert("You win!");
	} else if (compPoint > playerPoint) {
		alert("Player gets " + playerPoint + " points and computer gets " + compPoint + " points.");
		alert("You lose!");
	} else if (playerPoint == compPoint) {
		alert("Player gets " + playerPoint + " points and computer gets " + compPoint + " points.");
		alert("No one wins! It's a tie!");
	}
}

game();
