console.log("main is loaded");


// import { getMostHolyFish, getSoldierFish, getUnworthyFish } from "./FishList.js";
import { FishList } from "./FishList.js";
import { locationList } from "./locations/locationList.js";
import { tipsList } from "./tips/tipsList.js";
FishList();
locationList();
tipsList();
// console.log(getMostHolyFish());