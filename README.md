# spletna-trgovina

## Navodila za zagon aplikacije

Za zagon aplikacije uporabite **Docker Compose** ali **Podman Compose**. Sledite spodnjim korakom:

### 1. Preverite, ali imate nameščene potrebne programe
- **Docker Compose**: Preverite z ukazom `docker-compose --version`.
- **Podman Compose**: Preverite z ukazom `podman-compose --version`.

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
- **Frontend (Angular aplikacija)**: Odprite brskalnik in obiščite [http://localhost:8080](http://localhost:8080).
- **Backend (Node.js aplikacija)**: Backend API POST request pa je dostopen na http://localhost:3000/api/contact.

### 4. Ustavitev aplikacije
Za ustavitev aplikacije uporabite ukaz:
```bash
docker-compose down
```
ali
```bash
podman-compose down
```

### Opombe
- Prepričajte se, da so vse potrebne datoteke (npr. `dist` mapa za Angular aplikacijo in `backend` mapa za Node.js aplikacijo) pravilno nastavljene.
- Če pride do težav, preverite loge z ukazom:
  ```bash
  docker-compose logs
  ```
  ali
  ```bash
  podman-compose logs
  ```

