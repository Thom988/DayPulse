function genererPosition() {
    let positions = [0,0]
    return new Promise(resolve => {
      try {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(
            function (position) {
              positions[0] = position.coords.latitude;
              positions[1] = position.coords.longitude;
              resolve(positions);
            },
            function (error) {
              throw new Error("Erreur de géolocalisation : " + error.message)
            }
          );
        } else {
          throw new Error(
            "Désolé, ce navigateur ne prend pas en charge la géolocalisation"
          );
        }
      } catch (err) {
        console.log(err.message);
      }
    });
  }
  
export async function genererUrl() {
    const positions = await genererPosition();
    const latitude = positions[0];
    const longitude = positions[1];
    return `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}`;
  }
  
  export async function recupererSunriseSunset(url) {
    let reponse;
    try {
      const requete = await fetch(url);
      reponse = await requete.json();
    } catch (err) {
      console.log(err.message);
    }
    // fetch(url).then(response => response.json()).catch(error => console.error('Error:', error));
    
    return reponse;
  }