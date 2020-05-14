import { Component } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css'],
})
export class NewCourseFormComponent {
  // way 1 to create form

  // form = new FormGroup({
  //   topics: new FormArray([]),
  // });

  // second way

  form;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      topics: fb.array([]),
    });
  }
  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));

    topic.value = '';
  }

  removeTopic(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic);

    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }
}
