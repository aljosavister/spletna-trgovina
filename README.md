# **Spletna trgovina**

## **Predstavitev**

Ta projekt je preprosta spletna trgovina, ki vključuje:

* **Frontend**: Angular aplikacija omogoča uporabniku interakcijo z izdelki, izbiro kategorij, dodajanje izdelkov v košarico ter prikaz korakov nakupa.
* **Backend**: Node.js in Express aplikacija zagotavljata API za obdelavo kontaktnih obrazcev.
* **Docker Compose**: omogoča enostaven zagon aplikacije v izoliranem okolju.

---

## **Navodila za zagon aplikacije**

Za zagon aplikacije uporabite **Docker Compose** ali **Podman Compose**. Sledite spodnjim korakom:

### 1. Preverite, ali imate nameščene potrebne programe

Preverite, če imate nameščene naslednje programe:

* **Docker Compose**:

  ```bash
  docker-compose --version
  ```
* **Podman Compose**:

  ```bash
  podman-compose --version
  ```

### 2. Zaženite aplikacijo

V terminalu se premaknite v mapo, kjer se nahaja datoteka `docker-compose.yml`, in zaženite enega od naslednjih ukazov:

#### Z Docker Compose:

```bash
docker-compose up
```

#### Z Podman Compose:

```bash
podman-compose up
```

### 3. Dostop do aplikacije

* **Frontend (Angular aplikacija)**: [http://localhost:8080](http://localhost:8080)
* **Backend (Node.js API)**: [http://localhost:3000/api/contact](http://localhost:3000/api/contact)

### 4. Ustavitev aplikacije

```bash
docker-compose down
```

ali

```bash
podman-compose down
```

### Opombe

* Prepričajte se, da so vse potrebne datoteke (npr. `dist` mapa za Angular in `backend` mapa za Node.js) pravilno nastavljene.
* V primeru težav preverite loge:

```bash
docker-compose logs
```

ali

```bash
podman-compose logs
```

---

## **Struktura spletne strani**

Spletna trgovina vključuje naslednje podstrani:

* **Domov** – osnovne informacije in promocije.
* **O nas** – predstavitev podjetja.
* **Storitev** – dodatne storitve trgovine.
* **Trgovina** – izdelki po kategorijah z dodajanjem v košarico.
* **Kontakt** – kontaktni obrazec in podatki.

---

## **Tehnologije**

Uporabljene tehnologije:

* **HTML** – struktura strani
* **CSS** – oblikovanje
* **Angular (v19)** – frontend
* **Node.js + Express** – backend in API
* **Docker Compose** – razvojno okolje

---

## **Zahteve za spletno trgovino**

Minimalne funkcionalnosti trgovine:

* Vsaj **3 kategorije izdelkov**
* Vsaka kategorija vsebuje **vsaj 3 artikle**
* Vsak artikel ima **ime, sliko, opis in ceno**
* Možnost dodajanja artiklov v **košarico**
* **Vizualni prikaz korakov** nakupa (košarica → pregled → zaključek)

---

## **Postavitev spletne strani**

* Spletna trgovina je postavljena na lokalni strežnik.
* Kontaktni obrazec omogoča pošiljanje sporočil (brez dejanske obdelave podatkov).

