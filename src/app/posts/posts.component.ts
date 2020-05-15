import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { PostService } from './../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts;

  // private url = 'http://localhost:8080/posts';

  // constructor(private http: HttpClient) {}

  // ngOnInit() {
  //   this.getPosts();
  // }

  // getPosts() {
  //   this.http.get(this.url).subscribe((response) => {
  //     this.posts = response;
  //   });
  // }

  // onDelete(post) {
  //   this.http.delete(`${this.url}/${post.id}`).subscribe((response) => {
  //     this.getPosts();
  //   });
  // }

  // onPost(element: HTMLInputElement) {
  //   const description = element.value;
  //   element.value = '';
  //   this.http.post(this.url, { description }).subscribe((response) => {
  //     this.getPosts();
  //   });
  // }

  // onPatch(post, input: HTMLInputElement) {
  //   const description = input.value;
  //   input.value = '';
  //   this.http
  //     .patch(`${this.url}/${post.id}`, {
  //       description: description,
  //     })
  //     .subscribe((response) => {
  //       this.getPosts();
  //     });
  // }

  constructor(private service: PostService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.service.getAll.subscribe(
      (response) => {
        this.posts = response;
      }
      // (error) => {
      //   console.log(error);
      // }
    );
  }

  onPost(element: HTMLInputElement) {
    this.service.create(element).subscribe(
      (response) => {
        this.getPosts();
      }
      // (error) => {
      //   console.log(error);
      // }
    );
  }

  onDelete(post) {
    this.service.delete(post.id).subscribe(
      (response) => {
        this.getPosts();
      },
      (error: Response) => {
        if (error.status === 404) alert('this post has been already deleted');
        else throw error;
      }
    );
  }

  onPatch(post, input: HTMLInputElement) {
    this.service.update(post.id, input).subscribe(
      (response) => {
        this.getPosts();
      }
      // (error) => {
      //   console.log(error);
      // }
    );
  }
}
