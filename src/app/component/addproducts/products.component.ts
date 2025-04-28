import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [
    FooterComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './products.component.html',
  styles: '',
})
export class ProductsComponent implements OnInit {
  addProduct!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.addProduct = new FormGroup({
      productName: new FormControl('', [Validators.required]),
      Description: new FormControl('', [Validators.required]),
      imageUrl: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(https?:\/\/|\.\/|\.\.\/)?[\w\-\/:%]+?\.(jpg|jpeg|png|webp)(\?.*)?$/i
        ),
      ]),
      productRate: new FormControl('', [Validators.required]),
    });
  }

  addProducts() {
    console.log(this.addProduct.value);
    const { productName, Description, imageUrl, productRate } =
      this.addProduct.value;
    const product = JSON.parse(localStorage.getItem('product') || '[]');

    product.push({ productName, Description, imageUrl, productRate });

    localStorage.setItem('product', JSON.stringify(product));
    alert('product add successfully');
    console.log(this.addProduct);
    this.router.navigate(['/showproducts']);
    this.addProduct.reset();
  }
}
