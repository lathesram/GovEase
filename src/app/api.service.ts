import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://localhost:8080/api';

  constructor(private http: HttpClient) {}

  fileUpload(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  registerDetails(details: UserDetails) {
    return this.http.post(`${this.baseUrl}/register`, details);
  }

  requestService(requestService: ServiceRequest) {
    return this.http.post(
      `${this.baseUrl}/service-requests/submit`,
      requestService
    );
  }

  getUploadedFiles() {
    return this.http
      .get<UploadedFile[]>(`${this.baseUrl}/uploaded-files`)
      .pipe(
        map((files) =>
          files.map((file) => ({ id: file.id, fileName: file.fileName }))
        )
      );
  }

  documentSubmissionTracking() {
    return this.http.get<DocumentRequest[]>(`${this.baseUrl}/getAllAdmin`);
  }

  getDocumentVerifications() {
    return this.http.get<DocumentVerification[]>(
      `${this.baseUrl}/document-verification`
    );
  }

  verifyDocument(status: string, id: number) {
    const params = { status, id: id.toString() };
    return this.http.post<any>('http://localhost:8080/api/files/verify', { params });
  }
  

  getRenewalRequests() {
    return this.http.get<SubmissionRequest[]>(`${this.baseUrl}/renewal-requests`);
  }
  
}

export interface UserDetails {
  fullName: string;
  nameWithInitial: string;
  email: string;
  address: string;
  phone: string;
  mobile: string;
  dob: Date;
  nicNumber: string;
}

export interface ServiceRequest {
  serviceType: string;
  uploadedDocuments: string[];
  description: string;
}

export interface UploadedFile {
  id: number;
  fileName: string;
  filePath?: string;
}

export interface DocumentRequest {
  id: string;
  title: string;
  submissionDate: Date;
  officer: string;
  status: string;
  remarks: string;
  approvalDate: Date;
}

export interface DocumentVerification {
  id: number;
  name: string;
  type: string;
  aiValid: 'Valid' | 'Invalid' | 'Pending';
  adminApproved: 'Approved' | 'Rejected' | 'Pending';
}

export interface SubmissionRequest {
  id: number;
  type: string;
  description: string;
  status: string;
}
