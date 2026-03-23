import { Component, input, Input, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel {
  @Input() showCarousel!: WritableSignal<number | null>;
  @Input() images!: Array<string>;
  @Input() location!: string;
  @Input() capacity!: string;
  @Input() highlight!: string;
  @Input() type!: string;

  index = 0;

  onClose() {
    this.showCarousel.set(null);
  }

  onNext() {
    // Increment index and loop if at the end
    this.index = (this.index + 1) % this.images.length;
  }

  onPrev() {
    // Decrement index and loop to end if at the start
    this.index = (this.index - 1 + this.images.length) % this.images.length;
  }
}
