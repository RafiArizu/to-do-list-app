import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {


  constructor(private dbService: DatabaseService) {}

    async ngOnInit() {
      await this.dbService.insertUserTest();
      await this.dbService.getUsers();
    }



  

}
