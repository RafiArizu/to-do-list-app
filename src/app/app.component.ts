import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private dbService: DatabaseService
  ) {
    this.init();
  }

  async init() {
    await this.platform.ready();
    await this.dbService.initDB();
    await this.dbService.checkTables();

    console.log('Database siap');
  }
}