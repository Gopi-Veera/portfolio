import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss',
})
export class WorksComponent {
  constructor(private dialog: MatDialog) {}

  openImage(src: string, alt: string): void {
    this.dialog.open(ImageDialogComponent, {
      data: { src, alt },
      maxWidth: '95vw',
      maxHeight: '95vh',
      panelClass: 'image-dialog-panel',
      autoFocus: false,
    });
  }
}
