import { ProductService } from './../../product.service';
import { Component } from '@angular/core';
import { TProduct } from '../../../interface/product';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  product: TProduct[] = [];
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    const categoryId = this.route.snapshot.params['id'];
    this.productService.Get_All_Product().subscribe((data) => {
      this.product = data.filter((product: any) => {
        return product.category === categoryId;
      });
    });
  }
}
