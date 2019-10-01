var board = new Array(7); //colonnes du plateau de jeu

for(var i = 0; i < board.length; i++) {

	board[i] = [0,0,0,0,0,0]; //lignes du plateau de jeu

}

var player = "red"; // red starts the game

function play(id) {

	var row = 0;
	
	while (board[id][row] !== 0 && row<6){

		row++;

	}

	if (row !== 6){

			board[id][row] = player; // update board with new value
			var element = document.getElementById(id+"."+row);
			element.classList.remove("empty");
			element.classList.add(player);

			if (checkForWin(id, row)){

				endGame();

			} else {

				switchplayer();	

			}
	}

}

function checkForWin(id, row){

	var rowPointer = 0;
	var columnPointer = 0;
	var counter = 0;

	//check column

	if (row >= 3) { //only check column if four or more rows are filled

		for (rowPointer = 0; rowPointer<6; rowPointer++){

			if (board[id][rowPointer] === player){
				
				counter++;

				if (counter == 4){
					return true;
				}

			} else {
				
				counter = 0;

			}

		}

	}

	//check row

	counter = 0;

	for (columnPointer = 0; columnPointer<7; columnPointer++){

		if (board[columnPointer][row] === player){
				
				counter++;

				if (counter == 4){
					return true;
				}

			} else {
				
				counter = 0;

			}

	}

	//check forward-slash diagonal

	rowPointer = row;
	columnPointer = id;
	counter = 0;

	while(board[columnPointer][rowPointer] === player && rowPointer>=0 && columnPointer>=0){ //left

		columnPointer--;
		rowPointer--;
		counter++;

		if (counter == 4){
			return true;
		}
	}

	rowPointer = row;
	columnPointer = id;

	while(board[columnPointer][rowPointer] === player && rowPointer<6 && columnPointer<7){ //right

		columnPointer++;
		rowPointer++;
		counter++;

		if (counter == 4){
			return true;
		}
	}

	//check anti-slash diagonal !!to finish


}

function switchplayer(){

	if (player === "red"){

		player = "yellow";

	} else {

		player = "red";

	}

	document.getElementById("player").innerHTML = "Joueur : "+player;

}

function endGame(){

	document.getElementById("player").innerHTML = "Joueur "+player+" a gagné !";

}