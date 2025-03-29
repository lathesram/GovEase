import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  standalone: false,
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  selectedLanguage: string = 'en';

  constructor(private dialog: MatDialog) {
    // this.translate.addLangs(['en', 'ta', 'si']);
    // this.translate.setDefaultLang(this.selectedLanguage);
  }

  openLoginDialog() {
    this.dialog.open(LoginComponent);
  }

  changeLanguage(lang: string): void {
    // this.translate.use(lang);
    this.selectedLanguage = lang;
    console.log(`Language changed to: ${lang}`);
  }
}
