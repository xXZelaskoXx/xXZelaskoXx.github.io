//the user's provided grades
const grades = new Map();

//instantiates totalPoint
let totalPoint = 0;
let totalGrades = 0;

//instantiates creditHours
let creditHours = 0;

//instantiates GPA
let GPA = 0;

//values in charge of maintaining logic
let loopControl = false;
let input = "";

//while loop to allow flexible number of inputs
while(loopControl != true)
{
	//prompt to retrieve valid letter grade from user
	input = prompt("Please enter your grade. Only enter the letter values of A, B, C, D, and F. When you have input each grade, enter DONE." , "A, B, C, D, F, or DONE.");
	input = input.toUpperCase();
	if( input =="A" || input == "B" || input == "C" || input == "D" || input == "F")
	{	
		creditHours = prompt("How many credit hours was this course?" , "i.e. 1, 2, 3, so forth");
		creditHours = parseInt(creditHours);
		switch(input)
		{
		case "A":
			grades.set(input, 4);
			console.log("Your A is worth " + (creditHours * 4) + " points.");
			totalPoint = totalPoint + (4 * creditHours);
			totalGrades+= creditHours;
			break;
		case "B":
			grades.set(input, 3);
			console.log("Your B is worth " + (creditHours * 3) + " points.");
			totalPoint = totalPoint + (3 * creditHours);
			totalGrades+= creditHours;
			break;
		case "C":
			grades.set(input, 2);
			console.log("Your C is worth " + (creditHours * 2) + " points.");
			totalPoint = totalPoint + (2 * creditHours);
			totalGrades+= creditHours;
			break;
		case "D":
			grades.set(input, 1);
			console.log("Your D is worth " + creditHours + " point(s).");
			totalPoint = totalPoint + creditHours;
			totalGrades+= creditHours;
			break;
		case "F":
			grades.set(input, 0);
			console.log("Your F is worth 0 points.");
			totalPoint = totalPoint + 0;
			totalGrades+= creditHours;
			break;
		default:
			break;
		}
	}

	//checks validity of input as well as allows loop to end
	else
	{
		if( input == "DONE")
		{
			loopControl = true;	
		}
		else
		{
			alert("Please enter a valid value.");
		}
	}

}

//Calculates gpa
GPA = totalPoint / totalGrades;
alert("Your GPA is " + GPA.toFixed(2));
console.log("Your GPA is " + GPA.toFixed(2));