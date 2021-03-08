
import { Tips } from "./tips.js";
import { getTips } from "./tipsData.js";


/** Define the steps that need to be taken
 1. Get the array of Fish
 2. Get a reference to the location on the DOM where you want to display the list of fish
 3. Declare a variable to hold on to fish HTML representations
 3. Loop over the array of fish and for each one, invoke the Fish component which returns HTML representation
 4. Finally set the dom equal to the variable containing the fish html representations
 **/

 export const tipsList = () => {
	// 1. Get the array of Fish
	const allTips = getTips();

//debugger

	getTips();
	// 2. Get a reference to the location on the DOM where you want to display the list of fish
	const DOMLocation = document.querySelector("#tipsList");
	// 3. Declare a variable to hold on to fish HTML representations
	let tipsHTMLRepresentations = "";
	// 3. Loop over the array of fish and for each one, invoke the Fish component which returns HTML representation

	for(const oneThingFromTheTip of allTips){
		//do something with the oneThingFromTheTip
		tipsHTMLRepresentations += Tips(oneThingFromTheTip);
	}

	console.log("tipsHTMLRepresentations", tipsHTMLRepresentations);
	
    DOMLocation.innerHTML += tipsHTMLRepresentations;
 }