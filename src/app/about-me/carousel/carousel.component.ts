import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  currentIndex = 0;
  slides = [
    { image: 'assets/images/sample.jpg', description: 'ux-design' },
    { image: 'assets/images/img01.jpg', description: 'Image 01' },
    { image: 'assets/images/img02.jpg', description: 'Image 02' },
    { image: 'assets/images/img03.jpg', description: 'Image 03' },
    { image: 'assets/images/img04.jpg', description: 'Image 04' },
  ];

  constructor() {
    this.preloadImages();
  }

  preloadImages() {
    this.slides.forEach((slide) => {
      new Image().src = slide.image;
    });
    console.log('slides: ', this.slides);
  }

  setCurrentSlideIndex(index: number) {
    this.currentIndex = index;
  }

  isCurrentSlideIndex(index: number) {
    return this.currentIndex === index;
  }

  prevSlide() {
    this.currentIndex =
      this.currentIndex < this.slides.length - 1 ? ++this.currentIndex : 0;
  }

  nextSlide() {
    this.currentIndex =
      this.currentIndex > 0 ? --this.currentIndex : this.slides.length - 1;
  }
}
