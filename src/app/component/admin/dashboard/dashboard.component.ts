import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../product.service';
import { TCategory } from '../../../../interface/category';
import { TProduct } from '../../../../interface/product';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  display: Boolean = false;
  constructor(
    private productService: ProductService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}
  productForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(6)]),
    image: new FormControl('', [Validators.required]),
    price: new FormControl(100, [Validators.required, Validators.min(100)]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  });
  category: TCategory[] = [];
  product: TProduct[] = [];
  ngOnInit() {
    this.getProduct();
    this.getCategory();
  }
  getProduct = () => {
    this.productService.Get_All_Product().subscribe((data) => {
      this.product = data;
    });
  };
  getCategory = () => {
    this.productService.Get_Category().subscribe((data) => {
      this.category = data;
    });
  };

  onSubmit = () => {
    this.productService
      .Add_Product(this.productForm.value as TProduct)
      .subscribe((data) => {
        console.log(data);
        this.showSuccess();
        this.product.push(data as TProduct);
        this.display = !this.display;
      });
  };

  onDelete = (id: any, event: Event) => {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this record?',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      accept: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Confirmed',
          detail: 'Record deleted',
          life: 3000,
        });
        this.productService.Delete_Product(id).subscribe((data) => {
          this.product = this.product.filter((item) => item.id !== id);
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
          life: 3000,
        });
      },
    });
    // const isConfirm = confirm('Are you sure');
    // if (isConfirm) {
    //   this.productService.Delete_Product(id).subscribe((data) => {
    //     alert('delete successfully');
    //     this.product = this.product.filter((item) => item.id !== id);
    //   });
    // }
  };

  showSuccess = () => {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    });
  };
}
