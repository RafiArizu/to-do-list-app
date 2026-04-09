import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private dbService: DatabaseService
  ) {
    this.startApp();
  }

  async startApp(): Promise<void> {
    // platform.ready() memastikan Capacitor bridge sudah siap
    await this.platform.ready();
    console.log('[MYAPP] APP START — platform ready');

    try {
      await this.dbService.initDB();
      console.log('[MYAPP] DB INIT OK');

      await this.dbService.insertUserTest();
      console.log('[MYAPP] INSERT OK');

      await this.dbService.getUsers();
      console.log('[MYAPP] GET USERS OK');

    } catch (err: any) {
      // Tampilkan error detail — ini kunci debugging
      console.error('[MYAPP] ERROR MESSAGE:', err?.message);
      console.error('[MYAPP] ERROR STACK:', err?.stack);
      console.error('[MYAPP] ERROR FULL:', JSON.stringify(err));
    }
  }
}