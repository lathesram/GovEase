import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavComponent, DocumentUploadComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  exports: [MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
