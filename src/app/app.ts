import { Component, effect, ElementRef, Signal, signal, ViewChild } from '@angular/core';
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
  showCarousel = signal<number | null>(null);
}
