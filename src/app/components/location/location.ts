import { Component, output } from '@angular/core';

@Component({
  selector: 'app-location',
  imports: [],
  templateUrl: './location.html',
  styleUrl: './location.scss',
})
export class Location {
  showCarousel = false;
  displayCarousel = output<boolean>();

  toggleCarousel() {
    this.showCarousel = !this.showCarousel;
    this.displayCarousel.emit(this.showCarousel);
  }
}
