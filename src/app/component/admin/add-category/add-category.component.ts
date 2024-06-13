import { Component } from '@angular/core';
import { TCategory } from '../../../../interface/category';
import { ProductService } from '../../../product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css',
})
export class AddCategoryComponent {
  category: TCategory[] = [];
  constructor(
    private productService: ProductService,
    private messageService: MessageService
  ) {}
  categoryForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });
  // router = new Router();
  onSubmit = () => {
    this.productService
      .Add_Category(this.categoryForm.value as TCategory)
      .subscribe((data) => {
        if (data) {
          this.showSuccess();
          // this.router.navigate(['admin/dashboad']);
        }
      });
  };
  showSuccess = () => {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    });
  };
}
