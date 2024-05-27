import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TProduct } from '../../../interface/product';
import axios from 'axios';
// import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  route = inject(ActivatedRoute);
  product: TProduct = {} as TProduct;

  // onClick = () => {
  //   console.log(this.route.snapshot.params['slug']);
  // };s

  async ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    this.product = data;
  }
}
