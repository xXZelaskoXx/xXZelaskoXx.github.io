/*
Dylan Zelasko
CITC 2390

Mid-term project

main: javascript file containing functions for the website to operate

business: Doug's Burger Shack (fictional)

NO LONGER USED IN FINAL CODE; REPLACED WITH PHP FILES: addMember.php and searchMember.php
*/

//node js components (removed for code to function in current state)

//instantiate global formattedMember
let formattedMember = "";


//checks each element of the member enrollment page for a value
function verifyData(){

	//return variable for whether the data is valid or invalid
	let validationToken = 1;

	//storage for tokens indicating that input has been validated
	let dataCheck = [];

	//checks for a value in the firstName id of the employeeMenu html file
	if(document.getElementById("firstName").value !== "")
		dataCheck.push(1);
	else
		dataCheck.push(0);

	//checks for a value in the lastName id of the employeeMenu html file
	if(document.getElementById("lastName").value != "")
		dataCheck.push(1);
	else
		dataCheck.push(0);

	//checks for a value in the birthday id of the employeeMenu html file
	if(document.getElementById("birthday").value != "")
		dataCheck.push(1);
	else
		dataCheck.push(0);

	//checks for a value in the phoneNumber id of the employeeMenu html file
	if(document.getElementById("phoneNumber").value != "")
		dataCheck.push(1);
	else
		dataCheck.push(0);

	//checks for a value in the favoriteColor id of the employeeMenu html file
	if(document.getElementById("favoriteColor").value != "")
		dataCheck.push(1);
	else
		dataCheck.push(0);

	//checks for a value in the spouseName id of the employeeMenu html file
	if(document.getElementById("spouseName").value != "")
		dataCheck.push(1);
	else
		dataCheck.push(0);
	//checks for a value in the firstPet id of the employeeMenu html file
	if(document.getElementById("firstPet").value != "")
		dataCheck.push(1);
	else
		dataCheck.push(0);

	//checks for a value in the almaMater id of the employeeMenu html file
	if(document.getElementById("almaMater").value != "")
		dataCheck.push(1);
	else
		dataCheck.push(0);

	//checks for a value in the primaryVehicle id of the employeeMenu html file
	if(document.getElementById("primaryVehicle").value != "")
		dataCheck.push(1);
	else
		dataCheck.push(0);

	//checks for a value in the occupation id of the employeeMenu html file
	if(document.getElementById("occupation").value != "")
		dataCheck.push(1);
	else
		dataCheck.push(0);

	//checks for a value in the favoriteMovie id of the employeeMenu html file
	if(document.getElementById("favoriteMovie").value != "")
		dataCheck.push(1);
	else
		dataCheck.push(0);

	//checks for a value in the zipCode id of the employeeMenu html file
	if(document.getElementById("zipCode").value != "")
		dataCheck.push(1);
	else
		dataCheck.push(0);

	//for loop to check each element of array. If all values are 1, input is valid
	for(let i = 0; i < dataCheck.length; i++  )
	{
		if( dataCheck[i] == "0")
			validationToken = 0;
	}

	//returns value of validationToken to other functions
	return validationToken;
}


//verifies the correct user information has been provided
function verifyUser(){

	//container for whether the user information provided is correct
	let validationToken = 1;
	if(document.getElementById("userName").value !== "grandpappy27")
		validationToken = 0;
	if(document.getElementById("password").value !== "welovedoug")
		validationToken = 0;

	//returns value of validationToken to other functions
	return validationToken;
}

//if all is valid, the member is recorded to the database
function recordMember(){

	//container for whether each field contains data
	let dataValidation = verifyData();

	//container for user validation
	let userValidation = verifyUser();

	//validates data. If data is invalid, informs user and ends function
	if(dataValidation == 0){
		alert("Please enter each field for member enrollment. If a field is not applicable, please enter N/A for that field.");
		return;
	}

	//validates credentials. If credentials are invalid, informs user and ends function
	if(userValidation == 0){
		alert("Incorrect username or password entered. Please enter a correct username and password!");
		return;
	}

	//formats member and adds to csv file provided by user
	formattedMember = formatMember();

	//informs user that Member has succesfully been added to the database
	alert(document.getElementById("firstName").value + " has been enrolled in Doug's Club!");

}	

//searches database for member by information supplied in html document
function searchMember(){

	//container for validation that correct user info has been provided
	let userValidation = verifyUser();

	//container array for all entered fields
	let dataContainer = [];

	//only executes function as long as the currect user info is entered
	if(userValidation == 1){

		//gets all information from filled fields and stores in array

		//checks for value in firstName id
		if(document.getElementById("firstName").value !== "")
			dataContainer.push(document.getElementById("firstName").value);

		//checks for value in lastName id
		if(document.getElementById("lastName").value != "")
			dataContainer.push(document.getElementById("lastName").value);
		
		//checks for value in birthday id
		if(document.getElementById("birthday").value != "")
			dataContainer.push(document.getElementById("birthday").value);
		
		//checks for value in phoneNumber id
		if(document.getElementById("phoneNumber").value != "")
			dataContainer.push(document.getElementById("phoneNumber").value);
		
		//checks for value in favoriteColor id
		if(document.getElementById("favoriteColor").value != "")
			dataContainer.push(document.getElementById("favoriteColor").value);
		
		//checks for value in spouseName id
		if(document.getElementById("spouseName").value != "")
			dataContainer.push(document.getElementById("spouseName").value);
		
		//checks for value in firstPet id
		if(document.getElementById("firstPet").value != "")
			dataContainer.push(document.getElementById("firstPet").value);
		
		//checks for value in almaMater id
		if(document.getElementById("almaMater").value != "")
			dataContainer.push(document.getElementById("almaMater").value);
		
		//checks for value in primaryVehicle id
		if(document.getElementById("primaryVehicle").value != "")
			dataContainer.push(document.getElementById("primaryVehicle").value);
		
		//checks for value in occupation id
		if(document.getElementById("occupation").value != "")
			dataContainer.push(document.getElementById("occupation").value);
		
		//checks for value in favoriteMovie id
		if(document.getElementById("favoriteMovie").value != "")
			dataContainer.push(document.getElementById("favoriteMovie").value);
		
		//checks for value in zipCode id
		if(document.getElementById("zipCode").value != "")
			dataContainer.push(document.getElementById("zipCode").value);

		//ensures at least one field has been entered
		if(dataContainer.length == 0)
			alert("Please enter a field or fields to be searched for.");
		else{
			alert("Your search has been completed!");
		}
	}

	//informs user of incorrect login information
	else{
		alert("Incorrect username or password entered. Please enter a correct username and password!");
	}
}


//gets information from id fields in html and assembles it into a string to pass to csv
function formatMember(){

	//container for formatted string to write to csv
	let formattedMember = ""

	//get each element from html file to pass to string
	formattedMember += document.getElementById("firstName").value + ",";
	formattedMember += document.getElementById("lastName").value + ",";
	formattedMember += document.getElementById("birthday").value + ",";
	formattedMember += document.getElementById("phoneNumber").value + ",";
	formattedMember += document.getElementById("favoriteColor").value + ",";
	formattedMember += document.getElementById("spouseName").value + ",";
	formattedMember += document.getElementById("firstPet").value + ",";
	formattedMember += document.getElementById("almaMater").value + ",";
	formattedMember += document.getElementById("primaryVehicle").value + ",";
	formattedMember += document.getElementById("occupation").value + ",";
	formattedMember += document.getElementById("favoriteMovie").value + ",";
	formattedMember += document.getElementById("zipCode").value;

	//append concatenated string to csv file, likely using node js


	//end method
	return;
}