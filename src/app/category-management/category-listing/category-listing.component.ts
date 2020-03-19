import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.css']
})
export class CategoryListingComponent implements OnInit {

  public tableData;
  public columns;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategoryList();
    this.setValues();
  }

  public setValues() {
    this.columns = [
      { fieldName: 'sNo', heading: 'SNo.' },
      { fieldName: 'name', heading: 'Category Name'},
      { fieldName: 'actions', heading: 'Actions'}
    ];
  }

  public getCategoryList() {
    this.categoryService.getCategoryList().subscribe((res: any) => {
      console.log(typeof res);
      this.tableData = res;
      console.log(this.tableData);
    });
  }

  public editData() {
    console.log('Working');
  }

}
