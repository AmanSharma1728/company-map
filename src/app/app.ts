import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Carousel } from './components/carousel/carousel';
import { Location } from './components/location/location';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Carousel, Location],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;

  onDisplayCarousel(showCarousel: boolean) {
    console.log(showCarousel);
    this.carousel.nativeElement.style.display = `${showCarousel ? 'block' : 'none'}`;
  }

  onClose(showCarousel: boolean) {
    console.log(showCarousel);
    this.carousel.nativeElement.style.display = 'none';
  }
}
