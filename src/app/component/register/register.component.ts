import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TUser } from '../../../interface/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private userService: UserService) {}
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  router = new Router();
  onSubmit = () => {
    const user = this.registerForm.value as TUser;
    this.userService.RegisterUser(user).subscribe(
      (user) => {
        alert('đăng ký thành công');
        this.router.navigate(['client/login']);
      },
      (error) => {
        alert(error.error);
      }
    );
  };
}
