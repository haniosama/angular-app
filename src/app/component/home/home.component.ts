import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MainComponent } from '../main/main.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {}
