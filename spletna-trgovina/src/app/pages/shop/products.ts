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
      ime: 'Zobna pasta v trajnostni embalaži - Jagoda',
      opis: 'Zobna pasta brez odpadkov je odličen izdelek, ki zagotavlja trajnost in kakovost.',
      cena: 7.11,
      slika: '/images/toothpaste.webp',
      kategorija: 'Nega obraza'
    },
    {
      id: 2,
      ime: 'Zobna pasta v trajnostni embalaži - Mentol',
      opis: 'Zobna pasta brez odpadkov je odličen izdelek, ki zagotavlja trajnost in kakovost.',
      cena: 7.11,
      slika: '/images/toothpaste.webp',
      kategorija: 'Nega obraza'
    },
    {
      id: 3,
      ime: 'Trajnostna skodelica za kavo',
      opis: 'Večkratna skodelica za kavo je odličen izdelek, ki zagotavlja trajnost in kakovost.',
      cena: 7.49,
      slika: '/images/cup.webp',
      kategorija: 'Steklenice in skodelice'
    },
    {
      id: 4,
      ime: 'Trajnostna nakupovalna vrečka',
      opis: 'Večkratna nakupovalna vrečka je odličen izdelek, ki zagotavlja trajnost in kakovost.',
      cena: 7.22,
      slika: '/images/bag.webp',
      kategorija: 'Dodatki'
    }
  ];
  