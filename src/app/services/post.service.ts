import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'http://localhost:8080/posts';

  constructor(private http: HttpClient) {}

  get getPosts() {
    return this.http.get(this.url);
  }

  onPost(input: HTMLInputElement) {
    const description = input.value;
    input.value = '';
    return this.http.post(this.url, { description });
  }

  onDelete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

  onPatch(id, input) {
    const description = input.value;
    input.value = '';
    return this.http.patch(`${this.url}/${id}`, { description: description });
  }
}
