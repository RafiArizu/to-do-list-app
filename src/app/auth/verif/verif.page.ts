import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verif',
  templateUrl: './verif.page.html',
  styleUrls: ['./verif.page.scss'],
  standalone: false,
})
export class VerifPage implements OnInit {
 
  constructor(
    private router: Router
  ) { }
 
  ngOnInit() {
  }
 
  checkStatus() {
    // Ganti dengan pengecekan status verifikasi via auth service nanti
    this.router.navigate(['/auth/login']);
    console.log('Cek status verifikasi');
  }
 
  resendEmail() {
    // Ganti dengan resend email via auth service nanti
    console.log('Kirim ulang email verifikasi');
  }
 
  contactSupport() {
    console.log('Hubungi support');
  }
 
}
