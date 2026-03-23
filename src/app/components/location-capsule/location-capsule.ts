import { CommonModule } from '@angular/common';
import { Component, Input, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-location-capsule',
  imports: [CommonModule],
  templateUrl: './location-capsule.html',
  styleUrl: './location-capsule.scss',
})
export class LocationCapsule {
  @Input() location!: string;
  @Input() id!: number;
  @Input() showCarousel!: WritableSignal<number | null>;

  open() {
    this.showCarousel.set(this.id);
  }
}
