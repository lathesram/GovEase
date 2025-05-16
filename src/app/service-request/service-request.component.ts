import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService, UploadedFile } from '../api.service';

@Component({
  selector: 'app-service-request',
  standalone: false,
  templateUrl: './service-request.component.html',
  styleUrl: './service-request.component.scss',
})
export class ServiceRequestComponent implements OnInit {
  submissionForm: FormGroup;
  services = [
    {
      id: 'passport',
      name: 'Passport Renewal',
      instructions: 'Ensure your passport photo and ID are up-to-date.',
    },
    {
      id: 'license',
      name: 'Driving License',
      instructions:
        'Provide a copy of your current license and proof of address.',
    },
    {
      id: 'idCard',
      name: 'ID Card Update',
      instructions: 'Submit your old ID card and a recent photograph.',
    },
  ];
  uploadedDocuments: UploadedFile[] = [];
  selectedServiceInstructions: string | null = null;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.submissionForm = this.fb.group({
      serviceType: ['', Validators.required],
      uploadedDocuments: [[], Validators.required],
      description: [''],
    });
  }

  ngOnInit() {
    this.apiService.getUploadedFiles().subscribe((files) => {
      this.uploadedDocuments = files;
    });
  }

  onServiceTypeChange(serviceId: string) {
    const selectedService = this.services.find(
      (service) => service.id === serviceId
    );
    this.selectedServiceInstructions = selectedService
      ? selectedService.instructions
      : null;
  }

  onSubmit() {
    if (this.submissionForm.valid) {
      const formData = this.submissionForm.value;
      this.apiService.requestService(formData).subscribe((response) => {
        console.log('Form submitted:', formData);
        this.submissionForm.reset();
        this.selectedServiceInstructions = null;
      });
    }
  }

  onReset() {
    this.submissionForm.reset();
    this.selectedServiceInstructions = null;
  }
}
