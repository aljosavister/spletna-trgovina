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
      ime: 'Eko majica',
      opis: 'Majica iz 100% organskega bombaža.',
      cena: 19.99,
      slika: 'assets/eko-majica.webp',
      kategorija: 'Oblačila'
    },
    {
      id: 2,
      ime: 'Leseni USB ključ',
      opis: '16GB ključ z leseno oblogo.',
      cena: 12.50,
      slika: 'assets/usb.jpg',
      kategorija: 'Elektronika'
    },
    {
      id: 3,
      ime: 'Steklenička za vodo',
      opis: '500ml kovinska steklenička.',
      cena: 15.00,
      slika: 'assets/steklenicka.jpg',
      kategorija: 'Dodatki'
    },
    // Dodaj še vsaj 6 drugih izdelkov
  ];
  