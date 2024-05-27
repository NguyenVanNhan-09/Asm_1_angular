import { Component } from '@angular/core';
import { TProduct } from '../../../interface/product';
import axios from 'axios';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  product: TProduct[] = [];

  async ngOnInit() {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    this.product = data;
  }
}
