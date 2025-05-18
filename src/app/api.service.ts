import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  fileUpload(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.baseUrl}/files/upload`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  registerDetails(details: UserDetails) {
    return this.http.post(`${this.baseUrl}/registration/submit`, details);
  }

  requestService(requestService: ServiceRequest) {
    return this.http.post(
      `${this.baseUrl}/service-requests/submit`,
      requestService
    );
  }

  getUploadedFiles() {
    return this.http
      .get<UploadedFile[]>(`${this.baseUrl}/files/load`)
      .pipe(
        map((files) =>
          files.map((file) => ({ id: file.id, fileName: file.fileName }))
        )
      );
  }

  documentSubmissionTracking() {
    return this.http.get<DocumentRequest[]>(`${this.baseUrl}/files/getAllAdmin`);
  }

  getDocumentVerifications() {
    return this.http.get<DocumentVerification[]>(
      `${this.baseUrl}/files/document-verification`
    );
  }

  verifyDocument(status: string, id: number) {
    const params = { status, id: id.toString() };
    return this.http.post<any>(`${this.baseUrl}/files/verify`, {
      params,
    });
  }

  getRenewalRequests() {
    return this.http.get<SubmissionRequest[]>(
      `${this.baseUrl}/service-requests/getAll`
    );
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
  serviceType: string;
  description: string;
  status: string;
}
