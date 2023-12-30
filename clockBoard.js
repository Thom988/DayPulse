let clocks  = [];
let labels = [
    "Date",
    "Aube",
    "Longueur du jour",
    "Crépuscule" ,
    "Première lumière",
    "Heure Dorée",
    "Dernière lumière",
    "Midi solaire",
    "Levé du soleil",
    "Couché du soleil",
    "Zone",
    "utc-offset",
]

export function  afficherClockBoard(sunriseSunset) {
    clocks[0] = [sunriseSunset.results.date];
    clocks[1] = sunriseSunset.results.dawn;
    clocks[2] = sunriseSunset.results.day_length;
    clocks[3] = sunriseSunset.results.dusk;
    clocks[4] = sunriseSunset.results.first_light;
    clocks[5] = sunriseSunset.results.golden_hour;
    clocks[6] = sunriseSunset.results.last_light;
    clocks[7] = sunriseSunset.results.solar_noon;
    clocks[8] = sunriseSunset.results.sunrise;
    clocks[9] = sunriseSunset.results.sunset;
    clocks[10] = sunriseSunset.results.timezone;
    clocks[11] = sunriseSunset.results.utc_offset;

    const clockBoard = document.getElementById("clock-board");
    console.log(clockBoard);
    for (let i = 0; i< clocks.length; i++) {
        const div = document.createElement('div');
        const label = document.createElement('label');
        const p = document.createElement('p');
        label.innerText = labels[i];
        p.innerText = clocks[i];
        console.log(label.innerText);
        div.appendChild(label);
        div.appendChild(p);
        clockBoard.appendChild(div);
    }

};