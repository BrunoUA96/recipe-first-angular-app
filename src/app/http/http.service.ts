import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getDataMethod() {
    return this.http.get(
      'https://6103c28879ed680017482639.mockapi.io/recipe-app'
    );
  }
}
