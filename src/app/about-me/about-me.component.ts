import { Component } from '@angular/core';
// import { CarouselComponent } from './carousel/carousel.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [OwlCarouselComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {}
