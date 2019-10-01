var board = new Array(7); //colonnes du plateau de jeu

for(var i = 0; i < board.length; i++) {

	board[i] = [0,0,0,0,0,0]; //lignes du plateau de jeu

}

var player = "red";

function play(id) {

	var row = 0;
	
	while (board[id][row] !== 0 && row<6){

		row++;

	}

	if (row !== 6){

			board[id][row] = player;
			var element = document.getElementById(id+"."+row);
			element.classList.remove("empty");
			element.classList.add(player);



	}

	switchplayer(player);

}


function switchplayer(){

	if (player === "red"){

		player = "yellow";

	} else {

		player = "red";

	}

	document.getElementById("player").innerHTML = "Joueur : "+toString(player);

}

