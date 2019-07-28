import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LogInComponent implements OnInit {
  public logInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });
  public user?: User;

  constructor(private userService: UserService) {}

  public ngOnInit() {
    this.user = this.userService.user;
  }

  public logIn(): void {
    this.userService
      .logIn({
        email: this.logInForm.value.email,
        password: this.logInForm.value.password
      })
      .subscribe(_ => {
        this.user = this.userService.user;
      });
  }
}
