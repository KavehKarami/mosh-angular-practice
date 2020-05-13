import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  constructor() {}

  onChange = (target) => {
    console.log(target);
  };

  onSubmit(f) {
    console.log(f.value.firstName);
    alert(`your First Name is: ${f.value.firstName}`);
  }
}
