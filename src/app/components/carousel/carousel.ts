import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  output,
  QueryList,
  signal,
  ViewChild,
  ViewChildren,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel implements AfterViewInit {
  @ViewChildren('image') image_array!: QueryList<ElementRef<HTMLImageElement>>;
  @ViewChildren('dot') dots_array!: QueryList<ElementRef<HTMLDivElement>>;
  @ViewChild('prev')
  prev!: ElementRef<HTMLButtonElement>;
  @ViewChild('next') next!: ElementRef<HTMLButtonElement>;
  @ViewChild('close_btn') close_btn!: ElementRef<HTMLDivElement>;
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;

  @Input() showCarousel!: WritableSignal<number | null>;
  index = 0;

  onClose() {
    this.showCarousel.set(null);
  }

  ngAfterViewInit() {
    for (let img of this.image_array) {
      img.nativeElement.style.display = 'none';
    }

    for (let dot of this.dots_array) {
      dot.nativeElement.style.color = 'white';
    }

    this.image_array.get(0)!.nativeElement.style.display = 'block';
    this.dots_array.get(0)!.nativeElement.style.color = '#ffb42a';

    this.prev.nativeElement.addEventListener('click', () => {
      if (this.index === 0) {
        this.image_array.get(this.index)!.nativeElement.style.display = 'none';
        this.dots_array.get(this.index)!.nativeElement.style.color = 'white';
        this.index = this.image_array.length - 1;
        this.image_array.get(this.index)!.nativeElement.style.display = 'block';
        this.dots_array.get(this.index)!.nativeElement.style.color = '#ffb42a';
        return;
      }

      this.image_array.get(this.index)!.nativeElement.style.display = 'none';
      this.dots_array.get(this.index)!.nativeElement.style.color = 'white';
      if (this.index > 0 && this.index < this.image_array.length) {
        this.index--;
      }
      this.image_array.get(this.index)!.nativeElement.style.display = 'block';
      this.dots_array.get(this.index)!.nativeElement.style.color = '#ffb42a';
    });

    this.next.nativeElement.addEventListener('click', () => {
      if (this.index === this.image_array.length - 1) {
        this.image_array.get(this.index)!.nativeElement.style.display = 'none';
        this.dots_array.get(this.index)!.nativeElement.style.color = 'white';
        this.index = 0;
        this.image_array.get(this.index)!.nativeElement.style.display = 'block';
        this.dots_array.get(this.index)!.nativeElement.style.color = '#ffb42a';
        return;
      }

      this.image_array.get(this.index)!.nativeElement.style.display = 'none';
      this.dots_array.get(this.index)!.nativeElement.style.color = 'white';

      if (this.index >= 0 && this.index < this.image_array.length - 1) {
        this.index++;
      }

      this.image_array.get(this.index)!.nativeElement.style.display = 'block';
      this.dots_array.get(this.index)!.nativeElement.style.color = '#ffb42a';
    });
  }
}
