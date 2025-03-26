import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-service-request',
  standalone: false,
  templateUrl: './service-request.component.html',
  styleUrl: './service-request.component.scss',
})
export class ServiceRequestComponent {
  submissionForm: FormGroup;
  services = [
    { id: 'passport', name: 'Passport Renewal', instructions: 'Ensure your passport photo and ID are up-to-date.' },
    { id: 'license', name: 'Driving License', instructions: 'Provide a copy of your current license and proof of address.' },
    { id: 'idCard', name: 'ID Card Update', instructions: 'Submit your old ID card and a recent photograph.' },
  ];
  uploadedDocuments = [
    { id: 'doc1', name: 'Passport Photo' },
    { id: 'doc2', name: 'Driving License' },
    { id: 'doc3', name: 'National ID Card' },
  ];
  selectedServiceInstructions: string | null = null;

  constructor(private fb: FormBuilder) {
    this.submissionForm = this.fb.group({
      serviceType: ['', Validators.required],
      uploadedDocuments: [[], Validators.required],
      description: [''],
    });
  }

  onServiceTypeChange(serviceId: string) {
    const selectedService = this.services.find(service => service.id === serviceId);
    this.selectedServiceInstructions = selectedService ? selectedService.instructions : null;
  }

  onSubmit() {
    if (this.submissionForm.valid) {
      const formData = this.submissionForm.value;
      console.log('Form submitted:', formData);
      this.submissionForm.reset();
      this.selectedServiceInstructions = null;
    }
  }

  onReset() {
    this.submissionForm.reset();
    this.selectedServiceInstructions = null;
  }
}
