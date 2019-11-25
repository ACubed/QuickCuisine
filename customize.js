const maxIngredients = 4;
let numTomatoes = 1;
let numCheese = 1;
let numPatties = 1;

//TOMATOES
function incrementTomatoes() {
	if(numTomatoes < maxIngredients) {
		numTomatoes++;
		document.getElementById("tomato").innerHTML = numTomatoes;
	} 
	if(numTomatoes == maxIngredients){
		document.getElementById('tomatoPlus').src="Assets/Images/Buttons/button_plus_disabled.png";
	} else { //enable minus
		document.getElementById('tomatoMinus').src="Assets/Images/Buttons/button_minus.png";
		document.getElementById('tomatoImage').style.opacity = 1;
	}
}

function decrementTomatoes() {
	if(numTomatoes > 0) {
		numTomatoes--;
			document.getElementById("tomato").innerHTML = numTomatoes;
	}
	if(numTomatoes == 0){ //disable the minus button
		document.getElementById('tomatoMinus').src="Assets/Images/Buttons/button_minus_disabled.png";
		document.getElementById('tomatoImage').style.opacity = 0.3;
	} else{ //enable the plus button
		document.getElementById('tomatoPlus').src="Assets/Images/Buttons/button_plus.png";
	}
}

//CHEESE
function incrementCheese() {
	if(numCheese < maxIngredients){
		numCheese++;
		document.getElementById("cheese").innerHTML = numCheese;
	}
	if(numCheese == maxIngredients){ //disable the plus
		document.getElementById('cheesePlus').src="Assets/Images/Buttons/button_plus_disabled.png";
	} else { //enable the minus
		document.getElementById('cheeseMinus').src="Assets/Images/Buttons/button_minus.png";
		document.getElementById('cheeseImage').style.opacity = 1;
	}
}

function decrementCheese() {
	if(numCheese > 0){
		numCheese--;
			document.getElementById("cheese").innerHTML = numCheese;
	}
	if(numCheese == 0){//disable the minus button
		document.getElementById('cheeseMinus').src="Assets/Images/Buttons/button_minus_disabled.png";
		document.getElementById('cheeseImage').style.opacity = 0.3;
	} else{ //enable the plus button
		document.getElementById('cheesePlus').src="Assets/Images/Buttons/button_plus.png";
	}
}

//PATTIES
function incrementPatties() {
	if(numPatties< maxIngredients) {
		numPatties++;
			document.getElementById("patties").innerHTML = numPatties;
	}
	if(numPatties == maxIngredients){ //disable the plus
		document.getElementById('pattyPlus').src="Assets/Images/Buttons/button_plus_disabled.png";
	} else { //enable the minus
		document.getElementById('pattyMinus').src="Assets/Images/Buttons/button_minus.png";
		
		document.getElementById('pattyImage').style.opacity = 1;
	}
}
function decrementPatties() {
	if(numPatties> 0){
		numPatties--;
			document.getElementById("patties").innerHTML = numPatties;
	}
	if(numPatties == 0){ //disable the minus button
		document.getElementById('pattyMinus').src="Assets/Images/Buttons/button_minus_disabled.png";
		document.getElementById('pattyImage').style.opacity = 0.3;
	} else{ //enable the plus button
		document.getElementById('pattyPlus').src="Assets/Images/Buttons/button_plus.png";
	}
}


