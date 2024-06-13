import { ProductService } from './../../product.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TProduct } from '../../../interface/product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  product: TProduct[] = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  ngOnInit() {
    const keywords = this.route.snapshot.queryParams['keywords'];
    this.productService.Search(String(keywords)).subscribe((data) => {
      this.product = data;
    });
  }
}
