import { Component } from '@angular/core';
import { TProduct } from '../../../interface/product';
import axios from 'axios';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  product: TProduct[] = [];
  async ngOnInit() {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    this.product = data;
  }
}
