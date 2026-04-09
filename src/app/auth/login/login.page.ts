import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
 
  email: string = '';
  password: string = '';
  showError: boolean = false;
 
  constructor(
    private router: Router
  ) { }
 
  ngOnInit() {
  }
 
  goLogin() {
    // Simulasi validasi — ganti dengan auth service nanti
    if (!this.email || !this.password) {
      this.showError = true;
      return;
    }
    this.showError = false;
    this.router.navigate(['/home']);
    console.log('Navigasi ke halaman home');
  }
 
  goGoogleLogin() {
    console.log('Login dengan Google');
  }
 
  goRegister() {
    this.router.navigate(['/register']);
    console.log('Navigasi ke halaman register');
  }
 
  goForgot() {
    this.router.navigate(['/forgot-password'])
    console.log('Forgot password');
  }
 
}