import { HttpClient } from '@angular/common/http';

export class DataService {
  constructor(private url, private http: HttpClient) {}

  get getAll() {
    return this.http.get(this.url);
  }

  create(input: HTMLInputElement) {
    const description = input.value;
    input.value = '';
    return this.http.post(this.url, { description });
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

  update(id, input) {
    const description = input.value;
    input.value = '';
    return this.http.patch(`${this.url}/${id}`, { description: description });
  }
}
