import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Cargar variables de entorno desde .env
dotenv.config();

export const MySQLConnection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});