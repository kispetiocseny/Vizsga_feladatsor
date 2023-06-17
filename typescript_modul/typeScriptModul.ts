function EkezetesBetukSzama(vizsgaltSzoveg: string): number {
  var betuk: string[] = ["á", "é", "í", "ó", "ö", "ő", "ú", "ü", "ű", "Á", "É", "Í", "Ó", "Ö", "Ő", "Ú", "Ü", "Ű"];
  var betukSzama: number = 0;
  for (let i: number = 0; i < vizsgaltSzoveg.length; i++) {
    for (let j: number = 0; j < betuk.length; j++) {
      if (vizsgaltSzoveg[i] == betuk[j]) {
        betukSzama++;
      }
    }
  }
  return betukSzama;
}

function ElsoNszamSzorzat(mennyiseg: number): number {
  let szorzat = 1;
  for (let i = 1; i <= mennyiseg; i++) {
    szorzat *= i;
  }
  return szorzat;
}

function ParosakOsszege(vizsgaltTomb: number[]): number {
  let parosOsszeg: number = 0;
  for (let i: number = 0; i < vizsgaltTomb.length; i++) {
    if (vizsgaltTomb[i] % 2 === 0) {
      parosOsszeg += vizsgaltTomb[i];
    }
  }
  return parosOsszeg;
}