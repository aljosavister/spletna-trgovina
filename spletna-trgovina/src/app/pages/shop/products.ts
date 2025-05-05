export interface Izdelek {
    id: number;
    ime: string;
    opis: string;
    cena: number;
    slika: string;
    kategorija: string;
  }
  
  export const IZDELKI: Izdelek[] = [
    {
      id: 1,
      ime: 'Zobna pasta v trajnostni embalaži',
      opis: 'Zobna pasta brez odpadkov je odličen izdelek, ki zagotavlja trajnost in kakovost.',
      cena: 7.11,
      slika: 'toothpaste.webp',
      kategorija: 'Nega obraza'
    },
    {
      id: 2,
      ime: 'Trajnostna skodelica za kavo',
      opis: 'Večkratna skodelica za kavo je odličen izdelek, ki zagotavlja trajnost in kakovost.',
      cena: 7.49,
      slika: 'cup.webp',
      kategorija: 'Steklenice in skodelice'
    },
    {
      id: 3,
      ime: 'Trajnostna nakupovalna vrečka',
      opis: 'Večkratna nakupovalna vrečka je odličen izdelek, ki zagotavlja trajnost in kakovost.',
      cena: 7.22,
      slika: 'bag.webp',
      kategorija: 'Dodatki'
    },
    // Dodaj še vsaj 6 drugih izdelkov
  ];
  