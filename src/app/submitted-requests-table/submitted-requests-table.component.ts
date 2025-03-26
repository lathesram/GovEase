import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-submitted-requests-table',
  templateUrl: './submitted-requests-table.component.html',
  styleUrls: ['./submitted-requests-table.component.scss'],
})
export class SubmittedRequestsTableComponent {
  displayedColumns: string[] = [
    'serviceType',
    'submittedDocuments',
    'description',
    'status',
    'dateOfRequest',
    'approvalDate',
    'remarks',
  ];

  requests = [
    {
      serviceType: 'Service A',
      submittedDocuments: 'Document 1, Document 2',
      description: 'Request for Service A',
      status: 'Pending',
      dateOfRequest: '2023-10-01',
      approvalDate: 'N/A',
      remarks: 'Awaiting review',
    },
    {
      serviceType: 'Service B',
      submittedDocuments: 'Document 3',
      description: 'Request for Service B',
      status: 'Approved',
      dateOfRequest: '2023-09-25',
      approvalDate: '2023-09-30',
      remarks: 'Approved successfully',
    },
  ];
}
