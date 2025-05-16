import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { DocumentTrackingComponent } from './document-tracking/document-tracking.component';
import { ServiceRequestComponent } from './service-request/service-request.component';
import { SubmittedRequestsTableComponent } from './submitted-requests-table/submitted-requests-table.component';
import { DocumentVerificationComponent } from './document-verification/document-verification.component';
import { FormsModule } from '@angular/forms';
import { ServiceRequestVerificationComponent } from './service-request-verification/service-request-verification.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ApiService } from './api.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    DocumentUploadComponent,
    DocumentTrackingComponent,
    ServiceRequestComponent,
    SubmittedRequestsTableComponent,
    DocumentVerificationComponent,
    ServiceRequestVerificationComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [MaterialModule],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
