import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
