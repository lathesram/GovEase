import { Component } from '@angular/core';

@Component({
  selector: 'app-service-request-verification',
  standalone: false,
  templateUrl: './service-request-verification.component.html',
  styleUrl: './service-request-verification.component.scss',
})
export class ServiceRequestVerificationComponent {
  // Sample data for service requests
  requests = [
    {
      id: 1,
      type: 'Passport Renewal',
      description: 'Request for renewing expired passport.',
      status: 'Pending',
    },
    {
      id: 2,
      type: 'Driver License Renewal',
      description: 'Request for renewing driver license.',
      status: 'Approved',
    },
    {
      id: 3,
      type: 'Birth Certificate Request',
      description: 'Request for issuing birth certificate.',
      status: 'Rejected',
    },
  ];

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
