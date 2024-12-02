console.log("Connected to HTML");

function Calculate()	{


	//u is short for user, sc is short for score. these are containers for the final calculated scores
	let u1sc1, u1sc2, u1sc3, u1sc4, u1sc5, u2sc1, u2sc2, u2sc3, u2sc4, u2sc5, u3sc1, u3sc2, u3sc3, u3sc4, u3sc5;

	// short for total weight, this is the summation of the user weights
	let tw1, tw2, tw3;

	//short for weight, container for user weight per catagory. first digit is the item number, second digit is the user number
	let w11, w21, w31, w41, w51, w12, w22, w32, w42, w52, w13, w23, w33, w43, w53;

	//array for hi scores
	let hs = [];

	//array for low scores
	let ls = [];
	
	//container for values of each score by restaraut
	let b1, b2, b3, b4, b5, f1, f2, f3, f4, f5, dr1, dr2, dr3, dr4, dr5, s1, s2, s3, s4, s5, de1, de2, de3, de4, de5;


	//get value of restaurant items from html document

	b1 =document.getElementById("b1").value;
	b2 =document.getElementById("b2").value;
	b3 =document.getElementById("b3").value;
	b4 =document.getElementById("b4").value;
	b5 =document.getElementById("b5").value;

	f1 =document.getElementById("f1").value;
	f2 =document.getElementById("f2").value;
	f3 =document.getElementById("f3").value;
	f4 =document.getElementById("f4").value;
	f5 =document.getElementById("f5").value;

	dr1 =document.getElementById("dr1").value;
	dr2 =document.getElementById("dr2").value;
	dr3 =document.getElementById("dr3").value;
	dr4 =document.getElementById("dr4").value;
	dr5 =document.getElementById("dr5").value;

	s1 =document.getElementById("s1").value;
	s2 =document.getElementById("s2").value;
	s3 =document.getElementById("s3").value;
	s4 =document.getElementById("s4").value;
	s5 =document.getElementById("s5").value;

	de1 =document.getElementById("de1").value;
	de2 =document.getElementById("de2").value;
	de3 =document.getElementById("de3").value;
	de4 =document.getElementById("de4").value;
	de5 =document.getElementById("de5").value;

	//get weight of each item by user from document

	w11 = parseInt(document.getElementById("w11").value);
	w21 = parseInt(document.getElementById("w21").value);
	w31 = parseInt(document.getElementById("w31").value);
	w41 = parseInt(document.getElementById("w41").value);
	w51 = parseInt(document.getElementById("w51").value);

	w12 = parseInt(document.getElementById("w12").value);
	w22 = parseInt(document.getElementById("w22").value);
	w32 = parseInt(document.getElementById("w32").value);
	w42 = parseInt(document.getElementById("w42").value);
	w52 = parseInt(document.getElementById("w52").value);

	w13 = parseInt(document.getElementById("w13").value);
	w23 = parseInt(document.getElementById("w23").value);
	w33 = parseInt(document.getElementById("w33").value);
	w43 = parseInt(document.getElementById("w43").value);
	w53 = parseInt(document.getElementById("w53").value);

	//input validation for weight

	if(w11 > 0 && w11 < 11 && w21 > 0 && w21 < 11 && w31 > 0 && w31 < 11 && w41 > 0 && w41 < 11 && w51 > 0 && w51 < 11 && w12 > 0 && w12 < 11 && w22 > 0 && w22 < 11 && w32 > 0 && w32 < 11 && w42 > 0 && w42 < 11 && w52 > 0 && w52 < 11 && w13 > 0 && w13 < 11 && w23 > 0 && w23 < 11 && w33 > 0 && w33 < 11 && w43 > 0 && w43 < 11 && w53 > 0 && w53 < 10)
	{

		//calculate total weights by user

		tw1 = w11 + w21 + w31 + w41 + w51;
		tw2 = w12 + w22 + w32 + w42 + w52;
		tw3 = w13 + w23 + w33 + w43 + w53;

		//calculate score for each restaurant by user according to weight

		u1sc1 = (((b1 * w11) + (f1 * w21) + (dr1 * w31) + (s1 * w41) + (de1 * w51)) / tw1).toFixed(2);
		u1sc2 = (((b2 * w11) + (f2 * w21) + (dr2 * w31) + (s2 * w41) + (de2 * w51)) / tw1).toFixed(2);
		u1sc3 = (((b3 * w11) + (f3 * w21) + (dr3 * w31) + (s3 * w41) + (de3 * w51)) / tw1).toFixed(2);
		u1sc4 = (((b4 * w11) + (f4 * w21) + (dr4 * w31) + (s4 * w41) + (de4 * w51)) / tw1).toFixed(2);
		u1sc5 = (((b5 * w11) + (f5 * w21) + (dr5 * w31) + (s5 * w41) + (de5 * w51)) / tw1).toFixed(2);

		u2sc1 = (((b1 * w12) + (f1 * w22) + (dr1 * w32) + (s1 * w42) + (de1 * w52)) / tw2).toFixed(2);
		u2sc2 = (((b2 * w12) + (f2 * w22) + (dr2 * w32) + (s2 * w42) + (de2 * w52)) / tw2).toFixed(2);
		u2sc3 = (((b3 * w12) + (f3 * w22) + (dr3 * w32) + (s3 * w42) + (de3 * w52)) / tw2).toFixed(2);
		u2sc4 = (((b4 * w12) + (f4 * w22) + (dr4 * w32) + (s4 * w42) + (de4 * w52)) / tw2).toFixed(2);
		u2sc5 = (((b5 * w12) + (f5 * w22) + (dr5 * w32) + (s5 * w42) + (de5 * w52)) / tw2).toFixed(2);

		u3sc1 = (((b1 * w13) + (f1 * w23) + (dr1 * w33) + (s1 * w43) + (de1 * w53)) / tw3).toFixed(2);
		u3sc2 = (((b2 * w13) + (f2 * w23) + (dr2 * w33) + (s2 * w43) + (de2 * w53)) / tw3).toFixed(2);
		u3sc3 = (((b3 * w13) + (f3 * w23) + (dr3 * w33) + (s3 * w43) + (de3 * w53)) / tw3).toFixed(2);
		u3sc4 = (((b4 * w13) + (f4 * w23) + (dr4 * w33) + (s4 * w43) + (de4 * w53)) / tw3).toFixed(2);
		u3sc5 = (((b5 * w13) + (f5 * w23) + (dr5 * w33) + (s5 * w43) + (de5 * w53)) / tw3).toFixed(2);

		
		//relay calculated values to relevant HTML fields

		document.getElementById("user1sc1").innerHTML = u1sc1;
		document.getElementById("user1sc2").innerHTML = u1sc2;
		document.getElementById("user1sc3").innerHTML = u1sc3;
		document.getElementById("user1sc4").innerHTML = u1sc4;
		document.getElementById("user1sc5").innerHTML = u1sc5;

		document.getElementById("user2sc1").innerHTML = u2sc1;
		document.getElementById("user2sc2").innerHTML = u2sc2;
		document.getElementById("user2sc3").innerHTML = u2sc3;
		document.getElementById("user2sc4").innerHTML = u2sc4;
		document.getElementById("user2sc5").innerHTML = u2sc5;

		document.getElementById("user3sc1").innerHTML = u3sc1;
		document.getElementById("user3sc2").innerHTML = u3sc2;
		document.getElementById("user3sc3").innerHTML = u3sc3;
		document.getElementById("user3sc4").innerHTML = u3sc4;
		document.getElementById("user3sc5").innerHTML = u3sc5;	


		//calculate hi score by user

		hs[0] = Math.max(u1sc1, u1sc2, u1sc3, u1sc4, u1sc5);
		hs[1] = Math.max(u2sc1, u2sc2, u2sc3, u2sc4, u2sc5);
		hs[2] = Math.max(u3sc1, u3sc2, u3sc3, u3sc4, u3sc5);

		
		//calculat low score by user

		ls[0] = Math.min(u1sc1, u1sc2, u1sc3, u1sc4, u1sc5);
		ls[1] = Math.min(u2sc1, u2sc2, u2sc3, u2sc4, u2sc5);
		ls[2] = Math.min(u3sc1, u3sc2, u3sc3, u3sc4, u3sc5);


		//reset html fields to base color

		document.getElementById("user1sc1").style.color = "floralwhite";
		document.getElementById("user1sc2").style.color = "floralwhite";
		document.getElementById("user1sc3").style.color = "floralwhite";
		document.getElementById("user1sc4").style.color = "floralwhite";
		document.getElementById("user1sc5").style.color = "floralwhite";

		document.getElementById("user2sc1").style.color = "floralwhite";
		document.getElementById("user2sc2").style.color = "floralwhite";
		document.getElementById("user2sc3").style.color = "floralwhite";
		document.getElementById("user2sc4").style.color = "floralwhite";
		document.getElementById("user2sc5").style.color = "floralwhite";

		document.getElementById("user3sc1").style.color = "floralwhite";
		document.getElementById("user3sc2").style.color = "floralwhite";
		document.getElementById("user3sc3").style.color = "floralwhite";
		document.getElementById("user3sc4").style.color = "floralwhite";
		document.getElementById("user3sc5").style.color = "floralwhite";


		//set lo score field to brown

		if(ls[0] == u1sc1){
			document.getElementById("user1sc1").style.color = "brown";
		}

		if(ls[0] == u1sc2){
			document.getElementById("user1sc2").style.color = "brown";
		}

		if(ls[0] == u1sc3){
			document.getElementById("user1sc3").style.color = "brown";
		}

		if(ls[0] == u1sc4){
			document.getElementById("user1sc4").style.color = "brown";
		}

		if(ls[0] == u1sc5){
			document.getElementById("user1sc5").style.color = "brown";
		}

		if(ls[1] == u2sc1){
			document.getElementById("user2sc1").style.color = "brown";
		}

		if(ls[1] == u2sc2){
			document.getElementById("user2sc2").style.color = "brown";
		}

		if(ls[1] == u2sc3){
			document.getElementById("user2sc3").style.color = "brown";
		}

		if(ls[1] == u2sc4){
			document.getElementById("user2sc4").style.color = "brown";
		}

		if(ls[1] == u2sc5){
			document.getElementById("user2sc5").style.color = "brown";
		}

		if(ls[2] == u3sc1){
			document.getElementById("user3sc1").style.color = "brown";
		}

		if(ls[2] == u3sc2){
			document.getElementById("user3sc2").style.color = "brown";
		}

		if(ls[2] == u3sc3){
			document.getElementById("user3sc3").style.color = "brown";
		}

		if(ls[2] == u3sc4){
			document.getElementById("user3sc4").style.color = "brown";
		}

		if(ls[2] == u3sc5){
			document.getElementById("user3sc5").style.color = "brown";
		}



		//set hi score field to gold

		if(hs[0] == u1sc1){
			document.getElementById("user1sc1").style.color = "gold";
		}

		if(hs[0] == u1sc2){
			document.getElementById("user1sc2").style.color = "gold";
		}

		if(hs[0] == u1sc3){
			document.getElementById("user1sc3").style.color = "gold";
		}

		if(hs[0] == u1sc4){
			document.getElementById("user1sc4").style.color = "gold";
		}

		if(hs[0] == u1sc5){
			document.getElementById("user1sc5").style.color = "gold";
		}

		if(hs[1] == u2sc1){
			document.getElementById("user2sc1").style.color = "gold";
		}

		if(hs[1] == u2sc2){
			document.getElementById("user2sc2").style.color = "gold";
		}

		if(hs[1] == u2sc3){
			document.getElementById("user2sc3").style.color = "gold";
		}

		if(hs[1] == u2sc4){
			document.getElementById("user2sc4").style.color = "gold";
		}

		if(hs[1] == u2sc5){
			document.getElementById("user2sc5").style.color = "gold";
		}

		if(hs[2] == u3sc1){
			document.getElementById("user3sc1").style.color = "gold";
		}

		if(hs[2] == u3sc2){
			document.getElementById("user3sc2").style.color = "gold";
		}

		if(hs[2] == u3sc3){
			document.getElementById("user3sc3").style.color = "gold";
		}

		if(hs[2] == u3sc4){
			document.getElementById("user3sc4").style.color = "gold";
		}

		if(hs[2] == u3sc5){
			document.getElementById("user3sc5").style.color = "gold";
		}

	}


	//ask user to correct input

	else
	{
		alert("No, the value has to be a number, in base 10, from 1 to 10. No exceptions.")

	}

}

//sets name fields for users

function getName(personNumber){
	let name = prompt("What is person number " + personNumber + "'s name?", "Douglas Thuglas");
	
	return name;
}