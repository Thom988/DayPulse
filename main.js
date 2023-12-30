import { recupererSunriseSunset, genererUrl } from "./gestionnaireAPIsun.js";
import {lancerHorloge} from "./gestionnaireHorloge.js";
import { afficherClockBoard } from "./clockBoard.js";

let url = "";
let sunriseSunset;

async function main() {
  url = await genererUrl();
  sunriseSunset = await recupererSunriseSunset(url);
  lancerHorloge();
  afficherClockBoard(sunriseSunset);
}

main();

