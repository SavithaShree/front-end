import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department/department.component';
import { DepartmentListingComponent } from './department-listing/department-listing.component';



@NgModule({
  declarations: [DepartmentComponent, DepartmentListingComponent],
  imports: [
    CommonModule
  ]
})
export class DepartmentManagementModule { }
