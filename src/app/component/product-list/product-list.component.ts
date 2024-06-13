import { Component } from '@angular/core';
import { TProduct } from '../../../interface/product';
import axios from 'axios';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  product: TProduct[] = [];

  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.Get_All_Product().subscribe((data) => {
      this.product = data;
    });
  }
}
