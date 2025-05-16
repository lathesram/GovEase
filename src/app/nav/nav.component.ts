import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  standalone: false,
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit, OnChanges {
  selectedLanguage: string = 'en';
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  userType: string = '';

  constructor(private dialog: MatDialog) {
    // this.translate.addLangs(['en', 'ta', 'si']);
    // this.translate.setDefaultLang(this.selectedLanguage);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.userType = sessionStorage.getItem('role') as string;
    if (this.userType === 'Admin') {
      this.isAdmin = true;
    } else if (this.userType === 'user') {
      this.isAdmin = false;
    }
  }

  ngOnInit(): void {
    const userType = sessionStorage.getItem('role');
    if (userType === 'Admin') {
      this.isAdmin = true;
    }
  }

  openLoginDialog() {
    this.dialog
      .open(LoginComponent)
      .afterClosed()
      .subscribe((result) => {
        {
          if (result) {
            this.isLoggedIn = true;
            if (
              result.email === 'admin@gmail.com' &&
              result.password === 'admin'
            ) {
              this.isAdmin = true;
              sessionStorage.setItem('role', 'Admin');
            } else {
              this.isAdmin = false;
              sessionStorage.setItem('role', 'user');
            }
          }
        }
      });
  }

  changeLanguage(lang: string): void {
    // this.translate.use(lang);
    this.selectedLanguage = lang;
    console.log(`Language changed to: ${lang}`);
  }

  logout() {
    sessionStorage.removeItem('role');
    this.isLoggedIn = false;
  }
}
