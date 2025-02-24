import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-owl-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './owl-carousel.component.html',
  styleUrl: './owl-carousel.component.scss',
})
export class OwlCarouselComponent {
  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 400,
    nav: true,
    navText: ['', ''],
    center: false,
    startPosition: 0,
    items: 2.25,
  };
  products: any[] = [
    {
      img: 'assets/images/uxd.png',
      alt: 'Foundation of User Experience (UX) Design',
    },
    {
      img: 'assets/images/ds.png',
      alt: 'Algorithms: Design and Ananlysis, Part 1',
    },
    {
      img: 'assets/images/scjp.png',
      alt: 'Sun Certified Programmer',
    },
    // {
    //   img: 'assets/images/jboss.png',
    //   alt: 'JBoss Migration training',
    // },
  ];
}
