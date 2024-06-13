import { Component, inject } from '@angular/core';
import { TProduct } from '../../../interface/product';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  route = inject(ActivatedRoute);
  product: TProduct = {} as TProduct;
  constructor(private productService: ProductService) {}

  // onClick = () => {
  //   console.log(this.route.snapshot.params['slug']);
  // };

  async ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    // const { data } = await axios.get(
    //   `https://fakestoreapi.com/products/${productId}`
    // );
    // this.product = data;
    this.productService.Get_Product_ById(productId).subscribe((data) => {
      this.product = data;
    });
  }
}
