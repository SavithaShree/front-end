import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../shared/services/category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categoryForm: FormGroup;
  public categoryId;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.initForm();
    this.getCategoryId();
    console.log('categoryId', this.categoryId);
    if (this.categoryId) {
      this.getCategoryById();
    }
  }

  initForm() {
    this.categoryForm = this.formBuilder.group({
      roleId: [1, [Validators.required]],
      categoryName: ['', [Validators.required]],
    });
  }

  getCategoryId() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.categoryId = params.get('id');
    });
  }

  getCategoryById() {

  }

  onSubmit(formData) {
    console.log(this.categoryForm);
    if (this.categoryForm.valid) {
      console.log(this.categoryForm);
      if (!this.categoryId) {
        this.addCategoryData(formData);
      } else {
        this.updateCategoryData(formData);
      }
    }
  }

  addCategoryData(formData) {
    this.categoryService.addCategory(formData).subscribe((res: any) => {
      console.log(res);
    });
  }

  updateCategoryData(formData) {
    this.categoryService.updateCategory(formData).subscribe((res: any) => {
      console.log(res);
    });
  }

  onCancel() {
    this.categoryForm.reset();
    this.router.navigate([``]);
  }


}
