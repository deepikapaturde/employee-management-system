import {
  Component
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';
import { FileService } from '../services/services/file.service';


@Component({

  selector: 'app-file-upload',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl:
    './file-upload.html'
})

export class FileUploadComponent {

  selectedFile!: File;

  message = '';

  constructor(
    private fileService:
    FileService
  ) {}

  onFileSelected(
    event: any
  ): void {

    this.selectedFile =
      event.target.files[0];
  }

  upload(): void {

    if (!this.selectedFile) {

      alert('Select file');

      return;
    }

    this.fileService
      .uploadFile(
        this.selectedFile
      )

      .subscribe({

        next: (res) => {

          console.log(res);

          this.message =
            'File uploaded successfully';
        },

        error: (err) => {

          console.log(err);
        }
      });
  }
}