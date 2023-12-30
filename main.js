import { recupererSunriseSunset, genererUrl } from "./gestionnaireAPIsun.js";
import {lancerHorloge} from "./gestionnaireHorloge.js"

let url = "";
let sunriseSunset;

async function main() {
  url = await genererUrl();
  sunriseSunset = await recupererSunriseSunset(url);
  lancerHorloge();

  console.log(sunriseSunset);
  console.log(
    "Date " + sunriseSunset.results.date + "\n" +
    "Aube " + sunriseSunset.results.dawn + "\n" +
    "Longueur du jour " + sunriseSunset.results.day_length + "\n" +
    "Crépuscule " + sunriseSunset.results.dusk + "\n" +
    "Longueur du jour " + sunriseSunset.results.day_length + "\n" +
    "Première lumière " + sunriseSunset.results.first_light + "\n" +
    "Heure Dorée " + sunriseSunset.results.golden_hour + "\n" +
    "Dernière lumière " + sunriseSunset.results.last_light + "\n" +
    "Midi solaire " + sunriseSunset.results.solar_noon + "\n" +
    "Levé du soleil " + sunriseSunset.results.sunrise + "\n" +
    "Couché du soleil " + sunriseSunset.results.sunset + "\n" +
    "Zone " + sunriseSunset.results.timezone
    );
}

main();

