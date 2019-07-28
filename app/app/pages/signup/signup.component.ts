import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  public signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required])
  });
  public userId?: number;

  constructor(private userService: UserService) {}

  public ngOnInit() {}

  public signUp(): void {
    this.userService
      .signUp({
        email: this.signUpForm.value.email,
        password: this.signUpForm.value.password,
        firstName: this.signUpForm.value.firstName,
        lastName: this.signUpForm.value.lastName
      })
      .subscribe(id => (this.userId = id));
  }
}
