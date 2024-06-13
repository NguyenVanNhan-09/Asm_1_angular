import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TProduct } from '../../../../interface/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../product.service';
import { TCategory } from '../../../../interface/category';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css',
})
export class UpdateProductComponent {
  product: TProduct[] = [];
  category: TCategory[] = [];

  router = new Router();
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private messageService: MessageService
  ) {}
  productID = this.route.snapshot.params['id'];

  productForm = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(10),
    description: new FormControl(''),
    category: new FormControl(''),
  });

  ngOnInit() {
    this.getProduct();
    this.getCategory();
  }

  getProduct = () => {
    this.productService.Get_Product_ById(this.productID).subscribe((data) => {
      this.productForm.controls.title.setValue(data.title);
      this.productForm.controls.price.setValue(data.price);
      this.productForm.controls.description.setValue(data.description);
      this.productForm.controls.category.setValue(data.category);
    });
  };
  getCategory = () => {
    this.productService.Get_Category().subscribe((data) => {
      this.category = data;
    });
  };

  onSubmit = () => {
    const data = this.productForm.value as TProduct;
    this.productService
      .Update_Product(this.productID, data)
      .subscribe((data) => {
        alert('sửa thành công');
        // this.showSuccess();
        this.router.navigate(['admin/dashboad']);
      });
  };
  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    });
  }
}
