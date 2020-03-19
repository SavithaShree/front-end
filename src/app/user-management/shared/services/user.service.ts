import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getRoleList() {
    console.log('service');
    return this.http.get(`http://www.mocky.io/v2/5e6b09712d000048008e8307`);
  }

  public getDepartmentList() {
    return this.http.get(`http://www.mocky.io/v2/5e6b5f292d000048008e89c9`);
  }

  public addUser(formData) {
    return this.http.post(`http://localhost:8000/user`, {user: 'TestUser1', roleId: 1});
  }

  public updateUser(formData) {
    return this.http.put(``, formData);
  }

}
