import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-document-upload',
  standalone: false,
  templateUrl: './document-upload.component.html',
  styleUrl: './document-upload.component.scss',
})
export class DocumentUploadComponent {
  uploadForm: FormGroup;
  selectedFile: File | null = null;
  uploadStatus: string | null = null;
  uploadProgress: number = -1;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.uploadForm = this.fb.group({
      title: [''],
    });
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onFileDropped(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      this.selectedFile = event.dataTransfer.files[0];
      event.dataTransfer.clearData();
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    const dragDropArea = event.target as HTMLElement;
    dragDropArea.classList.add('drag-over');
  }

  onDragLeave(event: DragEvent) {
    const dragDropArea = event.target as HTMLElement;
    dragDropArea.classList.remove('drag-over');
  }

  onSubmit() {
    if (this.selectedFile) {
      this.uploadProgress = 0;
      const interval = setInterval(() => {
        if (this.uploadProgress < 100) {
          this.uploadProgress += 10;
        } else {
          clearInterval(interval);
          this.apiService.fileUpload(this.selectedFile!).subscribe((result) => {
            this.uploadStatus = `File uploaded successfully!`;
            this.uploadForm.reset();
            this.selectedFile = null;
            this.uploadProgress = -1;
          });
        }
      }, 200);
    }
  }
}
