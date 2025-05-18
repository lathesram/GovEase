import { Component, OnInit } from '@angular/core';
import { ApiService, SubmissionRequest } from '../api.service';

@Component({
  selector: 'app-service-request-verification',
  standalone: false,
  templateUrl: './service-request-verification.component.html',
  styleUrl: './service-request-verification.component.scss',
})
export class ServiceRequestVerificationComponent implements OnInit{
  // Sample data for service requests
  requests: SubmissionRequest[] = [];

  constructor(private apiService: ApiService) {}
  
    ngOnInit(): void {
      this.apiService.getRenewalRequests().subscribe((data) => {
        this.requests = data;
      });
    }

  // Variable to track email form visibility
  showEmailForm = false;

  // Store the selected request details and email data
  selectedRequest: any;
  emailData = {
    recipient: '',
    message: '',
  };

  // Handle document download (Placeholder function)
  downloadDocument(requestId: number) {
    console.log('Downloading associated document for request ID:', requestId);
    // Logic to download associated document
  }

  // Approve request
  approveRequest(requestId: number) {
    console.log('Service request ID:', requestId, 'approved.');
    // Update the request status
    const request = this.requests.find((req) => req.id === requestId);
    if (request) {
      request.status = 'Approved';
    }
  }

  // Reject request
  rejectRequest(requestId: number) {
    console.log('Service request ID:', requestId, 'rejected.');
    // Update the request status
    const request = this.requests.find((req) => req.id === requestId);
    if (request) {
      request.status = 'Rejected';
    }
  }

  // Open email form to request more information
  openEmailForm(request: any) {
    this.selectedRequest = request;
    this.showEmailForm = true;
  }

  // Close email form
  closeEmailForm() {
    this.showEmailForm = false;
    this.emailData = { recipient: '', message: '' }; // Clear the form data
  }

  // Send email request (Placeholder function)
  sendEmail() {
    console.log('Sending email to:', this.emailData.recipient);
    console.log('Message:', this.emailData.message);
    // Placeholder for actual email sending logic
    // After sending the email, close the form
    this.closeEmailForm();
    alert('Email sent successfully!');
  }
}
