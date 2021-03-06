import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(protected router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.router.navigate(['/httpservice'], {
      queryParams: { page: 1, order: 'newest' },
    });
  }
}
