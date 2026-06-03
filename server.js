// Serveur Next.js explicite — écoute le port fourni par l'hébergeur (Hostinger).
// Nécessaire quand "next start" n'est pas correctement relié au reverse proxy
// (cas fréquent sur les hébergements Node type Passenger) → évite les 504.
const { createServer } = require("http");
const next = require("next");

const port = parseInt(process.env.PORT || "3000", 10);
const hostname = "0.0.0.0";

const app = next({ dev: false, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => handle(req, res)).listen(port, hostname, () => {
      console.log(`> Voltage en écoute sur http://${hostname}:${port}`);
    });
  })
  .catch((err) => {
    console.error("Erreur au démarrage du serveur:", err);
    process.exit(1);
  });
