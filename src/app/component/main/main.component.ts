import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styles: ``,
})
export class MainComponent {
  image = [
    'image/pexels-armin-rimoldi-5554250.jpg',
    'image/pexels-max-fischer-5212329.jpg',
    'image/pexels-tima-miroshnichenko-5427651.jpg',
    'image/pexels-tima-miroshnichenko-5428155.jpg',
    'image/pexels-tima-miroshnichenko-5427651.jpg',
  ];
  counter = 0;

  nextImage() {
    if (this.counter < this.image.length - 1) {
      this.counter++;
    } else {
      this.counter = 0;
    }
  }
  PreImage() {
    if (this.counter > 0) {
      this.counter--;
    } else {
      this.counter = this.image.length - 1;
    }
  }
  ngOnInit() {
    this.autoSlider();
  }

  autoSlider() {
    setInterval(() => {
      this.nextImage();
    }, 3000);
  }
}
