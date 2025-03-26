import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { DocumentTrackingComponent } from './document-tracking/document-tracking.component';

const routes: Routes = [
  {
    path:'',
    title: 'Home',
    component: HomeComponent
  },  
  {
    path:'upload-document',
    title: 'Upload Document',
    component: DocumentUploadComponent
  },
  {
    path:'track-document',
    title: 'Track Documents',
    component: DocumentTrackingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
