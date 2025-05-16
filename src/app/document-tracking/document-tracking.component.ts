import { Component, OnInit } from '@angular/core';
import { ApiService, DocumentRequest } from '../api.service';

@Component({
  selector: 'app-document-tracking',
  standalone: false,
  templateUrl: './document-tracking.component.html',
  styleUrl: './document-tracking.component.scss',
})
export class DocumentTrackingComponent implements OnInit {
  displayedColumns: string[] = [
    'documentId',
    'documentTitle',
    'submissionDate',
    'processingOfficer',
    'status',
    'remarks',
    'approvalDate',
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.documentSubmissionTracking().subscribe((data) => {
      this.documentData = data;
    });
  }

  documentData: DocumentRequest[] = [];
}
