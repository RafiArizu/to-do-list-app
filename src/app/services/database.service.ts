import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;

  constructor() {}

  async initDB(): Promise<void> {
    const platform = Capacitor.getPlatform();
    console.log('[MYAPP] Platform:', platform);

    // Wajib untuk web platform — skip di Android/iOS
    if (platform === 'web') {
      await customElements.whenDefined('jeep-sqlite');
      const jeepSqliteEl = document.querySelector('jeep-sqlite');
      if (jeepSqliteEl != null) {
        await this.sqlite.initWebStore();
      }
    }

    // Cek apakah koneksi sudah ada — jangan buat duplikat
    const isConn = (await this.sqlite.checkConnectionsConsistency()).result;
    const isConnected = (await this.sqlite.isConnection('todoDB', false)).result;

    console.log('[MYAPP] isConn:', isConn, '| isConnected:', isConnected);

    if (isConn && isConnected) {
      // Gunakan koneksi yang sudah ada
      this.db = await this.sqlite.retrieveConnection('todoDB', false);
    } else {
      // Buat koneksi baru
      this.db = await this.sqlite.createConnection(
        'todoDB',   // database name
        false,      // encrypted
        'no-encryption',
        1,          // version
        false       // readonly
      );
    }

    await this.db.open();
    console.log('[MYAPP] DB OPEN OK');

    await this.createTables();
    console.log('[MYAPP] TABLES CREATED');
  }

  private async createTables(): Promise<void> {
    const sql = `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        is_verified INTEGER DEFAULT 0,
        created_at TEXT
      );
    `;
    await this.db.execute(sql);
    console.log('[MYAPP] CREATE TABLE users OK');
  }

  async insertUserTest(): Promise<void> {
    // Hapus data lama dulu biar tidak kena UNIQUE constraint error
    await this.db.run(`DELETE FROM users WHERE email = ?`, ['test@mail.com']);

    const result = await this.db.run(
      `INSERT INTO users (name, email, password, is_verified, created_at)
       VALUES (?, ?, ?, ?, ?)`,
      ['Test User', 'test@mail.com', '123456', 1, new Date().toISOString()]
    );

    console.log('[MYAPP] INSERT USER BERHASIL, changes:', result.changes?.changes);
  }

  async getUsers(): Promise<void> {
    const res = await this.db.query('SELECT * FROM users');
    console.log('[MYAPP] DATA USERS:', JSON.stringify(res.values, null, 2));
  }
}