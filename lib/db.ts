// Connexion directe à la base MySQL Hostinger via mysql2 (sans Prisma).
// Variables d'environnement attendues (à définir dans l'app Hostinger) :
//   MYSQL_HOST      (ex: localhost)
//   MYSQL_PORT      (ex: 3306, optionnel)
//   MYSQL_USER      (ex: u167380016_xxx)
//   MYSQL_PASSWORD
//   MYSQL_DATABASE  (ex: u167380016_voiture)
// Si elles sont absentes, getPool() renvoie null → le site retombe sur les
// données statiques (il ne casse jamais).

import mysql from "mysql2/promise";

let pool: mysql.Pool | null = null;

export function getPool(): mysql.Pool | null {
  if (pool) return pool;

  const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;
  if (!MYSQL_HOST || !MYSQL_USER || !MYSQL_DATABASE) return null;

  pool = mysql.createPool({
    host: MYSQL_HOST,
    port: process.env.MYSQL_PORT ? Number(process.env.MYSQL_PORT) : 3306,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD ?? "",
    database: MYSQL_DATABASE,
    connectionLimit: 5,
    connectTimeout: 8000,
    waitForConnections: true,
  });
  return pool;
}
