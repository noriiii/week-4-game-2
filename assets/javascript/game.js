//Create an array of numbers 1-100

	var numberSetComputer = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
	var numberSetUser = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	var userTotal = 0;

	var wincounter = 0;
	var losecounter = 0;

	var userTotalCounter = 0;


//Assign a random number to a gem. Do not display the number.

     	function getRandomArbitrary(min, max) {
        	return Math.floor(Math.random() * (max - min)) + min;
      	}

      	var gemValueDiamond = numberSetUser[getRandomArbitrary(0,numberSetUser.length-1)];
      	var gemValueGarnet = numberSetUser[getRandomArbitrary(0,numberSetUser.length-1)];
      	var gemValueRuby = numberSetUser[getRandomArbitrary(0,numberSetUser.length-1)];
      	var gemValueTopaz = numberSetUser[getRandomArbitrary(0,numberSetUser.length-1)];
      	var computerValue = numberSetComputer[getRandomArbitrary(0,numberSetComputer.length-1)];

    $(document).ready( function() {
    	// Generate a random number for user to match. Display the number.
    	$("#computerTotal").text(computerValue);

    	// User

    	$("#diamond").on("click", function () {
 		
		// Compute user total
	 	
	 	userTotal = userTotal + gemValueDiamond;

		 $("#userTotal").text(userTotal);

		//The Game: If the user matches the number displayed, user wins.
		//If the user surpasses the number displayed, user loses.
		 if (userTotal == computerValue) {
			wincounter++;
			$("#win").text(wincounter);
			$("userTotal").empty();
	
		}

		else if (userTotal >= computerValue) {
			losecounter++;
			$("#lose").text(losecounter);
			$("userTotal").empty();
			
		};

    	})

    	$("#garnet").on("click", function () {
 		
		// Compute user total
	 	
	 	userTotal = userTotal + gemValueGarnet;

		 $("#userTotal").text(userTotal)

		 if (userTotal == computerValue) {
			wincounter++;
			$("#win").text(wincounter);
			$("userTotal").empty();
	
		}

		else if (userTotal >= computerValue) {
			losecounter++;
			$("#lose").text(losecounter);
			$("userTotal").empty();
			
		};


    	})

    	$("#ruby").on("click", function () {
 		
		// Compute user total
	 	
	 	userTotal = userTotal + gemValueRuby;

		 $("#userTotal").text(userTotal)

		 if (userTotal == computerValue) {
			wincounter++;
			$("#win").text(wincounter);
			$("userTotal").empty();
	
		}

		else if (userTotal >= computerValue) {
			losecounter++;
			$("#lose").text(losecounter);
			$("userTotal").empty();
			
		};


    	})

    	$("#topaz").on("click", function () {
 		
		// Compute user total
	 	
	 	userTotal = userTotal + gemValueTopaz;

		 $("#userTotal").text(userTotal);

		 if (userTotal == computerValue) {
			wincounter++;
			$("#win").text(wincounter);
			$("userTotal").empty();
	
		}

		else if (userTotal >= computerValue) {
			losecounter++;
			$("#lose").text(losecounter);
			$("userTotal").empty();
			
		};


    	})



    });
