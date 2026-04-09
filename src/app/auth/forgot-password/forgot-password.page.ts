import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: false,
})
export class ForgotPasswordPage implements OnInit {

  email: string = '';
  // showError: boolean = false;

  errorEmpty: boolean = false;
  errorFormat: boolean = false;
  errorNotFound: boolean = false;

  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
    console.log('Kembali ke halaman sebelumnya');
  }

  sendReset() {

    // reset semua error

    this.errorEmpty = false;
    this.errorFormat = false;
    this.errorNotFound = false;

    // validasi email kosong
    if (!this.email) {
      this.errorEmpty = true;
      return;
    }

    // validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.errorFormat = true;
      return;
    }

    // 3. cek email terdaftar (dummy dulu)
    const registeredEmails = ['admin@mail.com', 'user@mail.com'];

    if (!registeredEmails.includes(this.email)) {
      this.errorNotFound = true;
      return;
    }

    // logika lolos
    // Ganti dengan auth service nanti
    console.log('Kirim reset instructions ke:', this.email);
  }

  goLogin() {
    this.router.navigate(['/auth/login']);
    console.log('Navigasi ke halaman login');
  }

}