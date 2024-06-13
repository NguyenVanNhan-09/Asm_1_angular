import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../product.service';
import { TCategory } from '../../../interface/category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  router = new Router();
  category: TCategory[] = [];
  constructor(private productService: ProductService) {}
  searchForm = new FormGroup({
    keywords: new FormControl(''),
  });
  onSearch() {
    const keywords = this.searchForm.controls.keywords.value;
    this.router.navigate(['client/search'], {
      queryParams: { keywords: keywords },
    });
  }
  ngOnInit() {
    this.productService.Get_Category().subscribe((data) => {
      this.category = data;
    });
  }

  // onItemClick(item: number | string) {
  //   this.router.navigate(['client/product-category'], {
  //     queryParams: { category: item },
  //   });
  // }
}
