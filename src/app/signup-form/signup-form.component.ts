import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
        UsernameValidators.cannotContainSpace,
      ],
      UsernameValidators.shouldBeUnique
    ),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  });

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  login() {
    let isValid = this.form.valid;

    console.log(isValid);

    if (!isValid) this.form.setErrors({ invalidLogin: true });
  }
}
