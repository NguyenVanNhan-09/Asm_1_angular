import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TProduct } from '../../../interface/product';
import axios from 'axios';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  productDetail: TProduct = {} as TProduct;
  product: TProduct[] = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  async ngOnInit() {
    this.productByDetail(), this.productByCategory();
  }
  productByDetail = () => {
    const productId = this.route.snapshot.params['id'];
    this.productService.Get_Product_ById(productId).subscribe((data) => {
      this.productDetail = data;
    });
  };
  productByCategory = () => {
    this.productService.Get_All_Product().subscribe((data) => {
      console.log(data);
      this.product = data;
    });
  };
}
