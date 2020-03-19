import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user/user.component';
import { UserManagementRoutingModule } from './user-management-routing.module';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserManagementModule { }
