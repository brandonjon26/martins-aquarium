
import { Fish } from "./Fish.js";
import { getFish, getMostHolyFish, getSoldierFish, getUnworthyFish } from "./FishData.js";


/** Define the steps that need to be taken
 1. Get the array of Fish
 2. Get a reference to the location on the DOM where you want to display the list of fish
 3. Declare a variable to hold on to fish HTML representations
 3. Loop over the array of fish and for each one, invoke the Fish component which returns HTML representation
 4. Finally set the dom equal to the variable containing the fish html representations
 **/

 export const FishList = () => {
	// 1. Get the array of Fish
	// const holyFish = getMostHolyFish();
	// const soldierFish = getSoldierFish();
	// const unworthyFish = getUnworthyFish();
	const allFishes = getFish();

//debugger

	getFish();
	// 2. Get a reference to the location on the DOM where you want to display the list of fish
	const DOMLocation = document.querySelector("#fishList");
	// 3. Declare a variable to hold on to fish HTML representations
	let fishHTMLRepresentations = "";
	// 3. Loop over the array of fish and for each one, invoke the Fish component which returns HTML representation

	for(const oneThingFromTheSea of allFishes){
		//do something with the oneThingFromTheSea
		fishHTMLRepresentations += Fish(oneThingFromTheSea);
	}
	console.log("fishHTMLRepresentations", fishHTMLRepresentations);

	DOMLocation.innerHTML += fishHTMLRepresentations;

 }