import { Component, Input, output, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-location',
  imports: [],
  templateUrl: './location.html',
  styleUrl: './location.scss',
})
export class Location {
  @Input() showCarousel!: WritableSignal<number | null>;
  @Input() id!: number;

  open() {
    this.showCarousel.set(this.id);
  }
}
