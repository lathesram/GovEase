import { Component, OnInit } from '@angular/core';
import { ApiService, DocumentVerification } from '../api.service';

@Component({
  selector: 'app-document-verification',
  standalone: false,
  templateUrl: './document-verification.component.html',
  styleUrl: './document-verification.component.scss',
})
export class DocumentVerificationComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getDocumentVerifications().subscribe((data) => {
      this.documents = data;
    });
  }

  documents: DocumentVerification[] = [];

  documentOverride: { [key: number]: boolean } = {};
  email: string = '';
  showEmailForm: { [key: number]: boolean } = {};

  approveDocument(documentId: number) {
    this.apiService.verifyDocument('Approve', documentId, ).subscribe((response) => {
      console.log('Document Approved:', response);
      this.documentOverride[documentId] = true; // Mark the document as approved
      this.showEmailForm[documentId] = false; // Hide the email form
      console.log(`Document ${documentId} Approved`);
    });
  }

  rejectDocument(documentId: number) {
    this.apiService.verifyDocument('Removed', documentId, ).subscribe((response) => {
      console.log('Document Rejected:', response);
      this.documentOverride[documentId] = false; // Mark the document as approved
      this.showEmailForm[documentId] = true; // Hide the email form
    });
  }

  downloadDocument(documentId: number) {
    console.log(`Downloading Document ${documentId}...`);
    // Logic to download document here
  }

  sendRequestEmail(documentId: number) {
    console.log(
      `Requesting additional info for Document ${documentId} from:`,
      this.email
    );
    // Logic to send email requesting additional information
  }
}
