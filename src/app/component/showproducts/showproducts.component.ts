import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { zipAll } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-showproducts',
  imports: [FooterComponent, RouterLink],
  templateUrl: './showproducts.component.html',
  styles: '',
})
export class ShowproductsComponent implements OnInit {
  allProduct = JSON.parse(localStorage.getItem('product') || '[]');

  ngOnInit() {
    console.log(this.allProduct);
  }

  deleteProduct(index: number) {
    this.allProduct.splice(index, 1);
    localStorage.setItem('product', JSON.stringify(this.allProduct));
  }
}
