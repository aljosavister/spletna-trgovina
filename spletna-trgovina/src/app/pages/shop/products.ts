export interface Izdelek {
  id: number;
  ime: string;
  opis: string;
  cena: number;
  slika: string;
  kategorija: string;
}

export const IZDELKI: Izdelek[] = [
  // Nega obraza
  {
    id: 1,
    ime: 'Zobna pasta v trajnostni embalaži - Jagoda',
    opis: 'Zobna pasta brez odpadkov je odličen izdelek, ki zagotavlja trajnost in kakovost.',
    cena: 7.11,
    slika: '/images/tp-jagoda.jpeg',
    kategorija: 'Nega obraza'
  },
  {
    id: 2,
    ime: 'Zobna pasta v trajnostni embalaži - Mentol',
    opis: 'Zobna pasta brez odpadkov je odličen izdelek, ki zagotavlja trajnost in kakovost.',
    cena: 7.11,
    slika: '/images/tp-m.jpeg',
    kategorija: 'Nega obraza'
  },
  {
    id: 3,
    ime: 'Zobna pasta v trajnostni embalaži - Ognjič',
    opis: 'Naravna zobna pasta z ognjičem za občutljive dlesni.',
    cena: 7.49,
    slika: '/images/tp-o.jpeg',
    kategorija: 'Nega obraza'
  },
  {
    id: 4,
    ime: 'Trajnostna skodelica za kavo',
    opis: 'Večkratna skodelica za kavo je odličen izdelek, ki zagotavlja trajnost in kakovost.',
    cena: 7.49,
    slika: '/images/cup.jpeg',
    kategorija: 'Steklenice in skodelice'
  },
  {
    id: 5,
    ime: 'Skodelica za čaj iz bambusa',
    opis: 'Elegantna in trajnostna skodelica za čaj za uporabo doma ali na poti.',
    cena: 6.95,
    slika: '/images/cup-t.jpeg',
    kategorija: 'Steklenice in skodelice'
  },
  {
    id: 6,
    ime: 'Termo skodelica iz nerjavečega jekla',
    opis: 'Ohranja vašo pijačo toplo ali hladno več ur.',
    cena: 12.99,
    slika: '/images/cup-s.jpeg',
    kategorija: 'Steklenice in skodelice'
  },
  {
    id: 7,
    ime: 'Trajnostna nakupovalna vrečka',
    opis: 'Večkratna nakupovalna vrečka je odličen izdelek, ki zagotavlja trajnost in kakovost.',
    cena: 7.22,
    slika: '/images/bag.jpeg',
    kategorija: 'Dodatki'
  },
  {
    id: 8,
    ime: 'Vrečka za sadje in zelenjavo',
    opis: 'Lahka mrežasta vrečka za večkratno uporabo v trgovini ali na tržnici.',
    cena: 3.89,
    slika: '/images/bag-f.jpeg',
    kategorija: 'Dodatki'
  },
  {
    id: 9,
    ime: 'Paket za darilo brez plastike',
    opis: 'Okolju prijazna embalaža za obdarovanje, brez plastike, samo papir in juta.',
    cena: 4.99,
    slika: '/images/box.jpeg',
    kategorija: 'Dodatki'
  }
];
