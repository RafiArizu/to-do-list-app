import { Injectable } from '@angular/core';
import {
  CapacitorSQLite,
  SQLiteConnection,
  SQLiteDBConnection
} from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  sqlite: SQLiteConnection;
  db!: SQLiteDBConnection;

  constructor() {
    this.sqlite = new SQLiteConnection(CapacitorSQLite);
  }

  async initDB() {
    this.db = await this.sqlite.createConnection(
      'todoDB',
      false,
      'no-encryption',
      1,
      false
    );

    await this.db.open();
    await this.createTables();
  }

  async createTables() {

    const usersTable = `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        is_verified INTEGER DEFAULT 0,
        created_at TEXT
      );
    `;

    const tasksTable = `
      CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,

        user_id INTEGER NOT NULL,

        title TEXT NOT NULL,
        description TEXT,

        date TEXT NOT NULL,
        time TEXT,

        priority TEXT,

        status TEXT DEFAULT 'pending'
          CHECK (status IN ('pending','done','missed')),

        reminder_time TEXT,
        is_notified INTEGER DEFAULT 0,

        created_at TEXT,

        FOREIGN KEY (user_id) REFERENCES users(id)
      );
    `;

    await this.db.execute(usersTable);
    await this.db.execute(tasksTable);
  }

  // =========================
  // TEST QUERY (DEBUG)
  // =========================

  async checkTables() {
    const res = await this.db.query(
      "SELECT name FROM sqlite_master WHERE type='table'"
    );
    console.log('Tables:', res.values);
  }

}