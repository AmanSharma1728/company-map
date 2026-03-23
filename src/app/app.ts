import { Component, signal } from '@angular/core';
import { Carousel } from './components/carousel/carousel';
import { Location } from './components/location/location';
import { LocationCapsule } from './components/location-capsule/location-capsule';
import { LocationData } from './core/models/location.model';

@Component({
  selector: 'app-root',
  imports: [Carousel, Location, LocationCapsule],

  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  showCarousel = signal<number | null>(null);
  locations: LocationData[] = [
    {
      id: 1,
      location: 'california',
      type: 'co-working office',
      capacity: '2-7',
      highlight:
        'A place with a storied past, our office is located right in the Silicon Valley for close proximity to our Customers in North America.',
      images: [],
    },
    {
      id: 2,
      location: 'amsterdam',
      type: 'co-working office',
      capacity: '2-7',
      highlight:
        'Our initial footprint in the European Union, our office here facilitates global procurement for our Customers.',
      images: [],
    },
    {
      id: 3,
      location: 'meerut',
      type: 'satellite office',
      capacity: '25-30',
      highlight:
        'Located right on the National Highway, this office has sprawling, lush green field for Sarthis to work hard and play hard.',
      images: [
        './assets/images/carousel/meerut/meerute1.png',
        './assets/images/carousel/meerut/meerute2.png',
        './assets/images/carousel/meerut/meerute3.png',
        './assets/images/carousel/meerut/meerute4.png',
        './assets/images/carousel/meerut/meerute5.png',
      ],
    },
    {
      id: 4,
      location: 'noida',
      type: 'global headquarters',
      capacity: '200-250',
      highlight:
        'Located in the heart of National Capital Region with a 24x7, state-of-the-art facility.',
      images: [
        './assets/images/carousel/noida/noida1.png',
        './assets/images/carousel/noida/noida2.png',
        './assets/images/carousel/noida/noida3.png',
        './assets/images/carousel/noida/noida4.png',
        './assets/images/carousel/noida/noida5.png',
      ],
    },
    {
      id: 5,
      location: 'bhopal',
      type: 'co-working office',
      capacity: '2-7',
      highlight: 'Our Central Indian office is located in an up and coming smart city.',
      images: [],
    },
    {
      id: 6,
      location: 'bengaluru',
      type: 'co-working office',
      capacity: '40-50',
      highlight:
        "Located in the heart of India's IT capital, our office has a scenic view and a climate as cool as our Sarthis.",
      images: [
        './assets/images/carousel/bengaluru/bengaluru1.png',
        './assets/images/carousel/bengaluru/bengaluru2.png',
        './assets/images/carousel/bengaluru/bengaluru3.png',
      ],
    },
    {
      id: 7,
      location: 'thiruvananthapuram',
      type: 'co-working office',
      capacity: '2-7',
      highlight:
        "Our next office in South India is located in god's own country to ensure our Sarthis have a working space closer to their home.",
      images: [],
    },
  ];
  // carousels = {

  //   images: [
  //     [
  //       './assets/images/carousel/meerut/meerute1.png',
  //       './assets/images/carousel/meerut/meerute2.png',
  //       './assets/images/carousel/meerut/meerute3.png',
  //       './assets/images/carousel/meerut/meerute4.png',
  //       './assets/images/carousel/meerut/meerute5.png',
  //     ],
  //     [
  //       './assets/images/carousel/bengaluru/bengaluru1.png',
  //       './assets/images/carousel/bengaluru/bengaluru2.png',
  //       './assets/images/carousel/bengaluru/bengaluru3.png',
  //     ],
  //     [
  //       './assets/images/carousel/noida/noida1.png',
  //       './assets/images/carousel/noida/noida2.png',
  //       './assets/images/carousel/noida/noida3.png',
  //       './assets/images/carousel/noida/noida4.png',
  //       './assets/images/carousel/noida/noida5.png',
  //     ],
  //   ],
  //   locations: [
  //     'california',
  //     'amsterdam',
  //     'noida',
  //     'meerut',
  //     'bhopal',
  //     'bengaluru',
  //     'thiruvananthapuram',
  //   ],
  //   types: ['co-working office', 'global headquarters', 'satellite office'],
  //   capacities: ['2-7', '200-250', '25-30', '40-50'],
  //   highlights: [
  //     'A place with a storied past, our office is located right in the Silicon Valley for close proximity to our Customers in North America.',
  //     'Our initial footprint in the European Union, our office here facilitates global procurement for our Customers.',
  //     'Located in the heart of National Capital Region with a 24x7, state-of-the-art facility.',
  //     'Located right on the National Highway, this office has sprawling, lush green field for Sarthis to work hard and play hard.',
  //     'Our Central Indian office is located in an up and coming smart city.',
  //     "Located in the heart of India's IT capital, our office has a scenic view and a climate as cool as our Sarthis.",
  //     "Our next office in South India is located in god's own country to ensure our Sarthis have a working space closer to their home.",
  //   ],
  // };
}
