import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent {
  date: number = new Date().getFullYear();

  constructor() {
    this.date = new Date().getFullYear();
  }
}
