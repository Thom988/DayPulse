import { recupererSunriseSunset, genererUrl } from "./sunriseSunset.js";

let url = "";
let sunriseSunset;

async function main() {
  url = await genererUrl();
  sunriseSunset = await recupererSunriseSunset(url);
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






/*
function recupererPosition() {
  // Vérifier si le navigateur prend en charge la géolocalisation
  if ("geolocation" in navigator) {
    // Obtenez la position actuelle de l'utilisateur
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // Récupérer la latitude et la longitude depuis l'objet de position
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        url = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}`;
      },
      function (error) {
        // En cas d'erreur lors de la récupération de la position
        console.error("Erreur de géolocalisation: " + error.message);
      }
    );
  } else {
    // Si la géolocalisation n'est pas prise en charge par le navigateur
    console.error(
      "Désolé, La géolocalisation n'est pas prise en charge par ce navigateur :/"
    );
  }
}
*/