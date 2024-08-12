import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatSidenav,
    MatListModule,
    RouterModule,
  ],
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded = false;
  isShowing = false;
  sidenavWidth = 4;

  mouseenter() {
    if (!this.isExpanded) {
      this.sidenavWidth = 17;
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.sidenavWidth = 4;
      this.isShowing = false;
    }
  }
}
