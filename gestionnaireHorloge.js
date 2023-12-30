function recupererHeureLocale() {
    let date = new Date();
    let heureLocale = date.toLocaleTimeString('en-US');
    let tab = [3];
    tab = heureLocale.split(":");
    tab[3] = tab[2].substr(2,4);
    tab[2] = tab[2].substr(0,2);
    return tab;
}

function appliquerHeure(heureLocale) {
    const flecheM = document.getElementById("fleche-m");
    const degMin = (360/60) * parseInt(heureLocale[1]);
    flecheM.setAttribute("style",`transform: rotate(${degMin}deg)`);
    const flecheS = document.getElementById("fleche-s");
    const degSec = (360/60) * parseInt(heureLocale[2]);
    flecheS.setAttribute("style",`transform: rotate(${degSec}deg)`);
    const flecheH = document.getElementById("fleche-h");
    const degHeure = (360/12) * (parseInt(heureLocale[0]) + degMin/360);
    flecheH.setAttribute("style",`transform: rotate(${degHeure}deg)`);
    const baliseFormat = document.getElementById("format-h");
    baliseFormat.innerText = heureLocale[3];
}

export function lancerHorloge() {
    let heureLocale = recupererHeureLocale();
        appliquerHeure(heureLocale);
    setInterval(() => {
        heureLocale = recupererHeureLocale();
        appliquerHeure(heureLocale);
    }, 1000);
}