import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // Par défaut, le mot de passe est vide avec XAMPP
  database: 'maison_decor',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
