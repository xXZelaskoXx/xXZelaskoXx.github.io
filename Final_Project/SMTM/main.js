/*
file name: main.js
purpose: houses functions to perform API calls and interpolate the data
	as needed for end user needs. 
utilized by: index.html

uses: https://github.com/fawazahmed0/exchange-api
	& https://apidocs.cheapshark.com/

*/

/*
function: getExchangeRate()
purpose: constructs url based on currency 1 that calls the exchange api. Also extracts value of currency 2
	select to pull exchange rate from response json. Also calls methods to get total value of currency 1 relative
	to currency 2 and contacts the games API after converting total to USD. Relays all relevant information to 
	HTML for end user
params: none
returns: none
*/
function getExchangeRate(){

	//container for amount of currency 1
	const cAmount = $("#amount").val();

	//usd exchange rate container
	let usdex = 0;

	//currency 1 to currency 2 exchange rate
	let c1c2ex=0;

	//usd total container
	let usdTotal = 0;

	//container for currency 1 name
	const c1=$("#c1").val();

	//container for currency 2 name
	const c2=$("#c2").val();

//user input validation, only ints accepted
	if(isNaN(cAmount)!=true){

		//url for currency 1 container
		urlc1 = "https://latest.currency-api.pages.dev/v1/currencies/" + c1 + ".json";

		//api call to currency exchange api
		$(document).load(urlc1, function(resource){

		 	//container for parsed json Resource
	        jsonR = JSON.parse(resource);

	        //retrieve usd exchange rate from response
	        usdex = jsonR[c1]["usd"];

	        //retrieve currency 1 to currency 2 exchange rate from response
	        c1c2ex = jsonR[c1][c2];

	        //set html element id "worth" to appropriate value
			worthString = "Your Worth is " + (cAmount * c1c2ex).toFixed(2) + " " + c2 + " when converted from " + cAmount + " " + c1 + ". Congratulations!";
			$("#worth").text(worthString);

			//set html element id "usdString" to new value
			usdTotal = (cAmount * usdex).toFixed(2);
			usdString= "That's a whopping " + usdTotal + " usd! You could buy this game!";
			$("#usdString").text(usdString);
			
			getGame(usdTotal);

		 });
	}//end if statement

//inform user of acceptable values
	else{
		alert("Please enter a number without commas, i.e. 5000, 1.25, 8675309, etc.")
	}//end else statement

}//end getExchangeRate



/*
function: getGame()
purpose: constructs url based on usd total that calls the exchange api. It then extracts relevant information from
	the cheapshark api and relays game information to the end user.
params: USD: total converted value of currency 1 in USD
returns: none
*/
function getGame(USD){

	//container for cheapshark api url
	let csURL = "https://www.cheapshark.com/api/1.0/deals?upperPrice=" + USD;

	$(document).load(csURL, function(resource){
		jsonR = JSON.parse(resource);
		
		const gameID = Math.floor(Math.random()*jsonR.length);

		jsonR = jsonR[gameID];

		let remainder = USD - jsonR["salePrice"];


	//set HTML elements to show game
		$("#gameIMG").attr("src", jsonR["thumb"]);
		$("#gameTitle").text(jsonR["title"]);
		$("#normalPrice").text("Normal Price: " + jsonR["normalPrice"]);
		$("#gamePrice").text("Sale Price: " + jsonR["salePrice"]);
		$("#dealRating").text("Cheap Shark Deal Rating: " + jsonR["dealRating"]);
		$("#remainder").text("You would still have the equivalent of " + remainder.toFixed(2) + " usd if you did. Are you tempted?");


		//set elements to visible
		$("*").css("visibility","visible");

	});//end first API call


	lowerPrice= USD / 60;

	//container for url that is listed in order of price
	csURL += "&lowerPrice=" + lowerPrice + "&sortBy=Price";

	//second API call to get long list of games
	$(document).load(csURL, function(resource){
		jsonR = JSON.parse(resource);
		gameList = "";
		totalPrice = 0;
		loopControl = jsonR.length;
		let i = 1;
    remainder = USD

		console.log(jsonR);

		//for loop to iterate through entire JSON
		while(i < loopControl){
			if(remainder - parseFloat(jsonR[(loopControl-i)]["salePrice"]) >= 0){
				gameList += jsonR[loopControl-i]["title"] + " & ";
				totalPrice += parseFloat(jsonR[loopControl-i]["salePrice"]);
				remainder = remainder - parseFloat(jsonR[loopControl-i]["salePrice"]);
			}
			i++;
		}

		//make gameList, total price, and remainder in USD visible to the user
		$("#gameList").text("Alternatively, you could purchase " + gameList + " it would only cost you " + totalPrice.toFixed(2) + " usd, leaving you a grand total of " + remainder.toFixed(2) + ". That might just be worth it!");

	});//end second API call
}//end getGame

//end main.js