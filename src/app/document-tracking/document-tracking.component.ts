import { Component } from '@angular/core';

@Component({
  selector: 'app-document-tracking',
  standalone: false,
  templateUrl: './document-tracking.component.html',
  styleUrl: './document-tracking.component.scss',
})
export class DocumentTrackingComponent {
  displayedColumns: string[] = [
    'documentId',
    'documentTitle',
    'submissionDate',
    'processingOfficer',
    'status',
    'remarks',
    'approvalDate',
  ];

  documentData = [
    { id: 'DOC001', title: 'Passport Renewal', submissionDate: new Date('2025-03-20'), officer: 'John Doe', status: 'Approved', remarks: 'Approved without issues', approvalDate: new Date('2025-03-21') },
    { id: 'DOC002', title: 'Driving License', submissionDate: new Date('2025-03-22'), officer: 'Jane Smith', status: 'Pending', remarks: 'Pending verification', approvalDate: null },
    { id: 'DOC003', title: 'ID Card Update', submissionDate: new Date('2025-03-18'), officer: 'Alice Johnson', status: 'Rejected', remarks: 'Rejected due to missing documents', approvalDate: null },
    { id: 'DOC004', title: 'Birth Certificate', submissionDate: new Date('2025-03-15'), officer: 'Robert Brown', status: 'Approved', remarks: 'Approved', approvalDate: new Date('2025-03-16') },
    { id: 'DOC005', title: 'Marriage Certificate', submissionDate: new Date('2025-03-10'), officer: 'Emily Davis', status: 'Approved', remarks: 'Approved', approvalDate: new Date('2025-03-11') },
    { id: 'DOC006', title: 'Property Registration', submissionDate: new Date('2025-03-12'), officer: 'Michael Wilson', status: 'Pending', remarks: 'Pending review', approvalDate: null },
    { id: 'DOC007', title: 'Vehicle Registration', submissionDate: new Date('2025-03-14'), officer: 'Sarah Taylor', status: 'Approved', remarks: 'Approved', approvalDate: new Date('2025-03-15') },
    { id: 'DOC008', title: 'Tax Filing', submissionDate: new Date('2025-03-17'), officer: 'David Moore', status: 'Rejected', remarks: 'Rejected due to errors', approvalDate: null },
    { id: 'DOC009', title: 'Pension Application', submissionDate: new Date('2025-03-19'), officer: 'Laura White', status: 'Approved', remarks: 'Approved', approvalDate: new Date('2025-03-20') },
    { id: 'DOC010', title: 'Visa Application', submissionDate: new Date('2025-03-21'), officer: 'James Harris', status: 'Pending', remarks: 'Pending embassy approval', approvalDate: null },
    { id: 'DOC011', title: 'Scholarship Application', submissionDate: new Date('2025-03-23'), officer: 'Anna Martin', status: 'Approved', remarks: 'Approved', approvalDate: new Date('2025-03-24') },
    { id: 'DOC012', title: 'Loan Application', submissionDate: new Date('2025-03-25'), officer: 'Chris Lee', status: 'Rejected', remarks: 'Rejected due to insufficient credit score', approvalDate: null },
    { id: 'DOC013', title: 'Medical Insurance', submissionDate: new Date('2025-03-26'), officer: 'Sophia Clark', status: 'Approved', remarks: 'Approved', approvalDate: new Date('2025-03-27') },
    { id: 'DOC014', title: 'Business License', submissionDate: new Date('2025-03-28'), officer: 'Daniel Lewis', status: 'Pending', remarks: 'Pending additional documents', approvalDate: null },
    { id: 'DOC015', title: 'Export Permit', submissionDate: new Date('2025-03-29'), officer: 'Olivia Walker', status: 'Approved', remarks: 'Approved', approvalDate: new Date('2025-03-30') },
  ];
}
