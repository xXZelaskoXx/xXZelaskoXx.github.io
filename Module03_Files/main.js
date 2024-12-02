/*
Dylan Zelasko

WEBT2300

Module03 Lab
*/


//Calculate function to be called from button in HTML file

function Calculate()	
{


	//container for the final calculated scores
	//userScores[0] restaurant 1 for user 1, userScores[5] restuarant 1 for user 2
	let userScores = [];

	//set all userScore values to 0
	for (let s = 0; s < 15; s++)
	{
		userScores[s] = 0;
	}

	//short for total weight, this is the summation of the user weights
	//tw[0] user 1, tw[1] user 2
	let tw = [0,0,0];

	//short for weight, container for user weight per catagory. first digit is the item number, second digit is the user number
	// w[0] restaurant 1 for user 1, w[5] restaurant 1 for user 2
	let w = [];

	//array for hi scores
	//hs[0] user 1, hs[1] user 2
	let hs = [0,0,0];

	//array for low scores
	//ls[0] user 1, ls[1] user 2
	let ls = [10,10,10];
	
	//container for values of each score by restaraunt
	//storeScores[0] restaraunt 1 burger storeScores[5] restaurant 2 burger
	let storeScores = [];	


	//iterators (individual due to frequency)

	//always for user 0,1,2
	let i = 0;

	//always for restaurant 0,1,2,3,4
	let subi = 0;

	//always for food item 0,1,2,3,4
	let boti = 0;




	//get value of restaurant items from html document
	//TESTED, valid

	//storeScores -> 0 -4 McDonald's, 5 - 9 Wendys, ... 20-24 Dairy Queen

	for (subi = 0; subi < 5; subi++)
	{
		//for each food item
		for (boti = 0; boti < 5; boti++)
		{
			//pushes score to end of array
			storeScores.push( $("#" + String(boti) + String(subi) ).val());
		}
	}

	//get weight of each item by user from document
	//TESTED, valid

	//w 0 - 4 user1, 5 - 9 user2, 10 -14 user3

	//for each user
	for(i = 0; i < 3; i++)
	{
		//for each food item
		for(boti = 0; boti < 5; boti++)
		{
			w.push($("#w" + String(boti) + String(i)).val());

			//input validation
			//TESTED, valid
			if(w[boti + i *5] > 10 || w[boti + i *5] < 1)
			{
				alert("No, the value has to be a number, in base 10, from 1 to 10. No exceptions.");
				return;
			}

		}
	}

	//calculate total weights by user
	//TESTED, valid

	//tw0 user1, tw1, user2, tw2, user3

	//iterates for each user
	for( i = 0; i < 3; i++)
	{

		//iterates for each food item
		for( boti = 0; boti < 5; boti++)
		{

			//gets total weight by user
			tw[i]+= parseInt(w[(boti + (i * 5))]);
		}
	}



	//calculate score for each restaurant by user according to weight
	//TESTED, VALID
	//userScores 0 - 4 user 1, 5 - 9 user 2, 10 - 14 user 3

	//runs for each user
	for( i = 0; i < 3; i++)
	{

		//iterates for each restaurant
		for( subi = 0; subi < 5; subi++)
		{
			//iterates for each food item
			for( boti = 0; boti < 5; boti++)
			{

				//for each restaurant, add the individual values of the food * weight
				userScores[subi + (i * 5)] += parseInt((storeScores[boti + (subi * 5) ] * (w[boti + (i * 5)]) ));
			}
			//divides by total weight
			userScores[subi + i * 5] = userScores[subi + i * 5] / tw[i];

			//format to two decimal places
			userScores[subi + (i * 5)] = userScores[subi + (i * 5)].toFixed(2);
			$("#sc" + String(subi) + String(i)).text(userScores[subi + (i * 5)]);
		}
	}


	//calculate hi score by user
	//TESTED, VALID

	//for each user
	for( i = 0; i < 3; i++)
	{
		//for each store
		for( subi = 0; subi < 5; subi++)
		{
			//compares all scores against the previous hi score
			if(hs[i] < userScores[subi + (i * 5)])
				hs[i] = userScores[subi + (i * 5)];
		}
	}

	//calculate low score by user

	//for each user
	for( i = 0; i < 3; i++)
	{
		//for each store
		for( subi = 0; subi < 5; subi++)
		{
			//compares all scores against previous low score
			if(ls[i] > userScores[subi +  (i * 5)])
				ls[i] = userScores[subi + (i * 5)];
		}
	}


	//reset html fields to base color

	//for each user
	for( i = 0; i < 3; i++)
	{
		//for each restaraunt
		for( subi = 0; subi < 5; subi++)
		{
			$("#sc" + String(subi) + String(i)).css('color', 'floralwhite');
		}
	}

	//set lo score field to brown

	//for each user
	for( i = 0; i < 3; i++)
	{
		//for each store
		for(subi = 0; subi < 5; subi++)
		{
			//checks value for whether it is the lowest score per user
			if(userScores[subi + i * 5] == ls[i])
				$("#sc" + String(subi) + String(i)).css('color','brown');
		}
	}


	//set hi score field to gold

	for( i = 0; i < 3; i++)
	{
		for(subi = 0; subi < 5; subi++)
		{
			if(userScores[subi + i * 5] == hs[i])
				$("#sc" + String(subi) + String(i)).css('color', 'gold');
		}
	}

//end Calculate()
}


//sets name fields for users

function setName()
{	
	//containers and var
	let personNumber = 1;
	let nameHolder = "";
	let setIndicator = "";

	//for each user
	for(i = 0; i < 3; i++)
	{

		//initialize indicator
		setIndicator = "user" + personNumber;

		//store username in container
		nameHolder = prompt("What is person number " + personNumber + "'s name?", "Douglas Thuglas");

		//sets user field
		$("#" + String(setIndicator)).text(nameHolder);

		//initialize indicator for header field
		setIndicator += "H";

		//set header field
		$("#" + String(setIndicator)).text(nameHolder);

		//increment person number
		personNumber++;
	}	

//end setName()
}