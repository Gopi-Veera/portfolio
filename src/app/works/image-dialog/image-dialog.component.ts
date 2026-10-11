import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export interface ImageDialogData {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-image-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatIconModule, MatButtonModule],
  templateUrl: './image-dialog.component.html',
  styleUrl: './image-dialog.component.scss',
})
export class ImageDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ImageDialogData) {}
}
