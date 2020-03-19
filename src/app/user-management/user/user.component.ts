import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public userForm: FormGroup;
  public roles;
  public departments;
  public userId;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
    this.initForm();
    this.getRoleList();
    this.getDepartmentList();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      roleId: [1, [Validators.required]],
      userName: ['', [Validators.required]],
      emailAddress: ['', [Validators.required]],
      // departmentId: ['', [Validators.required]],
      // createdBy: ['', [Validators.required]]
    });
  }

  public getRoleList() {
    this.userService.getRoleList().subscribe((res: any) => {
      this.roles = res.data.roles;
    });
  }

  public getDepartmentList() {
    this.userService.getDepartmentList().subscribe((res: any) => {
      this.departments = res.data.departments;
    });
  }

  onSubmit(formData) {
    console.log(this.userForm);
    if (this.userForm.valid) {
      console.log(this.userForm);
      if (!this.userId) {
        this.addUserData(formData);
      } else {
        this.updateUserData(formData);
      }
    }
  }

  addUserData(formData) {
    this.userService.addUser(formData).subscribe((res: any) => {

    });
  }

  updateUserData(formData) {
    this.userService.updateUser(formData).subscribe((res: any) => {

    });
  }

  onCancel() {
    this.userForm.reset();
    this.router.navigate([``]);
  }

}
