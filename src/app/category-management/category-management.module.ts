import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { CategoryComponent } from './category/category.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { CategoryManagementRoutingModule } from './category-management-routing.module';



@NgModule({
  declarations: [CategoryComponent, CategoryListingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CategoryManagementRoutingModule,
    AngularFontAwesomeModule
  ],
  exports: [AngularFontAwesomeModule]
})
export class CategoryManagementModule { }
