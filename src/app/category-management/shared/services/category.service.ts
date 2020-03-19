import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public addCategory(formData) {
    return this.http.post(`http://localhost:8000/category`, formData);
  }

  public updateCategory(formData) {
    return this.http.put(``, formData);
  }

  public getCategoryList() {
    return this.http.get(`http://localhost:8000/categories`);
  }
}
