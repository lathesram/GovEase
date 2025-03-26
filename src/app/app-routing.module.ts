import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { DocumentTrackingComponent } from './document-tracking/document-tracking.component';
import { ServiceRequestComponent } from './service-request/service-request.component';
import { SubmittedRequestsTableComponent } from './submitted-requests-table/submitted-requests-table.component';
import { DocumentVerificationComponent } from './document-verification/document-verification.component';
import { ServiceRequestVerificationComponent } from './service-request-verification/service-request-verification.component';

const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'upload-document',
    title: 'Upload Document',
    component: DocumentUploadComponent,
  },
  {
    path: 'track-document',
    title: 'Track Documents',
    component: DocumentTrackingComponent,
  },
  {
    path: 'request-submission',
    title: 'Request Submission',
    component: ServiceRequestComponent,
  },
  {
    path: 'submitted-requests',
    component: SubmittedRequestsTableComponent,
  },
  {
    path: 'document-verification',
    title: 'Document Verification',
    component: DocumentVerificationComponent,
  },
  {
    path: 'service-request-verification',
    component: ServiceRequestVerificationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
