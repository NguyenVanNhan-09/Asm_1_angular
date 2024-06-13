import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { TUser } from '../../../interface/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private userService: UserService) {}
  loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  router = new Router();
  onSubmit = () => {
    this.userService.UserLogin(this.loginform.value as TUser).subscribe(
      (data) => {
        alert('Đăng nhập thành công');
        this.router.navigate(['client/product-list']);
      },
      (error) => {
        alert(error.error);
      }
    );
  };
}
