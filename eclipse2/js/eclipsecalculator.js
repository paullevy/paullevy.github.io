<!--

var clicks = 1

function d6() {
    return Math.floor(Math.random() * 6) + 1
}

function getOpt(id) {
	return document.getElementById(id).options[document.getElementById(id).selectedIndex].value
	}
	
function initiative(a,b) {
	if (a.initiative < b.initiative)
		return 1;
	if (a.initiative > b.initiative)
		return -1;
	if (a.initiative === b.initiative && a.party === "Attacker")
		return 1;
	if (a.initiative === b.initiative && a.party === "Defender")
		return -1;
	return 0;
	}
	
function test() {
	var attacker_ship = {
		alive : true, 
		initiative : parseInt(getOpt("a_init")), 
		wep_ion : parseInt(getOpt("a_wep_i")), 
		wep_pla : parseInt(getOpt("a_wep_p")), 
		wep_ant : parseInt(getOpt("a_wep_a")), 
		attack : parseInt(getOpt("a_attack")), 
		shield : parseInt(getOpt("a_shield")), 
		hull : parseInt(getOpt("a_hull"))
		}
	var defender_ship = {
		alive : true, 
		initiative : parseInt(getOpt("d_init")), 
		wep_ion : parseInt(getOpt("d_wep_i")), 
		wep_pla : parseInt(getOpt("d_wep_p")), 
		wep_ant : parseInt(getOpt("d_wep_a")), 
		attack : parseInt(getOpt("d_attack")), 
		shield : parseInt(getOpt("d_shield")), 
		hull : parseInt(getOpt("d_hull"))
		}

	var ships = [attacker_ship, defender_ship];
	ships.sort(initiative);

	var game_over = false;
	iter = 1000;
	var attacker_ship_survives = 0;
	var defender_ship_survives = 0;
	
	var roll1 = d6();
	var hit1 = roll1 + ships[0].attack + ships[1].shield >= 6;
	alert("Roll: " + roll1 + " + " + ships[0].attack + " " + ships[1].shield + "\nHit? " + hit1);
	
	while (game_over === false) {
		if (ships[0].alive === true) {
			var roll1 = d6();
			var hit1 = roll1 + ships[0].attack + ships[1].shield >= 6;
			if (roll1 === 1) {
				}
			else if (roll1 === 6) {
				ships[1].hull = ships[1].hull - 1
				if (ships[1].hull < 1) {
					ships[1].alive = false;
					game_over = true;
					alert("ship 0 wins")
					}
				}
			else if (hit1 === true) {
				ships[1].hull = ships[1].hull - 1
				if (ships[1].hull < 1) {
					ships[1].alive = false;
					game_over = true;
					alert("ship 0 wins")
					}
				}
			else {
				}
			}
		
		if (ships[0].alive === true) {
			var roll2 = d6();
			var hit2 = roll2 + ships[1].attack + ships[0].shield >= 6;
			if (roll2 === 1) {
				}
			else if (roll2 === 6) {
				ships[0].hull = ships[0].hull - 1
				if (ships[0].hull < 1) {
					ships[0].alive = false;
					game_over = true;
					alert("ship 1 wins")
					}
				}
			else if (hit1 === true) {
				ships[1].hull = ships[0].hull - 1
				if (ships[0].hull < 1) {
					ships[0].alive = false;
					game_over = true;
					alert("ship 1 wins")
					}
				}
			else {
				}
			}
		}
	
	

	
}
	
function test2() {
	var attacker_ship = {
		name : "Attacker",
		alive : true, 
		initiative : parseInt(getOpt("a_init")), 
		wep_ion : parseInt(getOpt("a_wep_i")), 
		wep_pla : parseInt(getOpt("a_wep_p")), 
		wep_ant : parseInt(getOpt("a_wep_a")), 
		attack : parseInt(getOpt("a_attack")), 
		shield : parseInt(getOpt("a_shield")), 
		hull : parseInt(getOpt("a_hull"))
		}
	var defender_ship = {
		name : "Defender",
		alive : true, 
		initiative : parseInt(getOpt("d_init")), 
		wep_ion : parseInt(getOpt("d_wep_i")), 
		wep_pla : parseInt(getOpt("d_wep_p")), 
		wep_ant : parseInt(getOpt("d_wep_a")), 
		attack : parseInt(getOpt("d_attack")), 
		shield : parseInt(getOpt("d_shield")), 
		hull : parseInt(getOpt("d_hull"))
		}

	var ships = [attacker_ship, defender_ship];
	ships.sort(initiative);

	var game_over = false;
	iter = 1000;
	var attacker_ship_survives = 0;
	var defender_ship_survives = 0;

	var round = 1
	
	while (game_over === false) {
		if (ships[0].alive === true) {
			var roll1 = d6();
			var hit1 = roll1 + ships[0].attack + ships[1].shield >= 6;
			if (roll1 === 1) {
				alert("Round: " + round + "\n" + ships[0].name + " rolled " + roll1 + ".  Hit: " + hit1);
				}
			else if (roll1 === 6 || hit1 === true) {
				ships[1].hull = ships[1].hull - 1
				
				alert("Round: " + round + "\n" + ships[0].name + " rolled " + roll1 + ".  Hit: " + hit1);
				
				if (ships[1].hull < 1) {
					ships[1].alive = false;
					game_over = true;
					
					alert(ships[0].name + " wins");
				}
			}
			else {
				alert("Round: " + round + "\n" + ships[0].name + " rolled " + roll1 + ".  Hit: " + hit1);
			}
		//alert("Round: " + round + "\n" + ships[0].name + " rolled " + roll1 + ".  Hit: " + hit1);
		}
		
		if (ships[1].alive === true) {
			var roll2 = d6();
			var hit2 = roll2 + ships[1].attack + ships[0].shield >= 6;
			
			if (roll2 === 1) {
				alert("Round: " + round + "\n" + ships[1].name + " rolled " + roll2 + ".  Hit: " + hit2);
			}
			else if (roll2 === 6 || hit2 === true) {
				ships[0].hull = ships[0].hull - 1;
				
				alert("Round: " + round + "\n" + ships[1].name + " rolled " + roll2 + ".  Hit: " + hit2);
				
				if (ships[0].hull < 1) {
					ships[0].alive = false;
					game_over = true;
					
					alert(ships[1].name + " wins");
				}
			}
			else {
				alert("Round: " + round + "\n" + ships[1].name + " rolled " + roll2 + ".  Hit: " + hit2);
			}
		//alert("Round: " + round + "\n" + ships[1].name + " rolled " + roll2 + ".  Hit: " + hit2);
		}
		
	alert("Round: " + round + "\n" + ships[0].name + " hull: " + ships[0].hull + "\n" + ships[1].name + " hull: " + ships[1].hull);
	
	round = round + 1;
	}

}

function test3() {
	var attacker_ship = {
		party : "Attacker",
		alive : true, 
		initiative : parseInt(getOpt("a_init")), 
		wep_ion : parseInt(getOpt("a_wep_i")), 
		wep_pla : parseInt(getOpt("a_wep_p")), 
		wep_ant : parseInt(getOpt("a_wep_a")), 
		attack : parseInt(getOpt("a_attack")), 
		shield : parseInt(getOpt("a_shield")), 
		hull : parseInt(getOpt("a_hull")),
		hull_start : parseInt(getOpt("a_hull")),
		wins : 0
		}
	var defender_ship = {
		party : "Defender",
		alive : true, 
		initiative : parseInt(getOpt("d_init")), 
		wep_ion : parseInt(getOpt("d_wep_i")), 
		wep_pla : parseInt(getOpt("d_wep_p")), 
		wep_ant : parseInt(getOpt("d_wep_a")), 
		attack : parseInt(getOpt("d_attack")), 
		shield : parseInt(getOpt("d_shield")), 
		hull : parseInt(getOpt("d_hull")),
		hull_start : parseInt(getOpt("d_hull")),
		wins : 0
		}

	var ships = [attacker_ship, defender_ship];
	ships.sort(initiative);

	iterationLoop:
	for (var i = 0, iter = document.getElementById("input_iter").value; 
			i < iter; i++){
		// Reset game variables.
		var game_over = false;
		var round = 1;
		for (ship in ships) {
		ships[ship].alive = true;
		ships[ship].hull = ships[ship].hull_start;
		}
		
		gameLoop:
		while (game_over === false) {
			// First ship's turn
			if (ships[0].alive === true) {
				// Fire antimatter cannons
				for(var w_i=0; w_i < ships[0].wep_ant; w_i++){
					var roll = d6()
					var hit = roll + ships[0].attack + ships[1].shield >= 6;
					
					if (roll === 1) {
					}
					else if (roll === 6 || hit === true) {
						ships[1].hull = ships[1].hull - 4
					}
					else {
					}
				}
				
				// Fire plasma cannons
				for(var w_i=0; w_i < ships[0].wep_pla; w_i++){
					var roll = d6()
					var hit = roll + ships[0].attack + ships[1].shield >= 6;
					
					if (roll === 1) {
					}
					else if (roll === 6 || hit === true) {
						ships[1].hull = ships[1].hull - 2
					}
					else {
					}
				}

				// Fire ion cannons
				for(var w_i=0; w_i < ships[0].wep_ion; w_i++){
					var roll = d6()
					var hit = roll + ships[0].attack + ships[1].shield >= 6;
					
					if (roll === 1) {
					}
					else if (roll === 6 || hit === true) {
						ships[1].hull = ships[1].hull - 1
					}
					else {
					}
				}
				
				// Check if ship is dead and game is over
				if (ships[1].hull < 1) {
							ships[1].alive = false;
							game_over = true;
							ships[0].wins = ships[0].wins + 1
				}
			}
			
			// Second ship's turn
			if (ships[1].alive === true) {
				// Fire antimatter cannons
				for(var w_i=0; w_i < ships[1].wep_ant; w_i++){
					var roll = d6();
					var hit = roll + ships[1].attack + ships[0].shield >= 6;
					
					if (roll === 1) {

					}
					else if (roll === 6 || hit === true) {
						ships[0].hull = ships[0].hull - 4;
					}
					else {
					}
				}
			
				// Fire plasma cannons
				for(var w_i=0; w_i < ships[1].wep_pla; w_i++){
					var roll = d6();
					var hit = roll + ships[1].attack + ships[0].shield >= 6;
					
					if (roll === 1) {
					}
					else if (roll === 6 || hit === true) {
						ships[0].hull = ships[0].hull - 2;
					}
					else {
					}
				}
				
				// Fire ion cannons
				for(var w_i=0; w_i < ships[1].wep_ion; w_i++){
					var roll = d6();
					var hit = roll + ships[1].attack + ships[0].shield >= 6;
					
					if (roll === 1) {
					}
					else if (roll === 6 || hit === true) {
						ships[0].hull = ships[0].hull - 1;
					}
					else {
					}
				}
				
				// Check if ship is dead and game is over
				if (ships[0].hull < 1) {
					ships[0].alive = false;
					game_over = true;
					ships[1].wins = ships[1].wins + 1
				}
			}
			
		
			round = round + 1;
			
			// If the ships aren't killing each other
			// in 1000 rounds, something's wrong.
			if (round > 1000){
			alert("No damage, infinite loop.");
			break iterationLoop;
			}
		}
	}
	
	alert("Iterations: " + iter + "\n" + ships[0].party + " wins: " + parseFloat(100 * ships[0].wins / iter).toFixed(2) + "%\n" + ships[1].party + " wins: " + parseFloat(100 * ships[1].wins / iter).toFixed(2) + "%")

}


function test4() {
	var attacker_ship = {
		name : "Attacker",
		alive : true, 
		initiative : parseInt(getOpt("a_init")), 
		wep_ion : parseInt(getOpt("a_wep_i")), 
		wep_pla : parseInt(getOpt("a_wep_p")), 
		wep_ant : parseInt(getOpt("a_wep_a")), 
		attack : parseInt(getOpt("a_attack")), 
		shield : parseInt(getOpt("a_shield")), 
		hull : parseInt(getOpt("a_hull")),
		hull_start : parseInt(getOpt("a_hull")),
		wins : 0
		};
	for(i=0; i<attacker_ship.wep_ion; i++){
		alert(i)
	};
	alert("done")
}

-->