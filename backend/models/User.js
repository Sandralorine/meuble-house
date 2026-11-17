import pool from '../config/db.js';
import bcrypt from 'bcrypt';

class User {
  static async create(nom, prenom, email, telephone, password) {
    const [result] = await pool.query(
      'INSERT INTO users (nom, prenom, email, telephone, password) VALUES (?, ?, ?, ?, ?)',
      [nom, prenom, email, telephone, password] // Enregistrez le mot de passe en clair
    );
    return result.insertId;
  
  }

  static async findByEmail(email) {
    try {
      const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
      console.log('Query result: - User.js:17', rows);
      return rows[0];
    } catch (err) {
      console.error('Error in findByEmail: - User.js:20', err);
      throw err;
    }
  }
  
  
  
  static async comparePasswords(plainPassword, storedPassword) {
    try {
      const isMatch = plainPassword === storedPassword;
      console.log('Password comparison result: - User.js:30', isMatch);
      return isMatch;
    } catch (err) {
      console.error('Error in comparePasswords: - User.js:33', err);
      throw err;
    }
  }
  
  
  
}

export default User;
