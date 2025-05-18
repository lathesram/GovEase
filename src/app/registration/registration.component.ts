import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      nameWithInitial: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      dob: ['', Validators.required],
      nicNumber: ['', Validators.required],
    });
  }

  onRegister() {
    if (this.registrationForm.valid) {
      console.log('Registration Data:', this.registrationForm.value);
      this.apiService
        .registerDetails(this.registrationForm.value)
        .subscribe((response) => {
          alert('Registration Successful!');
          this.registrationForm.reset();
        });
    }
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
