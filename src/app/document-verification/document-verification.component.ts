import { Component } from '@angular/core';

@Component({
  selector: 'app-document-verification',
  standalone: false,
  templateUrl: './document-verification.component.html',
  styleUrl: './document-verification.component.scss',
})
export class DocumentVerificationComponent {
  documents = [
    {
      id: 1,
      name: 'Passport Renewal Document',
      type: 'Passport',
      aiValid: 'Pending', // AI validation status can now be 'Valid', 'Invalid', or 'Pending'
    },
    {
      id: 2,
      name: 'Driver License Renewal',
      type: 'License',
      aiValid: 'Valid',
    },
    {
      id: 3,
      name: 'Birth Certificate',
      type: 'Certificate',
      aiValid: 'Invalid',
    },
  ];

  documentOverride: { [key: number]: boolean } = {};
  email: string = '';
  showEmailForm: { [key: number]: boolean } = {};

  approveDocument(documentId: number) {
    console.log(`Document ${documentId} Approved`);
  }

  rejectDocument(documentId: number) {
    console.log(`Document ${documentId} Rejected`);
    this.showEmailForm[documentId] = true; // Show the email form for the specific document
  }

  downloadDocument(documentId: number) {
    console.log(`Downloading Document ${documentId}...`);
    // Logic to download document here
  }

  sendRequestEmail(documentId: number) {
    console.log(`Requesting additional info for Document ${documentId} from:`, this.email);
    // Logic to send email requesting additional information
  }
}
