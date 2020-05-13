import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mosh-angular-practice';

  // email nabayad private bashe
  email = 'me@example.com';

  lorem =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel minus sed laborum nemo odit dolores architecto reiciendis tempore voluptates voluptas quae accusantium quis iusto quibusdam laboriosam praesentium illo, illum molestiae.';

  onEnter = () => {
    console.log(this.email);
  };

  @Output() post = {
    isLike: true,
  };

  viewMode = 'map';

  task = {
    post: 'name',

    assignee: {
      name: 'trello',
    },
  };
}
