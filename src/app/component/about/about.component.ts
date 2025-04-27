import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-about',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './about.component.html',
  styles: ``,
})
export class AboutComponent {}
