function EkezetesBetukSzama(vizsgaltSzoveg) {
    var betuk = ["á", "é", "í", "ó", "ö", "ő", "ú", "ü", "ű", "Á", "É", "Í", "Ó", "Ö", "Ő", "Ú", "Ü", "Ű"];
    var betukSzama = 0;
    for (var i = 0; i < vizsgaltSzoveg.length; i++) {
        for (var j = 0; j < betuk.length; j++) {
            if (vizsgaltSzoveg[i] == betuk[j]) {
                betukSzama++;
            }
        }
    }
    return betukSzama;
}
function ElsoNszamSzorzat(mennyiseg) {
    var szorzat = 1;
    for (var i = 1; i <= mennyiseg; i++) {
        szorzat *= i;
    }
    return szorzat;
}
function ParosakOsszege(vizsgaltTomb) {
    var parosOsszeg = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 2 === 0) {
            parosOsszeg += vizsgaltTomb[i];
        }
    }
    return parosOsszeg;
}
