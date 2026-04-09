import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {

  constructor(
    private router: Router
  ) { }
 
  ngOnInit() {
  }
 
  goRegister() {
    this.router.navigate(['/verif']);
    console.log('Navigasi ke halaman verifikasi');
  }
 
  goGoogleRegister() {
    console.log('Register dengan Google');
  }
 
  goLogin() {
    this.router.navigate(['/login']);
    console.log('Navigasi ke halaman login');
  }

}
