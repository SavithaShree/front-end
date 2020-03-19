import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InnerComponent } from '../layout';
import { CategoryComponent } from './category/category.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';


const routes: Routes = [
    {
        path: '',
        component: InnerComponent,
        children: [
            {
                path: 'category/create',
                component: CategoryComponent
            },
            {
                path: 'category/:id/update',
                component: CategoryComponent
            },
            {
                path: 'category/list',
                component: CategoryListingComponent
            }
        ]
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class CategoryManagementRoutingModule { }
